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
}
