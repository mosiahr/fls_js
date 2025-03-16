import { MainPage } from "../pages/index.js"
import Controller from "./controller.js"
import { createElem, createList } from "../components/index.js"

export default class LessonController extends Controller {
    constructor(page, objData) {
        super(page, objData)
    }

    show() {
        const lessonPage = new this.page()
        // console.log(lessonPage.getHTML())
        lessonPage.updatePageElements(this.createHeading())
        lessonPage.updatePageElements(this.createLessonList())
        return lessonPage.getHTML()
    }

    createHeading() {
        return createElem("h2", "Lessons Page", {
            class: "page-block__title-list",
        })
    }

    content = () => {
        const res = []
        for (const lesson of objData) {
            const item = createElem(
                "a",
                createElem("h2", lesson.name) +
                    "\n" +
                    createElem("p", lesson.title),
                { class: "item-homework" }
            )
            res.push(item)
        }
    }

    createLessonList() {
        const lessonArr = []
        for (const lesson of this.objData) {
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
        // console.log("createLessonList: ", this.objData)

        // const lessonList = this.objData.map((lesson) => {
        //     return lesson.available
        //         ? createElem(
        //               "a",
        //               createElem("h2", lesson.name) +
        //                   "\n" +
        //                   createElem("p", lesson.title),
        //               { class: "item-homework" }
        //           )
        //         : ""
        // })
        return createList(lessonArr, "page__main-list")
    }
}

function view(page, data) {}
