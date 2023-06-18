// ./../content/resume.json
// https://raw.githubusercontent.com/mdugg/folio22/main/content/resume.json

export default class ResumeEducation extends HTMLElement {
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
		return (this.innerHTML = `
            <article class="cv-skills--card">
                <h4 class="cv-section--title mt2">
                    College
                </h4>
                <figure class="cv-logo-college mt1">
                    <img src="${data.education.college.collegeLogo}" 
                        alt="${data.education.college.collegeLogoAlt}" />
                </figure>
                <ul class="cv-list">
                    <li class="mt1">
                        <a class="folio-link--effect" href="${data.education.college.collegeURL}" target="_blank">
                            ${data.education.college.collegeName}
                        </a>
                    </li>
                    <li class="mt1">
                        <strong>
                            ${data.education.college.courseName}
                        </strong>
                    </li>
                    <li class="mt1">
                        ${data.education.college.courseDesc}
                    </li>
                </ul>

            </article>
        `);
	}
}
window.customElements.define("resume-education", ResumeEducation);
