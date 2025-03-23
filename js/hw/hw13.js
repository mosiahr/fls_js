import SolutionModel from "../data/solutionModel.js"
import { getRandomNumber } from "../utils.js"

export function generateSubSetArray(arr) {
    if (arr.length === 0) return [[]]

    const [firstEl, ...restEl] = arr

    const subSetArrWithoutFirst = generateSubSetArray(restEl)
    const subSetArrWithFirst = []

    subSetArrWithoutFirst.forEach((comb) => {
        const combWithFirst = [firstEl, ...comb]
        subSetArrWithFirst.push(combWithFirst)
    })

    return [...subSetArrWithoutFirst, ...subSetArrWithFirst]
}
export function generateSubSetArray1(arr) {
    if (arr.length === 0) return [[]]

    const [firstEl, ...restEl] = arr

    const subSetArrWithoutFirst = generateSubSetArray(restEl)
    const subSetArrWithFirst = []

    subSetArrWithoutFirst.forEach((comb) => {
        const combWithFirst = [firstEl, ...comb]
        subSetArrWithFirst.push(combWithFirst)
    })

    return [...subSetArrWithoutFirst, ...subSetArrWithFirst]
}

console.log(document.currentScript)

generateSubSetArray.solutionParams = {
    // getRandomNumber(100, 10000),
    name: "Генерація всіх підмножин. Рекурсія",
    title: "Lesson 13",
    lesson: 13,
    task: 1,
    params: [[1, 2, 3]],
}
generateSubSetArray1.solutionParams = {
    // getRandomNumber(100, 10000),
    name: "22222 Генерація всіх підмножин. Рекурсія",
    title: "Lesson 13",
    lesson: 13,
    task: 1,
    params: [[1, 2, 3]],
}

const res = generateSubSetArray([1, 2, 3])
console.log(generateSubSetArray.solution)
console.log(res)
