// https://raw.githubusercontent.com/mdugg/folio22/main/content/decoupledLive.json
// ../../content/decoupledLive.json

export default class DCLdesigns extends HTMLElement {
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
			fetch(
				"https://raw.githubusercontent.com/mdugg/folio22/main/content/decoupledLive.json"
			)
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
					<h3 class="h3-content_section" 
						id="${data.designs.section}">
							${data.designs.section}
					</h3>	
					<h2 class="h2 mt025">${data.designs.sectionTitle}</h2>
					${Object.values(data.designs.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
				</div>	
				<figure class="folio-grid p2 border-r01 back-grey__light06">
					<img 
						src="${data.designs.designDash}" 
						alt="${data.designs.designDashAlt}" />
					<figcaption 
						class="folio-caption width-minor justify-self-center">
						${data.designs.designDashCaption}
					</figcaption>
				</figure>
				<button 
					data-figma="${data.designs.designsFigmaLink}"
					class="btn-primary width-reading mt2">
					<svg class="icon-figma">
						<use xlink:href="../../global/assets/logos-sprite.svg#logo-figma-color">
						</use>
					</svg>
						View Designs
				</button>
				<figure class="folio-grid p2 border-r01 back-grey__light06 mt2">
					<img 
						src="${data.designs.designLOTW}" 
						alt="${data.designs.designLOTWAlt}" />
					<figcaption 
						class="folio-caption width-minor justify-self-center">
						${data.designs.designLOTWCaption}
					</figcaption>
				</figure>
				<div class="folio-content__text mt3">
					<h3 class="h3 mb025">${data.designs.subTitleMobile}</h3>
					${Object.values(data.designs.textMobile)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
				</div>	
				<figure class="folio-grid folio-grid--2col p2 border-r01 back-grey__light06">
					<div class="folio-mobile__device justify-self-center">
						<span>
							<img 
								src="${data.designs.mobileStart}" 
								alt="${data.designs.mobileStartAlt}" />
						</span>
					</div>
					<div class="folio-mobile__device justify-self-center">
						<span>
							<img 
								src="${data.designs.mobileLiveDash}" 
								alt="${data.designs.mobileLiveDashAlt}" />
						</span>
					</div>
					<figcaption 
						class="folio-caption width-minor justify-self-center col-span-2">
						${data.designs.mobileLiveDashCaption}
					</figcaption>
				</figure>								
				<button 
					data-figma="${data.designs.mobileFigmaLink}"
					class="btn-primary width-reading mt2">
					<svg class="icon-figma">
						<use xlink:href="../../global/assets/logos-sprite.svg#logo-figma-color">
						</use>
					</svg>
						Responsive Layouts
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
window.customElements.define("dcl-designs", DCLdesigns);
