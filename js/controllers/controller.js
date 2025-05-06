import { DEFAULT_PAGE_TITLE } from "../config.js"

export default class Controller {
    state = {}

    constructor(page, objData, ...args) {
        this.page = page
        this.objData = objData
        this.setDocumentTitle("", "")
    }

    get state() {
        return this.state
    }

    set state(obj) {
        this.state = Object.assign(this.state, obj)
    }

    initDocumentTitle(value) {
        document.title = value
    }

    setDocumentTitle(value, divider = "|") {
        document.title = value + ` ${divider} ` + DEFAULT_PAGE_TITLE
    }

    getClassName() {
        return this.constructor.name
    }

    toString() {
        return `<Controller: ${this.getClassName()}>`
    }

    render(domEl, html) {
        try {
            domEl.innerHTML = html
        } catch (error) {
            console.log(error)
        }
    }

    addPathToState(path) {
        try {
            window.history.pushState({ pathname: path }, "", path)
            console.log("pushState()", window.history)
        } catch (error) {
            console.log(error)
        }
    }

    getRoute() {
        return this.state?.route
    }

    getPattern() {
        return this.state?.route?.pattern
    }
}
