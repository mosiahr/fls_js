import {
  getNumbersFromCurrentFileName,
  getRandomNumber,
  toUpperCaseFirstLetterEveryWord,
  trunsformEntityToCode,
} from '../utils.js'

import { table, createList } from '../components/index.js'

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
  const listByFilterLessThan10000 = getListByFilterCallback(
    companyList,
    (el) => el.valueProject <= 10000
  )
  const listByFilterMoreThan10000 = getListByFilterCallback(
    companyList,
    (el) => el.valueProject > 10000
  )

  return (
    `1)===Total Cost: ${totalCost} ===<br><br>` +
    `2)===Count Site With Year Range: ${countSiteWithYearRange} ===<br><br>` +
    `3)===Count Site By More Than Sponsor Sum: ${countSiteByMoreThanSponsorSum} ===<br><br>` +
    `4)===Sponsor List: ===${createList(sponsorList)} <br>` +
    `5)===Year Of Highest Income: ${yearOfHighestIncome} ===<br><br>` +
    `6)===Sorted List By Income Decrease: === ${createList(
      toStringEveryElOfList(sortedListByIncomeDecrease)
    )} <br>` +
    `7)===list By Filter <= 10000: === <br>${createList(
      listByFilterLessThan10000
    )} <br>` +
    `===list By Filter > 10000: === <br>${createList(
      listByFilterMoreThan10000
    )} `
  )
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
