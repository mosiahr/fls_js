import Router from "./routes/Router.js"
import jsonData from "../data.json" with { type: "json" }
import Data from "./data/data.js"
import { Page, notFoundPage } from "./pages/index.js"
import Controller from "./controllers/controller.js"
// import LessonController from "./controllers/lessonController.js"


export default class App {
	controller
	constructor(rootElement, routes, data) {
        this._rootElement = rootElement
        this._router = new Router(routes)
		this._objData = new Data(data)
		this._objectsData = this.getObjectsData()
		
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
        // Using when page load first time or when user reload page
        const location = window.location

        if (location.hash) {
            this.goTo(new URL(location.href).hash)
        } else {
            this.goTo(new URL(location.href).pathname)
        }
    }
	
	initClick() {
		// document.addEventListener("DOMContentLoaded", (event) => {
            // console.log("DOM fully loaded and parsed")
            const buttonStartTest = document.querySelector("#start-test-button")
            console.log(buttonStartTest)

            buttonStartTest?.addEventListener("click", (e) => {
                e.preventDefault()
				if (this.controller.runSolutionFunc(0))
					console.log(this.controller.runSolutionFunc(0))
            })
        // })
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
            console.log(`goTo(${path})`)
            const [route, id] = path.match("#")
                ? this._router.getRoute(path.replace("#", ""))
                : this._router.getRoute(path)
			
            if (route) {
                if (addToState) this.addPathToState(path)
				this.controller = 
					new route.controller(
						Page,
						this._objData.getQueryArrayByClass(route.dataClass),
						id)
				this.render(this.controller.show())
				this.initClick()
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

	initController() {
		// const d = this._objData
		// console.log("d.all(): ", d.all())
		// // console.log("ObjD:: ", new Data(this._data).objData)
		
		// console.log("d.lessons: ", d.lessons)
		// console.log("d.lessons: typeof:  ", typeof d.lessons)

		// console.log("d.getLesson(2): ", d.lessons.get(2))
		// console.log("d.getLesson(2) typeof: ", typeof d.lessons.get(2))
		// console.log("d.lessons.all(): ", d.lessons.all())
		

		// const path = "/lessons/"
		// const route = path.match("#")
        //         ? this._router.getRoute(path.replace("#", ""))
        //         : this._router.getRoute(path)
		

		// Get all lessons

		// if (route){
		// 	const controller = new route.controller(MainPage, d.getQueryArrayByClassName(route.dataClass).all())
		// 	this.render(controller.show())
		// }

			
	}
}
