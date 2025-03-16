import { BasicPage } from "./index.js"
import {
    createElem,
    createFooter,
    createHeader,
    createLogo,
} from "../components/index.js"
import { MAIN_HEADER_TITLE, FOOTER_INFO } from "../config.js"

export default class MainPage extends BasicPage {
    constructor(...args) {
        const header = createHeader(
            createLogo(),
            createElem("h1", MAIN_HEADER_TITLE)
        )
        const footer = createFooter(FOOTER_INFO)
        super(...args)
        this.header = args[0] || header
        this.footer = args[1] || footer
        this.pageElements = args || []
    }

    updatePageElements(el) {
        this.pageElements.push(el)
    }
}
