import { createElem } from "../components/index.js"
import { MainPage } from "./index.js"

export const lessonPage = new MainPage(
    "",
    "",
    createElem("h2", "Lesson # Page", { class: "page-block__title-list" }),
    `<ul class="page__main-list">
  	<li>
  		<a class="item-homework" href="#">
  			<h3>Lesson</h3>
  		</a>
  	</li>
  </ul>
  `
)
