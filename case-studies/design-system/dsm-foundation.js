// https://raw.githubusercontent.com/mdugg/folio22/main/content/dsm.json
// ../../content/dsm.json

export default class DsmFoundation extends HTMLElement {
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
                        id="${data.foundation.section}">
                            ${data.foundation.section}
                    </div>	
                    <h2 class="h2 mt0"> ${data.foundation.subtitle} </h2>	
                    ${Object.values(data.foundation.text)
						.map((value) => {
							return `<p>${value}</p>`;
						})
						.join("")}
                    <figure>
						<span class="mask">
                        	<img src="${data.slides.slide08Path}" 
                        	alt="${data.slides.slide08Alt}" />
						</span>
						<figcaption class="folio-caption justify-self-center mt05">
							${data.slides.slide08Caption}
						</figcaption>
                    </figure>
                    <figure class="mt1">
						<span class="mask">
                        	<img src="${data.slides.slide09Path}" 
                        	alt="${data.slides.slide09Alt}" />
						</span>
						<figcaption class="folio-caption justify-self-center mt05">
							${data.slides.slide09Caption}
						</figcaption>
                    </figure>
                </div>	
			</section>
		`;
	}
}
window.customElements.define("dsm-foundation", DsmFoundation);
