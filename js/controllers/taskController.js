import Controller from "./controller.js"
import {
    pageTitle,
    button,
    solutionEl,
    codeEl,
    messageNotFound,
    arrow,
    Breadcrumb,
} from "../components/index.js"
import { runWithConfirmStart } from "../utils.js"
import {
    PROJECT_FOLDER,
    NOT_FOUND_SOLUTION,
    DONT_HAVE_SOLUTION_RESULT_MESSAGE,
} from "../config.js"

import { app } from "../index.js"

export default class TaskController extends Controller {
    #id
    #solutionId
    #taskData

    constructor(page, objData, id, solutionId) {
        super(page, objData)
        this.id = id
        this.solutionId = solutionId
        this.taskData = objData.get(id - 1)
        this.taskListData = objData.allAvailable()

        this.taskPage = new this.page()
        // console.log(this.taskListData)
        // console.log(objData)
        this.taskPage.breadcrumb = this.#createBreadcrumb()
    }

    #createBreadcrumb() {
        return new Breadcrumb([
            {
                href: `/${PROJECT_FOLDER}/#`,
                title: "Home",
            },
            {
                href: `/${PROJECT_FOLDER}/#/lessons`,
                title: "Lessons",
            },
            {
                href: `/${PROJECT_FOLDER}/#/lessons/${
                    this.taskData.lessonId + 1
                }`,
                title: `Lesson ${this.taskData.lessonId + 1}`,
            },
            {
                title: this.taskData.name,
            },
        ])
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

        if (this.id > 1) {
            this.taskPage.updatePageElements(
                arrow(
                    `#/tasks/${this.id - 1}/`,
                    "./img/arrow-left.svg",
                    ["page-block__link", "link", "link--previous"],
                    ["page-block__arrow", "arrow"]
                ).outerHTML
            )
        }

        if (this.id < this.objData.all().length) {
            this.taskPage.updatePageElements(
                arrow(
                    `#/tasks/${this.id + 1}/`,
                    "./img/arrow-right.svg",
                    ["page-block__link", "link", "link--next"],
                    ["page-block__arrow", "arrow"]
                ).outerHTML
            )
        }

        this.taskPage.updatePageElements(
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
            this.taskPage.updatePageElements(btn?.outerHTML)
            this.taskPage.updatePageElements(this.showSolutionCode().outerHTML)
            // taskPage.updatePageElements(this.showSolutionResult().outerHTML)
        } else
            this.taskPage.updatePageElements(
                messageNotFound(NOT_FOUND_SOLUTION).outerHTML
            )
        return this.taskPage.getHTML()
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

    renderSolutionResult() {
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

    runSolution() {
        if (confirm("-= START TEST? =-")) {
            this.clearSolutionResult()
            this.renderSolutionResult()
        }
    }

    initEventListener() {
        const buttonStartTest = document.querySelector("#start-test-button")
        buttonStartTest?.addEventListener("click", (e) => {
            e.preventDefault()
            // this.runSolution()
            this.renderSolutionResult()
        })

        // const buttonPreviousLink = document.querySelector(".link--previous")
        // // if (buttonPreviousLink) console.log(buttonPreviousLink)

        // document.addEventListener("keyup", (e) => {
        //     if (buttonPreviousLink && e.code == "ArrowLeft") {
        //         // console.log(window.location.hash)
        //         // console.log(this.state.route)

        //         const hash = window.location.hash

        //         // console.log(this.state.route.match(hash.replace("#", "")))

        //         if (this.state.route.match(hash.replace("#", ""))) {
        //             const path = `#/tasks/${this.id - 1}/`
        //             app.goTo(path)
        //             // app.addPathToState(path)

        //             // window.location = `/${PROJECT_FOLDER}/#/tasks/${
        //             //     this.id - 1
        //             // }`
        //         }
        //     }
        //     // buttonPreviousLink = null
        // })

        // const solutionResultDiv = document.querySelector("#solution__result")
        // console.log(solutionResultDiv)
        // solutionResultDiv.addEventListener("click", (e) => {
        //     // console.log("hi")
        //     if (e.target.tagName === "BUTTON") {
        //         console.log(e.target)
        //     }
        // })

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
}
