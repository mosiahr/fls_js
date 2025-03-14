import DataConverter from "./dataConverter.js"

export default class Data {
    constructor(data) {
        this._data = data
        this._objData = this.getObjectData()
    }

    get data() {
        return this._data
    }

    getObjectData() {
        return new DataConverter(this._data).convertData()
    }
}
