// https://raw.githubusercontent.com/mdugg/folio22/main/content/dsm.json
// ../../content/dsm.json

export default class DsmOutcomes extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.getModel();
	}
	disconnectedCallback() {}
	getModel() {
		return new Promise((resolve, reject) => {
			fetch(
				"https://raw.githubusercontent.com/mdugg/folio22/main/content/dsm.json"
			)
				.then((data) => data.json())
				.then((json) => {
					this.render(json);
					resolve();
				})
				.catch((error) => reject(error));
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
                    <h2 class="h2 mt0"> ${data.outcomes.sectionTitle} </h2>	
                    ${Object.values(data.outcomes.text)
						.map((value) => {
							return `<p>${value}</p>`;
						})
						.join("")}
                </div>	
			</section>
		`;
	}
}
window.customElements.define("dsm-outcomes", DsmOutcomes);
