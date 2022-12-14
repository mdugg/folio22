export default class DSMheader extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
            <figure class="header-video" data-content="video">
				DSM illus
			</figure>
		`;
	}
	connectedCallback() {}
}
window.customElements.define("dsm-header", DSMheader);
