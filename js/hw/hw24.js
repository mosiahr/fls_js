import {
  getNumbersFromCurrentFileName,
  getRandomNumber,
  toUpperCaseFirstLetterEveryWord,
  trunsformEntityToCode,
} from '../utils.js'

import { table, createList } from '../components/index.js'
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

  static #phoneNumberRegex = new RegExp(
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
    return PhoneNumber.#phoneNumberRegex
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
  code: trunsformEntityToCode(PhoneNumber, task1_24),
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

class Shop {
  #productList

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
    this.index = 0
    return this
  }
  next() {
    if (this.index < this.productList.length) {
      return { done: false, value: this.productList[this.index++] }
    } else return { done: true }
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

  return createList(res)
}

task2_24.solutionParams = {
  code: trunsformEntityToCode(Shop, Product, createList, task2_24),
  name: '',
  title: '',
  lesson,
  task: 2,
  params: [],
  resultAsCode: false,
}

//* =========================  Task #3  ===========================
// Створити генератор, який би випадковим чином поступово генерував
// вказану кількість парних чисел.

function* generateRandomEvenNumbers(minNumber, maxNumber, numberVolume) {
  for (let i = 0; i < numberVolume; i++) {
    const randomNumber = getRandomNumber(minNumber, maxNumber)
    yield randomNumber - (randomNumber % 2)
  }
}

export function task3_24() {
  const randomEvenNumbers = generateRandomEvenNumbers(100, 1, 10)
  return createList([...randomEvenNumbers])
}

task3_24.solutionParams = {
  code: trunsformEntityToCode(
    getRandomNumber,
    generateRandomEvenNumbers,
    createList,
    task3_24
  ),
  name: '',
  title: '',
  lesson,
  task: 3,
  params: [],
  resultAsCode: false,
}

//* =========================  Task #4  ===========================
// Дано список URL адрес. Підрахувати кількість адрес, що відносяться до кожного
//  із доменів (edu, com, org,...).

function getDomainName(url) {
  const regex = /https?:\/\/[\w.-]+\.(?<domainName>\w+)/
  const res = url.match(regex)
  if (!res) throw Error('Argument url should be URL!')
  return res.groups?.domainName
}

export function task4_24() {
  const urlList = [
    'https://www.greenwave.com',
    'https://www.pixeldrop.net',
    'https://www.freshbites.org',
    'https://www.nightowl.io',
    'https://www.travelocean.co',
    'https://www.codebucket.dev',
    'https://www.smartfinance.ai',
    'https://www.wildtrails.com',
    'https://www.learnfast.edu',
    'https://www.ecomspark.store',
    'https://www.happypaws.pet',
    'https://www.fixitnow.tech',
    'https://www.coffeebeanhouse.com',
    'https://www.artsycorner.net',
    'https://www.quickdocs.org',
    'https://www.zapmarket.shop',
    'https://www.gearupnow.pro',
    'https://www.globalconnect.biz',
    'https://www.fitnesszone.fit',
    'https://www.mindfulreads.blog',
  ]

  const domains = new Map()
  domains[Symbol.iterator] = function* () {
    for (const [key, value] of this.entries()) {
      yield `${key} => ${value}`
    }
  }

  for (const url of urlList) {
    const domain = getDomainName(url)
    const urlCount = domains.get(domain) || 0
    domains.set(domain, urlCount + 1)
  }
  return createList(urlList) + '<br>' + createList([...domains])
}

task4_24.solutionParams = {
  code: trunsformEntityToCode(getDomainName, createList, task4_24),
  name: '',
  title: '',
  lesson,
  task: 4,
  params: [],
  resultAsCode: false,
}

//* =========================  Task #5  ===========================
// Дано масив книг (назва, рік видання, автор, ціна). Підрахувати загальну
// вартість книг для кожного із авторів.

class Autor {
  // Memoizing
  static instances = new Map()

  #firstName
  #lastName

  constructor(firstName, lastName) {
    const key = JSON.stringify([
      this.normalizeSpaces(firstName),
      this.normalizeSpaces(lastName),
    ])

    if (Autor.instances.has(key)) return Autor.instances.get(key)

    this.firstName = firstName
    this.lastName = lastName

    Autor.instances.set(key, this)
  }

