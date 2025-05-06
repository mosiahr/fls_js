import DataConverter from "./dataConverter.js"
import { LessonModel, TaskModel, SolutionModel, TagModel } from "./index.js"

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
        this._objectData = this.#getObjectData()
        this._lessons = this._objectData.lessons || []
        this._tasks = this._objectData.tasks || []
        this._solutions = this._objectData.solutions || []
        this._tags = this._objectData.tags || []
    }

    get data() {
        return this.#data
    }

    get objects() {
        return this._objectData
    }

    #getObjectData() {
        return DataConverter.convertData(this.#data)
    }

    getQueryArrayByClass = (dataClass) => {
        if (dataClass === LessonModel) return new QueryArray(this._lessons)
        if (dataClass === TaskModel) return new QueryArray(this._tasks)
        if (dataClass === SolutionModel) return new QueryArray(this._solutions)
        if (dataClass === TagModel) return new QueryArray(this._tags)
    }

    // all() {
    //     return this._objectData
    // }
}
