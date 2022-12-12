// https://raw.githubusercontent.com/mdugg/folio22/main/content/flexlabel.json
// ../../content/flexlabel.json

export default class flexDelivery extends HTMLElement {
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
                        id="${data.delivery.section}">
                            ${data.delivery.section}
                    </div>	
                    <h2 class="h2 mt025">
						${data.delivery.sectionTitle}
					</h2>	
                    ${Object.values(data.delivery.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
					<figure class="">
						<img src="${data.delivery.imgPath}" alt="${data.delivery.imgAlt}">
						<figcaption class="folio-caption mt1 justify-self-center">
							${data.delivery.imgCaption}
						</figcaption>
					</figure>
                </div>
			</section>
		`;
	}
}
window.customElements.define("flex-delivery", flexDelivery);
