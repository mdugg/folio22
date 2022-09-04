const folioRoot = window.location.host;

const folioNav = [
	{
		id: "ds",
		linkName: "Dropshipping",
		// linkURL: folioRoot + "/case-studies/dropshipping/index.html",
		linkURL: "/case-studies/dropshipping/index.html",
		desc: "One-liner about the project",
		type: "case study",
		published: true,
	},
	{
		id: "dcl",
		linkName: "Enterprise Micro-App",
		linkURL: "/case-studies/decoupled/index.html",
		desc: "One-liner about the project",
		type: "case study",
		published: true,
	},
	{
		id: "flex",
		linkName: "Flexible Shipping Labels",
		linkURL: "/case-studies/flexlabels/index.html",
		desc: "One-liner about the project",
		type: "case study",
		published: false,
	},
	{
		id: "web",
		linkName: "E-commerce Store Editor",
		linkURL: "/case-studies/webstore/index.html",
		desc: "One-liner about the project",
		type: "case study",
		published: false,
	},
	{
		id: "pos",
		linkName: "Point-of-Sale Wires",
		linkURL: "/case-studies/pos/index.html",
		desc: "One-liner about the project",
		type: "case study",
		published: false,
	},
	{
		id: "dsm",
		linkName: "Design System Foundational Work",
		linkURL: "/case-studies/design-system-work/index.html",
		desc: "One-liner about the project",
		type: "case study",
		published: false,
	},
	{
		id: "home",
		linkName: "Home",
		linkURL: folioRoot,
		type: "site nav",
	},
	{
		id: "recent",
		linkName: "Recent Work",
		linkURL: "/#recent-work",
		type: "site nav",
	},
	{
		id: "profile",
		linkName: "Profile",
		linkURL: "/content/professional-profile.html",
		type: "site nav",
	},
	{
		id: "resume",
		linkName: "Resume",
		linkURL: "https://www.linkedin.com/in/martinduggan/",
		type: "site nav",
		icon: "#icon-linkedin",
	},
	{
		id: "pdf",
		linkName: "Download",
		linkURL: "/martin-duggan-resume-2022.pdf",
		type: "site nav",
		icon: "#icon-pdf-solid",
	},
];
export default folioNav;

/*
	suppose that you have a page with this address: http://sub.domain.com/virtualPath/page.htm. use the following in page code to achive those results:

	window.location.host : you'll get sub.domain.com:8080 or sub.domain.com:80
	window.location.hostname : you'll get sub.domain.com
	window.location.protocol : you'll get http:
	window.location.port : you'll get 8080 or 80
	window.location.pathname : you'll get /virtualPath
	window.location.origin : you'll get http://sub.domain.com 
*/
