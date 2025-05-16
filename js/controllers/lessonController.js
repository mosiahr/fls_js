import {
  PROJECT_FOLDER,
  NUMBER_CHARACTERS_FOR_TASK_DESCRIPTION_LIMIT,
} from '../config.js'
import { Page } from '../pages/index.js'
import { TaskCard } from '../components/index.js'
import { limitString } from '../utils.js'
import Controller from './controller.js'
import { createList, PageTitle, Breadcrumb } from '../components/index.js'

export default class LessonController extends Controller {
  constructor(page, objData, id) {
    super(page, objData)
    this.id = id
    this.lessonData = objData.get(id - 1)
    this.lessonPage = new this.page()
    this.lessonPage.breadcrumb = this.#createBreadcrumb()
    this.setDocumentTitle(this.getTitleName() || this.lessonData._name)
  }

  getTitleName() {
    return this.lessonData._title
  }

  #createBreadcrumb() {
    return new Breadcrumb([
      {
        href: `/${PROJECT_FOLDER}/#`,
        title: 'Home',
      },
      {
        href: `/${PROJECT_FOLDER}/#/lessons`,
        title: 'Lessons',
      },
      {
        title: this.lessonData._name,
      },
    ])
  }

  show() {
    this.lessonPage.updatePageElements(
      new PageTitle(this.lessonData.name, this.lessonData.title).render()
        ?.outerHTML
    )
    this.lessonPage.updatePageElements(this.createTaskList())
    return this.lessonPage.getHTML()
  }

  createTaskList() {
    const taskArr = []
    const tasks = this.lessonData.tasks

    for (const task of tasks) {
      if (task.available) {
        const tagNameList = task.tags.map((tag) => {
          if (tag.available) return tag.name
        })

        const taskEl = new TaskCard(
          task,
          `./#/tasks/${task.id + 1}`,
          tagNameList
        )
        taskArr.push(taskEl.getTaskCardElement.outerHTML)
      }
    }
    return createList(taskArr, 'page__list')
  }
}
