!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.mChange=n():t.mChange=n()}(window,function(){return function(t){var n={};function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=n,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="",i(i.s=5)}([function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.containerLayout=function(t,n,i){for(var e=["width:"+100/i+"%;","height:"+100/n+"%;","position: absolute;","overflow: hidden;","z-index: 2;"].join(""),o=["width:"+100*i+"%;","height:"+100*n+"%;","background-size: cover;","display: block;","position: absolute;","z-index: 1;","background-position: 50% 50%;"].join(""),r=[],s=1;s<=n;s++)for(var u=1;u<=i;u++){var h=["top:"+100/n*(s-1)+"%;","left:"+100/i*(u-1)+"%;"].join("");r.push("."+t+" .item-"+s+"-"+u+"{"+h+"}");var c=["top:"+-100*(s-1)+"%;","left:"+-100*(u-1)+"%;"].join("");r.push("."+t+" .item-"+s+"-"+u+" .child{"+c+"}")}var a=["position:relative"].join(""),l=["."+t+"{"+a+"}","."+t+" .defaultChange{transform: scale(0);border-radius: 50%;}","."+t+" .animation-item{"+e+"}","."+t+" .animation-item .child{"+o+"}",r.join("")].join(""),f=document.createElement("style");f.innerHTML=l,document.head.appendChild(f)},n.initDom=function(t,n,i,e){for(var o=document.createDocumentFragment(),r=[],s=1;s<=i;s++){for(var u=[],h=1;h<=e;h++){var c=document.createElement("div");c.className="animation-item item-"+s+"-"+h;var a=document.createElement("div");a.className="child",c.appendChild(a),o.appendChild(c),u.push(c)}r.push(u)}return t.className+=" "+n,t.appendChild(o),r}},function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Matrix=void 0;var e=function(){function t(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,i,e){return i&&t(n.prototype,i),e&&t(n,e),n}}(),o=i(4);n.Matrix=function(t){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.row=t,e.col=i,e.lock=!1,e}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}(n,o.Event),e(n,[{key:"movePoint",value:function(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!0!==this.lock){var e=this;t.init(this.row,this.col),e.$emit("changeStart"),this.lock=!0;var o=setInterval(function(){for(var r=0;r<e.row;r++)for(var s=0;s<e.col;s++)t.check(r,s)&&e.$emit("hitPoint",{point:{x:r,y:s},mode:t,option:i});t.next(),t.end()&&(clearInterval(o),e.$emit("changeEnd"),setTimeout(function(){n.lock=!1},2e3))},t.interval)}}}]),n}()},function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.makeMatrixChange=function(t,n){n=Object.assign(s,n),(0,o.containerLayout)(n.nameSpace,n.row,n.col);var i=(0,o.initDom)(t,n.nameSpace,n.row,n.col),u=new e.Matrix(n.row,n.col),h=n.images[0];return i.forEach(function(t){t.forEach(function(t){t.dataset.oldclass=t.className})}),u.$on("changeStart",function(){h=n.images[r(0,n.images.length-1)]}),u.$on("hitPoint",function(t){var n=t.point,e=t.mode,o=t.option;h=o.image?o.image:h;var r=o.className?o.className:"defaultChange",s="",u=i[n.x][n.y];if(!u.dataset.change){if(o.animate){var c=0;r=o.classNameOut,s=o.classNameIn?o.classNameIn:o.classNameOut,u.addEventListener("animationend",function t(){u.className=u.dataset.oldclass,1!==c?(u.children[0].style.backgroundImage="url("+h+")",setTimeout(function(){u.className=a+" "+s}),c=1):u.removeEventListener("animationend",t)})}else u.addEventListener("transitionend",function t(){u.dataset.mchange="",u.children[0].style.backgroundImage="url("+h+")",u.className=u.dataset.oldclass,u.removeEventListener("transitionend",t)});var a=u.dataset.oldclass;u.className=a+" "+r,u.dataset.mchange="1",u.style.transition=e.duration/1e3+"s"}}),{movePoint:u.movePoint.bind(u),changeImages:function(t){n.images=t},matrixChange:u}};var e=i(1),o=i(0);function r(t,n){return Math.round(Math.random()*(n-t))+t}var s={nameSpace:function(t){for(var n="",i=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],e=0;e<t;e++)n+=i[r(0,i.length)];return n}(8),row:7,col:9}},function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.mode=[{interval:"140",duration:"1000",init:function(t,n){this.row=t,this.col=n,this.num=Math.ceil(Math.random()*Math.ceil((t+n)/2)+2),this.baseNum=this.num},check:function(t,n){return(t*this.col+n)%(this.baseNum+1)===this.num},next:function(){this.num--},end:function(){return-1===this.num}},{interval:"140",duration:"1000",init:function(t,n){this.row=t,this.col=n,this.num=Math.ceil(Math.random()*Math.max((t+n)/2)+2),this.baseNum=this.num},check:function(t,n){return(t+n*this.row)%(this.baseNum+1)===this.num},next:function(){this.num--},end:function(){return-1===this.num}},{interval:"140",duration:"1000",init:function(t,n){this.row=t,this.col=n,this.num=Math.ceil(Math.random()*Math.ceil((t+n)/2)+2),this.baseNum=this.num},check:function(t,n){return(t*this.col+n)%(this.baseNum+1)==this.baseNum-this.num},next:function(){this.num--},end:function(){return-1===this.num}},{interval:"140",duration:"1000",init:function(t,n){this.row=t,this.col=n,this.num=Math.ceil(Math.random()*Math.max((t+n)/2)+2),this.baseNum=this.num},check:function(t,n){return(t+n*this.row)%(this.baseNum+1)==this.baseNum-this.num},next:function(){this.num--},end:function(){return-1===this.num}},{interval:"140",duration:"1000",init:function(t,n){this.row=t,this.col=n,this.num=0},check:function(t,n){return t+n===this.num},next:function(){this.num++},end:function(){return this.col+this.row+1===this.num}},{interval:"140",duration:"1000",init:function(t,n){this.row=t,this.col=n,this.num=this.row-1},check:function(t,n){return t-n===this.num},next:function(){this.num--},end:function(){return-this.col===this.num}},{interval:"140",duration:"1000",init:function(t,n){this.row=t,this.col=n,this.num=1-this.col},check:function(t,n){return t-n===this.num},next:function(){this.num++},end:function(){return this.row===this.num}},{interval:"200",duration:"1200",init:function(t,n){this.row=t,this.col=n,this.num=0},check:function(t,n){return t===this.num},next:function(){this.num++},end:function(){return this.row===this.num}},{interval:"200",duration:"1200",init:function(t,n){this.row=t,this.col=n,this.num=0},check:function(t,n){return n===this.num},next:function(){this.num++},end:function(){return this.col===this.num}},{interval:"200",duration:"1200",init:function(t,n){this.row=t,this.col=n,this.num=this.row-1},check:function(t,n){return t===this.num},next:function(){this.num--},end:function(){return-1===this.num}},{interval:"200",duration:"1200",init:function(t,n){this.row=t,this.col=n,this.num=this.col-1},check:function(t,n){return n===this.num},next:function(){this.num--},end:function(){return-1===this.num}},{interval:"200",duration:"1200",init:function(t,n){this.row=t,this.col=n,this.num=0},check:function(t,n){return t===this.num&&n>=this.num||n===this.num&&t>=this.num},next:function(){this.num++},end:function(){return this.row>this.col?this.row-1===this.num:this.col-1===this.num}},{interval:"200",duration:"1200",init:function(t,n){this.row=t,this.col=n,this.num=0},check:function(t,n){return this.row-t-1===this.num&&this.col-n-1>=this.num||this.col-n-1===this.num&&this.row-t-1>=this.num},next:function(){this.num++},end:function(){return this.row>this.col?this.num===this.row-1:this.num===this.col-1}},{interval:"200",duration:"1200",init:function(t,n){this.row=t,this.col=n,this.num=0},check:function(t,n){return t===this.num&&this.col-n-1>=this.num||this.col-n-1===this.num&&t>=this.num},next:function(){this.num++},end:function(){return this.row>this.col?this.row-1===this.num:this.col-1===this.num}},{interval:"200",duration:"1200",init:function(t,n){this.row=t,this.col=n,this.num=0},check:function(t,n){return this.row-t-1===this.num&&n>=this.num||n===this.num&&this.row-t-1>=this.num},next:function(){this.num++},end:function(){return this.row>this.col?this.row-1===this.num:this.col-1===this.num}},{interval:"300",duration:"1400",init:function(t,n){this.row=t,this.col=n,this.num=0},check:function(t,n){return t===this.num&&n>=this.num&&this.col-n-1>=this.num||n===this.num&&t>=this.num&&this.row-t-1>=this.num||this.row-t-1===this.num&&n>=this.num&&this.col-n-1>=this.num||this.col-n-1===this.num&&t>=this.num&&this.row-t-1>=this.num},next:function(){this.num++},end:function(){return this.row>this.col?Math.ceil(this.col/2)===this.num:Math.ceil(this.row/2)===this.num}},{interval:"320",duration:"1800",init:function(t,n){this.row=t,this.col=n,this.num=0,this.center={x:(this.row-1)/2,y:(this.col-1)/2}},check:function(t,n){var i=Math.abs(t-this.center.x)+Math.abs(n-this.center.y);return i<this.num&&i>=this.num-1},next:function(){this.num++},end:function(){return this.num-1>this.center.x+this.center.y}},{interval:"300",duration:"1600",init:function(t,n){this.row=t,this.col=n,this.num=this.row>this.col?Math.ceil((this.col-1)/2):Math.ceil((this.row-1)/2)},check:function(t,n){return(t===this.num||this.row-1-t===this.num)&&n>=this.num&&this.col-1-n>=this.num||(n===this.num||this.col-1-n===this.num)&&t>=this.num&&this.row-1-t>=this.num},next:function(){this.num--},end:function(){return-1===this.num}},{interval:"50",duration:"600",init:function(t,n){this.row=t,this.col=n,this.point=[[1,0],[0,this.col-1],[this.row-1,this.col-1],[this.row-1,0]],this.direction="row",this.positive=!0,this.iNow=0,this.jNow=0,this.allNum=this.col*this.row},check:function(t,n){return t===this.iNow&&n===this.jNow},next:function(){this.allNum--,"row"===this.direction&&this.jNow<this.point[1][1]&&this.positive?(this.jNow++,this.jNow===this.point[1][1]&&(this.direction="col",this.positive=!0,this.point[1]=[this.point[1][0]+1,this.point[1][1]-1])):"col"===this.direction&&this.iNow<this.point[2][0]&&this.positive?(this.iNow++,this.iNow===this.point[2][0]&&(this.direction="row",this.positive=!1,this.point[2]=[this.point[2][0]-1,this.point[2][1]-1])):"row"===this.direction&&this.jNow>this.point[3][1]&&!this.positive?(this.jNow--,this.jNow===this.point[3][1]&&(this.direction="col",this.positive=!1,this.point[3]=[this.point[3][0]-1,this.point[3][1]+1])):"col"===this.direction&&this.iNow>this.point[0][0]&&!this.positive&&(this.iNow--,this.iNow===this.point[0][0]&&(this.direction="row",this.positive=!0,this.point[0]=[this.point[0][0]+1,this.point[0][1]+1]))},end:function(){return 0===this.allNum}}]},function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=function(){function t(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,i,e){return i&&t(n.prototype,i),e&&t(n,e),n}}();var o=0;n.Event=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=++o,this._events={}}return e(t,[{key:"$on",value:function(t,n){var i,e=this;Array.isArray(t)?t.forEach(function(t){return e.$on(t,n)}):(Array.isArray(n)||(n=[n]),(i=this._events[t]||(this._events[t]=[])).push.apply(i,function(t){if(Array.isArray(t)){for(var n=0,i=Array(t.length);n<t.length;n++)i[n]=t[n];return i}return Array.from(t)}(n)));return this}},{key:"$once",value:function(t,n){var i=this;function e(){i.$off(t,e),n.apply(i,arguments)}return e.fn=n,i.$on(t,e),i}},{key:"$off",value:function(t,n){var i=this;if(!arguments.length)return this._events={},this;if(Array.isArray(t))return t.forEach(function(t){return i.$off(t,n)}),this;var e=this._events[t];if(!e)return this;if(!n)return this._events[t]=null,this;if(n){var o=void 0,r=e.length;if(Array.isArray(n))return void n.forEach(function(n){return i.$off(t,n)});for(;r--;)if((o=e[r])===n||o.fn===n){e.splice(r,1);break}}return this}},{key:"$emit",value:function(t){for(var n=arguments.length,i=Array(n>1?n-1:0),e=1;e<n;e++)i[e-1]=arguments[e];var o=this,r=o._events[t];return r&&r.forEach(function(t){return t.apply(o,i)}),o}}]),t}()},function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i(1);Object.keys(e).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){return e[t]}})});var o=i(0);Object.keys(o).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){return o[t]}})});var r=i(3);Object.keys(r).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){return r[t]}})});var s=i(2);Object.keys(s).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(n,t,{enumerable:!0,get:function(){return s[t]}})})}])});
//# sourceMappingURL=matrixChange.js.map