import{q as r,j as o}from"./DeTGZYeDNQQzD2Hg2g8t.js";import"./D95vS4HXwexk6O9L7iKW.js";import"./b9QDabEUvKe6AI27JKho.js";import{c as n}from"./BvFgMfzu9O3nUQg8aBdA.js";import{I as l}from"./B386L9xRsGPuiIWZWLBJ.js";import{L as s}from"./CgZ01YeKMS7W5n6qRFdD.js";const d=r.div`
	margin-top: 10px;
	display: flex;
	background-color: var(--background-secondary);
	padding: 12px;
	border-radius: 5px;
	flex: auto;
	border: 1px solid var(--background-secondary-alt);
	justify-content: space-between;
	box-sizing: border-box;
	flex-direction: column;
	min-width: 300px;
	width: 420px;

	@media only screen and (max-width: 420px) {
		width: 100%;
	}
`,t=r.div`
	display: flex;
`,x=r.div`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	align-self: center;
	color: var(--text-link);
`,a=r.div`
	color: var(--text-secondary);
	font-size: 12px;
	opacity: 0.8;
	font-weight: var(--font-weight-medium);
	text-overflow: ellipsis;
	overflow: hidden;
`;function w({attachment:e}){const i=e.proxy_url&&e.proxy_url.length>0?e.proxy_url:e.url;return o.jsx(d,{children:o.jsxs(t,{children:[o.jsx(l,{icon:"mdiFile",size:2}),o.jsxs(x,{children:[o.jsx(s,{href:i,target:"_blank",rel:"noreferer noopener",color:"var(--text-link)",children:e.filename}),o.jsx(a,{children:n(e.size)})]})]})})}export{w as F};
