import {
    getNumbersFromCurrentFileName,
    getRandomNumber,
    toUpperCaseFirstLetterEveryWord,
} from "../utils.js"
import { button } from "../components/index.js"

const lesson = getNumbersFromCurrentFileName(import.meta)

//* =========================  Task #1  ===========================
// Розробити калькулятор

class FieldElement {
    #textLabel
    #typeInput
    #idInput
    #forInput
    #placeholderInput
    #container
    #label
    #input
    #textNode

    constructor(
        textLabel,
        typeInput,
        idInput,
        forInput,
        placeholderInput = ""
    ) {
        this.textLabel = textLabel
        this.typeInput = typeInput
        this.idInput = idInput
        this.forInput = forInput
        this.placeholderInput = placeholderInput
        this.container = document.createElement("div")
        this.label = document.createElement("label")
        this.textNode = document.createTextNode(this.textLabel)
        this.input = document.createElement("input")

        this.createElement(typeInput, placeholderInput)
    }

    get textLabel() {
        return this.#textLabel
    }
    set textLabel(value) {
        this.#textLabel = value ? toUpperCaseFirstLetterEveryWord(value) : ""
    }

    get typeInput() {
        return this.#typeInput
    }
    set typeInput(value) {
        this.#typeInput = value
    }

    get idInput() {
        return this.#idInput
    }
    set idInput(value) {
        this.#idInput = value
    }

    get forInput() {
        return this.#forInput
    }
    set forInput(value) {
        this.#forInput = value
    }

    get placeholderInput() {
        return this.#placeholderInput
    }
    set placeholderInput(value) {
        this.#placeholderInput = value
            ? toUpperCaseFirstLetterEveryWord(value)
            : ""
    }

    get container() {
        return this.#container
    }
    set container(value) {
        this.#container = value
    }

    get label() {
        return this.#label
    }
    set label(value) {
        this.#label = value
    }

    get input() {
        return this.#input
    }
    set input(value) {
        this.#input = value
    }

    get textNode() {
        return this.#textNode
    }
    set textNode(value) {
        this.#textNode = value
    }

    getHTML() {
        return this.#container.getHTML()
    }

    createElement() {
        this.#label.append(this.#textNode)
        this.#container.append(this.#label, this.#input)
        if (this.#typeInput) this.#input.type = this.#typeInput
        if (this.#placeholderInput)
            this.#input.placeholder = this.#placeholderInput
        if (this.#idInput) this.#input.id = this.#idInput
        if (this.#forInput) this.#label.setAttribute("for", this.#forInput)
        // this.#input.disabled = true
        console.log(this.#input)
    }
}

class Calculator {
    #container = document.createElement("section")
    #button = document.createElement("button")

    constructor() {
        this.firstNumFieldElement = new FieldElement(
            "first number",
            "number",
            "first-num",
            "first-num",
            "enter number"
        )
        this.secondNumFieldElement = new FieldElement(
            "second number",
            "number",
            "second-num",
            "second-num",
            "enter number"
        )
        this.resultNumFieldElement = new FieldElement(
            "Result",
            "number",
            "result",
            "result",
            ""
        )
        this.#createElement()
    }

    get container() {
        return this.#container
    }

    get button() {
        return this.#button
    }
    set button(value) {
        this.#button = value
    }

    #createElement() {
        // this.firstNumFieldElement.textLabel = "OPOP"
        // this.secondNumFieldElement.label.textContent = "Second Number"
        this.resultNumFieldElement.input.disabled = true

        this.#button.setAttribute("id", "")

        this.#container.append(
            this.firstNumFieldElement.container,
            this.secondNumFieldElement.container,
            this.resultNumFieldElement.container
        )
    }

    getHTML() {
        return this.#container.outerHTML
    }
}

export function task1_18() {
    const calc = new Calculator()
    console.log(calc.getHTML())

    return calc.container.outerHTML
}

task1_18.solutionParams = {
    code: "",
    name: "",
    title: "",
    lesson,
    task: 1,
    params: [],
    resultAsCode: false,
}
