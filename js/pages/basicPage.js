import { hljs } from "../index.js"

export default class BasicPage {
    constructor(header, breadcrumb = "", footer, ...pageElements) {
        this.header = header
        this.breadcrumb = breadcrumb
        this.footer = footer
        this.pageElements = pageElements
    }
    getHTML() {
        const breadcrumb = this.breadcrumb
            ? this.breadcrumb?.getBreadcrumbElement?.outerHTML
            : ""
        return `
			<body>
				<div class="wrapper">
					${this.header}
					<main class="page">
						<div class="page__container">
								<div class="page-block">
									${breadcrumb}
									${this.pageElements.join("")}
								</div>
						</div>
					</main>
					${this.footer}
				</div>
			</body>`
    }

    updatePageElements(...elems) {
        elems.forEach((el) => this.pageElements.push(el))
    }

    createHighlightedCode(code) {
        const highlightedCode = hljs.highlight(code.toString(), {
            language: "javascript",
        }).value
        return `<pre><code>${highlightedCode}</code></pre>`
    }

    // get pageElements() {
    //     console.log("RRR")

    //     return this.pageElements
    // }

    // set pageElements(elems) {
    //     console.log(elems)

    //     elems.forEach((el) => this.pageElements.push(el))
    //     // this.pageElements = arr
    // }

    getClassName() {
        return this.constructor.name
    }
}
