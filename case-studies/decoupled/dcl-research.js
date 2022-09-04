export default class DCLresearch extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
            <section class="flex--col__center" data-content="research">
			</section>
		`;
	}
	connectedCallback() {
		let content = this.querySelector("[data-content='research']");

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
						<h3 class="h3 mt3 mb025">${data.research.sectionSubTitle01}</h3>
						${Object.values(data.research.textWarehouse)
							.map((value) => {
								return "<p>" + value + "</p>";
							})
							.join("")}
					</div>
					<figure class="folio-grid--2col mt2">
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
				`;
			})
			.catch(console.error);
	}
}
window.customElements.define("dcl-research", DCLresearch);

// https://www.sitepoint.com/quick-tip-the-right-way-to-use-figure-and-figcaption-elements/
