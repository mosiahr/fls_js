import {
    getNumbersFromCurrentFileName,
    getRandomNumber,
    toUpperCaseFirstLetterEveryWord,
} from "../utils.js"

const lesson = getNumbersFromCurrentFileName(import.meta)

//* =========================  Task #1  ===========================
// Дано масив рядків. Вивести ті, у яких є цифри
// (використати метод test та регулярні вирази).

export function task1_23() {
    const stringArr = [
        "hello123",
        "world",
        "test456",
        "noDigitsHere",
        "789only",
    ]
    return stringArr.filter((str) => /\d/.test(str))
}

task1_23.solutionParams = {
    code: task1_23.toString(),
    name: "",
    title: "",
    lesson,
    task: 1,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #2  ===========================
// Дано масив рядків. Вивести ті, у яких немає цифр.
export function task2_23() {
    const stringArr = [
        "hello123",
        "world",
        "test456",
        "noDigitsHere",
        "789only",
    ]
    return stringArr.filter((str) => !/\d/.test(str))
}

task2_23.solutionParams = {
    code: task2_23.toString(),
    name: "",
    title: "",
    lesson,
    task: 2,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #3  ===========================
// Дано масив рядків. Вивести ті, у яких є голосні літери.
export function task3_23() {
    const stringArr = [
        "hello123",
        "www",
        "world",
        "test456",
        "noDigitsHere",
        "789only",
        "34",
    ]
    return stringArr.filter((str) => str.match(/[aeiouy]/gi))
}

task3_23.solutionParams = {
    code: task3_23.toString(),
    name: "",
    title: "",
    lesson,
    task: 3,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #4  ===========================
// Дано масив рядків. Вивести ті, у яких немає голосних літер.
export function task4_23() {
    const stringArr = [
        "hello123",
        "www dfg fgf",
        "world hi",
        "test456",
        "noDigitsHere",
        "789only",
        "34",
    ]
    return stringArr.filter((str) => !str.match(/[aeiouy]/gi))
}

task4_23.solutionParams = {
    code: task4_23.toString(),
    name: "",
    title: "",
    lesson,
    task: 4,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #5  ===========================
// Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
export function task5_23() {
    const stringArr = [
        "hello123",
        "www dfg fgf",
        "world hi",
        "test456",
        "noDigitsHere",
        "789only",
        "34",
        "145OK 7",
    ]
    return stringArr.filter((str) => str.match(/[13]/gi))
}

task5_23.solutionParams = {
    code: task5_23.toString(),
    name: "",
    title: "",
    lesson,
    task: 5,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #6  ===========================
// Дано рядок тексту, вивести усі числа, які є у тексті.
export function task6_23() {
    const str =
        "hello123 www dfg fgf world hi test456 noDigitsHere 789only 34 145OK 7"
    return str.match(/\d+/g)
}

task6_23.solutionParams = {
    code: task6_23.toString(),
    name: "",
    title: "",
    lesson,
    task: 6,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #7  ===========================
// Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
export function task7_23() {
    const str =
        "hello123. www dfg -fgf, /world hi test456, \"noDigitsHere' ...789only? 34 []145OK (7). Yes{no}!"
    return str.match(/[.,:;?!\-"'\/\[\]\(\)\{\}]+/g)
}

task7_23.solutionParams = {
    code: task7_23.toString(),
    name: "",
    title: "",
    lesson,
    task: 7,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #8  ===========================
// Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
export function task8_23() {
    const str =
        "hello123. www dfg -fgf, /world hi test456, \"noDigitsHere' ...789only? 34 145OK 7. Yes!"
    return str.split(/[.,:;?!\-"'\/\s]+/g).filter(Boolean)
}

task8_23.solutionParams = {
    code: task8_23.toString(),
    name: "",
    title: "",
    lesson,
    task: 8,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #9  ===========================
// Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
export function task9_23() {
    const str =
        "hello123. www dfg -fgf, /world hi test456, 1.5.2025 \"noDigitsHere'  01.05.2025 ...789only? 34 145OK 7. Yes!"
    return str.match(/\d{1,2}.\d{1,2}.\d{4}/g)
}

task9_23.solutionParams = {
    code: task9_23.toString(),
    name: "",
    title: "",
    lesson,
    task: 9,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #10  ===========================
// Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
export function task10_23() {
    const str =
        "hello123. www dfg -fgf, /world hi test456, 1.5.2025 \"noDigitsHere'  01.05.2025 ...789only? 34 145OK 7. Yes!"
    return str.match(/(?<=\D+)\d{2}(?=\D+)/g)
}

task10_23.solutionParams = {
    code: task10_23.toString(),
    name: "",
    title: "",
    lesson,
    task: 10,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #11  ===========================
// Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.
export function task11_23() {
    const str =
        "hello123. www dfg -fgf, 4142-3433-2323-3434/world hi test456, 1.5.2025 \"noDigitsHere' 5942-6878-6549-1594 01.05.2025 ...789only? 34 145OK 7. Yes!"
    return str.match(/\d{4}-\d{4}-\d{4}-\d{4}/g)
}

task11_23.solutionParams = {
    code: task11_23.toString(),
    name: "",
    title: "",
    lesson,
    task: 11,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #12  ===========================
//  Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)
export function task12_23() {
    const str = "https://www.kmu.gov.ua/"
    return str.match(/\.gov\b/g)
}

task12_23.solutionParams = {
    code: task12_23.toString(),
    name: "",
    title: "",
    lesson,
    task: 12,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #13  ===========================
//  Вибрати усі роки після 2021 року з отриманого повідомлення
export function task13_23() {
    const str = "2021 2022 2034 2089 3056 5044"
    return str.match(/20[3-9]\d|202[2-9]|[3-9]\d{3}/g)
}

task13_23.solutionParams = {
    code: task13_23.toString(),
    name: "",
    title: "",
    lesson,
    task: 13,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #14  ===========================
//  Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)
export function task14_23() {
    const str =
        "Ukraine phone number: +380962288600, Ireland phone number: +353832288600, ..."
    return str.match(/\+38\d{10}/g)
}

task14_23.solutionParams = {
    code: task14_23.toString(),
    name: "",
    title: "",
    lesson,
    task: 14,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #15  ===========================
//  Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.
export function task15_23() {
    const str = prompt("Enter your First Name and Last Name, please: ")
    const re = /(\w+)\s+(\w+)/gi
    return str.replace(re, "$1-$2")
}

task15_23.solutionParams = {
    code: task15_23.toString(),
    name: "",
    title: "",
    lesson,
    task: 15,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #16  ===========================
//  Користувач вводить дату у форматі «день.місяць.рік».
// Отримати рядкове представлення дати у форматі «день/місяць/рік»
export function task16_23() {
    const str = prompt("Enter some date, please: ")
    const re = /(\d{1,2})\.(\d{1,2})\.(\d{4})/g
    return str.replace(re, "$1/$2/$3")
}

task16_23.solutionParams = {
    code: task16_23.toString(),
    name: "",
    title: "",
    lesson,
    task: 16,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #17  ===========================
//  Користувач вводить день (номер дня (0-6) або «sun,mon,tue,wed,thu,fri,sat»).
//  Визначити, чи  є це день вихідним

export function task17_23() {
    const str = prompt(
        "Enter a day, please(0-6) or sun,mon,tue,wed,thu,fri,sat: "
    )
    const re = /0|6|sun|sat/gi
    return re.test(str)
        ? "Yes, this is weekend!"
        : "No, you have to go to work!"
}

task17_23.solutionParams = {
    code: task17_23.toString(),
    name: "",
    title: "",
    lesson,
    task: 17,
    params: [],
    resultAsCode: true,
}

//* =========================  Task #18  ===========================
// Користувач може змінювати колір фону, що вибирає користувач з використанням <input type="color">.
// Зберігати цей колір і відновлювати при наступному відкритті.
// Також зберігати і відображати кількість змін протягом одного сеансу.

class LocalStorageManager {
    /**
     * Adds or updates a key-value pair in the localStorage.
     *
     * @param {string} keyName - A string containing the name of the key you want to create/update.
     * @param {string} keyValue - A string containing the value you want to give the key you are creating/updating.
     * @example
     * const storageManager = new LocalStorageManager();
     * storageManager.setItem("theme", "dark"); // Adds or updates the "theme" key in localStorage
     */
    setItem(keyName, keyValue) {
        if (localStorage[keyName]) {
            const countKeyName = `count${toUpperCaseFirstLetterEveryWord(
                keyName
            )}`

            if (
                !Number.isFinite(parseInt(localStorage.getItem(countKeyName)))
            ) {
                localStorage.setItem(countKeyName, 0)
            }

            // console.log(localStorage.getItem(countKeyName))

            let countKeyValue = parseInt(localStorage.getItem(countKeyName))
            // console.log(countKeyValue)

            localStorage.setItem(countKeyName, ++countKeyValue)
        }
        localStorage.setItem(keyName, keyValue)
    }
}

class ColorChanger {
    solutionResultDiv = document.querySelector("#solution__result")
    #title
    #colorKeyName

    constructor(title, colorKeyName = "color") {
        this.title = title
        this.colorKeyName = colorKeyName
        this.localStorageManager = new LocalStorageManager()
    }

    get title() {
        return this.#title
    }
    set title(value) {
        this.#title = value
    }

    get colorKeyName() {
        return this.#colorKeyName
    }
    set colorKeyName(value) {
        this.#colorKeyName = value
    }

    createContainer() {
        const container = document.createElement("div")
        container.style.display = "flex"
        container.style.gap = "10px"
        container.style.flexDirection = "column"
        container.style.justifyContent = "center"

        return container
    }

    createTitle() {
        const title = document.createElement("div")
        title.classList.add("task-card__title")
        title.innerText = this.title
        title.style.fontSize = "18px"
        title.style.textAlign = "center"

        this.titleEl = title
        return title
    }

    createInputBlock() {
        const inputBlock = document.createElement("div")
        inputBlock.style.display = "flex"
        inputBlock.style.gap = "10px"
        inputBlock.style.flexWrap = "wrap"
        inputBlock.style.justifyContent = "center"

        return inputBlock
    }

    createInput() {
        const input = document.createElement("input")
        input.setAttribute("id", "color-changer")
        input.type = "color"
        // input.style.width = "100px"
        input.style.height = "100%"

        this.inputEl = input
        return input
    }

    createColorValueBlock() {
        const colorValueBlockInput = document.createElement("input")
        colorValueBlockInput.setAttribute("id", "color-block")
        colorValueBlockInput.setAttribute("maxlength", "7")
        colorValueBlockInput.style.border = "1px solid black"
        colorValueBlockInput.style.fontSize = "18px"
        colorValueBlockInput.style.padding = "10px"

        this.colorValueBlockInput = colorValueBlockInput
        return colorValueBlockInput
    }

    createCountChangeColorBlock() {
        const countChangeColorBlock = document.createElement("div")
        countChangeColorBlock.style.backgroundColor = "red"
        countChangeColorBlock.style.width = "100%"

        return countChangeColorBlock
    }

    render() {
        const container = this.createContainer()
        const createInputBlock = this.createInputBlock()

        const div = document.createElement("div")
        div.style.display = "flex"

        div.style.width = "100%"
        div.style.height = "100px"
        div.append(this.createCountChangeColorBlock(), this.createInput())

        createInputBlock.append(div, this.createColorValueBlock())
        container.append(this.createTitle(), createInputBlock)
        this.initEventListener()
        return container
    }

    renderCountColor() {}

    initInputEl(e) {
        if (e.target.matches("#" + this.inputEl?.id)) {
            const colorValueBlockInput = document.getElementById(
                this.colorValueBlockInput.id
            )
            colorValueBlockInput.value = e.target.value
            this.localStorageManager.setItem(this.colorKeyName, e.target.value)
        }
    }

    initChangeColorValueBlock(e) {
        if (e.target.matches("#" + this.colorValueBlockInput?.id)) {
            const inputEl = document.getElementById(this.inputEl.id)
            inputEl.value = e.target.value
            this.localStorageManager.setItem(this.colorKeyName, e.target.value)
        }
    }

    initEventListener() {
        window.addEventListener("storage", () => {
            // console.log(localStorage)
            console.log("OJ")
        })
        this.solutionResultDiv.addEventListener(
            "input",
            this.initInputEl.bind(this)
        )
        this.solutionResultDiv.addEventListener(
            "change",
            this.initChangeColorValueBlock.bind(this)
        )
    }
}

export function task18_23() {
    const colorChanger = new ColorChanger("Choice the color")

    // const localStorageManager = new LocalStorageManager()
    // console.log(localStorageManager.localStorage.length)

    // console.log(input)

    return colorChanger.render().outerHTML
}

task18_23.solutionParams = {
    code:
        LocalStorageManager.toString() +
        "\n\n" +
        ColorChanger.toString() +
        "\n\n" +
        task18_23.toString(),
    name: "",
    title: "",
    lesson,
    task: 18,
    params: [],
    resultAsCode: false,
}
