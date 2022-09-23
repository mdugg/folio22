export default class HomeIntro extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.getModel();
	}
	disconnectedCallback() {}
	getModel() {
		return new Promise((res, rej) => {
			fetch("../../content/home.json")
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
            <article class="folio-home--intro"> 
                <div class="folio-home--content">
                    <h1 class="folio-home--title">${data.intro.headline}</h1>
                    <p class="mt4">${data.intro.para1}</p>
                </div>
                <figure class="folio-home--illus">
                    <svg class="illus-double-diamond">
                        <use xlink:href="./global/assets/illus-double-diamond.svg#illus-double-diamond">
                        </use>
                    </svg>
                </figure>    
            </article>
		`;
	}
}
window.customElements.define("home-intro", HomeIntro);
