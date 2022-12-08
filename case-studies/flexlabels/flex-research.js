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
				<div class="folio-grid folio-grid--2col mt2">
					<figure>
						<span class="border-r01 mask flex-row">
							<img 
								src="${data.research.thumb01Path}" 
								alt="${data.research.thumb01Alt}" />
						</span>
						<figcaption class="folio-caption mt025">
							${data.research.thumb01Caption}
						</figcaption>
					</figure>
					<figure>	
						<span class="border-r01 mask flex-row">
							<img 
								src="${data.research.thumb02Path}"
								alt="${data.research.thumb02Alt}" />
						</span>
						<figcaption class="folio-caption mt025">
							${data.research.thumb02Caption}
						</figcaption>
					</figure>
					<figure>
						<span class="border-r01 mask flex-row">
							<img 
								src="${data.research.thumb03Path}" 
								alt="${data.research.thumb03Alt}" />
						</span>
						<figcaption class="folio-caption mt025">
							${data.research.thumb03Caption}
						</figcaption>
					</figure>
					<figure>
						<span class="border-r01 mask flex-row">
							<img 
								src="${data.research.thumb04Path}" 
								alt="${data.research.thumb04Alt}" />
						</span>
						<figcaption class="folio-caption mt025">
							${data.research.thumb04Caption}
						</figcaption>
					</figure>
				</div>				
			</section>
		`;
	}
}
window.customElements.define("flex-research", flexResearch);
