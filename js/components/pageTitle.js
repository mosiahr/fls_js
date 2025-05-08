import { truncateStringFullWords } from "../utils.js"
import { LIMIT_PAGE_TITLE } from "../config.js"
import codeEl from "./codeEl.js"

export default class PageTitle {
    #labelText
    #titleText

    constructor(labelText, titleText) {
        this.labelText = labelText
        this.titleText = titleText
        this.container = this.createContainer()
        this.label = this.createLabel()
        this.title = this.createTitle()
    }
    get labelText() {
        return this.#labelText
    }
    set labelText(value) {
        this.#labelText = value
    }
    get titleText() {
        return this.#titleText
    }
    set titleText(value) {
        this.#titleText = value
    }

    createContainer() {
        const container = document.createElement("div")
        container.classList.add("page-block__title", "title-block")
        return container
    }

    createLabel() {
        const label = document.createElement("h5")
        label.textContent = this.labelText
        return label
    }

    createTitle() {
        const title = document.createElement("h2")
        // title.classList.add("task-title")
        title.textContent = this.titleText
        return title
    }

    render() {
        this.container.append(this.label, this.title)
        return this.container
    }
}

export function pageTitle(
    labelText1,
    labelText2,
    href,
    titleText,
    limitTitleText = LIMIT_PAGE_TITLE
) {
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
    title.classList.add("task-title")

    const description = truncateStringFullWords(
        titleText,
        limitTitleText,
        "..."
    )

    title.innerText = description

    const button = document.createElement("button")
    button.setAttribute("id", "")

    const pageTitle = document.createElement("div")
    pageTitle.className = "page-block__title"

    pageTitle.appendChild(divLabel)
    pageTitle.appendChild(title)
    return pageTitle
}
