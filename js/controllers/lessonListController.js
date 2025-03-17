import { MainPage } from "../pages/index.js"
import Controller from "./controller.js"
import { createElem, createList } from "../components/index.js"

export default class LessonListController extends Controller {
    constructor(page, objData) {
        super(page, objData)
    }

    show() {
        const lessonListPage = new this.page()
        lessonListPage.updatePageElements(this.createHeading())
        lessonListPage.updatePageElements(this.createLessonList())
        return lessonListPage.getHTML()
    }

    createHeading() {
        return createElem("h2", "Lessons Page", {
            class: "page-block__title-list",
        })
    }

    createLessonList() {
        const lessonArr = []
        for (const lesson of this.objData.all()) {
            if (lesson.available) {
                const item = createElem(
                    "a",
                    createElem("h3", lesson.name) +
                        "\n" +
                        createElem("p", lesson.title),
                    {
                        class: "item-homework",
                        href: `#/lessons/${lesson.id + 1}/`,
                    }
                )
                lessonArr.push(item)
            } else {
                continue
            }
        }
        return createList(lessonArr, "page__main-list")
    }
}
