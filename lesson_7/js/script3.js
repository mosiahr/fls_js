"use strict"

import { confirmBeginTest, getRandomNumber, renderTask } from "../../js/script.js"

const HOMEWORK_NUMBER = 7
const TASK_NUMBER = 3
const TASK_DEFINITION = `Створити окремі функції, які для 4 чисел знаходять:
	<ol class="page__number-list">
		<li>суму;</li>
		<li>добуток;</li>
		<li>середнє арифметичне;</li>
		<li>мінімальне значення.</li>
	</ol>`
const MESSAGE_NOT_CORRECTED_NUMBER =
  "Sorry, you entered not a number.\nYou need to enter a number."

const getNumber = (minRandomNumber = 0, maxRandomNumber = 999) =>
  parseInt(
    prompt(
      "Enter your number: ",
      getRandomNumber(minRandomNumber, maxRandomNumber)
    )
  )

const sumFourNumber = (num1, num2, num3, num4) => num1 + num2 + num3 + num4
const productFourNumber = (num1, num2, num3, num4) => num1 * num2 * num3 * num4
const arithmeticMeanFourNumber = (num1, num2, num3, num4) =>
  sumFourNumber(num1, num2, num3, num4) / 4

const minNumber = (num1, num2, num3, num4) => {
  let minNumber
  minNumber = num1 < num2 ? num1 : num2
  minNumber = minNumber < num3 ? minNumber : num3
  minNumber = minNumber < num4 ? minNumber : num4
  return minNumber
}

const renderResult = (num1, num2, num3, num4) => {
  let result = ""
  if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
    result = `<li>Massage: ${MESSAGE_NOT_CORRECTED_NUMBER}</li>`
  } else {
    result = `<li>Sum of Four Numbers: 
						${sumFourNumber(num1, num2, num3, num4)}</li>
					<li>Product of Four Numbers: ${productFourNumber(num1, num2, num3, num4)}</li>
					<li>Arithmetic Mean of Four Numbers:
					${arithmeticMeanFourNumber(num1, num2, num3, num4)}</li>
					<li>Min Number Among Four Numbers: ${minNumber(num1, num2, num3, num4)}</li>`
  }

  return `<ol>
			<li>First Number = ${num1}</li>
			<li>Second Number = ${num2}</li>
			<li>Third Number = ${num3}</li>
			<li>Fourth Number = ${num4}</li>
		</ol>
		<ol class="page__number-list">${result}</ol>`
}

const main = () => {
  const num1 = getNumber(-200, 130)
  const num2 = getNumber()
  const num3 = getNumber()
  const num4 = getNumber()

  renderTask(
    HOMEWORK_NUMBER,
    TASK_NUMBER,
    TASK_DEFINITION,
    renderResult(num1, num2, num3, num4)
  )
}

confirmBeginTest(main)
