import{q as n,o as M,u as $,f as x,R as o,j as t}from"./DeTGZYeDNQQzD2Hg2g8t.js";import{m as I}from"./CuA_0ud078oJ-lK1_bt7.js";import"./Bb1ggiTpiYWP0Snah0HS.js";import{F as b}from"./BgMuKiUO8CiE2oosV8g4.js";import"./BTEXs4pNkQO6440NG1K7.js";import{F as P}from"./DXuJD0NCz5mcmU5bqHpy.js";import"./aNk37PhBAZcbfJcmeFAP.js";import"./r4Csvu2jYLFKG8Q673pU.js";import{I as s}from"./B386L9xRsGPuiIWZWLBJ.js";import{S}from"./yJqit70znWRkTbSrtuJ6.js";import{C as R}from"./BfgMrksXN24ohQs4CfZt.js";import{u as k}from"./RfSsDsLnzSmF70stwuXp.js";import{P as E}from"./D95vS4HXwexk6O9L7iKW.js";import"./b9QDabEUvKe6AI27JKho.js";const H=n.div`
	padding: ${e=>e.isCategory?"16px 8px 0 0":"1px 8px 0 0"};
	cursor: pointer;
`,D=n.div`
	margin-left: ${e=>e.isCategory?"0":"8px"};
	height: ${e=>e.isCategory?"28px":"33px"};
	border-radius: 4px;
	align-items: center;
	display: flex;
	padding: ${e=>e.isCategory?"0 8px 0 8px":"0 16px"};
	background-color: ${e=>e.active?"var(--background-primary-alt)":"transparent"};
	justify-content: space-between;

	&:hover {
		background-color: ${e=>e.isCategory?"transparent":"var(--background-primary-alt)"};
	}
`,L=n.span`
	font-size: 16px;
	font-weight: var(--font-weight-regular);
	white-space: nowrap;
	color: ${e=>e.isCategory&&e.hovered?"var(--text)":"var(--text-secondary)"};
	user-select: none;
`;function N({channel:e,isCategory:r,active:m,isCollapsed:f,onToggleCollapse:a}){const g=k(),v=$(),i=x.useContext(R),[p,c]=o.useState(!1),[h,l]=o.useState(!1),[C,d]=o.useState(!1),[y,j]=o.useState(!1);return x.useEffect(()=>{if(!r)return;const w=E.getPermission(g.account.id,e.guild,e).has("MANAGE_CHANNELS");j(w)},[e]),t.jsx(H,{isCategory:r,onClick:()=>{if(r&&a){a(e.id);return}e.isTextChannel&&v(`/channels/${e.guildId}/${e.id}`)},ref:i.setReferenceElement,onContextMenu:u=>i.onContextMenu(u,{type:"channel",channel:e}),children:t.jsxs(D,{isCategory:r,active:m,onMouseOver:()=>c(!0),onMouseOut:()=>c(!1),children:[t.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[t.jsx(S,{type:e.hasUnread?"unread":"none"}),e.channelIcon&&!r&&t.jsx(s,{icon:e.channelIcon,size:"16px",style:{marginRight:"8px"},color:"var(--text-secondary)"}),r&&t.jsx(s,{icon:f?"mdiChevronRight":"mdiChevronDown",size:"12px",color:p?"var(--text)":"var(--text-secondary)",style:{marginRight:"8px"}}),t.jsx(L,{isCategory:r,hovered:p,children:e.name})]}),r&&y&&t.jsx(b,{placement:"top",type:"tooltip",offset:10,props:{content:t.jsx("span",{children:"Create Channel"})},children:t.jsx(P,{children:t.jsx("span",{onMouseOver:()=>l(!0),onMouseOut:()=>l(!1),onMouseDown:()=>d(!0),onMouseUp:()=>d(!1),onClick:()=>{if(!e.guild){console.warn("No guild found for channel",e);return}I.push({type:"create_channel",guild:e.guild,category:e})},children:t.jsx(s,{icon:"mdiPlus",size:"18px",style:{marginLeft:"auto"},color:C?"var(--text-header)":h?"var(--text)":"var(--text-secondary)"})})})})]})},e.id)}const V=M(N);export{V as C};
