import Router from "./routes/Router.js"

export default class App {
    constructor(rootElement, routes) {
        this._rootElement = rootElement
        this._router = new Router(routes)
    }

    initRoute() {
        window.addEventListener("hashchange", () => {
            console.log("hashchange")
            const hash = window.location.hash
            this._router.goTo(hash)
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
        console.log(location)

        if (location.hash) {
            this._router.goTo(new URL(location.href).hash)
        } else {
            this._router.goTo(new URL(location.href).pathname)
        }
    }

	// this._rootElement.innerHTML = 
}
