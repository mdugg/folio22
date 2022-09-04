export default class DCLfigmaHeuristics extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
            <section class="mt2" data-content="heuristics">
            </section>
		`;
	}
	connectedCallback() {
		let content = this.querySelector("[data-content='heuristics']");
		// const getJSON = new Request("../../content/decoupledLive.json");

		fetch(getJSON)
			.then((response) => response.json())
			.then((data) => {
				content.innerHTML = `
					<figure class="folio-content__figma">
                        <iframe src="${data.figma.heuristics}"></iframe>
                    </figure>
                    <ul>
                        <li>
                            <a href="${data.figma.heuristics}" target="_blank">View in Figma</a>
                        </li>
                        <li>
                            <a href="${data.referenceLinks.heuristicsNNGroup}" 
                                target="_blank">NNGroup Heuristics</a>
                        </li>
                        <li>
                            <a href="${data.referenceLinks.heuristicsNNGroup}" 
                                target="_blank">Laws of UX Heuristics</a>
                        </li>
                    </ul>
				`;
			})
			.catch(console.error);
	}
	disconnectedCallback() {}
	adoptedCallback() {}
	attributeChangedCallback() {}
}
window.customElements.define("dcl-figma-heuristics", DCLfigmaHeuristics);
