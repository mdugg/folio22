export default class HomeFlexlabel extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.getModel();
	}
	disconnectedCallback() {}
	getModel() {
		let fetchFlex = fetch("../../content/flexlabel.json");
		let fetchHome = fetch("../../content/home.json");
		let fetchNav = fetch("../../global/navigation.json");

		return Promise.all([fetchFlex, fetchHome, fetchNav])
			.then((values) => {
				return Promise.all(values.map((response) => response.json()));
			})
			.then(([flex, home, nav]) => {
				this.render([flex, home, nav]);
			})
			.catch((error) => console.log(error));
	}
	render([flex, home, nav]) {
		this.innerHTML = `	
            <article class="home-card card-flexlabel"> 
                <div class="home-card--content">
                    <h2 class="home-card--title">${flex.intro.project}</h2>
                    <h3 class="home-card--subtitle">${flex.intro.title}</h3>
                    <a href="${nav.flexlabel.linkURL}" class="home-card--btn mt1">View case study</a>
                </div>
                <figure class="card-flexlabel--illus">
					<div class="card-flexlabel--grid">
						<span class="card-flexlabel--thumb">
							<svg class="card-flexlabel--logo">
								<use xlink:href="../../global/assets/logos-sprite.svg#logo-usps-mono">
								</use>
							</svg>
						</span>
						<span class="card-flexlabel--thumb">
							<img class="card-flexlabel--image" 
								src="${home.flexlabel.thumb04}" 
								alt="${home.flexlabel.thumb04Alt}" />
						</span>
						<span class="card-flexlabel--thumb">
							<img class="card-flexlabel--image" 
								src="${home.flexlabel.thumb05}" 
								alt="${home.flexlabel.thumb05Alt}" />
						</span>
						<span class="card-flexlabel--thumb">
							<svg class="card-flexlabel--logo">
								<use xlink:href="../../global/assets/logos-sprite.svg#logo-ups-mono">
								</use>
							</svg>
						</span>
						<span class="card-flexlabel--thumb">
							<svg class="card-flexlabel--logo">
								<use xlink:href="../../global/assets/logos-sprite.svg#logo-fedex-mono">
								</use>
							</svg>
						</span>
						<span class="card-flexlabel--thumb">
							<img class="card-flexlabel--image" 
								src="${home.flexlabel.thumb03}" 
								alt="${home.flexlabel.thumb03Alt}" />
						</span>
					</div>
                </figure>
            </article>
		`;
	}
}
window.customElements.define("home-flexlabel", HomeFlexlabel);