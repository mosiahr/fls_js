"use strict"

import { renderTask } from "../../js/script.js"
import { confirmBeginTest, getRandomNumber } from "../../js/utils.js"

const HOMEWORK_NUMBER = 7
const TASK_NUMBER = 2
const TASK_DEFINITION =
  "Створити функцію, яка за номером дня дозволяє зʼясувати чи є цей день робочим."
const MESSAGE_NOT_CORRECTED_NUMBER =
  "Sorry, you entered not corrected number.\nYou need to enter a number from 1 to 7."

const getDayNumber = () =>
  parseInt(prompt("Enter your day number (1-7): ", getRandomNumber(1, 7)))

const isWorkingDay = (dayNumber) => dayNumber >= 1 && dayNumber <= 5

const renderResultIsWorkingDay = (dayNumber) => {
  let result = ""
  if (isNaN(dayNumber)) {
    result = `Massage: ${MESSAGE_NOT_CORRECTED_NUMBER}`
  } else {
    if (dayNumber < 1 || dayNumber > 7) {
      result = `Massage: ${MESSAGE_NOT_CORRECTED_NUMBER}`
    } else {
      result = `Is this day a working day?: ${isWorkingDay(dayNumber)}`
    }
  }

  return `<ol>
			<li>Day Number = ${dayNumber}</li>
			<li>${result}</li>
		</ol>`
}

const main = () => {
  const dayNumber = getDayNumber()

  renderTask(
    HOMEWORK_NUMBER,
    TASK_NUMBER,
    TASK_DEFINITION,
    renderResultIsWorkingDay(dayNumber)
  )
}

confirmBeginTest(main)
