// https://raw.githubusercontent.com/mdugg/folio22/main/content/flexlabel.json
// ../../content/flexlabel.json

export default class flexRetrospective extends HTMLElement {
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
                    <div class="h3-content_section" 
                        id="${data.retrospective.section}">
                            ${data.retrospective.section}
                    </div>	
                    <h2 class="h2 mt025">
						${data.retrospective.sectionTitle}
					</h2>	
                    ${Object.values(data.retrospective.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
                </div>
			</section>
		`;
	}
}
window.customElements.define("flex-retrospective", flexRetrospective);

// <figure class="retro-localpickup">
// 	<video controls class="video">
// 		<source src="${data.retrospective.videoPath}"
// 				type="video/mp4">
// 	</video>
// 	<figcaption class="folio-caption mt1 justify-self-center">
// 		${data.retrospective.videoCaption}
// 	</figcaption>
// </figure>
