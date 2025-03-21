export const getURLSearchParams = (param) =>
    new URLSearchParams(window.location.search).get(param)

export function runWithConfirmStart(func, ...args) {
    if (confirm("-= START TEST? =-")) {
        return func(args)
    }
}

export const isNumber = (number) => Number.isFinite(number)

export const isNumberArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (!Number.isFinite(arr[i])) return false
    }
    return true
}

export function getRandomNumber(minNumber, maxNumber) {
    if (isNumberArray(arguments)) {
        return (
            minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
        )
    } else throw new Error("A minNumber and a maxNumber must be a number")
}

export const roundDecimal = (number) => {
    if (!isNumber(number)) throw new Error("A number must be a number")
    return Math.round(parseFloat(number) * 100) / 100
}

export const parseIntArr = (arr) => {
    const resArr = []
    for (let i = 0; i < arr.length; i++) resArr.push(parseInt(arr[i]))
    return resArr
}

export const getRandomNumberArr = (
    minNumber,
    maxNumber,
    minLengthArr,
    maxLengthArr
) => {
    let res = []
    const length = getRandomNumber(minLengthArr, maxLengthArr)
    for (let i = 0; i < length; i++)
        res.push(getRandomNumber(minNumber, maxNumber))
    return res
}

export const getRandomNumberArrFromUser = (
    messageForPrompt,
    defaultArr = []
) => {
    let resArr = []
    const numbersFromUser = prompt(messageForPrompt, defaultArr).split(",")
    const intArr = parseIntArr(numbersFromUser)

    for (let i = 0; i < intArr.length; i++) {
        if (!isNumber(intArr[i])) continue
        resArr.push(intArr[i])
    }
    return resArr
}

export const limitString = (str, numChar) =>
    str.substring(0, numChar) + (str.length > numChar ? "..." : "")
