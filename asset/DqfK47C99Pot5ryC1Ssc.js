import{q as r,j as o}from"./YuA7MKX-N8BBDZOAxa77.js";import"./BUjYG6qMQjp0KnokeClt.js";import"./b9QDabEUvKe6AI27JKho.js";import{c as n}from"./BehbJKW-Ic5ZiA7tfWXx.js";import{I as l}from"./5aiE5jUjBMeUbLP8QDw7.js";import{L as s}from"./B61PCvkWSghSH4vvO73b.js";const d=r.div`
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
