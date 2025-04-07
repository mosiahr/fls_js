import Model from "./model.js"

export default class TaskModel extends Model {
    constructor(
        id,
        name,
        description,
        lessonId,
        solutions = [],
        available = true
    ) {
        super(id, name, available)
        this._description = description
        this._lessonId = lessonId
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

    get lessonId() {
        return this._lessonId
    }

    set lessonId(value) {
        this._lessonId = value
    }

    get solutions() {
        return this._solutions
    }

    set solutions(value) {
        this._solutions = value
    }

    // updateSolutions() {}
}
