// https://raw.githubusercontent.com/mdugg/folio22/main/content/profile.json
// ../../content/profile.json

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
			fetch(
				"https://raw.githubusercontent.com/mdugg/folio22/main/content/profile.json"
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
            <aside class="folio-profile--gallery">
                <figure class="profile-travel--photos">
                    ${Object.values(data.gallery.photos)
						.map((value) => {
							return `
                                <img class="photo" 
									src="${value.url}" 
									alt="${value.alt}">
                            `;
						})
						.join("")}
                        <figcaption class="folio-caption">
                            ${data.gallery.caption}
                        </figcaption>
                </figure>
            </aside>
		`;
	}
}
window.customElements.define("profile-gallery", ProfileGallery);
