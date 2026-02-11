import{q as n,j as o}from"./YuA7MKX-N8BBDZOAxa77.js";import{m as g}from"./Dc_sPPjyC58fRe14L2_s.js";import"./Clh8yRSf0L0oXb6LNsUf.js";import{A as f}from"./BayvZbRUE3KBkAtV6e6o.js";import{F as x}from"./DqfK47C99Pot5ryC1Ssc.js";import{V as a}from"./DxUCR-wD7-cbGMRAuM5a.js";import{T as j}from"./1uLj9-1CgdZUIngINjKz.js";import"./BUjYG6qMQjp0KnokeClt.js";import"./b9QDabEUvKe6AI27JKho.js";import{g as h,z as b}from"./BehbJKW-Ic5ZiA7tfWXx.js";const p=350;function y(i,d){const s=i/d;let e=i*s,r=d*s;if(r>p){const t=p/r;e*=t,r=p}return{adjustedWidth:Math.floor(e),adjustedHeight:Math.floor(r)}}const A=n.div`
	cursor: ${i=>i.withPointer?"pointer":"default"};
	padding: 2px 0;
`,E=n.img`
	border-radius: 4px;
	width: 100%;
	height: auto;
`;function I({attachment:i}){var r;const d=i.proxy_url&&i.proxy_url.length>0?i.proxy_url:i.url,s=h(i);let e=o.jsx(o.Fragment,{});if(s.isImage&&s.isEmbeddable){const t=i.width,u=i.height,{adjustedWidth:l,adjustedHeight:m}=y(t,u);e=o.jsx(E,{src:d,alt:i.filename,loading:"lazy",style:{maxWidth:l,maxHeight:m}})}else s.isVideo&&s.isEmbeddable?e=o.jsx(a,{attachment:i}):s.isAudio&&s.isEmbeddable?e=o.jsx(f,{attachment:i}):s.isText&&s.isEmbeddable?e=o.jsx(j,{attachment:i}):e=o.jsx(x,{attachment:i});return o.jsx(A,{withPointer:(r=i.content_type)==null?void 0:r.startsWith("image"),onClick:()=>{var l;if(!((l=i.content_type)!=null&&l.startsWith("image")))return;const{width:t,height:u}=b(i.width,i.height);g.push({type:"image_viewer",attachment:i,width:t,height:u})},children:e},i.id)}export{I as M};
