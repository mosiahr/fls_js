"use strict"

import { renderTask } from "../../js/script.js"
import {confirmBeginTest, roundDecimal} from "/js/utils.js"

const HOMEWORK_NUMBER = 7
const TASK_NUMBER = 10
const TASK_DEFINITION = `Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє
								значення для додатних показів температури.`

const arithmeticMeanArrElements = (arr) => {
  let sumPositiveTemp = 0
  let countPositiveTemp = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sumPositiveTemp += arr[i]
      countPositiveTemp += 1
    }
  }
  return roundDecimal(sumPositiveTemp / countPositiveTemp)
}

const renderResult = (arithmeticMeanArrElements, temperatures) => {
  return `<ol><li>Temperatures: ${temperatures}</li></ol>
  <ol><li>Arithmetic Mean of Positive Temperatures: ${arithmeticMeanArrElements}</li></ol>`
}

const main = () => {
  const temperatures = [10, 32, -12, 7, -22]
  const arithmeticMean = arithmeticMeanArrElements(temperatures)

  renderTask(
    HOMEWORK_NUMBER,
    TASK_NUMBER,
    TASK_DEFINITION,
    renderResult(arithmeticMean, temperatures)
  )
}

confirmBeginTest(main)
