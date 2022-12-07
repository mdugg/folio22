// https://raw.githubusercontent.com/mdugg/folio22/main/content/flexlabel.json
// ../../content/flexlabel.json

export default class flexResearch extends HTMLElement {
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
                        id="${data.research.section}">
                            ${data.research.section}
                    </div>	
                    <h2 class="h2 mt025">
						${data.research.sectionTitle}
					</h2>	
                    ${Object.values(data.research.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
                </div>
				<figure class="folio-content__figma">
					<img src="${data.research.diagramImg}" alt="${data.research.diagramImgAlt}">
					<figcaption class="folio-caption width-minor justify-self-center">
						${data.research.diagramImgCaption}
					</figcaption>
				</figure>					
			</section>
		`;
	}
}
window.customElements.define("flex-research", flexResearch);
