export default class FolioHeader2 extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.getModel();
	}
	disconnectedCallback() {}
	getModel() {
		const root = location.href;
		return new Promise((res, rej) => {
			fetch(root + "/folio/global/navigation.json")
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
			<header class="folio-header flex-row">
				<a href="/" class="folio-header--link flex-row">
					<svg class="md-logotype">
						<use 
							xlink:href="../../global/assets/md-logo.svg#md-logo">
						</use>
					</svg>
				</a>
				<nav class="folio-nav">
					<ul class="folio-nav__list">
                        <li class="folio-nav__item">
                            <a class="folio-nav__link" href="${data.home.linkURL}">
                                <span>
                                    ${data.home.linkName}
                                </span>	
                            </a>
                        </li>
                        <li class="folio-nav__item">
                            <a class="folio-nav__link" href="${data.work.linkURL}">
                                <span>
                                    ${data.work.linkName}
                                </span>	
                            </a>
                        </li>
                        <li class="folio-nav__item">
                            <a class="folio-nav__link" href="${data.profile.linkURL}">
                                <span>
                                    ${data.profile.linkName}
                                </span>	
                            </a>
                        </li>
                        <li class="folio-nav__item">
                            <a class="folio-nav__link" href="${data.resume.linkURL}">
                                <span>
                                    ${data.resume.linkName}
                                </span>	
                            </a>
                        </li>
                    </ul>
				</nav>
				<ul class="folio-sm--links">
					<li class="folio-sm--item">
						<a class="folio-sm--link" 
							target="_blank"
							href="${data.github.linkURL}"
							title="View Github account">
							<span class="screen-reader-only">
								${data.github.linkName}
							</span>	
							<svg class="folio-sm--link_icon">
								<use xlink:href="../../global/assets/icons-sprite.svg#icon-github">
								</use>
							</svg>
						</a>
					</li>
					<li class="folio-sm--item">
						<a class="folio-sm--link" 
							target="_blank"
							href="${data.linkedin.linkURL}"
							title="View Linkedin account">
							<span class="screen-reader-only">
								${data.linkedin.linkName}
							</span>	
							<svg class="folio-sm--link_icon">
								<use xlink:href="../../global/assets/icons-sprite.svg#icon-linkedin">
								</use>
							</svg>
						</a>
					</li>
				</ul>
			</header>
		`;
	}
}
window.customElements.define("folio-header2", FolioHeader2);
