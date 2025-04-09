"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{4556:(k,x,r)=>{r.d(x,{c:()=>s});var v=r(4261),e=r(1086),g=r(8607);const s=(a,t)=>{let i,n;const h=(_,b,M)=>{if(typeof document>"u")return;const w=document.elementFromPoint(_,b);w&&t(w)&&!w.disabled?w!==i&&(c(),p(w,M)):c()},p=(_,b)=>{i=_,n||(n=i);const M=i;(0,v.w)(()=>M.classList.add("ion-activated")),b()},c=(_=!1)=>{if(!i)return;const b=i;(0,v.w)(()=>b.classList.remove("ion-activated")),_&&n!==i&&i.click(),i=void 0};return(0,g.createGesture)({el:a,gestureName:"buttonActiveDrag",threshold:0,onStart:_=>h(_.currentX,_.currentY,e.a),onMove:_=>h(_.currentX,_.currentY,e.b),onEnd:()=>{c(!0),(0,e.h)(),n=void 0}})}},8438:(k,x,r)=>{r.d(x,{g:()=>e});var v=r(8476);const e=()=>{if(void 0!==v.w)return v.w.Capacitor}},5572:(k,x,r)=>{r.d(x,{c:()=>v,i:()=>e});const v=(g,s,a)=>"function"==typeof a?a(g,s):"string"==typeof a?g[a]===s[a]:Array.isArray(s)?s.includes(g):g===s,e=(g,s,a)=>void 0!==g&&(Array.isArray(g)?g.some(t=>v(t,s,a)):v(g,s,a))},3351:(k,x,r)=>{r.d(x,{g:()=>v});const v=(t,i,n,h,p)=>g(t[1],i[1],n[1],h[1],p).map(c=>e(t[0],i[0],n[0],h[0],c)),e=(t,i,n,h,p)=>p*(3*i*Math.pow(p-1,2)+p*(-3*n*p+3*n+h*p))-t*Math.pow(p-1,3),g=(t,i,n,h,p)=>a((h-=p)-3*(n-=p)+3*(i-=p)-(t-=p),3*n-6*i+3*t,3*i-3*t,t).filter(_=>_>=0&&_<=1),a=(t,i,n,h)=>{if(0===t)return((t,i,n)=>{const h=i*i-4*t*n;return h<0?[]:[(-i+Math.sqrt(h))/(2*t),(-i-Math.sqrt(h))/(2*t)]})(i,n,h);const p=(3*(n/=t)-(i/=t)*i)/3,c=(2*i*i*i-9*i*n+27*(h/=t))/27;if(0===p)return[Math.pow(-c,1/3)];if(0===c)return[Math.sqrt(-p),-Math.sqrt(-p)];const _=Math.pow(c/2,2)+Math.pow(p/3,3);if(0===_)return[Math.pow(c/2,.5)-i/3];if(_>0)return[Math.pow(-c/2+Math.sqrt(_),1/3)-Math.pow(c/2+Math.sqrt(_),1/3)-i/3];const b=Math.sqrt(Math.pow(-p/3,3)),M=Math.acos(-c/(2*Math.sqrt(Math.pow(-p/3,3)))),w=2*Math.pow(b,1/3);return[w*Math.cos(M/3)-i/3,w*Math.cos((M+2*Math.PI)/3)-i/3,w*Math.cos((M+4*Math.PI)/3)-i/3]}},7464:(k,x,r)=>{r.d(x,{i:()=>v});const v=e=>e&&""!==e.dir?"rtl"===e.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(k,x,r)=>{r.r(x),r.d(x,{startFocusVisible:()=>s});const v="ion-focused",g=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],s=a=>{let t=[],i=!0;const n=a?a.shadowRoot:document,h=a||document.body,p=P=>{t.forEach(l=>l.classList.remove(v)),P.forEach(l=>l.classList.add(v)),t=P},c=()=>{i=!1,p([])},_=P=>{i=g.includes(P.key),i||p([])},b=P=>{if(i&&void 0!==P.composedPath){const l=P.composedPath().filter(d=>!!d.classList&&d.classList.contains("ion-focusable"));p(l)}},M=()=>{n.activeElement===h&&p([])};return n.addEventListener("keydown",_),n.addEventListener("focusin",b),n.addEventListener("focusout",M),n.addEventListener("touchstart",c,{passive:!0}),n.addEventListener("mousedown",c),{destroy:()=>{n.removeEventListener("keydown",_),n.removeEventListener("focusin",b),n.removeEventListener("focusout",M),n.removeEventListener("touchstart",c),n.removeEventListener("mousedown",c)},setFocus:p}}},1086:(k,x,r)=>{r.d(x,{I:()=>e,a:()=>i,b:()=>n,c:()=>t,d:()=>p,h:()=>h});var v=r(8438),e=function(c){return c.Heavy="HEAVY",c.Medium="MEDIUM",c.Light="LIGHT",c}(e||{});const s={getEngine(){const c=(0,v.g)();if(null!=c&&c.isPluginAvailable("Haptics"))return c.Plugins.Haptics},available(){if(!this.getEngine())return!1;const _=(0,v.g)();return"web"!==(null==_?void 0:_.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(c){const _=this.getEngine();_&&_.impact({style:c.style})},notification(c){const _=this.getEngine();_&&_.notification({type:c.type})},selection(){this.impact({style:e.Light})},selectionStart(){const c=this.getEngine();c&&c.selectionStart()},selectionChanged(){const c=this.getEngine();c&&c.selectionChanged()},selectionEnd(){const c=this.getEngine();c&&c.selectionEnd()}},a=()=>s.available(),t=()=>{a()&&s.selection()},i=()=>{a()&&s.selectionStart()},n=()=>{a()&&s.selectionChanged()},h=()=>{a()&&s.selectionEnd()},p=c=>{a()&&s.impact(c)}},909:(k,x,r)=>{r.d(x,{I:()=>t,a:()=>p,b:()=>a,c:()=>b,d:()=>w,f:()=>c,g:()=>h,i:()=>n,p:()=>M,r:()=>P,s:()=>_});var v=r(467),e=r(4920),g=r(4929);const a="ion-content",t=".ion-content-scroll-host",i=`${a}, ${t}`,n=l=>"ION-CONTENT"===l.tagName,h=function(){var l=(0,v.A)(function*(d){return n(d)?(yield new Promise(f=>(0,e.c)(d,f)),d.getScrollElement()):d});return function(f){return l.apply(this,arguments)}}(),p=l=>l.querySelector(t)||l.querySelector(i),c=l=>l.closest(i),_=(l,d)=>n(l)?l.scrollToTop(d):Promise.resolve(l.scrollTo({top:0,left:0,behavior:d>0?"smooth":"auto"})),b=(l,d,f,u)=>n(l)?l.scrollByPoint(d,f,u):Promise.resolve(l.scrollBy({top:f,left:d,behavior:u>0?"smooth":"auto"})),M=l=>(0,g.b)(l,a),w=l=>{if(n(l)){const f=l.scrollY;return l.scrollY=!1,f}return l.style.setProperty("overflow","hidden"),!0},P=(l,d)=>{n(l)?l.scrollY=d:l.style.removeProperty("overflow")}},3992:(k,x,r)=>{r.d(x,{a:()=>v,b:()=>b,c:()=>i,d:()=>M,e:()=>O,f:()=>t,g:()=>w,h:()=>g,i:()=>e,j:()=>o,k:()=>E,l:()=>n,m:()=>c,n:()=>P,o:()=>p,p:()=>a,q:()=>s,r:()=>y,s:()=>m,t:()=>_,u:()=>f,v:()=>u,w:()=>h,x:()=>l,y:()=>d});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(k,x,r)=>{r.d(x,{c:()=>s,g:()=>a});var v=r(8476),e=r(4920),g=r(4929);const s=(i,n,h)=>{let p,c;if(void 0!==v.w&&"MutationObserver"in v.w){const w=Array.isArray(n)?n:[n];p=new MutationObserver(P=>{for(const l of P)for(const d of l.addedNodes)if(d.nodeType===Node.ELEMENT_NODE&&w.includes(d.slot))return h(),void(0,e.r)(()=>_(d))}),p.observe(i,{childList:!0,subtree:!0})}const _=w=>{var P;c&&(c.disconnect(),c=void 0),c=new MutationObserver(l=>{h();for(const d of l)for(const f of d.removedNodes)f.nodeType===Node.ELEMENT_NODE&&f.slot===n&&M()}),c.observe(null!==(P=w.parentElement)&&void 0!==P?P:w,{subtree:!0,childList:!0})},M=()=>{c&&(c.disconnect(),c=void 0)};return{destroy:()=>{p&&(p.disconnect(),p=void 0),M()}}},a=(i,n,h)=>{const p=null==i?0:i.toString().length,c=t(p,n);if(void 0===h)return c;try{return h(p,n)}catch(_){return(0,g.a)("Exception in provided `counterFormatter`.",_),c}},t=(i,n)=>`${i} / ${n}`},1622:(k,x,r)=>{r.r(x),r.d(x,{KEYBOARD_DID_CLOSE:()=>a,KEYBOARD_DID_OPEN:()=>s,copyVisualViewport:()=>y,keyboardDidClose:()=>l,keyboardDidOpen:()=>w,keyboardDidResize:()=>P,resetKeyboardAssist:()=>p,setKeyboardClose:()=>M,setKeyboardOpen:()=>b,startKeyboardAssist:()=>c,trackViewportChanges:()=>u});var v=r(4379);r(8438),r(8476);const s="ionKeyboardDidShow",a="ionKeyboardDidHide";let i={},n={},h=!1;const p=()=>{i={},n={},h=!1},c=o=>{if(v.K.getEngine())_(o);else{if(!o.visualViewport)return;n=y(o.visualViewport),o.visualViewport.onresize=()=>{u(o),w()||P(o)?b(o):l(o)&&M(o)}}},_=o=>{o.addEventListener("keyboardDidShow",E=>b(o,E)),o.addEventListener("keyboardDidHide",()=>M(o))},b=(o,E)=>{d(o,E),h=!0},M=o=>{f(o),h=!1},w=()=>!h&&i.width===n.width&&(i.height-n.height)*n.scale>150,P=o=>h&&!l(o),l=o=>h&&n.height===o.innerHeight,d=(o,E)=>{const O=new CustomEvent(s,{detail:{keyboardHeight:E?E.keyboardHeight:o.innerHeight-n.height}});o.dispatchEvent(O)},f=o=>{const E=new CustomEvent(a);o.dispatchEvent(E)},u=o=>{i=Object.assign({},n),n=y(o.visualViewport)},y=o=>({width:Math.round(o.width),height:Math.round(o.height),offsetTop:o.offsetTop,offsetLeft:o.offsetLeft,pageTop:o.pageTop,pageLeft:o.pageLeft,scale:o.scale})},4379:(k,x,r)=>{r.d(x,{K:()=>s,a:()=>g});var v=r(8438),e=function(a){return a.Unimplemented="UNIMPLEMENTED",a.Unavailable="UNAVAILABLE",a}(e||{}),g=function(a){return a.Body="body",a.Ionic="ionic",a.Native="native",a.None="none",a}(g||{});const s={getEngine(){const a=(0,v.g)();if(null!=a&&a.isPluginAvailable("Keyboard"))return a.Plugins.Keyboard},getResizeMode(){const a=this.getEngine();return null!=a&&a.getResizeMode?a.getResizeMode().catch(t=>{if(t.code!==e.Unimplemented)throw t}):Promise.resolve(void 0)}}},4731:(k,x,r)=>{r.d(x,{c:()=>t});var v=r(467),e=r(8476),g=r(4379);const s=i=>{if(void 0===e.d||i===g.a.None||void 0===i)return null;const n=e.d.querySelector("ion-app");return null!=n?n:e.d.body},a=i=>{const n=s(i);return null===n?0:n.clientHeight},t=function(){var i=(0,v.A)(function*(n){let h,p,c,_;const b=function(){var d=(0,v.A)(function*(){const f=yield g.K.getResizeMode(),u=void 0===f?void 0:f.mode;h=()=>{void 0===_&&(_=a(u)),c=!0,M(c,u)},p=()=>{c=!1,M(c,u)},null==e.w||e.w.addEventListener("keyboardWillShow",h),null==e.w||e.w.addEventListener("keyboardWillHide",p)});return function(){return d.apply(this,arguments)}}(),M=(d,f)=>{n&&n(d,w(f))},w=d=>{if(0===_||_===a(d))return;const f=s(d);return null!==f?new Promise(u=>{const o=new ResizeObserver(()=>{f.clientHeight===_&&(o.disconnect(),u())});o.observe(f)}):void 0};return yield b(),{init:b,destroy:()=>{null==e.w||e.w.removeEventListener("keyboardWillShow",h),null==e.w||e.w.removeEventListener("keyboardWillHide",p),h=p=void 0},isKeyboardVisible:()=>c}});return function(h){return i.apply(this,arguments)}}()},7838:(k,x,r)=>{r.d(x,{c:()=>e});var v=r(467);const e=()=>{let g;return{lock:function(){var a=(0,v.A)(function*(){const t=g;let i;return g=new Promise(n=>i=n),void 0!==t&&(yield t),i});return function(){return a.apply(this,arguments)}}()}}},9001:(k,x,r)=>{r.d(x,{c:()=>g});var v=r(8476),e=r(4920);const g=(s,a,t)=>{let i;const n=()=>!(void 0===a()||void 0!==s.label||null===t()),p=()=>{const _=a();if(void 0===_)return;if(!n())return void _.style.removeProperty("width");const b=t().scrollWidth;if(0===b&&null===_.offsetParent&&void 0!==v.w&&"IntersectionObserver"in v.w){if(void 0!==i)return;const M=i=new IntersectionObserver(w=>{1===w[0].intersectionRatio&&(p(),M.disconnect(),i=void 0)},{threshold:.01,root:s});M.observe(_)}else _.style.setProperty("width",.75*b+"px")};return{calculateNotchWidth:()=>{n()&&(0,e.r)(()=>{p()})},destroy:()=>{i&&(i.disconnect(),i=void 0)}}}},7895:(k,x,r)=>{r.d(x,{S:()=>e});const e={bubbles:{dur:1e3,circles:9,fn:(g,s,a)=>{const t=g*s/a-g+"ms",i=2*Math.PI*s/a;return{r:5,style:{top:32*Math.sin(i)+"%",left:32*Math.cos(i)+"%","animation-delay":t}}}},circles:{dur:1e3,circles:8,fn:(g,s,a)=>{const t=s/a,i=g*t-g+"ms",n=2*Math.PI*t;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(g,s)=>({r:6,style:{left:32-32*s+"%","animation-delay":-110*s+"ms"}})},lines:{dur:1e3,lines:8,fn:(g,s,a)=>({y1:14,y2:26,style:{transform:`rotate(${360/a*s+(s<a/2?180:-180)}deg)`,"animation-delay":g*s/a-g+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(g,s,a)=>({y1:12,y2:20,style:{transform:`rotate(${360/a*s+(s<a/2?180:-180)}deg)`,"animation-delay":g*s/a-g+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(g,s,a)=>({y1:17,y2:29,style:{transform:`rotate(${30*s+(s<6?180:-180)}deg)`,"animation-delay":g*s/a-g+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(g,s,a)=>({y1:12,y2:20,style:{transform:`rotate(${30*s+(s<6?180:-180)}deg)`,"animation-delay":g*s/a-g+"ms"}})}}},7166:(k,x,r)=>{r.r(x),r.d(x,{createSwipeBackGesture:()=>a});var v=r(4920),e=r(7464),g=r(8607);r(1970);const a=(t,i,n,h,p)=>{const c=t.ownerDocument.defaultView;let _=(0,e.i)(t);const M=f=>_?-f.deltaX:f.deltaX;return(0,g.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:f=>(_=(0,e.i)(t),(f=>{const{startX:y}=f;return _?y>=c.innerWidth-50:y<=50})(f)&&i()),onStart:n,onMove:f=>{const y=M(f)/c.innerWidth;h(y)},onEnd:f=>{const u=M(f),y=c.innerWidth,o=u/y,E=(f=>_?-f.velocityX:f.velocityX)(f),O=E>=0&&(E>.2||u>y/2),R=(O?1-o:o)*y;let C=0;if(R>5){const I=R/Math.abs(E);C=Math.min(I,540)}p(O,o<=0?.01:(0,v.j)(0,o,.9999),C)}})}},2935:(k,x,r)=>{r.d(x,{w:()=>v});const v=(s,a,t)=>{if(typeof MutationObserver>"u")return;const i=new MutationObserver(n=>{t(e(n,a))});return i.observe(s,{childList:!0,subtree:!0}),i},e=(s,a)=>{let t;return s.forEach(i=>{for(let n=0;n<i.addedNodes.length;n++)t=g(i.addedNodes[n],a)||t}),t},g=(s,a)=>{if(1!==s.nodeType)return;const t=s;return(t.tagName===a.toUpperCase()?[t]:Array.from(t.querySelectorAll(a))).find(n=>n.value===t.value)}},936:(k,x,r)=>{r.r(x),r.d(x,{AccountPage:()=>M});var v=r(467),e=r(177),g=r(4341),s=r(4742),a=r(7414);const i=(0,r(5083).F3)("Share",{web:()=>r.e(1227).then(r.bind(r,1227)).then(w=>new w.ShareWeb)});var n=r(4438),h=r(2068),p=r(9568);function c(w,P){1&w&&(n.j41(0,"div"),n.nrm(1,"ion-skeleton-text",7)(2,"ion-skeleton-text",8)(3,"ion-skeleton-text",9),n.k0s()),2&w&&(n.R7$(),n.Y8G("animated",!0),n.R7$(),n.Y8G("animated",!0),n.R7$(),n.Y8G("animated",!0))}function _(w,P){if(1&w){const l=n.RV6();n.j41(0,"div")(1,"div",10)(2,"ion-item",11),n.nrm(3,"ion-icon",12),n.j41(4,"ion-label")(5,"span",13),n.EFF(6),n.k0s(),n.j41(7,"small",14),n.EFF(8),n.k0s()()()(),n.nrm(9,"br"),n.j41(10,"ion-row",15)(11,"ion-col",16),n.nrm(12,"ion-icon",17),n.j41(13,"small"),n.EFF(14),n.k0s()(),n.j41(15,"ion-col",18),n.nrm(16,"ion-icon",19),n.j41(17,"small"),n.EFF(18),n.k0s()(),n.j41(19,"ion-col",20),n.bIt("click",function(){n.eBV(l);const f=n.XpG(2);return n.Njj(f.shareApp())}),n.nrm(20,"ion-icon",21),n.j41(21,"small"),n.EFF(22),n.k0s()()(),n.nrm(23,"br"),n.j41(24,"ion-list")(25,"ion-list-header")(26,"ion-label",22),n.EFF(27),n.k0s()(),n.j41(28,"ion-item",23)(29,"ion-label",22),n.EFF(30),n.k0s(),n.nrm(31,"ion-icon",24),n.k0s(),n.j41(32,"ion-item",25)(33,"ion-label",22),n.EFF(34),n.j41(35,"span",26),n.EFF(36),n.k0s()(),n.nrm(37,"ion-icon",27),n.k0s(),n.j41(38,"ion-item",28)(39,"ion-label",22),n.EFF(40),n.k0s(),n.nrm(41,"ion-icon",29),n.k0s(),n.j41(42,"ion-item",30),n.bIt("click",function(){n.eBV(l);const f=n.XpG(2);return n.Njj(f.deleteAccount())}),n.j41(43,"ion-label",22),n.EFF(44),n.k0s(),n.nrm(45,"ion-icon",31),n.k0s(),n.j41(46,"ion-item",32),n.bIt("click",function(){n.eBV(l);const f=n.XpG(2);return n.Njj(f.logout())}),n.j41(47,"ion-label",22),n.EFF(48),n.k0s(),n.nrm(49,"ion-icon",33),n.k0s()()()}if(2&w){const l=n.XpG(2);n.R7$(6),n.JRh(l.data.user.name),n.R7$(2),n.JRh(l.data.user.email),n.R7$(6),n.JRh(l.text.wallet),n.R7$(4),n.JRh(l.text.subscription),n.R7$(4),n.JRh(l.text.ref_title),n.R7$(5),n.JRh(l.text.my_account),n.R7$(3),n.JRh(l.text.account_setting),n.R7$(4),n.JRh(l.text.wallet_balance),n.R7$(2),n.Lme("",l.data.admin.currency,"",l.data.user.wallet,""),n.R7$(4),n.JRh(l.text.address_book),n.R7$(4),n.JRh(l.text.delete_account),n.R7$(4),n.JRh(l.text.logout)}}function b(w,P){if(1&w&&(n.j41(0,"ion-content",4)(1,"ion-grid",5),n.DNE(2,c,4,3,"div",6)(3,_,50,13,"div",6),n.k0s()()),2&w){const l=n.XpG();n.R7$(),n.Y8G("fixed",!0),n.R7$(),n.Y8G("ngIf",!l.data),n.R7$(),n.Y8G("ngIf",l.data)}}let M=(()=>{var w;class P{constructor(d,f){this.server=d,this.otherService=f,this.fakeData=[1,2,3,4,5,6],this.isMobile=!1;const u=localStorage.getItem("app_lang");null!==u&&(this.text=JSON.parse(u),this.text=this.text.text),this.checkScreenSize()}onResize(d){this.checkScreenSize()}checkScreenSize(){this.isMobile=window.innerWidth<=768}ngOnInit(){}ionViewDidEnter(){this.otherService.statusBar("#ffffff",2),this.loadData()}loadData(){var d=this;return(0,v.A)(function*(){d.server.account().subscribe(f=>{d.data=f.data,console.log(d.data)})})()}logout(){var d=this;return(0,v.A)(function*(){d.otherService.confirm().then(f=>{"ok"===f&&(localStorage.removeItem("user_id"),localStorage.removeItem("user_data"),d.otherService.triggerLoadData.emit(),d.otherService.redirect("tabs/home"))})})()}deleteAccount(){var d=this;return(0,v.A)(function*(){d.otherService.confirm().then(f=>{"ok"===f&&d.server.deleteAccount().subscribe(u=>{d.data=u.data,d.otherService.toast(d.text.account_delete),localStorage.removeItem("user_id"),localStorage.removeItem("user_data"),d.otherService.redirect("welcome")})})})()}shareApp(){var d=this;return(0,v.A)(function*(){const u=`Get \u20b9200.00 instant e-Cash by signing up on The Daily Fruit! \u{1f96d}\r\n\r\nUse my referral code: *${d.data.user.rcode}*\r\n\r\nJoin now and enjoy fresh fruits delivered to your doorstep.\r\n\r\n\u{1f517} Visit: https://admin.thedailyfruit.in/welcome`;yield i.share({title:"Get \u20b9200 instantly on The Daily Fruit",text:u,dialogTitle:"Invite Friends to The Daily Fruit"})})()}}return(w=P).\u0275fac=function(d){return new(d||w)(n.rXU(h.Z),n.rXU(p.G))},w.\u0275cmp=n.VBU({type:w,selectors:[["app-account"]],hostBindings:function(d,f){1&d&&n.bIt("resize",function(y){return f.onResize(y)},!1,n.tSv)},decls:5,vars:1,consts:[[1,"ion-no-border"],["color","dark"],["slot","start"],["class","ion-padding",4,"ngIf"],[1,"ion-padding"],[3,"fixed"],[4,"ngIf"],[1,"sek1",3,"animated"],[1,"sek2",3,"animated"],[1,"sek3",3,"animated"],[1,"info"],["lines","none"],["name","person-circle","slot","start","color","dark",2,"font-size","60px"],[1,"title"],[2,"display","block","margin-top","5px"],[1,"topBtn"],["size","4","routerLink","/wallet"],["name","wallet","color","dark"],["size","4","routerLink","/tabs/subscription"],["name","document","color","dark"],["size","4",3,"click"],["name","paper-plane","color","dark"],[1,"item-label"],["detail","","routerLink","/setting"],["name","settings","slot","start","color","dark"],["routerLink","/wallet"],[2,"float","right","font-size","14px","color","green"],["name","wallet","slot","start","color","dark"],["detail","","routerLink","/book"],["name","book","slot","start","color","dark"],["detail","",2,"cursor","pointer",3,"click"],["name","trash","slot","start","color","dark"],["detail","","lines","none",2,"cursor","pointer",3,"click"],["name","log-out","slot","start","color","dark"]],template:function(d,f){1&d&&(n.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),n.nrm(3,"ion-menu-button",1),n.k0s()()(),n.DNE(4,b,4,3,"ion-content",3)),2&d&&(n.R7$(4),n.Y8G("ngIf",f.text))},dependencies:[s.bv,s.QW,s.hU,s.W9,s.lO,s.eU,s.iq,s.uz,s.he,s.nf,s.AF,s.MC,s.ln,s.ds,s.ai,s.N7,e.MD,e.bT,g.YN,a.Wk],styles:[".topHeader[_ngcontent-%COMP%]{height:160px;background:var(--ion-color-primary)}ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}ion-item[_ngcontent-%COMP%]{border-radius:10px;margin-top:10px;font-size:16px}ion-list[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px}.item-label[_ngcontent-%COMP%]{color:#000}.title[_ngcontent-%COMP%]{font-size:24px;font-weight:500}.info[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--min-height: 100px;--padding-start: 20px;--padding-end: 20px}.topBtn[_ngcontent-%COMP%]{text-align:center;border-radius:10px;padding:10px;background-color:#fff}.topBtns[_ngcontent-%COMP%]{margin-top:10px}ion-searchbar[_ngcontent-%COMP%]{margin-top:5px}.topBtn[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{background:#f3f3f3;padding:15px;border-radius:50%;font-size:25px}small[_ngcontent-%COMP%]{margin-top:5px;display:block;color:#000!important}.topBtn[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{cursor:pointer}.sek1[_ngcontent-%COMP%]{width:96%;height:100px;border-radius:10px;margin-left:2%;margin-top:8%}.sek2[_ngcontent-%COMP%]{width:96%;height:100px;border-radius:10px;margin-left:2%;margin-top:5%}.sek3[_ngcontent-%COMP%]{width:96%;height:500px;border-radius:10px;margin-left:2%;margin-top:10%}ion-item[_ngcontent-%COMP%]{--background: white !important;color:#000!important}"]}),P})()},6744:(k,x,r)=>{r.r(x),r.d(x,{SubscriptionPage:()=>y});var v=r(467),e=r(177),g=r(4341),s=r(4742),a=r(7414),t=r(4438),i=r(2068),n=r(9568);function h(o,E){if(1&o&&(t.j41(0,"ion-title")(1,"a",5),t.EFF(2),t.k0s()()),2&o){const m=t.XpG();t.R7$(2),t.JRh(m.text.go_back)}}function p(o,E){1&o&&(t.j41(0,"div",9),t.nrm(1,"ion-skeleton-text",10),t.k0s()),2&o&&(t.R7$(),t.Y8G("animated",!0))}function c(o,E){if(1&o&&(t.j41(0,"div",6),t.DNE(1,p,2,1,"div",8),t.k0s()),2&o){const m=t.XpG(2);t.R7$(),t.Y8G("ngForOf",m.fakeData)}}function _(o,E){if(1&o&&(t.j41(0,"div")(1,"p",11),t.EFF(2),t.k0s(),t.nrm(3,"br"),t.j41(4,"ion-button",12),t.EFF(5),t.k0s()()),2&o){const m=t.XpG(2);t.R7$(2),t.JRh(m.text.no_sub),t.R7$(3),t.JRh(m.text.lets_start)}}function b(o,E){if(1&o&&(t.j41(0,"ion-col",20)(1,"span",21),t.EFF(2),t.k0s(),t.EFF(3),t.j41(4,"span",22),t.EFF(5),t.k0s(),t.EFF(6),t.k0s()),2&o){const m=t.XpG().$implicit,O=t.XpG(3);t.R7$(2),t.JRh(O.text.start),t.R7$(),t.SpI(" : ",m.start_date," | "),t.R7$(2),t.JRh(O.text.valid),t.R7$(),t.SpI(" : ",m.end_date,"")}}function M(o,E){if(1&o&&(t.j41(0,"ion-col",23),t.EFF(1),t.j41(2,"b"),t.EFF(3),t.k0s()()),2&o){const m=t.XpG().$implicit,O=t.XpG(3);t.R7$(),t.SjE("",O.text.sub_price," : ",m.currency,"",m.price," x ",m.qty,"qty x ",m.days.length,"days :\xa0"),t.R7$(2),t.Lme("",m.currency,"",m.total,"")}}function w(o,E){if(1&o&&(t.j41(0,"ion-col",20)(1,"span",21),t.EFF(2,"Order Placed"),t.k0s(),t.EFF(3),t.k0s()),2&o){const m=t.XpG().$implicit;t.R7$(3),t.SpI(" : ",m.created_at,"")}}function P(o,E){if(1&o&&(t.j41(0,"ion-col",23),t.EFF(1),t.j41(2,"b"),t.EFF(3),t.k0s()()),2&o){const m=t.XpG().$implicit,O=t.XpG(3);t.R7$(),t.LHq("",O.text.sub_price," : ",m.currency,"",m.price," x ",m.qty,"qty :\xa0"),t.R7$(2),t.Lme("",m.currency,"",m.total,"")}}function l(o,E){if(1&o){const m=t.RV6();t.j41(0,"ion-button",24),t.bIt("click",function(){t.eBV(m);const D=t.XpG().$implicit,R=t.XpG(3);return t.Njj(R.detail(D))}),t.EFF(1),t.k0s()}if(2&o){const m=t.XpG(4);t.R7$(),t.JRh(m.text.managesub)}}function d(o,E){if(1&o&&(t.j41(0,"ion-row")(1,"ion-col",14)(2,"span",15),t.EFF(3),t.k0s(),t.j41(4,"span",16),t.EFF(5),t.k0s()(),t.DNE(6,b,7,4,"ion-col",17)(7,M,4,7,"ion-col",18)(8,w,4,1,"ion-col",17)(9,P,4,6,"ion-col",18)(10,l,2,1,"ion-button",19),t.k0s()),2&o){const m=E.$implicit;t.R7$(3),t.JRh(m.store_name),t.R7$(2),t.JRh(m.item),t.R7$(),t.Y8G("ngIf",m.subscribed_item),t.R7$(),t.Y8G("ngIf",m.subscribed_item),t.R7$(),t.Y8G("ngIf",!m.subscribed_item),t.R7$(),t.Y8G("ngIf",!m.subscribed_item),t.R7$(),t.Y8G("ngIf",m.subscribed_item)}}function f(o,E){if(1&o&&(t.j41(0,"div")(1,"small"),t.EFF(2),t.k0s(),t.DNE(3,d,11,7,"ion-row",13),t.k0s()),2&o){const m=t.XpG(2);t.R7$(2),t.JRh(m.text.manage_sub),t.R7$(),t.Y8G("ngForOf",m.data)}}function u(o,E){if(1&o&&(t.j41(0,"ion-content",6)(1,"ion-grid",7),t.DNE(2,c,2,1,"div",4)(3,_,6,2,"div",3)(4,f,4,2,"div",3),t.k0s()()),2&o){const m=t.XpG();t.R7$(),t.Y8G("fixed",!0),t.R7$(),t.Y8G("ngIf",!m.data),t.R7$(),t.Y8G("ngIf",m.data&&0==m.data.length),t.R7$(),t.Y8G("ngIf",m.data&&m.data.length>0)}}let y=(()=>{var o;class E{constructor(O,D,R){this.server=O,this.otherService=D,this.router=R,this.fakeData=[1,2,3,4,5,6];const C=localStorage.getItem("app_lang");null!==C&&(this.text=JSON.parse(C),this.text=this.text.text)}ngOnInit(){}ionViewDidEnter(){this.loadData()}loadData(){var O=this;return(0,v.A)(function*(){O.server.subscription().subscribe(D=>{O.data=D.data})})()}detail(O){var D=this;return(0,v.A)(function*(){localStorage.setItem("sub_data",JSON.stringify(O)),D.router.navigate(["/dates"]).then(()=>{window.location.reload()})})()}}return(o=E).\u0275fac=function(O){return new(O||o)(t.rXU(i.Z),t.rXU(n.G),t.rXU(a.Ix))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-subscription"]],decls:6,vars:2,consts:[[1,"ion-no-border"],["color","dark"],["slot","start"],[4,"ngIf"],["class","ion-padding",4,"ngIf"],["routerLink","/tabs/home",2,"float","right","font-size","14px","color","white !important","margin-top","5px"],[1,"ion-padding"],[3,"fixed"],["style","margin-bottom: 10%;",4,"ngFor","ngForOf"],[2,"margin-bottom","10%"],[1,"sek1",3,"animated"],["align","center"],["color","dark","expand","block","mode","ios","routerLink","/tabs/home","routerDirection","forward"],[4,"ngFor","ngForOf"],["size","12",1,"item"],[1,"sname"],[1,"oitem"],["size","12","class","start",4,"ngIf"],["size","12","class","price",4,"ngIf"],["color","dark","mode","ios","size","small","style","margin-top: 10px;",3,"click",4,"ngIf"],["size","12",1,"start"],[2,"color","green"],[2,"color","red"],["size","12",1,"price"],["color","dark","mode","ios","size","small",2,"margin-top","10px",3,"click"]],template:function(O,D){1&O&&(t.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),t.nrm(3,"ion-back-button"),t.k0s(),t.DNE(4,h,3,1,"ion-title",3),t.k0s()(),t.DNE(5,u,5,4,"ion-content",4)),2&O&&(t.R7$(4),t.Y8G("ngIf",D.text),t.R7$(),t.Y8G("ngIf",D.text))},dependencies:[s.bv,s.Jm,s.QW,s.hU,s.W9,s.lO,s.eU,s.ln,s.ds,s.BC,s.ai,s.el,s.N7,s.oY,e.MD,e.Sq,e.bT,g.YN,a.Wk],styles:["ion-content[_ngcontent-%COMP%]{--background:var(--ion-color-light)}ion-row[_ngcontent-%COMP%]{background-color:#fff;border-radius:10px;padding:10px;margin-top:20px}ion-badge[_ngcontent-%COMP%]{margin:2px}ion-card[_ngcontent-%COMP%]{width:98%;margin-left:1%}ion-card-title[_ngcontent-%COMP%]{font-size:18px}.sek1[_ngcontent-%COMP%]{width:100%;height:80px;border-radius:10px}.item[_ngcontent-%COMP%]{border-bottom:1px solid #e5e5e5;padding:10px 0}.start[_ngcontent-%COMP%]{font-size:14px;border-bottom:1px solid #e5e5e5;padding:15px 0}.price[_ngcontent-%COMP%]{font-size:14px;padding:10px 0}.oitem[_ngcontent-%COMP%]{font-size:18px;font-weight:700;display:block;margin-top:10px}.type[_ngcontent-%COMP%]{float:right;font-size:14px}.desc[_ngcontent-%COMP%]{display:block;margin-top:5px}.rate[_ngcontent-%COMP%]{margin-top:10px;margin-left:10%}.sname[_ngcontent-%COMP%]{font-size:14px;color:gray}p[_ngcontent-%COMP%], div[_ngcontent-%COMP%]{color:#000!important}"]}),E})()},4816:(k,x,r)=>{r.r(x),r.d(x,{ViewPage:()=>f});var v=r(467),e=r(4438),g=r(2068),s=r(9568),a=r(7414),t=r(177),i=r(4742);function n(u,y){if(1&u&&(e.j41(0,"ion-title"),e.EFF(1),e.k0s()),2&u){const o=e.XpG();e.R7$(),e.JRh(o.title)}}function h(u,y){1&u&&(e.j41(0,"div",7)(1,"ion-grid",8),e.nrm(2,"ion-skeleton-text",9),e.j41(3,"ion-row")(4,"ion-col",10),e.nrm(5,"ion-skeleton-text",11),e.k0s(),e.j41(6,"ion-col",10),e.nrm(7,"ion-skeleton-text",11),e.k0s()(),e.j41(8,"ion-row")(9,"ion-col",10),e.nrm(10,"ion-skeleton-text",11),e.k0s(),e.j41(11,"ion-col",10),e.nrm(12,"ion-skeleton-text",11),e.k0s()()()()),2&u&&(e.R7$(),e.Y8G("fixed",!0),e.R7$(),e.Y8G("animated",!0),e.R7$(3),e.Y8G("animated",!0),e.R7$(2),e.Y8G("animated",!0),e.R7$(3),e.Y8G("animated",!0),e.R7$(2),e.Y8G("animated",!0))}function p(u,y){if(1&u&&(e.j41(0,"div",5),e.DNE(1,h,13,6,"div",6),e.k0s()),2&u){const o=e.XpG(2);e.R7$(),e.Y8G("ngForOf",o.fakeData)}}function c(u,y){if(1&u&&(e.j41(0,"ion-badge",23),e.nrm(1,"ion-icon",24),e.EFF(2),e.k0s()),2&u){const o=e.XpG().$implicit,E=e.XpG(3);e.R7$(2),e.Lme(" ",o.subscribe," ",E.text.subscribed,"")}}function _(u,y){if(1&u&&(e.j41(0,"ion-badge",25),e.EFF(1),e.k0s()),2&u){const o=e.XpG(4);e.R7$(),e.JRh(o.text.out_of_delivery)}}function b(u,y){if(1&u&&(e.j41(0,"ion-badge",26),e.nrm(1,"ion-icon",27),e.EFF(2),e.k0s()),2&u){const o=e.XpG().$implicit;e.R7$(2),e.SpI(" ",o.rating,"")}}function M(u,y){if(1&u&&(e.j41(0,"span"),e.EFF(1),e.k0s()),2&u){const o=e.XpG().$implicit,E=e.XpG(3);e.R7$(),e.Lme("",E.text.max_delivery," ",o.max," km")}}function w(u,y){if(1&u&&(e.j41(0,"span"),e.EFF(1),e.k0s()),2&u){const o=e.XpG(4);e.R7$(),e.JRh(o.text.all_area)}}function P(u,y){if(1&u&&(e.j41(0,"ion-col",13)(1,"ion-card",14),e.nrm(2,"img",15),e.DNE(3,c,3,2,"ion-badge",16)(4,_,2,1,"ion-badge",17),e.j41(5,"ion-card-content",18)(6,"span",19),e.EFF(7),e.k0s(),e.DNE(8,b,3,1,"ion-badge",20),e.j41(9,"span",21),e.DNE(10,M,2,2,"span",3)(11,w,2,1,"span",3),e.j41(12,"small",22),e.EFF(13),e.k0s()()()()()),2&u){const o=y.$implicit,E=e.XpG(3);e.Y8G("size",E.isMobile?12:4),e.R7$(),e.Mz_("routerLink","/item/",o.id,""),e.R7$(),e.HbH(o.deliver?"none":"gray"),e.FS9("src",o.img,e.B4B),e.R7$(),e.Y8G("ngIf",o.deliver&&o.subscribe>0),e.R7$(),e.Y8G("ngIf",!o.deliver),e.R7$(3),e.JRh(o.name),e.R7$(),e.Y8G("ngIf",o.rating),e.R7$(2),e.Y8G("ngIf",o.max>0),e.R7$(),e.Y8G("ngIf",0==o.max),e.R7$(2),e.E5c("",o.currency,"",o.per_person," ",E.text.per_person,"")}}function l(u,y){if(1&u&&(e.j41(0,"div")(1,"ion-grid",8)(2,"ion-row"),e.DNE(3,P,14,15,"ion-col",12),e.k0s()()()),2&u){const o=e.XpG(2);e.R7$(),e.Y8G("fixed",!0),e.R7$(2),e.Y8G("ngForOf",o.data)}}function d(u,y){if(1&u&&(e.j41(0,"ion-content"),e.DNE(1,p,2,1,"div",4)(2,l,4,2,"div",3),e.k0s()),2&u){const o=e.XpG();e.R7$(),e.Y8G("ngIf",!o.data),e.R7$(),e.Y8G("ngIf",o.data)}}let f=(()=>{var u;class y{constructor(E,m,O){this.server=E,this.otherService=m,this.route=O,this.fakeData=[1,2,3,4,5,6,7],this.isMobile=!1,this.type=this.route.snapshot.paramMap.get("type");const D=localStorage.getItem("app_lang");null!==D&&(this.text=JSON.parse(D),this.text=this.text.text),this.title="trend"==this.type?this.text.trending_store:"new"==this.type?this.text.new_arrive:"random"==this.type?this.text.recomended:this.type,this.checkScreenSize()}onResize(E){this.checkScreenSize()}checkScreenSize(){this.isMobile=window.innerWidth<=768}ngOnInit(){}ionViewDidEnter(){this.loadData()}loadData(){var E=this;return(0,v.A)(function*(){E.server.view(E.type).subscribe(m=>{E.data=m.data})})()}}return(u=y).\u0275fac=function(E){return new(E||u)(e.rXU(g.Z),e.rXU(s.G),e.rXU(a.nX))},u.\u0275cmp=e.VBU({type:u,selectors:[["app-view"]],hostBindings:function(E,m){1&E&&e.bIt("resize",function(D){return m.onResize(D)},!1,e.tSv)},standalone:!1,decls:6,vars:2,consts:[[1,"ion-no-border"],["color","dark"],["slot","start"],[4,"ngIf"],["class","ion-padding",4,"ngIf"],[1,"ion-padding"],["style","margin-bottom: 10%;",4,"ngFor","ngForOf"],[2,"margin-bottom","10%"],[3,"fixed"],[1,"sekTitle",3,"animated"],["size","6"],[1,"sek",3,"animated"],[3,"size",4,"ngFor","ngForOf"],[3,"size"],["mode","ios","routerDirection","forward",3,"routerLink"],[3,"src"],["class","badgeRow","color","secondary",4,"ngIf"],["class","badgeRow","color","danger",4,"ngIf"],[2,"padding","5px 10px"],[1,"sname"],["style","float:right","color","dark",4,"ngIf"],[2,"margin-top","5px","display","block"],[2,"float","right","margin-top","5px"],["color","secondary",1,"badgeRow"],["name","bookmark"],["color","danger",1,"badgeRow"],["color","dark",2,"float","right"],["name","star"]],template:function(E,m){1&E&&(e.j41(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e.nrm(3,"ion-back-button"),e.k0s(),e.DNE(4,n,2,1,"ion-title",3),e.k0s()(),e.DNE(5,d,3,2,"ion-content",3)),2&E&&(e.R7$(4),e.Y8G("ngIf",m.title),e.R7$(),e.Y8G("ngIf",m.text))},dependencies:[t.Sq,t.bT,i.In,i.QW,i.b_,i.I9,i.hU,i.W9,i.lO,i.eU,i.iq,i.ln,i.ds,i.BC,i.ai,i.el,i.N7,a.Wk],encapsulation:2}),y})()}}]);