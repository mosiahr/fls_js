import codeEl from "./codeEl.js"
import {
    SOLUTION_CODE_TITLE,
    SOLUTION_RESULT_TITLE,
    ADVISE_START_TEST_MESSAGE,
} from "../config.js"

export default function solutionEl(
    code = "",
    solutionResult = "",
    ...attrClass
) {
    const container = document.createElement("div")
    attrClass.forEach((el) => container.classList.add(el))
    const codeDiv = codeEl(code, "solution__code")

    container.insertAdjacentHTML(
        "afterbegin",
        `<div class="solution__item">
			<h3>${SOLUTION_RESULT_TITLE}</h3>
			<div id="solution__result" class="solution__result">
			${ADVISE_START_TEST_MESSAGE}
			</div>
		</div>
		
		<div class="solution__item">
		<h3>${SOLUTION_CODE_TITLE}</h3>
			${codeDiv.outerHTML}
		</div>`
    )
    return container
}
