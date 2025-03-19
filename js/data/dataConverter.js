import Lesson from "./lesson.js"
import Task from "./task.js"

export default class DataConverter {
    constructor(data) {
        this._data = data
    }

    convertData() {
        try {
            const lessonObjectList = []
            const taskObjectList = []

            if (this._data.hasOwnProperty("lessons")) {
                this._data.lessons.forEach((lesson) => {
                    const taskListForLesson = []

                    for (const task of lesson["tasks"]) {
                        const taskObj = new Task(
                            task.id,
                            task.name,
                            task.description,
                            lesson.id,
                            task.solutions,
                            task.available
                        )
                        taskListForLesson.push(taskObj)
                    }

                    const lessonObj = new Lesson(
                        lesson.id,
                        lesson.name,
                        lesson.title,
                        taskListForLesson || [],
                        lesson.available
                    )
                    lessonObjectList.push(lessonObj)
                    taskObjectList.push(...taskListForLesson)
                })
            }
            // console.log("RES: ", {
            //     lessons: lessonObjectList,
            //     tasks: taskObjectList,
            // })
            return { lessons: lessonObjectList, tasks: taskObjectList }
        } catch (error) {
            console.log(error)
        }
    }
}
