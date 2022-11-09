export default class FolioModal extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
            <style>
                .folio-modal {
                    overflow: hidden;
                    display: flex;
                    background-color: #fff;
                    position: fixed;
                    top: 4rem;
                    left: 4rem;
                    z-index: 100;
                    width: calc(100vw - 8rem);
                    height: calc(100vh - 8rem);
                    border-radius: var(--radius-small);
                    transition: var(--transition01);
                }
                .folio-modal[aria-hidden='true'] {
                    pointer-events: none;
                    opacity: 0;
                    -webkit-transform: scale(.95); 
                        -ms-transform: scale(.95);
                            transform: scale(.95); 
                }
                .folio-modal[aria-hidden='false'] {
                    -webkit-transform: scale(1); 
                        -ms-transform: scale(1);
                            transform: scale(1); 
                }
                .folio-modal--screen {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    background-color: var(--folio-turq);
                    opacity: .5;
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 1;
                    width: calc(100vw - 4rem);
                    height: calc(100vh - 2rem);
                    padding: 2rem 4rem 0 0;
                    transition: var(--transition01);
                }
                .folio-modal--screen:hover {
                    cursor: pointer;
                    opacity: .75;
                }    
                .folio-modal--screen[aria-hidden='true'] {
                    pointer-events: none;
                    opacity: 0;
                }
                .folio-modal--screen:hover[aria-hidden='true'] {
                    cursor: default;
                    opacity: 0;
                }
                .folio-modal--close__button {
                    height: 2rem;
                    width: 2rem;
                    border-style: none;
                    background-color: transparent;
                }
                .folio-modal--close__button:hover {
                    cursor: pointer;
                }
                .folio-modal--close__icon {
                    fill: #fff;
                    height: 2rem;
                    width: 2rem;
                }
                .folio-modal--iframe {
                    width: 100%;
                    border-style: none;
                }
            </style>
            <div class="folio-modal--screen" aria-hidden="true">
                <button class="folio-modal--close__button">
                    <svg class="folio-modal--close__icon">
                        <use 
                            xlink:href="../../global/assets/icons-sprite.svg#icon-xmark-light">
                        </use>
                    </svg>
                </button>
            </div>
            <section class="folio-modal" aria-hidden="true">
                <slot name="spinner"></slot>
                <iframe
                    class="folio-modal--iframe" 
                    src="">
                </iframe>
			</section>
		`;
	}
	connectedCallback() {
		// get
		this.body = document.querySelector("body");
		this.modalScreen = this.shadowRoot.querySelector(
			".folio-modal--screen"
		);
		this.modalBtn = this.shadowRoot.querySelector(
			".folio-modal--close__button"
		);
		this.modal = this.shadowRoot.querySelector(".folio-modal");
		this.modalIframe = this.shadowRoot.querySelector(
			".folio-modal--iframe"
		);
		// set
		this.modalScreen.addEventListener("click", this.hideModal.bind(this));
		this.modalBtn.addEventListener("click", this.hideModal.bind(this));
	}
	disconnectedCallback() {
		this.modalScreen.removeEventListener("click", this.hideModal);
		this.modalBtn.removeEventListener("click", this.hideModal);
		this.modal.removeEventListener("click", this.hideModal);
	}
	hideModal() {
		this.body.classList.remove("lock-scroll");
		this.modalIframe.src = "";
		this.modalScreen.ariaHidden = true;
		this.modal.ariaHidden = true;
	}
}
window.customElements.define("folio-modal", FolioModal);
