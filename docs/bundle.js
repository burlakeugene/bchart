!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=5)}([function(t,e,n){var i=n(1);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(i,o);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"*{-webkit-box-sizing:border-box;box-sizing:border-box}body,html{margin:0 0;height:100%;width:100%;overflow:hidden}.container{height:100%}canvas{width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}span{position:absolute;top:0;left:0;font-size:20px;color:#fff}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(l=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),r=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[n].concat(r).concat([o]).join("\n")}var l;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(o=0;o<t.length;o++){var l=t[o];null!=l[0]&&i[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="("+l[2]+") and ("+n+")"),e.push(l))}},e}},function(t,e,n){var i,o,r={},l=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=i.apply(this,arguments)),o}),a=function(t,e){return e?e.querySelector(t):document.querySelector(t)},s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var i=a.call(this,t,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),c=null,f=0,u=[],d=n(4);function h(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=r[i.id];if(o){o.refs++;for(var l=0;l<o.parts.length;l++)o.parts[l](i.parts[l]);for(;l<i.parts.length;l++)o.parts.push(y(i.parts[l],e))}else{var a=[];for(l=0;l<i.parts.length;l++)a.push(y(i.parts[l],e));r[i.id]={id:i.id,refs:1,parts:a}}}}function p(t,e){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],l=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};i[l]?i[l].parts.push(a):n.push(i[l]={id:l,parts:[a]})}return n}function v(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=u[u.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,n);n.insertBefore(e,o)}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function m(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return b(e,t.attrs),v(t,e),e}function b(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function y(t,e){var n,i,o,r;if(e.transform&&t.css){if(!(r="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=r}if(e.singleton){var l=f++;n=c||(c=m(e)),i=k.bind(null,n,l,!1),o=k.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),v(t,e),e}(e),i=P.bind(null,n,e),o=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(e),i=S.bind(null,n),o=function(){g(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=l()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return h(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var l=n[o];(a=r[l.id]).refs--,i.push(a)}t&&h(p(t,e),e);for(o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete r[a.id]}}}};var w,x=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function k(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var r=document.createTextNode(o),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(r,l[e]):t.appendChild(r)}}function S(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function P(t,e,n){var i=n.css,o=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||r)&&(i=d(i)),o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var l=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(l),a&&URL.revokeObjectURL(a)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,r=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(o=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:i+r.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(t,e,n){"use strict";function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(n,!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e);var s=function(t){return((t=new Date(t)).getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":"+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())},c=function t(e,n){for(var i in n)try{n[i].constructor==Object?e[i]=t(e[i],n[i]):e[i]=n[i]}catch(t){e[i]=n[i]}return e},f=function(){function t(e){var n=e.canvas,i=void 0!==n&&n,o=e.data,l=void 0===o?[]:o,a=e.settings,s=void 0===a?{}:a,c=e.offset,f=void 0===c?{left:30,right:50,top:20,bottom:40}:c;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas={element:i,context:i.getContext("2d"),isCanvas:(i instanceof Element||i instanceof HTMLDocument)&&"canvas"===i.tagName.toLowerCase()},this.data=l,this.settings={data:{offset:0,limit:{value:100,min:10}},offset:r({},f),indicator:{enable:!0,styles:{color:"#27ca5d",width:3},animation:{time:1e3,scaleTo:5}},line:{styles:{color:"#ffffff",width:2,lineGradient:{points:[{color:"#954ce9"},{color:"#24c1ed"}],enable:!0},backgroundGradient:{points:[{color:"rgba(149, 76, 233, 0.17)"},{color:"rgba(149, 76, 233, 0)"}],enable:!0}},offset:r({},f)},view:{styles:{background:"#1a1e30"}},target:{enable:!0,coords:{x:0,y:0},styles:{line:{color:"#6f7dab",width:1,horizontal:{enable:!0},vertical:{enable:!0}},panel:{background:"#6f7dab",color:"#fff"},points:[{width:10,background:"transparent",strokeColor:"#6f7dab",strokeWidth:1},{width:4,background:"#24c1ed",strokeColor:"transparent"}]}},grid:{enable:!0,steps:{x:10,y:5},styles:{background:"",color:"#2b2a49",width:1}},timeLine:{enable:!0,resize:!0,mousewheel:{enable:!0,speed:1},count:5,styles:{color:"#6f7dab"}},valuesLine:{enable:!0,resize:{enable:!0,topMin:80,bottomMin:80},count:10,digits:2,styles:{color:"#6f7dab"},overflowValues:!1},timeStamp:+new Date},this.setSettings(s),this.init()}var e,n,o;return e=t,(n=[{key:"setSettings",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.offset&&(t.line={},t.line.offset=t.offset),c(this.settings,t),this.setPointsLimit(!1,!1)}},{key:"getSettings",value:function(){return this.settings}},{key:"setData",value:function(t){this.data=t}},{key:"getData",value:function(){return this.data}},{key:"getLast",value:function(){return this.getPoints("last")}},{key:"newPoint",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.value,n=void 0!==e&&e,i=t.time,o=void 0!==i&&i,r=this.getPoints("all"),l=r.points,a=this.settings,s=a.data,c=l[l.length-1],f=c?c.value:0,u=Math.random()*(Math.random()>.5?-1:1),d=+new Date;o=o||d,n=parseFloat(n)||0===n?n:f+u,s.offset&&s.offset++,l.push({value:n,time:o})}},{key:"init",value:function(){this.listeners(),this.render()}},{key:"resize",value:function(){}},{key:"render",value:function(){this.drawBackground(),this.drawGrid(),this.drawLine(),this.drawValues(),this.drawTime(),this.drawTarget(),this.drawIndicator(),requestAnimationFrame(this.render.bind(this))}},{key:"getPoints",value:function(t){var e=this.settings.data,n=this.data,o=i(this.data);if(console.log(e.limit.value),e.offset){var r=o.length-e.offset,l=r>e.limit.value;l||(e.offset=o.length-e.limit.value),o=o.slice(0,l?r:e.limit.value)}o.length>e.limit.value&&(o=o.slice(o.length-e.limit.value,o.length));for(var a=o.length?o[0].value:0,s=o.length?o[0].value:0,c=e.length?e[0].value:0,f=e.length?e[0].value:0,u=0;u<=n.length-1;u++){var d=n[u].value;d>c&&(c=d),d<f&&(f=d)}for(var h=0;h<=o.length-1;h++){var p=o[h].value;p>a&&(a=p),p<s&&(s=p)}var v={all:{points:n,max:c,min:f},draw:{points:o=this.calcPointsCoords(o,s,a),max:a,min:s},last:n[n.length-1],first:n[0]};return t&&v[t]?v[t]:v}},{key:"calcPointsCoords",value:function(t,e,n){for(var i=this.getLineDrawCoords(),o=i.lineStart,r=(i.lineEnd,i.lineView),l=i.lineTop,a=(i.lineBottom,i.lineHeight),s=o,c=t.length-1,f=c;f>=0;f--){var u=t[f],d=u.value,h=r/c;u.x=s,u.y=l+a-a*(100*(d-e)/(n-e)/100),u.y||(u.y=a/2+l),s-=h}return t}},{key:"getIndicatorCoords",value:function(){var t,e=this.canvas,n=this.settings,i=n.indicator,o=n.line.offset,r=e.element,l=(i.styles,i.animation,this.getPoints()),a=l.draw,s=l.last,c=this.getLineDrawCoords(),f=(c.lineStart,c.lineEnd,c.lineTop),u=c.lineBottom,d=c.lineHeight,h=r.clientWidth-(o.right||0);return s&&((t=f+d-d*(100*(s.value-a.min)/(a.max-a.min)/100))||(t=d/2+f),t>u&&(t=u),t<f&&(t=f)),{x:h,y:t}}},{key:"drawIndicator",value:function(){var t=this.getIndicatorCoords(),e=t.x,n=t.y,i=this.settings,o=this.canvas,r=i.indicator,l=r.styles,a=r.animation,s=r.enable,c=o.context;s&&(c.strokeStyle="transparent",c.save(),(!this.indicatorAnimatedState||this.indicatorAnimatedState>=1)&&(this.indicatorAnimatedState=0),c.globalAlpha=1-this.indicatorAnimatedState,c.beginPath(),c.arc(e,n,l.width*this.indicatorAnimatedState*a.scaleTo,0,2*Math.PI),c.fillStyle=l.color,c.fill(),c.stroke(),this.indicatorAnimatedState+=1/60/(a.time/1e3),c.restore(),c.beginPath(),c.arc(e,n,l.width,0,2*Math.PI),c.fillStyle=l.color,c.fill(),c.stroke())}},{key:"drawBackground",value:function(){var t=this.canvas,e=this.settings.view,n=t.context,i=t.element,o=e.styles.background,r=window.devicePixelRatio||1;i.width=i.clientWidth*r,i.height=i.clientHeight*r,n.scale(r,r),n.fillStyle=o,n.fillRect(0,0,i.width,i.height)}},{key:"getLineDrawCoords",value:function(){var t=this.canvas,e=this.settings,n=e.line,i=(e.grid,n.offset),o=t.element,r=o.clientWidth-i.right,l=i.left,a=r-l,s=i.top+n.styles.width,c=o.clientHeight-i.bottom-n.styles.width;return{lineStart:r,lineEnd:l,lineView:a,lineTop:s,lineBottom:c,lineHeight:c-s}}},{key:"findPointByX",value:function(t){for(var e=i(this.getPoints("draw").points),n=!1,o=0;o<=e.length-1;o++){var r=e[o],l=e[o+1],a=Math.round(r.x),s=l?Math.round(l.x):0;(s||0===s)&&t>=a&&t<=s&&(n=(s+a)/2<=t?l:r)}return n}},{key:"drawTime",value:function(){var t=this.getLineDrawCoords(),e=t.lineStart,n=t.lineEnd,i=(t.lineView,t.lineTop,t.lineBottom,t.lineHeight,this.canvas),o=this.settings,r=o.timeLine,l=o.timeStamp,a=o.offset,c=r.enable,f=r.count,u=r.styles,d=i.element,h=i.context;if(c){var p=n,v=(e-p)/f;v+=v/(f-1);for(var g=0;g<f;g++){var m=p+v*g,b=this.findPointByX(m);h.font="100 12px arial",h.fillStyle=u.color,h.textAlign="center",h.textBaseline="middle",h.fillText(s(b&&b.time?b.time:l),m||0,d.clientHeight-a.bottom/2)}}}},{key:"drawValues",value:function(){var t=this.getPoints("draw"),e=t.max,n=t.min,i=this.getLineDrawCoords(),o=(i.lineStart,i.lineEnd,i.lineView,i.lineTop),r=i.lineBottom,l=i.lineHeight,a=this.canvas,s=this.settings,c=s.valuesLine,f=s.line,u=s.offset,d=s.view,h=c.count,p=c.enable,v=c.digits,g=c.styles,m=c.overflowValues,b=a.element,y=a.context,w=[];if(p){var x=l/(h-1),k=o+x,S=(b.clientHeight+f.offset.top-f.offset.bottom)/2;if(n===e){w.push({text:e,y:S});for(var P=(S-f.offset.top)/x,T=(S-f.offset.top)/x,L=1;L<=P;L++)w.push({text:e+e*L,y:S-x*L});for(var E=1;E<=T;E++)w.push({text:e-e*E,y:S+x*E})}else{w.push({text:e,y:o});for(var O=(e-n)/(h-1),j=1;j<=h-2;j++)w.push({text:e-O*j,y:k}),k+=x;w.push({text:n,y:r})}if(m&&(f.offset.top>u.top||f.offset.bottom<u.bottom)){var C=(e-n)/(h-1),M=Math.max.apply(null,w.map((function(t){return t.text}))),A=Math.min.apply(null,w.map((function(t){return t.y}))),R=Math.min.apply(null,w.map((function(t){return t.text}))),H=Math.max.apply(null,w.map((function(t){return t.y}))),D=Math.round((f.offset.top-u.top)/x),B=Math.round((f.offset.bottom-u.bottom)/x);e===n&&(C=e);for(var X=1;X<=D;X++)w.push({text:M+C*X,y:A-x*X});for(var U=1;U<=B;U++)w.push({text:R-C*U,y:H+x*U})}for(var W=0;W<=w.length-1;W++){var I=w[W];y.font="100 12px arial",y.fillStyle=g.color,y.textAlign="center",y.textBaseline="middle",y.fillText(I.text.toFixed(v),b.clientWidth-u.right/2,I.y)}m&&(y.fillStyle=d.styles.background,y.strokeStyle="transparent",y.beginPath(),y.rect(0,0,b.clientWidth,u.top-5),y.fill(),y.stroke(),y.fillStyle=d.styles.background,y.strokeStyle="transparent",y.beginPath(),y.rect(0,b.clientHeight-u.bottom+5,b.clientWidth,b.clientHeight),y.fill(),y.stroke())}}},{key:"drawLine",value:function(){var t=this.canvas,e=this.settings,n=e.line,i=e.grid,o=e.offset,r=e.view,l=n.styles,a=l.backgroundGradient,s=l.lineGradient,c=l.color,f=l.width,u=t.context,d=t.element,h=this.getLineDrawCoords(),p=h.lineStart,v=h.lineEnd,g=h.lineTop,m=h.lineBottom,b=this.getPoints("draw"),y=b.points;if(b.min,b.max,u.beginPath(),u.lineWidth=f,u.strokeStyle=c,u.lineJoin="round",s.enable){var w=u.createLinearGradient(v,0,p,0),x=s.points||[];1===x.length&&x.push(x[0]),x.forEach((function(t,e){var n=t.stop,i=t.color;n||0===n||(n=1/(x.length-1)*e),w.addColorStop(n,i)})),u.strokeStyle=w}for(var k=y.length-1;k>=0;k--){var S=y[k];u.lineTo(S.x,S.y)}if(u.stroke(),a.enable&&y.length>1){u.beginPath(),u.lineWidth=0,u.strokeStyle="transparent";var P=u.createLinearGradient(0,g,0,m),T=a.points||[];1===T.length&&T.push(y[0]),T.forEach((function(t,e){var n=t.stop,i=t.color;n||0===n||(n=1/(T.length-1)*e),P.addColorStop(n,i)})),u.fillStyle=P,u.lineTo(p,m);for(var L=y.length-1;L>=0;L--){var E=y[L];u.lineTo(E.x,E.y)}u.lineTo(v,m),u.fill(),u.stroke()}i.enable&&(u.beginPath(),u.lineJoin="miter",u.lineWidth=f,u.strokeStyle=r.styles.background,u.lineTo(0+o.left-f/2,0+o.top-f/2),u.lineTo(0+o.left-f/2,d.clientHeight-o.bottom+f/2),u.lineTo(d.clientWidth-o.right+f/2,d.clientHeight-o.bottom+f/2),u.lineTo(d.clientWidth-o.right+f/2,0+o.top-f/2),u.closePath(),u.stroke(),u.beginPath(),u.lineJoin="miter",u.lineWidth=i.styles.width,u.strokeStyle=i.styles.color,u.lineTo(0+o.left,0+o.top),u.lineTo(0+o.left,d.clientHeight-o.bottom),u.lineTo(d.clientWidth-o.right,d.clientHeight-o.bottom),u.lineTo(d.clientWidth-o.right,0+o.top),u.closePath(),u.stroke())}},{key:"drawTarget",value:function(){var t=this.canvas,e=this.settings,n=e.target,i=e.offset,o=e.valuesLine,r=e.timeStamp,l=n.styles,a=n.coords,c=a.x,f=a.y,u=t.element,d=t.context;if(n.enable&&c&&f){var h=this.findPointByX(c),p=0;if(h){l.points.forEach((function(t){d.beginPath(),d.strokeStyle=t.strokeColor,d.lineWidth=t.strokeWidth,d.fillStyle=t.background,d.arc(h.x,h.y,t.width,0,2*Math.PI),d.fill(),d.stroke(),t.width&&t.width>p&&(p=t.width)})),d.lineWidth=l.line.width,d.strokeStyle=l.line.color;var v=!l.line.horizontal||l.line.horizontal.enable,g=!l.line.vertical||l.line.vertical.enable;v&&(d.beginPath(),d.moveTo(0+i.left,h.y),d.lineTo(h.x-p,h.y),d.stroke(),d.beginPath(),d.moveTo(h.x+p,h.y),d.lineTo(u.clientWidth-i.right,h.y),d.stroke()),g&&(d.beginPath(),d.moveTo(h.x,0+i.top),d.lineTo(h.x,h.y-p),d.stroke(),d.beginPath(),d.moveTo(h.x,h.y+p),d.lineTo(h.x,u.clientHeight-i.bottom),d.stroke());var m={};v&&(m.right={background:l.panel.background,color:l.panel.color,width:i.right,height:20,x:u.clientWidth-i.right,y:h.y-10,text:h.value.toFixed(o.digits||2)}),g&&(m.bottom={background:l.panel.background,color:l.panel.color,width:80,height:i.bottom,x:h.x-40,y:u.clientHeight-i.bottom,text:s(h&&h.time?h.time:r)}),Object.values(m).forEach((function(t){d.strokeStyle=d.fillStyle=t.background,d.beginPath(),d.rect(t.x,t.y,t.width,t.height),d.fill(),d.stroke(),d.font="100 12px arial",d.fillStyle=t.color,d.textAlign=t.textAlign,d.textBaseline="middle",d.fillText(t.text,t.x+t.width/2,t.y+t.height/2)}))}}}},{key:"drawGrid",value:function(){var t=this.canvas,e=this.settings,n=e.grid,i=e.offset,o=t.element,r=t.context,l=n.enable,a=n.steps,s=n.styles,c=n.type;if(l){var f=0+i.left,u=o.clientWidth-i.right-i.left,d=0+i.top,h=o.clientHeight-i.bottom-i.top;r.lineWidth=s.width,r.strokeStyle=s.color,r.fillStyle=s.background,r.rect(f,d,u,h),r.fill();var p=[],v=[],g="px"===c,m=(o.clientWidth-i.right-i.left)/a.x,b=0+i.left,y=(o.clientHeight-i.top-i.bottom)/a.y,w=0+i.top;if(g){for(var x=1;x<m;x++){var k=b+x*a.x;p.push(k)}for(var S=1;S<y;S++){var P=w+S*a.y;v.push(P)}}else{for(var T=1;T<a.x;T++){var L=b+T*m;p.push(L)}for(var E=1;E<a.y;E++){var O=w+E*y;v.push(O)}}for(var j=0;j<=p.length-1;j++)r.beginPath(),r.lineTo(p[j],0+i.top),r.lineTo(p[j],o.clientHeight-i.bottom),r.stroke();for(var C=0;C<=v.length-1;C++)r.beginPath(),r.lineTo(0+i.left,v[C]),r.lineTo(o.clientWidth-i.right,v[C]),r.stroke()}}},{key:"setPointsLimit",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.settings,i=n.data,o=this.getPoints("all"),r=o.points;t||(t=i.limit.value),i.limit.value=i.limit.min&&t<i.limit.min?i.limit.min:i.limit.max&&t>i.limit.max?i.limit.max:e&&r.length<t?r.length:t<=2?2:t}},{key:"listeners",value:function(){var t=this,e=this.canvas,n=this.settings,i=n.target,o=e.element,r=!1,l=0,a=0,s=function(){i.coords={x:!1,y:!1}},c=function(e){r=!1,l=0,a=0,delete t.prevPinchDistance},f="ontouchstart"in document.documentElement;document.addEventListener("gesturestart",(function(t){t.preventDefault()})),window.addEventListener("resize",(function(e){var n=t.settings,i=n.line,r=n.offset,l=n.valuesLine,a=o.getBoundingClientRect(),s=(a.height+r.top-r.bottom)/2-(l.resize.topMin||0),c=(a.height+r.bottom-r.top)/2-(l.resize.bottomMin||0);i.offset.top>s&&(i.offset.top=s),i.offset.top<r.top&&(i.offset.top=r.top),i.offset.bottom>c&&(i.offset.bottom=c),i.offset.bottom<r.bottom&&(i.offset.bottom=r.bottom),t.resize()})),f?(o.addEventListener("touchend",(function(){c(),s()})),o.addEventListener("touchstart",(function(t){var e=t.touches,n=o.getBoundingClientRect(),s=e[0];1===e.length&&(i.coords={x:s.clientX-n.left,y:s.clientY-n.top}),l=s.clientX,a=s.clientY,r={x:l,y:a}})),o.addEventListener("touchmove",(function(e){var n=t.settings,c=(n.valuesLine,n.timeLine,n.data),f=n.line,u=n.offset,d=t.getPoints("all").points,h=o.getBoundingClientRect(),p=e.touches,v=p[0];if(s(),1===p.length&&(v.clientX>=h.left+u.left+1&&v.clientX<=h.left+h.width-u.right&&v.clientY>=h.top+u.top&&v.clientY<=h.bottom-u.bottom&&(i.coords={x:v.clientX-h.left,y:v.clientY-h.top}),v.clientX>=h.left+f.offset.left&&v.clientX<=h.left+h.width-f.offset.right&&v.clientY>=h.top+u.top&&v.clientY<=h.bottom-u.bottom&&r)){var g=c.offset+v.clientX-l;g<0&&(g=0),g>d.length-c.limit.value&&(g=d.length-c.limit.value),c.offset=g}if(2===p.length){var m=p[0],b=p[1],y=Math.hypot(m.clientX-b.clientX,m.clientY-b.clientY);if(!t.prevPinchDistance)return void(t.prevPinchDistance=y);var w=t.prevPinchDistance-y;t.prevPinchDistance=y;var x=c.limit.value+w;t.setPointsLimit(x)}r&&(l=v.clientX,a=v.clientY)}))):(o.addEventListener("mouseup",(function(){c()})),o.addEventListener("mouseleave",(function(){c(),s()})),o.addEventListener("mousedown",(function(t){l=t.clientX,a=t.clientY,r={x:l,y:a}})),o.addEventListener("mousewheel",(function(e){var i=e.deltaY,o=n.data,r=n.timeLine.mousewheel,l=o.limit.value+i;if(!r.enable)return!1;r&&r.speed&&(l=o.limit.value+(i>0?r.speed:-1*r.speed)),t.setPointsLimit(l)})),o.addEventListener("mousemove",(function(e){var n=t.settings,c=n.valuesLine,f=n.timeLine,u=n.data,d=n.line,h=n.offset,p=t.getPoints("all").points,v=o.getBoundingClientRect();if(s(),o.style.cursor="default",e.clientX>=v.left+h.left+1&&e.clientX<=v.left+v.width-h.right&&e.clientY>=v.top+h.top&&e.clientY<=v.bottom-h.bottom&&(i.enable&&(o.style.cursor="crosshair"),i.coords={x:e.clientX-v.left,y:e.clientY-v.top}),e.clientX>=v.left+d.offset.left&&e.clientX<=v.left+v.width-d.offset.right&&e.clientY>=v.top+h.top&&e.clientY<=v.bottom-h.bottom&&r){var g=u.offset+e.clientX-l;g<0&&(g=0),g>p.length-u.limit.value&&(g=p.length-u.limit.value),u.offset=g}if(c.enable&&c.resize.enable&&e.clientX>=v.left+v.width-h.right){if(o.style.cursor="row-resize",r){var m=a-e.clientY,b=e.clientY-a,y=e.clientY>a,w=e.clientY<a;if(y){var x=(v.height+h.top-h.bottom)/2-(c.resize.topMin||0),k=(v.height+h.bottom-h.top)/2-(c.resize.bottomMin||0);d.offset.top=d.offset.top-m<x?d.offset.top-m:x,d.offset.bottom=d.offset.bottom+b<k?d.offset.bottom+b:k}w&&(d.offset.top=d.offset.top-m>h.top?d.offset.top-m:h.top,d.offset.bottom=d.offset.bottom+b>h.bottom?d.offset.bottom+b:h.bottom)}d.offset.top<h.top&&(d.offset.top=h.top),d.offset.bottom<h.bottom&&(d.offset.bottom=h.bottom)}if(f.enable&&f.resize&&e.clientX>=v.left+d.offset.left&&e.clientX<=v.left+v.width-d.offset.right&&e.clientY>=v.bottom-h.bottom&&(o.style.cursor="col-resize",r)){var S=u.limit.value+e.clientX-l;t.setPointsLimit(S)}r&&(l=e.clientX,a=e.clientY)})))}}])&&a(e.prototype,n),o&&a(e,o),t}();n(0);const u=function(t,e){return new Promise((function(n,i){e||i("Empty request"),e.start&&e.start();let o=new XMLHttpRequest,r=e.url?e.url:"",l=!e.async||e.async,a=e.data,s=!!e.clearData,c=!!e.responseHeaders,f=0;if("GET"===t)for(let t in a)r+=f?"&"+t+"="+a[t]:"?"+t+"="+a[t],f++;if(o.open(t,r,l),e.headers)for(let t in e.headers)o.setRequestHeader(t,e.headers[t]);o.send(JSON.stringify(a)),o.onreadystatechange=function(){if(c&&this.readyState==this.HEADERS_RECEIVED){c=o.getAllResponseHeaders().trim().split(/[\r\n]+/);let t={};c.forEach((function(e){let n=e.split(": "),i=n.shift(),o=n.join(": ");t[i]=o})),c=t}if(4==o.readyState)if(o.status<200||o.status>300){e.end&&e.end();let t=s?JSON.parse(o.response):o;i(t)}else{e.end&&e.end();let t=s?JSON.parse(o.response):o;c&&(t.headers=c),n(t)}}}))};const d=function(){this.getParams=()=>{let t=window.location.search;return t?(/^[?#]/.test(t)?t.slice(1):t).split("&").reduce((t,e)=>{let[n,i]=e.split("=");return t[n]=i?decodeURIComponent(i.replace(/\+/g," ")):"",t},{}):{}},this.getParam=t=>this.getParams()[t]||null,this.getParamSingle=function(t){return(t=new RegExp("[?&]"+encodeURIComponent(t)+"=([^&]*)").exec(location.search))?decodeURIComponent(t[1]):null},this.updateQueryString=(t,e,n=!1)=>{n||(n=window.location.href);var i,o=new RegExp("([?&])"+t+"=.*?(&|#|$)(.*)","gi");if(o.test(n))return null!=e?n.replace(o,"$1"+t+"="+e+"$2$3"):(i=n.split("#"),n=i[0].replace(o,"$1$3").replace(/(&|\?)$/,""),void 0!==i[1]&&null!==i[1]&&(n+="#"+i[1]),n);if(null!=e){var r=-1!==n.indexOf("?")?"&":"?";return i=n.split("#"),n=i[0]+r+t+"="+e,void 0!==i[1]&&null!==i[1]&&(n+="#"+i[1]),n}return n},this.setParam=(t,e)=>{let n=this.updateQueryString(t,e);window.history.pushState({path:n},"",n)}};var h=new function(){this.post=function(t){return u("POST",t)},this.get=function(t){return u("GET",t)},this.put=function(t){return u("PUT",t)},this.delete=function(t){return u("DELETE",t)}},p=new d;window.addEventListener("load",(function(){document.querySelectorAll("canvas").forEach((function(t){var e=new f({canvas:t}),n=p.getParam("symbol");setInterval((function(){n?h.get({url:"https://quotes.instaforex.com/api/quotesTick",clearData:!0,data:{q:n}}).then((function(t){t&&t[0]&&e.newPoint({value:(t[0].ask+t[0].bid)/2})})):e.newPoint()}),100)}))}))}])}));