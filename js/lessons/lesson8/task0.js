import {
  roundDecimal,
  getRandomNumberArr,
  getRandomNumberArrFromUser,
} from "../../utils.js"

const arithmeticMeanNumbers = (numbers) => {
  let res = 0
  for (let i = 0; i < numbers.length; i++) {
    if (!Number.isFinite(numbers[i]))
      throw new Error("A number must be a number")
    res += numbers[i]
  }
  return res / numbers.length
}

function getMinMark(arr, minSearchMark) {
  let min = +Infinity
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= minSearchMark && arr[i] < min) min = arr[i]
  }
  if (!isFinite(min)) throw new Error("Incorrect marks!")
  return min
}

const getTypePupil = (minMark) => {
  if (minMark < 2 || minMark > 5)
    throw new Error("Mark is incorrect. Enter marks from 2 to 5, please!")

  let res
  if (minMark < 3) res = "Двійочник"
  else if (minMark < 4) res = "Трійочник"
  else if (minMark < 5) res = "Хорошист"
  else res = "Відмінник"
  return res
}

export default function task0() {
  const randomNumberArr = getRandomNumberArr(2, 5, 5, 20)
  const marks = getRandomNumberArrFromUser(
    "Enter or add your marks (2-5): ",
    randomNumberArr
  )
  const minMark = getMinMark(marks, 2)
  const typePupil = getTypePupil(minMark)

  const arithmeticMeanNum = roundDecimal(arithmeticMeanNumbers(marks))
  return [
    `Your data: ${marks}`,
    `Arithmetic Mean Estimate: ${arithmeticMeanNum}`,
    `Type of Pupil: ${typePupil}`,
  ]
}
