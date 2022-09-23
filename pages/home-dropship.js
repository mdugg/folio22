export default class HomeDropship extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.getModel();
	}
	disconnectedCallback() {}
	getModel() {
		let fetchDropship = fetch("../../content/dropship.json");
		let fetchHome = fetch("../../content/home.json");
		let fetchNav = fetch("../../global/navigation.json");

		return Promise.all([fetchDropship, fetchHome, fetchNav])
			.then((values) => {
				return Promise.all(values.map((response) => response.json()));
			})
			.then(([dropship, home, nav]) => {
				this.render([dropship, home, nav]);
			})
			.catch((error) => console.log(error));
	}
	render([dropship, home, nav]) {
		this.innerHTML = `	
            <article class="home-card card-dropship"> 
                <div class="home-card--content">
                    <h2 class="home-card--title">${dropship.intro.project}</h2>
                    <h3 class="home-card--subtitle">${dropship.intro.title}</h3>
                    <a href="${nav.dropship.linkURL}" class="home-card--btn mt1">
						View case study
					</a>
                </div>
                <figure class="card-dropship--illus">
					<svg class="card-dropship--svg">
						<use xlink:href="../../global/assets/illus-dropship.svg#illus-dropship">
						</use>
					</svg>
                </figure>
            </article>
		`;
	}
}
window.customElements.define("home-dropship", HomeDropship);
