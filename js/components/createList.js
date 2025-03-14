export default function createList(items, className = "") {
    let result = className ? `<ul class="${className}">` : `<ul>`
    for (let i = 0; i < items.length; i++) {
        result += `<li>${items[i]}</li>`
    }
    result += `</ul>`
    return result
}
