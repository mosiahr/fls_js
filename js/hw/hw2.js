import { runWithConfirmStart, getNumbersFromCurrentFileName } from "../utils.js"
import { PROJECT_FOLDER } from "../config.js"

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
    const s4 = Math.sin(a / -b)
    // console.log(s1, s2, s3, s4)

    return `<ul>
		<li>===================</li>
		<li>Your entered numbers: </li>
		<li>===================</li>
		<li>a = ${a}</li>
		<li>b = ${b}</li>
		<li>c = ${c}</li>
		<li>=============</li>
		<li>Solutoin result: </li>
		<li>=============</li>
		<li>S1 = ${s1.toFixed(2)}</li>
		<li>S2 = ${s2.toFixed(2)}</li>
		<li>S3 = ${s3.toFixed(2)}</li>
		<li>S4 = ${s4.toFixed(2)}</li>
	</ul>`.toString()
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
const s4 = Math.sin(a / -b)`,
    name: "Вступ до веб-програмування. Вступ до JS. Лінійні алгоритми.",
    title: "",
    lesson,
    task: 1,
    params: [],
}

// console.log(lesson)

// naxtVal = (val - min + delta) % (max - min + 1) + min

//* =========================  Task #2  ===========================
export function task2() {
    const firstNumber = parseInt(prompt("Enter first number, please", 0))
    const secondNumber = parseInt(prompt("Enter second number, please", 0))

    const sum = firstNumber + secondNumber
    const multiple = firstNumber * secondNumber
    const divide = firstNumber / secondNumber

    return `<table>
				<tr>
					<th>Sum</th>
					<th>Multiple</th>
					<th>Division</th>
				</tr>
				<tr>
					<td>${sum.toFixed(2)}</td>
					<td>${multiple.toFixed(2)}</td>
					<td>${divide.toFixed(2)}</td>
				</tr>
			</table>`
}
task2.solutionParams = {
    code: String.raw`const firstNumber = parseInt(prompt("Enter first number, please", 0))
const secondNumber = parseInt(prompt("Enter second number, please", 0))

const sum = firstNumber + secondNumber
const multiple = firstNumber * secondNumber
const divide = firstNumber / secondNumber`,
    name: "Вступ до веб-програмування. Вступ до JS. Лінійні алгоритми.",
    title: "",
    lesson,
    task: 2,
    params: [],
}

//* =========================  Task #3  ===========================
export function task3() {
    const birthYear = parseInt(prompt("Enter birth year, please", 0))
    const currentYear = parseInt(prompt("Enter current year, please", 0))
    const yearsVolume = currentYear - birthYear

    return `<ol>
				<li>Birth Year = ${birthYear}</li>
				<li>Current Year = ${currentYear}</li>
				<li>Volume of Years= ${yearsVolume}</li>
			</ol>`
}
task3.solutionParams = {
    code: String.raw`const birthYear = parseInt(prompt("Enter birth year, please", 0))
