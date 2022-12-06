// https://raw.githubusercontent.com/mdugg/folio22/main/content/webstore.json
// ../../content/webstore.json

export default class WSvalidation extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.getModel();
	}
	disconnectedCallback() {
		this.btnFigma.removeEventListener("click", this.showModal);
	}
	getModel() {
		return new Promise((res, rej) => {
			fetch(
				"https://raw.githubusercontent.com/mdugg/folio22/main/content/webstore.json"
			)
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
                    <div class="h3-content_section" 
                        id="${data.validation.section}">
                            ${data.validation.section}
                    </div>	
                    <h2 class="h2 mt025">${data.validation.sectionTitle}</h2>	
                    ${Object.values(data.validation.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
					<figure class="">
						<img src="${data.validation.facebookPost}" 
							alt="${data.validation.facebookPostAlt}">
						<figcaption class="folio-caption justify-self-center mt1">
							${data.validation.facebookPostCaption}
						</figcaption>
					</figure>	
                </div>
			</section>
		`;
	}
}
window.customElements.define("ws-validation", WSvalidation);
