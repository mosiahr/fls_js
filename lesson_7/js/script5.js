"use strict"

import { confirmBeginTest, randomNumber, renderTask } from "../../js/script.js"

const HOMEWORK_NUMBER = 7
const TASK_NUMBER = 5
const TASK_DEFINITION = `Створити окремі функції, які переводять::
	<ol class="page__number-list">
		<li>Сантиметри у дюйми;</li>
		<li>Кілограми у фунти;</li>
		<li>Кілометри у милі.</li>
	</ol>`
const MESSAGE_NOT_CORRECTED_NUMBER =
  "Sorry, you entered not a number.\nYou need to enter a number."

const getNumber = (
  massage = "Enter your number: ",
  minRandomNumber = 0,
  maxRandomNumber = 999
) => parseInt(prompt(massage, randomNumber(minRandomNumber, maxRandomNumber)))

const convertCmToInch = (number) => number / 2.54
const convertKgToPound = (number) => number * 2.2046226218
const convertKmToMile = (number) => number * 0.6213711922

const roundDecimal = (number) => Math.round(parseFloat(number) * 100) / 100

const renderResult = (number) => {
  let result = ""
  if (isNaN(number)) {
    result = `<li>Massage: ${MESSAGE_NOT_CORRECTED_NUMBER}</li>`
  } else {
    const resConvertCmToInch = roundDecimal(convertCmToInch(number))
    const resСonvertKgToPound = roundDecimal(convertKgToPound(number))
    const resСonvertKmToMile = roundDecimal(convertKmToMile(number))

    result = `<li>To Inch: ${number}cm => ${resConvertCmToInch} in</li>
					<li>To Pound: ${number}Kg => ${resСonvertKgToPound} pound [lbs]</li>
					<li>To Mile: ${number}Km => ${resСonvertKmToMile} mi</li>`
  }

  return `<ol><li>Number = ${number}</li></ol>
		<ol class="page__number-list">${result}</ol>`
}

const main = () => {
  const number = getNumber()

  renderTask(
    HOMEWORK_NUMBER,
    TASK_NUMBER,
    TASK_DEFINITION,
    renderResult(number)
  )
}

confirmBeginTest(main)
