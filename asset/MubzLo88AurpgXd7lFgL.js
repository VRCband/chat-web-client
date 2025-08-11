import{o as f,f as g,j as e,q as r,A as m}from"./DeTGZYeDNQQzD2Hg2g8t.js";import{m as h}from"./CuA_0ud078oJ-lK1_bt7.js";import"./Bb1ggiTpiYWP0Snah0HS.js";import{I as l}from"./B386L9xRsGPuiIWZWLBJ.js";import{L as u}from"./CgZ01YeKMS7W5n6qRFdD.js";import{u as v}from"./RfSsDsLnzSmF70stwuXp.js";import"./D95vS4HXwexk6O9L7iKW.js";import{G as b,A as j,a as d,R as w}from"./BRxz81JzCl7M10D17eBi.js";import"./b9QDabEUvKe6AI27JKho.js";import{i as y}from"./BvFgMfzu9O3nUQg8aBdA.js";import{M as C}from"./BeHhE5cu_Zs49LScyuSd.js";import{A as k}from"./BuBHsUpCX7492F0zMNCA.js";import{D as I}from"./BMm7QW1eHqXeTD22zivL.js";import{E as S}from"./cFm8mpBERnsfpVK1GcJK.js";const A=r.div`
	display: flex;
	flex: 1;
	overflow: hidden;
`,E=r.div`
	display: flex;
	flex: 1 0 220px;
	justify-content: flex-end;
`,z=r.div`
	overflow: hidden scroll;
	display: flex;
	flex: 1 0 auto;
	flex-direction: row;
	justify-content: flex-end;
	align-items: flex-start;
	background: var(--background-secondary);
`,R=r.nav`
	width: 220px;
	padding: 60px 6px 20px;
	box-sizing: border-box;
`,$=r.div`
	display: flex;
	flex-direction: column;
`,P=r.div`
	display: flex;
	flex: 1 1 800px;
	align-items: flex-start;
	background: var(--background-primary);
`,L=r.div`
	overflow: hidden scroll;
	justify-content: flex-start;
	position: static;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	background: var(--background-primary);
	box-sizing: border-box;
`,N=r.div`
	padding: 60px 40px 80px;
	flex: 1 1 auto;
	max-width: 740px;
	min-width: 460px;
	min-height: 100%;
	box-sizing: border-box;
`,O=r.div`
	padding: 6px 10px;
	color: var(--text-secondary);
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	flex-shrink: 0;
	font-size: 14px;
	font-weight: var(--font-weight-bold);
	letter-spacing: 0.5px;
`,i=r.div`
	padding: 5px 10px;
	margin-bottom: 5px;
	border-radius: 4px;
	font-size: 16px;
	cursor: pointer;
	font-weight: var(--font-weight-regular);
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	flex-shrink: 0;
	color: ${o=>o.textColor??"var(--text-secondary);"};

	&:hover {
		background-color: hsl(var(--background-primary-hsl) / 0.6);
		cursor: pointer;
	}

	${o=>o.selected&&m`
			background-color: var(--background-primary);
			color: var(--text);
		`}
`,s=r.div`
	margin: 8px 10px;
	height: 1px;
	background-color: var(--text-disabled);
`,T=r.div`
	padding: 8px 10px;
	color: var(--text-secondary);
	font-size: 12px;
	font-weight: var(--font-weight-regular);
`,V=r.div`
	margin-right: 20px;
	flex: 0 0 36px;
	width: 60px;
	padding-top: 60px;
	position: relative;
`,_=r.div`
	position: fixed;
`,B=r.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`,D=r.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 0 0 40px;
	border: solid 1px;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	cursor: pointer;
	color: var(--text-secondary);
`,re=f(({...o})=>{const x=v(),[t,c]=g.useState(0),n=p=>{const a=p.currentTarget.getAttribute("data-value");a&&c(parseInt(a))};return e.jsx(C,{...o,fullScreen:!0,withoutCloseButton:!0,withEmptyActionBar:!0,padding:"0",children:e.jsxs(A,{children:[e.jsx(E,{children:e.jsx(z,{children:e.jsx(R,{children:e.jsxs($,{children:[e.jsx(O,{children:"User Settings"}),e.jsx(i,{"data-value":"0",onClick:n,children:"Account"}),e.jsx(s,{}),e.jsx(i,{"data-value":"1",onClick:n,children:"Developer Options"}),e.jsx(i,{"data-value":"2",onClick:n,children:"Experiments"}),e.jsx(s,{}),e.jsx(i,{onClick:x.logout,children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",color:"var(--error)"},children:["Log Out",e.jsx(l,{icon:"mdiLogout",size:"16px",color:"var(--error)"})]})}),e.jsx(s,{}),e.jsxs(T,{children:[e.jsxs("span",{children:[b," ",j," (",e.jsx(u,{href:`${w}/commit/${d}`,target:"_blank",rel:"noreferrer",children:d.substring(0,7)}),")"]}),y&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{children:["Tauri ",window.globals.tauriVersion??"Fetching version information..."]}),e.jsx("span",{children:`${window.globals.platform.name} ${window.globals.platform.arch} (${window.globals.platform.version})`}),e.jsx("span",{children:window.globals.platform.locale??"Unknown"})]})]})]})})})}),e.jsx(P,{children:e.jsxs(L,{children:[e.jsxs(N,{children:[t===0&&e.jsx(k,{}),t===1&&e.jsx(I,{}),t===2&&e.jsx(S,{})]}),e.jsxs(V,{children:[e.jsx(_,{}),e.jsx(B,{children:e.jsx(D,{onClick:()=>h.close(),children:e.jsx(l,{icon:"mdiClose",size:"18px"})})})]})]})})]})})});export{re as S};
