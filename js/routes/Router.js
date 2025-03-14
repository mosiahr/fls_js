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
            return res
        } catch (err) {
            console.log(err)
        }
    }

    getRoute(path) {
        try {
            for (const [name, route] of Object.entries(this._availableRoutes)) {
                if (route.match(path)) {
                    return route
                }
            }
            return this._routes.notFound
        } catch (error) {
            console.log(error)
        }
    }
}
