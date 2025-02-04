"use strict"

const TASK_NUMBER = 1

const firstNumber = parseInt(prompt("Enter first number, please", 0))
const secondNumber = parseInt(prompt("Enter second number, please", 0))

const sum = firstNumber + secondNumber
const multiple = firstNumber * secondNumber
const divide = firstNumber / secondNumber

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
							<p>Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці</p>
						</li>
						<li>
							<h3>Solution of Task ${TASK_NUMBER}</h3>
							<table>
								<tr>
									<th>Sum</th>
									<th>Multiple</th>
									<th>Division</th>
								</tr>
								<tr>
									<td>${sum.toFixed(2)}</td>
									<td>${multiple.toFixed(2)}</td>
									<td>${divide.toFixed(2)}</td>
								</tr>
							</table>
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
