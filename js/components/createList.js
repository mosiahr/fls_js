export default function createList(items, className = '', stringify = false) {
  let result = className ? `<ul class="${className}">` : `<ul>`
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (stringify == true && typeof item === 'object')
      result += `<li>${JSON.stringify(item)}</li>`
    else result += `<li>${item}</li>`
  }
  result += `</ul>`
  return result
}
