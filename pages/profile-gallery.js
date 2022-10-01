export default class ProfileGallery extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.getModel();
	}
	disconnectedCallback() {}
	getModel() {
		return new Promise((res, rej) => {
			fetch("../../content/profile.json")
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
            <aside class="folio-profile--gallery">
                <figure class="profile-travel--photos">
                    ${Object.values(data.gallery)
						.map((value) => {
							return `
                                <img src="${value.url}" alt="${value.alt}">
                            `;
						})
						.join("")}
                        <figcaption>
                            
                        </figcaption>
                </figure>
            </aside>
		`;
	}
}
window.customElements.define("profile-gallery", ProfileGallery);
