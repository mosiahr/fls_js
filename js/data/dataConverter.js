import Lesson from "./lesson.js"
import Task from "./task.js"

export default class DataConverter {
    constructor(data) {
        this._data = data
    }

    convertData() {
        try {
            const dataObj = []
            if (this._data.hasOwnProperty("lessons")) {
                this._data.lessons.forEach((lesson) => {
                    const tasksObj = []
                    for (const task of lesson["tasks"]) {
                        const taskObj = new Task(
                            task["id"],
                            task["name"],
                            task["description"],
                            task["solutions"],
                            task["available"]
                        )
                        tasksObj.push(taskObj)
                    }

                    const lessonObj = new Lesson(
                        lesson["id"],
                        lesson["name"],
                        lesson["title"],
                        tasksObj || []
                    )
                    dataObj.push(lessonObj)
                })
            }
            return dataObj
        } catch (error) {
            console.log(error)
        }
    }
}
