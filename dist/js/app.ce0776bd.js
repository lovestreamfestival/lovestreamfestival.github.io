(function(e){function a(a){for(var t,r,o=a[0],l=a[1],c=a[2],s=0,d=[];s<o.length;s++)r=o[s],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);m&&m(a);while(d.length)d.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var e,a=0;a<u.length;a++){for(var n=u[a],t=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(t=!1)}t&&(u.splice(a--,1),e=l(l.s=n[0]))}return e}var t={},r={app:0},i={app:0},u=[];function o(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b5a71":"ad485d28","chunk-2d0d0a10":"d8dcfc65","chunk-2d20811b":"23c22d23","chunk-2d210c47":"d9768fa1","chunk-2d22d746":"fdc0c125","chunk-d26f0002":"dc94da4e"}[e]+".js"}function l(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var a=[],n={"chunk-d26f0002":1};r[e]?a.push(r[e]):0!==r[e]&&n[e]&&a.push(r[e]=new Promise((function(a,n){for(var t="css/"+({}[e]||e)+"."+{"chunk-2d0b5a71":"31d6cfe0","chunk-2d0d0a10":"31d6cfe0","chunk-2d20811b":"31d6cfe0","chunk-2d210c47":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-d26f0002":"a7459875"}[e]+".css",i=l.p+t,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var c=u[o],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===t||s===i))return a()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],s=c.getAttribute("data-href");if(s===t||s===i)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var t=a&&a.target&&a.target.src||i,u=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=t,delete r[e],m.parentNode.removeChild(m),n(u)},m.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){r[e]=0})));var t=i[e];if(0!==t)if(t)a.push(t[2]);else{var u=new Promise((function(a,n){t=i[e]=[a,n]}));a.push(t[2]=u);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=o(e);var d=new Error;c=function(a){s.onerror=s.onload=null,clearTimeout(m);var n=i[e];if(0!==n){if(n){var t=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+t+": "+r+")",d.name="ChunkLoadError",d.type=t,d.request=r,n[1](d)}i[e]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(a)},l.m=e,l.c=t,l.d=function(e,a,n){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)l.d(n,t,function(a){return e[a]}.bind(null,t));return n},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=a,c=c.slice();for(var d=0;d<c.length;d++)a(c[d]);var m=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"2ac3":function(e,a,n){},"49f8":function(e,a,n){var t={"./en.json":"edd4","./tr.json":"ffeb"};function r(e){var a=i(e);return n(a)}function i(e){if(!n.o(t,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t[e]}r.keys=function(){return Object.keys(t)},r.resolve=i,e.exports=r,r.id="49f8"},"4d79":function(e,a,n){"use strict";n("2ac3")},"56d7":function(e,a,n){"use strict";n.r(a);n("cadf"),n("551c"),n("f751"),n("097d");var t=n("2b0e"),r=n("dc96"),i=n.n(r),u=n("1881"),o=n.n(u),l=n("f206"),c=n.n(l),s=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},d=[],m=(n("bbc4"),n("449c"),{name:"app",components:{},data:function(){return{menuOpen:!1}},methods:{toggleMenu:function(){this.menuOpen=!this.menuOpen}}}),p=m,f=(n("4d79"),n("2877")),b=Object(f["a"])(p,s,d,!1,null,null,null),h=b.exports,k=n("8c4f"),y=(n("4917"),n("ac6a"),n("a925"));function v(){var e=n("49f8"),a={};return e.keys().forEach((function(n){var t=n.match(/([A-Za-z0-9-_]+)\./i);if(t&&t.length>1){var r=t[1];a[r]=e(n)}})),a}t["a"].use(y["a"]);var g=new y["a"]({locale:"en",fallbackLocale:"en",messages:v()});t["a"].use(k["a"]);var O=new k["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/".concat(g.locale,"/")},{path:"/:lang",component:{render:function(e){return e("router-view")}},children:[{path:"/",name:"home",component:function(){return n.e("chunk-d26f0002").then(n.bind(null,"bb51"))}},{path:"about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"games",name:"games",component:function(){return n.e("chunk-2d20811b").then(n.bind(null,"a2e9"))}},{path:"partners",name:"partners",component:function(){return n.e("chunk-2d0b5a71").then(n.bind(null,"1a8c"))}},{path:"career",name:"career",component:function(){return n.e("chunk-2d0d0a10").then(n.bind(null,"6990"))}},{path:"contact",name:"contact",component:function(){return n.e("chunk-2d210c47").then(n.bind(null,"b8fa"))}}]}]});t["a"].use(c.a),t["a"].use(i.a),t["a"].use(o.a),t["a"].config.productionTip=!1,O.beforeEach((function(e,a,n){var t=e.params.lang;t||(t="en"),g.locale=t,n()})),new t["a"]({router:O,i18n:g,render:function(e){return e(h)}}).$mount("#app")},edd4:function(e){e.exports=JSON.parse('{"nav":{"features":"Features","about":"About","games":"Games","partners":"Partners","career":"Career","contact":"Contact"},"home":{"title":"Home","content":"Lorem ipsum dolor sit amet consectetur <a href=\'#\' class=\'text-blue-600 hover:text-blue-800\'>adipisicing</a> elit. Aut dicta incidunt ea ut commodi quidem temporibus illo quia. Et itaque deleniti veniam tempore facere ipsum animi totam culpa minima vel voluptatem adipisci natus blanditiis similique sunt expedita, ex dicta doloremque repellat vitae temporibus. Quisquam quia, accusantium blanditiis architecto facilis saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde laborum ut suscipit iure aliquam sapiente doloribus exercitationem nam sint."},"about":{"title":"About","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta incidunt ea ut commodi quidem temporibus illo quia. Et itaque deleniti veniam tempore facere ipsum animi totam culpa minima vel voluptatem adipisci natus blanditiis similique sunt expedita, ex dicta doloremque repellat vitae temporibus. Quisquam quia, accusantium blanditiis architecto facilis saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad unde laborum ut suscipit iure aliquam sapiente doloribus exercitationem nam sint."}}')},ffeb:function(e){e.exports=JSON.parse('{"nav":{"features":"Özellikler","about":"Hakkımızda","games":"Oyunlar","partners":"Ortaklar","career":"İş Olanakları","contact":"İletişim"},"home":{"title":"Anasayfa","content":"Yapacakmış mıknatıslı <a href=\'#\' class=\'text-blue-600 hover:text-blue-800\'>okuma</a> sayfası gülüyorum de layıkıyla beğendim gül duyulmamış hesap makinesi yazın. Dışarı çıktılar anlamsız masanın gül değerli olduğu için salladı düşünüyor beğendim masaya doğru cesurca yaptı beğendim salladı lakin yapacakmış. Otobüs şafak ama mutlu oldular beğendim hesap makinesi sıradanlıktan un değirmeni lakin çakıl. Tv yazın filmini mi cezbelendi sarmal açılmadan dolayı sarmal açılmadan dolayı bundan dolayı mutlu oldular bilgiyasayarı ama sıla batarya kutusu değerli olduğu için. Ama türemiş sıfat koyun yapacakmış göze çarpan bilgiyasayarı ekşili çorba mutlu oldular masaya doğru öyle ki sokaklarda de göze çarpan tv. Uzattı eve doğru sıradanlıktan tv gitti göze çarpan sevindi salladı şafak layıkıyla. Kapının kulu batarya kutusu eve doğru biber hesap makinesi adanaya telefonu de batarya kutusu."},"about":{"title":"Hakkımızda","content":"Yapacakmış mıknatıslı okuma sayfası gülüyorum de layıkıyla beğendim gül duyulmamış hesap makinesi yazın. Dışarı çıktılar anlamsız masanın gül değerli olduğu için salladı düşünüyor beğendim masaya doğru cesurca yaptı beğendim salladı lakin yapacakmış. Otobüs şafak ama mutlu oldular beğendim hesap makinesi sıradanlıktan un değirmeni lakin çakıl. Tv yazın filmini mi cezbelendi sarmal açılmadan dolayı sarmal açılmadan dolayı bundan dolayı mutlu oldular bilgiyasayarı ama sıla batarya kutusu değerli olduğu için. Ama türemiş sıfat koyun yapacakmış göze çarpan bilgiyasayarı ekşili çorba mutlu oldular masaya doğru öyle ki sokaklarda de göze çarpan tv. Uzattı eve doğru sıradanlıktan tv gitti göze çarpan sevindi salladı şafak layıkıyla. Kapının kulu batarya kutusu eve doğru biber hesap makinesi adanaya telefonu de batarya kutusu."}}')}});
//# sourceMappingURL=app.ce0776bd.js.map