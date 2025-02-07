"use strict"

const TASK_NUMBER = 1

const defaultFirstChildName = "First child"
const defaultSecondChildName = "Second child"

const firstChildName = prompt(
  "Enter first child name, please",
  defaultFirstChildName
)
const firstNumberSweets = parseInt(
  prompt(`How many sweets does ${firstChildName} have ?`, 1)
)

const secondChildName = prompt(
  "Enter second child name, please",
  defaultSecondChildName
)
const secondNumberSweets = parseInt(
  prompt(`How many sweets does ${secondChildName} have ?`, 1)
)

let inputDataFirstChild = ""
const endWordSweetForFirstChild = `${
  Math.abs(firstNumberSweets) === 1 ? "" : "s"
}`

if (firstNumberSweets < 0) {
  inputDataFirstChild = `${firstChildName} has borrowed ${Math.abs(
    firstNumberSweets
  )} sweet${endWordSweetForFirstChild}`
} else if (firstNumberSweets === 0) {
  inputDataFirstChild = `${firstChildName} doesn't have any sweet`
} else if (firstNumberSweets > 0) {
  inputDataFirstChild = `${firstChildName} has ${firstNumberSweets} sweet${endWordSweetForFirstChild}`
}

let inputDataSecondChild = ""
const endWordSweetForSecondChild = `${
  Math.abs(secondNumberSweets) === 1 ? "" : "s"
}`
if (secondNumberSweets < 0) {
  inputDataSecondChild = `${secondChildName} has borrowed ${Math.abs(
    secondNumberSweets
  )} sweet${endWordSweetForSecondChild}`
} else if (secondNumberSweets === 0) {
  inputDataSecondChild = `${secondChildName} doesn't have any sweet`
} else if (secondNumberSweets > 0) {
  inputDataSecondChild = `${secondChildName} has ${secondNumberSweets} sweet${endWordSweetForSecondChild}`
}

let result = ""
if (firstNumberSweets > secondNumberSweets) {
  result = `${firstChildName} has more sweets.`
} else if (firstNumberSweets < secondNumberSweets) {
  result = `${secondChildName} has more sweets.`
} else if (firstNumberSweets === secondNumberSweets) {
  result = "The number of sweets is equal"
}

document.write(`
<body>
	<div class="wrapper">
		<header class="header">
			<div class="header__container">
				<div class="header__block">
					<a href="../../index.html"><img class="img-home" src="../../img/logo.webp" alt="Home"></a>
					<h1><a class="header__link" href="../index.html">Homework 3</a> / Task ${TASK_NUMBER}</h1>
				</div>
			</div>
		</header>
		<main class="page">
			<div class="page__container">
				<div class="page-block">
					<ol class="page__list">
						<li>
							<h3>Task ${TASK_NUMBER}</h3>
							<p>З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести на екран імʼя тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.</p>
						</li>
						<li>
							<h3>Solution of Task ${TASK_NUMBER}</h3>
							
							<ol>
								<li>${inputDataFirstChild}</li>
								<li>${inputDataSecondChild}</li>
								<li>${result}</li>
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
