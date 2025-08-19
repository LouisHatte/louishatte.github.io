(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Uv=!1;var Up=Array.isArray,Fp=Array.from,aS=Object.defineProperty,es=Object.getOwnPropertyDescriptor,oS=Object.getOwnPropertyDescriptors,lS=Object.prototype,cS=Array.prototype,Fv=Object.getPrototypeOf;function Fa(n){return typeof n=="function"}const On=()=>{};function Bv(n){for(var e=0;e<n.length;e++)n[e]()}function uS(){var n,e,t=new Promise((i,r)=>{n=i,e=r});return{promise:t,resolve:n,reject:e}}const Oi=2,kv=4,rc=8,sf=16,Fi=32,sc=64,Kh=128,ha=256,bu=512,ui=1024,Qs=2048,af=4096,Xi=8192,Do=16384,Hv=32768,Lo=65536,fS=1<<19,zv=1<<20,Xa=Symbol("$state"),Vv=Symbol("legacy props"),hS=Symbol("");function Gv(n){return n===this.v}function Wv(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function dS(n,e){return n!==e}function $v(n){return!Wv(n,this.v)}function pS(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function mS(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function gS(n){throw new Error("https://svelte.dev/e/effect_orphan")}function _S(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function vS(n){throw new Error("https://svelte.dev/e/props_invalid_value")}function yS(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function xS(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function bS(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function SS(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const Bp=1,kp=2,Xv=4,ES=8,MS=16,TS=1,wS=4,AS=8,RS=16,CS=1,PS=2,IS=4,jv=1,DS=2,Cn=Symbol();function rn(n,e){var t={f:0,v:n,reactions:null,equals:Gv,version:0};return t}function dn(n){return LS(rn(n))}function Hp(n,e=!1){const t=rn(n);return e||(t.equals=$v),t}function LS(n){return Mt!==null&&(Mt.f&Oi)!==0&&(qi===null?GS([n]):qi.push(n)),n}function ze(n,e){return Mt!==null&&$S()&&(Mt.f&(Oi|sf))!==0&&(qi===null||!qi.includes(n))&&SS(),Jh(n,e)}function Jh(n,e){return n.equals(e)||(n.v=e,n.version=f0(),qv(n,Qs),ct!==null&&(ct.f&ui)!==0&&(ct.f&Fi)===0&&(Sn!==null&&Sn.includes(n)?(sr(ct,Qs),df(ct)):ts===null?WS([n]):ts.push(n))),e}function qv(n,e){var t=n.reactions;if(t!==null)for(var i=t.length,r=0;r<i;r++){var s=t[r],a=s.f;(a&Qs)===0&&(sr(s,e),(a&(ui|ha))!==0&&((a&Oi)!==0?qv(s,af):df(s)))}}let zp=!1;function Dt(n,e=null,t){if(typeof n!="object"||n===null||Xa in n)return n;const i=Fv(n);if(i!==lS&&i!==cS)return n;var r=new Map,s=Up(n),a=rn(0);s&&r.set("length",rn(n.length));var o;return new Proxy(n,{defineProperty(l,c,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&yS();var f=r.get(c);return f===void 0?(f=rn(u.value),r.set(c,f)):ze(f,Dt(u.value,o)),!0},deleteProperty(l,c){var u=r.get(c);if(u===void 0)c in l&&r.set(c,rn(Cn));else{if(s&&typeof c=="string"){var f=r.get("length"),h=Number(c);Number.isInteger(h)&&h<f.v&&ze(f,h)}ze(u,Cn),ig(a)}return!0},get(l,c,u){if(c===Xa)return n;var f=r.get(c),h=c in l;if(f===void 0&&(!h||es(l,c)?.writable)&&(f=rn(Dt(h?l[c]:Cn,o)),r.set(c,f)),f!==void 0){var d=he(f);return d===Cn?void 0:d}return Reflect.get(l,c,u)},getOwnPropertyDescriptor(l,c){var u=Reflect.getOwnPropertyDescriptor(l,c);if(u&&"value"in u){var f=r.get(c);f&&(u.value=he(f))}else if(u===void 0){var h=r.get(c),d=h?.v;if(h!==void 0&&d!==Cn)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return u},has(l,c){if(c===Xa)return!0;var u=r.get(c),f=u!==void 0&&u.v!==Cn||Reflect.has(l,c);if(u!==void 0||ct!==null&&(!f||es(l,c)?.writable)){u===void 0&&(u=rn(f?Dt(l[c],o):Cn),r.set(c,u));var h=he(u);if(h===Cn)return!1}return f},set(l,c,u,f){var h=r.get(c),d=c in l;if(s&&c==="length")for(var m=u;m<h.v;m+=1){var g=r.get(m+"");g!==void 0?ze(g,Cn):m in l&&(g=rn(Cn),r.set(m+"",g))}h===void 0?(!d||es(l,c)?.writable)&&(h=rn(void 0),ze(h,Dt(u,o)),r.set(c,h)):(d=h.v!==Cn,ze(h,Dt(u,o)));var _=Reflect.getOwnPropertyDescriptor(l,c);if(_?.set&&_.set.call(f,u),!d){if(s&&typeof c=="string"){var p=r.get("length"),x=Number(c);Number.isInteger(x)&&x>=p.v&&ze(p,x+1)}ig(a)}return!0},ownKeys(l){he(a);var c=Reflect.ownKeys(l).filter(h=>{var d=r.get(h);return d===void 0||d.v!==Cn});for(var[u,f]of r)f.v!==Cn&&!(u in l)&&c.push(u);return c},setPrototypeOf(){xS()}})}function ig(n,e=1){ze(n,n.v+e)}var ul,Zv,Yv;function NS(){if(ul===void 0){ul=window;var n=Element.prototype,e=Node.prototype;Zv=es(e,"firstChild").get,Yv=es(e,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function of(n=""){return document.createTextNode(n)}function Er(n){return Zv.call(n)}function lf(n){return Yv.call(n)}function Qe(n,e){return Er(n)}function ji(n,e){{var t=Er(n);return t instanceof Comment&&t.data===""?lf(t):t}}function vt(n,e=1,t=!1){let i=n;for(;e--;)i=lf(i);return i}function OS(n){n.textContent=""}function si(n){var e=Oi|Qs;ct===null?e|=ha:ct.f|=zv;var t=Mt!==null&&(Mt.f&Oi)!==0?Mt:null;const i={children:null,ctx:Mn,deps:null,equals:Gv,f:e,fn:n,reactions:null,v:null,version:0,parent:t??ct};return t!==null&&(t.children??=[]).push(i),i}function Kv(n){var e=n.children;if(e!==null){n.children=null;for(var t=0;t<e.length;t+=1){var i=e[t];(i.f&Oi)!==0?Vp(i):Pr(i)}}}function US(n){for(var e=n.parent;e!==null;){if((e.f&Oi)===0)return e;e=e.parent}return null}function Jv(n){var e,t=ct;Ei(US(n));try{Kv(n),e=h0(n)}finally{Ei(t)}return e}function Qv(n){var e=Jv(n),t=(Vs||(n.f&ha)!==0)&&n.deps!==null?af:ui;sr(n,t),n.equals(e)||(n.v=e,n.version=f0())}function Vp(n){Kv(n),bl(n,0),sr(n,Do),n.v=n.children=n.deps=n.ctx=n.reactions=null}function FS(n){ct===null&&Mt===null&&gS(),Mt!==null&&(Mt.f&ha)!==0&&mS(),Wp&&pS()}function BS(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function No(n,e,t,i=!0){var r=(n&sc)!==0,s=ct,a={ctx:Mn,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|Qs,first:null,fn:e,last:null,next:null,parent:r?null:s,prev:null,teardown:null,transitions:null,version:0};if(t){var o=ja;try{rg(!0),hf(a),a.f|=Hv}catch(u){throw Pr(a),u}finally{rg(o)}}else e!==null&&df(a);var l=t&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&zv)===0;if(!l&&!r&&i&&(s!==null&&BS(a,s),Mt!==null&&(Mt.f&Oi)!==0)){var c=Mt;(c.children??=[]).push(a)}return a}function e0(n){const e=No(rc,null,!1);return sr(e,ui),e.teardown=n,e}function vl(n){FS();var e=ct!==null&&(ct.f&Fi)!==0&&Mn!==null&&!Mn.m;if(e){var t=Mn;(t.e??=[]).push({fn:n,effect:ct,reaction:Mt})}else{var i=ac(n);return i}}function kS(n){const e=No(sc,n,!0);return(t={})=>new Promise(i=>{t.outro?ao(e,()=>{Pr(e),i(void 0)}):(Pr(e),i(void 0))})}function ac(n){return No(kv,n,!1)}function cf(n){return No(rc,n,!0)}function At(n){return Oo(n)}function Oo(n,e=0){return No(rc|sf|e,n,!0)}function fs(n,e=!0){return No(rc|Fi,n,!0,e)}function t0(n){var e=n.teardown;if(e!==null){const t=Wp,i=Mt;sg(!0),Qi(null);try{e.call(null)}finally{sg(t),Qi(i)}}}function n0(n){var e=n.deriveds;if(e!==null){n.deriveds=null;for(var t=0;t<e.length;t+=1)Vp(e[t])}}function i0(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){var i=t.next;Pr(t,e),t=i}}function HS(n){for(var e=n.first;e!==null;){var t=e.next;(e.f&Fi)===0&&Pr(e),e=t}}function Pr(n,e=!0){var t=!1;if((e||(n.f&fS)!==0)&&n.nodes_start!==null){for(var i=n.nodes_start,r=n.nodes_end;i!==null;){var s=i===r?null:lf(i);i.remove(),i=s}t=!0}i0(n,e&&!t),n0(n),bl(n,0),sr(n,Do);var a=n.transitions;if(a!==null)for(const l of a)l.stop();t0(n);var o=n.parent;o!==null&&o.first!==null&&r0(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function r0(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function ao(n,e){var t=[];Gp(n,t,!0),s0(t,()=>{Pr(n),e&&e()})}function s0(n,e){var t=n.length;if(t>0){var i=()=>--t||e();for(var r of n)r.out(i)}else e()}function Gp(n,e,t){if((n.f&Xi)===0){if(n.f^=Xi,n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&e.push(a);for(var i=n.first;i!==null;){var r=i.next,s=(i.f&Lo)!==0||(i.f&Fi)!==0;Gp(i,e,s?t:!1),i=r}}}function Su(n){a0(n,!0)}function a0(n,e){if((n.f&Xi)!==0){oc(n)&&hf(n),n.f^=Xi;for(var t=n.first;t!==null;){var i=t.next,r=(t.f&Lo)!==0||(t.f&Fi)!==0;a0(t,r?e:!1),t=i}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||e)&&s.in()}}let Eu=!1,Qh=[];function o0(){Eu=!1;const n=Qh.slice();Qh=[],Bv(n)}function uf(n){Eu||(Eu=!0,queueMicrotask(o0)),Qh.push(n)}function zS(){Eu&&o0()}function l0(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const c0=0,VS=1;let su=!1,au=c0,yl=!1,xl=null,ja=!1,Wp=!1;function rg(n){ja=n}function sg(n){Wp=n}let zs=[],qa=0;let Mt=null;function Qi(n){Mt=n}let ct=null;function Ei(n){ct=n}let qi=null;function GS(n){qi=n}let Sn=null,Qn=0,ts=null;function WS(n){ts=n}let u0=1,Vs=!1,Mn=null;function f0(){return++u0}function $S(){return!0}function oc(n){var e=n.f;if((e&Qs)!==0)return!0;if((e&af)!==0){var t=n.deps,i=(e&ha)!==0;if(t!==null){var r;if((e&bu)!==0){for(r=0;r<t.length;r++)(t[r].reactions??=[]).push(n);n.f^=bu}for(r=0;r<t.length;r++){var s=t[r];if(oc(s)&&Qv(s),i&&ct!==null&&!Vs&&!s?.reactions?.includes(n)&&(s.reactions??=[]).push(n),s.version>n.version)return!0}}(!i||ct!==null&&!Vs)&&sr(n,ui)}return!1}function XS(n,e){for(var t=e;t!==null;){if((t.f&Kh)!==0)try{t.fn(n);return}catch{t.f^=Kh}t=t.parent}throw su=!1,n}function jS(n){return(n.f&Do)===0&&(n.parent===null||(n.parent.f&Kh)===0)}function ff(n,e,t,i){if(su){if(t===null&&(su=!1),jS(e))throw n;return}t!==null&&(su=!0);{XS(n,e);return}}function h0(n){var e=Sn,t=Qn,i=ts,r=Mt,s=Vs,a=qi,o=Mn,l=n.f;Sn=null,Qn=0,ts=null,Mt=(l&(Fi|sc))===0?n:null,Vs=!ja&&(l&ha)!==0,qi=null,Mn=n.ctx;try{var c=(0,n.fn)(),u=n.deps;if(Sn!==null){var f;if(bl(n,Qn),u!==null&&Qn>0)for(u.length=Qn+Sn.length,f=0;f<Sn.length;f++)u[Qn+f]=Sn[f];else n.deps=u=Sn;if(!Vs)for(f=Qn;f<u.length;f++)(u[f].reactions??=[]).push(n)}else u!==null&&Qn<u.length&&(bl(n,Qn),u.length=Qn);return c}finally{Sn=e,Qn=t,ts=i,Mt=r,Vs=s,qi=a,Mn=o}}function qS(n,e){let t=e.reactions;if(t!==null){var i=t.indexOf(n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}t===null&&(e.f&Oi)!==0&&(Sn===null||!Sn.includes(e))&&(sr(e,af),(e.f&(ha|bu))===0&&(e.f^=bu),bl(e,0))}function bl(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)qS(n,t[i])}function hf(n){var e=n.f;if((e&Do)===0){sr(n,ui);var t=ct,i=Mn;ct=n;try{(e&sf)!==0?HS(n):i0(n),n0(n),t0(n);var r=h0(n);n.teardown=typeof r=="function"?r:null,n.version=u0}catch(s){ff(s,n,t,i||n.ctx)}finally{ct=t}}}function d0(){if(qa>1e3){qa=0;try{_S()}catch(n){if(xl!==null)ff(n,xl,null);else throw n}}qa++}function p0(n){var e=n.length;if(e!==0){d0();var t=ja;ja=!0;try{for(var i=0;i<e;i++){var r=n[i];(r.f&ui)===0&&(r.f^=ui);var s=[];m0(r,s),ZS(s)}}finally{ja=t}}}function ZS(n){var e=n.length;if(e!==0)for(var t=0;t<e;t++){var i=n[t];if((i.f&(Do|Xi))===0)try{oc(i)&&(hf(i),i.deps===null&&i.first===null&&i.nodes_start===null&&(i.teardown===null?r0(i):i.fn=null))}catch(r){ff(r,i,null,i.ctx)}}}function YS(){if(yl=!1,qa>1001)return;const n=zs;zs=[],p0(n),yl||(qa=0,xl=null)}function df(n){au===c0&&(yl||(yl=!0,queueMicrotask(YS))),xl=n;for(var e=n;e.parent!==null;){e=e.parent;var t=e.f;if((t&(sc|Fi))!==0){if((t&ui)===0)return;e.f^=ui}}zs.push(e)}function m0(n,e){var t=n.first,i=[];e:for(;t!==null;){var r=t.f,s=(r&Fi)!==0,a=s&&(r&ui)!==0,o=t.next;if(!a&&(r&Xi)===0)if((r&rc)!==0){if(s)t.f^=ui;else try{oc(t)&&hf(t)}catch(f){ff(f,t,null,t.ctx)}var l=t.first;if(l!==null){t=l;continue}}else(r&kv)!==0&&i.push(t);if(o===null){let f=t.parent;for(;f!==null;){if(n===f)break e;var c=f.next;if(c!==null){t=c;continue e}f=f.parent}}t=o}for(var u=0;u<i.length;u++)l=i[u],e.push(l),m0(l,e)}function g0(n){var e=au,t=zs;try{d0();const r=[];au=VS,zs=r,yl=!1,p0(t);var i=n?.();return zS(),(zs.length>0||r.length>0)&&g0(),qa=0,xl=null,i}finally{au=e,zs=t}}async function ag(){await Promise.resolve(),g0()}function he(n){var e=n.f,t=(e&Oi)!==0;if(t&&(e&Do)!==0){var i=Jv(n);return Vp(n),i}if(Mt!==null){qi!==null&&qi.includes(n)&&bS();var r=Mt.deps;Sn===null&&r!==null&&r[Qn]===n?Qn++:Sn===null?Sn=[n]:Sn.push(n),ts!==null&&ct!==null&&(ct.f&ui)!==0&&(ct.f&Fi)===0&&ts.includes(n)&&(sr(ct,Qs),df(ct))}else if(t&&n.deps===null)for(var s=n,a=s.parent,o=s;a!==null;)if((a.f&Oi)!==0){var l=a;o=l,a=l.parent}else{var c=a;c.deriveds?.includes(o)||(c.deriveds??=[]).push(o);break}return t&&(s=n,oc(s)&&Qv(s)),n.v}function Ir(n){const e=Mt;try{return Mt=null,n()}finally{Mt=e}}const KS=-7169;function sr(n,e){n.f=n.f&KS|e}function on(n,e=!1,t){Mn={p:Mn,c:null,e:null,m:!1,s:n,x:null,l:null}}function ln(n){const e=Mn;if(e!==null){const a=e.e;if(a!==null){var t=ct,i=Mt;e.e=null;try{for(var r=0;r<a.length;r++){var s=a[r];Ei(s.effect),Qi(s.reaction),ac(s.fn)}}finally{Ei(t),Qi(i)}}Mn=e.p,e.m=!0}return{}}const JS=["touchstart","touchmove"];function QS(n){return JS.includes(n)}let og=!1;function eE(){og||(og=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{if(!n.defaultPrevented)for(const e of n.target.elements)e.__on_r?.()})},{capture:!0}))}function _0(n){var e=Mt,t=ct;Qi(null),Ei(null);try{return n()}finally{Qi(e),Ei(t)}}function tE(n,e,t,i=t){n.addEventListener(e,()=>_0(t));const r=n.__on_r;r?n.__on_r=()=>{r(),i(!0)}:n.__on_r=()=>i(!0),eE()}const v0=new Set,ed=new Set;function nE(n,e,t,i){function r(s){if(i.capture||tl.call(e,s),!s.cancelBubble)return _0(()=>t.call(this,s))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?uf(()=>{e.addEventListener(n,r,i)}):e.addEventListener(n,r,i),r}function ou(n,e,t,i,r){var s={capture:i,passive:r},a=nE(n,e,t,s);(e===document.body||e===window||e===document)&&e0(()=>{e.removeEventListener(n,a,s)})}function $p(n){for(var e=0;e<n.length;e++)v0.add(n[e]);for(var t of ed)t(n)}function tl(n){var e=this,t=e.ownerDocument,i=n.type,r=n.composedPath?.()||[],s=r[0]||n.target,a=0,o=n.__root;if(o){var l=r.indexOf(o);if(l!==-1&&(e===document||e===window)){n.__root=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(a=l)}if(s=r[a]||n.target,s!==e){aS(n,"currentTarget",{configurable:!0,get(){return s||t}});var u=Mt,f=ct;Qi(null),Ei(null);try{for(var h,d=[];s!==null;){var m=s.assignedSlot||s.parentNode||s.host||null;try{var g=s["__"+i];if(g!==void 0&&!s.disabled)if(Up(g)){var[_,...p]=g;_.apply(s,[n,...p])}else g.call(s,n)}catch(x){h?d.push(x):h=x}if(n.cancelBubble||m===e||m===null)break;s=m}if(h){for(let x of d)queueMicrotask(()=>{throw x});throw h}}finally{n.__root=e,delete n.currentTarget,Qi(u),Ei(f)}}}function y0(n){var e=document.createElement("template");return e.innerHTML=n,e.content}function oo(n,e){var t=ct;t.nodes_start===null&&(t.nodes_start=n,t.nodes_end=e)}function pt(n,e){var t=(e&jv)!==0,i=(e&DS)!==0,r,s=!n.startsWith("<!>");return()=>{r===void 0&&(r=y0(s?n:"<!>"+n),t||(r=Er(r)));var a=i?document.importNode(r,!0):r.cloneNode(!0);if(t){var o=Er(a),l=a.lastChild;oo(o,l)}else oo(a,a);return a}}function ar(n,e,t="svg"){var i=!n.startsWith("<!>"),r=(e&jv)!==0,s=`<${t}>${i?n:"<!>"+n}</${t}>`,a;return()=>{if(!a){var o=y0(s),l=Er(o);if(r)for(a=document.createDocumentFragment();Er(l);)a.appendChild(Er(l));else a=Er(l)}var c=a.cloneNode(!0);if(r){var u=Er(c),f=c.lastChild;oo(u,f)}else oo(c,c);return c}}function Mu(n=""){{var e=of(n+"");return oo(e,e),e}}function Xp(){var n=document.createDocumentFragment(),e=document.createComment(""),t=of();return n.append(e,t),oo(e,t),n}function Be(n,e){n!==null&&n.before(e)}let td=!0;function _n(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??=n.nodeValue)&&(n.__t=t,n.nodeValue=t==null?"":t+"")}function iE(n,e){return rE(n,e)}const va=new Map;function rE(n,{target:e,anchor:t,props:i={},events:r,context:s,intro:a=!0}){NS();var o=new Set,l=f=>{for(var h=0;h<f.length;h++){var d=f[h];if(!o.has(d)){o.add(d);var m=QS(d);e.addEventListener(d,tl,{passive:m});var g=va.get(d);g===void 0?(document.addEventListener(d,tl,{passive:m}),va.set(d,1)):va.set(d,g+1)}}};l(Fp(v0)),ed.add(l);var c=void 0,u=kS(()=>{var f=t??e.appendChild(of());return fs(()=>{if(s){on({});var h=Mn;h.c=s}r&&(i.$$events=r),td=a,c=n(f,i)||{},td=!0,s&&ln()}),()=>{for(var h of o){e.removeEventListener(h,tl);var d=va.get(h);--d===0?(document.removeEventListener(h,tl),va.delete(h)):va.set(h,d)}ed.delete(l),f!==t&&f.parentNode?.removeChild(f)}});return sE.set(c,u),c}let sE=new WeakMap;function ns(n,e,t=!1){var i=n,r=null,s=null,a=Cn,o=t?Lo:0,l=!1;const c=(f,h=!0)=>{l=!0,u(h,f)},u=(f,h)=>{a!==(a=f)&&(a?(r?Su(r):h&&(r=fs(()=>h(i))),s&&ao(s,()=>{s=null})):(s?Su(s):h&&(s=fs(()=>h(i))),r&&ao(r,()=>{r=null})))};Oo(()=>{l=!1,e(c),l||u(null,null)},o)}function aE(n,e,t){var i=n,r=Cn,s,a=dS;Oo(()=>{a(r,r=e())&&(s&&ao(s),s=fs(()=>t(i)))})}function oE(n,e){return e}function lE(n,e,t,i){for(var r=[],s=e.length,a=0;a<s;a++)Gp(e[a].e,r,!0);var o=s>0&&r.length===0&&t!==null;if(o){var l=t.parentNode;OS(l),l.append(t),i.clear(),qr(n,e[0].prev,e[s-1].next)}s0(r,()=>{for(var c=0;c<s;c++){var u=e[c];o||(i.delete(u.k),qr(n,u.prev,u.next)),Pr(u.e,!o)}})}function jp(n,e,t,i,r,s=null){var a=n,o={flags:e,items:new Map,first:null},l=(e&Xv)!==0;if(l){var c=n;a=c.appendChild(of())}var u=null,f=!1;Oo(()=>{var h=t(),d=Up(h)?h:h==null?[]:Fp(h),m=d.length;if(!(f&&m===0)){f=m===0;{var g=Mt;cE(d,o,a,r,e,(g.f&Xi)!==0,i)}s!==null&&(m===0?u?Su(u):u=fs(()=>s(a)):u!==null&&ao(u,()=>{u=null})),t()}})}function cE(n,e,t,i,r,s,a,o){var l=(r&ES)!==0,c=(r&(Bp|kp))!==0,u=n.length,f=e.items,h=e.first,d=h,m,g=null,_,p=[],x=[],v,y,b,E;if(l)for(E=0;E<u;E+=1)v=n[E],y=a(v,E),b=f.get(y),b!==void 0&&(b.a?.measure(),(_??=new Set).add(b));for(E=0;E<u;E+=1){if(v=n[E],y=a(v,E),b=f.get(y),b===void 0){var w=d?d.e.nodes_start:t;g=fE(w,e,g,g===null?e.first:g.next,v,y,E,i,r),f.set(y,g),p=[],x=[],d=g.next;continue}if(c&&uE(b,v,E,r),(b.e.f&Xi)!==0&&(Su(b.e),l&&(b.a?.unfix(),(_??=new Set).delete(b))),b!==d){if(m!==void 0&&m.has(b)){if(p.length<x.length){var P=x[0],S;g=P.prev;var T=p[0],R=p[p.length-1];for(S=0;S<p.length;S+=1)lg(p[S],P,t);for(S=0;S<x.length;S+=1)m.delete(x[S]);qr(e,T.prev,R.next),qr(e,g,T),qr(e,R,P),d=P,g=R,E-=1,p=[],x=[]}else m.delete(b),lg(b,d,t),qr(e,b.prev,b.next),qr(e,b,g===null?e.first:g.next),qr(e,g,b),g=b;continue}for(p=[],x=[];d!==null&&d.k!==y;)(s||(d.e.f&Xi)===0)&&(m??=new Set).add(d),x.push(d),d=d.next;if(d===null)continue;b=d}p.push(b),g=b,d=b.next}if(d!==null||m!==void 0){for(var N=m===void 0?[]:Fp(m);d!==null;)(s||(d.e.f&Xi)===0)&&N.push(d),d=d.next;var D=N.length;if(D>0){var V=(r&Xv)!==0&&u===0?t:null;if(l){for(E=0;E<D;E+=1)N[E].a?.measure();for(E=0;E<D;E+=1)N[E].a?.fix()}lE(e,N,V,f)}}l&&uf(()=>{if(_!==void 0)for(b of _)b.a?.apply()}),ct.first=e.first&&e.first.e,ct.last=g&&g.e}function uE(n,e,t,i){(i&Bp)!==0&&Jh(n.v,e),(i&kp)!==0?Jh(n.i,t):n.i=t}function fE(n,e,t,i,r,s,a,o,l,c){var u=(l&Bp)!==0,f=(l&MS)===0,h=u?f?Hp(r):rn(r):r,d=(l&kp)===0?a:rn(a),m={i:d,v:h,k:s,a:null,e:null,prev:t,next:i};try{return m.e=fs(()=>o(n,h,d),zp),m.e.prev=t&&t.e,m.e.next=i&&i.e,t===null?e.first=m:(t.next=m,t.e.next=m.e),i!==null&&(i.prev=m,i.e.prev=m.e),m}finally{}}function lg(n,e,t){for(var i=n.next?n.next.e.nodes_start:t,r=e?e.e.nodes_start:t,s=n.e.nodes_start;s!==i;){var a=lf(s);r.before(s),s=a}}function qr(n,e,t){e===null?n.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function pf(n,e,...t){var i=n,r=On,s;Oo(()=>{r!==(r=e())&&(s&&(Pr(s),s=null),s=fs(()=>r(i,...t)))},Lo)}function x0(n,e,t){var i=n,r,s;Oo(()=>{r!==(r=e())&&(s&&(ao(s),s=null),r&&(s=fs(()=>t(i,r))))},Lo)}function hE(n,e,t){ac(()=>{var i=Ir(()=>e(n,t?.())||{});if(i?.destroy)return()=>i.destroy()})}function nn(n,e,t,i){var r=n.__attributes??={};r[e]!==(r[e]=t)&&(e==="style"&&"__styles"in n&&(n.__styles={}),e==="loading"&&(n[hS]=t),t==null?n.removeAttribute(e):typeof t!="string"&&dE(n).includes(e)?n[e]=t:n.setAttribute(e,t))}var cg=new Map;function dE(n){var e=cg.get(n.nodeName);if(e)return e;cg.set(n.nodeName,e=[]);for(var t,i=n,r=Element.prototype;r!==i;){t=oS(i);for(var s in t)t[s].set&&e.push(s);i=Fv(i)}return e}function pE(n,e){var t=n.__className,i=b0(e);(t!==i||zp)&&(i===""?n.removeAttribute("class"):n.setAttribute("class",i),n.__className=i)}function mf(n,e){var t=n.__className,i=b0(e);(t!==i||zp)&&(e==null?n.removeAttribute("class"):n.className=i,n.__className=i)}function b0(n){return n??""}function _r(n,e,t,i){var r=n.__styles??={};r[e]!==t&&(r[e]=t,t==null?n.style.removeProperty(e):n.style.setProperty(e,t,""))}const mE=()=>performance.now(),Ii={tick:n=>requestAnimationFrame(n),now:()=>mE(),tasks:new Set};function S0(){const n=Ii.now();Ii.tasks.forEach(e=>{e.c(n)||(Ii.tasks.delete(e),e.f())}),Ii.tasks.size!==0&&Ii.tick(S0)}function qp(n){let e;return Ii.tasks.size===0&&Ii.tick(S0),{promise:new Promise(t=>{Ii.tasks.add(e={c:n,f:t})}),abort(){Ii.tasks.delete(e)}}}function bc(n,e){n.dispatchEvent(new CustomEvent(e))}function gE(n){if(n==="float")return"cssFloat";if(n==="offset")return"cssOffset";if(n.startsWith("--"))return n;const e=n.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function ug(n){const e={},t=n.split(";");for(const i of t){const[r,s]=i.split(":");if(!r||s===void 0)break;const a=gE(r.trim());e[a]=s.trim()}return e}const _E=n=>n;function Sl(n,e,t,i){var r=(n&CS)!==0,s=(n&PS)!==0,a=r&&s,o=(n&IS)!==0,l=a?"both":r?"in":"out",c,u=e.inert,f,h;function d(){var x=Mt,v=ct;Qi(null),Ei(null);try{return c??=t()(e,i?.()??{},{direction:l})}finally{Qi(x),Ei(v)}}var m={is_global:o,in(){if(e.inert=u,!r){h?.abort(),h?.reset?.();return}s||f?.abort(),bc(e,"introstart"),f=nd(e,d(),h,1,()=>{bc(e,"introend"),f?.abort(),f=c=void 0})},out(x){if(!s){x?.(),c=void 0;return}e.inert=!0,bc(e,"outrostart"),h=nd(e,d(),f,0,()=>{bc(e,"outroend"),x?.()})},stop:()=>{f?.abort(),h?.abort()}},g=ct;if((g.transitions??=[]).push(m),r&&td){var _=o;if(!_){for(var p=g.parent;p&&(p.f&Lo)!==0;)for(;(p=p.parent)&&(p.f&sf)===0;);_=!p||(p.f&Hv)!==0}_&&ac(()=>{Ir(()=>m.in())})}}function nd(n,e,t,i,r){var s=i===1;if(Fa(e)){var a,o=!1;return uf(()=>{if(!o){var _=e({direction:s?"in":"out"});a=nd(n,_,t,i,r)}}),{abort:()=>{o=!0,a?.abort()},deactivate:()=>a.deactivate(),reset:()=>a.reset(),t:()=>a.t()}}if(t?.deactivate(),!e?.duration)return r(),{abort:On,deactivate:On,reset:On,t:()=>i};const{delay:l=0,css:c,tick:u,easing:f=_E}=e;var h=[];if(s&&t===void 0&&(u&&u(0,1),c)){var d=ug(c(0,1));h.push(d,d)}var m=()=>1-i,g=n.animate(h,{duration:l});return g.onfinish=()=>{var _=t?.t()??1-i;t?.abort();var p=i-_,x=e.duration*Math.abs(p),v=[];if(x>0){if(c)for(var y=Math.ceil(x/16.666666666666668),b=0;b<=y;b+=1){var E=_+p*f(b/y),w=c(E,1-E);v.push(ug(w))}m=()=>{var P=g.currentTime;return _+p*f(P/x)},u&&qp(()=>{if(g.playState!=="running")return!1;var P=m();return u(P,1-P),!0})}g=n.animate(v,{duration:x,fill:"forwards"}),g.onfinish=()=>{m=()=>i,u?.(i,1-i),r()}},{abort:()=>{g&&(g.cancel(),g.effect=null,g.onfinish=On)},deactivate:()=>{r=On},reset:()=>{i===0&&u?.(1,0)},t:()=>m()}}function E0(n,e,t=e){tE(n,"input",i=>{var r=i?n.defaultValue:n.value;if(r=Bf(n)?kf(r):r,t(r),r!==(r=e())){var s=n.selectionStart,a=n.selectionEnd;n.value=r??"",a!==null&&(n.selectionStart=s,n.selectionEnd=Math.min(a,n.value.length))}}),Ir(e)==null&&n.value&&t(Bf(n)?kf(n.value):n.value),cf(()=>{var i=e();Bf(n)&&i===kf(n.value)||n.type==="date"&&!i&&!n.value||i!==n.value&&(n.value=i??"")})}function Bf(n){var e=n.type;return e==="number"||e==="range"}function kf(n){return n===""?null:+n}function fg(n,e){return n===e||n?.[Xa]===e}function lc(n={},e,t,i){return ac(()=>{var r,s;return cf(()=>{r=s,s=[],Ir(()=>{n!==t(...s)&&(e(n,...s),r&&fg(t(...r),n)&&e(null,...r))})}),()=>{uf(()=>{s&&fg(t(...s),n)&&e(null,...s)})}}),n}function Zp(n,e,t){if(n==null)return e(void 0),t&&t(void 0),On;const i=Ir(()=>n.subscribe(e,t));return i.unsubscribe?()=>i.unsubscribe():i}let Sc=!1;function Zt(n,e,t){const i=t[e]??={store:null,source:Hp(void 0),unsubscribe:On};if(i.store!==n)if(i.unsubscribe(),i.store=n??null,n==null)i.source.v=void 0,i.unsubscribe=On;else{var r=!0;i.unsubscribe=Zp(n,s=>{r?i.source.v=s:ze(i.source,s)}),r=!1}return he(i.source)}function Mi(){const n={};return e0(()=>{for(var e in n)n[e].unsubscribe()}),n}function vE(n){var e=Sc;try{return Sc=!1,[n(),Sc]}finally{Sc=e}}const yE={get(n,e){if(!n.exclude.includes(e))return n.props[e]},set(n,e){return!1},getOwnPropertyDescriptor(n,e){if(!n.exclude.includes(e)&&e in n.props)return{enumerable:!0,configurable:!0,value:n.props[e]}},has(n,e){return n.exclude.includes(e)?!1:e in n.props},ownKeys(n){return Reflect.ownKeys(n.props).filter(e=>!n.exclude.includes(e))}};function or(n,e,t){return new Proxy({props:n,exclude:e},yE)}const xE={get(n,e){let t=n.props.length;for(;t--;){let i=n.props[t];if(Fa(i)&&(i=i()),typeof i=="object"&&i!==null&&e in i)return i[e]}},set(n,e,t){let i=n.props.length;for(;i--;){let r=n.props[i];Fa(r)&&(r=r());const s=es(r,e);if(s&&s.set)return s.set(t),!0}return!1},getOwnPropertyDescriptor(n,e){let t=n.props.length;for(;t--;){let i=n.props[t];if(Fa(i)&&(i=i()),typeof i=="object"&&i!==null&&e in i){const r=es(i,e);return r&&!r.configurable&&(r.configurable=!0),r}}},has(n,e){if(e===Xa||e===Vv)return!1;for(let t of n.props)if(Fa(t)&&(t=t()),t!=null&&e in t)return!0;return!1},ownKeys(n){const e=[];for(let t of n.props){Fa(t)&&(t=t());for(const i in t)e.includes(i)||e.push(i)}return e}};function Bi(...n){return new Proxy({props:n},xE)}function bE(n){for(var e=ct,t=ct;e!==null&&(e.f&(Fi|sc))===0;)e=e.parent;try{return Ei(e),n()}finally{Ei(t)}}function qt(n,e,t,i){var r=(t&TS)!==0,s=!0,a=(t&AS)!==0,o=(t&RS)!==0,l=!1,c;a?[c,l]=vE(()=>n[e]):c=n[e];var u=Xa in n||Vv in n,f=es(n,e)?.set??(u&&a&&e in n?E=>n[e]=E:void 0),h=i,d=!0,m=!1,g=()=>(m=!0,d&&(d=!1,o?h=Ir(i):h=i),h);c===void 0&&i!==void 0&&(f&&s&&vS(),c=g(),f&&f(c));var _;if(_=()=>{var E=n[e];return E===void 0?g():(d=!0,m=!1,E)},(t&wS)===0)return _;if(f){var p=n.$$legacy;return function(E,w){return arguments.length>0?((!w||p||l)&&f(w?_():E),E):_()}}var x=!1,v=!1,y=Hp(c),b=bE(()=>si(()=>{var E=_(),w=he(y);return x?(x=!1,v=!0,w):(v=!1,y.v=E)}));return r||(b.equals=$v),function(E,w){if(arguments.length>0){const P=w?he(b):a?Dt(E):E;return b.equals(P)||(x=!0,ze(y,P),m&&h!==void 0&&(h=P),Ir(()=>he(b))),E}return he(b)}}function da(n){Mn===null&&l0(),vl(()=>{const e=Ir(n);if(typeof e=="function")return e})}function SE(n){Mn===null&&l0(),da(()=>()=>Ir(n))}const EE="5";typeof window<"u"&&(window.__svelte||={v:new Set}).v.add(EE);const ME=n=>n;function TE(n){const e=n-1;return e*e*e+1}function hg(n){const e=typeof n=="string"&&n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[n,"px"]}function Tu(n,{delay:e=0,duration:t=400,easing:i=ME}={}){const r=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:i,css:s=>`opacity: ${s*r}`}}function wE(n,{delay:e=0,duration:t=400,easing:i=TE,x:r=0,y:s=0,opacity:a=0}={}){const o=getComputedStyle(n),l=+o.opacity,c=o.transform==="none"?"":o.transform,u=l*(1-a),[f,h]=hg(r),[d,m]=hg(s);return{delay:e,duration:t,easing:i,css:(g,_)=>`
			transform: ${c} translate(${(1-g)*f}${h}, ${(1-g)*d}${m});
			opacity: ${l-u*_}`}}const ya=[];function AE(n,e){return{subscribe:di(n,e).subscribe}}function di(n,e=On){let t=null;const i=new Set;function r(o){if(Wv(n,o)&&(n=o,t)){const l=!ya.length;for(const c of i)c[1](),ya.push(c,n);if(l){for(let c=0;c<ya.length;c+=2)ya[c][0](ya[c+1]);ya.length=0}}}function s(o){r(o(n))}function a(o,l=On){const c=[o,l];return i.add(c),i.size===1&&(t=e(r,s)||On),o(n),()=>{i.delete(c),i.size===0&&t&&(t(),t=null)}}return{set:r,update:s,subscribe:a}}function Uo(n,e,t){const i=!Array.isArray(n),r=i?[n]:n;if(!r.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=e.length<2;return AE(t,(a,o)=>{let l=!1;const c=[];let u=0,f=On;const h=()=>{if(u)return;f();const m=e(i?c[0]:c,a,o);s?a(m):f=typeof m=="function"?m:On},d=r.map((m,g)=>Zp(m,_=>{c[g]=_,u&=~(1<<g),l&&h()},()=>{u|=1<<g}));return l=!0,h(),function(){Bv(d),f(),l=!1}})}function lo(n){let e;return Zp(n,t=>e=t)(),e}function RE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Hf,dg;function CE(){if(dg)return Hf;dg=1;var n=function(x){return e(x)&&!t(x)};function e(p){return!!p&&typeof p=="object"}function t(p){var x=Object.prototype.toString.call(p);return x==="[object RegExp]"||x==="[object Date]"||s(p)}var i=typeof Symbol=="function"&&Symbol.for,r=i?Symbol.for("react.element"):60103;function s(p){return p.$$typeof===r}function a(p){return Array.isArray(p)?[]:{}}function o(p,x){return x.clone!==!1&&x.isMergeableObject(p)?g(a(p),p,x):p}function l(p,x,v){return p.concat(x).map(function(y){return o(y,v)})}function c(p,x){if(!x.customMerge)return g;var v=x.customMerge(p);return typeof v=="function"?v:g}function u(p){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(p).filter(function(x){return Object.propertyIsEnumerable.call(p,x)}):[]}function f(p){return Object.keys(p).concat(u(p))}function h(p,x){try{return x in p}catch{return!1}}function d(p,x){return h(p,x)&&!(Object.hasOwnProperty.call(p,x)&&Object.propertyIsEnumerable.call(p,x))}function m(p,x,v){var y={};return v.isMergeableObject(p)&&f(p).forEach(function(b){y[b]=o(p[b],v)}),f(x).forEach(function(b){d(p,b)||(h(p,b)&&v.isMergeableObject(x[b])?y[b]=c(b,v)(p[b],x[b],v):y[b]=o(x[b],v))}),y}function g(p,x,v){v=v||{},v.arrayMerge=v.arrayMerge||l,v.isMergeableObject=v.isMergeableObject||n,v.cloneUnlessOtherwiseSpecified=o;var y=Array.isArray(x),b=Array.isArray(p),E=y===b;return E?y?v.arrayMerge(p,x,v):m(p,x,v):o(x,v)}g.all=function(x,v){if(!Array.isArray(x))throw new Error("first argument should be an array");return x.reduce(function(y,b){return g(y,b,v)},{})};var _=g;return Hf=_,Hf}var PE=CE();const IE=RE(PE);var id=function(n,e){return id=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])},id(n,e)};function gf(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");id(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var xt=function(){return xt=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},xt.apply(this,arguments)};function DE(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function zf(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}function Vf(n,e){var t=e&&e.cache?e.cache:kE,i=e&&e.serializer?e.serializer:FE,r=e&&e.strategy?e.strategy:OE;return r(n,{cache:t,serializer:i})}function LE(n){return n==null||typeof n=="number"||typeof n=="boolean"}function NE(n,e,t,i){var r=LE(i)?i:t(i),s=e.get(r);return typeof s>"u"&&(s=n.call(this,i),e.set(r,s)),s}function M0(n,e,t){var i=Array.prototype.slice.call(arguments,3),r=t(i),s=e.get(r);return typeof s>"u"&&(s=n.apply(this,i),e.set(r,s)),s}function T0(n,e,t,i,r){return t.bind(e,n,i,r)}function OE(n,e){var t=n.length===1?NE:M0;return T0(n,this,t,e.cache.create(),e.serializer)}function UE(n,e){return T0(n,this,M0,e.cache.create(),e.serializer)}var FE=function(){return JSON.stringify(arguments)},BE=function(){function n(){this.cache=Object.create(null)}return n.prototype.get=function(e){return this.cache[e]},n.prototype.set=function(e,t){this.cache[e]=t},n}(),kE={create:function(){return new BE}},Gf={variadic:UE},ut;(function(n){n[n.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",n[n.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",n[n.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",n[n.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",n[n.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",n[n.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",n[n.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",n[n.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",n[n.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",n[n.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",n[n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",n[n.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",n[n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",n[n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",n[n.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",n[n.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",n[n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",n[n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",n[n.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",n[n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",n[n.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",n[n.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",n[n.INVALID_TAG=23]="INVALID_TAG",n[n.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",n[n.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",n[n.UNCLOSED_TAG=27]="UNCLOSED_TAG"})(ut||(ut={}));var kt;(function(n){n[n.literal=0]="literal",n[n.argument=1]="argument",n[n.number=2]="number",n[n.date=3]="date",n[n.time=4]="time",n[n.select=5]="select",n[n.plural=6]="plural",n[n.pound=7]="pound",n[n.tag=8]="tag"})(kt||(kt={}));var co;(function(n){n[n.number=0]="number",n[n.dateTime=1]="dateTime"})(co||(co={}));function pg(n){return n.type===kt.literal}function HE(n){return n.type===kt.argument}function w0(n){return n.type===kt.number}function A0(n){return n.type===kt.date}function R0(n){return n.type===kt.time}function C0(n){return n.type===kt.select}function P0(n){return n.type===kt.plural}function zE(n){return n.type===kt.pound}function I0(n){return n.type===kt.tag}function D0(n){return!!(n&&typeof n=="object"&&n.type===co.number)}function rd(n){return!!(n&&typeof n=="object"&&n.type===co.dateTime)}var L0=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,VE=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;function GE(n){var e={};return n.replace(VE,function(t){var i=t.length;switch(t[0]){case"G":e.era=i===4?"long":i===5?"narrow":"short";break;case"y":e.year=i===2?"2-digit":"numeric";break;case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported");case"M":case"L":e.month=["numeric","2-digit","short","long","narrow"][i-1];break;case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported");case"d":e.day=["numeric","2-digit"][i-1];break;case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");case"E":e.weekday=i===4?"long":i===5?"narrow":"short";break;case"e":if(i<4)throw new RangeError("`e..eee` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][i-4];break;case"c":if(i<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported");e.weekday=["short","long","narrow","short"][i-4];break;case"a":e.hour12=!0;break;case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");case"h":e.hourCycle="h12",e.hour=["numeric","2-digit"][i-1];break;case"H":e.hourCycle="h23",e.hour=["numeric","2-digit"][i-1];break;case"K":e.hourCycle="h11",e.hour=["numeric","2-digit"][i-1];break;case"k":e.hourCycle="h24",e.hour=["numeric","2-digit"][i-1];break;case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":e.minute=["numeric","2-digit"][i-1];break;case"s":e.second=["numeric","2-digit"][i-1];break;case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");case"z":e.timeZoneName=i<4?"short":"long";break;case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""}),e}var WE=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i;function $E(n){if(n.length===0)throw new Error("Number skeleton cannot be empty");for(var e=n.split(WE).filter(function(h){return h.length>0}),t=[],i=0,r=e;i<r.length;i++){var s=r[i],a=s.split("/");if(a.length===0)throw new Error("Invalid number skeleton");for(var o=a[0],l=a.slice(1),c=0,u=l;c<u.length;c++){var f=u[c];if(f.length===0)throw new Error("Invalid number skeleton")}t.push({stem:o,options:l})}return t}function XE(n){return n.replace(/^(.*?)-/,"")}var mg=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,N0=/^(@+)?(\+|#+)?[rs]?$/g,jE=/(\*)(0+)|(#+)(0+)|(0+)/g,O0=/^(0+)$/;function gg(n){var e={};return n[n.length-1]==="r"?e.roundingPriority="morePrecision":n[n.length-1]==="s"&&(e.roundingPriority="lessPrecision"),n.replace(N0,function(t,i,r){return typeof r!="string"?(e.minimumSignificantDigits=i.length,e.maximumSignificantDigits=i.length):r==="+"?e.minimumSignificantDigits=i.length:i[0]==="#"?e.maximumSignificantDigits=i.length:(e.minimumSignificantDigits=i.length,e.maximumSignificantDigits=i.length+(typeof r=="string"?r.length:0)),""}),e}function U0(n){switch(n){case"sign-auto":return{signDisplay:"auto"};case"sign-accounting":case"()":return{currencySign:"accounting"};case"sign-always":case"+!":return{signDisplay:"always"};case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"};case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"};case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"};case"sign-never":case"+_":return{signDisplay:"never"}}}function qE(n){var e;if(n[0]==="E"&&n[1]==="E"?(e={notation:"engineering"},n=n.slice(2)):n[0]==="E"&&(e={notation:"scientific"},n=n.slice(1)),e){var t=n.slice(0,2);if(t==="+!"?(e.signDisplay="always",n=n.slice(2)):t==="+?"&&(e.signDisplay="exceptZero",n=n.slice(2)),!O0.test(n))throw new Error("Malformed concise eng/scientific notation");e.minimumIntegerDigits=n.length}return e}function _g(n){var e={},t=U0(n);return t||e}function ZE(n){for(var e={},t=0,i=n;t<i.length;t++){var r=i[t];switch(r.stem){case"percent":case"%":e.style="percent";continue;case"%x100":e.style="percent",e.scale=100;continue;case"currency":e.style="currency",e.currency=r.options[0];continue;case"group-off":case",_":e.useGrouping=!1;continue;case"precision-integer":case".":e.maximumFractionDigits=0;continue;case"measure-unit":case"unit":e.style="unit",e.unit=XE(r.options[0]);continue;case"compact-short":case"K":e.notation="compact",e.compactDisplay="short";continue;case"compact-long":case"KK":e.notation="compact",e.compactDisplay="long";continue;case"scientific":e=xt(xt(xt({},e),{notation:"scientific"}),r.options.reduce(function(l,c){return xt(xt({},l),_g(c))},{}));continue;case"engineering":e=xt(xt(xt({},e),{notation:"engineering"}),r.options.reduce(function(l,c){return xt(xt({},l),_g(c))},{}));continue;case"notation-simple":e.notation="standard";continue;case"unit-width-narrow":e.currencyDisplay="narrowSymbol",e.unitDisplay="narrow";continue;case"unit-width-short":e.currencyDisplay="code",e.unitDisplay="short";continue;case"unit-width-full-name":e.currencyDisplay="name",e.unitDisplay="long";continue;case"unit-width-iso-code":e.currencyDisplay="symbol";continue;case"scale":e.scale=parseFloat(r.options[0]);continue;case"rounding-mode-floor":e.roundingMode="floor";continue;case"rounding-mode-ceiling":e.roundingMode="ceil";continue;case"rounding-mode-down":e.roundingMode="trunc";continue;case"rounding-mode-up":e.roundingMode="expand";continue;case"rounding-mode-half-even":e.roundingMode="halfEven";continue;case"rounding-mode-half-down":e.roundingMode="halfTrunc";continue;case"rounding-mode-half-up":e.roundingMode="halfExpand";continue;case"integer-width":if(r.options.length>1)throw new RangeError("integer-width stems only accept a single optional option");r.options[0].replace(jE,function(l,c,u,f,h,d){if(c)e.minimumIntegerDigits=u.length;else{if(f&&h)throw new Error("We currently do not support maximum integer digits");if(d)throw new Error("We currently do not support exact integer digits")}return""});continue}if(O0.test(r.stem)){e.minimumIntegerDigits=r.stem.length;continue}if(mg.test(r.stem)){if(r.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option");r.stem.replace(mg,function(l,c,u,f,h,d){return u==="*"?e.minimumFractionDigits=c.length:f&&f[0]==="#"?e.maximumFractionDigits=f.length:h&&d?(e.minimumFractionDigits=h.length,e.maximumFractionDigits=h.length+d.length):(e.minimumFractionDigits=c.length,e.maximumFractionDigits=c.length),""});var s=r.options[0];s==="w"?e=xt(xt({},e),{trailingZeroDisplay:"stripIfInteger"}):s&&(e=xt(xt({},e),gg(s)));continue}if(N0.test(r.stem)){e=xt(xt({},e),gg(r.stem));continue}var a=U0(r.stem);a&&(e=xt(xt({},e),a));var o=qE(r.stem);o&&(e=xt(xt({},e),o))}return e}var Ec={"001":["H","h"],419:["h","H","hB","hb"],AC:["H","h","hb","hB"],AD:["H","hB"],AE:["h","hB","hb","H"],AF:["H","hb","hB","h"],AG:["h","hb","H","hB"],AI:["H","h","hb","hB"],AL:["h","H","hB"],AM:["H","hB"],AO:["H","hB"],AR:["h","H","hB","hb"],AS:["h","H"],AT:["H","hB"],AU:["h","hb","H","hB"],AW:["H","hB"],AX:["H"],AZ:["H","hB","h"],BA:["H","hB","h"],BB:["h","hb","H","hB"],BD:["h","hB","H"],BE:["H","hB"],BF:["H","hB"],BG:["H","hB","h"],BH:["h","hB","hb","H"],BI:["H","h"],BJ:["H","hB"],BL:["H","hB"],BM:["h","hb","H","hB"],BN:["hb","hB","h","H"],BO:["h","H","hB","hb"],BQ:["H"],BR:["H","hB"],BS:["h","hb","H","hB"],BT:["h","H"],BW:["H","h","hb","hB"],BY:["H","h"],BZ:["H","h","hb","hB"],CA:["h","hb","H","hB"],CC:["H","h","hb","hB"],CD:["hB","H"],CF:["H","h","hB"],CG:["H","hB"],CH:["H","hB","h"],CI:["H","hB"],CK:["H","h","hb","hB"],CL:["h","H","hB","hb"],CM:["H","h","hB"],CN:["H","hB","hb","h"],CO:["h","H","hB","hb"],CP:["H"],CR:["h","H","hB","hb"],CU:["h","H","hB","hb"],CV:["H","hB"],CW:["H","hB"],CX:["H","h","hb","hB"],CY:["h","H","hb","hB"],CZ:["H"],DE:["H","hB"],DG:["H","h","hb","hB"],DJ:["h","H"],DK:["H"],DM:["h","hb","H","hB"],DO:["h","H","hB","hb"],DZ:["h","hB","hb","H"],EA:["H","h","hB","hb"],EC:["h","H","hB","hb"],EE:["H","hB"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],ER:["h","H"],ES:["H","hB","h","hb"],ET:["hB","hb","h","H"],FI:["H"],FJ:["h","hb","H","hB"],FK:["H","h","hb","hB"],FM:["h","hb","H","hB"],FO:["H","h"],FR:["H","hB"],GA:["H","hB"],GB:["H","h","hb","hB"],GD:["h","hb","H","hB"],GE:["H","hB","h"],GF:["H","hB"],GG:["H","h","hb","hB"],GH:["h","H"],GI:["H","h","hb","hB"],GL:["H","h"],GM:["h","hb","H","hB"],GN:["H","hB"],GP:["H","hB"],GQ:["H","hB","h","hb"],GR:["h","H","hb","hB"],GT:["h","H","hB","hb"],GU:["h","hb","H","hB"],GW:["H","hB"],GY:["h","hb","H","hB"],HK:["h","hB","hb","H"],HN:["h","H","hB","hb"],HR:["H","hB"],HU:["H","h"],IC:["H","h","hB","hb"],ID:["H"],IE:["H","h","hb","hB"],IL:["H","hB"],IM:["H","h","hb","hB"],IN:["h","H"],IO:["H","h","hb","hB"],IQ:["h","hB","hb","H"],IR:["hB","H"],IS:["H"],IT:["H","hB"],JE:["H","h","hb","hB"],JM:["h","hb","H","hB"],JO:["h","hB","hb","H"],JP:["H","K","h"],KE:["hB","hb","H","h"],KG:["H","h","hB","hb"],KH:["hB","h","H","hb"],KI:["h","hb","H","hB"],KM:["H","h","hB","hb"],KN:["h","hb","H","hB"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],KW:["h","hB","hb","H"],KY:["h","hb","H","hB"],KZ:["H","hB"],LA:["H","hb","hB","h"],LB:["h","hB","hb","H"],LC:["h","hb","H","hB"],LI:["H","hB","h"],LK:["H","h","hB","hb"],LR:["h","hb","H","hB"],LS:["h","H"],LT:["H","h","hb","hB"],LU:["H","h","hB"],LV:["H","hB","hb","h"],LY:["h","hB","hb","H"],MA:["H","h","hB","hb"],MC:["H","hB"],MD:["H","hB"],ME:["H","hB","h"],MF:["H","hB"],MG:["H","h"],MH:["h","hb","H","hB"],MK:["H","h","hb","hB"],ML:["H"],MM:["hB","hb","H","h"],MN:["H","h","hb","hB"],MO:["h","hB","hb","H"],MP:["h","hb","H","hB"],MQ:["H","hB"],MR:["h","hB","hb","H"],MS:["H","h","hb","hB"],MT:["H","h"],MU:["H","h"],MV:["H","h"],MW:["h","hb","H","hB"],MX:["h","H","hB","hb"],MY:["hb","hB","h","H"],MZ:["H","hB"],NA:["h","H","hB","hb"],NC:["H","hB"],NE:["H"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NI:["h","H","hB","hb"],NL:["H","hB"],NO:["H","h"],NP:["H","h","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],NZ:["h","hb","H","hB"],OM:["h","hB","hb","H"],PA:["h","H","hB","hb"],PE:["h","H","hB","hb"],PF:["H","h","hB"],PG:["h","H"],PH:["h","hB","hb","H"],PK:["h","hB","H"],PL:["H","h"],PM:["H","hB"],PN:["H","h","hb","hB"],PR:["h","H","hB","hb"],PS:["h","hB","hb","H"],PT:["H","hB"],PW:["h","H"],PY:["h","H","hB","hb"],QA:["h","hB","hb","H"],RE:["H","hB"],RO:["H","hB"],RS:["H","hB","h"],RU:["H"],RW:["H","h"],SA:["h","hB","hb","H"],SB:["h","hb","H","hB"],SC:["H","h","hB"],SD:["h","hB","hb","H"],SE:["H"],SG:["h","hb","H","hB"],SH:["H","h","hb","hB"],SI:["H","hB"],SJ:["H"],SK:["H"],SL:["h","hb","H","hB"],SM:["H","h","hB"],SN:["H","h","hB"],SO:["h","H"],SR:["H","hB"],SS:["h","hb","H","hB"],ST:["H","hB"],SV:["h","H","hB","hb"],SX:["H","h","hb","hB"],SY:["h","hB","hb","H"],SZ:["h","hb","H","hB"],TA:["H","h","hb","hB"],TC:["h","hb","H","hB"],TD:["h","H","hB"],TF:["H","h","hB"],TG:["H","hB"],TH:["H","h"],TJ:["H","h"],TL:["H","hB","hb","h"],TM:["H","h"],TN:["h","hB","hb","H"],TO:["h","H"],TR:["H","hB"],TT:["h","hb","H","hB"],TW:["hB","hb","h","H"],TZ:["hB","hb","H","h"],UA:["H","hB","h"],UG:["hB","hb","H","h"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],UY:["h","H","hB","hb"],UZ:["H","hB","h"],VA:["H","h","hB"],VC:["h","hb","H","hB"],VE:["h","H","hB","hb"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],VN:["H","h"],VU:["h","H"],WF:["H","hB"],WS:["h","H"],XK:["H","hB","h"],YE:["h","hB","hb","H"],YT:["H","hB"],ZA:["H","h","hb","hB"],ZM:["h","hb","H","hB"],ZW:["H","h"],"af-ZA":["H","h","hB","hb"],"ar-001":["h","hB","hb","H"],"ca-ES":["H","h","hB"],"en-001":["h","hb","H","hB"],"en-HK":["h","hb","H","hB"],"en-IL":["H","h","hb","hB"],"en-MY":["h","hb","H","hB"],"es-BR":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"gu-IN":["hB","hb","h","H"],"hi-IN":["hB","h","H"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],"ta-IN":["hB","h","hb","H"],"te-IN":["hB","h","H"],"zu-ZA":["H","hB","hb","h"]};function YE(n,e){for(var t="",i=0;i<n.length;i++){var r=n.charAt(i);if(r==="j"){for(var s=0;i+1<n.length&&n.charAt(i+1)===r;)s++,i++;var a=1+(s&1),o=s<2?1:3+(s>>1),l="a",c=KE(e);for((c=="H"||c=="k")&&(o=0);o-- >0;)t+=l;for(;a-- >0;)t=c+t}else r==="J"?t+="H":t+=r}return t}function KE(n){var e=n.hourCycle;if(e===void 0&&n.hourCycles&&n.hourCycles.length&&(e=n.hourCycles[0]),e)switch(e){case"h24":return"k";case"h23":return"H";case"h12":return"h";case"h11":return"K";default:throw new Error("Invalid hourCycle")}var t=n.language,i;t!=="root"&&(i=n.maximize().region);var r=Ec[i||""]||Ec[t||""]||Ec["".concat(t,"-001")]||Ec["001"];return r[0]}var Wf,JE=new RegExp("^".concat(L0.source,"*")),QE=new RegExp("".concat(L0.source,"*$"));function gt(n,e){return{start:n,end:e}}var eM=!!String.prototype.startsWith&&"_a".startsWith("a",1),tM=!!String.fromCodePoint,nM=!!Object.fromEntries,iM=!!String.prototype.codePointAt,rM=!!String.prototype.trimStart,sM=!!String.prototype.trimEnd,aM=!!Number.isSafeInteger,oM=aM?Number.isSafeInteger:function(n){return typeof n=="number"&&isFinite(n)&&Math.floor(n)===n&&Math.abs(n)<=9007199254740991},sd=!0;try{var lM=B0("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");sd=((Wf=lM.exec("a"))===null||Wf===void 0?void 0:Wf[0])==="a"}catch{sd=!1}var vg=eM?function(e,t,i){return e.startsWith(t,i)}:function(e,t,i){return e.slice(i,i+t.length)===t},ad=tM?String.fromCodePoint:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var i="",r=e.length,s=0,a;r>s;){if(a=e[s++],a>1114111)throw RangeError(a+" is not a valid code point");i+=a<65536?String.fromCharCode(a):String.fromCharCode(((a-=65536)>>10)+55296,a%1024+56320)}return i},yg=nM?Object.fromEntries:function(e){for(var t={},i=0,r=e;i<r.length;i++){var s=r[i],a=s[0],o=s[1];t[a]=o}return t},F0=iM?function(e,t){return e.codePointAt(t)}:function(e,t){var i=e.length;if(!(t<0||t>=i)){var r=e.charCodeAt(t),s;return r<55296||r>56319||t+1===i||(s=e.charCodeAt(t+1))<56320||s>57343?r:(r-55296<<10)+(s-56320)+65536}},cM=rM?function(e){return e.trimStart()}:function(e){return e.replace(JE,"")},uM=sM?function(e){return e.trimEnd()}:function(e){return e.replace(QE,"")};function B0(n,e){return new RegExp(n,e)}var od;if(sd){var xg=B0("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu");od=function(e,t){var i;xg.lastIndex=t;var r=xg.exec(e);return(i=r[1])!==null&&i!==void 0?i:""}}else od=function(e,t){for(var i=[];;){var r=F0(e,t);if(r===void 0||k0(r)||pM(r))break;i.push(r),t+=r>=65536?2:1}return ad.apply(void 0,i)};var fM=function(){function n(e,t){t===void 0&&(t={}),this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return n.prototype.parse=function(){if(this.offset()!==0)throw Error("parser can only be used once");return this.parseMessage(0,"",!1)},n.prototype.parseMessage=function(e,t,i){for(var r=[];!this.isEOF();){var s=this.char();if(s===123){var a=this.parseArgument(e,i);if(a.err)return a;r.push(a.val)}else{if(s===125&&e>0)break;if(s===35&&(t==="plural"||t==="selectordinal")){var o=this.clonePosition();this.bump(),r.push({type:kt.pound,location:gt(o,this.clonePosition())})}else if(s===60&&!this.ignoreTag&&this.peek()===47){if(i)break;return this.error(ut.UNMATCHED_CLOSING_TAG,gt(this.clonePosition(),this.clonePosition()))}else if(s===60&&!this.ignoreTag&&ld(this.peek()||0)){var a=this.parseTag(e,t);if(a.err)return a;r.push(a.val)}else{var a=this.parseLiteral(e,t);if(a.err)return a;r.push(a.val)}}}return{val:r,err:null}},n.prototype.parseTag=function(e,t){var i=this.clonePosition();this.bump();var r=this.parseTagName();if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:kt.literal,value:"<".concat(r,"/>"),location:gt(i,this.clonePosition())},err:null};if(this.bumpIf(">")){var s=this.parseMessage(e+1,t,!0);if(s.err)return s;var a=s.val,o=this.clonePosition();if(this.bumpIf("</")){if(this.isEOF()||!ld(this.char()))return this.error(ut.INVALID_TAG,gt(o,this.clonePosition()));var l=this.clonePosition(),c=this.parseTagName();return r!==c?this.error(ut.UNMATCHED_CLOSING_TAG,gt(l,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:kt.tag,value:r,children:a,location:gt(i,this.clonePosition())},err:null}:this.error(ut.INVALID_TAG,gt(o,this.clonePosition())))}else return this.error(ut.UNCLOSED_TAG,gt(i,this.clonePosition()))}else return this.error(ut.INVALID_TAG,gt(i,this.clonePosition()))},n.prototype.parseTagName=function(){var e=this.offset();for(this.bump();!this.isEOF()&&dM(this.char());)this.bump();return this.message.slice(e,this.offset())},n.prototype.parseLiteral=function(e,t){for(var i=this.clonePosition(),r="";;){var s=this.tryParseQuote(t);if(s){r+=s;continue}var a=this.tryParseUnquoted(e,t);if(a){r+=a;continue}var o=this.tryParseLeftAngleBracket();if(o){r+=o;continue}break}var l=gt(i,this.clonePosition());return{val:{type:kt.literal,value:r,location:l},err:null}},n.prototype.tryParseLeftAngleBracket=function(){return!this.isEOF()&&this.char()===60&&(this.ignoreTag||!hM(this.peek()||0))?(this.bump(),"<"):null},n.prototype.tryParseQuote=function(e){if(this.isEOF()||this.char()!==39)return null;switch(this.peek()){case 39:return this.bump(),this.bump(),"'";case 123:case 60:case 62:case 125:break;case 35:if(e==="plural"||e==="selectordinal")break;return null;default:return null}this.bump();var t=[this.char()];for(this.bump();!this.isEOF();){var i=this.char();if(i===39)if(this.peek()===39)t.push(39),this.bump();else{this.bump();break}else t.push(i);this.bump()}return ad.apply(void 0,t)},n.prototype.tryParseUnquoted=function(e,t){if(this.isEOF())return null;var i=this.char();return i===60||i===123||i===35&&(t==="plural"||t==="selectordinal")||i===125&&e>0?null:(this.bump(),ad(i))},n.prototype.parseArgument=function(e,t){var i=this.clonePosition();if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(ut.EXPECT_ARGUMENT_CLOSING_BRACE,gt(i,this.clonePosition()));if(this.char()===125)return this.bump(),this.error(ut.EMPTY_ARGUMENT,gt(i,this.clonePosition()));var r=this.parseIdentifierIfPossible().value;if(!r)return this.error(ut.MALFORMED_ARGUMENT,gt(i,this.clonePosition()));if(this.bumpSpace(),this.isEOF())return this.error(ut.EXPECT_ARGUMENT_CLOSING_BRACE,gt(i,this.clonePosition()));switch(this.char()){case 125:return this.bump(),{val:{type:kt.argument,value:r,location:gt(i,this.clonePosition())},err:null};case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(ut.EXPECT_ARGUMENT_CLOSING_BRACE,gt(i,this.clonePosition())):this.parseArgumentOptions(e,t,r,i);default:return this.error(ut.MALFORMED_ARGUMENT,gt(i,this.clonePosition()))}},n.prototype.parseIdentifierIfPossible=function(){var e=this.clonePosition(),t=this.offset(),i=od(this.message,t),r=t+i.length;this.bumpTo(r);var s=this.clonePosition(),a=gt(e,s);return{value:i,location:a}},n.prototype.parseArgumentOptions=function(e,t,i,r){var s,a=this.clonePosition(),o=this.parseIdentifierIfPossible().value,l=this.clonePosition();switch(o){case"":return this.error(ut.EXPECT_ARGUMENT_TYPE,gt(a,l));case"number":case"date":case"time":{this.bumpSpace();var c=null;if(this.bumpIf(",")){this.bumpSpace();var u=this.clonePosition(),f=this.parseSimpleArgStyleIfPossible();if(f.err)return f;var h=uM(f.val);if(h.length===0)return this.error(ut.EXPECT_ARGUMENT_STYLE,gt(this.clonePosition(),this.clonePosition()));var d=gt(u,this.clonePosition());c={style:h,styleLocation:d}}var m=this.tryParseArgumentClose(r);if(m.err)return m;var g=gt(r,this.clonePosition());if(c&&vg(c?.style,"::",0)){var _=cM(c.style.slice(2));if(o==="number"){var f=this.parseNumberSkeletonFromString(_,c.styleLocation);return f.err?f:{val:{type:kt.number,value:i,location:g,style:f.val},err:null}}else{if(_.length===0)return this.error(ut.EXPECT_DATE_TIME_SKELETON,g);var p=_;this.locale&&(p=YE(_,this.locale));var h={type:co.dateTime,pattern:p,location:c.styleLocation,parsedOptions:this.shouldParseSkeletons?GE(p):{}},x=o==="date"?kt.date:kt.time;return{val:{type:x,value:i,location:g,style:h},err:null}}}return{val:{type:o==="number"?kt.number:o==="date"?kt.date:kt.time,value:i,location:g,style:(s=c?.style)!==null&&s!==void 0?s:null},err:null}}case"plural":case"selectordinal":case"select":{var v=this.clonePosition();if(this.bumpSpace(),!this.bumpIf(","))return this.error(ut.EXPECT_SELECT_ARGUMENT_OPTIONS,gt(v,xt({},v)));this.bumpSpace();var y=this.parseIdentifierIfPossible(),b=0;if(o!=="select"&&y.value==="offset"){if(!this.bumpIf(":"))return this.error(ut.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,gt(this.clonePosition(),this.clonePosition()));this.bumpSpace();var f=this.tryParseDecimalInteger(ut.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,ut.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);if(f.err)return f;this.bumpSpace(),y=this.parseIdentifierIfPossible(),b=f.val}var E=this.tryParsePluralOrSelectOptions(e,o,t,y);if(E.err)return E;var m=this.tryParseArgumentClose(r);if(m.err)return m;var w=gt(r,this.clonePosition());return o==="select"?{val:{type:kt.select,value:i,options:yg(E.val),location:w},err:null}:{val:{type:kt.plural,value:i,options:yg(E.val),offset:b,pluralType:o==="plural"?"cardinal":"ordinal",location:w},err:null}}default:return this.error(ut.INVALID_ARGUMENT_TYPE,gt(a,l))}},n.prototype.tryParseArgumentClose=function(e){return this.isEOF()||this.char()!==125?this.error(ut.EXPECT_ARGUMENT_CLOSING_BRACE,gt(e,this.clonePosition())):(this.bump(),{val:!0,err:null})},n.prototype.parseSimpleArgStyleIfPossible=function(){for(var e=0,t=this.clonePosition();!this.isEOF();){var i=this.char();switch(i){case 39:{this.bump();var r=this.clonePosition();if(!this.bumpUntil("'"))return this.error(ut.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,gt(r,this.clonePosition()));this.bump();break}case 123:{e+=1,this.bump();break}case 125:{if(e>0)e-=1;else return{val:this.message.slice(t.offset,this.offset()),err:null};break}default:this.bump();break}}return{val:this.message.slice(t.offset,this.offset()),err:null}},n.prototype.parseNumberSkeletonFromString=function(e,t){var i=[];try{i=$E(e)}catch{return this.error(ut.INVALID_NUMBER_SKELETON,t)}return{val:{type:co.number,tokens:i,location:t,parsedOptions:this.shouldParseSkeletons?ZE(i):{}},err:null}},n.prototype.tryParsePluralOrSelectOptions=function(e,t,i,r){for(var s,a=!1,o=[],l=new Set,c=r.value,u=r.location;;){if(c.length===0){var f=this.clonePosition();if(t!=="select"&&this.bumpIf("=")){var h=this.tryParseDecimalInteger(ut.EXPECT_PLURAL_ARGUMENT_SELECTOR,ut.INVALID_PLURAL_ARGUMENT_SELECTOR);if(h.err)return h;u=gt(f,this.clonePosition()),c=this.message.slice(f.offset,this.offset())}else break}if(l.has(c))return this.error(t==="select"?ut.DUPLICATE_SELECT_ARGUMENT_SELECTOR:ut.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,u);c==="other"&&(a=!0),this.bumpSpace();var d=this.clonePosition();if(!this.bumpIf("{"))return this.error(t==="select"?ut.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:ut.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,gt(this.clonePosition(),this.clonePosition()));var m=this.parseMessage(e+1,t,i);if(m.err)return m;var g=this.tryParseArgumentClose(d);if(g.err)return g;o.push([c,{value:m.val,location:gt(d,this.clonePosition())}]),l.add(c),this.bumpSpace(),s=this.parseIdentifierIfPossible(),c=s.value,u=s.location}return o.length===0?this.error(t==="select"?ut.EXPECT_SELECT_ARGUMENT_SELECTOR:ut.EXPECT_PLURAL_ARGUMENT_SELECTOR,gt(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!a?this.error(ut.MISSING_OTHER_CLAUSE,gt(this.clonePosition(),this.clonePosition())):{val:o,err:null}},n.prototype.tryParseDecimalInteger=function(e,t){var i=1,r=this.clonePosition();this.bumpIf("+")||this.bumpIf("-")&&(i=-1);for(var s=!1,a=0;!this.isEOF();){var o=this.char();if(o>=48&&o<=57)s=!0,a=a*10+(o-48),this.bump();else break}var l=gt(r,this.clonePosition());return s?(a*=i,oM(a)?{val:a,err:null}:this.error(t,l)):this.error(e,l)},n.prototype.offset=function(){return this.position.offset},n.prototype.isEOF=function(){return this.offset()===this.message.length},n.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},n.prototype.char=function(){var e=this.position.offset;if(e>=this.message.length)throw Error("out of bound");var t=F0(this.message,e);if(t===void 0)throw Error("Offset ".concat(e," is at invalid UTF-16 code unit boundary"));return t},n.prototype.error=function(e,t){return{val:null,err:{kind:e,message:this.message,location:t}}},n.prototype.bump=function(){if(!this.isEOF()){var e=this.char();e===10?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=e<65536?1:2)}},n.prototype.bumpIf=function(e){if(vg(this.message,e,this.offset())){for(var t=0;t<e.length;t++)this.bump();return!0}return!1},n.prototype.bumpUntil=function(e){var t=this.offset(),i=this.message.indexOf(e,t);return i>=0?(this.bumpTo(i),!0):(this.bumpTo(this.message.length),!1)},n.prototype.bumpTo=function(e){if(this.offset()>e)throw Error("targetOffset ".concat(e," must be greater than or equal to the current offset ").concat(this.offset()));for(e=Math.min(e,this.message.length);;){var t=this.offset();if(t===e)break;if(t>e)throw Error("targetOffset ".concat(e," is at invalid UTF-16 code unit boundary"));if(this.bump(),this.isEOF())break}},n.prototype.bumpSpace=function(){for(;!this.isEOF()&&k0(this.char());)this.bump()},n.prototype.peek=function(){if(this.isEOF())return null;var e=this.char(),t=this.offset(),i=this.message.charCodeAt(t+(e>=65536?2:1));return i??null},n}();function ld(n){return n>=97&&n<=122||n>=65&&n<=90}function hM(n){return ld(n)||n===47}function dM(n){return n===45||n===46||n>=48&&n<=57||n===95||n>=97&&n<=122||n>=65&&n<=90||n==183||n>=192&&n<=214||n>=216&&n<=246||n>=248&&n<=893||n>=895&&n<=8191||n>=8204&&n<=8205||n>=8255&&n<=8256||n>=8304&&n<=8591||n>=11264&&n<=12271||n>=12289&&n<=55295||n>=63744&&n<=64975||n>=65008&&n<=65533||n>=65536&&n<=983039}function k0(n){return n>=9&&n<=13||n===32||n===133||n>=8206&&n<=8207||n===8232||n===8233}function pM(n){return n>=33&&n<=35||n===36||n>=37&&n<=39||n===40||n===41||n===42||n===43||n===44||n===45||n>=46&&n<=47||n>=58&&n<=59||n>=60&&n<=62||n>=63&&n<=64||n===91||n===92||n===93||n===94||n===96||n===123||n===124||n===125||n===126||n===161||n>=162&&n<=165||n===166||n===167||n===169||n===171||n===172||n===174||n===176||n===177||n===182||n===187||n===191||n===215||n===247||n>=8208&&n<=8213||n>=8214&&n<=8215||n===8216||n===8217||n===8218||n>=8219&&n<=8220||n===8221||n===8222||n===8223||n>=8224&&n<=8231||n>=8240&&n<=8248||n===8249||n===8250||n>=8251&&n<=8254||n>=8257&&n<=8259||n===8260||n===8261||n===8262||n>=8263&&n<=8273||n===8274||n===8275||n>=8277&&n<=8286||n>=8592&&n<=8596||n>=8597&&n<=8601||n>=8602&&n<=8603||n>=8604&&n<=8607||n===8608||n>=8609&&n<=8610||n===8611||n>=8612&&n<=8613||n===8614||n>=8615&&n<=8621||n===8622||n>=8623&&n<=8653||n>=8654&&n<=8655||n>=8656&&n<=8657||n===8658||n===8659||n===8660||n>=8661&&n<=8691||n>=8692&&n<=8959||n>=8960&&n<=8967||n===8968||n===8969||n===8970||n===8971||n>=8972&&n<=8991||n>=8992&&n<=8993||n>=8994&&n<=9e3||n===9001||n===9002||n>=9003&&n<=9083||n===9084||n>=9085&&n<=9114||n>=9115&&n<=9139||n>=9140&&n<=9179||n>=9180&&n<=9185||n>=9186&&n<=9254||n>=9255&&n<=9279||n>=9280&&n<=9290||n>=9291&&n<=9311||n>=9472&&n<=9654||n===9655||n>=9656&&n<=9664||n===9665||n>=9666&&n<=9719||n>=9720&&n<=9727||n>=9728&&n<=9838||n===9839||n>=9840&&n<=10087||n===10088||n===10089||n===10090||n===10091||n===10092||n===10093||n===10094||n===10095||n===10096||n===10097||n===10098||n===10099||n===10100||n===10101||n>=10132&&n<=10175||n>=10176&&n<=10180||n===10181||n===10182||n>=10183&&n<=10213||n===10214||n===10215||n===10216||n===10217||n===10218||n===10219||n===10220||n===10221||n===10222||n===10223||n>=10224&&n<=10239||n>=10240&&n<=10495||n>=10496&&n<=10626||n===10627||n===10628||n===10629||n===10630||n===10631||n===10632||n===10633||n===10634||n===10635||n===10636||n===10637||n===10638||n===10639||n===10640||n===10641||n===10642||n===10643||n===10644||n===10645||n===10646||n===10647||n===10648||n>=10649&&n<=10711||n===10712||n===10713||n===10714||n===10715||n>=10716&&n<=10747||n===10748||n===10749||n>=10750&&n<=11007||n>=11008&&n<=11055||n>=11056&&n<=11076||n>=11077&&n<=11078||n>=11079&&n<=11084||n>=11085&&n<=11123||n>=11124&&n<=11125||n>=11126&&n<=11157||n===11158||n>=11159&&n<=11263||n>=11776&&n<=11777||n===11778||n===11779||n===11780||n===11781||n>=11782&&n<=11784||n===11785||n===11786||n===11787||n===11788||n===11789||n>=11790&&n<=11798||n===11799||n>=11800&&n<=11801||n===11802||n===11803||n===11804||n===11805||n>=11806&&n<=11807||n===11808||n===11809||n===11810||n===11811||n===11812||n===11813||n===11814||n===11815||n===11816||n===11817||n>=11818&&n<=11822||n===11823||n>=11824&&n<=11833||n>=11834&&n<=11835||n>=11836&&n<=11839||n===11840||n===11841||n===11842||n>=11843&&n<=11855||n>=11856&&n<=11857||n===11858||n>=11859&&n<=11903||n>=12289&&n<=12291||n===12296||n===12297||n===12298||n===12299||n===12300||n===12301||n===12302||n===12303||n===12304||n===12305||n>=12306&&n<=12307||n===12308||n===12309||n===12310||n===12311||n===12312||n===12313||n===12314||n===12315||n===12316||n===12317||n>=12318&&n<=12319||n===12320||n===12336||n===64830||n===64831||n>=65093&&n<=65094}function cd(n){n.forEach(function(e){if(delete e.location,C0(e)||P0(e))for(var t in e.options)delete e.options[t].location,cd(e.options[t].value);else w0(e)&&D0(e.style)||(A0(e)||R0(e))&&rd(e.style)?delete e.style.location:I0(e)&&cd(e.children)})}function mM(n,e){e===void 0&&(e={}),e=xt({shouldParseSkeletons:!0,requiresOtherClause:!0},e);var t=new fM(n,e).parse();if(t.err){var i=SyntaxError(ut[t.err.kind]);throw i.location=t.err.location,i.originalMessage=t.err.message,i}return e?.captureLocation||cd(t.val),t.val}var uo;(function(n){n.MISSING_VALUE="MISSING_VALUE",n.INVALID_VALUE="INVALID_VALUE",n.MISSING_INTL_API="MISSING_INTL_API"})(uo||(uo={}));var _f=function(n){gf(e,n);function e(t,i,r){var s=n.call(this,t)||this;return s.code=i,s.originalMessage=r,s}return e.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},e}(Error),bg=function(n){gf(e,n);function e(t,i,r,s){return n.call(this,'Invalid values for "'.concat(t,'": "').concat(i,'". Options are "').concat(Object.keys(r).join('", "'),'"'),uo.INVALID_VALUE,s)||this}return e}(_f),gM=function(n){gf(e,n);function e(t,i,r){return n.call(this,'Value for "'.concat(t,'" must be of type ').concat(i),uo.INVALID_VALUE,r)||this}return e}(_f),_M=function(n){gf(e,n);function e(t,i){return n.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(i,'"'),uo.MISSING_VALUE,i)||this}return e}(_f),Dn;(function(n){n[n.literal=0]="literal",n[n.object=1]="object"})(Dn||(Dn={}));function vM(n){return n.length<2?n:n.reduce(function(e,t){var i=e[e.length-1];return!i||i.type!==Dn.literal||t.type!==Dn.literal?e.push(t):i.value+=t.value,e},[])}function yM(n){return typeof n=="function"}function lu(n,e,t,i,r,s,a){if(n.length===1&&pg(n[0]))return[{type:Dn.literal,value:n[0].value}];for(var o=[],l=0,c=n;l<c.length;l++){var u=c[l];if(pg(u)){o.push({type:Dn.literal,value:u.value});continue}if(zE(u)){typeof s=="number"&&o.push({type:Dn.literal,value:t.getNumberFormat(e).format(s)});continue}var f=u.value;if(!(r&&f in r))throw new _M(f,a);var h=r[f];if(HE(u)){(!h||typeof h=="string"||typeof h=="number")&&(h=typeof h=="string"||typeof h=="number"?String(h):""),o.push({type:typeof h=="string"?Dn.literal:Dn.object,value:h});continue}if(A0(u)){var d=typeof u.style=="string"?i.date[u.style]:rd(u.style)?u.style.parsedOptions:void 0;o.push({type:Dn.literal,value:t.getDateTimeFormat(e,d).format(h)});continue}if(R0(u)){var d=typeof u.style=="string"?i.time[u.style]:rd(u.style)?u.style.parsedOptions:i.time.medium;o.push({type:Dn.literal,value:t.getDateTimeFormat(e,d).format(h)});continue}if(w0(u)){var d=typeof u.style=="string"?i.number[u.style]:D0(u.style)?u.style.parsedOptions:void 0;d&&d.scale&&(h=h*(d.scale||1)),o.push({type:Dn.literal,value:t.getNumberFormat(e,d).format(h)});continue}if(I0(u)){var m=u.children,g=u.value,_=r[g];if(!yM(_))throw new gM(g,"function",a);var p=lu(m,e,t,i,r,s),x=_(p.map(function(b){return b.value}));Array.isArray(x)||(x=[x]),o.push.apply(o,x.map(function(b){return{type:typeof b=="string"?Dn.literal:Dn.object,value:b}}))}if(C0(u)){var v=u.options[h]||u.options.other;if(!v)throw new bg(u.value,h,Object.keys(u.options),a);o.push.apply(o,lu(v.value,e,t,i,r));continue}if(P0(u)){var v=u.options["=".concat(h)];if(!v){if(!Intl.PluralRules)throw new _f(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,uo.MISSING_INTL_API,a);var y=t.getPluralRules(e,{type:u.pluralType}).select(h-(u.offset||0));v=u.options[y]||u.options.other}if(!v)throw new bg(u.value,h,Object.keys(u.options),a);o.push.apply(o,lu(v.value,e,t,i,r,h-(u.offset||0)));continue}}return vM(o)}function xM(n,e){return e?xt(xt(xt({},n||{}),e||{}),Object.keys(n).reduce(function(t,i){return t[i]=xt(xt({},n[i]),e[i]||{}),t},{})):n}function bM(n,e){return e?Object.keys(n).reduce(function(t,i){return t[i]=xM(n[i],e[i]),t},xt({},n)):n}function $f(n){return{create:function(){return{get:function(e){return n[e]},set:function(e,t){n[e]=t}}}}}function SM(n){return n===void 0&&(n={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:Vf(function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return new((e=Intl.NumberFormat).bind.apply(e,zf([void 0],t,!1)))},{cache:$f(n.number),strategy:Gf.variadic}),getDateTimeFormat:Vf(function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return new((e=Intl.DateTimeFormat).bind.apply(e,zf([void 0],t,!1)))},{cache:$f(n.dateTime),strategy:Gf.variadic}),getPluralRules:Vf(function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return new((e=Intl.PluralRules).bind.apply(e,zf([void 0],t,!1)))},{cache:$f(n.pluralRules),strategy:Gf.variadic})}}var H0=function(){function n(e,t,i,r){t===void 0&&(t=n.defaultLocale);var s=this;if(this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(l){var c=s.formatToParts(l);if(c.length===1)return c[0].value;var u=c.reduce(function(f,h){return!f.length||h.type!==Dn.literal||typeof f[f.length-1]!="string"?f.push(h.value):f[f.length-1]+=h.value,f},[]);return u.length<=1?u[0]||"":u},this.formatToParts=function(l){return lu(s.ast,s.locales,s.formatters,s.formats,l,void 0,s.message)},this.resolvedOptions=function(){var l;return{locale:((l=s.resolvedLocale)===null||l===void 0?void 0:l.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=t,this.resolvedLocale=n.resolveLocale(t),typeof e=="string"){if(this.message=e,!n.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var a=r||{};a.formatters;var o=DE(a,["formatters"]);this.ast=n.__parse(e,xt(xt({},o),{locale:this.resolvedLocale}))}else this.ast=e;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=bM(n.formats,i),this.formatters=r&&r.formatters||SM(this.formatterCache)}return Object.defineProperty(n,"defaultLocale",{get:function(){return n.memoizedDefaultLocale||(n.memoizedDefaultLocale=new Intl.NumberFormat().resolvedOptions().locale),n.memoizedDefaultLocale},enumerable:!1,configurable:!0}),n.memoizedDefaultLocale=null,n.resolveLocale=function(e){if(!(typeof Intl.Locale>"u")){var t=Intl.NumberFormat.supportedLocalesOf(e);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale(typeof e=="string"?e:e[0])}},n.__parse=mM,n.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},n}();function EM(n,e){if(e==null)return;if(e in n)return n[e];const t=e.split(".");let i=n;for(let r=0;r<t.length;r++)if(typeof i=="object"){if(r>0){const s=t.slice(r,t.length).join(".");if(s in i){i=i[s];break}}i=i[t[r]]}else i=void 0;return i}const Yr={},MM=(n,e,t)=>t&&(e in Yr||(Yr[e]={}),n in Yr[e]||(Yr[e][n]=t),t),z0=(n,e)=>{if(e==null)return;if(e in Yr&&n in Yr[e])return Yr[e][n];const t=uc(e);for(let i=0;i<t.length;i++){const r=t[i],s=wM(r,n);if(s)return MM(n,e,s)}};let Yp;const cc=di({});function TM(n){return Yp[n]||null}function V0(n){return n in Yp}function wM(n,e){if(!V0(n))return null;const t=TM(n);return EM(t,e)}function AM(n){if(n==null)return;const e=uc(n);for(let t=0;t<e.length;t++){const i=e[t];if(V0(i))return i}}function ud(n,...e){delete Yr[n],cc.update(t=>(t[n]=IE.all([t[n]||{},...e]),t))}Uo([cc],([n])=>Object.keys(n));cc.subscribe(n=>Yp=n);const cu={};function RM(n,e){cu[n].delete(e),cu[n].size===0&&delete cu[n]}function G0(n){return cu[n]}function CM(n){return uc(n).map(e=>{const t=G0(e);return[e,t?[...t]:[]]}).filter(([,e])=>e.length>0)}function wu(n){return n==null?!1:uc(n).some(e=>{var t;return(t=G0(e))==null?void 0:t.size})}function PM(n,e){return Promise.all(e.map(i=>(RM(n,i),i().then(r=>r.default||r)))).then(i=>ud(n,...i))}const jo={};function W0(n){if(!wu(n))return n in jo?jo[n]:Promise.resolve();const e=CM(n);return jo[n]=Promise.all(e.map(([t,i])=>PM(t,i))).then(()=>{if(wu(n))return W0(n);delete jo[n]}),jo[n]}var Sg=Object.getOwnPropertySymbols,IM=Object.prototype.hasOwnProperty,DM=Object.prototype.propertyIsEnumerable,LM=(n,e)=>{var t={};for(var i in n)IM.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&Sg)for(var i of Sg(n))e.indexOf(i)<0&&DM.call(n,i)&&(t[i]=n[i]);return t};const NM={number:{scientific:{notation:"scientific"},engineering:{notation:"engineering"},compactLong:{notation:"compact",compactDisplay:"long"},compactShort:{notation:"compact",compactDisplay:"short"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}};function OM({locale:n,id:e}){console.warn(`[svelte-i18n] The message "${e}" was not found in "${uc(n).join('", "')}".${wu(Ss())?`

Note: there are at least one loader still registered to this locale that wasn't executed.`:""}`)}const UM={fallbackLocale:null,loadingDelay:200,formats:NM,warnOnMissingMessages:!0,handleMissingMessage:void 0,ignoreTag:!0},nl=UM;function fo(){return nl}function FM(n){const e=n,{formats:t}=e,i=LM(e,["formats"]);let r=n.fallbackLocale;if(n.initialLocale)try{H0.resolveLocale(n.initialLocale)&&(r=n.initialLocale)}catch{console.warn(`[svelte-i18n] The initial locale "${n.initialLocale}" is not a valid locale.`)}return i.warnOnMissingMessages&&(delete i.warnOnMissingMessages,i.handleMissingMessage==null?i.handleMissingMessage=OM:console.warn('[svelte-i18n] The "warnOnMissingMessages" option is deprecated. Please use the "handleMissingMessage" option instead.')),Object.assign(nl,i,{initialLocale:r}),t&&("number"in t&&Object.assign(nl.formats.number,t.number),"date"in t&&Object.assign(nl.formats.date,t.date),"time"in t&&Object.assign(nl.formats.time,t.time)),er.set(r)}const Xf=di(!1);var BM=Object.defineProperty,kM=Object.defineProperties,HM=Object.getOwnPropertyDescriptors,Eg=Object.getOwnPropertySymbols,zM=Object.prototype.hasOwnProperty,VM=Object.prototype.propertyIsEnumerable,Mg=(n,e,t)=>e in n?BM(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,GM=(n,e)=>{for(var t in e||(e={}))zM.call(e,t)&&Mg(n,t,e[t]);if(Eg)for(var t of Eg(e))VM.call(e,t)&&Mg(n,t,e[t]);return n},WM=(n,e)=>kM(n,HM(e));let fd;const Au=di(null);function Tg(n){return n.split("-").map((e,t,i)=>i.slice(0,t+1).join("-")).reverse()}function uc(n,e=fo().fallbackLocale){const t=Tg(n);return e?[...new Set([...t,...Tg(e)])]:t}function Ss(){return fd??void 0}Au.subscribe(n=>{fd=n??void 0,typeof window<"u"&&n!=null&&document.documentElement.setAttribute("lang",n)});const $M=n=>{if(n&&AM(n)&&wu(n)){const{loadingDelay:e}=fo();let t;return typeof window<"u"&&Ss()!=null&&e?t=window.setTimeout(()=>Xf.set(!0),e):Xf.set(!0),W0(n).then(()=>{Au.set(n)}).finally(()=>{clearTimeout(t),Xf.set(!1)})}return Au.set(n)},er=WM(GM({},Au),{set:$M}),XM=()=>typeof window>"u"?null:window.navigator.language||window.navigator.languages[0],vf=n=>{const e=Object.create(null);return i=>{const r=JSON.stringify(i);return r in e?e[r]:e[r]=n(i)}};var jM=Object.defineProperty,Ru=Object.getOwnPropertySymbols,$0=Object.prototype.hasOwnProperty,X0=Object.prototype.propertyIsEnumerable,wg=(n,e,t)=>e in n?jM(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Kp=(n,e)=>{for(var t in e||(e={}))$0.call(e,t)&&wg(n,t,e[t]);if(Ru)for(var t of Ru(e))X0.call(e,t)&&wg(n,t,e[t]);return n},Fo=(n,e)=>{var t={};for(var i in n)$0.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&Ru)for(var i of Ru(n))e.indexOf(i)<0&&X0.call(n,i)&&(t[i]=n[i]);return t};const El=(n,e)=>{const{formats:t}=fo();if(n in t&&e in t[n])return t[n][e];throw new Error(`[svelte-i18n] Unknown "${e}" ${n} format.`)},qM=vf(n=>{var e=n,{locale:t,format:i}=e,r=Fo(e,["locale","format"]);if(t==null)throw new Error('[svelte-i18n] A "locale" must be set to format numbers');return i&&(r=El("number",i)),new Intl.NumberFormat(t,r)}),ZM=vf(n=>{var e=n,{locale:t,format:i}=e,r=Fo(e,["locale","format"]);if(t==null)throw new Error('[svelte-i18n] A "locale" must be set to format dates');return i?r=El("date",i):Object.keys(r).length===0&&(r=El("date","short")),new Intl.DateTimeFormat(t,r)}),YM=vf(n=>{var e=n,{locale:t,format:i}=e,r=Fo(e,["locale","format"]);if(t==null)throw new Error('[svelte-i18n] A "locale" must be set to format time values');return i?r=El("time",i):Object.keys(r).length===0&&(r=El("time","short")),new Intl.DateTimeFormat(t,r)}),KM=(n={})=>{var e=n,{locale:t=Ss()}=e,i=Fo(e,["locale"]);return qM(Kp({locale:t},i))},JM=(n={})=>{var e=n,{locale:t=Ss()}=e,i=Fo(e,["locale"]);return ZM(Kp({locale:t},i))},QM=(n={})=>{var e=n,{locale:t=Ss()}=e,i=Fo(e,["locale"]);return YM(Kp({locale:t},i))},eT=vf((n,e=Ss())=>new H0(n,e,fo().formats,{ignoreTag:fo().ignoreTag})),tT=(n,e={})=>{var t,i,r,s;let a=e;typeof n=="object"&&(a=n,n=a.id);const{values:o,locale:l=Ss(),default:c}=a;if(l==null)throw new Error("[svelte-i18n] Cannot format a message without first setting the initial locale.");let u=z0(n,l);if(!u)u=(s=(r=(i=(t=fo()).handleMissingMessage)==null?void 0:i.call(t,{locale:l,id:n,defaultValue:c}))!=null?r:c)!=null?s:n;else if(typeof u!="string")return console.warn(`[svelte-i18n] Message with id "${n}" must be of type "string", found: "${typeof u}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`),u;if(!o)return u;let f=u;try{f=eT(u,l).format(o)}catch(h){h instanceof Error&&console.warn(`[svelte-i18n] Message "${n}" has syntax error:`,h.message)}return f},nT=(n,e)=>QM(e).format(n),iT=(n,e)=>JM(e).format(n),rT=(n,e)=>KM(e).format(n),sT=(n,e=Ss())=>z0(n,e),Bo=Uo([er,cc],()=>tT);Uo([er],()=>nT);Uo([er],()=>iT);Uo([er],()=>rT);Uo([er,cc],()=>sT);const aT={"main-mobile-warning":"Your screen is too small to display this content properly. For the best experience, please view this site on a larger screen.","welcome-scroll":"Scroll down","presentation-title":"Hi, I'm Louis.","presentation-job":"Full-stack Web3 Engineer","presentation-description":"Full-stack engineer focused on modern web applications. I also develop blockchain as a secondary specialty with a strong focus on smart contract security, building web3 projects and taking part in Solidity bug bounties. I am open to opportunities in full-stack and blockchain development.","presentation-cv-button":"View Full Resume","presentation-contact-button":"Contact me","contact-title":"Contact me","contact-name":"Name","contact-email":"Email","contact-message":"Message","contact-send-button":"Send","contact-error-required":"required","contact-error-email":"invalid email","contact-on-success":"Email sent!","chatbot-first-message":"Feel free to ask any questions about me here.","chatbot-input-example":"What was your last project?","chatbot-send-button":"Send","chatbot-questions-remaining-1":"remaining.","chatbot-questions-remaining-2":"remaining.","chatbot-no-more-credits":"No more credits for today.","footer-copyright":"Made by Louis Hatté. All Rights Reserved.","on-error":"Something went wrong."},oT={"main-mobile-warning":"Votre écran est trop petit pour afficher ce contenu correctement. Pour une meilleure expérience, veuillez consulter ce site sur un écran plus large.","welcome-scroll":"Scrollez vers le bas","presentation-title":"Bonjour, je suis Louis.","presentation-job":"Ingénieur Web3 Full-stack","presentation-description":"Ingénieur full-stack spécialisé dans les applications web modernes. Je développe également une spécialité en blockchain, avec un intérêt particulier pour la sécurité des smart contracts en réalisant des projets web3 et en participant à des bug bounties en Solidity. Je suis ouvert aux opportunités en développement full-stack et blockchain.","presentation-cv-button":"Voir mon CV complet","presentation-contact-button":"Me contacter","contact-title":"Me contacter","contact-name":"Nom","contact-email":"Email","contact-message":"Message","contact-send-button":"Envoyer","contact-error-required":"requis","contact-error-email":"email invalide","contact-on-success":"Email envoyé !","chatbot-first-message":"N'hésitez pas à me poser toutes vos questions ici.","chatbot-input-example":"Quelle a été votre dernier projet ?","chatbot-send-button":"Envoyer","chatbot-questions-remaining-1":"restante.","chatbot-questions-remaining-2":"restantes.","chatbot-no-more-credits":"Crédits épuisés pour aujourd'hui.","footer-copyright":"Réalisé par Louis Hatté. Tous droits réservés.","on-error":"Une erreur est survenue."};class Jp{static init(){ud("en",aT),ud("fr",oT),FM({initialLocale:XM(),fallbackLocale:"en"})}static get(e){const t=e??lo(er);if(!t)throw new Error("Current locale doesn't exist.");return t.startsWith("fr")?"fr":"en"}static switch(e){er.set(e)}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qp="178",lT=0,Ag=1,cT=2,j0=1,uT=2,mr=3,hs=0,Gn=1,Mr=2,is=0,Za=1,Rg=2,Cg=3,Pg=4,fT=5,ks=100,hT=101,dT=102,pT=103,mT=104,gT=200,_T=201,vT=202,yT=203,hd=204,dd=205,xT=206,bT=207,ST=208,ET=209,MT=210,TT=211,wT=212,AT=213,RT=214,pd=0,md=1,gd=2,ho=3,_d=4,vd=5,yd=6,xd=7,yf=0,CT=1,PT=2,rs=0,IT=1,DT=2,LT=3,NT=4,OT=5,UT=6,FT=7,Ig="attached",BT="detached",q0=300,po=301,mo=302,Cu=303,bd=304,xf=306,ea=1e3,Tr=1001,Sd=1002,ai=1003,kT=1004,Mc=1005,Gi=1006,jf=1007,Gs=1008,tr=1009,Z0=1010,Y0=1011,Ml=1012,em=1013,ta=1014,Wi=1015,fc=1016,tm=1017,nm=1018,Tl=1020,K0=35902,J0=1021,Q0=1022,yi=1023,wl=1026,Al=1027,ey=1028,im=1029,ty=1030,rm=1031,sm=1033,uu=33776,fu=33777,hu=33778,du=33779,Ed=35840,Md=35841,Td=35842,wd=35843,Ad=36196,Rd=37492,Cd=37496,Pd=37808,Id=37809,Dd=37810,Ld=37811,Nd=37812,Od=37813,Ud=37814,Fd=37815,Bd=37816,kd=37817,Hd=37818,zd=37819,Vd=37820,Gd=37821,pu=36492,Wd=36494,$d=36495,ny=36283,Xd=36284,jd=36285,qd=36286,Pu=2300,Zd=2301,qf=2302,Dg=2400,Lg=2401,Ng=2402,HT=2500,zT=3200,VT=3201,am=0,GT=1,Zr="",Ot="srgb",go="srgb-linear",Iu="linear",wt="srgb",xa=7680,Og=519,WT=512,$T=513,XT=514,iy=515,jT=516,qT=517,ZT=518,YT=519,Ug=35044,Fg="300 es",wr=2e3,Du=2001;class ko{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bg=1234567;const fl=Math.PI/180,_o=180/Math.PI;function Es(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[i&255]+xn[i>>8&255]+xn[i>>16&255]+xn[i>>24&255]).toLowerCase()}function st(n,e,t){return Math.max(e,Math.min(t,n))}function om(n,e){return(n%e+e)%e}function KT(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function JT(n,e,t){return n!==e?(t-n)/(e-n):0}function hl(n,e,t){return(1-t)*n+t*e}function QT(n,e,t,i){return hl(n,e,1-Math.exp(-t*i))}function ew(n,e=1){return e-Math.abs(om(n,e*2)-e)}function tw(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function nw(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function iw(n,e){return n+Math.floor(Math.random()*(e-n+1))}function rw(n,e){return n+Math.random()*(e-n)}function sw(n){return n*(.5-Math.random())}function aw(n){n!==void 0&&(Bg=n);let e=Bg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ow(n){return n*fl}function lw(n){return n*_o}function cw(n){return(n&n-1)===0&&n!==0}function uw(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function fw(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hw(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),d=s((i-e)/2),m=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*m,l*d,o*c);break;case"YXY":n.set(l*d,o*u,l*m,o*c);break;case"ZYZ":n.set(l*m,l*d,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ba(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ln={DEG2RAD:fl,RAD2DEG:_o,generateUUID:Es,clamp:st,euclideanModulo:om,mapLinear:KT,inverseLerp:JT,lerp:hl,damp:QT,pingpong:ew,smoothstep:tw,smootherstep:nw,randInt:iw,randFloat:rw,randFloatSpread:sw,seededRandom:aw,degToRad:ow,radToDeg:lw,isPowerOfTwo:cw,ceilPowerOfTwo:uw,floorPowerOfTwo:fw,setQuaternionFromProperEuler:hw,normalize:Rn,denormalize:Ba};class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],d=s[a+1],m=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=m,e[t+3]=g;return}if(f!==g||l!==h||c!==d||u!==m){let _=1-o;const p=l*h+c*d+u*m+f*g,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const b=Math.sqrt(v),E=Math.atan2(b,p*x);_=Math.sin(_*E)/b,o=Math.sin(o*E)/b}const y=o*x;if(l=l*_+h*y,c=c*_+d*y,u=u*_+m*y,f=f*_+g*y,_===1-o){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],m=s[a+3];return e[t]=o*m+u*f+l*d-c*h,e[t+1]=l*m+u*h+c*f-o*d,e[t+2]=c*m+u*d+o*h-l*f,e[t+3]=u*m-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"YZX":this._x=h*u*f+c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f-h*d*m;break;case"XZY":this._x=h*u*f-c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f+h*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zf.copy(this).projectOnVector(e),this.sub(Zf)}reflect(e){return this.sub(Zf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zf=new O,kg=new Hn;class Ye{constructor(e,t,i,r,s,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],m=i[8],g=r[0],_=r[3],p=r[6],x=r[1],v=r[4],y=r[7],b=r[2],E=r[5],w=r[8];return s[0]=a*g+o*x+l*b,s[3]=a*_+o*v+l*E,s[6]=a*p+o*y+l*w,s[1]=c*g+u*x+f*b,s[4]=c*_+u*v+f*E,s[7]=c*p+u*y+f*w,s[2]=h*g+d*x+m*b,s[5]=h*_+d*v+m*E,s[8]=h*p+d*y+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,m=t*f+i*h+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=f*g,e[1]=(r*c-u*i)*g,e[2]=(o*i-r*a)*g,e[3]=h*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=d*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Yf.makeScale(e,t)),this}rotate(e){return this.premultiply(Yf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yf=new Ye;function ry(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dw(){const n=Rl("canvas");return n.style.display="block",n}const Hg={};function Ya(n){n in Hg||(Hg[n]=!0,console.warn(n))}function pw(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function mw(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gw(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const zg=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vg=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _w(){const n={enabled:!0,workingColorSpace:go,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===wt&&(r.r=Rr(r.r),r.g=Rr(r.g),r.b=Rr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===wt&&(r.r=Ka(r.r),r.g=Ka(r.g),r.b=Ka(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zr?Iu:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ya("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ya("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[go]:{primaries:e,whitePoint:i,transfer:Iu,toXYZ:zg,fromXYZ:Vg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:i,transfer:wt,toXYZ:zg,fromXYZ:Vg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),n}const nt=_w();function Rr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ka(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ba;class vw{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ba===void 0&&(ba=Rl("canvas")),ba.width=e.width,ba.height=e.height;const r=ba.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ba}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Rl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Rr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rr(t[i]/255)*255):t[i]=Rr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yw=0;class lm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yw++}),this.uuid=Es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Kf(r[a].image)):s.push(Kf(r[a]))}else s=Kf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Kf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xw=0;const Jf=new O;class vn extends ko{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,i=Tr,r=Tr,s=Gi,a=Gs,o=yi,l=tr,c=vn.DEFAULT_ANISOTROPY,u=Zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=Es(),this.name="",this.source=new lm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jf).x}get height(){return this.source.getSize(Jf).y}get depth(){return this.source.getSize(Jf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==q0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ea:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case Sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ea:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case Sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=q0;vn.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,i=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],m=l[9],g=l[2],_=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(m-_)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(m+_)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(d+1)/2,b=(p+1)/2,E=(u+h)/4,w=(f+g)/4,P=(m+_)/4;return v>y&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=E/i,s=w/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=E/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=w/s,r=P/s),this.set(i,r,s,t),this}let x=Math.sqrt((_-m)*(_-m)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(_-m)/x,this.y=(f-g)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bw extends ko{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new vn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Gi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new lm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class na extends bw{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class sy extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ai,this.minFilter=ai,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sw extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ai,this.minFilter=ai,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wi):wi.fromBufferAttribute(s,a),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tc.copy(i.boundingBox)),Tc.applyMatrix4(e.matrixWorld),this.union(Tc)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),wc.subVectors(this.max,qo),Sa.subVectors(e.a,qo),Ea.subVectors(e.b,qo),Ma.subVectors(e.c,qo),Hr.subVectors(Ea,Sa),zr.subVectors(Ma,Ea),As.subVectors(Sa,Ma);let t=[0,-Hr.z,Hr.y,0,-zr.z,zr.y,0,-As.z,As.y,Hr.z,0,-Hr.x,zr.z,0,-zr.x,As.z,0,-As.x,-Hr.y,Hr.x,0,-zr.y,zr.x,0,-As.y,As.x,0];return!Qf(t,Sa,Ea,Ma,wc)||(t=[1,0,0,0,1,0,0,0,1],!Qf(t,Sa,Ea,Ma,wc))?!1:(Ac.crossVectors(Hr,zr),t=[Ac.x,Ac.y,Ac.z],Qf(t,Sa,Ea,Ma,wc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cr=[new O,new O,new O,new O,new O,new O,new O,new O],wi=new O,Tc=new Ho,Sa=new O,Ea=new O,Ma=new O,Hr=new O,zr=new O,As=new O,qo=new O,wc=new O,Ac=new O,Rs=new O;function Qf(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Rs.fromArray(n,s);const o=r.x*Math.abs(Rs.x)+r.y*Math.abs(Rs.y)+r.z*Math.abs(Rs.z),l=e.dot(Rs),c=t.dot(Rs),u=i.dot(Rs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ew=new Ho,Zo=new O,eh=new O;class zo{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Ew.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const t=Zo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Zo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(eh)),this.expandByPoint(Zo.copy(e.center).sub(eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ur=new O,th=new O,Rc=new O,Vr=new O,nh=new O,Cc=new O,ih=new O;class cm{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,t),ur.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){th.copy(e).add(t).multiplyScalar(.5),Rc.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(th);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Rc),o=Vr.dot(this.direction),l=-Vr.dot(Rc),c=Vr.lengthSq(),u=Math.abs(1-a*a);let f,h,d,m;if(u>0)if(f=a*l-o,h=a*o-l,m=s*u,f>=0)if(h>=-m)if(h<=m){const g=1/u;f*=g,h*=g,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(th).addScaledVector(Rc,h),d}intersectSphere(e,t){ur.subVectors(e.center,this.origin);const i=ur.dot(this.direction),r=ur.dot(ur)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,t,i,r,s){nh.subVectors(t,e),Cc.subVectors(i,e),ih.crossVectors(nh,Cc);let a=this.direction.dot(ih),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vr.subVectors(this.origin,e);const l=o*this.direction.dot(Cc.crossVectors(Vr,Cc));if(l<0)return null;const c=o*this.direction.dot(nh.cross(Vr));if(c<0||l+c>a)return null;const u=-o*Vr.dot(ih);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,i,r,s,a,o,l,c,u,f,h,d,m,g,_){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,d,m,g,_)}set(e,t,i,r,s,a,o,l,c,u,f,h,d,m,g,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ta.setFromMatrixColumn(e,0).length(),s=1/Ta.setFromMatrixColumn(e,1).length(),a=1/Ta.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,m=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,m=c*u,g=c*f;t[0]=h+g*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=g+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,m=c*u,g=c*f;t[0]=h-g*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=g-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,m=o*u,g=o*f;t[0]=l*u,t[4]=m*c-d,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,m=o*l,g=o*c;t[0]=l*u,t[4]=g-h*f,t[8]=m*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+m,t[10]=h-g*f}else if(e.order==="XZY"){const h=a*l,d=a*c,m=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=a*u,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mw,e,Tw)}lookAt(e,t,i){const r=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Gr.crossVectors(i,Kn),Gr.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Gr.crossVectors(i,Kn)),Gr.normalize(),Pc.crossVectors(Kn,Gr),r[0]=Gr.x,r[4]=Pc.x,r[8]=Kn.x,r[1]=Gr.y,r[5]=Pc.y,r[9]=Kn.y,r[2]=Gr.z,r[6]=Pc.z,r[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],m=i[2],g=i[6],_=i[10],p=i[14],x=i[3],v=i[7],y=i[11],b=i[15],E=r[0],w=r[4],P=r[8],S=r[12],T=r[1],R=r[5],N=r[9],D=r[13],V=r[2],G=r[6],B=r[10],Z=r[14],H=r[3],k=r[7],K=r[11],te=r[15];return s[0]=a*E+o*T+l*V+c*H,s[4]=a*w+o*R+l*G+c*k,s[8]=a*P+o*N+l*B+c*K,s[12]=a*S+o*D+l*Z+c*te,s[1]=u*E+f*T+h*V+d*H,s[5]=u*w+f*R+h*G+d*k,s[9]=u*P+f*N+h*B+d*K,s[13]=u*S+f*D+h*Z+d*te,s[2]=m*E+g*T+_*V+p*H,s[6]=m*w+g*R+_*G+p*k,s[10]=m*P+g*N+_*B+p*K,s[14]=m*S+g*D+_*Z+p*te,s[3]=x*E+v*T+y*V+b*H,s[7]=x*w+v*R+y*G+b*k,s[11]=x*P+v*N+y*B+b*K,s[15]=x*S+v*D+y*Z+b*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],m=e[3],g=e[7],_=e[11],p=e[15];return m*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*d-i*l*d)+g*(+t*l*d-t*c*h+s*a*h-r*a*d+r*c*u-s*l*u)+_*(+t*c*f-t*o*d-s*a*f+i*a*d+s*o*u-i*c*u)+p*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],m=e[12],g=e[13],_=e[14],p=e[15],x=f*_*c-g*h*c+g*l*d-o*_*d-f*l*p+o*h*p,v=m*h*c-u*_*c-m*l*d+a*_*d+u*l*p-a*h*p,y=u*g*c-m*f*c+m*o*d-a*g*d-u*o*p+a*f*p,b=m*f*l-u*g*l-m*o*h+a*g*h+u*o*_-a*f*_,E=t*x+i*v+r*y+s*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=x*w,e[1]=(g*h*s-f*_*s-g*r*d+i*_*d+f*r*p-i*h*p)*w,e[2]=(o*_*s-g*l*s+g*r*c-i*_*c-o*r*p+i*l*p)*w,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*d-i*l*d)*w,e[4]=v*w,e[5]=(u*_*s-m*h*s+m*r*d-t*_*d-u*r*p+t*h*p)*w,e[6]=(m*l*s-a*_*s-m*r*c+t*_*c+a*r*p-t*l*p)*w,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*d+t*l*d)*w,e[8]=y*w,e[9]=(m*f*s-u*g*s-m*i*d+t*g*d+u*i*p-t*f*p)*w,e[10]=(a*g*s-m*o*s+m*i*c-t*g*c-a*i*p+t*o*p)*w,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*d-t*o*d)*w,e[12]=b*w,e[13]=(u*g*r-m*f*r+m*i*h-t*g*h-u*i*_+t*f*_)*w,e[14]=(m*o*r-a*g*r-m*i*l+t*g*l+a*i*_-t*o*_)*w,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,m=s*f,g=a*u,_=a*f,p=o*f,x=l*c,v=l*u,y=l*f,b=i.x,E=i.y,w=i.z;return r[0]=(1-(g+p))*b,r[1]=(d+y)*b,r[2]=(m-v)*b,r[3]=0,r[4]=(d-y)*E,r[5]=(1-(h+p))*E,r[6]=(_+x)*E,r[7]=0,r[8]=(m+v)*w,r[9]=(_-x)*w,r[10]=(1-(h+g))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ta.set(r[0],r[1],r[2]).length();const a=Ta.set(r[4],r[5],r[6]).length(),o=Ta.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ai.copy(this);const c=1/s,u=1/a,f=1/o;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=u,Ai.elements[5]*=u,Ai.elements[6]*=u,Ai.elements[8]*=f,Ai.elements[9]*=f,Ai.elements[10]*=f,t.setFromRotationMatrix(Ai),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=wr){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,m;if(o===wr)d=-(a+s)/(a-s),m=-2*a*s/(a-s);else if(o===Du)d=-a/(a-s),m=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=wr){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),h=(t+e)*c,d=(i+r)*u;let m,g;if(o===wr)m=(a+s)*f,g=-2*f;else if(o===Du)m=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ta=new O,Ai=new Ue,Mw=new O(0,0,0),Tw=new O(1,1,1),Gr=new O,Pc=new O,Kn=new O,Gg=new Ue,Wg=new Hn;class un{constructor(e=0,t=0,i=0,r=un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wg.setFromEuler(this),this.setFromQuaternion(Wg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class ay{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ww=0;const $g=new O,wa=new Hn,fr=new Ue,Ic=new O,Yo=new O,Aw=new O,Rw=new Hn,Xg=new O(1,0,0),jg=new O(0,1,0),qg=new O(0,0,1),Zg={type:"added"},Cw={type:"removed"},Aa={type:"childadded",child:null},rh={type:"childremoved",child:null};class zt extends ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ww++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new O,t=new un,i=new Hn,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Ye}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ay,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wa.setFromAxisAngle(e,t),this.quaternion.multiply(wa),this}rotateOnWorldAxis(e,t){return wa.setFromAxisAngle(e,t),this.quaternion.premultiply(wa),this}rotateX(e){return this.rotateOnAxis(Xg,e)}rotateY(e){return this.rotateOnAxis(jg,e)}rotateZ(e){return this.rotateOnAxis(qg,e)}translateOnAxis(e,t){return $g.copy(e).applyQuaternion(this.quaternion),this.position.add($g.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xg,e)}translateY(e){return this.translateOnAxis(jg,e)}translateZ(e){return this.translateOnAxis(qg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ic.copy(e):Ic.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(Yo,Ic,this.up):fr.lookAt(Ic,Yo,this.up),this.quaternion.setFromRotationMatrix(fr),r&&(fr.extractRotation(r.matrixWorld),wa.setFromRotationMatrix(fr),this.quaternion.premultiply(wa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zg),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cw),rh.child=e,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zg),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,e,Aw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,Rw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new O(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new O,hr=new O,sh=new O,dr=new O,Ra=new O,Ca=new O,Yg=new O,ah=new O,oh=new O,lh=new O,ch=new lt,uh=new lt,fh=new lt;class Di{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ri.subVectors(e,t),r.cross(Ri);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ri.subVectors(r,t),hr.subVectors(i,t),sh.subVectors(e,t);const a=Ri.dot(Ri),o=Ri.dot(hr),l=Ri.dot(sh),c=hr.dot(hr),u=hr.dot(sh),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,m=(a*u-o*l)*h;return s.set(1-d-m,m,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,dr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,dr.x),l.addScaledVector(a,dr.y),l.addScaledVector(o,dr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return ch.setScalar(0),uh.setScalar(0),fh.setScalar(0),ch.fromBufferAttribute(e,t),uh.fromBufferAttribute(e,i),fh.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ch,s.x),a.addScaledVector(uh,s.y),a.addScaledVector(fh,s.z),a}static isFrontFacing(e,t,i,r){return Ri.subVectors(i,t),hr.subVectors(e,t),Ri.cross(hr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Ri.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Di.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ra.subVectors(r,i),Ca.subVectors(s,i),ah.subVectors(e,i);const l=Ra.dot(ah),c=Ca.dot(ah);if(l<=0&&c<=0)return t.copy(i);oh.subVectors(e,r);const u=Ra.dot(oh),f=Ca.dot(oh);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ra,a);lh.subVectors(e,s);const d=Ra.dot(lh),m=Ca.dot(lh);if(m>=0&&d<=m)return t.copy(s);const g=d*c-l*m;if(g<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Ca,o);const _=u*m-d*f;if(_<=0&&f-u>=0&&d-m>=0)return Yg.subVectors(s,r),o=(f-u)/(f-u+(d-m)),t.copy(r).addScaledVector(Yg,o);const p=1/(_+g+h);return a=g*p,o=h*p,t.copy(i).addScaledVector(Ra,a).addScaledVector(Ca,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function hh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=om(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=hh(a,s,e+1/3),this.g=hh(a,s,e),this.b=hh(a,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const i=oy[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}copyLinearToSRGB(e){return this.r=Ka(e.r),this.g=Ka(e.g),this.b=Ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return nt.workingToColorSpace(bn.copy(this),e),Math.round(st(bn.r*255,0,255))*65536+Math.round(st(bn.g*255,0,255))*256+Math.round(st(bn.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(bn.copy(this),t);const i=bn.r,r=bn.g,s=bn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Ot){nt.workingToColorSpace(bn.copy(this),e);const t=bn.r,i=bn.g,r=bn.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+t,Wr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wr),e.getHSL(Dc);const i=hl(Wr.h,Dc.h,t),r=hl(Wr.s,Dc.s,t),s=hl(Wr.l,Dc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Xe;Xe.NAMES=oy;let Pw=0;class pa extends ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pw++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=Za,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hd,this.blendDst=dd,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Og,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xa,this.stencilZFail=xa,this.stencilZPass=xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Za&&(i.blending=this.blending),this.side!==hs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==hd&&(i.blendSrc=this.blendSrc),this.blendDst!==dd&&(i.blendDst=this.blendDst),this.blendEquation!==ks&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Og&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class um extends pa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new O,Lc=new dt;let Iw=0;class Zi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Iw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ug,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Lc.fromBufferAttribute(this,t),Lc.applyMatrix3(e),this.setXY(t,Lc.x,Lc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ba(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ba(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ba(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ba(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ba(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array),r=Rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array),r=Rn(r,this.array),s=Rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ug&&(e.usage=this.usage),e}}class fm extends Zi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ly extends Zi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class mn extends Zi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Dw=0;const gi=new Ue,dh=new zt,Pa=new O,Jn=new Ho,Ko=new Ho,cn=new O;class Si extends ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dw++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ry(e)?ly:fm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,i){return gi.makeTranslation(e,t,i),this.applyMatrix4(gi),this}scale(e,t,i){return gi.makeScale(e,t,i),this.applyMatrix4(gi),this}lookAt(e){return dh.lookAt(e),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pa).negate(),this.translate(Pa.x,Pa.y,Pa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Jn.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ko.setFromBufferAttribute(o),this.morphTargetsRelative?(cn.addVectors(Jn.min,Ko.min),Jn.expandByPoint(cn),cn.addVectors(Jn.max,Ko.max),Jn.expandByPoint(cn)):(Jn.expandByPoint(Ko.min),Jn.expandByPoint(Ko.max))}Jn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)cn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(cn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)cn.fromBufferAttribute(o,c),l&&(Pa.fromBufferAttribute(e,c),cn.add(Pa)),r=Math.max(r,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<i.count;P++)o[P]=new O,l[P]=new O;const c=new O,u=new O,f=new O,h=new dt,d=new dt,m=new dt,g=new O,_=new O;function p(P,S,T){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,T),h.fromBufferAttribute(s,P),d.fromBufferAttribute(s,S),m.fromBufferAttribute(s,T),u.sub(c),f.sub(c),d.sub(h),m.sub(h);const R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(R),_.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(R),o[P].add(g),o[S].add(g),o[T].add(g),l[P].add(_),l[S].add(_),l[T].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,S=x.length;P<S;++P){const T=x[P],R=T.start,N=T.count;for(let D=R,V=R+N;D<V;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const v=new O,y=new O,b=new O,E=new O;function w(P){b.fromBufferAttribute(r,P),E.copy(b);const S=o[P];v.copy(S),v.sub(b.multiplyScalar(b.dot(S))).normalize(),y.crossVectors(E,S);const R=y.dot(l[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,R)}for(let P=0,S=x.length;P<S;++P){const T=x[P],R=T.start,N=T.count;for(let D=R,V=R+N;D<V;D+=3)w(e.getX(D+0)),w(e.getX(D+1)),w(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),g=e.getX(h+1),_=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,m=0;for(let g=0,_=l.length;g<_;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let p=0;p<u;p++)h[m++]=c[d++]}return new Zi(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Si,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kg=new Ue,Cs=new cm,Nc=new zo,Jg=new O,Oc=new O,Uc=new O,Fc=new O,ph=new O,Bc=new O,Qg=new O,kc=new O;class ii extends zt{constructor(e=new Si,t=new um){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Bc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(ph.fromBufferAttribute(f,e),a?Bc.addScaledVector(ph,u):Bc.addScaledVector(ph.sub(t),u))}t.add(Bc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(s),Cs.copy(e.ray).recast(e.near),!(Nc.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Nc,Jg)===null||Cs.origin.distanceToSquared(Jg)>(e.far-e.near)**2))&&(Kg.copy(s).invert(),Cs.copy(e.ray).applyMatrix4(Kg),!(i.boundingBox!==null&&Cs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=h.length;m<g;m++){const _=h[m],p=a[_.materialIndex],x=Math.max(_.start,d.start),v=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let y=x,b=v;y<b;y+=3){const E=o.getX(y),w=o.getX(y+1),P=o.getX(y+2);r=Hc(this,p,e,i,c,u,f,E,w,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let _=m,p=g;_<p;_+=3){const x=o.getX(_),v=o.getX(_+1),y=o.getX(_+2);r=Hc(this,a,e,i,c,u,f,x,v,y),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,g=h.length;m<g;m++){const _=h[m],p=a[_.materialIndex],x=Math.max(_.start,d.start),v=Math.min(l.count,Math.min(_.start+_.count,d.start+d.count));for(let y=x,b=v;y<b;y+=3){const E=y,w=y+1,P=y+2;r=Hc(this,p,e,i,c,u,f,E,w,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let _=m,p=g;_<p;_+=3){const x=_,v=_+1,y=_+2;r=Hc(this,a,e,i,c,u,f,x,v,y),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function Lw(n,e,t,i,r,s,a,o){let l;if(e.side===Gn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===hs,o),l===null)return null;kc.copy(o),kc.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(kc);return c<t.near||c>t.far?null:{distance:c,point:kc.clone(),object:n}}function Hc(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Oc),n.getVertexPosition(l,Uc),n.getVertexPosition(c,Fc);const u=Lw(n,e,t,i,Oc,Uc,Fc,Qg);if(u){const f=new O;Di.getBarycoord(Qg,Oc,Uc,Fc,f),r&&(u.uv=Di.getInterpolatedAttribute(r,o,l,c,f,new dt)),s&&(u.uv1=Di.getInterpolatedAttribute(s,o,l,c,f,new dt)),a&&(u.normal=Di.getInterpolatedAttribute(a,o,l,c,f,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new O,materialIndex:0};Di.getNormal(Oc,Uc,Fc,h.normal),u.face=h,u.barycoord=f}return u}class hc extends Si{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,r,a,2),m("x","z","y",1,-1,e,i,-t,r,a,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new mn(c,3)),this.setAttribute("normal",new mn(u,3)),this.setAttribute("uv",new mn(f,2));function m(g,_,p,x,v,y,b,E,w,P,S){const T=y/w,R=b/P,N=y/2,D=b/2,V=E/2,G=w+1,B=P+1;let Z=0,H=0;const k=new O;for(let K=0;K<B;K++){const te=K*R-D;for(let ge=0;ge<G;ge++){const Le=ge*T-N;k[g]=Le*x,k[_]=te*v,k[p]=V,c.push(k.x,k.y,k.z),k[g]=0,k[_]=0,k[p]=E>0?1:-1,u.push(k.x,k.y,k.z),f.push(ge/w),f.push(1-K/P),Z+=1}}for(let K=0;K<P;K++)for(let te=0;te<w;te++){const ge=h+te+G*K,Le=h+te+G*(K+1),W=h+(te+1)+G*(K+1),ee=h+(te+1)+G*K;l.push(ge,Le,ee),l.push(Le,W,ee),H+=6}o.addGroup(d,H,S),d+=H,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Pn(n){const e={};for(let t=0;t<n.length;t++){const i=vo(n[t]);for(const r in i)e[r]=i[r]}return e}function Nw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function cy(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Ow={clone:vo,merge:Pn};var Uw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ds extends pa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uw,this.fragmentShader=Fw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vo(e.uniforms),this.uniformsGroups=Nw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class uy extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=wr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $r=new O,e_=new dt,t_=new dt;class Nn extends uy{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($r.x,$r.y).multiplyScalar(-e/$r.z),$r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($r.x,$r.y).multiplyScalar(-e/$r.z)}getViewSize(e,t){return this.getViewBounds(e,e_,t_),t.subVectors(t_,e_)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ia=-90,Da=1;class Bw extends zt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(Ia,Da,e,t);r.layers=this.layers,this.add(r);const s=new Nn(Ia,Da,e,t);s.layers=this.layers,this.add(s);const a=new Nn(Ia,Da,e,t);a.layers=this.layers,this.add(a);const o=new Nn(Ia,Da,e,t);o.layers=this.layers,this.add(o);const l=new Nn(Ia,Da,e,t);l.layers=this.layers,this.add(l);const c=new Nn(Ia,Da,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===wr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Du)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class fy extends vn{constructor(e=[],t=po,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kw extends na{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new fy(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new hc(5,5,5),s=new ds({name:"CubemapFromEquirect",uniforms:vo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gn,blending:is});s.uniforms.tEquirect.value=t;const a=new ii(r,s),o=t.minFilter;return t.minFilter===Gs&&(t.minFilter=Gi),new Bw(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Ws extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hw={type:"move"};class mh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,i),p=this._getHandJoint(c,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ws;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class zw extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const n_=new O,i_=new lt,r_=new lt,Vw=new O,s_=new Ue,zc=new O,gh=new zo,a_=new Ue,_h=new cm;class Gw extends ii{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ig,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ho),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,zc),this.boundingBox.expandByPoint(zc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zo),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,zc),this.boundingSphere.expandByPoint(zc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gh.copy(this.boundingSphere),gh.applyMatrix4(r),e.ray.intersectsSphere(gh)!==!1&&(a_.copy(r).invert(),_h.copy(e.ray).applyMatrix4(a_),!(this.boundingBox!==null&&_h.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_h)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ig?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===BT?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;i_.fromBufferAttribute(r.attributes.skinIndex,e),r_.fromBufferAttribute(r.attributes.skinWeight,e),n_.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=r_.getComponent(s);if(a!==0){const o=i_.getComponent(s);s_.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Vw.copy(n_).applyMatrix4(s_),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Yd extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ww extends vn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=ai,u=ai,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const o_=new Ue,$w=new Ue;class hm{constructor(e=[],t=[]){this.uuid=Es(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ue;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:$w;o_.multiplyMatrices(o,t[s]),o_.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new hm(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ww(t,e,e,yi,Wi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Yd),this.bones.push(a),this.boneInverses.push(new Ue().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}const vh=new O,Xw=new O,jw=new Ye;class Os{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=vh.subVectors(i,t).cross(Xw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(vh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||jw.getNormalMatrix(e),r=this.coplanarPoint(vh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new zo,qw=new dt(.5,.5),Vc=new O;class dm{constructor(e=new Os,t=new Os,i=new Os,r=new Os,s=new Os,a=new Os){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wr){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],m=r[9],g=r[10],_=r[11],p=r[12],x=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,_-d,y-p).normalize(),i[1].setComponents(l+s,h+c,_+d,y+p).normalize(),i[2].setComponents(l+a,h+u,_+m,y+x).normalize(),i[3].setComponents(l-a,h-u,_-m,y-x).normalize(),i[4].setComponents(l-o,h-f,_-g,y-v).normalize(),t===wr)i[5].setComponents(l+o,h+f,_+g,y+v).normalize();else if(t===Du)i[5].setComponents(o,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){Ps.center.set(0,0,0);const t=qw.distanceTo(e.center);return Ps.radius=.7071067811865476+t,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Vc.x=r.normal.x>0?e.max.x:e.min.x,Vc.y=r.normal.y>0?e.max.y:e.min.y,Vc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hy extends pa{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lu=new O,Nu=new O,l_=new Ue,Jo=new cm,Gc=new zo,yh=new O,c_=new O;class Zw extends zt{constructor(e=new Si,t=new hy){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Lu.fromBufferAttribute(t,r-1),Nu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Lu.distanceTo(Nu);e.setAttribute("lineDistance",new mn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gc.copy(i.boundingSphere),Gc.applyMatrix4(r),Gc.radius+=s,e.ray.intersectsSphere(Gc)===!1)return;l_.copy(r).invert(),Jo.copy(e.ray).applyMatrix4(l_);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=d,_=m-1;g<_;g+=c){const p=u.getX(g),x=u.getX(g+1),v=Wc(this,e,Jo,l,p,x,g);v&&t.push(v)}if(this.isLineLoop){const g=u.getX(m-1),_=u.getX(d),p=Wc(this,e,Jo,l,g,_,m-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=d,_=m-1;g<_;g+=c){const p=Wc(this,e,Jo,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=Wc(this,e,Jo,l,m-1,d,m-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wc(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Lu.fromBufferAttribute(o,r),Nu.fromBufferAttribute(o,s),t.distanceSqToSegment(Lu,Nu,yh,c_)>i)return;yh.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(yh);if(!(c<e.near||c>e.far))return{distance:c,point:c_.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class dy extends vn{constructor(e,t,i=ta,r,s,a,o=ai,l=ai,c,u=wl,f=1){if(u!==wl&&u!==Al)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yw{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(a-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new dt:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new O,r=[],s=[],a=[],o=new O,l=new Ue;for(let d=0;d<=e;d++){const m=d/e;r[d]=this.getTangentAt(m,new O)}s[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(st(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(st(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],d*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Kw(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=py(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=n1(n,e,s,t)),n.length>80*t){o=1/0,l=1/0;let u=-1/0,f=-1/0;for(let h=t;h<r;h+=t){const d=n[h],m=n[h+1];d<o&&(o=d),m<l&&(l=m),d>u&&(u=d),m>f&&(f=m)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return Cl(s,a,t,o,l,c,0),a}function py(n,e,t,i,r){let s;if(r===d1(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=u_(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=u_(a/i|0,n[a],n[a+1],s);return s&&yo(s,s.next)&&(Il(s),s=s.next),s}function ia(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(yo(t,t.next)||$t(t.prev,t,t.next)===0)){if(Il(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Cl(n,e,t,i,r,s,a){if(!n)return;!a&&s&&o1(n,i,r,s);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?Qw(n,i,r,s):Jw(n)){e.push(l.i,n.i,c.i),Il(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=e1(ia(n),e),Cl(n,e,t,i,r,s,2)):a===2&&t1(n,e,t,i,r,s):Cl(ia(n),e,t,i,r,s,1);break}}}function Jw(n){const e=n.prev,t=n,i=n.next;if($t(e,t,i)>=0)return!1;const r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(r,s,a),f=Math.min(o,l,c),h=Math.max(r,s,a),d=Math.max(o,l,c);let m=i.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=f&&m.y<=d&&il(r,o,s,l,a,c,m.x,m.y)&&$t(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Qw(n,e,t,i){const r=n.prev,s=n,a=n.next;if($t(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,f=s.y,h=a.y,d=Math.min(o,l,c),m=Math.min(u,f,h),g=Math.max(o,l,c),_=Math.max(u,f,h),p=Kd(d,m,e,t,i),x=Kd(g,_,e,t,i);let v=n.prevZ,y=n.nextZ;for(;v&&v.z>=p&&y&&y.z<=x;){if(v.x>=d&&v.x<=g&&v.y>=m&&v.y<=_&&v!==r&&v!==a&&il(o,u,l,f,c,h,v.x,v.y)&&$t(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=g&&y.y>=m&&y.y<=_&&y!==r&&y!==a&&il(o,u,l,f,c,h,y.x,y.y)&&$t(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=g&&v.y>=m&&v.y<=_&&v!==r&&v!==a&&il(o,u,l,f,c,h,v.x,v.y)&&$t(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=g&&y.y>=m&&y.y<=_&&y!==r&&y!==a&&il(o,u,l,f,c,h,y.x,y.y)&&$t(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function e1(n,e){let t=n;do{const i=t.prev,r=t.next.next;!yo(i,r)&&gy(i,t,t.next,r)&&Pl(i,r)&&Pl(r,i)&&(e.push(i.i,t.i,r.i),Il(t),Il(t.next),t=n=r),t=t.next}while(t!==n);return ia(t)}function t1(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&u1(a,o)){let l=_y(a,o);a=ia(a,a.next),l=ia(l,l.next),Cl(a,e,t,i,r,s,0),Cl(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function n1(n,e,t,i){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=py(n,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(c1(c))}r.sort(i1);for(let s=0;s<r.length;s++)t=r1(r[s],t);return t}function i1(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function r1(n,e){const t=s1(n,e);if(!t)return e;const i=_y(t,n);return ia(i,i.next),ia(t,t.next)}function s1(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,a;if(yo(n,t))return t;do{if(yo(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,a=t.x<t.next.x?t:t.next,f===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&my(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const f=Math.abs(r-t.y)/(i-t.x);Pl(t,n)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&a1(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function a1(n,e){return $t(n.prev,n,e.prev)<0&&$t(e.next,n,n.next)<0}function o1(n,e,t,i){let r=n;do r.z===0&&(r.z=Kd(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,l1(r)}function l1(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,t*=2}while(e>1);return n}function Kd(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function c1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function my(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function il(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&my(n,e,t,i,r,s,a,o)}function u1(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!f1(n,e)&&(Pl(n,e)&&Pl(e,n)&&h1(n,e)&&($t(n.prev,n,e.prev)||$t(n,e.prev,e))||yo(n,e)&&$t(n.prev,n,n.next)>0&&$t(e.prev,e,e.next)>0)}function $t(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function yo(n,e){return n.x===e.x&&n.y===e.y}function gy(n,e,t,i){const r=Xc($t(n,e,t)),s=Xc($t(n,e,i)),a=Xc($t(t,i,n)),o=Xc($t(t,i,e));return!!(r!==s&&a!==o||r===0&&$c(n,t,e)||s===0&&$c(n,i,e)||a===0&&$c(t,n,i)||o===0&&$c(t,e,i))}function $c(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Xc(n){return n>0?1:n<0?-1:0}function f1(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&gy(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Pl(n,e){return $t(n.prev,n,n.next)<0?$t(n,e,n.next)>=0&&$t(n,n.prev,e)>=0:$t(n,e,n.prev)<0||$t(n,n.next,e)<0}function h1(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function _y(n,e){const t=Jd(n.i,n.x,n.y),i=Jd(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function u_(n,e,t,i){const r=Jd(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Il(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Jd(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function d1(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class p1{static triangulate(e,t,i=2){return Kw(e,t,i)}}class pm{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return pm.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];f_(e),h_(i,e);let a=e.length;t.forEach(f_);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,h_(i,t[l]);const o=p1.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function f_(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function h_(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class bf extends Si{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],m=[],g=[],_=[];for(let p=0;p<u;p++){const x=p*h-a;for(let v=0;v<c;v++){const y=v*f-s;m.push(y,-x,0),g.push(0,0,1),_.push(v/o),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const v=x+c*p,y=x+c*(p+1),b=x+1+c*(p+1),E=x+1+c*p;d.push(v,y,E),d.push(y,b,E)}this.setIndex(d),this.setAttribute("position",new mn(m,3)),this.setAttribute("normal",new mn(g,3)),this.setAttribute("uv",new mn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bf(e.width,e.height,e.widthSegments,e.heightSegments)}}class mm extends Si{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new O,h=new O,d=[],m=[],g=[],_=[];for(let p=0;p<=i;p++){const x=[],v=p/i;let y=0;p===0&&a===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){const E=b/t;f.x=-e*Math.cos(r+E*s)*Math.sin(a+v*o),f.y=e*Math.cos(a+v*o),f.z=e*Math.sin(r+E*s)*Math.sin(a+v*o),m.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),_.push(E+y,1-v),x.push(c++)}u.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const v=u[p][x+1],y=u[p][x],b=u[p+1][x],E=u[p+1][x+1];(p!==0||a>0)&&d.push(v,y,E),(p!==i-1||l<Math.PI)&&d.push(y,b,E)}this.setIndex(d),this.setAttribute("position",new mn(m,3)),this.setAttribute("normal",new mn(g,3)),this.setAttribute("uv",new mn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jc extends pa{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xe(16777215),this.specular=new Xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=am,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class m1 extends pa{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=am,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=yf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class g1 extends pa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _1 extends pa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function qc(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function v1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function y1(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function d_(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=n[o+l]}return r}function vy(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push(...a)),s=n[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=n[r++];while(s!==void 0)}class Sf{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class x1 extends Sf{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dg,endingEnd:Dg}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Lg:s=e,o=2*t-i;break;case Ng:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Lg:a=e,l=2*i-t;break;case Ng:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(i-t)/(r-t),g=m*m,_=g*m,p=-h*_+2*h*g-h*m,x=(1+h)*_+(-1.5-2*h)*g+(-.5+h)*m+1,v=(-1-d)*_+(1.5+d)*g+.5*m,y=d*_-d*g;for(let b=0;b!==o;++b)s[b]=p*a[u+b]+x*a[c+b]+v*a[l+b]+y*a[f+b];return s}}class b1 extends Sf{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(r-t),f=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*f+a[l+h]*u;return s}}class S1 extends Sf{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ki{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qc(t,this.TimeBufferType),this.values=qc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:qc(e.times,Array),values:qc(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new S1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new b1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new x1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Pu:t=this.InterpolantFactoryMethodDiscrete;break;case Zd:t=this.InterpolantFactoryMethodLinear;break;case qf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pu;case this.InterpolantFactoryMethodLinear:return Zd;case this.InterpolantFactoryMethodSmooth:return qf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&v1(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===qf,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const f=o*i,h=f-i,d=f+i;for(let m=0;m!==i;++m){const g=t[f+m];if(g!==t[h+m]||g!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*i,h=a*i;for(let d=0;d!==i;++d)t[h+d]=t[f+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ki.prototype.ValueTypeName="";ki.prototype.TimeBufferType=Float32Array;ki.prototype.ValueBufferType=Float32Array;ki.prototype.DefaultInterpolation=Zd;class Vo extends ki{constructor(e,t,i){super(e,t,i)}}Vo.prototype.ValueTypeName="bool";Vo.prototype.ValueBufferType=Array;Vo.prototype.DefaultInterpolation=Pu;Vo.prototype.InterpolantFactoryMethodLinear=void 0;Vo.prototype.InterpolantFactoryMethodSmooth=void 0;class yy extends ki{constructor(e,t,i,r){super(e,t,i,r)}}yy.prototype.ValueTypeName="color";class Dl extends ki{constructor(e,t,i,r){super(e,t,i,r)}}Dl.prototype.ValueTypeName="number";class E1 extends Sf{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Hn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class xo extends ki{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new E1(this.times,this.values,this.getValueSize(),e)}}xo.prototype.ValueTypeName="quaternion";xo.prototype.InterpolantFactoryMethodSmooth=void 0;class Go extends ki{constructor(e,t,i){super(e,t,i)}}Go.prototype.ValueTypeName="string";Go.prototype.ValueBufferType=Array;Go.prototype.DefaultInterpolation=Pu;Go.prototype.InterpolantFactoryMethodLinear=void 0;Go.prototype.InterpolantFactoryMethodSmooth=void 0;class Ll extends ki{constructor(e,t,i,r){super(e,t,i,r)}}Ll.prototype.ValueTypeName="vector";class M1{constructor(e="",t=-1,i=[],r=HT){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Es(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(w1(i[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(ki.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=y1(l);l=d_(l,1,u),c=d_(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Dl(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,d,m,g){if(d.length!==0){const _=[],p=[];vy(d,_,p,m),_.length!==0&&g.push(new f(h,_,p))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let g=0;g<h[m].morphTargets.length;g++)d[h[m].morphTargets[g]]=-1;for(const g in d){const _=[],p=[];for(let x=0;x!==h[m].morphTargets.length;++x){const v=h[m];_.push(v.time),p.push(v.morphTarget===g?1:0)}r.push(new Dl(".morphTargetInfluence["+g+"]",_,p))}l=d.length*a}else{const d=".bones["+t[f].name+"]";i(Ll,d+".position",h,"pos",r),i(xo,d+".quaternion",h,"rot",r),i(Ll,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function T1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Dl;case"vector":case"vector2":case"vector3":case"vector4":return Ll;case"color":return yy;case"quaternion":return xo;case"bool":case"boolean":return Vo;case"string":return Go}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function w1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=T1(n.type);if(n.times===void 0){const t=[],i=[];vy(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const dl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class A1{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}}const R1=new A1;class ra{constructor(e){this.manager=e!==void 0?e:R1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ra.DEFAULT_MATERIAL_NAME="__DEFAULT";const pr={};class C1 extends Error{constructor(e,t){super(e),this.response=t}}class P1 extends ra{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=dl.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(pr[e]!==void 0){pr[e].push({onLoad:t,onProgress:i,onError:r});return}pr[e]=[],pr[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=pr[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,m=d!==0;let g=0;const _=new ReadableStream({start(p){x();function x(){f.read().then(({done:v,value:y})=>{if(v)p.close();else{g+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:d});for(let E=0,w=u.length;E<w;E++){const P=u[E];P.onProgress&&P.onProgress(b)}p.enqueue(y),x()}},v=>{p.error(v)})}}});return new Response(_)}else throw new C1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{dl.add(`file:${e}`,c);const u=pr[e];delete pr[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=pr[e];if(u===void 0)throw this.manager.itemError(e),c;delete pr[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}const La=new WeakMap;class I1 extends ra{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=dl.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=La.get(a);f===void 0&&(f=[],La.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=Rl("img");function l(){u(),t&&t(this);const f=La.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}La.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),dl.remove(`image:${e}`);const h=La.get(this)||[];for(let d=0;d<h.length;d++){const m=h[d];m.onError&&m.onError(f)}La.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),dl.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class xy extends ra{constructor(e){super(e)}load(e,t,i,r){const s=new vn,a=new I1(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Ef extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const xh=new Ue,p_=new O,m_=new O;class gm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=tr,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dm,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;p_.setFromMatrixPosition(e.matrixWorld),t.position.copy(p_),m_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(m_),t.updateMatrixWorld(),xh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class D1 extends gm{constructor(){super(new Nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=_o*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class mu extends Ef{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new D1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const g_=new Ue,Qo=new O,bh=new O;class L1 extends gm{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Qo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Qo),bh.copy(i.position),bh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(bh),i.updateMatrixWorld(),r.makeTranslation(-Qo.x,-Qo.y,-Qo.z),g_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(g_)}}class __ extends Ef{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new L1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class by extends uy{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class N1 extends gm{constructor(){super(new by(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class O1 extends Ef{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new N1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sy extends Ef{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class U1{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class F1 extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const _m="\\[\\]\\.:\\/",B1=new RegExp("["+_m+"]","g"),vm="[^"+_m+"]",k1="[^"+_m.replace("\\.","")+"]",H1=/((?:WC+[\/:])*)/.source.replace("WC",vm),z1=/(WCOD+)?/.source.replace("WCOD",k1),V1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vm),G1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vm),W1=new RegExp("^"+H1+z1+V1+G1+"$"),$1=["material","materials","bones","map"];class X1{constructor(e,t,i){const r=i||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class bt{constructor(e,t,i){this.path=t,this.parsedPath=i||bt.parseTrackName(t),this.node=bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new bt.Composite(e,t,i):new bt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(B1,"")}static parseTrackName(e){const t=W1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);$1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}bt.Composite=X1;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function v_(n,e,t,i){const r=j1(i);switch(t){case J0:return n*e;case ey:return n*e/r.components*r.byteLength;case im:return n*e/r.components*r.byteLength;case ty:return n*e*2/r.components*r.byteLength;case rm:return n*e*2/r.components*r.byteLength;case Q0:return n*e*3/r.components*r.byteLength;case yi:return n*e*4/r.components*r.byteLength;case sm:return n*e*4/r.components*r.byteLength;case uu:case fu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hu:case du:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Md:case wd:return Math.max(n,16)*Math.max(e,8)/4;case Ed:case Td:return Math.max(n,8)*Math.max(e,8)/2;case Ad:case Rd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Cd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Dd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Od:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Bd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case kd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case zd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vd:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Gd:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case pu:case Wd:case $d:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ny:case Xd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jd:case qd:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function j1(n){switch(n){case tr:case Z0:return{byteLength:1,components:1};case Ml:case Y0:case fc:return{byteLength:2,components:1};case tm:case nm:return{byteLength:2,components:4};case ta:case em:case Wi:return{byteLength:4,components:1};case K0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ey(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function q1(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){const m=f[h],g=f[d];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++h,f[h]=g)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){const g=f[d];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Z1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,K1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_A=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TA="gl_FragColor = linearToOutputTexel( gl_FragColor );",wA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,RA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,PA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,VA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$A=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_R=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ER=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,MR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,IR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,LR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,UR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,WR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$R=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_C=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,EC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,AC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:Z1,alphahash_pars_fragment:Y1,alphamap_fragment:K1,alphamap_pars_fragment:J1,alphatest_fragment:Q1,alphatest_pars_fragment:eA,aomap_fragment:tA,aomap_pars_fragment:nA,batching_pars_vertex:iA,batching_vertex:rA,begin_vertex:sA,beginnormal_vertex:aA,bsdfs:oA,iridescence_fragment:lA,bumpmap_pars_fragment:cA,clipping_planes_fragment:uA,clipping_planes_pars_fragment:fA,clipping_planes_pars_vertex:hA,clipping_planes_vertex:dA,color_fragment:pA,color_pars_fragment:mA,color_pars_vertex:gA,color_vertex:_A,common:vA,cube_uv_reflection_fragment:yA,defaultnormal_vertex:xA,displacementmap_pars_vertex:bA,displacementmap_vertex:SA,emissivemap_fragment:EA,emissivemap_pars_fragment:MA,colorspace_fragment:TA,colorspace_pars_fragment:wA,envmap_fragment:AA,envmap_common_pars_fragment:RA,envmap_pars_fragment:CA,envmap_pars_vertex:PA,envmap_physical_pars_fragment:zA,envmap_vertex:IA,fog_vertex:DA,fog_pars_vertex:LA,fog_fragment:NA,fog_pars_fragment:OA,gradientmap_pars_fragment:UA,lightmap_pars_fragment:FA,lights_lambert_fragment:BA,lights_lambert_pars_fragment:kA,lights_pars_begin:HA,lights_toon_fragment:VA,lights_toon_pars_fragment:GA,lights_phong_fragment:WA,lights_phong_pars_fragment:$A,lights_physical_fragment:XA,lights_physical_pars_fragment:jA,lights_fragment_begin:qA,lights_fragment_maps:ZA,lights_fragment_end:YA,logdepthbuf_fragment:KA,logdepthbuf_pars_fragment:JA,logdepthbuf_pars_vertex:QA,logdepthbuf_vertex:eR,map_fragment:tR,map_pars_fragment:nR,map_particle_fragment:iR,map_particle_pars_fragment:rR,metalnessmap_fragment:sR,metalnessmap_pars_fragment:aR,morphinstance_vertex:oR,morphcolor_vertex:lR,morphnormal_vertex:cR,morphtarget_pars_vertex:uR,morphtarget_vertex:fR,normal_fragment_begin:hR,normal_fragment_maps:dR,normal_pars_fragment:pR,normal_pars_vertex:mR,normal_vertex:gR,normalmap_pars_fragment:_R,clearcoat_normal_fragment_begin:vR,clearcoat_normal_fragment_maps:yR,clearcoat_pars_fragment:xR,iridescence_pars_fragment:bR,opaque_fragment:SR,packing:ER,premultiplied_alpha_fragment:MR,project_vertex:TR,dithering_fragment:wR,dithering_pars_fragment:AR,roughnessmap_fragment:RR,roughnessmap_pars_fragment:CR,shadowmap_pars_fragment:PR,shadowmap_pars_vertex:IR,shadowmap_vertex:DR,shadowmask_pars_fragment:LR,skinbase_vertex:NR,skinning_pars_vertex:OR,skinning_vertex:UR,skinnormal_vertex:FR,specularmap_fragment:BR,specularmap_pars_fragment:kR,tonemapping_fragment:HR,tonemapping_pars_fragment:zR,transmission_fragment:VR,transmission_pars_fragment:GR,uv_pars_fragment:WR,uv_pars_vertex:$R,uv_vertex:XR,worldpos_vertex:jR,background_vert:qR,background_frag:ZR,backgroundCube_vert:YR,backgroundCube_frag:KR,cube_vert:JR,cube_frag:QR,depth_vert:eC,depth_frag:tC,distanceRGBA_vert:nC,distanceRGBA_frag:iC,equirect_vert:rC,equirect_frag:sC,linedashed_vert:aC,linedashed_frag:oC,meshbasic_vert:lC,meshbasic_frag:cC,meshlambert_vert:uC,meshlambert_frag:fC,meshmatcap_vert:hC,meshmatcap_frag:dC,meshnormal_vert:pC,meshnormal_frag:mC,meshphong_vert:gC,meshphong_frag:_C,meshphysical_vert:vC,meshphysical_frag:yC,meshtoon_vert:xC,meshtoon_frag:bC,points_vert:SC,points_frag:EC,shadow_vert:MC,shadow_frag:TC,sprite_vert:wC,sprite_frag:AC},ue={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},zi={basic:{uniforms:Pn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Pn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Xe(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Pn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Pn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Pn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Xe(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Pn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Pn([ue.points,ue.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Pn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Pn([ue.common,ue.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Pn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Pn([ue.sprite,ue.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:Pn([ue.common,ue.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:Pn([ue.lights,ue.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};zi.physical={uniforms:Pn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Zc={r:0,b:0,g:0},Is=new un,RC=new Ue;function CC(n,e,t,i,r,s,a){const o=new Xe(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function m(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function g(v){let y=!1;const b=m(v);b===null?p(o,l):b&&b.isColor&&(p(b,1),y=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,y){const b=m(y);b&&(b.isCubeTexture||b.mapping===xf)?(u===void 0&&(u=new ii(new hc(1,1,1),new ds({name:"BackgroundCubeMaterial",uniforms:vo(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Is.copy(y.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(RC.makeRotationFromEuler(Is)),u.material.toneMapped=nt.getTransfer(b.colorSpace)!==wt,(f!==b||h!==b.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,d=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ii(new bf(2,2),new ds({name:"BackgroundMaterial",uniforms:vo(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=nt.getTransfer(b.colorSpace)!==wt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(Zc,cy(n)),i.buffers.color.setClear(Zc.r,Zc.g,Zc.b,y,a)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:g,addToRenderList:_,dispose:x}}function PC(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(T,R,N,D,V){let G=!1;const B=f(D,N,R);s!==B&&(s=B,c(s.object)),G=d(T,D,N,V),G&&m(T,D,N,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(T,R,N,D),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function f(T,R,N){const D=N.wireframe===!0;let V=i[T.id];V===void 0&&(V={},i[T.id]=V);let G=V[R.id];G===void 0&&(G={},V[R.id]=G);let B=G[D];return B===void 0&&(B=h(l()),G[D]=B),B}function h(T){const R=[],N=[],D=[];for(let V=0;V<t;V++)R[V]=0,N[V]=0,D[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:D,object:T,attributes:{},index:null}}function d(T,R,N,D){const V=s.attributes,G=R.attributes;let B=0;const Z=N.getAttributes();for(const H in Z)if(Z[H].location>=0){const K=V[H];let te=G[H];if(te===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(te=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(te=T.instanceColor)),K===void 0||K.attribute!==te||te&&K.data!==te.data)return!0;B++}return s.attributesNum!==B||s.index!==D}function m(T,R,N,D){const V={},G=R.attributes;let B=0;const Z=N.getAttributes();for(const H in Z)if(Z[H].location>=0){let K=G[H];K===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(K=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(K=T.instanceColor));const te={};te.attribute=K,K&&K.data&&(te.data=K.data),V[H]=te,B++}s.attributes=V,s.attributesNum=B,s.index=D}function g(){const T=s.newAttributes;for(let R=0,N=T.length;R<N;R++)T[R]=0}function _(T){p(T,0)}function p(T,R){const N=s.newAttributes,D=s.enabledAttributes,V=s.attributeDivisors;N[T]=1,D[T]===0&&(n.enableVertexAttribArray(T),D[T]=1),V[T]!==R&&(n.vertexAttribDivisor(T,R),V[T]=R)}function x(){const T=s.newAttributes,R=s.enabledAttributes;for(let N=0,D=R.length;N<D;N++)R[N]!==T[N]&&(n.disableVertexAttribArray(N),R[N]=0)}function v(T,R,N,D,V,G,B){B===!0?n.vertexAttribIPointer(T,R,N,V,G):n.vertexAttribPointer(T,R,N,D,V,G)}function y(T,R,N,D){g();const V=D.attributes,G=N.getAttributes(),B=R.defaultAttributeValues;for(const Z in G){const H=G[Z];if(H.location>=0){let k=V[Z];if(k===void 0&&(Z==="instanceMatrix"&&T.instanceMatrix&&(k=T.instanceMatrix),Z==="instanceColor"&&T.instanceColor&&(k=T.instanceColor)),k!==void 0){const K=k.normalized,te=k.itemSize,ge=e.get(k);if(ge===void 0)continue;const Le=ge.buffer,W=ge.type,ee=ge.bytesPerElement,be=W===n.INT||W===n.UNSIGNED_INT||k.gpuType===em;if(k.isInterleavedBufferAttribute){const le=k.data,Me=le.stride,et=k.offset;if(le.isInstancedInterleavedBuffer){for(let Oe=0;Oe<H.locationSize;Oe++)p(H.location+Oe,le.meshPerAttribute);T.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)_(H.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let Oe=0;Oe<H.locationSize;Oe++)v(H.location+Oe,te/H.locationSize,W,K,Me*ee,(et+te/H.locationSize*Oe)*ee,be)}else{if(k.isInstancedBufferAttribute){for(let le=0;le<H.locationSize;le++)p(H.location+le,k.meshPerAttribute);T.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let le=0;le<H.locationSize;le++)_(H.location+le);n.bindBuffer(n.ARRAY_BUFFER,Le);for(let le=0;le<H.locationSize;le++)v(H.location+le,te/H.locationSize,W,K,te*ee,te/H.locationSize*le*ee,be)}}else if(B!==void 0){const K=B[Z];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(H.location,K);break;case 3:n.vertexAttrib3fv(H.location,K);break;case 4:n.vertexAttrib4fv(H.location,K);break;default:n.vertexAttrib1fv(H.location,K)}}}}x()}function b(){P();for(const T in i){const R=i[T];for(const N in R){const D=R[N];for(const V in D)u(D[V].object),delete D[V];delete R[N]}delete i[T]}}function E(T){if(i[T.id]===void 0)return;const R=i[T.id];for(const N in R){const D=R[N];for(const V in D)u(D[V].object),delete D[V];delete R[N]}delete i[T.id]}function w(T){for(const R in i){const N=i[R];if(N[T.id]===void 0)continue;const D=N[T.id];for(const V in D)u(D[V].object),delete D[V];delete N[T.id]}}function P(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:_,disableUnusedAttributes:x}}function IC(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let m=0;m<f;m++)d+=u[m];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],u[m],h[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g]*h[g];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function DC(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==yi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===fc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==tr&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Wi&&!P)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=m>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:b,maxSamples:E}}function LC(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Os,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const m=f.clippingPlanes,g=f.clipIntersection,_=f.clipShadows,p=n.get(f);if(!r||m===null||m.length===0||s&&!_)s?u(null):c();else{const x=s?0:i,v=x*4;let y=p.clippingState||null;l.value=y,y=u(m,h,v,d);for(let b=0;b!==v;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,m){const g=f!==null?f.length:0;let _=null;if(g!==0){if(_=l.value,m!==!0||_===null){const p=d+g*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(_===null||_.length<p)&&(_=new Float32Array(p));for(let v=0,y=d;v!==g;++v,y+=4)a.copy(f[v]).applyMatrix4(x,o),a.normal.toArray(_,y),_[y+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function NC(n){let e=new WeakMap;function t(a,o){return o===Cu?a.mapping=po:o===bd&&(a.mapping=mo),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Cu||o===bd)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new kw(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const za=4,y_=[.125,.215,.35,.446,.526,.582],Hs=20,Sh=new by,x_=new Xe;let Eh=null,Mh=0,Th=0,wh=!1;const Us=(1+Math.sqrt(5))/2,Na=1/Us,b_=[new O(-Us,Na,0),new O(Us,Na,0),new O(-Na,0,Us),new O(Na,0,Us),new O(0,Us,-Na),new O(0,Us,Na),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],OC=new O;class S_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=OC}=s;Eh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=M_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eh,Mh,Th),this._renderer.xr.enabled=wh,e.scissorTest=!1,Yc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===po||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Th=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gi,minFilter:Gi,generateMipmaps:!1,type:fc,format:yi,colorSpace:go,depthBuffer:!1},r=E_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E_(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UC(s)),this._blurMaterial=FC(s,e,t)}return r}_compileMaterial(e){const t=new ii(this._lodPlanes[0],e);this._renderer.compile(t,Sh)}_sceneToCubeUV(e,t,i,r,s){const l=new Nn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(x_),f.toneMapping=rs,f.autoClear=!1;const m=new um({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),g=new ii(new hc,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(x_),_=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[x],s.y,s.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[x]));const y=this._cubeSize;Yc(r,v*y,x>2?y:0,y,y),f.setRenderTarget(r),_&&f.render(g,l),f.render(e,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===po||e.mapping===mo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=T_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=M_());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ii(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Yc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Sh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=b_[(r-s-1)%b_.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ii(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Hs-1),g=s/m,_=isFinite(s)?1+Math.floor(u*g):Hs;_>Hs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Hs}`);const p=[];let x=0;for(let w=0;w<Hs;++w){const P=w/g,S=Math.exp(-P*P/2);p.push(S),w===0?x+=S:w<_&&(x+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=m,h.mipInt.value=v-i;const y=this._sizeLods[r],b=3*y*(r>v-za?r-v+za:0),E=4*(this._cubeSize-y);Yc(t,b,E,3*y,2*y),l.setRenderTarget(t),l.render(f,Sh)}}function UC(n){const e=[],t=[],i=[];let r=n;const s=n-za+1+y_.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-za?l=y_[a-n+za-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,g=3,_=2,p=1,x=new Float32Array(g*m*d),v=new Float32Array(_*m*d),y=new Float32Array(p*m*d);for(let E=0;E<d;E++){const w=E%3*2/3-1,P=E>2?0:-1,S=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];x.set(S,g*m*E),v.set(h,_*m*E);const T=[E,E,E,E,E,E];y.set(T,p*m*E)}const b=new Si;b.setAttribute("position",new Zi(x,g)),b.setAttribute("uv",new Zi(v,_)),b.setAttribute("faceIndex",new Zi(y,p)),e.push(b),r>za&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function E_(n,e,t){const i=new na(n,e,t);return i.texture.mapping=xf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function FC(n,e,t){const i=new Float32Array(Hs),r=new O(0,1,0);return new ds({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ym(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function M_(){return new ds({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ym(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function T_(){return new ds({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ym(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function ym(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function BC(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Cu||l===bd,u=l===po||l===mo;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new S_(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new S_(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function kC(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ya("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function HC(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,m=f.attributes.position;let g=0;if(d!==null){const x=d.array;g=d.version;for(let v=0,y=x.length;v<y;v+=3){const b=x[v+0],E=x[v+1],w=x[v+2];h.push(b,E,E,w,w,b)}}else if(m!==void 0){const x=m.array;g=m.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const b=v+0,E=v+1,w=v+2;h.push(b,E,E,w,w,b)}}else return;const _=new(ry(h)?ly:fm)(h,1);_.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,_)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function zC(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*a),t.update(d,i,1)}function c(h,d,m){m!==0&&(n.drawElementsInstanced(i,d,s,h*a,m),t.update(d,i,m))}function u(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,m);let _=0;for(let p=0;p<m;p++)_+=d[p];t.update(_,i,1)}function f(h,d,m,g){if(m===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<h.length;p++)c(h[p]/a,d[p],g[p]);else{_.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,g,0,m);let p=0;for(let x=0;x<m;x++)p+=d[x]*g[x];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function VC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function GC(n,e,t){const i=new WeakMap,r=new lt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let T=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",T)};var d=T;h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let b=o.attributes.position.count*y,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*E*4*f),P=new sy(w,b,E,f);P.type=Wi,P.needsUpdate=!0;const S=y*4;for(let R=0;R<f;R++){const N=p[R],D=x[R],V=v[R],G=b*E*4*R;for(let B=0;B<N.count;B++){const Z=B*S;m===!0&&(r.fromBufferAttribute(N,B),w[G+Z+0]=r.x,w[G+Z+1]=r.y,w[G+Z+2]=r.z,w[G+Z+3]=0),g===!0&&(r.fromBufferAttribute(D,B),w[G+Z+4]=r.x,w[G+Z+5]=r.y,w[G+Z+6]=r.z,w[G+Z+7]=0),_===!0&&(r.fromBufferAttribute(V,B),w[G+Z+8]=r.x,w[G+Z+9]=r.y,w[G+Z+10]=r.z,w[G+Z+11]=V.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new dt(b,E)},i.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function WC(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const My=new vn,w_=new dy(1,1),Ty=new sy,wy=new Sw,Ay=new fy,A_=[],R_=[],C_=new Float32Array(16),P_=new Float32Array(9),I_=new Float32Array(4);function Wo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=A_[r];if(s===void 0&&(s=new Float32Array(r),A_[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function sn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function an(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Mf(n,e){let t=R_[e];t===void 0&&(t=new Int32Array(e),R_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $C(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function XC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2fv(this.addr,e),an(t,e)}}function jC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;n.uniform3fv(this.addr,e),an(t,e)}}function qC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4fv(this.addr,e),an(t,e)}}function ZC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(sn(t,i))return;I_.set(i),n.uniformMatrix2fv(this.addr,!1,I_),an(t,i)}}function YC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(sn(t,i))return;P_.set(i),n.uniformMatrix3fv(this.addr,!1,P_),an(t,i)}}function KC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(sn(t,i))return;C_.set(i),n.uniformMatrix4fv(this.addr,!1,C_),an(t,i)}}function JC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function QC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2iv(this.addr,e),an(t,e)}}function eP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3iv(this.addr,e),an(t,e)}}function tP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4iv(this.addr,e),an(t,e)}}function nP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function iP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2uiv(this.addr,e),an(t,e)}}function rP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3uiv(this.addr,e),an(t,e)}}function sP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4uiv(this.addr,e),an(t,e)}}function aP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(w_.compareFunction=iy,s=w_):s=My,t.setTexture2D(e||s,r)}function oP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wy,r)}function lP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ay,r)}function cP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ty,r)}function uP(n){switch(n){case 5126:return $C;case 35664:return XC;case 35665:return jC;case 35666:return qC;case 35674:return ZC;case 35675:return YC;case 35676:return KC;case 5124:case 35670:return JC;case 35667:case 35671:return QC;case 35668:case 35672:return eP;case 35669:case 35673:return tP;case 5125:return nP;case 36294:return iP;case 36295:return rP;case 36296:return sP;case 35678:case 36198:case 36298:case 36306:case 35682:return aP;case 35679:case 36299:case 36307:return oP;case 35680:case 36300:case 36308:case 36293:return lP;case 36289:case 36303:case 36311:case 36292:return cP}}function fP(n,e){n.uniform1fv(this.addr,e)}function hP(n,e){const t=Wo(e,this.size,2);n.uniform2fv(this.addr,t)}function dP(n,e){const t=Wo(e,this.size,3);n.uniform3fv(this.addr,t)}function pP(n,e){const t=Wo(e,this.size,4);n.uniform4fv(this.addr,t)}function mP(n,e){const t=Wo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function gP(n,e){const t=Wo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _P(n,e){const t=Wo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function vP(n,e){n.uniform1iv(this.addr,e)}function yP(n,e){n.uniform2iv(this.addr,e)}function xP(n,e){n.uniform3iv(this.addr,e)}function bP(n,e){n.uniform4iv(this.addr,e)}function SP(n,e){n.uniform1uiv(this.addr,e)}function EP(n,e){n.uniform2uiv(this.addr,e)}function MP(n,e){n.uniform3uiv(this.addr,e)}function TP(n,e){n.uniform4uiv(this.addr,e)}function wP(n,e,t){const i=this.cache,r=e.length,s=Mf(t,r);sn(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||My,s[a])}function AP(n,e,t){const i=this.cache,r=e.length,s=Mf(t,r);sn(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||wy,s[a])}function RP(n,e,t){const i=this.cache,r=e.length,s=Mf(t,r);sn(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ay,s[a])}function CP(n,e,t){const i=this.cache,r=e.length,s=Mf(t,r);sn(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ty,s[a])}function PP(n){switch(n){case 5126:return fP;case 35664:return hP;case 35665:return dP;case 35666:return pP;case 35674:return mP;case 35675:return gP;case 35676:return _P;case 5124:case 35670:return vP;case 35667:case 35671:return yP;case 35668:case 35672:return xP;case 35669:case 35673:return bP;case 5125:return SP;case 36294:return EP;case 36295:return MP;case 36296:return TP;case 35678:case 36198:case 36298:case 36306:case 35682:return wP;case 35679:case 36299:case 36307:return AP;case 35680:case 36300:case 36308:case 36293:return RP;case 36289:case 36303:case 36311:case 36292:return CP}}class IP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=uP(t.type)}}class DP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=PP(t.type)}}class LP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ah=/(\w+)(\])?(\[|\.)?/g;function D_(n,e){n.seq.push(e),n.map[e.id]=e}function NP(n,e,t){const i=n.name,r=i.length;for(Ah.lastIndex=0;;){const s=Ah.exec(i),a=Ah.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){D_(t,c===void 0?new IP(o,n,e):new DP(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new LP(o),D_(t,f)),t=f}}}class gu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);NP(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function L_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const OP=37297;let UP=0;function FP(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const N_=new Ye;function BP(n){nt._getMatrix(N_,nt.workingColorSpace,n);const e=`mat3( ${N_.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case Iu:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function O_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+FP(n.getShaderSource(e),a)}else return r}function kP(n,e){const t=BP(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function HP(n,e){let t;switch(e){case IT:t="Linear";break;case DT:t="Reinhard";break;case LT:t="Cineon";break;case NT:t="ACESFilmic";break;case UT:t="AgX";break;case FT:t="Neutral";break;case OT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Kc=new O;function zP(){nt.getLuminanceCoefficients(Kc);const n=Kc.x.toFixed(4),e=Kc.y.toFixed(4),t=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function GP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function WP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function rl(n){return n!==""}function U_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function F_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $P=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(n){return n.replace($P,jP)}const XP=new Map;function jP(n,e){let t=tt[e];if(t===void 0){const i=XP.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qd(t)}const qP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B_(n){return n.replace(qP,ZP)}function ZP(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function k_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function YP(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===j0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===uT?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===mr&&(e="SHADOWMAP_TYPE_VSM"),e}function KP(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case po:case mo:e="ENVMAP_TYPE_CUBE";break;case xf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JP(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case mo:e="ENVMAP_MODE_REFRACTION";break}return e}function QP(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yf:e="ENVMAP_BLENDING_MULTIPLY";break;case CT:e="ENVMAP_BLENDING_MIX";break;case PT:e="ENVMAP_BLENDING_ADD";break}return e}function eI(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function tI(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=YP(t),c=KP(t),u=JP(t),f=QP(t),h=eI(t),d=VP(t),m=GP(s),g=r.createProgram();let _,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(rl).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(rl).join(`
`),p.length>0&&(p+=`
`)):(_=[k_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),p=[k_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rs?"#define TONE_MAPPING":"",t.toneMapping!==rs?tt.tonemapping_pars_fragment:"",t.toneMapping!==rs?HP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,kP("linearToOutputTexel",t.outputColorSpace),zP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rl).join(`
`)),a=Qd(a),a=U_(a,t),a=F_(a,t),o=Qd(o),o=U_(o,t),o=F_(o,t),a=B_(a),o=B_(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=x+_+a,y=x+p+o,b=L_(r,r.VERTEX_SHADER,v),E=L_(r,r.FRAGMENT_SHADER,y);r.attachShader(g,b),r.attachShader(g,E),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function w(R){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(g).trim(),D=r.getShaderInfoLog(b).trim(),V=r.getShaderInfoLog(E).trim();let G=!0,B=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,b,E);else{const Z=O_(r,b,"vertex"),H=O_(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+Z+`
`+H)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||V==="")&&(B=!1);B&&(R.diagnostics={runnable:G,programLog:N,vertexShader:{log:D,prefix:_},fragmentShader:{log:V,prefix:p}})}r.deleteShader(b),r.deleteShader(E),P=new gu(r,g),S=WP(r,g)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(g,OP)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UP++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=E,this}let nI=0;class iI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rI(e),t.set(e,i)),i}}class rI{constructor(e){this.id=nI++,this.code=e,this.usedTimes=0}}function sI(n,e,t,i,r,s,a){const o=new ay,l=new iI,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function _(S,T,R,N,D){const V=N.fog,G=D.geometry,B=S.isMeshStandardMaterial?N.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),H=Z&&Z.mapping===xf?Z.image.height:null,k=m[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const K=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,te=K!==void 0?K.length:0;let ge=0;G.morphAttributes.position!==void 0&&(ge=1),G.morphAttributes.normal!==void 0&&(ge=2),G.morphAttributes.color!==void 0&&(ge=3);let Le,W,ee,be;if(k){const Et=zi[k];Le=Et.vertexShader,W=Et.fragmentShader}else Le=S.vertexShader,W=S.fragmentShader,l.update(S),ee=l.getVertexShaderID(S),be=l.getFragmentShaderID(S);const le=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),et=D.isInstancedMesh===!0,Oe=D.isBatchedMesh===!0,mt=!!S.map,at=!!S.matcap,se=!!Z,C=!!S.aoMap,Re=!!S.lightMap,_e=!!S.bumpMap,Je=!!S.normalMap,Ee=!!S.displacementMap,qe=!!S.emissiveMap,ve=!!S.metalnessMap,De=!!S.roughnessMap,St=S.anisotropy>0,I=S.clearcoat>0,M=S.dispersion>0,z=S.iridescence>0,j=S.sheen>0,Y=S.transmission>0,q=St&&!!S.anisotropyMap,ye=I&&!!S.clearcoatMap,oe=I&&!!S.clearcoatNormalMap,xe=I&&!!S.clearcoatRoughnessMap,we=z&&!!S.iridescenceMap,Q=z&&!!S.iridescenceThicknessMap,de=j&&!!S.sheenColorMap,ke=j&&!!S.sheenRoughnessMap,Ne=!!S.specularMap,ce=!!S.specularColorMap,je=!!S.specularIntensityMap,L=Y&&!!S.transmissionMap,pe=Y&&!!S.thicknessMap,ne=!!S.gradientMap,Ae=!!S.alphaMap,re=S.alphaTest>0,J=!!S.alphaHash,Ce=!!S.extensions;let Ze=rs;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ze=n.toneMapping);const Lt={shaderID:k,shaderType:S.type,shaderName:S.name,vertexShader:Le,fragmentShader:W,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:be,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Oe,batchingColor:Oe&&D._colorsTexture!==null,instancing:et,instancingColor:et&&D.instanceColor!==null,instancingMorph:et&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:go,alphaToCoverage:!!S.alphaToCoverage,map:mt,matcap:at,envMap:se,envMapMode:se&&Z.mapping,envMapCubeUVHeight:H,aoMap:C,lightMap:Re,bumpMap:_e,normalMap:Je,displacementMap:h&&Ee,emissiveMap:qe,normalMapObjectSpace:Je&&S.normalMapType===GT,normalMapTangentSpace:Je&&S.normalMapType===am,metalnessMap:ve,roughnessMap:De,anisotropy:St,anisotropyMap:q,clearcoat:I,clearcoatMap:ye,clearcoatNormalMap:oe,clearcoatRoughnessMap:xe,dispersion:M,iridescence:z,iridescenceMap:we,iridescenceThicknessMap:Q,sheen:j,sheenColorMap:de,sheenRoughnessMap:ke,specularMap:Ne,specularColorMap:ce,specularIntensityMap:je,transmission:Y,transmissionMap:L,thicknessMap:pe,gradientMap:ne,opaque:S.transparent===!1&&S.blending===Za&&S.alphaToCoverage===!1,alphaMap:Ae,alphaTest:re,alphaHash:J,combine:S.combine,mapUv:mt&&g(S.map.channel),aoMapUv:C&&g(S.aoMap.channel),lightMapUv:Re&&g(S.lightMap.channel),bumpMapUv:_e&&g(S.bumpMap.channel),normalMapUv:Je&&g(S.normalMap.channel),displacementMapUv:Ee&&g(S.displacementMap.channel),emissiveMapUv:qe&&g(S.emissiveMap.channel),metalnessMapUv:ve&&g(S.metalnessMap.channel),roughnessMapUv:De&&g(S.roughnessMap.channel),anisotropyMapUv:q&&g(S.anisotropyMap.channel),clearcoatMapUv:ye&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:de&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:ke&&g(S.sheenRoughnessMap.channel),specularMapUv:Ne&&g(S.specularMap.channel),specularColorMapUv:ce&&g(S.specularColorMap.channel),specularIntensityMapUv:je&&g(S.specularIntensityMap.channel),transmissionMapUv:L&&g(S.transmissionMap.channel),thicknessMapUv:pe&&g(S.thicknessMap.channel),alphaMapUv:Ae&&g(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Je||St),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&(mt||Ae),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Me,skinning:D.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ge,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ze,decodeVideoTexture:mt&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===wt,decodeVideoTextureEmissive:qe&&S.emissiveMap.isVideoTexture===!0&&nt.getTransfer(S.emissiveMap.colorSpace)===wt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mr,flipSided:S.side===Gn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ce&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&S.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Lt.vertexUv1s=c.has(1),Lt.vertexUv2s=c.has(2),Lt.vertexUv3s=c.has(3),c.clear(),Lt}function p(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)T.push(R),T.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(x(T,S),v(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function x(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function v(S,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),T.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reverseDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const T=m[S.type];let R;if(T){const N=zi[T];R=Ow.clone(N.uniforms)}else R=S.uniforms;return R}function b(S,T){let R;for(let N=0,D=u.length;N<D;N++){const V=u[N];if(V.cacheKey===T){R=V,++R.usedTimes;break}}return R===void 0&&(R=new tI(n,T,S,s),u.push(R)),R}function E(S){if(--S.usedTimes===0){const T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),S.destroy()}}function w(S){l.remove(S)}function P(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:P}}function aI(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function oI(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function H_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function z_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,d,m,g,_){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:m,renderOrder:f.renderOrder,z:g,group:_},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=g,p.group=_),e++,p}function o(f,h,d,m,g,_){const p=a(f,h,d,m,g,_);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,m,g,_){const p=a(f,h,d,m,g,_);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||oI),i.length>1&&i.sort(h||H_),r.length>1&&r.sort(h||H_)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function lI(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new z_,n.set(i,[a])):r>=s.length?(a=new z_,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function cI(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Xe};break;case"SpotLight":t={position:new O,direction:new O,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function uI(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let fI=0;function hI(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function dI(n){const e=new cI,t=uI(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new Ue,a=new Ue;function o(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,m=0,g=0,_=0,p=0,x=0,v=0,y=0,b=0,E=0,w=0;c.sort(hI);for(let S=0,T=c.length;S<T;S++){const R=c[S],N=R.color,D=R.intensity,V=R.distance,G=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=N.r*D,f+=N.g*D,h+=N.b*D;else if(R.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(R.sh.coefficients[B],D);w++}else if(R.isDirectionalLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,H=t.get(R);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=G,i.directionalShadowMatrix[d]=R.shadow.matrix,x++}i.directional[d]=B,d++}else if(R.isSpotLight){const B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(N).multiplyScalar(D),B.distance=V,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,i.spot[g]=B;const Z=R.shadow;if(R.map&&(i.spotLightMap[b]=R.map,b++,Z.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[g]=Z.matrix,R.castShadow){const H=t.get(R);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,i.spotShadow[g]=H,i.spotShadowMap[g]=G,y++}g++}else if(R.isRectAreaLight){const B=e.get(R);B.color.copy(N).multiplyScalar(D),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),i.rectArea[_]=B,_++}else if(R.isPointLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){const Z=R.shadow,H=t.get(R);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,i.pointShadow[m]=H,i.pointShadowMap[m]=G,i.pointShadowMatrix[m]=R.shadow.matrix,v++}i.point[m]=B,m++}else if(R.isHemisphereLight){const B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(D),B.groundColor.copy(R.groundColor).multiplyScalar(D),i.hemi[p]=B,p++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==g||P.rectAreaLength!==_||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==y||P.numSpotMaps!==b||P.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=_,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+b-E,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,P.directionalLength=d,P.pointLength=m,P.spotLength=g,P.rectAreaLength=_,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=y,P.numSpotMaps=b,P.numLightProbes=w,i.version=fI++)}function l(c,u){let f=0,h=0,d=0,m=0,g=0;const _=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const v=c[p];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),f++}else if(v.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),d++}else if(v.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(_),a.identity(),s.copy(v.matrixWorld),s.premultiply(_),a.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(_),h++}else if(v.isHemisphereLight){const y=i.hemi[g];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(_),g++}}}return{setup:o,setupView:l,state:i}}function V_(n){const e=new dI(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function pI(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new V_(n),e.set(r,[o])):s>=a.length?(o=new V_(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const mI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _I(n,e,t){let i=new dm;const r=new dt,s=new dt,a=new lt,o=new g1({depthPacking:VT}),l=new _1,c={},u=t.maxTextureSize,f={[hs]:Gn,[Gn]:hs,[Mr]:Mr},h=new ds({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:mI,fragmentShader:gI}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new Si;m.setAttribute("position",new Zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ii(m,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=j0;let p=this.type;this.render=function(E,w,P){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||E.length===0)return;const S=n.getRenderTarget(),T=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),N=n.state;N.setBlending(is),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const D=p!==mr&&this.type===mr,V=p===mr&&this.type!==mr;for(let G=0,B=E.length;G<B;G++){const Z=E[G],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const k=H.getFrameExtents();if(r.multiply(k),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,H.mapSize.y=s.y)),H.map===null||D===!0||V===!0){const te=this.type!==mr?{minFilter:ai,magFilter:ai}:{};H.map!==null&&H.map.dispose(),H.map=new na(r.x,r.y,te),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const K=H.getViewportCount();for(let te=0;te<K;te++){const ge=H.getViewport(te);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),N.viewport(a),H.updateMatrices(Z,te),i=H.getFrustum(),y(w,P,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===mr&&x(H,P),H.needsUpdate=!1}p=this.type,_.needsUpdate=!1,n.setRenderTarget(S,T,R)};function x(E,w){const P=e.update(g);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new na(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,P,h,g,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,P,d,g,null)}function v(E,w,P,S){let T=null;const R=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)T=R;else if(T=P.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const N=T.uuid,D=w.uuid;let V=c[N];V===void 0&&(V={},c[N]=V);let G=V[D];G===void 0&&(G=T.clone(),V[D]=G,w.addEventListener("dispose",b)),T=G}if(T.visible=w.visible,T.wireframe=w.wireframe,S===mr?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:f[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,P.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const N=n.properties.get(T);N.light=P}return T}function y(E,w,P,S,T){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===mr)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const D=e.update(E),V=E.material;if(Array.isArray(V)){const G=D.groups;for(let B=0,Z=G.length;B<Z;B++){const H=G[B],k=V[H.materialIndex];if(k&&k.visible){const K=v(E,k,S,T);E.onBeforeShadow(n,E,w,P,D,K,H),n.renderBufferDirect(P,null,D,K,E,H),E.onAfterShadow(n,E,w,P,D,K,H)}}}else if(V.visible){const G=v(E,V,S,T);E.onBeforeShadow(n,E,w,P,D,G,null),n.renderBufferDirect(P,null,D,G,E,null),E.onAfterShadow(n,E,w,P,D,G,null)}}const N=E.children;for(let D=0,V=N.length;D<V;D++)y(N[D],w,P,S,T)}function b(E){E.target.removeEventListener("dispose",b);for(const P in c){const S=c[P],T=E.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}const vI={[pd]:md,[gd]:yd,[_d]:xd,[ho]:vd,[md]:pd,[yd]:gd,[xd]:_d,[vd]:ho};function yI(n,e){function t(){let L=!1;const pe=new lt;let ne=null;const Ae=new lt(0,0,0,0);return{setMask:function(re){ne!==re&&!L&&(n.colorMask(re,re,re,re),ne=re)},setLocked:function(re){L=re},setClear:function(re,J,Ce,Ze,Lt){Lt===!0&&(re*=Ze,J*=Ze,Ce*=Ze),pe.set(re,J,Ce,Ze),Ae.equals(pe)===!1&&(n.clearColor(re,J,Ce,Ze),Ae.copy(pe))},reset:function(){L=!1,ne=null,Ae.set(-1,0,0,0)}}}function i(){let L=!1,pe=!1,ne=null,Ae=null,re=null;return{setReversed:function(J){if(pe!==J){const Ce=e.get("EXT_clip_control");J?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),pe=J;const Ze=re;re=null,this.setClear(Ze)}},getReversed:function(){return pe},setTest:function(J){J?le(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(J){ne!==J&&!L&&(n.depthMask(J),ne=J)},setFunc:function(J){if(pe&&(J=vI[J]),Ae!==J){switch(J){case pd:n.depthFunc(n.NEVER);break;case md:n.depthFunc(n.ALWAYS);break;case gd:n.depthFunc(n.LESS);break;case ho:n.depthFunc(n.LEQUAL);break;case _d:n.depthFunc(n.EQUAL);break;case vd:n.depthFunc(n.GEQUAL);break;case yd:n.depthFunc(n.GREATER);break;case xd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ae=J}},setLocked:function(J){L=J},setClear:function(J){re!==J&&(pe&&(J=1-J),n.clearDepth(J),re=J)},reset:function(){L=!1,ne=null,Ae=null,re=null,pe=!1}}}function r(){let L=!1,pe=null,ne=null,Ae=null,re=null,J=null,Ce=null,Ze=null,Lt=null;return{setTest:function(Et){L||(Et?le(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(Et){pe!==Et&&!L&&(n.stencilMask(Et),pe=Et)},setFunc:function(Et,Ti,lr){(ne!==Et||Ae!==Ti||re!==lr)&&(n.stencilFunc(Et,Ti,lr),ne=Et,Ae=Ti,re=lr)},setOp:function(Et,Ti,lr){(J!==Et||Ce!==Ti||Ze!==lr)&&(n.stencilOp(Et,Ti,lr),J=Et,Ce=Ti,Ze=lr)},setLocked:function(Et){L=Et},setClear:function(Et){Lt!==Et&&(n.clearStencil(Et),Lt=Et)},reset:function(){L=!1,pe=null,ne=null,Ae=null,re=null,J=null,Ce=null,Ze=null,Lt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],m=null,g=!1,_=null,p=null,x=null,v=null,y=null,b=null,E=null,w=new Xe(0,0,0),P=0,S=!1,T=null,R=null,N=null,D=null,V=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=Z>=2);let k=null,K={};const te=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),Le=new lt().fromArray(te),W=new lt().fromArray(ge);function ee(L,pe,ne,Ae){const re=new Uint8Array(4),J=n.createTexture();n.bindTexture(L,J),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ce=0;Ce<ne;Ce++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,Ae,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(pe+Ce,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return J}const be={};be[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(n.DEPTH_TEST),a.setFunc(ho),_e(!1),Je(Ag),le(n.CULL_FACE),C(is);function le(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function Me(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function et(L,pe){return f[L]!==pe?(n.bindFramebuffer(L,pe),f[L]=pe,L===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=pe),L===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function Oe(L,pe){let ne=d,Ae=!1;if(L){ne=h.get(pe),ne===void 0&&(ne=[],h.set(pe,ne));const re=L.textures;if(ne.length!==re.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let J=0,Ce=re.length;J<Ce;J++)ne[J]=n.COLOR_ATTACHMENT0+J;ne.length=re.length,Ae=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,Ae=!0);Ae&&n.drawBuffers(ne)}function mt(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const at={[ks]:n.FUNC_ADD,[hT]:n.FUNC_SUBTRACT,[dT]:n.FUNC_REVERSE_SUBTRACT};at[pT]=n.MIN,at[mT]=n.MAX;const se={[gT]:n.ZERO,[_T]:n.ONE,[vT]:n.SRC_COLOR,[hd]:n.SRC_ALPHA,[MT]:n.SRC_ALPHA_SATURATE,[ST]:n.DST_COLOR,[xT]:n.DST_ALPHA,[yT]:n.ONE_MINUS_SRC_COLOR,[dd]:n.ONE_MINUS_SRC_ALPHA,[ET]:n.ONE_MINUS_DST_COLOR,[bT]:n.ONE_MINUS_DST_ALPHA,[TT]:n.CONSTANT_COLOR,[wT]:n.ONE_MINUS_CONSTANT_COLOR,[AT]:n.CONSTANT_ALPHA,[RT]:n.ONE_MINUS_CONSTANT_ALPHA};function C(L,pe,ne,Ae,re,J,Ce,Ze,Lt,Et){if(L===is){g===!0&&(Me(n.BLEND),g=!1);return}if(g===!1&&(le(n.BLEND),g=!0),L!==fT){if(L!==_||Et!==S){if((p!==ks||y!==ks)&&(n.blendEquation(n.FUNC_ADD),p=ks,y=ks),Et)switch(L){case Za:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rg:n.blendFunc(n.ONE,n.ONE);break;case Cg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Pg:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Za:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rg:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Cg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,v=null,b=null,E=null,w.set(0,0,0),P=0,_=L,S=Et}return}re=re||pe,J=J||ne,Ce=Ce||Ae,(pe!==p||re!==y)&&(n.blendEquationSeparate(at[pe],at[re]),p=pe,y=re),(ne!==x||Ae!==v||J!==b||Ce!==E)&&(n.blendFuncSeparate(se[ne],se[Ae],se[J],se[Ce]),x=ne,v=Ae,b=J,E=Ce),(Ze.equals(w)===!1||Lt!==P)&&(n.blendColor(Ze.r,Ze.g,Ze.b,Lt),w.copy(Ze),P=Lt),_=L,S=!1}function Re(L,pe){L.side===Mr?Me(n.CULL_FACE):le(n.CULL_FACE);let ne=L.side===Gn;pe&&(ne=!ne),_e(ne),L.blending===Za&&L.transparent===!1?C(is):C(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const Ae=L.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),qe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function _e(L){T!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),T=L)}function Je(L){L!==lT?(le(n.CULL_FACE),L!==R&&(L===Ag?n.cullFace(n.BACK):L===cT?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),R=L}function Ee(L){L!==N&&(B&&n.lineWidth(L),N=L)}function qe(L,pe,ne){L?(le(n.POLYGON_OFFSET_FILL),(D!==pe||V!==ne)&&(n.polygonOffset(pe,ne),D=pe,V=ne)):Me(n.POLYGON_OFFSET_FILL)}function ve(L){L?le(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function De(L){L===void 0&&(L=n.TEXTURE0+G-1),k!==L&&(n.activeTexture(L),k=L)}function St(L,pe,ne){ne===void 0&&(k===null?ne=n.TEXTURE0+G-1:ne=k);let Ae=K[ne];Ae===void 0&&(Ae={type:void 0,texture:void 0},K[ne]=Ae),(Ae.type!==L||Ae.texture!==pe)&&(k!==ne&&(n.activeTexture(ne),k=ne),n.bindTexture(L,pe||be[L]),Ae.type=L,Ae.texture=pe)}function I(){const L=K[k];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(L){Le.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Le.copy(L))}function ke(L){W.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),W.copy(L))}function Ne(L,pe){let ne=c.get(pe);ne===void 0&&(ne=new WeakMap,c.set(pe,ne));let Ae=ne.get(L);Ae===void 0&&(Ae=n.getUniformBlockIndex(pe,L.name),ne.set(L,Ae))}function ce(L,pe){const Ae=c.get(pe).get(L);l.get(pe)!==Ae&&(n.uniformBlockBinding(pe,Ae,L.__bindingPointIndex),l.set(pe,Ae))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},k=null,K={},f={},h=new WeakMap,d=[],m=null,g=!1,_=null,p=null,x=null,v=null,y=null,b=null,E=null,w=new Xe(0,0,0),P=0,S=!1,T=null,R=null,N=null,D=null,V=null,Le.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:Me,bindFramebuffer:et,drawBuffers:Oe,useProgram:mt,setBlending:C,setMaterial:Re,setFlipSided:_e,setCullFace:Je,setLineWidth:Ee,setPolygonOffset:qe,setScissorTest:ve,activeTexture:De,bindTexture:St,unbindTexture:I,compressedTexImage2D:M,compressedTexImage3D:z,texImage2D:we,texImage3D:Q,updateUBOMapping:Ne,uniformBlockBinding:ce,texStorage2D:oe,texStorage3D:xe,texSubImage2D:j,texSubImage3D:Y,compressedTexSubImage2D:q,compressedTexSubImage3D:ye,scissor:de,viewport:ke,reset:je}}function xI(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,M){return d?new OffscreenCanvas(I,M):Rl("canvas")}function g(I,M,z){let j=1;const Y=St(I);if((Y.width>z||Y.height>z)&&(j=z/Math.max(Y.width,Y.height)),j<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const q=Math.floor(j*Y.width),ye=Math.floor(j*Y.height);f===void 0&&(f=m(q,ye));const oe=M?m(q,ye):f;return oe.width=q,oe.height=ye,oe.getContext("2d").drawImage(I,0,0,q,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+q+"x"+ye+")."),oe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),I;return I}function _(I){return I.generateMipmaps}function p(I){n.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(I,M,z,j,Y=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let q=M;if(M===n.RED&&(z===n.FLOAT&&(q=n.R32F),z===n.HALF_FLOAT&&(q=n.R16F),z===n.UNSIGNED_BYTE&&(q=n.R8)),M===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.R8UI),z===n.UNSIGNED_SHORT&&(q=n.R16UI),z===n.UNSIGNED_INT&&(q=n.R32UI),z===n.BYTE&&(q=n.R8I),z===n.SHORT&&(q=n.R16I),z===n.INT&&(q=n.R32I)),M===n.RG&&(z===n.FLOAT&&(q=n.RG32F),z===n.HALF_FLOAT&&(q=n.RG16F),z===n.UNSIGNED_BYTE&&(q=n.RG8)),M===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RG8UI),z===n.UNSIGNED_SHORT&&(q=n.RG16UI),z===n.UNSIGNED_INT&&(q=n.RG32UI),z===n.BYTE&&(q=n.RG8I),z===n.SHORT&&(q=n.RG16I),z===n.INT&&(q=n.RG32I)),M===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RGB8UI),z===n.UNSIGNED_SHORT&&(q=n.RGB16UI),z===n.UNSIGNED_INT&&(q=n.RGB32UI),z===n.BYTE&&(q=n.RGB8I),z===n.SHORT&&(q=n.RGB16I),z===n.INT&&(q=n.RGB32I)),M===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),z===n.UNSIGNED_INT&&(q=n.RGBA32UI),z===n.BYTE&&(q=n.RGBA8I),z===n.SHORT&&(q=n.RGBA16I),z===n.INT&&(q=n.RGBA32I)),M===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),M===n.RGBA){const ye=Y?Iu:nt.getTransfer(j);z===n.FLOAT&&(q=n.RGBA32F),z===n.HALF_FLOAT&&(q=n.RGBA16F),z===n.UNSIGNED_BYTE&&(q=ye===wt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(I,M){let z;return I?M===null||M===ta||M===Tl?z=n.DEPTH24_STENCIL8:M===Wi?z=n.DEPTH32F_STENCIL8:M===Ml&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ta||M===Tl?z=n.DEPTH_COMPONENT24:M===Wi?z=n.DEPTH_COMPONENT32F:M===Ml&&(z=n.DEPTH_COMPONENT16),z}function b(I,M){return _(I)===!0||I.isFramebufferTexture&&I.minFilter!==ai&&I.minFilter!==Gi?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function E(I){const M=I.target;M.removeEventListener("dispose",E),P(M),M.isVideoTexture&&u.delete(M)}function w(I){const M=I.target;M.removeEventListener("dispose",w),T(M)}function P(I){const M=i.get(I);if(M.__webglInit===void 0)return;const z=I.source,j=h.get(z);if(j){const Y=j[M.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&S(I),Object.keys(j).length===0&&h.delete(z)}i.remove(I)}function S(I){const M=i.get(I);n.deleteTexture(M.__webglTexture);const z=I.source,j=h.get(z);delete j[M.__cacheKey],a.memory.textures--}function T(I){const M=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let Y=0;Y<M.__webglFramebuffer[j].length;Y++)n.deleteFramebuffer(M.__webglFramebuffer[j][Y]);else n.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)n.deleteFramebuffer(M.__webglFramebuffer[j]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=I.textures;for(let j=0,Y=z.length;j<Y;j++){const q=i.get(z[j]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(z[j])}i.remove(I)}let R=0;function N(){R=0}function D(){const I=R;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),R+=1,I}function V(I){const M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function G(I,M){const z=i.get(I);if(I.isVideoTexture&&ve(I),I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){const j=I.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(z,I,M);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+M)}function B(I,M){const z=i.get(I);if(I.version>0&&z.__version!==I.version){be(z,I,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+M)}function Z(I,M){const z=i.get(I);if(I.version>0&&z.__version!==I.version){be(z,I,M);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+M)}function H(I,M){const z=i.get(I);if(I.version>0&&z.__version!==I.version){le(z,I,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+M)}const k={[ea]:n.REPEAT,[Tr]:n.CLAMP_TO_EDGE,[Sd]:n.MIRRORED_REPEAT},K={[ai]:n.NEAREST,[kT]:n.NEAREST_MIPMAP_NEAREST,[Mc]:n.NEAREST_MIPMAP_LINEAR,[Gi]:n.LINEAR,[jf]:n.LINEAR_MIPMAP_NEAREST,[Gs]:n.LINEAR_MIPMAP_LINEAR},te={[WT]:n.NEVER,[YT]:n.ALWAYS,[$T]:n.LESS,[iy]:n.LEQUAL,[XT]:n.EQUAL,[ZT]:n.GEQUAL,[jT]:n.GREATER,[qT]:n.NOTEQUAL};function ge(I,M){if(M.type===Wi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Gi||M.magFilter===jf||M.magFilter===Mc||M.magFilter===Gs||M.minFilter===Gi||M.minFilter===jf||M.minFilter===Mc||M.minFilter===Gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,k[M.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,k[M.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,k[M.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,K[M.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,K[M.minFilter]),M.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,te[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ai||M.minFilter!==Mc&&M.minFilter!==Gs||M.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Le(I,M){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",E));const j=M.source;let Y=h.get(j);Y===void 0&&(Y={},h.set(j,Y));const q=V(M);if(q!==I.__cacheKey){Y[q]===void 0&&(Y[q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Y[q].usedTimes++;const ye=Y[I.__cacheKey];ye!==void 0&&(Y[I.__cacheKey].usedTimes--,ye.usedTimes===0&&S(M)),I.__cacheKey=q,I.__webglTexture=Y[q].texture}return z}function W(I,M,z){return Math.floor(Math.floor(I/z)/M)}function ee(I,M,z,j){const q=I.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,z,j,M.data);else{q.sort((Q,de)=>Q.start-de.start);let ye=0;for(let Q=1;Q<q.length;Q++){const de=q[ye],ke=q[Q],Ne=de.start+de.count,ce=W(ke.start,M.width,4),je=W(de.start,M.width,4);ke.start<=Ne+1&&ce===je&&W(ke.start+ke.count-1,M.width,4)===ce?de.count=Math.max(de.count,ke.start+ke.count-de.start):(++ye,q[ye]=ke)}q.length=ye+1;const oe=n.getParameter(n.UNPACK_ROW_LENGTH),xe=n.getParameter(n.UNPACK_SKIP_PIXELS),we=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let Q=0,de=q.length;Q<de;Q++){const ke=q[Q],Ne=Math.floor(ke.start/4),ce=Math.ceil(ke.count/4),je=Ne%M.width,L=Math.floor(Ne/M.width),pe=ce,ne=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,je),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,je,L,pe,ne,z,j,M.data)}I.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,oe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,we)}}function be(I,M,z){let j=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=n.TEXTURE_3D);const Y=Le(I,M),q=M.source;t.bindTexture(j,I.__webglTexture,n.TEXTURE0+z);const ye=i.get(q);if(q.version!==ye.__version||Y===!0){t.activeTexture(n.TEXTURE0+z);const oe=nt.getPrimaries(nt.workingColorSpace),xe=M.colorSpace===Zr?null:nt.getPrimaries(M.colorSpace),we=M.colorSpace===Zr||oe===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Q=g(M.image,!1,r.maxTextureSize);Q=De(M,Q);const de=s.convert(M.format,M.colorSpace),ke=s.convert(M.type);let Ne=v(M.internalFormat,de,ke,M.colorSpace,M.isVideoTexture);ge(j,M);let ce;const je=M.mipmaps,L=M.isVideoTexture!==!0,pe=ye.__version===void 0||Y===!0,ne=q.dataReady,Ae=b(M,Q);if(M.isDepthTexture)Ne=y(M.format===Al,M.type),pe&&(L?t.texStorage2D(n.TEXTURE_2D,1,Ne,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,Ne,Q.width,Q.height,0,de,ke,null));else if(M.isDataTexture)if(je.length>0){L&&pe&&t.texStorage2D(n.TEXTURE_2D,Ae,Ne,je[0].width,je[0].height);for(let re=0,J=je.length;re<J;re++)ce=je[re],L?ne&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ce.width,ce.height,de,ke,ce.data):t.texImage2D(n.TEXTURE_2D,re,Ne,ce.width,ce.height,0,de,ke,ce.data);M.generateMipmaps=!1}else L?(pe&&t.texStorage2D(n.TEXTURE_2D,Ae,Ne,Q.width,Q.height),ne&&ee(M,Q,de,ke)):t.texImage2D(n.TEXTURE_2D,0,Ne,Q.width,Q.height,0,de,ke,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){L&&pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Ne,je[0].width,je[0].height,Q.depth);for(let re=0,J=je.length;re<J;re++)if(ce=je[re],M.format!==yi)if(de!==null)if(L){if(ne)if(M.layerUpdates.size>0){const Ce=v_(ce.width,ce.height,M.format,M.type);for(const Ze of M.layerUpdates){const Lt=ce.data.subarray(Ze*Ce/ce.data.BYTES_PER_ELEMENT,(Ze+1)*Ce/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,Ze,ce.width,ce.height,1,de,Lt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ce.width,ce.height,Q.depth,de,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Ne,ce.width,ce.height,Q.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ne&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,ce.width,ce.height,Q.depth,de,ke,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Ne,ce.width,ce.height,Q.depth,0,de,ke,ce.data)}else{L&&pe&&t.texStorage2D(n.TEXTURE_2D,Ae,Ne,je[0].width,je[0].height);for(let re=0,J=je.length;re<J;re++)ce=je[re],M.format!==yi?de!==null?L?ne&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,ce.width,ce.height,de,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Ne,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ne&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,ce.width,ce.height,de,ke,ce.data):t.texImage2D(n.TEXTURE_2D,re,Ne,ce.width,ce.height,0,de,ke,ce.data)}else if(M.isDataArrayTexture)if(L){if(pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Ne,Q.width,Q.height,Q.depth),ne)if(M.layerUpdates.size>0){const re=v_(Q.width,Q.height,M.format,M.type);for(const J of M.layerUpdates){const Ce=Q.data.subarray(J*re/Q.data.BYTES_PER_ELEMENT,(J+1)*re/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,Q.width,Q.height,1,de,ke,Ce)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,de,ke,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,Q.width,Q.height,Q.depth,0,de,ke,Q.data);else if(M.isData3DTexture)L?(pe&&t.texStorage3D(n.TEXTURE_3D,Ae,Ne,Q.width,Q.height,Q.depth),ne&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,de,ke,Q.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,Q.width,Q.height,Q.depth,0,de,ke,Q.data);else if(M.isFramebufferTexture){if(pe)if(L)t.texStorage2D(n.TEXTURE_2D,Ae,Ne,Q.width,Q.height);else{let re=Q.width,J=Q.height;for(let Ce=0;Ce<Ae;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,Ne,re,J,0,de,ke,null),re>>=1,J>>=1}}else if(je.length>0){if(L&&pe){const re=St(je[0]);t.texStorage2D(n.TEXTURE_2D,Ae,Ne,re.width,re.height)}for(let re=0,J=je.length;re<J;re++)ce=je[re],L?ne&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,de,ke,ce):t.texImage2D(n.TEXTURE_2D,re,Ne,de,ke,ce);M.generateMipmaps=!1}else if(L){if(pe){const re=St(Q);t.texStorage2D(n.TEXTURE_2D,Ae,Ne,re.width,re.height)}ne&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,ke,Q)}else t.texImage2D(n.TEXTURE_2D,0,Ne,de,ke,Q);_(M)&&p(j),ye.__version=q.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function le(I,M,z){if(M.image.length!==6)return;const j=Le(I,M),Y=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+z);const q=i.get(Y);if(Y.version!==q.__version||j===!0){t.activeTexture(n.TEXTURE0+z);const ye=nt.getPrimaries(nt.workingColorSpace),oe=M.colorSpace===Zr?null:nt.getPrimaries(M.colorSpace),xe=M.colorSpace===Zr||ye===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const we=M.isCompressedTexture||M.image[0].isCompressedTexture,Q=M.image[0]&&M.image[0].isDataTexture,de=[];for(let J=0;J<6;J++)!we&&!Q?de[J]=g(M.image[J],!0,r.maxCubemapSize):de[J]=Q?M.image[J].image:M.image[J],de[J]=De(M,de[J]);const ke=de[0],Ne=s.convert(M.format,M.colorSpace),ce=s.convert(M.type),je=v(M.internalFormat,Ne,ce,M.colorSpace),L=M.isVideoTexture!==!0,pe=q.__version===void 0||j===!0,ne=Y.dataReady;let Ae=b(M,ke);ge(n.TEXTURE_CUBE_MAP,M);let re;if(we){L&&pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,je,ke.width,ke.height);for(let J=0;J<6;J++){re=de[J].mipmaps;for(let Ce=0;Ce<re.length;Ce++){const Ze=re[Ce];M.format!==yi?Ne!==null?L?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce,0,0,Ze.width,Ze.height,Ne,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce,je,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce,0,0,Ze.width,Ze.height,Ne,ce,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce,je,Ze.width,Ze.height,0,Ne,ce,Ze.data)}}}else{if(re=M.mipmaps,L&&pe){re.length>0&&Ae++;const J=St(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,je,J.width,J.height)}for(let J=0;J<6;J++)if(Q){L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,de[J].width,de[J].height,Ne,ce,de[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,de[J].width,de[J].height,0,Ne,ce,de[J].data);for(let Ce=0;Ce<re.length;Ce++){const Lt=re[Ce].image[J].image;L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce+1,0,0,Lt.width,Lt.height,Ne,ce,Lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce+1,je,Lt.width,Lt.height,0,Ne,ce,Lt.data)}}else{L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ne,ce,de[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,Ne,ce,de[J]);for(let Ce=0;Ce<re.length;Ce++){const Ze=re[Ce];L?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce+1,0,0,Ne,ce,Ze.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ce+1,je,Ne,ce,Ze.image[J])}}}_(M)&&p(n.TEXTURE_CUBE_MAP),q.__version=Y.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Me(I,M,z,j,Y,q){const ye=s.convert(z.format,z.colorSpace),oe=s.convert(z.type),xe=v(z.internalFormat,ye,oe,z.colorSpace),we=i.get(M),Q=i.get(z);if(Q.__renderTarget=M,!we.__hasExternalTextures){const de=Math.max(1,M.width>>q),ke=Math.max(1,M.height>>q);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,q,xe,de,ke,M.depth,0,ye,oe,null):t.texImage2D(Y,q,xe,de,ke,0,ye,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),qe(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,Y,Q.__webglTexture,0,Ee(M)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,Y,Q.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function et(I,M,z){if(n.bindRenderbuffer(n.RENDERBUFFER,I),M.depthBuffer){const j=M.depthTexture,Y=j&&j.isDepthTexture?j.type:null,q=y(M.stencilBuffer,Y),ye=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=Ee(M);qe(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,q,M.width,M.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,q,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,q,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,I)}else{const j=M.textures;for(let Y=0;Y<j.length;Y++){const q=j[Y],ye=s.convert(q.format,q.colorSpace),oe=s.convert(q.type),xe=v(q.internalFormat,ye,oe,q.colorSpace),we=Ee(M);z&&qe(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,xe,M.width,M.height):qe(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,xe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,xe,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(I,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(M.depthTexture);j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const Y=j.__webglTexture,q=Ee(M);if(M.depthTexture.format===wl)qe(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(M.depthTexture.format===Al)qe(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function mt(I){const M=i.get(I),z=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){const j=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const Y=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",Y)};j.addEventListener("dispose",Y),M.__depthDisposeCallback=Y}M.__boundDepthTexture=j}if(I.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const j=I.texture.mipmaps;j&&j.length>0?Oe(M.__webglFramebuffer[0],I):Oe(M.__webglFramebuffer,I)}else if(z){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=n.createRenderbuffer(),et(M.__webglDepthbuffer[j],I,!1);else{const Y=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,q)}}else{const j=I.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),et(M.__webglDepthbuffer,I,!1);else{const Y=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function at(I,M,z){const j=i.get(I);M!==void 0&&Me(j.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&mt(I)}function se(I){const M=I.texture,z=i.get(I),j=i.get(M);I.addEventListener("dispose",w);const Y=I.textures,q=I.isWebGLCubeRenderTarget===!0,ye=Y.length>1;if(ye||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=M.version,a.memory.textures++),q){z.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[oe]=[];for(let xe=0;xe<M.mipmaps.length;xe++)z.__webglFramebuffer[oe][xe]=n.createFramebuffer()}else z.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let oe=0;oe<M.mipmaps.length;oe++)z.__webglFramebuffer[oe]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ye)for(let oe=0,xe=Y.length;oe<xe;oe++){const we=i.get(Y[oe]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&qe(I)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let oe=0;oe<Y.length;oe++){const xe=Y[oe];z.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[oe]);const we=s.convert(xe.format,xe.colorSpace),Q=s.convert(xe.type),de=v(xe.internalFormat,we,Q,xe.colorSpace,I.isXRRenderTarget===!0),ke=Ee(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,de,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,z.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),et(z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),ge(n.TEXTURE_CUBE_MAP,M);for(let oe=0;oe<6;oe++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)Me(z.__webglFramebuffer[oe][xe],I,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,xe);else Me(z.__webglFramebuffer[oe],I,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);_(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let oe=0,xe=Y.length;oe<xe;oe++){const we=Y[oe],Q=i.get(we);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),ge(n.TEXTURE_2D,we),Me(z.__webglFramebuffer,I,we,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),_(we)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(oe=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,j.__webglTexture),ge(oe,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)Me(z.__webglFramebuffer[xe],I,M,n.COLOR_ATTACHMENT0,oe,xe);else Me(z.__webglFramebuffer,I,M,n.COLOR_ATTACHMENT0,oe,0);_(M)&&p(oe),t.unbindTexture()}I.depthBuffer&&mt(I)}function C(I){const M=I.textures;for(let z=0,j=M.length;z<j;z++){const Y=M[z];if(_(Y)){const q=x(I),ye=i.get(Y).__webglTexture;t.bindTexture(q,ye),p(q),t.unbindTexture()}}}const Re=[],_e=[];function Je(I){if(I.samples>0){if(qe(I)===!1){const M=I.textures,z=I.width,j=I.height;let Y=n.COLOR_BUFFER_BIT;const q=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(I),oe=M.length>1;if(oe)for(let we=0;we<M.length;we++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const xe=I.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let we=0;we<M.length;we++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const Q=i.get(M[we]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,z,j,0,0,z,j,Y,n.NEAREST),l===!0&&(Re.length=0,_e.length=0,Re.push(n.COLOR_ATTACHMENT0+we),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Re.push(q),_e.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,_e)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Re))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let we=0;we<M.length;we++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,ye.__webglColorRenderbuffer[we]);const Q=i.get(M[we]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,Q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const M=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Ee(I){return Math.min(r.maxSamples,I.samples)}function qe(I){const M=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ve(I){const M=a.render.frame;u.get(I)!==M&&(u.set(I,M),I.update())}function De(I,M){const z=I.colorSpace,j=I.format,Y=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==go&&z!==Zr&&(nt.getTransfer(z)===wt?(j!==yi||Y!==tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function St(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=at,this.setupRenderTarget=se,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=qe}function bI(n,e){function t(i,r=Zr){let s;const a=nt.getTransfer(r);if(i===tr)return n.UNSIGNED_BYTE;if(i===tm)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nm)return n.UNSIGNED_SHORT_5_5_5_1;if(i===K0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Z0)return n.BYTE;if(i===Y0)return n.SHORT;if(i===Ml)return n.UNSIGNED_SHORT;if(i===em)return n.INT;if(i===ta)return n.UNSIGNED_INT;if(i===Wi)return n.FLOAT;if(i===fc)return n.HALF_FLOAT;if(i===J0)return n.ALPHA;if(i===Q0)return n.RGB;if(i===yi)return n.RGBA;if(i===wl)return n.DEPTH_COMPONENT;if(i===Al)return n.DEPTH_STENCIL;if(i===ey)return n.RED;if(i===im)return n.RED_INTEGER;if(i===ty)return n.RG;if(i===rm)return n.RG_INTEGER;if(i===sm)return n.RGBA_INTEGER;if(i===uu||i===fu||i===hu||i===du)if(a===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===uu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===du)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===uu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===du)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ed||i===Md||i===Td||i===wd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ed)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Md)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Td)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ad||i===Rd||i===Cd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ad||i===Rd)return a===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Cd)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Pd||i===Id||i===Dd||i===Ld||i===Nd||i===Od||i===Ud||i===Fd||i===Bd||i===kd||i===Hd||i===zd||i===Vd||i===Gd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Pd)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Id)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dd)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ld)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nd)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Od)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ud)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fd)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bd)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kd)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hd)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zd)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vd)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gd)return a===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pu||i===Wd||i===$d)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===pu)return a===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$d)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ny||i===Xd||i===jd||i===qd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===pu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Tl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const SI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EI=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class MI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new vn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ds({vertexShader:SI,fragmentShader:EI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ii(new bf(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TI extends ko{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,m=null;const g=new MI,_=t.getContextAttributes();let p=null,x=null;const v=[],y=[],b=new dt;let E=null;const w=new Nn;w.viewport=new lt;const P=new Nn;P.viewport=new lt;const S=[w,P],T=new F1;let R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=v[W];return ee===void 0&&(ee=new mh,v[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=v[W];return ee===void 0&&(ee=new mh,v[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=v[W];return ee===void 0&&(ee=new mh,v[W]=ee),ee.getHandSpace()};function D(W){const ee=y.indexOf(W.inputSource);if(ee===-1)return;const be=v[ee];be!==void 0&&(be.update(W.inputSource,W.frame,c||a),be.dispatchEvent({type:W.type,data:W.inputSource}))}function V(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",G);for(let W=0;W<v.length;W++){const ee=y[W];ee!==null&&(y[W]=null,v[W].disconnect(ee))}R=null,N=null,g.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,x=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",V),r.addEventListener("inputsourceschange",G),_.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,le=null,Me=null;_.depth&&(Me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=_.stencil?Al:wl,le=_.stencil?Tl:ta);const et={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(et),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new na(h.textureWidth,h.textureHeight,{format:yi,type:tr,depthTexture:new dy(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const be={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new na(d.framebufferWidth,d.framebufferHeight,{format:yi,type:tr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(W){for(let ee=0;ee<W.removed.length;ee++){const be=W.removed[ee],le=y.indexOf(be);le>=0&&(y[le]=null,v[le].disconnect(be))}for(let ee=0;ee<W.added.length;ee++){const be=W.added[ee];let le=y.indexOf(be);if(le===-1){for(let et=0;et<v.length;et++)if(et>=y.length){y.push(be),le=et;break}else if(y[et]===null){y[et]=be,le=et;break}if(le===-1)break}const Me=v[le];Me&&Me.connect(be)}}const B=new O,Z=new O;function H(W,ee,be){B.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(be.matrixWorld);const le=B.distanceTo(Z),Me=ee.projectionMatrix.elements,et=be.projectionMatrix.elements,Oe=Me[14]/(Me[10]-1),mt=Me[14]/(Me[10]+1),at=(Me[9]+1)/Me[5],se=(Me[9]-1)/Me[5],C=(Me[8]-1)/Me[0],Re=(et[8]+1)/et[0],_e=Oe*C,Je=Oe*Re,Ee=le/(-C+Re),qe=Ee*-C;if(ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(qe),W.translateZ(Ee),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Me[10]===-1)W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const ve=Oe+Ee,De=mt+Ee,St=_e-qe,I=Je+(le-qe),M=at*mt/De*ve,z=se*mt/De*ve;W.projectionMatrix.makePerspective(St,I,M,z,ve,De),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function k(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ee=W.near,be=W.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(be=g.depthFar)),T.near=P.near=w.near=ee,T.far=P.far=w.far=be,(R!==T.near||N!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),R=T.near,N=T.far),w.layers.mask=W.layers.mask|2,P.layers.mask=W.layers.mask|4,T.layers.mask=w.layers.mask|P.layers.mask;const le=W.parent,Me=T.cameras;k(T,le);for(let et=0;et<Me.length;et++)k(Me[et],le);Me.length===2?H(T,w,P):T.projectionMatrix.copy(w.projectionMatrix),K(W,T,le)};function K(W,ee,be){be===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(be.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=_o*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(T)};let te=null;function ge(W,ee){if(u=ee.getViewerPose(c||a),m=ee,u!==null){const be=u.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let le=!1;be.length!==T.cameras.length&&(T.cameras.length=0,le=!0);for(let Oe=0;Oe<be.length;Oe++){const mt=be[Oe];let at=null;if(d!==null)at=d.getViewport(mt);else{const C=f.getViewSubImage(h,mt);at=C.viewport,Oe===0&&(e.setRenderTargetTextures(x,C.colorTexture,C.depthStencilTexture),e.setRenderTarget(x))}let se=S[Oe];se===void 0&&(se=new Nn,se.layers.enable(Oe),se.viewport=new lt,S[Oe]=se),se.matrix.fromArray(mt.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(mt.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(at.x,at.y,at.width,at.height),Oe===0&&(T.matrix.copy(se.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),le===!0&&T.cameras.push(se)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const Oe=f.getDepthInformation(be[0]);Oe&&Oe.isValid&&Oe.texture&&g.init(e,Oe,r.renderState)}}for(let be=0;be<v.length;be++){const le=y[be],Me=v[be];le!==null&&Me!==void 0&&Me.update(le,ee,c||a)}te&&te(W,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),m=null}const Le=new Ey;Le.setAnimationLoop(ge),this.setAnimationLoop=function(W){te=W},this.dispose=function(){}}}const Ds=new un,wI=new Ue;function AI(n,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function i(_,p){p.color.getRGB(_.fogColor.value,cy(n)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,x,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),f(_,p)):p.isMeshPhongMaterial?(s(_,p),u(_,p)):p.isMeshStandardMaterial?(s(_,p),h(_,p),p.isMeshPhysicalMaterial&&d(_,p,y)):p.isMeshMatcapMaterial?(s(_,p),m(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),g(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(a(_,p),p.isLineDashedMaterial&&o(_,p)):p.isPointsMaterial?l(_,p,x,v):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Gn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Gn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const x=e.get(p),v=x.envMap,y=x.envMapRotation;v&&(_.envMap.value=v,Ds.copy(y),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),_.envMapRotation.value.setFromMatrix4(wI.makeRotationFromEuler(Ds)),_.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function a(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function o(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,x,v){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*x,_.scale.value=v*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function f(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function h(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function d(_,p,x){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=x.texture,_.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const x=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(x.matrixWorld),_.nearDistance.value=x.shadow.camera.near,_.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function RI(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const y=v.program;i.uniformBlockBinding(x,y)}function c(x,v){let y=r[x.id];y===void 0&&(m(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",_));const b=v.program;i.updateUBOMapping(x,b);const E=e.render.frame;s[x.id]!==E&&(h(x),s[x.id]=E)}function u(x){const v=f();x.__bindingPointIndex=v;const y=n.createBuffer(),b=x.__size,E=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,b,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const v=r[x.id],y=x.uniforms,b=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,w=y.length;E<w;E++){const P=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,T=P.length;S<T;S++){const R=P[S];if(d(R,E,S,b)===!0){const N=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let G=0;G<D.length;G++){const B=D[G],Z=g(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,N+V,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,v,y,b){const E=x.value,w=v+"_"+y;if(b[w]===void 0)return typeof E=="number"||typeof E=="boolean"?b[w]=E:b[w]=E.clone(),!0;{const P=b[w];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return b[w]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function m(x){const v=x.uniforms;let y=0;const b=16;for(let w=0,P=v.length;w<P;w++){const S=Array.isArray(v[w])?v[w]:[v[w]];for(let T=0,R=S.length;T<R;T++){const N=S[T],D=Array.isArray(N.value)?N.value:[N.value];for(let V=0,G=D.length;V<G;V++){const B=D[V],Z=g(B),H=y%b,k=H%Z.boundary,K=H+k;y+=k,K!==0&&b-K<Z.storage&&(y+=b-K),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=Z.storage}}}const E=y%b;return E>0&&(y+=b-E),x.__size=y,x.__cache={},this}function g(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function _(x){const v=x.target;v.removeEventListener("dispose",_);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class CI{constructor(e={}){const{canvas:t=dw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const x=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let b=!1;this._outputColorSpace=Ot;let E=0,w=0,P=null,S=-1,T=null;const R=new lt,N=new lt;let D=null;const V=new Xe(0);let G=0,B=t.width,Z=t.height,H=1,k=null,K=null;const te=new lt(0,0,B,Z),ge=new lt(0,0,B,Z);let Le=!1;const W=new dm;let ee=!1,be=!1;const le=new Ue,Me=new Ue,et=new O,Oe=new lt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function se(){return P===null?H:1}let C=i;function Re(A,U){return t.getContext(A,U)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qp}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",J,!1),C===null){const U="webgl2";if(C=Re(U,A),C===null)throw Re(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _e,Je,Ee,qe,ve,De,St,I,M,z,j,Y,q,ye,oe,xe,we,Q,de,ke,Ne,ce,je,L;function pe(){_e=new kC(C),_e.init(),ce=new bI(C,_e),Je=new DC(C,_e,e,ce),Ee=new yI(C,_e),Je.reverseDepthBuffer&&h&&Ee.buffers.depth.setReversed(!0),qe=new VC(C),ve=new aI,De=new xI(C,_e,Ee,ve,Je,ce,qe),St=new NC(y),I=new BC(y),M=new q1(C),je=new PC(C,M),z=new HC(C,M,qe,je),j=new WC(C,z,M,qe),de=new GC(C,Je,De),xe=new LC(ve),Y=new sI(y,St,I,_e,Je,je,xe),q=new AI(y,ve),ye=new lI,oe=new pI(_e),Q=new CC(y,St,I,Ee,j,d,l),we=new _I(y,j,Je),L=new RI(C,qe,Je,Ee),ke=new IC(C,_e,qe),Ne=new zC(C,_e,qe),qe.programs=Y.programs,y.capabilities=Je,y.extensions=_e,y.properties=ve,y.renderLists=ye,y.shadowMap=we,y.state=Ee,y.info=qe}pe();const ne=new TI(y,C);this.xr=ne,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(B,Z,!1))},this.getSize=function(A){return A.set(B,Z)},this.setSize=function(A,U,$=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,Z=U,t.width=Math.floor(A*H),t.height=Math.floor(U*H),$===!0&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(B*H,Z*H).floor()},this.setDrawingBufferSize=function(A,U,$){B=A,Z=U,H=$,t.width=Math.floor(A*$),t.height=Math.floor(U*$),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(te)},this.setViewport=function(A,U,$,X){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,U,$,X),Ee.viewport(R.copy(te).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(ge)},this.setScissor=function(A,U,$,X){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,U,$,X),Ee.scissor(N.copy(ge).multiplyScalar(H).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(A){Ee.setScissorTest(Le=A)},this.setOpaqueSort=function(A){k=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor(...arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha(...arguments)},this.clear=function(A=!0,U=!0,$=!0){let X=0;if(A){let F=!1;if(P!==null){const ae=P.texture.format;F=ae===sm||ae===rm||ae===im}if(F){const ae=P.texture.type,me=ae===tr||ae===ta||ae===Ml||ae===Tl||ae===tm||ae===nm,Pe=Q.getClearColor(),Te=Q.getClearAlpha(),We=Pe.r,$e=Pe.g,Fe=Pe.b;me?(m[0]=We,m[1]=$e,m[2]=Fe,m[3]=Te,C.clearBufferuiv(C.COLOR,0,m)):(g[0]=We,g[1]=$e,g[2]=Fe,g[3]=Te,C.clearBufferiv(C.COLOR,0,g))}else X|=C.COLOR_BUFFER_BIT}U&&(X|=C.DEPTH_BUFFER_BIT),$&&(X|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",J,!1),Q.dispose(),ye.dispose(),oe.dispose(),ve.dispose(),St.dispose(),I.dispose(),j.dispose(),je.dispose(),L.dispose(),Y.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Ym),ne.removeEventListener("sessionend",Km),Ts.stop()};function Ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=qe.autoReset,U=we.enabled,$=we.autoUpdate,X=we.needsUpdate,F=we.type;pe(),qe.autoReset=A,we.enabled=U,we.autoUpdate=$,we.needsUpdate=X,we.type=F}function J(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ce(A){const U=A.target;U.removeEventListener("dispose",Ce),Ze(U)}function Ze(A){Lt(A),ve.remove(A)}function Lt(A){const U=ve.get(A).programs;U!==void 0&&(U.forEach(function($){Y.releaseProgram($)}),A.isShaderMaterial&&Y.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,$,X,F,ae){U===null&&(U=mt);const me=F.isMesh&&F.matrixWorld.determinant()<0,Pe=eS(A,U,$,X,F);Ee.setMaterial(X,me);let Te=$.index,We=1;if(X.wireframe===!0){if(Te=z.getWireframeAttribute($),Te===void 0)return;We=2}const $e=$.drawRange,Fe=$.attributes.position;let ot=$e.start*We,Tt=($e.start+$e.count)*We;ae!==null&&(ot=Math.max(ot,ae.start*We),Tt=Math.min(Tt,(ae.start+ae.count)*We)),Te!==null?(ot=Math.max(ot,0),Tt=Math.min(Tt,Te.count)):Fe!=null&&(ot=Math.max(ot,0),Tt=Math.min(Tt,Fe.count));const jt=Tt-ot;if(jt<0||jt===1/0)return;je.setup(F,X,Pe,$,Te);let Nt,Rt=ke;if(Te!==null&&(Nt=M.get(Te),Rt=Ne,Rt.setIndex(Nt)),F.isMesh)X.wireframe===!0?(Ee.setLineWidth(X.wireframeLinewidth*se()),Rt.setMode(C.LINES)):Rt.setMode(C.TRIANGLES);else if(F.isLine){let He=X.linewidth;He===void 0&&(He=1),Ee.setLineWidth(He*se()),F.isLineSegments?Rt.setMode(C.LINES):F.isLineLoop?Rt.setMode(C.LINE_LOOP):Rt.setMode(C.LINE_STRIP)}else F.isPoints?Rt.setMode(C.POINTS):F.isSprite&&Rt.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ya("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))Rt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const He=F._multiDrawStarts,Vt=F._multiDrawCounts,yt=F._multiDrawCount,Zn=Te?M.get(Te).bytesPerElement:1,_a=ve.get(X).currentProgram.getUniforms();for(let Yn=0;Yn<yt;Yn++)_a.setValue(C,"_gl_DrawID",Yn),Rt.render(He[Yn]/Zn,Vt[Yn])}else if(F.isInstancedMesh)Rt.renderInstances(ot,jt,F.count);else if($.isInstancedBufferGeometry){const He=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Vt=Math.min($.instanceCount,He);Rt.renderInstances(ot,jt,Vt)}else Rt.render(ot,jt)};function Et(A,U,$){A.transparent===!0&&A.side===Mr&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,xc(A,U,$),A.side=hs,A.needsUpdate=!0,xc(A,U,$),A.side=Mr):xc(A,U,$)}this.compile=function(A,U,$=null){$===null&&($=A),p=oe.get($),p.init(U),v.push(p),$.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),A!==$&&A.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const X=new Set;return A.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ae=F.material;if(ae)if(Array.isArray(ae))for(let me=0;me<ae.length;me++){const Pe=ae[me];Et(Pe,$,F),X.add(Pe)}else Et(ae,$,F),X.add(ae)}),p=v.pop(),X},this.compileAsync=function(A,U,$=null){const X=this.compile(A,U,$);return new Promise(F=>{function ae(){if(X.forEach(function(me){ve.get(me).currentProgram.isReady()&&X.delete(me)}),X.size===0){F(A);return}setTimeout(ae,10)}_e.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Ti=null;function lr(A){Ti&&Ti(A)}function Ym(){Ts.stop()}function Km(){Ts.start()}const Ts=new Ey;Ts.setAnimationLoop(lr),typeof self<"u"&&Ts.setContext(self),this.setAnimationLoop=function(A){Ti=A,ne.setAnimationLoop(A),A===null?Ts.stop():Ts.start()},ne.addEventListener("sessionstart",Ym),ne.addEventListener("sessionend",Km),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(U),U=ne.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,U,P),p=oe.get(A,v.length),p.init(U),v.push(p),Me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),W.setFromProjectionMatrix(Me),be=this.localClippingEnabled,ee=xe.init(this.clippingPlanes,be),_=ye.get(A,x.length),_.init(),x.push(_),ne.enabled===!0&&ne.isPresenting===!0){const ae=y.xr.getDepthSensingMesh();ae!==null&&Uf(ae,U,-1/0,y.sortObjects)}Uf(A,U,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(k,K),at=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,at&&Q.addToRenderList(_,A),this.info.render.frame++,ee===!0&&xe.beginShadows();const $=p.state.shadowsArray;we.render($,A,U),ee===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,F=_.transmissive;if(p.setupLights(),U.isArrayCamera){const ae=U.cameras;if(F.length>0)for(let me=0,Pe=ae.length;me<Pe;me++){const Te=ae[me];Qm(X,F,A,Te)}at&&Q.render(A);for(let me=0,Pe=ae.length;me<Pe;me++){const Te=ae[me];Jm(_,A,Te,Te.viewport)}}else F.length>0&&Qm(X,F,A,U),at&&Q.render(A),Jm(_,A,U);P!==null&&w===0&&(De.updateMultisampleRenderTarget(P),De.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(y,A,U),je.resetDefaultState(),S=-1,T=null,v.pop(),v.length>0?(p=v[v.length-1],ee===!0&&xe.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?_=x[x.length-1]:_=null};function Uf(A,U,$,X){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||W.intersectsSprite(A)){X&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Me);const me=j.update(A),Pe=A.material;Pe.visible&&_.push(A,me,Pe,$,Oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||W.intersectsObject(A))){const me=j.update(A),Pe=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Oe.copy(me.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(Me)),Array.isArray(Pe)){const Te=me.groups;for(let We=0,$e=Te.length;We<$e;We++){const Fe=Te[We],ot=Pe[Fe.materialIndex];ot&&ot.visible&&_.push(A,me,ot,$,Oe.z,Fe)}}else Pe.visible&&_.push(A,me,Pe,$,Oe.z,null)}}const ae=A.children;for(let me=0,Pe=ae.length;me<Pe;me++)Uf(ae[me],U,$,X)}function Jm(A,U,$,X){const F=A.opaque,ae=A.transmissive,me=A.transparent;p.setupLightsView($),ee===!0&&xe.setGlobalState(y.clippingPlanes,$),X&&Ee.viewport(R.copy(X)),F.length>0&&yc(F,U,$),ae.length>0&&yc(ae,U,$),me.length>0&&yc(me,U,$),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Qm(A,U,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new na(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float")?fc:tr,minFilter:Gs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const ae=p.state.transmissionRenderTarget[X.id],me=X.viewport||R;ae.setSize(me.z*y.transmissionResolutionScale,me.w*y.transmissionResolutionScale);const Pe=y.getRenderTarget(),Te=y.getActiveCubeFace(),We=y.getActiveMipmapLevel();y.setRenderTarget(ae),y.getClearColor(V),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),at&&Q.render($);const $e=y.toneMapping;y.toneMapping=rs;const Fe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ee===!0&&xe.setGlobalState(y.clippingPlanes,X),yc(A,$,X),De.updateMultisampleRenderTarget(ae),De.updateRenderTargetMipmap(ae),_e.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Tt=0,jt=U.length;Tt<jt;Tt++){const Nt=U[Tt],Rt=Nt.object,He=Nt.geometry,Vt=Nt.material,yt=Nt.group;if(Vt.side===Mr&&Rt.layers.test(X.layers)){const Zn=Vt.side;Vt.side=Gn,Vt.needsUpdate=!0,eg(Rt,$,X,He,Vt,yt),Vt.side=Zn,Vt.needsUpdate=!0,ot=!0}}ot===!0&&(De.updateMultisampleRenderTarget(ae),De.updateRenderTargetMipmap(ae))}y.setRenderTarget(Pe,Te,We),y.setClearColor(V,G),Fe!==void 0&&(X.viewport=Fe),y.toneMapping=$e}function yc(A,U,$){const X=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ae=A.length;F<ae;F++){const me=A[F],Pe=me.object,Te=me.geometry,We=me.group;let $e=me.material;$e.allowOverride===!0&&X!==null&&($e=X),Pe.layers.test($.layers)&&eg(Pe,U,$,Te,$e,We)}}function eg(A,U,$,X,F,ae){A.onBeforeRender(y,U,$,X,F,ae),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(y,U,$,X,A,ae),F.transparent===!0&&F.side===Mr&&F.forceSinglePass===!1?(F.side=Gn,F.needsUpdate=!0,y.renderBufferDirect($,U,X,F,A,ae),F.side=hs,F.needsUpdate=!0,y.renderBufferDirect($,U,X,F,A,ae),F.side=Mr):y.renderBufferDirect($,U,X,F,A,ae),A.onAfterRender(y,U,$,X,F,ae)}function xc(A,U,$){U.isScene!==!0&&(U=mt);const X=ve.get(A),F=p.state.lights,ae=p.state.shadowsArray,me=F.state.version,Pe=Y.getParameters(A,F.state,ae,U,$),Te=Y.getProgramCacheKey(Pe);let We=X.programs;X.environment=A.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(A.isMeshStandardMaterial?I:St).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",Ce),We=new Map,X.programs=We);let $e=We.get(Te);if($e!==void 0){if(X.currentProgram===$e&&X.lightsStateVersion===me)return ng(A,Pe),$e}else Pe.uniforms=Y.getUniforms(A),A.onBeforeCompile(Pe,y),$e=Y.acquireProgram(Pe,Te),We.set(Te,$e),X.uniforms=Pe.uniforms;const Fe=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=xe.uniform),ng(A,Pe),X.needsLights=nS(A),X.lightsStateVersion=me,X.needsLights&&(Fe.ambientLightColor.value=F.state.ambient,Fe.lightProbe.value=F.state.probe,Fe.directionalLights.value=F.state.directional,Fe.directionalLightShadows.value=F.state.directionalShadow,Fe.spotLights.value=F.state.spot,Fe.spotLightShadows.value=F.state.spotShadow,Fe.rectAreaLights.value=F.state.rectArea,Fe.ltc_1.value=F.state.rectAreaLTC1,Fe.ltc_2.value=F.state.rectAreaLTC2,Fe.pointLights.value=F.state.point,Fe.pointLightShadows.value=F.state.pointShadow,Fe.hemisphereLights.value=F.state.hemi,Fe.directionalShadowMap.value=F.state.directionalShadowMap,Fe.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Fe.spotShadowMap.value=F.state.spotShadowMap,Fe.spotLightMatrix.value=F.state.spotLightMatrix,Fe.spotLightMap.value=F.state.spotLightMap,Fe.pointShadowMap.value=F.state.pointShadowMap,Fe.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=$e,X.uniformsList=null,$e}function tg(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=gu.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function ng(A,U){const $=ve.get(A);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function eS(A,U,$,X,F){U.isScene!==!0&&(U=mt),De.resetTextureUnits();const ae=U.fog,me=X.isMeshStandardMaterial?U.environment:null,Pe=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:go,Te=(X.isMeshStandardMaterial?I:St).get(X.envMap||me),We=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,$e=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Fe=!!$.morphAttributes.position,ot=!!$.morphAttributes.normal,Tt=!!$.morphAttributes.color;let jt=rs;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(jt=y.toneMapping);const Nt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Rt=Nt!==void 0?Nt.length:0,He=ve.get(X),Vt=p.state.lights;if(ee===!0&&(be===!0||A!==T)){const An=A===T&&X.id===S;xe.setState(X,A,An)}let yt=!1;X.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Vt.state.version||He.outputColorSpace!==Pe||F.isBatchedMesh&&He.batching===!1||!F.isBatchedMesh&&He.batching===!0||F.isBatchedMesh&&He.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&He.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&He.instancing===!1||!F.isInstancedMesh&&He.instancing===!0||F.isSkinnedMesh&&He.skinning===!1||!F.isSkinnedMesh&&He.skinning===!0||F.isInstancedMesh&&He.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&He.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&He.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&He.instancingMorph===!1&&F.morphTexture!==null||He.envMap!==Te||X.fog===!0&&He.fog!==ae||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==xe.numPlanes||He.numIntersection!==xe.numIntersection)||He.vertexAlphas!==We||He.vertexTangents!==$e||He.morphTargets!==Fe||He.morphNormals!==ot||He.morphColors!==Tt||He.toneMapping!==jt||He.morphTargetsCount!==Rt)&&(yt=!0):(yt=!0,He.__version=X.version);let Zn=He.currentProgram;yt===!0&&(Zn=xc(X,U,F));let _a=!1,Yn=!1,Xo=!1;const Bt=Zn.getUniforms(),pi=He.uniforms;if(Ee.useProgram(Zn.program)&&(_a=!0,Yn=!0,Xo=!0),X.id!==S&&(S=X.id,Yn=!0),_a||T!==A){Ee.buffers.depth.getReversed()?(le.copy(A.projectionMatrix),mw(le),gw(le),Bt.setValue(C,"projectionMatrix",le)):Bt.setValue(C,"projectionMatrix",A.projectionMatrix),Bt.setValue(C,"viewMatrix",A.matrixWorldInverse);const kn=Bt.map.cameraPosition;kn!==void 0&&kn.setValue(C,et.setFromMatrixPosition(A.matrixWorld)),Je.logarithmicDepthBuffer&&Bt.setValue(C,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Bt.setValue(C,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,Yn=!0,Xo=!0)}if(F.isSkinnedMesh){Bt.setOptional(C,F,"bindMatrix"),Bt.setOptional(C,F,"bindMatrixInverse");const An=F.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Bt.setValue(C,"boneTexture",An.boneTexture,De))}F.isBatchedMesh&&(Bt.setOptional(C,F,"batchingTexture"),Bt.setValue(C,"batchingTexture",F._matricesTexture,De),Bt.setOptional(C,F,"batchingIdTexture"),Bt.setValue(C,"batchingIdTexture",F._indirectTexture,De),Bt.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&Bt.setValue(C,"batchingColorTexture",F._colorsTexture,De));const mi=$.morphAttributes;if((mi.position!==void 0||mi.normal!==void 0||mi.color!==void 0)&&de.update(F,$,Zn),(Yn||He.receiveShadow!==F.receiveShadow)&&(He.receiveShadow=F.receiveShadow,Bt.setValue(C,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(pi.envMap.value=Te,pi.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&U.environment!==null&&(pi.envMapIntensity.value=U.environmentIntensity),Yn&&(Bt.setValue(C,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&tS(pi,Xo),ae&&X.fog===!0&&q.refreshFogUniforms(pi,ae),q.refreshMaterialUniforms(pi,X,H,Z,p.state.transmissionRenderTarget[A.id]),gu.upload(C,tg(He),pi,De)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(gu.upload(C,tg(He),pi,De),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Bt.setValue(C,"center",F.center),Bt.setValue(C,"modelViewMatrix",F.modelViewMatrix),Bt.setValue(C,"normalMatrix",F.normalMatrix),Bt.setValue(C,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const An=X.uniformsGroups;for(let kn=0,Ff=An.length;kn<Ff;kn++){const ws=An[kn];L.update(ws,Zn),L.bind(ws,Zn)}}return Zn}function tS(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function nS(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,U,$){const X=ve.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ve.get(A.texture).__webglTexture=U,ve.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,U){const $=ve.get(A);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0};const iS=C.createFramebuffer();this.setRenderTarget=function(A,U=0,$=0){P=A,E=U,w=$;let X=!0,F=null,ae=!1,me=!1;if(A){const Te=ve.get(A);if(Te.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(C.FRAMEBUFFER,null),X=!1;else if(Te.__webglFramebuffer===void 0)De.setupRenderTarget(A);else if(Te.__hasExternalTextures)De.rebindTextures(A,ve.get(A.texture).__webglTexture,ve.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Fe=A.depthTexture;if(Te.__boundDepthTexture!==Fe){if(Fe!==null&&ve.has(Fe)&&(A.width!==Fe.image.width||A.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(me=!0);const $e=ve.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($e[U])?F=$e[U][$]:F=$e[U],ae=!0):A.samples>0&&De.useMultisampledRTT(A)===!1?F=ve.get(A).__webglMultisampledFramebuffer:Array.isArray($e)?F=$e[$]:F=$e,R.copy(A.viewport),N.copy(A.scissor),D=A.scissorTest}else R.copy(te).multiplyScalar(H).floor(),N.copy(ge).multiplyScalar(H).floor(),D=Le;if($!==0&&(F=iS),Ee.bindFramebuffer(C.FRAMEBUFFER,F)&&X&&Ee.drawBuffers(A,F),Ee.viewport(R),Ee.scissor(N),Ee.setScissorTest(D),ae){const Te=ve.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Te.__webglTexture,$)}else if(me){const Te=ve.get(A.texture),We=U;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Te.__webglTexture,$,We)}else if(A!==null&&$!==0){const Te=ve.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Te.__webglTexture,$)}S=-1},this.readRenderTargetPixels=function(A,U,$,X,F,ae,me,Pe=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(Te=Te[me]),Te){Ee.bindFramebuffer(C.FRAMEBUFFER,Te);try{const We=A.textures[Pe],$e=We.format,Fe=We.type;if(!Je.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-X&&$>=0&&$<=A.height-F&&(A.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Pe),C.readPixels(U,$,X,F,ce.convert($e),ce.convert(Fe),ae))}finally{const We=P!==null?ve.get(P).__webglFramebuffer:null;Ee.bindFramebuffer(C.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,U,$,X,F,ae,me,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ve.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(Te=Te[me]),Te)if(U>=0&&U<=A.width-X&&$>=0&&$<=A.height-F){Ee.bindFramebuffer(C.FRAMEBUFFER,Te);const We=A.textures[Pe],$e=We.format,Fe=We.type;if(!Je.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ot),C.bufferData(C.PIXEL_PACK_BUFFER,ae.byteLength,C.STREAM_READ),A.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Pe),C.readPixels(U,$,X,F,ce.convert($e),ce.convert(Fe),0);const Tt=P!==null?ve.get(P).__webglFramebuffer:null;Ee.bindFramebuffer(C.FRAMEBUFFER,Tt);const jt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await pw(C,jt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ot),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ae),C.deleteBuffer(ot),C.deleteSync(jt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,U=null,$=0){const X=Math.pow(2,-$),F=Math.floor(A.image.width*X),ae=Math.floor(A.image.height*X),me=U!==null?U.x:0,Pe=U!==null?U.y:0;De.setTexture2D(A,0),C.copyTexSubImage2D(C.TEXTURE_2D,$,0,0,me,Pe,F,ae),Ee.unbindTexture()};const rS=C.createFramebuffer(),sS=C.createFramebuffer();this.copyTextureToTexture=function(A,U,$=null,X=null,F=0,ae=null){ae===null&&(F!==0?(Ya("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=F,F=0):ae=0);let me,Pe,Te,We,$e,Fe,ot,Tt,jt;const Nt=A.isCompressedTexture?A.mipmaps[ae]:A.image;if($!==null)me=$.max.x-$.min.x,Pe=$.max.y-$.min.y,Te=$.isBox3?$.max.z-$.min.z:1,We=$.min.x,$e=$.min.y,Fe=$.isBox3?$.min.z:0;else{const mi=Math.pow(2,-F);me=Math.floor(Nt.width*mi),Pe=Math.floor(Nt.height*mi),A.isDataArrayTexture?Te=Nt.depth:A.isData3DTexture?Te=Math.floor(Nt.depth*mi):Te=1,We=0,$e=0,Fe=0}X!==null?(ot=X.x,Tt=X.y,jt=X.z):(ot=0,Tt=0,jt=0);const Rt=ce.convert(U.format),He=ce.convert(U.type);let Vt;U.isData3DTexture?(De.setTexture3D(U,0),Vt=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(De.setTexture2DArray(U,0),Vt=C.TEXTURE_2D_ARRAY):(De.setTexture2D(U,0),Vt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const yt=C.getParameter(C.UNPACK_ROW_LENGTH),Zn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),_a=C.getParameter(C.UNPACK_SKIP_PIXELS),Yn=C.getParameter(C.UNPACK_SKIP_ROWS),Xo=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Nt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Nt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,We),C.pixelStorei(C.UNPACK_SKIP_ROWS,$e),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Fe);const Bt=A.isDataArrayTexture||A.isData3DTexture,pi=U.isDataArrayTexture||U.isData3DTexture;if(A.isDepthTexture){const mi=ve.get(A),An=ve.get(U),kn=ve.get(mi.__renderTarget),Ff=ve.get(An.__renderTarget);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,kn.__webglFramebuffer),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ff.__webglFramebuffer);for(let ws=0;ws<Te;ws++)Bt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ve.get(A).__webglTexture,F,Fe+ws),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ve.get(U).__webglTexture,ae,jt+ws)),C.blitFramebuffer(We,$e,me,Pe,ot,Tt,me,Pe,C.DEPTH_BUFFER_BIT,C.NEAREST);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(F!==0||A.isRenderTargetTexture||ve.has(A)){const mi=ve.get(A),An=ve.get(U);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,rS),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,sS);for(let kn=0;kn<Te;kn++)Bt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,mi.__webglTexture,F,Fe+kn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,mi.__webglTexture,F),pi?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,An.__webglTexture,ae,jt+kn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,An.__webglTexture,ae),F!==0?C.blitFramebuffer(We,$e,me,Pe,ot,Tt,me,Pe,C.COLOR_BUFFER_BIT,C.NEAREST):pi?C.copyTexSubImage3D(Vt,ae,ot,Tt,jt+kn,We,$e,me,Pe):C.copyTexSubImage2D(Vt,ae,ot,Tt,We,$e,me,Pe);Ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else pi?A.isDataTexture||A.isData3DTexture?C.texSubImage3D(Vt,ae,ot,Tt,jt,me,Pe,Te,Rt,He,Nt.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Vt,ae,ot,Tt,jt,me,Pe,Te,Rt,Nt.data):C.texSubImage3D(Vt,ae,ot,Tt,jt,me,Pe,Te,Rt,He,Nt):A.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ae,ot,Tt,me,Pe,Rt,He,Nt.data):A.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ae,ot,Tt,Nt.width,Nt.height,Rt,Nt.data):C.texSubImage2D(C.TEXTURE_2D,ae,ot,Tt,me,Pe,Rt,He,Nt);C.pixelStorei(C.UNPACK_ROW_LENGTH,yt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Zn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,_a),C.pixelStorei(C.UNPACK_SKIP_ROWS,Yn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Xo),ae===0&&U.generateMipmaps&&C.generateMipmap(Vt),Ee.unbindTexture()},this.copyTextureToTexture3D=function(A,U,$=null,X=null,F=0){return Ya('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,U,$,X,F)},this.initRenderTarget=function(A){ve.get(A).__webglFramebuffer===void 0&&De.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?De.setTextureCube(A,0):A.isData3DTexture?De.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?De.setTexture2DArray(A,0):De.setTexture2D(A,0),Ee.unbindTexture()},this.resetState=function(){E=0,w=0,P=null,Ee.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}function vr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Ry(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var oi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},bo={duration:.5,overwrite:!1,delay:0},xm,yn,Ht,xi=1e8,Pt=1/xi,ep=Math.PI*2,PI=ep/4,II=0,Cy=Math.sqrt,DI=Math.cos,LI=Math.sin,fn=function(e){return typeof e=="string"},Yt=function(e){return typeof e=="function"},Dr=function(e){return typeof e=="number"},bm=function(e){return typeof e>"u"},nr=function(e){return typeof e=="object"},Wn=function(e){return e!==!1},Sm=function(){return typeof window<"u"},Jc=function(e){return Yt(e)||fn(e)},Py=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,tp=/(?:-?\.?\d|\.)+/gi,Iy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Va=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Dy=/[+-]=-?[.\d]+/,Ly=/[^,'"\[\]\s]+/gi,NI=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Wt,Hi,np,Em,fi={},Ou={},Ny,Oy=function(e){return(Ou=So(e,fi))&&qn},Mm=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Nl=function(e,t){return!t&&console.warn(e)},Uy=function(e,t){return e&&(fi[e]=t)&&Ou&&(Ou[e]=t)||fi},Ol=function(){return 0},OI={suppressEvents:!0,isStart:!0,kill:!1},_u={suppressEvents:!0,kill:!1},UI={suppressEvents:!0},Tm={},ss=[],ip={},Fy,ti={},Ch={},G_=30,vu=[],wm="",Am=function(e){var t=e[0],i,r;if(nr(t)||Yt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=vu.length;r--&&!vu[r].targetTest(t););i=vu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new ox(e[r],i)))||e.splice(r,1);return e},qs=function(e){return e._gsap||Am(bi(e))[0]._gsap},By=function(e,t,i){return(i=e[t])&&Yt(i)?e[t]():bm(i)&&e.getAttribute&&e.getAttribute(t)||i},$n=function(e,t){return(e=e.split(",")).forEach(t)||e},Jt=function(e){return Math.round(e*1e5)/1e5||0},tn=function(e){return Math.round(e*1e7)/1e7||0},Ja=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},FI=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Uu=function(){var e=ss.length,t=ss.slice(0),i,r;for(ip={},ss.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},ky=function(e,t,i,r){ss.length&&!yn&&Uu(),e.render(t,i,yn&&t<0&&(e._initted||e._startAt)),ss.length&&!yn&&Uu()},Hy=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ly).length<2?t:fn(e)?e.trim():e},zy=function(e){return e},hi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},BI=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},So=function(e,t){for(var i in t)e[i]=t[i];return e},W_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=nr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Fu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},pl=function(e){var t=e.parent||Wt,i=e.keyframes?BI(Tn(e.keyframes)):hi;if(Wn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},kI=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Vy=function(e,t,i,r,s){var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Tf=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ps=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Zs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},HI=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},rp=function(e,t,i,r){return e._startAt&&(yn?e._startAt.revert(_u):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},zI=function n(e){return!e||e._ts&&n(e.parent)},$_=function(e){return e._repeat?Eo(e._tTime,e=e.duration()+e._rDelay)*e:0},Eo=function(e,t){var i=Math.floor(e=tn(e/t));return e&&i===e?i-1:i},Bu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},wf=function(e){return e._end=tn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},Af=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=tn(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),wf(e),i._dirty||Zs(i,e)),e},Gy=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Bu(e.rawTime(),t),(!t._dur||dc(0,t.totalDuration(),i)-t._tTime>Pt)&&t.render(i,!0)),Zs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Pt}},Vi=function(e,t,i,r){return t.parent&&ps(t),t._start=tn((Dr(i)?i:i||e!==Wt?_i(e,i,t):e._time)+t._delay),t._end=tn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Vy(e,t,"_first","_last",e._sort?"_start":0),sp(t)||(e._recent=t),r||Gy(e,t),e._ts<0&&Af(e,e._tTime),e},Wy=function(e,t){return(fi.ScrollTrigger||Mm("scrollTrigger",t))&&fi.ScrollTrigger.create(t,e)},$y=function(e,t,i,r,s){if(Cm(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!yn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Fy!==ni.frame)return ss.push(e),e._lazy=[s,r],1},VI=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},sp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},GI=function(e,t,i,r){var s=e.ratio,a=t<0||!t&&(!e._start&&VI(e)&&!(!e._initted&&sp(e))||(e._ts<0||e._dp._ts<0)&&!sp(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=dc(0,e._tDur,t),u=Eo(l,o),e._yoyo&&u&1&&(a=1-a),u!==Eo(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||yn||r||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&$y(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?Pt:0),i||(i=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&rp(e,t,i,!0),e._onUpdate&&!i&&ri(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&ri(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ps(e,1),!i&&!yn&&(ri(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},WI=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Mo=function(e,t,i,r){var s=e._repeat,a=tn(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:tn(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Af(e,e._tTime=e._tDur*o),e.parent&&wf(e),i||Zs(e.parent,e),e},X_=function(e){return e instanceof Un?Zs(e):Mo(e,e._dur)},$I={_start:0,endTime:Ol,totalDuration:Ol},_i=function n(e,t,i){var r=e.labels,s=e._recent||$I,a=e.duration()>=xi?s.endTime(!1):e._dur,o,l,c;return fn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(Tn(i)?i[0]:i).totalDuration()),o>1?n(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},ml=function(e,t,i){var r=Dr(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Wn(l.vars.inherit)&&l.parent;a.immediateRender=Wn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new en(t[0],a,t[s+1])},Ms=function(e,t){return e||e===0?t(e):t},dc=function(e,t,i){return i<e?e:i>t?t:i},En=function(e,t){return!fn(e)||!(t=NI.exec(e))?"":t[1]},XI=function(e,t,i){return Ms(i,function(r){return dc(e,t,r)})},ap=[].slice,Xy=function(e,t){return e&&nr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&nr(e[0]))&&!e.nodeType&&e!==Hi},jI=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return fn(r)&&!t||Xy(r,1)?(s=i).push.apply(s,bi(r)):i.push(r)})||i},bi=function(e,t,i){return Ht&&!t&&Ht.selector?Ht.selector(e):fn(e)&&!i&&(np||!To())?ap.call((t||Em).querySelectorAll(e),0):Tn(e)?jI(e,i):Xy(e)?ap.call(e,0):e?[e]:[]},op=function(e){return e=bi(e)[0]||Nl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return bi(t,i.querySelectorAll?i:i===e?Nl("Invalid scope")||Em.createElement("div"):e)}},jy=function(e){return e.sort(function(){return .5-Math.random()})},qy=function(e){if(Yt(e))return e;var t=nr(e)?e:{each:e},i=Ys(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,f=r;return fn(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(h,d,m){var g=(m||t).length,_=a[g],p,x,v,y,b,E,w,P,S;if(!_){if(S=t.grid==="auto"?0:(t.grid||[1,xi])[1],!S){for(w=-xi;w<(w=m[S++].getBoundingClientRect().left)&&S<g;);S<g&&S--}for(_=a[g]=[],p=l?Math.min(S,g)*u-.5:r%S,x=S===xi?0:l?g*f/S-.5:r/S|0,w=0,P=xi,E=0;E<g;E++)v=E%S-p,y=x-(E/S|0),_[E]=b=c?Math.abs(c==="y"?y:v):Cy(v*v+y*y),b>w&&(w=b),b<P&&(P=b);r==="random"&&jy(_),_.max=w-P,_.min=P,_.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(S>g?g-1:c?c==="y"?g/S:S:Math.max(S,g/S))||0)*(r==="edges"?-1:1),_.b=g<0?s-g:s,_.u=En(t.amount||t.each)||0,i=i&&g<0?rx(i):i}return g=(_[h]-_.min)/_.max||0,tn(_.b+(i?i(g):g)*_.v)+_.u}},lp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=tn(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Dr(i)?0:En(i))}},Zy=function(e,t){var i=Tn(e),r,s;return!i&&nr(e)&&(r=i=e.radius||xi,e.values?(e=bi(e.values),(s=!Dr(e[0]))&&(r*=r)):e=lp(e.increment)),Ms(t,i?Yt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=xi,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:a,s||u===a||Dr(a)?u:u+En(a)}:lp(e))},Yy=function(e,t,i,r){return Ms(Tn(e)?!t:i===!0?!!(i=0):!r,function(){return Tn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},qI=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,a){return a(s)},r)}},ZI=function(e,t){return function(i){return e(parseFloat(i))+(t||En(i))}},YI=function(e,t,i){return Jy(e,t,0,1,i)},Ky=function(e,t,i){return Ms(i,function(r){return e[~~t(r)]})},KI=function n(e,t,i){var r=t-e;return Tn(e)?Ky(e,n(0,e.length),t):Ms(i,function(s){return(r+(s-e)%r)%r+e})},JI=function n(e,t,i){var r=t-e,s=r*2;return Tn(e)?Ky(e,n(0,e.length-1),t):Ms(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Ul=function(e){for(var t=0,i="",r,s,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?Ly:tp),i+=e.substr(t,r-t)+Yy(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return i+e.substr(t,e.length-t)},Jy=function(e,t,i,r,s){var a=t-e,o=r-i;return Ms(s,function(l){return i+((l-e)/a*o||0)})},QI=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=fn(e),o={},l,c,u,f,h;if(i===!0&&(r=1)&&(i=null),a)e={p:e},t={p:t};else if(Tn(e)&&!Tn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(m){m*=f;var g=Math.min(h,~~m);return u[g](m-g)},i=t}else r||(e=So(Tn(e)?[]:{},e));if(!u){for(l in t)Rm.call(o,e,l,"get",t[l]);s=function(m){return Dm(m,o)||(a?e.p:e)}}}return Ms(i,s)},j_=function(e,t,i){var r=e.labels,s=xi,a,o,l;for(a in r)o=r[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ri=function(e,t,i){var r=e.vars,s=r[t],a=Ht,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&ss.length&&Uu(),o&&(Ht=o),u=l?s.apply(c,l):s.call(c),Ht=a,u},sl=function(e){return ps(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yn),e.progress()<1&&ri(e,"onInterrupt"),e},Ga,Qy=[],ex=function(e){if(e)if(e=!e.name&&e.default||e,Sm()||e.headless){var t=e.name,i=Yt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Ol,render:Dm,add:Rm,kill:m2,modifier:p2,rawVars:0},a={targetTest:0,get:0,getSetter:Im,aliases:{},register:0};if(To(),e!==r){if(ti[t])return;hi(r,hi(Fu(e,s),a)),So(r.prototype,So(s,Fu(e,a))),ti[r.prop=t]=r,e.targetTest&&(vu.push(r),Tm[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Uy(t,r),e.register&&e.register(qn,r,Xn)}else Qy.push(e)},Ct=255,al={aqua:[0,Ct,Ct],lime:[0,Ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ct],navy:[0,0,128],white:[Ct,Ct,Ct],olive:[128,128,0],yellow:[Ct,Ct,0],orange:[Ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ct,0,0],pink:[Ct,192,203],cyan:[0,Ct,Ct],transparent:[Ct,Ct,Ct,0]},Ph=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ct+.5|0},tx=function(e,t,i){var r=e?Dr(e)?[e>>16,e>>8&Ct,e&Ct]:0:al.black,s,a,o,l,c,u,f,h,d,m;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),al[e])r=al[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ct,r&Ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ct,e&Ct]}else if(e.substr(0,3)==="hsl"){if(r=m=e.match(tp),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Ph(l+1/3,s,a),r[1]=Ph(l,s,a),r[2]=Ph(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(Iy),i&&r.length<4&&(r[3]=1),r}else r=e.match(tp)||al.transparent;r=r.map(Number)}return t&&!m&&(s=r[0]/Ct,a=r[1]/Ct,o=r[2]/Ct,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},nx=function(e){var t=[],i=[],r=-1;return e.split(as).forEach(function(s){var a=s.match(Va)||[];t.push.apply(t,a),i.push(r+=a.length+1)}),t.c=i,t},q_=function(e,t,i){var r="",s=(e+r).match(as),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=tx(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=nx(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(as,"1").split(Va),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(as),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},as=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in al)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),e2=/hsl[a]?\(/,ix=function(e){var t=e.join(" "),i;if(as.lastIndex=0,as.test(t))return i=e2.test(t),e[1]=q_(e[1],i),e[0]=q_(e[0],i,nx(e[1])),!0},Fl,ni=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,c,u,f,h,d,m=function g(_){var p=n()-r,x=_===!0,v,y,b,E;if((p>e||p<0)&&(i+=p-t),r+=p,b=r-i,v=b-a,(v>0||x)&&(E=++f.frame,h=b-f.time*1e3,f.time=b=b/1e3,a+=v+(v>=s?4:s-v),y=1),x||(l=c(g)),y)for(d=0;d<o.length;d++)o[d](b,h,E,_)};return f={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(_){return h/(1e3/(_||60))},wake:function(){Ny&&(!np&&Sm()&&(Hi=np=window,Em=Hi.document||{},fi.gsap=qn,(Hi.gsapVersions||(Hi.gsapVersions=[])).push(qn.version),Oy(Ou||Hi.GreenSockGlobals||!Hi.gsap&&Hi||{}),Qy.forEach(ex)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(_){return setTimeout(_,a-f.time*1e3+1|0)},Fl=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Fl=0,c=Ol},lagSmoothing:function(_,p){e=_||1/0,t=Math.min(p||33,e)},fps:function(_){s=1e3/(_||240),a=f.time*1e3+s},add:function(_,p,x){var v=p?function(y,b,E,w){_(y,b,E,w),f.remove(v)}:_;return f.remove(_),o[x?"unshift":"push"](v),To(),v},remove:function(_,p){~(p=o.indexOf(_))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},f}(),To=function(){return!Fl&&ni.wake()},ht={},t2=/^[\d.\-M][\d.\-,\s]/,n2=/["']/g,i2=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(n2,"").trim():+c,r=l.substr(o+1).trim();return t},r2=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},s2=function(e){var t=(e+"").split("("),i=ht[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[i2(t[1])]:r2(e).split(",").map(Hy)):ht._CE&&t2.test(e)?ht._CE("",e):i},rx=function(e){return function(t){return 1-e(1-t)}},sx=function n(e,t){for(var i=e._first,r;i;)i instanceof Un?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Ys=function(e,t){return e&&(Yt(e)?e:ht[e]||s2(e))||t},ma=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},a;return $n(e,function(o){ht[o]=fi[o]=s,ht[a=o.toLowerCase()]=i;for(var l in s)ht[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[o+"."+l]=s[l]}),s},ax=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ih=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/ep*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*LI((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:ax(o);return s=ep/s,l.config=function(c,u){return n(e,c,u)},l},Dh=function n(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:ax(i);return r.config=function(s){return n(e,s)},r};$n("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;ma(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;ma("Elastic",Ih("in"),Ih("out"),Ih());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(o){return o<t?n*o*o:o<i?n*Math.pow(o-1.5/e,2)+.75:o<r?n*(o-=2.25/e)*o+.9375:n*Math.pow(o-2.625/e,2)+.984375};ma("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ma("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});ma("Circ",function(n){return-(Cy(1-n*n)-1)});ma("Sine",function(n){return n===1?1:-DI(n*PI)+1});ma("Back",Dh("in"),Dh("out"),Dh());ht.SteppedEase=ht.steps=fi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,a=1-Pt;return function(o){return((r*dc(0,a,o)|0)+s)*i}}};bo.ease=ht["quad.out"];$n("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return wm+=n+","+n+"Params,"});var ox=function(e,t){this.id=II++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:By,this.set=t?t.getSetter:Im},Bl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Mo(this,+t.duration,1,1),this.data=t.data,Ht&&(this._ctx=Ht,Ht.data.push(this)),Fl||ni.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Mo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(To(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Af(this,i),!s._dp||s.parent||Gy(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Vi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Pt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),ky(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+$_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+$_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Eo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Pt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Bu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Pt?0:this._rts,this.totalTime(dc(-Math.abs(this._delay),this._tDur,s),r!==!1),wf(this),HI(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(To(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Vi(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Wn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=UI);var r=yn;return yn=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),yn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,X_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,X_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(_i(this,i),Wn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Wn(r)),this._dur||(this._zTime=-Pt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Pt)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this;return new Promise(function(s){var a=Yt(i)?i:zy,o=function(){var c=r.then;r.then=null,Yt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){sl(this)},n}();hi(Bl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pt,_prom:0,_ps:!1,_rts:1});var Un=function(n){Ry(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Wn(i.sortChildren),Wt&&Vi(i.parent||Wt,vr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Wy(vr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return ml(0,arguments,this),this},t.from=function(r,s,a){return ml(1,arguments,this),this},t.fromTo=function(r,s,a,o){return ml(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,pl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new en(r,s,_i(this,a),1),this},t.call=function(r,s,a){return Vi(this,en.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new en(r,a,_i(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,pl(a).immediateRender=Wn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,pl(o).immediateRender=Wn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:tn(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,m,g,_,p,x,v,y,b,E,w;if(this!==Wt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,y=this._start,v=this._ts,p=!v,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,_=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,a);if(h=tn(u%_),u===l?(g=this._repeat,h=c):(b=tn(u/_),g=~~b,g&&g===b&&(h=c,g--),h>c&&(h=c)),b=Eo(this._tTime,_),!o&&this._tTime&&b!==g&&this._tTime-b*_-this._dur<=0&&(b=g),E&&g&1&&(h=c-h,w=1),g!==b&&!this._lock){var P=E&&b&1,S=P===(E&&g&1);if(g<b&&(P=!P),o=P?0:u%c?c:u,this._lock=1,this.render(o||(w?0:tn(g*_)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;sx(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=WI(this,tn(o),tn(h)),x&&(u-=h-(h=x._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&h&&!s&&!g&&(ri(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(d=this._first;d;){if(m=d._next,(d._act||h>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!p){x=0,m&&(u+=this._zTime=-Pt);break}}d=m}else{d=this._last;for(var T=r<0?r:h;d;){if(m=d._prev,(d._act||T<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,s,a||yn&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!p){x=0,m&&(u+=this._zTime=T?-Pt:Pt);break}}d=m}}if(x&&!s&&(this.pause(),x.render(h>=o?0:-Pt)._zTime=h>=o?1:-1,this._ts))return this._start=y,wf(this),this.render(r,s,a);this._onUpdate&&!s&&ri(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ps(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(ri(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Dr(s)||(s=_i(this,s,r)),!(r instanceof Bl)){if(Tn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(fn(r))return this.addLabel(r,s);if(Yt(r))r=en.delayedCall(0,r);else return this}return this!==r?Vi(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-xi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof en?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return fn(r)?this.removeLabel(r):Yt(r)?this.killTweensOf(r):(r.parent===this&&Tf(this,r),r===this._recent&&(this._recent=this._last),Zs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=tn(ni.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=_i(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=en.delayedCall(0,s||Ol,a);return o.data="isPause",this._hasPause=1,Vi(this,o,_i(this,r))},t.removePause=function(r){var s=this._first;for(r=_i(this,r);s;)s._start===r&&s.data==="isPause"&&ps(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Kr!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=bi(r),l=this._first,c=Dr(s),u;l;)l instanceof en?FI(l._targets,o)&&(c?(!Kr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=_i(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,m=en.to(a,hi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Pt,onStart:function(){if(a.pause(),!d){var _=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==_&&Mo(m,_,0,1).render(m._time,!0,!0),d=1}u&&u.apply(m,f||[])}},s));return h?m.render(0):m},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,hi({startAt:{time:_i(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),j_(this,_i(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),j_(this,_i(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Zs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Zs(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=xi,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Vi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Mo(a,a===Wt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Wt._ts&&(ky(Wt,Bu(r,Wt)),Fy=ni.frame),ni.frame>=G_){G_+=oi.autoSleep||120;var s=Wt._first;if((!s||!s._ts)&&oi.autoSleep&&ni._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ni.sleep()}}},e}(Bl);hi(Un.prototype,{_lock:0,_hasPause:0,_forcing:0});var a2=function(e,t,i,r,s,a,o){var l=new Xn(this._pt,e,t,0,1,dx,null,s),c=0,u=0,f,h,d,m,g,_,p,x;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=Ul(r)),a&&(x=[i,r],a(x,e,t),i=x[0],r=x[1]),h=i.match(Rh)||[];f=Rh.exec(r);)m=f[0],g=r.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),m!==h[u++]&&(_=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:_,c:m.charAt(1)==="="?Ja(_,m)-_:parseFloat(m)-_,m:d&&d<4?Math.round:0},c=Rh.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(Dy.test(r)||p)&&(l.e=0),this._pt=l,l},Rm=function(e,t,i,r,s,a,o,l,c,u){Yt(r)&&(r=r(s||0,e,a));var f=e[t],h=i!=="get"?i:Yt(f)?c?e[t.indexOf("set")||!Yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Yt(f)?c?f2:fx:Pm,m;if(fn(r)&&(~r.indexOf("random(")&&(r=Ul(r)),r.charAt(1)==="="&&(m=Ja(h,r)+(En(h)||0),(m||m===0)&&(r=m))),!u||h!==r||cp)return!isNaN(h*r)&&r!==""?(m=new Xn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?d2:hx,0,d),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!f&&!(t in e)&&Mm(t,r),a2.call(this,e,t,h,r,d,l||oi.stringFilter,c))},o2=function(e,t,i,r,s){if(Yt(e)&&(e=gl(e,s,t,i,r)),!nr(e)||e.style&&e.nodeType||Tn(e)||Py(e))return fn(e)?gl(e,s,t,i,r):e;var a={},o;for(o in e)a[o]=gl(e[o],s,t,i,r);return a},lx=function(e,t,i,r,s,a){var o,l,c,u;if(ti[e]&&(o=new ti[e]).init(s,o.rawVars?t[e]:o2(t[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new Xn(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Ga))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Kr,cp,Cm=function n(e,t,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,m=e._dur,g=e._startAt,_=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:_,v=e._overwrite==="auto"&&!xm,y=e.timeline,b,E,w,P,S,T,R,N,D,V,G,B,Z;if(y&&(!h||!s)&&(s="none"),e._ease=Ys(s,bo.ease),e._yEase=f?rx(Ys(f===!0?s:f,bo.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!r.runBackwards,!y||h&&!r.stagger){if(N=_[0]?qs(_[0]).harness:0,B=N&&r[N.prop],b=Fu(r,Tm),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&m?_u:OI),g._lazy=0),a){if(ps(e._startAt=en.set(_,hi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Wn(l),startAt:null,delay:0,onUpdate:c&&function(){return ri(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn||!o&&!d)&&e._startAt.revert(_u),o&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&m&&!g){if(t&&(o=!1),w=hi({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Wn(l),immediateRender:o,stagger:0,parent:p},b),B&&(w[N.prop]=B),ps(e._startAt=en.set(_,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn?e._startAt.revert(_u):e._startAt.render(-1,!0)),e._zTime=t,!o)n(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Wn(l)||l&&!m,E=0;E<_.length;E++){if(S=_[E],R=S._gsap||Am(_)[E]._gsap,e._ptLookup[E]=V={},ip[R.id]&&ss.length&&Uu(),G=x===_?E:x.indexOf(S),N&&(D=new N).init(S,B||b,e,G,x)!==!1&&(e._pt=P=new Xn(e._pt,S,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(H){V[H]=P}),D.priority&&(T=1)),!N||B)for(w in b)ti[w]&&(D=lx(w,b,e,G,S,x))?D.priority&&(T=1):V[w]=P=Rm.call(e,S,w,"get",b[w],G,x,0,r.stringFilter);e._op&&e._op[E]&&e.kill(S,e._op[E]),v&&e._pt&&(Kr=e,Wt.killTweensOf(S,V,e.globalTime(t)),Z=!e.parent,Kr=0),e._pt&&l&&(ip[R.id]=1)}T&&px(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,h&&t<=0&&y.render(xi,!0,!0)},l2=function(e,t,i,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return cp=1,e.vars[t]="+=0",Cm(e,o),cp=0,l?Nl(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,f.e&&(f.e=Jt(i)+En(f.e)),f.b&&(f.b=u.s+En(f.b))},c2=function(e,t){var i=e[0]?qs(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return t;s=So({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},u2=function(e,t,i,r){var s=t.ease||r||"power1.inOut",a,o;if(Tn(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},gl=function(e,t,i,r,s){return Yt(e)?e.call(t,i,r,s):fn(e)&&~e.indexOf("random(")?Ul(e):e},cx=wm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ux={};$n(cx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return ux[n]=1});var en=function(n){Ry(e,n);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:pl(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,m=l.keyframes,g=l.defaults,_=l.scrollTrigger,p=l.yoyoEase,x=r.parent||Wt,v=(Tn(i)||Py(i)?Dr(i[0]):"length"in r)?[i]:bi(i),y,b,E,w,P,S,T,R;if(o._targets=v.length?Am(v):Nl("GSAP target "+i+" not found. https://gsap.com",!oi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,m||h||Jc(c)||Jc(u)){if(r=o.vars,y=o.timeline=new Un({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:v}),y.kill(),y.parent=y._dp=vr(o),y._start=0,h||Jc(c)||Jc(u)){if(w=v.length,T=h&&qy(h),nr(h))for(P in h)~cx.indexOf(P)&&(R||(R={}),R[P]=h[P]);for(b=0;b<w;b++)E=Fu(r,ux),E.stagger=0,p&&(E.yoyoEase=p),R&&So(E,R),S=v[b],E.duration=+gl(c,vr(o),b,S,v),E.delay=(+gl(u,vr(o),b,S,v)||0)-o._delay,!h&&w===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),y.to(S,E,T?T(b,S,v):0),y._ease=ht.none;y.duration()?c=u=0:o.timeline=0}else if(m){pl(hi(y.vars.defaults,{ease:"none"})),y._ease=Ys(m.ease||r.ease||"none");var N=0,D,V,G;if(Tn(m))m.forEach(function(B){return y.to(v,B,">")}),y.duration();else{E={};for(P in m)P==="ease"||P==="easeEach"||u2(P,m[P],E,m.easeEach);for(P in E)for(D=E[P].sort(function(B,Z){return B.t-Z.t}),N=0,b=0;b<D.length;b++)V=D[b],G={ease:V.e,duration:(V.t-(b?D[b-1].t:0))/100*c},G[P]=V.v,y.to(v,G,N),N+=G.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return d===!0&&!xm&&(Kr=vr(o),Wt.killTweensOf(v),Kr=0),Vi(x,vr(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!m&&o._start===tn(x._time)&&Wn(f)&&zI(vr(o))&&x.data!=="nested")&&(o._tTime=-Pt,o.render(Math.max(0,-u)||0)),_&&Wy(vr(o),_),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-Pt&&!u?l:r<Pt?0:r,h,d,m,g,_,p,x,v,y;if(!c)GI(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,a);if(h=tn(f%g),f===l?(m=this._repeat,h=c):(_=tn(f/g),m=~~_,m&&m===_?(h=c,m--):h>c&&(h=c)),p=this._yoyo&&m&1,p&&(y=this._yEase,h=c-h),_=Eo(this._tTime,g),h===o&&!a&&this._initted&&m===_)return this._tTime=f,this;m!==_&&(v&&this._yEase&&sx(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==g&&this._initted&&(this._lock=a=1,this.render(tn(g*m),!0).invalidate()._lock=0))}if(!this._initted){if($y(this,u?r:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==_))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(h/c),this._from&&(this.ratio=x=1-x),h&&!o&&!s&&!m&&(ri(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;v&&v.render(r<0?r:v._dur*v._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&rp(this,r,s,a),ri(this,"onUpdate")),this._repeat&&m!==_&&this.vars.onRepeat&&!s&&this.parent&&ri(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&rp(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ps(this,1),!s&&!(u&&!o)&&(f||o||p)&&(ri(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){Fl||ni.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Cm(this,c),u=this._ease(c/this._dur),l2(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Af(this,0),this.parent||Vy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?sl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Kr&&Kr.vars.overwrite!==!0)._first||sl(this),this.parent&&a!==this.timeline.totalDuration()&&Mo(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?bi(r):o,c=this._ptLookup,u=this._pt,f,h,d,m,g,_,p;if((!s||s==="all")&&kI(o,l))return s==="all"&&(this._pt=0),sl(this);for(f=this._op=this._op||[],s!=="all"&&(fn(s)&&(g={},$n(s,function(x){return g[x]=1}),s=g),s=c2(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],s==="all"?(f[p]=s,m=h,d={}):(d=f[p]=f[p]||{},m=s);for(g in m)_=h&&h[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&Tf(this,_,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&sl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ml(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return ml(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Wt.killTweensOf(r,s,a)},e}(Bl);hi(en.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});$n("staggerTo,staggerFrom,staggerFromTo",function(n){en[n]=function(){var e=new Un,t=ap.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Pm=function(e,t,i){return e[t]=i},fx=function(e,t,i){return e[t](i)},f2=function(e,t,i,r){return e[t](r.fp,i)},h2=function(e,t,i){return e.setAttribute(t,i)},Im=function(e,t){return Yt(e[t])?fx:bm(e[t])&&e.setAttribute?h2:Pm},hx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},d2=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},dx=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Dm=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},p2=function(e,t,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,i),s=a},m2=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Tf(this,t,"_pt"):t.dep||(i=1),t=r;return!i},g2=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},px=function(e){for(var t=e._pt,i,r,s,a;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=i}e._pt=s},Xn=function(){function n(t,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||hx,this.d=l||this,this.set=c||Pm,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=g2,this.m=i,this.mt=s,this.tween=r},n}();$n(wm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Tm[n]=1});fi.TweenMax=fi.TweenLite=en;fi.TimelineLite=fi.TimelineMax=Un;Wt=new Un({sortChildren:!1,defaults:bo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});oi.stringFilter=ix;var Ks=[],yu={},_2=[],Z_=0,v2=0,Lh=function(e){return(yu[e]||_2).map(function(t){return t()})},up=function(){var e=Date.now(),t=[];e-Z_>2&&(Lh("matchMediaInit"),Ks.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=Hi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&t.push(i))}),Lh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Z_=e,Lh("matchMedia"))},mx=function(){function n(t,i){this.selector=i&&op(i),this.data=[],this._r=[],this.isReverted=!1,this.id=v2++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Yt(i)&&(s=r,r=i,i=Yt);var a=this,o=function(){var c=Ht,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=op(s)),Ht=a,f=r.apply(a,arguments),Yt(f)&&a._r.push(f),Ht=c,a.selector=u,a.isReverted=!1,f};return a.last=o,i===Yt?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=Ht;Ht=null,i(this),Ht=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof en&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Un?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof en)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Ks.length;a--;)Ks[a].id===this.id&&Ks.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),y2=function(){function n(t){this.contexts=[],this.scope=t,Ht&&Ht.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){nr(i)||(i={matches:i});var a=new mx(0,s||this.scope),o=a.conditions={},l,c,u;Ht&&!a.selector&&(a.selector=Ht.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=Hi.matchMedia(i[c]),l&&(Ks.indexOf(a)<0&&Ks.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(up):l.addEventListener("change",up)));return u&&r(a,function(f){return a.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),ku={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return ex(r)})},timeline:function(e){return new Un(e)},getTweensOf:function(e,t){return Wt.getTweensOf(e,t)},getProperty:function(e,t,i,r){fn(e)&&(e=bi(e)[0]);var s=qs(e||{}).get,a=i?zy:Hy;return i==="native"&&(i=""),e&&(t?a((ti[t]&&ti[t].get||s)(e,t,i,r)):function(o,l,c){return a((ti[o]&&ti[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=bi(e),e.length>1){var r=e.map(function(u){return qn.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var a=ti[t],o=qs(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;Ga._pt=0,f.init(e,i?u+i:u,Ga,0,[e]),f.render(1,f),Ga._pt&&Dm(1,Ga)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,t,i){var r,s=qn.to(e,hi((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ys(e.ease,bo.ease)),W_(bo,e||{})},config:function(e){return W_(oi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!ti[o]&&!fi[o]&&Nl(t+" effect requires "+o+" plugin.")}),Ch[t]=function(o,l,c){return i(bi(o),hi(l||{},s),c)},a&&(Un.prototype[t]=function(o,l,c){return this.add(Ch[t](o,nr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=Ys(t)},parseEase:function(e,t){return arguments.length?Ys(e,t):ht},getById:function(e){return Wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Un(e),r,s;for(i.smoothChildTiming=Wn(e.smoothChildTiming),Wt.remove(i),i._dp=0,i._time=i._tTime=Wt._time,r=Wt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof en&&r.vars.onComplete===r._targets[0]))&&Vi(i,r,r._start-r._delay),r=s;return Vi(Wt,i,0),i},context:function(e,t){return e?new mx(e,t):Ht},matchMedia:function(e){return new y2(e)},matchMediaRefresh:function(){return Ks.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||up()},addEventListener:function(e,t){var i=yu[e]||(yu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=yu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:KI,wrapYoyo:JI,distribute:qy,random:Yy,snap:Zy,normalize:YI,getUnit:En,clamp:XI,splitColor:tx,toArray:bi,selector:op,mapRange:Jy,pipe:qI,unitize:ZI,interpolate:QI,shuffle:jy},install:Oy,effects:Ch,ticker:ni,updateRoot:Un.updateRoot,plugins:ti,globalTimeline:Wt,core:{PropTween:Xn,globals:Uy,Tween:en,Timeline:Un,Animation:Bl,getCache:qs,_removeLinkedListItem:Tf,reverting:function(){return yn},context:function(e){return e&&Ht&&(Ht.data.push(e),e._ctx=Ht),Ht},suppressOverwrites:function(e){return xm=e}}};$n("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return ku[n]=en[n]});ni.add(Un.updateRoot);Ga=ku.to({},{duration:0});var x2=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},b2=function(e,t){var i=e._targets,r,s,a;for(r in t)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=x2(a,r)),a&&a.modifier&&a.modifier(t[r],e,i[s],r))},Nh=function(e,t){return{name:e,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(fn(s)&&(l={},$n(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}b2(o,s)}}}},qn=ku.registerPlugin({name:"attr",init:function(e,t,i,r,s){var a,o,l;this.tween=i;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)yn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Nh("roundProps",lp),Nh("modifiers"),Nh("snap",Zy))||ku;en.version=Un.version=qn.version="3.12.7";Ny=1;Sm()&&To();ht.Power0;ht.Power1;ht.Power2;ht.Power3;ht.Power4;ht.Linear;ht.Quad;ht.Cubic;ht.Quart;ht.Quint;ht.Strong;ht.Elastic;ht.Back;ht.SteppedEase;ht.Bounce;ht.Sine;ht.Expo;ht.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Y_,Jr,Qa,Lm,$s,K_,Nm,S2=function(){return typeof window<"u"},Lr={},Fs=180/Math.PI,eo=Math.PI/180,Oa=Math.atan2,J_=1e8,Om=/([A-Z])/g,E2=/(left|right|width|margin|padding|x)/i,M2=/[\s,\(]\S/,$i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},T2=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},w2=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},A2=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},gx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_x=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},R2=function(e,t,i){return e.style[t]=i},C2=function(e,t,i){return e.style.setProperty(t,i)},P2=function(e,t,i){return e._gsap[t]=i},I2=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},D2=function(e,t,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},L2=function(e,t,i,r,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},Xt="transform",jn=Xt+"Origin",N2=function n(e,t){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in Lr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=$i[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=yr(r,o)}):this.tfm[e]=a.x?a[e]:yr(r,e),e===jn&&(this.tfm.zOrigin=a.zOrigin);else return $i.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(Xt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(jn,t,"")),e=Xt}(s||t)&&this.props.push(e,t,s[e])},vx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},O2=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Om,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Nm(),(!s||!s.isStart)&&!i[Xt]&&(vx(i),r.zOrigin&&i[jn]&&(i[jn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},yx=function(e,t){var i={target:e,props:[],revert:O2,save:N2};return e._gsap||qn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},xx,hp=function(e,t){var i=Jr.createElementNS?Jr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Jr.createElement(e);return i&&i.style?i:Jr.createElement(e)},Yi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Om,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,wo(t)||t,1)||""},Q_="O,Moz,ms,Ms,Webkit".split(","),wo=function(e,t,i){var r=t||$s,s=r.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Q_[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Q_[a]:"")+e},dp=function(){S2()&&window.document&&(Y_=window,Jr=Y_.document,Qa=Jr.documentElement,$s=hp("div")||{style:{}},hp("div"),Xt=wo(Xt),jn=Xt+"Origin",$s.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xx=!!wo("perspective"),Nm=qn.core.reverting,Lm=1)},ev=function(e){var t=e.ownerSVGElement,i=hp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Qa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Qa.removeChild(i),s},tv=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},bx=function(e){var t,i;try{t=e.getBBox()}catch{t=ev(e),i=1}return t&&(t.width||t.height)||i||(t=ev(e)),t&&!t.width&&!t.x&&!t.y?{x:+tv(e,["x","cx","x1"])||0,y:+tv(e,["y","cy","y1"])||0,width:0,height:0}:t},Sx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&bx(e))},sa=function(e,t){if(t){var i=e.style,r;t in Lr&&t!==jn&&(t=Xt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Om,"-$1").toLowerCase())):i.removeAttribute(t)}},Qr=function(e,t,i,r,s,a){var o=new Xn(e._pt,t,i,0,1,a?_x:gx);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},nv={deg:1,rad:1,turn:1},U2={grid:1,flex:1},ms=function n(e,t,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=$s.style,l=E2.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",m,g,_,p;if(r===a||!s||nv[r]||nv[a])return s;if(a!=="px"&&!h&&(s=n(e,t,i,"px")),p=e.getCTM&&Sx(e),(d||a==="%")&&(Lr[t]||~t.indexOf("adius")))return m=p?e.getBBox()[l?"width":"height"]:e[u],Jt(d?s/m*f:s/100*m);if(o[l?"width":"height"]=f+(h?a:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Jr||!g.appendChild)&&(g=Jr.body),_=g._gsap,_&&d&&_.width&&l&&_.time===ni.time&&!_.uncache)return Jt(s/_.width*f);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=f+r,m=e[u],x?e.style[t]=x:sa(e,t)}else(d||a==="%")&&!U2[Yi(g,"display")]&&(o.position=Yi(e,"position")),g===e&&(o.position="static"),g.appendChild($s),m=$s[u],g.removeChild($s),o.position="absolute";return l&&d&&(_=qs(g),_.time=ni.time,_.width=g[u]),Jt(h?m*s/f:m&&s?f/m*s:0)},yr=function(e,t,i,r){var s;return Lm||dp(),t in $i&&t!=="transform"&&(t=$i[t],~t.indexOf(",")&&(t=t.split(",")[0])),Lr[t]&&t!=="transform"?(s=Hl(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:zu(Yi(e,jn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Hu[t]&&Hu[t](e,t,i)||Yi(e,t)||By(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?ms(e,t,s,i)+i:s},F2=function(e,t,i,r){if(!i||i==="none"){var s=wo(t,e,1),a=s&&Yi(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=Yi(e,"borderTopColor"))}var o=new Xn(this._pt,e.style,t,0,1,dx),l=0,c=0,u,f,h,d,m,g,_,p,x,v,y,b;if(o.b=i,o.e=r,i+="",r+="",r==="auto"&&(g=e.style[t],e.style[t]=r,r=Yi(e,t)||r,g?e.style[t]=g:sa(e,t)),u=[i,r],ix(u),i=u[0],r=u[1],h=i.match(Va)||[],b=r.match(Va)||[],b.length){for(;f=Va.exec(r);)_=f[0],x=r.substring(l,f.index),m?m=(m+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(m=1),_!==(g=h[c++]||"")&&(d=parseFloat(g)||0,y=g.substr((d+"").length),_.charAt(1)==="="&&(_=Ja(d,_)+y),p=parseFloat(_),v=_.substr((p+"").length),l=Va.lastIndex-v.length,v||(v=v||oi.units[t]||y,l===r.length&&(r+=v,o.e+=v)),y!==v&&(d=ms(e,t,g,v)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:d,c:p-d,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?_x:gx;return Dy.test(r)&&(o.e=0),this._pt=o,o},iv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},B2=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=iv[i]||i,t[1]=iv[r]||r,t.join(" ")},k2=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Lr[o]&&(l=1,o=o==="transformOrigin"?jn:Xt),sa(i,o);l&&(sa(i,Xt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Hl(i,1),a.uncache=1,vx(r)))}},Hu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Xn(e._pt,t,i,0,0,k2);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},kl=[1,0,0,1,0,0],Ex={},Mx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},rv=function(e){var t=Yi(e,Xt);return Mx(t)?kl:t.substr(7).match(Iy).map(Jt)},Um=function(e,t){var i=e._gsap||qs(e),r=e.style,s=rv(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?kl:s):(s===kl&&!e.offsetParent&&e!==Qa&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Qa.appendChild(e)),s=rv(e),l?r.display=l:sa(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Qa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},pp=function(e,t,i,r,s,a){var o=e._gsap,l=s||Um(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],m=l[1],g=l[2],_=l[3],p=l[4],x=l[5],v=t.split(" "),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,E,w,P,S;i?l!==kl&&(w=d*_-m*g)&&(P=y*(_/w)+b*(-g/w)+(g*x-_*p)/w,S=y*(-m/w)+b*(d/w)-(d*x-m*p)/w,y=P,b=S):(E=bx(e),y=E.x+(~v[0].indexOf("%")?y/100*E.width:y),b=E.y+(~(v[1]||v[0]).indexOf("%")?b/100*E.height:b)),r||r!==!1&&o.smooth?(p=y-c,x=b-u,o.xOffset=f+(p*d+x*g)-p,o.yOffset=h+(p*m+x*_)-x):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!i,e.style[jn]="0px 0px",a&&(Qr(a,o,"xOrigin",c,y),Qr(a,o,"yOrigin",u,b),Qr(a,o,"xOffset",f,o.xOffset),Qr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},Hl=function(e,t){var i=e._gsap||new ox(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Yi(e,jn)||"0",u,f,h,d,m,g,_,p,x,v,y,b,E,w,P,S,T,R,N,D,V,G,B,Z,H,k,K,te,ge,Le,W,ee;return u=f=h=g=_=p=x=v=y=0,d=m=1,i.svg=!!(e.getCTM&&Sx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xt]!=="none"?l[Xt]:"")),r.scale=r.rotate=r.translate="none"),w=Um(e,i.svg),i.svg&&(i.uncache?(H=e.getBBox(),c=i.xOrigin-H.x+"px "+(i.yOrigin-H.y)+"px",Z=""):Z=!t&&e.getAttribute("data-svg-origin"),pp(e,Z||c,!!Z||i.originIsAbsolute,i.smooth!==!1,w)),b=i.xOrigin||0,E=i.yOrigin||0,w!==kl&&(R=w[0],N=w[1],D=w[2],V=w[3],u=G=w[4],f=B=w[5],w.length===6?(d=Math.sqrt(R*R+N*N),m=Math.sqrt(V*V+D*D),g=R||N?Oa(N,R)*Fs:0,x=D||V?Oa(D,V)*Fs+g:0,x&&(m*=Math.abs(Math.cos(x*eo))),i.svg&&(u-=b-(b*R+E*D),f-=E-(b*N+E*V))):(ee=w[6],Le=w[7],K=w[8],te=w[9],ge=w[10],W=w[11],u=w[12],f=w[13],h=w[14],P=Oa(ee,ge),_=P*Fs,P&&(S=Math.cos(-P),T=Math.sin(-P),Z=G*S+K*T,H=B*S+te*T,k=ee*S+ge*T,K=G*-T+K*S,te=B*-T+te*S,ge=ee*-T+ge*S,W=Le*-T+W*S,G=Z,B=H,ee=k),P=Oa(-D,ge),p=P*Fs,P&&(S=Math.cos(-P),T=Math.sin(-P),Z=R*S-K*T,H=N*S-te*T,k=D*S-ge*T,W=V*T+W*S,R=Z,N=H,D=k),P=Oa(N,R),g=P*Fs,P&&(S=Math.cos(P),T=Math.sin(P),Z=R*S+N*T,H=G*S+B*T,N=N*S-R*T,B=B*S-G*T,R=Z,G=H),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,p=180-p),d=Jt(Math.sqrt(R*R+N*N+D*D)),m=Jt(Math.sqrt(B*B+ee*ee)),P=Oa(G,B),x=Math.abs(P)>2e-4?P*Fs:0,y=W?1/(W<0?-W:W):0),i.svg&&(Z=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Mx(Yi(e,Xt)),Z&&e.setAttribute("transform",Z))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(m*=-1,x+=x<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=h+a,i.scaleX=Jt(d),i.scaleY=Jt(m),i.rotation=Jt(g)+o,i.rotationX=Jt(_)+o,i.rotationY=Jt(p)+o,i.skewX=x+o,i.skewY=v+o,i.transformPerspective=y+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[jn]=zu(c)),i.xOffset=i.yOffset=0,i.force3D=oi.force3D,i.renderTransform=i.svg?z2:xx?Tx:H2,i.uncache=0,i},zu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Oh=function(e,t,i){var r=En(t);return Jt(parseFloat(t)+parseFloat(ms(e,"x",i+"px",r)))+r},H2=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Tx(e,t)},Ls="0deg",el="0px",Ns=") ",Tx=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,m=i.scaleX,g=i.scaleY,_=i.transformPerspective,p=i.force3D,x=i.target,v=i.zOrigin,y="",b=p==="auto"&&e&&e!==1||p===!0;if(v&&(f!==Ls||u!==Ls)){var E=parseFloat(u)*eo,w=Math.sin(E),P=Math.cos(E),S;E=parseFloat(f)*eo,S=Math.cos(E),a=Oh(x,a,w*S*-v),o=Oh(x,o,-Math.sin(E)*-v),l=Oh(x,l,P*S*-v+v)}_!==el&&(y+="perspective("+_+Ns),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(b||a!==el||o!==el||l!==el)&&(y+=l!==el||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ns),c!==Ls&&(y+="rotate("+c+Ns),u!==Ls&&(y+="rotateY("+u+Ns),f!==Ls&&(y+="rotateX("+f+Ns),(h!==Ls||d!==Ls)&&(y+="skew("+h+", "+d+Ns),(m!==1||g!==1)&&(y+="scale("+m+", "+g+Ns),x.style[Xt]=y||"translate(0, 0)"},z2=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,m=i.xOrigin,g=i.yOrigin,_=i.xOffset,p=i.yOffset,x=i.forceCSS,v=parseFloat(a),y=parseFloat(o),b,E,w,P,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=eo,c*=eo,b=Math.cos(l)*f,E=Math.sin(l)*f,w=Math.sin(l-c)*-h,P=Math.cos(l-c)*h,c&&(u*=eo,S=Math.tan(c-u),S=Math.sqrt(1+S*S),w*=S,P*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),b*=S,E*=S)),b=Jt(b),E=Jt(E),w=Jt(w),P=Jt(P)):(b=f,P=h,E=w=0),(v&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(v=ms(d,"x",a,"px"),y=ms(d,"y",o,"px")),(m||g||_||p)&&(v=Jt(v+m-(m*b+g*w)+_),y=Jt(y+g-(m*E+g*P)+p)),(r||s)&&(S=d.getBBox(),v=Jt(v+r/100*S.width),y=Jt(y+s/100*S.height)),S="matrix("+b+","+E+","+w+","+P+","+v+","+y+")",d.setAttribute("transform",S),x&&(d.style[Xt]=S)},V2=function(e,t,i,r,s){var a=360,o=fn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Fs:1),c=l-r,u=r+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*J_)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*J_)%a-~~(c/a)*a)),e._pt=h=new Xn(e._pt,t,i,r,c,T2),h.e=u,h.u="deg",e._props.push(i),h},sv=function(e,t){for(var i in t)e[i]=t[i];return e},G2=function(e,t,i){var r=sv({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,f,h,d,m;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[Xt]=t,o=Hl(i,1),sa(i,Xt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Xt],a[Xt]=t,o=Hl(i,1),a[Xt]=c);for(l in Lr)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=En(c),m=En(u),f=d!==m?ms(i,l,c,m):parseFloat(c),h=parseFloat(u),e._pt=new Xn(e._pt,o,l,f,h-f,fp),e._pt.u=m||0,e._props.push(l));sv(o,r)};$n("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",a=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(o){return e<2?n+o:"border"+o+n});Hu[e>1?"border"+n:n]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(m){return yr(o,m,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(m,g){return d[m]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(l,d,f)}});var wx={name:"css",register:dp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,c,u,f,h,d,m,g,_,p,x,v,y,b,E,w,P;Lm||dp(),this.styles=this.styles||yx(e),P=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(u=t[g],!(ti[g]&&lx(g,t,i,r,e,s)))){if(d=typeof u,m=Hu[g],d==="function"&&(u=u.call(i,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Ul(u)),m)m(this,e,g,u,i)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",as.lastIndex=0,as.test(c)||(_=En(c),p=En(u)),p?_!==p&&(c=ms(e,g,c,p)+p):_&&(u+=_),this.add(o,"setProperty",c,u,r,s,0,0,g),a.push(g),P.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],fn(c)&&~c.indexOf("random(")&&(c=Ul(c)),En(c+"")||c==="auto"||(c+=oi.units[g]||En(yr(e,g))||""),(c+"").charAt(1)==="="&&(c=yr(e,g))):c=yr(e,g),h=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),f=parseFloat(u),g in $i&&(g==="autoAlpha"&&(h===1&&yr(e,"visibility")==="hidden"&&f&&(h=0),P.push("visibility",0,o.visibility),Qr(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=$i[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Lr,v){if(this.styles.save(g),y||(b=e._gsap,b.renderTransform&&!t.parseTransform||Hl(e,t.parseTransform),E=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new Xn(this._pt,o,Xt,0,1,b.renderTransform,b,0,-1),y.dep=1),g==="scale")this._pt=new Xn(this._pt,b,"scaleY",b.scaleY,(x?Ja(b.scaleY,x+f):f)-b.scaleY||0,fp),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(jn,0,o[jn]),u=B2(u),b.svg?pp(e,u,0,E,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&Qr(this,b,"zOrigin",b.zOrigin,p),Qr(this,o,g,zu(c),zu(u)));continue}else if(g==="svgOrigin"){pp(e,u,1,E,0,this);continue}else if(g in Ex){V2(this,b,g,h,x?Ja(h,x+u):u);continue}else if(g==="smoothOrigin"){Qr(this,b,"smooth",b.smooth,u);continue}else if(g==="force3D"){b[g]=u;continue}else if(g==="transform"){G2(this,u,e);continue}}else g in o||(g=wo(g)||g);if(v||(f||f===0)&&(h||h===0)&&!M2.test(u)&&g in o)_=(c+"").substr((h+"").length),f||(f=0),p=En(u)||(g in oi.units?oi.units[g]:_),_!==p&&(h=ms(e,g,c,p)),this._pt=new Xn(this._pt,v?b:o,g,h,(x?Ja(h,x+f):f)-h,!v&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?A2:fp),this._pt.u=p||0,_!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=w2);else if(g in o)F2.call(this,e,g,c,x?x+u:u);else if(g in e)this.add(e,g,c||e[g],x?x+u:u,r,s);else if(g!=="parseTransform"){Mm(g,u);continue}v||(g in o?P.push(g,0,o[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,c||e[g])),a.push(g)}}w&&px(this)},render:function(e,t){if(t.tween._time||!Nm())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:yr,aliases:$i,getSetter:function(e,t,i){var r=$i[t];return r&&r.indexOf(",")<0&&(t=r),t in Lr&&t!==jn&&(e._gsap.x||yr(e,"x"))?i&&K_===i?t==="scale"?I2:P2:(K_=i||{})&&(t==="scale"?D2:L2):e.style&&!bm(e.style[t])?R2:~t.indexOf("-")?C2:Im(e,t)},core:{_removeProperty:sa,_getMatrix:Um}};qn.utils.checkPrefix=wo;qn.core.getStyleSaver=yx;(function(n,e,t,i){var r=$n(n+","+e+","+t,function(s){Lr[s]=1});$n(e,function(s){oi.units[s]="deg",Ex[s]=1}),$i[r[13]]=n+","+e,$n(i,function(s){var a=s.split(":");$i[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");$n("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){oi.units[n]="px"});qn.registerPlugin(wx);var Ax=qn.registerPlugin(wx)||qn;Ax.core.Tween;const Fm="/",W2="https://us-central1-portfolio-90460.cloudfunctions.net/getGroqAnswer",Qc="colorIndex";class Ao{static init(){Ao._sanitizeValue()}static _sanitizeValue(){const e=localStorage.getItem(Qc);if(e===null)return localStorage.setItem(Qc,"0"),0;const t=Number(e);return isNaN(t)||t===1/0||t===-1/0||t<0||t>=Rx?(localStorage.setItem(Qc,"0"),0):t}static get(){return Ao._sanitizeValue()}static set(e){localStorage.setItem(Qc,`${e}`)}}const xu=["neutral","purple","blue","red"],Rx=6,mp={neutral0:"rgba(255, 255, 255, 0.3)",neutral1:"rgba(255, 255, 255, 1)",neutral2:"rgba(225, 225, 225, 1)",neutral3:"rgba(158, 158, 158, 1)",neutral4:"rgba(0, 0, 0, 1)",neutral5:`linear-gradient(
    to left,
    rgba(255, 255, 255, 1) 0%,
    rgba(166, 166, 166, 1) 10%,
    rgba(105, 105, 105, 1) 20%,
    rgba(64, 62, 62, 1) 30%,
    rgba(0, 0, 0, 1) 45%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 55%,
    rgba(64, 62, 62, 1) 70%,
    rgba(105, 105, 105, 1) 80%,
    rgba(166, 166, 166, 1) 90%,
    rgba(255, 255, 255, 1) 100%
    )
    `,purple0:"rgba(240, 230, 255, 0.3)",purple1:"rgba(220, 200, 255, 1)",purple2:"rgba(200, 170, 255, 1)",purple3:"rgba(150, 100, 220, 1)",purple4:"rgba(75, 0, 130, 1)",purple5:`linear-gradient(
    to left,
    rgba(150, 100, 220, 1) 0%,
    rgba(113, 90, 150, 1) 10%,
    rgba(78, 68, 92, 1) 20%,
    rgba(52, 47, 56, 1) 30%,
    rgba(0, 0, 0, 1) 45%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 55%,
    rgba(52, 47, 56, 1) 70%,
    rgba(78, 68, 92, 1) 80%,
    rgba(113, 90, 150, 1) 90%,
    rgba(150, 100, 220, 1) 100%
    )`,blue0:"rgba(230, 240, 255, 0.3)",blue1:"rgba(200, 220, 255, 1)",blue2:"rgba(160, 190, 255, 1)",blue3:"rgba(100, 150, 255, 1)",blue4:"rgba(0, 0, 255, 1)",blue5:`linear-gradient(
    to left,
    rgba(100, 150, 255, 1) 0%,
    rgba(106, 128, 176, 1) 10%,
    rgba(81, 88, 112, 1) 20%,
    rgba(43, 47, 51, 1) 30%,
    rgba(0, 0, 0, 1) 45%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 55%,
    rgba(43, 47, 51, 1) 70%,
    rgba(81, 88, 112, 1) 80%,
    rgba(106, 128, 176, 1) 90%,
    rgba(100, 150, 255, 1) 100%
    )`,red0:"rgba(255, 230, 230, 0.3)",red1:"rgba(255, 200, 200, 1)",red2:"rgba(255, 150, 150, 1)",red3:"rgba(220, 100, 100, 1)",red4:"rgba(255, 0, 0, 1)",red5:`linear-gradient(
    to left,
    rgba(220, 100, 100, 1) 0%,
    rgba(163, 98, 98, 1) 10%,
    rgba(92, 68, 68, 1) 20%,
    rgba(43, 36, 36, 1) 30%,
    rgba(0, 0, 0, 1) 45%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 55%,
    rgba(43, 36, 36, 1) 70%,
    rgba(92, 68, 68, 1) 80%,
    rgba(163, 98, 98, 1) 90%,
    rgba(220, 100, 100, 1) 100%
    )`},$2=Ao.get(),Bm=di(xu[$2]),X2=Object.fromEntries(Array.from({length:Rx},(n,e)=>{const t=`${e}`;return[`color${e}`,mp[`${lo(Bm)}${t}`]]})),os=di(X2);function j2(){for(const[n,e]of Object.entries(lo(os)))document.documentElement.style.setProperty(`--${n}`,e)}function q2(){const n=lo(Bm),e=xu.findIndex(i=>i===n);if(e===-1)throw new Error("Index color error.");const t=(e+1)%xu.length;return{nextIndex:t,nextColor:xu[t]}}function Z2(){const{nextIndex:n,nextColor:e}=q2();e&&(Ao.set(n),Object.keys(lo(os)).forEach((t,i)=>{const r=`${i}`,s=`${e}${r}`;document.documentElement.style.setProperty(`--color${r}`,`${mp[s]}`)}),os.update(()=>Object.fromEntries(Object.keys(lo(os)).map((t,i)=>{const r=`${i}`,s=`${e}${r}`;return[t,mp[s]]}))),Bm.update(()=>e))}const eu="viewIndex";class Ro{static init(){Ro._sanitizeValue()}static _sanitizeValue(){const e=localStorage.getItem(eu);if(e===null)return localStorage.setItem(eu,"0"),0;const t=Number(e);return isNaN(t)||t===1/0||t===-1/0||t<0||t>=tc.length?(localStorage.setItem(eu,"0"),0):t}static get(){return Ro._sanitizeValue()}static set(e){localStorage.setItem(eu,`${e}`)}}var Y2=pt('<div class="main svelte-fjc0lv"><div class="scroll _gradient svelte-fjc0lv"> </div></div>');function K2(n,e){on(e,!0);const t=Mi(),i=()=>Zt(os,"$theme",t),r=()=>Zt(Bo,"$_",t);var s=Y2(),a=Qe(s),o=Qe(a);At(()=>_n(o,r()("welcome-scroll"))),At(()=>nn(a,"style",`--gradient: ${i().color5??""}`)),Be(n,s),ln()}var av={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},J2=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],a=n[t++],o=n[t++],l=((r&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],a=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Px={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],a=r+1<n.length,o=a?n[r+1]:0,l=r+2<n.length,c=l?n[r+2]:0,u=s>>2,f=(s&3)<<4|o>>4;let h=(o&15)<<2|c>>6,d=c&63;l||(d=64,a||(h=64)),i.push(t[u],t[f],t[h],t[d])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Cx(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):J2(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],o=r<n.length?t[n.charAt(r)]:0;++r;const c=r<n.length?t[n.charAt(r)]:64;++r;const f=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||o==null||c==null||f==null)throw new Q2;const h=s<<2|o>>4;if(i.push(h),c!==64){const d=o<<4&240|c>>2;if(i.push(d),f!==64){const m=c<<6&192|f;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Q2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eD=function(n){const e=Cx(n);return Px.encodeByteArray(e,!0)},Ix=function(n){return eD(n).replace(/\./g,"")},tD=function(n){try{return Px.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=()=>nD().__FIREBASE_DEFAULTS__,rD=()=>{if(typeof process>"u"||typeof av>"u")return;const n=av.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},sD=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&tD(n[1]);return e&&JSON.parse(e)},Dx=()=>{try{return iD()||rD()||sD()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},aD=n=>{var e,t;return(t=(e=Dx())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},oD=n=>{const e=aD(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Lx=()=>{var n;return(n=Dx())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}function cD(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Nx(){try{return typeof indexedDB=="object"}catch{return!1}}function Ox(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}function uD(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD="FirebaseError";class ga extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=fD,Object.setPrototypeOf(this,ga.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rf.prototype.create)}}class Rf{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],a=s?hD(s,i):"Error",o=`${this.serviceName}: ${a} (${r}).`;return new ga(r,o,i)}}function hD(n,e){return n.replace(dD,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const dD=/\{\$([^}]+)}/g;function Vu(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],a=e[r];if(ov(s)&&ov(a)){if(!Vu(s,a))return!1}else if(s!==a)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function ov(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD=1e3,mD=2,gD=4*60*60*1e3,_D=.5;function lv(n,e=pD,t=mD){const i=e*Math.pow(t,n),r=Math.round(_D*i*(Math.random()-.5)*2);return Math.min(gD,i+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(n){return n&&n._delegate?n._delegate:n}class Nr{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new lD;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e?.identifier),r=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xD(e))try{this.getOrInitializeService({instanceIdentifier:Bs})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Bs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bs){return this.instances.has(e)}getOptions(e=Bs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);i===o&&a.resolve(r)}return r}onInit(e,t){var i;const r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&e(a,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:yD(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Bs){return this.component?this.component.multipleInstances?e:Bs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yD(n){return n===Bs?void 0:n}function xD(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new vD(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ut;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ut||(Ut={}));const SD={debug:Ut.DEBUG,verbose:Ut.VERBOSE,info:Ut.INFO,warn:Ut.WARN,error:Ut.ERROR,silent:Ut.SILENT},ED=Ut.INFO,MD={[Ut.DEBUG]:"log",[Ut.VERBOSE]:"log",[Ut.INFO]:"info",[Ut.WARN]:"warn",[Ut.ERROR]:"error"},TD=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=MD[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ux{constructor(e){this.name=e,this._logLevel=ED,this._logHandler=TD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ut))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ut.DEBUG,...e),this._logHandler(this,Ut.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ut.VERBOSE,...e),this._logHandler(this,Ut.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ut.INFO,...e),this._logHandler(this,Ut.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ut.WARN,...e),this._logHandler(this,Ut.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ut.ERROR,...e),this._logHandler(this,Ut.ERROR,...e)}}const wD=(n,e)=>e.some(t=>n instanceof t);let cv,uv;function AD(){return cv||(cv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function RD(){return uv||(uv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fx=new WeakMap,gp=new WeakMap,Bx=new WeakMap,Uh=new WeakMap,km=new WeakMap;function CD(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(ls(n.result)),r()},a=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Fx.set(t,n)}).catch(()=>{}),km.set(e,n),e}function PD(n){if(gp.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),r()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});gp.set(n,e)}let _p={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return gp.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Bx.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ls(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ID(n){_p=n(_p)}function DD(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Fh(this),e,...t);return Bx.set(i,e.sort?e.sort():[e]),ls(i)}:RD().includes(n)?function(...e){return n.apply(Fh(this),e),ls(Fx.get(this))}:function(...e){return ls(n.apply(Fh(this),e))}}function LD(n){return typeof n=="function"?DD(n):(n instanceof IDBTransaction&&PD(n),wD(n,AD())?new Proxy(n,_p):n)}function ls(n){if(n instanceof IDBRequest)return CD(n);if(Uh.has(n))return Uh.get(n);const e=LD(n);return e!==n&&(Uh.set(n,e),km.set(e,n)),e}const Fh=n=>km.get(n);function kx(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const a=indexedDB.open(n,e),o=ls(a);return i&&a.addEventListener("upgradeneeded",l=>{i(ls(a.result),l.oldVersion,l.newVersion,ls(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),o.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),o}const ND=["get","getKey","getAll","getAllKeys","count"],OD=["put","add","delete","clear"],Bh=new Map;function fv(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Bh.get(e))return Bh.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=OD.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||ND.includes(t)))return;const s=async function(a,...o){const l=this.transaction(a,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(o.shift())),(await Promise.all([c[t](...o),r&&l.done]))[0]};return Bh.set(e,s),s}ID(n=>({...n,get:(e,t,i)=>fv(e,t)||n.get(e,t,i),has:(e,t)=>!!fv(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(FD(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function FD(n){const e=n.getComponent();return e?.type==="VERSION"}const vp="@firebase/app",hv="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Ux("@firebase/app"),BD="@firebase/app-compat",kD="@firebase/analytics-compat",HD="@firebase/analytics",zD="@firebase/app-check-compat",VD="@firebase/app-check",GD="@firebase/auth",WD="@firebase/auth-compat",$D="@firebase/database",XD="@firebase/data-connect",jD="@firebase/database-compat",qD="@firebase/functions",ZD="@firebase/functions-compat",YD="@firebase/installations",KD="@firebase/installations-compat",JD="@firebase/messaging",QD="@firebase/messaging-compat",eL="@firebase/performance",tL="@firebase/performance-compat",nL="@firebase/remote-config",iL="@firebase/remote-config-compat",rL="@firebase/storage",sL="@firebase/storage-compat",aL="@firebase/firestore",oL="@firebase/vertexai",lL="@firebase/firestore-compat",cL="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="[DEFAULT]",uL={[vp]:"fire-core",[BD]:"fire-core-compat",[HD]:"fire-analytics",[kD]:"fire-analytics-compat",[VD]:"fire-app-check",[zD]:"fire-app-check-compat",[GD]:"fire-auth",[WD]:"fire-auth-compat",[$D]:"fire-rtdb",[XD]:"fire-data-connect",[jD]:"fire-rtdb-compat",[qD]:"fire-fn",[ZD]:"fire-fn-compat",[YD]:"fire-iid",[KD]:"fire-iid-compat",[JD]:"fire-fcm",[QD]:"fire-fcm-compat",[eL]:"fire-perf",[tL]:"fire-perf-compat",[nL]:"fire-rc",[iL]:"fire-rc-compat",[rL]:"fire-gcs",[sL]:"fire-gcs-compat",[aL]:"fire-fst",[lL]:"fire-fst-compat",[oL]:"fire-vertex","fire-js":"fire-js",[cL]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=new Map,fL=new Map,xp=new Map;function dv(n,e){try{n.container.addComponent(e)}catch(t){Or.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gs(n){const e=n.name;if(xp.has(e))return Or.debug(`There were multiple attempts to register component ${e}.`),!1;xp.set(e,n);for(const t of Gu.values())dv(t,n);for(const t of fL.values())dv(t,n);return!0}function mc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cs=new Rf("app","Firebase",hL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cs.create("app-deleted",{appName:this._name})}}function Hx(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:yp,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw cs.create("bad-app-name",{appName:String(r)});if(t||(t=Lx()),!t)throw cs.create("no-options");const s=Gu.get(r);if(s){if(Vu(t,s.options)&&Vu(i,s.config))return s;throw cs.create("duplicate-app",{appName:r})}const a=new bD(r);for(const l of xp.values())a.addComponent(l);const o=new dL(t,i,a);return Gu.set(r,o),o}function zx(n=yp){const e=Gu.get(n);if(!e&&n===yp&&Lx())return Hx();if(!e)throw cs.create("no-app",{appName:n});return e}function Ki(n,e,t){var i;let r=(i=uL[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Or.warn(o.join(" "));return}gs(new Nr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pL="firebase-heartbeat-database",mL=1,zl="firebase-heartbeat-store";let kh=null;function Vx(){return kh||(kh=kx(pL,mL,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(zl)}catch(t){console.warn(t)}}}}).catch(n=>{throw cs.create("idb-open",{originalErrorMessage:n.message})})),kh}async function gL(n){try{const t=(await Vx()).transaction(zl),i=await t.objectStore(zl).get(Gx(n));return await t.done,i}catch(e){if(e instanceof ga)Or.warn(e.message);else{const t=cs.create("idb-get",{originalErrorMessage:e?.message});Or.warn(t.message)}}}async function pv(n,e){try{const i=(await Vx()).transaction(zl,"readwrite");await i.objectStore(zl).put(e,Gx(n)),await i.done}catch(t){if(t instanceof ga)Or.warn(t.message);else{const i=cs.create("idb-set",{originalErrorMessage:t?.message});Or.warn(i.message)}}}function Gx(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _L=1024,vL=30*24*60*60*1e3;class yL{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bL(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=mv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const o=new Date(a.date).valueOf();return Date.now()-o<=vL}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Or.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mv(),{heartbeatsToSend:i,unsentEntries:r}=xL(this._heartbeatsCache.heartbeats),s=Ix(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Or.warn(t),""}}}function mv(){return new Date().toISOString().substring(0,10)}function xL(n,e=_L){const t=[];let i=n.slice();for(const r of n){const s=t.find(a=>a.agent===r.agent);if(s){if(s.dates.push(r.date),gv(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),gv(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class bL{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nx()?Ox().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await gL(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return pv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return pv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function gv(n){return Ix(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SL(n){gs(new Nr("platform-logger",e=>new UD(e),"PRIVATE")),gs(new Nr("heartbeat",e=>new yL(e),"PRIVATE")),Ki(vp,hv,n),Ki(vp,hv,"esm2017"),Ki("fire-js","")}SL("");var EL="firebase",ML="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ki(EL,ML,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e,t,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(r=>this.auth=r,()=>{}),this.messaging||t.get().then(r=>this.messaging=r,()=>{}),this.appCheck||i.get().then(r=>this.appCheck=r,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),r=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:r}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="us-central1";class wL{constructor(e,t,i,r,s=bp,a=(...o)=>fetch(...o)){this.app=e,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new TL(t,i,r),this.cancelAllRequests=new Promise(o=>{this.deleteService=()=>Promise.resolve(o())});try{const o=new URL(s);this.customDomain=o.origin+(o.pathname==="/"?"":o.pathname),this.region=bp}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function AL(n,e,t){n.emulatorOrigin=`http://${e}:${t}`}const _v="@firebase/functions",vv="0.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RL="auth-internal",CL="app-check-internal",PL="messaging-internal";function IL(n){const e=(t,{instanceIdentifier:i})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider(RL),a=t.getProvider(PL),o=t.getProvider(CL);return new wL(r,s,a,o,i)};gs(new Nr(Wx,e,"PUBLIC").setMultipleInstances(!0)),Ki(_v,vv,n),Ki(_v,vv,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DL(n=zx(),e=bp){const i=mc(pc(n),Wx).getImmediate({identifier:e}),r=oD("functions");return r&&LL(i,...r),i}function LL(n,e,t){AL(pc(n),e,t)}IL();const $x="@firebase/installations",Hm="0.6.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx=1e4,jx=`w:${Hm}`,qx="FIS_v2",NL="https://firebaseinstallations.googleapis.com/v1",OL=60*60*1e3,UL="installations",FL="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},aa=new Rf(UL,FL,BL);function Zx(n){return n instanceof ga&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yx({projectId:n}){return`${NL}/projects/${n}/installations`}function Kx(n){return{token:n.token,requestStatus:2,expiresIn:HL(n.expiresIn),creationTime:Date.now()}}async function Jx(n,e){const i=(await e.json()).error;return aa.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Qx({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function kL(n,{refreshToken:e}){const t=Qx(n);return t.append("Authorization",zL(e)),t}async function eb(n){const e=await n();return e.status>=500&&e.status<600?n():e}function HL(n){return Number(n.replace("s","000"))}function zL(n){return`${qx} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VL({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=Yx(n),r=Qx(n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const a={fid:t,authVersion:qx,appId:n.appId,sdkVersion:jx},o={method:"POST",headers:r,body:JSON.stringify(a)},l=await eb(()=>fetch(i,o));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:Kx(c.authToken)}}else throw await Jx("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tb(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GL(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL=/^[cdef][\w-]{21}$/,Sp="";function $L(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=XL(n);return WL.test(t)?t:Sp}catch{return Sp}}function XL(n){return GL(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=new Map;function ib(n,e){const t=Cf(n);rb(t,e),jL(t,e)}function rb(n,e){const t=nb.get(n);if(t)for(const i of t)i(e)}function jL(n,e){const t=qL();t&&t.postMessage({key:n,fid:e}),ZL()}let Xs=null;function qL(){return!Xs&&"BroadcastChannel"in self&&(Xs=new BroadcastChannel("[Firebase] FID Change"),Xs.onmessage=n=>{rb(n.data.key,n.data.fid)}),Xs}function ZL(){nb.size===0&&Xs&&(Xs.close(),Xs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YL="firebase-installations-database",KL=1,oa="firebase-installations-store";let Hh=null;function zm(){return Hh||(Hh=kx(YL,KL,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(oa)}}})),Hh}async function Wu(n,e){const t=Cf(n),r=(await zm()).transaction(oa,"readwrite"),s=r.objectStore(oa),a=await s.get(t);return await s.put(e,t),await r.done,(!a||a.fid!==e.fid)&&ib(n,e.fid),e}async function sb(n){const e=Cf(n),i=(await zm()).transaction(oa,"readwrite");await i.objectStore(oa).delete(e),await i.done}async function Pf(n,e){const t=Cf(n),r=(await zm()).transaction(oa,"readwrite"),s=r.objectStore(oa),a=await s.get(t),o=e(a);return o===void 0?await s.delete(t):await s.put(o,t),await r.done,o&&(!a||a.fid!==o.fid)&&ib(n,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vm(n){let e;const t=await Pf(n.appConfig,i=>{const r=JL(i),s=QL(n,r);return e=s.registrationPromise,s.installationEntry});return t.fid===Sp?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function JL(n){const e=n||{fid:$L(),registrationStatus:0};return ab(e)}function QL(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(aa.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=eN(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:tN(n)}:{installationEntry:e}}async function eN(n,e){try{const t=await VL(n,e);return Wu(n.appConfig,t)}catch(t){throw Zx(t)&&t.customData.serverCode===409?await sb(n.appConfig):await Wu(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function tN(n){let e=await yv(n.appConfig);for(;e.registrationStatus===1;)await tb(100),e=await yv(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Vm(n);return i||t}return e}function yv(n){return Pf(n,e=>{if(!e)throw aa.create("installation-not-found");return ab(e)})}function ab(n){return nN(n)?{fid:n.fid,registrationStatus:0}:n}function nN(n){return n.registrationStatus===1&&n.registrationTime+Xx<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN({appConfig:n,heartbeatServiceProvider:e},t){const i=rN(n,t),r=kL(n,t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const a={installation:{sdkVersion:jx,appId:n.appId}},o={method:"POST",headers:r,body:JSON.stringify(a)},l=await eb(()=>fetch(i,o));if(l.ok){const c=await l.json();return Kx(c)}else throw await Jx("Generate Auth Token",l)}function rN(n,{fid:e}){return`${Yx(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gm(n,e=!1){let t;const i=await Pf(n.appConfig,s=>{if(!ob(s))throw aa.create("not-registered");const a=s.authToken;if(!e&&oN(a))return s;if(a.requestStatus===1)return t=sN(n,e),s;{if(!navigator.onLine)throw aa.create("app-offline");const o=cN(s);return t=aN(n,o),o}});return t?await t:i.authToken}async function sN(n,e){let t=await xv(n.appConfig);for(;t.authToken.requestStatus===1;)await tb(100),t=await xv(n.appConfig);const i=t.authToken;return i.requestStatus===0?Gm(n,e):i}function xv(n){return Pf(n,e=>{if(!ob(e))throw aa.create("not-registered");const t=e.authToken;return uN(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function aN(n,e){try{const t=await iN(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Wu(n.appConfig,i),t}catch(t){if(Zx(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await sb(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Wu(n.appConfig,i)}throw t}}function ob(n){return n!==void 0&&n.registrationStatus===2}function oN(n){return n.requestStatus===2&&!lN(n)}function lN(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+OL}function cN(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function uN(n){return n.requestStatus===1&&n.requestTime+Xx<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fN(n){const e=n,{installationEntry:t,registrationPromise:i}=await Vm(e);return i?i.catch(console.error):Gm(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hN(n,e=!1){const t=n;return await dN(t),(await Gm(t,e)).token}async function dN(n){const{registrationPromise:e}=await Vm(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(n){if(!n||!n.options)throw zh("App Configuration");if(!n.name)throw zh("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw zh(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function zh(n){return aa.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb="installations",mN="installations-internal",gN=n=>{const e=n.getProvider("app").getImmediate(),t=pN(e),i=mc(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},_N=n=>{const e=n.getProvider("app").getImmediate(),t=mc(e,lb).getImmediate();return{getId:()=>fN(t),getToken:r=>hN(t,r)}};function vN(){gs(new Nr(lb,gN,"PUBLIC")),gs(new Nr(mN,_N,"PRIVATE"))}vN();Ki($x,Hm);Ki($x,Hm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="analytics",yN="firebase_id",xN="origin",bN=60*1e3,SN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Wm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new Ux("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},li=new Rf("analytics","Analytics",EN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(n){if(!n.startsWith(Wm)){const e=li.create("invalid-gtag-resource",{gtagURL:n});return Fn.warn(e.message),""}return n}function cb(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function TN(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function wN(n,e){const t=TN("firebase-js-sdk-policy",{createScriptURL:MN}),i=document.createElement("script"),r=`${Wm}?l=${n}&id=${e}`;i.src=t?t?.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function AN(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function RN(n,e,t,i,r,s){const a=i[r];try{if(a)await e[a];else{const l=(await cb(t)).find(c=>c.measurementId===r);l&&await e[l.appId]}}catch(o){Fn.error(o)}n("config",r,s)}async function CN(n,e,t,i,r){try{let s=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const o=await cb(t);for(const l of a){const c=o.find(f=>f.measurementId===l),u=c&&e[c.appId];if(u)s.push(u);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",i,r||{})}catch(s){Fn.error(s)}}function PN(n,e,t,i){async function r(s,...a){try{if(s==="event"){const[o,l]=a;await CN(n,e,t,o,l)}else if(s==="config"){const[o,l]=a;await RN(n,e,t,i,o,l)}else if(s==="consent"){const[o,l]=a;n("consent",o,l)}else if(s==="get"){const[o,l,c]=a;n("get",o,l,c)}else if(s==="set"){const[o]=a;n("set",o)}else n(s,...a)}catch(o){Fn.error(o)}}return r}function IN(n,e,t,i,r){let s=function(...a){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=PN(s,n,e,t),{gtagCore:s,wrappedGtag:window[r]}}function DN(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Wm)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=30,NN=1e3;class ON{constructor(e={},t=NN){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ub=new ON;function UN(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function FN(n){var e;const{appId:t,apiKey:i}=n,r={method:"GET",headers:UN(i)},s=SN.replace("{app-id}",t),a=await fetch(s,r);if(a.status!==200&&a.status!==304){let o="";try{const l=await a.json();!((e=l.error)===null||e===void 0)&&e.message&&(o=l.error.message)}catch{}throw li.create("config-fetch-failed",{httpStatus:a.status,responseMessage:o})}return a.json()}async function BN(n,e=ub,t){const{appId:i,apiKey:r,measurementId:s}=n.options;if(!i)throw li.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw li.create("no-api-key")}const a=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new zN;return setTimeout(async()=>{o.abort()},bN),fb({appId:i,apiKey:r,measurementId:s},a,o,e)}async function fb(n,{throttleEndTimeMillis:e,backoffCount:t},i,r=ub){var s;const{appId:a,measurementId:o}=n;try{await kN(i,e)}catch(l){if(o)return Fn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:a,measurementId:o};throw l}try{const l=await FN(n);return r.deleteThrottleMetadata(a),l}catch(l){const c=l;if(!HN(c)){if(r.deleteThrottleMetadata(a),o)return Fn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:a,measurementId:o};throw l}const u=Number((s=c?.customData)===null||s===void 0?void 0:s.httpStatus)===503?lv(t,r.intervalMillis,LN):lv(t,r.intervalMillis),f={throttleEndTimeMillis:Date.now()+u,backoffCount:t+1};return r.setThrottleMetadata(a,f),Fn.debug(`Calling attemptFetch again in ${u} millis`),fb(n,f,i,r)}}function kN(n,e){return new Promise((t,i)=>{const r=Math.max(e-Date.now(),0),s=setTimeout(t,r);n.addEventListener(()=>{clearTimeout(s),i(li.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function HN(n){if(!(n instanceof ga)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class zN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function VN(n,e,t,i,r){if(r&&r.global){n("event",t,i);return}else{const s=await e,a=Object.assign(Object.assign({},i),{send_to:s});n("event",t,a)}}async function GN(n,e){const t=await n;window[`ga-disable-${t}`]=!1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WN(){if(Nx())try{await Ox()}catch(n){return Fn.warn(li.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return Fn.warn(li.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $N(n,e,t,i,r,s,a){var o;const l=BN(n);l.then(d=>{t[d.measurementId]=d.appId,n.options.measurementId&&d.measurementId!==n.options.measurementId&&Fn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${d.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(d=>Fn.error(d)),e.push(l);const c=WN().then(d=>{if(d)return i.getId()}),[u,f]=await Promise.all([l,c]);DN(s)||wN(s,u.measurementId),r("js",new Date);const h=(o=a?.config)!==null&&o!==void 0?o:{};return h[xN]="firebase",h.update=!0,f!=null&&(h[yN]=f),r("config",u.measurementId,h),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e){this.app=e}_delete(){return delete to[this.app.options.appId],Promise.resolve()}}let to={},bv=[];const Sv={};let Vh="dataLayer",jN="gtag",Ev,hb,Mv=!1;function qN(){const n=[];if(cD()&&n.push("This is a browser extension environment."),uD()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,r)=>`(${r+1}) ${i}`).join(" "),t=li.create("invalid-analytics-context",{errorInfo:e});Fn.warn(t.message)}}function ZN(n,e,t){qN();const i=n.options.appId;if(!i)throw li.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Fn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw li.create("no-api-key");if(to[i]!=null)throw li.create("already-exists",{id:i});if(!Mv){AN(Vh);const{wrappedGtag:s,gtagCore:a}=IN(to,bv,Sv,Vh,jN);hb=s,Ev=a,Mv=!0}return to[i]=$N(n,bv,Sv,e,Ev,Vh,t),new XN(n)}function YN(n=zx()){n=pc(n);const e=mc(n,$u);return e.isInitialized()?e.getImmediate():KN(n)}function KN(n,e={}){const t=mc(n,$u);if(t.isInitialized()){const r=t.getImmediate();if(Vu(e,t.getOptions()))return r;throw li.create("already-initialized")}return t.initialize({options:e})}function JN(n,e){n=pc(n),GN(to[n.app.options.appId]).catch(t=>Fn.error(t))}function Ur(n,e,t,i){n=pc(n),VN(hb,to[n.app.options.appId],e,t,i).catch(r=>Fn.error(r))}const Tv="@firebase/analytics",wv="0.10.11";function QN(){gs(new Nr($u,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return ZN(i,r,t)},"PUBLIC")),gs(new Nr("analytics-internal",n,"PRIVATE")),Ki(Tv,wv),Ki(Tv,wv,"esm2017");function n(e){try{const t=e.getProvider($u).getImmediate();return{logEvent:(i,r,s)=>Ur(t,i,r,s)}}catch(t){throw li.create("interop-component-reg-failed",{reason:t})}}}QN();const eO="AIzaSyCjOFfzcub1gVHiZNtNg3vsGIK_krOi_wk",tO="portfolio-90460.firebaseapp.com",nO="https://portfolio-90460-default-rtdb.firebaseio.com",iO="portfolio-90460",rO="portfolio-90460.firebasestorage.app",sO="240951581117",aO="1:240951581117:web:d8e2ddbe196e7a011a1ad4",oO="G-GLZ6FCPCPV",lO={apiKey:eO,authDomain:tO,databaseURL:nO,projectId:iO,storageBucket:rO,messagingSenderId:sO,appId:aO,measurementId:oO},db=Hx(lO),Fr=YN(db);DL(db,"us-central1");JN(Fr);var cO=pt('<span class="loader svelte-1fa4bei"></span>');function uO(n){var e=cO();Be(n,e)}var fO=pt("<button><!></button>");function _s(n,e){on(e,!0);let t=qt(e,"buttonRef",15,null),i=qt(e,"className",3,""),r=qt(e,"disabled",3,!1),s=qt(e,"style",3,""),a=qt(e,"type",3,"button");var o=fO();o.__click=function(...f){e.onclick?.apply(this,f)};var l=Qe(o);{var c=f=>{var h=Xp(),d=ji(h);pf(d,()=>e.children),Be(f,h)},u=f=>{uO(f)};ns(l,f=>{r()?f(u,!1):f(c)})}lc(o,f=>t(f),()=>t()),At(()=>{mf(o,`${i()??""} svelte-1ijwbm`),nn(o,"style",s()),nn(o,"type",a()),o.disabled=r()}),Be(n,o),ln()}$p(["click"]);var hO=pt('<a target="_blank" rel="noopener noreferrer"><!></a>');function Ep(n,e){let t=or(e,["$$slots","$$events","$$legacy","href"]);var i=hO(),r=Qe(i);_s(r,Bi(()=>t)),At(()=>nn(i,"href",e.href)),Be(n,i)}var dO=ar('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><!></svg>');function kr(n,e){on(e,!0);const t=Mi(),i=()=>Zt(os,"$theme",t);let r=qt(e,"className",3,""),s=qt(e,"fill",3,"none"),a=qt(e,"height",3,24),o=qt(e,"style",3,""),l=qt(e,"width",3,24);var c=dO(),u=Qe(c);pf(u,()=>e.children),At(()=>{pE(c,r()),nn(c,"style",o()),nn(c,"width",l()),nn(c,"height",a()),nn(c,"fill",s()),nn(c,"stroke",i().color1)}),Be(n,c),ln()}var pO=ar('<path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path>',1);function mO(n,e){let t=or(e,["$$slots","$$events","$$legacy"]);kr(n,Bi(()=>t,{children:(i,r)=>{var s=pO();Be(i,s)},$$slots:{default:!0}}))}var gO=ar('<path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path>',1);function _O(n,e){let t=or(e,["$$slots","$$events","$$legacy"]);kr(n,Bi(()=>t,{children:(i,r)=>{var s=gO();Be(i,s)},$$slots:{default:!0}}))}var vO=ar('<path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path>',1);function yO(n,e){let t=or(e,["$$slots","$$events","$$legacy"]);kr(n,Bi(()=>t,{children:(i,r)=>{var s=vO();Be(i,s)},$$slots:{default:!0}}))}let Xu;const If=di(!1);function xO(){Xu.showModal(),If.set(!0)}function Mp(){Xu.close(),If.set(!1)}var bO=(n,e)=>{n.key==="Escape"&&e()},SO=pt('<div class="modal svelte-1b4jbd0" tabindex="0" role="button"><div class="modal-header svelte-1b4jbd0"><h1 class="svelte-1b4jbd0"> </h1> <!></div> <div class="modal-body svelte-1b4jbd0"><!></div></div>'),EO=pt("<dialog><!></dialog>");function MO(n,e){on(e,!0);const t=Mi(),i=()=>Zt(If,"$isDialogOpen",t);var r=EO(),s=Qe(r);{var a=o=>{var l=SO();l.__keydown=[bO,Mp];var c=Qe(l),u=Qe(c),f=Qe(u),h=vt(u,2);_s(h,{onclick:Mp,children:(g,_)=>{yO(g,{})},$$slots:{default:!0}});var d=vt(c,2),m=Qe(d);pf(m,()=>e.children),At(()=>_n(f,e.title)),Sl(1,l,()=>Tu,()=>({delay:400,duration:500})),Be(o,l)};ns(s,o=>{i()&&o(a)})}lc(r,o=>Xu=o,()=>Xu),Be(n,r),ln()}$p(["keydown"]);var TO=pt("<!> ",1),wO=pt("<!> ",1),AO=pt('<div class="main svelte-tkap08"><h1 class="svelte-tkap08"> </h1> <h2 class="svelte-tkap08"><span class="_gradient job svelte-tkap08"> </span></h2> <div class="description svelte-tkap08"> </div> <div class="buttons svelte-tkap08"><!> <!></div></div>');function RO(n,e){on(e,!0);const t=Mi(),i=()=>Zt(er,"$locale",t),r=()=>Zt(Bo,"$_",t),s=()=>Zt(os,"$theme",t);let a=si(()=>`${Fm}CV-${Jp.get(i())}.pdf`);function o(){Ur(Fr,"cv-button")}function l(){Ur(Fr,"contact-button"),xO()}var c=AO(),u=Qe(c),f=Qe(u);At(()=>_n(f,r()("presentation-title")));var h=vt(u,2),d=Qe(h),m=Qe(d);At(()=>_n(m,r()("presentation-job")));var g=vt(h,2),_=Qe(g);At(()=>_n(_,r()("presentation-description")));var p=vt(g,2),x=Qe(p);Ep(x,{get href(){return he(a)},onclick:o,children:(y,b)=>{var E=TO(),w=ji(E);mO(w,{});var P=vt(w);At(()=>_n(P,` ${r()("presentation-cv-button")??""}`)),Be(y,E)},$$slots:{default:!0}});var v=vt(x,2);_s(v,{onclick:l,children:(y,b)=>{var E=wO(),w=ji(E);_O(w,{});var P=vt(w);At(()=>_n(P,` ${r()("presentation-contact-button")??""}`)),Be(y,E)},$$slots:{default:!0}}),At(()=>nn(d,"style",`--gradient: ${s().color5??""}`)),Be(n,c),ln()}async function CO(n,e="user",t="llama-3.3-70b-versatile"){const i=await fetch(W2,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:n,role:e,model:t})}),r=await i.json();if(!i.ok)throw new Error(r.error||"Something went wrong");return r.answer}var _t;(function(n){n.assertEqual=r=>r;function e(r){}n.assertIs=e;function t(r){throw new Error}n.assertNever=t,n.arrayToEnum=r=>{const s={};for(const a of r)s[a]=a;return s},n.getValidEnumValues=r=>{const s=n.objectKeys(r).filter(o=>typeof r[r[o]]!="number"),a={};for(const o of s)a[o]=r[o];return n.objectValues(a)},n.objectValues=r=>n.objectKeys(r).map(function(s){return r[s]}),n.objectKeys=typeof Object.keys=="function"?r=>Object.keys(r):r=>{const s=[];for(const a in r)Object.prototype.hasOwnProperty.call(r,a)&&s.push(a);return s},n.find=(r,s)=>{for(const a of r)if(s(a))return a},n.isInteger=typeof Number.isInteger=="function"?r=>Number.isInteger(r):r=>typeof r=="number"&&isFinite(r)&&Math.floor(r)===r;function i(r,s=" | "){return r.map(a=>typeof a=="string"?`'${a}'`:a).join(s)}n.joinValues=i,n.jsonStringifyReplacer=(r,s)=>typeof s=="bigint"?s.toString():s})(_t||(_t={}));var Tp;(function(n){n.mergeShapes=(e,t)=>({...e,...t})})(Tp||(Tp={}));const Se=_t.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),xr=n=>{switch(typeof n){case"undefined":return Se.undefined;case"string":return Se.string;case"number":return isNaN(n)?Se.nan:Se.number;case"boolean":return Se.boolean;case"function":return Se.function;case"bigint":return Se.bigint;case"symbol":return Se.symbol;case"object":return Array.isArray(n)?Se.array:n===null?Se.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?Se.promise:typeof Map<"u"&&n instanceof Map?Se.map:typeof Set<"u"&&n instanceof Set?Se.set:typeof Date<"u"&&n instanceof Date?Se.date:Se.object;default:return Se.unknown}},ie=_t.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),PO=n=>JSON.stringify(n,null,2).replace(/"([^"]+)":/g,"$1:");class ci extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){const t=e||function(s){return s.message},i={_errors:[]},r=s=>{for(const a of s.issues)if(a.code==="invalid_union")a.unionErrors.map(r);else if(a.code==="invalid_return_type")r(a.returnTypeError);else if(a.code==="invalid_arguments")r(a.argumentsError);else if(a.path.length===0)i._errors.push(t(a));else{let o=i,l=0;for(;l<a.path.length;){const c=a.path[l];l===a.path.length-1?(o[c]=o[c]||{_errors:[]},o[c]._errors.push(t(a))):o[c]=o[c]||{_errors:[]},o=o[c],l++}}};return r(this),i}static assert(e){if(!(e instanceof ci))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,_t.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},i=[];for(const r of this.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):i.push(e(r));return{formErrors:i,fieldErrors:t}}get formErrors(){return this.flatten()}}ci.create=n=>new ci(n);const Co=(n,e)=>{let t;switch(n.code){case ie.invalid_type:n.received===Se.undefined?t="Required":t=`Expected ${n.expected}, received ${n.received}`;break;case ie.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,_t.jsonStringifyReplacer)}`;break;case ie.unrecognized_keys:t=`Unrecognized key(s) in object: ${_t.joinValues(n.keys,", ")}`;break;case ie.invalid_union:t="Invalid input";break;case ie.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${_t.joinValues(n.options)}`;break;case ie.invalid_enum_value:t=`Invalid enum value. Expected ${_t.joinValues(n.options)}, received '${n.received}'`;break;case ie.invalid_arguments:t="Invalid function arguments";break;case ie.invalid_return_type:t="Invalid function return type";break;case ie.invalid_date:t="Invalid date";break;case ie.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:_t.assertNever(n.validation):n.validation!=="regex"?t=`Invalid ${n.validation}`:t="Invalid";break;case ie.too_small:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:t="Invalid input";break;case ie.too_big:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?t=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:t="Invalid input";break;case ie.custom:t="Invalid input";break;case ie.invalid_intersection_types:t="Intersection results could not be merged";break;case ie.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case ie.not_finite:t="Number must be finite";break;default:t=e.defaultError,_t.assertNever(n)}return{message:t}};let pb=Co;function IO(n){pb=n}function ju(){return pb}const qu=n=>{const{data:e,path:t,errorMaps:i,issueData:r}=n,s=[...t,...r.path||[]],a={...r,path:s};if(r.message!==void 0)return{...r,path:s,message:r.message};let o="";const l=i.filter(c=>!!c).slice().reverse();for(const c of l)o=c(a,{data:e,defaultError:o}).message;return{...r,path:s,message:o}},DO=[];function fe(n,e){const t=ju(),i=qu({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,t,t===Co?void 0:Co].filter(r=>!!r)});n.common.issues.push(i)}class wn{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const i=[];for(const r of t){if(r.status==="aborted")return Ge;r.status==="dirty"&&e.dirty(),i.push(r.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,t){const i=[];for(const r of t){const s=await r.key,a=await r.value;i.push({key:s,value:a})}return wn.mergeObjectSync(e,i)}static mergeObjectSync(e,t){const i={};for(const r of t){const{key:s,value:a}=r;if(s.status==="aborted"||a.status==="aborted")return Ge;s.status==="dirty"&&e.dirty(),a.status==="dirty"&&e.dirty(),s.value!=="__proto__"&&(typeof a.value<"u"||r.alwaysSet)&&(i[s.value]=a.value)}return{status:e.value,value:i}}}const Ge=Object.freeze({status:"aborted"}),Wa=n=>({status:"dirty",value:n}),Bn=n=>({status:"valid",value:n}),wp=n=>n.status==="aborted",Ap=n=>n.status==="dirty",la=n=>n.status==="valid",Vl=n=>typeof Promise<"u"&&n instanceof Promise;function Zu(n,e,t,i){if(typeof e=="function"?n!==e||!0:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e.get(n)}function mb(n,e,t,i,r){if(typeof e=="function"?n!==e||!0:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(n,t),t}var Ie;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e?.message})(Ie||(Ie={}));var ol,ll;class ir{constructor(e,t,i,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=i,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Av=(n,e)=>{if(la(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new ci(n.common.issues);return this._error=t,this._error}}};function Ke(n){if(!n)return{};const{errorMap:e,invalid_type_error:t,required_error:i,description:r}=n;if(e&&(t||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:r}:{errorMap:(a,o)=>{var l,c;const{message:u}=n;return a.code==="invalid_enum_value"?{message:u??o.defaultError}:typeof o.data>"u"?{message:(l=u??i)!==null&&l!==void 0?l:o.defaultError}:a.code!=="invalid_type"?{message:o.defaultError}:{message:(c=u??t)!==null&&c!==void 0?c:o.defaultError}},description:r}}class it{get description(){return this._def.description}_getType(e){return xr(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:xr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new wn,ctx:{common:e.parent.common,data:e.data,parsedType:xr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(Vl(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const i=this.safeParse(e,t);if(i.success)return i.data;throw i.error}safeParse(e,t){var i;const r={common:{issues:[],async:(i=t?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:xr(e)},s=this._parseSync({data:e,path:r.path,parent:r});return Av(r,s)}"~validate"(e){var t,i;const r={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:xr(e)};if(!this["~standard"].async)try{const s=this._parseSync({data:e,path:[],parent:r});return la(s)?{value:s.value}:{issues:r.common.issues}}catch(s){!((i=(t=s?.message)===null||t===void 0?void 0:t.toLowerCase())===null||i===void 0)&&i.includes("encountered")&&(this["~standard"].async=!0),r.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:r}).then(s=>la(s)?{value:s.value}:{issues:r.common.issues})}async parseAsync(e,t){const i=await this.safeParseAsync(e,t);if(i.success)return i.data;throw i.error}async safeParseAsync(e,t){const i={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:xr(e)},r=this._parse({data:e,path:i.path,parent:i}),s=await(Vl(r)?r:Promise.resolve(r));return Av(i,s)}refine(e,t){const i=r=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(r):t;return this._refinement((r,s)=>{const a=e(r),o=()=>s.addIssue({code:ie.custom,...i(r)});return typeof Promise<"u"&&a instanceof Promise?a.then(l=>l?!0:(o(),!1)):a?!0:(o(),!1)})}refinement(e,t){return this._refinement((i,r)=>e(i)?!0:(r.addIssue(typeof t=="function"?t(i,r):t),!1))}_refinement(e){return new Ui({schema:this,typeName:Ve.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:t=>this["~validate"](t)}}optional(){return Ji.create(this,this._def)}nullable(){return bs.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Ni.create(this)}promise(){return Io.create(this,this._def)}or(e){return Xl.create([this,e],this._def)}and(e){return jl.create(this,e,this._def)}transform(e){return new Ui({...Ke(this._def),schema:this,typeName:Ve.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new Jl({...Ke(this._def),innerType:this,defaultValue:t,typeName:Ve.ZodDefault})}brand(){return new $m({typeName:Ve.ZodBranded,type:this,...Ke(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new Ql({...Ke(this._def),innerType:this,catchValue:t,typeName:Ve.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return gc.create(this,e)}readonly(){return ec.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const LO=/^c[^\s-]{8,}$/i,NO=/^[0-9a-z]+$/,OO=/^[0-9A-HJKMNP-TV-Z]{26}$/i,UO=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,FO=/^[a-z0-9_-]{21}$/i,BO=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,kO=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,HO=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,zO="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let Gh;const VO=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,GO=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,WO=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,$O=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,XO=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,jO=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,gb="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",qO=new RegExp(`^${gb}$`);function _b(n){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return n.precision?e=`${e}\\.\\d{${n.precision}}`:n.precision==null&&(e=`${e}(\\.\\d+)?`),e}function ZO(n){return new RegExp(`^${_b(n)}$`)}function vb(n){let e=`${gb}T${_b(n)}`;const t=[];return t.push(n.local?"Z?":"Z"),n.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function YO(n,e){return!!((e==="v4"||!e)&&VO.test(n)||(e==="v6"||!e)&&WO.test(n))}function KO(n,e){if(!BO.test(n))return!1;try{const[t]=n.split("."),i=t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+(4-t.length%4)%4,"="),r=JSON.parse(atob(i));return!(typeof r!="object"||r===null||!r.typ||!r.alg||e&&r.alg!==e)}catch{return!1}}function JO(n,e){return!!((e==="v4"||!e)&&GO.test(n)||(e==="v6"||!e)&&$O.test(n))}class Li extends it{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==Se.string){const s=this._getOrReturnCtx(e);return fe(s,{code:ie.invalid_type,expected:Se.string,received:s.parsedType}),Ge}const i=new wn;let r;for(const s of this._def.checks)if(s.kind==="min")e.data.length<s.value&&(r=this._getOrReturnCtx(e,r),fe(r,{code:ie.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="max")e.data.length>s.value&&(r=this._getOrReturnCtx(e,r),fe(r,{code:ie.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),i.dirty());else if(s.kind==="length"){const a=e.data.length>s.value,o=e.data.length<s.value;(a||o)&&(r=this._getOrReturnCtx(e,r),a?fe(r,{code:ie.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):o&&fe(r,{code:ie.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),i.dirty())}else if(s.kind==="email")HO.test(e.data)||(r=this._getOrReturnCtx(e,r),fe(r,{validation:"email",code:ie.invalid_string,message:s.message}),i.dirty());else if(s.kind==="emoji")Gh||(Gh=new RegExp(zO,"u")),Gh.test(e.data)||(r=this._getOrReturnCtx(e,r),fe(r,{validation:"emoji",code:ie.invalid_string,message:s.message}),i.dirty());else if(s.kind==="uuid")UO.test(e.data)||(r=this._getOrReturnCtx(e,r),fe(r,{validation:"uuid",code:ie.invalid_string,message:s.message}),i.dirty());else if(s.kind==="nanoid")FO.test(e.data)||(r=this._getOrReturnCtx(e,r),fe(r,{validation:"nanoid",code:ie.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid")LO.test(e.data)||(r=this._getOrReturnCtx(e,r),fe(r,{validation:"cuid",code:ie.invalid_string,message:s.message}),i.dirty());else if(s.kind==="cuid2")NO.test(e.data)||(r=this._getOrReturnCtx(e,r),fe(r,{validation:"cuid2",code:ie.invalid_string,message:s.message}),i.dirty());else if(s.kind==="ulid")OO.test(e.data)||(r=this._getOrReturnCtx(e,r),fe(r,{validation:"ulid",code:ie.invalid_string,message:s.message}),i.dirty());else if(s.kind==="url")try{new URL(e.data)}catch{r=this._getOrReturnCtx(e,r),fe(r,{validation:"url",code:ie.invalid_string,message:s.message}),i.dirty()}else s.kind==="regex"?(s.regex.lastIndex=0,s.regex.test(e.data)||(r=this._getOrReturnCtx(e,r),fe(r,{validation:"regex",code:ie.invalid_string,message:s.message}),i.dirty())):s.kind==="trim"?e.data=e.data.trim():s.kind==="includes"?e.data.includes(s.value,s.position)||(r=this._getOrReturnCtx(e,r),fe(r,{code:ie.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),i.dirty()):s.kind==="toLowerCase"?e.data=e.data.toLowerCase():s.kind==="toUpperCase"?e.data=e.data.toUpperCase():s.kind==="startsWith"?e.data.startsWith(s.value)||(r=this._getOrReturnCtx(e,r),fe(r,{code:ie.invalid_string,validation:{startsWith:s.value},message:s.message}),i.dirty()):s.kind==="endsWith"?e.data.endsWith(s.value)||(r=this._getOrReturnCtx(e,r),fe(r,{code:ie.invalid_string,validation:{endsWith:s.value},message:s.message}),i.dirty()):s.kind==="datetime"?vb(s).test(e.data)||(r=this._getOrReturnCtx(e,r),fe(r,{code:ie.invalid_string,validation:"datetime",message:s.message}),i.dirty()):s.kind==="date"?qO.test(e.data)||(r=this._getOrReturnCtx(e,r),fe(r,{code:ie.invalid_string,validation:"date",message:s.message}),i.dirty()):s.kind==="time"?ZO(s).test(e.data)||(r=this._getOrReturnCtx(e,r),fe(r,{code:ie.invalid_string,validation:"time",message:s.message}),i.dirty()):s.kind==="duration"?kO.test(e.data)||(r=this._getOrReturnCtx(e,r),fe(r,{validation:"duration",code:ie.invalid_string,message:s.message}),i.dirty()):s.kind==="ip"?YO(e.data,s.version)||(r=this._getOrReturnCtx(e,r),fe(r,{validation:"ip",code:ie.invalid_string,message:s.message}),i.dirty()):s.kind==="jwt"?KO(e.data,s.alg)||(r=this._getOrReturnCtx(e,r),fe(r,{validation:"jwt",code:ie.invalid_string,message:s.message}),i.dirty()):s.kind==="cidr"?JO(e.data,s.version)||(r=this._getOrReturnCtx(e,r),fe(r,{validation:"cidr",code:ie.invalid_string,message:s.message}),i.dirty()):s.kind==="base64"?XO.test(e.data)||(r=this._getOrReturnCtx(e,r),fe(r,{validation:"base64",code:ie.invalid_string,message:s.message}),i.dirty()):s.kind==="base64url"?jO.test(e.data)||(r=this._getOrReturnCtx(e,r),fe(r,{validation:"base64url",code:ie.invalid_string,message:s.message}),i.dirty()):_t.assertNever(s);return{status:i.value,value:e.data}}_regex(e,t,i){return this.refinement(r=>e.test(r),{validation:t,code:ie.invalid_string,...Ie.errToObj(i)})}_addCheck(e){return new Li({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...Ie.errToObj(e)})}url(e){return this._addCheck({kind:"url",...Ie.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...Ie.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...Ie.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...Ie.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...Ie.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...Ie.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...Ie.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...Ie.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...Ie.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...Ie.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...Ie.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...Ie.errToObj(e)})}datetime(e){var t,i;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:(t=e?.offset)!==null&&t!==void 0?t:!1,local:(i=e?.local)!==null&&i!==void 0?i:!1,...Ie.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...Ie.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...Ie.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...Ie.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t?.position,...Ie.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...Ie.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...Ie.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...Ie.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...Ie.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...Ie.errToObj(t)})}nonempty(e){return this.min(1,Ie.errToObj(e))}trim(){return new Li({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Li({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Li({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}Li.create=n=>{var e;return new Li({checks:[],typeName:Ve.ZodString,coerce:(e=n?.coerce)!==null&&e!==void 0?e:!1,...Ke(n)})};function QO(n,e){const t=(n.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,r=t>i?t:i,s=parseInt(n.toFixed(r).replace(".","")),a=parseInt(e.toFixed(r).replace(".",""));return s%a/Math.pow(10,r)}class vs extends it{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==Se.number){const s=this._getOrReturnCtx(e);return fe(s,{code:ie.invalid_type,expected:Se.number,received:s.parsedType}),Ge}let i;const r=new wn;for(const s of this._def.checks)s.kind==="int"?_t.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),fe(i,{code:ie.invalid_type,expected:"integer",received:"float",message:s.message}),r.dirty()):s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),fe(i,{code:ie.too_small,minimum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),r.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),fe(i,{code:ie.too_big,maximum:s.value,type:"number",inclusive:s.inclusive,exact:!1,message:s.message}),r.dirty()):s.kind==="multipleOf"?QO(e.data,s.value)!==0&&(i=this._getOrReturnCtx(e,i),fe(i,{code:ie.not_multiple_of,multipleOf:s.value,message:s.message}),r.dirty()):s.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),fe(i,{code:ie.not_finite,message:s.message}),r.dirty()):_t.assertNever(s);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Ie.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Ie.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Ie.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Ie.toString(t))}setLimit(e,t,i,r){return new vs({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:Ie.toString(r)}]})}_addCheck(e){return new vs({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:Ie.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Ie.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Ie.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Ie.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Ie.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Ie.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:Ie.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Ie.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Ie.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&_t.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(t===null||i.value>t)&&(t=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(t)&&Number.isFinite(e)}}vs.create=n=>new vs({checks:[],typeName:Ve.ZodNumber,coerce:n?.coerce||!1,...Ke(n)});class ys extends it{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==Se.bigint)return this._getInvalidInput(e);let i;const r=new wn;for(const s of this._def.checks)s.kind==="min"?(s.inclusive?e.data<s.value:e.data<=s.value)&&(i=this._getOrReturnCtx(e,i),fe(i,{code:ie.too_small,type:"bigint",minimum:s.value,inclusive:s.inclusive,message:s.message}),r.dirty()):s.kind==="max"?(s.inclusive?e.data>s.value:e.data>=s.value)&&(i=this._getOrReturnCtx(e,i),fe(i,{code:ie.too_big,type:"bigint",maximum:s.value,inclusive:s.inclusive,message:s.message}),r.dirty()):s.kind==="multipleOf"?e.data%s.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),fe(i,{code:ie.not_multiple_of,multipleOf:s.value,message:s.message}),r.dirty()):_t.assertNever(s);return{status:r.value,value:e.data}}_getInvalidInput(e){const t=this._getOrReturnCtx(e);return fe(t,{code:ie.invalid_type,expected:Se.bigint,received:t.parsedType}),Ge}gte(e,t){return this.setLimit("min",e,!0,Ie.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Ie.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Ie.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Ie.toString(t))}setLimit(e,t,i,r){return new ys({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:i,message:Ie.toString(r)}]})}_addCheck(e){return new ys({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Ie.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Ie.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Ie.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Ie.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Ie.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}ys.create=n=>{var e;return new ys({checks:[],typeName:Ve.ZodBigInt,coerce:(e=n?.coerce)!==null&&e!==void 0?e:!1,...Ke(n)})};class Gl extends it{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==Se.boolean){const i=this._getOrReturnCtx(e);return fe(i,{code:ie.invalid_type,expected:Se.boolean,received:i.parsedType}),Ge}return Bn(e.data)}}Gl.create=n=>new Gl({typeName:Ve.ZodBoolean,coerce:n?.coerce||!1,...Ke(n)});class ca extends it{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==Se.date){const s=this._getOrReturnCtx(e);return fe(s,{code:ie.invalid_type,expected:Se.date,received:s.parsedType}),Ge}if(isNaN(e.data.getTime())){const s=this._getOrReturnCtx(e);return fe(s,{code:ie.invalid_date}),Ge}const i=new wn;let r;for(const s of this._def.checks)s.kind==="min"?e.data.getTime()<s.value&&(r=this._getOrReturnCtx(e,r),fe(r,{code:ie.too_small,message:s.message,inclusive:!0,exact:!1,minimum:s.value,type:"date"}),i.dirty()):s.kind==="max"?e.data.getTime()>s.value&&(r=this._getOrReturnCtx(e,r),fe(r,{code:ie.too_big,message:s.message,inclusive:!0,exact:!1,maximum:s.value,type:"date"}),i.dirty()):_t.assertNever(s);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new ca({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:Ie.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:Ie.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}ca.create=n=>new ca({checks:[],coerce:n?.coerce||!1,typeName:Ve.ZodDate,...Ke(n)});class Yu extends it{_parse(e){if(this._getType(e)!==Se.symbol){const i=this._getOrReturnCtx(e);return fe(i,{code:ie.invalid_type,expected:Se.symbol,received:i.parsedType}),Ge}return Bn(e.data)}}Yu.create=n=>new Yu({typeName:Ve.ZodSymbol,...Ke(n)});class Wl extends it{_parse(e){if(this._getType(e)!==Se.undefined){const i=this._getOrReturnCtx(e);return fe(i,{code:ie.invalid_type,expected:Se.undefined,received:i.parsedType}),Ge}return Bn(e.data)}}Wl.create=n=>new Wl({typeName:Ve.ZodUndefined,...Ke(n)});class $l extends it{_parse(e){if(this._getType(e)!==Se.null){const i=this._getOrReturnCtx(e);return fe(i,{code:ie.invalid_type,expected:Se.null,received:i.parsedType}),Ge}return Bn(e.data)}}$l.create=n=>new $l({typeName:Ve.ZodNull,...Ke(n)});class Po extends it{constructor(){super(...arguments),this._any=!0}_parse(e){return Bn(e.data)}}Po.create=n=>new Po({typeName:Ve.ZodAny,...Ke(n)});class Js extends it{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Bn(e.data)}}Js.create=n=>new Js({typeName:Ve.ZodUnknown,...Ke(n)});class Br extends it{_parse(e){const t=this._getOrReturnCtx(e);return fe(t,{code:ie.invalid_type,expected:Se.never,received:t.parsedType}),Ge}}Br.create=n=>new Br({typeName:Ve.ZodNever,...Ke(n)});class Ku extends it{_parse(e){if(this._getType(e)!==Se.undefined){const i=this._getOrReturnCtx(e);return fe(i,{code:ie.invalid_type,expected:Se.void,received:i.parsedType}),Ge}return Bn(e.data)}}Ku.create=n=>new Ku({typeName:Ve.ZodVoid,...Ke(n)});class Ni extends it{_parse(e){const{ctx:t,status:i}=this._processInputParams(e),r=this._def;if(t.parsedType!==Se.array)return fe(t,{code:ie.invalid_type,expected:Se.array,received:t.parsedType}),Ge;if(r.exactLength!==null){const a=t.data.length>r.exactLength.value,o=t.data.length<r.exactLength.value;(a||o)&&(fe(t,{code:a?ie.too_big:ie.too_small,minimum:o?r.exactLength.value:void 0,maximum:a?r.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:r.exactLength.message}),i.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(fe(t,{code:ie.too_small,minimum:r.minLength.value,type:"array",inclusive:!0,exact:!1,message:r.minLength.message}),i.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(fe(t,{code:ie.too_big,maximum:r.maxLength.value,type:"array",inclusive:!0,exact:!1,message:r.maxLength.message}),i.dirty()),t.common.async)return Promise.all([...t.data].map((a,o)=>r.type._parseAsync(new ir(t,a,t.path,o)))).then(a=>wn.mergeArray(i,a));const s=[...t.data].map((a,o)=>r.type._parseSync(new ir(t,a,t.path,o)));return wn.mergeArray(i,s)}get element(){return this._def.type}min(e,t){return new Ni({...this._def,minLength:{value:e,message:Ie.toString(t)}})}max(e,t){return new Ni({...this._def,maxLength:{value:e,message:Ie.toString(t)}})}length(e,t){return new Ni({...this._def,exactLength:{value:e,message:Ie.toString(t)}})}nonempty(e){return this.min(1,e)}}Ni.create=(n,e)=>new Ni({type:n,minLength:null,maxLength:null,exactLength:null,typeName:Ve.ZodArray,...Ke(e)});function ka(n){if(n instanceof Gt){const e={};for(const t in n.shape){const i=n.shape[t];e[t]=Ji.create(ka(i))}return new Gt({...n._def,shape:()=>e})}else return n instanceof Ni?new Ni({...n._def,type:ka(n.element)}):n instanceof Ji?Ji.create(ka(n.unwrap())):n instanceof bs?bs.create(ka(n.unwrap())):n instanceof rr?rr.create(n.items.map(e=>ka(e))):n}class Gt extends it{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=_t.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==Se.object){const c=this._getOrReturnCtx(e);return fe(c,{code:ie.invalid_type,expected:Se.object,received:c.parsedType}),Ge}const{status:i,ctx:r}=this._processInputParams(e),{shape:s,keys:a}=this._getCached(),o=[];if(!(this._def.catchall instanceof Br&&this._def.unknownKeys==="strip"))for(const c in r.data)a.includes(c)||o.push(c);const l=[];for(const c of a){const u=s[c],f=r.data[c];l.push({key:{status:"valid",value:c},value:u._parse(new ir(r,f,r.path,c)),alwaysSet:c in r.data})}if(this._def.catchall instanceof Br){const c=this._def.unknownKeys;if(c==="passthrough")for(const u of o)l.push({key:{status:"valid",value:u},value:{status:"valid",value:r.data[u]}});else if(c==="strict")o.length>0&&(fe(r,{code:ie.unrecognized_keys,keys:o}),i.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const c=this._def.catchall;for(const u of o){const f=r.data[u];l.push({key:{status:"valid",value:u},value:c._parse(new ir(r,f,r.path,u)),alwaysSet:u in r.data})}}return r.common.async?Promise.resolve().then(async()=>{const c=[];for(const u of l){const f=await u.key,h=await u.value;c.push({key:f,value:h,alwaysSet:u.alwaysSet})}return c}).then(c=>wn.mergeObjectSync(i,c)):wn.mergeObjectSync(i,l)}get shape(){return this._def.shape()}strict(e){return Ie.errToObj,new Gt({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,i)=>{var r,s,a,o;const l=(a=(s=(r=this._def).errorMap)===null||s===void 0?void 0:s.call(r,t,i).message)!==null&&a!==void 0?a:i.defaultError;return t.code==="unrecognized_keys"?{message:(o=Ie.errToObj(e).message)!==null&&o!==void 0?o:l}:{message:l}}}:{}})}strip(){return new Gt({...this._def,unknownKeys:"strip"})}passthrough(){return new Gt({...this._def,unknownKeys:"passthrough"})}extend(e){return new Gt({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new Gt({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Ve.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new Gt({...this._def,catchall:e})}pick(e){const t={};return _t.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(t[i]=this.shape[i])}),new Gt({...this._def,shape:()=>t})}omit(e){const t={};return _t.objectKeys(this.shape).forEach(i=>{e[i]||(t[i]=this.shape[i])}),new Gt({...this._def,shape:()=>t})}deepPartial(){return ka(this)}partial(e){const t={};return _t.objectKeys(this.shape).forEach(i=>{const r=this.shape[i];e&&!e[i]?t[i]=r:t[i]=r.optional()}),new Gt({...this._def,shape:()=>t})}required(e){const t={};return _t.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])t[i]=this.shape[i];else{let s=this.shape[i];for(;s instanceof Ji;)s=s._def.innerType;t[i]=s}}),new Gt({...this._def,shape:()=>t})}keyof(){return yb(_t.objectKeys(this.shape))}}Gt.create=(n,e)=>new Gt({shape:()=>n,unknownKeys:"strip",catchall:Br.create(),typeName:Ve.ZodObject,...Ke(e)});Gt.strictCreate=(n,e)=>new Gt({shape:()=>n,unknownKeys:"strict",catchall:Br.create(),typeName:Ve.ZodObject,...Ke(e)});Gt.lazycreate=(n,e)=>new Gt({shape:n,unknownKeys:"strip",catchall:Br.create(),typeName:Ve.ZodObject,...Ke(e)});class Xl extends it{_parse(e){const{ctx:t}=this._processInputParams(e),i=this._def.options;function r(s){for(const o of s)if(o.result.status==="valid")return o.result;for(const o of s)if(o.result.status==="dirty")return t.common.issues.push(...o.ctx.common.issues),o.result;const a=s.map(o=>new ci(o.ctx.common.issues));return fe(t,{code:ie.invalid_union,unionErrors:a}),Ge}if(t.common.async)return Promise.all(i.map(async s=>{const a={...t,common:{...t.common,issues:[]},parent:null};return{result:await s._parseAsync({data:t.data,path:t.path,parent:a}),ctx:a}})).then(r);{let s;const a=[];for(const l of i){const c={...t,common:{...t.common,issues:[]},parent:null},u=l._parseSync({data:t.data,path:t.path,parent:c});if(u.status==="valid")return u;u.status==="dirty"&&!s&&(s={result:u,ctx:c}),c.common.issues.length&&a.push(c.common.issues)}if(s)return t.common.issues.push(...s.ctx.common.issues),s.result;const o=a.map(l=>new ci(l));return fe(t,{code:ie.invalid_union,unionErrors:o}),Ge}}get options(){return this._def.options}}Xl.create=(n,e)=>new Xl({options:n,typeName:Ve.ZodUnion,...Ke(e)});const gr=n=>n instanceof Zl?gr(n.schema):n instanceof Ui?gr(n.innerType()):n instanceof Yl?[n.value]:n instanceof xs?n.options:n instanceof Kl?_t.objectValues(n.enum):n instanceof Jl?gr(n._def.innerType):n instanceof Wl?[void 0]:n instanceof $l?[null]:n instanceof Ji?[void 0,...gr(n.unwrap())]:n instanceof bs?[null,...gr(n.unwrap())]:n instanceof $m||n instanceof ec?gr(n.unwrap()):n instanceof Ql?gr(n._def.innerType):[];class Df extends it{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Se.object)return fe(t,{code:ie.invalid_type,expected:Se.object,received:t.parsedType}),Ge;const i=this.discriminator,r=t.data[i],s=this.optionsMap.get(r);return s?t.common.async?s._parseAsync({data:t.data,path:t.path,parent:t}):s._parseSync({data:t.data,path:t.path,parent:t}):(fe(t,{code:ie.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),Ge)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,i){const r=new Map;for(const s of t){const a=gr(s.shape[e]);if(!a.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const o of a){if(r.has(o))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);r.set(o,s)}}return new Df({typeName:Ve.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:r,...Ke(i)})}}function Rp(n,e){const t=xr(n),i=xr(e);if(n===e)return{valid:!0,data:n};if(t===Se.object&&i===Se.object){const r=_t.objectKeys(e),s=_t.objectKeys(n).filter(o=>r.indexOf(o)!==-1),a={...n,...e};for(const o of s){const l=Rp(n[o],e[o]);if(!l.valid)return{valid:!1};a[o]=l.data}return{valid:!0,data:a}}else if(t===Se.array&&i===Se.array){if(n.length!==e.length)return{valid:!1};const r=[];for(let s=0;s<n.length;s++){const a=n[s],o=e[s],l=Rp(a,o);if(!l.valid)return{valid:!1};r.push(l.data)}return{valid:!0,data:r}}else return t===Se.date&&i===Se.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}class jl extends it{_parse(e){const{status:t,ctx:i}=this._processInputParams(e),r=(s,a)=>{if(wp(s)||wp(a))return Ge;const o=Rp(s.value,a.value);return o.valid?((Ap(s)||Ap(a))&&t.dirty(),{status:t.value,value:o.data}):(fe(i,{code:ie.invalid_intersection_types}),Ge)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([s,a])=>r(s,a)):r(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}jl.create=(n,e,t)=>new jl({left:n,right:e,typeName:Ve.ZodIntersection,...Ke(t)});class rr extends it{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==Se.array)return fe(i,{code:ie.invalid_type,expected:Se.array,received:i.parsedType}),Ge;if(i.data.length<this._def.items.length)return fe(i,{code:ie.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ge;!this._def.rest&&i.data.length>this._def.items.length&&(fe(i,{code:ie.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const s=[...i.data].map((a,o)=>{const l=this._def.items[o]||this._def.rest;return l?l._parse(new ir(i,a,i.path,o)):null}).filter(a=>!!a);return i.common.async?Promise.all(s).then(a=>wn.mergeArray(t,a)):wn.mergeArray(t,s)}get items(){return this._def.items}rest(e){return new rr({...this._def,rest:e})}}rr.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new rr({items:n,typeName:Ve.ZodTuple,rest:null,...Ke(e)})};class ql extends it{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==Se.object)return fe(i,{code:ie.invalid_type,expected:Se.object,received:i.parsedType}),Ge;const r=[],s=this._def.keyType,a=this._def.valueType;for(const o in i.data)r.push({key:s._parse(new ir(i,o,i.path,o)),value:a._parse(new ir(i,i.data[o],i.path,o)),alwaysSet:o in i.data});return i.common.async?wn.mergeObjectAsync(t,r):wn.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(e,t,i){return t instanceof it?new ql({keyType:e,valueType:t,typeName:Ve.ZodRecord,...Ke(i)}):new ql({keyType:Li.create(),valueType:e,typeName:Ve.ZodRecord,...Ke(t)})}}class Ju extends it{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==Se.map)return fe(i,{code:ie.invalid_type,expected:Se.map,received:i.parsedType}),Ge;const r=this._def.keyType,s=this._def.valueType,a=[...i.data.entries()].map(([o,l],c)=>({key:r._parse(new ir(i,o,i.path,[c,"key"])),value:s._parse(new ir(i,l,i.path,[c,"value"]))}));if(i.common.async){const o=new Map;return Promise.resolve().then(async()=>{for(const l of a){const c=await l.key,u=await l.value;if(c.status==="aborted"||u.status==="aborted")return Ge;(c.status==="dirty"||u.status==="dirty")&&t.dirty(),o.set(c.value,u.value)}return{status:t.value,value:o}})}else{const o=new Map;for(const l of a){const c=l.key,u=l.value;if(c.status==="aborted"||u.status==="aborted")return Ge;(c.status==="dirty"||u.status==="dirty")&&t.dirty(),o.set(c.value,u.value)}return{status:t.value,value:o}}}}Ju.create=(n,e,t)=>new Ju({valueType:e,keyType:n,typeName:Ve.ZodMap,...Ke(t)});class ua extends it{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.parsedType!==Se.set)return fe(i,{code:ie.invalid_type,expected:Se.set,received:i.parsedType}),Ge;const r=this._def;r.minSize!==null&&i.data.size<r.minSize.value&&(fe(i,{code:ie.too_small,minimum:r.minSize.value,type:"set",inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&i.data.size>r.maxSize.value&&(fe(i,{code:ie.too_big,maximum:r.maxSize.value,type:"set",inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());const s=this._def.valueType;function a(l){const c=new Set;for(const u of l){if(u.status==="aborted")return Ge;u.status==="dirty"&&t.dirty(),c.add(u.value)}return{status:t.value,value:c}}const o=[...i.data.values()].map((l,c)=>s._parse(new ir(i,l,i.path,c)));return i.common.async?Promise.all(o).then(l=>a(l)):a(o)}min(e,t){return new ua({...this._def,minSize:{value:e,message:Ie.toString(t)}})}max(e,t){return new ua({...this._def,maxSize:{value:e,message:Ie.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}ua.create=(n,e)=>new ua({valueType:n,minSize:null,maxSize:null,typeName:Ve.ZodSet,...Ke(e)});class no extends it{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Se.function)return fe(t,{code:ie.invalid_type,expected:Se.function,received:t.parsedType}),Ge;function i(o,l){return qu({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,ju(),Co].filter(c=>!!c),issueData:{code:ie.invalid_arguments,argumentsError:l}})}function r(o,l){return qu({data:o,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,ju(),Co].filter(c=>!!c),issueData:{code:ie.invalid_return_type,returnTypeError:l}})}const s={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof Io){const o=this;return Bn(async function(...l){const c=new ci([]),u=await o._def.args.parseAsync(l,s).catch(d=>{throw c.addIssue(i(l,d)),c}),f=await Reflect.apply(a,this,u);return await o._def.returns._def.type.parseAsync(f,s).catch(d=>{throw c.addIssue(r(f,d)),c})})}else{const o=this;return Bn(function(...l){const c=o._def.args.safeParse(l,s);if(!c.success)throw new ci([i(l,c.error)]);const u=Reflect.apply(a,this,c.data),f=o._def.returns.safeParse(u,s);if(!f.success)throw new ci([r(u,f.error)]);return f.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new no({...this._def,args:rr.create(e).rest(Js.create())})}returns(e){return new no({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,i){return new no({args:e||rr.create([]).rest(Js.create()),returns:t||Js.create(),typeName:Ve.ZodFunction,...Ke(i)})}}class Zl extends it{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}Zl.create=(n,e)=>new Zl({getter:n,typeName:Ve.ZodLazy,...Ke(e)});class Yl extends it{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return fe(t,{received:t.data,code:ie.invalid_literal,expected:this._def.value}),Ge}return{status:"valid",value:e.data}}get value(){return this._def.value}}Yl.create=(n,e)=>new Yl({value:n,typeName:Ve.ZodLiteral,...Ke(e)});function yb(n,e){return new xs({values:n,typeName:Ve.ZodEnum,...Ke(e)})}class xs extends it{constructor(){super(...arguments),ol.set(this,void 0)}_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),i=this._def.values;return fe(t,{expected:_t.joinValues(i),received:t.parsedType,code:ie.invalid_type}),Ge}if(Zu(this,ol)||mb(this,ol,new Set(this._def.values)),!Zu(this,ol).has(e.data)){const t=this._getOrReturnCtx(e),i=this._def.values;return fe(t,{received:t.data,code:ie.invalid_enum_value,options:i}),Ge}return Bn(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return xs.create(e,{...this._def,...t})}exclude(e,t=this._def){return xs.create(this.options.filter(i=>!e.includes(i)),{...this._def,...t})}}ol=new WeakMap;xs.create=yb;class Kl extends it{constructor(){super(...arguments),ll.set(this,void 0)}_parse(e){const t=_t.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==Se.string&&i.parsedType!==Se.number){const r=_t.objectValues(t);return fe(i,{expected:_t.joinValues(r),received:i.parsedType,code:ie.invalid_type}),Ge}if(Zu(this,ll)||mb(this,ll,new Set(_t.getValidEnumValues(this._def.values))),!Zu(this,ll).has(e.data)){const r=_t.objectValues(t);return fe(i,{received:i.data,code:ie.invalid_enum_value,options:r}),Ge}return Bn(e.data)}get enum(){return this._def.values}}ll=new WeakMap;Kl.create=(n,e)=>new Kl({values:n,typeName:Ve.ZodNativeEnum,...Ke(e)});class Io extends it{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==Se.promise&&t.common.async===!1)return fe(t,{code:ie.invalid_type,expected:Se.promise,received:t.parsedType}),Ge;const i=t.parsedType===Se.promise?t.data:Promise.resolve(t.data);return Bn(i.then(r=>this._def.type.parseAsync(r,{path:t.path,errorMap:t.common.contextualErrorMap})))}}Io.create=(n,e)=>new Io({type:n,typeName:Ve.ZodPromise,...Ke(e)});class Ui extends it{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Ve.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:i}=this._processInputParams(e),r=this._def.effect||null,s={addIssue:a=>{fe(i,a),a.fatal?t.abort():t.dirty()},get path(){return i.path}};if(s.addIssue=s.addIssue.bind(s),r.type==="preprocess"){const a=r.transform(i.data,s);if(i.common.async)return Promise.resolve(a).then(async o=>{if(t.value==="aborted")return Ge;const l=await this._def.schema._parseAsync({data:o,path:i.path,parent:i});return l.status==="aborted"?Ge:l.status==="dirty"||t.value==="dirty"?Wa(l.value):l});{if(t.value==="aborted")return Ge;const o=this._def.schema._parseSync({data:a,path:i.path,parent:i});return o.status==="aborted"?Ge:o.status==="dirty"||t.value==="dirty"?Wa(o.value):o}}if(r.type==="refinement"){const a=o=>{const l=r.refinement(o,s);if(i.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return o};if(i.common.async===!1){const o=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Ge:(o.status==="dirty"&&t.dirty(),a(o.value),{status:t.value,value:o.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(o=>o.status==="aborted"?Ge:(o.status==="dirty"&&t.dirty(),a(o.value).then(()=>({status:t.value,value:o.value}))))}if(r.type==="transform")if(i.common.async===!1){const a=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!la(a))return a;const o=r.transform(a.value,s);if(o instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:o}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(a=>la(a)?Promise.resolve(r.transform(a.value,s)).then(o=>({status:t.value,value:o})):a);_t.assertNever(r)}}Ui.create=(n,e,t)=>new Ui({schema:n,typeName:Ve.ZodEffects,effect:e,...Ke(t)});Ui.createWithPreprocess=(n,e,t)=>new Ui({schema:e,effect:{type:"preprocess",transform:n},typeName:Ve.ZodEffects,...Ke(t)});class Ji extends it{_parse(e){return this._getType(e)===Se.undefined?Bn(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Ji.create=(n,e)=>new Ji({innerType:n,typeName:Ve.ZodOptional,...Ke(e)});class bs extends it{_parse(e){return this._getType(e)===Se.null?Bn(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}bs.create=(n,e)=>new bs({innerType:n,typeName:Ve.ZodNullable,...Ke(e)});class Jl extends it{_parse(e){const{ctx:t}=this._processInputParams(e);let i=t.data;return t.parsedType===Se.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}Jl.create=(n,e)=>new Jl({innerType:n,typeName:Ve.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Ke(e)});class Ql extends it{_parse(e){const{ctx:t}=this._processInputParams(e),i={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Vl(r)?r.then(s=>({status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new ci(i.common.issues)},input:i.data})})):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new ci(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Ql.create=(n,e)=>new Ql({innerType:n,typeName:Ve.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Ke(e)});class Qu extends it{_parse(e){if(this._getType(e)!==Se.nan){const i=this._getOrReturnCtx(e);return fe(i,{code:ie.invalid_type,expected:Se.nan,received:i.parsedType}),Ge}return{status:"valid",value:e.data}}}Qu.create=n=>new Qu({typeName:Ve.ZodNaN,...Ke(n)});const eU=Symbol("zod_brand");class $m extends it{_parse(e){const{ctx:t}=this._processInputParams(e),i=t.data;return this._def.type._parse({data:i,path:t.path,parent:t})}unwrap(){return this._def.type}}class gc extends it{_parse(e){const{status:t,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{const s=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return s.status==="aborted"?Ge:s.status==="dirty"?(t.dirty(),Wa(s.value)):this._def.out._parseAsync({data:s.value,path:i.path,parent:i})})();{const r=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return r.status==="aborted"?Ge:r.status==="dirty"?(t.dirty(),{status:"dirty",value:r.value}):this._def.out._parseSync({data:r.value,path:i.path,parent:i})}}static create(e,t){return new gc({in:e,out:t,typeName:Ve.ZodPipeline})}}class ec extends it{_parse(e){const t=this._def.innerType._parse(e),i=r=>(la(r)&&(r.value=Object.freeze(r.value)),r);return Vl(t)?t.then(r=>i(r)):i(t)}unwrap(){return this._def.innerType}}ec.create=(n,e)=>new ec({innerType:n,typeName:Ve.ZodReadonly,...Ke(e)});function xb(n,e={},t){return n?Po.create().superRefine((i,r)=>{var s,a;if(!n(i)){const o=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,l=(a=(s=o.fatal)!==null&&s!==void 0?s:t)!==null&&a!==void 0?a:!0,c=typeof o=="string"?{message:o}:o;r.addIssue({code:"custom",...c,fatal:l})}}):Po.create()}const tU={object:Gt.lazycreate};var Ve;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(Ve||(Ve={}));const nU=(n,e={message:`Input not instance of ${n.name}`})=>xb(t=>t instanceof n,e),bb=Li.create,Sb=vs.create,iU=Qu.create,rU=ys.create,Eb=Gl.create,sU=ca.create,aU=Yu.create,oU=Wl.create,lU=$l.create,cU=Po.create,uU=Js.create,fU=Br.create,hU=Ku.create,dU=Ni.create,pU=Gt.create,mU=Gt.strictCreate,gU=Xl.create,_U=Df.create,vU=jl.create,yU=rr.create,xU=ql.create,bU=Ju.create,SU=ua.create,EU=no.create,MU=Zl.create,TU=Yl.create,wU=xs.create,AU=Kl.create,RU=Io.create,Rv=Ui.create,CU=Ji.create,PU=bs.create,IU=Ui.createWithPreprocess,DU=gc.create,LU=()=>bb().optional(),NU=()=>Sb().optional(),OU=()=>Eb().optional(),UU={string:n=>Li.create({...n,coerce:!0}),number:n=>vs.create({...n,coerce:!0}),boolean:n=>Gl.create({...n,coerce:!0}),bigint:n=>ys.create({...n,coerce:!0}),date:n=>ca.create({...n,coerce:!0})},FU=Ge;var js=Object.freeze({__proto__:null,defaultErrorMap:Co,setErrorMap:IO,getErrorMap:ju,makeIssue:qu,EMPTY_PATH:DO,addIssueToContext:fe,ParseStatus:wn,INVALID:Ge,DIRTY:Wa,OK:Bn,isAborted:wp,isDirty:Ap,isValid:la,isAsync:Vl,get util(){return _t},get objectUtil(){return Tp},ZodParsedType:Se,getParsedType:xr,ZodType:it,datetimeRegex:vb,ZodString:Li,ZodNumber:vs,ZodBigInt:ys,ZodBoolean:Gl,ZodDate:ca,ZodSymbol:Yu,ZodUndefined:Wl,ZodNull:$l,ZodAny:Po,ZodUnknown:Js,ZodNever:Br,ZodVoid:Ku,ZodArray:Ni,ZodObject:Gt,ZodUnion:Xl,ZodDiscriminatedUnion:Df,ZodIntersection:jl,ZodTuple:rr,ZodRecord:ql,ZodMap:Ju,ZodSet:ua,ZodFunction:no,ZodLazy:Zl,ZodLiteral:Yl,ZodEnum:xs,ZodNativeEnum:Kl,ZodPromise:Io,ZodEffects:Ui,ZodTransformer:Ui,ZodOptional:Ji,ZodNullable:bs,ZodDefault:Jl,ZodCatch:Ql,ZodNaN:Qu,BRAND:eU,ZodBranded:$m,ZodPipeline:gc,ZodReadonly:ec,custom:xb,Schema:it,ZodSchema:it,late:tU,get ZodFirstPartyTypeKind(){return Ve},coerce:UU,any:cU,array:dU,bigint:rU,boolean:Eb,date:sU,discriminatedUnion:_U,effect:Rv,enum:wU,function:EU,instanceof:nU,intersection:vU,lazy:MU,literal:TU,map:bU,nan:iU,nativeEnum:AU,never:fU,null:lU,nullable:PU,number:Sb,object:pU,oboolean:OU,onumber:NU,optional:CU,ostring:LU,pipeline:DU,preprocess:IU,promise:RU,record:xU,set:SU,strictObject:mU,string:bb,symbol:aU,transformer:Rv,tuple:yU,undefined:oU,union:gU,unknown:uU,void:hU,NEVER:FU,ZodIssueCode:ie,quotelessJson:PO,ZodError:ci});class BU{static isSameDay(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}}const Wh="questionCounter",Mb=10,kU=js.object({count:js.number().int().min(0).max(10),updatedAt:js.string().refine(n=>{const e=new Date(n);return!isNaN(e.getTime())}).refine(n=>/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(n))});class ei{static init(){ei._sanitizeValue()}static _sanitizeValue(){const e=localStorage.getItem(Wh);if(e===null)return ei.reset();let t;try{t=JSON.parse(e),kU.parse(t)}catch{return ei.reset()}const i=new Date;return t.updatedAt=new Date(t.updatedAt),BU.isSameDay(t.updatedAt,i)?t:ei.reset()}static reset(){const e={count:0,updatedAt:new Date};return localStorage.setItem(Wh,JSON.stringify(e)),e}static get(){return ei._sanitizeValue()}static isIncrementable(){return ei.get().count<Mb}static increment(){if(!ei.isIncrementable())return;const t={count:ei.get().count+1,updatedAt:new Date};localStorage.setItem(Wh,JSON.stringify(t))}}var HU=pt("<input>");function Cp(n,e){on(e,!0);let t=qt(e,"autoFocus",3,!1),i=qt(e,"className",3,""),r=qt(e,"disabled",3,!1),s=qt(e,"placeholder",3,""),a=qt(e,"style",3,""),o=qt(e,"type",3,"text"),l=qt(e,"value",15),c;da(()=>{t()&&c.focus()});var u=HU();u.__keydown=function(...f){e.onkeydown?.apply(this,f)},lc(u,f=>c=f,()=>c),At(()=>{mf(u,`${"_pulse"+i()} svelte-1f0hx1d`),nn(u,"style",a()),nn(u,"type",o()),nn(u,"name",e.id),nn(u,"placeholder",s()),u.disabled=r()}),E0(u,l),Be(n,u),ln()}$p(["keydown"]);const Xm=di([]);function Pp(n,e="info",t=3e3){Xm.update(i=>[...i,{id:Date.now().toString(),message:n,type:e,duration:t}])}function zU(n){Xm.update(e=>e.filter(t=>t.id!==n))}var VU=ar('<path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z"></path><path d="M6.5 12h14.5"></path>',1);function Tb(n,e){let t=or(e,["$$slots","$$events","$$legacy"]);kr(n,Bi(()=>t,{children:(i,r)=>{var s=VU();Be(i,s)},$$slots:{default:!0}}))}var GU=pt('<div><div class="bubble svelte-atqylb"><!></div></div>'),WU=pt(" <!>",1),$U=pt('<div class="chatbot svelte-atqylb"><div class="messages svelte-atqylb"></div> <div class="input-box svelte-atqylb"><div class="input svelte-atqylb"><!> <!></div> <div class="questions-remaining svelte-atqylb"> </div></div></div>');function XU(n,e){on(e,!0);const t=Mi(),i=()=>Zt(Bo,"$_",t);let r=dn(Dt([])),s=dn(""),a=dn(""),o=si(p),l=dn(Dt([])),c=si(()=>`${he(s)}${he(l).join(`
`)}
`),u=dn(!1),f=dn(""),h=dn(!1),d;async function m(){const R=await fetch(`${Fm}CV-context.txt`);ze(s,Dt(await R.text()))}da(()=>(m(),he(r).length===0&&ze(r,Dt([{role:"bot",content:i()("chatbot-first-message")}])),d.addEventListener("wheel",_,{passive:!0}),()=>{d.removeEventListener("wheel",_)})),vl(()=>{if(!he(r).length)return;let R=0;const N=he(r)[he(r).length-1],{role:D,content:V}=N;if(D==="user"){ze(f,Dt(V)),ze(h,!1);return}const G=setInterval(()=>{ze(f,Dt(V.slice(0,R))),R++,R>V.length&&(ze(h,!1),clearInterval(G))},10)});async function g(){if(!he(s)||!he(a)||he(u))return;if(!ei.isIncrementable()){Pp(i()("chatbot-no-more-credits"),"info");return}Ur(Fr,"send-question",{message:he(a)}),ze(f,""),ze(u,!0),ze(h,!0),ze(l,Dt([...he(l),he(a)])),ze(r,Dt([...he(r),{role:"user",content:he(a)}])),await ag(),d.scrollTop=d.scrollHeight;let R;try{R=await CO(he(c))}catch(N){throw ze(u,!1),N}ze(l,Dt([...he(l),R])),ze(r,Dt([...he(r),{role:"bot",content:R}])),await ag(),d.scrollTop=d.scrollHeight,ze(a,""),ei.increment(),ze(u,!1)}function _(R){d.clientHeight!==d.scrollHeight&&R.stopPropagation()}function p(){he(a);const R=Mb-ei.get().count,N=R<=1?"question":"questions";let D=i()(`chatbot-questions-remaining-${R<=1?"1":"2"}`);return`${R} ${N} ${D}`}var x=$U(),v=Qe(x);jp(v,21,()=>he(r),oE,(R,N,D)=>{var V=GU(),G=Qe(V),B=Qe(G);{var Z=k=>{var K=Mu();At(()=>_n(K,he(N).content)),Be(k,K)},H=k=>{var K=Mu();At(()=>_n(K,he(f))),Be(k,K)};ns(B,k=>{D!==he(r).length-1?k(Z):k(H,!1)})}At(()=>mf(V,`message ${(he(N).role==="user"?"user":"")??""} svelte-atqylb`)),Be(R,V)}),lc(v,R=>d=R,()=>d);var y=vt(v,2),b=Qe(y),E=Qe(b),w=si(()=>i()("chatbot-input-example"));Cp(E,{id:"question",get placeholder(){return he(w)},get disabled(){return he(h)},onkeydown:R=>R.key==="Enter"&&g(),get value(){return he(a)},set value(R){ze(a,Dt(R))}});var P=vt(E,2);_s(P,{onclick:g,get disabled(){return he(u)},style:"width: 150px;",children:(R,N)=>{var D=WU(),V=ji(D);At(()=>_n(V,`${i()("chatbot-send-button")??""} `));var G=vt(V);Tb(G,{}),Be(R,D)},$$slots:{default:!0}});var S=vt(b,2),T=Qe(S);At(()=>_n(T,he(o))),Be(n,x),ln()}var jU=pt('<div class="main svelte-12xureg"><!> <div class="right-box svelte-12xureg"><!></div></div>');function qU(n){var e=jU(),t=Qe(e);RO(t,{});var i=vt(t,2),r=Qe(i);XU(r,{}),Be(n,e)}const ZU=3e3,tc=[{id:0,body:K2,position:[0,0,1.7]},{id:1,body:qU,position:[20,20,20]}];let Ar=Number(Ro.get()),Lf=di(tc[Ar]),Cv,ef=di(!1);function YU(){Ar!==tc.length-1&&(Ar+=1,Ro.set(Ar),Lf.set(tc[Ar]),wb())}function KU(){Ar!==0&&(Ar-=1,Ro.set(Ar),Lf.set(tc[Ar]),wb())}function wb(){ef.set(!0),clearTimeout(Cv),Cv=setTimeout(()=>ef.set(!1),ZU)}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var vi=Uint8Array,$a=Uint16Array,JU=Int32Array,Ab=new vi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Rb=new vi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),QU=new vi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Cb=function(n,e){for(var t=new $a(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new JU(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},Pb=Cb(Ab,2),Ib=Pb.b,eF=Pb.r;Ib[28]=258,eF[258]=28;var tF=Cb(Rb,0),nF=tF.b,Ip=new $a(32768);for(var Ft=0;Ft<32768;++Ft){var Xr=(Ft&43690)>>1|(Ft&21845)<<1;Xr=(Xr&52428)>>2|(Xr&13107)<<2,Xr=(Xr&61680)>>4|(Xr&3855)<<4,Ip[Ft]=((Xr&65280)>>8|(Xr&255)<<8)>>1}var _l=function(n,e,t){for(var i=n.length,r=0,s=new $a(e);r<i;++r)n[r]&&++s[n[r]-1];var a=new $a(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(t){o=new $a(1<<e);var l=15-e;for(r=0;r<i;++r)if(n[r])for(var c=r<<4|n[r],u=e-n[r],f=a[n[r]-1]++<<u,h=f|(1<<u)-1;f<=h;++f)o[Ip[f]>>l]=c}else for(o=new $a(i),r=0;r<i;++r)n[r]&&(o[r]=Ip[a[n[r]-1]++]>>15-n[r]);return o},_c=new vi(288);for(var Ft=0;Ft<144;++Ft)_c[Ft]=8;for(var Ft=144;Ft<256;++Ft)_c[Ft]=9;for(var Ft=256;Ft<280;++Ft)_c[Ft]=7;for(var Ft=280;Ft<288;++Ft)_c[Ft]=8;var Db=new vi(32);for(var Ft=0;Ft<32;++Ft)Db[Ft]=5;var iF=_l(_c,9,1),rF=_l(Db,5,1),$h=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},Ci=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},Xh=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},sF=function(n){return(n+7)/8|0},aF=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new vi(n.subarray(e,t))},oF=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Pi=function(n,e,t){var i=new Error(e||oF[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,Pi),!t)throw i;return i},lF=function(n,e,t,i){var r=n.length,s=0;if(!r||e.f&&!e.l)return t||new vi(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new vi(r*3));var c=function(mt){var at=t.length;if(mt>at){var se=new vi(Math.max(at*2,mt));se.set(t),t=se}},u=e.f||0,f=e.p||0,h=e.b||0,d=e.l,m=e.d,g=e.m,_=e.n,p=r*8;do{if(!d){u=Ci(n,f,1);var x=Ci(n,f+1,3);if(f+=3,x)if(x==1)d=iF,m=rF,g=9,_=5;else if(x==2){var E=Ci(n,f,31)+257,w=Ci(n,f+10,15)+4,P=E+Ci(n,f+5,31)+1;f+=14;for(var S=new vi(P),T=new vi(19),R=0;R<w;++R)T[QU[R]]=Ci(n,f+R*3,7);f+=w*3;for(var N=$h(T),D=(1<<N)-1,V=_l(T,N,1),R=0;R<P;){var G=V[Ci(n,f,D)];f+=G&15;var v=G>>4;if(v<16)S[R++]=v;else{var B=0,Z=0;for(v==16?(Z=3+Ci(n,f,3),f+=2,B=S[R-1]):v==17?(Z=3+Ci(n,f,7),f+=3):v==18&&(Z=11+Ci(n,f,127),f+=7);Z--;)S[R++]=B}}var H=S.subarray(0,E),k=S.subarray(E);g=$h(H),_=$h(k),d=_l(H,g,1),m=_l(k,_,1)}else Pi(1);else{var v=sF(f)+4,y=n[v-4]|n[v-3]<<8,b=v+y;if(b>r){l&&Pi(0);break}o&&c(h+y),t.set(n.subarray(v,b),h),e.b=h+=y,e.p=f=b*8,e.f=u;continue}if(f>p){l&&Pi(0);break}}o&&c(h+131072);for(var K=(1<<g)-1,te=(1<<_)-1,ge=f;;ge=f){var B=d[Xh(n,f)&K],Le=B>>4;if(f+=B&15,f>p){l&&Pi(0);break}if(B||Pi(2),Le<256)t[h++]=Le;else if(Le==256){ge=f,d=null;break}else{var W=Le-254;if(Le>264){var R=Le-257,ee=Ab[R];W=Ci(n,f,(1<<ee)-1)+Ib[R],f+=ee}var be=m[Xh(n,f)&te],le=be>>4;be||Pi(3),f+=be&15;var k=nF[le];if(le>3){var ee=Rb[le];k+=Xh(n,f)&(1<<ee)-1,f+=ee}if(f>p){l&&Pi(0);break}o&&c(h+131072);var Me=h+W;if(h<k){var et=s-k,Oe=Math.min(k,Me);for(et+h<0&&Pi(3);h<Oe;++h)t[h]=i[et+h]}for(;h<Me;++h)t[h]=t[h-k]}}e.l=d,e.p=ge,e.b=h,e.f=u,d&&(u=1,e.m=g,e.d=m,e.n=_)}while(!u);return h!=t.length&&a?aF(t,0,h):t.subarray(0,h)},cF=new vi(0),uF=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&Pi(6,"invalid zlib data"),(n[1]>>5&1)==1&&Pi(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function fF(n,e){return lF(n.subarray(uF(n),-4),{i:2},e,e)}var hF=typeof TextDecoder<"u"&&new TextDecoder,dF=0;try{hF.decode(cF,{stream:!0}),dF=1}catch{}function Lb(n,e,t){const i=t.length-n-1;if(e>=t[i])return i-1;if(e<=t[n])return n;let r=n,s=i,a=Math.floor((r+s)/2);for(;e<t[a]||e>=t[a+1];)e<t[a]?s=a:r=a,a=Math.floor((r+s)/2);return a}function pF(n,e,t,i){const r=[],s=[],a=[];r[0]=1;for(let o=1;o<=t;++o){s[o]=e-i[n+1-o],a[o]=i[n+o]-e;let l=0;for(let c=0;c<o;++c){const u=a[c+1],f=s[o-c],h=r[c]/(u+f);r[c]=l+u*h,l=f*h}r[o]=l}return r}function mF(n,e,t,i){const r=Lb(n,i,e),s=pF(r,i,n,e),a=new lt(0,0,0,0);for(let o=0;o<=n;++o){const l=t[r-n+o],c=s[o],u=l.w*c;a.x+=l.x*u,a.y+=l.y*u,a.z+=l.z*u,a.w+=l.w*c}return a}function gF(n,e,t,i,r){const s=[];for(let f=0;f<=t;++f)s[f]=0;const a=[];for(let f=0;f<=i;++f)a[f]=s.slice(0);const o=[];for(let f=0;f<=t;++f)o[f]=s.slice(0);o[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let f=1;f<=t;++f){l[f]=e-r[n+1-f],c[f]=r[n+f]-e;let h=0;for(let d=0;d<f;++d){const m=c[d+1],g=l[f-d];o[f][d]=m+g;const _=o[d][f-1]/o[f][d];o[d][f]=h+m*_,h=g*_}o[f][f]=h}for(let f=0;f<=t;++f)a[0][f]=o[f][t];for(let f=0;f<=t;++f){let h=0,d=1;const m=[];for(let g=0;g<=t;++g)m[g]=s.slice(0);m[0][0]=1;for(let g=1;g<=i;++g){let _=0;const p=f-g,x=t-g;f>=g&&(m[d][0]=m[h][0]/o[x+1][p],_=m[d][0]*o[p][x]);const v=p>=-1?1:-p,y=f-1<=x?g-1:t-f;for(let E=v;E<=y;++E)m[d][E]=(m[h][E]-m[h][E-1])/o[x+1][p+E],_+=m[d][E]*o[p+E][x];f<=x&&(m[d][g]=-m[h][g-1]/o[x+1][f],_+=m[d][g]*o[f][x]),a[g][f]=_;const b=h;h=d,d=b}}let u=t;for(let f=1;f<=i;++f){for(let h=0;h<=t;++h)a[f][h]*=u;u*=t-f}return a}function _F(n,e,t,i,r){const s=r<n?r:n,a=[],o=Lb(n,i,e),l=gF(o,i,n,s,e),c=[];for(let u=0;u<t.length;++u){const f=t[u].clone(),h=f.w;f.x*=h,f.y*=h,f.z*=h,c[u]=f}for(let u=0;u<=s;++u){const f=c[o-n].clone().multiplyScalar(l[u][0]);for(let h=1;h<=n;++h)f.add(c[o-n+h].clone().multiplyScalar(l[u][h]));a[u]=f}for(let u=s+1;u<=r+1;++u)a[u]=new lt(0,0,0);return a}function vF(n,e){let t=1;for(let r=2;r<=n;++r)t*=r;let i=1;for(let r=2;r<=e;++r)i*=r;for(let r=2;r<=n-e;++r)i*=r;return t/i}function yF(n){const e=n.length,t=[],i=[];for(let s=0;s<e;++s){const a=n[s];t[s]=new O(a.x,a.y,a.z),i[s]=a.w}const r=[];for(let s=0;s<e;++s){const a=t[s].clone();for(let o=1;o<=s;++o)a.sub(r[s-o].clone().multiplyScalar(vF(s,o)*i[o]));r[s]=a.divideScalar(i[0])}return r}function xF(n,e,t,i,r){const s=_F(n,e,t,i,r);return yF(s)}class bF extends Yw{constructor(e,t,i,r,s){super();const a=t?t.length-1:0,o=i?i.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=s||a;for(let l=0;l<o;++l){const c=i[l];this.controlPoints[l]=new lt(c.x,c.y,c.z,c.w)}}getPoint(e,t=new O){const i=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=mF(this.degree,this.knots,this.controlPoints,r);return s.w!==1&&s.divideScalar(s.w),i.set(s.x,s.y,s.z)}getTangent(e,t=new O){const i=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=xF(this.degree,this.knots,this.controlPoints,r,1);return i.copy(s[1]).normalize(),i}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new lt(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let rt,Kt,In;class SF extends ra{constructor(e){super(e)}load(e,t,i,r){const s=this,a=s.path===""?U1.extractUrlBase(e):s.path,o=new P1(this.manager);o.setPath(s.path),o.setResponseType("arraybuffer"),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(l){try{t(s.parse(l,a))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e,t){if(RF(e))rt=new AF().parse(e);else{const r=Ub(e);if(!CF(r))throw new Error("THREE.FBXLoader: Unknown format.");if(Iv(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Iv(r));rt=new wF().parse(r)}const i=new xy(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new EF(i,this.manager).parse(rt)}}class EF{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Kt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),i=this.parseMaterials(t),r=this.parseDeformers(),s=new MF().parse(r);return this.parseScene(r,s,i),In}parseConnections(){const e=new Map;return"Connections"in rt&&rt.Connections.connections.forEach(function(i){const r=i[0],s=i[1],a=i[2];e.has(r)||e.set(r,{parents:[],children:[]});const o={ID:s,relationship:a};e.get(r).parents.push(o),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:r,relationship:a};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in rt.Objects){const i=rt.Objects.Video;for(const r in i){const s=i[r],a=parseInt(r);if(e[a]=s.RelativeFilename||s.Filename,"Content"in s){const o=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(o||l){const c=this.parseImage(i[r]);t[s.RelativeFilename||s.Filename]=c}}}}for(const i in e){const r=e[i];t[r]!==void 0?e[i]=t[r]:e[i]=e[i].split("\\").pop()}return e}parseImage(e){const t=e.Content,i=e.RelativeFilename||e.Filename,r=i.slice(i.lastIndexOf(".")+1).toLowerCase();let s;switch(r){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",i),s="image/tga";break;case"webp":s="image/webp";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const a=new Uint8Array(t);return window.URL.createObjectURL(new Blob([a],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in rt.Objects){const i=rt.Objects.Texture;for(const r in i){const s=this.parseTexture(i[r],e);t.set(parseInt(r),s)}}return t}parseTexture(e,t){const i=this.loadTexture(e,t);i.ID=e.id,i.name=e.attrName;const r=e.WrapModeU,s=e.WrapModeV,a=r!==void 0?r.value:0,o=s!==void 0?s.value:0;if(i.wrapS=a===0?ea:Tr,i.wrapT=o===0?ea:Tr,"Scaling"in e){const l=e.Scaling.value;i.repeat.x=l[0],i.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;i.offset.x=l[0],i.offset.y=l[1]}return i}loadTexture(e,t){const i=e.FileName.split(".").pop().toLowerCase();let r=this.manager.getHandler(`.${i}`);r===null&&(r=this.textureLoader);const s=r.path;s||r.setPath(this.textureLoader.path);const a=Kt.get(e.id).children;let o;if(a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(o=t[a[0].ID],(o.indexOf("blob:")===0||o.indexOf("data:")===0)&&r.setPath(void 0)),o===void 0)return console.warn("FBXLoader: Undefined filename, creating placeholder texture."),new vn;const l=r.load(o);return r.setPath(s),l}parseMaterials(e){const t=new Map;if("Material"in rt.Objects){const i=rt.Objects.Material;for(const r in i){const s=this.parseMaterial(i[r],e);s!==null&&t.set(parseInt(r),s)}}return t}parseMaterial(e,t){const i=e.id,r=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!Kt.has(i))return null;const a=this.parseParameters(e,t,i);let o;switch(s.toLowerCase()){case"phong":o=new jc;break;case"lambert":o=new m1;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),o=new jc;break}return o.setValues(a),o.name=r,o}parseParameters(e,t,i){const r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=nt.colorSpaceToWorking(new Xe().fromArray(e.Diffuse.value),Ot):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=nt.colorSpaceToWorking(new Xe().fromArray(e.DiffuseColor.value),Ot)),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=nt.colorSpaceToWorking(new Xe().fromArray(e.Emissive.value),Ot):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=nt.colorSpaceToWorking(new Xe().fromArray(e.EmissiveColor.value),Ot)),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),r.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(r.opacity===1||r.opacity===0)&&(r.opacity=e.Opacity?parseFloat(e.Opacity.value):null,r.opacity===null&&(r.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=nt.colorSpaceToWorking(new Xe().fromArray(e.Specular.value),Ot):e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=nt.colorSpaceToWorking(new Xe().fromArray(e.SpecularColor.value),Ot));const s=this;return Kt.get(i).children.forEach(function(a){const o=a.relationship;switch(o){case"Bump":r.bumpMap=s.getTexture(t,a.ID);break;case"Maya|TEX_ao_map":r.aoMap=s.getTexture(t,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=s.getTexture(t,a.ID),r.map!==void 0&&(r.map.colorSpace=Ot);break;case"DisplacementColor":r.displacementMap=s.getTexture(t,a.ID);break;case"EmissiveColor":r.emissiveMap=s.getTexture(t,a.ID),r.emissiveMap!==void 0&&(r.emissiveMap.colorSpace=Ot);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=s.getTexture(t,a.ID);break;case"ReflectionColor":r.envMap=s.getTexture(t,a.ID),r.envMap!==void 0&&(r.envMap.mapping=Cu,r.envMap.colorSpace=Ot);break;case"SpecularColor":r.specularMap=s.getTexture(t,a.ID),r.specularMap!==void 0&&(r.specularMap.colorSpace=Ot);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=s.getTexture(t,a.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),r}getTexture(e,t){return"LayeredTexture"in rt.Objects&&t in rt.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Kt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in rt.Objects){const i=rt.Objects.Deformer;for(const r in i){const s=i[r],a=Kt.get(parseInt(r));if(s.attrType==="Skin"){const o=this.parseSkeleton(a,i);o.ID=r,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=a.parents[0].ID,e[r]=o}else if(s.attrType==="BlendShape"){const o={id:r};o.rawTargets=this.parseMorphTargets(a,i),o.id=r,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const i=[];return e.children.forEach(function(r){const s=t[r.ID];if(s.attrType!=="Cluster")return;const a={ID:r.ID,indices:[],weights:[],transformLink:new Ue().fromArray(s.TransformLink.a)};"Indexes"in s&&(a.indices=s.Indexes.a,a.weights=s.Weights.a),i.push(a)}),{rawBones:i,bones:[]}}parseMorphTargets(e,t){const i=[];for(let r=0;r<e.children.length;r++){const s=e.children[r],a=t[s.ID],o={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;o.geoID=Kt.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,i.push(o)}return i}parseScene(e,t,i){In=new Ws;const r=this.parseModels(e.skeletons,t,i),s=rt.Objects.Model,a=this;r.forEach(function(l){const c=s[l.ID];a.setLookAtProperties(l,c),Kt.get(l.ID).parents.forEach(function(f){const h=r.get(f.ID);h!==void 0&&h.add(l)}),l.parent===null&&In.add(l)}),this.bindSkeleton(e.skeletons,t,r),this.addGlobalSceneSettings(),In.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Ob(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const o=new TF().parse();In.children.length===1&&In.children[0].isGroup&&(In.children[0].animations=o,In=In.children[0]),In.animations=o}parseModels(e,t,i){const r=new Map,s=rt.Objects.Model;for(const a in s){const o=parseInt(a),l=s[a],c=Kt.get(o);let u=this.buildSkeleton(c,e,o,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,i);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new Yd;break;case"Null":default:u=new Ws;break}u.name=l.attrName?bt.sanitizeNodeName(l.attrName):"",u.userData.originalName=l.attrName,u.ID=o}this.getTransformData(u,l),r.set(o,u)}return r}buildSkeleton(e,t,i,r){let s=null;return e.parents.forEach(function(a){for(const o in t){const l=t[o];l.rawBones.forEach(function(c,u){if(c.ID===a.ID){const f=s;s=new Yd,s.matrixWorld.copy(c.transformLink),s.name=r?bt.sanitizeNodeName(r):"",s.userData.originalName=r,s.ID=i,l.bones[u]=s,f!==null&&s.add(f)}})}}),s}createCamera(e){let t,i;if(e.children.forEach(function(r){const s=rt.Objects.NodeAttribute[r.ID];s!==void 0&&(i=s)}),i===void 0)t=new zt;else{let r=0;i.CameraProjectionType!==void 0&&i.CameraProjectionType.value===1&&(r=1);let s=1;i.NearPlane!==void 0&&(s=i.NearPlane.value/1e3);let a=1e3;i.FarPlane!==void 0&&(a=i.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;i.AspectWidth!==void 0&&i.AspectHeight!==void 0&&(o=i.AspectWidth.value,l=i.AspectHeight.value);const c=o/l;let u=45;i.FieldOfView!==void 0&&(u=i.FieldOfView.value);const f=i.FocalLength?i.FocalLength.value:null;switch(r){case 0:t=new Nn(u,c,s,a),f!==null&&t.setFocalLength(f);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new zt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new zt;break}}return t}createLight(e){let t,i;if(e.children.forEach(function(r){const s=rt.Objects.NodeAttribute[r.ID];s!==void 0&&(i=s)}),i===void 0)t=new zt;else{let r;i.LightType===void 0?r=0:r=i.LightType.value;let s=16777215;i.Color!==void 0&&(s=nt.colorSpaceToWorking(new Xe().fromArray(i.Color.value),Ot));let a=i.Intensity===void 0?1:i.Intensity.value/100;i.CastLightOnObject!==void 0&&i.CastLightOnObject.value===0&&(a=0);let o=0;i.FarAttenuationEnd!==void 0&&(i.EnableFarAttenuation!==void 0&&i.EnableFarAttenuation.value===0?o=0:o=i.FarAttenuationEnd.value);const l=1;switch(r){case 0:t=new __(s,a,o,l);break;case 1:t=new O1(s,a);break;case 2:let c=Math.PI/3;i.InnerAngle!==void 0&&(c=Ln.degToRad(i.InnerAngle.value));let u=0;i.OuterAngle!==void 0&&(u=Ln.degToRad(i.OuterAngle.value),u=Math.max(u,1)),t=new mu(s,a,o,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+i.LightType.value+", defaulting to a PointLight."),t=new __(s,a);break}i.CastShadows!==void 0&&i.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,i){let r,s=null,a=null;const o=[];if(e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),i.has(l.ID)&&o.push(i.get(l.ID))}),o.length>1?a=o:o.length>0?a=o[0]:(a=new jc({name:ra.DEFAULT_MATERIAL_NAME,color:13421772}),o.push(a)),"color"in s.attributes&&o.forEach(function(l){l.vertexColors=!0}),s.groups.length>0){let l=!1;for(let c=0,u=s.groups.length;c<u;c++){const f=s.groups[c];(f.materialIndex<0||f.materialIndex>=o.length)&&(f.materialIndex=o.length,l=!0)}if(l){const c=new jc;o.push(c)}}return s.FBX_Deformer?(r=new Gw(s,a),r.normalizeSkinWeights()):r=new ii(s,a),r}createCurve(e,t){const i=e.children.reduce(function(s,a){return t.has(a.ID)&&(s=t.get(a.ID)),s},null),r=new hy({name:ra.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Zw(i,r)}getTransformData(e,t){const i={};"InheritType"in t&&(i.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?i.eulerOrder=nc(t.RotationOrder.value):i.eulerOrder=nc(0),"Lcl_Translation"in t&&(i.translation=t.Lcl_Translation.value),"PreRotation"in t&&(i.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(i.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(i.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(i.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(i.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(i.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(i.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(i.rotationPivot=t.RotationPivot.value),e.userData.transformData=i}setLookAtProperties(e,t){"LookAtProperty"in t&&Kt.get(e.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){const s=rt.Objects.Model[r.ID];if("Lcl_Translation"in s){const a=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(a),In.add(e.target)):e.lookAt(new O().fromArray(a))}}})}bindSkeleton(e,t,i){const r=this.parsePoseNodes();for(const s in e){const a=e[s];Kt.get(parseInt(a.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;Kt.get(c).parents.forEach(function(f){i.has(f.ID)&&i.get(f.ID).bind(new hm(a.bones),r[f.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in rt.Objects){const t=rt.Objects.Pose;for(const i in t)if(t[i].attrType==="BindPose"&&t[i].NbPoseNodes>0){const r=t[i].PoseNode;Array.isArray(r)?r.forEach(function(s){e[s.Node]=new Ue().fromArray(s.Matrix.a)}):e[r.Node]=new Ue().fromArray(r.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in rt){if("AmbientColor"in rt.GlobalSettings){const e=rt.GlobalSettings.AmbientColor.value,t=e[0],i=e[1],r=e[2];if(t!==0||i!==0||r!==0){const s=new Xe().setRGB(t,i,r,Ot);In.add(new Sy(s,1))}}"UnitScaleFactor"in rt.GlobalSettings&&(In.userData.unitScaleFactor=rt.GlobalSettings.UnitScaleFactor.value)}}}class MF{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in rt.Objects){const i=rt.Objects.Geometry;for(const r in i){const s=Kt.get(parseInt(r)),a=this.parseGeometry(s,i[r],e);t.set(parseInt(r),a)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,i){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,i);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,i){const r=i.skeletons,s=[],a=e.parents.map(function(f){return rt.Objects.Model[f.ID]});if(a.length===0)return;const o=e.children.reduce(function(f,h){return r[h.ID]!==void 0&&(f=r[h.ID]),f},null);e.children.forEach(function(f){i.morphTargets[f.ID]!==void 0&&s.push(i.morphTargets[f.ID])});const l=a[0],c={};"RotationOrder"in l&&(c.eulerOrder=nc(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=Ob(c);return this.genGeometry(t,o,s,u)}genGeometry(e,t,i,r){const s=new Si;e.attrName&&(s.name=e.attrName);const a=this.parseGeoNode(e,t),o=this.genBuffers(a),l=new mn(o.vertex,3);if(l.applyMatrix4(r),s.setAttribute("position",l),o.colors.length>0&&s.setAttribute("color",new mn(o.colors,3)),t&&(s.setAttribute("skinIndex",new fm(o.weightsIndices,4)),s.setAttribute("skinWeight",new mn(o.vertexWeights,4)),s.FBX_Deformer=t),o.normal.length>0){const c=new Ye().getNormalMatrix(r),u=new mn(o.normal,3);u.applyNormalMatrix(c),s.setAttribute("normal",u)}if(o.uvs.forEach(function(c,u){const f=u===0?"uv":`uv${u}`;s.setAttribute(f,new mn(o.uvs[u],2))}),a.material&&a.material.mappingType!=="AllSame"){let c=o.materialIndex[0],u=0;if(o.materialIndex.forEach(function(f,h){f!==c&&(s.addGroup(u,h-u,c),c=f,u=h)}),s.groups.length>0){const f=s.groups[s.groups.length-1],h=f.start+f.count;h!==o.materialIndex.length&&s.addGroup(h,o.materialIndex.length-h,c)}s.groups.length===0&&s.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(s,e,i,r),s}parseGeoNode(e,t){const i={};if(i.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],i.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&e.LayerElementColor.Color&&(i.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(i.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(i.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){i.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&i.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return i.weightTable={},t!==null&&(i.skeleton=t,t.rawBones.forEach(function(r,s){r.indices.forEach(function(a,o){i.weightTable[a]===void 0&&(i.weightTable[a]=[]),i.weightTable[a].push({id:s,weight:r.weights[o]})})})),i}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let i=0,r=0,s=!1,a=[],o=[],l=[],c=[],u=[],f=[];const h=this;return e.vertexIndices.forEach(function(d,m){let g,_=!1;d<0&&(d=d^-1,_=!0);let p=[],x=[];if(a.push(d*3,d*3+1,d*3+2),e.color){const v=tu(m,i,d,e.color);l.push(v[0],v[1],v[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(v){x.push(v.weight),p.push(v.id)}),x.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const v=[0,0,0,0],y=[0,0,0,0];x.forEach(function(b,E){let w=b,P=p[E];y.forEach(function(S,T,R){if(w>S){R[T]=w,w=S;const N=v[T];v[T]=P,P=N}})}),p=v,x=y}for(;x.length<4;)x.push(0),p.push(0);for(let v=0;v<4;++v)u.push(x[v]),f.push(p[v])}if(e.normal){const v=tu(m,i,d,e.normal);o.push(v[0],v[1],v[2])}e.material&&e.material.mappingType!=="AllSame"&&(g=tu(m,i,d,e.material)[0],g<0&&(h.negativeMaterialIndices=!0,g=0)),e.uv&&e.uv.forEach(function(v,y){const b=tu(m,i,d,v);c[y]===void 0&&(c[y]=[]),c[y].push(b[0]),c[y].push(b[1])}),r++,_&&(h.genFace(t,e,a,g,o,l,c,u,f,r),i++,r=0,a=[],o=[],l=[],c=[],u=[],f=[])}),t}getNormalNewell(e){const t=new O(0,0,0);for(let i=0;i<e.length;i++){const r=e[i],s=e[(i+1)%e.length];t.x+=(r.y-s.y)*(r.z+s.z),t.y+=(r.z-s.z)*(r.x+s.x),t.z+=(r.x-s.x)*(r.y+s.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),r=(Math.abs(t.z)>.5?new O(0,1,0):new O(0,0,1)).cross(t).normalize(),s=t.clone().cross(r).normalize();return{normal:t,tangent:r,bitangent:s}}flattenVertex(e,t,i){return new dt(e.dot(t),e.dot(i))}genFace(e,t,i,r,s,a,o,l,c,u){let f;if(u>3){const h=[],d=t.baseVertexPositions||t.vertexPositions;for(let p=0;p<i.length;p+=3)h.push(new O(d[i[p]],d[i[p+1]],d[i[p+2]]));const{tangent:m,bitangent:g}=this.getNormalTangentAndBitangent(h),_=[];for(const p of h)_.push(this.flattenVertex(p,m,g));f=pm.triangulateShape(_,[])}else f=[[0,1,2]];for(const[h,d,m]of f)e.vertex.push(t.vertexPositions[i[h*3]]),e.vertex.push(t.vertexPositions[i[h*3+1]]),e.vertex.push(t.vertexPositions[i[h*3+2]]),e.vertex.push(t.vertexPositions[i[d*3]]),e.vertex.push(t.vertexPositions[i[d*3+1]]),e.vertex.push(t.vertexPositions[i[d*3+2]]),e.vertex.push(t.vertexPositions[i[m*3]]),e.vertex.push(t.vertexPositions[i[m*3+1]]),e.vertex.push(t.vertexPositions[i[m*3+2]]),t.skeleton&&(e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[m*4]),e.vertexWeights.push(l[m*4+1]),e.vertexWeights.push(l[m*4+2]),e.vertexWeights.push(l[m*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[m*4]),e.weightsIndices.push(c[m*4+1]),e.weightsIndices.push(c[m*4+2]),e.weightsIndices.push(c[m*4+3])),t.color&&(e.colors.push(a[h*3]),e.colors.push(a[h*3+1]),e.colors.push(a[h*3+2]),e.colors.push(a[d*3]),e.colors.push(a[d*3+1]),e.colors.push(a[d*3+2]),e.colors.push(a[m*3]),e.colors.push(a[m*3+1]),e.colors.push(a[m*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(s[h*3]),e.normal.push(s[h*3+1]),e.normal.push(s[h*3+2]),e.normal.push(s[d*3]),e.normal.push(s[d*3+1]),e.normal.push(s[d*3+2]),e.normal.push(s[m*3]),e.normal.push(s[m*3+1]),e.normal.push(s[m*3+2])),t.uv&&t.uv.forEach(function(g,_){e.uvs[_]===void 0&&(e.uvs[_]=[]),e.uvs[_].push(o[_][h*2]),e.uvs[_].push(o[_][h*2+1]),e.uvs[_].push(o[_][d*2]),e.uvs[_].push(o[_][d*2+1]),e.uvs[_].push(o[_][m*2]),e.uvs[_].push(o[_][m*2+1])})}addMorphTargets(e,t,i,r){if(i.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;i.forEach(function(a){a.rawTargets.forEach(function(o){const l=rt.Objects.Geometry[o.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,r,o.name)})})}genMorphGeometry(e,t,i,r,s){const a=t.Vertices!==void 0?t.Vertices.a:[],o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=i.Vertices!==void 0?i.Vertices.a:[],c=i.Indexes!==void 0?i.Indexes.a:[],u=e.attributes.position.count*3,f=new Float32Array(u);for(let g=0;g<c.length;g++){const _=c[g]*3;f[_]=l[g*3],f[_+1]=l[g*3+1],f[_+2]=l[g*3+2]}const h={vertexIndices:o,vertexPositions:f,baseVertexPositions:a},d=this.genBuffers(h),m=new mn(d.vertex,3);m.name=s||i.attrName,m.applyMatrix4(r),e.morphAttributes.position.push(m)}parseNormals(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Normals.a;let s=[];return i==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:s,mappingType:t,referenceType:i}}parseUVs(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.UV.a;let s=[];return i==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:r,indices:s,mappingType:t,referenceType:i}}parseVertexColors(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,r=e.Colors.a;let s=[];i==="IndexToDirect"&&(s=e.ColorIndex.a);for(let a=0,o=new Xe;a<r.length;a+=4)o.fromArray(r,a),nt.colorSpaceToWorking(o,Ot),o.toArray(r,a);return{dataSize:4,buffer:r,indices:s,mappingType:t,referenceType:i}}parseMaterialIndices(e){const t=e.MappingInformationType,i=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:i};const r=e.Materials.a,s=[];for(let a=0;a<r.length;++a)s.push(a);return{dataSize:1,buffer:r,indices:s,mappingType:t,referenceType:i}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Si;const i=t-1,r=e.KnotVector.a,s=[],a=e.Points.a;for(let f=0,h=a.length;f<h;f+=4)s.push(new lt().fromArray(a,f));let o,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){o=i,l=r.length-1-o;for(let f=0;f<i;++f)s.push(s[f])}const u=new bF(i,r,s,o,l).getPoints(s.length*12);return new Si().setFromPoints(u)}}class TF{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const i in t){const r=t[i],s=this.addClip(r);e.push(s)}return e}parseClips(){if(rt.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=rt.Objects.AnimationCurveNode,t=new Map;for(const i in e){const r=e[i];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:r.id,attr:r.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=rt.Objects.AnimationCurve;for(const i in t){const r={id:t[i].id,times:t[i].KeyTime.a.map(PF),values:t[i].KeyValueFloat.a},s=Kt.get(r.id);if(s!==void 0){const a=s.parents[0].ID,o=s.parents[0].relationship;o.match(/X/)?e.get(a).curves.x=r:o.match(/Y/)?e.get(a).curves.y=r:o.match(/Z/)?e.get(a).curves.z=r:o.match(/DeformPercent/)&&e.has(a)&&(e.get(a).curves.morph=r)}}}parseAnimationLayers(e){const t=rt.Objects.AnimationLayer,i=new Map;for(const r in t){const s=[],a=Kt.get(parseInt(r));a!==void 0&&(a.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(s[c]===void 0){const f=Kt.get(l.ID).parents.filter(function(h){return h.relationship!==void 0})[0].ID;if(f!==void 0){const h=rt.Objects.Model[f.toString()];if(h===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:h.attrName?bt.sanitizeNodeName(h.attrName):"",ID:h.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};In.traverse(function(m){m.ID===h.id&&(d.transform=m.matrix,m.userData.transformData&&(d.eulerOrder=m.userData.transformData.eulerOrder))}),d.transform||(d.transform=new Ue),"PreRotation"in h&&(d.preRotation=h.PreRotation.value),"PostRotation"in h&&(d.postRotation=h.PostRotation.value),s[c]=d}}s[c]&&(s[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(s[c]===void 0){const f=Kt.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,h=Kt.get(f).parents[0].ID,d=Kt.get(h).parents[0].ID,m=Kt.get(d).parents[0].ID,g=rt.Objects.Model[m],_={modelName:g.attrName?bt.sanitizeNodeName(g.attrName):"",morphName:rt.Objects.Deformer[f].attrName};s[c]=_}s[c][u.attr]=u}}}),i.set(parseInt(r),s))}return i}parseAnimStacks(e){const t=rt.Objects.AnimationStack,i={};for(const r in t){const s=Kt.get(parseInt(r)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=e.get(s[0].ID);i[r]={name:t[r].attrName,layer:a}}return i}addClip(e){let t=[];const i=this;return e.layer.forEach(function(r){t=t.concat(i.generateTracks(r))}),new M1(e.name,-1,t)}generateTracks(e){const t=[];let i=new O,r=new O;if(e.transform&&e.transform.decompose(i,new Hn,r),i=i.toArray(),r=r.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.T.curves,i,"position");s!==void 0&&t.push(s)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const s=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);s!==void 0&&t.push(s)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.S.curves,r,"scale");s!==void 0&&t.push(s)}if(e.DeformPercent!==void 0){const s=this.generateMorphTrack(e);s!==void 0&&t.push(s)}return t}generateVectorTrack(e,t,i,r){const s=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(s,t,i);return new Ll(e+"."+r,s,a)}generateRotationTrack(e,t,i,r,s){let a,o;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const h=this.interpolateRotations(t.x,t.y,t.z,s);a=h[0],o=h[1]}const l=nc(0);i!==void 0&&(i=i.map(Ln.degToRad),i.push(l),i=new un().fromArray(i),i=new Hn().setFromEuler(i)),r!==void 0&&(r=r.map(Ln.degToRad),r.push(l),r=new un().fromArray(r),r=new Hn().setFromEuler(r).invert());const c=new Hn,u=new un,f=[];if(!o||!a)return new xo(e+".quaternion",[0],[0]);for(let h=0;h<o.length;h+=3)u.set(o[h],o[h+1],o[h+2],s),c.setFromEuler(u),i!==void 0&&c.premultiply(i),r!==void 0&&c.multiply(r),h>2&&new Hn().fromArray(f,(h-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(f,h/3*4);return new xo(e+".quaternion",a,f)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,i=t.values.map(function(s){return s/100}),r=In.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Dl(e.modelName+".morphTargetInfluences["+r+"]",t.times,i)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(i,r){return i-r}),t.length>1){let i=1,r=t[0];for(let s=1;s<t.length;s++){const a=t[s];a!==r&&(t[i]=a,r=a,i++)}t=t.slice(0,i)}return t}getKeyframeTrackValues(e,t,i){const r=i,s=[];let a=-1,o=-1,l=-1;return e.forEach(function(c){if(t.x&&(a=t.x.times.indexOf(c)),t.y&&(o=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),a!==-1){const u=t.x.values[a];s.push(u),r[0]=u}else s.push(r[0]);if(o!==-1){const u=t.y.values[o];s.push(u),r[1]=u}else s.push(r[1]);if(l!==-1){const u=t.z.values[l];s.push(u),r[2]=u}else s.push(r[2])}),s}interpolateRotations(e,t,i,r){const s=[],a=[];s.push(e.times[0]),a.push(Ln.degToRad(e.values[0])),a.push(Ln.degToRad(t.values[0])),a.push(Ln.degToRad(i.values[0]));for(let o=1;o<e.values.length;o++){const l=[e.values[o-1],t.values[o-1],i.values[o-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(Ln.degToRad),u=[e.values[o],t.values[o],i.values[o]];if(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))continue;const f=u.map(Ln.degToRad),h=[u[0]-l[0],u[1]-l[1],u[2]-l[2]],d=[Math.abs(h[0]),Math.abs(h[1]),Math.abs(h[2])];if(d[0]>=180||d[1]>=180||d[2]>=180){const g=Math.max(...d)/180,_=new un(...c,r),p=new un(...f,r),x=new Hn().setFromEuler(_),v=new Hn().setFromEuler(p);x.dot(v)&&v.set(-v.x,-v.y,-v.z,-v.w);const y=e.times[o-1],b=e.times[o]-y,E=new Hn,w=new un;for(let P=0;P<1;P+=1/g)E.copy(x.clone().slerp(v.clone(),P)),s.push(y+P*b),w.setFromQuaternion(E,r),a.push(w.x),a.push(w.y),a.push(w.z)}else s.push(e.times[o]),a.push(Ln.degToRad(e.values[o])),a.push(Ln.degToRad(t.values[o])),a.push(Ln.degToRad(i.values[o]))}return[s,a]}}class wF{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Nb,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,i=e.split(/[\r\n]+/);return i.forEach(function(r,s){const a=r.match(/^[\s\t]*;/),o=r.match(/^[\s\t]*$/);if(a||o)return;const l=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=r.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(r,l):c?t.parseNodeProperty(r,c,i[++s]):u?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,t){const i=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:i},a=this.parseNodeAttr(r),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(i,s):i in o?(i==="PoseNode"?o.PoseNode.push(s):o[i].id!==void 0&&(o[i]={},o[i][o[i].id]=o[i]),a.id!==""&&(o[i][a.id]=s)):typeof a.id=="number"?(o[i]={},o[i][a.id]=s):i!=="Properties70"&&(i==="PoseNode"?o[i]=[s]:o[i]=s),typeof a.id=="number"&&(s.id=a.id),a.name!==""&&(s.attrName=a.name),a.type!==""&&(s.attrType=a.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let i="",r="";return e.length>1&&(i=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:i,type:r}}parseNodeProperty(e,t,i){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&s===","&&(s=i.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(e,r,s);return}if(r==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let f=s.split(",").slice(3);f=f.map(function(h){return h.trim().replace(/^"/,"")}),r="connections",s=[c,u],DF(s,f),a[r]===void 0&&(a[r]=[])}r==="Node"&&(a.id=s),r in a&&Array.isArray(a[r])?a[r].push(s):r!=="a"?a[r]=s:a.a=s,this.setCurrentProp(a,r),r==="a"&&s.slice(-1)!==","&&(a.a=qh(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=qh(t.a))}parseNodeSpecialProperty(e,t,i){const r=i.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=r[0],a=r[1],o=r[2],l=r[3];let c=r[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=qh(c);break}this.getPrevNode()[s]={type:a,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class AF{parse(e){const t=new Pv(e);t.skip(23);const i=t.getUint32();if(i<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+i);const r=new Nb;for(;!this.endOfContent(t);){const s=this.parseNode(t,i);s!==null&&r.add(s.name,s)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const i={},r=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const a=e.getUint8(),o=e.getString(a);if(r===0)return null;const l=[];for(let h=0;h<s;h++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",f=l.length>2?l[2]:"";for(i.singleProperty=s===1&&e.getOffset()===r;r>e.getOffset();){const h=this.parseNode(e,t);h!==null&&this.parseSubNode(o,i,h)}return i.propertyList=l,typeof c=="number"&&(i.id=c),u!==""&&(i.attrName=u),f!==""&&(i.attrType=f),o!==""&&(i.name=o),i}parseSubNode(e,t,i){if(i.singleProperty===!0){const r=i.propertyList[0];Array.isArray(r)?(t[i.name]=i,i.a=r):t[i.name]=r}else if(e==="Connections"&&i.name==="C"){const r=[];i.propertyList.forEach(function(s,a){a!==0&&r.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(i.name==="Properties70")Object.keys(i).forEach(function(s){t[s]=i[s]});else if(e==="Properties70"&&i.name==="P"){let r=i.propertyList[0],s=i.propertyList[1];const a=i.propertyList[2],o=i.propertyList[3];let l;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[i.propertyList[4],i.propertyList[5],i.propertyList[6]]:l=i.propertyList[4],t[r]={type:s,type2:a,flag:o,value:l}}else t[i.name]===void 0?typeof i.id=="number"?(t[i.name]={},t[i.name][i.id]=i):t[i.name]=i:i.name==="PoseNode"?(Array.isArray(t[i.name])||(t[i.name]=[t[i.name]]),t[i.name].push(i)):t[i.name][i.id]===void 0&&(t[i.name][i.id]=i)}parseProperty(e){const t=e.getString(1);let i;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return i=e.getUint32(),e.getArrayBuffer(i);case"S":return i=e.getUint32(),e.getString(i);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const r=e.getUint32(),s=e.getUint32(),a=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}const o=fF(new Uint8Array(e.getArrayBuffer(a))),l=new Pv(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(r);case"d":return l.getFloat64Array(r);case"f":return l.getFloat32Array(r);case"i":return l.getInt32Array(r);case"l":return l.getInt64Array(r)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Pv{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let i=0;i<e;i++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let i=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const r=i.indexOf(0);return r>=0&&(i=new Uint8Array(this.dv.buffer,t,r)),this._textDecoder.decode(i)}}class Nb{add(e,t){this[e]=t}}function RF(n){const e="Kaydara FBX Binary  \0";return n.byteLength>=e.length&&e===Ub(n,0,e.length)}function CF(n){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function i(r){const s=n[r-1];return n=n.slice(t+r),t++,s}for(let r=0;r<e.length;++r)if(i(1)===e[r])return!1;return!0}function Iv(n){const e=/FBXVersion: (\d+)/,t=n.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function PF(n){return n/46186158e3}const IF=[];function tu(n,e,t,i){let r;switch(i.mappingType){case"ByPolygonVertex":r=n;break;case"ByPolygon":r=e;break;case"ByVertice":r=t;break;case"AllSame":r=i.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+i.mappingType)}i.referenceType==="IndexToDirect"&&(r=i.indices[r]);const s=r*i.dataSize,a=s+i.dataSize;return LF(IF,i.buffer,s,a)}const jh=new un,Ua=new O;function Ob(n){const e=new Ue,t=new Ue,i=new Ue,r=new Ue,s=new Ue,a=new Ue,o=new Ue,l=new Ue,c=new Ue,u=new Ue,f=new Ue,h=new Ue,d=n.inheritType?n.inheritType:0;n.translation&&e.setPosition(Ua.fromArray(n.translation));const m=nc(0);if(n.preRotation){const R=n.preRotation.map(Ln.degToRad);R.push(m),t.makeRotationFromEuler(jh.fromArray(R))}if(n.rotation){const R=n.rotation.map(Ln.degToRad);R.push(n.eulerOrder||m),i.makeRotationFromEuler(jh.fromArray(R))}if(n.postRotation){const R=n.postRotation.map(Ln.degToRad);R.push(m),r.makeRotationFromEuler(jh.fromArray(R)),r.invert()}n.scale&&s.scale(Ua.fromArray(n.scale)),n.scalingOffset&&o.setPosition(Ua.fromArray(n.scalingOffset)),n.scalingPivot&&a.setPosition(Ua.fromArray(n.scalingPivot)),n.rotationOffset&&l.setPosition(Ua.fromArray(n.rotationOffset)),n.rotationPivot&&c.setPosition(Ua.fromArray(n.rotationPivot)),n.parentMatrixWorld&&(f.copy(n.parentMatrix),u.copy(n.parentMatrixWorld));const g=t.clone().multiply(i).multiply(r),_=new Ue;_.extractRotation(u);const p=new Ue;p.copyPosition(u);const x=p.clone().invert().multiply(u),v=_.clone().invert().multiply(x),y=s,b=new Ue;if(d===0)b.copy(_).multiply(g).multiply(v).multiply(y);else if(d===1)b.copy(_).multiply(v).multiply(g).multiply(y);else{const N=new Ue().scale(new O().setFromMatrixScale(f)).clone().invert(),D=v.clone().multiply(N);b.copy(_).multiply(g).multiply(D).multiply(y)}const E=c.clone().invert(),w=a.clone().invert();let P=e.clone().multiply(l).multiply(c).multiply(t).multiply(i).multiply(r).multiply(E).multiply(o).multiply(a).multiply(s).multiply(w);const S=new Ue().copyPosition(P),T=u.clone().multiply(S);return h.copyPosition(T),P=h.clone().multiply(b),P.premultiply(u.invert()),P}function nc(n){n=n||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return n===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[n]}function qh(n){return n.split(",").map(function(t){return parseFloat(t)})}function Ub(n,e,t){return e===void 0&&(e=0),t===void 0&&(t=n.byteLength),new TextDecoder().decode(new Uint8Array(n,e,t))}function DF(n,e){for(let t=0,i=n.length,r=e.length;t<r;t++,i++)n[i]=e[t]}function LF(n,e,t,i){for(let r=t,s=0;r<i;r++,s++)n[s]=e[r];return n}class tf{static async _getModels(e){const t=new SF;let i=[];try{i=await Promise.all(e.map(async r=>new Promise((s,a)=>{t.load(r,o=>s(o),void 0,o=>a(o))})))}catch(r){throw console.error("Loading ThreeJS models error.",r),r}return i}static _getTextures(e){const t=new xy;return e.map(i=>t.load(i,r=>{r.wrapS=ea,r.wrapT=ea}))}static async create3DScene({width:e,height:t,modelPaths:i,texturePaths:r,alpha:s}){const a=new zw,o=new Nn(75,e/t,.1,1e3),l=new CI({alpha:s}),c=await tf._getModels(i),u=tf._getTextures(r);return l.setSize(e,t),{scene:a,camera:o,renderer:l,models:c,textures:u}}}var NF=pt('<div class="svelte-beqs3p"></div>');function OF(n,e){on(e,!0);const t=Mi(),i=()=>Zt(os,"$theme",t),r=()=>Zt(Lf,"$view",t),s=()=>Zt(ef,"$isViewTransitioning",t),a=[`${Fm}ethereum.fbx`],o=1.7,l=.9,c=.9;let u;const f=new um({color:i().color2});vl(()=>{const D=i().color2;f.color.set(D),v?.color.set(D),y?.color.set(D),b?.color.set(D),E?.color.set(D)});let h,d,m,g=0,_=[],p;const x=new Ws;let v,y,b,E,w;vl(()=>{r(),m&&Ax.to(m.position,{x:r().position[0],y:r().position[1],z:r().position[2],duration:2.9,onUpdate:()=>m.lookAt(0,0,0),onComplete:()=>{r().id===0&&(g=Math.atan2(m.position.x,m.position.z))}})});async function P(){({scene:h,camera:m,renderer:d,models:_}=await tf.create3DScene({width:u.clientWidth,height:u.clientHeight,modelPaths:a,texturePaths:[],alpha:!1})),p=_[0],p.traverse(G=>{G instanceof ii&&G.material.map&&(G.material.color=new Xe(3947581))}),p.position.set(0,-.75,0),h.add(p);const D=new mm(.05,8,8);for(let G=0;G<1e3;G++){const B=new ii(D,f),Z=(Math.random()-.5)*50,H=(Math.random()-.5)*50,k=(Math.random()-.5)*50;B.position.set(Z,H,k),x.add(B)}h.add(x);const V=i().color2;v=new Sy(V,1),y=new mu(V,5,8),y.position.set(.5,.5,1.2),y.target.position.set(-.5,-.5,-1.2),b=new mu(V,5,8),b.position.set(-.5,-.5,-1.2),b.target.position.set(.5,.5,1.2),E=new mu(V,10,8),E.position.set(0,1,0),E.target.position.set(0,-1,.1),h.add(v,y,b,E),m.position.set(...r().position),m.lookAt(0,0,0),u.appendChild(d.domElement),S()}function S(){w=requestAnimationFrame(S),r().id===0&&!s()&&(g+=.002,m.position.x=Math.sin(g)*o+Math.sin(g*3.5)*c,m.position.z=Math.cos(g)*o,m.position.y=Math.sin(g*2)*l,m.lookAt(0,0,0)),p.rotation.y+=.008,x.rotation.y+=1e-4,x.rotation.x+=.001,d.render(h,m)}da(()=>(P(),window.addEventListener("resize",T),R));function T(){!m||!d||(m.aspect=u.clientWidth/u.clientHeight,m.updateProjectionMatrix(),d.setSize(u.clientWidth,u.clientHeight))}function R(){d&&d.domElement&&(u.removeChild(d.domElement),d.dispose()),cancelAnimationFrame(w),window.removeEventListener("resize",T)}var N=NF();lc(N,D=>u=D,()=>u),Be(n,N),ln()}var UF=pt('<div class="switch svelte-ovod75"><!> <!> <div class="underline svelte-ovod75"></div></div>');function FF(n,e){on(e,!0);const t=Mi(),i=()=>Zt(er,"$locale",t);let r=dn(null),s=dn(null),a=dn(0),o=dn(0);function l(){const m=i()?.startsWith("fr")?he(s):he(r);m&&(ze(a,Dt(m.offsetWidth)),ze(o,Dt(m.offsetLeft)))}da(l),vl(l);function c(m){Ur(Fr,`${m}-button`),Jp.switch(m),l()}var u=UF(),f=Qe(u);_s(f,{onclick:()=>c("en"),style:"padding: 0; margin: 0;",get buttonRef(){return he(r)},set buttonRef(m){ze(r,Dt(m))},children:(m,g)=>{var _=Mu("English");Be(m,_)},$$slots:{default:!0}});var h=vt(f,2);_s(h,{onclick:()=>c("fr"),style:"padding: 0; margin: 0;",get buttonRef(){return he(s)},set buttonRef(m){ze(s,Dt(m))},children:(m,g)=>{var _=Mu("Français");Be(m,_)},$$slots:{default:!0}});var d=vt(h,2);At(()=>{nn(u,"data-lang",i()),_r(d,"width",`${he(a)??""}px`),_r(d,"left",`${he(o)??""}px`)}),Be(n,u),ln()}var BF=pt('<div class="loader svelte-aamf68"></div>');function kF(n,e){on(e,!0);function t(){Ur(Fr,"mystery-button"),Z2()}_s(n,{onclick:t,children:(i,r)=>{var s=BF();Be(i,s)},$$slots:{default:!0}}),ln()}var HF=ar('<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path>',1);function zF(n,e){let t=or(e,["$$slots","$$events","$$legacy"]);kr(n,Bi(()=>t,{children:(i,r)=>{var s=HF();Be(i,s)},$$slots:{default:!0}}))}var VF=ar('<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>');function GF(n,e){let t=or(e,["$$slots","$$events","$$legacy"]);kr(n,Bi(()=>t,{children:(i,r)=>{var s=VF();Be(i,s)},$$slots:{default:!0}}))}var WF=pt('<div class="main svelte-1h28rxf"><div class="buttons svelte-1h28rxf"><!> <!> <!> <!></div></div>');function $F(n,e){on(e,!0);const t="https://www.linkedin.com/in/louis-hatt%C3%A9-94160111b/",i="https://github.com/LouisHatte";function r(){Ur(Fr,"linkedin-button")}function s(){Ur(Fr,"github-button")}var a=WF(),o=Qe(a),l=Qe(o);FF(l,{});var c=vt(l,2);Ep(c,{className:"_shake",href:t,onclick:r,children:(h,d)=>{zF(h,{})},$$slots:{default:!0}});var u=vt(c,2);Ep(u,{className:"_shake",href:i,onclick:s,children:(h,d)=>{GF(h,{})},$$slots:{default:!0}});var f=vt(u,2);kF(f,{}),Be(n,a),ln()}var XF=pt('<div class="body svelte-xu7rfl"><!></div>'),jF=pt('<div class="main svelte-xu7rfl"><!></div>');function qF(n,e){on(e,!0);const t=Mi(),i=()=>Zt(Lf,"$view",t),r=()=>Zt(ef,"$isViewTransitioning",t);let s=si(()=>i().body);function a(c){r()||(c.deltaY>0?YU():KU())}da(()=>(window.addEventListener("wheel",a,{passive:!0}),()=>{window.removeEventListener("wheel",a)}));var o=jF(),l=Qe(o);aE(l,()=>he(s),c=>{var u=XF(),f=Qe(u);x0(f,()=>he(s),(h,d)=>{d(h,{})}),Sl(1,u,()=>Tu,()=>({duration:500,delay:1e3})),Sl(2,u,()=>Tu,()=>({duration:500})),Be(c,u)}),Be(n,o),ln()}var ZF=pt('<div class="main svelte-plztqa"><div class="copyright svelte-plztqa"> </div> <div class="version svelte-plztqa">Version - 1.0.9</div></div>');function YF(n,e){on(e,!0);const t=Mi(),i=()=>Zt(Bo,"$_",t);var r=ZF(),s=Qe(r);const a=si(()=>new Date().getFullYear()??""),o=si(()=>i()("footer-copyright")??"");var l=Qe(s);At(()=>_n(l,`© Copyright ${he(a)}. ${he(o)}`)),Be(n,r),ln()}function nf(n){return Object.prototype.toString.call(n)==="[object Date]"}function Dp(n,e,t,i){if(typeof t=="number"||nf(t)){const r=i-t,s=(t-e)/(n.dt||1/60),a=n.opts.stiffness*r,o=n.opts.damping*s,l=(a-o)*n.inv_mass,c=(s+l)*n.dt;return Math.abs(c)<n.opts.precision&&Math.abs(r)<n.opts.precision?i:(n.settled=!1,nf(t)?new Date(t.getTime()+c):t+c)}else{if(Array.isArray(t))return t.map((r,s)=>Dp(n,e[s],t[s],i[s]));if(typeof t=="object"){const r={};for(const s in t)r[s]=Dp(n,e[s],t[s],i[s]);return r}else throw new Error(`Cannot spring ${typeof t} values`)}}class jm{#t=rn(.15);#n=rn(.8);#i=rn(.01);#e=rn(void 0);#s=rn(void 0);#a=void 0;#l=0;#o=1;#u=0;#r=null;#c=null;constructor(e,t={}){this.#e.v=this.#s.v=e,typeof t.stiffness=="number"&&(this.#t.v=nu(t.stiffness,0,1)),typeof t.damping=="number"&&(this.#n.v=nu(t.damping,0,1)),typeof t.precision=="number"&&(this.#i.v=t.precision)}static of(e,t){const i=new jm(e(),t);return cf(()=>{i.set(e())}),i}#f(e){if(ze(this.#s,e),this.#e.v??=e,this.#a??=this.#e.v,!this.#r){this.#l=Ii.now();var t=1e3/(this.#u*60);this.#r??=qp(i=>{this.#o=Math.min(this.#o+t,1);const r={inv_mass:this.#o,opts:{stiffness:this.#t.v,damping:this.#n.v,precision:this.#i.v},settled:!0,dt:(i-this.#l)*60/1e3};var s=Dp(r,this.#a,this.#e.v,this.#s.v);return this.#a=this.#e.v,this.#l=i,ze(this.#e,s),r.settled&&(this.#r=null),!r.settled})}return this.#r.promise}set(e,t){if(this.#c?.reject(new Error("Aborted")),t?.instant||this.#e.v===void 0)return this.#r?.abort(),this.#r=null,ze(this.#e,ze(this.#s,e)),this.#a=e,Promise.resolve();t?.preserveMomentum&&(this.#o=0,this.#u=t.preserveMomentum);var i=this.#c=uS();return i.promise.catch(On),this.#f(e).then(()=>{i===this.#c&&i.resolve(void 0)}),i.promise}get current(){return he(this.#e)}get damping(){return he(this.#n)}set damping(e){ze(this.#n,nu(e,0,1))}get precision(){return he(this.#i)}set precision(e){ze(this.#i,e)}get stiffness(){return he(this.#t)}set stiffness(e){ze(this.#t,nu(e,0,1))}get target(){return he(this.#s)}set target(e){this.set(e)}}function nu(n,e,t){return Math.max(e,Math.min(t,n))}function KF(n){return n}function Fb(n){const e=n-1;return e*e*e+1}function Lp(n,e){if(n===e||n!==n)return()=>n;const t=typeof n;if(t!==typeof e||Array.isArray(n)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(n)){const i=e.map((r,s)=>Lp(n[s],r));return r=>i.map(s=>s(r))}if(t==="object"){if(!n||!e)throw new Error("Object cannot be null");if(nf(n)&&nf(e)){const s=n.getTime(),o=e.getTime()-s;return l=>new Date(s+l*o)}const i=Object.keys(e),r={};return i.forEach(s=>{r[s]=Lp(n[s],e[s])}),s=>{const a={};return i.forEach(o=>{a[o]=r[o](s)}),a}}if(t==="number"){const i=e-n;return r=>n+r*i}throw new Error(`Cannot interpolate ${t} values`)}class qm{#t=rn(void 0);#n=rn(void 0);#i;#e=null;constructor(e,t={}){this.#t.v=this.#n.v=e,this.#i=t}static of(e,t){const i=new qm(e(),t);return cf(()=>{i.set(e())}),i}set(e,t){ze(this.#n,e);let i=this.#t.v,r=this.#e,s=!1,{delay:a=0,duration:o=400,easing:l=KF,interpolate:c=Lp}={...this.#i,...t};const u=Ii.now()+a;let f;return this.#e=qp(h=>{if(h<u)return!0;s||(s=!0,f=c(i,e),typeof o=="function"&&(o=o(i,e)),r?.abort());const d=h-u;return d>o?(ze(this.#t,e),!1):(ze(this.#t,f(l(d/o))),!0)}),this.#e.promise}get current(){return he(this.#t)}get target(){return he(this.#n)}set target(e){this.set(e)}}var JF=pt('<div class="shape svelte-auumk8"></div>'),QF=pt('<div class="shape svelte-auumk8"></div> <!>',1);function e3(n,e){on(e,!0);const t=window.innerWidth/2,i=window.innerHeight/2,r=35;let s=dn(Dt([])),a=null;const o=new jm({x:t,y:i},{stiffness:.2,damping:.5});function l(d){d&&(o.set({x:d.clientX+window.scrollX,y:d.clientY+window.scrollY}),a=d)}function c(d){const m=new qm({diameter:0,opacity:2},{duration:1e3,easing:Fb});he(s).push({id:Date.now(),x:d.clientX+window.scrollX,y:d.clientY+window.scrollY,tween:m}),m.set({diameter:r+50,opacity:0}),setTimeout(()=>{ze(s,Dt(he(s).filter(g=>g.id!==he(s)[0].id)))},1e3)}var u=QF();ou("mousemove",ul,l),ou("scroll",ul,()=>l(a)),ou("mousedown",ul,c);var f=ji(u);_r(f,"--size",`${r}px`);var h=vt(f,2);jp(h,17,()=>he(s),({id:d,x:m,y:g,tween:_})=>d,(d,m)=>{let g=()=>he(m).x,_=()=>he(m).y,p=()=>he(m).tween;var x=JF();At(()=>{_r(x,"--x",`${g()??""}px`),_r(x,"--y",`${_()??""}px`),_r(x,"--size",`${p().current.diameter??""}px`),_r(x,"--opacity",p().current.opacity)}),Be(d,x)}),At(()=>{_r(f,"--x",`${o.current.x??""}px`),_r(f,"--y",`${o.current.y??""}px`)}),Be(n,u),ln()}var t3=ar('<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M12 9h.01"></path><path d="M11 12h1v4h1"></path>',1);function n3(n,e){let t=or(e,["$$slots","$$events","$$legacy"]);kr(n,Bi(()=>t,{children:(i,r)=>{var s=t3();Be(i,s)},$$slots:{default:!0}}))}var i3=ar('<path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95"></path><path d="M3.69 8.56a9 9 0 0 0 -.69 3.44"></path><path d="M3.69 15.44a9 9 0 0 0 1.95 2.92"></path><path d="M8.56 20.31a9 9 0 0 0 3.44 .69"></path><path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95"></path><path d="M20.31 15.44a9 9 0 0 0 .69 -3.44"></path><path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92"></path><path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69"></path><path d="M9 12l2 2l4 -4"></path>',1);function r3(n,e){let t=or(e,["$$slots","$$events","$$legacy"]);kr(n,Bi(()=>t,{children:(i,r)=>{var s=i3();Be(i,s)},$$slots:{default:!0}}))}var s3=ar('<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M12 9v4"></path><path d="M12 16v.01"></path>',1);function a3(n,e){let t=or(e,["$$slots","$$events","$$legacy"]);kr(n,Bi(()=>t,{children:(i,r)=>{var s=s3();Be(i,s)},$$slots:{default:!0}}))}var o3=pt('<div class="toast svelte-5t5kq2"><!> </div>');function l3(n,e){on(e,!0);let t=dn(!1);const r={info:n3,success:r3,error:a3}[e.type],s=setTimeout(()=>ze(t,!1),e.duration);da(()=>(ze(t,!0),()=>{clearTimeout(s)}));var a=Xp(),o=ji(a);{var l=c=>{var u=o3(),f=Qe(u);r(f,{});var h=vt(f);At(()=>_n(h,` ${e.message??""}`)),ou("outroend",u,()=>zU(e.id)),Sl(3,u,()=>wE,()=>({y:-50,duration:500,easing:Fb})),Be(c,u)};ns(o,c=>{he(t)&&c(l)})}Be(n,a),ln()}var c3=pt('<div class="toast-box svelte-1gdltp1"></div>');function u3(n){const e=Mi(),t=()=>Zt(Xm,"$toasts",e);var i=c3();jp(i,5,t,r=>r.id,(r,s)=>{l3(r,Bi(()=>he(s)))}),Be(n,i)}function f3(n,...e){const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function br(n){let e;return f3(n,t=>e=t)(),e}class h3 extends Error{constructor(e,t){super(e),this.name="FelteSubmitError",this.response=t}}function d3(n,e){return Object.keys(n).some(i=>e(n[i]))}function Nf(n,e){return Object.keys(n||{}).reduce((i,r)=>Object.assign(Object.assign({},i),{[r]:e(n[r])}),{})}function ft(n){return Object.prototype.toString.call(n)==="[object Object]"}function zn(n){return Object.keys(n||{}).reduce((e,t)=>Object.assign(Object.assign({},e),{[t]:ft(n[t])?zn(n[t]):Array.isArray(n[t])?[...n[t]]:n[t]}),{})}function p3(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function m3(n){return function(e){if(ft(e)){const t=Vn(e,n);return p3(t,["key"])}return n}}function Vn(n,e){return Nf(n,t=>ft(t)?Vn(t,e):Array.isArray(t)?t.map(m3(e)):e)}function us(...n){const e=n.pop(),t=n.shift();if(typeof t=="string")return t;const i=zn(t);if(n.length===0)return i;for(const r of n){if(!r)continue;if(typeof r=="string")return r;let s=e(i,r);if(typeof s<"u")return s;const a=Array.from(new Set(Object.keys(i).concat(Object.keys(r))));for(const o of a)if(s=e(i[o],r[o]),typeof s<"u")i[o]=s;else if(ft(r[o])&&ft(i[o]))i[o]=us(i[o],r[o],e);else if(Array.isArray(r[o]))i[o]=r[o].map((l,c)=>{if(!ft(l))return l;const u=Array.isArray(i[o])?i[o][c]:i[o];return us(u,l,e)});else if(ft(r[o])){const l=Vn(zn(r[o]),void 0);i[o]=us(l,r[o],e)}else typeof r[o]<"u"&&(i[o]=r[o])}return i}function g3(n,e){if(!(ft(n)&&ft(e))){if(Array.isArray(e)){if(e.some(ft))return;const t=Array.isArray(n)?n:[];return e.map((i,r)=>{var s;return(s=t[r])!==null&&s!==void 0?s:i})}if(typeof n<"u")return n}}function Dv(...n){return us(...n,g3)}function Bb(...n){return us(...n,()=>{})}function Cr(n,e,t){const i=s=>String.prototype.split.call(e,s).filter(Boolean).reduce((a,o)=>a!=null?a[o]:a,n),r=i(/[,[\]]+?/)||i(/[,[\].]+?/);return r===void 0||r===n?t:r}function $o(n,e,t){n&&(n=zn(n)),ft(n)||(n={});const i=Array.isArray(e)?e:e.match(/[^.[\]]+/g)||[],r=i[i.length-1];if(!r)return n;let s=n;for(let a=0;a<i.length-1;a++){const o=i[a];if(!s[o]||!ft(s[o])&&!Array.isArray(s[o])){const l=i[a+1];isNaN(Number(l))?s[o]={}:s[o]=[]}s=s[o]}return s[r]=t(s[r]),n}function It(n,e,t){return $o(n,e,()=>t)}function cl(n,e){if(!n||Object(n)!==n)return;typeof n<"u"&&(n=zn(n));const t=Array.isArray(e)?e:e.toString().match(/[^.[\]]+/g)||[],i=t.length===1?n:Cr(n,t.slice(0,-1).join("."));return Array.isArray(i)?i.splice(Number(t[t.length-1]),1):i==null||delete i[t[t.length-1]],n}function ic(n,e){return d3(n,t=>ft(t)?ic(t,e):Array.isArray(t)?t.length===0||t.every(i=>typeof i=="string")?e(t):t.some(i=>ft(i)?ic(i,e):e(i)):e(t))}function io(n){return n?.nodeName==="INPUT"}function _3(n){return n?.nodeName==="TEXTAREA"}function ro(n){return n?.nodeName==="SELECT"}function Of(n){return n?.nodeName==="FIELDSET"}function pn(n){return io(n)||_3(n)||ro(n)}function Lv(n){return n.nodeType===Node.ELEMENT_NODE}function hn(n,e){return e??(pn(n)?n.name:"")}function Zh(n){let e=n;for(;e&&e.nodeName!=="FORM";){if(e.hasAttribute("data-felte-ignore"))return!0;e=e.parentElement}return!1}function v3(n,e){if(!(ft(n)||ft(e))){if(n===null||n==="")return e;if(e===null||e===""||!e)return n;if(!(!n||!e)){if(Array.isArray(n)){if(!Array.isArray(e))return[...n,e];const t=[],i=Math.max(e.length,n.length);for(let r=0;r<i;r++){let s=n[r],a=e[r];!ft(s)&&!ft(a)?(Array.isArray(s)||(s=[s]),Array.isArray(a)||(a=[a]),t.push(...s,...a)):t.push(Ha([s??{},a??{}]))}return t.filter(Boolean)}return Array.isArray(e)||(e=[e]),[n,...e].reduce((t,i)=>t.concat(i),[]).filter(Boolean)}}}function Ha(n){return us(...n,v3)}function y3(n,e){return e?(Array.isArray(e)?e:[e]).map(i=>i(n)):[]}function Np(n,e){return e?Array.isArray(e)?e.reduce((t,i)=>i(t),n):e(n):n}function kb(n=8){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let i=0;i<n;i++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}function rf(n,e,{onInit:t,onEnd:i}={}){let r;return(...s)=>{r||t?.(),r&&clearTimeout(r),r=setTimeout(()=>{n.apply(this,s),r=void 0,i?.()},e)}}function Op(n){if(pn(n))return[n];if(n.childElementCount===0)return[];const e=new Set;for(const t of n.children){if(pn(t)&&e.add(t),Of(t))for(const i of t.elements)pn(i)&&e.add(i);t.childElementCount>0&&Op(t).forEach(i=>e.add(i))}return Array.from(e)}function Hb(n){for(const e of n.elements)!pn(e)&&!Of(e)||n.hasAttribute("data-felte-keep-on-remove")&&!e.hasAttribute("data-felte-keep-on-remove")&&(e.dataset.felteKeepOnRemove=n.dataset.felteKeepOnRemove)}function zb(n){return n.type.match(/^(number|range)$/)?n.value?+n.value:null:n.value}function Nv(n){var e;let t={},i={};for(const r of n.elements){if(Of(r)&&Hb(r),!pn(r)||!r.name)continue;const s=hn(r);if(io(r)){if(r.type==="checkbox"){if(typeof Cr(t,s)>"u"){if(Array.from(n.querySelectorAll(`[name="${r.name}"]`)).filter(l=>pn(l)?s===hn(l):!1).length===1){t=It(t,s,r.checked),i=It(i,s,!1);continue}t=It(t,s,r.checked?[r.value]:[]),i=It(i,s,!1);continue}Array.isArray(Cr(t,s))&&r.checked&&(t=$o(t,s,o=>[...o,r.value]));continue}if(r.type==="radio"){if(Cr(t,s))continue;t=It(t,s,r.checked?r.value:void 0),i=It(i,s,!1);continue}if(r.type==="file"){t=It(t,s,r.multiple?Array.from(r.files||[]):(e=r.files)===null||e===void 0?void 0:e[0]),i=It(i,s,!1);continue}}else if(ro(r)){if(!r.multiple)t=It(t,s,r.value);else{const l=Array.from(r.selectedOptions).map(c=>c.value);t=It(t,s,l)}i=It(i,s,!1);continue}const a=zb(r);t=It(t,s,a),i=It(i,s,!1)}return{defaultData:t,defaultTouched:i}}function x3(n,e){var t;if(!pn(n))return;const i=e;if(io(n)){if(n.type==="checkbox"){const r=i;if(typeof r>"u"||typeof r=="boolean"){n.checked=!!r;return}Array.isArray(r)&&(r.includes(n.value)?n.checked=!0:n.checked=!1);return}if(n.type==="radio"){const r=i;n.value===r?n.checked=!0:n.checked=!1;return}if(n.type==="file"){if(e instanceof FileList)n.files=e;else if(e instanceof File&&typeof DataTransfer<"u"){const r=new DataTransfer;r.items.add(e),n.files=r.files}else if(typeof DataTransfer<"u"&&Array.isArray(e)&&e.some(r=>r instanceof File)){const r=new DataTransfer;for(const s of e)s instanceof File&&r.items.add(s);n.files=r.files}else(!e||Array.isArray(e)&&!e.length)&&(n.files=null,n.value="");return}}else if(ro(n)){if(n.multiple){if(Array.isArray(i)){n.value=String((t=i[0])!==null&&t!==void 0?t:"");const s=i.map(a=>String(a));for(const a of n.options)s.includes(a.value)?a.selected=!0:a.selected=!1}}else{n.value=String(i??"");for(const s of n.options)s.value===String(i)?s.selected=!0:s.selected=!1}return}n.value=String(i??"")}function iu(n,e){for(const t of n.elements){if(Of(t)&&Hb(t),!pn(t)||!t.name)continue;const i=hn(t);x3(t,Cr(e,i))}}function Vb(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function Sr(n,e){return Nf(n,t=>ft(t)?Sr(t,e):Array.isArray(t)?t.length===0||t.every(i=>typeof i=="string")?e:t.map(i=>{const r=Sr(i,e);return Vb(r,["key"])}):e)}function fa(n){return n?Nf(n,e=>ft(e)?fa(e):Array.isArray(e)?e.length===0||e.every(t=>typeof t=="string")?e:e.map(t=>{if(!ft(t))return t;const i=fa(t);return i.key||(i.key=kb()),i}):e):{}}function so(n){return n?Nf(n,e=>ft(e)?so(e):Array.isArray(e)?e.length===0||e.every(t=>typeof t=="string")?e:e.map(t=>{if(!ft(t))return t;const i=so(t);return Vb(i,["key"])}):e):{}}function b3(){class n extends CustomEvent{constructor(r){super("feltesuccess",{detail:r})}}class e extends CustomEvent{constructor(r){super("felteerror",{detail:r,cancelable:!0})}setErrors(r){this.preventDefault(),this.errors=r}}class t extends Event{constructor(){super("feltesubmit",{cancelable:!0})}handleSubmit(r){this.onSubmit=r}handleError(r){this.onError=r}handleSuccess(r){this.onSuccess=r}}return{createErrorEvent:i=>new e(i),createSubmitEvent:()=>new t,createSuccessEvent:i=>new n(i)}}function S3(n){if(n)return async function(){let t=new FormData(n);const i=new URL(n.action),r=n.method.toLowerCase()==="get"?"get":i.searchParams.get("_method")||n.method;let s=n.enctype;n.querySelector('input[type="file"]')&&(s="multipart/form-data"),(r==="get"||s==="application/x-www-form-urlencoded")&&(t=new URLSearchParams(t));let a;r==="get"?(t.forEach((l,c)=>{i.searchParams.append(c,l)}),a={method:r,headers:{Accept:"application/json"}}):a={method:r,body:t,headers:Object.assign(Object.assign({},s!=="multipart/form-data"&&{"Content-Type":s}),{Accept:"application/json"})};const o=await window.fetch(i.toString(),a);if(o.ok)return o;throw new h3("An error occurred while submitting the form",o)}}function ru(n,e,t,i){return $o(n,e,r=>(typeof r<"u"&&!Array.isArray(r)||(r||(r=[]),typeof i>"u"?r.push(t):r.splice(i,0,t)),r))}function E3(n,e,t,i){return $o(n,e,r=>(!r||!Array.isArray(r)||([r[t],r[i]]=[r[i],r[t]]),r))}function M3(n,e,t,i){return $o(n,e,r=>(!r||!Array.isArray(r)||r.splice(i,0,r.splice(t,1)[0]),r))}function Ov(n){return typeof n=="function"}function jr(n){return(t,i)=>{if(typeof t=="string"){const r=t;n(s=>{const a=Ov(i)?i(Cr(s,r)):i;return It(s,r,a)})}else n(r=>Ov(t)?t(r):t)}}function T3({stores:n,config:e,validateErrors:t,validateWarnings:i,_getCurrentExtenders:r}){var s;let a,o=fa((s=e.initialValues)!==null&&s!==void 0?s:{});const{data:l,touched:c,errors:u,warnings:f,isDirty:h,isSubmitting:d,interacted:m}=n,g=jr(l.update),_=jr(c.update),p=jr(u.update),x=jr(f.update);function v(k){g(K=>{const te=k(K);return a&&iu(a,te),te})}const y=(k,K,te)=>{jr(v)(k,K),typeof k=="string"&&te&&_(k,!0)};function b(k,K,te){const ge=ft(K)?Sr(K,!1):!1,Le=ft(ge)?Vn(ge,[]):[];K=ft(K)?Object.assign(Object.assign({},K),{key:kb()}):K,u.update(W=>ru(W,k,Le,te)),f.update(W=>ru(W,k,Le,te)),c.update(W=>ru(W,k,ge,te)),l.update(W=>{const ee=ru(W,k,K,te);return setTimeout(()=>a&&iu(a,ee)),ee})}function E(k){u.update(k),f.update(k),c.update(k),l.update(K=>{const te=k(K);return setTimeout(()=>a&&iu(a,te)),te})}function w(k){E(K=>cl(K,k))}function P(k,K,te){E(ge=>E3(ge,k,K,te))}function S(k,K,te){E(ge=>M3(ge,k,K,te))}function T(k){const K=Cr(o,k),te=ft(K)?Sr(K,!1):!1,ge=ft(te)?Vn(te,[]):[];l.update(Le=>{const W=It(Le,k,K);return a&&iu(a,W),W}),c.update(Le=>It(Le,k,te)),u.update(Le=>It(Le,k,ge)),f.update(Le=>It(Le,k,ge))}const R=jr(d.update),N=jr(h.update),D=jr(m.update);async function V(){const k=br(l);c.set(Sr(k,!0)),m.set(null);const K=await t(k);return await i(k),K}function G(){y(zn(o)),_(k=>Vn(k,!1)),m.set(null),h.set(!1)}function B(k){return async function(te){var ge,Le,W,ee,be,le,Me;const{createErrorEvent:et,createSubmitEvent:Oe,createSuccessEvent:mt}=b3(),at=Oe();a?.dispatchEvent(at);const se=(Le=(ge=at.onError)!==null&&ge!==void 0?ge:k?.onError)!==null&&Le!==void 0?Le:e.onError,C=(ee=(W=at.onSuccess)!==null&&W!==void 0?W:k?.onSuccess)!==null&&ee!==void 0?ee:e.onSuccess,Re=(Me=(le=(be=at.onSubmit)!==null&&be!==void 0?be:k?.onSubmit)!==null&&le!==void 0?le:e.onSubmit)!==null&&Me!==void 0?Me:S3(a);if(!Re||(te?.preventDefault(),at.defaultPrevented))return;d.set(!0),m.set(null);const _e=so(br(l)),Je=await t(_e,k?.validate),Ee=await i(_e,k?.warn);if(Ee&&f.set(Bb(Vn(_e,[]),Ee)),c.set(Sr(_e,!0)),Je&&(c.set(Sr(Je,!0)),ic(Je,De=>Array.isArray(De)?De.length>=1:!!De))){await new Promise(De=>setTimeout(De)),r().forEach(De=>{var St;return(St=De.onSubmitError)===null||St===void 0?void 0:St.call(De,{data:_e,errors:Je})}),d.set(!1);return}const qe={event:te,setFields:y,setData:g,setTouched:_,setErrors:p,setWarnings:x,unsetField:w,addField:b,resetField:T,reset:G,setInitialValues:Z.setInitialValues,moveField:S,swapFields:P,form:a,controls:a&&Array.from(a.elements).filter(pn),config:Object.assign(Object.assign({},e),k)};try{const ve=await Re(_e,qe);a?.dispatchEvent(mt(Object.assign({response:ve},qe))),await C?.(ve,qe)}catch(ve){const De=et(Object.assign({error:ve},qe));if(a?.dispatchEvent(De),!se&&!De.defaultPrevented)throw ve;if(!se&&!De.errors)return;const St=De.errors||await se?.(ve,qe);St&&(c.set(Sr(St,!0)),u.set(St),await new Promise(I=>setTimeout(I)),r().forEach(I=>{var M;return(M=I.onSubmitError)===null||M===void 0?void 0:M.call(I,{data:_e,errors:br(u)})}))}finally{d.set(!1)}}}const Z={setData:g,setFields:y,setTouched:_,setErrors:p,setWarnings:x,setIsSubmitting:R,setIsDirty:N,setInteracted:D,validate:V,reset:G,unsetField:w,resetField:T,addField:b,swapFields:P,moveField:S,createSubmitHandler:B,handleSubmit:B(),setInitialValues:k=>{o=fa(k)}};return{public:Z,private:{_setFormNode(k){a=k},_getInitialValues:()=>o}}}function w3({helpers:n,stores:e,config:t,extender:i,createSubmitHandler:r,handleSubmit:s,_setFormNode:a,_getInitialValues:o,_setCurrentExtenders:l,_getCurrentExtenders:c}){const{setFields:u,setTouched:f,reset:h,setInitialValues:d}=n,{addValidator:m,addTransformer:g,validate:_}=n,{data:p,errors:x,warnings:v,touched:y,isSubmitting:b,isDirty:E,interacted:w,isValid:P,isValidating:S}=e;function T(R){R.requestSubmit||(R.requestSubmit=s);function N(se){return function(C){return C({form:R,stage:se,controls:Array.from(R.elements).filter(pn),data:p,errors:x,warnings:v,touched:y,isValid:P,isValidating:S,isSubmitting:b,isDirty:E,interacted:w,config:t,addValidator:m,addTransformer:g,setFields:u,validate:_,reset:h,createSubmitHandler:r,handleSubmit:s})}}l(i.map(N("MOUNT"))),R.noValidate=!!t.validate;const{defaultData:D,defaultTouched:V}=Nv(R);a(R),d(Bb(zn(D),o())),u(o()),y.set(V);function G(se){const C=hn(se),Re=Array.from(R.querySelectorAll(`[name="${se.name}"]`)).filter(_e=>pn(_e)?C===hn(_e):!1);if(Re.length!==0)return Re.length===1?p.update(_e=>It(_e,hn(se),se.checked)):p.update(_e=>It(_e,hn(se),Re.filter(io).filter(Je=>Je.checked).map(Je=>Je.value)))}function B(se){const C=R.querySelectorAll(`[name="${se.name}"]`),Re=Array.from(C).find(_e=>io(_e)&&_e.checked);p.update(_e=>It(_e,hn(se),Re?.value))}function Z(se){var C;const Re=Array.from((C=se.files)!==null&&C!==void 0?C:[]);p.update(_e=>It(_e,hn(se),se.multiple?Re:Re[0]))}function H(se){if(!se.multiple)p.update(C=>It(C,hn(se),se.value));else{const C=Array.from(se.selectedOptions).map(Re=>Re.value);p.update(Re=>It(Re,hn(se),C))}}function k(se){const C=se.target;if(!C||!pn(C)||ro(C)||Zh(C)||["checkbox","radio","file"].includes(C.type)||!C.name)return;E.set(!0);const Re=zb(C);w.set(C.name),p.update(_e=>It(_e,hn(C),Re))}function K(se){const C=se.target;if(!(!C||!pn(C)||Zh(C))&&C.name)if(f(hn(C),!0),w.set(C.name),(ro(C)||["checkbox","radio","file","hidden"].includes(C.type))&&E.set(!0),C.type==="hidden"&&p.update(Re=>It(Re,hn(C),C.value)),ro(C))H(C);else if(io(C))C.type==="checkbox"?G(C):C.type==="radio"?B(C):C.type==="file"&&Z(C);else return}function te(se){const C=se.target;!C||!pn(C)||Zh(C)||C.name&&(f(hn(C),!0),w.set(C.name))}function ge(se){se.preventDefault(),h()}const Le={childList:!0,subtree:!0};function W(se){let C=br(p),Re=br(y),_e=br(x),Je=br(v);for(const Ee of se.reverse()){if(Ee.hasAttribute("data-felte-keep-on-remove")&&Ee.dataset.felteKeepOnRemove!=="false")continue;const qe=/.*(\[[0-9]+\]|\.[0-9]+)\.[^.]+$/;let ve=hn(Ee);const De=br(y);if(qe.test(ve)){const I=ve.split(".").slice(0,-1).join("."),M=Cr(De,I);ft(M)&&Object.keys(M).length<=1&&(ve=I)}C=cl(C,ve),Re=cl(Re,ve),_e=cl(_e,ve),Je=cl(Je,ve)}p.set(C),y.set(Re),x.set(_e),v.set(Je)}const ee=rf(()=>{c().forEach(Re=>{var _e;return(_e=Re.destroy)===null||_e===void 0?void 0:_e.call(Re)}),l(i.map(N("UPDATE")));const{defaultData:se,defaultTouched:C}=Nv(R);p.update(Re=>Dv(Re,se)),y.update(Re=>Dv(Re,C)),n.setFields(br(p))},0);let be=[];const le=rf(()=>{c().forEach(se=>{var C;return(C=se.destroy)===null||C===void 0?void 0:C.call(se)}),l(i.map(N("UPDATE"))),W(be),be=[]},0);function Me(se){Array.from(se.addedNodes).some(Re=>Lv(Re)?pn(Re)?!0:Op(Re).length>0:!1)&&ee()}function et(se){for(const C of se.removedNodes){if(!Lv(C))continue;const Re=Op(C);Re.length!==0&&(be.push(...Re),le())}}function Oe(se){for(const C of se)C.type==="childList"&&(C.addedNodes.length>0&&Me(C),C.removedNodes.length>0&&et(C))}const mt=new MutationObserver(Oe);mt.observe(R,Le),R.addEventListener("input",k),R.addEventListener("change",K),R.addEventListener("focusout",te),R.addEventListener("submit",s),R.addEventListener("reset",ge);const at=x.subscribe(se=>{for(const C of R.elements){if(!pn(C)||!C.name)continue;const Re=Cr(se,hn(C)),_e=Array.isArray(Re)?Re.join(`
`):typeof Re=="string"?Re:void 0;_e!==C.dataset.felteValidationMessage&&(_e?(C.dataset.felteValidationMessage=_e,C.setAttribute("aria-invalid","true")):(delete C.dataset.felteValidationMessage,C.removeAttribute("aria-invalid")))}});return{destroy(){mt.disconnect(),R.removeEventListener("input",k),R.removeEventListener("change",K),R.removeEventListener("focusout",te),R.removeEventListener("submit",s),R.removeEventListener("reset",ge),at(),c().forEach(se=>{var C;return(C=se.destroy)===null||C===void 0?void 0:C.call(se)})}}}return{form:T}}function A3(n){const e={aborted:!1,priority:n};return{signal:e,abort(){e.aborted=!0}}}function R3(n,e){if(ft(n))return!e||ft(e)&&Object.keys(e).length===0?Vn(n,null):void 0;if(Array.isArray(n)){if(n.some(ft))return;const t=Array.isArray(e)?e:[];return n.map((i,r)=>{const s=t[r];return Array.isArray(s)&&s.length===0?null:i&&s||null})}return Array.isArray(e)&&e.length===0?null:Array.isArray(e)?n?e:null:n&&e?[e]:null}function C3(n,e){if(ft(n))return!e||ft(e)&&Object.keys(e).length===0?Vn(n,null):void 0;if(Array.isArray(n)){if(n.some(ft))return;const t=Array.isArray(e)?e:[];return n.map((i,r)=>{const s=t[r];return Array.isArray(s)&&s.length===0?null:s||null})}return Array.isArray(e)&&e.length===0?null:Array.isArray(e)?e:e?[e]:null}function P3([n,e]){return us(e,n,R3)}function I3([n,e]){return us(e,n,C3)}function D3(n){return function(t,i,r){const s=Array.isArray(t)?t:[t],a=new Array(s.length),o=n(r),l=o.set,c=o.subscribe;let u;function f(){u=s.map((d,m)=>d.subscribe(g=>{a[m]=g,l(i(a))}))}function h(){u?.forEach(d=>d())}return o.subscribe=function(m){const g=c(m);return()=>{g()}},[o,f,h]}}function L3(n,e){var t,i,r,s,a,o,l,c,u;const f=D3(n),h=e.initialValues=e.initialValues?fa(Np(zn(e.initialValues),e.transform)):{},d=Sr(so(h),!1),m=n(d),g=n(0),[_,p,x]=f([m,g],([j,Y])=>ic(j,ye=>!!ye)&&Y>=1,!1);delete _.set,delete _.update;function v(j){let Y;return async function(ye,oe,xe,we=!1){if(!xe||!ye)return;let Q=oe&&Object.keys(oe).length>0?oe:Vn(ye,[]);const de=A3(we);if((!Y?.signal.priority||we)&&(Y?.abort(),Y=de),Y.signal.priority&&!we)return;g.update(Ne=>Ne+1);const ke=y3(so(ye),xe);return ke.forEach(async Ne=>{const ce=await Ne;de.signal.aborted||(Q=Ha([Q,ce]),j.set(Q))}),await Promise.all(ke),Y=void 0,g.update(Ne=>Ne-1),Q}}let y=Vn(d,[]);const b=n(h),E=Vn(d,[]),w=n(E),P=n(zn(E)),[S,T,R]=f([w,P],Ha,zn(E)),N=Vn(d,[]),D=n(N),V=n(zn(N)),[G,B,Z]=f([D,V],Ha,zn(N)),[H,k,K]=f([S,m],P3,zn(E)),[te,ge,Le]=f([G,m],I3,zn(N));let W=!1;const[ee,be,le]=f(S,([j])=>{var Y;return W?!ic(j,q=>Array.isArray(q)?q.length>=1:!!q):(W=!0,!e.validate&&!(!((Y=e.debounced)===null||Y===void 0)&&Y.validate))},!e.validate&&!(!((t=e.debounced)===null||t===void 0)&&t.validate));delete ee.set,delete ee.update;const Me=n(!1),et=n(!1),Oe=n(null),mt=v(w),at=v(D),se=v(P),C=v(V),Re=rf(se,(a=(r=(i=e.debounced)===null||i===void 0?void 0:i.validateTimeout)!==null&&r!==void 0?r:(s=e.debounced)===null||s===void 0?void 0:s.timeout)!==null&&a!==void 0?a:300,{onInit:()=>{g.update(j=>j+1)},onEnd:()=>{g.update(j=>j-1)}}),_e=rf(C,(u=(l=(o=e.debounced)===null||o===void 0?void 0:o.warnTimeout)!==null&&l!==void 0?l:(c=e.debounced)===null||c===void 0?void 0:c.timeout)!==null&&u!==void 0?u:300);async function Je(j,Y){var q;const ye=mt(j,y,Y??e.validate,!0);if(Y)return ye;const oe=se(j,y,(q=e.debounced)===null||q===void 0?void 0:q.validate,!0);return Ha(await Promise.all([ye,oe]))}async function Ee(j,Y){var q;const ye=at(j,y,Y??e.warn,!0);if(Y)return ye;const oe=C(j,y,(q=e.debounced)===null||q===void 0?void 0:q.warn,!0);return Ha(await Promise.all([ye,oe]))}let qe=E,ve=N;function De(){const j=b.subscribe(xe=>{var we,Q;const de=so(xe);mt(de,y,e.validate),at(de,y,e.warn),Re(de,y,(we=e.debounced)===null||we===void 0?void 0:we.validate),_e(de,y,(Q=e.debounced)===null||Q===void 0?void 0:Q.warn)}),Y=m.subscribe(xe=>{y=Vn(xe,[])}),q=S.subscribe(xe=>{qe=xe}),ye=G.subscribe(xe=>{ve=xe});T(),be(),B(),k(),ge(),p();function oe(){j(),K(),R(),Z(),Le(),le(),x(),Y(),q(),ye()}return oe}function St(j){w.set(j(qe)),P.set({})}function I(j){D.set(j(ve)),V.set({})}function M(j){St(()=>j)}function z(j){I(()=>j)}return H.set=M,H.update=St,te.set=z,te.update=I,{data:b,errors:H,warnings:te,touched:m,isValid:ee,isSubmitting:Me,isDirty:et,isValidating:_,interacted:Oe,validateErrors:Je,validateWarnings:Ee,cleanup:e.preventStoreStart?()=>{}:De(),start:De}}function N3(n,e){var t,i;(t=n.extend)!==null&&t!==void 0||(n.extend=[]),(i=n.debounced)!==null&&i!==void 0||(n.debounced={}),n.validate&&!Array.isArray(n.validate)&&(n.validate=[n.validate]),n.debounced.validate&&!Array.isArray(n.debounced.validate)&&(n.debounced.validate=[n.debounced.validate]),n.transform&&!Array.isArray(n.transform)&&(n.transform=[n.transform]),n.warn&&!Array.isArray(n.warn)&&(n.warn=[n.warn]),n.debounced.warn&&!Array.isArray(n.debounced.warn)&&(n.debounced.warn=[n.debounced.warn]);function r(B,{debounced:Z,level:H}={debounced:!1,level:"error"}){var k;const K=H==="error"?"validate":"warn";(k=n.debounced)!==null&&k!==void 0||(n.debounced={});const te=Z?n.debounced:n;te[K]?te[K]=[...te[K],B]:te[K]=[B]}function s(B){n.transform?n.transform=[...n.transform,B]:n.transform=[B]}const a=Array.isArray(n.extend)?n.extend:[n.extend];let o=[];const l=()=>o,c=B=>{o=B},{isSubmitting:u,isValidating:f,data:h,errors:d,warnings:m,touched:g,isValid:_,isDirty:p,cleanup:x,start:v,validateErrors:y,validateWarnings:b,interacted:E}=L3(e.storeFactory,n),w=h.update,P=h.set,S=B=>w(Z=>fa(Np(B(Z),n.transform))),T=B=>P(fa(Np(B,n.transform)));h.update=S,h.set=T;const R=T3({config:n,validateErrors:y,validateWarnings:b,_getCurrentExtenders:l,stores:{data:h,errors:d,warnings:m,touched:g,isSubmitting:u,isDirty:p,interacted:E}}),{createSubmitHandler:N,handleSubmit:D}=R.public;o=a.map(B=>B({stage:"SETUP",errors:d,warnings:m,touched:g,data:h,isDirty:p,isValid:_,isValidating:f,isSubmitting:u,interacted:E,config:n,addValidator:r,addTransformer:s,setFields:R.public.setFields,reset:R.public.reset,validate:R.public.validate,handleSubmit:D,createSubmitHandler:N}));const V=Object.assign({config:n,stores:{data:h,touched:g,errors:d,warnings:m,isSubmitting:u,isValidating:f,isValid:_,isDirty:p,interacted:E},createSubmitHandler:N,handleSubmit:D,helpers:Object.assign(Object.assign({},R.public),{addTransformer:s,addValidator:r}),extender:a,_getCurrentExtenders:l,_setCurrentExtenders:c},R.private),{form:G}=w3(V);return Object.assign({data:h,errors:d,warnings:m,touched:g,isValid:_,isSubmitting:u,isValidating:f,isDirty:p,interacted:E,form:G,cleanup:x,startStores:v},R.public)}function O3(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function U3(n){const e=N3(n??{},{storeFactory:di}),{cleanup:t,startStores:i}=e,r=O3(e,["cleanup","startStores"]);return SE(t),r}function F3(n){function e(t){return t.issues.reduce((i,r)=>r.path?$o(i,r.path.join("."),s=>!s||!Array.isArray(s)?[r.message]:[...s,r.message]):i,{})}return async function(i){try{await n.parseAsync(i)}catch(r){return e(r)}}}function B3({schema:n,level:e="error"}){return function(i){if(i.stage!=="SETUP")return{};const r=F3(n);return i.addValidator(r,{level:e}),{}}}class vc{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const k3=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,e)=>Promise.resolve(localStorage.setItem(n,e)),remove:n=>Promise.resolve(localStorage.removeItem(n))}},gn={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:k3()},Zm=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{},H3=(n,e="https://api.emailjs.com")=>{if(!n)return;const t=Zm(n);gn.publicKey=t.publicKey,gn.blockHeadless=t.blockHeadless,gn.storageProvider=t.storageProvider,gn.blockList=t.blockList,gn.limitRate=t.limitRate,gn.origin=t.origin||e},Gb=async(n,e,t={})=>{const i=await fetch(gn.origin+n,{method:"POST",headers:t,body:e}),r=await i.text(),s=new vc(i.status,r);if(i.ok)return s;throw s},Wb=(n,e,t)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},z3=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},$b=n=>n.webdriver||!n.languages||n.languages.length===0,Xb=()=>new vc(451,"Unavailable For Headless Browser"),V3=(n,e)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},G3=n=>!n.list?.length||!n.watchVariable,W3=(n,e)=>n instanceof FormData?n.get(e):n[e],jb=(n,e)=>{if(G3(n))return!1;V3(n.list,n.watchVariable);const t=W3(e,n.watchVariable);return typeof t!="string"?!1:n.list.includes(t)},qb=()=>new vc(403,"Forbidden"),$3=(n,e)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},X3=async(n,e,t)=>{const i=Number(await t.get(n)||0);return e-Date.now()+i},Zb=async(n,e,t)=>{if(!e.throttle||!t)return!1;$3(e.throttle,e.id);const i=e.id||n;return await X3(i,e.throttle,t)>0?!0:(await t.set(i,Date.now().toString()),!1)},Yb=()=>new vc(429,"Too Many Requests"),j3=async(n,e,t,i)=>{const r=Zm(i),s=r.publicKey||gn.publicKey,a=r.blockHeadless||gn.blockHeadless,o=r.storageProvider||gn.storageProvider,l={...gn.blockList,...r.blockList},c={...gn.limitRate,...r.limitRate};return a&&$b(navigator)?Promise.reject(Xb()):(Wb(s,n,e),z3(t),t&&jb(l,t)?Promise.reject(qb()):await Zb(location.pathname,c,o)?Promise.reject(Yb()):Gb("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:s,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"}))},q3=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Z3=n=>typeof n=="string"?document.querySelector(n):n,Y3=async(n,e,t,i)=>{const r=Zm(i),s=r.publicKey||gn.publicKey,a=r.blockHeadless||gn.blockHeadless,o=gn.storageProvider||r.storageProvider,l={...gn.blockList,...r.blockList},c={...gn.limitRate,...r.limitRate};if(a&&$b(navigator))return Promise.reject(Xb());const u=Z3(t);Wb(s,n,e),q3(u);const f=new FormData(u);return jb(l,f)?Promise.reject(qb()):await Zb(location.pathname,c,o)?Promise.reject(Yb()):(f.append("lib_version","4.4.1"),f.append("service_id",n),f.append("template_id",e),f.append("user_id",s),Gb("/api/v1.0/email/send-form",f))},Kb={init:H3,send:j3,sendForm:Y3,EmailJSResponseStatus:vc},K3="aa4d3n2AyvnnJExra",J3="service_lya2kgh",Q3="template_zgz3bqr";Kb.init(K3);async function eB(n){await Kb.send(J3,Q3,n)}var tB=pt('<div class="error svelte-cfh2ue"> </div>'),nB=pt('<div class="form-field svelte-cfh2ue"><div class="label-field svelte-cfh2ue"><label class="svelte-cfh2ue"> </label> <!></div> <!></div>');function Yh(n,e){on(e,!0);var t=nB(),i=Qe(t),r=Qe(i),s=Qe(r),a=vt(r,2);{var o=c=>{var u=tB(),f=Qe(u);At(()=>_n(f,e.errors[0])),Be(c,u)};ns(a,c=>{e.errors&&c(o)})}var l=vt(i,2);pf(l,()=>e.children),At(()=>{nn(r,"for",e.id),_n(s,e.label)}),Be(n,t),ln()}var iB=pt(`<textarea>
</textarea>`);function rB(n,e){let t=qt(e,"className",3,""),i=qt(e,"placeholder",3,""),r=qt(e,"rows",3,3),s=qt(e,"style",3,""),a=qt(e,"value",15);var o=iB();At(()=>{mf(o,`${"_pulse"+t()} svelte-198gi5s`),nn(o,"style",s()),nn(o,"rows",r()),nn(o,"name",e.id),nn(o,"placeholder",i())}),E0(o,a),Be(n,o)}var sB=pt(" <!>",1),aB=pt('<form><!> <!> <!> <div class="submit svelte-tgpdw5"><!></div></form>');function oB(n,e){on(e,!0);const t=Mi(),i=()=>Zt(Bo,"$_",t),r=()=>Zt(f,"$errors",t);let s=dn(""),a=dn(""),o=dn(""),l=dn(!1);const c=js.object({username:js.string().nonempty(i()("contact-error-required")),email:js.string().nonempty(i()("contact-error-required")).email(i()("contact-error-email")),message:js.string().nonempty(i()("required"))}),{form:u,errors:f}=U3({onSubmit:async b=>{if(he(l))return;Ur(Fr,"send-email"),ze(l,!0);const E={from:b.username,email:b.email,message:b.message};try{await eB(E),Pp(i()("contact-on-success"),"success"),Mp()}catch(w){throw Pp(i()("on-error"),"error"),console.error("Send email error",w),w}ze(l,!1)},extend:B3({schema:c})});var h=aB(),d=Qe(h),m=si(()=>i()("contact-name"));Yh(d,{id:"name",get label(){return he(m)},get errors(){return r().username},children:(b,E)=>{Cp(b,{autoFocus:!0,id:"username",get value(){return he(s)},set value(w){ze(s,Dt(w))}})},$$slots:{default:!0}});var g=vt(d,2),_=si(()=>i()("contact-email"));Yh(g,{id:"email",get label(){return he(_)},get errors(){return r().email},children:(b,E)=>{Cp(b,{id:"email",get value(){return he(a)},set value(w){ze(a,Dt(w))}})},$$slots:{default:!0}});var p=vt(g,2),x=si(()=>i()("contact-message"));Yh(p,{id:"message",get label(){return he(x)},get errors(){return r().message},children:(b,E)=>{rB(b,{rows:5,id:"message",get value(){return he(o)},set value(w){ze(o,Dt(w))}})},$$slots:{default:!0}});var v=vt(p,2),y=Qe(v);_s(y,{type:"submit",get disabled(){return he(l)},children:(b,E)=>{var w=sB(),P=ji(w);At(()=>_n(P,`${i()("contact-send-button")??""} `));var S=vt(P);Tb(S,{}),Be(b,w)},$$slots:{default:!0}}),hE(h,b=>u?.(b)),Be(n,h),ln()}const lB={contact:{title:"contact-title",body:oB}},cB=di({...lB.contact}),Jb=1130,Qb=di(window.innerWidth<=Jb);function uB(){Qb.set(window.innerWidth<=Jb)}window.addEventListener("resize",uB);var fB=pt('<div class="svelte-1lc1wpp"></div>');function hB(n){var e=fB();Be(n,e)}var dB=pt('<div class="screen-warning svelte-8ac2al"> </div>'),pB=pt('<div class="portfolio svelte-8ac2al"><!> <!> <!></div>'),mB=pt("<!> <!> <!>",1),gB=pt('<!> <!> <!> <main class="svelte-8ac2al"><!></main>',1);function _B(n,e){on(e,!0);const t=Mi(),i=()=>Zt(cB,"$dialog",t),r=()=>Zt(Qb,"$isMobile",t),s=()=>Zt(Bo,"$_",t),a=()=>Zt(If,"$isDialogOpen",t);let o=si(()=>i().body);var l=gB(),c=ji(l);hB(c);var u=vt(c,2);{var f=p=>{OF(p,{})};ns(u,p=>{r()||p(f)})}var h=vt(u,2);e3(h,{});var d=vt(h,2),m=Qe(d);{var g=p=>{var x=dB(),v=Qe(x);At(()=>_n(v,s()("main-mobile-warning"))),Be(p,x)},_=p=>{var x=mB(),v=ji(x);{var y=P=>{var S=pB(),T=Qe(S);$F(T,{});var R=vt(T,2);qF(R,{});var N=vt(R,2);YF(N,{}),Sl(3,S,()=>Tu,()=>({duration:500})),Be(P,S)};ns(v,P=>{a()||P(y)})}var b=vt(v,2);u3(b);var E=vt(b,2),w=si(()=>s()(i().title));MO(E,{get title(){return he(w)},children:(P,S)=>{var T=Xp(),R=ji(T);x0(R,()=>he(o),(N,D)=>{D(N,{})}),Be(P,T)},$$slots:{default:!0}}),Be(p,x)};ns(m,p=>{r()?p(g):p(_,!1)})}Be(n,l),ln()}function vB(){Jp.init()}function yB(){ei.init(),Ao.init()}j2();vB();yB();iE(_B,{target:document.getElementById("app")});
