!function(e){function t(t){for(var a,r,s=t[0],o=t[1],u=t[2],m=0,d=[];m<s.length;m++)r=s[m],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&d.push(l[r][0]),l[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(c&&c(t);d.length;)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var o=n[s];0!==l[o]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},l={0:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var s=window.webpackJsonp=window.webpackJsonp||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=o;i.push([450,1]),n()}({444:function(e,t,n){},450:function(e,t,n){"use strict";n.r(t);n(166),n(168),n(169),n(170),n(171),n(172),n(173),n(174),n(175),n(176),n(177),n(178),n(179),n(180),n(181),n(182),n(183),n(184),n(185),n(186),n(187),n(188),n(189),n(190),n(191),n(192),n(193),n(75),n(194),n(195),n(196),n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(208),n(210),n(211),n(212),n(104),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(236),n(237),n(238),n(239),n(241),n(242),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(265),n(266),n(267),n(268),n(269),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(150),n(283),n(284),n(151),n(285),n(286),n(287),n(288),n(152),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(113),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(357),n(358),n(359),n(360),n(361),n(362),n(363),n(364),n(366),n(367),n(368),n(369),n(370),n(371),n(372),n(373),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(381),n(382),n(383),n(384),n(385),n(386),n(387),n(388),n(389),n(390),n(392),n(393),n(394),n(395),n(396),n(397),n(398),n(399),n(400),n(401),n(402),n(403),n(404),n(405),n(406),n(407),n(408),n(409),n(410),n(411),n(412),n(413),n(414),n(415),n(416),n(417),n(418),n(419),n(420),n(421),n(422),n(423),n(425),n(426),n(427),n(428),n(429),n(430),n(431),n(432),n(433),n(434),n(435),n(436),n(437),n(438),n(439),n(440),n(442),n(163),n(445);var a=n(1),l=n.n(a),i=n(165),r=n.n(i),s=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,l,i=n.call(e),r=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)r.push(a.value)}catch(e){l={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(l)throw l.error}}return r};function o(e){var t=e.width,n=e.height,i=s(Object(a.useState)({x:0,y:0}),2),r=i[0],o=i[1];return Object(a.useEffect)((function(){var e=function(){var e=window.pageXOffset,t=window.pageYOffset;o({x:e,y:t})};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{position:"absolute",transform:"translate(0px, "+r.y+"px)"}},Object(a.useMemo)((function(){return Array.from({length:t/100}).map((function(e,t){return l.a.createElement("span",{style:{color:"#999999",position:"absolute",display:"inline-block",transform:"translate("+100*t+"px, 0px)"},key:t},100*t)}))}),[t])),l.a.createElement("div",{style:{position:"absolute",transform:"translate("+r.x+"px, 0px)"}},Object(a.useMemo)((function(){return Array.from({length:n/100}).map((function(e,t){return l.a.createElement("span",{style:{color:"#999999",position:"absolute",display:"inline-block",transform:"translate(0px, "+100*t+"px)"},key:t},100*t)}))}),[n])))}var u=l.a.memo((function(e){var t=e.width,n=e.height;return l.a.createElement(l.a.Fragment,null,l.a.createElement("svg",{style:{position:"absolute"},width:t,height:n},[{color:"#eeeeee",unit:10},{color:"#cccccc",unit:100}].map((function(e,a){var i=e.color,r=e.unit;return l.a.createElement(l.a.Fragment,{key:a},Array.from({length:Math.ceil(n/r)}).map((function(e,n){var a=n*r;return l.a.createElement("line",{key:"0"+a+t+a,x1:"0",y1:a,x2:t,y2:a,style:{stroke:i,strokeWidth:"1"}})})),Array.from({length:Math.ceil(t/r)}).map((function(e,t){var a=t*r;return l.a.createElement("line",{key:a+"0"+a+n,x1:a,y1:"0",x2:a,y2:n,style:{stroke:i,strokeWidth:"1"}})})))}))),l.a.createElement(o,{width:t,height:n}))})),c=function(){return(c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},m=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,l,i=n.call(e),r=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)r.push(a.value)}catch(e){l={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(l)throw l.error}}return r};function d(e){var t=Object(a.useRef)(null),n=Object(a.useRef)(null),i=m(Object(a.useState)({top:0,left:0}),2),r=i[0],s=i[1],o=m(Object(a.useState)(),2),u=o[0],d=o[1],f=m(Object(a.useState)(),2),p=f[0],h=f[1],g=m(Object(a.useState)({x:600,y:200}),2),v=g[0],E=g[1],b=e.boundary,y=e.pageXOffset,w=e.pageYOffset,x=e.width,O=e.height,N=e.border,W=void 0===N?0:N,S=e.padding,H=void 0===S?0:S,j=e.margin,C=void 0===j?0:j;function X(e){var n=t.current;if(n){var a=e.pageX,l=e.pageY,i=n.getBoundingClientRect(),r=i.x+y-C-a,s=i.y+w-C-l,o=function(e){var t=e.pageX,a=e.pageY,l=x+2*W+2*H+2*C,i=O+2*W+2*H+2*C,o=r+t;o+l>b.width?o=b.width-l:o<0&&(o=0);var u=s+a;u+i>b.height?u=b.height-i:u<0&&(u=0),E({x:o,y:u}),d(n.getBoundingClientRect())};window.addEventListener("mouseup",(function e(){window.removeEventListener("mouseup",e),window.removeEventListener("mousemove",o)})),window.addEventListener("mousemove",o),e.preventDefault()}}Object(a.useEffect)((function(){var e=n.current;e&&s({top:e.offsetTop,left:e.offsetLeft})}),[]),Object(a.useEffect)((function(){var e=t.current;if(e){var n=e.getBoundingClientRect();d(n)}}),[y,w]),Object(a.useEffect)((function(){var e=t.current;if(e){var n=e.offsetWidth,a=e.offsetHeight,l=e.offsetTop,i=e.offsetLeft,r=e.clientWidth,s=e.clientHeight,o=e.clientTop,u=e.clientLeft,c=e.scrollTop,m=e.scrollLeft;h({offsetWidth:n,offsetHeight:a,offsetTop:l,offsetLeft:i,clientWidth:r,clientHeight:s,clientTop:o,clientLeft:u,scrollTop:c,scrollLeft:m})}}),[x,O,W,H,C]);var Y={x:0,y:0,width:x+2*C+2*W+2*H,height:O+2*C+2*W+2*H},L={x:C,y:C,width:x+2*W+2*H,height:O+2*W+2*H},q={x:C+W,y:C+W,width:x+2*H,height:O+2*H},k={x:C+W+H,y:C+W+H,width:x,height:O};return l.a.createElement("div",{style:{position:"relative"}},l.a.createElement("svg",{style:{position:"absolute",transform:"translate("+v.x+"px, "+v.y+"px)"},width:Y.width,height:Y.height,onMouseDown:X},l.a.createElement("rect",{x:Y.x+1,y:Y.y+1,width:Y.width-2,height:Y.height-2,style:{fill:"transparent",stroke:"#000000",strokeWidth:"2",strokeDasharray:"10 10"}}),l.a.createElement("text",{dominantBaseline:"hanging",x:10,y:"10"},"margin: ",C),l.a.createElement("rect",c({},L,{style:{fill:"transparent",stroke:"#000000",strokeWidth:"2"}})),l.a.createElement("text",{dominantBaseline:"hanging",x:L.x+10,y:L.y+10},"border: ",W),l.a.createElement("rect",c({},q,{style:{fill:"transparent",stroke:"#000000",strokeWidth:"2"}})),l.a.createElement("text",{dominantBaseline:"hanging",x:q.x+10,y:q.y+10},"padding: ",H),l.a.createElement("rect",c({},k,{style:{fill:"transparent",stroke:"#000000",strokeWidth:"2"}}))),l.a.createElement("div",{ref:t,style:{position:"absolute",color:"#aaaaaa",width:x+"px",height:O+"px",border:W+"px solid rgba(0, 0, 0, 0)",padding:H+"px",margin:C+"px",overflow:"auto",transform:"translate("+v.x+"px, "+v.y+"px)"},onScroll:function(){var e=t.current;if(e){var n=e.scrollTop,a=e.scrollLeft;h((function(e){return c(c({},e),{scrollTop:n,scrollLeft:a})}))}},onMouseDown:X},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci est, sodales non lacinia at, consectetur id lectus. Morbi euismod ante at faucibus accumsan. Aenean nec mauris urna. Sed sit amet vehicula dolor. Donec ligula lacus, consequat sit amet augue et, facilisis vulputate augue. Fusce non sem eu lectus elementum ornare. Maecenas lacus nulla, egestas ac purus ut, ultricies fermentum est. In quis lacus sodales, ullamcorper erat id, suscipit ex. Morbi auctor nisi at feugiat pretium. Suspendisse ut placerat eros, eget vehicula quam. Nunc eget ipsum a urna cursus posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent dui orci, cursus non sagittis a, vehicula molestie libero.\n\nNullam ante justo, varius in lobortis condimentum, egestas nec magna. Aenean ultrices nulla aliquet luctus tincidunt. Quisque pulvinar dolor at dictum blandit. Nam sodales sed nisl non tincidunt. Vivamus posuere felis eget eros euismod bibendum. Proin ut justo dapibus, ornare nisi eget, consectetur dolor. Proin iaculis eu urna vitae finibus. Ut et dolor id mi commodo ullamcorper. Integer non sem rhoncus felis viverra pharetra. Suspendisse ac egestas arcu, non lobortis eros. Aenean diam tellus, finibus a tempor quis, auctor posuere est. Maecenas eget purus ligula. Integer bibendum vehicula sapien sed gravida. Nulla ac metus dignissim, sodales purus id, semper odio.\n\nSed quis consectetur odio. In et nunc ullamcorper, sodales velit quis, fermentum enim. Curabitur a euismod lorem. Quisque gravida blandit sollicitudin. Nam vitae dolor dignissim, luctus urna laoreet, lacinia turpis. Vestibulum tincidunt urna nibh, a consectetur dui sagittis ut. Cras tempus tortor sit amet felis sagittis, quis sagittis nunc consequat. Fusce molestie felis in massa blandit posuere. Integer luctus id tellus ut condimentum. Curabitur eu sapien at arcu finibus lacinia quis ac tortor. Sed gravida consectetur pretium. Mauris consectetur orci a pretium sagittis.\n\nVivamus auctor nisl dolor, vel dignissim quam pulvinar sagittis. Ut finibus vulputate nisi, ut consectetur turpis faucibus sed. Donec consequat ante vitae ex rhoncus, ut hendrerit libero bibendum. Etiam commodo dui non magna sagittis, non faucibus erat placerat. Curabitur euismod massa elit, ut eleifend magna interdum in. Mauris suscipit efficitur nisl, placerat sodales felis commodo eget. Sed vel euismod quam, in efficitur eros. Aenean sollicitudin, purus in venenatis eleifend, dolor leo consequat arcu, eget tristique ante libero sed ante. In dapibus urna metus, feugiat mollis turpis fringilla a. Etiam eros elit, semper lacinia maximus sed, fringilla a sem. Vivamus vulputate est lacus, ut consequat nisi dictum eget. Curabitur accumsan sagittis turpis nec semper. Integer pharetra lacus nec tincidunt fringilla. Integer congue auctor sem, ac dapibus quam varius in. Sed placerat, tellus ac gravida sagittis, leo est sodales sapien, ut scelerisque nibh neque quis tellus.\n\nDonec interdum in arcu efficitur tempus. Praesent sed volutpat erat, eu blandit ligula. Morbi dictum id mauris sed interdum. Sed id condimentum enim. Phasellus pharetra iaculis erat, non scelerisque purus maximus cursus. Nullam pharetra dictum mauris eget suscipit. Curabitur varius fermentum justo, ut consequat lacus pulvinar nec. Praesent efficitur nisl nec augue gravida vehicula. Cras non convallis nisl, nec gravida ex. Donec commodo magna dapibus ipsum consectetur laoreet.",l.a.createElement("span",{ref:n,style:{display:"inline-block",top:"150px",left:"220px",position:"absolute"}},"🐵")),l.a.createElement("div",{style:{width:"250px",position:"absolute",transform:"translate("+(v.x-250)+"px, "+v.y+"px)"}},l.a.createElement("div",null,"width: ",l.a.createElement("span",{className:"num"},x)),l.a.createElement("div",null,"height: ",l.a.createElement("span",{className:"num"},O)),l.a.createElement("div",null,"offsetTop: ",l.a.createElement("span",{className:"num"},null==p?void 0:p.offsetTop)),l.a.createElement("div",null,"offsetLeft:"," ",l.a.createElement("span",{className:"num"},null==p?void 0:p.offsetLeft)),l.a.createElement("div",null,"offsetWidth:"," ",l.a.createElement("span",{className:"num"},null==p?void 0:p.offsetWidth)),l.a.createElement("div",null,"offsetHeight:"," ",l.a.createElement("span",{className:"num"},null==p?void 0:p.offsetHeight)),l.a.createElement("div",null,"clientWidth:"," ",l.a.createElement("span",{className:"num"},null==p?void 0:p.clientWidth)),l.a.createElement("div",null,"clientHeight:",l.a.createElement("span",{className:"num"},null==p?void 0:p.clientHeight)),l.a.createElement("div",null,"clientTop: ",l.a.createElement("span",{className:"num"},null==p?void 0:p.clientTop)),l.a.createElement("div",null,"clientLeft:"," ",l.a.createElement("span",{className:"num"},null==p?void 0:p.clientLeft)),l.a.createElement("div",null,"scrollTop: ",l.a.createElement("span",{className:"num"},null==p?void 0:p.scrollTop)),l.a.createElement("div",null,"scrollLeft:"," ",l.a.createElement("span",{className:"num"},null==p?void 0:p.scrollLeft)),l.a.createElement("div",null,"ClientRect X: ",l.a.createElement("span",{className:"num"},null==u?void 0:u.x)),l.a.createElement("div",null,"ClientRect Y: ",l.a.createElement("span",{className:"num"},null==u?void 0:u.y)),l.a.createElement("div",null,"ClientRect width:"," ",l.a.createElement("span",{className:"num"},null==u?void 0:u.width)),l.a.createElement("div",null,"ClientRect height:"," ",l.a.createElement("span",{className:"num"},null==u?void 0:u.height)),l.a.createElement("div",null,"ClientRect top:"," ",l.a.createElement("span",{className:"num"},null==u?void 0:u.top)),l.a.createElement("div",null,"ClientRect left:"," ",l.a.createElement("span",{className:"num"},null==u?void 0:u.left)),l.a.createElement("div",null,"ClientRect bottom:"," ",l.a.createElement("span",{className:"num"},null==u?void 0:u.bottom)),l.a.createElement("div",null,"ClientRect right:"," ",l.a.createElement("span",{className:"num"},null==u?void 0:u.right)),l.a.createElement("div",null,"Monkey offsetTop: ",l.a.createElement("span",{className:"num"},r.top)),l.a.createElement("div",null,"Monkey offsetLeft: ",l.a.createElement("span",{className:"num"},r.left))))}var f=function(){return(f=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},p=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,l,i=n.call(e),r=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)r.push(a.value)}catch(e){l={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(l)throw l.error}}return r};function h(){return{documentElementClientWidth:document.documentElement.clientWidth,documentElementOffsetWidth:document.documentElement.offsetWidth,documentElementScrollWidth:document.documentElement.scrollWidth,documentElementClientHeight:document.documentElement.clientHeight,documentElementOffsetHeight:document.documentElement.offsetHeight,documentElementScrollHeight:document.documentElement.scrollHeight,bodyClientWidth:document.body.clientWidth,bodyOffsetWidth:document.body.offsetWidth,bodyScrollWidth:document.body.scrollWidth,bodyClientHeight:document.body.clientHeight,bodyOffsetHeight:document.body.offsetHeight,bodyScrollHeight:document.body.scrollHeight,innerWidth:window.innerWidth,innerHeight:window.innerHeight}}n(443),n(444),r.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement((function(){var e=p(Object(a.useState)(f(f({},h()),{pageXOffset:window.pageXOffset,pageYOffset:window.pageYOffset,scrollX:window.scrollX,scrollY:window.scrollY,pageX:0,pageY:0,clientX:0,clientY:0,boundary:{width:3e3,height:3e3}})),2),t=e[0],n=e[1],i=t.documentElementClientWidth,r=t.documentElementOffsetWidth,s=t.documentElementScrollWidth,o=t.documentElementClientHeight,c=t.documentElementOffsetHeight,m=t.documentElementScrollHeight,g=t.bodyClientWidth,v=t.bodyOffsetWidth,E=t.bodyScrollWidth,b=t.bodyClientHeight,y=t.bodyOffsetHeight,w=t.bodyScrollHeight,x=t.innerWidth,O=t.innerHeight,N=t.pageXOffset,W=t.pageYOffset,S=t.scrollX,H=t.scrollY,j=t.clientX,C=t.clientY,X=t.pageX,Y=t.pageY,L=t.boundary;return Object(a.useEffect)((function(){n((function(e){return f(f({},e),h())}))}),[]),Object(a.useEffect)((function(){var e=function(e){var t=e.clientX,a=e.clientY,l=e.pageX,i=e.pageY;n((function(e){return f(f({},e),{clientX:t,clientY:a,pageX:l,pageY:i})}))},t=function(){var e=window.pageXOffset,t=window.pageYOffset,a=window.scrollX,l=window.scrollY;n((function(n){return f(f({},n),{pageX:n.clientX+e,pageY:n.clientY+t,pageXOffset:e,pageYOffset:t,scrollX:a,scrollY:l})}))},a=function(){n((function(e){return f(f({},e),h())}))};return window.addEventListener("mousemove",e),window.addEventListener("scroll",t),window.addEventListener("resize",a),function(){window.removeEventListener("mousemove",e),window.removeEventListener("scroll",t),window.removeEventListener("resize",a)}}),[]),l.a.createElement("div",{style:{width:L.width+"px",height:L.height+"px"}},l.a.createElement(u,f({},L)),l.a.createElement("div",{style:{margin:"50px",position:"fixed"}},"documentElementClientWidth:"," ",l.a.createElement("span",{className:"num"},i),l.a.createElement("br",null),"documentElementOffsetWidth:"," ",l.a.createElement("span",{className:"num"},r),l.a.createElement("br",null),"documentElementScrollWidth:"," ",l.a.createElement("span",{className:"num"},s),l.a.createElement("br",null),"documentElementClientHeight:"," ",l.a.createElement("span",{className:"num"},o),l.a.createElement("br",null),"documentElementOffsetHeight:"," ",l.a.createElement("span",{className:"num"},c),l.a.createElement("br",null),"documentElementScrollHeight:"," ",l.a.createElement("span",{className:"num"},m),l.a.createElement("br",null),"bodyClientWidth: ",l.a.createElement("span",{className:"num"},g),l.a.createElement("br",null),"bodyOffsetWidth: ",l.a.createElement("span",{className:"num"},v),l.a.createElement("br",null),"bodyScrollWidth: ",l.a.createElement("span",{className:"num"},E),l.a.createElement("br",null),"bodyClientHeight: ",l.a.createElement("span",{className:"num"},b),l.a.createElement("br",null),"bodyOffsetHeight: ",l.a.createElement("span",{className:"num"},y),l.a.createElement("br",null),"bodyScrollHeight: ",l.a.createElement("span",{className:"num"},w),l.a.createElement("br",null),"innerWidth: ",l.a.createElement("span",{className:"num"},x),l.a.createElement("br",null),"innerHeight: ",l.a.createElement("span",{className:"num"},O),l.a.createElement("br",null),"pageXOffset: ",l.a.createElement("span",{className:"num"},N),l.a.createElement("br",null),"pageYoffset: ",l.a.createElement("span",{className:"num"},W),l.a.createElement("br",null),"scrollX: ",l.a.createElement("span",{className:"num"},S),l.a.createElement("br",null),"scrollY: ",l.a.createElement("span",{className:"num"},H),l.a.createElement("br",null),"mouse clientX: ",l.a.createElement("span",{className:"num"},j),l.a.createElement("br",null),"mouse clientY: ",l.a.createElement("span",{className:"num"},C),l.a.createElement("br",null),"mouse pageX: ",l.a.createElement("span",{className:"num"},X),l.a.createElement("br",null),"mouse pageY: ",l.a.createElement("span",{className:"num"},Y)),l.a.createElement(d,{boundary:L,pageXOffset:N,pageYOffset:W,width:200,height:200,margin:60,border:50,padding:40}))}),null)),document.getElementById("app"))}});
//# sourceMappingURL=main.a0789.js.map