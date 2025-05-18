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

function joobleAPI() {
  var url = 'https://jooble.org/api/'
  var key = '20360c7a-770d-443a-9803-9d239555aeee'
  var params = "{ keywords: 'it, front-end', location: ''}"

  //create xmlHttpRequest object
  var http = new XMLHttpRequest()
  //open connection. true - asynchronous, false - synchronous
  http.open('POST', url + key, true)

  //Send the proper header information
  http.setRequestHeader('Content-type', 'application/json')

  //Callback when the state changes
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      console.log(http.responseText)
    }
  }
  //Send request to the server
  const req = http.send(params)
  return req
}

class Fetch {
	async fetchData(path){
		const res = await fetch(path)
		const {status} = res

		if (status < 200 || status >=300){
			return 
		}

	}
}

export function task1_25() {}

task1_25.solutionParams = {
  code: trunsformEntityToCode(task1_25),
  name: '',
  title: '',
  lesson,
  task: 1,
  params: [],
  resultAsCode: false,
}
