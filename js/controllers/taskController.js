import Controller from "./controller.js"
import { pageTitle, button, solutionEl } from "../components/index.js"
import { generateSubSetArray } from "../hw/hw13.js"

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
        taskPage.updatePageElements(
            button(
                "/#/",
                "Start test",
                "page-block__button",
                "button",
                "button--hover-purple-background"
            )?.outerHTML
        )

        // const code = taskPage.createHighlightedCode(generateSubSetArray)
        // taskPage.updatePageElements(code)

        // console.log();

        taskPage.updatePageElements(this.showSolution()?.outerHTML)

        // taskPage.updatePageElements(generateSubSetArray([1, 2, 3]))
        return taskPage.getHTML()
    }
    // TODO: If it is multiple solutions, need to implement this
    showSolution(id = 0) {
        const solutionFunc = this._taskData.solutions[id]?.func
        const solutionParams = this._taskData.solutions[id]?.params

        let solutionResult
        if (solutionFunc && solutionParams)
            solutionResult = solutionFunc(...solutionParams)

        if (solutionResult instanceof Array)
            solutionResult = JSON.stringify(solutionResult)

        return solutionEl(
            solutionFunc,
            solutionResult,
            "page-block__solution",
            "solution"
        )
    }
    runSolutionFunc() {}
}
