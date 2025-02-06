"use strict"

const TASK_NUMBER = 3

const valueOneProduct = parseFloat(
  prompt("Enter value of the product, please", 0)
)
const productVolume = parseInt(
  prompt("Enter volume of the products, please", 0)
)
const totalValue = valueOneProduct * productVolume
const vat = totalValue * 0.05

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
							<p>Дано вартість одиниці товару і кількість: Знайти загальну вартість та ПДВ (5% від загальної
								вартості).</p>
						</li>
						<li>
							<h3>Solution of Task ${TASK_NUMBER}</h3>
							<ol>
								<li>Value of One Product: ${valueOneProduct.toFixed(2)}</li>
								<li>Product Volume: ${productVolume}</li>
								<li>Total Volume: ${totalValue.toFixed(2)}</li>
								<li>VAT (5%): ${vat.toFixed(2)}</li>
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
