export default class DCLwireframing extends HTMLElement {
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
						id="${data.wireframing.section}">
							${data.wireframing.section}
					</h3>	
					<h2 class="h2 mt025">${data.wireframing.sectionTitle}</h2>
					${Object.values(data.wireframing.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
				</div>
				<h3 class="h3 mt3 mb025">logic flow chart</h3>
				<figure class="folio-content__figma">
					<img 
						src="${data.wireframing.appFlow}" 
						alt="${data.wireframing.appFlowAlt}" />
				</figure>
				<button 
					data-figma="${data.wireframing.appFlowLink}"
					class="btn-figma width-reading mt2">
					<svg class="icon-figma">
						<use xlink:href="../../global/assets/logos-sprite.svg#logo-figma-color">
						</use>
					</svg>
						View App Flow Diagram
				</button>
				<figure class="folio-grid folio-grid--2col p2 border01 back-grey__light06">
					<img 
						src="${data.wireframing.wires01dash}" 
						alt="${data.wireframing.wires01dashAlt}" />
					<img 
						src="${data.wireframing.wires01live}" 
						alt="${data.wireframing.wires01liveAlt}" />
					<figcaption 
						class="folio-caption width-minor justify-self-center col-span-2">
						Caption for the personas, what kind are they
					</figcaption>
				</figure>
				<button 
					data-figma="${data.wireframing.wiresFigmaLink}"
					class="btn-figma width-reading mt2">
					<svg class="icon-figma">
						<use xlink:href="../../global/assets/logos-sprite.svg#logo-figma-color">
						</use>
					</svg>
						View Figma layout
				</button>
			</section>
		`;
	}
	getButtons() {
		this.btnFigma = this.querySelectorAll(".btn-figma");
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
window.customElements.define("dcl-wireframing", DCLwireframing);
