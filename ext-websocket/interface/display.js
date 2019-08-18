
const STATE_ADD_DIFFERENTIAL = 1;
const STATE_QUERY_TABLE = 2;
 

function rowToKaTeX(m) {
    return Interface.renderMath(rowToLaTeX(m));
}

function matrixToKaTeX(m) {
    return Interface.renderMath("\\begin{bmatrix}" + m.map(x => x.join("&")).join("\\\\") + "\\end{bmatrix}");
}

function rowToLaTeX(m) {
    return "\\begin{bmatrix}" + m.join("&") + "\\end{bmatrix}";
}

class StructlinePanel extends Panel.Panel {
    constructor(parentContainer, display) {
        super(parentContainer, display);
    }

    show() {
        this.container.style.removeProperty("display");
        this.clear();

        this.newGroup();

        let types = Array.from(this.display.sseq.structlineTypes).sort();
        for (let type of types) {
            let o = document.createElement("div");
            o.className = "form-row mb-2";
            o.style.width = "100%";
            this.currentGroup.appendChild(o);

            let l = document.createElement("label");
            l.className = "col-form-label mr-sm-2";
            l.innerHTML = Interface.renderMath(type);
            o.appendChild(l);

            let s = document.createElement("span");
            s.style.flexGrow = 1;
            o.appendChild(s);

            let i = document.createElement("input");
            i.setAttribute("type", "checkbox");
            i.checked = !this.display.hiddenStructlines.has(type);
            o.appendChild(i);

            i.addEventListener("change", (e) => {
                if (i.checked) {
                    if (this.display.hiddenStructlines.has(type))
                        this.display.hiddenStructlines.delete(type)
                } else {
                    this.display.hiddenStructlines.add(type)
                }
                this.display.update();
            });
        }

        this.addButton("Add", () => { window.unitDisplay.openModal(); }, { "tooltip": "Add product to display" });
    }
}

class ClassPanel extends Panel.Panel {
    constructor(parentContainer, display) {
        super(parentContainer, display);
    }

    show() {
        this.container.style.removeProperty("display");
        this.container.className = "text-center";
        this.clear();

        let x = this.display.selected.x;
        let y = this.display.selected.y;
        let page = this.display.page;
        let sseq = this.display.sseq;

        this.newGroup();
        let classes = sseq.getClasses(x, y, page);

        this.addHeader("Classes");
        this.addLine(classes.map(x => rowToKaTeX(x.data)).join("<br />"));

        this.addHeader("Differentials");
        let trueDifferentials = sseq.trueDifferentials.get([x, y]);
        if (trueDifferentials && trueDifferentials.length > page) {
            for (let [source, target] of trueDifferentials[page]) {
                this.addLine(Interface.renderMath(`d_${page}(${rowToLaTeX(source)}) = ${rowToLaTeX(target)}`));
            }
        }
        this.addButton("Add", () => this.display.state = STATE_ADD_DIFFERENTIAL, { shortcuts: ["d"]});

        this.addHeader("Permanent Classes");
        let permanentClasses = sseq.permanentClasses.get([x, y]);
        if (permanentClasses.length > 0) {
            this.addLine(permanentClasses.map(rowToKaTeX).join("<br />"));
        }
        this.addButton("Add", () => {
            this.display.sseq.addPermanentClassInteractive(this.display.selected);
        }, { shortcuts: ["p"]});

        this.addHeader("Products");
        let products = sseq.getProducts(x, y, page);
        if (products) {
            for (let prod of products) {
                this.addLine(`${Interface.renderMath(prod.name)}: ${matrixToKaTeX(prod.matrix)}`);
            }
        }
    }

    addHeader(header) {
        let node = document.createElement("h5");
        node.className = "card-title";
        node.innerHTML = header;
        this.addObject(node);
    }

    addLine(html) {
        let node = document.createElement("div");
        node.style = "padding: 0.75rem 0";
        node.innerHTML = html;
        this.addObject(node);
    }

}

