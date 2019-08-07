// Read URL to see if module is specified.
let url = new URL(document.location);
let params = {};
for(let [k,v] of url.searchParams.entries()){
    params[k] = v;
}

if (!params.module) {
    console.log("Displaying homepage");
    console.log(document.querySelector("#home"));
    document.querySelector("#home").style.removeProperty("display");

    HTMLCollection.prototype.forEach = Array.prototype.forEach;
    let sections = document.querySelector("#home").getElementsByTagName("section");

    sections.forEach(n => {
        n.children[1].children.forEach(a => {
            a.innerHTML = Interface.renderLaTeX(a.innerHTML);
            a.href = `?module=${a.getAttribute("data")}&degree=50`;
        });
    });
} else {
    window.display = new EditorDisplay("#main");
    window.sseq = new Sseq();

    let degree = params.degree ? parseInt(params.degree) : 50;
    sseq.xRange = [0, degree];
    sseq.yRange = [0, Math.ceil(degree/3)];
    sseq.initialxRange = [0, degree];
    sseq.initialyRange = [0, Math.ceil(degree/3)];
    sseq.offset_size = 0.1;
    sseq.class_scale = 0.5;

    display.setSseq(sseq);

    let eventSource = new EventSource("/request/resolve/" + params.module + "/adem/" + degree);

    let opened = false;
    eventSource.addEventListener("open", function(e) {
        // If the connection dropped, let it be.
        if (!opened) {
            opened = true;
        } else {
            eventSource.close();
        }
    });

    eventSource.addEventListener("addClass", function(e) {
        let d = JSON.parse(e.data);
        sseq.addClass(d.t - d.s, d.s);
    });

    eventSource.addEventListener("addStructline", function(e) {
        let d = JSON.parse(e.data);
        let source = sseq.getClassesInDegree(d.source_t - d.source_s, d.source_s)[d.source_idx];
        let target = sseq.getClassesInDegree(d.target_t - d.target_s, d.target_s)[d.target_idx];

        sseq.addStructline(source, target, d.name);
    });

    eventSource.addEventListener("done", function(e) {
        eventSource.close();
    });
}
