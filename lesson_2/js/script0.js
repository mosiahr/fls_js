"use strict"

const TASK_NUMBER = 0

const a = parseInt(prompt("Enter first number, please", 0))
const b = parseInt(prompt("Enter second number, please", 0))
const c = parseInt(prompt("Enter third number, please", 0))

const s1 = a + 12 + b
const s2 = Math.sqrt((a + b) / (2 * a))
const s3 = Math.cbrt((a + b) * c)
const s4 = Math.sin(a / (-1 * b))

document.write(`
<body>
	<div class="wrapper">
		<header class="header">
			<div class="header__container">
				<div class="header__block">
					<a href="../../index.html"><img class="img-home" src="../../img/logo.webp" alt="Home"></a>
					<h1>Homework 2 / Task ${TASK_NUMBER}</h1>
				</div>
			</div>
		</header>
		<main class="page">
			<div class="page__container">
				<div class="page-block">
					<ol class="page__list">
						<li>
							<h3>Task ${TASK_NUMBER}</h3>
							<p>Обчислити значення виразів</p>
							<img src="../img/task0.png" alt="Task 0">
						</li>
						<li>
							<h3>Answer of Task ${TASK_NUMBER}</h3>
							<ol>
								<li>S1 = ${s1}</li>
								<li>S2 = ${s2.toFixed(2)}</li>
								<li>S3 = ${s3.toFixed(2)}</li>
								<li>S4 = ${s4.toFixed(2)}</li>
							</ol>
						</li>
						<li class="reload">
							<a href="task${TASK_NUMBER}.html"><img src="../../img/circular-arrow.svg" alt="Reload"></a>
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
