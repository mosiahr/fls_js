export default function button(path, buttonText, id = "", ...attrClass) {
    const link = document.createElement("a")
    attrClass.forEach((el) => link.classList.add(el))
    link.href = path
    if (id) link.id = id

    const span = document.createElement("span")
    span.textContent = buttonText
    link.appendChild(span)
    return link
}
