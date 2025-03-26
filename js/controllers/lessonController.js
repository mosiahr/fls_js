import { NUMBER_CHARACTERS_FOR_TASK_DESCRIPTION_LIMIT } from "../config.js"
import { Page } from "../pages/index.js"
import { taskCard } from "../components/index.js"

import { limitString } from "../utils.js"
import Controller from "./controller.js"
import {
    createElem,
    createList,
    createTask,
    pageTitle,
} from "../components/index.js"

export default class LessonController extends Controller {
    constructor(page, objData, id) {
        super(page, objData)
        this._id = id
        this._lessonData = objData.get(id - 1)
    }

    show() {
        const lessonPage = new this.page()
        lessonPage.updatePageElements(
            pageTitle(this._lessonData.name, this._lessonData.title)?.outerHTML
        )
        lessonPage.updatePageElements(this.createTaskList())
        return lessonPage.getHTML()
    }

    createTaskList() {
        const taskArr = []
        const tasks = this._lessonData.tasks

        for (const task of tasks) {
            if (task.available) {
                const taskEl = taskCard(
                    task.name,
                    limitString(
                        task.description,
                        NUMBER_CHARACTERS_FOR_TASK_DESCRIPTION_LIMIT
                    ),
                    `./#/tasks/${task.id + 1}`,
                    [],
                    ["item-homework"]
                )
                taskArr.push(taskEl.outerHTML)
            }
        }
        return createList(taskArr, "page__list")

        // <li>
        // 	<h3>Task 1</h3>
        // 	<p>Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці</p>
        // 	<a class="button button--hover-purple-background"
        // 		href="./tasks/task1.html"><span>Solution</span></a>
        // </li>
    }
}
