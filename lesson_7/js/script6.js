"use strict"

import { confirmBeginTest, getRandomNumber, renderTask } from "../../js/script.js"

const HOMEWORK_NUMBER = 7
const TASK_NUMBER = 6
const TASK_DEFINITION = `Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця
								заповнюється заданим фіксованим повідомленням).`
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
) => parseInt(prompt(massage, getRandomNumber(minRandomNumber, maxRandomNumber)))

const renderResult = (numberRow, numberColumn, message) => {
  let result = ""
  if (isNaN(numberRow) || isNaN(numberColumn)) {
    result = `<li>Massage: ${MESSAGE_NOT_CORRECTED_NUMBER}</li>`
  } else {
    result = createTable(numberRow, numberColumn, message)
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
