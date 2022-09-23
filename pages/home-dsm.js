export default class HomeDSM extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.getModel();
	}
	disconnectedCallback() {}
	getModel() {
		let fetchDSM = fetch("../../content/dsm.json");
		let fetchHome = fetch("../../content/home.json");
		let fetchNav = fetch("../../global/navigation.json");

		return Promise.all([fetchDSM, fetchHome, fetchNav])
			.then((values) => {
				return Promise.all(values.map((response) => response.json()));
			})
			.then(([dsm, home, nav]) => {
				this.render([dsm, home, nav]);
			})
			.catch((error) => console.log(error));
	}
	render([dsm, home, nav]) {
		this.innerHTML = `	
            <article class="home-card card-dsm"> 
                <div class="home-card--content">
                    <h2 class="home-card--title">${dsm.intro.project}</h2>
                    <h3 class="home-card--subtitle">${dsm.intro.title}</h3>
                    <a href="${nav.dsm.linkURL}" class="home-card--btn mt1">
						View case study
					</a>
                </div>
				<figure class="card-dsm--illus">
					<svg class="card-dsm--svg">
						<use xlink:href="../../global/assets/illus-dsm.svg#illus-dsm">
						</use>
					</svg>
                </figure>
            </article>
		`;
	}
}
window.customElements.define("home-dsm", HomeDSM);
