const OFFSET_SIZE = 0.3;

export class ExtSseq extends EventEmitter {
    constructor(moduleName, maxDegree) {
        super();

        this.name = moduleName;
        this.maxDegree = maxDegree;
        this.initial_page_idx = 0;
        this.min_page_idx = 0;
        this.class_scale = 0.5;
        this.classes = new StringifyingMap();
        this.structlines = new StringifyingMap();
        this.structlineTypes = new Set();
        this.differentials = new StringifyingMap();
        this.differentialColors = [undefined, undefined, "cyan", "red", "green"];
        this.page_list = [2];

        // The largest x/y of the products we have. This is useful for figuring which structlines to draw.
        this.maxMultX = 0;
        this.maxMultY = 0;
        this.maxDiffPage = 0;

        this.defaultNode = new Node();
        this.defaultNode.hcolor = "red";
        this.defaultNode.fill = true;
        this.defaultNode.stroke = true;
        this.defaultNode.shape = Shapes.circle;
        this.defaultNode.size = 6;

        this.webSocket = new WebSocket(`ws://${window.location.host}/ws`);
        this.webSocket.onmessage = (e) => {
            let data = JSON.parse(e.data);
//            try {
                this["_" + data.command](data);
//            } catch (err) {
//                console.log("Unable to process message");
//                console.log(data);
//                console.log(`Error: ${err}`);
//            }
      };

        this.webSocket.onopen = () => {
            this.send({
                receiver: "resolver",
                command: "resolve",
                algebra : "adem",
                module : moduleName,
                maxDegree : maxDegree
            });
        };
    }

    send(data) {
        this.webSocket.send(JSON.stringify(data));
    }

    addDifferential(r, source_x, source_y, source, target) {
        this.send({
            receiver: "sseq",
            command: "add_differential",
            r: r,
            x: source_x,
            y: source_y,
            source: source,
            target: target
        });
    }

    resolveFurther() {
        let newmax = parseInt(prompt("New maximum degree", this.maxDegree + 10).trim());
        if (newmax <= this.maxDegree) {
            return;
        }
        this.webSocket.send(JSON.stringify({
            receiver: "resolver",
            command: "resolve_further",
            maxDegree: newmax
        }));

    }
    _resolving(data) {
        this.minDegree = data.minDegree;
        this.maxDegree = data.maxDegree;
        this.xRange = [this.minDegree, this.maxDegree];
        this.yRange = [0, Math.ceil((this.maxDegree - this.minDegree)/2) + 1];
        this.initialxRange = [this.minDegree, this.maxDegree];
        this.initialyRange = [0, Math.ceil((this.maxDegree - this.minDegree)/2) + 1];

        this.emit("initialized");
    }

    _setPageList(data) {
        this.page_list = data.page_list;
    }

    _setClass(data) {
        let x = data.x;
        let y = data.y;
        let classes = data.classes;

        // classes is a list, and each member of the list corresponds to a
        // page. Each page itself is a list of classes. We turn the raw class
        // data into nodes.

        classes.forEach(l => {
            for (let i of l.keys()) {
                let node = new Node(this.defaultNode);
                node.x = data.x;
                node.y = data.y;
                node.idx = i;
                node.total_classes = l.length;
                node.data = l[i];
                l[i] = node;
            }
        });
        // Insert empty space at r = 0, 1
        classes.splice(0, 0, undefined, undefined);
        this.classes.set([x, y], classes);

        this.emit("update");
    }

