import { PROJECT_FOLDER } from "../config.js"
import { Page } from "../pages/index.js"
import Controller from "./controller.js"
import {
    PageTitle,
    createElem,
    createList,
    Breadcrumb,
} from "../components/index.js"

export default class LessonListController extends Controller {
    constructor(page, objData) {
        super(page, objData)
        this.lessonData = objData
        this._lessonListPage = new this.page()
        this._lessonListPage.breadcrumb = this.#createBreadcrumb()
        this.setDocumentTitle("Lessons")
    }

    #createBreadcrumb() {
        return new Breadcrumb([
            {
                href: `/${PROJECT_FOLDER}/#`,
                title: "Home",
            },
            {
                title: "Lessons",
            },
        ])
    }

    show() {
		
        this._lessonListPage.updatePageElements(
            new PageTitle("Home Works", "Lessons").render().outerHTML
        )
        this._lessonListPage.updatePageElements(this.createLessonList())
        return this._lessonListPage.getHTML()
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
                        class: "item-lesson",
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
