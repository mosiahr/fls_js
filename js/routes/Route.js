export default class Route {
    constructor(pattern, controller, dataClass, available = true) {
        this._pattern = pattern
        // this._page = page
        // this._name = name
        this._controller = controller
        this._dataClass = dataClass
        this._available = available
    }

    get pattern() {
        return this._pattern
    }

    get controller() {
        return this._controller
    }

    get dataClass() {
        return this._dataClass
    }

    get available() {
        return this._available
    }

    match(path) {
        try {
            return path.match(this.pattern)
        } catch (err) {
            console.log(err)
        }
    }
}
