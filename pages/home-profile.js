class IntroProfile extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
			<style>
				:host {
					display: flex;
				}
				.intro-para {
					font-family: var(--text-sans);
					font-size: 1rem;
					line-height: 1.5;
				}
			</style>
            <article>
                <p class="intro-para"></p>
            </article>
		`;
	}
	connectedCallback() {
		fetch("../content/profile.json")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const content = data.intro.para1;
				this.shadowRoot.querySelector(".intro-para").innerHTML =
					content;
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}
window.customElements.define("intro-profile", IntroProfile);
