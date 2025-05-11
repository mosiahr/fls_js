import {
  getNumbersFromCurrentFileName,
  getRandomNumber,
  toUpperCaseFirstLetterEveryWord,
} from '../utils.js'

import Timer from '../helpers/timer.js'

const lesson = getNumbersFromCurrentFileName(import.meta)

//* =========================  Task #1  ===========================
// Дано масив рядків. Вивести ті, у яких є цифри
// (використати метод test та регулярні вирази).

export function task1_23() {
  const stringArr = ['hello123', 'world', 'test456', 'noDigitsHere', '789only']
  return stringArr.filter((str) => /\d/.test(str))
}

task1_23.solutionParams = {
  code: task1_23.toString(),
  name: '',
  title: '',
  lesson,
  task: 1,
  params: [],
  resultAsCode: true,
}

//* =========================  Task #2  ===========================
// Дано масив рядків. Вивести ті, у яких немає цифр.
export function task2_23() {
  const stringArr = ['hello123', 'world', 'test456', 'noDigitsHere', '789only']
  return stringArr.filter((str) => !/\d/.test(str))
}

task2_23.solutionParams = {
  code: task2_23.toString(),
  name: '',
  title: '',
  lesson,
  task: 2,
  params: [],
  resultAsCode: true,
}

//* =========================  Task #3  ===========================
// Дано масив рядків. Вивести ті, у яких є голосні літери.
export function task3_23() {
  const stringArr = [
    'hello123',
    'www',
    'world',
    'test456',
    'noDigitsHere',
    '789only',
    '34',
  ]
  return stringArr.filter((str) => str.match(/[aeiouy]/gi))
}

task3_23.solutionParams = {
  code: task3_23.toString(),
  name: '',
  title: '',
  lesson,
  task: 3,
  params: [],
  resultAsCode: true,
}

//* =========================  Task #4  ===========================
// Дано масив рядків. Вивести ті, у яких немає голосних літер.
export function task4_23() {
  const stringArr = [
    'hello123',
    'www dfg fgf',
    'world hi',
    'test456',
    'noDigitsHere',
    '789only',
    '34',
  ]
  return stringArr.filter((str) => !str.match(/[aeiouy]/gi))
}

task4_23.solutionParams = {
  code: task4_23.toString(),
  name: '',
  title: '',
  lesson,
  task: 4,
  params: [],
  resultAsCode: true,
}

//* =========================  Task #5  ===========================
// Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.
export function task5_23() {
  const stringArr = [
    'hello123',
    'www dfg fgf',
    'world hi',
    'test456',
    'noDigitsHere',
    '789only',
    '34',
    '145OK 7',
  ]
  return stringArr.filter((str) => str.match(/[13]/gi))
}

task5_23.solutionParams = {
  code: task5_23.toString(),
  name: '',
  title: '',
  lesson,
  task: 5,
  params: [],
  resultAsCode: true,
}

//* =========================  Task #6  ===========================
// Дано рядок тексту, вивести усі числа, які є у тексті.
export function task6_23() {
  const str =
    'hello123 www dfg fgf world hi test456 noDigitsHere 789only 34 145OK 7'
  return str.match(/\d+/g)
}

task6_23.solutionParams = {
  code: task6_23.toString(),
  name: '',
  title: '',
  lesson,
  task: 6,
  params: [],
  resultAsCode: true,
}

