import{q as c,R as t,j as r}from"./DeTGZYeDNQQzD2Hg2g8t.js";import{C as l}from"./DSvvuG166NxHyQS7E1M6.js";import{F as s}from"./BgMuKiUO8CiE2oosV8g4.js";import"./BTEXs4pNkQO6440NG1K7.js";import{F as m}from"./DXuJD0NCz5mcmU5bqHpy.js";import"./aNk37PhBAZcbfJcmeFAP.js";import"./r4Csvu2jYLFKG8Q673pU.js";import{G as d}from"./B-NaGZcbZV3IEdaPDux-.js";import{I as u}from"./B386L9xRsGPuiIWZWLBJ.js";import{S as f}from"./yJqit70znWRkTbSrtuJ6.js";const g=c(l)`
	${e=>e.margin!==!1?"margin-top: 9px;":""}};
	padding: 0;
	width: 48px;
	height: 48px;
	border-radius: ${e=>e.active?"30%":"50%"};
	background-color: ${e=>e.active?"var(--primary)":"var(--background-secondary)"};
	display: flex;
	align-items: center;
	justify-content: center;
	transition: border-radius 0.2s ease, background-color 0.2s ease;

	&:hover {
		border-radius: 30%;
		background-color: ${e=>e.useGreenColorScheme?"var(--success)":"var(--primary)"};

	}
`;function E(e){if(e.image&&e.icon&&e.label)throw new Error("SidebarAction can only have one of image, icon, or label");const[n,i]=t.useState("none"),[a,o]=t.useState(!1);return t.useEffect(()=>{if(!e.disablePill)return e.active?i("active"):i(a?"hover":"none")},[e.active,a]),r.jsxs(d,{children:[r.jsx(f,{type:n}),r.jsx(s,{placement:"right",type:"tooltip",offset:20,props:{content:r.jsx("span",{children:e.tooltip})},children:r.jsx(m,{children:r.jsxs(g,{onClick:e.action,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),margin:e.margin,active:e.active,useGreenColorScheme:e.useGreenColorScheme,children:[e.image&&r.jsx("img",{...e.image,loading:"lazy"}),e.icon&&r.jsx(u,{...e.icon,color:a&&e.useGreenColorScheme?"var(--text)":e.icon.color}),e.label&&r.jsx("span",{children:e.label})]})})})]})}export{E as S};
