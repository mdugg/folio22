// https://raw.githubusercontent.com/mdugg/folio22/main/content/flexlabel.json
// ../../content/flexlabel.json

export default class flexOutcomes extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.getModel();
	}
	disconnectedCallback() {}
	getModel() {
		return new Promise((res, rej) => {
			fetch("../../content/flexlabel.json")
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
                        id="${data.outcomes.section}">
                            ${data.outcomes.section}
                    </div>	
                    <h2 class="h2 mt025">
						${data.outcomes.sectionTitle}
					</h2>	
                    ${Object.values(data.outcomes.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
                </div>
			</section>
		`;
	}
}
window.customElements.define("flex-outcomes", flexOutcomes);
