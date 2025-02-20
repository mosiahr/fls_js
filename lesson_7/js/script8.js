"use strict"

import { confirmBeginTest, getRandomNumber, renderTask } from "../../js/script.js"

const HOMEWORK_NUMBER = 7
const TASK_NUMBER = 8
const TASK_DEFINITION = `Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання,
								куди переходимо при кліку на зображення (тег img повине знаходитись у середині
								тега a: &lta&gt &ltimg src="шлях"&gt &lt/a&gt)`

const getRandomPath = (...path) => path[getRandomNumber(0, path.length - 1)]

const renderBanner = (src, title, href) => `
		<div class="banner">
			<h3>${title}</h3>
			<a href="${href}" target="_blank"><img src="${src}" alt="Image"></a>
		</div>`

const main = () => {
  const src = getRandomPath(
    "../img/facebook.svg",
    "../img/instagram.svg",
    "../img/whatsapp.svg",
    "../img/youtube.svg"
  )

  renderTask(
    HOMEWORK_NUMBER,
    TASK_NUMBER,
    TASK_DEFINITION,
    renderBanner(src, "Function", "https://uk.javascript.info/function-basics")
  )
}

confirmBeginTest(main)
