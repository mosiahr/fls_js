import { MainPage } from "../pages/index.js"
import Controller from "./controller.js"
import { createElem, createList } from "../components/index.js"

export default class LessonController extends Controller {
    constructor(page, objData, id) {
        super(page, objData)
        console.log("OBJ DATA: ", objData)

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
        console.log(this._lessonData)

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
        // console.log(this._lessonData.get())

        // for (const task of this.objData.all()) {
        //     if (lesson.available) {
        //         const item = createElem(
        //             "a",
        //             createElem("h3", lesson.name) +
        //                 "\n" +
        //                 createElem("p", lesson.title),
        //             {
        //                 class: "item-homework",
        //                 href: `#/lessons/${lesson.id + 1}/`,
        //             }
        //         )
        //         lessonArr.push(item)
        //     } else {
        //         continue
        //     }
        // }
        // return createList(lessonArr, "page__main-list")
    }
}
