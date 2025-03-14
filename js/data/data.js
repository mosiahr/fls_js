import DataConverter from "./dataConverter.js"
import Lesson from "./lesson.js"

class QueryArray extends Array {
    constructor(array, className) {
        super()
        this._array = array.filter((el) => el instanceof className)
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
        this._objects = this._getObjectData()
        this.lessons = this._getLessons(Lesson)
    }

    get data() {
        return this._data
    }

    get objData() {
        return this._objects
    }

    _getObjectData() {
        return new DataConverter(this._data).convertData()
    }

    all() {
        return this._objects
    }
    _getLessons = (className) => new QueryArray(this._objects, className)
}
