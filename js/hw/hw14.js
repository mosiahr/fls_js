import {
  getNumbersFromCurrentFileName,
  trunsformEntityToCode,
} from '../utils.js'

import { createList } from '../components/index.js'

const lesson = getNumbersFromCurrentFileName(import.meta)

//* =========================  Task #1  ===========================
// Описати масив об’єктів – сайтів розроблених компанією з такими властивостями:

// ----- Властивості ------
// - назва компанії на час розробки (назву періодично змінюють)
// - власник компанії
// - спонсори (масив спонсорів)
// 	* прізвище спонсора
// 	* ім’я  спонсора
// 	* сума вкладень спонсора
// - рік випуску
// - вартість сайту

// Знайти:
// 1) загальну вартість усіх сайтів
// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
// 5) знайти рік, коли прибуток був найбільшим
// 6) упорядкувати список за спаданням прибутку
// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000

export const companyList = [
  {
    companyName: 'Super',
    companyOwner: 'Super Man',
    sponsors: [
      { lastName: 'West', firstName: 'Jhon', sum: 10000 },
      {
        lastName: 'Madison',
        firstName: 'Richard',
        sum: 20000,
      },
      {
        lastName: 'Langley',
        firstName: 'Charles',
        sum: 25000,
      },
      { lastName: 'Finnegan', firstName: 'Paul', sum: 5000 },
      { lastName: 'Adler', firstName: 'Nicholas', sum: 15000 },
    ],
    issueYear: 2020,
    valueProject: 200000,
  },
  {
    companyName: 'Moon',
    companyOwner: 'Michael Ford',
    sponsors: [
      { lastName: 'Beckett', firstName: 'Frank', sum: 5000 },
      {
        lastName: 'Cromwell',
        firstName: 'Dennis',
        sum: 25000,
      },
      {
        lastName: 'Ashley',
        firstName: 'Julie',
        sum: 25000,
      },
      { lastName: 'Finnegan', firstName: 'Paul', sum: 3000 },
      { lastName: 'Levine', firstName: 'Maria', sum: 18000 },
    ],
    issueYear: 2019,
    valueProject: 8000,
  },
  {
    companyName: 'Task',
    companyOwner: 'Super Task',
    sponsors: [
      { lastName: 'James', firstName: 'Olivia', sum: 17000 },
      {
        lastName: 'Daughtler',
        firstName: 'Kelly',
        sum: 22000,
      },
      {
        lastName: 'Marley',
        firstName: 'Diane',
        sum: 26000,
      },
      { lastName: 'Gasper', firstName: 'Kyle', sum: 75000 },
      { lastName: 'Curran', firstName: 'Terry', sum: 18000 },
    ],
    issueYear: 2025,
    valueProject: 20000,
  },
  {
    companyName: 'Solution',
    companyOwner: 'Solution Man',
    sponsors: [
      { lastName: 'Adams', firstName: 'Jose', sum: 10000 },
      {
        lastName: 'Hendrix',
        firstName: 'Noah',
        sum: 24000,
      },
      {
        lastName: 'Gray',
        firstName: 'Roger',
        sum: 21000,
      },
      { lastName: 'Pierce', firstName: 'Henry', sum: 7000 },
      { lastName: 'Adair', firstName: 'Tyler', sum: 19000 },
    ],
    issueYear: 2008,
    valueProject: 200005,
  },
  {
    companyName: 'Array',
    companyOwner: 'Super Array',
    sponsors: [
      { lastName: 'Dawson', firstName: 'Jack', sum: 18000 },
      {
        lastName: 'Huxley',
        firstName: 'Richard',
        sum: 29000,
      },
      {
        lastName: 'Ledger',
        firstName: 'Jose',
        sum: 25000,
      },
      { lastName: 'Gonzales', firstName: 'Peter', sum: 52000 },
      { lastName: 'Ellis', firstName: 'Virginia', sum: 5000 },
    ],
    issueYear: 2011,
    valueProject: 165000,
  },
]

