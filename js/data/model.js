export default class Model {
    constructor(id, name, available = true) {
        this._id = id
        this._name = name
        this._available = available
    }

    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }

    get available() {
        return this._available
    }

    set available(value) {
        this._available = value
    }

    getClassName() {
        return this.constructor.name
    }

    toString() {
        return `${this.getClassName()} # ${this._id + 1}`
    }
}
