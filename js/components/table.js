import { toUpperCaseFirstLetterEveryWord } from "../utils.js"

export default function table(
    headers = [],
    arrayOfArray,
    caption = "",
    ...args
) {
    const table = document.createElement("table")

    if (caption) {
        const captionTable = table.createCaption()
        captionTable.textContent = toUpperCaseFirstLetterEveryWord(caption)
    }

    if (headers) {
        let header = table.createTHead()
        let headerRow = header.insertRow(0)

        for (let i = 0; i < headers.length; i++) {
            headerRow.insertCell(i).innerHTML = headers[i].toUpperCase()
        }
    }

    const tableBody = document.createElement("tbody")

    for (let i = 0; i < arrayOfArray.length; i++) {
        const row = document.createElement("tr")

        for (let j = 0; j < arrayOfArray[i].length; j++) {
            let cellText
            const cell = document.createElement("td")
            if (arrayOfArray[i][j] instanceof Element) {
                cellText = arrayOfArray[i][j]
            } else {
                cellText = document.createTextNode(arrayOfArray[i][j])
            }

            cell.append(cellText)
            row.append(cell)
        }

        tableBody.append(row)
    }

    table.append(tableBody)
    return table
}
