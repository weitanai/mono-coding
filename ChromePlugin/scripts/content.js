

function getSelectedText() {
    if (window.getSelection) {
        return window.getSelection();
    } else if (document.selection) {
        return document.selection.createRange();
    }
    return "";
}
document.addEventListener("mouseup", function (e) {
    const selectObj = getSelectedText();
    const text = selectObj.text || selectObj.toString();
    const {top} = e.target.getBoundingClientRect();
    createEle(text, e.offsetX, top - 20 );

    console.log(e.target, top, "target");
});

function createEle(text, x, y) {
    const popEle = document.createElement("div");
    popEle.style.position = "fixed";
    popEle.style.left = x + "px";
    popEle.style.top = y + "px";
    popEle.innerHTML = text;
    popEle.style.background = "yellow";

    document.body.appendChild(popEle);
}