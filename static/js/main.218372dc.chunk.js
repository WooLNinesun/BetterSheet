(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{319:function(e,t,a){e.exports=a(772)},527:function(e,t,a){},528:function(e,t,a){},529:function(e,t,a){},611:function(e,t,a){},724:function(e,t,a){},726:function(e,t,a){},745:function(e,t,a){},772:function(e,t,a){"use strict";a.r(t);a(320),a(330);var n=a(0),r=a.n(n),i=a(76),c=a.n(i),o=(a(527),a(528),a(68)),l=(a(529),a(781)),u=a(784),s=a(298),m=a.n(s),f=(a(611),a(778)),d=a(777),h=function(e){var t=e.headerContent,a=e.rowDatas;return r.a.createElement("div",{className:"card-view"},r.a.createElement(f.a.Group,{centered:!0,doubling:!0},a.map(function(e,a){return r.a.createElement(f.a,{key:a,fluid:!0},r.a.createElement(f.a.Content,null,r.a.createElement(d.a,{definition:!0},r.a.createElement(d.a.Body,null,t.map(function(t,a){return r.a.createElement(d.a.Row,{key:a},r.a.createElement(d.a.Cell,{width:4},t),r.a.createElement(d.a.Cell,null,e[t]))})))))})))};h.defaultProps={headerContent:[],rowDatas:[]};var p=h,E=(a(724),a(725),function(e){var t=e.worksheet,a=e.infos;return r.a.createElement("div",{className:"data-view-tab"},r.a.createElement(l.a,{as:"h1",textAlign:"center",dividing:!0},t.title),""!==a&&void 0!==a?r.a.createElement(u.a,{className:"markdown-body"},r.a.createElement(m.a,{source:a})):null,r.a.createElement(p,{headerContent:Object.keys(t.data[0]||{}),rowDatas:t.data}))}),b=(a(726),a(779)),v=a(194),g=a(775),w=a(780),k=a(782),y=function(e){var t=e.title,a=e.tabMenuItems,n=e.linkMenuItems,i=r.a.useState(!1),c=Object(o.a)(i,2),u=c[0],s=c[1],m=r.a.useState(0),f=Object(o.a)(m,2),d=f[0],h=f[1],p=function(e,t){h(t.index),s(!1)},E=r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a.Item,{header:!0},t),a.map(function(e,t){return r.a.createElement(b.a.Item,{key:t,index:t,active:d===t,onClick:p,icon:!0},r.a.createElement(v.a,{name:"table"}),e.name)}),r.a.createElement(g.a,{horizontal:!0},r.a.createElement(l.a,{as:"h6"},"Links")),n.map(function(e,t){return r.a.createElement(b.a.Item,{key:t,icon:!0,as:"a",href:e.href,target:"__blank"},r.a.createElement(v.a,{name:"external alternate"}),e.name)})),y=r.a.createElement(w.a,null,a.map(function(e,t){return r.a.createElement(w.a.Column,{key:t,className:d===t?"":"hidden"},e.panel)}));return r.a.createElement(w.a,null,r.a.createElement(w.a.Row,{columns:1,only:"mobile tablet"},r.a.createElement(k.a.Pushable,{as:w.a.Column,className:"mobile-sidebar-container"},r.a.createElement(k.a,{as:b.a,vertical:!0,animation:"overlay",color:"blue",onHide:function(){return s(!1)},visible:u},E),r.a.createElement(k.a.Pusher,{dimmed:u},r.a.createElement(b.a,{borderless:!0,compact:!0,fixed:"left",size:"small",inverted:!0,color:"blue"},r.a.createElement(b.a.Item,{className:"mobile-sidebar-toggle",onClick:function(){return s(!0)}},r.a.createElement(v.a,{fitted:!0,name:"sidebar"}))),y))),r.a.createElement(w.a.Row,{columns:1,only:"computer"},r.a.createElement(k.a.Pushable,{as:w.a.Column,className:"computer-sidebar-container"},r.a.createElement(b.a,{vertical:!0,fixed:"left",pointing:!0,secondary:!0,color:"blue"},E),r.a.createElement(k.a.Pusher,null,y))))},x=(a(745),a(309)),j=function(e){var t=e.isLoading,a=e.children;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement("div",{className:"loading-container"},r.a.createElement(x.ClipLoader,{loading:t,color:"#4A90E2",sizeUnit:"px",size:100}),r.a.createElement(l.a,{className:"loading-text",textAlign:"center"},"Loading Data...")):a)};j.defaultProps={isLoading:!0};var O=j,C=a(60),N=a.n(C),S=a(138),I={title:"",links:[],infos:{}};function L(){return(L=Object(S.a)(N.a.mark(function e(t){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",D(t).then(function(){var e=Object(S.a)(N.a.mark(function e(t){var a,n;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a="",n=[],!(t&&t.feed&&t.feed.title&&t.feed.entry)){e.next=6;break}return a=P(t.feed.title),e.next=6,z(t.feed.entry).then(function(e){n=e});case 6:return e.abrupt("return",{title:a,rawWorksheetDatas:n});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()).then(function(e){var t=I,a=[];return e.rawWorksheetDatas.forEach(function(e){"Settings"!==e.title?a.push(e):t=B(e)}),{title:e.title,settings:t,worksheetDatas:a}}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}function D(e){return fetch(e).then(function(e){return e.json()})}function P(e){return e&&e.$t?e.$t:""}function B(e){var t={attribute:"",arguments1:"",arguments2:""},a=I;return e.data.forEach(function(e){var n=Object.assign(t,e);"title"===n.attribute&&(a.title=n.arguments1),"links"===n.attribute&&""!==n.arguments1&&a.links.push({name:n.arguments1,href:n.arguments2}),"infos"===n.attribute&&""!==n.arguments1&&(a.infos[n.arguments1]=n.arguments2)}),a}function z(e){return M.apply(this,arguments)}function M(){return(M=Object(S.a)(N.a.mark(function e(t){var a,n,r;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=[],t.forEach(function(e){var t=P(e.title),n=R(e.link,/#listfeed/);""!==t&&""!==n&&a.push({title:t,link:n,data:[]})}),n=N.a.mark(function e(t){var n;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a[t],e.next=3,D(n.link).then(function(e){if(e&&e.feed&&e.feed.entry){var n=e.feed.entry.map(function(e){var t={};return Object.keys(e).filter(function(e){return e.indexOf("gsx$")>-1}).forEach(function(a){var n=a.substring(4),r=P(e[a]);t[n]=r}),t});a[t].data=n}});case 3:case"end":return e.stop()}},e)}),r=0;case 4:if(!(r<a.length)){e.next=9;break}return e.delegateYield(n(r),"t0",6);case 6:r++,e.next=4;break;case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function R(e,t){var a=e.find(function(e){return t.test(e.rel)});return a?"".concat(a.href,"?alt=json"):""}var J=function(){var e=r.a.useState(!0),t=Object(o.a)(e,2),a=t[0],n=t[1],i=r.a.useState(""),c=Object(o.a)(i,2),l=c[0],u=c[1],s=r.a.useState(I),m=Object(o.a)(s,2),f=m[0],d=m[1],h=r.a.useState([]),p=Object(o.a)(h,2),b=p[0],v=p[1];r.a.useEffect(function(){var e=new URLSearchParams(window.location.search).get("sheetid")||"";""===e&&(e="1LBQajGNLrw5Rjo7pGuxKJM1prlQ9XPE-0aTJsiz5eQQ");var t="feeds/worksheets/".concat(e,"/public/values?alt=json");(function(e){return L.apply(this,arguments)})("".concat("https://spreadsheets.google.com","/").concat(t)).then(function(e){u(e.title),d(e.settings),v(e.worksheetDatas),n(!1)})},[]);var g=f.title||l;return document.title=g?"".concat(g," - BetterSheet"):"BetterSheet",r.a.createElement(O,{isLoading:a},r.a.createElement(y,{title:g,tabMenuItems:b.map(function(e){return{name:e.title,panel:r.a.createElement(E,{worksheet:e,infos:f.infos[e.title]})}}),linkMenuItems:f.links}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[319,1,2]]]);
//# sourceMappingURL=main.218372dc.chunk.js.map