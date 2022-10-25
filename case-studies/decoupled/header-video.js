export default class HeaderVideo extends HTMLElement {
	constructor() {
		super();
		// this.attachShadow({ mode: "open" });
		// this.shadowRoot.innerHTML = `
		this.innerHTML = `
            <figure class="header-video dcl" data-content="video">
				<video 
					class="header-video__content" 
					autoplay loop>
						<source 
							src="https://folio22.s3.amazonaws.com/dcl/video-jennaration-60pc.mp4" 
							type="video/mp4">
				</video>
			</figure>
		`;
	}
	connectedCallback() {
		// let gallery = document.getElementById("gallery");
		// console.log(gallery);
		// var queue = new createjs.LoadQueue(false);
		// queue.on("fileload", handleFileComplete);
		// queue.loadFile(
		// 	"https://folio22.s3.amazonaws.com/jennaration_live_setup_noir.mp4"
		// );
		// function handleFileComplete(event) {
		// 	let item = event.item;
		// 	let type = item.type;
		// 	if (type == createjs.Types.VIDEO) {
		// 		gallery.appendChild(event.result);
		// 	}
		// }
		// let videoCont = this.shadowRoot.querySelector(".header-video__content");
		// let videoCont = this.querySelector("[data-content='video']");
		// const loadJSON = new Request("../../content/decoupledLive.json");
		// fetch(getJSON)
		// 	.then((response) => response.json())
		// 	.then((data) => {
		// 		// let videoSrc = data.meta.videoPath;
		// 		let videoSrcHTML = `
		//             <video class="header-video__content">
		//                 <source
		//                     src=""
		// 					id="gallery"
		//                     autoplay="true"
		//                     muted="true"
		//                     loop="true"
		//                     type="video/mp4">
		//                 Sorry, your browser doesn't support embedded videos.
		//             </video>
		//         `;
		// 		videoCont.innerHTML = videoSrcHTML;
		// 	})
		// 	.catch(console.error);
	}
}
window.customElements.define("header-video", HeaderVideo);

/*
How to use JavaScript to dynamically change a video’s source?
https://thewebdev.info/2021/10/09/how-to-use-javascript-to-dynamically-change-a-videos-source/

Fetching API Data with Web Components and SSR
https://dev.to/steveblue/fetching-api-data-with-web-components-and-ssr-21mk

Using Promises
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

Javascript Promises vs Async Await EXPLAINED (in 5 minutes)
https://www.youtube.com/watch?v=li7FzDHYZpc

JavaScript Tip: Using fetch to Load a JSON File
https://www.youtube.com/watch?v=1tVCwv_BX2M

Response.json()
https://developer.mozilla.org/en-US/docs/Web/API/Response/json
*/
