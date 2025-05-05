import {
    runWithConfirmStart,
    getNumbersFromCurrentFileName,
    getRandomNumber,
    roundDecimal,
} from "../utils.js"
import { PROJECT_FOLDER } from "../config.js"

const lesson = getNumbersFromCurrentFileName(import.meta)

//* =========================  Task #1  ===========================
// Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.

export function task1_7() {
    const MESSAGE_NOT_CORRECTED_NUMBER =
        "Sorry, you entered not corrected number.\nYou need to enter a number from 1 to 12."

    const getMonthNumber = () =>
        parseInt(
            prompt("Enter your month number (1-12): ", getRandomNumber(1, 12))
        )

    function isFoundNumberAmongThreeElements(
        number,
        element1,
        element2,
        element3
    ) {
        return number === element1 || number === element2 || number === element3
    }

    function getSeason(monthNumber) {
        let result
        switch (true) {
            case isFoundNumberAmongThreeElements(monthNumber, 12, 1, 2):
                result = "Winter"
                break
            case isFoundNumberAmongThreeElements(monthNumber, 3, 4, 5):
                result = "Spring"
                break
            case isFoundNumberAmongThreeElements(monthNumber, 6, 7, 8):
                result = "Summer"
                break
            case isFoundNumberAmongThreeElements(monthNumber, 9, 10, 11):
                result = "Autumn"
                break
            default:
                result = MESSAGE_NOT_CORRECTED_NUMBER
                break
        }
        return result
    }

    const monthNumber = getMonthNumber()
    const season = getSeason(monthNumber)

    return `<ol>
		<li>Your month number = ${monthNumber}</li>
		<li>Season: ${season}</li>
	</ol>`
}

task1_7.solutionParams = {
    code: task1_7.toString(),
    name: "",
    title: "",
    lesson,
    task: 1,
    params: [],
    resultAsCode: false,
}

//* =========================  Task #2  ===========================
// Створити функцію, яка за номером місяця повертає його назву.

export function task2_7() {
    const MESSAGE_NOT_CORRECTED_NUMBER =
        "Sorry, you entered not corrected number.\nYou need to enter a number from 1 to 12."

    const getMonthNumber = () =>
        parseInt(
            prompt("Enter your month number (1-12): ", getRandomNumber(1, 12))
        )

    function getMonthName(monthNumber) {
        let result = ""

        if (monthNumber < 1 || monthNumber > 12)
            result = MESSAGE_NOT_CORRECTED_NUMBER
        else if (monthNumber === 1) result = "January"
        else if (monthNumber === 2) result = "February"
        else if (monthNumber === 3) result = "March"
        else if (monthNumber === 4) result = "April"
        else if (monthNumber === 5) result = "May"
        else if (monthNumber === 6) result = "June"
        else if (monthNumber === 7) result = "July"
        else if (monthNumber === 8) result = "Augest"
        else if (monthNumber === 9) result = "September"
        else if (monthNumber === 10) result = "October"
        else if (monthNumber === 11) result = "November"
        else if (monthNumber === 12) result = "December"

        return result
    }

    const renderResultGetMonthName = (monthNumber) => {
        let result = ""
        if (isNaN(monthNumber)) {
            result = `Massage: ${MESSAGE_NOT_CORRECTED_NUMBER}`
        } else {
            if (monthNumber < 1 || monthNumber > 12) {
                result = `Massage: ${MESSAGE_NOT_CORRECTED_NUMBER}`
            } else {
                const monthName = getMonthName(monthNumber)
                result = `Month Name: ${monthName}`
            }
        }

        return `<ol>
			<li>Month Number = ${monthNumber}</li>
			<li>${result}</li>
		</ol>`
    }

    const monthNumber = getMonthNumber()
    return renderResultGetMonthName(monthNumber)
}

task2_7.solutionParams = {
    code: task2_7.toString(),
    name: "",
    title: "",
    lesson,
    task: 2,
    params: [],
    resultAsCode: false,
}

//* =========================  Task #3  ===========================

