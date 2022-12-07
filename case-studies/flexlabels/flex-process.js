// https://raw.githubusercontent.com/mdugg/folio22/main/content/flexlabel.json
// ../../content/flexlabel.json

export default class flexProcess extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		// this.attachShadow({ mode: "open" });
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
                        id="${data.process.section}">
                            ${data.process.section}
                    </div>	
                    <h2 class="h2 mt025">
						${data.process.sectionTitle}
					</h2>	
                    ${Object.values(data.process.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
                </div>
				<figure class="folio-content__figma">
					<img src="${data.process.flowImg}" alt="${data.process.flowImgAlt}">
					<figcaption class="folio-caption width-minor justify-self-center">
						${data.process.flowImgCaption}
					</figcaption>
				</figure>	
			</section>
		`;
	}
}
window.customElements.define("flex-process", flexProcess);
