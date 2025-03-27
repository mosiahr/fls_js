import { NOT_FOUND_SOLUTION } from "../config.js"

export const messageNotFoundSolution = () => {
    const div = document.createElement("div")

    div.className = "page-block__message"
    const img = document.createElement("img")
    img.src = "./img/icon-not-found.webp"

    const msg = document.createElement("h3")
    msg.textContent = NOT_FOUND_SOLUTION
    div.appendChild(img)
    div.appendChild(msg)
    return div
}
