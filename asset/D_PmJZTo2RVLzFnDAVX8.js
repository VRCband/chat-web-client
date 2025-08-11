import{q as x,o as v,f as C,R as o,j as i}from"./DeTGZYeDNQQzD2Hg2g8t.js";import{F as g}from"./BgMuKiUO8CiE2oosV8g4.js";import"./BTEXs4pNkQO6440NG1K7.js";import{F as b}from"./DXuJD0NCz5mcmU5bqHpy.js";import"./aNk37PhBAZcbfJcmeFAP.js";import"./r4Csvu2jYLFKG8Q673pU.js";import{C as E}from"./BfgMrksXN24ohQs4CfZt.js";import{u as j}from"./RfSsDsLnzSmF70stwuXp.js";const y=x.div`
	font-size: 16px;
	font-weight: var(--font-weight-medium);

	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;function F({message:t,guild:p}){const m=j(),e=C.useContext(E),[c,f]=o.useState(void 0),[s,l]=o.useState(),[a,h]=o.useState(void 0),{members:n}=p||{};o.useEffect(()=>{s&&(e==null||e.onContextMenu(s,{type:"user",user:t.author,member:a}))},[s,a]);const d=async r=>{var u;r.preventDefault(),r.stopPropagation(),l(r),(u=m.guilds.get(t.guild_id))==null||u.members.resolve(t.author.id).then(h)};return o.useEffect(()=>{if(!n)return;const r=n.get(t.author.id);r&&f(r.roleColor)},[t,n]),i.jsx(g,{placement:"right-start",type:"userPopout",props:{user:t.author},children:i.jsx(b,{children:i.jsx(y,{style:{color:c},ref:e==null?void 0:e.setReferenceElement,onContextMenu:d,children:t.author.username})})})}const z=v(F);export{z as M};
