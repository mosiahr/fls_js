import Route from "./Route.js"
import { homePage } from "../page/homePage.js"
import { lessonsPage } from "../page/lessonsPage.js"
import { notFoundPage } from "../page/index.js"

export const routes = {
    home: new Route(new RegExp(/^\/?$/), "home", homePage),
    homeIndex: new Route(new RegExp(/^\/index\.html$/), "homeIndex", homePage),
    lessons: new Route(new RegExp(/^\/lessons\/?$/), "lessons", lessonsPage),
    lesson: new Route(
        new RegExp(/^\/lessons\/[0-9]+\/?$/),
        "lesson",
        "lessonPage"
    ),
    tasks: new Route(
        new RegExp(/^\/lessons\/[0-9]+\/tasks\/?$/),
        "tasks",
        "tasksPage",
        false
    ),
    task: new Route(
        new RegExp(/^\/lessons\/[0-9]+\/tasks\/[0-9]+\/?$/),
        "task",
        "taskPage"
    ),
    notFound: new Route(new RegExp(), "notFound", notFoundPage),
}