const currentYear = parseInt(prompt("Enter current year, please", 0))
const yearsVolume = currentYear - birthYear`,
    name: "Вступ до веб-програмування. Вступ до JS. Лінійні алгоритми.",
    title: "",
    lesson,
    task: 3,
    params: [],
}

//* =========================  Task #4  ===========================
export function task4() {
    const valueOneProduct = parseFloat(
        prompt("Enter value of the product, please", 0)
    )
    const productVolume = parseInt(
        prompt("Enter volume of the products, please", 0)
    )
    const totalValue = valueOneProduct * productVolume
    const vat = totalValue * 0.05

    return `<ol>
				<li>Value of One Product: ${valueOneProduct.toFixed(2)}</li>
				<li>Product Volume: ${productVolume}</li>
				<li>Total Volume: ${totalValue.toFixed(2)}</li>
				<li>VAT (5%): ${vat.toFixed(2)}</li>
			</ol>`
}
task4.solutionParams = {
    code: String.raw`const valueOneProduct = parseFloat(
	prompt("Enter value of the product, please", 0)
)
const productVolume = parseInt(
	prompt("Enter volume of the products, please", 0)
)
const totalValue = valueOneProduct * productVolume
const vat = totalValue * 0.05`,
    name: "Вступ до веб-програмування. Вступ до JS. Лінійні алгоритми.",
    title: "",
    lesson,
    task: 4,
    params: [],
}

//* =========================  Task #5  ===========================
export function task5() {
    const numberСentimeters = parseInt(
        prompt("Enter number of centimeters, please", 0)
    )
    const numberMeters = numberСentimeters / 100
    const numberKilometers = numberСentimeters / 100000

    return `<ol>
				<li>Volume of Centimeters: ${numberСentimeters}cm</li>
				<li>Volume of Meters: ${numberMeters}m</li>
				<li>Volume of Kilometers: ${numberKilometers}km</li>
			</ol>`
}
task5.solutionParams = {
    code: String.raw`const numberСentimeters = parseInt(
	prompt("Enter number of centimeters, please", 0)
)
const numberMeters = numberСentimeters / 100
const numberKilometers = numberСentimeters / 100000`,
    name: "Вступ до веб-програмування. Вступ до JS. Лінійні алгоритми.",
    title: "",
    lesson,
    task: 5,
    params: [],
}

//* =========================  Task #6  ===========================
export function task6() {
    const numberSeconds = parseInt(prompt("Enter number of seconds, please", 0))
    const numHours = Math.floor(numberSeconds / 3600)
    const numMinutes = Math.floor((numberSeconds % 3600) / 60)
    const numSec = numberSeconds % 60

    return `<ol>
				<li>Volume of Seconds: ${numberSeconds}</li>
				<li><b>Time Passed:</b> ${numHours}h ${numMinutes}min ${numSec}s</li>
			</ol>`
}
task6.solutionParams = {
    code: String.raw`const numberSeconds = parseInt(prompt("Enter number of seconds, please", 0))
