"use strict"

const TASK_NUMBER = 6
const defaultFirstItem = 20.91
const defaultSecondItem = 55
const defaultThirdItem = 32.2
const defaultVolume = 1

const priceFirstItem =
  Math.round(
    parseFloat(prompt("Enter price of first item, please", defaultFirstItem)) *
      100
  ) / 100

const volumeFirstItem = parseInt(
  prompt("Enter volume of first item, please", defaultVolume)
)

const priceSecondItem =
  Math.round(
    parseFloat(
      prompt("Enter price of second item, please", defaultSecondItem)
    ) * 100
  ) / 100

const volumeSecondItem = parseInt(
  prompt("Enter volume of second item, please", defaultVolume)
)

const priceThirdItem =
  Math.round(
    parseFloat(prompt("Enter price of third item, please", defaultThirdItem)) *
      100
  ) / 100

const volumeThirdItem = parseInt(
  prompt("Enter volume of third item, please", defaultVolume)
)

const valueFirstItem = priceFirstItem * volumeFirstItem
const valueSecondItem = priceSecondItem * volumeSecondItem
const valueThirdItem = priceThirdItem * volumeThirdItem
const total =
  Math.round((valueFirstItem + valueSecondItem + valueThirdItem) * 100) / 100

const resultRenderFirstItem =
  volumeFirstItem > 1
    ? `<p>${priceFirstItem.toFixed(2)} x ${volumeFirstItem}</p>`
    : ""

const resultRenderSecondItem =
  volumeSecondItem > 1
    ? `<p>${priceSecondItem.toFixed(2)} x ${volumeSecondItem}</p>`
    : ""

const resultRenderThirdItem =
  volumeThirdItem > 1
    ? `<p>${priceThirdItem.toFixed(2)} x ${volumeThirdItem}</p>`
    : ""

document.write(`
<body>
	<div class="wrapper">
		<header class="header">
			<div class="header__container">
				<div class="header__block">
					<a href="../../index.html"><img class="img-home" src="../../img/logo.webp" alt="Home"></a>
					<h1>Homework 2 / Task ${TASK_NUMBER}</h1>
				</div>
			</div>
		</header>
		<main class="page">
			<div class="page__container">
				<div class="page-block">
					<ol class="page__list">
						<li>
							<h3>Task ${TASK_NUMBER}</h3>
							<p>3 клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість
								кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи
								елементи розмітки.</p>
						</li>
						<li>
							<h3>Solution of Task ${TASK_NUMBER}</h3>
							<div class="receipt">
								<img class="receipt__logo" src="../img/Tesco-Ireland.jpg" alt="Tesco Logo">
								<div class="receipt__item item-receipt">
									<div class="item-receipt__title">
										<p>Item 1</p>
										${resultRenderFirstItem}
									</div>
									<div class="item-receipt__value">${valueFirstItem.toFixed(2)}</div>
								</div>
								<div class="receipt__item item-receipt">
									<div class="item-receipt__title">
										<p>Item 2</p>
										${resultRenderSecondItem}
									</div>
									<div class="item-receipt__value">${valueSecondItem.toFixed(2)}</div>
								</div>
								<div class="receipt__item item-receipt">
									<div class="item-receipt__title">
										<p>Item 3</p>
										${resultRenderThirdItem}
									</div>
									<div class="item-receipt__value">${valueThirdItem.toFixed(2)}</div>
								</div>
								<div class="receipt__item item-receipt item-receipt--total item-receipt--bold">
									<div class="item-receipt__title">
										<p>Total</p>
									</div>
									<div class="item-receipt__value">${total.toFixed(2)}</div>
								</div>
								<div class="receipt__item item-receipt item-receipt--bold">
									<div class="item-receipt__title">
										<p>Pay by Credit Card</p>
									</div>
									<div class="item-receipt__value">${total.toFixed(2)}</div>
								</div>
								<div class="receipt__item item-receipt item-receipt--bold">
									<div class="item-receipt__title">
										<p>Change</p>
									</div>
									<div class="item-receipt__value">0.00</div>
								</div>
								<div class="receipt__item item-receipt item-receipt--small">
									<div class="item-receipt__title">
										<p>31/01/2025 1:06</p>
									</div>
									<div class="item-receipt__value">1-358716</div>
								</div>
							</div>
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
