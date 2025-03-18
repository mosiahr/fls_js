import { createElem, createList } from "../components/index.js"
import { Page } from "./index.js"
// import { objData } from "../index.js"

// import { objD } from "../index.js"

// import data from "../../data.json" with { type: "json" }
// import Data from "../data/data.js"

// export const objD = new Data(data).getObjectData()
// console.log(objD);

// export default class LessonsPage extends MainPage {
//     constructor(args) {
//         super(args)
//         // console.log("LESSONS PAGE: ", this._objData)
//         this._pageElements.push(createList(this.content(), "page__main-list"))
//     }

//     content() {
//         const res = []
//         for (const lesson of this._objData) {
//             const item = createElem(
//                 "a",
//                 createElem("h2", lesson.name) +
//                     "\n" +
//                     createElem("p", lesson.title),
//                 { class: "item-homework" }
//             )
//             res.push(item)
//         }
//         return res
//     }
// }

// const content = () => {
//     const res = []
//     for (const lesson of objData) {
//         const item = createElem(
//             "a",
//             createElem("h2", lesson.name) +
//                 "\n" +
//                 createElem("p", lesson.title),
//             { class: "item-homework" }
//         )
//         res.push(item)
//     }
// }

export const lessonsPage = new Page(
    "",
    "",
    createElem("h2", "Lessons Page", { class: "page-block__title-list" })
    // createList(content())

    // `<ul class="page__main-list">
    // 	<li>
    // 		<a class="item-homework" href="lesson_2/index.html">
    // 			<h3>Homework 2</h3>
    // 			<p>Вступ до веб-програмування. Вступ до JS. Лінійні алгоритми.</p>
    // 		</a>
    // 	</li>
    // 	<li>
    // 		<a class="item-homework" href="lesson_3/index.html">
    // 			<h3>Homework 3</h3>
    // 			<p>Арифметичні і логічні вирази. Реалізація алгоритмів з розгалуженням.</p>
    // 		</a>
    // 	</li>
    // 	<li>
    // 		<a class="item-homework" href="lesson_7/index.html">
    // 			<h3>Homework 7</h3>
    // 			<p>Функції.</p>
    // 		</a>
    // 	</li>
    // 	<li>
    // 		<a class="item-homework" href="lesson_8/index.html">
    // 			<h3>Homework 8</h3>
    // 			<p>Масиви.</p>
    // 		</a>
    // 	</li>
    // </ul>
    // `
)
