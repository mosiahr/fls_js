import Model from "./model.js"

export default class TagModel extends Model {
    constructor(id, name, description, task, available = true) {
        super(id, name, available)
        this._description = description
        this._task = task
    }

    get description() {
        return this._description
    }

    set description(value) {
        this._description = value
    }

    get task() {
        return this._task
    }

    set task(value) {
        this._task = value
    }
}
