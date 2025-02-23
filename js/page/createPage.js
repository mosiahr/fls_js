export default function createPage(header, footer, ...pageElements) {
    return `<body>
				<div class="wrapper">
					 ${header}
					 <main class="page">
						  <div class="page__container">
								<div class="page-block">
									 ${pageElements.join("")}
								</div>
						  </div>
					 </main>
					 ${footer}
				</div>
		  </body>`
}
