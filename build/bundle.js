var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function i(t,e,n,s){if(t){const r=u(t,e,n,s);return t[0](r)}}function u(t,e,n,s){return t[1]&&s?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](s(e))):n.ctx}function a(t,e,n,s,r,o,l){const c=function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(e,s,r,o);if(c){const r=u(e,n,s,l);t.p(r,c)}}const $="undefined"!=typeof window;let f=$?()=>window.performance.now():()=>Date.now(),p=$?t=>requestAnimationFrame(t):t;const d=new Set;function m(t){d.forEach((e=>{e.c(t)||(d.delete(e),e.f())})),0!==d.size&&p(m)}function g(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function w(){return y(" ")}function b(){return y("")}function C(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e,n){t.classList[n?"add":"remove"](e)}const L=new Set;let S,T=0;function M(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-s.length;r&&(t.style.animation=s.join(", "),T-=r,T||p((()=>{T||(L.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),L.clear())})))}function H(t){S=t}function j(t){(function(){if(!S)throw new Error("Function called outside component initialization");return S})().$$.on_mount.push(t)}const R=[],q=[],E=[],P=[],A=Promise.resolve();let N=!1;function V(t){E.push(t)}let z=!1;const F=new Set;function O(){if(!z){z=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];H(e),B(e.$$)}for(H(null),R.length=0;q.length;)q.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];F.has(e)||(F.add(e),e())}E.length=0}while(R.length);for(;P.length;)P.pop()();N=!1,z=!1,F.clear()}}function B(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}let J;function D(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const G=new Set;let X;function Q(){X={r:0,c:[],p:X}}function U(){X.r||r(X.c),X=X.p}function W(t,e){t&&t.i&&(G.delete(t),t.i(e))}function I(t,e,n,s){if(t&&t.o){if(G.has(t))return;G.add(t),X.c.push((()=>{G.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}const K={duration:0};function Y(n,s,r){let l,c,i=s(n,r),u=!1,a=0;function $(){l&&M(n,l)}function g(){const{delay:s=0,duration:r=300,easing:o=e,tick:g=t,css:h}=i||K;h&&(l=function(t,e,n,s,r,o,l,c=0){const i=16.666/s;let u="{\n";for(let t=0;t<=1;t+=i){const s=e+(n-e)*o(t);u+=100*t+`%{${l(s,1-s)}}\n`}const a=u+`100% {${l(n,1-n)}}\n}`,$=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${c}`,f=t.ownerDocument;L.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(x("style")).sheet),d=f.__svelte_rules||(f.__svelte_rules={});d[$]||(d[$]=!0,p.insertRule(`@keyframes ${$} ${a}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${$} ${s}ms linear ${r}ms 1 both`,T+=1,$}(n,0,1,r,s,o,h,a++)),g(0,1);const v=f()+s,y=v+r;c&&c.abort(),u=!0,V((()=>D(n,!0,"start"))),c=function(t){let e;return 0===d.size&&p(m),{promise:new Promise((n=>{d.add(e={c:t,f:n})})),abort(){d.delete(e)}}}((t=>{if(u){if(t>=y)return g(1,0),D(n,!0,"end"),$(),u=!1;if(t>=v){const e=o((t-v)/r);g(e,1-e)}}return u}))}let h=!1;return{start(){h||(M(n),o(i)?(i=i(),(J||(J=Promise.resolve(),J.then((()=>{J=null}))),J).then(g)):g())},invalidate(){h=!1},end(){u&&($(),u=!1)}}}function Z(t){t&&t.c()}function tt(t,e,s){const{fragment:l,on_mount:c,on_destroy:i,after_update:u}=t.$$;l&&l.m(e,s),V((()=>{const e=c.map(n).filter(o);i?i.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(V)}function et(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function nt(t,e){-1===t.$$.dirty[0]&&(R.push(t),N||(N=!0,A.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function st(e,n,o,l,c,i,u=[-1]){const a=S;H(e);const $=n.props||{},f=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:s(),dirty:u,skip_bound:!1};let p=!1;if(f.ctx=o?o(e,$,((t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&nt(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!l&&l(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(v)}else f.fragment&&f.fragment.c();n.intro&&W(e.$$.fragment),tt(e,n.target,n.anchor),O()}H(a)}class rt{$destroy(){et(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ot(e){let n,s;return{c(){n=x("div"),k(n,"style",s=`transform: scaleX(${e[0]});`),k(n,"class","svelte-1r2otxf")},m(t,e){h(t,n,e)},p(t,[e]){1&e&&s!==(s=`transform: scaleX(${t[0]});`)&&k(n,"style",s)},i:t,o:t,d(t){t&&v(n)}}}function lt(t,e,n){let{progress:s=0}=e;return t.$$set=t=>{"progress"in t&&n(0,s=t.progress)},[s]}class ct extends rt{constructor(t){super(),st(this,t,lt,ot,l,{progress:0})}}const it=[];const ut=()=>Number(location.hash.substring(1))||1,at=ut(),$t=t=>{const e=new URL(location.href);e.hash=`#${t}`,history.pushState(null,`Page ${t}`,e.href)},ft=(()=>{const{subscribe:e,update:n,set:s}=function(e,n=t){let s;const r=[];function o(t){if(l(e,t)&&(e=t,s)){const t=!it.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),it.push(n,e)}if(t){for(let t=0;t<it.length;t+=2)it[t][0](it[t+1]);it.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(l,c=t){const i=[l,c];return r.push(i),1===r.length&&(s=n(o)||t),l(e),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}(at);return{subscribe:e,set:s,next:()=>n((t=>{const e=t+1;return $t(e),e})),prev:()=>n((t=>{const e=Math.max(1,t-1);return e!==t&&$t(e),e}))}})();function pt(t){let e,n;return{c(){e=x("div"),n=y(t[3]),k(e,"class","page-count svelte-iejkf0")},m(t,s){h(t,e,s),g(e,n)},p(t,e){8&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(n,t[3])},d(t){t&&v(e)}}}function dt(t){let e,n,s,l,c,u,$,f,p,d;const m=t[5].default,y=i(m,t,t[4],null);let b=!!t[2]&&pt(t);return{c(){e=x("div"),n=x("section"),y&&y.c(),s=w(),l=x("div"),c=w(),u=x("div"),$=w(),b&&b.c(),k(n,"class","slide svelte-iejkf0"),k(l,"class","left svelte-iejkf0"),_(l,"cursor",null!=t[0]),k(u,"class","right svelte-iejkf0"),_(u,"cursor",null!=t[1]),k(e,"class","wrapper svelte-iejkf0")},m(r,i){h(r,e,i),g(e,n),y&&y.m(n,null),g(e,s),g(e,l),g(e,c),g(e,u),g(e,$),b&&b.m(e,null),f=!0,p||(d=[C(l,"click",(function(){o(t[0])&&t[0].apply(this,arguments)})),C(u,"click",(function(){o(t[1])&&t[1].apply(this,arguments)}))],p=!0)},p(n,[s]){t=n,y&&y.p&&16&s&&a(y,m,t,t[4],s,null,null),1&s&&_(l,"cursor",null!=t[0]),2&s&&_(u,"cursor",null!=t[1]),t[2]?b?b.p(t,s):(b=pt(t),b.c(),b.m(e,null)):b&&(b.d(1),b=null)},i(t){f||(W(y,t),f=!0)},o(t){I(y,t),f=!1},d(t){t&&v(e),y&&y.d(t),b&&b.d(),p=!1,r(d)}}}function mt(t,e,n){let s;c(t,ft,(t=>n(3,s=t)));let{$$slots:r={},$$scope:o}=e,{onLeftClick:l}=e,{onRightClick:i}=e,{pageCount:u}=e;return t.$$set=t=>{"onLeftClick"in t&&n(0,l=t.onLeftClick),"onRightClick"in t&&n(1,i=t.onRightClick),"pageCount"in t&&n(2,u=t.pageCount),"$$scope"in t&&n(4,o=t.$$scope)},[l,i,u,s,o,r]}window.addEventListener("hashchange",(()=>ft.set(ut()))),window.addEventListener("popstate",(()=>ft.set(ut())));class gt extends rt{constructor(t){super(),st(this,t,mt,dt,l,{onLeftClick:0,onRightClick:1,pageCount:2})}}function ht(t){let e,n;const s=t[1].default,r=i(s,t,t[0],null);return{c(){e=x("div"),r&&r.c(),k(e,"class","svelte-ak8gs1")},m(t,s){h(t,e,s),r&&r.m(e,null),n=!0},p(t,[e]){r&&r.p&&1&e&&a(r,s,t,t[0],e,null,null)},i(t){n||(W(r,t),n=!0)},o(t){I(r,t),n=!1},d(t){t&&v(e),r&&r.d(t)}}}function vt(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,s]}class xt extends rt{constructor(t){super(),st(this,t,vt,ht,l,{})}}function yt(t){let e,n,s;return{c(){e=x("h1"),e.innerHTML='<img src="./svelte-logo-horizontal.svg" alt="svelte logo" class="svelte-1i68cdw"/>を説く。',n=w(),s=x("p"),s.textContent="ssssota",k(e,"class","title svelte-1i68cdw")},m(t,r){h(t,e,r),h(t,n,r),h(t,s,r)},d(t){t&&v(e),t&&v(n),t&&v(s)}}}function wt(t){let e,n;return e=new xt({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}class bt extends rt{constructor(t){super(),st(this,t,null,wt,l,{})}}function Ct(t){let e,n;const s=t[1].default,r=i(s,t,t[0],null);return{c(){e=x("div"),r&&r.c(),k(e,"class","svelte-kyckpt")},m(t,s){h(t,e,s),r&&r.m(e,null),n=!0},p(t,[e]){r&&r.p&&1&e&&a(r,s,t,t[0],e,null,null)},i(t){n||(W(r,t),n=!0)},o(t){I(r,t),n=!1},d(t){t&&v(e),r&&r.d(t)}}}function kt(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,s]}class _t extends rt{constructor(t){super(),st(this,t,kt,Ct,l,{})}}function Lt(t){let e,n,s;return{c(){e=x("h3"),e.textContent="Vue.js",n=w(),s=x("p"),s.innerHTML='<img src="./vue.png" alt="Vue result" class="svelte-1vqnppl"/>',k(s,"class","svelte-1vqnppl")},m(t,r){h(t,e,r),h(t,n,r),h(t,s,r)},d(t){t&&v(e),t&&v(n),t&&v(s)}}}function St(t){let e,n;return e=new _t({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}class Tt extends rt{constructor(t){super(),st(this,t,null,St,l,{})}}function Mt(t){let e,n,s;return{c(){e=x("h3"),e.textContent="React",n=w(),s=x("p"),s.innerHTML='<img src="./react.png" alt="React result" class="svelte-w7v5c1"/>',k(s,"class","svelte-w7v5c1")},m(t,r){h(t,e,r),h(t,n,r),h(t,s,r)},d(t){t&&v(e),t&&v(n),t&&v(s)}}}function Ht(t){let e,n;return e=new _t({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}class jt extends rt{constructor(t){super(),st(this,t,null,Ht,l,{})}}function Rt(t){let e,n,s;return{c(){e=x("h3"),e.textContent="Svelte",n=w(),s=x("p"),s.innerHTML='<img src="./svelte.png" alt="Svelte result" class="svelte-1dmuaem"/>',k(s,"class","svelte-1dmuaem")},m(t,r){h(t,e,r),h(t,n,r),h(t,s,r)},d(t){t&&v(e),t&&v(n),t&&v(s)}}}function qt(t){let e,n;return e=new _t({props:{$$slots:{default:[Rt]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}class Et extends rt{constructor(t){super(),st(this,t,null,qt,l,{})}}function Pt(t){let e,n,s,r,o;return{c(){e=x("h3"),e.textContent="早い",n=w(),s=x("p"),s.innerHTML='<img src="performance1.png" alt="Performance1" class="svelte-11d4by7"/> \n    <img src="performance2.png" alt="Performance2" class="svelte-11d4by7"/> \n    <img src="performance3.png" alt="Performance3" class="svelte-11d4by7"/>',r=w(),o=x("p"),o.innerHTML='<small><a href="https://krausest.github.io/js-framework-benchmark/current.html">https://krausest.github.io/js-framework-benchmark/current.html</a></small>',k(s,"class","image-wrapper svelte-11d4by7"),k(o,"class","link-wrapper svelte-11d4by7")},m(t,l){h(t,e,l),h(t,n,l),h(t,s,l),h(t,r,l),h(t,o,l)},d(t){t&&v(e),t&&v(n),t&&v(s),t&&v(r),t&&v(o)}}}function At(t){let e,n;return e=new _t({props:{$$slots:{default:[Pt]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}class Nt extends rt{constructor(t){super(),st(this,t,null,At,l,{})}}function Vt(t){let e,n,s,r,o,l,c;return{c(){e=x("h3"),e.textContent="小さい",n=w(),s=x("p"),s.textContent="さっきのカウンターで生成されたJS/CSSのサイズを比較",r=w(),o=x("ol"),o.innerHTML='<li class="svelte-1nwu6tl">Svelte 67.9kB</li> \n    <li class="svelte-1nwu6tl">React 476kB</li> \n    <li class="svelte-1nwu6tl">Vue.js 564kB</li>',l=w(),c=x("p"),c.textContent="規模が小さいので参考程度",k(o,"class","svelte-1nwu6tl")},m(t,i){h(t,e,i),h(t,n,i),h(t,s,i),h(t,r,i),h(t,o,i),h(t,l,i),h(t,c,i)},d(t){t&&v(e),t&&v(n),t&&v(s),t&&v(r),t&&v(o),t&&v(l),t&&v(c)}}}function zt(t){let e,n;return e=new _t({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}class Ft extends rt{constructor(t){super(),st(this,t,null,zt,l,{})}}function Ot(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function Bt(t,{delay:e=0,duration:n=400,easing:s=Ot,amount:r=5,opacity:o=0}){const l=getComputedStyle(t),c=+l.opacity,i="none"===l.filter?"":l.filter,u=c*(1-o);return{delay:e,duration:n,easing:s,css:(t,e)=>`opacity: ${c-u*e}; filter: ${i} blur(${e*r}px);`}}function Jt(e){let n,s,r,o,l,c,i,u,a,$,f;return{c(){n=x("h3"),n.textContent="なんで小さいし早いの？",s=w(),r=x("p"),r.textContent="それはね…",o=w(),l=x("h1"),l.textContent="事前にコンパイルして",i=w(),u=x("h1"),u.textContent="ランタイムを含まないから",$=w(),f=x("p"),f.innerHTML="Reactには<code>react</code>や<code>react-dom</code>がバンドルに含まれるけど、Svelteにはそれがない",k(l,"class","result svelte-7hehma"),k(u,"class","result svelte-7hehma")},m(t,e){h(t,n,e),h(t,s,e),h(t,r,e),h(t,o,e),h(t,l,e),h(t,i,e),h(t,u,e),h(t,$,e),h(t,f,e)},i(t){c||V((()=>{c=Y(l,Bt,{delay:300,duration:300}),c.start()})),a||V((()=>{a=Y(u,Bt,{delay:500,duration:300}),a.start()}))},o:t,d(t){t&&v(n),t&&v(s),t&&v(r),t&&v(o),t&&v(l),t&&v(i),t&&v(u),t&&v($),t&&v(f)}}}function Dt(t){let e,n;return e=new _t({props:{$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}class Gt extends rt{constructor(t){super(),st(this,t,null,Dt,l,{})}}function Xt(e){let n,s,r,o,l,c,i,u,a,$,f,p,d,m;return{c(){n=x("h3"),n.textContent="あれもこれも標準搭載",s=w(),r=x("ul"),o=x("li"),o.innerHTML='<p class="svelte-sbgsdt">ストア</p> \n      <ul><li>Flux...？知らない子ですね</li> \n        <li>ReduxやVuexとはおさらば！</li></ul>',l=w(),c=x("li"),c.innerHTML='<p class="svelte-sbgsdt">Scoped CSS</p>',i=w(),u=x("li"),a=x("p"),a.textContent="非同期処理",$=w(),f=x("ul"),p=x("li"),p.textContent="{#await promise}でいい感じにかける",d=w(),m=x("li"),m.innerHTML='<p class="svelte-sbgsdt">アニメーション機能</p> \n      <ul><li>さっきのページのアニメーションもSvelteの機能</li></ul>',k(o,"class","svelte-sbgsdt"),k(c,"class","svelte-sbgsdt"),k(a,"class","svelte-sbgsdt"),k(u,"class","svelte-sbgsdt"),k(m,"class","svelte-sbgsdt")},m(t,e){h(t,n,e),h(t,s,e),h(t,r,e),g(r,o),g(r,l),g(r,c),g(r,i),g(r,u),g(u,a),g(u,$),g(u,f),g(f,p),g(r,d),g(r,m)},p:t,d(t){t&&v(n),t&&v(s),t&&v(r)}}}function Qt(t){let e,n;return e=new _t({props:{$$slots:{default:[Xt]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}class Ut extends rt{constructor(t){super(),st(this,t,null,Qt,l,{})}}function Wt(t){let e,n,s,r,o,l,c,i,u,a,$,f;return{c(){e=x("h3"),e.textContent="実はこのスライドもSvelte製",n=w(),s=x("p"),s.innerHTML="GitHubでソースコード、<br/>GitHub Pagesでスライド公開してます",r=w(),o=x("p"),o.textContent="どんな感じで書けるか詳しく見たい人はここから👇",l=w(),c=x("p"),c.textContent="構成としてはSvelte+TypeScript",i=w(),u=x("p"),u.innerHTML='<a href="https://github.com/ssssota/svelte-intro-lt">https://github.com/ssssota/svelte-intro-lt</a>',a=w(),$=x("img"),k(u,"class","gh-link svelte-i184jm"),k($,"class","rightbottom svelte-i184jm"),$.src!==(f="./qr.svg")&&k($,"src","./qr.svg"),k($,"alt","QR Code")},m(t,f){h(t,e,f),h(t,n,f),h(t,s,f),h(t,r,f),h(t,o,f),h(t,l,f),h(t,c,f),h(t,i,f),h(t,u,f),h(t,a,f),h(t,$,f)},d(t){t&&v(e),t&&v(n),t&&v(s),t&&v(r),t&&v(o),t&&v(l),t&&v(c),t&&v(i),t&&v(u),t&&v(a),t&&v($)}}}function It(t){let e,n;return e=new _t({props:{$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}class Kt extends rt{constructor(t){super(),st(this,t,null,It,l,{})}}function Yt(t){let e,n,s,r,o,l,c;return{c(){e=x("h3"),e.textContent="まとめ",n=w(),s=x("p"),s.textContent="Svelteは",r=w(),o=x("ul"),o.innerHTML='<li class="svelte-sh07lw">(習得も実行も)早い！</li> \n    <li class="svelte-sh07lw">(学習コストが)安い！</li> \n    <li class="svelte-sh07lw">(高機能で)うまい！？</li>',l=w(),c=x("p"),c.textContent="みんなも明日からSvelte信者！",k(o,"class","svelte-sh07lw")},m(t,i){h(t,e,i),h(t,n,i),h(t,s,i),h(t,r,i),h(t,o,i),h(t,l,i),h(t,c,i)},d(t){t&&v(e),t&&v(n),t&&v(s),t&&v(r),t&&v(o),t&&v(l),t&&v(c)}}}function Zt(t){let e,n;return e=new _t({props:{$$slots:{default:[Yt]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}class te extends rt{constructor(t){super(),st(this,t,null,Zt,l,{})}}function ee(t){let e,n,s,r,o,l,c;return{c(){e=x("h3"),e.textContent="Svelteが熱い",n=w(),s=x("p"),s.textContent="エンジニアのフロントエンドFW満足度ランキング",r=w(),o=x("div"),o.innerHTML='<img src="./ranking.png" alt="Satisfaction ranking" class="svelte-17yi6pc"/>',l=w(),c=x("p"),c.innerHTML='<small><a href="https://2020.stateofjs.com/ja-JP/technologies/front-end-frameworks/">https://2020.stateofjs.com/ja-JP/technologies/front-end-frameworks/</a></small>',k(c,"class","link-wrapper svelte-17yi6pc")},m(t,i){h(t,e,i),h(t,n,i),h(t,s,i),h(t,r,i),h(t,o,i),h(t,l,i),h(t,c,i)},d(t){t&&v(e),t&&v(n),t&&v(s),t&&v(r),t&&v(o),t&&v(l),t&&v(c)}}}function ne(t){let e,n;return e=new _t({props:{$$slots:{default:[ee]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}class se extends rt{constructor(t){super(),st(this,t,null,ne,l,{})}}function re(t){let e,n,s;return{c(){e=x("h3"),e.textContent="お前は誰？",n=w(),s=x("ul"),s.innerHTML="<li>冨川宗太郎</li> \n    <li>@ssssotaro (ssssotaではない)</li> \n    <li>豊田高専→九工大</li> \n    <li>nanoFreaks,デンキヤギでバイト</li> \n    <li>プレシオ杯で優勝してクリスマスツリー置いていった人</li> \n    <li>JavaScript(TypeScript,Haxe)で色々やる人</li>"},m(t,r){h(t,e,r),h(t,n,r),h(t,s,r)},d(t){t&&v(e),t&&v(n),t&&v(s)}}}function oe(t){let e,n;return e=new _t({props:{$$slots:{default:[re]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}class le extends rt{constructor(t){super(),st(this,t,null,oe,l,{})}}function ce(t){let e,n,s,r,o;return{c(){e=x("h3"),e.textContent="おわりに",n=w(),s=x("ol"),s.innerHTML='<li class="svelte-h0vaaq"><p class="svelte-h0vaaq">採用活動</p> \n      <p class="svelte-h0vaaq">nanoFreaksは<span class="strike svelte-h0vaaq">僕みたいな</span>強いエンジニアを募集しています。</p></li> \n    <li class="svelte-h0vaaq"><p class="svelte-h0vaaq">就職活動</p> \n      <p class="svelte-h0vaaq">僕は技術で面白いことができる会社を探しています。</p></li>',r=w(),o=x("h1"),o.textContent="興味がある方は@ssssotaroへ！"},m(t,l){h(t,e,l),h(t,n,l),h(t,s,l),h(t,r,l),h(t,o,l)},d(t){t&&v(e),t&&v(n),t&&v(s),t&&v(r),t&&v(o)}}}function ie(t){let e,n;return e=new _t({props:{$$slots:{default:[ce]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}class ue extends rt{constructor(t){super(),st(this,t,null,ie,l,{})}}function ae(t){let e,n,s;return{c(){e=x("h1"),e.textContent="フロントエンド",n=w(),s=x("h1"),s.textContent="何で書く？",k(e,"class","svelte-gii0wp"),k(s,"class","svelte-gii0wp")},m(t,r){h(t,e,r),h(t,n,r),h(t,s,r)},d(t){t&&v(e),t&&v(n),t&&v(s)}}}function $e(t){let e,n;return e=new xt({props:{$$slots:{default:[ae]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}class fe extends rt{constructor(t){super(),st(this,t,null,$e,l,{})}}function pe(t){let e;return{c(){e=x("div"),e.innerHTML='<h3 class="svelte-os8xd5">React?</h3> \n    <p class="svelte-os8xd5">初学者には難しすぎる</p>'},m(t,n){h(t,e,n)},d(t){t&&v(e)}}}function de(t){let e,n;return e=new xt({props:{$$slots:{default:[pe]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}class me extends rt{constructor(t){super(),st(this,t,null,de,l,{})}}function ge(t){let e;return{c(){e=x("div"),e.innerHTML='<h3 class="svelte-1q28v0a">Vue.js?</h3> \n    <p class="strike svelte-1q28v0a">クソ</p> \n    <p class="svelte-1q28v0a">ViewとLogicの分離が難しい</p> \n    <p class="svelte-1q28v0a">（Vue3からはマシになったけど…）</p>'},m(t,n){h(t,e,n)},d(t){t&&v(e)}}}function he(t){let e,n;return e=new xt({props:{$$slots:{default:[ge]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}class ve extends rt{constructor(t){super(),st(this,t,null,he,l,{})}}function xe(t){let e;return{c(){e=x("div"),e.innerHTML='<h3 class="svelte-os8xd5">Angular?</h3> \n    <p class="svelte-os8xd5">誰が使ってんねん（笑）</p>'},m(t,n){h(t,e,n)},d(t){t&&v(e)}}}function ye(t){let e,n;return e=new xt({props:{$$slots:{default:[xe]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}class we extends rt{constructor(t){super(),st(this,t,null,ye,l,{})}}function be(t){let e,n;return{c(){e=x("img"),e.src!==(n="svelte-logo-horizontal.svg")&&k(e,"src","svelte-logo-horizontal.svg"),k(e,"alt","svelte logo"),k(e,"class","svelte-vkppjd")},m(t,n){h(t,e,n)},d(t){t&&v(e)}}}function Ce(t){let e,n;return e=new xt({props:{$$slots:{default:[be]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}class ke extends rt{constructor(t){super(),st(this,t,null,Ce,l,{})}}function _e(t){let e,n,s;return{c(){e=x("h3"),e.textContent="ここがいいぞSvelte",n=w(),s=x("ul"),s.innerHTML="<li>Vue.jsよりもわかりやすい！（個人の感想です）</li> \n    <li>早い！</li> \n    <li>サイズが小さい！</li> \n    <li>TypeScriptやSCSSが導入できる！</li> \n    <li>Scoped CSS標準搭載！</li> \n    <li>ストア標準搭載！</li>"},m(t,r){h(t,e,r),h(t,n,r),h(t,s,r)},d(t){t&&v(e),t&&v(n),t&&v(s)}}}function Le(t){let e,n;return e=new _t({props:{$$slots:{default:[_e]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}class Se extends rt{constructor(t){super(),st(this,t,null,Le,l,{})}}function Te(t){let e,n,s,r,o;return{c(){e=x("h3"),e.textContent="わかりやすい？",n=w(),s=x("p"),s.textContent="こんなやつを作ってみた",r=w(),o=x("p"),o.innerHTML='<img src="./example.png" alt="example" class="svelte-2alrdf"/>',k(o,"class","image-wrapper svelte-2alrdf")},m(t,l){h(t,e,l),h(t,n,l),h(t,s,l),h(t,r,l),h(t,o,l)},d(t){t&&v(e),t&&v(n),t&&v(s),t&&v(r),t&&v(o)}}}function Me(t){let e,n;return e=new _t({props:{$$slots:{default:[Te]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,[n]){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}class He extends rt{constructor(t){super(),st(this,t,null,Me,l,{})}}function je(t,e,n){const s=t.slice();return s[4]=e[n],s}function Re(t){let e,n,s=t[2],r=[];for(let e=0;e<s.length;e+=1)r[e]=Pe(je(t,s,e));const o=t=>I(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=b()},m(t,s){for(let e=0;e<r.length;e+=1)r[e].m(t,s);h(t,e,s),n=!0},p(t,n){if(4&n){let l;for(s=t[2],l=0;l<s.length;l+=1){const o=je(t,s,l);r[l]?(r[l].p(o,n),W(r[l],1)):(r[l]=Pe(o),r[l].c(),W(r[l],1),r[l].m(e.parentNode,e))}for(Q(),l=s.length;l<r.length;l+=1)o(l);U()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)W(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)I(r[t]);n=!1},d(t){!function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t),t&&v(e)}}}function qe(t){let e,n,s,r;return e=new gt({props:{onLeftClick:ft.prev,onRightClick:ft.next,$$slots:{default:[Ae]},$$scope:{ctx:t}}}),s=new ct({props:{progress:t[1]/t[2].length}}),{c(){Z(e.$$.fragment),n=w(),Z(s.$$.fragment)},m(t,o){tt(e,t,o),h(t,n,o),tt(s,t,o),r=!0},p(t,n){const r={};130&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);const o={};2&n&&(o.progress=t[1]/t[2].length),s.$set(o)},i(t){r||(W(e.$$.fragment,t),W(s.$$.fragment,t),r=!0)},o(t){I(e.$$.fragment,t),I(s.$$.fragment,t),r=!1},d(t){et(e,t),t&&v(n),et(s,t)}}}function Ee(t){let e,n,s;var r=t[4];return r&&(e=new r({})),{c(){e&&Z(e.$$.fragment),n=w()},m(t,r){e&&tt(e,t,r),h(t,n,r),s=!0},p(t,s){if(r!==(r=t[4])){if(e){Q();const t=e;I(t.$$.fragment,1,0,(()=>{et(t,1)})),U()}r?(e=new r({}),Z(e.$$.fragment),W(e.$$.fragment,1),tt(e,n.parentNode,n)):e=null}},i(t){s||(e&&W(e.$$.fragment,t),s=!0)},o(t){e&&I(e.$$.fragment,t),s=!1},d(t){e&&et(e,t),t&&v(n)}}}function Pe(t){let e,n;return e=new gt({props:{onLeftClick:void 0,onRightClick:void 0,$$slots:{default:[Ee]},$$scope:{ctx:t}}}),{c(){Z(e.$$.fragment)},m(t,s){tt(e,t,s),n=!0},p(t,n){const s={};128&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){I(e.$$.fragment,t),n=!1},d(t){et(e,t)}}}function Ae(t){let e,n,s;var r=t[2][t[1]-1];return r&&(e=new r({})),{c(){e&&Z(e.$$.fragment),n=b()},m(t,r){e&&tt(e,t,r),h(t,n,r),s=!0},p(t,s){if(r!==(r=t[2][t[1]-1])){if(e){Q();const t=e;I(t.$$.fragment,1,0,(()=>{et(t,1)})),U()}r?(e=new r({}),Z(e.$$.fragment),W(e.$$.fragment,1),tt(e,n.parentNode,n)):e=null}},i(t){s||(e&&W(e.$$.fragment,t),s=!0)},o(t){e&&I(e.$$.fragment,t),s=!1},d(t){t&&v(n),e&&et(e,t)}}}function Ne(t){let e,n,s,r,o,l;const c=[qe,Re],i=[];function u(t,e){return t[0]?1:0}return e=u(t),n=i[e]=c[e](t),{c(){n.c(),s=b()},m(n,c){i[e].m(n,c),h(n,s,c),r=!0,o||(l=C(window,"keydown",t[3]),o=!0)},p(t,[r]){let o=e;e=u(t),e===o?i[e].p(t,r):(Q(),I(i[o],1,1,(()=>{i[o]=null})),U(),n=i[e],n?n.p(t,r):(n=i[e]=c[e](t),n.c()),W(n,1),n.m(s.parentNode,s))},i(t){r||(W(n),r=!0)},o(t){I(n),r=!1},d(t){i[e].d(t),t&&v(s),o=!1,l()}}}function Ve(t,e,n){let s;c(t,ft,(t=>n(1,s=t)));const r=[bt,le,fe,me,ve,we,ke,se,Se,He,Tt,jt,Et,Nt,Ft,Gt,Ut,Kt,te,ue];let o=!1;return j((()=>{n(0,o="#list"===location.hash)})),[o,s,r,t=>{switch(t.code){case"ArrowRight":case"Space":case"Enter":ft.next();break;case"ArrowLeft":ft.prev()}}]}return new class extends rt{constructor(t){super(),st(this,t,Ve,Ne,l,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
