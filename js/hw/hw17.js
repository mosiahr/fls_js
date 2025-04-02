import { getNumbersFromCurrentFileName } from "../utils.js"
import { table } from "../components/index.js"

const lesson = getNumbersFromCurrentFileName(import.meta)
console.log(lesson)

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
                    MyArray.countPositiveElements(arr),
                    MyArray.countNegativeElements(arr),
                    MyArray.countOccurrenceElement(arr, arrEl),
                ],
            ]
        ).outerHTML
    }
}

export function task1_17(arr) {
    return MyArray.getAllResults([2, 5, 6, 2, 7, -45, 0, -5, -10, 2], 2)
}

task1_17.solutionParams = {
    code: String.raw`class MyArray {

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
                    MyArray.countPositiveElements(arr),
                    MyArray.countNegativeElements(arr),
                    MyArray.countOccurrenceElement(arr, arrEl),
                ],
            ]
        ).outerHTML
    }
}

MyArray.getAllResults([2, 5, 6, 2, 7, -45, 0, -5, -10, 2], 2)`,
    name: "",
    title: "",
    lesson,
    task: 1,
    params: [[2, 5, 6, -5, -10]],
    resultAsCode: false,
}
