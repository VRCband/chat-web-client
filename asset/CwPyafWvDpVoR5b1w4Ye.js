import{f as s,Q as m,j as a,q as i}from"./YuA7MKX-N8BBDZOAxa77.js";import{F as n}from"./DEI1kDKWHUabu7CFeig7.js";import"./CFapeHO29Bm4hnyy13El.js";import{F as d}from"./r7F8zce5OY3kApMcqdVf.js";import"./C4MV6N8Q0ORPjSjX0a5v.js";import"./CmqWv5OCCilcZNSI6nce.js";const c=i.div`
	background-color: hsl(var(--background-tertiary-hsl) / 0.3);
	padding: 2px;
	border-radius: 4px;
	width: fit-content;
`;function p({timestamp:e,style:o}){const r=m.unix(Number(e));let t="";switch(o){case"t":t=r.format("hh:mm");break;case"T":t=r.format("hh:mm:ss");break;case"R":t=r.fromNow();break;case"D":t=r.format("DD MMMM YYYY");break;case"F":t=r.format("dddd, DD MMMM YYYY hh:mm");break;case"f":default:t=r.format("DD MMMM YYYY hh:mm");break}return a.jsx(c,{children:a.jsx(n,{placement:"top",type:"tooltip",props:{content:a.jsx("span",{children:r.format("dddd, MMMM MM, h:mm A")})},children:a.jsx(d,{children:a.jsx("span",{children:t})})})})}const b=s.memo(p);export{b as T};
