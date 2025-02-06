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

// const inputDataFirstChild = `${firstChildName} has ${firstNumberSweets} sweet${
//   firstNumberSweets === 1 ? "" : "s"
// }`

let inputDataFirstChild = ""
const endWordSweetForFirstChild = `${
  Math.abs(firstNumberSweets) === 1 ? "" : "s"
}`
switch (firstNumberSweets) {
  case firstNumberSweets < 0:
    inputDataFirstChild = `${firstChildName} has borrowed ${Math.abs(
      firstNumberSweets
    )} sweet${endWordSweetForFirstChild}`
    break
  case firstNumberSweets === 0:
    inputDataFirstChild = `${firstChildName} doesn't have any sweet`
    break
  case firstNumberSweets > 0:
    console.log("HI")

    inputDataFirstChild = `${firstChildName} has ${firstNumberSweets} sweet${endWordSweetForFirstChild}`
    break
  default:
    break
}
console.log(inputDataFirstChild)
console.log(Math.abs(firstNumberSweets))

let inputDataSecondChild = ""
const endWordSweetForSecondChild = `${
  Math.abs(secondNumberSweets) === 1 ? "" : "s"
}`
switch (secondNumberSweets) {
  case secondNumberSweets < 0:
    inputDataSecondChild = `${secondChildName} has borrowed ${Math.abs(
      secondNumberSweets
    )} sweet${endWordSweetForSecondChild}`
    break
  case secondNumberSweets === 0:
    inputDataSecondChild = `${secondChildName} doesn't have any sweet`
    break
  case secondNumberSweets > 0:
    inputDataSecondChild = `${secondChildName} has ${secondNumberSweets} sweet${endWordSweetForSecondChild}`
    break
  default:
    break
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