export function task3_7() {
    const MESSAGE_NOT_CORRECTED_NUMBER =
        "Sorry, you entered not corrected number.\nYou need to enter a number from 1 to 7."

    const getDayNumber = () =>
        parseInt(prompt("Enter your day number (1-7): ", getRandomNumber(1, 7)))

    const isWorkingDay = (dayNumber) => dayNumber >= 1 && dayNumber <= 5

    const renderResultIsWorkingDay = (dayNumber) => {
        let result = ""
        if (isNaN(dayNumber)) {
            result = `Massage: ${MESSAGE_NOT_CORRECTED_NUMBER}`
        } else {
            if (dayNumber < 1 || dayNumber > 7) {
                result = `Massage: ${MESSAGE_NOT_CORRECTED_NUMBER}`
            } else {
                result = `Is this day a working day?: ${isWorkingDay(
                    dayNumber
                )}`
            }
        }

        return `<ol>
			<li>Day Number = ${dayNumber}</li>
			<li>${result}</li>
		</ol>`
    }

    const dayNumber = getDayNumber()
    return renderResultIsWorkingDay(dayNumber)
}

task3_7.solutionParams = {
    code: task3_7.toString(),
    name: "",
    title: "",
    lesson,
    task: 3,
    params: [],
    resultAsCode: false,
}

//* =========================  Task #4  ===========================
// Створити окремі функції, які для 4 чисел знаходять: суму; добуток; середнє арифметичне; мінімальне значення.
export function task4_7() {
    const MESSAGE_NOT_CORRECTED_NUMBER =
        "Sorry, you entered not a number.\nYou need to enter a number."

    const getNumber = (minRandomNumber = 0, maxRandomNumber = 999) =>
        parseInt(
            prompt(
                "Enter your number: ",
                getRandomNumber(minRandomNumber, maxRandomNumber)
            )
        )

    const sumFourNumber = (num1, num2, num3, num4) => num1 + num2 + num3 + num4
    const productFourNumber = (num1, num2, num3, num4) =>
        num1 * num2 * num3 * num4
    const arithmeticMeanFourNumber = (num1, num2, num3, num4) =>
        sumFourNumber(num1, num2, num3, num4) / 4

    const minNumber = (num1, num2, num3, num4) => {
        let minNumber
        minNumber = num1 < num2 ? num1 : num2
        minNumber = minNumber < num3 ? minNumber : num3
        minNumber = minNumber < num4 ? minNumber : num4
        return minNumber
    }

    const renderResult = (num1, num2, num3, num4) => {
        let result = ""
        if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
            result = `<li>Massage: ${MESSAGE_NOT_CORRECTED_NUMBER}</li>`
        } else {
            result = `<li>Sum of Four Numbers: 
						${sumFourNumber(num1, num2, num3, num4)}</li>
					<li>Product of Four Numbers: ${productFourNumber(num1, num2, num3, num4)}</li>
					<li>Arithmetic Mean of Four Numbers:
					${arithmeticMeanFourNumber(num1, num2, num3, num4)}</li>
					<li>Min Number Among Four Numbers: ${minNumber(num1, num2, num3, num4)}</li>`
        }

        return `<ol>
			<li>First Number = ${num1}</li>
			<li>Second Number = ${num2}</li>
			<li>Third Number = ${num3}</li>
			<li>Fourth Number = ${num4}</li>
		</ol>
		<ol class="page__number-list">${result}</ol>`
    }

    const num1 = getNumber(-200, 130)
    const num2 = getNumber()
    const num3 = getNumber()
    const num4 = getNumber()

    return renderResult(num1, num2, num3, num4)
}

task4_7.solutionParams = {
    code: task4_7.toString(),
    name: "",
    title: "",
    lesson,
    task: 4,
    params: [],
    resultAsCode: false,
}

//* =========================  Task #5  ===========================
// Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість
// парних, кількість додатних, кількість більших за 100.

