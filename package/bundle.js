module.exports=function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="./",o(o.s=1)}([function(t,e){Date.prototype.formatting=function(t){var e=this.getFullYear().toString();t=t.replace(/yyyy/g,e);var o=(this.getMonth()+1).toString();t=t.replace(/mm/g,o[1]?o:"0"+o[0]);var r=this.getDate().toString();t=t.replace(/dd/g,r[1]?r:"0"+r[0]);var n=this.getHours().toString();t=t.replace(/hh/g,n[1]?n:"0"+n[0]);var i=this.getMinutes().toString();t=t.replace(/ii/g,i[1]?i:"0"+i[0]);var a=this.getSeconds().toString();return t=t.replace(/ss/g,a[1]?a:"0"+a[0])},CanvasRenderingContext2D.prototype.roundRect=function(t,e,o,r,n){return o<2*n&&(n=o/2),r<2*n&&(n=r/2),this.beginPath(),this.moveTo(t+n,e),this.arcTo(t+o,e,t+o,e+r,n),this.arcTo(t+o,e+r,t,e+r,n),this.arcTo(t,e+r,t,e,n),this.arcTo(t,e,t+o,e,n),this.closePath(),this}},function(t,e,o){"use strict";o.r(e);o(0);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n=function t(e,o){for(var r in o)try{o[r].constructor==Object?e[r]=t(e[r],o[r]):e[r]=o[r]}catch(t){e[r]=o[r]}return e},i=function t(e){if("object"!=r(e))return e;if(!e)return e;var o=e instanceof Array?[]:{};for(var n in e)e.hasOwnProperty(n)&&(o[n]=t(e[n]));return o},a=function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t},l=function(t,e,o,r){return{x:t+Math.cos(r)*o,y:e+Math.sin(r)*o}},s=function(t,e){return"#"+t.replace(/^#/,"").replace(/../g,(function(t){return("0"+Math.min(255,Math.max(0,parseInt(t,16)+e)).toString(16)).substr(-2)}))},f=function(t){return"[object Function]"==={}.toString.call(t)},c={animated:!0,offset:{top:20,right:20,bottom:40,left:60},grid:{enable:!0,offset:{top:20,right:20,bottom:20,left:20},styles:{background:"",borderColor:"#2b2a49",borderRadius:5,borderWidth:2},horizontal:{step:4,enable:!0},vertical:{step:10,enable:!0}},labels:{enable:!0,styles:{color:"#fff",fontSize:12}},values:{enable:!0,digits:2,styles:{color:"#fff",fontSize:12}},data:{enable:!0,offset:0,digits:2,line:{offset:{left:0,top:0,right:0,bottom:0},dots:{enable:!0},styles:{lineWidth:2}},bar:{offset:10}}},u={view:{styles:{background:"#1a1e30"}},tooltip:{enable:!0,styles:{color:"#ffffff",background:"#403f4c",borderColor:"#fff",borderWidth:0,borderRadius:3,fontSize:12,padding:{top:10,right:10,bottom:10,left:10}}}};function h(t){return function(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var o=e.canvas,r=void 0!==o&&o,a=e.data,l=void 0===a?{}:a,s=e.defaultSettings,f=void 0===s?{}:s,c=e.settings,h=void 0===c?{}:c,d=e.actions,p=void 0===d?{}:d,y=e.type;this.type=y,this.actions=p,this.canvas={element:r,context:r.getContext("2d"),isCanvas:(r instanceof Element||r instanceof HTMLDocument)&&"canvas"===r.tagName.toLowerCase()},this.cursor={x:0,y:0},this.settings=n(i(u),i(f)),this.timeStamp=+new Date,this.setSettings(h),this.state={loading:this.settings.animated?0:1},this.data=this.prepareData(l),this.commonInit()}var e,o,r;return e=t,(o=[{key:"prepareData",value:function(t){return t}},{key:"setSettings",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(this.settings,t),this.render({from:"setSettings"})}},{key:"getSettings",value:function(){return this.settings}},{key:"setData",value:function(t){this.data=this.prepareData(t),this.render({from:"setData"})}},{key:"getData",value:function(){return this.data}},{key:"setRatio",value:function(){var t=this.canvas,e=t.context,o=t.element,r=window.devicePixelRatio||1;o.width=o.clientWidth*r,o.height=o.clientHeight*r,e.scale(r,r)}},{key:"clearCanvas",value:function(){var t=this.canvas,e=t.context;t.element,e.clearRect(0,0,t.width,t.height)}},{key:"loading",value:function(){var t=this;this.state.loading>=1||setTimeout((function(){t.state.loading+=.03,t.state.loading=t.state.loading>1?1:t.state.loading,t.render({from:"loading"}),t.loading()}),1e3/60)}},{key:"commonInit",value:function(){this.render({from:"commonInit"}),this.loading(),this.commonListeners()}},{key:"commonListeners",value:function(){var t=this,e=this.canvas,o=(e.context,e.element);window.addEventListener("resize",(function(){t.render({from:"resize"})})),o.addEventListener("mousemove",(function(e){t.settings;var r=o.getBoundingClientRect(),n=e.clientX-r.left,i=e.clientY-r.top;t.cursor={x:n,y:i},t.render({from:"mousemove"})})),o.addEventListener("mouseout",(function(e){t.cursor={x:0,y:0},t.render({from:"mouseout"})}))}},{key:"drawTooltip",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.title,o=void 0===e?"":e,r=t.panels,n=void 0===r?[]:r,i=t.x,a=t.y,l=t.render,c=this.canvas,u=this.settings,d=(this.data,this.cursor),p=c.element,y=c.context,g=u.tooltip,b=g.styles;if(i||(i=d.x),a||(a=d.y),g&&g.enable){y.font="100 "+b.fontSize+"px arial",y.textAlign="left",y.textBaseline="middle";var v=function(){var t;o&&o.text&&(o.width=y.measureText(o.text).width+b.padding.left+b.padding.right+b.borderWidth,o.height=2*b.padding.top+1.286*b.fontSize+b.borderWidth/2,o.x=b.padding.left+b.borderWidth/2,o.y=o.height/2+b.borderWidth/2),n.length&&n.forEach((function(t,e){if(t.width=0,t.height=0,t.x=function(){for(var t=0,o=e-1;o>=0;o--)t+=n[o].width;return t}(),t.y=o.height,t.colorPanel&&t.colorPanel.color&&(t.colorPanel.height=3,t.colorPanel.x=b.borderWidth/2,t.colorPanel.y=0,t.height+=t.colorPanel.height),t.texts&&t.texts.forEach((function(e,o){if(e.text){var r=y.measureText(e.text).width+b.borderWidth;t.width<r&&(t.width=r),e.height=1.286*b.fontSize,e.x=b.padding.left+b.borderWidth/2,e.y=t.height+e.height/2,o||(e.height+=b.padding.top,e.y+=b.padding.top),o===t.texts.length-1&&(e.height+=b.padding.bottom),t.height+=e.height}})),t.footer&&t.footer.text){var r=y.measureText(t.footer.text).width+b.borderWidth;t.width<r&&(t.width=r),t.footer.height=b.padding.bottom+1.286*b.fontSize,t.footer.x=b.padding.left+b.borderWidth/2,t.footer.y=t.height+t.footer.height/2-b.padding.bottom/2,t.height+=t.footer.height+b.borderWidth/2}t.width+=b.padding.left+b.padding.right}));var e=n.reduce((function(t,e){return t+e.width}),0);if(o.width>e){for(var r=o.width/n.length,i=0,a=0,l=0;l<=n.length-1;l++)n[l].width>=r?a+=n[l].width-r:i++;for(var s=function(t){n[t].width=n[t].width<r?r-a/i:n[t].width,n[t].x=function(){for(var e=0,o=t-1;o>=0;o--)e+=n[o].width;return e}()},f=0;f<=n.length-1;f++)s(f)}return t=o.height+(n.length?Math.max.apply(Math,h(n.map((function(t){return t.height})))):0),{width:Math.max(o.width,e),height:t}}(),m=v.width,w=v.height,x=i,P=10,S=i-m/2,O=!1,T=a-w-P;T<b.borderWidth&&(O=!0,T=a+P),S+m>p.clientWidth-b.borderWidth/2&&(S=p.clientWidth-m-b.borderWidth/2),S<b.borderWidth/2&&(S=b.borderWidth/2),y.fillStyle=b.background,y.strokeStyle=b.borderWidth>0?b.borderColor:"transparent",y.lineWidth=b.borderWidth,y.beginPath(),y.roundRect(S,T,m,w,b.borderRadius),y.closePath(),y.fill(),y.stroke(),O?(y.beginPath(),y.moveTo(x-5,T),y.lineTo(x,T-5),y.lineTo(x+5,T),y.fill(),y.stroke(),y.beginPath(),y.moveTo(x-5+b.borderWidth/4,T+b.borderWidth/2),y.lineTo(x,T-5+b.borderWidth/1.5),y.lineTo(x+5-b.borderWidth/4,T+b.borderWidth/2),y.fill()):(y.beginPath(),y.moveTo(x-5,T+w),y.lineTo(x,T+w+5),y.lineTo(x+5,T+w),y.fill(),y.stroke(),y.beginPath(),y.moveTo(x-5+b.borderWidth/4,T+w-b.borderWidth/2),y.lineTo(x,T+w+5-b.borderWidth/1.5),y.lineTo(x+5-b.borderWidth/4,T+w-b.borderWidth/2),y.fill()),y.fillStyle=b.color,o&&o.text&&y.fillText(o.text,S+o.x,T+o.y),n.forEach((function(t){y.fillStyle=b.color,t.colorPanel&&t.colorPanel.color&&(y.save(),y.fillStyle=t.colorPanel.color,y.beginPath(),y.rect(S+t.x+t.colorPanel.x,T+t.y+t.colorPanel.y,t.width-b.borderWidth,t.colorPanel.height),y.fill(),y.restore()),t.texts&&t.texts.forEach((function(e,o){e.text&&y.fillText(e.text,S+t.x+e.x,T+t.y+e.y)})),t.footer&&t.footer.text&&(y.fillStyle=s(b.color,-50),y.fillText(t.footer.text,S+t.x+t.footer.x,T+t.y+t.footer.y))})),l&&f(l)&&l({context:y,styles:b,box:{width:m,height:w,top:T,left:S,bottom:T+w,right:S+m}})}}},{key:"drawBackground",value:function(){var t=this.canvas,e=this.settings.view,o=t.context,r=t.element,n=e.styles.background;o.fillStyle=n,o.fillRect(0,0,r.width,r.height)}},{key:"baseRender",value:function(){this.setRatio(),this.clearCanvas(),this.drawBackground()}}])&&d(e.prototype,o),r&&d(e,r),t}();function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function b(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?g(o,!0).forEach((function(e){v(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):g(o).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function v(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function m(t){return function(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function w(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function x(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function P(t,e,o){return(P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,o){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var n=Object.getOwnPropertyDescriptor(r,e);return n.get?n.get.call(o):n.value}})(t,e,o||t)}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var T=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t.defaultSettings=c,x(this,S(e).call(this,t))}var o,r,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(e,t),o=e,(r=[{key:"prepareData",value:function(t){var e=Math.max.apply(Math,m(t.datasets.map((function(t){return(t.values||[]).length}))).concat([t.labels.length]));[t.labels].concat(m(t.datasets.map((function(t){return t.values})))).map((function(t,o){if(t.length<e)for(var r=e-t.length-1,n=0;n<=r;n++)t.push(o?0:"")})),t.datasets.forEach((function(t){t.color||(t.color=a()),t.values.forEach((function(e,o){t.values[o]={value:e}}))}));var o=t.datasets.filter((function(t){return"bar"===t.type}));if(o.forEach((function(t,e){t.count=o.length,t.index=e+1})),o.length){this.settings.data.initialValue=0;var r=this.getDrawRect("bar"),n=(r.left,r.width/e);this.settings.data.line.offset.left=n/2,this.settings.data.line.offset.right=n/2}return t}},{key:"getInterpolation",value:function(t,e){var o=this.canvas,r=this.settings,n=r.data,i=r.offset,a=r.grid,l=o.element,s=(o.context,n.line.styles.lineWidth,Math.max.apply(Math,m(e))),f=Math.min.apply(Math,m(e)),c=i.top+a.offset.top+a.styles.borderWidth,u=100*(t*this.state.loading-f*(f>0?this.state.loading:1))/(s-f)/100,h=l.clientHeight-i.top-a.offset.top-i.bottom-a.offset.bottom-2*a.styles.borderWidth;return c+h-h*u}},{key:"drawGrid",value:function(){var t=this.canvas,e=this.settings,o=e.grid,r=e.offset,n=t.element,i=t.context,a=o.enable,l=o.horizontal,s=o.vertical,f=o.styles;if(a){i.save();var c=0+r.left,u=n.clientWidth-r.right-r.left,h=0+r.top,d=n.clientHeight-r.bottom-r.top;if(i.lineWidth=f.borderWidth,i.strokeStyle=f.borderColor,i.fillStyle=f.background,f.dash&&i.setLineDash(f.dash),i.beginPath(),i.roundRect(c,h,u,d,f.borderRadius),i.fill(),i.closePath(),i.stroke(),i.restore(),l&&l.enable){i.save();var p=[],y=(n.clientHeight-r.top-r.bottom)/(l.step+1),g=(n.clientHeight-r.top-r.bottom)/l.step,v=r.top,m=b({},f,{},l.styles||{});if("px"===(l.type||o.type))for(var w=1;w<g;w++){var x=v+w*l.step;p.push(x)}else for(var P=1;P<l.step+1;P++){var S=v+P*y;p.push(S)}i.lineWidth=m.borderWidth,i.strokeStyle=m.borderColor,m.dash&&i.setLineDash(m.dash);for(var O=0;O<=p.length-1;O++)i.beginPath(),i.lineTo(0+r.left,p[O]),i.lineTo(n.clientWidth-r.right,p[O]),i.stroke();i.restore()}if(s&&s.enable){i.save();var T=[],k=(n.clientWidth-r.right-r.left)/(s.step+1),W=(n.clientWidth-r.right-r.left)/s.step,j=r.left,E=b({},f,{},s.styles||{});if("px"===(s.type||o.type))for(var _=1;_<W;_++){var D=j+_*s.step;T.push(D)}else for(var R=1;R<s.step+1;R++){var A=j+R*k;T.push(A)}i.lineWidth=E.borderWidth,i.strokeStyle=E.borderColor,E.dash&&i.setLineDash(E.dash);for(var M=0;M<=T.length-1;M++)i.beginPath(),i.lineTo(T[M],0+r.top),i.lineTo(T[M],n.clientHeight-r.bottom),i.stroke();i.restore()}i.restore()}}},{key:"drawLabels",value:function(){var t=this.canvas,e=this.settings,o=this.data,r=e.labels,n=e.offset,i=(e.grid,t.element),a=t.context,l=r.enable,s=r.styles;if(l){var f=this.getDrawRect("line"),c=f.left,u=f.width/(o.labels.length-1),h=i.clientHeight-n.bottom/2;o.labels.forEach((function(t,e){var o=c+u*e;a.font="100 "+s.fontSize+"px arial",a.fillStyle=s.color,a.textAlign="center",a.textBaseline="middle",a.fillText(t,o,h)}))}}},{key:"getDatasets",value:function(){return this.data.datasets}},{key:"getAllValues",value:function(){var t=this.settings.data,e=[];return(t.initialValue||0===t.initialValue)&&e.push(t.initialValue),this.getDatasets().reduce((function(t,e){return[].concat(m(t),m(e.values.map((function(t){return t.value}))))}),e)}},{key:"drawValues",value:function(){var t=this.canvas,e=this.settings,o=e.values,r=e.offset,n=(e.grid,t.element,t.context),i=o.enable,a=o.styles,l=o.digits;if(i){var s=r.left/2,f=this.getAllValues(),c=Math.max.apply(Math,m(f)),u=Math.min.apply(Math,m(f));n.font="100 "+a.fontSize+"px arial",n.fillStyle=a.color,n.textAlign="center",n.textBaseline="middle";for(var h=[],d=(c-u)/9,p=0;p<=9;p++){var y=c-d*p;h.push({value:0===p?c:9===p?u:y,x:s,y:this.getInterpolation(y,f)})}h.forEach((function(t){n.fillText(t.value.toFixed(l),t.x,t.y)}))}}},{key:"drawData",value:function(){var t=this,e=this.settings.data.enable,o=this.getDatasets();e&&(o.filter((function(t){return"bar"===t.type})).forEach((function(e){var o=e.type;o=o.toUpperCase(),t["draw"+o]&&t["draw"+o](e)})),o.filter((function(t){return"line"===t.type})).forEach((function(e){var o=e.type;o=o.toUpperCase(),t["draw"+o]&&t["draw"+o](e)})))}},{key:"getDrawRect",value:function(t){var e=this.canvas,o=this.settings,r=o.offset,n=o.grid,i=o.data,a=e.element,l=(e.context,{top:r.top+n.styles.borderWidth,left:r.left+n.styles.borderWidth,right:r.right-n.styles.borderWidth,bottom:r.bottom-n.styles.borderWidth,width:a.clientWidth-r.left-r.right-2*n.styles.borderWidth,height:a.clientHeight-r.top-r.bottom-2*n.styles.borderWidth}),s={top:l.top+n.offset.top,left:l.left+n.offset.left,right:l.right+n.offset.right,bottom:l.bottom-n.offset.bottom,width:l.width-n.offset.left-n.offset.right,height:l.height-n.offset.top-n.offset.bottom},f={view:l,grid:s,bar:s,line:b({},s,{left:s.left+i.line.offset.left,right:s.right+i.line.offset.right,width:s.width-i.line.offset.left-i.line.offset.right})};return t&&f[t]?f[t]:f}},{key:"drawLINE",value:function(t,e){var o,r=this,n=this.canvas,i=this.settings,a=i.data,l=(i.offset,i.grid,n.element,n.context),f=a.line,c=f.styles.lineWidth,u=t.values,h=(t.color,this.getDrawRect("line")),d=h.left,p=h.width/(u.length-1);l.strokeStyle=t.color,l.lineWidth=c,l.lineJoin="round",l.beginPath(),u.forEach((function(t,e){var o=d+p*e,n=r.getInterpolation(t.value,r.getAllValues());t.hoverArea={xStart:o-p/2,yStart:h.top,xEnd:o+p/2,yEnd:h.top+h.height},t.isHovered=r.checkIsHovered(t.hoverArea),e?l.lineTo(o,n):l.moveTo(o,n)})),l.stroke(),(null==f?void 0:null===(o=f.dots)||void 0===o?void 0:o.enable)&&(l.fillStyle=t.color,l.strokeStyle=s(t.color,-50),u.forEach((function(t,e){l.beginPath();var o=d+p*e,n=r.getInterpolation(t.value,r.getAllValues());l.arc(o,n,5,0,2*Math.PI),l.fill(),l.closePath(),l.stroke()})))}},{key:"drawBAR",value:function(t,e){var o=this,r=this.canvas,n=this.settings,i=(this.cursor,n.data),a=(r.element,r.context),l=i.bar,s=t.values,f=(t.color,this.getDrawRect("bar")),c=f.left,u=f.width/s.length;a.strokeStyle=t.color,a.fillStyle=t.color,i.line.offset.left=u/2,i.line.offset.right=u/2,s.forEach((function(e,r){a.beginPath();var n=u/t.count-l.offset/t.count,i=c+l.offset/2+u*r+n*(t.index-1),s=i,h=i+n,d=o.getInterpolation(e.value,o.getAllValues()),p=o.getInterpolation(0,o.getAllValues());e.hoverArea={xStart:c+u*r,yStart:f.top,xEnd:c+u*r+n*t.count+l.offset,yEnd:f.top+f.height},e.isHovered=o.checkIsHovered(e.hoverArea),a.moveTo(s,p),a.lineTo(s,d),a.lineTo(h,d),a.lineTo(h,p),a.fill()}))}},{key:"checkIsHovered",value:function(t){var e=this.cursor;return e.x>=t.xStart&&e.x<=t.xEnd&&e.y>=t.yStart&&e.y<=t.yEnd}},{key:"drawTooltip",value:function(){this.settings,this.data}},{key:"render",value:function(){var t=this,o=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],300);this.renderTimeout&&clearTimeout(this.renderTimeout),this.renderTimeout=setTimeout((function(){P(S(e.prototype),"baseRender",t).call(t),t.drawGrid(),t.drawLabels(),t.drawData(),t.drawValues(),t.drawTooltip()}),o/60)}}])&&w(o.prototype,r),n&&w(o,n),e}(p),k={animated:!0,offset:{top:30,right:30,bottom:30,left:30},slice:{volumed:!0,styles:{width:80,color:"#fff"},hover:{enable:!0,value:20}},texts:{center:{enable:!1,text:"100%",styles:{color:"#ffffff",fontSize:30}},slicePercent:{enable:!1,styles:{color:"#ffffff",fontSize:10}}}};function W(t){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t,e){return!e||"object"!==W(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _(t,e,o){return(_="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,o){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}(t,e);if(r){var n=Object.getOwnPropertyDescriptor(r,e);return n.get?n.get.call(o):n.value}})(t,e,o||t)}function D(t){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function R(t,e){return(R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var A=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t.defaultSettings=k,E(this,D(e).call(this,t))}var o,r,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}(e,t),o=e,(r=[{key:"prepareData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=t.reduce((function(t,e){return t+(parseFloat(e.value)||0)}),0);return t.forEach((function(t){t.percent=100/e*t.value,t.total=e,t.color=t.color||a(),t.state=t.state||0})),t}},{key:"generatePolygon",value:function(t){var e=t.count,o=void 0===e?20:e,r=t.x,n=t.y,i=t.radius,a=t.sliceWidth,s=t.startPi,f=t.endPi,c=[],u=(f-s)/o;u=isFinite(u)?u:0;for(var h=0;h<=o;h++)c.push(l(r,n,i+a/2,s+u*h));for(var d=0;d<=o;d++)c.push(l(r,n,i-a/2,f-u*d));return c}},{key:"isPathHover",value:function(t){for(var e=t.x,o=t.y,r=t.polygon,n=!1,i=0,a=r.length-1;i<r.length;a=i++){var l=r[i].x,s=r[i].y,f=r[a].x,c=r[a].y;s>o!=c>o&&e<(f-l)*(o-s)/(c-s)+l&&(n=!n)}return n}},{key:"drawSlices",value:function(){var t,e,o,r=this.canvas,n=this.settings,i=this.data,a=this.cursor,f=this.type,c=this.state,u=n.offset,h=n.slice,d=n.texts,p=(n.tooltip,n.animated),y=r.context,g=r.element,b=Math.min(g.clientHeight-u.top-u.bottom-("donut"===f?h.styles.width:0),g.clientWidth-u.left-u.right-("donut"===f?h.styles.width:0))*c.loading,v=g.clientWidth/2+u.left-u.right,m=g.clientHeight/2+u.top-u.bottom,w=h.volumed,x=null==h?void 0:null===(t=h.hover)||void 0===t?void 0:t.value,P=-Math.PI/2;i=this.prepareData(i),"pie"===f&&(e=b/2,o=b/4),"donut"===f&&(e=h.styles.width>=b?b:h.styles.width,o=b/2);for(var S=0;S<=i.length-1;S++){var O,T=P,k=2*Math.PI*c.loading*i[S].percent/100+P;i[S].startPi=T,i[S].endPi=k,P=k;var W=this.generatePolygon({x:v,y:m,radius:o+i[S].state/2,sliceWidth:e+i[S].state,startPi:T,endPi:k}),j=this.isPathHover({x:a.x,y:a.y,polygon:W});i[S].polygon=W,i[S].hovered=j,i[S].hovered&&(null==h?void 0:null===(O=h.hover)||void 0===O?void 0:O.enable)?p?i[S].state<x&&(i[S].state+=1,this.render({from:"Animated increase state"})):(i[S].state=x,this.render({from:"Increase state"})):p?i[S].state>0&&(i[S].state-=1,this.render({from:"Animated decrease state"})):(i[S].state=0,this.render({from:"Decrease state"}));var E=[];if(E.push({radius:o+i[S].state/2,width:e+i[S].state,color:s(i[S].color,i[S].state),x:v,y:m,startPi:T,endPi:k}),w){var _=void 0,D=void 0;"donut"===f&&(_=o-e/4+i[S].state/2,D=e/2+i[S].state),"pie"===f&&(D=2*(_=o-e/6+i[S].state/2)),E.push({radius:_,width:D,color:s(i[S].color,-50+i[S].state),x:v,y:m,startPi:T,endPi:k})}for(var R=0;R<=E.length-1;R++)y.save(),y.beginPath(),y.strokeStyle=E[R].color,y.lineWidth=E[R].width,y.fillStyle="transparent",y.arc(E[R].x,E[R].y,E[R].radius>0?E[R].radius:0,E[R].startPi,E[R].endPi),y.fill(),y.stroke(),y.restore()}if(d.slicePercent.enable)for(var A=0;A<=i.length-1;A++){y.font="100 "+d.slicePercent.styles.fontSize+"px arial",y.textAlign="center",y.textBaseline="middle",y.fillStyle=d.slicePercent.styles.color;var M=o;"donut"===f&&w&&(M+=e/4+i[A].state),"donut"!==f||w||(M+=i[A].state/2),"pie"===f&&w&&(M+=e/3+i[A].state),"pie"!==f||w||(M+=i[A].state/2);var C=parseFloat(i[A].percent.toFixed(2))+"%",I=l(v,m,M,(i[A].startPi+i[A].endPi)/2);y.fillText(C,I.x,I.y)}d.center.enable&&(y.font="800 "+d.center.styles.fontSize*c.loading+"px arial",y.textAlign="center",y.textBaseline="middle",y.fillStyle=d.center.styles.color,y.fillText(d.center.text,v,m))}},{key:"drawTooltip",value:function(){var t=this.data.find((function(t){return t.hovered}));t&&_(D(e.prototype),"drawTooltip",this).call(this,{title:{text:t.label},panels:[{colorPanel:{color:t.color},texts:[{text:"Value: "+t.value},{text:"Percent: "+t.percent.toFixed(2)+"%"}],footer:{text:"Total: "+t.total}}],render:function(t){}})}},{key:"render",value:function(){var t=this,o=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],300);this.renderTimeout&&clearTimeout(this.renderTimeout),this.renderTimeout=setTimeout((function(){_(D(e.prototype),"baseRender",t).call(t),t.drawSlices(),t.drawTooltip()}),o/60)}}])&&j(o.prototype,r),n&&j(o,n),e}(p);function M(t){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function C(t,e){return!e||"object"!==M(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function I(t){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function H(t,e){return(H=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var z=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t.type="donut",C(this,I(e).call(this,t))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&H(t,e)}(e,t),e}(A);function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function V(t,e){return!e||"object"!==L(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function B(t){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function F(t,e){return(F=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var G=function(t){function e(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t.type="pie",V(this,B(e).call(this,t))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&F(t,e)}(e,t),e}(A);o.d(e,"Plot",(function(){return T})),o.d(e,"Donut",(function(){return z})),o.d(e,"Pie",(function(){return G})),window.bChart={Plot:T,Donut:z,Pie:G}}]);