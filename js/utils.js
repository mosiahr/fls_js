export const getURLSearchParams = (param) =>
    new URLSearchParams(window.location.search).get(param)

export function runWithConfirmStart(funcTest, ...args) {
    if (confirm("-= START TEST? =-")) {
        return funcTest(args)
    }
}

export const getRandomNumber = (minNumber, maxNumber) =>
    minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))

export const roundDecimal = (number) =>
    Math.round(parseFloat(number) * 100) / 100

export const parseIntArr = (arr) => {
    const resArr = []
    for (let i = 0; i < arr.length; i++)
        resArr.push(parseInt(arr[i]))
    return resArr
}