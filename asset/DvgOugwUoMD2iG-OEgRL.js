import{q as t,o as p,f as c,j as r,P as x}from"./DeTGZYeDNQQzD2Hg2g8t.js";import{A as l}from"./BhWPCFCD16S6BcL3upzJ.js";import{F as u}from"./BgMuKiUO8CiE2oosV8g4.js";import"./BTEXs4pNkQO6440NG1K7.js";import{F as d}from"./DXuJD0NCz5mcmU5bqHpy.js";import"./aNk37PhBAZcbfJcmeFAP.js";import"./r4Csvu2jYLFKG8Q673pU.js";import{C as f}from"./BfgMrksXN24ohQs4CfZt.js";import{u as m}from"./RfSsDsLnzSmF70stwuXp.js";const g=t(d)`
	padding: ${e=>e.isCategory?"16px 8px 0 0":"1px 8px 0 0"};
	cursor: pointer;
	user-select: none;
`,h=t.div`
	max-width: 224px;
	background-color: transparent;
	box-sizing: border-box;
	padding: 1px 0;
	border-radius: 4px;

	&:hover {
		background-color: var(--background-primary-alt);
	}
`,b=t.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	height: 42px;
	padding: 0 8px;
	opacity: ${e=>e.offline?.5:1};
`,v=t.span`
	font-size: 16px;
	font-weight: var(--font-weight-regular);
	white-space: nowrap;
	color: ${e=>e.color??"var(--text-secondary)"};
`,j=t.div`
	min-width: 0;
	flex: 1;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`,w=t.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 12px;
`;function C({item:e}){var n,i;const o=m().presences.get(e.user.id),s=c.useContext(f);return r.jsx(u,{placement:"right-start",type:"userPopout",offset:20,props:{user:e.user,member:e},children:r.jsx(g,{ref:s.setReferenceElement,onContextMenu:a=>s.onContextMenu(a,{type:"user",user:e.user,member:e}),children:r.jsx(h,{children:r.jsxs(b,{offline:(o==null?void 0:o.status)===x.Offline,children:[r.jsx(w,{children:r.jsx(l,{user:e.user,size:32,presence:o,showPresence:!0,onClick:null})}),r.jsx(j,{children:r.jsx(v,{color:e.roleColor,children:e.nick??((n=e.user)==null?void 0:n.username)})})]})})},(i=e.user)==null?void 0:i.id)})}const L=p(C);export{L as M};
