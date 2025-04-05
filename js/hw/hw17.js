import { getNumbersFromCurrentFileName, getRandomNumber } from "../utils.js"
import { table } from "../components/index.js"

const lesson = getNumbersFromCurrentFileName(import.meta)

//* =========================  Task #1  ===========================
// Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних,
//  кількості відʼємних, кількість входжень деякого числа (статичні методи)

class MyArray {
    static countPositiveElements(arr) {
        return arr.filter((el) => el > 0).length
    }

    static countNegativeElements(arr) {
        return arr.filter((el) => el < 0).length
    }

    static countOccurrenceElement(arr, arrEl) {
        let count = 0
        for (const el of arr) {
            if (el === arrEl) count++
        }
        return count
    }

    static getAllResults(arr, arrEl) {
        return table(
            [
                "Number of Positive Elements",
                "Number of Negative Elements",
                "Number of Occurrence Element",
            ],
            [
                [
                    // In order to call a static method or property within
                    // another static method of the same class, you can use
                    // the this keyword.
                    MyArray.countPositiveElements(arr),
                    this.countNegativeElements(arr),
                    this.countOccurrenceElement(arr, arrEl),
                ],
            ]
        ).outerHTML
    }
}

export function task1_17() {
    return MyArray.getAllResults([2, 5, 6, 2, 7, -45, 0, -5, -10, 2], 2)
}

task1_17.solutionParams = {
    code: String.raw`${MyArray.toString()}

MyArray.getAllResults([2, 5, 6, 2, 7, -45, 0, -5, -10, 2], 2)`,
    name: "",
    title: "",
    lesson,
    task: 1,
    params: [[2, 5, 6, -5, -10]],
    resultAsCode: false,
}

//* =========================  Task #2  ===========================
// Створити службове авто (водій, марка, номер). Створити клас таким чином,
//  щоб можна було створити тільки один екземпляр цього класу.

class Driver {
    constructor({ firstName, secondName, age }) {
        this.firstName = firstName
        this.secondName = secondName
        this.age = age
    }

    getFullName() {
        return this.firstName + " " + this.secondName
    }

    toString() {
        return `Driver: ${this.getFullName()}`
    }
}

class Car {
    constructor(initData) {
        Object.assign(this, initData)
    }
    // constructor({ brand, model, number }) {
    //     this.brand = brand
    //     this.model = model
    //     this.number = number
    // }

    toString() {
        return `Car: ${this.brand} ${this.model} ${this.number}`
    }
}

class CompanyCar {
    // Singleton
    static carRef

    constructor(initData) {
        if (CompanyCar.carRef) return CompanyCar.carRef

        // Сomposition
        this.driver = new Driver(initData)
        this.car = new Car(initData)

        CompanyCar.carRef = this
    }

    toString() {
        return `${this.driver} ${this.car}`
    }
}

export function task2_17() {
    const companyCar1 = new CompanyCar({
        firstName: "Ivan",
        secondName: "Vodylo",
        age: 25,
        brand: "BMW",
        model: "X5",
        number: "BA5555BB",
    })

    const companyCar2 = new CompanyCar({
        firstName: "Mykola",
        secondName: "NeVodylo",
        age: 30,
        brand: "Toyota",
        model: "C-HR",
        number: "BA0000BB",
    })

    return companyCar1 + "<br><br>" + companyCar2
}

task2_17.solutionParams = {
    code:
        Driver.toString() +
        "\n\n" +
        Car.toString() +
        "\n\n" +
        CompanyCar.toString() +
        "\n\n" +
        task2_17.toString() +
        "\n\n" +
        `task2_17()`,
    name: "",
    title: "",
    lesson,
    task: 2,
    params: [],
    resultAsCode: false,
}

//* =========================  Task #3  ===========================
// Створити клас Нагадувач. Кожні вказані кількості секунд (використати setinterval)
//  програма нагадує про якусь подію (це просто текст) і також виводиться порядковий
// номер скільки раз вже нагадування було. Зробити так, щоб неможна було зробити одночасно
// декілька обʼєктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.

class Reminder {
    #message
    #delay

    static tickerRef
    static count = 0

    constructor(message, delay) {
        if (Reminder.tickerRef) return Reminder.tickerRef
        this.message = message
        this.delay = delay

        Reminder.tickerRef = this
    }

    get message() {
        return this.#message
    }

    set message(value) {
        this.#message = value
    }

    get delay() {
        return this.#delay
    }

    set delay(value) {
        this.#delay = value
    }

    startRemind() {
        this.timeoutID = setInterval(() => {
            const divSolutionResult =
                document.getElementById("solution__result")
            const note = document.createElement("div")
            note.className = "solution-notice"
            note.textContent = `${Reminder.count++ + 1}  ${this.message}`
            return this.render(divSolutionResult, note)
        }, this.delay)
    }

    stopRemind() {
        clearInterval(this.timeoutID)
    }

    render(domNode, domEl) {
        try {
            domNode.append(domEl)
        } catch (error) {
            console.log(error)
        }
    }
}

export function task3_17() {
    const reminder1 = new Reminder("Get Up!", 1000)
    const reminder2 = new Reminder("Hey!", 1000)
    // console.log(reminder1 === reminder2)

    reminder1.startRemind()
    setTimeout(() => (reminder1.message = "You're Late!"), 5000)
    setTimeout(() => reminder1.stopRemind(), 10000)

    Reminder.count = null
    Reminder.tickerRef = null

    return "Start"
}

