export default class Controller {
    state = {}
    constructor(page, objData, ...args) {
        this.page = page
        this.objData = objData
    }

    get state() {
        return this.state
    }

    set state(obj) {
        this.state = Object.assign(this.state, obj)
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
            console.log(err)
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
}
