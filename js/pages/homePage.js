import { createElem } from "../components/index.js"
import { MainPage } from "./index.js"

export const homePage = new MainPage(
    "",
    "",
    createElem("h2", "Home Page", { class: "page-block__title-list" }),
    `<ul class="page__main-list">
		<li>
			<a class="item-homework" href="./#/lessons/">
				<h3>Lessons</h3>
			</a>
		</li>
	</ul>`
)
