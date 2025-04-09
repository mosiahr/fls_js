import { toUpperCaseFirstLetterEveryWord } from "../utils.js"

export default function table(headers = [], arrayOfArray, caption = "") {
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

    // creating all cells
    for (let i = 0; i < arrayOfArray.length; i++) {
        // creates a table row
        const row = document.createElement("tr")

        for (let j = 0; j < arrayOfArray[i].length; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            const cell = document.createElement("td")
            const cellText = document.createTextNode(arrayOfArray[i][j])
            cell.append(cellText)
            row.append(cell)
        }

        // add the row to the end of the table body
        tableBody.append(row)
    }

    table.append(tableBody)
    return table
}
