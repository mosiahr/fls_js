import { BasicPage } from "./index.js"
import {
    createElem,
    createFooter,
    createHeader,
    createLogo,
    Breadcrumb,
} from "../components/index.js"
import { PROJECT_FOLDER, MAIN_HEADER_TITLE, FOOTER_INFO } from "../config.js"

export default class Page extends BasicPage {
    constructor(...args) {
        super(...args)
        this.header =
            args[0] ||
            createHeader(createLogo(), createElem("h1", MAIN_HEADER_TITLE))
        this.footer = args[1] || createFooter(FOOTER_INFO)
        this.pageElements = args || []
    }
}
