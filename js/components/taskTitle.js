import PageTitle from "./pageTitle.js"
import { truncateStringFullWords } from "../utils.js"
import { LIMIT_PAGE_TITLE } from "../config.js"

export default class TaskTitle extends PageTitle {
    #descriptionText
    #limitTitleText

    constructor(
        labelText,
        titleText,
        descriptionText,
        limitTitleText = LIMIT_PAGE_TITLE
    ) {
        super(labelText, titleText)
        this.descriptionText = descriptionText
        this.limitTitleText = limitTitleText
        this.description = this.createDescription()
        this.createExpandButtonDiv = this.createExpandButtonDiv()
        this.expandButton = this.createExpandButton()
    }

    get descriptionText() {
        return this.#descriptionText
    }
    set descriptionText(value) {
        this.#descriptionText = value
    }

    get limitTitleText() {
        return this.#limitTitleText
    }
    set limitTitleText(value) {
        this.#limitTitleText = value
    }

    createDescription() {
        const description = document.createElement("div")
        description.classList.add("title-block__description")

        description.textContent = truncateStringFullWords(
            this.descriptionText,
            this.limitTitleText
        )
        return description
    }

    createExpandButton() {
        const button = document.createElement("button")
        button.type = "button"
        button.classList.add("title-block__expand-button", "expand-button")
        button.setAttribute("id", "expand-button")
        button.textContent = "View more"
        return button
    }

    createExpandButtonDiv() {
        const div = document.createElement("div")
        div.classList.add("title-block__expand-block")
        return div
    }

    render() {
        const labelTitleDiv = document.createElement("div")
        labelTitleDiv.classList.add("title-block__task")
        labelTitleDiv.append(this.label, this.title)
        this.container.append(labelTitleDiv)

        if (this.descriptionText.length > this.limitTitleText) {
            this.createExpandButtonDiv.append(this.expandButton)
            this.container.append(this.description, this.createExpandButtonDiv)
        } else this.container.append(this.description)

        return this.container
    }

    toggle() {
        const expandButton = document.querySelector("#expand-button")
        const taskTitle = document.querySelector(
            ".title-block > .title-block__description"
        )

        if (expandButton.textContent === "View more") {
            taskTitle.textContent = this.descriptionText
            expandButton.textContent = "View less"
        } else if (expandButton.textContent === "View less") {
            taskTitle.textContent = truncateStringFullWords(
                this.descriptionText,
                this.limitTitleText
            )
            expandButton.textContent = "View more"
        }
    }
}
