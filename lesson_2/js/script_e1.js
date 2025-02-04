"use strict"

const TASK_STRING = "Extra 1"
const [_, TASK_NUMBER] = TASK_STRING.split(" ")
// console.log(_, TASK_NUMBER)

const defaultWidthView = 1200
const defaultNumberElement = 3

const widthView = parseInt(
  prompt("Enter width of view, please", defaultWidthView)
)
const numberElement = parseInt(
  prompt("Enter number of elements, please", defaultNumberElement)
)
const widthElement = Math.floor(widthView / numberElement)

document.write(`
<body>
	<div class="wrapper">
		<header class="header">
			<div class="header__container">
				<div class="header__block">
					<a href="../../index.html"><img class="img-home" src="../../img/logo.webp" alt="Home"></a>
					<h1><a class="header__link" href="../index.html">Homework 2</a> / Task ${TASK_STRING}</h1>
				</div>
			</div>
		</header>
		<main class="page">
			<div class="page__container">
				<div class="page-block">
					<ol class="page__list">
						<li>
							<h3>Task ${TASK_STRING}</h3>
							<p>Дано ширину екрана та кількість елементів, які повинні бути відображені у рядку. Визначити ширину
								елементів, які повинні бути відображені у цьому рядку.</p>
						</li>
						<li>
							<h3>Solution of Task ${TASK_STRING}</h3>
							<ol>
								<li>Width of view: ${widthView}px</li>
								<li>Number of elements: ${numberElement}</li>
								<li>Width Element: ${widthElement}px</li>
							</ol>
						</li>
						<li class="reload">
							<a href="task_e${TASK_NUMBER}.html">
								<img src="../../img/circular-arrow.svg" alt="Reload">
							</a>
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
</body>`)
