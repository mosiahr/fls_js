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
    #errorField
    #textErrorField

    constructor(
        textLabel,
        typeInput,
        idInput,
        forInput,
        placeholderInput = "",
        containerClassList = [],
        textErrorField
    ) {
        this.textLabel = textLabel
        this.typeInput = typeInput
        this.idInput = idInput
        this.forInput = forInput
        this.placeholderInput = placeholderInput
        this.container = document.createElement("div")
        this.containerClassList = containerClassList
        this.textErrorField = textErrorField
        this.label = document.createElement("label")
        this.textNode = document.createTextNode(this.textLabel)
        this.input = document.createElement("input")
        this.errorField = document.createElement("div")
        this.textErrorField = textErrorField
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

    get errorField() {
        return this.#errorField
    }
    set errorField(value) {
        this.#errorField = value
    }

    get textErrorField() {
        return this.#textErrorField
    }
    set textErrorField(value) {
        this.#textErrorField = value
    }

    updateTextLabel(value) {
        this.textNode.nodeValue = value
    }

    getHTML() {
        return this.#container.getHTML()
    }

    createElement() {
        this.#label.append(this.#textNode)
        this.#errorField.className = "error-message"
        this.#container.append(this.#label, this.#input, this.#errorField)
        if (this.#typeInput) this.#input.type = this.#typeInput
        if (this.#placeholderInput)
            this.#input.placeholder = this.#placeholderInput
        if (this.#idInput) this.#input.id = this.#idInput
        if (this.#forInput) this.#label.setAttribute("for", this.#forInput)
    }

    get renderedInput() {
        return document.getElementById(this.idInput)
    }

    get renderedErrorField() {
        return document.querySelector(
            `#${this.#idInput} + .${this.#errorField.className}`
        )
    }

    renderErrorField({
        errorField = this.renderedErrorField,
        value = this.#textErrorField,
    } = {}) {
        errorField.textContent = value
    }
}

class Button {
    #button
    #text
    #backgroundColor
    #color
    #id
    #attrClass

    constructor({
        text,
        backgroundColor = "",
        color = "",
        id = "",
        attrClass = [],
    }) {
        this.#button = document.createElement("button")
        this.text = text
        this.backgroundColor = backgroundColor
        this.color = color
        this.id = id
        this.attrClass = attrClass
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
    ERROR_MESSAGE = "Enter correct number!"
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
            ["simple-calculator__field"],
            this.ERROR_MESSAGE
        )
        this.secondNumFieldElement = new FieldElement(
            "second number",
            "number",
            "second-num",
            "second-num",
            "enter number",
            ["simple-calculator__field"],
            this.ERROR_MESSAGE
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

        this.solutionResultDiv = document.querySelector("#solution__result")
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

    initClickListener() {
        try {
            this.solutionResultDiv.addEventListener("click", (e) => {
                if (e.target.tagName === "BUTTON") {
                    const firstNum = this.firstNumFieldElement.renderedInput
                    const firstNumValue = parseFloat(firstNum?.value)

                    const secondNum = this.secondNumFieldElement.renderedInput
                    const secondNumValue = parseFloat(secondNum?.value)

                    const resultInput = this.resultNumFieldElement.renderedInput

                    if (!Number.isFinite(firstNumValue)) {
                        this.firstNumFieldElement.renderErrorField()
                    } else {
                        this.firstNumFieldElement.renderErrorField({
                            value: "",
                        })
                    }

                    if (!Number.isFinite(secondNumValue)) {
                        this.secondNumFieldElement.renderErrorField()
                    } else {
                        this.secondNumFieldElement.renderErrorField({
                            value: "",
                        })
                    }

                    if (
                        Number.isFinite(firstNumValue) &&
                        Number.isFinite(secondNumValue)
                    ) {
                        if (e.target.matches("#" + this.buttonPlus.id)) {
                            resultInput.value = this.plus(
                                firstNumValue,
                                secondNumValue
                            )
                        } else if (
                            e.target.matches("#" + this.buttonMinus.id)
                        ) {
                            resultInput.value = this.minus(
                                firstNumValue,
                                secondNumValue
                            )
                        } else if (
                            e.target.matches("#" + this.buttonMultiply.id)
                        ) {
                            resultInput.value = this.multiply(
                                firstNumValue,
                                secondNumValue
                            )
                        } else if (
                            e.target.matches("#" + this.buttonDivide.id)
                        ) {
                            resultInput.value = this.divide(
                                firstNumValue,
                                secondNumValue
                            )
                        }
                    }
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    initInputListener() {
        try {
            this.solutionResultDiv.addEventListener("input", (e) => {
                const resultInput = this.resultNumFieldElement.renderedInput

                if (
                    e.target.matches("#" + this.firstNumFieldElement.idInput) ||
                    e.target.matches("#" + this.secondNumFieldElement.idInput)
                ) {
                    resultInput.value = ""
                }
                console.log(!this.firstNumFieldElement.renderedInput.value)

                if (
                    e.target.matches("#" + this.firstNumFieldElement.idInput) &&
                    this.firstNumFieldElement.renderedInput.value
                ) {
                    this.firstNumFieldElement.renderedErrorField.textContent =
                        ""
                }

                if (
                    e.target.matches(
                        "#" + this.secondNumFieldElement.idInput
                    ) &&
                    this.secondNumFieldElement.renderedInput.value
                ) {
                    this.secondNumFieldElement.renderedErrorField.textContent =
                        ""
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function task1_18() {
    const calc = new Calculator()
    calc.initClickListener()
    calc.initInputListener()
    return calc.section.outerHTML
}

task1_18.solutionParams = {
    code:
        FieldElement.toString() +
        "\n\n" +
        Button.toString() +
        "\n\n" +
        Calculator.toString() +
        "\n\n" +
        task1_18.toString(),
    name: "",
    title: "",
    lesson,
    task: 1,
    params: [],
    resultAsCode: false,
}
