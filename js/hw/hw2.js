import { runWithConfirmStart, getNumbersFromCurrentFileName } from "../utils.js"

const lesson = getNumbersFromCurrentFileName(import.meta)

//* =========================  Task #1  ===========================

export function task1() {
    const a =
        Math.round(parseFloat(prompt("Enter first number, please", 0)) * 100) /
        100

    const b =
        Math.round(parseFloat(prompt("Enter second number, please", 0)) * 100) /
        100

    const c =
        Math.round(parseFloat(prompt("Enter third number, please", 0)) * 100) /
        100

    const s1 = a + 12 + b
    const s2 = Math.sqrt((a + b) / (2 * a))
    const s3 = Math.cbrt((a + b) * c)
    const s4 = Math.sin(a / (-1 * b))

    return `<ol>
		<li>a = ${a}</li>
		<li>b = ${b}</li>
		<li>c = ${c}</li>
		<li>===========</li>
		<li>S1 = ${s1.toFixed(2)}</li>
		<li>S2 = ${s2.toFixed(2)}</li>
		<li>S3 = ${s3.toFixed(2)}</li>
		<li>S4 = ${s4.toFixed(2)}</li>
	</ol>`.toString()
}

task1.solutionParams = {
    code: String.raw`const a = Math.round(
		parseFloat(prompt("Enter first number, please", 0)) * 100) / 100

const b = Math.round(parseFloat(prompt("Enter second number, please", 0)) * 100) /
        100

const c = Math.round(parseFloat(prompt("Enter third number, please", 0)) * 100) /
        100

const s1 = a + 12 + b
const s2 = Math.sqrt((a + b) / (2 * a))
const s3 = Math.cbrt((a + b) * c)
const s4 = Math.sin(a / (-1 * b))`,
    name: "Вступ до веб-програмування. Вступ до JS. Лінійні алгоритми.",
    title: "",
    lesson,
    task: 1,
    params: [],
}

console.log(lesson)
