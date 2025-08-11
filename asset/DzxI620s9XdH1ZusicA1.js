import{q as n,j as o}from"./DeTGZYeDNQQzD2Hg2g8t.js";import{m as g}from"./CuA_0ud078oJ-lK1_bt7.js";import"./Bb1ggiTpiYWP0Snah0HS.js";import{A as f}from"./c048vttayiv4lJ5xK1nJ.js";import{F as x}from"./MGsdL2XlRjtAHI9uoo21.js";import{V as a}from"./Dz3-ypdwDElMo6nDkfd9.js";import{T as j}from"./D516xCzxZpc04E3rXdpI.js";import"./D95vS4HXwexk6O9L7iKW.js";import"./b9QDabEUvKe6AI27JKho.js";import{g as h,z as b}from"./BvFgMfzu9O3nUQg8aBdA.js";const p=350;function y(i,d){const s=i/d;let e=i*s,r=d*s;if(r>p){const t=p/r;e*=t,r=p}return{adjustedWidth:Math.floor(e),adjustedHeight:Math.floor(r)}}const A=n.div`
	cursor: ${i=>i.withPointer?"pointer":"default"};
	padding: 2px 0;
`,E=n.img`
	border-radius: 4px;
	width: 100%;
	height: auto;
`;function I({attachment:i}){var r;const d=i.proxy_url&&i.proxy_url.length>0?i.proxy_url:i.url,s=h(i);let e=o.jsx(o.Fragment,{});if(s.isImage&&s.isEmbeddable){const t=i.width,u=i.height,{adjustedWidth:l,adjustedHeight:m}=y(t,u);e=o.jsx(E,{src:d,alt:i.filename,loading:"lazy",style:{maxWidth:l,maxHeight:m}})}else s.isVideo&&s.isEmbeddable?e=o.jsx(a,{attachment:i}):s.isAudio&&s.isEmbeddable?e=o.jsx(f,{attachment:i}):s.isText&&s.isEmbeddable?e=o.jsx(j,{attachment:i}):e=o.jsx(x,{attachment:i});return o.jsx(A,{withPointer:(r=i.content_type)==null?void 0:r.startsWith("image"),onClick:()=>{var l;if(!((l=i.content_type)!=null&&l.startsWith("image")))return;const{width:t,height:u}=b(i.width,i.height);g.push({type:"image_viewer",attachment:i,width:t,height:u})},children:e},i.id)}export{I as M};
