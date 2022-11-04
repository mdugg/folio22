// https://raw.githubusercontent.com/mdugg/folio22/main/content/webstore.json
// ../../content/webstore.json

export default class WSdelivery extends HTMLElement {
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
                        id="${data.delivery.section}">
                            ${data.delivery.section}
                    </div>	
                    <h2 class="h2 mt025">${data.delivery.sectionTitle}</h2>	
                    ${Object.values(data.delivery.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
					<h3 class="h3 mt3 mb025">
						reverting from classic to new - screen flow and walkthrough
					</h3>
                </div>
			</section>
		`;
	}
}
window.customElements.define("ws-delivery", WSdelivery);
