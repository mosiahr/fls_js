export default class Breadcrumb {
    _ulClassNames = ["page__breadcrumb", "breadcrumb"]
    _liClassNames = ["breadcrumb__item"]
    _aClassNames = ["breadcrumb__link"]
    _spanClassNames = []
    _linkList

    constructor(linkList = []) {
        this.linkList = linkList
    }

    get ulClassNames() {
        return this._ulClassNames
    }
    set ulClassNames(value) {
        this._ulClassNames = value
    }
    addClassName(value) {
        this._ulClassNames.push(value)
    }
    removeClassName(value) {
        this._ulClassNames.filter((el) => el !== value)
    }

    get linkList() {
        return this._linkList
    }
    set linkList(value) {
        this._linkList = value
    }

    get getBreadcrumbElement() {
        const ul = document.createElement("ul")
        this._ulClassNames.forEach((cls) => ul.classList.add(cls))

        for (const link of this._linkList) {
            const li = document.createElement("li")
            this._liClassNames.forEach((cls) => li.classList.add(cls))

            const a = document.createElement("a")
            if (link.href) a.href = link.href
            this._aClassNames.forEach((cls) => a.classList.add(cls))

            const span = document.createElement("span")
            this._spanClassNames.forEach((cls) => span.classList.add(cls))
            span.textContent = link.title

            a.append(span)
            li.append(a)
            ul.append(li)
        }

        return ul
    }
}
