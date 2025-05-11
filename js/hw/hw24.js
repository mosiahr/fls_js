import {
    getNumbersFromCurrentFileName,
    getRandomNumber,
    toUpperCaseFirstLetterEveryWord,
} from '../utils.js'

import Timer from '../helpers/timer.js'

const lesson = getNumbersFromCurrentFileName(import.meta)

//* =========================  Task #1  ===========================
// Дано клас PhoneNumber. Створити функцію перетворення до string,
// при якому на основі номера виводиться оператор (050….  à MTC, 096… à Kyivstar, ….)

class PhoneNumber {
    static operatorMapping = {
        '050': 'Vodafone',
        '066': 'Vodafone',
        '095': 'Vodafone',
        '099': 'Vodafone',
        '067': 'Kyivstar',
        '068': 'Kyivstar',
        '096': 'Kyivstar',
        '097': 'Kyivstar',
        '098': 'Kyivstar',
        '063': 'Lifecell',
        '073': 'Lifecell',
        '093': 'Lifecell',
        '091': '3Mob',
        '094': 'Intertelecom',
    }
    #phoneNumberRegex = new RegExp(
        /^\+?(?:\d{1,3}?)?[-.\s]?(?<operatorCode>\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/
    )
    #phoneNumber
    #codePhoneOperator

    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber
        this.#setCodePhoneOperator()
    }

    get phoneNumber() {
        return this.#phoneNumber
    }
    set phoneNumber(value) {
        if (this.isValidPhone(value)) this.#phoneNumber = value
        else throw new Error('Invalid phone number value')
    }

    get codePhoneOperator() {
        return this.#codePhoneOperator
    }
    set codePhoneOperator(value) {
        this.#codePhoneOperator = value
    }

    get phoneNumberRegex() {
        return this.#phoneNumberRegex
    }

    isValidPhone(phone) {
        return this.phoneNumberRegex.test(phone)
    }

    getOperatorName() {
        return (
            PhoneNumber.operatorMapping[this.codePhoneOperator] ||
            'Unknown Operator'
        )
    }

    [Symbol.toPrimitive](hint) {
        let res
        switch (hint) {
            case 'string':
                res = this.getOperatorName()
                break
            case 'number':
                res = this.codePhoneOperator
                break
            default:
                res = this.getOperatorName()
                break
        }
        return res
    }

    #setCodePhoneOperator() {
        if (this.phoneNumber) {
            const res = this.phoneNumberRegex.exec(this.phoneNumber)
            this.codePhoneOperator = res?.groups?.operatorCode
        }
    }
}

export function task1_24() {
    const phoneNumber = new PhoneNumber('+380963070734')
    console.log(`${phoneNumber}`) // string
    console.log(+phoneNumber) // number
    console.log(phoneNumber + '') // default
    return [`${phoneNumber}`, +phoneNumber, phoneNumber + '']
}

task1_24.solutionParams = {
    code: PhoneNumber.toString() + '\n\n' + task1_24.toString(),
    name: '',
    title: '',
    lesson,
    task: 1,
    params: [],
    resultAsCode: true,
}
