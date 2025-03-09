import {
    createElem,
    createFooter,
    createHeader,
    createLogo,
    createPage,
} from "../components/index.js"
import { MAIN_HEADER_TITLE, FOOTER_INFO, NOT_FOUND_MESSAGE } from "../config.js"

// const HOMEWORK_NUMBER = 8

export const notFoundPage = createPage(
    createHeader(createLogo(), createElem("h1", MAIN_HEADER_TITLE)),
    createFooter(FOOTER_INFO),
    createElem("h2", NOT_FOUND_MESSAGE, { class: "page-block__title-list" }),
    `<div>${NOT_FOUND_MESSAGE}</div>`
)
