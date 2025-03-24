import { hljs } from "../index.js"
import codeEl from "./codeEl.js"
import { SOLUTION_CODE_TITLE, SOLUTION_RESULT_TITLE } from "../config.js"

export default function solutionEl(
    code = "",
    solutionResult = "",
    ...attrClass
) {
    const solutionEl = document.createElement("div")
    attrClass.forEach((el) => solutionEl.classList.add(el))

    const codeDivEl = codeEl(code, "solution-item")
    const headerCodeDivEl = document.createElement("h3")
    headerCodeDivEl.textContent = SOLUTION_CODE_TITLE
    codeDivEl.prepend(headerCodeDivEl)

    const resultDivEl = codeEl(solutionResult, "solution-item")
    const headerResultDivEl = document.createElement("h3")
    headerResultDivEl.textContent = SOLUTION_RESULT_TITLE
    resultDivEl.prepend(headerResultDivEl)

    solutionEl.appendChild(codeDivEl)
    solutionEl.appendChild(resultDivEl)
    return solutionEl
}
