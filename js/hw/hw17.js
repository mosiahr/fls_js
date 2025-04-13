import { PROJECT_FOLDER } from "../config.js"
import {
    getNumbersFromCurrentFileName,
    getRandomNumber,
    toUpperCaseFirstLetterEveryWord,
} from "../utils.js"
import { createElem, table, check } from "../components/index.js"

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

    createNotice(message, className) {
        const divSolutionResult = document.getElementById("solution__result")
        const note = document.createElement("div")
        note.className = className
        note.innerHTML = message
        return this.render(divSolutionResult, note)
    }

    startRemind() {
        setTimeout(() => this.createNotice("START", "test-start"), 1000)

        this.timeoutID = setInterval(() => {
            this.createNotice(
                `${Reminder.count++ + 1}  ${this.message}`,
                "solution-notice"
            )
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
    const reminder2 = new Reminder("Hey!", 2000)
    // console.log(reminder1 === reminder2)

    reminder1.startRemind()
    setTimeout(() => (reminder1.message = "You may be late!"), 3000)
    setTimeout(() => (reminder1.message = "How long can you sleep?!"), 5000)
    setTimeout(() => (reminder1.message = "You're Late!"), 7000)
    setTimeout(() => (reminder1.message = "Сan sleep more!"), 9000)
    setTimeout(() => reminder1.stopRemind(), 10000)

    Reminder.count = null
    Reminder.tickerRef = null
    return " "
}

task3_17.solutionParams = {
    code: Reminder.toString() + "\n\n" + task3_17.toString(),
    name: "",
    title: "",
    lesson,
    task: 3,
    params: [],
    resultAsCode: false,
}

//* =========================  Task #4  ===========================
//* Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість,
//* фірма виробник (назва, реєстраційний номер). Організувати реєстрацію/відвантаження товарів,
//* фільтрація за назвою товару, фільтрація за назвою фірми

class Company {
    _name
    _licenceNumber

    constructor(name, licenceNumber) {
        this.name = name
        this.licenceNumber = licenceNumber
    }

    get name() {
        return this._name
    }

    set name(value) {
        try {
            if (!value) throw new Error(Product.VALUE_CANT_EMPTY)
            this._name = value
        } catch (error) {
            console.log(error)
        }
    }

    get licenceNumber() {
        return this._licenceNumber
    }

    set licenceNumber(value) {
        try {
            if (!value) throw new Error(Product.VALUE_CANT_EMPTY)
            this._licenceNumber = value
        } catch (error) {
            console.log(error)
        }
    }

    equals(obj) {
        try {
            if (this === obj) return true
            if (obj == null || this.constructor.name !== obj.constructor.name)
                return false

            if (parseInt(this._licenceNumber) === parseInt(obj._licenceNumber))
                return true

            return false
        } catch (error) {
            console.log(error)
        }
    }

    equalsByName(obj) {
        try {
            if (this === obj) return true
            if (obj == null || this.constructor.name !== obj.constructor.name)
                return false

            if (this._name === obj._name) return true

            return false
        } catch (error) {
            console.log(error)
        }
    }

    toString() {
        return `${this.constructor.name}(name = ${this.name}, licence = ${this.licenceNumber})`
    }
}

class Product {
    static VALUE_INCORRECT_ERR = "The value is incorrect"
    static VALUE_CANT_EMPTY = "Value can't be empty!"
    static CANT_INIT_NEW_OBJ = "Can't initialize new object"
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
    _amount
    _unit

    constructor({ title, amount, unit, companyName, companyLicenceNumber }) {
        if (
            !title ||
            !amount ||
            !unit ||
            !companyName ||
            !companyLicenceNumber
        ) {
            throw new Error(Product.CANT_INIT_NEW_OBJ)
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
            if (!value) throw new Error(Product.VALUE_CANT_EMPTY)
            this._title = value
        } catch (error) {
            console.log(error)
        }
    }

    get amount() {
        return this._amount
    }

    set amount(value) {
        try {
            if (!value) throw new Error(Product.VALUE_CANT_EMPTY)
            this._amount = value
        } catch (error) {
            console.log(error)
        }
    }

    addAmount(value) {
        try {
            this._amount += value
        } catch (error) {
            console.log(error)
        }
    }

    get unit() {
        return this._unit
    }

    set unit(value) {
        try {
            if (!value) throw new Error(Product.VALUE_CANT_EMPTY)
            this._unit = value
        } catch (error) {
            console.log(error)
        }
    }

    equals(obj) {
        try {
            if (this === obj) return true
            if (obj == null || this.constructor.name !== obj.constructor.name)
                return false

            if (
                this._title.localeCompare(obj.title) === 0 &&
                this.company.name.localeCompare(obj.company.name) === 0
            ) {
                return true
            }
            return false
        } catch (error) {
            console.log(error)
        }
    }

    toString() {
        return `Title: ${this._title} amount: ${this.amount} ${this.unit} Company: ${this.company}`
    }
}

class Warehouse {
    static agregationClass = Product
    static ANOTHER_CLASS_ERROR = `Can't add another class than ${Warehouse.agregationClass.name} one!`
    static caption = "Warehouse # 1"

    _title

    constructor(title) {
        this.title = title

        // Aggregation
        this._products = []
    }

    get title() {
        return this._title
    }

    set title(value) {
        try {
            if (!value) this._title = Warehouse.caption
            this._title = value
        } catch (error) {
            console.log(error)
        }
    }

    get products() {
        return this._products
    }

    addProducts(...newProducts) {
        try {
            for (const newProduct of newProducts) {
                if (!(newProduct instanceof Warehouse.agregationClass))
                    throw new Error(Warehouse.ANOTHER_CLASS_ERROR)

                //* Find equal products
                const equalProductArr = []
                for (let i = 0; i < this._products.length; i++) {
                    if (this._products[i].equals(newProduct)) {
                        equalProductArr.push([i, newProduct])
                    }
                }

                //* Push new product or add to exist product
                if (equalProductArr.length === 0) {
                    for (const prod of this._products) {
                        if (newProduct.company.equalsByName(prod.company)) {
                            newProduct.company.licenceNumber =
                                prod.company.licenceNumber
                        }
                    }
                    this._products.push(newProduct)
                } else {
                    for (const equalsProduct of equalProductArr) {
                        this._products[equalsProduct[0]].addAmount(
                            newProduct.amount
                        )
                    }
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    hasCompany(company) {
        return this._products.some((prod) => company.equals(prod.company))
    }

    getCompanyByLicenceNumber(licenceNumber) {
        try {
            const product = this._products.find(
                (item) => item.company.licenceNumber === licenceNumber
            )
            return product.company
        } catch (error) {
            console.log(error)
        }
    }

    removeProductById(productId) {
        try {
            this._products = this._products.filter(
                (product) => product.id !== productId
            )
        } catch (error) {
            console.log(error)
        }
    }

    getProductById(id) {
        try {
            return this._products.find((item) => item._id)
        } catch (error) {
            console.log(error)
        }
    }

    filterByProductTitle(productTitle) {
        try {
            return this._products.filter(
                (product) => product._title === productTitle
            )
        } catch (error) {
            console.log(error)
        }
    }

    filterByCompanyName(companyName) {
        try {
            return this._products.filter((product) => {
                // console.log(product.company.name === companyName)
                return product.company.name === companyName
            })
        } catch (error) {
            console.log(error)
        }
    }

    toString() {
        try {
            const res = []
            let headers

            if (this._products && this._products.length !== 0) {
                const prodHeaders = Object.getOwnPropertyNames(
                    this._products[0]
                )
                const prodHeadersWithoutCompany = prodHeaders.filter((el) =>
                    el !== "company" ? el : ""
                )
                const compHeaders = Object.getOwnPropertyNames(
                    this._products[0].company
                )

                headers = prodHeadersWithoutCompany.concat(compHeaders)
                headers.concat(compHeaders)

                headers.forEach(
                    (el, i, arrRef) => (arrRef[i] = el.replace("_", ""))
                )
            } else {
                headers = []
            }

            for (const prod of this._products) {
                const prodArr = []

                for (const [key, value] of Object.entries(prod)) {
                    if (key === "company") {
                        prodArr.push(value.name, value.licenceNumber)
                    } else prodArr.push(value)
                }
                res.push(prodArr)
            }

            const prodTable = table(headers, res, this._title)
            return prodTable.outerHTML
        } catch (error) {
            console.log(error)
        }
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

    //* Registration of goods
    warehouse.addProducts(product1)

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

    const product6 = new Product({
        title: "Yogurt",
        amount: 50,
        unit: "PK",
        companyName: "SuperValu",
        companyLicenceNumber: getRandomNumber(100000, 200000),
    })

    //* product7 object will not add, because that product with  title: "Yogurt"
    //* and company: "SuperValu" already are existing. But them property "amount" are adding.
    const product7 = new Product({
        title: "Yogurt",
        amount: 100,
        unit: "PK",
        companyName: "SuperValu",
        companyLicenceNumber: getRandomNumber(100000, 200000),
    })

    const product8 = new Product({
        title: "Digestives",
        amount: 79,
        unit: "PK",
        companyName: "Lidl",
        companyLicenceNumber: getRandomNumber(100000, 200000),
    })

    const product9 = new Product({
        title: "Extra Virgin Olive Oil",
        amount: 19,
        unit: "PK",
        companyName: "Aldi",
        companyLicenceNumber: getRandomNumber(100000, 200000),
    })
    const product10 = new Product({
        title: "Extra Virgin Olive Oil",
        amount: 12,
        unit: "PK",
        companyName: "Tesco",
        companyLicenceNumber: getRandomNumber(100000, 200000),
    })

    //* Registration of goods
    warehouse.addProducts(
        product2,
        product3,
        product4,
        product5,
        product6,
        product7,
        product8,
        product9,
        product10
    )
    // console.log(warehouse.getProductById(product3.id))
    // console.log(warehouse.hasCompany(product3.company))

    const screenshot1 = warehouse.toString()

    //* Shipment of goods
    warehouse.title = "Super Store After Shipment of Goods"
    warehouse.removeProductById(product3.id)
    warehouse.removeProductById(product4.id)

    const screenshot2 = warehouse.toString()

    //* Filter by product title
    // console.log(warehouse.filterByProductTitle("Extra Virgin Olive Oil"))
    const warehouseForFilterByProductTitle = new Warehouse(
        "super store after shipment of goods and filter by product title"
    )
    warehouseForFilterByProductTitle.addProducts(
        ...warehouse.filterByProductTitle("Extra Virgin Olive Oil")
    )
    const screenshot3 = warehouseForFilterByProductTitle.toString()

    //* Filter by company name
    const warehouseForFilterByCompanyName = new Warehouse(
        "super store after shipment of goods and filter by company name"
    )
    warehouseForFilterByCompanyName.addProducts(
        ...warehouse.filterByCompanyName("Tesco")
    )
    const screenshot4 = warehouseForFilterByCompanyName.toString()

    Product.nextId = null
    return (
        screenshot1 +
        "<br><br>" +
        screenshot2 +
        "<br><br>" +
        screenshot3 +
        "<br><br>" +
        screenshot4
    )
}

task4_17.solutionParams = {
    code:
        Company.toString() +
        "\n\n" +
        Product.toString() +
        "\n\n" +
        Warehouse.toString() +
        "\n\n" +
        task4_17.toString() +
        "\n\n" +
        toUpperCaseFirstLetterEveryWord.toString() +
        "\n\n" +
        table.toString(),
    name: "",
    title: "",
    lesson,
    task: 4,
    params: [],
    resultAsCode: false,
}

//* =========================  Task #5  ===========================
//* Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа,
//*  які треба перемножати), AddChecker (клас для перевірки додавання - рандомно генеруються числа
//*  у заданому діапазоні, які треба додавати). Обидва класи надсилають результати тестування обʼєкту
//*  класу History, який зберігає історію тестування у масиві у вигляді обʼєктів

//* Приклад.
//* testsList=[{firstNum:1, secondNum:5,opration:'**', userAnswer:7, correctAnswer:5},
//*  {firstNum:3, secondNum:4,opration:'+', userAnswer:7, correctAnswer:7}]

//* Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля.
//*  Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично
//* генерує якісь N задач (рандомно вибираємо, що опитувати: додавання чи множення)
//*  і проводить опитування. Результати тестування додаються в обʼєкт History Зробити так,
//* щоб обʼєкт такого класу можна було створити тільки один. Коли зроблено ці N задач вивести усю
//* історію на екран.

class MultChecker {
    static multiply(firstNum, secondNum) {
        return parseInt(firstNum) * parseInt(secondNum)
    }
}

class AddChecker {
    static add(firstNum, secondNum) {
        return parseInt(firstNum) + parseInt(secondNum)
    }
}

class TestData {
    _firstNum
    _secondNum
    _operation
    _userAnswer
    _correctAnswer = 0

    constructor(firstNum, secondNum, operation) {
        this.firstNum = firstNum
        this.secondNum = secondNum
        this.operation = operation
        this.#addCorrectAnswer()
    }

    get firstNum() {
        return this._firstNum
    }

    set firstNum(value) {
        this._firstNum = parseInt(value)
    }

    get secondNum() {
        return this._secondNum
    }

    set secondNum(value) {
        this._secondNum = parseInt(value)
    }

    get operation() {
        return this._operation
    }

    set operation(value) {
        this._operation = value
    }

    get userAnswer() {
        return this._userAnswer
    }

    set userAnswer(value) {
        this._userAnswer = parseInt(value)
    }

    get correctAnswer() {
        return this._correctAnswer
    }

    set correctAnswer(value) {
        this._correctAnswer = value
    }

    #addCorrectAnswer() {
        if (this.operation === "*") {
            this._correctAnswer = MultChecker.multiply(
                this._firstNum,
                this._secondNum
            )
        } else if (this.operation === "+") {
            this._correctAnswer = AddChecker.add(
                this._firstNum,
                this._secondNum
            )
        } else throw new Error("Operation can't another than '*' or '+'")
    }

    toString() {
        return `${this.firstNum} ${this.operation} ${this.secondNum} = ?`
    }
}

class History {
    // Singleton
    static historyRef
    static titleTable = "history of test data"

    NOTICE_NO_ANSWER = "No answer"

    // Aggregation
    #tasks = []

    constructor() {
        if (History.historyRef) return History.historyRef

        History.historyRef = this
    }

    get tasks() {
        return this.#tasks
    }

    addTest(task) {
        this.#tasks.push(task)
    }

    toString() {
        try {
            const res = this.#tasks.map((task, ind) => {
                const taskStr = `${task.firstNum} ${task.operation} ${task.secondNum}`
                const userAnswerStr = !isNaN(task.userAnswer)
                    ? task.userAnswer
                    : this.NOTICE_NO_ANSWER.toUpperCase()
                const checkEl =
                    task.userAnswer === task.correctAnswer
                        ? check("green")
                        : check("red")

                return [
                    ind + 1,
                    taskStr,
                    userAnswerStr,
                    task.correctAnswer,
                    checkEl,
                ]
            })

            return table(
                ["#", "Task", "User answer", "Correct answer", "Check"],
                res,
                History.titleTable
            )
        } catch (error) {
            console.log(error)
        }
    }
}

class Timer {
    _callback
    _delay = 0
    _amountRunCallback
    _count = 0
    _timeoutId = null

    constructor(callback, delay, amountRunCallback, ...args) {
        this.callback = callback
        this.delay = delay
        this.amountRunCallback = amountRunCallback
        this.args = args
    }

    get callback() {
        return this._callback
    }

    set callback(value) {
        this._callback = value
    }

    get delay() {
        return delay
    }

    set delay(value) {
        this._delay = value
    }

    get amountRunCallback() {
        return this._amountRunCallback
    }

    set amountRunCallback(value) {
        this._amountRunCallback = value || Infinity
    }

    start() {
        this._timeoutId = setInterval(
            this.runCallback.bind(this),
            this._delay,
            ...this.args
        )
    }

    stop() {
        clearInterval(this._timeoutId)
        this._timeoutId = null
    }

    runCallback() {
        if (this.amountRunCallback === this._count) return this.stop()
        this._callback()
        this._count++
    }
}

class TestManager {
    NOTICE_START_TESTS = "Generating tests..."
    testList = []
    #amountTaskInTest
    #amountTest
    #minNum = 0
    #maxNum = 0
    #taskCounter = 0

    constructor(amountTaskInTest, amountTest, minNum, maxNum) {
        this.amountTaskInTest = amountTaskInTest
        this.amountTest = amountTest
        this.minNum = minNum
        this.maxNum = maxNum
        this.history = new History()
        this.timerForGenerateTasks = new Timer(
            this.generateTest.bind(this),
            1000,
            this.#amountTest
        )
    }

    get amountTaskInTest() {
        return this.#amountTaskInTest
    }

    set amountTaskInTest(value) {
        this.#amountTaskInTest = parseInt(value)
    }

    get amountTest() {
        return this.amountTest
    }

    set amountTest(value) {
        this.#amountTest = parseInt(value)
    }

    set minNum(value) {
        this.#minNum = value
    }

    set maxNum(value) {
        this.#maxNum = value
    }

    run() {
        setTimeout(
            () =>
                this.createNotice(
                    this.NOTICE_START_TESTS.toUpperCase(),
                    "test-start"
                ),
            500
        )
        setTimeout(() => this.timerForGenerateTasks.start(), 1000)
        this.runSurveyIntervalId = setInterval(() => this.runSurvey(), 1000)
    }

    runSurvey() {
        if (!this.timerForGenerateTasks._timeoutId) {
            clearInterval(this.runSurveyIntervalId)

            for (const test of this.testList) {
                for (const task of test) {
                    const question = `${task.firstNum} ${task.operation} ${task.secondNum} = ?`
                    task.userAnswer = parseInt(prompt(question))
                    this.history.addTest(task)
                }
            }

            const divSolutionResult =
                document.getElementById("solution__result")

            return this.render(divSolutionResult, this.history.toString())
        }
    }

    generateTest() {
        const taskTest = []
        for (let i = 0; i < this.#amountTaskInTest; i++) {
            taskTest.push(
                new TestData(
                    this.getRandomNumber(this.#minNum, this.#maxNum),
                    this.getRandomNumber(this.#minNum, this.#maxNum),
                    this.getRandomOperation()
                )
            )
        }

        this.createNotice(
            `Test #${this.#taskCounter + 1} <br><br> ${taskTest.join("<br>")}`,
            "solution-notice"
        )

        this.testList.push(taskTest)
        this.#taskCounter++
    }

    createNotice(message, className) {
        const divSolutionResult = document.getElementById("solution__result")
        const note = document.createElement("div")
        note.className = className
        note.innerHTML = message
        this.render(divSolutionResult, note)
    }

    render(domNode, domEl) {
        try {
            domNode.append(domEl)
        } catch (error) {
            console.log(error)
        }
    }

    getRandomOperation() {
        return Math.random() <= 0.5 ? "*" : "+"
    }

    getRandomNumber(minNumber, maxNumber) {
        if (Number.isFinite(minNumber) && Number.isFinite(maxNumber)) {
            return (
                minNumber +
                Math.floor(Math.random() * (maxNumber - minNumber + 1))
            )
        } else throw new Error("A minNumber and a maxNumber must be a number")
    }
}

export function task5_17() {
    const testManager = new TestManager(2, 3, 1, 10)
    testManager.run()
    testManager.history.tasks.length = 0
    return " "
}
task5_17.solutionParams = {
    code:
        MultChecker.toString() +
        "\n\n" +
        AddChecker.toString() +
        "\n\n" +
        TestData.toString() +
        "\n\n" +
        History.toString() +
        "\n\n" +
        Timer.toString() +
        "\n\n" +
        TestManager.toString() +
        "\n\n" +
        task5_17.toString(),
    name: "",
    title: "",
    lesson,
    task: 5,
    params: [],
    resultAsCode: false,
}
