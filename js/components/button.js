export default function button(path, buttonText, ...attrClass) {
    const link = document.createElement("a")
    attrClass.forEach((el) => link.classList.add(el))
    link.href = path

    const span = document.createElement("span")
    span.textContent = buttonText
    link.appendChild(span)
    return link
}
