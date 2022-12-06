export default class HeaderVideo extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
            <figure class="header-video" data-content="video">
				<video 
                    class="header-video__content" 
					autoplay loop>
					<source 
                        src="https://folio22.s3.amazonaws.com/flex/flexlabel-fulfillment-60.mp4" 
                        type="video/mp4">
				</video>
			</figure>
		`;
	}
	connectedCallback() {}
}
window.customElements.define("header-video", HeaderVideo);
