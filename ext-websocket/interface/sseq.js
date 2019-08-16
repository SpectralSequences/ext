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
        this.edges = new StringifyingMap();
        this.page_list = [2];

        // The largest x/y of the products we have. This is useful for figuring which edges to draw.
        this.maxMultX = 0;
        this.maxMultY = 0;

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
                target: "resolver",
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

    _resolving(data) {
        this.minDegree = data.minDegree;
        this.maxDegree = data.maxDegree;
        this.xRange = [this.minDegree, this.maxDegree];
        this.yRange = [0, Math.ceil((this.maxDegree - this.minDegree)/2) + 1];
        this.initialxRange = [this.minDegree, this.maxDegree];
        this.initialyRange = [0, Math.ceil((this.maxDegree - this.minDegree)/2) + 1];

        this.emit("initialized");
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
                l[i] = new Node(this.defaultNode);
                l[i].x = data.x;
                l[i].y = data.y;
                l[i].idx = i;
                l[i].total_classes = l.length;
            }
        });
        // Insert empty space at r = 0, 1
        classes.splice(0, 0, undefined, undefined);
        this.classes.set([x, y], classes);

        let structlines = data.structlines;
        let edges = [];
        for (let page of structlines) {
            edges.push([]);
            for (let mult of page) {
                let name = mult["name"];
                let multX = mult["mult_x"];
                let multY = mult["mult_y"];
                let matrix = mult["matrix"];

                for (let i = 0; i < matrix.length; i++) {
                    for (let j = 0; j < matrix[i].length; j++) {
                        if (matrix[i][j] != 0) {
                            let line = new Structline(this, [x, y, i], [x + multX, y + multY, j]);
                            line.setProduct(name);
                            edges[edges.length - 1].push(line);
                        }
                    }
                }
                this.maxMultX = Math.max(this.maxMultX, multX);
                this.maxMultY = Math.max(this.maxMultY, multY);
            }
        }
        edges.splice(0, 0, undefined, undefined);
        this.edges.set([x, y], edges);

        if (x == 0 && y == 0) {
            console.log(data);
        }
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

                if (page >= result.length) page = result.length - 1;

                for (let node of result[page]) {
                    displayClasses.push(node);
                }
            }
        }
        let displayEdges = [];
        for (let x = xmin - this.maxMultX; x <= xmax + this.maxMultX; x++) {
            for (let y = ymin - this.maxMultY; y <= ymax + this.maxMultY; y++) {
                let edges = this.getEdges(x, y, page);
                if (edges === undefined) {
                    continue;
                }
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
        let result = this.edges.get([x, y]);
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
