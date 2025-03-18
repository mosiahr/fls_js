import { createElem } from "../components/index.js"
import { Page } from "./index.js"

export const taskPage = new Page(
    "",
    "",
    createElem("h2", "Task #", { class: "page-block__title-list" }),
    `<ul class="page__main-list">
		<li>
			<a class="item-homework" href="#">
				<h3>Task #</h3>
			</a>
		</li>
	</ul>`
)
