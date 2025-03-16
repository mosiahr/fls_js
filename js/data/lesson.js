//        {
//            "id": 3,
//            "name": "Lesson 8",
//            "title": "Arrays",
//            "tasks": [
//                "Дано масив, який містить оцінки з К предметів. Знайти середній бал і зʼясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).",
//                "Дано масив, який зберігає кількість відвідувачів магазину протягом тижня.\nВивести на екран:\nномери днів, протягом яких кількість відвідувачів була меншою за 20;\nномери днів, коли кількість відвідувачів була мінімальною;\nномери днів, коли кількість відвідувачів була мінімальною;\nзагальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.",
//                "Дано масив імен учнів. Зʼясувати скільки разів зустрічається імʼя «Іван».",
//                "Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :\nпочинаються на букву «А»;\nперша і остання літери співпадають;\nскладаються з більше ніш 5 символів;"
//            ]
//        }

export default class Lesson {
    constructor(id, name, title = "", tasks = [], available) {
        this._id = id
        this._name = name
        this._title = title
        this._tasks = tasks
        this._available = available
    }

    get id() {
        return this._id
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }

    get title() {
        return this._title
    }

    set title(value) {
        this._title = value
    }

    get tasks() {
        return this._tasks
    }

    set tasks(value) {
        this._tasks = value
    }

	get available() {
        return this._available
    }

    set available(value) {
        this._available = value
    }
}
