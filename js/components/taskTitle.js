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
        description.classList.add("task-title")
        const descriptionShortText = truncateStringFullWords(
            this.descriptionText,
            this.limitTitleText
        )
        description.textContent = descriptionShortText
        return description
    }

    render() {
        super.render()
        this.container.append(this.description)
        return this.container
    }
}
