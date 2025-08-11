import{q as e,o as a,j as r}from"./DeTGZYeDNQQzD2Hg2g8t.js";import{I as c}from"./B386L9xRsGPuiIWZWLBJ.js";import{I as d}from"./CDt1z0NHkbfIQkt7ZP5a.js";import{u as l}from"./RfSsDsLnzSmF70stwuXp.js";import"./D95vS4HXwexk6O9L7iKW.js";import"./b9QDabEUvKe6AI27JKho.js";import{c as p}from"./BvFgMfzu9O3nUQg8aBdA.js";const x=e.div`
	width: 520px;
	min-width: auto;
	border: 1px solid transparent;
	padding: 10px;
	border-radius: 4px;
	background-color: var(--background-secondary);
	border-color: var(--background-secondary-alt);
	flex-direction: row;
	align-items: center;
	display: flex;
`,m=e.div`
	flex: 1;
	white-space: nowrap;
	overflow: hidden;

	.muted {
		color: var(--text-secondary);
	}
`,h=e.progress`
	height: 6px;
	width: 100%;
`,u=e(c)`
	color: var(--text-secondary);

	&:hover {
		color: var(--text);
	}
`;function f({message:o}){const s=l(),t=o.files.reduce((n,i)=>n+i.size,0);return r.jsxs(x,{children:[r.jsxs(m,{children:[r.jsxs("div",{style:{gap:"5px",display:"flex"},children:[r.jsx("span",{children:"Uploading"}),r.jsx("span",{children:o.files.length===1?o.files[0].name:`${o.files.length} files`}),r.jsx("span",{className:"muted",children:"-"}),r.jsx("span",{className:"muted",children:p(t)})]}),r.jsx(h,{value:o.progress,max:100})]}),r.jsx(d,{variant:"blank",onClick:()=>{o.abort(),s.queue.remove(o.id)},children:r.jsx(u,{icon:"mdiClose",size:"24px"})})]})}const I=a(f);export{I as A};
