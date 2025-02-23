export default function createPage(header, page, footer) {
  return `<body>
				<div class="wrapper">
					 ${header}
					 <main class="page">
						  <div class="page__container">
								<div class="page-block">
									 ${page}
								</div>
						  </div>
					 </main>
					 ${footer}
				</div>
		  </body>`
}
