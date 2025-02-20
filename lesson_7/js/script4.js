"use strict"

import { confirmBeginTest, getRandomNumber, renderTask } from "../../js/script.js"

const HOMEWORK_NUMBER = 7
const TASK_NUMBER = 4
const TASK_DEFINITION = `Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість
								парних, кількість додатних, кількість більших за 100.`
const MESSAGE_NOT_CORRECTED_NUMBER =
  "Sorry, you entered not a number.\nYou need to enter a number."

const getNumber = (minRandomNumber = 0, maxRandomNumber = 999) =>
  parseInt(
    prompt(
      "Enter your number: ",
      getRandomNumber(minRandomNumber, maxRandomNumber)
    )
  )

const isEven = (number) => number % 2 == 0
const isPositive = (number) => number > 0
const isMoreThanOneHundred = (number) => number > 100

function countNumber(num1, num2, num3) {
  let countIsEven = 0
  let countIsPositive = 0
  let countIsMoreThanOneHundred = 0

  const numbers = [num1, num2, num3]
  numbers.forEach((item) => {
    if (isEven(item)) countIsEven += 1
    if (isPositive(item)) countIsPositive += 1
    if (isMoreThanOneHundred(item)) countIsMoreThanOneHundred += 1
  })

  return [countIsEven, countIsPositive, countIsMoreThanOneHundred]
}

const renderResult = (num1, num2, num3) => {
  let result = ""
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    result = `<li>Massage: ${MESSAGE_NOT_CORRECTED_NUMBER}</li>`
  } else {
    const resCountNumber = countNumber(num1, num2, num3)
    result = `<li>Amount of even numbers: 
						${resCountNumber[0]}</li>
					<li>Amount of positive numbers: ${resCountNumber[1]}</li>
					<li>Amount of numbers that more than 100: ${resCountNumber[2]}</li>`
  }

  return `<ol>
			<li>First Number = ${num1}</li>
			<li>Second Number = ${num2}</li>
			<li>Third Number = ${num3}</li>
		</ol>
		<ol class="page__number-list">${result}</ol>`
}

const main = () => {
  const num1 = getNumber(10, 130)
  const num2 = getNumber()
  const num3 = getNumber()

  renderTask(
    HOMEWORK_NUMBER,
    TASK_NUMBER,
    TASK_DEFINITION,
    renderResult(num1, num2, num3)
  )
}

confirmBeginTest(main)
