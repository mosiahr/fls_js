import {
    PROJECT_FOLDER,
    NUMBER_CHARACTERS_FOR_TASK_DESCRIPTION_LIMIT,
} from "../config.js"
import { Page } from "../pages/index.js"
import { TaskCard } from "../components/index.js"
import { limitString } from "../utils.js"
import Controller from "./controller.js"
import { createList, pageTitle, Breadcrumb } from "../components/index.js"

export default class LessonController extends Controller {
    constructor(page, objData, id) {
        super(page, objData)
        this._id = id
        this._lessonData = objData.get(id - 1)
        this.lessonPage = new this.page()
        this.lessonPage.breadcrumb = this.#createBreadcrumb()
    }

    #createBreadcrumb() {
        return new Breadcrumb([
            {
                href: `/${PROJECT_FOLDER}/#`,
                title: "Home",
            },
            {
                href: `/${PROJECT_FOLDER}/#/lessons`,
                title: "Lessons",
            },
            {
                title: this._lessonData._name,
            },
        ])
    }

    show() {
        this.lessonPage.updatePageElements(
            pageTitle(this._lessonData.name, "", "", this._lessonData.title)
                ?.outerHTML
        )
        this.lessonPage.updatePageElements(this.createTaskList())
        return this.lessonPage.getHTML()
    }

    createTaskList() {
        const taskArr = []
        const tasks = this._lessonData.tasks

        for (const task of tasks) {
            if (task.available) {
                const tagNameListAvailable = task.tags.map((tag) => {
                    if (tag.available) return tag.name
                })

                const taskEl = new TaskCard(
                    task,
                    `./#/tasks/${task.id + 1}`,
                    tagNameListAvailable
                )
                taskArr.push(taskEl.getTaskCardElement.outerHTML)
            }
        }
        return createList(taskArr, "page__list")
    }
}
