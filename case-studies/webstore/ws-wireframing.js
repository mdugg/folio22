// https://raw.githubusercontent.com/mdugg/folio22/main/content/webstore.json
// ../../content/webstore.json

export default class WSwireframing extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.getModel();
	}
	disconnectedCallback() {
		this.btnFigma.removeEventListener("click", this.showModal);
	}
	getModel() {
		return new Promise((res, rej) => {
			fetch("../../content/webstore.json")
				.then((data) => data.json())
				.then((json) => {
					this.render(json);
					this.getButtons();
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
                        id="${data.wireframing.section}">
                            ${data.wireframing.section}
                    </div>	
                    <h2 class="h2 mt025">${data.wireframing.sectionTitle}</h2>	
                    ${Object.values(data.wireframing.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
					<h3 class="h3 mt3 mb025">
						${data.wireframing.titlePixelUnion}
					</h3>	
					${Object.values(data.wireframing.textPixelUnion)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
					<figure class="mt2 mb2">
						<img src="${data.wireframing.wirePixelUnion}" 
							alt="${data.wireframing.wirePixelUnionAlt}">
						<figcaption class="folio-caption mt1 justify-self-center">
							${data.wireframing.wirePixelUnionCaption}
						</figcaption>
					</figure>
					<h3 class="h3 mt3 mb025">
						${data.wireframing.titleWireframes}
					</h3>	
					${Object.values(data.wireframing.textWireframes)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}	
					<figure class="mt2 mb2">
						<img class="border-light"
							src="${data.wireframing.wireAllTools}" 
							alt="${data.wireframing.wireAllToolsAlt}">
						<figcaption class="folio-caption mt1 justify-self-center">
							${data.wireframing.wiresCaption}
						</figcaption>
					</figure>					
					<button data-figma="${data.wireframing.wiresFigma}"
						class="btn-primary width-reading">
							<svg class="icon-figma">
								<use xlink:href="../../global/assets/logos-sprite.svg#logo-figma-color">
								</use>
							</svg>
								View wireframes
					</button>	
					<h3 class="h3 mt3 mb025">
						${data.wireframing.titleAppFlow}
					</h3>
					${Object.values(data.wireframing.textAppFlow)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}		
                </div>
				<figure class="folio-content__figma">
					<img src="${data.wireframing.appFlow}" 
						alt="${data.wireframing.appFlowCaption}">
					<figcaption class="folio-caption mt1 justify-self-center">
						Heuristics analysis of existing webstore editor
					</figcaption>
				</figure>
				<button data-figma="${data.wireframing.appFlowFigma}"
					class="btn-primary width-reading mt2">
						<svg class="icon-figma">
							<use xlink:href="../../global/assets/logos-sprite.svg#logo-figma-color">
							</use>
						</svg>
							View app flow
				</button>	
			</section>
		`;
	}
	getButtons() {
		this.btnFigma = this.querySelectorAll(".btn-primary");
		this.btnFigma.forEach((btn) => {
			btn.addEventListener("click", this.showModal.bind(this));
		});
	}
	showModal(btn) {
		// get
		this.btnFigmaLink = btn.target.getAttribute("data-figma");
		this.body = document.querySelector("body");
		this.spinner = document.querySelector(".spinner-container");
		this.modal = document
			.querySelector("folio-modal")
			.shadowRoot.querySelector(".folio-modal");
		this.modalScreen = document
			.querySelector("folio-modal")
			.shadowRoot.querySelector(".folio-modal--screen");
		this.modalIframe = document
			.querySelector("folio-modal")
			.shadowRoot.querySelector(".folio-modal--iframe");
		// set
		this.body.classList.add("lock-scroll");
		this.modalScreen.ariaHidden = false;
		this.modal.ariaHidden = false;
		this.modalIframe.src = this.btnFigmaLink;
		this.spinner.ariaHidden = false;
		setTimeout(() => {
			this.spinner.ariaHidden = true;
		}, 3000);
	}
}
window.customElements.define("ws-wireframing", WSwireframing);

/*
	<figure class="folio-grid folio-grid--2col">
		<img class="border-light"
			src="${data.wireframing.wireAllTools}" 
			alt="${data.wireframing.wireAllToolsAlt}">
		<img class="border-light" 
			src="${data.wireframing.wireMobile}" 
			alt="${data.wireframing.wireMobileAlt}">
		<figcaption class="folio-caption width-minor justify-self-center col-span-2">
			${data.wireframing.wiresCaption}
		</figcaption>
	</figure>
*/
