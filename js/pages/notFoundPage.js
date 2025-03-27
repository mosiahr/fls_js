import { createElem } from "../components/index.js"
import { Page } from "./index.js"
import { NOT_FOUND_MESSAGE } from "../config.js"
import { messageNotFound } from "../components/index.js"

export const notFoundPage = new Page(
    "",
    "",
    messageNotFound(NOT_FOUND_MESSAGE).outerHTML
)
