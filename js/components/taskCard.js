import { NUMBER_CHARACTERS_FOR_TASK_DESCRIPTION_LIMIT } from "../config.js"
import { truncateStringFullWords } from "../utils.js"

export function taskCard(
    taskName = "",
    taskDescription = "",
    path = "",
    attrClassLink = [],
    attrClassBodyCard = []
) {
    const linkCard = document.createElement("a")
    attrClassLink.forEach((el) => linkCard.classList.add(el))
    linkCard.href = path

    const bodyCard = document.createElement("div")
    attrClassBodyCard.forEach((el) => bodyCard.classList.add(el))
    linkCard.append(bodyCard)

    const h3 = document.createElement("h3")
    h3.textContent = taskName
    bodyCard.append(h3)

    const p = document.createElement("p")
    p.textContent = taskDescription
    bodyCard.append(p)
    // console.log(linkCard.outerHTML)

    return linkCard
}

export default class TaskCard {
    _task
    _path
    _aClassNames = ["item-task"]
    _divClassNames = []
    _divTagsClassNames = ["item-task__tags", "tags"]

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
        h3.textContent = this._task.name

        const p = document.createElement("p")
        p.textContent = truncateStringFullWords(
            this._task.description,
            NUMBER_CHARACTERS_FOR_TASK_DESCRIPTION_LIMIT,
            "..."
        )

        const divTags = document.createElement("div")
        this._divTagsClassNames.forEach((tag) => divTags.classList.add(tag))

        if (this.tags.length) {
            this.tags.forEach((tag) => {
                const spanTag = document.createElement("span")
                spanTag.textContent = tag
                divTags.append(spanTag)
            })
        }
        // console.log(linkCard.outerHTML)
        bodyCard.append(h3, p, divTags)

        return taskCard
    }
}