// 1) загальну вартість усіх сайтів
function getTotalCost(companyList) {
  return companyList.reduce(
    (total, { valueProject }) => total + valueProject,
    0
  )
}

// 2) кількість сайтів, що було зроблено між 2000 та 2009 рр.
function getCountSiteWithYearRange(companyList, minYear, maxYear) {
  return companyList.reduce((count, { issueYear }) => {
    if (issueYear >= minYear && issueYear <= maxYear) count++
    return count
  }, 0)
}

// 3) кількість сайтів, де сума спонсорських вкладень була більшою за 100000
function getCountSiteByMoreThanSponsorSum(companyList, sponsorSum) {
  return companyList.reduce((count, { sponsors }) => {
    if (sponsors.reduce((totalSum, { sum }) => totalSum + sum, 0) > sponsorSum)
      count++
    return count
  }, 0)
}

// 4) створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
function getSponsorList(companyList) {
  return companyList
    .map(({ sponsors }) =>
      sponsors.map(({ lastName, firstName }) => `${firstName} ${lastName}`)
    )
    .flat()
}

// 5) знайти рік, коли прибуток був найбільшим
function getYearOfHighestIncome(companyList) {
  let res = {
    max: companyList[0].valueProject,
    year: companyList[0].issueYear,
  }

  companyList.forEach(({ valueProject, issueYear }) => {
    if (valueProject > res.max) {
      res = {
        max: valueProject,
        year: issueYear,
      }
    }
  })
  return res.year
}

// 6) упорядкувати список за спаданням прибутку
function sortListByIncomeDecrease(companyList) {
  return companyList.sort(
    ({ valueProject: prevIncome }, { valueProject: nextIncome }) =>
      nextIncome - prevIncome
  )
}

function toStringEveryElOfList(list) {
  list.forEach(
    (el) =>
      (el.toString = () =>
        `Company: '${el.companyName}' Income: ${el.valueProject}`)
  )
  return list
}

// 7) Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000
function getListByFilterCallback(companyList, callback) {
  return companyList.filter(callback)
}

export function task1_14() {
  const totalCost = getTotalCost(companyList)
  const countSiteWithYearRange = getCountSiteWithYearRange(
    companyList,
    2000,
    2009
  )
  const countSiteByMoreThanSponsorSum = getCountSiteByMoreThanSponsorSum(
    companyList,
    100000
  )
  const sponsorList = getSponsorList(companyList)
  const yearOfHighestIncome = getYearOfHighestIncome(companyList)
  const sortedListByIncomeDecrease = sortListByIncomeDecrease(companyList)

  // deep copy
  const listByFilterLessThan10000 = getListByFilterCallback(
    JSON.parse(JSON.stringify(companyList)),
    (el) => el.valueProject <= 10000
  )
  toStringEveryElOfList(listByFilterLessThan10000) // adding toString()

  // shallow copy
  const listByFilterMoreThan10000 = getListByFilterCallback(
    companyList,
    (el) => el.valueProject > 10000
  )

  return `1)===Total Cost: ${totalCost} ===<br><br>
    2)===Count Site With Year Range: ${countSiteWithYearRange} ===<br><br>
    3)===Count Site By More Than Sponsor Sum: ${countSiteByMoreThanSponsorSum} ===<br><br>
    4)===Sponsor List: ===${createList(sponsorList)} <br>
    5)===Year Of Highest Income: ${yearOfHighestIncome} ===<br><br>
    6)===Sorted List By Income Decrease: === ${createList(
      toStringEveryElOfList(sortedListByIncomeDecrease)
    )} <br>
    7)===list By Filter <= 10000: === <br>${createList(
      listByFilterLessThan10000
    )} <br>
    ===list By Filter > 10000: === <br>${createList(
      listByFilterMoreThan10000
    )} `
}

