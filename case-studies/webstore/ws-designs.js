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
                    <h2 class="h2 mt025">${data.designs.sectionTitle}</h2>	
                    ${Object.values(data.designs.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
					<h3 class="h3 mt3 mb025">
						${data.wireframing.titlePixelUnion}
					</h3>	
					${Object.values(data.designs.flow)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}		
                </div>
			</section>
		`;
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
