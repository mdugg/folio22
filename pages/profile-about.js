// https://raw.githubusercontent.com/mdugg/folio22/main/content/profile.json
// ../../content/profile.json

export default class ProfileAbout extends HTMLElement {
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
            <article class="folio-profile--content">
                <h1 class="folio-profile--title">
                    ${data.profile.title}
                </h1>
                <div class="folio-profile--text">
                    <h2 class="h3 mt0 mb0">${data.profile.aboutTitle}</h2>
                    ${Object.values(data.profile.aboutText)
						.map((value) => {
							return `<p> ${value} </p>`;
						})
						.join("")}
                    <h2 class="h3 mt3 mb0">${data.profile.practiceTitle}</h2>
                    <p>${data.profile.practiceText}</p>
                    <h2 class="h3 mt3 mb0">${data.profile.teamsTitle}</h2>
                    <p>${data.profile.teamsText}</p>
                    <h2 class="h3 mt3 mb0">${data.profile.outcomesTitle}</h2>
                    <p>${data.profile.outcomesText}</p>
                </div>
                <figure class="folio-profile--pic">
                    <img src="${data.profile.profilePic}" 
                        alt="${data.profile.profilePicAlt}" />
                    <figcaption>${data.profile.profilePicCaption}</figcaption>
                </figure>
            </article>
		`;
	}
}
window.customElements.define("profile-about", ProfileAbout);
