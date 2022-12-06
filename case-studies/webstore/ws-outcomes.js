// https://raw.githubusercontent.com/mdugg/folio22/main/content/webstore.json
// ../../content/webstore.json

export default class WSoutcomes extends HTMLElement {
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
                        id="${data.outcomes.section}">
                            ${data.outcomes.section}
                    </div>	
                    <h2 class="h2 mt025">${data.outcomes.sectionTitle}</h2>	
                    ${Object.values(data.outcomes.text)
						.map((value) => {
							return "<p>" + value + "</p>";
						})
						.join("")}
					<ul class="webstore-stats">
						<li class="webstore-stats-item">
							<span class="text">
								Gross Merchandise Value
							</span>
							<svg class="icon" viewBox="0 0 512 448">
								<path d="M496 416H80C53.53 416 32 394.5 32 368V16C32 7.16 24.84 0 16 0C7.16 0 0 7.16 0 16V368C0 412.1 35.88 448 80 448H496C504.844 448 512 440.844 512 432C512 423.156 504.8 416 496 416ZM123.3 283.3L224 182.6L308.69 267.29C314.94 273.54 325.07 273.54 331.31 267.29L448 150.6V240C448 248.8 455.2 256 464 256C472.8 256 480 248.8 480 240V112C480 103.2 472.8 96 464 96H336.9C327.2 96 320 103.2 320 112C320 120.8 327.2 128 336 128H425.38L320 233.4L235.3 148.7C229.05 142.45 218.92 142.45 212.68 148.7L100.68 260.7C94.43 266.95 94.43 277.08 100.68 283.32C106.9 289.6 117.1 289.6 123.3 283.3Z" />
							</svg>
						</li>
						<li class="webstore-stats-item">
							<span class="text">
								Average Order Value
							</span>
							<svg class="icon" viewBox="0 0 512 448">
								<path d="M496 416H80C53.53 416 32 394.5 32 368V16C32 7.16 24.84 0 16 0C7.16 0 0 7.16 0 16V368C0 412.1 35.88 448 80 448H496C504.844 448 512 440.844 512 432C512 423.156 504.8 416 496 416ZM123.3 283.3L224 182.6L308.69 267.29C314.94 273.54 325.07 273.54 331.31 267.29L448 150.6V240C448 248.8 455.2 256 464 256C472.8 256 480 248.8 480 240V112C480 103.2 472.8 96 464 96H336.9C327.2 96 320 103.2 320 112C320 120.8 327.2 128 336 128H425.38L320 233.4L235.3 148.7C229.05 142.45 218.92 142.45 212.68 148.7L100.68 260.7C94.43 266.95 94.43 277.08 100.68 283.32C106.9 289.6 117.1 289.6 123.3 283.3Z" />
							</svg>
						</li>
						<li class="webstore-stats-item">
							<span class="text">
								New Customers
							</span>
							<svg class="icon" viewBox="0 0 512 448">
								<path d="M496 416H80C53.53 416 32 394.5 32 368V16C32 7.16 24.84 0 16 0C7.16 0 0 7.16 0 16V368C0 412.1 35.88 448 80 448H496C504.844 448 512 440.844 512 432C512 423.156 504.8 416 496 416ZM123.3 283.3L224 182.6L308.69 267.29C314.94 273.54 325.07 273.54 331.31 267.29L448 150.6V240C448 248.8 455.2 256 464 256C472.8 256 480 248.8 480 240V112C480 103.2 472.8 96 464 96H336.9C327.2 96 320 103.2 320 112C320 120.8 327.2 128 336 128H425.38L320 233.4L235.3 148.7C229.05 142.45 218.92 142.45 212.68 148.7L100.68 260.7C94.43 266.95 94.43 277.08 100.68 283.32C106.9 289.6 117.1 289.6 123.3 283.3Z" />
							</svg>
						</li>
						<li class="webstore-stats-item">
							<span class="text">
								App Downloads
							</span>
							<svg class="icon" viewBox="0 0 512 448">
								<path d="M496 416H80C53.53 416 32 394.5 32 368V16C32 7.16 24.84 0 16 0C7.16 0 0 7.16 0 16V368C0 412.1 35.88 448 80 448H496C504.844 448 512 440.844 512 432C512 423.156 504.8 416 496 416ZM123.3 283.3L224 182.6L308.69 267.29C314.94 273.54 325.07 273.54 331.31 267.29L448 150.6V240C448 248.8 455.2 256 464 256C472.8 256 480 248.8 480 240V112C480 103.2 472.8 96 464 96H336.9C327.2 96 320 103.2 320 112C320 120.8 327.2 128 336 128H425.38L320 233.4L235.3 148.7C229.05 142.45 218.92 142.45 212.68 148.7L100.68 260.7C94.43 266.95 94.43 277.08 100.68 283.32C106.9 289.6 117.1 289.6 123.3 283.3Z" />
							</svg>
						</li>
						<li class="webstore-stats-item">
							<span class="text">
								Conversion Rate
							</span>
							<svg class="icon" viewBox="0 0 512 448">
								<path d="M496 416H80C53.53 416 32 394.5 32 368V16C32 7.16 24.84 0 16 0C7.16 0 0 7.16 0 16V368C0 412.1 35.88 448 80 448H496C504.844 448 512 440.844 512 432C512 423.156 504.8 416 496 416ZM123.3 283.3L224 182.6L308.69 267.29C314.94 273.54 325.07 273.54 331.31 267.29L448 150.6V240C448 248.8 455.2 256 464 256C472.8 256 480 248.8 480 240V112C480 103.2 472.8 96 464 96H336.9C327.2 96 320 103.2 320 112C320 120.8 327.2 128 336 128H425.38L320 233.4L235.3 148.7C229.05 142.45 218.92 142.45 212.68 148.7L100.68 260.7C94.43 266.95 94.43 277.08 100.68 283.32C106.9 289.6 117.1 289.6 123.3 283.3Z" />
							</svg>
						</li>
						<li class="webstore-stats-item">
							<span class="text-half">
								Adoption Rate
							</span>
							<span class="icon-half no-wrap">
								> 90%
							</span>
						</li>
					</ul>	
                </div>
			</section>
		`;
	}
}
window.customElements.define("ws-outcomes", WSoutcomes);
