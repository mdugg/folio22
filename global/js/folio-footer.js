import foliolNav from "./folio-nav.js";

// filter the nav list to only show site nav links and not case studies etc
let folioNavArr = Object.values(foliolNav).filter((obj) => {
	return obj.type === "site nav";
});

export default class FolioFooter extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
			<footer class="folio-footer flex-row">
                <p>use props</p>
				<nav class="folio-nav">
					<ul class="folio-nav__list"></ul>
				</nav>
			</footer>
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
	}
}

window.customElements.define("folio-footer", FolioFooter);