//* =========================  Task #7  ===========================
// Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.
export function task7_23() {
  const str =
    'hello123. www dfg -fgf, /world hi test456, "noDigitsHere\' ...789only? 34 []145OK (7). Yes{no}!'
  return str.match(/[.,:;?!\-"'\/\[\]\(\)\{\}]+/g)
}

task7_23.solutionParams = {
  code: task7_23.toString(),
  name: '',
  title: '',
  lesson,
  task: 7,
  params: [],
  resultAsCode: true,
}

//* =========================  Task #8  ===========================
// Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.
export function task8_23() {
  const str =
    'hello123. www dfg -fgf, /world hi test456, "noDigitsHere\' ...789only? 34 145OK 7. Yes!'
  return str.split(/[.,:;?!\-"'\/\s]+/g).filter(Boolean)
}

task8_23.solutionParams = {
  code: task8_23.toString(),
  name: '',
  title: '',
  lesson,
  task: 8,
  params: [],
  resultAsCode: true,
}

//* =========================  Task #9  ===========================
// Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm- місяць, yyyy- рік).
export function task9_23() {
  const str =
    'hello123. www dfg -fgf, /world hi test456, 1.5.2025 "noDigitsHere\'  01.05.2025 ...789only? 34 145OK 7. Yes!'
  return str.match(/\d{1,2}.\d{1,2}.\d{4}/g)
}

task9_23.solutionParams = {
  code: task9_23.toString(),
  name: '',
  title: '',
  lesson,
  task: 9,
  params: [],
  resultAsCode: true,
}

//* =========================  Task #10  ===========================
// Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.
export function task10_23() {
  const str =
    'hello123. www dfg -fgf, /world hi test456, 1.5.2025 "noDigitsHere\'  01.05.2025 ...789only? 34 145OK 7. Yes!'
  return str.match(/(?<=\D+)\d{2}(?=\D+)/g)
}

task10_23.solutionParams = {
  code: task10_23.toString(),
  name: '',
  title: '',
  lesson,
  task: 10,
  params: [],
  resultAsCode: true,
}

//* =========================  Task #11  ===========================
// Визначити чи може бути рядок тексту номером банківської картки (приклад: «4142-3433-2323-3434»). Знайти усі такі номери.
export function task11_23() {
  const str =
    'hello123. www dfg -fgf, 4142-3433-2323-3434/world hi test456, 1.5.2025 "noDigitsHere\' 5942-6878-6549-1594 01.05.2025 ...789only? 34 145OK 7. Yes!'
  return str.match(/\b\d{4}-\d{4}-\d{4}-\d{4}\b/g)
}

task11_23.solutionParams = {
  code: task11_23.toString(),
  name: '',
  title: '',
  lesson,
  task: 11,
  params: [],
  resultAsCode: true,
}

//* =========================  Task #12  ===========================
//  Дано адресу сайту. Визначити, чи є він урядовим (містить домен “gov”)
export function task12_23() {
  const str = 'https://www.kmu.gov.ua/'
  return str.match(/\.gov\b/g)
}

task12_23.solutionParams = {
  code: task12_23.toString(),
  name: '',
  title: '',
  lesson,
  task: 12,
  params: [],
  resultAsCode: true,
}

//* =========================  Task #13  ===========================
//  Вибрати усі роки після 2021 року з отриманого повідомлення
export function task13_23() {
  const str = '2021 2022 2034 2089 3056 5044'
  return str.match(/20[3-9]\d|202[2-9]|[3-9]\d{3}/g)
}

task13_23.solutionParams = {
  code: task13_23.toString(),
  name: '',
  title: '',
  lesson,
  task: 13,
  params: [],
  resultAsCode: true,
}

//* =========================  Task #14  ===========================
//  Дано номер телефону. Перевірити, чи є цей телефон телефоном з України (починаєтсья на «+38»)
export function task14_23() {
  const str =
    'Ukraine phone number: +380962288600, Ireland phone number: +353832288600, ...'
  return str.match(/\+38\d{10}/g)
}

task14_23.solutionParams = {
  code: task14_23.toString(),
  name: '',
  title: '',
  lesson,
  task: 14,
  params: [],
  resultAsCode: true,
}

//* =========================  Task #15  ===========================
//  Користувач вводить прізвище та ім’я в одному рядку через пробіл.  Замінити пробіл на дефіс.
export function task15_23() {
  const str = prompt('Enter your First Name and Last Name, please: ')
  const re = /(\w+)\s+(\w+)/gi
  return str.replace(re, '$1-$2')
}

task15_23.solutionParams = {
  code: task15_23.toString(),
  name: '',
  title: '',
  lesson,
  task: 15,
  params: [],
  resultAsCode: true,
}

//* =========================  Task #16  ===========================
//  Користувач вводить дату у форматі «день.місяць.рік».
// Отримати рядкове представлення дати у форматі «день/місяць/рік»
export function task16_23() {
  const str = prompt('Enter some date, please: ')
  const re = /(\d{1,2})\.(\d{1,2})\.(\d{4})/g
  return str.replace(re, '$1/$2/$3')
}

task16_23.solutionParams = {
  code: task16_23.toString(),
  name: '',
  title: '',
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
    'Enter a day, please(0-6) or sun,mon,tue,wed,thu,fri,sat: '
  )
  const re = /0|6|sun|sat/gi
  return re.test(str) ? 'Yes, this is weekend!' : 'No, you have to go to work!'
}

task17_23.solutionParams = {
  code: task17_23.toString(),
  name: '',
  title: '',
  lesson,
  task: 17,
  params: [],
  resultAsCode: true,
}

//* =========================  Task #18  ===========================
// Користувач може змінювати колір фону, що вибирає користувач з використанням <input type="color">.
// Зберігати цей колір і відновлювати при наступному відкритті.
// Також зберігати і відображати кількість змін протягом одного сеансу.

class StorageManager {
  getItem(keyName) {
    return localStorage.getItem(keyName)
  }

  setItem(keyName, keyValue) {
    try {
      localStorage.setItem(keyName, keyValue)

      const countKeyName = this.createCountKeyName(keyName)
      let countKeyValue = parseInt(this.getCountKeyValue(countKeyName))

      if (Number.isFinite(countKeyValue))
        sessionStorage.setItem(countKeyName, ++countKeyValue)
      else sessionStorage.setItem(countKeyName, 1)
    } catch (error) {
      console.log(error)
    }
  }

  removeItem(keyName) {
    try {
      const countKeyName = this.createCountKeyName(keyName)
      if (sessionStorage[countKeyName]) {
        sessionStorage.removeItem(countKeyName)
      }

      localStorage.removeItem(keyName)
    } catch (error) {
      console.log(error)
    }
  }

  createCountKeyName(keyName) {
    return `count${toUpperCaseFirstLetterEveryWord(keyName)}`
  }

  getCountKeyValue(countKeyName) {
    return sessionStorage.getItem(countKeyName)
  }
}

class ColorPicker {
  DEFAULT_PICKER_COLOR = '#ef6d58'
  DEFAULT_PLACEHOLDER = 'Change color'
  solutionResultDiv = document.querySelector('#solution__result')
  #title
  #colorKeyName

  constructor(title = 'Color Picker', colorKeyName = 'color') {
    this.title = title
    this.colorKeyName = colorKeyName
    this.storageManager = new StorageManager()
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
    const container = document.createElement('div')
    container.style.display = 'flex'
    container.style.gap = '10px'
    container.style.flexDirection = 'column'
    container.style.justifyContent = 'center'
    container.style.backgroundColor = '#ffffff'
    container.style.padding = '20px'
    return container
  }

  createTitle() {
    const title = document.createElement('div')
    title.classList.add('task-card__title')
    title.innerText = this.title
    title.style.fontSize = '18px'
    title.style.justifyContent = 'center'

    this.titleEl = title
    return title
  }

  createInputBlock() {
    const inputBlock = document.createElement('div')
    inputBlock.style.display = 'flex'
    inputBlock.style.gap = '10px'
    inputBlock.style.flexWrap = 'wrap'
    inputBlock.style.justifyContent = 'center'

    return inputBlock
  }

  createPicker(color) {
    const input = document.createElement('input')
    input.setAttribute('id', 'color-changer')
    input.type = 'color'
    input.setAttribute('value', color || this.DEFAULT_PICKER_COLOR)
    input.style.width = '30%'
    input.style.height = '100%'

    this.inputEl = input
    return input
  }

  updatePicker() {
    const picker = document.getElementById('color-changer')
    picker.setAttribute(
      'value',
      this.storageManager.getItem(this.colorKeyName) ||
        this.DEFAULT_PICKER_COLOR
    )
  }

  createColorValueBlock(value) {
    if (!value) value = ''

    const colorValueBlockInput = document.createElement('input')
    colorValueBlockInput.setAttribute('id', 'color-block')
    colorValueBlockInput.setAttribute('maxlength', '7')
    colorValueBlockInput.style.border = '1px solid black'
    colorValueBlockInput.style.fontSize = '18px'
    colorValueBlockInput.style.padding = '6px'
    colorValueBlockInput.setAttribute('value', value)
    colorValueBlockInput.setAttribute('placeholder', this.DEFAULT_PLACEHOLDER)

    this.colorValueBlockInput = colorValueBlockInput
    return colorValueBlockInput
  }

  updateCreateColorValueBlock() {
    const colorValueBlock = document.getElementById('color-block')
    colorValueBlock.setAttribute(
      'value',
      this.storageManager.getItem(this.colorKeyName) || ''
    )
  }

  createCountBlock(volume) {
    if (!volume) volume = 0

    const countBlock = document.createElement('div')
    countBlock.setAttribute('id', 'count-block')
    countBlock.style.display = 'flex'
    countBlock.style.justifyContent = 'center'
    countBlock.style.width = '100%'

    const spanCountBlock = document.createElement('span')
    spanCountBlock.style.fontSize = '24px'
    spanCountBlock.style.fontWeight = 700
    spanCountBlock.textContent = volume

    countBlock.append(spanCountBlock)
    return countBlock
  }

  updateCountBlock() {
    const countBlockSpan = document.querySelector('#count-block span')
    const countKeyName = this.storageManager.createCountKeyName(
      this.colorKeyName
    )
    const count = this.storageManager.getCountKeyValue(countKeyName)
    countBlockSpan.textContent = count || 0
  }

  updateSolutionResultDiv() {
    this.solutionResultDiv.style.backgroundColor =
      this.storageManager.getItem(this.colorKeyName) ||
      this.DEFAULT_PICKER_COLOR
  }

  render() {
    const container = this.createContainer()
    const inputBlock = this.createInputBlock()

    const div = document.createElement('div')
    div.style.display = 'flex'

    const countBlock = this.createCountBlock(
      this.storageManager.getCountKeyValue(
        this.storageManager.createCountKeyName(this.colorKeyName)
      )
    )
    const colorValueBlock = this.createColorValueBlock(
      this.storageManager.getItem(this.colorKeyName)
    )

    const picker = this.createPicker(
      this.storageManager.getItem(this.colorKeyName)
    )

    div.append(colorValueBlock, picker)

    inputBlock.append(countBlock, div)
    container.append(this.createTitle(), inputBlock)

    this.updateSolutionResultDiv()
    this.initEventListener()
    return container
  }

  initInputEl(e) {
    if (e.target.matches('#' + this.inputEl?.id)) {
      const eventTargetValue = e.target.value

      const colorValueBlockInput = document.getElementById(
        this.colorValueBlockInput.id
      )
      colorValueBlockInput.value = eventTargetValue

      this.storageManager.setItem(this.colorKeyName, eventTargetValue)

      this.updateCountBlock()
      this.updatePicker()
      this.updateSolutionResultDiv()
    }
  }

  initChangeColorValueBlock(e) {
    if (e.target.matches('#' + this.colorValueBlockInput?.id)) {
      const eventTargetValue = e.target.value
      const inputEl = document.getElementById(this.inputEl.id)
      inputEl.value = eventTargetValue
      this.storageManager.setItem(this.colorKeyName, eventTargetValue)

      this.updateCountBlock()
      this.updatePicker()
      this.updateSolutionResultDiv()
    }
  }

  initChangeStorage() {
    this.updateCountBlock()
    this.updatePicker()
    this.updateCreateColorValueBlock()
    this.updateSolutionResultDiv()
  }

  initEventListener() {
    this.solutionResultDiv.addEventListener(
      'input',
      this.initInputEl.bind(this)
    )
    this.solutionResultDiv.addEventListener(
      'change',
      this.initChangeColorValueBlock.bind(this)
    )
    window.addEventListener('storage', this.initChangeStorage.bind(this))
  }
}

export function task18_23() {
  const colorChanger = new ColorPicker()
  return colorChanger.render().outerHTML
}

task18_23.solutionParams = {
  code:
    StorageManager.toString() +
    '\n\n' +
    ColorPicker.toString() +
    '\n\n' +
    task18_23.toString(),
  name: '',
  title: '',
  lesson,
  task: 18,
  params: [],
  resultAsCode: false,
}

//* =========================  Task #19  ===========================
// Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage).
//  Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm).
//  Якщо користувач натискає на «Ок», то видаляти цю задачу.

class ListStorage {
  constructor(storageName, dataList) {
    this.storageName = storageName
    this.dataList = dataList
    this.initStorage()
  }

  initStorage() {
    if (
      !localStorage.getItem(this.storageName) ||
      this.getDataList().length === 0
    )
      localStorage.setItem(this.storageName, JSON.stringify(this.dataList))
  }

  getDataList() {
    return JSON.parse(localStorage.getItem(this.storageName)) || []
  }

  addDataList(...newItem) {
    const localStorageDataList = this.getDataList()

    localStorage.setItem(
      this.storageName,
      JSON.stringify(localStorageDataList.concat(newItem))
    )
  }

  removeItem(listItem) {
    const localStorageDataList = this.getDataList()
    const newList = localStorageDataList.filter((el) => el !== listItem)
    localStorage.setItem(this.storageName, JSON.stringify(newList))
  }
}

class ToDoListManager {
  constructor(taskList = [], amountTest, storageName = 'toDoList') {
    this.taskList = taskList
    this.storageName = storageName
    this.amountTest = amountTest
    this.listStorage = new ListStorage(storageName, taskList)
    this.timerForGenerateTasks = new Timer(
      this.pickRandomTask.bind(this),
      2000,
      this.amountTest
    )
  }

  pickRandomTask() {
    const tasks = this.listStorage.getDataList()
    if (tasks.length === 0) {
      this.timerForGenerateTasks.stop()
      alert('No tasks available!')
      return
    }

    const randomIndex = this.getRandomInt(tasks.length)
    const userConfirmed = confirm(
      `Your task: "${tasks[randomIndex]}". Mark as done?`
    )

    if (userConfirmed) this.listStorage.removeItem(tasks[randomIndex])
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  run() {
    this.timerForGenerateTasks.start()
  }
}

export function task19_23() {
  const toDoList = [
    'Clean the house',
    'Buy groceries',
    'Finish homework',
    'Call a friend',
    'Pay utility bills',
    'Read a book',
    'Exercise for 30 minutes',
    'Prepare dinner',
    'Organize the workspace',
    'Water the plants',
  ]

  const toDoListManager = new ToDoListManager(toDoList, Infinity)
  toDoListManager.run()
  return ' '
}

task19_23.solutionParams = {
  code:
    ListStorage.toString() +
    '\n\n' +
    ToDoListManager.toString() +
    '\n\n' +
    Timer.toString() +
    '\n\n' +
    task19_23.toString(),
  name: '',
  title: '',
  lesson,
  task: 19,
  params: [],
  resultAsCode: false,
}
