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

//* =========================  Task #2  ===========================
// Розробити конвертер валют (курси валют - константи у скрипті)

class FieldCurrencyConverter {
    #title
    #labelId
    #autofocus

    #labelClassNameFocusIn = "label--focusin"
    #titleClassNameFocusIn = "title--focusin"
    solutionResultDiv = document.querySelector("#solution__result")

    constructor(title, labelId, autofocus = false) {
        this.title = title
        this.labelId = labelId
        this.autofocus = autofocus
    }

    get title() {
        return this.#title
    }
    set title(value) {
        this.#title = value
    }

    get labelId() {
        return this.#labelId
    }
    set labelId(value) {
        this.#labelId = value
    }

    get autofocus() {
        return this.#autofocus
    }
    set autofocus(value) {
        this.#autofocus = value
    }

    get labelClassFocusIn() {
        return this.#labelClassNameFocusIn
    }
    set labelClassFocusIn(value) {
        this.#labelClassNameFocusIn = value
    }

    get titleClassNameFocusIn() {
        return this.#titleClassNameFocusIn
    }
    set titleClassNameFocusIn(value) {
        this.#titleClassNameFocusIn = value
    }

    render() {
        const container = document.createElement("div")
        container.classList.add("currency-converter__field-converter")
        container.classList.add("field-converter")

        this.label = document.createElement("label")
        this.label.classList.add("field-converter__label")
        if (this.labelId) this.label.setAttribute("id", this.labelId)

        const title = document.createElement("span")
        title.classList.add("field-converter__title")
        title.innerText = this.#title

        const exchangeRate = document.createElement("span")
        exchangeRate.classList.add("field-converter__exchange-rate")
        exchangeRate.textContent = "1 USD = 41.2 UAH"

        this.input = document.createElement("input")
        this.input.classList.add("field-converter__input")
        this.input.type = "number"
        this.input.setAttribute("value", 0)
        // this.input.setAttribute("autofocus", this.#autofocus)

        this.label.append(title, this.input, exchangeRate)
        container.append(this.label)

        this.initEventListener()
        return container
    }

    initFocusIn(e) {
        if (e.target.closest("label").matches("#" + this.labelId)) {
            console.log("In", this.labelId)

            const fieldLabel = document.getElementById(this.labelId)

            e.target?.previousElementSibling?.classList?.add(
                this.#titleClassNameFocusIn
            )
            fieldLabel.classList.add(this.#labelClassNameFocusIn)
        }
    }
    initFocusOut(e) {
        if (e.target.closest("label").matches("#" + this.labelId)) {
            console.log("Out", this.labelId)

            const fieldLabel = document.getElementById(this.labelId)

            e.target?.previousElementSibling?.classList?.remove(
                this.#titleClassNameFocusIn
            )
            fieldLabel.classList.remove(this.#labelClassNameFocusIn)
        }
    }

    initEventListener() {
        this.solutionResultDiv.addEventListener(
            "focusin",
            this.initFocusIn.bind(this)
        )
        this.solutionResultDiv.addEventListener(
            "focusout",
            this.initFocusOut.bind(this)
        )
    }
}

class CurrencyConverter {
    #title
    #fromLabelName
    #toLabelName
    #fromLabelId
    #toLabelId
    solutionResultDiv = document.querySelector("#solution__result")

    constructor(
        title = "Converter",
        fromLabelName = "From",
        toLabelName = "To",
        fromLabelId = "from-field",
        toLabelId = "to-field"
    ) {
        this.title = title
        this.fromLabelName = fromLabelName
        this.toLabelName = toLabelName
        this.fromLabelId = fromLabelId
        this.toLabelId = toLabelId
        this.fromField = new FieldCurrencyConverter(
            this.#fromLabelName,
            this.#fromLabelId,
            true
        )
        this.toField = new FieldCurrencyConverter(
            this.#toLabelName,
            this.#toLabelId
        )
    }

    get title() {
        return this.#title
    }
    set title(value) {
        this.#title = value
    }

    get fromLabelName() {
        return this.#fromLabelName
    }
    set fromLabelName(value) {
        this.#fromLabelName = value
    }

    get toLabelName() {
        return this.#toLabelName
    }
    set toLabelName(value) {
        this.#toLabelName = value
    }

    get fromLabelId() {
        return this.#fromLabelId
    }
    set fromLabelId(value) {
        this.#fromLabelId = value
    }

    get toLabelId() {
        return this.#toLabelId
    }
    set toLabelId(value) {
        this.#toLabelId = value
    }

    render() {
        const container = document.createElement("div")
        container.className = "currency-converter"

        this.titleDiv = document.createElement("div")
        this.titleDiv.className = "currency-converter__title"
        this.titleDiv.textContent = this.title

        console.log(this.fromField)

        this.bodyDiv = document.createElement("div")
        this.bodyDiv.className = "currency-converter__body"

        this.arrowsButton = document.createElement("button")
        this.arrowsButton.className = "currency-converter__button"

        this.arrowsSpan = document.createElement("span")
        this.arrowsSpan.className = "currency-converter__button-label"
        this.arrowsSpan.textContent = "⇌"

        this.arrowsButton.append(this.arrowsSpan)

        this.bodyDiv.append(
            this.fromField.render(),
            this.arrowsButton,
            this.toField.render()
        )

        container.append(this.titleDiv, this.bodyDiv)
        return container
    }

    // initInputListener() {
    //     const fieldInputClassName =
    //         "." + this.firstField.input.getAttribute("class")
    //     console.log(Object.getOwnPropertyNames(this))

    //     const labelClassNameFocusIn = this.firstField.labelClassFocusIn

    //     this.solutionResultDiv.addEventListener("focusin", function (e) {
    //         if (
    //             e.target.matches(fieldInputClassName) ||
    //             e.target.matches(fieldInputClassName)
    //         ) {
    //             console.log("HOH")
    //             console.log(Object.getOwnPropertyNames(this))

    //             const [firstInput, secondInput] =
    //                 document.querySelectorAll(fieldInputClassName)
    //             console.log(firstInput, secondInput)

    //             firstInput.classList.add(labelClassNameFocusIn)
    //         }
    //     })
    // }

    // initClick(e) {
    //     console.log("clickk")

    //     if (e.target.matches("#" + this.fromField.labelId)) {
    //         console.log(this.fromField)
    //     }
    // }
    initEventListener() {
        this.solutionResultDiv.addEventListener(
            "load",
            this.initAutoFocus.bind(this)
        )
    }
    initAutoFocus() {
        setTimeout(function () {
            const input = document.getElementById(this.fromField)
            console.log(input)

            // $("#input-field").focus();
        }, 1000)
    }
}

export function task2_18() {
    const converter = new CurrencyConverter("Currency Converter")
    const converterEl = converter.render()
    // converter.fromField.input.focus()
    // converter.fromField.initEventListener()
    // converter.toField.initEventListener()

    converter.initEventListener()
    return converterEl.outerHTML
}

task2_18.solutionParams = {
    code:
        FieldCurrencyConverter.toString() +
        "\n\n" +
        CurrencyConverter.toString() +
        "\n\n" +
        task2_18.toString(),
    name: "",
    title: "",
    lesson,
    task: 2,
    params: [],
    resultAsCode: false,
}
