import { LessonModel, TaskModel, SolutionModel } from "./index.js"
import { getRandomNumber, getNumbersFromCurrentFileName } from "../utils.js"
import * as hw from "../hw/index.js"

export default class DataConverter {
    static addTaskId(data) {
        try {
            let nextTaskId = 0

            if (data.hasOwnProperty("lessons")) {
                data.lessons.forEach((lesson) => {
                    for (const task of lesson["tasks"]) {
                        task["id"] = nextTaskId++
                    }
                })
            }
            return data
        } catch (error) {
            console.log(error)
        }
    }
    static convertData(dataWithTaskId) {
        try {
            const lessonObjectList = []
            const taskObjectList = []
            const solutionObjectList = []
            let nextSolutionID = 0

            //* Add id to every task
            const data = DataConverter.addTaskId(dataWithTaskId)

            if (data.hasOwnProperty("lessons")) {
                data.lessons.forEach((lesson) => {
                    const taskListForLesson = []

                    for (const {
                        id,
                        name,
                        description,
                        solutions,
                        available,
                    } of lesson["tasks"]) {
                        const solutionsForTask = []

                        //* Create Solution Object
                        for (const [_, func] of Object.entries(hw)) {
                            // console.log(func.name)

                            if (func.solutionParams?.lesson - 1 === lesson.id) {
                                const taskFound =
                                    lesson.tasks[func.solutionParams?.task - 1]

                                if (taskFound.id === id) {
                                    const solution = new SolutionModel(
                                        nextSolutionID++,
                                        func.solutionParams?.name,
                                        func.solutionParams?.title,
                                        lesson.tasks[
                                            func.solutionParams?.task - 1
                                        ],
                                        func,
                                        func.solutionParams?.code,
                                        func.solutionParams?.params,
                                        func.solutionParams?.resultAsCode
                                    )
                                    solutionsForTask.push(solution)
                                }
                            }
                        }

                        //* Create Task Object
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

                    //* Create Lesson Object
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
