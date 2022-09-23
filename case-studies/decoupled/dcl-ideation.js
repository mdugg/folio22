export default class DCLideation extends HTMLElement {
	constructor() {
		super();
		// const shadowRoot = this.attachShadow({ mode: "open" });
		// shadowRoot.appendChild(templateContent.cloneNode(true));
		// this.testJSON = new Request("../../content/decoupledLive.json");
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
		// console.log("render");
		// let content = this.querySelector("[data-content='ideation']");
		// console.log(content);
		// content.innerHTML = `
		this.innerHTML = `
            <section class="flex-col--center"> 
				<div class="folio-content__text mt4">
					<div class="h3-content_section" 
						id="${data.ideation.section}">
							${data.ideation.section}
					</div>	
					<h2 class="h2 mt025">
						${data.ideation.sectionTitle}
					</h2>
					<figure class="folio-pullquote mt2 mb3">
						<blockquote class="folio-pullquote__inner">
								<p>'How might we...'</p>
								<p class="mt0 mb05">${data.ideation.problemStatement}</p>
						</blockquote>
					</figure>
					${Object.values(data.ideation.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
					<h3 class="h3 mt3 mb025">
						${data.ideation.personaSubTitle}
					</h3>
					${Object.values(data.ideation.personaText)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
				</div>
				<figure class="folio-grid folio-grid--2col mt2">
					<img 
						src="${data.ideation.personaImg01}" 
						alt="${data.ideation.personaImg01Alt}" />
					<img 
						src="${data.ideation.personaImg02}" 
						alt="${data.ideation.personaImg02Alt}" />
				</figure>
				<button 
					data-figma="${data.ideation.personasFigmaLink}"
					class="btn-primary width-reading mt2">
					<svg class="icon-figma">
						<use xlink:href="../../global/assets/logos-sprite.svg#logo-figma-color">
						</use>
					</svg>
						View Personas
				</button>
				<div class="folio-content__text mt2">
					<h3 class="h3 mb025">
						${data.ideation.jtbdSubTitle}
					</h3>
					${Object.values(data.ideation.jtbdText)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
					<figure class="">
						<img src="${data.ideation.jtbdImg}" 
							alt="${data.ideation.jtbdImgAlt}" />
					</figure>
				</div>
				<button 
					data-figma="${data.ideation.jtbdFigmaLink}"
					class="btn-primary width-reading mt2">
					<svg class="icon-figma">
						<use xlink:href="../../global/assets/logos-sprite.svg#logo-figma-color">
						</use>
					</svg>
						View JTBD
				</button>				
				<div class="folio-content__text mt2">
					<h3 class="h3 mb025">
						${data.ideation.heuristicsSubTitle}
					</h3>
					${Object.values(data.ideation.heuristicsText)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
				</div>
				<figure class="folio-content__figma p2 border-r01 back-grey__light06">
					<img src="${data.ideation.heuristicsImg}" 
						alt="${data.ideation.heuristicsImgAlt}" />
				</figure>
				<button 
					id="ideationHeuristics"
					data-figma="${data.ideation.heuristicsFigmaLink}"
					class="btn-primary width-reading mt2">
					<svg class="icon-figma">
						<use xlink:href="../../global/assets/logos-sprite.svg#logo-figma-color">
						</use>
					</svg>
						View Heuristics Analysis
				</button>
			</section>
		`;
	}
	getButtons() {
		this.btnFigma = this.querySelectorAll(".btn-primary");
		// this.btnFigmaLink = this.btnFigma.getAttribute("data-figma");
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
		// this.modalIframeContent = this.modalIframe.contentwindow;
		// console.log(this.modalIframeContent);
		// set
		this.body.classList.add("lock-scroll");
		this.modalScreen.ariaHidden = false;
		this.modal.ariaHidden = false;
		this.modalIframe.src = this.btnFigmaLink;
		this.spinner.ariaHidden = false;
		setTimeout(() => {
			this.spinner.ariaHidden = true;
		}, 3000);
		// if (this.modalIframe.readyState == "complete") {
		// if (this.modalIframe.onreadystatechange) {
		// 	if (this.modalIframe.readyState == "complete") {
		// 		console.log("iframe content loaded - remove spinner");
		// 	}
		// } else {
		// 	console.log("iframe content not loaded");
		// }
	}
}
window.customElements.define("dcl-ideation", DCLideation);
