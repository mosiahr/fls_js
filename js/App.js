import Router from "./routes/Router.js"
import jsonData from "../data.json" with { type: "json" }
import Data from "./data/data.js"
import { Page, notFoundPage } from "./pages/index.js"
import Controller from "./controllers/controller.js"

export default class App {
	state = {}
	constructor(rootElement, routes, data) {
        this._rootElement = rootElement
        this._router = new Router(routes)
		this._objData = new Data(data)
		this._objectsData = this.getObjectsData()
		// console.log(this._objectsData);
		
    }

	get state() {
		return this.state
	}

	set state(obj) {
		this.state =  Object.assign(this.state, obj)
	}

    initRoute() {
        window.addEventListener("hashchange", () => {
            console.log("hashchange")
            const hash = window.location.hash
            this.goTo(hash)
        })

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
        //* Using when page load first time or when user reload page
        const location = window.location

        if (location.hash) {
            this.goTo(new URL(location.href).hash)
        } else {
            this.goTo(new URL(location.href).pathname)
        }
    }
	
	getObjectsData() {
		try {
			return this._objData.objects	
		} catch (error) {
			console.log(error);
		}
	}

	goTo(path, addToState = false) {
        try {
            console.log(`goTo(${path}) ${path.match("#")}`)
            const [route, id, solutionId] = path.match("#")
                ? this._router.getRoute(path.replace("#", ""))
                : this._router.getRoute(path)
			
            if (route) {
                if (addToState) this.addPathToState(path)
				this.state.route = route
				console.log(this.state);

				const controller = 
					new route.controller(
						Page,
						this._objData.getQueryArrayByClass(route.dataClass),
						id,
						solutionId
					)
				console.log(controller);
				
				controller.state.route = route
				this.state.controller = controller

				console.log(this.state);
				
				this.state.controller.render(this._rootElement, this.state.controller.show())
				if (this.state?.controller?.initClick) this.state.controller.initClick()

            } else {
                this.state.controller.render(this._rootElement, notFoundPage.getHTML())
            }
        } catch (error) {
            console.log(error)
            this.state.controller.render(this._rootElement, notFoundPage.getHTML())
        }
    }
	nextItem() {

	}

    addPathToState(path) {
        try {
            window.history.pushState({ pathname: path }, "", path)
            console.log("pushState()", window.history)
        } catch (error) {
            console.log(error)
        }
    }
}
