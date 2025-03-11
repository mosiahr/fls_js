import { createElem } from "../components/index.js"
import { MainPage } from "./index.js"

export const lessonsPage = new MainPage(
    "",
    "",
    createElem("h2", "Lessons Page", { class: "page-block__title-list" }),
    `<ul class="page__main-list">
		<li>
			<a class="item-homework" href="lesson_2/index.html">
				<h3>Homework 2</h3>
				<p>Вступ до веб-програмування. Вступ до JS. Лінійні алгоритми.</p>
			</a>
		</li>
		<li>
			<a class="item-homework" href="lesson_3/index.html">
				<h3>Homework 3</h3>
				<p>Арифметичні і логічні вирази. Реалізація алгоритмів з розгалуженням.</p>
			</a>
		</li>
		<li>
			<a class="item-homework" href="lesson_7/index.html">
				<h3>Homework 7</h3>
				<p>Функції.</p>
			</a>
		</li>
		<li>
			<a class="item-homework" href="lesson_8/index.html">
				<h3>Homework 8</h3>
				<p>Масиви.</p>
			</a>
		</li>
	</ul>
	`
)