    _setDifferential(data) {
        let x = data.x;
        let y = data.y;

        let differentials = [];
        for (let [page, matrix] of data.differentials.entries()) {
            page = page + 2;
            this.maxDiffPage = Math.max(this.maxDiffPage, page);

            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] != 0) {
                        let line = new Differential(this, [x, y, i], [x - 1, y + page, j], page);
                        if (this.differentialColors[page]) {
                            line.color = this.differentialColors[page];
                        }

                        if (!differentials[page])
                            differentials[page] = [];
                        differentials[page].push(line);
                    }
                }
            }
        }

        this.differentials.set([x, y], differentials);
        this.emit("update");
    }

    _setStructline(data) {
        console.log("Setting structline: ")
        console.log(data);
        let x = data.x;
        let y = data.y;

        let structlines = [];
        for (let mult of data.structlines) {
            if (!this.structlineTypes.has(mult["name"])) {
                // This sort-of defeats the purpose of using a Set, but we want
                // to emit an event when we have a new structline
                this.structlineTypes.add(mult["name"]);
                this.emit("new-structline");
            }

            for (let [page, matrix] of mult["matrices"].entries()) {
                page = page + 2;
                let name = mult["name"];
                let multX = mult["mult_x"];
                let multY = mult["mult_y"];

                for (let i = 0; i < matrix.length; i++) {
                    for (let j = 0; j < matrix[i].length; j++) {
                        if (matrix[i][j] != 0) {
                            let line = new Structline(this, [x, y, i], [x + multX, y + multY, j]);
                            line.setProduct(name);
                            if (!structlines[page])
                                structlines[page] = [];
                            structlines[page].push(line);
                        }
                    }
                }
                this.maxMultX = Math.max(this.maxMultX, multX);
                this.maxMultY = Math.max(this.maxMultY, multY);
            }
        }

        this.structlines.set([x, y], structlines);
        this.emit("update");
    }

    _complete(data) {
        this.emit("complete");
    }

    getDrawnElements(page, xmin, xmax, ymin, ymax) {
        // We are bad and can't handle page ranges.
        if (Array.isArray(page)) {
            page = page[0];
        }

        let displayClasses = [];
        for (let x = xmin; x <= xmax; x++) {
            for (let y = ymin; y <= ymax; y++) {
                let result = this.classes.get([x, y]);
                if (!result) continue;

                if (page >= result.length)
                    result = result[result.length - 1];
                else
                    result = result[page];

                for (let node of result) {
                    displayClasses.push(node);
                }
            }
        }

        let displayEdges = [];

        let xbuffer = Math.max(this.maxMultX, 1);
        let ybuffer = Math.max(this.maxMultY, this.maxDiffPage);
        for (let x = xmin - xbuffer; x <= xmax + xbuffer; x++) {
            for (let y = ymin - ybuffer; y <= ymax + ybuffer; y++) {
                let edges = this.getEdges(x, y, page);
                for (let edge of edges) {
                    edge.source_node = this.getClasses(x, y, page)[edge.source[2]];
                    edge.target_node = this.getClasses(edge.target[0], edge.target[1], page)[edge.target[2]];

                    if (edge.source_node && !displayClasses.includes(edge.source_node)) {
                        displayClasses.push(edge.source_node);
                    }
                    if (edge.target_node && !displayClasses.includes(edge.target_node)) {
                        displayClasses.push(edge.target_node);
                    }
                    displayEdges.push(edge);
                }
            }
        }

        return [displayClasses, displayEdges];
    }

    getEdges(x, y, page) {
        let differentials = this.getDifferentials(x, y, page);
        let structlines = this.getStructlines(x, y, page);

        if (!differentials) {
            differentials = [];
        }
        if (!structlines) {
            structlines = [];
        }
        return differentials.concat(structlines);
    }

    getDifferentials(x, y, page) {
        let result = this.differentials.get([x, y]);
        if (!result) return undefined;
        return result[page];
    }

    getStructlines(x, y, page) {
        let result = this.structlines.get([x, y]);
        if (!result) return undefined;
        if (result.length == 2) return undefined;

        if (page >= result.length) page = result.length - 1;
        return result[page];
    }

    getClasses(x, y, page) {
        let result = this.classes.get([x, y]);
        if (!result) return undefined;

        if (page >= result.length) page = result.length - 1;

        return result[page];
    }

    _getXOffset(node, page) {
        return (node.idx - (node.total_classes - 1)/2) * OFFSET_SIZE;
    }

    _getYOffset(node, page) {
        return 0;
    }
}
