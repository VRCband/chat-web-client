import{q as e,j as o}from"./DeTGZYeDNQQzD2Hg2g8t.js";import{I as n}from"./B386L9xRsGPuiIWZWLBJ.js";import{L as s}from"./CgZ01YeKMS7W5n6qRFdD.js";import"./D95vS4HXwexk6O9L7iKW.js";import"./b9QDabEUvKe6AI27JKho.js";import{c as d}from"./BvFgMfzu9O3nUQg8aBdA.js";const l=e.div`
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
`,t=e.div`
	display: flex;
`,a=e.div`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	align-self: center;
	flex-direction: column;
`,x=e.div`
	color: var(--text-secondary);
	font-size: 12px;
	opacity: 0.8;
	font-weight: var(--font-weight-medium);
	text-overflow: ellipsis;
	overflow: hidden;
`;function y({attachment:r}){const i=r.proxy_url&&r.proxy_url.length>0?r.proxy_url:r.url;return o.jsxs(l,{children:[o.jsxs(t,{children:[o.jsx(n,{icon:"mdiFileMusic",size:2}),o.jsxs(a,{children:[o.jsx(s,{href:i,target:"_blank",rel:"noreferer noopener",color:"var(--text-link)",children:r.filename}),o.jsx(x,{children:d(r.size)})]})]}),o.jsx("audio",{style:{width:"100%",borderRadius:"3px"},playsInline:!0,controls:!0,preload:"metadata",children:o.jsx("source",{src:i})})]})}export{y as A};
