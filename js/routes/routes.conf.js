import Route from "./Route.js"
import { PROJECT_FOLDER } from "../config.js"
import { Data, LessonModel, TaskModel } from "../data/index.js"
import {
    HomePageController,
    LessonListController,
    LessonController,
    TaskController,
} from "../controllers/index.js"

export const routes = {
    home: new Route(
        new RegExp(
            `^\/?$|^\/${PROJECT_FOLDER}\/?$|^\/${PROJECT_FOLDER}\/index\.html$`
        ),
        HomePageController,
        TaskModel,
        true
    ),
    lessons: new Route(
        new RegExp(/^\/lessons\/?$/),
        LessonListController,
        LessonModel
    ),
    lesson: new Route(
        // new RegExp(/^\/lessons\/[0-9]+\/?$/),
        new RegExp(/^\/lessons\/(?<id>[0-9]+)\/?$/),
        LessonController,
        LessonModel
    ),
    tasks: new Route(new RegExp(/^\/tasks\/?$/), null, TaskModel, false),
    task: new Route(
        new RegExp(
            /^\/tasks\/(?<id>[0-9]+)\/?(\/solutions\/(?<solutionId>[0-9]+)\/?)?$/
        ),
        TaskController,
        TaskModel
    ),
}
