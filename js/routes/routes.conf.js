import Route from "./Route.js"
import {
    homePage,
    lessonsPage,
    lessonPage,
    taskPage,
    MainPage,
} from "../pages/index.js"
import { PROJECT_FOLDER } from "../config.js"

import LessonController from "../controllers/lessonController.js"
const lessContName = LessonController.name
console.log(lessContName)

export const routes = {
    home: new Route(
        new RegExp(
            `^\/?$|^\/${PROJECT_FOLDER}\/?$|^\/${PROJECT_FOLDER}\/index\.html$`
        ),
        "home"
        // homePage
    ),
    lessons: new Route(
        new RegExp(/^\/lessons\/?$/),
        "lessons",
        LessonController
    ),
    lesson: new Route(
        new RegExp(/^\/lessons\/[0-9]+\/?$/),
        "lesson",
        LessonController
    ),
    tasks: new Route(
        new RegExp(/^\/lessons\/[0-9]+\/tasks\/?$/),
        "tasks",
        // "tasksPage",
        false
    ),
    task: new Route(
        new RegExp(/^\/lessons\/[0-9]+\/tasks\/[0-9]+\/?$/),
        "task"
        // taskPage
    ),
}
