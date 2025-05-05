import { NUMBER_CHARACTERS_FOR_TASK_DESCRIPTION_LIMIT } from "../config.js"
import { truncateStringFullWords } from "../utils.js"
import check from "./check.js"

export default class TaskCard {
    #task
    #path
    #tags

    aClassNames = ["item-task"]
    divClassNames = ["task-card"]
    titleClassNames = ["task-card__title"]
    divTagsClassNames = ["task-card__tags", "tags"]
    spanTags = ["item-tag"]

    constructor(task, path, tags = []) {
        this.task = task
        this.path = path
        this.tags = tags
    }

    get task() {
        return this.#task
    }
    set task(value) {
        this.#task = value
    }

    get path() {
        return this.#path
    }
    set path(value) {
        this.#path = value
    }

    get tags() {
        return this.#tags
    }
    set tags(value) {
        this.#tags = value
    }

    createCardTitle() {
        const title = document.createElement("h3")
        this.titleClassNames.forEach((el) => title.classList.add(el))
        title.textContent = this.#task.name

        if (this.task.solutions.length) {
            const checkEl = check()
            title.append(checkEl)
        }
        return title
    }

    createTagContainer() {
        const divTags = document.createElement("div")
        this.divTagsClassNames.forEach((tag) => divTags.classList.add(tag))

        if (this.tags.length) {
            this.tags.forEach((tag) => {
                const spanTag = document.createElement("span")
                this.spanTags.forEach((el) => spanTag.classList.add(el))
                spanTag.textContent = tag
                if (tag) divTags.append(spanTag)
            })
        }
        return divTags
    }

    get getTaskCardElement() {
        const taskCard = document.createElement("a")
        this.aClassNames.forEach((el) => taskCard.classList.add(el))
        taskCard.href = this.#path

        const bodyCard = document.createElement("div")
        this.divClassNames.forEach((el) => bodyCard.classList.add(el))
        taskCard.append(bodyCard)

        const title = this.createCardTitle()

        const p = document.createElement("p")
        p.textContent = truncateStringFullWords(
            this.#task.description,
            NUMBER_CHARACTERS_FOR_TASK_DESCRIPTION_LIMIT,
            "..."
        )
        bodyCard.append(title, p)

        const tagContainer = this.createTagContainer()
        if (tagContainer.hasChildNodes()) bodyCard.append(tagContainer)

        return taskCard
    }
}
