import { hljs } from "../index.js"
import codeEl from "./codeEl.js"
import { SOLUTION_CODE_TITLE, SOLUTION_RESULT_TITLE } from "../config.js"

export default function solutionEl(
    code = "",
    solutionResult = "",
    ...attrClass
) {
    const container = document.createElement("div")
    attrClass.forEach((el) => container.classList.add(el))
    const codeDiv = codeEl(code, "solution-code")
    console.log("codeDiv", codeDiv)

    container.insertAdjacentHTML(
        "afterbegin",
        `<div class="solution-item">
		<h3>${SOLUTION_CODE_TITLE}</h3>
		${codeDiv.outerHTML}
		</div>
		<div class="solution-item"><h3>${SOLUTION_RESULT_TITLE}</h3></div>`
    )

    // const solutionBlock = document.createElement("div")

    // const codeBock = document.createElement("div")
    // codeBock.className = "solution-item"

    // const headerCode = document.createElement("h3")
    // headerCode.textContent = SOLUTION_CODE_TITLE

    // const solutionItem = codeEl(code, "solution-code")

    // codeBock.appendChild(headerCode)
    // codeBock.appendChild(solutionItem)

    // const resultBock = document.createElement("div")
    // codeBock.className = "solution-code"

    // const headerResult = document.createElement("h3")
    // headerResult.textContent = SOLUTION_RESULT_TITLE

    // // const solutionItem = codeEl(code, "solution-item")

    // resultBock.appendChild(headerResult)
    // resultBock.appendChild(solutionItem)

    // const resultDivEl = codeEl(solutionResult, "solution-item")
    // const headerResultDivEl = document.createElement("h3")
    // headerResultDivEl.textContent = SOLUTION_RESULT_TITLE
    // resultDivEl.prepend(headerResultDivEl)

    // solutionBlock.appendChild(codeBock)
    // solutionBlock.appendChild(resultBock)
    return container
}
