import Controller from "./controller.js"
import { pageTitle, button, solutionEl, codeEl } from "../components/index.js"
// import { generateSubSetArray } from "../hw/hw13.js"
import { runWithConfirmStart } from "../utils.js"
import { messageNotFound } from "../components/messages.js"
import { NOT_FOUND_SOLUTION } from "../config.js"

export default class TaskController extends Controller {
    constructor(page, objData, id) {
        super(page, objData)
        this._id = id
        this._taskData = objData.get(id - 1)
        console.log(this._taskData)
        // console.log(this._taskData.solutions)
    }

    show() {
        if (!this._taskData) throw new Error("Task Data doesn't exist!")

        const taskPage = new this.page()
        taskPage.updatePageElements(
            pageTitle(this._taskData?.name, this._taskData?.description)
                ?.outerHTML
        )

        if (this._taskData.solutions && this._taskData.solutions.length !== 0) {
            console.log(window.location.href)

            const btn = button(
                window.location.href,
                "Start test",
                "start-test-button",
                "page-block__button",
                "button",
                "button--hover-purple-background"
            )
            taskPage.updatePageElements(btn?.outerHTML)
            taskPage.updatePageElements(this.showSolutionCode(0).outerHTML)
        } else
            taskPage.updatePageElements(
                messageNotFound(NOT_FOUND_SOLUTION).outerHTML
            )

        return taskPage.getHTML()
    }
    // TODO: If it is multiple solutions, need to implement them
    showSolutionCode(id = 0) {
        if (this._taskData.solutions && this._taskData.solutions.length !== 0) {
            console.log("YES", this._taskData.solutions)
        }
        return solutionEl(
            this._taskData.solutions[id]?.code,
            "",
            "page-block__solution",
            "solution"
        )
    }
    runSolutionFunc(id = 0) {
        const solutionFunc = this._taskData.solutions[id]?.func
        const solutionParams = this._taskData.solutions[id]?.params

        let solutionResult

        if (solutionFunc && solutionParams)
            solutionResult = solutionFunc(...solutionParams)
        // solutionResult = JSON.stringify(solutionResult, null, "\t")
        // console.log(solutionResult)
        return solutionResult
    }
    getSolutions = (id) => this._taskData.solutions[id]?.code
}
