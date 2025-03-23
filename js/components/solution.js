import { hljs } from "../index.js"
import codeEl from "./codeEl.js"

export default function solutionEl(
    code = "",
    solutionResult = "",
    ...attrClass
) {
    const solutionEl = document.createElement("div")
    attrClass.forEach((el) => solutionEl.classList.add(el))

    const codeDivEl = codeEl(code, "solution-item")
    const headerCodeDivEl = document.createElement("h3")
    headerCodeDivEl.textContent = "Solution Code"
    codeDivEl.prepend(headerCodeDivEl)

    const resultDivEl = codeEl(solutionResult, "solution-item")
    const headerResultDivEl = document.createElement("h3")
    headerResultDivEl.textContent = "Solution Result"
    resultDivEl.prepend(headerResultDivEl)

    solutionEl.appendChild(codeDivEl)
    solutionEl.appendChild(resultDivEl)
    return solutionEl
}
