export default class HomeWebstore extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.getModel();
	}
	disconnectedCallback() {}
	getModel() {
		let fetchWebstore = fetch("../../content/webstore.json");
		let fetchHome = fetch("../../content/home.json");
		let fetchNav = fetch("../../global/navigation.json");

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
            <article class="home-card card-webstore"> 
                <div class="home-card--content">
                    <h2 class="home-card--title">${webstore.intro.project}</h2>
                    <h3 class="home-card--subtitle">${webstore.intro.title}</h3>
                    <a href="${nav.webstore.linkURL}" class="home-card--btn mt1">View case study</a>
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
