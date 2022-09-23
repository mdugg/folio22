export default class DCLoutcomes extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.getModel();
	}
	disconnectedCallback() {}
	getModel() {
		return new Promise((res, rej) => {
			fetch("../../content/decoupledLive.json")
				.then((data) => data.json())
				.then((json) => {
					this.render(json);
					res();
				})
				.catch((error) => rej(error));
		});
	}
	render(data) {
		this.innerHTML = `	
			<section class="flex-col--center">
				<div class="folio-content__text mt4">
					<h3 class="h3-content_section" 
						id="${data.outcomes.section}">
							${data.outcomes.section}
					</h3>	
					<h2 class="h2 mt025">${data.outcomes.sectionTitle}</h2>
					${Object.values(data.outcomes.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
					<figure class="flex-row flex-row--center">
						<svg class="icon-figma">
							<use xlink:href="../../global/assets/logos-sprite.svg#logo-videeo">
							</use>
						</svg>
					</figure>
					<div class="btn-primary--group">
						<a href="${data.outcomes.linkSite}" target="_blank" class="btn-primary--link">
							Marketing site
							<svg class="icon-external">
								<use xlink:href="../../global/assets/icons-sprite.svg#icon-external">
								</use>
							</svg>
						</a>
						<a href="${data.outcomes.linkApp}" target="_blank" class="btn-primary--link">
							App login
							<svg class="icon-external">
								<use xlink:href="../../global/assets/icons-sprite.svg#icon-external">
								</use>
							</svg>
						</a>
					</div>
				</div>
			</section>
		`;
	}
}
window.customElements.define("dcl-outcomes", DCLoutcomes);
