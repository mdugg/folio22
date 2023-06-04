// https://raw.githubusercontent.com/mdugg/folio22/main/content/resume.json
// ../../content/resume.json

export default class ResumeExperience extends HTMLElement {
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
		// console.log(data.experience);
		this.innerHTML = Object.values(data.experience)
			.map((value) => {
				return `
    <article class="cv-experience--card">
        <h3 class="cv-job--title">
            <span class="dates">
                ${value.dateStart.year} ${
					value.dateEnd.year !== value.dateStart.year
						? "- " + value.dateEnd.year
						: ""
				}
            </span>
            <span class="company">
                <a class="folio-link--effect" 
                    href="${value.companyLink}" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        ${value.company}
                </a>
            </span>
            <span class="location">
                <svg class="icon" viewBox="0 0 384 512">
                    <path d="M192 0C85.97 0 0 85.97 0 192c0 77.41 26.97 99.03 172.3 309.7c9.531 13.77 29.91 13.77 39.44 0C357 291 384 269.4 384 192C384 85.97 298 0 192 0zM192 271.1c-44.13 0-80-35.88-80-80S147.9 111.1 192 111.1s80 35.88 80 80S236.1 271.1 192 271.1z"/>
                    </svg>
                    ${value.workLocation}
            </span>
        </h3>
        <h4 class="cv-section--title mt15">
            Role:
            <strong>${value.jobTitle}</strong>
        </h4>
        <h4 class="cv-section--title mt15">
            Summary:
        </h4>
        <p class="cv-text">
            ${value.jobSummary}
        </p>
        <h5 class="cv-section--title mt15">
            Responsibilities:
        </h5>
        <ul class="cv-list">
            ${value.jobResponsibilities
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
window.customElements.define("resume-experience", ResumeExperience);

// ${value.dateStart.year} - ${value.dateEnd.year}
