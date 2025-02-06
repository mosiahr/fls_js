"use strict"

const TASK_STRING = "Extra 2"
const [_, TASK_NUMBER] = TASK_STRING.split(" ")

const defaultSalary = 2920
const defaultSubsistenceMinimum = 3028

const salary = parseInt(prompt("Enter salary, please", defaultSalary))
const subsistenceMinimum = parseInt(
  prompt("Enter subsistence minimum, please", defaultSubsistenceMinimum)
)
const socialPay = subsistenceMinimum - salary

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
							<p>З клавіатури вводиться розмір заробітної плати та розмір прожиткового мінімуму. Визначити розмір
								соціальної допомоги (ввжаємо, що заробітна плата є меншою).</p>
						</li>
						<li>
							<h3>Solution of Task ${TASK_STRING}</h3>
							<ol>
								<li>Salary: ${salary}UAH</li>
								<li>Subsistence Minimum: ${subsistenceMinimum}UAH</li>
								<li>Social Payment: ${socialPay}UAH</li>
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
