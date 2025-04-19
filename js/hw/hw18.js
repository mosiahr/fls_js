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
    #containerClassList
    #label
    #input
    #textNode

    constructor(
        textLabel,
        typeInput,
        idInput,
        forInput,
        placeholderInput = "",
        containerClassList = []
    ) {
        this.textLabel = textLabel
        this.typeInput = typeInput
        this.idInput = idInput
        this.forInput = forInput
        this.placeholderInput = placeholderInput
        this.container = document.createElement("div")
        this.containerClassList = containerClassList
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

    get containerClassList() {
        return this.#containerClassList
    }
    set containerClassList(arr) {
        this.#containerClassList = arr
        arr.forEach((el) => this.#container.classList.add(el))
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

    updateTextLabel(value) {
        this.textNode.nodeValue = value
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
    }
}

class Button {
    #button
    #text
    #backgroundColor
    #color
    #id
    #attrClass
    #funcOnClick

    constructor({
        text,
        backgroundColor = "",
        color = "",
        id = "",
        attrClass = [],
        funcOnClick = Function,
    }) {
        this.#button = document.createElement("button")
        this.text = text
        this.backgroundColor = backgroundColor
        this.color = color
        this.id = id
        this.attrClass = attrClass
        this.funcOnClick = funcOnClick
        this.#createElement()
    }

    get button() {
        return this.#button
    }

    get text() {
        return this.#text
    }
    set text(value) {
        this.#text = value
        this.#button.textContent = value
    }

    get backgroundColor() {
        return this.#backgroundColor
    }
    set backgroundColor(value) {
        this.#backgroundColor = value
        this.#button.style.backgroundColor = value
    }

    get color() {
        return this.#color
    }
    set color(value) {
        this.#color = value
        this.#button.style.color = value
    }

    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
        this.#button.setAttribute("id", value)
    }

    get attrClass() {
        return this.#attrClass
    }
    set attrClass(arr) {
        this.#attrClass = arr
        arr.forEach((el) => this.#button.classList.add(el))
    }

    #createElement() {
        this.#button.style.cssText = `
		background-color: ${this.#backgroundColor}; color: ${this.#color}`
    }

    getHTML() {
        return this.#button.getHTML()
    }
}

class Calculator {
    #section = document.createElement("section")
    #title

    constructor(title = "Simple calculator") {
        this.title = title

        this.firstNumFieldElement = new FieldElement(
            "first number",
            "number",
            "first-num",
            "first-num",
            "enter number",
            ["simple-calculator__field"]
        )
        this.secondNumFieldElement = new FieldElement(
            "second number",
            "number",
            "second-num",
            "second-num",
            "enter number",
            ["simple-calculator__field"]
        )
        this.resultNumFieldElement = new FieldElement(
            "Result",
            "number",
            "result",
            "result",
            "",
            ["simple-calculator__field"]
        )
        this.buttonPlus = new Button({
            text: "Plus",
            id: "calculator-button-plus",
            attrClass: ["button"],
        })
        this.buttonMinus = new Button({
            text: "Minus",
            id: "calculator-button-minus",
            attrClass: ["button"],
        })
        this.buttonMultiply = new Button({
            text: "Multiply",
            id: "calculator-button-multiply",
            attrClass: ["button"],
        })
        this.buttonDivide = new Button({
            text: "Divide",
            id: "calculator-button-divide",
            attrClass: ["button"],
        })

        this.#createElement()
    }

    get section() {
        return this.#section
    }

    get title() {
        return this.#title
    }
    set title(value) {
        this.#title = value
    }

    #createElement() {
        this.#section.classList.add("simple-calculator")

        this.resultNumFieldElement.input.disabled = true

        const titleCalcEl = document.createElement("div")
        titleCalcEl.className = "calculator-title"
        titleCalcEl.append(
            document.createTextNode(
                toUpperCaseFirstLetterEveryWord(this.#title)
            )
        )

        const bodyCalcEl = document.createElement("div")
        bodyCalcEl.classList.add("calculator__body-calculator")
        bodyCalcEl.append(
            this.firstNumFieldElement.container,
            this.secondNumFieldElement.container,
            this.resultNumFieldElement.container
        )

        bodyCalcEl.classList.add("body-calculator")
        const buttonsEl = document.createElement("div")
        buttonsEl.classList.add("calculator__buttons")
        buttonsEl.append(
            this.buttonPlus.button,
            this.buttonMinus.button,
            this.buttonMultiply.button,
            this.buttonDivide.button
        )
        this.#section.append(titleCalcEl, bodyCalcEl, buttonsEl)
    }

    initOperations(e) {
        if (e.target.tagName === "BUTTON") {
            console.log("HE")
        }
    }

    getHTML() {
        return this.#section.outerHTML
    }

    plus(firstNum, secondNum) {
        return parseFloat(firstNum) + parseFloat(secondNum)
    }

    minus(firstNum, secondNum) {
        return parseFloat(firstNum) - parseFloat(secondNum)
    }

    multiply(firstNum, secondNum) {
        return parseFloat(firstNum) * parseFloat(secondNum)
    }

    plus(firstNum, secondNum) {
        return parseFloat(firstNum) + parseFloat(secondNum)
    }

    divide(firstNum, secondNum) {
        return parseFloat(firstNum) / parseFloat(secondNum)
    }

    initClick() {
        const solutionResultDiv = document.querySelector("#solution__result")

        solutionResultDiv.addEventListener("click", (e) => {
            const firstNum = document.getElementById("first-num")?.value
            const secondNum = document.getElementById("second-num")?.value
            const resultInput = document.getElementById("result")

            if (e.target.tagName === "BUTTON") {
                if (e.target?.id === this.buttonPlus.id) {
                    resultInput.value = this.plus(firstNum, secondNum)
                } else if (e.target?.id === this.buttonMinus.id) {
                    resultInput.value = this.minus(firstNum, secondNum)
                } else if (e.target?.id === this.buttonMultiply.id) {
                    resultInput.value = this.multiply(firstNum, secondNum)
                } else if (e.target?.id === this.buttonDivide.id) {
                    resultInput.value = this.divide(firstNum, secondNum)
                }
            }
        })
    }
}

export function task1_18() {
    const calc = new Calculator()
    calc.initClick()
    return calc.section.outerHTML
}

task1_18.solutionParams = {
    code: "",
    name: "",
    title: "",
    lesson,
    task: 1,
    params: [],
    resultAsCode: false,
    initEventMethod: new Calculator().initClick,
}
