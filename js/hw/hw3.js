import {
    getNumbersFromCurrentFileName,
    getRandomNumber,
    toUpperCaseFirstLetterEveryWord,
    getCallbackResult,
} from "../utils.js"

const lesson = getNumbersFromCurrentFileName(import.meta)

//* =========================  Task #1  ===========================
// З клавіатури вводяться імена двох дітей та кількість у них цукерок.
// Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою,
//  або вивести, що кількість однакова.

export function task1_3() {
    let result = ""

    const firstChildName = getCallbackResult(
        "Enter the name of the first child, please",
        "Inna",
        (message, defaultName) => prompt(message, defaultName)
    )

    const secondChildName = getCallbackResult(
        "Enter the name of the second child, please",
        "Bohdan",
        (message, defaultName) => prompt(message, defaultName)
    )

    const firstCandyNumber = getCallbackResult(
        `Enter how many candies ${firstChildName} has, please`,
        0,
        (message, defaultName) => parseInt(prompt(message, defaultName))
    )

    const secondCandyNumber = getCallbackResult(
        `Enter how many candies ${secondChildName} has, please`,
        0,
        (message, defaultName) => parseInt(prompt(message, defaultName))
    )

    if (firstCandyNumber > secondCandyNumber) result = firstChildName
    else if (firstCandyNumber < secondCandyNumber) result = secondChildName
    else if (firstCandyNumber === secondCandyNumber) result = "Equal"
    return result
}

task1_3.solutionParams = {
    code: getCallbackResult.toString() + "\n\n" + task1_3.toString(),
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
    let result = ""

    const price = getCallbackResult(
        "Enter the price of the item, please",
        10.5,
        (message, defaultName) => parseFloat(prompt(message, defaultName))
    )

    const moneyAmount = getCallbackResult(
        `Enter the amount of money, please`,
        50,
        (message, defaultName) => parseFloat(prompt(message, defaultName))
    )

    if (price > moneyAmount) result = "Not enough money"
    else {
        if (moneyAmount - price > 4)
            result = "Would you like to buy lottery tickets?"
        else result = "Would you like a bag?"
    }

    return result
}

task2_3.solutionParams = {
    code: getCallbackResult.toString() + "\n\n" + task2_3.toString(),
    name: "",
    title: "",
    lesson,
    task: 2,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #3  ===========================
// Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

function compareTwoNumbers(firstNumber, secondNumber) {
    if (firstNumber === secondNumber) return true
    return false
}

function isGuessedNumber(guessedNumber) {
    const userNumber = getCallbackResult(
        (message) => parseInt(prompt(message)),
        `Try to guess the integer number (1-5). \n Enter your number (Attempt 1): `
    )

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        throw new RangeError("Sorry, you entered an invalid number.")
    }

    return compareTwoNumbers(userNumber, guessedNumber)
}

export function task3_3() {
    try {
        const randomNumber = 1 + Math.floor(Math.random() * 5)

        const resGuessedNumber1 = isGuessedNumber(randomNumber)
        if (resGuessedNumber1) return "You are guessed!"

        const resGuessedNumber2 = isGuessedNumber(randomNumber)
        if (resGuessedNumber2) return "You are guessed!"

        return "Unfortunally, you don't guess"
    } catch (error) {
        if (error instanceof RangeError) {
            return error.message
        }
    }
}

task3_3.solutionParams = {
    code:
        getCallbackResult.toString() +
        "\n\n" +
        compareTwoNumbers.toString() +
        "\n\n" +
        isGuessedNumber.toString() +
        "\n\n" +
        task3_3.toString(),
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
    try {
        let result = ""
        const category = prompt(
            "Enter the driving license category, please \n(Available A, B or C): ",
            "B"
        )

        if (!["A", "B", "C"].includes(category)) {
            throw new RangeError(`The argument must be an 'A', 'B' or 'C'.`)
        }

        switch (category) {
            case "A":
                result = "motorbike"
                break
            case "B":
                result = "passenger car"
                break
            case "C":
                result = "lorry"
                break
        }

        return result
    } catch (error) {
        if (error instanceof RangeError) return error.message
    }
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
