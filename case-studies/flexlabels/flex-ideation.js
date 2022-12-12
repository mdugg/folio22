// https://raw.githubusercontent.com/mdugg/folio22/main/content/flexlabel.json
// ../../content/flexlabel.json

export default class flexIdeation extends HTMLElement {
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
                        id="${data.ideation.section}">
                            ${data.ideation.section}
                    </div>	
                    <h2 class="h2 mt025">
						${data.ideation.sectionTitle}
					</h2>	
                    ${Object.values(data.ideation.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
					<figure class="folio-pullquote mt2 mb3">
						<blockquote class="folio-pullquote__inner">
								<p>'How might we...'</p>
								<p class="mt0 mb05">${data.ideation.hmwProblemStatement}</p>
						</blockquote>
					</figure>
                </div>
				<figure class="folio-content__figma">
					<img src="${data.ideation.flowImg}" alt="${data.ideation.flowImgAlt}">
					<figcaption class="folio-caption justify-self-center">
						${data.ideation.flowImgCaption}
					</figcaption>
				</figure>	
			</section>
		`;
	}
}
window.customElements.define("flex-ideation", flexIdeation);
