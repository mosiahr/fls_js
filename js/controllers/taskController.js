import Controller from "./controller.js"
import {
    pageTitle,
    button,
    solutionEl,
    codeEl,
    messageNotFound,
    arrow,
} from "../components/index.js"
import { runWithConfirmStart } from "../utils.js"
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
        this.taskListData = objData.all()
        // console.log(this.taskListData)
        // console.log(this.taskData)
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

        if (this.id > 1) {
            taskPage.updatePageElements(
                arrow(
                    `#/tasks/${this.id - 1}/`,
                    "./img/arrow-left.svg",
                    ["page-block__link", "link", "link--previous"],
                    ["page-block__arrow", "arrow"]
                ).outerHTML
            )
        }

        if (this.id < this.objData.all().length) {
            taskPage.updatePageElements(
                arrow(
                    `#/tasks/${this.id + 1}/`,
                    "./img/arrow-right.svg",
                    ["page-block__link", "link", "link--next"],
                    ["page-block__arrow", "arrow"]
                ).outerHTML
            )
        }

        taskPage.updatePageElements(
            pageTitle(
                this.#taskData?.name,
                `Lesson #${this.#taskData?.lessonId + 1}`,
                `#/lessons/${this.#taskData?.lessonId + 1}/`,
                this.#taskData?.description
            )?.outerHTML
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
        const resultAsCode =
            this.#taskData.solutions[this.#solutionId]?.resultAsCode

        let solutionResult
        if (solutionFunc && solutionParams)
            solutionResult = solutionFunc(...solutionParams)
        // else solutionResult = ""

        if (resultAsCode) {
            const newSolutionResult = JSON.stringify(solutionResult, null, "\t")
            // console.log(solutionResult, newSolutionResult)
            return codeEl(newSolutionResult).outerHTML
        }
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
    }

    clearSolutionResult() {
        const solutionResultDiv = document.querySelector("#solution__result")
        solutionResultDiv.childNodes.forEach((elem) => elem.remove())
    }

    initClick() {
        const buttonStartTest = document.querySelector("#start-test-button")
        buttonStartTest?.addEventListener("click", (e) => {
            e.preventDefault()
            this.clearSolutionResult()
            this.showSolutionResult()
        })

        // const buttonPreviousLink = document.querySelector(".link--previous")
        // if (buttonPreviousLink) {
        //     buttonPreviousLink.addEventListener("click", (e) => {
        //         e.preventDefault()
        //         const path = `#/tasks/${this.id - 1}/`
        //         app.goTo(path, true)
        //     })
        // }

        // const buttonNextLink = document.querySelector(".link--next")
        // if (buttonNextLink) {
        //     buttonNextLink?.addEventListener("click", (e) => {
        //         e.preventDefault()
        //         const path = `#/tasks/${this.id + 1}/`
        //         app.goTo(path, true)

        //         // this.addPathToState(path)
        //         // this.render(document.getElementById("root"), this.show())
        //     })
        // }
    }

    getPattern() {
        return this.state?.route?.pattern
    }
}
