// https://raw.githubusercontent.com/mdugg/folio22/main/content/home.json
// ../content/home.json

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
			fetch(
				"https://raw.githubusercontent.com/mdugg/folio22/main/content/home.json"
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
            <article class="folio-home--intro"> 
				<h1 class="folio-home--title">${data.intro.headline}</h1>
				<div class="folio-home--text">
					${Object.values(data.intro.text)
						.map((value) => {
							return `<p class="mt0 mb1"> ${value} </p>`;
						})
						.join("")}
				</div>
                <figure class="folio-home--illus">
					<img src="${data.intro.illusImg}" alt="${data.intro.illusImgAlt}" />
                </figure>    
            </article>
		`;
	}
}
window.customElements.define("home-intro", HomeIntro);

// <svg class="illus-double-diamond">
// 		<use xlink:href="./global/assets/illus-double-diamond.svg#illus-double-diamond"></use>
// </svg>;
