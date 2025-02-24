export const getURLSearchParams = (param) =>
    new URLSearchParams(window.location.search).get(param)

export function confirmBeginTest(funcTest) {
    if (confirm("Begin test?")) {
        funcTest()
    }
}

export const getRandomNumber = (minNumber, maxNumber) =>
    minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))

export const roundDecimal = (number) =>
    Math.round(parseFloat(number) * 100) / 100