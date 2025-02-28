import createHeader from "./createHeader.js"
import createElem from "./createElem.js"
import createList from "./createList.js"
import createFooter from "./createFooter.js"

export default function createListPage(
  homeworkNumber,
  items,
  footerInfo = "© 2025 Gregory Mosia"
) {
  return `<body>
				<div class="wrapper">
					 ${createHeader(homeworkNumber)}
					 
					 <main class="page">
						  <div class="page__container">
								<div class="page-block">
									 ${createElem(
										"Required tasks",
										"page-block__title-list"
									 )}
									 ${createList(items)}
								</div>
						  </div>
					 </main>
					 
					 ${createFooter(footerInfo)}
				</div>
		  </body>`
}

export function createTaskPage(
  homeworkNumber,
  taskNumber,
  taskDefinition,
  renderResult
) {
  document.body.innerHTML = `
		 <body>
			 <div class="wrapper">
				 <header class="header">
					 <div class="header__container">
						 <div class="header__block">
							 <a href="../../index.html"><img class="img-home" src="../../img/logo.webp" alt="Home"></a>
							 <h1><a class="header__link" href="../index.html">Homework ${homeworkNumber}</a> / Task ${taskNumber}</h1>
						 </div>
					 </div>
				 </header>
				 <main class="page">
					 <div class="page__container">
						 <div class="page-block">
							 <ol class="page__list">
								 <li>
									 <h3>Task ${taskNumber}</h3>
									 <p>${taskDefinition}</p>
								 </li>
								 <li>
									 <h3>Solution of Task ${taskNumber}</h3>
									 ${renderResult}
								 </li>
								 <li class="reload">
									 <a href="task${taskNumber}.html"><img src="../../img/circular-arrow.svg" alt="Reload"></a>
								 </li>
							 </ol>
		 
						 </div>
					 </div>
				 </main>
				 <footer class="footer">
					 <div class="footer__container">
						 <span>© 2025 Gregory Mosia</span>
					 </div>
				 </footer>
			 </div>
		 </body>`
}
