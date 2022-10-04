export default class HomeDCL extends HTMLElement {
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
		let fetchDCL = fetch(contentPath + "decoupledLive.json");
		let fetchHome = fetch(contentPath + "home.json");
		let fetchNav = fetch(templatePath + "navigation.json");

		return Promise.all([fetchDCL, fetchHome, fetchNav])
			.then((values) => {
				return Promise.all(values.map((response) => response.json()));
			})
			.then(([dcl, home, nav]) => {
				this.render([dcl, home, nav]);
			})
			.catch((error) => console.log(error));
	}
	render([dcl, home, nav]) {
		this.innerHTML = `	
            <article class="home-card card-dcl"> 
                <div class="home-card--content">
                    <h2 class="home-card--title">${dcl.intro.project}</h2>
                    <h3 class="home-card--subtitle">${dcl.intro.title}</h3>
                    <a href="${nav.dcl.linkURL}" class="home-card--btn dcl mt1">
						View case study
					</a>
                </div>
                <figure class="card-dcl--illus">
					<span class="card-dcl--thumb">
						<img src="${home.dcl.thumb}" alt="${home.dcl.thumbAlt}" />
					</span>
                    <video class="card-dcl--video" autoplay="autoplay" preload loop>
                        <source src="${home.dcl.video}" type="video/mp4">
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </figure>
            </article>
		`;
	}
}
window.customElements.define("home-dcl", HomeDCL);
