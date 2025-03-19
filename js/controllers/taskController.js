import Controller from "./controller.js"
import {
    createElem,
    createList,
    createTask,
    pageTitle,
} from "../components/index.js"

export default class TaskController extends Controller {
    constructor(page, objData, id) {
        super(page, objData)
        this._id = id
        this._taskData = objData.get(id - 1)
        console.log("ID: ", this._id)
        console.log("taskData: ", this._taskData)
    }

    show() {
        const taskPage = new this.page()
        taskPage.updatePageElements(
            pageTitle(this._taskData.name, this._taskData.description)
                ?.outerHTML
        )
        // taskPage.updatePageElements(this.createTaskList())
        return taskPage.getHTML()
    }
}
