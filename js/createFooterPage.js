"use strict"

export default function createFooterPage(footerInfo) {
  return `
	<footer class="footer">
		<div class="footer__container">
			<span>${footerInfo}</span>
		</div>
	</footer>
`
}
