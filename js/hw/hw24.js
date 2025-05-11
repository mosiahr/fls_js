import {
  getNumbersFromCurrentFileName,
  getRandomNumber,
  toUpperCaseFirstLetterEveryWord,
} from '../utils.js'

import Timer from '../helpers/timer.js'

const lesson = getNumbersFromCurrentFileName(import.meta)

//* =========================  Task #1  ===========================
// Дано клас PhoneNumber. Створити функцію перетворення до string,
// при якому на основі номера виводиться оператор (050….  à MTC, 096… à Kyivstar, ….)

class PhoneNumber {
  static operatorMapping = {
    '050': 'Vodafone',
    '066': 'Vodafone',
    '095': 'Vodafone',
    '099': 'Vodafone',
    '067': 'Kyivstar',
    '068': 'Kyivstar',
    '096': 'Kyivstar',
    '097': 'Kyivstar',
    '098': 'Kyivstar',
    '063': 'Lifecell',
    '073': 'Lifecell',
    '093': 'Lifecell',
    '091': '3Mob',
    '094': 'Intertelecom',
  }
  #phoneNumberRegex = new RegExp(
    /^\+?(?:\d{1,3}?)?[-.\s]?(?<operatorCode>\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/
  )
  #phoneNumber
  #codePhoneOperator

  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber
    this.#setCodePhoneOperator()
  }

  get phoneNumber() {
    return this.#phoneNumber
  }
  set phoneNumber(value) {
    if (this.isValidPhone(value)) this.#phoneNumber = value
    else throw new Error('Invalid phone number value')
  }

  get codePhoneOperator() {
    return this.#codePhoneOperator
  }
  set codePhoneOperator(value) {
    this.#codePhoneOperator = value
  }

  get phoneNumberRegex() {
    return this.#phoneNumberRegex
  }

  isValidPhone(phone) {
    return this.phoneNumberRegex.test(phone)
  }

  getOperatorName() {
    return (
      PhoneNumber.operatorMapping[this.codePhoneOperator] || 'Unknown Operator'
    )
  }

  [Symbol.toPrimitive](hint) {
    let res
    switch (hint) {
      case 'string':
        res = this.getOperatorName()
        break
      case 'number':
        res = this.codePhoneOperator
        break
      default:
        res = this.getOperatorName()
        break
    }
    return res
  }

  #setCodePhoneOperator() {
    if (this.phoneNumber) {
      const res = this.phoneNumberRegex.exec(this.phoneNumber)
      this.codePhoneOperator = res?.groups?.operatorCode
    }
  }
}

export function task1_24() {
  const phoneNumber = new PhoneNumber('+380963070734')
  console.log(`${phoneNumber}`) // string
  console.log(+phoneNumber) // number
  console.log(phoneNumber + '') // default
  return [`${phoneNumber}`, +phoneNumber, phoneNumber + '']
}

task1_24.solutionParams = {
  code: PhoneNumber.toString() + '\n\n' + task1_24.toString(),
  name: '',
  title: '',
  lesson,
  task: 1,
  params: [],
  resultAsCode: true,
}

//* =========================  Task #2  ===========================
// Дано Shop  -- клас, що містить список товарів (масив об’єктів класу Product (назва, ціна,
//  кількість одиниць). Додати можливість ітератора до класу Shop, щоб при ітеруванні
// для кожного елемента виводився рядок «товар-загальна вартість»

class Shop {
  #productList
  index = 0

  /**
   * Creates an instance of the class with a list of products.
   * @constructor
   * @param {Array} productList - An array of products to initialize the class with.
   */
  constructor(productList) {
    this.productList = productList
  }

  get productList() {
    return this.#productList
  }
  set productList(value) {
    this.#productList = value
  }

  addProduct(product) {
    this.productList.push(product)
  }

  [Symbol.iterator]() {
    return this
  }
  next() {
    if (this.index < this.productList.length) {
      return { done: false, value: this.productList[this.index++] }
    } else return { done: true }
  }
}

class Product {
  /**
   * @param {string} name - The name of the item.
   * @param {number} price - The price of the item.
   * @param {number} volume - The volume of the item.
   */
  constructor(name, price, volume) {
    this.name = name
    this.price = price
    this.volume = volume
  }

  [Symbol.toPrimitive](hint) {
    let res
    switch (hint) {
      case 'string':
        res = `${this.name} - ${this.getTotalPrice()}`
        break
      case 'number':
        res = this.getTotalPrice()
        break
      default:
        res = `${this.name} - ${this.getTotalPrice()}`
        break
    }
    return res
  }

  getTotalPrice() {
    return (this.price * this.volume).toFixed(2)
  }
}

export function task2_24() {
  const res = []
  const products = [
    new Product('Apple', 1.2, 10),
    new Product('Banana', 0.8, 20),
    new Product('Orange', 1.5, 15),
    new Product('Milk', 2.5, 5),
    new Product('Bread', 1.0, 8),
    new Product('Cheese', 3.0, 3),
    new Product('Eggs', 2.0, 12),
    new Product('Chicken', 5.0, 2),
    new Product('Rice', 1.8, 7),
    new Product('Pasta', 1.3, 6),
  ]

  const shop = new Shop(products)
  shop.addProduct(new Product('Butter', 2.0, 2))

  for (const product of shop) {
    res.push(String(product))
  }

  return res
}

task2_24.solutionParams = {
  code:
    Shop.toString() +
    '\n\n' +
    Product.toString() +
    '\n\n' +
    task2_24.toString(),
  name: '',
  title: '',
  lesson,
  task: 2,
  params: [],
  resultAsCode: true,
}
