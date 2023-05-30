function append(demo = "", file = "") {
    const extra = "something to search";
    if (demo && file) return `/${demo}/${file}/${extra}`;
    if (demo && !file) return `/${demo}/${extra}`;
    if (!demo && file) return `/?file=${file}&${extra}`;
    return extra;
}

// nextf generation
function append1(demo = "", file = "") {
    let pathname = "";
    const search = "something to search";
    if (demo) pathname += `${demo}/`;
    if (file) {
        search += `&file=${decodeURIComponent(file)}`;
    }
    return pathname + "?" + search;
}

