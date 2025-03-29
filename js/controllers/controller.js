export default class Controller {
    constructor(page, objData, ...args) {
        this.page = page
        this.objData = objData
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
}
