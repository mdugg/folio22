// ${nav.webstore.linkURL}

export default class HomeWebstore extends HTMLElement {
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
		let fetchWebstore = fetch(contentPath + "webstore.json");
		let fetchHome = fetch(contentPath + "home.json");
		let fetchNav = fetch(templatePath + "navigation.json");

		return Promise.all([fetchWebstore, fetchHome, fetchNav])
			.then((values) => {
				return Promise.all(values.map((response) => response.json()));
			})
			.then(([webstore, home, nav]) => {
				this.render([webstore, home, nav]);
			})
			.catch((error) => console.log(error));
	}
	render([webstore, home, nav]) {
		this.innerHTML = `	
            <article 
				class="home-card card-webstore" 
				id="webstore"> 
                <div class="home-card--content">
                    <h2 class="home-card--title">${webstore.intro.project}</h2>
                    <h3 class="home-card--subtitle">${webstore.intro.title}</h3>
                    <a href="${nav.webstore.linkURL}" class="home-card--btn webstore mt1">
						View case study
					</a>
                </div>
                <figure class="card-webstore--illus">
					<img class="card-webstore--image" 
						src="${home.webstore.thumb01}" 
						alt="${home.webstore.thumb01Alt}" />
                </figure>
            </article>
		`;
	}
}
window.customElements.define("home-webstore", HomeWebstore);

// <small
// 	style="
// 		display: flex;
// 		justify-content: center;
// 		width: 11rem;
// 		margin-top: 1rem;
// 		font-family: 'Inter', sans-serif;
// 		font-weight: 600;
// 	"
// >
// 	(Work-in-progress)
// </small>;
