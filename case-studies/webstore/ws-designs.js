// https://raw.githubusercontent.com/mdugg/folio22/main/content/webstore.json
// ../../content/webstore.json

export default class WSdesigns extends HTMLElement {
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
                        id="${data.designs.section}">
                            ${data.designs.section}
                    </div>	
                    <h2 class="h2 mt025">
						${data.designs.sectionTitle}
					</h2>	
                    ${Object.values(data.designs.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
				</div>
				<figure class="folio-grid p2 border-r01 back-grey__light06">
					<img class="border" 
						src="${data.designs.design}" 
						alt="${data.designs.designAlt}">
					<figcaption class="folio-caption justify-self-center">
						${data.designs.designCaption}
					</figcaption>
				</figure>
				<button data-figma="${data.designs.designsFigma}"
					class="btn-primary width-reading mt2">
						<svg class="icon-figma">
							<use xlink:href="../../global/assets/logos-sprite.svg#logo-figma-color">
							</use>
						</svg>
							View designs
				</button>
				<div class="folio-content__text mt2">
					<h3 class="h3 mt3 mb025">
						${data.designs.toolsTitle}
					</h3>	
					${Object.values(data.designs.toolsText)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}	
				</div>		
				<figure class="folio-grid">
					<img src="${data.designs.tools}" 
						alt="${data.designs.toolsAlt}">
					<figcaption class="folio-caption justify-self-center">
						${data.designs.toolsCaption}
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
				<div class="folio-content__text mt2">		
					<h3 class="h3 mt3 mb025">
						${data.wireframing.titlePixelUnion}
					</h3>	
					${Object.values(data.designs.flow)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}	
					<figure class="">
						<img src="${data.designs.designsPxU}" 
							alt="${data.designs.designsPxUAlt}">
						<figcaption class="folio-caption justify-self-center mt1">
							${data.designs.designsPxUCaption}
						</figcaption>
					</figure>		
                </div>
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
window.customElements.define("ws-designs", WSdesigns);
