import {
  getNumbersFromCurrentFileName,
  getRandomNumber,
  toUpperCaseFirstLetterEveryWord,
  trunsformEntityToCode,
} from '../utils.js'

import { table, createList } from '../components/index.js'
import Timer from '../helpers/timer.js'

const lesson = getNumbersFromCurrentFileName(import.meta)

//* =========================  Task #1  ===========================
// Використовуючи один з АРІ
// https://github.com/public-apis/public-apis#animals
// та функцію fetch організувати завантаження та відображення даних
// Намагайтесь зробити це з використанням класів. Окремо клас для побудови розмітки.
//  Окремо клас, який буде робити запити і повертати результати.

