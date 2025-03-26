import { LessonModel, TaskModel, SolutionModel } from "./index.js"
import { getRandomNumber, getNumbersFromCurrentFileName } from "../utils.js"
import * as hw from "../hw/index.js"

export default class DataConverter {
    constructor(data) {
        this._data = data
    }

    convertData() {
        try {
            const lessonObjectList = []
            const taskObjectList = []
            const solutionObjectList = []
            let nextSolutionID = 0

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
                        const solutionsForTask = []

                        for (const [_, func] of Object.entries(hw)) {
                            // const funcLesson = getNumbersFromCurrentFileName(
                            //     func.solutionParams?.meta
                            // )
                            // console.log(func.solutionParams?.code)

                            if (func.solutionParams?.lesson - 1 === lesson.id) {
                                const taskFound =
                                    lesson.tasks[func.solutionParams?.task - 1]
                                if (id === taskFound.id) {
                                    const solution = new SolutionModel(
                                        nextSolutionID++,
                                        func.solutionParams?.name,
                                        func.solutionParams?.title,
                                        lesson.tasks[
                                            func.solutionParams?.task - 1
                                        ],
                                        func,
                                        func.solutionParams?.code,
                                        func.solutionParams?.params
                                    )
                                    solutionsForTask.push(solution)
                                }
                            }
                        }

                        const taskObj = new TaskModel(
                            id,
                            name,
                            description,
                            lesson.id,
                            solutionsForTask,
                            available
                        )
                        taskListForLesson.push(taskObj)
                        solutionObjectList.push(...solutionsForTask)
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
            return {
                lessons: lessonObjectList,
                tasks: taskObjectList,
                solutions: solutionObjectList,
            }
        } catch (error) {
            console.log(error)
        }
    }
}
