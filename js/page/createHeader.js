export default function createHeader(...elements) {
  return `
	<header class="header">
		<div class="header__container">
			<div class="header__block">
				${elements.join("")}
			</div>
		</div>
	</header>`
}
