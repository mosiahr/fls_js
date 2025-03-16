export default class Route {
    constructor(pattern, name, controller, available = true) {
        this._pattern = pattern
        // this._page = page
        this._name = name
        this._controller = controller
        this._available = available
    }

    get pattern() {
        return this._pattern
    }

    get name() {
        return this._name
    }

    // get page() {
    //     return this._page
    // }
    get controller() {
        return this._controller
    }

    get available() {
        return this._available
    }

    match(path) {
        try {
            const regexResult = path.match(this.pattern)
            // console.log(path, this.pattern)

            // console.log("regexResult: ", regexResult)

            if (regexResult === null) {
                // console.log("NULLLL")
                return false
            }
            return true
        } catch (err) {
            console.log(err)
        }
    }
}
