// https://raw.githubusercontent.com/mdugg/folio22/main/content/resume.json
// ../../content/resume.json

export default class ResumeSkills extends HTMLElement {
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
				"https://raw.githubusercontent.com/mdugg/folio22/main/content/resume.json"
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
		this.innerHTML = Object.values(data.skills)
			.map((value) => {
				return `
    <article class="cv-skills--card">
        <h4 class="cv-section--title mt2">
            ${value.subtitle}
        </h4>
        <ul class="cv-list">           
            ${value.points
				.map((item) => {
					return `
                <li class="item">
                    <svg class="icon" viewBox="0 0 320 512">
                        <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/>
                        </svg>
                    ${item}
                </li>`;
				})
				.join("")}
        </ul>
    </article>
                `;
			})
			.join("");
	}
}
window.customElements.define("resume-skills", ResumeSkills);
