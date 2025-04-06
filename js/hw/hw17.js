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
        return `Company: ${this.name} / Licence #${this.licenceNumber}`
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

    toString() {
        try {
            const res = []
            let headers

            if (this._products && this._products.length !== 0) {
                headers = Object.getOwnPropertyNames(this._products[0])
                headers.forEach(
                    (el, i, arrRef) =>
                        (arrRef[i] = el.replace("_", "").toUpperCase())
                )
            } else {
                headers = []
            }

            for (const prod of this._products) {
                const prodArr = []

                for (const [_, value] of Object.entries(prod)) {
                    prodArr.push(value)
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

    const product7 = new Product({
        title: "Digestives",
        amount: 79,
        unit: "PK",
        companyName: "Lidl",
        companyLicenceNumber: getRandomNumber(100000, 200000),
    })

    const product8 = new Product({
        title: "Yogurt",
        amount: 100,
        unit: "PK",
        companyName: "SuperValu",
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
    console.log(warehouse.filterByProductTitle("Extra Virgin Olive Oil"))

    const warehouseForFilterByProductTitle = new Warehouse(
        "Super Store After Shipment of goods and filter by Product title"
    )
    warehouseForFilterByProductTitle.addProducts(
        ...warehouse.filterByProductTitle("Extra Virgin Olive Oil")
    )
    const screenshot3 = warehouseForFilterByProductTitle.toString()

    Product.nextId = null
    return screenshot1 + "<br><br>" + screenshot2 + "<br><br>" + screenshot3
}

task4_17.solutionParams = {
    code:
        Company.toString() +
        "\n\n" +
        Product.toString() +
        "\n\n" +
        Warehouse.toString() +
        "\n\n" +
        task4_17.toString(),
    name: "",
    title: "",
    lesson,
    task: 4,
    params: [],
    resultAsCode: false,
}

//* =========================  Task #5  ===========================
