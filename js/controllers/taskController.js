import Controller from "./controller.js"
import { pageTitle, button } from "../components/index.js"
import { generateSubSetArray } from "../hw/hw13.js"

export default class TaskController extends Controller {
    constructor(page, objData, id) {
        super(page, objData)
        this._id = id
        this._taskData = objData.get(id - 1)
        console.log(this._taskData)
        // console.log(this._taskData.solutions)
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

        const code = taskPage.createHighlightedCode(generateSubSetArray)
        taskPage.updatePageElements(code)

        // taskPage.updatePageElements(generateSubSetArray([1, 2, 3]))
        return taskPage.getHTML()
    }

    showSolution() {}
}
