// https://raw.githubusercontent.com/mdugg/folio22/main/content/dsm.json
// ../../content/dsm.json

export default class DsmIntro extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.getModel();
	}
	disconnectedCallback() {}
	getModel() {
		return new Promise((resolve, reject) => {
			fetch(
				"https://raw.githubusercontent.com/mdugg/folio22/main/content/dsm.json"
			)
				.then((data) => data.json())
				.then((json) => {
					this.render(json);
					resolve();
				})
				.catch((error) => reject(error));
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
                    <h2 class="h2 mt025"> ${data.intro.subtitle01} </h2>	
                    ${Object.values(data.intro.text01)
						.map((value) => {
							return `<p>${value}</p>`;
						})
						.join("")}
                </div>
                <div class="folio-content__text">
                    <h2 class="h2 mt3"> ${data.intro.subtitle02} </h2>	
                    ${Object.values(data.intro.text02)
						.map((value) => {
							return `<p>${value}</p>`;
						})
						.join("")}
                </div>
                <figure class="folio-grid folio-grid--2col p2 border-r01 back-grey__light05">
					<img src="${data.intro.ui01path}" alt="${data.intro.ui01alt}" />
					<img src="${data.intro.ui02path}" alt="${data.intro.ui02alt}" />
					<figcaption class="folio-caption width-minor justify-self-center col-span-2">
						${data.intro.uiCaption}
					</figcaption>
				</figure>	
			</section>
		`;
	}
}
window.customElements.define("dsm-intro", DsmIntro);
