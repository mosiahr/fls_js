"use strict"

const HOMEWORK_NUMBER = 3
const TASK_NUMBER = 2

const defaultPriceItem = 25.5
const defaultAmountMoney = 100

const priceItem =
  Math.round(
    parseFloat(prompt("Enter price of item, please", defaultPriceItem)) * 100
  ) / 100

const amountMoney =
  Math.round(
    parseFloat(prompt("Enter amount of money, please", defaultAmountMoney)) *
      100
  ) / 100

const change = amountMoney > priceItem ? amountMoney - priceItem : 0

let result = ""
if (priceItem > amountMoney) {
  result = "Sorry, you don't have enough money."
} else if (priceItem === amountMoney) {
  result = "OK! You don't have a change. Do you need a receipt?"
} else if (priceItem + 4 < amountMoney) {
  result = `OK! You have a change ${change}. Would you like to buy a lottery?`
} else if (priceItem < amountMoney) {
  result = `OK! You have a change ${change}. Do you need a receipt?`
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
							<p>3 клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у
								покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.</p>
						</li>
						<li>
							<h3>Solution of Task ${TASK_NUMBER}</h3>
							<ol>
								<li>Price of item = ${priceItem}</li>
								<li>Amount of money = ${amountMoney}</li>
								<li>Change = ${change}</li>
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
