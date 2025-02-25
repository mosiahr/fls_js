import {getRandomNumber, roundDecimal, parseIntArr} from "../../js/utils.js"

const getEstimateRandomArr = () => {
    try {
        let resArr = []
        let estimateRandomArr = []
        const estimateRandomNumber = getRandomNumber(5, 20)

        for (let i = 0; i < estimateRandomNumber; i++)
            estimateRandomArr.push(getRandomNumber(2, 5))

        const estimates = prompt("Enter or add your estimates (2-5): ", estimateRandomArr).split(",")
        const intArr = parseIntArr(estimates)

        for (let i = 0; i < intArr.length; i++) {
            if (isNaN(intArr[i]) || intArr[i] === undefined)
                continue
            resArr.push(intArr[i])
        }
        return resArr
    } catch (error) {
        console.log(error)
    }
}

const arithmeticMeanNumbers = (numbers) => {
    try {
        let res = 0
        for (let i = 0; i < numbers.length; i++)
            res += numbers[i]
        return res / numbers.length
    } catch (error) {
        console.log(error)
    }
}

const hasNumber = (numbers, num) => {
    for (let i = 0; i < numbers.length; i++)
        if (numbers[i] === num) {
            return true
        }
    return false
}
const getTypePupil = (numbers, arithmeticMeanNum) => {
    let resType = ""
    if (arithmeticMeanNum === 5) {
        resType = "Відмінник"
    } else if (arithmeticMeanNum >= 4) {
        resType = "Хорошист"
    }

    if (hasNumber(numbers, 2)) {
        resType = "Двійочник"
    } else if (hasNumber(numbers, 3)) {
        resType = "Трійочник"
    }

    return resType
}

export default function task0() {
    const estimates = getEstimateRandomArr()
    const arithmeticMeanNum = roundDecimal(arithmeticMeanNumbers(estimates))
    const typePupil = getTypePupil(estimates, arithmeticMeanNum)
    return [`Your data: ${estimates}`, `Arithmetic Mean Estimate: ${arithmeticMeanNum}`, `Type of Pupil: ${typePupil}`]
}