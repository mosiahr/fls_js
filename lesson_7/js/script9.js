"use strict"

import { renderTask } from "../../js/script.js"
import { confirmBeginTest } from "../../js/utils.js"

const HOMEWORK_NUMBER = 7
const TASK_NUMBER = 9
const TASK_DEFINITION = `Дано покази температур (довільна кількість). Розробити функцію, яка дозволить підрахувати
								кількість відʼємних показів температури.`

const countNegativeTemperature = (...arr) => {
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) count++
  }
  return count
}

const renderResult = (countNegativeTemperature, temperatures) => {
  return `<ol><li>Temperatures: ${temperatures}</li></ol>
  <ol><li>Count of Negative Temperature: ${countNegativeTemperature}</li></ol>`
}

const main = () => {
  const temperatures = [10, 32, -12, 7, -22]
  const countNegTemp = countNegativeTemperature(...temperatures)

  renderTask(
    HOMEWORK_NUMBER,
    TASK_NUMBER,
    TASK_DEFINITION,
    renderResult(countNegTemp, temperatures)
  )
}

confirmBeginTest(main)
