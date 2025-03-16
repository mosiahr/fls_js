export default class BasicPage {
    constructor(header, footer, ...pageElements) {
        this.header = header
        this.footer = footer
        this.pageElements = pageElements
    }
    getHTML() {
        return `
			<body>
				<div class="wrapper">
					${this.header}
					<main class="page">
						<div class="page__container">
								<div class="page-block">
									${this.pageElements.join("")}
								</div>
						</div>
					</main>
					${this.footer}
				</div>
			</body>`
    }

    // get pageElements() {
    //     return this.pageElements
    // }

    // set pageElements(arr) {
    //     this.pageElements = arr
    // }
}
