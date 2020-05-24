// namespace $

class DOM {
    constructor(selector) {
        if (selector === document) {
            this.element = document;
        } else if (selector === 'body') {
            this.element = document.body;
        } else {
            this.element = document.querySelector(selector);
        }
    }

    on = (event,callback) => {
        this.element.addEventListener(event,callback)
    }

    append = (...els) => {
        els.forEach(el => this.element.appendChild(el))
    }
}

export const $ = (selector) => new DOM(selector);


$.create = (tag,className) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    return el;
}

$.div = (className) => $.create('div',className)

$.btn = (label) => {
    const btn = $.div('button');
    const circle = $.create('span','button-circle');
    const name = $.create('span','button-label');
    circle.append(name)
    btn.append(circle)
    name.textContent = label;
    return btn;
}
