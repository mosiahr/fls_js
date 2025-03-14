import Router from "./routes/Router.js"
import jsonData from "../data.json" with { type: "json" }
import Data from "./data/data.js"

export default class App {
    constructor(rootElement, routes, data) {
        this._rootElement = rootElement
        this._router = new Router(routes)
		this._data = data
		this._objData = this.getObjData()
    }

    initRoute() {
        window.addEventListener("hashchange", () => {
            console.log("hashchange")
            const hash = window.location.hash
            this.goTo(hash)
        })
        // window.addEventListener("popstate", (e) => {
        //     console.log("popstate")
        //     console.log(window.history)
        //     // console.log("STATE: ", e.state)
        //     // // router.render(new URL(window.location.href).pathname)
        //     // if (e.state) this._router.goTo(e.state.pathname, false)
        // })

        // document.querySelectorAll("[href^='/']").forEach((link) => {
        //     link.addEventListener("click", (e) => {
        //         try {
        //             e.preventDefault()
        //             console.log("URL: ", new URL(e.target.href))
        //             // const { pathname: path } = new URL(env.target.href)
        //             router.goTo(new URL(e.target.href).pathname)
        //         } catch (error) {
        //             console.log(error)
        //         }
        //     })
        // })
    }

    initLoadPage() {
        // Using when page load first time or when user reload page
        const location = window.location

        if (location.hash) {
            this.goTo(new URL(location.href).hash)
        } else {
            this.goTo(new URL(location.href).pathname)
        }
    }

	getObjData() {
		try {
			return new Data(this._data).getObjectData()
		} catch (error) {
			console.log(error);
		}
	}

	goTo(path, addToState = false) {
        try {
            console.log(`goTo(${path})`)
            const route = path.match("#")
                ? this._router.getRoute(path.replace("#", ""))
                : this._router.getRoute(path)
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

    render(page) {
        try {
            console.log("render()")
            this._rootElement.innerHTML = page
        } catch (error) {
            console.log(err)
        }
    }
    // this._rootElement.innerHTML =
}
