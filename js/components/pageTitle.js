export default function pageTitle(labelText1, labelText2, href, titleText) {
    const divLabel = document.createElement("div")
    divLabel.className = "page-block__label"

    const label1 = document.createElement("h5")
    label1.textContent = labelText1

    const label2 = document.createElement("h5")
    const a = document.createElement("a")
    a.textContent = labelText2
    if (href) a.href = href
    label2.appendChild(a)

    divLabel.append(label1, label2)

    const title = document.createElement("h2")
    title.innerHTML = titleText

    const pageTitle = document.createElement("div")
    pageTitle.className = "page-block__title"

    pageTitle.appendChild(divLabel)
    pageTitle.appendChild(title)
    return pageTitle
}
