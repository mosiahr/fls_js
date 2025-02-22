export default function createHeader(homeworkNumber) {
  return `
	<header class="header">
		<div class="header__container">
			<div class="header__block">
				<a href="../index.html"><img class="img-home" src="../img/logo.webp" alt="Home"></a>
				<h1>Homework ${homeworkNumber}</h1>
			</div>
		</div>
	</header>`
}
