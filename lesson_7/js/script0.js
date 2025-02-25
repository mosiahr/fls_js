"use strict"

import { renderTask } from "../../js/script.js"
import { runWithConfirmStart, getRandomNumber } from "../../js/utils.js"

const HOMEWORK_NUMBER = 7
const TASK_NUMBER = 0
const TASK_DEFINITION =
  "Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць."
const MESSAGE_NOT_CORRECTED_NUMBER =
  "Sorry, you entered not corrected number.\nYou need to enter a number from 1 to 12."

const getMonthNumber = () =>
  parseInt(prompt("Enter your month number (1-12): ", getRandomNumber(1, 12)))

function isFoundNumberAmongThreeElements(number, element1, element2, element3) {
  return number === element1 || number === element2 || number === element3;
}

function getSeason(monthNumber) {
  let result
  switch (true) {
    case isFoundNumberAmongThreeElements(monthNumber, 12, 1, 2):
      result = "Winter"
      break
    case isFoundNumberAmongThreeElements(monthNumber, 3, 4, 5):
      result = "Spring"
      break
    case isFoundNumberAmongThreeElements(monthNumber, 6, 7, 8):
      result = "Summer"
      break
    case isFoundNumberAmongThreeElements(monthNumber, 9, 10, 11):
      result = "Autumn"
      break
    default:
      result = MESSAGE_NOT_CORRECTED_NUMBER
      break
  }
  return result
}

const main = () => {
  const monthNumber = getMonthNumber()
  const season = getSeason(monthNumber)
  const renderResult = `<ol>
		<li>Your month number = ${monthNumber}</li>
		<li>Season: ${season}</li>
	</ol>`

  renderTask(HOMEWORK_NUMBER, TASK_NUMBER, TASK_DEFINITION, renderResult)
}

runWithConfirmStart(main)
