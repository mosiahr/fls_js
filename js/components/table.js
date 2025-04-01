export default function table(headers = [], arrayOfArray) {
    const table = document.createElement("table")

    if (headers) {
        let header = table.createTHead()
        let headerRow = header.insertRow(0)

        for (let i = 0; i < headers.length; i++) {
            headerRow.insertCell(i).innerHTML = headers[i]
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
            cell.appendChild(cellText)
            row.appendChild(cell)
        }

        // add the row to the end of the table body
        tableBody.appendChild(row)
    }

    table.appendChild(tableBody)
    return table
}
