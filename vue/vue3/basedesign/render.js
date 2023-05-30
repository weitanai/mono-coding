function render(obj, root) {
    const el = document.createElement(obj.tag);
    if (typeof obj.children === "string") {
        const text = document.createTextNode(obj.children);
        el.appendChild(text);
    } else if (obj.children) {
        for (const item of obj.children) {
            render(item, el);
        }
    }
    root.appendChild(el);
}