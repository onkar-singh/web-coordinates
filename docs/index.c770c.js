!function(e){function t(t){for(var n,o,i=t[0],a=t[1],c=t[2],f=0,u=[];f<i.length;f++)o=i[f],F[o]&&u.push(F[o][0]),F[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);u.length;)u.shift()();return r.push.apply(r,c||[]),x()}function x(){for(var e,t=0;t<r.length;t++){for(var x=r[t],n=!0,i=1;i<x.length;i++){var a=x[i];0!==F[a]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=x[0]))}return e}var n={},F={0:0},r=[];function o(t){if(n[t])return n[t].exports;var x=n[t]={i:t,l:!1,exports:{}};return e[t].call(x.exports,x,x.exports,o),x.l=!0,x.exports}o.m=e,o.c=n,o.d=function(e,t,x){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:x})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var x=Object.create(null);if(o.r(x),Object.defineProperty(x,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(x,n,function(t){return e[t]}.bind(null,n));return x},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=a;r.push([121,1]),x()}({121:function(e,t,x){x(122),x(123),e.exports=x(310)},309:function(e,t,x){},310:function(e,t,x){"use strict";x.r(t);x(309);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var x=[],n=!0,F=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(x.push(o.value),!t||x.length!==t);n=!0);}catch(e){F=!0,r=e}finally{try{n||null==i.return||i.return()}finally{if(F)throw r}}return x}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function F(e,t,x){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],F=e.width,r=e.height,o=e.getContext("2d");o.clearRect(0,0,F,r),o.beginPath(),o.save(),o.lineWidth=1,o.strokeStyle=x,o.font="".concat(14,"px 'Courier New', Courier, monospace"),Array.from({length:Math.ceil(r/t)}).forEach(function(e,x){var r=x*t;0!==r&&n&&(o.save(),o.strokeStyle="#ffffff",o.fillText(r,0,r+14),o.restore()),o.moveTo(0,r),o.lineTo(F,r)}),Array.from({length:Math.ceil(F/t)}).forEach(function(e,x){var F=x*t;0!==F&&n&&(o.save(),o.strokeStyle="#ffffff",o.fillText(F,F,14),o.restore()),o.moveTo(F,0),o.lineTo(F,r)}),o.stroke(),o.restore()}function r(e,t){var x=[].concat(t),F=e.width,r=e.height,o=window,i=o.pageXOffset,a=o.pageYOffset,c=e.getContext("2d");c.clearRect(0,0,F,r),c.save();c.font="".concat(14,"px 'Courier New', Courier, monospace"),x.forEach(function(e){var t=e.getBoundingClientRect(),x=t.x,F=t.y,r=t.width,o=t.height,l=e.clientWidth,f=e.clientHeight,u=e.clientTop,s=e.clientLeft,d=e.scrollTop,p=e.scrollLeft,h=Object.entries(window.getComputedStyle(e)).filter(function(e){var t=n(e,1)[0];return-1!==["border","margin","padding"].indexOf(t)}).map(function(e){var t=n(e,2)[1];return parseInt(t)}),g=n(h,3),v=g[0],w=g[1],m=g[2],y=x+i,b=F+a;c.fillStyle="rgba(88, 46, 155, 0.2)",c.fillRect(y-w,b-w,r+2*w,o+2*w),c.fillStyle="#000000",c.fillText("margin:".concat(w),y-w,b-w),c.fillStyle="rgba(88, 46, 155, 0.2)",c.fillRect(y,b,r,o),c.fillStyle="#000000",c.fillText("border:".concat(v),y,b),c.beginPath(),c.strokeStyle="rgba(0, 0, 0, 0.7)",c.moveTo(y+r-v,b),c.lineTo(y+r-v,b+v),c.moveTo(y,b+v+o-2*v),c.lineTo(y+v,b+v+o-2*v),c.stroke(),c.fillText("clientTop:".concat(u),y+r-v,b-2),c.fillText("clientLeft:".concat(s),y-90-v,b+v+o-2*v),c.fillStyle="rgba(88, 46, 155, 0.2)",c.fillRect(y+v,b+v,r-2*v,o-2*v),c.fillStyle="#000000",c.fillText("padding:".concat(m),y+v,b+v-2),c.strokeStyle="rgba(0, 0, 0, 0.7)",c.strokeRect(y+v,b+v,r-2*v,o-2*v),c.fillStyle="#000000",c.fillText("clientWidth:".concat(l),y+v,b+v+o-2*v+14),c.fillText("clientHeight:".concat(f),y+v,b+v+o-2*v+28),c.fillStyle="rgba(88, 46, 155, 0.2)",c.fillRect(y+m+v,b+m+v,r-2*(m+v),o-2*(m+v)),c.fillStyle="#000000",c.fillText("w:".concat(r-2*(m+v)),y+m+v,b+m+v-14),c.fillText("h:".concat(o-2*(m+v)),y+m+v,b+m+v),c.fillText("scrollTop:".concat(d),i+x-120-w,b+m+v-14),c.fillText("scrollLeft:".concat(p),i+x-120-w,b+m+v),c.strokeStyle="rgba(88, 46, 155, 0.7)",c.beginPath(),c.moveTo(i,b),c.lineTo(i+x,b),c.moveTo(y,a),c.lineTo(y,a+F),c.stroke(),c.fillText("clientRectX:".concat(x),i+x-140-w,b-w),c.fillText("clientRectY:".concat(F),i+x-140-w,b-w+14)}),c.restore()}var o="&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;&#x1F648;";function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var x=[],n=!0,F=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(x.push(o.value),!t||x.length!==t);n=!0);}catch(e){F=!0,r=e}finally{try{n||null==i.return||i.return()}finally{if(F)throw r}}return x}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e,t,x,n,F,r,o){try{var i=e[r](o),a=i.value}catch(e){return void x(e)}i.done?t(a):Promise.resolve(a).then(n,F)}var c;function l(e,t){var x=document.createElement("div");return x.style="\n      position: absolute;\n      width: 200px;\n      height: 200px;\n      margin: 30px;\n      border: 40px solid rgba(0, 0, 0, 0);\n      padding: 50px;\n      overflow: auto;\n      transform: translate(".concat(Math.floor(Math.random()*window.innerWidth),"px, ").concat(Math.floor(Math.random()*window.innerHeight),"px)\n    "),x.addEventListener("scroll",function(){t(x)}),x.addEventListener("mousedown",function(n){var F=x.getBoundingClientRect(),r=F.x,o=F.y,a=F.width,c=F.height,l=Object.entries(window.getComputedStyle(x)).filter(function(e){var t=i(e,1)[0];return-1!==["margin"].indexOf(t)}).map(function(e){var t=i(e,2)[1];return parseInt(t)}),f=i(l,1)[0],u=n.pageX,s=n.pageY,d=r+window.pageXOffset-f-u,p=o+window.pageYOffset-f-s,h=function(n){var F=n.pageX,r=n.pageY,o=a+2*f,i=c+2*f,l=d+F,u=p+r;l+o>e.width?l=e.width-o:l<0&&(l=0),u+i>e.height?u=e.height-i:u<0&&(u=0),x.style.transform="translate(".concat(l,"px, ").concat(u,"px)"),t(x)};window.addEventListener("mousemove",h),window.addEventListener("mouseup",function e(){window.removeEventListener("mouseup",e),window.removeEventListener("mousemove",h)})}),x.innerHTML="\n    ".concat(o,'\n    <div \n      style="\n        width: 100px; \n        height: 100px; \n        top: 300px; \n        left: 500px; \n        position: absolute;\n      "\n    >&#x1F649;</div>\n  '),document.body.appendChild(x),x}function f(){var e=document.createElement("pre"),t=document.createElement("pre"),x={};e.style=t.style="\n    position: absolute;\n    margin: 14px;\n  ",window.addEventListener("resize",function(){return F()}),window.addEventListener("scroll",function(){if(F(),void 0!==x.clientX){var e=window,t=e.pageXOffset,r=e.pageYOffset;Object.assign(x,{pageX:x.clientX+t,pageY:x.clientY+r}),n(x.clientX+t,x.clientY+r)}}),window.addEventListener("mousemove",function(e){var t=e.clientX,F=e.clientY,r=e.pageX,o=e.pageY;Object.assign(x,{clientX:t,clientY:F,pageX:r,pageY:o}),n(r,o)});var n=function(t,n){var F=x.clientX,r=x.clientY,o=x.pageX,i=x.pageY;e.style.transform="translate(".concat(t,"px, ").concat(n,"px)"),e.textContent="clientX: ".concat(F,"\nclientY: ").concat(r,"\npageX: ").concat(o,"\npageY: ").concat(i)},F=function(){var e=window,x=e.innerWidth,n=e.innerHeight,F=e.pageXOffset,r=e.pageYOffset;t.style.transform="translate(".concat(F,"px, ").concat(r,"px)"),t.textContent="innerWidth:".concat(x,"\ninnerHeight:").concat(n,"\npageXOffset:").concat(F,"\npageYoffset:").concat(r)};document.body.appendChild(e),document.body.appendChild(t),F()}(c=regeneratorRuntime.mark(function e(){var t,x,n,o,a,c,u,s,d,p,h,g,v,w;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e){return window.addEventListener("DOMContentLoaded",e)});case 2:t=Array.from(document.getElementsByTagName("canvas")),x=i(t,3),n=x[0],o=x[1],a=x[2],u=document.getElementById("size"),s=window.getComputedStyle(u),d=s.width,p=s.height,c={width:parseInt(d),height:parseInt(p)},h=Array.from({length:1}).map(function(){return l(c,function(){return r(a,h)})}),f(),v=(g=c).width,w=g.height,t.forEach(function(e){return e.setAttribute("width",v)||e.setAttribute("height",w)}),F(n,10,"#eeeeee"),F(o,100,"#777777",!0),r(a,h);case 14:case"end":return e.stop()}},e)}),function(){var e=this,t=arguments;return new Promise(function(x,n){var F=c.apply(e,t);function r(e){a(F,x,n,r,o,"next",e)}function o(e){a(F,x,n,r,o,"throw",e)}r(void 0)})})()}});
//# sourceMappingURL=index.c770c.js.map