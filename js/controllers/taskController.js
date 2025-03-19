import Controller from "./controller.js"
import { pageTitle, button } from "../components/index.js"

export default class TaskController extends Controller {
    constructor(page, objData, id) {
        super(page, objData)
        this._id = id
        this._taskData = objData.get(id - 1)
    }

    show() {
        const taskPage = new this.page()
        taskPage.updatePageElements(
            pageTitle(this._taskData.name, this._taskData.description)
                ?.outerHTML
        )
        taskPage.updatePageElements(
            button(
                "/#/",
                "Solution",
                "button",
                "button--hover-purple-background"
            )?.outerHTML
        )
        return taskPage.getHTML()
    }
}
