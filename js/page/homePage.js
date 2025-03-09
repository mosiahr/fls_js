import {
    createElem,
    createFooter,
    createHeader,
    createList,
    createLogo,
    createPage,
} from "./index.js"
import { MAIN_HEADER_TITLE, FOOTER_INFO } from "../config.js"

// const HOMEWORK_NUMBER = 8

export const homePage = createPage(
    createHeader(createLogo(), createElem("h1", MAIN_HEADER_TITLE)),
    createFooter(FOOTER_INFO),
    createElem("h2", "Home Page", { class: "page-block__title-list" }),
    `<ul class="page__main-list">
  	<li>
  		<a class="item-homework" href="./#/lessons/">
  			<h3>Lessons</h3>
  		</a>
  	</li>
  </ul>
  `
)
