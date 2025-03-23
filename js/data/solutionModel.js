import Model from "./model.js"

export default class SolutionModel extends Model {
    constructor(
        id,
        name = "",
        title = "",
        task,
        func,
        params = [],
        available = true
    ) {
        super(id, name, available)
        this._title = title
        this._task = task
        this._func = func
        this._params = params
    }

    get title() {
        return this._title
    }

    set title(value) {
        this._title = value
    }

    get task() {
        return this._task
    }

    set task(value) {
        this._task = value
    }

    get func() {
        return this._func
    }

    set func(value) {
        this._func = value
    }

    get params() {
        return this._params
    }

    set params(value) {
        this._params = value
    }
}
