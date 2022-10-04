export default class FolioFooter extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.getModel();
	}
	disconnectedCallback() {
		this.scrollBtn.removeEventListener("click", this.scrollToTop);
	}
	getModel() {
		return new Promise((res, rej) => {
			fetch(
				"https://raw.githubusercontent.com/mdugg/folio22/main/global/navigation.json"
			)
				.then((data) => data.json())
				.then((json) => {
					this.render(json);
					this.scrollToTop();
					res();
				})
				.catch((error) => rej(error));
		});
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
                <a href="#" 
                    class="btn-scroll">
                    Top
                    <svg class="btn-scroll--icon" viewBox="0 0 384 512">
                        <path d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z"/>
                    </svg>
                </a>
			</footer>
		`;
	}
	scrollToTop() {
		this.scrollBtn = this.querySelector(".btn-scroll");
		// console.log(this.scrollBtn);
		this.scrollBtn.addEventListener("click", this.windowScroll);
	}
	windowScroll() {
		window.scrollTo({ top: 0, behavior: "smooth" });
		// console.log(window);
		console.log(this.scrollBtn);
	}
}
window.customElements.define("folio-footer", FolioFooter);
