export default class DCLdelivery extends HTMLElement {
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
			fetch("../../content/decoupledLive.json")
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
			<section class="flex--col__center">
				<div class="folio-content__text mt4">
					<h3 class="h3-content_section" 
						id="${data.delivery.section}">
							${data.delivery.section}
					</h3>	
					<h2 class="h2 mt025">${data.delivery.sectionTitle}</h2>
					${Object.values(data.delivery.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
				</div>		
				<figure class="folio-grid p2 border-r01 back-grey__light06">
					<img 
						src="${data.delivery.imgStyleGuide}" 
						alt="${data.delivery.imgStyleGuideAlt}" />
					<figcaption 
						class="folio-caption width-minor justify-self-center col-span-2">
						Caption for the style guide to grow to become pattern library
					</figcaption>
				</figure>
				<button 
					data-figma="${data.delivery.figmaStyleGuide}"
					class="btn-primary width-reading mt2">
					<svg class="icon-figma">
						<use xlink:href="../../global/assets/logos-sprite.svg#logo-figma-color">
						</use>
					</svg>
						Style Guide v1
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
window.customElements.define("dcl-delivery", DCLdelivery);
