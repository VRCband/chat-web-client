import{q as r,o as s,j as t,Q as i}from"./DeTGZYeDNQQzD2Hg2g8t.js";import{F as n}from"./BgMuKiUO8CiE2oosV8g4.js";import"./BTEXs4pNkQO6440NG1K7.js";import{F as o}from"./DXuJD0NCz5mcmU5bqHpy.js";import"./aNk37PhBAZcbfJcmeFAP.js";import"./r4Csvu2jYLFKG8Q673pU.js";import"./D_ZpYC3Ew8Bezl-0h3OI.js";import"./DmEtstg7swQ7i8QGEN4D.js";import"./CPWJQrUVesy-x3hwZUj8.js";import{M as a}from"./C4XUAn8A-wncPJhjaBPs.js";import"./B9fJR13iWWehQ2BrcfYV.js";import"./DMwlXDwmyiEQ8L43jrSt.js";import"./BjxM3yAyLpCQgAkN4H_j.js";import"./DfwHk0sCjMwE-hZzvBvJ.js";import"./CdDYBQguj4dY3sfHicOM.js";import"./DYOmRhjMlohAT47Pt9dd.js";import{c as p}from"./CGTG0yydcbmB_nEHM58Y.js";import"./D95vS4HXwexk6O9L7iKW.js";import"./b9QDabEUvKe6AI27JKho.js";const _=r.div`
	display: flex;
	overflow: none;
	flex-direction: row;
	${e=>!e.header&&"align-items: center;"}
	${e=>e.header&&"margin-top: 10px;"}
	${e=>e.mention&&"background-color: hsl(var(--warning-light-hsl)/0.1);"}
	padding-top: 0.2rem;
	padding-bottom: 0.2rem;

	.message-details {
		display: flex;
		align-items: center;
		flex-shrink: 0;
	}

	.message-details > .name {
		font-weight: var(--font-weight-medium);
	}

	&:hover {
		background-color: ${e=>e.mention?"hsl(var(--warning-light-hsl)/0.08);":"var(--background-primary-highlight);"};

		time,
		.edited {
			opacity: 1;
		}
	}
`,$=r.div`
	width: 62px;
	display: flex;
	flex-shrink: 0;
	padding-top: 2px;
	flex-direction: row;
	justify-content: center;

	.messageTimestampWrapper {
		display: flex;
		flex-direction: column;
	}

	time,
	.edited {
		opacity: 0;
		font-size: 12px;
		color: var(--text-secondary);
	}
`,F=r.div`
	position: relative;
	min-width: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-right: 48px;
	word-wrap: anywhere;
	flex: 1;
`,N=r.div`
	${e=>e.sending&&"opacity: 0.5;"}
	${e=>e.failed&&"color: var(--error);"}
	margin: 2px 0;
`,m=r.div`
	flex-shrink: 0;
	font-size: 12px;
	display: inline-flex;
	color: var(--text-secondary);
	padding-left: 4px;
	align-self: center;

	.edited {
		cursor: default;
		user-select: none;
	}
`,I=s(({message:e,position:d})=>d==="left"?e instanceof a&&e.edited_timestamp?t.jsxs("div",{className:"messageTimestampWrapper",children:[t.jsx(n,{placement:"top",type:"tooltip",props:{content:t.jsx("span",{children:i(e.timestamp).format("dddd, MMMM D, YYYY h:mm A")})},children:t.jsx(o,{children:t.jsx("time",{className:"copyTime",dateTime:e.edited_timestamp.toISOString(),children:i(e.edited_timestamp).format("h:mm A")})})}),t.jsx("span",{className:"edited",children:t.jsx(n,{placement:"top",type:"tooltip",props:{content:t.jsx("span",{children:i(e.edited_timestamp).format("dddd, MMMM D, YYYY h:mm A")})},children:t.jsx(o,{children:t.jsx("span",{children:"(edited)"})})})})]}):t.jsx(t.Fragment,{children:t.jsx("time",{dateTime:e.timestamp.toISOString(),children:i(e.timestamp).format("h:mm A")})}):t.jsxs(m,{children:[t.jsx(n,{placement:"top",type:"tooltip",props:{content:t.jsx("span",{children:i(e.timestamp).format("dddd, MMMM D, YYYY h:mm A")})},children:t.jsx(o,{children:t.jsx("time",{className:"copyTime",dateTime:e.timestamp.toISOString(),children:i(e.timestamp).calendar(void 0,p)})})}),e instanceof a&&e.edited_timestamp&&t.jsx(n,{placement:"top",type:"tooltip",props:{content:t.jsx("span",{children:i(e.edited_timestamp).format("dddd, MMMM D, YYYY h:mm A")})},children:t.jsx(o,{children:t.jsx("span",{className:"edited",children:"(edited)"})})})]}));export{_ as M,$ as a,I as b,F as c,N as d};
