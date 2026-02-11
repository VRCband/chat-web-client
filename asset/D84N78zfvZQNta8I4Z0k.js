import{q as t,o as a,j as e}from"./YuA7MKX-N8BBDZOAxa77.js";import{m as p}from"./Dc_sPPjyC58fRe14L2_s.js";import"./Clh8yRSf0L0oXb6LNsUf.js";import{F as c}from"./DEI1kDKWHUabu7CFeig7.js";import"./CFapeHO29Bm4hnyy13El.js";import{F as l}from"./r7F8zce5OY3kApMcqdVf.js";import"./C4MV6N8Q0ORPjSjX0a5v.js";import"./CmqWv5OCCilcZNSI6nce.js";import{u as d}from"./CyJ5WJXEKPq0b3c1ZbHJ.js";import{A as x}from"./nu8JDqZndLwGuZCC0K2O.js";import{I as m}from"./5aiE5jUjBMeUbLP8QDw7.js";import{I as f}from"./Dk8w3hWGVSKEKYDngyKi.js";const g=t.section`
	flex: 0 0 auto;
	background-color: var(--background-secondary-alt);
`,u=t.div`
	display: flex;
	height: 52px;
	align-items: center;
	padding: 0 8px;
	margin-bottom: 1px;
	background-color: var(--background-secondary-alt);
`,h=t.div`
	display: flex;
	align-items: center;
	min-width: 120px;
	padding-left: 2px;
	margin-right: 8px;
	border-radius: 4px;
	cursor: default;
`,v=t.div`
	padding: 4px 0 4px 8px;
	margin-right: 4px;
`,w=t.div`
	font-size: 14px;
	font-weight: var(--font-weight-medium);
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	cursor: pointer;
`,j=t.div`
	font-size: 12px;
	font-weight: var(--font-weight-regular);
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	user-select: none;
`,b=t.div`
	flex: 1;
	flex-direction: row;
	flex-wrap: no-wrap;
	justify-content: flex-end;
	align-items: stretch;
	display: flex;
`,y=t(f)`
	&:hover {
		opacity: 0.8;
	}
`;function k(){var r,n;const o=d(),i=o.presences.get(o.account.id),s=()=>{p.push({type:"settings"})};return e.jsx(g,{children:e.jsxs(u,{children:[e.jsxs(h,{children:[e.jsx(x,{popoutPlacement:"top",onClick:null,showPresence:!0,presence:i,size:32}),e.jsxs(v,{children:[e.jsx(w,{children:(r=o.account)==null?void 0:r.username}),e.jsxs(j,{children:["#",(n=o.account)==null?void 0:n.discriminator]})]})]}),e.jsx(b,{children:e.jsx(c,{placement:"top",type:"tooltip",offset:10,props:{content:e.jsx("span",{children:"Settings"})},children:e.jsx(l,{children:e.jsx(y,{"aria-label":"settings",color:"#fff",onClick:s,children:e.jsx(m,{icon:"mdiCog",size:"20px"})})})})})]})})}const M=a(k);export{M as U};
