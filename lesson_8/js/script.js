"use strict"

import {
    createPage,
    createHeader,
    createElem,
    createList,
    createFooter,
    createTasks,
    createLogo,
} from "/js/page/index.js"

import {renderTask} from "/js/script.js"
import render from "/js/render.js"
import {FOOTER_INFO} from "/js/config.js";
import {getURLSearchParams} from "/js/utils.js"

const taskDefinitionArr = [
    `Дано масив, який містить оцінки з К предметів. 
	  Знайти середній бал і зʼясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), 
	  хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).`,
    `Дано масив, який зберігає кількість відвідувачів магазину протягом тижня.
	  Вивести на екран:
		  номери днів, протягом яких кількість відвідувачів була меншою за 20; 
		  номери днів, коли кількість відвідувачів була мінімальною; 
		  номери днів, коли кількість відвідувачів була мінімальною; 
		  загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.`,
    `Дано масив імен учнів. Зʼясувати скільки разів зустрічається імʼя «Іван».`,
    `Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :
		  починаються на букву «А»;
		  перша і остання літери співпадають;
		  складаються з більше ніш 5 символів;`,
]

const tasks = createTasks(taskDefinitionArr)

const taskListPage = createPage(
    createHeader(createLogo(), createElem("h1", "Homework 8")),
    createFooter(FOOTER_INFO),
    createElem("h2",
        "Required tasks",
        {class: "page-block__title-list"}),
    createList(tasks),
)

render(taskListPage)

const taskNumber = getURLSearchParams("task")

if (taskNumber) {
    renderTask(8, taskNumber, taskDefinitionArr[taskNumber])
}
