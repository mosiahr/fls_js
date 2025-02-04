"use strict"

const TASK_NUMBER = 4

const numberСentimeters = parseInt(
  prompt("Enter number of centimeters, please", 0)
)
const numberMeters = numberСentimeters / 100
const numberKilometers = numberСentimeters / 100000

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
							<p>Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.</p>
						</li>
						<li>
							<h3>Solution of Task ${TASK_NUMBER}</h3>
							<ol>
								<li>Volume of Centimeters: ${numberСentimeters}cm</li>
								<li>Volume of Meters: ${numberMeters}m</li>
								<li>Volume of Kilometers: ${numberKilometers}km</li>
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
