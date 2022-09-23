import foliolNav from "./folio-nav.js";

// filter the nav list to only show site nav links and not case studies etc
let folioNavArr = Object.values(foliolNav).filter((obj) => {
	return obj.type === "site nav";
});

export default class FolioHeader extends HTMLElement {
	constructor() {
		super();
		// this.attachShadow({ mode: "open" });
		// this.shadowRoot.innerHTML = `
		this.innerHTML = `
			<header class="folio-header flex-row">
				<a href="/" class="folio-header--link flex-row">
					<svg class="md-logotype">
						<use 
							xlink:href="../../global/assets/md-logo.svg#md-logo">
						</use>
					</svg>
				</a>
				<nav class="folio-nav">
					<ul class="folio-nav__list"></ul>
				</nav>
			</header>
		`;
	}
	connectedCallback() {
		// build nav from JSON data
		const navigation = folioNavArr
			.map((obj) => {
				if (obj.icon)
					return `
					<li class="folio-nav__item">
						<a class="folio-nav__link has-icon" href="${obj.linkURL}">
							<span>
								${obj.linkName}
							</span>	
							<svg class="folio-nav__icon">
								<use xlink:href="../../global/assets/icons-sprite.svg${obj.icon}">
								</use>
							</svg>
						</a>
					</li>
				`;
				else
					return `
					<li class="folio-nav__item">
						<a class="folio-nav__link" href="${obj.linkURL}">
							<span>
								${obj.linkName}
							</span>	
						</a>
					</li>
				`;
			})
			.join("");
		this.querySelector(".folio-nav__list").innerHTML = navigation;
		// this.shadowRoot.querySelector(".folio-nav__list").innerHTML =
		// 	navigation;
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
