import{f as s,Q as m,j as a,q as i}from"./DeTGZYeDNQQzD2Hg2g8t.js";import{F as n}from"./BgMuKiUO8CiE2oosV8g4.js";import"./BTEXs4pNkQO6440NG1K7.js";import{F as d}from"./DXuJD0NCz5mcmU5bqHpy.js";import"./aNk37PhBAZcbfJcmeFAP.js";import"./r4Csvu2jYLFKG8Q673pU.js";const c=i.div`
	background-color: hsl(var(--background-tertiary-hsl) / 0.3);
	padding: 2px;
	border-radius: 4px;
	width: fit-content;
`;function p({timestamp:e,style:o}){const r=m.unix(Number(e));let t="";switch(o){case"t":t=r.format("hh:mm");break;case"T":t=r.format("hh:mm:ss");break;case"R":t=r.fromNow();break;case"D":t=r.format("DD MMMM YYYY");break;case"F":t=r.format("dddd, DD MMMM YYYY hh:mm");break;case"f":default:t=r.format("DD MMMM YYYY hh:mm");break}return a.jsx(c,{children:a.jsx(n,{placement:"top",type:"tooltip",props:{content:a.jsx("span",{children:r.format("dddd, MMMM MM, h:mm A")})},children:a.jsx(d,{children:a.jsx("span",{children:t})})})})}const b=s.memo(p);export{b as T};
