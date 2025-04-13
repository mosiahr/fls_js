import { LessonModel, TaskModel, SolutionModel, TagModel } from "./index.js"
import { getRandomNumber, getNumbersFromCurrentFileName } from "../utils.js"
import * as hw from "../hw/index.js"

export default class DataConverter {
    static addTaskId(data) {
        try {
            let nextTaskId = 0

            if (data.hasOwnProperty("lessons")) {
                data.lessons.forEach((lesson) => {
                    if (lesson.available === true) {
                        for (const task of lesson["tasks"]) {
                            if (task.available === true) {
                                task["id"] = nextTaskId++
                                if (!task.tags) task["tags"] = []
                            }
                        }
                    }
                })
            }
            return data
        } catch (error) {
            console.log(error)
        }
    }

    static convertData(dataWithoutTaskId) {
        try {
            const lessonObjectList = []
            const taskObjectList = []
            const solutionObjectList = []
            const tagObjectList = []
            let nextSolutionID = 0
            let nextTagId = 0

            //* Add id for every task
            const data = DataConverter.addTaskId(dataWithoutTaskId)
            // console.log(data)

            if (data.hasOwnProperty("lessons")) {
                data.lessons.forEach((lesson) => {
                    if (lesson.available === true) {
                        const taskListForLesson = []

                        for (const {
                            id: taskId,
                            name,
                            description,
                            solutions,
                            available,
                            tags,
                        } of lesson["tasks"]) {
                            if (available) {
                                const solutionsForTask = []

                                //* Create Solution Object
                                for (const [_, func] of Object.entries(hw)) {
                                    if (
                                        func.solutionParams?.lesson - 1 ===
                                        lesson.id
                                    ) {
                                        const taskFound =
                                            lesson.tasks[
                                                func.solutionParams?.task - 1
                                            ]

                                        if (taskFound.id === taskId) {
                                            const solution = new SolutionModel(
                                                nextSolutionID++,
                                                func.solutionParams?.name,
                                                func.solutionParams?.title,
                                                lesson.tasks[
                                                    func.solutionParams?.task -
                                                        1
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

                                const tagsForTask = []

                                //* Create Tag Object
                                if (tags) {
                                    for (const tag of tags) {
                                        const tagObj = new TagModel(
                                            nextTagId++,
                                            tag.name,
                                            tag.description,
                                            taskId,
                                            tag.available
                                        )
                                        tagsForTask.push(tagObj)
                                    }
                                    tagObjectList.push(...tagsForTask)
                                }

                                //* Create Task Object
                                const taskObj = new TaskModel(
                                    taskId,
                                    name,
                                    description,
                                    lesson.id,
                                    solutionsForTask,
                                    available,
                                    tagsForTask
                                )
                                taskListForLesson.push(taskObj)
                                solutionObjectList.push(...solutionsForTask)
                            }
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
                    }
                })
            }
            return {
                lessons: lessonObjectList,
                tasks: taskObjectList,
                solutions: solutionObjectList,
                tags: tagObjectList,
            }
        } catch (error) {
            console.log(error)
        }
    }
}
