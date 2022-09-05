export default class DCLwireframing extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
            <section class="flex--col__center" data-content="wireframing">
			</section>
		`;
	}
	connectedCallback() {
		let content = this.querySelector("[data-content='wireframing']");

		fetch(getJSON)
			.then((response) => response.json())
			.then((data) => {
				content.innerHTML = `	
					<div class="folio-content__text mt4">
						<h3 class="h3-content_section" 
							id="${data.wireframing.section}">
								${data.wireframing.section}
						</h3>	
						<h2 class="h2 mt025">${data.wireframing.sectionTitle}</h2>
						${Object.values(data.wireframing.text)
							.map((value) => {
								return "<p>" + value + "</p>";
							})
							.join("")}
					</div>
					<figure class="folio-grid--2col mt2">
						<img 
							src="${data.ideation.personaImg01}" 
							alt="${data.research.thumb03Alt}" />
						<img 
							src="${data.ideation.personaImg02}" 
							alt="${data.research.thumb03Alt}" />
						<figcaption 
							class="folio-caption width-minor justify-self-center col-span-2">
							Caption for the personas, what kind are they
						</figcaption>
                    </figure>
					<button 
						data-figma="${data.ideation.personasFigmaLink}"
						class="btn--figma width-reading mt2">
						<svg class="icon-figma">
							<use xlink:href="../../global/assets/logos-sprite.svg#logo-figma-color">
							</use>
						</svg>
							View Figma layout
					</button>
				`;
			})
			.catch(console.error);
	}
}
window.customElements.define("dcl-wireframing", DCLwireframing);
