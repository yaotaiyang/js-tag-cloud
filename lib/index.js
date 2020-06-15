!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.JsTagCloud=t():e.JsTagCloud=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t);var s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body,n=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);if(!t||1!==t.nodeType)return new Error("Incorrect element type");this.$container=t,this.texts=n||[],this.config=i(i({},e._defaultConfig),o||{}),this.colors=this.config.colors||["#47A1FF","#59CB74","#FBD54A","#FFB952","#FC6980","#9F8CF1","#6367EC","#ADDF84","#6CD3FF","#ED8CCE","#659AEC","#A2E5FF","#84E0BE","#4DCCCB","#5982F6","#E37474","#F79452","#DA65CC","#9861E5","#3FDDC7"],this.radius=this.config.radius,this.depth=2*this.radius,this.size=1.5*this.radius,this.maxSpeed=e._getMaxSpeed(this.config.maxSpeed),this.initSpeed=e._getInitSpeed(this.config.initSpeed),this.direction=this.config.direction,this.keep=this.config.keep,this._createElment(),this._init(),e.list.push({el:this.$el,container:t,instance:this})}var t,n,o;return t=e,o=[{key:"_on",value:function(e,t,n,o){e.addEventListener?e.addEventListener(t,n,o):e.attachEvent?e.attachEvent("on".concat(t),n):e["on".concat(t)]=n}}],(n=[{key:"_createElment",value:function(){var e=this,t=document.createElement("div");t.className="JsTagCloud",t.style.position="relative",t.style.width="".concat(2*e.radius,"px"),t.style.height="".concat(2*e.radius,"px"),e.items=[],e.texts.forEach((function(n,o){var i=e._createTextItem(n,o);t.appendChild(i.el),e.items.push(i)})),e.$container.appendChild(t),e.$el=t}},{key:"_createTextItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this,o=document.createElement("span");o.className="js-tag-cloud-item",o.style.position="absolute",o.style.top="50%",o.style.left="50%",o.style.zIndex=t+1,o.style.filter="alpha(opacity=0)",o.style.opacity=0,o.style.color=n.colors[Math.floor(Math.random()*n.colors.length)],o.style.willChange="transform, opacity, filter";var r="50% 50%";o.style.WebkitTransformOrigin=r,o.style.MozTransformOrigin=r,o.style.OTransformOrigin=r,o.style.transformOrigin=r;var a="translateX(-50%) translateY(-50%) scale(1)";o.style.WebkitTransform=a,o.style.MozTransform=a,o.style.OTransform=a,o.style.transform=a;var s="all .1s";return o.style.WebkitTransition=s,o.style.MozTransition=s,o.style.OTransition=s,o.style.transition=s,o.innerText=e,i({el:o,text:e},n._computePosition(t))}},{key:"_computePosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this,o=n.texts.length;t&&(e=Math.floor(Math.random()*(o+1)));var i=Math.acos((2*e+1)/o-1),r=Math.sqrt((o+1)*Math.PI)*i;return{x:n.size*Math.cos(r)*Math.sin(i)/2,y:n.size*Math.sin(r)*Math.sin(i)/2,z:n.size*Math.cos(i)/2}}},{key:"_init",value:function(){var t=this;t.active=!1,t.mouseX0=t.initSpeed*Math.sin(t.direction*(Math.PI/180)),t.mouseY0=-t.initSpeed*Math.cos(t.direction*(Math.PI/180)),t.mouseX=t.mouseX0,t.mouseY=t.mouseY0,e._on(t.$el,"mouseover",(function(){t.active=!0})),e._on(t.$el,"mouseout",(function(){t.active=!1})),e._on(t.keep?window:t.$el,"mousemove",(function(e){e=e||window.event;var n=t.$el.getBoundingClientRect();t.mouseX=(e.clientX-(n.left+n.width/2))/5,t.mouseY=(e.clientY-(n.top+n.height/2))/5})),t._next(),t.interval=setInterval((function(){t._next.bind(t)()}),100)}},{key:"_next",value:function(){var e=this;e.keep||e.active||(e.mouseX=Math.abs(e.mouseX-e.mouseX0)<1?e.mouseX0:(e.mouseX+e.mouseX0)/2,e.mouseY=Math.abs(e.mouseY-e.mouseY0)<1?e.mouseY0:(e.mouseY+e.mouseY0)/2);var t=-Math.min(Math.max(-e.mouseY,-e.size),e.size)/e.radius*e.maxSpeed,n=Math.min(Math.max(-e.mouseX,-e.size),e.size)/e.radius*e.maxSpeed;if(!(Math.abs(t)<=.01&&Math.abs(n)<=.01)){var o=Math.PI/180,i=[Math.sin(t*o),Math.cos(t*o),Math.sin(n*o),Math.cos(n*o)];e.items.forEach((function(t){var n=t.x,o=t.y*i[1]+t.z*-i[0],r=t.y*i[0]+t.z*i[1],a=n*i[3]+r*i[2],s=o,l=r*i[3]-n*i[2],c=2*e.depth/(2*e.depth+l);t.x=a,t.y=s,t.z=l,t.scale=c.toFixed(3);var u=c*c-.25;u=(u>1?1:u).toFixed(3);var f=t.el,h=(t.x-f.offsetWidth/2).toFixed(2),d=(t.y-f.offsetHeight/2).toFixed(2),p="translateX(".concat(h,"px) translateY(").concat(d,"px) scale(").concat(t.scale,")");f.style.WebkitTransform=p,f.style.MozTransform=p,f.style.OTransform=p,f.style.transform=p,f.style.filter="alpha(opacity=".concat(100*u,")"),f.style.opacity=u}))}}},{key:"update",value:function(e){var t=this;t.texts=e||[];var n=[],o=[];t.items.forEach((function(t){-1===e.indexOf(t.text)&&(t.status="remove"),o.push(t.text)})),e.forEach((function(e){-1===o.indexOf(e)&&n.push(e)})),n.forEach((function(e){var n=t.items.length+1,o=t._createTextItem(e,n);Object.assign(o,t._computePosition(n,!0)),t.$el.appendChild(o.el),t.items.push(o)}));for(var i=0;i<t.items.length;i++){var r=t.items[i];"remove"===r.status&&(t.items.splice(i,1),t.$el.removeChild(r.el),i--)}}},{key:"destroy",value:function(){var t=this;t.interval=null;var n=e.list.findIndex((function(e){return e.el===t.$el}));-1!==n&&e.list.splice(n,1),t.$container&&t.$el&&t.$container.removeChild(t.$el)}}])&&r(t.prototype,n),o&&r(t,o),e}();a(s,"list",[]),a(s,"_defaultConfig",{radius:100,maxSpeed:"normal",initSpeed:"normal",direction:135,keep:!1}),a(s,"_getMaxSpeed",(function(e){return{slow:5,normal:10,fast:20}[e]||10})),a(s,"_getInitSpeed",(function(e){return{slow:20,normal:40,fast:80}[e]||50})),t.default=function(e,t,n){"string"==typeof e&&(e=document.querySelectorAll(e)),e.forEach||(e=[e]);var o=[];return e.forEach((function(e){e&&o.push(new s(e,t,n))})),o.length<=1?o[0]:o}}])}));
//# sourceMappingURL=index.js.map