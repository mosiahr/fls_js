import Model from "./model.js"

export default class SolutionModel extends Model {
    #initEventMethod

    constructor({
        id,
        name = "",
        title = "",
        task,
        func,
        code,
        params = [],
        resultAsCode = false,
        available = true,
    }) {
        super(id, name, available)
        this._title = title
        this._task = task
        this._func = func
        this._code = code
        this._params = params
        this._resultAsCode = resultAsCode
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

    get code() {
        return this._code
    }

    set code(value) {
        this._code = value
    }

    get params() {
        return this._params
    }

    set params(value) {
        this._params = value
    }

    get resultAsCode() {
        return this._resultAsCode
    }

    set resultAsCode(value) {
        this._resultAsCode = value
    }
}
