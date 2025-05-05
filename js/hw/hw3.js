import {
    getNumbersFromCurrentFileName,
    getRandomNumber,
    toUpperCaseFirstLetterEveryWord,
} from "../utils.js"

const lesson = getNumbersFromCurrentFileName(import.meta)

//* =========================  Task #1  ===========================
// З клавіатури вводяться імена двох дітей та кількість у них цукерок.
// Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою,
//  або вивести, що кількість однакова.

export function task1_3() {
    const firstChildName = prompt(
        "Enter the name of the first child, please",
        "Inna"
    )
    const secondChildName = prompt(
        "Enter the name of the second child, please",
        "Bohdan"
    )

    const firstCandyNumber = parseInt(
        prompt(`Enter how many candies ${firstChildName} has, please`, 0)
    )
    const secondCandyNumber = parseInt(
        prompt(`Enter how many candies ${secondChildName} has, please`, 0)
    )

    if (firstCandyNumber > secondCandyNumber) return firstChildName
    else if (firstCandyNumber < secondCandyNumber) return secondChildName
    else if (firstCandyNumber === secondCandyNumber) return "Equal"
}

task1_3.solutionParams = {
    code: task1_3.toString(),
    name: "",
    title: "",
    lesson,
    task: 1,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #2  ===========================
// З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці,
//  інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

export function task2_3() {
    const price = parseFloat(
        prompt(`Enter the price of the item, please`, 10.5)
    )

    const moneyAmount = parseFloat(
        prompt(`Enter the amount of money, please`, 50)
    )

    if (price > moneyAmount) return "Not enough money"
    if (moneyAmount - price > 4) return "Would you like to buy lottery tickets?"
    else if (moneyAmount - price < 4) return "Would you like a bag?"
}

task2_3.solutionParams = {
    code: task2_3.toString(),
    name: "",
    title: "",
    lesson,
    task: 2,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #3  ===========================
// Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

export function task3_3() {
    const randomNumber = 1 + Math.floor(Math.random() * 5)

    const firstUserNumber = parseInt(
        prompt(
            `Try to guess the integer number (1-5). \n Enter your number (Attempt 1): `
        )
    )

    if (randomNumber === firstUserNumber) return "You are guessed!"

    const secondUserNumber = parseInt(
        prompt(
            `Try to guess the integer number. (1-5) \n Enter your number (Attempt 2): `
        )
    )

    if (randomNumber === secondUserNumber) return "You are guessed!"

    return "Unfortunally, you don't guess"
}

task3_3.solutionParams = {
    code: task3_3.toString(),
    name: "",
    title: "",
    lesson,
    task: 3,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #4  ===========================
// З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем,
//  студентом, працівником, пенсіонером).
export function task4_3() {
    let result = ""
    const age = parseInt(prompt("Enter you age, please: "))

    if (isNaN(age) || age < 1) {
        result = "Sorry, you entered an invalid number."
    } else {
        switch (true) {
            case age < 6:
                result = "You are a child in kindergarten"
                break
            case age < 18:
                result = "You are a student in school"
                break
            case age < 23:
                result = "You are a student in university"
                break
            case age < 63:
                result = "You are employee"
                break
            case age >= 63:
                result = "You are retired"
            default:
                break
        }
    }

    return result
}

task4_3.solutionParams = {
    code: task4_3.toString(),
    name: "",
    title: "",
    lesson,
    task: 4,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #5  ===========================
// З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль,
// С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.
export function task5_3() {
    const category = prompt(
        "Enter the driving license category, please \n(Available A, B or C): ",
        "B"
    )

    if (category === "A") return "motorbike"
    if (category === "B") return "passenger car"
    if (category === "c") return "lorry"
}

task5_3.solutionParams = {
    code: task5_3.toString(),
    name: "",
    title: "",
    lesson,
    task: 5,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #6  ===========================
// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

export function task6_3() {
    const dayNumber = parseInt(
        prompt("Enter day number of the week, please (1-7): ")
    )

    let result = ""

    if (!Number.isFinite(dayNumber) || dayNumber < 1 || dayNumber > 7) {
        result = "Sorry, you entered an invalid number."
    } else {
        switch (dayNumber) {
            case 1:
                result = "Monday"
                break
            case 2:
                result = "Tuesday"
                break
            case 3:
                result = "Wednesday"
                break
            case 4:
                result = "Thursday"
                break
            case 5:
                result = "Friday"
                break
            case 6:
                result = "Saturday"
                break
            case 7:
                result = "Sunday"
                break
        }
    }
    return result
}
task6_3.solutionParams = {
    code: task6_3.toString(),
    name: "",
    title: "",
    lesson,
    task: 6,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #7  ===========================
// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

export function task7_3() {
    const monthNumber = parseInt(prompt("Enter month number, please (1-12): "))

    let result = ""

    if (!Number.isFinite(monthNumber) || monthNumber < 1 || monthNumber > 12) {
        result = "Sorry, you entered an invalid number."
    } else {
        switch (monthNumber) {
            case 12:
            case 1:
            case 2:
                result = "Winter"
                break
            case 3:
            case 4:
            case 5:
                result = "Spring"
                break
            case 6:
            case 7:
            case 8:
                result = "Summer"
                break
            case 9:
            case 10:
            case 11:
                result = "Autumn"
                break
        }
    }
    return result
}

task7_3.solutionParams = {
    code: task7_3.toString(),
    name: "",
    title: "",
    lesson,
    task: 7,
    params: [],
    resultAsCode: true,
}
