// https://raw.githubusercontent.com/mdugg/folio22/main/content/flexlabel.json
// ../../content/flexlabel.json

export default class flexIntro extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.getModel();
	}
	disconnectedCallback() {}
	getModel() {
		return new Promise((res, rej) => {
			fetch(
				"https://raw.githubusercontent.com/mdugg/folio22/main/content/flexlabel.json"
			)
				.then((data) => data.json())
				.then((json) => {
					this.render(json);
					res();
				})
				.catch((error) => rej(error));
		});
	}
	render(data) {
		this.innerHTML = `	
			<section class="flex-col--center">
                <div class="folio-content__text mt4">
                    <div class="folio-project__tag mb05">
                        <span class="project mr05">Project: </span> 
                        <span> ${data.intro.project} </span>
                    </div>
                    <h1 class="h1"> ${data.intro.title} </h1>
                    <div class="h3-content_section mt3" 
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
				<div class="folio-grid folio-grid--2col mt2">
					<figure>	
						<span class="border-r01 mask flex-row">
							<img 
								src="${data.intro.thumb06Path}"
								alt="${data.intro.thumb06Alt}" />
						</span>
						<figcaption class="folio-caption mt025">
							${data.intro.thumb06Caption}
						</figcaption>
					</figure>
					<figure>
						<span class="border-r01 mask flex-row">
							<img 
								src="${data.intro.thumb05Path}" 
								alt="${data.intro.thumb05Alt}" />
						</span>
						<figcaption class="folio-caption mt025">
							${data.intro.thumb05Caption}
						</figcaption>
					</figure>
				</div>				
			</section>
		`;
	}
}
window.customElements.define("flex-intro", flexIntro);
