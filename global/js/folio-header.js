import foliolNav from "./folio-nav.js";
import MDlogoType from "./md-logotype.js";
import IconSprite from "./icon-sprite.js";

// filter the nav list to only show site nav links and not case studies etc
let folioNavArr = Object.values(foliolNav).filter((obj) => {
	return obj.type === "site nav";
});

export default class FolioHeader extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
			<style>
				:host {
					display: flex;
				}
				.folio-header {
					font-family: var(--text-sans);
					display: flex;
					justify-content: space-between;
					width: 100%;
				}
				.folio-nav {
					display: flex;
				}
				.folio-nav__list {
					display: flex;
					flex-direction: row;
					list-style: none;
					padding:0;
					margin:0;
				}
				.folio-nav__item {
					margin-right: .5rem;
				}
				.folio-nav__link {
					color: inherit;
					text-decoration: none;
				}
			</style>
			<header class="folio-header">
				<md-logotype></md-logotype>
				<nav class="folio-nav">
					<ul class="folio-nav__list"></ul>
				</nav>
				<icon-sprite>
					  <use xlink:href="#pdf-thin"></use>
				</icon-sprite>
			</header>
		`;
	}
	connectedCallback() {
		// build nav from JSON data
		const navigation = folioNavArr
			.map((obj) => {
				return `
					<li class="folio-nav__item">
						<a class="folio-nav__link" href="${obj.linkURL}">
							${obj.linkName}
						</a>
					</li>
				`;
			})
			.join("");
		this.shadowRoot.querySelector(".folio-nav__list").innerHTML =
			navigation;
		// get svg sprite from local file
		// 1
		// const xhr = new XMLHttpRequest();
		// xhr.open("GET", "./assets/icons-sprite.svg", true);
		// xhr.send();
		// xhr.onload = () => {
		// 	console.log(xhr.responseText);
		// };
		// 2
		// var x = new XMLHttpRequest();
		// x.open("GET", "../../global/assets/icons-sprite.svg", true);
		// x.onreadystatechange = function () {
		// 	if (x.readyState == 4) {
		// 		console.log(x.responseText);
		// 		callback(JSON.parse(x.responseText));
		// 	}
		// };
		// x.send();

		// function callback(resp) {
		// 	console.log(resp);
		// }
	}
}

window.customElements.define("folio-header", FolioHeader);
