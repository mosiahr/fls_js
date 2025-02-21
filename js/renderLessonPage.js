"use strict"

import createHeaderPage from "./createHeaderPage.js"
import createTask from "./createTask.js"
import createList from "./createList.js"
import createMainPage from "./createMainPage.js"
import createFooterPage from "./createFooterPage.js"

export function renderLessonPage(
  arrTaskDefinition,
  homeworkNumber,
  footerInfo = "© 2025 Gregory Mosia"
) {
  let tasks = []
  for (let i = 0; i < arrTaskDefinition.length; i++) {
    tasks.push(createTask(i, arrTaskDefinition[i], `./tasks/task${i}.html`))
  }

  document.body.innerHTML = `
	<body>
		<div class="wrapper">
			${createHeaderPage(homeworkNumber)}
			${createMainPage(createList(tasks))}
			${createFooterPage(footerInfo)}
		</div>
	</body>`
}
