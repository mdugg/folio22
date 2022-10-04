export default class FolioFooter extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.getModel();
		this.activeLink();
	}
	disconnectedCallback() {}
	getModel() {
		return new Promise((res, rej) => {
			fetch(
				"https://raw.githubusercontent.com/mdugg/folio22/main/global/navigation.json"
			)
				.then((data) => data.json())
				.then((json) => {
					this.render(json);
					res();
				})
				.catch((error) => rej(error));
		});
	}
	scrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
	render(data) {
		this.innerHTML = `	
			<footer class="folio-footer flex-row mt4 mb2">
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
                <a href="">
                    <span>Back to top</span>
                </a>
			</footer>
		`;
	}
}
window.customElements.define("folio-footer", FolioFooter);
