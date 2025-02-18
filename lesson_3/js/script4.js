"use strict"

const HOMEWORK_NUMBER = 3
const TASK_NUMBER = 4

let result = ""
const age = parseInt(prompt("Enter you age, please: "))

if (isNaN(age) || age < 1) {
  result = "Sorry, you entered an invalid number."
} else {
  switch (true) {
    case age < 6:
      result = "You are a child in kindergarten"
      break
    case age < 18:
      result = "You are a student in school"
      break
    case age < 23:
      result = "You are a student in university"
      break
    case age < 66:
      result = "You are employee"
      break
    case age >= 66:
      result = "You are retired"
    default:
      break
  }
}

document.write(`
<body>
	<div class="wrapper">
		<header class="header">
			<div class="header__container">
				<div class="header__block">
					<a href="../../index.html"><img class="img-home" src="../../img/logo.webp" alt="Home"></a>
					<h1><a class="header__link" href="../index.html">Homework ${HOMEWORK_NUMBER}</a> / Task ${TASK_NUMBER}</h1>
				</div>
			</div>
		</header>
		<main class="page">
			<div class="page__container">
				<div class="page-block">
					<ol class="page__list">
						<li>
							<h3>Task ${TASK_NUMBER}</h3>
							<p>3 клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем,
								студентом, працівником, пенсіонером).</p>
						</li>
						<li>
							<h3>Solution of Task ${TASK_NUMBER}</h3>
							<ol>
								<li>Your age is ${age}</li>
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
