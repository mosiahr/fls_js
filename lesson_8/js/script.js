import {
    createPage,
    createHeader,
    createElem,
    createList,
    createFooter,
    createTask,
    createTasks,
    createLogo,
    createTaskSolution
} from "../../js/page/index.js"

// import {renderTask} from "../../js/script.js"
import render from "../../js/render.js"
import {FOOTER_INFO} from "../../js/config.js";
import {runWithConfirmStart, getURLSearchParams} from "../../js/utils.js"

import task0 from "./task0.js"
import task1 from "./task1.js"

const HOMEWORK_NUMBER = 8
const taskFuncArr = [task0, task1]

const taskDefinitionArr = [
    // TODO: Consider 'get data from JSON'
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
    createHeader(createLogo(), createElem("h1", `Homework ${HOMEWORK_NUMBER}`)),
    createFooter(FOOTER_INFO),
    createElem("h2",
        "Tasks to Test",
        {class: "page-block__title-list"}),
    createList(tasks, "page__list"),
)

function runTask(taskNumber, funcArr) {
    try {
        for (let i = 0; i < funcArr.length; i++) {
            if (funcArr[i].name === `task${taskNumber}`) {
                return runWithConfirmStart(funcArr[i])
            }
        }
    } catch (err) {
        console.error(err)
    }
}

const taskNumber = getURLSearchParams("task")

if (taskNumber) {
    const taskPage = createPage(
        createHeader(createLogo(), createElem("h1", `Homework ${HOMEWORK_NUMBER} / Task ${taskNumber}`)),
        createFooter(FOOTER_INFO),
        createElem("h2",
            "Test task page",
            {class: "page-block__title-list"}),
        createList([
            createTask(taskNumber, taskDefinitionArr[taskNumber], `.?task=${taskNumber}`),
            createTaskSolution(taskNumber,
                createList(runTask(taskNumber, taskFuncArr)))
        ], "page__list")
    )
    // let [enterData, arithmeticMeanNum, typePupil] = runTask(taskNumber, taskFuncArr)
    // console.log(enterData, arithmeticMeanNum, typePupil)
    render(taskPage)
    // confirmBeginTest(renderTask(8, taskNumber, taskDefinitionArr[taskNumber]))
} else
    render(taskListPage)

