import { NOT_FOUND_SOLUTION, NOT_FOUND_MESSAGE } from "../config.js"

export const messageNotFound = (msgText) => {
    const div = document.createElement("div")

    div.className = "page-block__message"
    const img = document.createElement("img")
    img.src = "./img/icon-not-found.webp"

    const msg = document.createElement("h3")
    msg.textContent = msgText
    div.appendChild(img)
    div.appendChild(msg)
    return div
}

// export const messageNotFoundPage = () => {
//     const div = document.createElement("div")

//     div.className = "page-block__message"
//     const img = document.createElement("img")
//     img.src = "./img/icon-not-found.webp"

//     const msg = document.createElement("h3")
//     msg.textContent = NOT_FOUND_MESSAGE
//     div.appendChild(img)
//     div.appendChild(msg)
//     return div
// }