const numHours = Math.floor(numberSeconds / 3600)
const numMinutes = Math.floor((numberSeconds % 3600) / 60)
const numSec = numberSeconds % 60`,
    name: "Вступ до веб-програмування. Вступ до JS. Лінійні алгоритми.",
    title: "",
    lesson,
    task: 6,
    params: [],
}

//* =========================  Task #7  ===========================
export function task7() {
    const defaultFirstItem = 20.91
    const defaultSecondItem = 55
    const defaultThirdItem = 32.2
    const defaultVolume = 2

    const priceFirstItem =
        Math.round(
            parseFloat(
                prompt("Enter price of first item, please", defaultFirstItem)
            ) * 100
        ) / 100

    const volumeFirstItem = parseInt(
        prompt("Enter volume of first item, please", defaultVolume)
    )

    const priceSecondItem =
        Math.round(
            parseFloat(
                prompt("Enter price of second item, please", defaultSecondItem)
            ) * 100
        ) / 100

    const volumeSecondItem = parseInt(
        prompt("Enter volume of second item, please", defaultVolume)
    )

    const priceThirdItem =
        Math.round(
            parseFloat(
                prompt("Enter price of third item, please", defaultThirdItem)
            ) * 100
        ) / 100

    const volumeThirdItem = parseInt(
        prompt("Enter volume of third item, please", defaultVolume)
    )

    const valueFirstItem = priceFirstItem * volumeFirstItem
    const valueSecondItem = priceSecondItem * volumeSecondItem
    const valueThirdItem = priceThirdItem * volumeThirdItem
    const total =
        Math.round((valueFirstItem + valueSecondItem + valueThirdItem) * 100) /
        100

    const resultRenderFirstItem =
        volumeFirstItem > 1
            ? `<p>${priceFirstItem.toFixed(2)} x ${volumeFirstItem}</p>`
            : ""

    const resultRenderSecondItem =
        volumeSecondItem > 1
            ? `<p>${priceSecondItem.toFixed(2)} x ${volumeSecondItem}</p>`
            : ""

    const resultRenderThirdItem =
        volumeThirdItem > 1
            ? `<p>${priceThirdItem.toFixed(2)} x ${volumeThirdItem}</p>`
            : ""

    return `<div class="receipt">
				<img class="receipt__logo" src="../${PROJECT_FOLDER}/img/Tesco-Ireland.jpg" alt="Tesco Logo">
				<div class="receipt__item item-receipt">
					<div class="item-receipt__title">
						<p>Item 1</p>
						${resultRenderFirstItem}
					</div>
					<div class="item-receipt__value">${valueFirstItem.toFixed(2)}</div>
				</div>
				<div class="receipt__item item-receipt">
					<div class="item-receipt__title">
						<p>Item 2</p>
						${resultRenderSecondItem}
					</div>
					<div class="item-receipt__value">${valueSecondItem.toFixed(2)}</div>
				</div>
				<div class="receipt__item item-receipt">
					<div class="item-receipt__title">
						<p>Item 3</p>
						${resultRenderThirdItem}
					</div>
					<div class="item-receipt__value">${valueThirdItem.toFixed(2)}</div>
				</div>
				<div class="receipt__item item-receipt item-receipt--total item-receipt--bold">
					<div class="item-receipt__title">
						<p>Total</p>
					</div>
					<div class="item-receipt__value">${total.toFixed(2)}</div>
				</div>
				<div class="receipt__item item-receipt item-receipt--bold">
					<div class="item-receipt__title">
						<p>Pay by Credit Card</p>
					</div>
					<div class="item-receipt__value">${total.toFixed(2)}</div>
				</div>
				<div class="receipt__item item-receipt item-receipt--bold">
					<div class="item-receipt__title">
						<p>Change</p>
					</div>
					<div class="item-receipt__value">0.00</div>
				</div>
				<div class="receipt__item item-receipt item-receipt--small">
					<div class="item-receipt__title">
						<p>01/04/2025 1:06</p>
					</div>
					<div class="item-receipt__value">1-358716</div>
				</div>
			</div>`
}
task7.solutionParams = {
    code: String.raw`const defaultFirstItem = 20.91
const defaultSecondItem = 55
const defaultThirdItem = 32.2
const defaultVolume = 1

const priceFirstItem =
	Math.round(
		parseFloat(
			prompt("Enter price of first item, please", defaultFirstItem)
		) * 100
	) / 100

const volumeFirstItem = parseInt(
	prompt("Enter volume of first item, please", defaultVolume)
)

const priceSecondItem =
	Math.round(
		parseFloat(
			prompt("Enter price of second item, please", defaultSecondItem)
		) * 100
	) / 100

const volumeSecondItem = parseInt(
	prompt("Enter volume of second item, please", defaultVolume)
)

const priceThirdItem =
	Math.round(
		parseFloat(
			prompt("Enter price of third item, please", defaultThirdItem)
		) * 100
	) / 100

const volumeThirdItem = parseInt(
	prompt("Enter volume of third item, please", defaultVolume)
)

const valueFirstItem = priceFirstItem * volumeFirstItem
const valueSecondItem = priceSecondItem * volumeSecondItem
const valueThirdItem = priceThirdItem * volumeThirdItem
const total =
	Math.round((valueFirstItem + valueSecondItem + valueThirdItem) * 100) /
	100

const resultRenderFirstItem =
	volumeFirstItem > 1
		? \`<p>\${priceFirstItem.toFixed(2)} x \${volumeFirstItem}</p>\`
		: ""

const resultRenderSecondItem =
	volumeSecondItem > 1
		? \`<p>\${priceSecondItem.toFixed(2)} x \${volumeSecondItem}</p>\`
		: ""

const resultRenderThirdItem =
	volumeThirdItem > 1
		? \`<p>\${priceThirdItem.toFixed(2)} x \${volumeThirdItem}</p>\`
		: ''`,
    name: "Вступ до веб-програмування. Вступ до JS. Лінійні алгоритми.",
    title: "",
    lesson,
    task: 7,
    params: [],
}
