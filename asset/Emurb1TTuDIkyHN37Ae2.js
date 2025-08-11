import{j as e,q as n}from"./DeTGZYeDNQQzD2Hg2g8t.js";import{m as r}from"./CuA_0ud078oJ-lK1_bt7.js";import"./Bb1ggiTpiYWP0Snah0HS.js";import t from"./CL7I_o0bFr2huvQMSy8o.js";import{M as i}from"./BeHhE5cu_Zs49LScyuSd.js";const s=n.div`
	background-color: var(--background-secondary);
	margin-top: 16px;
	box-shadow: 0 0 0 1px var(--background-tertiary), 0 2px 10px 0 var(--background-tertiary);
	border-radius: 4px;
	overflow: hidden;
	padding: 5px 6px;
`;function x({target:o,...a}){return e.jsx(i,{...a,title:"Delete Message",description:"Are you sure you want to delete this message?",actions:[{onClick:()=>{r.pop("close")},children:e.jsx("span",{children:"Cancel"}),palette:"link",size:"small",confirmation:!0},{onClick:async()=>{await o.delete(),r.pop("close")},children:e.jsx("span",{children:"Delete"}),palette:"danger",size:"small"}],children:e.jsx(s,{children:e.jsx(t,{content:o.content})})})}export{x as D};
