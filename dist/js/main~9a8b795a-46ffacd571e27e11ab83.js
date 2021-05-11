(self.webpackChunksrc=self.webpackChunksrc||[]).push([[371],{491:(t,e,i)=>{"use strict";i.r(e)},500:(t,e,i)=>{"use strict";Object.defineProperty(e,"X",{value:!0});var n=i(144);e.Z=n.default.extend({data:function(){return{info:{name:"Garlin",github:"https://github.com/M9L6",email:"garlin92@qq.com",skills:["cocos","unity","typescipt","c#","javascript"]}}}})},191:(t,e,i)=>{"use strict";Object.defineProperty(e,"X",{value:!0});var n,s=i(144),r=i(954),a=i(628),o=i(29);e.Z=s.default.extend({data:function(){return{navlists:[{path:"/home",title:"Home"},{path:"/list",title:"Project"},{path:"/about",title:"About"}]}},methods:{setStyle:function(t){t||(a.config.isLight=!a.config.isLight,o.Storage.set("isLight",a.config.isLight?"open":"close")),a.config.isLight?this.$refs.lightBtn.classList.add("light"):this.$refs.lightBtn.classList.remove("light");var e=document.documentElement;e.style.setProperty("--light-color",a.config.isLight?a.config.lightColor:a.config.darkColor),e.style.setProperty("--dark-color",a.config.isLight?a.config.darkColor:a.config.lightColor)}},mounted:function(){this.setStyle(!0),n=new r.BgRenderer(document.querySelector(".bg"))},beforeDestroy:function(){n.destroy(),n=null}})},7:(t,e,i)=>{"use strict";Object.defineProperty(e,"X",{value:!0});var n=i(144);e.Z=n.default.extend({})},317:(t,e)=>{"use strict";Object.defineProperty(e,"X",{value:!0}),e.Z={}},852:(t,e,i)=>{"use strict";Object.defineProperty(e,"X",{value:!0});var n=i(144),s=i(628);e.Z=n.default.extend({data:function(){return{projects:[{title:"galaxy",description:"",tags:["playcanvas","webgl"],preview:s.root+"projects/galaxy/preview.jpg",to:s.root+"projects/galaxy"},{title:"galaxy",description:"",tags:["playcanvas","webgl"],preview:s.root+"projects/galaxy/preview.jpg",to:s.root+"projects/galaxy"},{title:"galaxy",description:"",tags:["playcanvas","webgl"],preview:s.root+"projects/galaxy/preview.jpg",to:s.root+"projects/galaxy"}]}}})},954:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.BgRenderer=void 0;var n=i(628),s=i(981),r=function(){function t(t){this.loopDuration=2,this._startTime=0,this._timeId=-1,this._drawBinder=null,this._resizeBinder=null,this._circles=[],this._radius=0,this.canvas=t,this._init()}return t.prototype._init=function(){this._ctx=this.canvas.getContext("2d"),this._drawBinder=this._draw.bind(this),this._resizeBinder=this._resize.bind(this);for(var t=this._circles,e=0;e<15;e++){var i=s.Maf.randomInRange(.1,.9),n=s.Maf.randomInRange(.1,.9),r=s.Maf.randomInRange(0,s.Maf.TAU),a=s.Maf.randomInRange(0,1),o=s.Maf.randomInRange(2,6);t.push({a:i,b:n,theta:r,offset:a,thickness:o})}this._resize(),this._startTime=performance.now(),this._timeId=requestAnimationFrame(this._drawBinder),window.addEventListener("resize",this._resizeBinder)},t.prototype._pointInEllipse=function(t,e,i,n){return{x:t*Math.cos(n*s.Maf.TAU)*Math.cos(i)-e*Math.sin(n*s.Maf.TAU)*Math.sin(i),y:t*Math.cos(n*s.Maf.TAU)*Math.sin(i)+e*Math.sin(n*s.Maf.TAU)*Math.cos(i)}},t.prototype._drawEllipse=function(t,e,i,n,s,r,a){var o=this._ctx;o.save(),o.translate(-t,-e);var l=new Path2D,c=this._pointInEllipse(i,n,s,r);l.moveTo(c.x,c.y);for(var u=r;u<r+a;u+=.05){var f=this._pointInEllipse(i,n,s,u);l.lineTo(f.x,f.y)}o.translate(-4,0),o.strokeStyle="#ff0000",o.stroke(l),o.translate(4,0),o.strokeStyle="#00ff00",o.stroke(l),o.translate(4,0),o.strokeStyle="#0000ff",o.stroke(l),o.restore()},t.prototype._draw=function(){var t=this,e=this._ctx;e.fillStyle=n.config.isLight?"#fff":"#000",e.fillRect(0,0,this.canvas.width,this.canvas.height);var i=.001*(performance.now()-this._startTime)%this.loopDuration/this.loopDuration;e.save(),e.translate(.5*this.canvas.width,.5*this.canvas.height),e.strokeStyle=n.config.isLight?"#000":"#fff",e.globalAlpha=.5,e.globalCompositeOperation=n.config.isLight?"darken":"lighten",e.setLineDash([8,4]),e.lineDashOffset=4,e.lineWidth=10,this._circles.forEach((function(n){var r=(i+n.offset)%1;e.lineWidth=n.thickness*(1+s.Maf.parabola(r,4)),t._drawEllipse(0,0,n.a*t._radius,n.a*t._radius,n.theta-r*s.Maf.TAU,0,.5+.5*Math.sin(r*s.Maf.TAU))})),e.restore(),this._timeId=requestAnimationFrame(this._drawBinder)},t.prototype._resize=function(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this._radius=.45*window.innerWidth},t.prototype.destroy=function(){cancelAnimationFrame(this._timeId),window.removeEventListener("resize",this._resizeBinder),this._ctx=null,this.canvas=null,this._circles=null,this._resizeBinder=null,this._drawBinder=null},t}();e.BgRenderer=r},628:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.config=e.root=void 0;var n=i(29);e.root="https://m9l6.github.io/";var s=n.Storage.get("isLight");s=null===s||"open"===s,e.config={isLight:s,lightColor:"#fff",darkColor:"#000"}},981:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Maf=void 0,e.Maf={PI:Math.PI,TAU:2*Math.PI,randomInRange:function(t,e){return Math.random()*(e-t)+t},parabola:function(t,e){return Math.pow(4*t*(1-t),e)}}},29:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Storage=void 0;var i=function(){function t(){}return t.set=function(t,e){localStorage.setItem(t,"string"==typeof e?e:JSON.stringify(e))},t.get=function(t,e){void 0===e&&(e=!1);var i=localStorage.getItem(t);return e?JSON.parse(i):i},t.delete=function(t){localStorage.removeItem(t)},t.deleteAll=function(){localStorage.clear()},t}();e.Storage=i},213:(t,e,i)=>{"use strict";var n=i(144),s=i(345),r=i(37),a=i(143),o=i(408),l=i(179),c=i(795);i(491),n.default.use(s.default);var u=new s.default({routes:[{path:"/",redirect:"/home"},{path:"/home",component:a.default},{path:"/list",component:o.default},{path:"/about",component:l.default},{path:"*",component:c.default}]});new n.default({router:u,render:function(t){return t(r.default)}}).$mount("#app")},179:(t,e,i)=>{"use strict";i.r(e),i.d(e,{__esModule:()=>s.X,default:()=>o});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"info"},[i("h2",[t._v(t._s(t.info.name))]),t._v(" "),i("p",{staticClass:"skill"},[t._v("Skills:")]),t._v(" "),i("p",{staticClass:"skill-info"},[t._v(t._s(t.info.skills.join(", ")))]),t._v(" "),i("p",{staticClass:"link"},[t._v("Github:")]),t._v(" "),i("a",{staticClass:"link-info",attrs:{href:t.info.github,target:"_blank"}},[t._v("\n    "+t._s(t.info.github)+"\n  ")]),t._v(" "),i("p",{staticClass:"email"},[t._v("Email:")]),t._v(" "),i("a",{staticClass:"email-info",attrs:{href:"mailto:"+t.info.email}},[t._v(t._s(t.info.email))])])};n._withStripped=!0;var s=i(500);const r=s.Z;var a=(0,i(900).Z)(r,n,[],!1,null,null,null);a.options.__file="components/About.vue";const o=a.exports},37:(t,e,i)=>{"use strict";i.r(e),i.d(e,{__esModule:()=>s.X,default:()=>o});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("header",[i("h1",[t._v("--. .- .-. .-.. .. -.")]),t._v(" "),i("span",{ref:"lightBtn",staticClass:"icon light",on:{click:function(e){return t.setStyle(!1)}}})]),t._v(" "),i("nav",[i("ul",{staticClass:"nav-menu"},t._l(t.navlists,(function(e,n){return i("li",{key:n},[i("router-link",{attrs:{to:e.path}},[t._v(t._s(e.title))])],1)})),0)]),t._v(" "),i("main",[i("router-view")],1),t._v(" "),t._m(0),t._v(" "),i("canvas",{staticClass:"bg"})])};n._withStripped=!0;var s=i(191);const r=s.Z;var a=(0,i(900).Z)(r,n,[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("p",[t._v("@Garlin 2021")])])}],!1,null,null,null);a.options.__file="components/App.vue";const o=a.exports},143:(t,e,i)=>{"use strict";i.r(e),i.d(e,{__esModule:()=>s.X,default:()=>o});var n=function(){var t=this.$createElement;return(this._self._c||t)("div")};n._withStripped=!0;var s=i(7);const r=s.Z;var a=(0,i(900).Z)(r,n,[],!1,null,"67410f3a",null);a.options.__file="components/Home.vue";const o=a.exports},795:(t,e,i)=>{"use strict";i.r(e),i.d(e,{__esModule:()=>s.X,default:()=>o});var n=function(){var t=this;t.$createElement;return t._self._c,t._m(0)};n._withStripped=!0;var s=i(317);const r=s.Z;var a=(0,i(900).Z)(r,n,[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",[t._v("你所查找的页面不存在")])])}],!1,null,null,null);a.options.__file="components/Page404.vue";const o=a.exports},408:(t,e,i)=>{"use strict";i.r(e),i.d(e,{__esModule:()=>s.X,default:()=>o});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"project-view"},t._l(t.projects,(function(e,n){return i("a",{key:n,attrs:{href:e.to,target:"_blank"}},[i("img",{attrs:{src:e.preview,alt:e.title}}),t._v(" "),i("span",[i("h4",[t._v("title: "+t._s(e.title))]),t._v(" "),i("p",[t._v("Tag: "+t._s(e.tags.join(" , ")))])])])})),0)};n._withStripped=!0;var s=i(852);const r=s.Z;var a=(0,i(900).Z)(r,n,[],!1,null,null,null);a.options.__file="components/ProjectList.vue";const o=a.exports}}]);