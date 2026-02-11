import{q as r,o as s,j as t,Q as i}from"./YuA7MKX-N8BBDZOAxa77.js";import{F as n}from"./DEI1kDKWHUabu7CFeig7.js";import"./CFapeHO29Bm4hnyy13El.js";import{F as o}from"./r7F8zce5OY3kApMcqdVf.js";import"./C4MV6N8Q0ORPjSjX0a5v.js";import"./CmqWv5OCCilcZNSI6nce.js";import"./tsAyRgMDs-NXJHrTB2J5.js";import"./4WJcBSnOYxEuqdfQOfpK.js";import"./DySALqpNdPh9Jna_Spl3.js";import{M as a}from"./BecsZEBqk_fnN_DlRHyD.js";import"./xBFF9j8HBxXOELsgf_Mw.js";import"./BAn4QhXx0eqK_0X5ekrZ.js";import"./Dmoj_W4VxmUkboS2v2aV.js";import"./D9XdRzw2tkI_TCjguAEr.js";import"./Y8-bfeL-ADaHJ2-vaWDg.js";import"./DEbnp1YMhIs7EiVOe-fW.js";import{c as p}from"./CGTG0yydcbmB_nEHM58Y.js";import"./BUjYG6qMQjp0KnokeClt.js";import"./b9QDabEUvKe6AI27JKho.js";const _=r.div`
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
