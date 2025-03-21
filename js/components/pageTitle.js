export default function pageTitle(labelText, titleText) {
    const label = document.createElement("h5")
    label.textContent = labelText

    const title = document.createElement("h2")
    title.innerHTML = titleText

    const pageTitle = document.createElement("div")
    pageTitle.className = "page-block__title"

    pageTitle.appendChild(label)
    pageTitle.appendChild(title)
    return pageTitle
}
