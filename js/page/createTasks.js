import createTask from "./createTask.js"

export default function createTasks(taskDefinitionArr) {
  let tasks = []
  for (let i = 0; i < taskDefinitionArr.length; i++)
    tasks.push(createTask(i, taskDefinitionArr[i], `.?task=${i}`))
  return tasks
}
