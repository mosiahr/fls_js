export default class BasicPage {
    constructor(header, footer, ...pageElements) {
        this._header = header
        this._footer = footer
        this._pageElements = pageElements
    }
    getHTML() {
        return `
			<body>
				<div class="wrapper">
					${this._header}
					<main class="page">
						<div class="page__container">
								<div class="page-block">
									${this._pageElements.join("")}
								</div>
						</div>
					</main>
					${this._footer}
				</div>
			</body>`
    }
}