task1_14.solutionParams = {
  code: trunsformEntityToCode(
    getTotalCost,
    getCountSiteWithYearRange,
    getCountSiteByMoreThanSponsorSum,
    getSponsorList,
    getYearOfHighestIncome,
    sortListByIncomeDecrease,
    toStringEveryElOfList,
    task1_14
  ),
  name: '',
  title: '',
  lesson,
  task: 1,
  params: [],
  resultAsCode: false,
}

//* =========================  Task #2  ===========================
// Розробити функцію, у яку передають об’єкт (день, місяць, рік).
// Визначити, який буде рік через N місяців.

function getYearAfterNumberMonths({ month, year }, monthNumber) {
  return Math.floor((month - 1 + monthNumber) / 12) + year
}

export function task2_14() {
  const date = { day: 26, month: 5, year: 2025 }
  const monthNumber = 7
  const yearAfterNumberMonths = getYearAfterNumberMonths(date, monthNumber)
  const { day, month, year } = date
  return `Year After ${monthNumber} Months(today ${day}.${month}.${year}): ${yearAfterNumberMonths}`
}

task2_14.solutionParams = {
  code: trunsformEntityToCode(getYearAfterNumberMonths, task2_14),
  name: '',
  title: '',
  lesson,
  task: 2,
  params: [],
  resultAsCode: false,
}

//* =========================  Task #3  ===========================
// Ось приклад відповіді з одного з сайтів (масив об’єктів з інформацією про товари).

// 1) Загальну вартість (нові ціни - price)
// 2)Знайти кількість товарів, у яких ціна зменшилась (price < old_price).
// 3) Товари, які доступні (sell_status:"available")
// 4) сформувати новий список об”єктів тільки доступних  для продажу товарів,
// які міститимуть тільки ідентифікатор товару (id), нову ціну (price), стару ціну (old_price), та ціну у доларах (usd_price)

