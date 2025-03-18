import { Page } from "../pages/index.js"
import Controller from "./controller.js"
import { createElem, createList, createTask } from "../components/index.js"

export default class LessonController extends Controller {
    constructor(page, objData, id) {
        super(page, objData)
        this._id = id
        this._lessonData = objData.get(id - 1)
    }

    show() {
        const lessonListPage = new this.page()
        lessonListPage.updatePageElements(this.createHeading())
        lessonListPage.updatePageElements(this.createTaskList())
        return lessonListPage.getHTML()
    }

    createHeading() {
        // console.log(this._lessonData)
        // const heading = document.createElement("H2")
        // heading.className = "page-block__title-list"
        // heading.textContent = this._lessonData.name

        // const paragraph = document.createElement("p")
        // paragraph.textContent = this._lessonData.title
        // console.log(paragraph)
        // heading.appendChild(paragraph)
        // console.log(heading)
        // return heading.getHTML()
        return createElem(
            "h2",
            this._lessonData.name + "<br>" + this._lessonData.title,
            {
                class: "page-block__title-list",
            }
        )
    }

    createTaskList() {
        const taskArr = []
        const tasks = this._lessonData.tasks
        // console.log(tasks)
        for (const task of tasks) {
            if (task.available) {
                // console.log(task)
                const taskEl = createTask(
                    task.id + 1,
                    task.description,
                    `./#/lessons/${this._lessonData.id + 1}/tasks/${
                        task.id + 1
                    }`
                )
                taskArr.push(taskEl)
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
