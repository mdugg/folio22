// https://raw.githubusercontent.com/mdugg/folio22/main/content/decoupledLive.json
// ../../content/decoupledLive.json

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
					<svg class="icon-figma" viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg">
						<path fill="#1ABCFE" d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" />
						<path fill="#0ACF83" d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" />
						<path fill="#FF7262" d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" />
						<path fill="#F24E1E" d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" />
						<path fill="#A259FF" d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" />
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
					<svg class="icon-figma" viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg">
						<path fill="#1ABCFE" d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" />
						<path fill="#0ACF83" d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" />
						<path fill="#FF7262" d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" />
						<path fill="#F24E1E" d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" />
						<path fill="#A259FF" d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" />
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
					<svg class="icon-figma" viewBox="0 0 38 57" xmlns="http://www.w3.org/2000/svg">
						<path fill="#1ABCFE" d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z" />
						<path fill="#0ACF83" d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z" />
						<path fill="#FF7262" d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z" />
						<path fill="#F24E1E" d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z" />
						<path fill="#A259FF" d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z" />
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
