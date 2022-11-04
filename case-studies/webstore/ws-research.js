// https://raw.githubusercontent.com/mdugg/folio22/main/content/webstore.json
// ../../content/webstore.json

export default class WSresearch extends HTMLElement {
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
                        id="${data.research.section}">
                            ${data.research.section}
                    </div>	
                    <h2 class="h2 mt025">${data.research.sectionTitle}</h2>	
                    ${Object.values(data.research.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
					<figure class="mt2 mb2 p1 border-r01 back-grey__light06">
						<img src="${data.research.webstoreClassic}" 
							alt="${data.research.webstoreClassicAlt}">
						<figcaption class="folio-caption mt1 justify-self-center">
							${data.research.webstoreClassicCaption}
						</figcaption>
					</figure>
                </div>
				<figure class="folio-content__figma p2 border-r01 back-grey__light06">
					<img src="${data.research.heuristic}" 
					alt="${data.research.heuristicAlt}">
					<figcaption class="folio-caption mt1 justify-self-center">
						${data.research.heuristicCaption}
					</figcaption>
				</figure>
				<button 
					data-figma="${data.research.heuristicFigma}"
					class="btn-primary width-reading mt2">
						<svg class="icon-figma">
							<use xlink:href="../../global/assets/logos-sprite.svg#logo-figma-color">
							</use>
						</svg>
							View Heuristics
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
window.customElements.define("ws-research", WSresearch);
