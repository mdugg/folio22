// https://raw.githubusercontent.com/mdugg/folio22/main/content/webstore.json
// ../../content/webstore.json

export default class WSresearch extends HTMLElement {
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
			fetch("../../content/webstore.json")
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
                        id="${data.research.section}">
                            ${data.research.section}
                    </div>	
                    <h2 class="h2 mt025">${data.research.sectionTitle}</h2>	
                    ${Object.values(data.research.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
                </div>
			</section>
		`;
	}
}
window.customElements.define("ws-research", WSresearch);
