import {
    PROJECT_FOLDER,
    NUMBER_CHARACTERS_FOR_TASK_DESCRIPTION_LIMIT,
} from "../config.js"
import { Page } from "../pages/index.js"
import { TaskCard } from "../components/index.js"
import { limitString } from "../utils.js"
import Controller from "./controller.js"
import {
    HomePageContent,
    createList,
    // PageTitle,
    Breadcrumb,
} from "../components/index.js"

export default class HomePageController extends Controller {
    constructor(page, objData) {
        super(page, objData)
        this.homePage = new this.page()
        this.setDocumentTitle("Home")
    }

    show() {
        this.homePage.updatePageElements(
            HomePageContent.showSectionHero("My First SPA")?.outerHTML
        )
        this.homePage.updatePageElements(
            HomePageContent.showSectionLendingBlock(
                "Lessons",
                `/${PROJECT_FOLDER}/#/lessons`
            )?.outerHTML
        )
        // this.lessonPage.updatePageElements(this.createTaskList())
        return this.homePage.getHTML()
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
