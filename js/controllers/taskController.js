import Controller from "./controller.js"
import { pageTitle, button, solutionEl, codeEl } from "../components/index.js"
// import { generateSubSetArray } from "../hw/hw13.js"
import { runWithConfirmStart } from "../utils.js"
import { messageNotFound } from "../components/messages.js"
import {
    NOT_FOUND_SOLUTION,
    DONT_HAVE_SOLUTION_RESULT_MESSAGE,
} from "../config.js"

export default class TaskController extends Controller {
    #id
    #solutionId
    #taskData

    constructor(page, objData, id, solutionId) {
        super(page, objData)
        this.id = id
        this.solutionId = solutionId
        this.taskData = objData.get(id - 1)
        // console.log(this.taskData)
        // console.log(this._taskData.solutions)
        // this.initClick()
    }

    get id() {
        return this.#id
    }

    set id(value) {
        if (value < 0) throw Error("Id can't be negative value!")
        this.#id = value
    }

    get solutionId() {
        return this.#solutionId
    }

    set solutionId(value) {
        if (value < 0) throw Error("Solution Id can't be negative value!")
        if (isNaN(value) || value === undefined) {
            this.#solutionId = 0
        } else this.#solutionId = value
    }

    get taskData() {
        return this.#taskData
    }

    set taskData(value) {
        this.#taskData = value
    }

    show() {
        if (!this.#taskData) throw new Error("Task Data doesn't exist!")

        const taskPage = new this.page()
        taskPage.updatePageElements(
            pageTitle(this.#taskData?.name, this.#taskData?.description)
                ?.outerHTML
        )

        if (this.#taskData.solutions && this.#taskData.solutions.length !== 0) {
            const btn = button(
                window.location.href,
                "Start test",
                "start-test-button",
                "page-block__button",
                "button",
                "button--hover-purple-background"
            )
            taskPage.updatePageElements(btn?.outerHTML)
            taskPage.updatePageElements(this.showSolutionCode().outerHTML)
            // taskPage.updatePageElements(this.showSolutionResult().outerHTML)
        } else
            taskPage.updatePageElements(
                messageNotFound(NOT_FOUND_SOLUTION).outerHTML
            )
        return taskPage.getHTML()
    }
    // TODO: If it is multiple solutions, need to implement them
    showSolutionCode() {
        return solutionEl(
            this.#taskData.solutions[this.#solutionId]?.code,
            "",
            "page-block__solution",
            "solution"
        )
    }
    getSolutionResult() {
        const solutionFunc = this.#taskData.solutions[this.#solutionId]?.func
        const solutionParams =
            this.#taskData.solutions[this.#solutionId]?.params

        let solutionResult
        if (solutionFunc && solutionParams)
            solutionResult = solutionFunc(...solutionParams)
        return solutionResult
    }

    getSolutions = (id) => this.#taskData.solutions[id]?.code

    showSolutionResult() {
        const solutionResultDiv = document.querySelector("#solution__result")
        const solutionResult = this.getSolutionResult()

        if (solutionResult) {
            this.render(solutionResultDiv, solutionResult)
        } else {
            this.render(solutionResultDiv, DONT_HAVE_SOLUTION_RESULT_MESSAGE)
        }
        document.addEventListener("DOMContentLoaded", (event) => {})
    }
    clearSolutionResult() {
        const solutionResultDiv = document.querySelector("#solution__result")
        this.render(solutionResultDiv, "")
    }

    initClick() {
        document.addEventListener("DOMContentLoaded", (event) => {
            const buttonStartTest = document.querySelector("#start-test-button")

            buttonStartTest?.addEventListener("click", (e) => {
                e.preventDefault()
                // this.clearSolutionResult()
                this.showSolutionResult()
            })
        })
    }
}
