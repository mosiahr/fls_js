import DataConverter from "./dataConverter.js"
import LessonModel from "./lessonModel.js"
import TaskModel from "./taskModel.js"

class QueryArray extends Array {
    constructor(array) {
        super()
        this._array = array
        // this._array = array.filter((el) => el instanceof className)
    }
    get(id) {
        try {
            for (const element of this._array)
                if (element.id === id) return element
        } catch (error) {
            console.log(error)
        }
    }
    all() {
        return this._array
    }
}

export default class Data {
    constructor(data) {
        this._data = data
        this._resObjectArr = this.#getObjectData()
        this._lessons = this._resObjectArr.lessons || []
        this._tasks = this._resObjectArr.tasks || []
    }

    get data() {
        return this._data
    }

    get objects() {
        return this._resObjectArr
    }

    #getObjectData() {
        return new DataConverter(this._data).convertData()
    }

    getQueryArrayByClass = (dataClass) => {
        if (dataClass === LessonModel) return new QueryArray(this._lessons)
        if (dataClass === TaskModel) return new QueryArray(this._tasks)
    }

    all() {
        return this._resObjectArr
    }
}
