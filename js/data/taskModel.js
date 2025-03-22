import Model from "./model.js"

export default class TaskModel extends Model {
    constructor(
        id,
        name,
        description,
        lesson,
        solutions = [],
        available = true
    ) {
        super(id, name, available)
        this._description = description
        this._lesson = lesson
        this._solutions = solutions
    }

    get name() {
        return this._name || `Task #${this._id + 1}`
    }

    get description() {
        return this._description
    }

    set description(value) {
        this._description = value
    }

    get lesson() {
        return this._lesson
    }

    set lesson(value) {
        this._lesson = value
    }

    get solutions() {
        return this._solutions
    }

    set solutions(value) {
        this._solutions = value
    }

    updateSolutions() {}
}
