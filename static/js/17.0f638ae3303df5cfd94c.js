webpackJsonp([17],{"GSX+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mvHQ"),i=a.n(n);function s(t,e,a={}){if(!(this instanceof s))return new s(t,a);if(!t)return;let{width:n,height:i}=window.getComputedStyle(t,null);n=n.replace("px",""),i=i.replace("px",""),this.canvas=t,this.context=t.getContext("2d"),this.width=n,this.height=i;const o=this.context,r=window.devicePixelRatio;r?(t.style.width=`${n}px`,t.style.height=`${i}px`,t.height=i*r,t.width=n*r,o.scale(r,r)):(t.width=n,t.height=i),o.lineWidth=3,o.strokeStyle="black",o.lineCap="round",o.lineJoin="round",Object.assign(o,a);const{left:c,top:d}=t.getBoundingClientRect(),h={},l=/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent);l||(o.shadowBlur=1,o.shadowColor="black");let g=!1;const u=t=>e=>{e.preventDefault(),1===t&&(g=!0),(1===t||g)&&(e=l?e.touches[0]:e,h.x=e.clientX-c,h.y=e.clientY-d,(t=>{switch(t){case 1:o.beginPath(),o.moveTo(h.x,h.y);break;case 2:o.lineTo(h.x,h.y),o.stroke()}})(t))},m=u(1),w=u(2),p=window.requestAnimationFrame,v=p?t=>{p(()=>{w(t)})}:w;if(l?(t.addEventListener("touchstart",m),t.addEventListener("touchmove",v)):(t.addEventListener("mousedown",m),t.addEventListener("mousemove",v)),"number"==typeof e)switch(this.degree=e,o.rotate(e*Math.PI/180),e){case-90:o.translate(-i,0);break;case 90:o.translate(0,-n);break;case-180:case 180:o.translate(-n,-i)}}s.prototype={scale(t,e,a=this.canvas){const n=a.width,i=a.height;if(t=t||n,e=e||i,t!==n||e!==i){const s=document.createElement("canvas"),o=s.getContext("2d");s.width=t,s.height=e,o.drawImage(a,0,0,n,i,0,0,t,e),a=s}return a},rotate(t,e=this.canvas){if(0!==(t=~~t)){const a=180,n=-90;t>a?t=a:t<n&&(t=n);const i=document.createElement("canvas"),s=i.getContext("2d"),o=e.height,r=e.width,c=t*Math.PI/180;switch(t){case-90:i.width=o,i.height=r,s.rotate(c),s.drawImage(e,-r,0);break;case 90:i.width=o,i.height=r,s.rotate(c),s.drawImage(e,0,-o);break;case 180:i.width=r,i.height=o,s.rotate(c),s.drawImage(e,-r,-o)}e=i}return e},getPNGImage(t=this.canvas){return t.toDataURL("image/png")},getJPGImage(t=this.canvas){return t.toDataURL("image/jpeg",.5)},downloadPNGImage(t){const e=t.replace("image/png","image/octet-streamContent-Disposition:attachmentfilename=test.png");window.location.href=e},dataURLtoBlob(t){const e=t.split(","),a=e[0].match(/:(.*?)/)[1],n=atob(e[1]);let i=n.length;const s=new Uint8Array(i);for(;i--;)s[i]=n.charCodeAt(i);return new Blob([s],{type:a})},clear(){let t,e;switch(this.degree){case-90:case 90:t=this.height,e=this.width;break;default:t=this.width,e=this.height}this.context.clearRect(0,0,t,e)},upload(t,e,a,n){const i=new FormData,s=new XMLHttpRequest;s.withCredentials=!0,i.append("image",t,"sign"),s.open("POST",e,!0),s.onload=(()=>{s.status>=200&&s.status<300||304===s.status?a(s.responseText):n()}),s.onerror=(t=>{"function"==typeof n?n(t):console.log(`upload img error: ${t}`)}),s.send(i)}};var o=s,r={data:function(){return{detail:void 0,isWrite:!1,params:{writeId:"签了",userSign:void 0}}},components:{Draw:o},mounted:function(){var t=this;this.$parent.head.back=function(){sessionStorage.setItem("myWrite",i()(t.params)),t.$router.back(-1)},this.canvasBox=document.getElementById("canvasBox"),this.initCanvas()},methods:{initCanvas:function(){var t=document.querySelector("canvas");this.draw=new o(t),console.log(1)},clear:function(){this.draw.clear()},cancle:function(){sessionStorage.setItem("myWrite",i()(this.params)),this.$router.back(-1)},upload:function(){var t=this,e=this.draw.getPNGImage(),a=this.dataURLtoBlob(e);console.log(a);var n=new FileReader;n.readAsDataURL(a),console.log(n);var s=new FormData;if(s.append("file",a),14313===a.size)return this.isWrite=!0,void setTimeout(function(){t.isWrite=!1},3e3);this.$http(this.path.Upwrite(s)).then(function(e){if(console.log(e.data.code),0===e.data.code){t.detail=e.data,console.log(t.detail),t.params.userSign=t.detail.signUrl,sessionStorage.setItem("myWrite",i()(t.params));var a=JSON.parse(sessionStorage.getItem("myWrite"));console.log(a),t.$router.back(-1)}})},dataURLtoBlob:function(t){for(var e=t.split(","),a=e[0].match(/:(.*?);/)[1],n=atob(e[1]),i=n.length,s=new Uint8Array(i);i--;)s[i]=n.charCodeAt(i);return new Blob([s],{type:a})}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bte8",attrs:{id:"canvasBox"}},[a("div",{staticClass:"greet flex-bet bte8"},[a("button",{staticClass:"greet-btn",on:{click:t.cancle}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"greet-btn",on:{click:t.clear}},[t._v("清除")]),t._v(" "),a("button",{staticClass:"greet-btn",attrs:{disabled:t.isWrite},on:{click:t.upload}},[t._v("确定")])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.isWrite?a("span",{staticClass:"msg"},[t._v(" 请 签 名 ")]):t._e()])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"tip"},[e("img",{attrs:{src:a("pVNL"),alt:""}}),this._v(" 温馨提示：请在以下白色区域内写签名\n  ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"canvas-box"},[e("canvas")])}]};var d=a("VU/8")(r,c,!1,function(t){a("byCC")},"data-v-6d034bdc",null);e.default=d.exports},byCC:function(t,e){},pVNL:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFuSURBVChTRZE9SwNBEIZn9u7UaMCQhJDCQo2tlQrmEoiFiFiIBAtLiyDWNoqSHGfUSrHRQqzyEwJWASUEvEiws9AUNiKIGPNhF5Lbce+y0Qd2mXlndvfdXQTJ29m8x9tSU0C0BgjTCPgMwG9s7F4FzcqP08Oc6cOIhrxNpSjCSeJs0394H9K6uMEBfYwG7mpGYszpAwLAeiZ+WzP0JVcQfBqJsAyhldajjUzs4XFrRmPfaT2JRNWgaRVkHTSyi2T0Th3NWmUgLEyFPSnGkK0wwJzbJVE4naAJXKaAnOdsomWxmiY4U6pSd+EIl/2dHXzH1qtIxsXAZgfskNR7IIqr/FPfXRwVL9QQNqiicVqVugsRjcjQBQfb60K0WBvUC0Lcft+bC8gaKEDxvmcyEkPCmIGMn7qf0jBiC8LoNSeWDByVnhzNoZnVI9RheSJ+4M9a+b8f/NrXZ1WFnQu7wzbhi7AXIUAV0N7xm+USAMAvJECGLpmljxkAAAAASUVORK5CYII="}});