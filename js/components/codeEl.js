import { hljs } from "../index.js"

export default function codeEl(code = "", ...attrClass) {
    const codeResultEl = document.createElement("div")
    attrClass.forEach((el) => codeResultEl.classList.add(el))

    const preEl = document.createElement("pre")
    const codeEl = document.createElement("code")
    preEl.append(codeEl)

    if (code) {
        const highlightedCode = hljs.highlight(code.toString(), {
            language: "javascript",
        }).value
        codeEl.innerHTML = highlightedCode
    }
    codeResultEl.append(preEl)
    return codeResultEl
}
