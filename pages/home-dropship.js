// ${nav.dropship.linkURL}

export default class HomeDropship extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.getModel();
	}
	disconnectedCallback() {}
	getModel() {
		let contentPath =
			"https://raw.githubusercontent.com/mdugg/folio22/main/content/";
		let templatePath =
			"https://raw.githubusercontent.com/mdugg/folio22/main/global/";
		let fetchDropship = fetch(contentPath + "dropship.json");
		let fetchHome = fetch(contentPath + "home.json");
		let fetchNav = fetch(templatePath + "navigation.json");

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
            <article 
				class="home-card card-dropship"
				id="dropship"
				data-published="false"> 
                <div class="home-card--content">
                    <h2 class="home-card--title">${dropship.intro.project}</h2>
                    <h3 class="home-card--subtitle">${dropship.intro.title}</h3>
                    <a href="#dropship" class="home-card--btn dropship mt1">
						Work-in-progress
					</a>
                </div>
                <figure class="card-dropship--illus">
					<svg class="card-dropship--svg">
						<use href="./global/assets/illus-dropship.svg#illus-dropship">
						</use>
					</svg>
                </figure>
            </article>
		`;
	}
}
window.customElements.define("home-dropship", HomeDropship);
