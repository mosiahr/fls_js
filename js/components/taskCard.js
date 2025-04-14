import { NUMBER_CHARACTERS_FOR_TASK_DESCRIPTION_LIMIT } from "../config.js"
import { truncateStringFullWords } from "../utils.js"

export default class TaskCard {
    _task
    _path
    _aClassNames = ["item-task"]
    _divClassNames = ["task-card"]
    _h3ClassNames = ["task-card__title"]
    _divTagsClassNames = ["task-card__tags", "tags"]
    _spanTags = ["item-tag"]

    constructor(task, path, tags = []) {
        this.task = task
        this.path = path
        this.tags = tags
    }

    get task() {
        return this._task
    }
    set task(value) {
        this._task = value
    }

    get path() {
        return this._path
    }
    set path(value) {
        this._path = value
    }

    get getTaskCardElement() {
        const taskCard = document.createElement("a")
        this._aClassNames.forEach((el) => taskCard.classList.add(el))
        taskCard.href = this._path

        const bodyCard = document.createElement("div")
        this._divClassNames.forEach((el) => bodyCard.classList.add(el))
        taskCard.append(bodyCard)

        const h3 = document.createElement("h3")
        this._h3ClassNames.forEach((el) => h3.classList.add(el))
        h3.textContent = this._task.name

        const p = document.createElement("p")
        p.textContent = truncateStringFullWords(
            this._task.description,
            NUMBER_CHARACTERS_FOR_TASK_DESCRIPTION_LIMIT,
            "..."
        )
        bodyCard.append(h3, p)

        const divTags = document.createElement("div")
        this._divTagsClassNames.forEach((tag) => divTags.classList.add(tag))

        if (this.tags.length) {
            this.tags.forEach((tag) => {
                const spanTag = document.createElement("span")
                this._spanTags.forEach((el) => spanTag.classList.add(el))
                spanTag.textContent = tag
                if (tag) divTags.append(spanTag)
            })

            if (divTags.hasChildNodes()) bodyCard.append(divTags)
        }
        // console.log(linkCard.outerHTML)

        return taskCard
    }
}
