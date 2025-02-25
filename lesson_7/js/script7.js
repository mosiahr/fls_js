"use strict"

import { renderTask } from "../../js/script.js"
import { runWithConfirmStart, getRandomNumber } from "../../js/utils.js"

const HOMEWORK_NUMBER = 7
const TASK_NUMBER = 7
const TASK_DEFINITION = `Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень
								передаються у функцію).`

const getRandomPath = (...path) => path[getRandomNumber(0, path.length - 1)]

const renderResult = (path) => {
  return `<ol><li>${path}</li></ol><ol><li>Random Image:  <img src="${path}" alt="Image"></li></ol>`
}

const main = () => {
  const path = getRandomPath(
    "../img/facebook.svg",
    "../img/instagram.svg",
    "../img/whatsapp.svg",
    "../img/youtube.svg"
  )

  renderTask(HOMEWORK_NUMBER, TASK_NUMBER, TASK_DEFINITION, renderResult(path))
}

runWithConfirmStart(main)