export function task5_7() {
    const MESSAGE_NOT_CORRECTED_NUMBER =
        "Sorry, you entered not a number.\nYou need to enter a number."

    const getNumber = (minRandomNumber = 0, maxRandomNumber = 999) =>
        parseInt(
            prompt(
                "Enter your number: ",
                getRandomNumber(minRandomNumber, maxRandomNumber)
            )
        )

    const isEven = (number) => number % 2 === 0
    const isPositive = (number) => number > 0
    const isMoreThanOneHundred = (number) => number > 100

    function countNumber(num1, num2, num3) {
        let countIsEven = 0
        let countIsPositive = 0
        let countIsMoreThanOneHundred = 0

        for (let i = 0; i < arguments.length; i++) {
            if (isEven(arguments[i])) countIsEven += 1
            if (isPositive(arguments[i])) countIsPositive += 1
            if (isMoreThanOneHundred(arguments[i]))
                countIsMoreThanOneHundred += 1
        }
        return [countIsEven, countIsPositive, countIsMoreThanOneHundred]
    }

    const renderResult = (num1, num2, num3) => {
        let result = ""
        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            result = `<li>Massage: ${MESSAGE_NOT_CORRECTED_NUMBER}</li>`
        } else {
            const resCountNumber = countNumber(num1, num2, num3)
            result = `<li>Amount of even numbers: ${resCountNumber[0]}</li>
				  <li>Amount of positive numbers: ${resCountNumber[1]}</li>
				  <li>Amount of numbers that more than 100: ${resCountNumber[2]}</li>`
        }

        return `<ol>
					<li>First Number = ${num1}</li>
					<li>Second Number = ${num2}</li>
					<li>Third Number = ${num3}</li>
				</ol>
				<ol class="page__number-list">${result}</ol>`
    }

    const num1 = getNumber(10, 130)
    const num2 = getNumber()
    const num3 = getNumber()

    return renderResult(num1, num2, num3)
}

task5_7.solutionParams = {
    code: task5_7.toString(),
    name: "",
    title: "",
    lesson,
    task: 5,
    params: [],
    resultAsCode: false,
}

//* =========================  Task #6  ===========================

export function task6_7() {
    const MESSAGE_NOT_CORRECTED_NUMBER =
        "Sorry, you entered not a number.\nYou need to enter a number."

    const getNumber = (
        massage = "Enter your number: ",
        minRandomNumber = 0,
        maxRandomNumber = 999
    ) =>
        parseInt(
            prompt(massage, getRandomNumber(minRandomNumber, maxRandomNumber))
        )

    const convertCmToInch = (number) => number / 2.54
    const convertKgToPound = (number) => number * 2.2046226218
    const convertKmToMile = (number) => number * 0.6213711922

    const roundDecimal = (number) => Math.round(parseFloat(number) * 100) / 100

    const renderResult = (number) => {
        let result = ""
        if (isNaN(number)) {
            result = `<li>Massage: ${MESSAGE_NOT_CORRECTED_NUMBER}</li>`
        } else {
            const resConvertCmToInch = roundDecimal(convertCmToInch(number))
            const resConvertKgToPound = roundDecimal(convertKgToPound(number))
            const resConvertKmToMile = roundDecimal(convertKmToMile(number))

            result = `<li>To Inch: ${number}cm => ${resConvertCmToInch} in</li>
					<li>To Pound: ${number}Kg => ${resConvertKgToPound} pound [lbs]</li>
					<li>To Mile: ${number}Km => ${resConvertKmToMile} mi</li>`
        }

        return `<ol><li>Number = ${number}</li></ol>
		<ol class="page__number-list">${result}</ol>`
    }

    const number = getNumber()
    return renderResult(number)
}

task6_7.solutionParams = {
    code: task6_7.toString(),
    name: "",
    title: "",
    lesson,
    task: 6,
    params: [],
    resultAsCode: false,
}

//* =========================  Task #7  ===========================

export function task7_7() {
    const MESSAGE_NOT_CORRECTED_NUMBER =
        "Sorry, you entered not a number.\nYou need to enter a number."

    const createTable = (numRow, numCol, message) => {
        let table = `<table>`
        for (let i = 0; i < numRow; i++) {
            table += `<tr>`
            for (let j = 0; j < numCol; j++) {
                table += `<th>${message}</th>`
            }
            table += `</tr>`
        }
        table += `</table>`

        return table
    }

    const getNumber = (
        massage = "Enter your number: ",
        minRandomNumber = 0,
        maxRandomNumber = 999
    ) =>
        parseInt(
            prompt(massage, getRandomNumber(minRandomNumber, maxRandomNumber))
        )

    const renderResult = (numberRow, numberColumn, message) => {
        let result = ""
        if (isNaN(numberRow) || isNaN(numberColumn)) {
            result = `<li>Massage: ${MESSAGE_NOT_CORRECTED_NUMBER}</li>`
        } else {
            result = createTable(numberRow, numberColumn, message)
        }

        return `<ol>
		<li>Number of Rows = ${numberRow}</li>
		<li>Number of Columns = ${numberColumn}</li>
		<li>Message = ${message}</li>
  	</ol>
	<ol class="page__number-list">${result}</ol>`
    }

    const numberRow = getNumber("Enter number of rows: ", 1, 10)
    const numberColumn = getNumber("Enter number of columns: ", 1, 5)

    return renderResult(numberRow, numberColumn, "JavaScript")
}

