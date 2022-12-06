// https://raw.githubusercontent.com/mdugg/folio22/main/content/webstore.json
// ../../content/webstore.json

export default class WSideation extends HTMLElement {
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
                        id="${data.ideation.section}">
                            ${data.ideation.section}
                    </div>	
                    <h2 class="h2 mt025">${data.ideation.sectionTitle}</h2>	
                    ${Object.values(data.ideation.textHMW)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
					<figure class="folio-pullquote mt2 mb3">
						<blockquote class="folio-pullquote__inner">
								<p>'How might we...'</p>
								<p class="mt0 mb05">${data.ideation.hmw}</p>
						</blockquote>
					</figure>
					<h3 class="h3 mt3 mb025">
						${data.ideation.titleCardSort}
					</h3>
					${Object.values(data.ideation.textCardSort)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
                </div>
				<figure class="folio-content__figma">
					<img src="${data.ideation.cardSort}" 
						alt="${data.ideation.cardSortAlt}">
					<figcaption class="folio-caption mt1 justify-self-center">
						${data.ideation.cardSortCaption}
					</figcaption>
				</figure>
				<button data-figma="${data.ideation.cardSortFigma}"
					class="btn-primary width-reading mt2">
						<svg class="icon-figma">
							<use xlink:href="../../global/assets/logos-sprite.svg#logo-figma-color">
							</use>
						</svg>
							View Card Sort
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
window.customElements.define("ws-ideation", WSideation);
