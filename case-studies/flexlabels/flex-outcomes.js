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
			fetch(
				"https://raw.githubusercontent.com/mdugg/folio22/main/content/flexlabel.json"
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
					<ul class="flexlabel-wins">
						${Object.values(data.outcomes.wins)
							.map((value) => {
								return `
									<li class="flexlabel-win">
										<svg class="icon-star" viewBox="0 0 576 512">
											<path d="M316.7 17.8l65.43 132.4l146.4 21.29c26.27 3.796 36.79 36.09 17.75 54.59l-105.9 102.1l25.05 145.5c4.508 26.31-23.23 45.9-46.49 33.7L288 439.6l-130.9 68.7C133.8 520.5 106.1 500.9 110.6 474.6l25.05-145.5L29.72 226.1c-19.03-18.5-8.516-50.79 17.75-54.59l146.4-21.29l65.43-132.4C271.1-6.083 305-5.786 316.7 17.8z"/>
										</svg>
										${value}
									</li>`;
							})
							.join("")}
					</ul>
                </div>
			</section>
		`;
	}
}
window.customElements.define("flex-outcomes", flexOutcomes);
