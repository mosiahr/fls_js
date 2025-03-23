import Model from "./model.js"

export default class LessonModel extends Model {
    constructor(id, name, title = "", tasks = [], available = true) {
        super(id, name, available)
        this._title = title
        this._tasks = tasks
    }

    get title() {
        return this._title
    }

    set title(value) {
        this._title = value
    }

    get tasks() {
        return this._tasks
    }

    set tasks(value) {
        this._tasks = value
    }
}
