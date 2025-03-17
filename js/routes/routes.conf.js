import Route from "./Route.js"
import {
    homePage,
    lessonsPage,
    lessonPage,
    taskPage,
    MainPage,
} from "../pages/index.js"
import { PROJECT_FOLDER } from "../config.js"
import Data from "../data/data.js"
import Lesson from "../data/lesson.js"
import LessonListController from "../controllers/lessonListController.js"
import LessonController from "../controllers/lessonController.js"

export const routes = {
    home: new Route(
        new RegExp(
            `^\/?$|^\/${PROJECT_FOLDER}\/?$|^\/${PROJECT_FOLDER}\/index\.html$`
        )
        // homePage
    ),
    lessons: new Route(
        new RegExp(/^\/lessons\/?$/),
        LessonListController,
        Lesson
    ),
    lesson: new Route(
        // new RegExp(/^\/lessons\/[0-9]+\/?$/),
        new RegExp(/^\/lessons\/(?<id>[0-9]+)\/?$/),
        LessonController,
        Lesson
    ),
    tasks: new Route(
        new RegExp(/^\/lessons\/[0-9]+\/tasks\/?$/),
        // "tasksPage",
        false
    ),
    task: new Route(
        new RegExp(/^\/lessons\/[0-9]+\/tasks\/[0-9]+\/?$/)
        // taskPage
    ),
}
