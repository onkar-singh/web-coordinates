(()=>{"use strict";var e,t={3767:(e,t,n)=>{var r=n(7294),o=n(3935);function i(e){var t=(0,r.useContext)(Y),n=t.width,o=t.height;return r.createElement("svg",{style:{position:"absolute"},width:n,height:o},[{color:"#eeeeee",unit:10},{color:"#cccccc",unit:100}].map((function(e,t){var i=e.color,l=e.unit;return r.createElement(r.Fragment,{key:t},Array.from({length:Math.ceil(o/l)}).map((function(e,t){var o=t*l;return r.createElement("line",{key:"0"+o+n+o,x1:"0",y1:o,x2:n,y2:o,style:{stroke:i,strokeWidth:1}})})),Array.from({length:Math.ceil(n/l)}).map((function(e,t){var n=t*l;return r.createElement("line",{key:n+"0"+n+o,x1:n,y1:"0",x2:n,y2:o,style:{stroke:i,strokeWidth:1}})})))})))}n(1249),n(1038),n(8783),n(9601),n(2526),n(1817),n(1539),n(2165),n(6992),n(3948);var l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(){var e=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return l}((0,r.useState)({pageXOffset:Math.floor(window.pageXOffset),pageYOffset:Math.floor(window.pageYOffset),scrollX:Math.floor(window.scrollX),scrollY:Math.floor(window.scrollY),mousePosition:{clientX:0,clientY:0,pageX:0,pageY:0},touchPositions:[]}),2),t=e[0],n=e[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.clientX,r=e.clientY,o=e.pageX,i=e.pageY;n((function(e){return l(l({},e),{touchPositions:[],mousePosition:{clientX:Math.floor(t),clientY:Math.floor(r),pageX:Math.floor(o),pageY:Math.floor(i)}})}))},t=function(e){n((function(t){return l(l({},t),{touchPositions:Array.from(e.touches).map((function(e){var t=e.clientX,n=e.clientY,r=e.pageX,o=e.pageY;return{clientX:Math.floor(t),clientY:Math.floor(n),pageX:Math.floor(r),pageY:Math.floor(o)}}))})}))},r=function(){var e=window.pageXOffset,t=window.pageYOffset,r=window.scrollX,o=window.scrollY;n((function(n){return l(l({},n),{pageXOffset:Math.floor(e),pageYOffset:Math.floor(t),scrollX:Math.floor(r),scrollY:Math.floor(o)})}))};return window.addEventListener("mousemove",e),window.addEventListener("touchmove",t),window.addEventListener("scroll",r),function(){window.removeEventListener("mousemove",e),window.removeEventListener("touchmove",t),window.removeEventListener("scroll",r)}}),[]),t}function c(e){var t=e.unit,n=void 0===t?100:t,o=(0,r.useContext)(Y),i=o.width,l=o.height,c=a(),s=c.pageXOffset,u=c.pageYOffset;return r.createElement(r.Fragment,null,r.createElement("div",{style:{position:"fixed"}},(0,r.useMemo)((function(){return Array.from({length:Math.ceil(i/n)}).map((function(e,t){return r.createElement("div",{key:t,style:{position:"absolute",transform:"translate("+(t*n-(s<0?0:s))+"px, 0px)",color:"#999999"}},0===t?null:t*n)}))}),[i,s])),r.createElement("div",{style:{position:"fixed"}},(0,r.useMemo)((function(){return Array.from({length:Math.ceil(l/n)}).map((function(e,t){return r.createElement("div",{key:t,style:{position:"absolute",transform:"translate(0px, "+(t*n-(u<0?0:u))+"px)",color:"#999999"}},0===t?null:t*n)}))}),[l,u])))}var s=r.memo((function(e){return r.createElement(r.Fragment,null,r.createElement(i,null),r.createElement(c,null))})),u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function f(e){var t=(0,r.useRef)(null),n=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return l}((0,r.useState)({x:100,y:100}),2),o=n[0],i=n[1],l=(0,r.useContext)(Y);function a(e){var n=t.current;if(n){var r=e.pageX,o=e.pageY,a=n.getBoundingClientRect(),c=a.x+window.pageXOffset-30-r,s=a.y+window.pageYOffset-30-o,u=function(e){var t=e.pageX,n=e.pageY,r=c+t;r+330>l.width?r=l.width-330:r<0&&(r=0);var o=s+n;o+330>l.height?o=l.height-330:o<0&&(o=0),i({x:r,y:o})};window.addEventListener("mouseup",(function e(){window.removeEventListener("mouseup",e),window.removeEventListener("mousemove",u)})),window.addEventListener("mousemove",u),e.preventDefault()}}var c=0,s=0,f=330,d=330,h={x:30,y:30,width:270,height:270},p={x:60,y:60,width:210,height:210},m={x:90,y:90,width:150,height:150};return r.createElement("div",{style:{position:"relative"}},r.createElement("svg",{style:{position:"absolute",transform:"translate("+o.x+"px, "+o.y+"px)"},width:f,height:d,onMouseDown:a},r.createElement("rect",{x:c+1,y:s+1,width:f-2,height:d-2,style:{fill:"transparent",stroke:"#000000",strokeWidth:"2",strokeDasharray:"10 10"}}),r.createElement("text",{dominantBaseline:"hanging",x:10,y:"10"},"margin"),r.createElement("rect",u({},h,{style:{fill:"transparent",stroke:"#000000",strokeWidth:"2"}})),r.createElement("text",{dominantBaseline:"hanging",x:h.x+10,y:h.y+10},"border"),r.createElement("rect",u({},p,{style:{fill:"transparent",stroke:"#000000",strokeWidth:"2"}})),r.createElement("text",{dominantBaseline:"hanging",x:p.x+10,y:p.y+10},"padding"),r.createElement("rect",u({},m,{style:{fill:"transparent",stroke:"#000000",strokeWidth:"2"}}))),r.createElement("div",{ref:t,style:{cursor:"move",position:"absolute",color:"#aaaaaa",width:"150px",height:"150px",border:"30px solid rgba(0, 0, 0, 0)",padding:"30px",margin:"30px",overflow:"auto",transform:"translate("+o.x+"px, "+o.y+"px)"},onMouseDown:a}))}var d,h,p,m=n(9163),v=m.ZP.ul(d||(h=["\n  display: flex;\n  margin: 0;\n  padding: 0;\n  border-bottom: 1px solid #eee;\n  list-style-type: none;\n\n  li {\n    cursor: pointer;\n    text-align: center;\n    padding: 5px 30px;\n    border-bottom: 2px solid transparent;\n\n    &.selected {\n      border-bottom-color: #000;\n    }\n  }\n"],p=["\n  display: flex;\n  margin: 0;\n  padding: 0;\n  border-bottom: 1px solid #eee;\n  list-style-type: none;\n\n  li {\n    cursor: pointer;\n    text-align: center;\n    padding: 5px 30px;\n    border-bottom: 2px solid transparent;\n\n    &.selected {\n      border-bottom-color: #000;\n    }\n  }\n"],Object.defineProperty?Object.defineProperty(h,"raw",{value:p}):h.raw=p,d=h));function g(e){var t=e.items,n=e.selectedItem,o=e.onSelect;return r.createElement(v,null,(0,r.useMemo)((function(){return t.map((function(e,t){return r.createElement("li",{key:t+"-"+e,className:n===e?"selected":"",onClick:function(){return o(e)}},e)}))}),[t]))}function w(){var e=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return l}((0,r.useState)({innerWidth:Math.floor(window.innerWidth),innerHeight:Math.floor(window.innerHeight),screenWidth:Math.floor(window.screen.width),screenHeight:Math.floor(window.screen.height)}),2),t=e[0],n=e[1];return(0,r.useEffect)((function(){var e=function(){var e=window.innerWidth,t=window.innerHeight,r=window.screen,o=r.width,i=r.height;n({innerWidth:Math.floor(e),innerHeight:Math.floor(t),screenWidth:Math.floor(o),screenHeight:Math.floor(i)})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),t}var y,x=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)l.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return l};!function(e){e.Window="Window",e.Document="Document",e.Box="Box"}(y||(y={}));var E,b=m.ZP.div(E||(E=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}(["\n  background-color: #fff;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-flow: column;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n  .console-resize-bar {\n    width: 100%;\n    height: 5px;\n    background: 0 0;\n    cursor: ns-resize;\n  }\n\n  .console-content-container {\n    padding: 10px;\n    overflow: auto;\n    flex: 1;\n  }\n"],["\n  background-color: #fff;\n  opacity: 0.8;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  flex-flow: column;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n\n  .console-resize-bar {\n    width: 100%;\n    height: 5px;\n    background: 0 0;\n    cursor: ns-resize;\n  }\n\n  .console-content-container {\n    padding: 10px;\n    overflow: auto;\n    flex: 1;\n  }\n"])));function O(){var e=w(),t=e.innerWidth,n=e.innerHeight,o=e.screenWidth,i=e.screenHeight,l=a(),c=l.pageXOffset,s=l.pageYOffset,u=l.scrollX,f=l.scrollY,d=l.mousePosition,h=l.touchPositions,p=x((0,r.useState)(y.Window),2),m=p[0],v=p[1],E=x((0,r.useState)(.3*n),2),O=E[0],Y=E[1],M=.1*n,X=.9*n;return r.createElement(b,{style:{height:O+"px",width:"100%"}},r.createElement("div",{className:"console-resize-bar",onMouseDown:function(e){e.preventDefault();var t=e.pageY,n=O,r=function(e){var r=n+t-e.pageY;Y(r<M?M:r>X?X:r)},o=function(e){r(e)};window.addEventListener("mouseup",(function e(t){r(t),window.removeEventListener("mouseup",e),window.removeEventListener("mousemove",o)})),window.addEventListener("mousemove",o)}}),r.createElement(g,{items:[y.Window,y.Document,y.Box],selectedItem:m,onSelect:function(e){return v(e)}}),r.createElement("div",{className:"console-content-container"},function(){switch(m){case y.Window:return r.createElement(r.Fragment,null,r.createElement("div",null,"innerWidth: ",t),r.createElement("div",null,"innerHeight: ",n),r.createElement("div",null,"screenWidth: ",o),r.createElement("div",null,"screenHeight: ",i),r.createElement("div",null,"pageXOffset: ",c),r.createElement("div",null,"pageYOffset: ",s),r.createElement("div",null,"scrollX: ",u),r.createElement("div",null,"scrollY: ",f),r.createElement("div",null,"scrollY: ",f),h.length>0?h.map((function(e,t){return r.createElement(r.Fragment,{key:"touch"+t},r.createElement("div",null,"touch",t,".pageX: ",e.pageX),r.createElement("div",null,"touch",t,".pageY: ",e.pageY),r.createElement("div",null,"touch",t,".clientX: ",e.clientX),r.createElement("div",null,"touch",t,".clientY: ",e.clientY))})):r.createElement(r.Fragment,null,r.createElement("div",null,"mouse.pageX: ",d.pageX),r.createElement("div",null,"mouse.pageY: ",d.pageY),r.createElement("div",null,"mouse.clientX: ",d.clientX),r.createElement("div",null,"mouse.clientY: ",d.clientY)));case y.Document:case y.Box:return r.createElement(r.Fragment,null,"WIP:")}}()))}var Y=r.createContext({width:0,height:0});o.render(r.createElement((function(){var e=w(),t=(0,r.useMemo)((function(){return{width:1.5*e.innerWidth,height:1.5*e.innerHeight}}),[e.innerWidth,e.innerHeight]);return r.createElement(Y.Provider,{value:t},r.createElement(s,null),r.createElement(f,null),r.createElement(O,null))}),null),document.getElementById("app"))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,n,o,i)=>{if(!n){var l=1/0;for(s=0;s<e.length;s++){for(var[n,o,i]=e[s],a=!0,c=0;c<n.length;c++)(!1&i||l>=i)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(a=!1,i<l&&(l=i));a&&(e.splice(s--,1),t=o())}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[n,o,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,i,[l,a,c]=n,s=0;for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var u=c(r);for(t&&t(n);s<l.length;s++)i=l[s],r.o(e,i)&&e[i]&&e[i][0](),e[l[s]]=0;return r.O(u)},n=self.webpackChunkweb_coordinates_visualization=self.webpackChunkweb_coordinates_visualization||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[43],(()=>r(3767)));o=r.O(o)})();
//# sourceMappingURL=main.8509d.js.map