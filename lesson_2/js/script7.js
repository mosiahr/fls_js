"use strict"

const TASK_NUMBER = 7

const minMonth = 1,
  maxMonth = 12
const minDay = 0,
  maxDay = 6
const randomManth =
  minMonth + Math.floor(Math.random() * (maxMonth - minMonth + 1))
const randomDay = minDay + Math.floor(Math.random() * (maxDay - minDay + 1))
const sumRandomMonthAndRandomDay = randomManth + randomDay

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
							<p>Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).</p>
						</li>
						<li>
							<h3>Solution of Task ${TASK_NUMBER}</h3>
							<ol>
								<li>Random Number of Month (1 to 12): ${randomManth}</li>
								<li>Random Number of Day (0 to 6): ${randomDay}</li>
								<li>Sum: ${sumRandomMonthAndRandomDay}</li>
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
