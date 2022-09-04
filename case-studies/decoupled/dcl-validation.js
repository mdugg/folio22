export default class DCLvalidation extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
            <section class="flex--col__center" data-content="validation">
			</section>
		`;
	}
	connectedCallback() {
		let content = this.querySelector("[data-content='validation']");

		fetch(getJSON)
			.then((response) => response.json())
			.then((data) => {
				content.innerHTML = `	
					<div class="folio-content__text mt4">
						<h3 class="h3-content_section" 
							id="${data.validation.section}">
								${data.validation.section}
						</h3>	
						<h2 class="h2 mt025">${data.validation.sectionTitle}</h2>
						${Object.values(data.validation.text)
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
window.customElements.define("dcl-validation", DCLvalidation);
