export default class DCLideation extends HTMLElement {
	constructor() {
		super();
		// const shadowRoot = this.attachShadow({ mode: "open" });
		// shadowRoot.appendChild(templateContent.cloneNode(true));
		this.innerHTML = `
            <section
				class="flex--col__center"
				data-content="ideation"> 
			</section>
		`;
	}
	connectedCallback() {
		let content = this.querySelector("[data-content='ideation']");

		fetch(getJSON)
			.then((response) => response.json())
			.then((data) => {
				content.innerHTML = `	
					<div class="folio-content__text mt4">
						<div class="h3-content_section" 
							id="${data.ideation.section}">
								${data.ideation.section}
						</div>	
						<h2 class="h2 mt025">
							${data.ideation.sectionTitle}
						</h2>
						${Object.values(data.ideation.text)
							.map((value) => {
								return "<p>" + value + "</p>";
							})
							.join("")}
					</div>
					<figure class="grid-dcl__personas mt2">
						<img 
							src="${data.ideation.personaImg01}" 
							alt="${data.research.thumb03Alt}" />
						<img 
							src="${data.ideation.personaImg02}" 
							alt="${data.research.thumb03Alt}" />
						<figcaption>
							<svg class="">
								<use 
									xlink:href="../../global/assets/icons-sprite.svg#icon-figma-solid">
								</use>
							</svg>
							View on 
							<a 
								href="${data.ideation.personasFigmaLink}"
								target="_blank">
									Figma
							</a>
						</figcaption>
                    </figure>
					<figure class="folio-content__figma">
						<img src="${data.ideation.heuristicsImg}" 
							alt="${data.ideation.heuristicsImgAlt}" />
					</figure>
					<ul>
						<li>
							<a href="${data.ideation.heuristicsFigmaLink}" target="_blank">
								View in Figma
							</a>
						</li>
						<li>
							<a href="${data.ideation.heuristicsNNGroup}" 
								target="_blank">NNGroup Heuristics</a>
						</li>
						<li>
							<a href="${data.ideation.heuristicsUXLaws}" 
								target="_blank">Laws of UX Heuristics</a>
						</li>
					</ul>
				`;
			})
			.catch(console.error);
	}
}
window.customElements.define("dcl-ideation", DCLideation);

// <iframe src="${data.figma.personasEmbed}"></iframe>
// 	<iframe src="${data.ideation.heuristicsFigmaEmbed}"></iframe>
