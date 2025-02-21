"use strict"

export default function createList(items) {
  let result = `<ul class="page__list">`
  for (let i = 0; i < items.length; i++) {
    result += `<li>${items[i]}</li>`
  }
  result += `</ul>`
  return result
}
