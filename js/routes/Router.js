import { notFoundPage } from "../pages/index.js"

export default class Router {
    constructor(routes) {
        this._routes = routes
        this._availableRoutes = this.getAvailableRoutes()
    }

    get routes() {
        return this._routes
    }

    get availableRoutes() {
        return this._availableRoutes
    }

    getAvailableRoutes() {
        try {
            const res = {}
            for (const [name, route] of Object.entries(this._routes)) {
                if (route.available) res[name] = route
            }
            // console.log("getAvailableRoutes: ", res)
            return res
        } catch (err) {
            console.log(err)
        }
    }

    goTo(path, addToState = false) {
        try {
            console.log(`goTo(${path})`)
            const route = path.match("#")
                ? this.getRoute(path.replace("#", ""))
                : this.getRoute(path)
            if (route) {
                if (addToState) this.addPathToState(path)
                // TODO: Move render to another place
                this.render(route.page.getHTML())
            } else {
                // TODO: Move render and notFoundPage to another place
                this.render(notFoundPage.getHTML())
            }
        } catch (error) {
            console.log(error)
            this.render(notFoundPage.getHTML())
        }
    }

    addPathToState(path) {
        try {
            window.history.pushState({ pathname: path }, "", path)
            console.log("pushState()", window.history)
        } catch (error) {
            console.log(error)
        }
    }

    getRoute(path) {
        try {
            console.log("GET ROUTER: ", path)
            for (const [name, route] of Object.entries(this._availableRoutes)) {
                if (route.match(path)) {
                    console.log("getRoute OK:", route.name)
                    return route
                }
            }
            return this._routes.notFound
        } catch (error) {
            console.log(error)
        }
    }

    render(page) {
        try {
            console.log("render()")
            document.body.innerHTML = page
        } catch (error) {
            console.log(err)
        }
    }
}
