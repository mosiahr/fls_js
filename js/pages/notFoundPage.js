import { createElem } from "../components/index.js"
import { MainPage } from "./index.js"
import { NOT_FOUND_MESSAGE } from "../config.js"

export const notFoundPage = new MainPage(
    "",
    "",
    createElem("h2", NOT_FOUND_MESSAGE, { class: "page-block__title-list" }),
    `<div>${NOT_FOUND_MESSAGE}</div>`
)
