"use strict"

import { confirmBeginTest, randomNumber, renderTask } from "../../js/script.js"

const HOMEWORK_NUMBER = 7
const TASK_NUMBER = 7
const TASK_DEFINITION = `Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень
								передаються у функцію).`
const MESSAGE_NOT_CORRECTED_NUMBER =
  "Sorry, you entered not a number.\nYou need to enter a number."

const createTable = (numRow, numCol, message) => {
  let table = `<table>`
  for (let i = 0; i < numRow; i++) {
    table += `<tr>`
    for (let j = 0; j < numCol; j++) {
      table += `<th>${message}</th>`
    }
    table += `</tr>`
  }
  table += `</table>`

  return table
}

const getNumber = (
  massage = "Enter your number: ",
  minRandomNumber = 0,
  maxRandomNumber = 999
) => parseInt(prompt(massage, randomNumber(minRandomNumber, maxRandomNumber)))

const convertCmToInch = (number) => number / 2.54
const convertKgToPound = (number) => number * 2.2046226218
const convertKmToMile = (number) => number * 0.6213711922

const roundDecimal = (number) => Math.round(parseFloat(number) * 100) / 100

const renderResult = (numberRow, numberColumn, message) => {
  let result = ""
  if (isNaN(numberRow) || isNaN(numberColumn)) {
    result = `<li>Massage: ${MESSAGE_NOT_CORRECTED_NUMBER}</li>`
  } else {
    const table = createTable(numberRow, numberColumn, message)

    result = table
  }

  return `<ol>
		<li>Number of Rows = ${numberRow}</li>
		<li>Number of Columns = ${numberColumn}</li>
		<li>Message = ${message}</li>
  	</ol>
	<ol class="page__number-list">${result}</ol>`
}

const main = () => {
  const numberRow = getNumber("Enter number of rows: ", 1, 10)
  const numberColumn = getNumber("Enter number of columns: ", 1, 5)

  renderTask(
    HOMEWORK_NUMBER,
    TASK_NUMBER,
    TASK_DEFINITION,
    renderResult(numberRow, numberColumn, "JavaScript")
  )
}

confirmBeginTest(main)
