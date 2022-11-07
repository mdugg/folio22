// https://raw.githubusercontent.com/mdugg/folio22/main/content/webstore.json
// ../../content/webstore.json

export default class WSdelivery extends HTMLElement {
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
                        id="${data.delivery.section}">
                            ${data.delivery.section}
                    </div>	
                    <h2 class="h2 mt025">${data.delivery.sectionTitle}</h2>	
                    ${Object.values(data.delivery.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
					<h3 class="h3 mt3 mb025">
						reverting from classic to new - screen flow and walkthrough
					</h3>
                </div>
				<figure class="folio-content__figma mt1">
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
				<div class="folio-content__text">
					<figure class="mt1">
						<video controls class="width-full">
							<source src="https://folio22.s3.amazonaws.com/webstore/walkthrough-classic-new-revert.mp4"
									type="video/mp4">
						</video>
						<figcaption class="folio-caption mt1 justify-self-center">
							Walkthrough caption
						</figcaption>
					</figure>
					<button data-figma="${data.delivery.screenflowFigma}"
						class="btn-primary width-reading mt2">
							<svg class="icon-figma">
								<use xlink:href="../../global/assets/logos-sprite.svg#logo-figma-color">
								</use>
							</svg>
								View screen flow
					</button>
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
window.customElements.define("ws-delivery", WSdelivery);
