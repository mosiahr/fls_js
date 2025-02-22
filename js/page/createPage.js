import createHeader from "./createHeader.js"
import createHeading from "./createHeading.js"
import createTask from "./createTask.js"
import createList from "./createList.js"
import createFooter from "./createFooter.js"

export default function createPage(
  arrTaskDefinition,
  homeworkNumber,
  footerInfo = "© 2025 Gregory Mosia"
) {
  let tasks = []
  for (let i = 0; i < arrTaskDefinition.length; i++)
    tasks.push(createTask(i, arrTaskDefinition[i], `./tasks/task${i}.html`))

  return `<body>
            <div class="wrapper">
                ${createHeader(homeworkNumber)}
                
                <main class="page">
                    <div class="page__container">
                        <div class="page-block">
                            ${createHeading(
                              "Required tasks",
                              "page-block__title-list"
                            )}
                            ${createList(tasks)}
                        </div>
                    </div>
                </main>
                
                ${createFooter(footerInfo)}
            </div>
        </body>`
}
