import{u as D,R as u,ad as E,w as N,j as e,C as o,ae as A,q as n,af as G,ah as O,ag as P,ai as H}from"./DeTGZYeDNQQzD2Hg2g8t.js";import{m as g}from"./CuA_0ud078oJ-lK1_bt7.js";import"./Bb1ggiTpiYWP0Snah0HS.js";import{a as f,I as M}from"./CmpVyqjHNaBPznX_UEM_.js";import{T as v}from"./CrtDogWriDzdj-4L2_mn.js";import{I as y}from"./B386L9xRsGPuiIWZWLBJ.js";import{u as _}from"./RfSsDsLnzSmF70stwuXp.js";import"./D95vS4HXwexk6O9L7iKW.js";import"./b9QDabEUvKe6AI27JKho.js";import{m as B}from"./BvFgMfzu9O3nUQg8aBdA.js";import{M as W}from"./BeHhE5cu_Zs49LScyuSd.js";const d=[{label:"Text",description:"Send messages, images, and GIFs",icon:"mdiPound",type:o.GuildText},{label:"Voice",description:"Hang out and talk with friends",icon:"mdiVolumeHigh",type:o.GuildVoice},{label:"Announcement",description:"Important updates for people in and out of the server",icon:"mdiBullhorn",type:o.GuildAnnouncement,note:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",canBePrivate:!1}],J=n.h1`
	font-size: 20px;
	font-weight: var(--font-weight-medium);
`,K=n.p`
	font-size: 16px;
	font-weight: var(--font-weight-regular);
	color: var(--text-header-secondary);
`,Q=n.form`
	width: 100%;
	margin-top: 10px;
`,U=n.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	gap: 10px;
	display: flex;
	flex-direction: column;
`,X=n.li`
	padding: 10px;
	border-radius: 10px;
	background-color: ${r=>r.active?"var(--background-secondary-highlight)":"var(--background-secondary)"};
	filter: brightness(${r=>r.active?1.3:1.1});
	display: flex;
	flex-direction: column;
	gap: 3px;

	&:hover {
		cursor: pointer;
		background-color: var(--background-secondary-highlight);
		filter: ${r=>r.active?"brightness(1.3)":"brightness(1.1)"};
	}

	& span {
		color: var(--text-header-secondary);
		font-size: 16px;
		font-weight: var(--font-weight-medium);
	}

	& span:nth-child(2) {
		font-size: 14px;
		font-weight: var(--font-weight-regular);
	}
`,b=n.label`
	font-weight: var(--font-weight-medium);
	font-size: 14px;
	color: var(--text-header-secondary);
`,j=n.div`
	margin: 10px 0;
	display: flex;
	flex-direction: ${r=>r.row?"row":"column"};
	align-items: ${r=>r.row?"center":"stretch"};
	justify-content: space-between;
	gap: 10px;
`,C=n.div`
	& label,
	span {
		color: ${r=>r.error?"var(--error)":"var(--text-header-secondary)"};
	}
`,Y=G({type:H().oneOf(Object.values(o).filter(r=>typeof r=="number")).required(),name:P().required(),private:O()}).required();function pe({guild:r,category:i,...w}){const p=_(),I=D(),[k,m]=u.useState(!1),[h,$]=u.useState(0),{formState:{disabled:S,isSubmitting:T,isValid:L,errors:a},register:z,handleSubmit:F,setValue:R,setError:l,watch:Z}=E({resolver:A(Y),defaultValues:{type:d[0].type,private:!1}}),q=S||k||T||!L,V=F(t=>{m(!0),p.rest.post(N.guildChannels(r.id),{name:t.name,type:t.type,parent_id:i==null?void 0:i.id}).then(s=>{p.channels.add(s),r.channels_.add(s.id),I(`/channels/${r.id}/${s.id}`),g.pop("close")}).catch(s=>{if(console.error(s),s.errors){const c=B(s.errors);c?l(c.field,{type:"manual",message:c.error}):l("type",{type:"manual",message:s.message})}else l("type",{type:"manual",message:s.message});m(!1)})}),x=z("name",{required:!0});return e.jsx(W,{...w,title:e.jsx(J,{children:"Create Channel"}),description:e.jsxs(K,{children:["in ",i?i.name:r.name]}),actions:[{onClick:V,children:e.jsx("span",{children:"Create Channel"}),palette:"primary",size:"small",disabled:q},{onClick:()=>{g.pop("close")},children:e.jsx("span",{children:"Cancel"}),palette:"link",size:"small",confirmation:!0}],children:e.jsx(Q,{children:e.jsxs(U,{children:[e.jsxs(j,{children:[e.jsxs(C,{error:!!a.type,children:[e.jsx(b,{children:"Channel Type"}),a.type&&e.jsxs(e.Fragment,{children:[e.jsx(v,{children:"-"}),e.jsx(f,{children:a.type.message})]})]}),d.map((t,s)=>e.jsxs(X,{active:s===h,onClick:()=>{R("type",t.type),$(s)},style:{display:"flex",alignItems:"center",flexDirection:"row"},children:[t.icon&&e.jsx(y,{icon:t.icon,color:"var(--text-disabled)",size:"24px"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"3px",marginLeft:10},children:[e.jsx("span",{children:t.label}),e.jsx("span",{children:t.description})]})]},s))]}),e.jsxs(j,{children:[e.jsxs(C,{error:!!a.name,children:[e.jsx(b,{children:"Channel Name"}),a.name&&e.jsxs(e.Fragment,{children:[e.jsx(v,{children:"-"}),e.jsx(f,{children:a.name.message})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",backgroundColor:"var(--background-secondary)",borderRadius:8,padding:"0 10px"},children:[e.jsx(y,{icon:d[h].icon,size:"16px",color:"var(--text)"}),e.jsx(M,{...x,onChange:t=>{t.target.value=t.target.value.replace(" ","-").toLowerCase(),x.onChange(t)},disableFocusRing:!0,style:{borderRadius:8},placeholder:"new-channel",error:!!a.name})]})]})]})})})}export{pe as C};
