export default function arrow(
    pathLink,
    src,
    linkClassNames = [],
    divClassNames = []
) {
    const link = document.createElement("a")
    linkClassNames.forEach((el) => link.classList.add(el))

    link.href = pathLink

    const container = document.createElement("div")
    divClassNames.forEach((el) => container.classList.add(el))

    const img = document.createElement("img")
    img.src = src

    link.appendChild(container)
    container.appendChild(img)

    return link
}
