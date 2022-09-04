export default class DCLdelivery extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
            <section class="flex--col__center" data-content="delivery">
			</section>
		`;
	}
	connectedCallback() {
		let content = this.querySelector("[data-content='delivery']");

		fetch(getJSON)
			.then((response) => response.json())
			.then((data) => {
				content.innerHTML = `	
					<div class="folio-content__text mt4">
						<h3 class="h3-content_section" 
							id="${data.delivery.section}">
								${data.delivery.section}
						</h3>	
						<h2 class="h2 mt025">${data.delivery.sectionTitle}</h2>
						${Object.values(data.delivery.text)
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
window.customElements.define("dcl-delivery", DCLdelivery);