task3_17.solutionParams = {
    code:
        Reminder.toString() +
        "\n\n" +
        `const reminder1 = new Reminder("Get Up!", 1000)
const reminder2 = new Reminder("Hey!", 1000)
// console.log(reminder1 === reminder2)

reminder1.startRemind()
setTimeout(() => (reminder1.message = "You're Late!"), 5000)
setTimeout(() => reminder1.stopRemind(), 10000)

Reminder.count = null
Reminder.tickerRef = null`,
    name: "",
    title: "",
    lesson,
    task: 3,
    params: [],
    resultAsCode: false,
}

//* =========================  Task #4  ===========================
// Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість,
// фірма виробник (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів,
// фільтрація за назвою товару, фільтрація за назвою фірми

class Company {
    constructor(name, licenceNumber) {
        this.name = name
        this.licenceNumber = licenceNumber
    }

    toString() {
        return `Company: ${this.name} / Licence #${this.licenceNumber}`
    }
}

class Product {
    static VALUE_INCORRECT_ERR = "The value is incorrect"
    static #nextId = 0

    static get nextId() {
        return this.#nextId
    }

    static set nextId(value) {
        if (this.#nextId < 0) throw new Error(VALUE_INCORRECT_ERR)
        this.#nextId = value
    }

    _id
    _title

    constructor({ title, amount, unit, companyName, companyLicenceNumber }) {
        if (
            !title ||
            !amount ||
            !unit ||
            !companyName ||
            !companyLicenceNumber
        ) {
            throw new Error("Can't initialize new object")
        }
        this.addId()
        this.title = title
        this.amount = amount
        this.unit = unit

        // Composition
        this.company = new Company(companyName, companyLicenceNumber)
    }

    get id() {
        return this._id
    }

    addId() {
        this._id = Product.#nextId++
    }

    get title() {
        return this._title
    }

    set title(value) {
        try {
            if (!value) throw new Error("Title can't be empty!")
            this._title = value
        } catch (error) {
            console.log(error)
        }
    }

    // set company(companyObj) {
    // 	if
    // }
    // isCompanyById(id) {

    // }

    toString() {
        return `Title: ${this._title} amount: ${this.amount} ${this.unit} Company: ${this.company}`
    }
}

class Warehouse {
    static agregationClass = Product
    static ANOTHER_CLASS_ERROR = `Can't add another class than ${Warehouse.agregationClass.name} one!`
    static caption = "Warehouse # 1"

    constructor(title) {
        this.title = title

        // Aggregation
        this._products = []
    }

    // get products() {
    //     return this._products
    // }

    addProduct(...newProducts) {
        try {
            newProducts.forEach((prod) => {
                if (prod instanceof Warehouse.agregationClass) {
                    this._products.push(prod)
                } else throw new Error(Warehouse.ANOTHER_CLASS_ERROR)
            })
        } catch (error) {
            console.log(error)
        }
    }

    removeProduct(productIdToRemove) {
        try {
            this._products = this._products.filter(
                (product) => product.id !== productIdToRemove
            )
        } catch (error) {
            console.log(error)
        }
    }

    toString() {
        const res = []

        for (const prod of this._products) {
            const prodArr = []

            for (const [_, value] of Object.entries(prod)) {
                prodArr.push(value)
            }
            res.push(prodArr)
        }

        const headers = Object.getOwnPropertyNames(this._products[0])
        const prodTable = table(headers, res, Warehouse.caption)

        return prodTable.outerHTML
    }
}

export function task4_17() {
    const warehouse = new Warehouse("Super Store")
    // warehouse.addProduct("new prod")   // Error

    const product1 = new Product({
        title: "Green Tea",
        amount: 54,
        unit: "PK",
        companyName: "Tesco",
        companyLicenceNumber: getRandomNumber(100000, 200000),
    })

    warehouse.addProduct(product1)

    const product2 = new Product({
        title: "Whole Milk",
        amount: 120,
        unit: "L",
        companyName: "Dunnes",
        companyLicenceNumber: getRandomNumber(100000, 200000),
    })

    const product3 = new Product({
        title: "Original Tea",
        amount: 55,
        unit: "PK",
        companyName: "Tesco",
        companyLicenceNumber: getRandomNumber(100000, 200000),
    })

    const product4 = new Product({
        title: "Granulated Sugar",
        amount: 77,
        unit: "KG",
        companyName: "Tesco",
        companyLicenceNumber: getRandomNumber(100000, 200000),
    })

    const product5 = new Product({
        title: "Potatos",
        amount: 132,
        unit: "KG",
        companyName: "SuperValu",
        companyLicenceNumber: getRandomNumber(100000, 200000),
    })

    console.log(product5)

    warehouse.addProduct(product2, product3, product4, product5)
    // console.log(warehouse.toString())

    warehouse.removeProduct(2)
    // console.log(warehouse.toString())

    // console.log(product1)
    console.log(Warehouse.caption)

    Product.nextId = null
    // Warehouse.caption = null

    return warehouse.toString()
}

task4_17.solutionParams = {
    code:
        Company.toString() +
        "\n\n" +
        Product.toString() +
        "\n\n" +
        Warehouse.toString() +
        ``,
    name: "",
    title: "",
    lesson,
    task: 4,
    params: [],
    resultAsCode: false,
}

//* =========================  Task #5  ===========================
