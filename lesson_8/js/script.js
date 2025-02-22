"use strict"

import { createPage } from "/js/page/index.js"
import render from "/js/render.js"

const arrTaskDefinition = [
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

render(createPage(arrTaskDefinition, 8))