  get firstName() {
    return this.#firstName
  }
  set firstName(value) {
    this.#firstName = this.normalizeSpaces(value)
  }

  get lastName() {
    return this.#lastName
  }
  set lastName(value) {
    this.#lastName = this.normalizeSpaces(value)
  }

  normalizeSpaces(text) {
    const regex = /\s+/g
    return text.replace(regex, ' ').trim()
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

  [Symbol.toPrimitive](hint) {
    let res
    switch (hint) {
      case 'string':
        res = this.getFullName()
        break
      default:
        res = this.getFullName()
        break
    }
    return res
  }
}
class Book {
  constructor(title, year, price, autor) {
    this.title = title
    this.year = year
    this.price = price
    this.autor = autor
  }
}

class Library {
  //Singleton
  instanceRef
  #booksList

  constructor(booksList) {
    if (Library.instanceRef) return Library.instanceRef

    this.booksList = booksList
    this.totalValueBooksByAutorMap = new Map()

    this.instanceRef = this
  }

  get booksList() {
    return this.#booksList
  }
  set booksList(value) {
    this.#booksList = value
  }

  addBookObject(book) {
    if (book instanceof Book) this.booksList.push(book)
    else throw new TypeError('Instance should be a Book type!')
  }

  [Symbol.iterator]() {
    this.currentBookIndex = 0
    return this
  }
  next() {
    if (this.currentBookIndex < this.booksList.length) {
      const book = this.booksList[this.currentBookIndex++]
      if (this.totalValueBooksByAutorMap.has(book.autor)) {
        const totalValue =
          this.totalValueBooksByAutorMap.get(book.autor) + book.price
        this.totalValueBooksByAutorMap.set(book.autor, totalValue)
      } else this.totalValueBooksByAutorMap.set(book.autor, book.price)

      return {
        done: false,
        value: `${book.title} - ${book.price}, ${book.autor},
        ${this.totalValueBooksByAutorMap.get(book.autor).toFixed(2)}`,
      }
    }
    return { done: true }
  }
}

export function task5_24() {
  const tarasShevchenko = new Autor('Taras', 'Shevchenko')
  const lesyaUkrainka = new Autor('Lesya', 'Ukrainka')
  const listBooks = [
    new Book(
      'Shadows of Forgotten Ancestors',
      1911,
      12.99,
      new Autor('Mykhailo', 'Kotsiubynsky')
    ),
    new Book('The Forest Song', 1911, 10.99, lesyaUkrainka),
    new Book('Kobzar', 1840, 15.99, tarasShevchenko),
    new Book('Kobzar', 1840, 15.99, tarasShevchenko),
    new Book('Kobzar', 1840, 15.99, tarasShevchenko),
    new Book('A Dream', 1844, 19.99, tarasShevchenko),
    new Book('Black Council', 1846, 11.99, new Autor('Panteleimon', 'Kulish')),
    new Book('Black Council', 1846, 11.99, new Autor('Panteleimon', 'Kulish')),
    new Book('Maria', 1934, 9.99, new Autor('Ulas', 'Samchuk')),
    new Book('Maria', 1934, 9.99, new Autor('Ulas', 'Samchuk')),
    new Book('Tiger Trappers', 1900, 8.99, new Autor('Ivan', 'Bahrianyi')),
    new Book('The Yellow Prince', 1963, 14.99, new Autor('Vasyl', 'Barka')),
    new Book('The Cathedral', 1968, 12.49, new Autor('Oles', ' Honchar')),
    new Book('The Cathedral', 1968, 12.49, new Autor('Oles', 'Honchar')),
    new Book(
      'The Garden of Gethsemane',
      1950,
      10.49,
      new Autor('Ivan', 'Bahrianyi')
    ),
  ]

  const library = new Library(listBooks)
  library.addBookObject(
    new Book('The City', 1928, 13.99, new Autor('Valerian', 'Pidmohylny'))
  )

  return (
    createList([...library]) +
    '<br>' +
    createList([...library.totalValueBooksByAutorMap])
  )
}

task5_24.solutionParams = {
  code: trunsformEntityToCode(Autor, Book, Library, createList, task5_24),
  name: '',
  title: '',
  lesson,
  task: 5,
  params: [],
  resultAsCode: false,
}

//* =========================  Task #6  ===========================
// Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін).
// Підрахувати для кожного клієнта кількість відвідувань.

//* =========================  Task #7  ===========================
// Дано масив студентів (піб, курс, факультет). Підрахувати кількість різних факультетів,
//  та кількість студентів кожного з курсів.

export function task7_24() {
  const studentList = [
    { name: 'Ivan Petrenko', course: 1, faculty: 'Engineering' },
    { name: 'Olena Shevchenko', course: 2, faculty: 'Mathematics' },
    { name: 'Andriy Kovalenko', course: 3, faculty: 'Physics' },
    { name: 'Svitlana Bondarenko', course: 1, faculty: 'Biology' },
    { name: 'Mykola Tkachuk', course: 2, faculty: 'Chemistry' },
    { name: 'Oksana Hrytsenko', course: 3, faculty: 'History' },
    { name: 'Yuriy Lysenko', course: 1, faculty: 'Engineering' },
    { name: 'Kateryna Dovzhenko', course: 2, faculty: 'Mathematics' },
    { name: 'Volodymyr Kravchenko', course: 3, faculty: 'Physics' },
    { name: 'Iryna Horobets', course: 1, faculty: 'Biology' },
  ]

  const faculty = Map.groupBy(studentList, ({ faculty }) => faculty)
  faculty[Symbol.iterator] = function* () {
    for (const [key, value] of this.entries()) {
      const student = value.length > 1 ? 'students' : 'student'
      yield `Faculty ${key} => ${value.length} ${student}`
    }
  }

  const course = Map.groupBy(studentList, ({ course }) => course)
  course[Symbol.iterator] = function* () {
    for (const [key, value] of this.entries()) {
      const student = value.length > 1 ? 'students' : 'student'
      yield `Course ${key} => ${value.length} ${student}`
    }
  }

  return (
    'Students List:' +
    '<br>' +
    createList(studentList, null, true) +
    '<br>' +
    'Number of faculties: ' +
    faculty.size +
    '<br><br>' +
    'Number of students of each course:' +
    '<br>' +
    createList([...course]) +
    '<br>' +
    'Number of students of each faculty:' +
    createList([...faculty])
  )
}

task7_24.solutionParams = {
  code: trunsformEntityToCode(createList, task7_24),
  name: '',
  title: '',
  lesson,
  task: 7,
  params: [],
  resultAsCode: false,
}

//* =========================  Task #8  ===========================
// Дано масив показів температур. Підрахувати кількість входжень кожного із показів
// 	let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
// Заокруглити вверх значення та підрахувати кількість різних показів.

//* =========================  Task #9  ===========================
// Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії.
// Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики.
// Також підрахувати скільки всього студентів відвідують хоча б один гурток.
export function task9_24() {
  const mathematicStudentList = [
    'Ivan Petrenko',
    'Olena Shevchenko',
    'Petro Tkachuk',
    'Andriy Kovalenko',
    'Viktoriya Bondarenko',
    'Svitlana Bondarenko',
    'Mykola Tkachuk',
    'Serhiy Lysenko',
    'Oksana Hrytsenko',
    'Natalia Hrytsenko',
  ]

  const historyStudentList = [
    'Dmytro Ivanov',
    'Natalia Hrytsenko',
    'Anna Shevchenko',
    'Oleksandr Kovalenko',
    'Serhiy Lysenko',
    'Maria Dovzhenko',
    'Viktoriya Bondarenko',
    'Bohdan Kravchenko',
    'Alina Horobets',
    'Petro Tkachuk',
  ]

  const mathematicStudentSet = new Set(mathematicStudentList)
  const historyStudentSet = new Set(historyStudentList)

  const intersection = mathematicStudentSet.intersection(historyStudentSet)
  const union = mathematicStudentSet.union(historyStudentSet)

  return (
    'Total students from the history course also attend the mathematics course (intersection ∩): ' +
    intersection.size +
    '<br><br>' +
    'Total students attend at least one course (union ∪): ' +
    union.size
  )
}
task9_24.solutionParams = {
  code: trunsformEntityToCode(task9_24),
  name: '',
  title: '',
  lesson,
  task: 9,
  params: [],
  resultAsCode: false,
}
