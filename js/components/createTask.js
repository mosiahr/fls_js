export default function createTask(taskNumber, taskDefinition, taskPath) {
  return `<h3>Task ${taskNumber}</h3>
			<p>${taskDefinition}</p>
			<a class="button button--hover-purple-background"
				href="${taskPath}"><span>Solution</span></a>`
}
