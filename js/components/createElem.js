export default function createElem(element, template, attributes = {}) {
    if (attributes === null) {
        return `<${element}>${template}</${element}>`
    }

    let attrStr = ""
    if (attributes instanceof Object) {
        for (const [key, value] of Object.entries(attributes)) {
            attrStr += ` ${key}="${value}"`
        }
    }
    return `<${element} ${attrStr}>${template}</${element}>`
}

