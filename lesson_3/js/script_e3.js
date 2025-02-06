"use strict"

const TASK_STRING = "Extra 3"
const [_, TASK_NUMBER] = TASK_STRING.split(" ")

const defaultFirstItem = 30.55
const defaultSecondItem = 105
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

const valueFirstItem = priceFirstItem * volumeFirstItem
const valueSecondItem = priceSecondItem * volumeSecondItem
const total = Math.round((valueFirstItem + valueSecondItem) * 100) / 100

const resultRenderFirstItem =
  volumeFirstItem > 1
    ? `<p>${priceFirstItem.toFixed(2)} x ${volumeFirstItem}</p>`
    : ""

const resultRenderSecondItem =
  volumeSecondItem > 1
    ? `<p>${priceSecondItem.toFixed(2)} x ${volumeSecondItem}</p>`
    : ""

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
							<p>З клавіатури вводяться вартість одиниці та кількість одиниць двох товарів.
								Вивести на екран вартість кожного з видів товарів окремо і загальну вартість.</p>
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
										<p>04/02/2025 1:19</p>
									</div>
									<div class="item-receipt__value">1-358716</div>
								</div>
							</div>
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
