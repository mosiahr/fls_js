export default class Task {
    constructor(
        id,
        name,
        description,
        lesson,
        solutions = [],
        available = true
    ) {
        this._id = id
        this._name = name
        this._description = description
        this._lesson = lesson
        this._solutions = solutions
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

    get available() {
        return this._available
    }

    set available(value) {
        this._available = value
    }

    toString() {
        return `Task # ${this._id + 1}`
    }
}
