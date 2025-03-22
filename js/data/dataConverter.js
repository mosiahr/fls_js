import LessonModel from "./lessonModel.js"
import TaskModel from "./taskModel.js"

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

                    for (const {
                        id,
                        name,
                        description,
                        solutions,
                        available,
                    } of lesson["tasks"]) {
                        const taskObj = new TaskModel(
                            id,
                            name,
                            description,
                            solutions,
                            available,
                            { lesson: lesson.id }
                        )
                        taskListForLesson.push(taskObj)
                    }

                    const lessonObj = new LessonModel(
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
