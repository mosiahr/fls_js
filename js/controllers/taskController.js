import Controller from "./controller.js"
import { pageTitle, button, solutionEl, codeEl } from "../components/index.js"
// import { generateSubSetArray } from "../hw/hw13.js"
import { runWithConfirmStart } from "../utils.js"

export default class TaskController extends Controller {
    constructor(page, objData, id) {
        super(page, objData)
        this._id = id
        this._taskData = objData.get(id - 1)
        // console.log(this._taskData)
        // console.log(this._taskData.solutions)
    }

    show() {
        const taskPage = new this.page()
        taskPage.updatePageElements(
            pageTitle(this._taskData.name, this._taskData.description)
                ?.outerHTML
        )
        const btn = button(
            "/#/",
            "Start test",
            "start-test-button",
            "page-block__button",
            "button",
            "button--hover-purple-background"
        )
        taskPage.updatePageElements(btn?.outerHTML)
        taskPage.updatePageElements(this.showSolutionCode(0).getHTML())

        return taskPage.getHTML()
    }
    // TODO: If it is multiple solutions, need to implement them
    showSolutionCode(id = 0) {
        // if (solutionFunc && solutionParams)
        // solutionResult = solutionFunc(...solutionParams)
        // if (solutionResult instanceof Array)
        // console.log(this._taskData.solutions[id]?.code)
        // console.log(codeEl(this.getSolutions(id), "solution-item"))

        // return codeEl(this.getSolutions(id), "solution-item")

        // const solutionResult = runWithConfirmStart(this.runSolutionFunc())
        // console.log(solutionResult, this._taskData.solutions[id]?.code)
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
