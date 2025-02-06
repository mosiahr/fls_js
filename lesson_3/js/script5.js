"use strict"

const TASK_NUMBER = 5

const numberSeconds = parseInt(prompt("Enter number of seconds, please", 0))
const numHours = Math.floor(numberSeconds / 3600)
const numMinutes = Math.floor((numberSeconds % 3600) / 60)
const numSec = numberSeconds % 60

document.write(`
<body>
	<div class="wrapper">
		<header class="header">
			<div class="header__container">
				<div class="header__block">
					<a href="../../index.html"><img class="img-home" src="../../img/logo.webp" alt="Home"></a>
					<h1><a class="header__link" href="../index.html">Homework 2</a> / Task ${TASK_NUMBER}</h1>
				</div>
			</div>
		</header>
		<main class="page">
			<div class="page__container">
				<div class="page-block">
					<ol class="page__list">
						<li>
							<h3>Task ${TASK_NUMBER}</h3>
							<p>Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.</p>
						</li>
						<li>
							<h3>Solution of Task ${TASK_NUMBER}</h3>
							<ol>
								<li>Volume of Seconds: ${numberSeconds}</li>
								<li><b>Time Passed:</b> ${numHours}h ${numMinutes}min ${numSec}s</li>
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
