"use strict"

import { renderTask } from "../../js/script.js"
import { runWithConfirmStart, getRandomNumber } from "../../js/utils.js"

const HOMEWORK_NUMBER = 7
const TASK_NUMBER = 1
const TASK_DEFINITION =
  "Створити функцію, яка за номером місяця повертає його назву."
const MESSAGE_NOT_CORRECTED_NUMBER =
  "Sorry, you entered not corrected number.\nYou need to enter a number from 1 to 12."

const getMonthNumber = () =>
  parseInt(prompt("Enter your month number (1-12): ", getRandomNumber(1, 12)))

function getMonthName(monthNumber) {
  let result = ""

  if (monthNumber < 1 || monthNumber > 12) result = MESSAGE_NOT_CORRECTED_NUMBER
  else if (monthNumber === 1) result = "January"
  else if (monthNumber === 2) result = "February"
  else if (monthNumber === 3) result = "March"
  else if (monthNumber === 4) result = "April"
  else if (monthNumber === 5) result = "May"
  else if (monthNumber === 6) result = "June"
  else if (monthNumber === 7) result = "July"
  else if (monthNumber === 8) result = "Augest"
  else if (monthNumber === 9) result = "September"
  else if (monthNumber === 10) result = "October"
  else if (monthNumber === 11) result = "November"
  else if (monthNumber === 12) result = "December"

  return result
}

const renderResultGetMonthName = (monthNumber) => {
  let result = ""
  if (isNaN(monthNumber)) {
    result = `Massage: ${MESSAGE_NOT_CORRECTED_NUMBER}`
  } else {
    if (monthNumber < 1 || monthNumber > 12) {
      result = `Massage: ${MESSAGE_NOT_CORRECTED_NUMBER}`
    } else {
      const monthName = getMonthName(monthNumber)
      result = `Month Name: ${monthName}`
    }
  }

  return `<ol>
			<li>Month Number = ${monthNumber}</li>
			<li>${result}</li>
		</ol>`
}

const main = () => {
  const monthNumber = getMonthNumber()

  renderTask(
    HOMEWORK_NUMBER,
    TASK_NUMBER,
    TASK_DEFINITION,
    renderResultGetMonthName(monthNumber)
  )
}

runWithConfirmStart(main)
