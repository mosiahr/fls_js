"use strict"

const firstNumber = parseInt(prompt("Enter first number, please", 0))
const secondNumber = parseInt(prompt("Enter second number, please", 0))

const sum = firstNumber + secondNumber
const mult = firstNumber * secondNumber

document.write(`<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Lesson 2 / Task 0</title>
	<link rel="stylesheet" href="../css/style.css">
	<script src="../js/script0.js"></script>
</head>

<body>
	<div class="wrapper">
		<header class="header">
			<div class="header__container">
				Homework 2 / Task 0
			</div>
		</header>
		<main class="page">
			<div class="page__container">
				<div class="page-block">
					<ol class="page__list">
						<li>
							<h3>Task 0</h3>
							<p>Обчислити значення виразів</p>
							<img src="../img/task0.png" alt="Task 0">
						</li>
						<li>
							<h3>Answer of Task 0</h3>
							<ol>
								<li>S1 = ${s1}</li>
								<li>S2 = ${s2.toFixed(2)}</li>
								<li>S3 = ${s3.toFixed(2)}</li>
								<li>S4 = ${s4.toFixed(2)}</li>
							</ol>

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
</body>

</html>`)
