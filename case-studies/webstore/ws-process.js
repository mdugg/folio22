// https://raw.githubusercontent.com/mdugg/folio22/main/content/webstore.json
// ../../content/webstore.json

export default class WSprocess extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		// this.attachShadow({ mode: "open" });
		this.getModel();
	}
	disconnectedCallback() {
		this.btnFigma.removeEventListener("click", this.showModal);
	}
	getModel() {
		return new Promise((res, rej) => {
			fetch(
				"https://raw.githubusercontent.com/mdugg/folio22/main/content/webstore.json"
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
                    <div class="h3-content_section" 
                        id="${data.process.section}">
                            ${data.process.section}
                    </div>	
                    <h2 class="h2 mt025">
						${data.process.sectionTitle}
					</h2>	
                    ${Object.values(data.process.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
					<slot name="test-slot"></slot>
					<figure class="mt1">
						<img src="${data.process.diagramMVP}" 
						alt="${data.process.diagramMVPalt}">
						<figcaption 
							class="folio-caption mt1 justify-self-center">
							${data.process.diagramMVPcaption}
						</figcaption>
					</figure>
					<button 
						data-figma="${data.process.diagramMVPFigmaLink}"
						class="btn-primary width-reading mt2">
							<svg class="icon-figma">
								<use xlink:href="../../global/assets/logos-sprite.svg#logo-figma-color">
								</use>
							</svg>
								View MVP pyramid
					</button>
					<figure class="mt4">
						<img src="${data.process.diagramLeanUX}" 
						alt="${data.process.diagramLeanUXalt}">
						<figcaption 
							class="folio-caption mt1 justify-self-center">
							${data.process.diagramLeanUXcaption}
						</figcaption>
					</figure>
					<button 
						data-figma="${data.process.diagramLeanUXFigmaLink}"
						class="btn-primary width-reading mt2">
							<svg class="icon-figma">
								<use xlink:href="../../global/assets/logos-sprite.svg#logo-figma-color">
								</use>
							</svg>
								View Lean UX canvas
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
window.customElements.define("ws-process", WSprocess);
