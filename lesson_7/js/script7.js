"use strict"

import { confirmBeginTest, getRandomNumber, renderTask } from "../../js/script.js"

const HOMEWORK_NUMBER = 7
const TASK_NUMBER = 7
const TASK_DEFINITION = `Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень
								передаються у функцію).`

const getRandomPath = (path1, path2, path3, path4) => {
  const pathArr = [path1, path2, path3, path4]
  const number = getRandomNumber(0, pathArr.length - 1)
  return pathArr[number]
}

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

confirmBeginTest(main)
