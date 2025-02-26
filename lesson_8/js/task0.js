import {
    isNumber,
    roundDecimal,
    getRandomNumberArr,
    getRandomNumberArrFromUser
} from "../../js/utils.js"

const arithmeticMeanNumbers = (numbers) => {
    let res = 0
    for (let i = 0; i < numbers.length; i++) {
        if (!isNumber(numbers[i]))
            throw new Error("A number must be a number")
        res += numbers[i]
    }
    return res / numbers.length
}

const hasElArr = (el, arr) => {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === el) return true
    return false
}

const getTypePupil = (marks, arithmeticMeanNum) => {
    if (arithmeticMeanNum < 2 || arithmeticMeanNum > 5)  throw new Error('Mark is incorrect. Enter marks from 2 to 5, please!')
    let resType = ""
    if (arithmeticMeanNum === 5) resType = "Відмінник"
    if (arithmeticMeanNum >= 4) resType = "Хорошист"
    if (hasElArr(2, marks)) resType = "Двійочник"
    if (hasElArr(3, marks)) resType = "Трійочник"
    return resType
}

export default function task0() {
    const randomNumberArr = getRandomNumberArr(2, 5, 5, 20)
    const estimates = getRandomNumberArrFromUser("Enter or add your estimates (2-5): ", randomNumberArr)
    const arithmeticMeanNum = roundDecimal(arithmeticMeanNumbers(estimates))
    const typePupil = getTypePupil(estimates, arithmeticMeanNum)
    return [`Your data: ${estimates}`, `Arithmetic Mean Estimate: ${arithmeticMeanNum}`, `Type of Pupil: ${typePupil}`]
}