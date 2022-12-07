// ${nav.flexlabel.linkURL}

export default class HomeFlexlabel extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
		this.getModel();
	}
	disconnectedCallback() {}
	getModel() {
		let contentPath =
			"https://raw.githubusercontent.com/mdugg/folio22/main/content/";
		let templatePath =
			"https://raw.githubusercontent.com/mdugg/folio22/main/global/";
		let fetchFlex = fetch(contentPath + "flexlabel.json");
		let fetchHome = fetch(contentPath + "home.json");
		let fetchNav = fetch(templatePath + "navigation.json");

		return Promise.all([fetchFlex, fetchHome, fetchNav])
			.then((values) => {
				return Promise.all(values.map((response) => response.json()));
			})
			.then(([flex, home, nav]) => {
				this.render([flex, home, nav]);
			})
			.catch((error) => console.log(error));
	}
	render([flex, home, nav]) {
		this.innerHTML = `	
            <article 
				class="home-card card-flexlabel"
				id="flexlabel"
				data-published="false"> 
                <div class="home-card--content">
                    <h2 class="home-card--title">${flex.intro.project}</h2>
                    <h3 class="home-card--subtitle">${flex.intro.title}</h3>
                    <a href="#flexlabel" class="home-card--btn flexlabel mt1">
						Work-in-progress
					</a>
                </div>
                <figure class="card-flexlabel--illus">
					<div class="card-flexlabel--grid">
						<span class="card-flexlabel--thumb">
							<svg class="card-flexlabel--logo" viewBox="0 0 501 600">
								<g clip-path="url(#clip0_143_181)">
									<path d="M250.714 600C250.714 600 110.434 538.814 67.1557 504.49C22.3852 465.689 0 413.457 0 353.763V55.293C110.434 -4.40087 250.714 0.0761689 250.714 0.0761689C250.714 0.0761689 390.995 -4.40087 501.429 55.293V352.27C501.429 411.964 479.044 464.196 434.273 502.997C390.995 538.814 250.714 600 250.714 600ZM20.8929 353.763C20.8929 410.472 41.7857 455.242 80.5868 488.074C116.403 517.921 222.36 564.184 250.714 577.615C280.561 564.184 386.518 516.429 420.842 488.074C459.643 456.735 480.536 408.979 480.536 353.763V61.2624C332.794 47.8313 156.697 55.293 19.4005 182.143L20.8929 353.763Z" />
									<path d="M392.489 311.977C411.889 323.916 419.351 331.377 420.843 344.808C420.843 359.732 410.397 368.686 393.981 368.686C380.55 368.686 364.134 361.224 352.195 350.778V392.564C365.627 400.025 382.042 405.995 399.95 405.995C443.229 405.995 464.121 376.148 464.121 347.793C465.614 322.423 458.152 301.53 420.843 280.637C404.428 270.191 390.996 264.222 390.996 249.298C390.996 234.375 404.428 226.913 416.366 226.913C431.29 226.913 446.213 235.867 455.167 244.821V206.02C447.706 200.051 431.29 191.097 407.412 192.589C377.565 194.081 347.718 214.974 347.718 249.298C349.211 273.176 356.672 291.084 392.489 311.977ZM241.762 403.01C246.239 404.502 252.208 405.995 262.654 405.995C311.902 405.995 340.257 361.224 340.257 297.053C340.257 231.39 310.41 192.589 258.177 192.589C234.3 192.589 214.899 197.066 198.483 207.512V497.028H241.762V403.01ZM241.762 229.898C246.239 228.405 252.208 225.421 256.685 225.421C282.055 225.421 292.501 246.313 292.501 295.561C292.501 343.316 279.07 367.194 253.7 367.194C247.731 367.194 241.762 365.701 240.269 364.209L241.762 229.898ZM108.943 405.995C135.805 405.995 158.19 400.025 174.606 388.086V195.574H129.835V362.717C125.358 367.194 117.897 367.194 108.943 367.194C88.0497 367.194 86.5574 347.793 86.5574 337.347V195.574H41.7869V334.362C41.7869 382.117 65.6645 405.995 108.943 405.995Z" />
								</g>
								<defs>
									<clipPath id="clip0_143_181">
										<rect width="501" height="600" fill="white"/>
									</clipPath>
								</defs>
							</svg>
						</span>
						<span class="card-flexlabel--thumb">
							<img class="card-flexlabel--image" 
								src="${home.flexlabel.thumb04}" 
								alt="${home.flexlabel.thumb04Alt}" />
						</span>
						<span class="card-flexlabel--thumb">
							<img class="card-flexlabel--image" 
								src="${home.flexlabel.thumb05}" 
								alt="${home.flexlabel.thumb05Alt}" />
						</span>
						<span class="card-flexlabel--thumb">
							<svg class="card-flexlabel--logo">
								<use href="./global/assets/logos-sprite.svg#logo-ups-mono">
								</use>
							</svg>
						</span>
						<span class="card-flexlabel--thumb">
							<svg class="card-flexlabel--logo">
								<use href="./global/assets/logos-sprite.svg#logo-fedex-mono">
								</use>
							</svg>
						</span>
						<span class="card-flexlabel--thumb">
							<img class="card-flexlabel--image" 
								src="${home.flexlabel.thumb03}" 
								alt="${home.flexlabel.thumb03Alt}" />
						</span>
					</div>
                </figure>
            </article>
		`;
	}
}
window.customElements.define("home-flexlabel", HomeFlexlabel);

// <svg class="card-flexlabel--logo">
// 		<use href="./global/assets/logos-sprite.svg#logo-usps-mono"></use>
// </svg>