export class MainDisplay extends SidebarDisplay {
    constructor(container, sseq) {
        super(container, sseq);

        this.selected = null;
        this.tooltip = new Tooltip(this);
        this.on("mouseover", this._onMouseover.bind(this));

        this.on("mouseout", this._onMouseout.bind(this));

        this.on("click", this.__onClick.bind(this));

        Mousetrap.bind('left',  this.previousPage);
        Mousetrap.bind('right', this.nextPage);

        this.structlinePanel = new StructlinePanel(this.sidebar.main_div, this);
        this.sidebar.addPanel(this.structlinePanel);
        this.sidebar.currentPanel = this.structlinePanel;

        this.classPanel = new ClassPanel(this.sidebar.main_div, this);
        this.sidebar.addPanel(this.classPanel);

        this.sidebar.footer.newGroup();

        this.sidebar.footer.currentGroup.style.textAlign = "center";
        this.runningSign = document.createElement("p");
        this.runningSign.className = "card-text"
        this.runningSign.innerHTML = "Running...";
        this.sidebar.footer.addObject(this.runningSign);

        this.sidebar.footer.addButton("Query table", () => this.state = STATE_QUERY_TABLE);
        this.sidebar.footer.addButton("Resolve further", this.sseq.resolveFurther.bind(this.sseq));
        this.sidebar.footer.addButton("Download SVG", () => this.downloadSVG("sseq.svg"));

        sseq.on("update", this.sidebar.showPanel.bind(this.sidebar));
    }

    _onMouseover(node) {
        this.tooltip.setHTML(`(${node.x}, ${node.y})`);
        this.tooltip.show(node.canvas_x, node.canvas_y);
    }

    __onClick(node, e) {
        if (this.state == STATE_QUERY_TABLE) {
            let x = Math.round(this.xScale.invert(e.clientX));
            let y = Math.round(this.yScale.invert(e.clientY));
            this.sseq.queryTable(x, y);
            this.state = null;
            return;
        }

        if (!node) {
            this._unselect();
            return;
        }

        switch (this.state) {
            case STATE_ADD_DIFFERENTIAL: 
                if (this.selected) {
                    this.sseq.addDifferentialInteractive(this.selected, node);
                    break;
                }
            default:
                this._unselect();
                this.selected = node;
                let x = node.x;
                let y = node.y;

                for (let c of this.sseq.getClasses(x, y, this.page)) {
                    c.highlight = true;
                }
        }

        this.update();

        this.sidebar.showPanel(this.classPanel);
    }

    _onMouseout() {
        if (this.selected) this.selected.highlight = true;
        this.tooltip.hide();
    }

    _unselect() {
        if (this.selected === null) return;

        let x = this.selected.x;
        let y = this.selected.y;

        for (let c of this.sseq.getClasses(x, y, this.page)) {
            c.highlight = false;
        }

        this.selected = null;
        this.state = null;

        this.sidebar.showPanel(this.structlinePanel);

        this._drawSseq(this.context);
    }

    setSseq(sseq) {
        super.setSseq(sseq);

        sseq.on("new-structline", () => this.sidebar.showPanel());
    }
}

export class UnitDisplay extends Display {
    constructor(container, sseq) {
        super(container, sseq);

        this.tooltip = new Tooltip(this);
        this.on("mouseover", (node) => {
            this.tooltip.setHTML(`(${node.x}, ${node.y})`);
            this.tooltip.show(node.canvas_x, node.canvas_y);
        });

        this.on("mouseout", () => {
            if (this.selected) this.selected.highlight = true;
            this.tooltip.hide();
        });

        document.querySelectorAll(".close-modal").forEach((c) => {
            c.addEventListener("click", this.closeModal.bind(this));
        });

        document.querySelector("#modal-ok").addEventListener("click", () => {
            let name = prompt("Name for product");
            webSocket.send(JSON.stringify({
                recipient : "resolver",
                command : "add_product",
                s: this.selected.y,
                t: this.selected.x + this.selected.y,
                idx: this.selected.idx,
                name: name
            }));

            this.closeModal();
        });

        document.querySelector("#modal-more").addEventListener("click", () => this.sseq.resolveFurther());

        this.on("click", this.__onClick.bind(this));
    }

    openModal() {
        this._unselect();
        this.sseq.resolveFurther(10);
        document.querySelector("#overlay").style.removeProperty("display");
        document.querySelector("#modal-ok").disabled = true;
        let dialog = document.querySelector("#modal-dialog");
        dialog.classList.add("modal-shown");
    }

    closeModal() {
        document.querySelector("#overlay").style.display = "none";
        let dialog = document.querySelector("#modal-dialog");
        dialog.classList.remove("modal-shown");
        this._unselect();
    }

    __onClick(node, e) {
        if (!node) {
            this._unselect();
            return;
        }

        this._unselect();
        this.selected = node;
        document.querySelector("#modal-ok").disabled = false;
    }

    _unselect() {
        if (!this.selected) return;
        this.selected.highlight = false;
        this.selected = null;
        this.update();
        document.querySelector("#modal-ok").disabled = true;
    }
}
