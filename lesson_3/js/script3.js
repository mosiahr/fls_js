"use strict"

const HOMEWORK_NUMBER = 3
const TASK_NUMBER = 3
const NOT_CORRECTED_NUMBER =
  "Sorry, you entered not corrected number.\nYou need to enter a number between 1 and 5."

const minNumber = 1
const maxNumber = 5

const randomNumber =
  minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))

const firstAttemptNumber = parseInt(
  prompt(
    "A number from 1 to 5 is randomly generated. \nFirst attempt. \nEnter your number: "
  )
)

let result = ""
let inputDataSecondAttemptNumber = ""

if (firstAttemptNumber > 0 && firstAttemptNumber < 6) {
  if (randomNumber === firstAttemptNumber) {
    result = "You guessed the number!"
  } else {
    const secondAttemptNumber = parseInt(
      prompt(
        "Sorry! You don't guess the number! \nYou have one more attempt. \nSecond attempt. \nEnter your number: "
      )
    )

    if (secondAttemptNumber > 0 && secondAttemptNumber < 6) {
      if (randomNumber === secondAttemptNumber) {
        result = "You guessed the number!"
      } else {
        result = "Sorry! You don't guess the number!"
      }
      inputDataSecondAttemptNumber = `<li>Your second number = ${secondAttemptNumber}</li>`
    } else {
      result = NOT_CORRECTED_NUMBER
    }
  }
} else {
  result = NOT_CORRECTED_NUMBER
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
							<p>Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число
								за 2 спроби.</p>
						</li>
						<li>
							<h3>Solution of Task ${TASK_NUMBER}</h3>
							<ol>
								<li>Your first number = ${firstAttemptNumber}</li>
								${inputDataSecondAttemptNumber}
								<li>Random Number: ${randomNumber}</li>
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
