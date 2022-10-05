// https://raw.githubusercontent.com/mdugg/folio22/main/content/decoupledLive.json
// ../../content/decoupledLive.json

export default class DCLintro extends HTMLElement {
	constructor() {
		super();
		// this.attachShadow({ mode: "open" });
		// this.shadowRoot.innerHTML = `
		this.innerHTML = `
            <section class="flex-col--center" data-content="intro">
			</section>
		`;
	}
	connectedCallback() {
		// let content = this.shadowRoot.querySelector("[data-content='text']");
		let content = this.querySelector("[data-content='intro']");
		const getJSON = new Request(
			"https://raw.githubusercontent.com/mdugg/folio22/main/content/decoupledLive.json"
		);

		fetch(getJSON)
			.then((response) => response.json())
			.then((data) => {
				content.innerHTML = `
					<div class="folio-content__text mt4">
						<div class="folio-project__tag mb05">
							<span class="color-turq__text mr05">Project: </span> 
							<span> ${data.intro.project} </span>
						</div>
						<h1 class="h1"> ${data.intro.title} </h1>
						<div class="h3-content_section mt15" 
							id="${data.intro.section}">
								${data.intro.section}
						</div>	
						<h2 class="h2 mt025"> ${data.intro.subtitle} </h2>	
						${Object.values(data.intro.text)
							.map((value) => {
								return "<p>" + value + "</p>";
							})
							.join("")}
					</div>
				`;
			})
			.catch(console.error);
	}
	disconnectedCallback() {}
	adoptedCallback() {}
	attributeChangedCallback() {}
}
window.customElements.define("dcl-intro", DCLintro);

/*
Fetching API Data with Web Components and SSR
https://dev.to/steveblue/fetching-api-data-with-web-components-and-ssr-21mk

Handling data with Web Components
https://itnext.io/handling-data-with-web-components-9e7e4a452e6e

Working with JSON
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

Comparing Methods for Appending and Inserting With JavaScript
https://css-tricks.com/comparing-methods-for-appending-and-inserting-with-javascript/

Object.values()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
*/
