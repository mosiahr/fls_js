import DataConverter from "./dataConverter.js"
import { LessonModel, TaskModel, SolutionModel } from "./index.js"

class QueryArray extends Array {
    constructor(array) {
        super()
        this._array = array
        // this._array = array.filter((el) => el instanceof className)
    }

    get(id) {
        try {
            return this._array.find((item) => item.id === id)
        } catch (error) {
            console.log(error)
        }
    }

    getFromAvailable(id) {
        try {
            // return this._array.find((item) => item.id === id)
            return this.allAvailable().find((item) => item.id === id)
        } catch (error) {
            console.log(error)
        }
    }

    all() {
        return this._array
    }

    allAvailable() {
        return this._array.filter((el) => el.available === true)
    }
}

export default class Data {
    #data
    constructor(data) {
        this.#data = data
        this._resObjectArr = this.#getObjectData()
        this._lessons = this._resObjectArr.lessons || []
        this._tasks = this._resObjectArr.tasks || []
        this._solutions = this._resObjectArr.solutions || []
    }

    get data() {
        return this.#data
    }

    get objects() {
        return this._resObjectArr
    }

    #getObjectData() {
        return DataConverter.convertData(this.#data)
    }

    getQueryArrayByClass = (dataClass) => {
        if (dataClass === LessonModel) return new QueryArray(this._lessons)
        if (dataClass === TaskModel) return new QueryArray(this._tasks)
        if (dataClass === SolutionModel) return new QueryArray(this._solutions)
    }

    all() {
        return this._resObjectArr
    }
}
