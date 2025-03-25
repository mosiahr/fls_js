import SolutionModel from "../data/solutionModel.js"
import { getNumbersFromCurrentFileName } from "../utils.js"

const lesson = getNumbersFromCurrentFileName(import.meta)

//* =========================  Task #1  ===========================
// Генерація всіх підмножин:
// Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву.
// Наприклад, для масиву [1, 2, 3] можливі підмножини: [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].
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

generateSubSetArray.solutionParams = {
    name: "Генерація всіх підмножин. Рекурсія",
    title: "Lesson 13",
    lesson,
    task: 1,
    params: [[1, 2, 3]],
}

const res = generateSubSetArray([1, 2, 3])
// console.log(res)

//* =========================  Task #2  ===========================
// Implement permutation
// Дано масив імен спортсменів.
// Розробити програму для виведення усіх можливих результатів змагань
// (списки імен у відповідності до місць, які вони займуть).
//                                []
//                               [a]
//            [b,a]                             [a,b]
// [c,b,a]  [b,c,a] [b,a,c]            [c,a,b] [a,c,b]  [a,b,c]
// [
// 	[c,b,a],
// 	[b,c,a],
// 	[b,a,c],
// 	[c,a,b],
// 	[a,c,b],
// 	[a,b,c]
// ]

export function makePermutations(elements) {
    if (elements.length === 0) return [[]]
    const res = []

    elements.forEach((element, i) => {
        const rest = elements.toSpliced(i, 1)
        const middleArr = makePermutations(rest)

        for (const elMiddleArr of middleArr) res.push([element, ...elMiddleArr])
    })

    return res
}

export const renderMakePermutations = (arr) => {
    const resMakePermutations = makePermutations(arr)
    const res = []
    for (let i = 0; i < resMakePermutations.length; i++) {
        // for (let col = 0; col < resMakePermutations[i].length; col++) {
        //     console.log(resMakePermutations[i])
        // }
        // console.log(resMakePermutations[i])
        const row = resMakePermutations[i].join(" || ")
        res.push(row)
    }
    return res
}
const arrTask2 = ["Serhiy", "Mariana", "Oleh", "Inna"]
console.log(renderMakePermutations(arrTask2))

renderMakePermutations.solutionParams = {
    code: makePermutations.toString(),
    name: "Генерація всіх підмножин. Рекурсія",
    title: "Lesson 13",
    lesson,
    task: 2,
    params: [arrTask2],
}

console.log(typeof renderMakePermutations)
