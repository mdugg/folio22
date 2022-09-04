export default class FolioModal extends HTMLElement {
	constructor() {
		super();
		this.modalVisible = false;
		// const root = this.attachShadow({ mode: "open" });
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
                    border-radius: var(--radius01);
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
                .folio-modal--close__button {
                    background-color: transparent;
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
            <section class="folio-modal" data-content="modal" aria-hidden="true">
                <iframe class="folio-modal--iframe"
                    src="/https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FBr1YJTU9Hy5VOr8e0bHr5K%2FFolio22-Decoupled-Live%3Fnode-id%3D2557%253A7064">
                </iframe>
			</section>
		`;
	}
	connectedCallback() {
		let modalScreen = this.shadowRoot.querySelector(".folio-modal--screen");
		console.log(modalScreen);
		// this.render();
	}
	// render() {
	// 	if (this.modalVisible) {
	// 		console.log("tru dawg");
	// 	} else {
	// 		console.log("false dawg");
	// 	}
	// }
	// showModal() {
	// 	this.modalVisible = true;
	// 	this.render();
	// }
	// hideModal() {
	// 	this.modalVisible = false;
	// 	this.render();
	// }
}
window.customElements.define("folio-modal", FolioModal);

// let modal = root.querySelectorAll("[aria-hidden='true']");
// modal.forEach((element) => {
// 	element.addEventListener("click", toggleModal);
// });
// function toggleModal() {
// 	modal.toggleAttribute("false");
// }

// const button = document.querySelector("button");
// const input = document.querySelector("input");

// button.addEventListener("click", () => {
// 	input.toggleAttribute("disabled");
// });