let dataList = [
  {
    id: 344277463,
    old_price: 1395,
    old_usd_price: '37.70',
    price: 1099,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '29.70',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 363766641,
    old_price: 0,
    old_usd_price: '0.00',
    price: 90,
    min_month_price: 0,
    sell_status: 'unavailable',
    status: 'active',
    usd_price: '2.43',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 339273715,
    old_price: 38,
    old_usd_price: '1.03',
    price: 25,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '0.68',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 330746665,
    old_price: 3087,
    old_usd_price: '83.43',
    price: 2548,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '68.86',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 344972806,
    old_price: 699,
    old_usd_price: '18.89',
    price: 549,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '14.84',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 318302299,
    old_price: 0,
    old_usd_price: '0.00',
    price: 8500,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '229.73',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 361430565,
    old_price: 3500,
    old_usd_price: '94.59',
    price: 1999,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '54.03',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 14429030,
    old_price: 3339,
    old_usd_price: '90.24',
    price: 2999,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '81.05',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 56340912,
    old_price: 2094,
    old_usd_price: '56.59',
    price: 1776,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '48.00',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 315292225,
    old_price: 1799,
    old_usd_price: '48.62',
    price: 1499,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '40.51',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 28437961,
    old_price: 42999,
    old_usd_price: '1162.14',
    price: 33999,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '918.89',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 339896833,
    old_price: 6399,
    old_usd_price: '172.95',
    price: 5899,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '159.43',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 364354149,
    old_price: 1600,
    old_usd_price: '43.24',
    price: 1500,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '40.54',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: {
      id: 106,
      discount_price: 1300,
      title: 'ціна по промокоду діє з 22.03 по 28.03',
      price_show_in_site_id: 5151,
      show_in_details: 1,
      show_in_catalog: 1,
      is_description: 1,
      description: 'test',
      promo_code: '',
      url_for_image: 'https://rozetka.com.ua/ua/promo/allgalaxies/',
      images: '',
      images_mobile: '',
      hide_price: 0,
    },
  },
  {
    id: 363184995,
    old_price: 0,
    old_usd_price: '0.00',
    price: 4499,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '121.59',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 98077846,
    old_price: 0,
    old_usd_price: '0.00',
    price: 3113,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '84.14',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 310694668,
    old_price: 0,
    old_usd_price: '0.00',
    price: 3000,
    min_month_price: 0,
    sell_status: 'unavailable',
    status: 'active',
    usd_price: '81.08',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 362812029,
    old_price: 0,
    old_usd_price: '0.00',
    price: 21700,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '586.49',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 361422708,
    old_price: 4100,
    old_usd_price: '110.81',
    price: 2699,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '72.95',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 318302257,
    old_price: 0,
    old_usd_price: '0.00',
    price: 8500,
    min_month_price: 0,
    sell_status: 'unavailable',
    status: 'active',
    usd_price: '229.73',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 310694498,
    old_price: 0,
    old_usd_price: '0.00',
    price: 2963,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '80.08',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 363651273,
    old_price: 5199,
    old_usd_price: '140.51',
    price: 4890,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '132.16',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 330747022,
    old_price: 3087,
    old_usd_price: '83.43',
    price: 2606,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '70.43',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 362617635,
    old_price: 4872,
    old_usd_price: '131.68',
    price: 2436,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '65.84',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
  {
    id: 363614439,
    old_price: 5199,
    old_usd_price: '140.51',
    price: 4890,
    min_month_price: 0,
    sell_status: 'available',
    status: 'active',
    usd_price: '132.16',
    pl_charge_pcs: 0,
    pl_use_instant_bonus: false,
    pl_premium_bonus_charge_pcs: 0,
    rests: -1,
    min_price: 0,
    max_price: 0,
    has_shops: false,
    info: null,
    show_in_site: null,
  },
]

// 1) Загальну вартість (нові ціни - price)
function getTotalPrice(dataList) {
  return dataList.reduce((prev, { price }) => prev + price, 0)
}

// 2)Знайти кількість товарів, у яких ціна зменшилась (price < old_price).
function countGoodsPriceDecreased(dataList) {
  return dataList.reduce((count, { old_price, price }) => {
    return old_price > price ? ++count : count
  }, 0)
}

// 3) Товари, які доступні (sell_status:"available")
function getAvailableGoods(dataList) {
  return dataList.filter((el) => el.sell_status === 'available')
}

function createToStringToDataListEl(dataList) {
  dataList.forEach(
    (el) =>
      (el.toString = function () {
        return JSON.stringify(el, null, '\n')
      })
  )
}

// 4)сформувати новий список об”єктів тільки доступних  для продажу товарів,
// які міститимуть тільки ідентифікатор товару (id), нову ціну (price), стару ціну (old_price), та ціну у доларах (usd_price)
function getListForSale(dataList) {
  return dataList.map(({ id, price, old_price, usd_price }) => {
    return { id, price, old_price, usd_price }
  })
}

export function task3_14() {
  const totalPrice = getTotalPrice(dataList)
  const numberGoodsPriceLess = countGoodsPriceDecreased(dataList)

  const availableGoods = getAvailableGoods(dataList)
  createToStringToDataListEl(availableGoods)

  const listForSale = getListForSale(dataList)
  createToStringToDataListEl(listForSale)

  return `1)Total Price: ${totalPrice} <br>
	2)Number of Goods Which Price is Decreased: ${numberGoodsPriceLess} <br><br>
	3)Available Goods: ${createList(availableGoods)} <br>
	4)List For Sale : ${createList(listForSale)}`
}

task3_14.solutionParams = {
  code: trunsformEntityToCode(
    getTotalPrice,
    countGoodsPriceDecreased,
    getAvailableGoods,
    createToStringToDataListEl,
    getListForSale,
    task3_14
  ),
  name: '',
  title: '',
  lesson,
  task: 3,
  params: [],
  resultAsCode: false,
}
