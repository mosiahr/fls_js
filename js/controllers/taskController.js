import Controller from "./controller.js"
import { pageTitle, button } from "../components/index.js"
import { generateSubSetArray } from "../lessons/hw13.js"

import { hljs } from "../index.js"

console.log(hljs)
console.log(hljs.listLanguages)
console.log(hljs.getLanguage)

function hello() {
    return "Hello"
}

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

        const highlightedCode = hljs.highlight(hello.toString(), {
            language: "javascript",
            // ignoreIllegals: true,
        }).value
        taskPage.updatePageElements(highlightedCode)
        // taskPage.updatePageElements(generateSubSetArray([1, 2, 3]))
        return taskPage.getHTML()
    }

    showSolution() {}
}
