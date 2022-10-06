// https://raw.githubusercontent.com/mdugg/folio22/main/content/decoupledLive.json
// ../../content/decoupledLive.json

export default class DCLvalidation extends HTMLElement {
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
				"https://raw.githubusercontent.com/mdugg/folio22/main/content/decoupledLive.json"
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
					<h3 class="h3-content_section" 
						id="${data.validation.section}">
							${data.validation.section}
					</h3>	
					<h2 class="h2 mt025">${data.validation.sectionTitle}</h2>
					${Object.values(data.validation.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}	
				</div>
				<figure class="folio-grid folio-grid--2col p2 border-r01 back-grey__light05">
					<img 
						src="${data.validation.imgShutterPost}" 
						alt="${data.validation.imgShutterPostAlt}" />
					<img 
						src="${data.validation.imgShutterComment}" 
						alt="${data.validation.imgShutterCommentAlt}" />
					<figcaption 
						class="folio-caption width-minor justify-self-center col-span-2">
						${data.validation.imgShutterCaption}
					</figcaption>
				</figure>
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
window.customElements.define("dcl-validation", DCLvalidation);
