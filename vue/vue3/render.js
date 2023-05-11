function createElement(tag) {
    console.log(`create element ${tag}`);
    return document.createElement(tag);
}

function setElementText(tag, text) {
    console.log(`set ${JSON.stringify(tag)} text: ${text} `);
    tag.textContent = text;
}

function insert(el, parent, anchor = null) {
    console.log(`set ${JSON.stringify(el)} add ${JSON.stringify(parent)}`);
    parent.insertBefore(el, anchor)
}


function shouldSetAsProps(el, key, val) {
    if (key === 'form' && el.tagName === 'INPUT') return false;
    return key in el;
}
function patchProps(el, key, preVal, nextVal) {
    if (shouldSetAsProps(el, key, null, vnode.props[key])) {
        const type = typeof el[key];
        const val = vnode.props[key];
        console.log(/^on/.test(key), '---test')
        if (/^on/.test(key)) {
            const invokers = el._vei || (el._vei = {});

            let invoker = invokers[key];
            const name = key.slice(2).toLowerCase();
            console.log('name--', name);
            if (nextVal) {
                if (!invoker) {
                    invoker = el._vei[key] = (e) => {
                        invoker.value(e);
                    }
                    invoker.value = nextVal;

                    el.addEventListener(name, invoker);
                } else {
                    invoker.value = nextVal;
                }
            } else if (invoker) {
                el.removeEventListener(name, invoker);
            }

        }
        else if (type === 'boolean' && val === '') {
            el[key] = true;
        } else {
            el[key] = val;
        }
    } else {
        el.setAttribute(key, nextVal);
    }
}
function unmount(vnode) {
    const parent = vnode.el.parentNode;
    if (parent) {
        parent.removeChild(vnode.el);
    }
}

function createRenderer() {
    function render(vnode, container) {
        if (vnode) {
            patch(container._vnode, vnode, container);
        } else {
            if (container._vnode) {
                unmount(container._vnode);
            }
        }
        container._vnode = vnode;
    }
    function patch(n1, n2, container) {
        if (!n1) {
            mountComponent(n2, container);
        } else {

        }
    }
    function mountComponent(vnode, container) {
        const el = createElement(vnode.type);
        if (typeof vnode.children === 'string') {
            setElementText(el, vnode.children);
        } else if (Array.isArray(vnode.children)) {
            vnode.children.forEach(child => {
                patch(null, child, el);
            });
        }

        if (vnode.props) {
            for (const key in vnode.props) {
                patchProps(el, key, null, vnode.props[key]);
            }
        }
        insert(el, container);
    }
    return {
        render
    }
}


const vnode = {
    type: 'div',
    children: 'hello world',
    props: {
        class: 'v-test',
        onclick: () => {
            alert('vnode click');
        }
    }
}
const { render } = createRenderer();
render(vnode, document.body);

