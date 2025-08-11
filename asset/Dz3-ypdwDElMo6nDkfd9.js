import{q as v,R as t,j as e,Z as w}from"./DeTGZYeDNQQzD2Hg2g8t.js";import"./D95vS4HXwexk6O9L7iKW.js";import"./b9QDabEUvKe6AI27JKho.js";import{d as R,e as b}from"./BvFgMfzu9O3nUQg8aBdA.js";const l=v.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 300px;
	min-width: 300px;
	background-color: var(--background-secondary);
	border-radius: 10px;
`;function D({attachment:o}){const u=t.useRef(null),[i,h]=t.useState(!0),[r,p]=t.useState({width:0,height:0}),[s,x]=t.useState(!1),g=o.proxy_url&&o.proxy_url.length>0?o.proxy_url:o.url,m=y=>{const n=y.target,d=n.videoWidth,a=n.videoHeight,j=b(d,a,300,300),c=R(d,a,j,300,300);p({width:c.scaledWidth,height:c.scaledHeight}),h(!1)},f=()=>{x(!0)};return e.jsxs(e.Fragment,{children:[i&&!s&&e.jsx(l,{children:e.jsx(w,{size:"42px",color:"var(--primary)"})}),s&&e.jsx(l,{children:e.jsx("p",{children:"Failed to load video"})}),!s&&e.jsx("video",{style:i?{display:"none"}:{borderRadius:"5px"},controls:!0,preload:"metadata",width:r.width,height:r.height,ref:u,onLoadedMetadata:m,onError:f,children:e.jsx("source",{src:g,type:o.content_type})})]})}export{D as V};
