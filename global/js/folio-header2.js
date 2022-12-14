// ../../global/navigation.json
// https://raw.githubusercontent.com/mdugg/folio22/main/global/navigation.json

export default class FolioHeader extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.getModel();
		// this.activeLink();
	}
	disconnectedCallback() {
		this.getMobileNavBtn.removeEventListener("click", this.showMobileNav);
	}
	getModel() {
		// const root = window.location.origin;
		// console.log(root);
		return new Promise((res, rej) => {
			fetch(
				"https://raw.githubusercontent.com/mdugg/folio22/main/global/navigation.json"
			)
				.then((data) => data.json())
				.then((json) => {
					this.render(json);
					this.getMobileNavBtn();
					res();
				})
				.catch((error) => rej(error));
		});
	}
	// activeLink() {
	// 	let currentLocation = window.location.pathname.split("/");
	// 	let menuItem = document.querySelectorAll(".folio-nav__link");
	// 	let menuItemLength = menuItem.length;
	// 	console.log(
	// 		currentLocation[2] + " / " + menuItem[0] + " / " + menuItemLength
	// 	);
	// 	for (let i = 0; i < menuItemLength; i++) {
	// 		if (menuItemLength[i].href === currentLocation[2]) {
	// 			menuItem[i].className = "active";
	// 		}
	// 	}
	// }
	render(data) {
		this.innerHTML = `	
			<header class="folio-header flex-row">
				<a href="${data.home.linkURL}" 
					class="folio-header--link flex-row">
					<svg 
						class="md-logotype" 
						xmlns="http://www.w3.org/2000/svg" 
						viewBox="0 0 213 92">
						<path d="M0.559998 90V88.72L2.352 88.208C3.97333 87.7813 5.08266 87.056 5.68 86.032C6.36266 85.008 6.74666 83.6427 6.832 81.936V41.872C6.832 39.9947 6.53333 38.6293 5.936 37.776C5.33866 36.8373 4.18666 36.1973 2.48 35.856L0.559998 35.344V34.064L22.448 26.64L23.728 27.92L24.752 36.624C27.568 33.808 30.768 31.4187 34.352 29.456C38.0213 27.4933 41.8187 26.512 45.744 26.512C49.84 26.512 53.1253 27.3653 55.6 29.072C58.0747 30.6933 59.952 33.2533 61.232 36.752C64.56 33.5947 68.144 31.12 71.984 29.328C75.9093 27.4507 79.7067 26.512 83.376 26.512C89.4347 26.512 93.872 27.9627 96.688 30.864C99.5893 33.7653 101.04 38.3307 101.04 44.56V82.064C101.04 85.392 102.576 87.4827 105.648 88.336L107.056 88.72V90H77.488V88.72L78.768 88.336C80.3893 87.824 81.4987 87.056 82.096 86.032C82.7787 85.008 83.12 83.6427 83.12 81.936V42.768C83.12 39.184 82.48 36.752 81.2 35.472C79.92 34.1067 77.872 33.424 75.056 33.424C72.8373 33.424 70.6613 33.936 68.528 34.96C66.48 35.8987 64.304 37.3493 62 39.312C62.4267 40.6773 62.6827 42.1707 62.768 43.792C62.9387 45.4133 63.024 47.12 63.024 48.912V82.064C63.1093 85.392 64.6453 87.4827 67.632 88.336L68.784 88.72V90H39.088V88.72L40.88 88.208C42.5013 87.696 43.6107 86.9707 44.208 86.032C44.8907 85.008 45.232 83.6427 45.232 81.936V42.896C45.232 39.4827 44.592 37.0507 43.312 35.6C42.1173 34.1493 40.0267 33.424 37.04 33.424C35.0773 33.424 33.1147 33.936 31.152 34.96C29.1893 35.8987 27.1413 37.3067 25.008 39.184V82.064C25.008 85.392 26.5013 87.4827 29.488 88.336L30.64 88.72V90H0.559998Z" />
						<path d="M139.196 91.92C134.161 91.92 129.639 90.8107 125.628 88.592C121.617 86.288 118.417 82.7893 116.028 78.096C113.724 73.3173 112.572 67.216 112.572 59.792C112.572 52.2827 113.895 46.096 116.54 41.232C119.185 36.2827 122.684 32.6133 127.036 30.224C131.388 27.7493 136.124 26.512 141.244 26.512C144.231 26.512 147.089 26.8107 149.82 27.408C152.551 28.0053 154.983 28.9013 157.116 30.096V13.456C157.116 11.664 156.817 10.3413 156.22 9.48798C155.708 8.63464 154.556 8.03731 152.764 7.69598L150.332 7.18398V5.90398L173.628 0.271973L175.036 1.42397L174.524 19.344V81.936C174.524 83.6427 174.823 85.0507 175.42 86.16C176.017 87.184 177.127 87.9093 178.748 88.336L179.9 88.72V90L158.012 91.408L156.86 86.8C154.556 88.336 151.911 89.5733 148.924 90.512C146.023 91.4507 142.78 91.92 139.196 91.92ZM146.62 87.184C150.204 87.184 153.489 86.1173 156.476 83.984V33.168C153.319 31.12 150.076 30.096 146.748 30.096C142.652 30.096 139.153 32.4853 136.252 37.264C133.351 41.9573 131.9 49.3813 131.9 59.536C131.9 69.6907 133.265 76.8587 135.996 81.04C138.727 85.136 142.268 87.184 146.62 87.184Z" />
						<path d="M201.45 91.92C198.378 91.92 195.775 90.8533 193.642 88.72C191.509 86.5867 190.442 84.0267 190.442 81.04C190.442 78.0533 191.509 75.4507 193.642 73.232C195.775 71.0133 198.378 69.904 201.45 69.904C204.522 69.904 207.125 71.0133 209.258 73.232C211.391 75.4507 212.458 78.0533 212.458 81.04C212.458 84.0267 211.391 86.5867 209.258 88.72C207.125 90.8533 204.522 91.92 201.45 91.92Z" />
					</svg>
				</a>
				<nav class="folio-nav">
					<ul class="folio-nav__list">
                        <li class="folio-nav__item">
                            <a class="folio-nav__link nav-home" 
								href="${data.home.linkURL}">
                                <span>
                                    ${data.home.linkName}
                                </span>	
                            </a>
                        </li>
                        <li class="folio-nav__item">
                            <a class="folio-nav__link nav-work" 
								href="${data.work.linkURL}">
                                <span>
                                    ${data.work.linkName}
                                </span>	
                            </a>
                        </li>
                        <li class="folio-nav__item">
                            <a class="folio-nav__link nav-profile" 
								href="${data.profile.linkURL}">
                                <span>
                                    ${data.profile.linkName}
                                </span>	
                            </a>
                        </li>
                        <li class="folio-nav__item">
                            <a class="folio-nav__link nav-resume" 
								href="${data.resume.linkURL}">
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
							<span class="folio-sm--link_icon">
								<svg class="folio-icon--github" 
									viewBox="0 0 496 512" 
									xmlns="http://www.w3.org/2000/svg">
									<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
								</svg>
							</span>
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
							<span class="folio-sm--link_icon">
								<svg class="folio-icon--linkedin" 
									viewBox="0 0 448 512" 
									xmlns="http://www.w3.org/2000/svg">
										<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
								</svg>
							</span>
						</a>
					</li>
				</ul>
				<button class="folio-nav--button">
					<svg class="folio-nav--bars" 
						viewBox="0 0 100 100">
							<path class="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
							<path class="line middle" d="m 30,50 h 40" />
							<path class="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
						</svg>
				</button>
				<section class="mobile-nav--overlay">
					<nav class="mobile-nav">
						<ul class="mobile-nav--list">
							<li class="mobile-nav--item">
								<a class="mobile-nav--link nav-home"
									href="${data.home.linkURL}">
                                    ${data.home.linkName}
								</a>
							</li>
							<li class="mobile-nav--item">
								<a class="mobile-nav--link nav-profile"
									href="${data.profile.linkURL}">
                                    ${data.profile.linkName}
								</a>
							</li>
							<li class="mobile-nav--item">
								<a class="mobile-nav--link nav-resume"
									href="${data.resume.linkURL}">
                                    ${data.resume.linkName}
								</a>
							</li>
							<li class="mobile-nav--item">
								<span class="label">Case study</span>
								<a class="mobile-nav--link nav-dcl"
									href="${data.dcl.linkURL}">
                                    ${data.dcl.linkName}
								</a>
							</li>
							<li class="mobile-nav--item">
								<span class="label">Case study</span>
								<a class="mobile-nav--link nav-webstore"
									href="${data.webstore.linkURL}">
                                    ${data.webstore.linkName}
								</a>
							</li>
							<li class="mobile-nav--item">
								<span class="label">Case study</span>
								<a class="mobile-nav--link nav-flexlabel"
									href="${data.flexlabel.linkURL}">
                                    ${data.flexlabel.linkName}
								</a>
							</li>
							<li class="mobile-nav--item">
								<a class="mobile-nav--link nav-linkedin"
									href="${data.linkedin.linkURL}"
									target="_blank">
                                    ${data.linkedin.linkName}
									<svg class="icon"
										viewBox="0 0 512 512">
										<path d="M392 320c-13.25 0-24 10.75-24 24v112c0 4.406-3.594 8-8 8h-304c-4.406 0-8-3.594-8-8v-304c0-4.406 3.594-8 8-8h112C181.3 144 192 133.3 192 120S181.3 96 168 96h-112C25.13 96 0 121.1 0 152v304C0 486.9 25.13 512 56 512h304c30.88 0 56-25.12 56-56v-112C416 330.8 405.3 320 392 320zM488 0H320c-13.25 0-24 10.75-24 24S306.8 48 320 48h110.1L183 295c-9.375 9.375-9.375 24.56 0 33.94C187.7 333.7 193.8 336 200 336s12.28-2.344 16.97-7.031L464 81.94V192c0 13.25 10.75 24 24 24S512 205.3 512 192V24C512 10.75 501.3 0 488 0z"/>
									</svg>
								</a>
							</li>
						</ul>
					</nav>
				</section>
			</header>
		`;
	}
	getMobileNavBtn() {
		this.btnMobileNav = this.querySelector(".folio-nav--button");
		this.btnMobileNav.addEventListener(
			"click",
			this.showMobileNav.bind(this)
		);
	}
	showMobileNav() {
		// dom traversal
		this.body = document.querySelector("body");
		this.btnBars = this.querySelector(".folio-nav--bars");
		this.mobileNav = this.querySelector(".mobile-nav--overlay");
		// dom manipulation
		this.body.classList.toggle("lock-scroll");
		this.btnBars.classList.toggle("active");
		this.mobileNav.classList.toggle("visible");
	}
}
window.customElements.define("folio-header", FolioHeader);
