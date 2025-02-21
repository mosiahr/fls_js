"use strict"

export default function createMainPage(mainPage) {
  return `
	<main class="page">
		<div class="page__container">
			<div class="page-block">
				<h2 class="page-block__title-list">Required tasks</h2>
				${mainPage}
			</div>
		</div>
	</main>`
}
