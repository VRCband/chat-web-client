import{q as g,o as h,R as x,j as v}from"./DeTGZYeDNQQzD2Hg2g8t.js";import{m as E}from"./CuA_0ud078oJ-lK1_bt7.js";import{I as b}from"./B386L9xRsGPuiIWZWLBJ.js";import{a as p}from"./CiW7RIy8_7rKRg9LP8yw.js";import"./D95vS4HXwexk6O9L7iKW.js";import"./b9QDabEUvKe6AI27JKho.js";import{c as L}from"./BvFgMfzu9O3nUQg8aBdA.js";const A=g.button`
	height: 45px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: transparent;
	outline: none;
	border: none;
	cursor: pointer;
`,T=g(b)`
	color: var(--text-secondary);
	&:hover {
		color: var(--text);
	}
`;let t;function z(r,u){t&&t.remove(),t=document.createElement("input"),t.accept="*",t.type="file",t.multiple=!0,t.style.display="none",t.addEventListener("change",async i=>{var a;const s=(a=i.currentTarget)==null?void 0:a.files;if(s){for(const d of s)if(d.size>p)return u();r(Array.from(s))}}),document.body.appendChild(t),t.click()}function j({append:r,clearInput:u}){const i=()=>{E.push({type:"error",title:"File Too Large",error:`Max file size is ${L(p)}.`})},s=()=>{z(r,i)};return x.useEffect(()=>{function a(e){var l;const c=(l=e.clipboardData)==null?void 0:l.items;if(typeof c>"u")return;const f=[];for(const o of c)if(o.type.startsWith("text/"))o.kind==="string"&&o.getAsString(n=>{if(n.length>4e3){e.preventDefault();const y=new File([n],"message.txt",{type:"text/plain"});r([y]),u()}});else{const n=o.getAsFile();if(n){if(n.size>p){i();continue}f.push(n)}}r(f)}function d(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="copy")}function m(e){var f;e.preventDefault();const c=(f=e.dataTransfer)==null?void 0:f.files;if(c){const l=[];for(const o of c){if(o.size>p){i();continue}l.push(o)}r(l)}}return document.addEventListener("paste",a),document.addEventListener("dragover",d),document.addEventListener("drop",m),()=>{document.removeEventListener("paste",a),document.removeEventListener("dragover",d),document.removeEventListener("drop",m)}},[]),v.jsx(A,{onClick:s,children:v.jsx(T,{icon:"mdiPlusCircle",size:"24px"})})}const R=h(j);export{R as A};
