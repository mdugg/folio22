// https://raw.githubusercontent.com/mdugg/folio22/main/content/decoupledLive.json
// ../../content/decoupledLive.json

export default class DCLretrospective extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
            <section class="flex-col--center" data-content="retrospective">
			</section>
		`;
	}
	connectedCallback() {
		let content = this.querySelector("[data-content='retrospective']");
		const getJSON = new Request(
			"https://raw.githubusercontent.com/mdugg/folio22/main/content/decoupledLive.json"
		);

		fetch(getJSON)
			.then((response) => response.json())
			.then((data) => {
				content.innerHTML = `
					<div class="folio-content__text mt4">	
						<h3 class="h3-content_section" 
							id="${data.retrospective.section}">
								${data.retrospective.section}
						</h3>	
						<h2 class="h2 mt025">${data.retrospective.sectionTitle}</h2>
						${Object.values(data.retrospective.text)
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
window.customElements.define("dcl-retrospective", DCLretrospective);
