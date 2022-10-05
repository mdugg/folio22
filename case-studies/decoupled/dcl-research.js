// https://raw.githubusercontent.com/mdugg/folio22/main/content/decoupledLive.json
// ../../content/decoupledLive.json

export default class DCLresearch extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
            <section class="flex-col--center" data-content="research">
			</section>
		`;
	}
	connectedCallback() {
		let content = this.querySelector("[data-content='research']");
		const getJSON = new Request(
			"https://raw.githubusercontent.com/mdugg/folio22/main/content/decoupledLive.json"
		);

		fetch(getJSON)
			.then((response) => response.json())
			.then((data) => {
				content.innerHTML = `	
					<div class="folio-content__text mt4">
						<div class="h3-content_section" 
							id="${data.research.section}">
								${data.research.section}
						</div>	
						<h2 class="h2 mt025">${data.research.sectionTitle}</h2>
						${Object.values(data.research.textResearch)
							.map((value) => {
								return "<p>" + value + "</p>";
							})
							.join("")}
						<h3 class="h3 mt3 mb025">${data.research.ethnoSubTitle}</h3>
						${Object.values(data.research.ethnoText)
							.map((value) => {
								return "<p>" + value + "</p>";
							})
							.join("")}
					</div>
					<figure class="folio-grid folio-grid--2col mt2">
						<span>
							<img 
								src="${data.research.thumb01Path}" 
								alt="${data.research.thumb01Alt}" />
						</span>
						<span>	
							<img 
								src="${data.research.thumb02Path}"
								alt="${data.research.thumb02Alt}" />
						</span>
						<span>
							<img 
								src="${data.research.thumb03Path}" 
								alt="${data.research.thumb03Alt}" />
						</span>
						<span>
							<img 
								src="${data.research.thumb04Path}" 
								alt="${data.research.thumb04Alt}" />
						</span>
						<figcaption class="folio-caption width-minor justify-self-center col-span-2">
							${data.research.thumbsCaption}
						</figcaption>
					</figure>
					<div class="folio-content__text mt1">
						<h3 class="h3 mt3 mb025">${data.research.compareSubTitle}</h3>
						${Object.values(data.research.compareText)
							.map((value) => {
								return "<p>" + value + "</p>";
							})
							.join("")}
						<figure class="dcl-brands">
							<span>
								<svg class="brand-amazon">
									<use xlink:href="../../global/assets/logos-sprite.svg#logo-amazon">
									</use>
								</svg>
							</span>
							<span>
								<svg class="brand-instagram">
									<use xlink:href="../../global/assets/logos-sprite.svg#logo-instagram">
									</use>
								</svg>
							</span>
							<span>
								<svg class="brand-facebook">
									<use xlink:href="../../global/assets/logos-sprite.svg#logo-facebook">
									</use>
								</svg>
							</span>
							<span>
								<svg class="brand-tiktok">
									<use xlink:href="../../global/assets/logos-sprite.svg#logo-tiktok">
									</use>
								</svg>
							</span>
							<span>
								<svg class="brand-youtube">
									<use xlink:href="../../global/assets/logos-sprite.svg#logo-youtube">
									</use>
								</svg>
							</span>
							<span>
								<svg class="brand-ebay">
									<use xlink:href="../../global/assets/logos-sprite.svg#logo-ebay">
									</use>
								</svg>
							</span>
						</figure>
					</div>
				`;
			})
			.catch(console.error);
	}
}
window.customElements.define("dcl-research", DCLresearch);

// https://www.sitepoint.com/quick-tip-the-right-way-to-use-figure-and-figcaption-elements/
