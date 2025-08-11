import{q as a,o as u,R as n,f as m,j as e}from"./DeTGZYeDNQQzD2Hg2g8t.js";import{F as f}from"./BgMuKiUO8CiE2oosV8g4.js";import"./BTEXs4pNkQO6440NG1K7.js";import{F as h}from"./DXuJD0NCz5mcmU5bqHpy.js";import"./aNk37PhBAZcbfJcmeFAP.js";import"./r4Csvu2jYLFKG8Q673pU.js";import{u as x}from"./RfSsDsLnzSmF70stwuXp.js";import{I as g}from"./B386L9xRsGPuiIWZWLBJ.js";import{S as v}from"./y7GZavdX9Kn1lCXP4KWJ.js";const s=a(v)`
	background-color: var(--background-secondary);
	cursor: pointer;

	&:hover {
		background-color: var(--background-secondary-highlight);
	}
`,i=a.header`
	font-size: 16px;
	font-weight: var(--font-weight-medium);
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	user-select: none;
`;function j(){const r=x(),[o,c]=n.useState(!1),[l,t]=n.useState("mdiChevronDown"),p=d=>{c(d)};return m.useEffect(()=>{t(o?"mdiClose":"mdiChevronDown")},[o]),r.activeGuildId==="@me"?e.jsx(s,{style:{cursor:"default",pointerEvents:"none",display:"flex",justifyContent:"center"},children:e.jsx(i,{children:"Direct Messages"})}):r.activeGuild?e.jsx(f,{type:"guild",open:o,onOpenChange:p,props:{guild:r.activeGuild},children:e.jsx(h,{children:e.jsxs(s,{children:[e.jsx(i,{children:r.activeGuild.name}),e.jsx(g,{icon:l,size:"20px",color:"var(--text)"})]})})}):null}const H=u(j);export{H as C};
