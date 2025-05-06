export default class Timer {
    #callback
    #delay = 0
    #amountRunCallback
    #count = 0
    #timeoutId = null

    constructor(callback, delay, amountRunCallback, ...args) {
        this.callback = callback
        this.delay = delay
        this.amountRunCallback = amountRunCallback
        this.args = args
    }

    get callback() {
        return this.#callback
    }

    set callback(value) {
        this.#callback = value
    }

    get delay() {
        return this.#delay
    }

    set delay(value) {
        this.#delay = value
    }

    get amountRunCallback() {
        return this.#amountRunCallback
    }

    set amountRunCallback(value) {
        this.#amountRunCallback = value || Infinity
    }

    get timeoutId() {
        return this.#timeoutId
    }

    start() {
        this.#timeoutId = setInterval(
            this.runCallback.bind(this),
            this.#delay,
            ...this.args
        )
    }

    stop() {
        clearInterval(this.#timeoutId)
        this.#timeoutId = null
    }

    runCallback() {
        if (this.amountRunCallback === this.#count) return this.stop()
        this.#callback()
        this.#count++
    }

    isRun() {
        if (this.#timeoutId) return true
        return false
    }
}