task7_7.solutionParams = {
    code: task7_7.toString(),
    name: "",
    title: "",
    lesson,
    task: 7,
    params: [],
    resultAsCode: false,
}

//* =========================  Task #8  ===========================
// Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію).

export function task8_7() {
    const getRandomPath = (...path) => path[getRandomNumber(0, path.length - 1)]

    const renderResult = (path) => {
        return `<ol><li>${path}</li></ol><ol><li>Random Image:  <img src="${path}" alt="Image"></li></ol>`
    }

    const path = getRandomPath(
        `../${PROJECT_FOLDER}/img/social-icons/facebook.svg`,
        `../${PROJECT_FOLDER}/img/social-icons/instagram.svg`,
        `../${PROJECT_FOLDER}/img/social-icons/whatsapp.svg`,
        `../${PROJECT_FOLDER}/img/social-icons/youtube.svg`
    )

    return renderResult(path)
}

task8_7.solutionParams = {
    code: task8_7.toString(),
    name: "",
    title: "",
    lesson,
    task: 8,
    params: [],
    resultAsCode: false,
}

//* =========================  Task #9  ===========================
// Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання,
// 	 куди переходимо при кліку на зображення (тег img повинен знаходитись у середині тега a:
// 		 &lta&gt &ltimg src='шлях'&gt &lt/a&gt)

export function task9_7() {
    const getRandomPath = (...path) => path[getRandomNumber(0, path.length - 1)]

    const renderBanner = (src, title, href) => `
			<div class="banner">
				<h3>${title}</h3>
				<a href="${href}" target="_blank"><img src="${src}" alt="Image"></a>
			</div>`

    const src = getRandomPath(
        `../${PROJECT_FOLDER}/img/social-icons/facebook.svg`,
        `../${PROJECT_FOLDER}/img/social-icons/instagram.svg`,
        `../${PROJECT_FOLDER}/img/social-icons/whatsapp.svg`,
        `../${PROJECT_FOLDER}/img/social-icons/youtube.svg`
    )

    return renderBanner(
        src,
        "Function",
        "https://uk.javascript.info/function-basics"
    )
}

task9_7.solutionParams = {
    code: task9_7.toString(),
    name: "",
    title: "",
    lesson,
    task: 9,
    params: [],
    resultAsCode: false,
}

//* =========================  Task #10  ===========================

export function task10_7() {
    const countNegativeTemperature = (...arr) => {
        let count = 0

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) count++
        }
        return count
    }

    const renderResult = (countNegativeTemperature, temperatures) => {
        return `<ol><li>Temperatures: ${temperatures}</li></ol>
	  <ol><li>Count of Negative Temperature: ${countNegativeTemperature}</li></ol>`
    }

    const temperatures = [10, 32, -12, 7, -22]
    const countNegTemp = countNegativeTemperature(...temperatures)

    return renderResult(countNegTemp, temperatures)
}

task10_7.solutionParams = {
    code: task10_7.toString(),
    name: "",
    title: "",
    lesson,
    task: 10,
    params: [],
    resultAsCode: false,
}

//* =========================  Task #11  ===========================
// Дано покази температур (довільна кількість). Розробити функцію,
// яка дозволить знайти середнє значення для додатних показів температури.

export function task11_7() {
    const arithmeticMeanArrElements = (arr) => {
        let sumPositiveTemp = 0
        let countPositiveTemp = 0

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                sumPositiveTemp += arr[i]
                countPositiveTemp += 1
            }
        }
        return roundDecimal(sumPositiveTemp / countPositiveTemp)
    }

    const renderResult = (arithmeticMeanArrElements, temperatures) => {
        return `<ol><li>Temperatures: ${temperatures}</li></ol>
	  <ol><li>Arithmetic Mean of Positive Temperatures: ${arithmeticMeanArrElements}</li></ol>`
    }

    const temperatures = [10, 32, -12, 7, -22]
    const arithmeticMean = arithmeticMeanArrElements(temperatures)

    return renderResult(arithmeticMean, temperatures)
}

task11_7.solutionParams = {
    code: task11_7.toString(),
    name: "",
    title: "",
    lesson,
    task: 11,
    params: [],
    resultAsCode: false,
}
