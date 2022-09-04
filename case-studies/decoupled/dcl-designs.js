export default class DCLdesigns extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
            <section class="flex--col__center" data-content="designs">
			</section>
		`;
	}
	connectedCallback() {
		let content = this.querySelector("[data-content='designs']");

		fetch(getJSON)
			.then((response) => response.json())
			.then((data) => {
				content.innerHTML = `	
					<div class="folio-content__text mt4">
						<h3 class="h3-content_section" 
							id="${data.designs.section}">
								${data.designs.section}
						</h3>	
						<h2 class="h2 mt025">${data.designs.sectionTitle}</h2>
						${Object.values(data.designs.text)
							.map((value) => {
								return "<p>" + value + "</p>";
							})
							.join("")}
					</div>	
				`;
			})
			.catch(console.error);
	}
}
window.customElements.define("dcl-designs", DCLdesigns);
