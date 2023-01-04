// https://raw.githubusercontent.com/mdugg/folio22/main/content/dsm.json
// ../../content/dsm.json

export default class DsmSlides extends HTMLElement {
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
                    <div class="h3-content_section">
                            ${data.slides.section}
                    </div>	
                    <h2 class="h2 mt025"> ${data.slides.sectionTitle} </h2>	
                    ${Object.values(data.slides.text)
						.map((value) => {
							return `<p>${value}</p>`;
						})
						.join("")}
                    <figure>
                        <span class="mask">
                            <img src="${data.slides.slide01Path}" 
                            alt="${data.slides.slide01Alt}" />
                        </span>
                        <figcaption class="folio-caption justify-self-center mt05 mb2">
							${data.slides.slide01Caption}
						</figcaption>
                    </figure>
                    <figure class="mt1">
                        <span class="mask">
                            <img src="${data.slides.slide02Path}" 
                            alt="${data.slides.slide02Alt}" />
                        </span>
                        <figcaption class="folio-caption justify-self-center mt05 mb2">
							${data.slides.slide02Caption}
						</figcaption>
                    </figure>
                    <figure>
                        <span class="mask">
                            <img src="${data.slides.slide03Path}" 
                            alt="${data.slides.slide03Alt}" />
                        </span>    
                        <figcaption class="folio-caption justify-self-center mt05 mb2">
							${data.slides.slide03Caption}
						</figcaption>
                    </figure>
                    <figure>
                        <span class="mask">
                            <img src="${data.slides.slide05Path}" 
                            alt="${data.slides.slide05Alt}" />
                        </span>    
                        <figcaption class="folio-caption justify-self-center mt05 mb2">
							${data.slides.slide05Caption}
						</figcaption>
                    </figure>
                    <figure>
                        <span class="mask">
                            <img src="${data.slides.slide06Path}" 
                            alt="${data.slides.slide06Alt}" />
                        </span>    
                        <figcaption class="folio-caption justify-self-center mt05 mb2">
							${data.slides.slide06Caption}
						</figcaption>
                    </figure>
                    <figure>
                        <span class="mask">
                            <img src="${data.slides.slide07Path}" 
                            alt="${data.slides.slide07Alt}" />
                        </span>    
                        <figcaption class="folio-caption justify-self-center mt05 mb2">
							${data.slides.slide07Caption}
						</figcaption>
                    </figure>
                    <figure>
                        <span class="mask">
                            <img src="${data.slides.slide10Path}" 
                            alt="${data.slides.slide10Alt}" />
                        </span>    
                        <figcaption class="folio-caption justify-self-center mt05 mb2">
							${data.slides.slide10Caption}
						</figcaption>
                    </figure>
                    <figure>
                        <span class="mask">
                            <img src="${data.slides.slide13Path}" 
                            alt="${data.slides.slide13Alt}" />
                        </span>    
                        <figcaption class="folio-caption justify-self-center mt05 mb2">
							${data.slides.slide13Caption}
						</figcaption>
                    </figure>
                    <figure>
                        <span class="mask">
                            <img src="${data.slides.slide14Path}" 
                            alt="${data.slides.slide14Alt}" />
                        </span>    
                        <figcaption class="folio-caption justify-self-center mt05 mb2">
							${data.slides.slide14Caption}
						</figcaption>
                    </figure>
                    <figure>
                        <span class="mask">
                            <img src="${data.slides.slide15Path}" 
                            alt="${data.slides.slide15Alt}" />
                        </span>    
                        <figcaption class="folio-caption justify-self-center mt05 mb2">
							${data.slides.slide15Caption}
						</figcaption>
                    </figure>
                    <figure>
                        <span class="mask">
                            <img src="${data.slides.slide16Path}" 
                            alt="${data.slides.slide16Alt}" />
                        </span>    
                        <figcaption class="folio-caption justify-self-center mt05 mb2">
							${data.slides.slide16Caption}
						</figcaption>
                    </figure>
                    <figure>
                        <span class="mask">
                            <img src="${data.slides.slide17Path}" 
                            alt="${data.slides.slide17Alt}" />
                        </span>    
                        <figcaption class="folio-caption justify-self-center mt05 mb2">
							${data.slides.slide17Caption}
						</figcaption>
                    </figure>
                    <figure>
                        <span class="mask">
                            <img src="${data.slides.slide18Path}" 
                            alt="${data.slides.slide18Alt}" />
                        </span>    
                        <figcaption class="folio-caption justify-self-center mt05 mb2">
							${data.slides.slide18Caption}
						</figcaption>
                    </figure>
                    <figure>
                        <span class="mask">
                            <img src="${data.slides.slide19Path}" 
                            alt="${data.slides.slide19Alt}" />
                        </span>    
                        <figcaption class="folio-caption justify-self-center mt05 mb2">
							${data.slides.slide19Caption}
						</figcaption>
                    </figure>
                    <figure>
                        <span class="mask">
                            <img src="${data.slides.slide20Path}" 
                            alt="${data.slides.slide20Alt}" />
                        </span>    
                        <figcaption class="folio-caption justify-self-center mt05 mb2">
							${data.slides.slide20Caption}
						</figcaption>
                    </figure>
                </div>	
			</section>
		`;
	}
}
window.customElements.define("dsm-slides", DsmSlides);
