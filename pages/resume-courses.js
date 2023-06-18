// ./../content/resume.json
// https://raw.githubusercontent.com/mdugg/folio22/main/content/resume.json

export default class ResumeCourses extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.getModel();
	}
	disconnectedCallback() {}
	getModel() {
		return new Promise((res, rej) => {
			fetch("./../content/resume.json")
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
			<h4 class="cv-section--title mt2 mb1">
                Recent Courses
            </h4>
			<ul class="cv-courses">           
				${data.education.courses
					.map((course) => {
						return `
						<li class="course-card">
							<figure class="logo">
								<img
									class="${course.logoID}"
								 	src="${course.providerLogo}"
									alt="${course.providerLogoAlt}" />
							</figure>
							<a class="folio-link--effect"
								href="${course.link}"
								target="_blank">
									${course.name}
							</a>
							<span class="details">
								${course.provider} - ${course.date.year}
							</span>
						</li>`;
					})
					.join("")}
			</ul>
		`;
	}
}
window.customElements.define("resume-courses", ResumeCourses);

/*
Object.values(data.skills)
			.map((value) => {
				return `
					<article class="cv-skills--card">
						<p>card</p>
					</article>
                `;
			})
			.join("");
			*/
