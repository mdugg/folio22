export default class DCLoutcomes extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
            <section class="flex--col__center" data-content="outcomes">
			</section>
		`;
	}
	connectedCallback() {
		let content = this.querySelector("[data-content='outcomes']");

		fetch(getJSON)
			.then((response) => response.json())
			.then((data) => {
				content.innerHTML = `	
					<div class="folio-content__text mt4">
						<h3 class="h3-content_section" 
							id="${data.outcomes.section}">
								${data.outcomes.section}
						</h3>	
						<h2 class="h2 mt025">${data.outcomes.sectionTitle}</h2>
						${Object.values(data.outcomes.text)
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
window.customElements.define("dcl-outcomes", DCLoutcomes);
