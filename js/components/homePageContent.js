export default class HomePageContent {
    static _sectionHeroClassNames = ["page-block__hero", "hero"]
    static _divHeroTitle = ["hero__title"]
    static _sectionLendingBlockClassNames = [
        "page-block__landing-block",
        "landing-block",
    ]
    static _lendingBlockClassNames = ["landing-block__lessons"]

    // static get topTitle() {
    //     return this._topTitle
    // }
    // static set topTitle(value) {
    //     this._topTitle = value
    // }

    // static get lendingTitle() {
    //     return this._lendingTitle
    // }
    // static set lendingTitle(value) {
    //     this._lendingTitle = value
    // }

    static showSectionHero(heroTitle) {
        const sectionHero = document.createElement("section")
        this._sectionHeroClassNames.forEach((el) =>
            sectionHero.classList.add(el)
        )

        const divHeroTitle = document.createElement("div")
        this._divHeroTitle.forEach((el) => divHeroTitle.classList.add(el))
        divHeroTitle.textContent = heroTitle
        sectionHero.append(divHeroTitle)

        return sectionHero
    }

    static showSectionLendingBlock(sectionTitle, href) {
        const section = document.createElement("section")
        this._sectionLendingBlockClassNames.forEach((el) =>
            section.classList.add(el)
        )

        const a = document.createElement("a")
        a.href = href

        const title = document.createElement("div")
        this._lendingBlockClassNames.forEach((el) => title.classList.add(el))
        title.textContent = sectionTitle

        a.append(title)

        section.append(a)

        return section
    }
}
