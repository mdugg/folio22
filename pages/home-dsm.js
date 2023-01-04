// ${nav.dsm.linkURL}

export default class HomeDSM extends HTMLElement {
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
		let fetchDSM = fetch(contentPath + "dsm.json");
		let fetchHome = fetch(contentPath + "home.json");
		let fetchNav = fetch(templatePath + "navigation.json");

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
            <article 
				class="home-card card-dsm"
				id="dsm"
				data-published="true"> 
                <div class="home-card--content">
                    <h2 class="home-card--title">${dsm.intro.project}</h2>
                    <h3 class="home-card--subtitle">${dsm.intro.title}</h3>
                    <a href="${nav.dsm.linkURL}" class="home-card--btn dsm mt1">
						View case study
					</a>
                </div>
				<figure class="card-dsm--illus">
					<img class="card-dsm--img" src="${home.dsm.illusImg}" alt="${home.dsm.illusImgAlt}" />
                </figure>  
            </article>
		`;
	}
}
window.customElements.define("home-dsm", HomeDSM);

// <figure class="card-dsm--illus">
// 	<svg class="card-dsm--svg">
// 		<use href="./global/assets/illus-dsm.svg#illus-dsm"></use>
// 	</svg>
// </figure>
