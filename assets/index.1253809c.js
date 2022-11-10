var jf=Object.defineProperty,Hf=Object.defineProperties;var Uf=Object.getOwnPropertyDescriptors;var ml=Object.getOwnPropertySymbols;var Ia=Object.prototype.hasOwnProperty,Fa=Object.prototype.propertyIsEnumerable;var Ra=(e,t,n)=>t in e?jf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,we=(e,t)=>{for(var n in t||(t={}))Ia.call(t,n)&&Ra(e,n,t[n]);if(ml)for(var n of ml(t))Fa.call(t,n)&&Ra(e,n,t[n]);return e},et=(e,t)=>Hf(e,Uf(t));var br=(e,t)=>{var n={};for(var l in e)Ia.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&ml)for(var l of ml(e))t.indexOf(l)<0&&Fa.call(e,l)&&(n[l]=e[l]);return n};const Vf=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};Vf();function jo(e,t){const n=Object.create(null),l=e.split(",");for(let r=0;r<l.length;r++)n[l[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Wf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zf=jo(Wf);function Vc(e){return!!e||e===""}function ze(e){if(ne(e)){const t={};for(let n=0;n<e.length;n++){const l=e[n],r=Ie(l)?Yf(l):ze(l);if(r)for(const o in r)t[o]=r[o]}return t}else{if(Ie(e))return e;if(Ue(e))return e}}const Kf=/;(?![^(]*\))/g,qf=/:(.+)/;function Yf(e){const t={};return e.split(Kf).forEach(n=>{if(n){const l=n.split(qf);l.length>1&&(t[l[0].trim()]=l[1].trim())}}),t}function Le(e){let t="";if(Ie(e))t=e;else if(ne(e))for(let n=0;n<e.length;n++){const l=Le(e[n]);l&&(t+=l+" ")}else if(Ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function oe(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Ie(t)&&(e.class=Le(t)),n&&(e.style=ze(n)),e}const Tn=e=>Ie(e)?e:e==null?"":ne(e)||Ue(e)&&(e.toString===qc||!ce(e.toString))?JSON.stringify(e,Wc,2):String(e),Wc=(e,t)=>t&&t.__v_isRef?Wc(e,t.value):es(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[l,r])=>(n[`${l} =>`]=r,n),{})}:zc(t)?{[`Set(${t.size})`]:[...t.values()]}:Ue(t)&&!ne(t)&&!Yc(t)?String(t):t,De={},Qn=[],Mt=()=>{},Zf=()=>!1,Gf=/^on[^a-z]/,Jl=e=>Gf.test(e),Ho=e=>e.startsWith("onUpdate:"),lt=Object.assign,Uo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Xf=Object.prototype.hasOwnProperty,ge=(e,t)=>Xf.call(e,t),ne=Array.isArray,es=e=>Ql(e)==="[object Map]",zc=e=>Ql(e)==="[object Set]",ce=e=>typeof e=="function",Ie=e=>typeof e=="string",Vo=e=>typeof e=="symbol",Ue=e=>e!==null&&typeof e=="object",Kc=e=>Ue(e)&&ce(e.then)&&ce(e.catch),qc=Object.prototype.toString,Ql=e=>qc.call(e),Jf=e=>Ql(e).slice(8,-1),Yc=e=>Ql(e)==="[object Object]",Wo=e=>Ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,El=jo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),er=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Qf=/-(\w)/g,Vt=er(e=>e.replace(Qf,(t,n)=>n?n.toUpperCase():"")),ed=/\B([A-Z])/g,In=er(e=>e.replace(ed,"-$1").toLowerCase()),tr=er(e=>e.charAt(0).toUpperCase()+e.slice(1)),wr=er(e=>e?`on${tr(e)}`:""),Ks=(e,t)=>!Object.is(e,t),ts=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ll=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Yr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Na;const td=()=>Na||(Na=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let dt;class Zc{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&dt&&(this.parent=dt,this.index=(dt.scopes||(dt.scopes=[])).push(this)-1)}run(t){if(this.active){const n=dt;try{return dt=this,t()}finally{dt=n}}}on(){dt=this}off(){dt=this.parent}stop(t){if(this.active){let n,l;for(n=0,l=this.effects.length;n<l;n++)this.effects[n].stop();for(n=0,l=this.cleanups.length;n<l;n++)this.cleanups[n]();if(this.scopes)for(n=0,l=this.scopes.length;n<l;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function nd(e){return new Zc(e)}function sd(e,t=dt){t&&t.active&&t.effects.push(e)}function ld(){return dt}function rd(e){dt&&dt.cleanups.push(e)}const zo=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Gc=e=>(e.w&dn)>0,Xc=e=>(e.n&dn)>0,od=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=dn},ad=e=>{const{deps:t}=e;if(t.length){let n=0;for(let l=0;l<t.length;l++){const r=t[l];Gc(r)&&!Xc(r)?r.delete(e):t[n++]=r,r.w&=~dn,r.n&=~dn}t.length=n}},Zr=new WeakMap;let Es=0,dn=1;const Gr=30;let Pt;const On=Symbol(""),Xr=Symbol("");class Ko{constructor(t,n=null,l){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,sd(this,l)}run(){if(!this.active)return this.fn();let t=Pt,n=on;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Pt,Pt=this,on=!0,dn=1<<++Es,Es<=Gr?od(this):ja(this),this.fn()}finally{Es<=Gr&&ad(this),dn=1<<--Es,Pt=this.parent,on=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pt===this?this.deferStop=!0:this.active&&(ja(this),this.onStop&&this.onStop(),this.active=!1)}}function ja(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let on=!0;const Jc=[];function ps(){Jc.push(on),on=!1}function fs(){const e=Jc.pop();on=e===void 0?!0:e}function bt(e,t,n){if(on&&Pt){let l=Zr.get(e);l||Zr.set(e,l=new Map);let r=l.get(n);r||l.set(n,r=zo()),Qc(r)}}function Qc(e,t){let n=!1;Es<=Gr?Xc(e)||(e.n|=dn,n=!Gc(e)):n=!e.has(Pt),n&&(e.add(Pt),Pt.deps.push(e))}function Gt(e,t,n,l,r,o){const a=Zr.get(e);if(!a)return;let i=[];if(t==="clear")i=[...a.values()];else if(n==="length"&&ne(e))a.forEach((c,p)=>{(p==="length"||p>=l)&&i.push(c)});else switch(n!==void 0&&i.push(a.get(n)),t){case"add":ne(e)?Wo(n)&&i.push(a.get("length")):(i.push(a.get(On)),es(e)&&i.push(a.get(Xr)));break;case"delete":ne(e)||(i.push(a.get(On)),es(e)&&i.push(a.get(Xr)));break;case"set":es(e)&&i.push(a.get(On));break}if(i.length===1)i[0]&&Jr(i[0]);else{const c=[];for(const p of i)p&&c.push(...p);Jr(zo(c))}}function Jr(e,t){const n=ne(e)?e:[...e];for(const l of n)l.computed&&Ha(l);for(const l of n)l.computed||Ha(l)}function Ha(e,t){(e!==Pt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const id=jo("__proto__,__v_isRef,__isVue"),eu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Vo)),cd=qo(),ud=qo(!1,!0),pd=qo(!0),Ua=fd();function fd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const l=xe(this);for(let o=0,a=this.length;o<a;o++)bt(l,"get",o+"");const r=l[t](...n);return r===-1||r===!1?l[t](...n.map(xe)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ps();const l=xe(this)[t].apply(this,n);return fs(),l}}),e}function qo(e=!1,t=!1){return function(l,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&o===(e?t?Bd:ru:t?lu:su).get(l))return l;const a=ne(l);if(!e&&a&&ge(Ua,r))return Reflect.get(Ua,r,o);const i=Reflect.get(l,r,o);return(Vo(r)?eu.has(r):id(r))||(e||bt(l,"get",r),t)?i:Ae(i)?a&&Wo(r)?i:i.value:Ue(i)?e?Xn(i):Re(i):i}}const dd=tu(),hd=tu(!0);function tu(e=!1){return function(n,l,r,o){let a=n[l];if(qs(a)&&Ae(a)&&!Ae(r))return!1;if(!e&&!qs(r)&&(Qr(r)||(r=xe(r),a=xe(a)),!ne(n)&&Ae(a)&&!Ae(r)))return a.value=r,!0;const i=ne(n)&&Wo(l)?Number(l)<n.length:ge(n,l),c=Reflect.set(n,l,r,o);return n===xe(o)&&(i?Ks(r,a)&&Gt(n,"set",l,r):Gt(n,"add",l,r)),c}}function md(e,t){const n=ge(e,t);e[t];const l=Reflect.deleteProperty(e,t);return l&&n&&Gt(e,"delete",t,void 0),l}function gd(e,t){const n=Reflect.has(e,t);return(!Vo(t)||!eu.has(t))&&bt(e,"has",t),n}function yd(e){return bt(e,"iterate",ne(e)?"length":On),Reflect.ownKeys(e)}const nu={get:cd,set:dd,deleteProperty:md,has:gd,ownKeys:yd},_d={get:pd,set(e,t){return!0},deleteProperty(e,t){return!0}},vd=lt({},nu,{get:ud,set:hd}),Yo=e=>e,nr=e=>Reflect.getPrototypeOf(e);function gl(e,t,n=!1,l=!1){e=e.__v_raw;const r=xe(e),o=xe(t);n||(t!==o&&bt(r,"get",t),bt(r,"get",o));const{has:a}=nr(r),i=l?Yo:n?Xo:Ys;if(a.call(r,t))return i(e.get(t));if(a.call(r,o))return i(e.get(o));e!==r&&e.get(t)}function yl(e,t=!1){const n=this.__v_raw,l=xe(n),r=xe(e);return t||(e!==r&&bt(l,"has",e),bt(l,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function _l(e,t=!1){return e=e.__v_raw,!t&&bt(xe(e),"iterate",On),Reflect.get(e,"size",e)}function Va(e){e=xe(e);const t=xe(this);return nr(t).has.call(t,e)||(t.add(e),Gt(t,"add",e,e)),this}function Wa(e,t){t=xe(t);const n=xe(this),{has:l,get:r}=nr(n);let o=l.call(n,e);o||(e=xe(e),o=l.call(n,e));const a=r.call(n,e);return n.set(e,t),o?Ks(t,a)&&Gt(n,"set",e,t):Gt(n,"add",e,t),this}function za(e){const t=xe(this),{has:n,get:l}=nr(t);let r=n.call(t,e);r||(e=xe(e),r=n.call(t,e)),l&&l.call(t,e);const o=t.delete(e);return r&&Gt(t,"delete",e,void 0),o}function Ka(){const e=xe(this),t=e.size!==0,n=e.clear();return t&&Gt(e,"clear",void 0,void 0),n}function vl(e,t){return function(l,r){const o=this,a=o.__v_raw,i=xe(a),c=t?Yo:e?Xo:Ys;return!e&&bt(i,"iterate",On),a.forEach((p,f)=>l.call(r,c(p),c(f),o))}}function bl(e,t,n){return function(...l){const r=this.__v_raw,o=xe(r),a=es(o),i=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,p=r[e](...l),f=n?Yo:t?Xo:Ys;return!t&&bt(o,"iterate",c?Xr:On),{next(){const{value:h,done:d}=p.next();return d?{value:h,done:d}:{value:i?[f(h[0]),f(h[1])]:f(h),done:d}},[Symbol.iterator](){return this}}}}function Qt(e){return function(...t){return e==="delete"?!1:this}}function bd(){const e={get(o){return gl(this,o)},get size(){return _l(this)},has:yl,add:Va,set:Wa,delete:za,clear:Ka,forEach:vl(!1,!1)},t={get(o){return gl(this,o,!1,!0)},get size(){return _l(this)},has:yl,add:Va,set:Wa,delete:za,clear:Ka,forEach:vl(!1,!0)},n={get(o){return gl(this,o,!0)},get size(){return _l(this,!0)},has(o){return yl.call(this,o,!0)},add:Qt("add"),set:Qt("set"),delete:Qt("delete"),clear:Qt("clear"),forEach:vl(!0,!1)},l={get(o){return gl(this,o,!0,!0)},get size(){return _l(this,!0)},has(o){return yl.call(this,o,!0)},add:Qt("add"),set:Qt("set"),delete:Qt("delete"),clear:Qt("clear"),forEach:vl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=bl(o,!1,!1),n[o]=bl(o,!0,!1),t[o]=bl(o,!1,!0),l[o]=bl(o,!0,!0)}),[e,n,t,l]}const[wd,Ad,xd,Cd]=bd();function Zo(e,t){const n=t?e?Cd:xd:e?Ad:wd;return(l,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?l:Reflect.get(ge(n,r)&&r in l?n:l,r,o)}const kd={get:Zo(!1,!1)},$d={get:Zo(!1,!0)},Ed={get:Zo(!0,!1)},su=new WeakMap,lu=new WeakMap,ru=new WeakMap,Bd=new WeakMap;function Od(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dd(e){return e.__v_skip||!Object.isExtensible(e)?0:Od(Jf(e))}function Re(e){return qs(e)?e:Go(e,!1,nu,kd,su)}function Pd(e){return Go(e,!1,vd,$d,lu)}function Xn(e){return Go(e,!0,_d,Ed,ru)}function Go(e,t,n,l,r){if(!Ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const a=Dd(e);if(a===0)return e;const i=new Proxy(e,a===2?l:n);return r.set(e,i),i}function ns(e){return qs(e)?ns(e.__v_raw):!!(e&&e.__v_isReactive)}function qs(e){return!!(e&&e.__v_isReadonly)}function Qr(e){return!!(e&&e.__v_isShallow)}function ou(e){return ns(e)||qs(e)}function xe(e){const t=e&&e.__v_raw;return t?xe(t):e}function sr(e){return Ll(e,"__v_skip",!0),e}const Ys=e=>Ue(e)?Re(e):e,Xo=e=>Ue(e)?Xn(e):e;function Jo(e){on&&Pt&&(e=xe(e),Qc(e.dep||(e.dep=zo())))}function Qo(e,t){e=xe(e),e.dep&&Jr(e.dep)}function Ae(e){return!!(e&&e.__v_isRef===!0)}function q(e){return au(e,!1)}function Wt(e){return au(e,!0)}function au(e,t){return Ae(e)?e:new Sd(e,t)}class Sd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:xe(t),this._value=n?t:Ys(t)}get value(){return Jo(this),this._value}set value(t){t=this.__v_isShallow?t:xe(t),Ks(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Ys(t),Qo(this))}}function v(e){return Ae(e)?e.value:e}const Md={get:(e,t,n)=>v(Reflect.get(e,t,n)),set:(e,t,n,l)=>{const r=e[t];return Ae(r)&&!Ae(n)?(r.value=n,!0):Reflect.set(e,t,n,l)}};function iu(e){return ns(e)?e:new Proxy(e,Md)}class Td{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:l}=t(()=>Jo(this),()=>Qo(this));this._get=n,this._set=l}get value(){return this._get()}set value(t){this._set(t)}}function Ld(e){return new Td(e)}function Rd(e){const t=ne(e)?new Array(e.length):{};for(const n in e)t[n]=Fd(e,n);return t}class Id{constructor(t,n,l){this._object=t,this._key=n,this._defaultValue=l,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Fd(e,t,n){const l=e[t];return Ae(l)?l:new Id(e,t,n)}class Nd{constructor(t,n,l,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ko(t,()=>{this._dirty||(this._dirty=!0,Qo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=l}get value(){const t=xe(this);return Jo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function jd(e,t,n=!1){let l,r;const o=ce(e);return o?(l=e,r=Mt):(l=e.get,r=e.set),new Nd(l,r,o||!r,n)}function an(e,t,n,l){let r;try{r=l?e(...l):e()}catch(o){lr(o,t,n)}return r}function Tt(e,t,n,l){if(ce(e)){const o=an(e,t,n,l);return o&&Kc(o)&&o.catch(a=>{lr(a,t,n)}),o}const r=[];for(let o=0;o<e.length;o++)r.push(Tt(e[o],t,n,l));return r}function lr(e,t,n,l=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const a=t.proxy,i=n;for(;o;){const p=o.ec;if(p){for(let f=0;f<p.length;f++)if(p[f](e,a,i)===!1)return}o=o.parent}const c=t.appContext.config.errorHandler;if(c){an(c,null,10,[e,a,i]);return}}Hd(e,n,r,l)}function Hd(e,t,n,l=!0){console.error(e)}let Rl=!1,eo=!1;const gt=[];let Yt=0;const Ps=[];let Bs=null,qn=0;const Ss=[];let nn=null,Yn=0;const cu=Promise.resolve();let ea=null,to=null;function Ye(e){const t=ea||cu;return e?t.then(this?e.bind(this):e):t}function Ud(e){let t=Yt+1,n=gt.length;for(;t<n;){const l=t+n>>>1;Zs(gt[l])<e?t=l+1:n=l}return t}function uu(e){(!gt.length||!gt.includes(e,Rl&&e.allowRecurse?Yt+1:Yt))&&e!==to&&(e.id==null?gt.push(e):gt.splice(Ud(e.id),0,e),pu())}function pu(){!Rl&&!eo&&(eo=!0,ea=cu.then(hu))}function Vd(e){const t=gt.indexOf(e);t>Yt&&gt.splice(t,1)}function fu(e,t,n,l){ne(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?l+1:l))&&n.push(e),pu()}function Wd(e){fu(e,Bs,Ps,qn)}function zd(e){fu(e,nn,Ss,Yn)}function rr(e,t=null){if(Ps.length){for(to=t,Bs=[...new Set(Ps)],Ps.length=0,qn=0;qn<Bs.length;qn++)Bs[qn]();Bs=null,qn=0,to=null,rr(e,t)}}function du(e){if(rr(),Ss.length){const t=[...new Set(Ss)];if(Ss.length=0,nn){nn.push(...t);return}for(nn=t,nn.sort((n,l)=>Zs(n)-Zs(l)),Yn=0;Yn<nn.length;Yn++)nn[Yn]();nn=null,Yn=0}}const Zs=e=>e.id==null?1/0:e.id;function hu(e){eo=!1,Rl=!0,rr(e),gt.sort((n,l)=>Zs(n)-Zs(l));const t=Mt;try{for(Yt=0;Yt<gt.length;Yt++){const n=gt[Yt];n&&n.active!==!1&&an(n,null,14)}}finally{Yt=0,gt.length=0,du(),Rl=!1,ea=null,(gt.length||Ps.length||Ss.length)&&hu(e)}}function Kd(e,t,...n){if(e.isUnmounted)return;const l=e.vnode.props||De;let r=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in l){const f=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:d}=l[f]||De;d&&(r=n.map(m=>m.trim())),h&&(r=n.map(Yr))}let i,c=l[i=wr(t)]||l[i=wr(Vt(t))];!c&&o&&(c=l[i=wr(In(t))]),c&&Tt(c,e,6,r);const p=l[i+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Tt(p,e,6,r)}}function mu(e,t,n=!1){const l=t.emitsCache,r=l.get(e);if(r!==void 0)return r;const o=e.emits;let a={},i=!1;if(!ce(e)){const c=p=>{const f=mu(p,t,!0);f&&(i=!0,lt(a,f))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!i?(l.set(e,null),null):(ne(o)?o.forEach(c=>a[c]=null):lt(a,o),l.set(e,a),a)}function or(e,t){return!e||!Jl(t)?!1:(t=t.slice(2).replace(/Once$/,""),ge(e,t[0].toLowerCase()+t.slice(1))||ge(e,In(t))||ge(e,t))}let Ge=null,ar=null;function Il(e){const t=Ge;return Ge=e,ar=e&&e.type.__scopeId||null,t}function y9(e){ar=e}function _9(){ar=null}function M(e,t=Ge,n){if(!t||e._n)return e;const l=(...r)=>{l._d&&si(-1);const o=Il(t),a=e(...r);return Il(o),l._d&&si(1),a};return l._n=!0,l._c=!0,l._d=!0,l}function Ar(e){const{type:t,vnode:n,proxy:l,withProxy:r,props:o,propsOptions:[a],slots:i,attrs:c,emit:p,render:f,renderCache:h,data:d,setupState:m,ctx:y,inheritAttrs:w}=e;let b,$;const C=Il(e);try{if(n.shapeFlag&4){const E=r||l;b=Nt(f.call(E,E,h,o,m,d,y)),$=c}else{const E=t;b=Nt(E.length>1?E(o,{attrs:c,slots:i,emit:p}):E(o,null)),$=t.props?c:qd(c)}}catch(E){Ts.length=0,lr(E,e,1),b=S(hn)}let k=b;if($&&w!==!1){const E=Object.keys($),{shapeFlag:j}=k;E.length&&j&7&&(a&&E.some(Ho)&&($=Yd($,a)),k=Rn(k,$))}return n.dirs&&(k=Rn(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),b=k,Il(C),b}const qd=e=>{let t;for(const n in e)(n==="class"||n==="style"||Jl(n))&&((t||(t={}))[n]=e[n]);return t},Yd=(e,t)=>{const n={};for(const l in e)(!Ho(l)||!(l.slice(9)in t))&&(n[l]=e[l]);return n};function Zd(e,t,n){const{props:l,children:r,component:o}=e,{props:a,children:i,patchFlag:c}=t,p=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return l?qa(l,a,p):!!a;if(c&8){const f=t.dynamicProps;for(let h=0;h<f.length;h++){const d=f[h];if(a[d]!==l[d]&&!or(p,d))return!0}}}else return(r||i)&&(!i||!i.$stable)?!0:l===a?!1:l?a?qa(l,a,p):!0:!!a;return!1}function qa(e,t,n){const l=Object.keys(t);if(l.length!==Object.keys(e).length)return!0;for(let r=0;r<l.length;r++){const o=l[r];if(t[o]!==e[o]&&!or(n,o))return!0}return!1}function Gd({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const gu=e=>e.__isSuspense;function Xd(e,t){t&&t.pendingBranch?ne(e)?t.effects.push(...e):t.effects.push(e):zd(e)}function mt(e,t){if(We){let n=We.provides;const l=We.parent&&We.parent.provides;l===n&&(n=We.provides=Object.create(l)),n[e]=t}}function I(e,t,n=!1){const l=We||Ge;if(l){const r=l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&ce(t)?t.call(l.proxy):t}}function al(e,t){return ta(e,null,t)}const Ya={};function pe(e,t,n){return ta(e,t,n)}function ta(e,t,{immediate:n,deep:l,flush:r,onTrack:o,onTrigger:a}=De){const i=We;let c,p=!1,f=!1;if(Ae(e)?(c=()=>e.value,p=Qr(e)):ns(e)?(c=()=>e,l=!0):ne(e)?(f=!0,p=e.some($=>ns($)||Qr($)),c=()=>e.map($=>{if(Ae($))return $.value;if(ns($))return kn($);if(ce($))return an($,i,2)})):ce(e)?t?c=()=>an(e,i,2):c=()=>{if(!(i&&i.isUnmounted))return h&&h(),Tt(e,i,3,[d])}:c=Mt,t&&l){const $=c;c=()=>kn($())}let h,d=$=>{h=b.onStop=()=>{an($,i,4)}};if(Xs)return d=Mt,t?n&&Tt(t,i,3,[c(),f?[]:void 0,d]):c(),Mt;let m=f?[]:Ya;const y=()=>{if(!!b.active)if(t){const $=b.run();(l||p||(f?$.some((C,k)=>Ks(C,m[k])):Ks($,m)))&&(h&&h(),Tt(t,i,3,[$,m===Ya?void 0:m,d]),m=$)}else b.run()};y.allowRecurse=!!t;let w;r==="sync"?w=y:r==="post"?w=()=>qe(y,i&&i.suspense):w=()=>Wd(y);const b=new Ko(c,w);return t?n?y():m=b.run():r==="post"?qe(b.run.bind(b),i&&i.suspense):b.run(),()=>{b.stop(),i&&i.scope&&Uo(i.scope.effects,b)}}function Jd(e,t,n){const l=this.proxy,r=Ie(e)?e.includes(".")?yu(l,e):()=>l[e]:e.bind(l,l);let o;ce(t)?o=t:(o=t.handler,n=t);const a=We;as(this);const i=ta(r,o.bind(l),n);return a?as(a):Pn(),i}function yu(e,t){const n=t.split(".");return()=>{let l=e;for(let r=0;r<n.length&&l;r++)l=l[n[r]];return l}}function kn(e,t){if(!Ue(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ae(e))kn(e.value,t);else if(ne(e))for(let n=0;n<e.length;n++)kn(e[n],t);else if(zc(e)||es(e))e.forEach(n=>{kn(n,t)});else if(Yc(e))for(const n in e)kn(e[n],t);return e}function _u(e,t){e.shapeFlag&6&&e.component?_u(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ye(e){return ce(e)?{setup:e,name:e.name}:e}const ss=e=>!!e.type.__asyncLoader,vu=e=>e.type.__isKeepAlive,Qd={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Fn(),l=n.ctx;if(!l.renderer)return()=>{const C=t.default&&t.default();return C&&C.length===1?C[0]:C};const r=new Map,o=new Set;let a=null;const i=n.suspense,{renderer:{p:c,m:p,um:f,o:{createElement:h}}}=l,d=h("div");l.activate=(C,k,E,j,L)=>{const Y=C.component;p(C,k,E,0,i),c(Y.vnode,C,k,E,Y,i,j,C.slotScopeIds,L),qe(()=>{Y.isDeactivated=!1,Y.a&&ts(Y.a);const ae=C.props&&C.props.onVnodeMounted;ae&&xt(ae,Y.parent,C)},i)},l.deactivate=C=>{const k=C.component;p(C,d,null,1,i),qe(()=>{k.da&&ts(k.da);const E=C.props&&C.props.onVnodeUnmounted;E&&xt(E,k.parent,C),k.isDeactivated=!0},i)};function m(C){xr(C),f(C,n,i,!0)}function y(C){r.forEach((k,E)=>{const j=io(k.type);j&&(!C||!C(j))&&w(E)})}function w(C){const k=r.get(C);!a||k.type!==a.type?m(k):a&&xr(a),r.delete(C),o.delete(C)}pe(()=>[e.include,e.exclude],([C,k])=>{C&&y(E=>Os(C,E)),k&&y(E=>!Os(k,E))},{flush:"post",deep:!0});let b=null;const $=()=>{b!=null&&r.set(b,Cr(n.subTree))};return ds($),xu($),cr(()=>{r.forEach(C=>{const{subTree:k,suspense:E}=n,j=Cr(k);if(C.type===j.type){xr(j);const L=j.component.da;L&&qe(L,E);return}m(C)})}),()=>{if(b=null,!t.default)return null;const C=t.default(),k=C[0];if(C.length>1)return a=null,C;if(!Ln(k)||!(k.shapeFlag&4)&&!(k.shapeFlag&128))return a=null,k;let E=Cr(k);const j=E.type,L=io(ss(E)?E.type.__asyncResolved||{}:j),{include:Y,exclude:ae,max:fe}=e;if(Y&&(!L||!Os(Y,L))||ae&&L&&Os(ae,L))return a=E,k;const he=E.key==null?j:E.key,_e=r.get(he);return E.el&&(E=Rn(E),k.shapeFlag&128&&(k.ssContent=E)),b=he,_e?(E.el=_e.el,E.component=_e.component,E.transition&&_u(E,E.transition),E.shapeFlag|=512,o.delete(he),o.add(he)):(o.add(he),fe&&o.size>parseInt(fe,10)&&w(o.values().next().value)),E.shapeFlag|=256,a=E,gu(k.type)?k:E}}},bu=Qd;function Os(e,t){return ne(e)?e.some(n=>Os(n,t)):Ie(e)?e.split(",").includes(t):e.test?e.test(t):!1}function eh(e,t){wu(e,"a",t)}function th(e,t){wu(e,"da",t)}function wu(e,t,n=We){const l=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(ir(t,l,n),n){let r=n.parent;for(;r&&r.parent;)vu(r.parent.vnode)&&nh(l,t,n,r),r=r.parent}}function nh(e,t,n,l){const r=ir(t,e,l,!0);ur(()=>{Uo(l[t],r)},n)}function xr(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function Cr(e){return e.shapeFlag&128?e.ssContent:e}function ir(e,t,n=We,l=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;ps(),as(n);const i=Tt(t,n,e,a);return Pn(),fs(),i});return l?r.unshift(o):r.push(o),o}}const Xt=e=>(t,n=We)=>(!Xs||e==="sp")&&ir(e,t,n),Au=Xt("bm"),ds=Xt("m"),sh=Xt("bu"),xu=Xt("u"),cr=Xt("bum"),ur=Xt("um"),lh=Xt("sp"),rh=Xt("rtg"),oh=Xt("rtc");function ah(e,t=We){ir("ec",e,t)}function Dn(e,t){const n=Ge;if(n===null)return e;const l=fr(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[a,i,c,p=De]=t[o];ce(a)&&(a={mounted:a,updated:a}),a.deep&&kn(i),r.push({dir:a,instance:l,value:i,oldValue:void 0,arg:c,modifiers:p})}return e}function gn(e,t,n,l){const r=e.dirs,o=t&&t.dirs;for(let a=0;a<r.length;a++){const i=r[a];o&&(i.oldValue=o[a].value);let c=i.dir[l];c&&(ps(),Tt(c,n,8,[e.el,i,e,t]),fs())}}const Cu="components",ih="directives";function Ke(e,t){return ku(Cu,e,!0,t)||e}const ch=Symbol();function Fl(e){return ku(ih,e)}function ku(e,t,n=!0,l=!1){const r=Ge||We;if(r){const o=r.type;if(e===Cu){const i=io(o);if(i&&(i===t||i===Vt(t)||i===tr(Vt(t))))return o}const a=Za(r[e]||o[e],t)||Za(r.appContext[e],t);return!a&&l?o:a}}function Za(e,t){return e&&(e[t]||e[Vt(t)]||e[tr(Vt(t))])}function il(e,t,n,l){let r;const o=n&&n[l];if(ne(e)||Ie(e)){r=new Array(e.length);for(let a=0,i=e.length;a<i;a++)r[a]=t(e[a],a,void 0,o&&o[a])}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,o&&o[a])}else if(Ue(e))if(e[Symbol.iterator])r=Array.from(e,(a,i)=>t(a,i,void 0,o&&o[i]));else{const a=Object.keys(e);r=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const p=a[i];r[i]=t(e[p],p,i,o&&o[i])}}else r=[];return n&&(n[l]=r),r}function wt(e,t,n={},l,r){if(Ge.isCE||Ge.parent&&ss(Ge.parent)&&Ge.parent.isCE)return S("slot",t==="default"?null:{name:t},l&&l());let o=e[t];o&&o._c&&(o._d=!1),A();const a=o&&$u(o(n)),i=K(ke,{key:n.key||`_${t}`},a||(l?l():[]),a&&e._===1?64:-2);return!r&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),o&&o._c&&(o._d=!0),i}function $u(e){return e.some(t=>Ln(t)?!(t.type===hn||t.type===ke&&!$u(t.children)):!0)?e:null}const no=e=>e?Iu(e)?fr(e)||e.proxy:no(e.parent):null,Nl=lt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>no(e.parent),$root:e=>no(e.root),$emit:e=>e.emit,$options:e=>Bu(e),$forceUpdate:e=>e.f||(e.f=()=>uu(e.update)),$nextTick:e=>e.n||(e.n=Ye.bind(e.proxy)),$watch:e=>Jd.bind(e)}),uh={get({_:e},t){const{ctx:n,setupState:l,data:r,props:o,accessCache:a,type:i,appContext:c}=e;let p;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return l[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(l!==De&&ge(l,t))return a[t]=1,l[t];if(r!==De&&ge(r,t))return a[t]=2,r[t];if((p=e.propsOptions[0])&&ge(p,t))return a[t]=3,o[t];if(n!==De&&ge(n,t))return a[t]=4,n[t];so&&(a[t]=0)}}const f=Nl[t];let h,d;if(f)return t==="$attrs"&&bt(e,"get",t),f(e);if((h=i.__cssModules)&&(h=h[t]))return h;if(n!==De&&ge(n,t))return a[t]=4,n[t];if(d=c.config.globalProperties,ge(d,t))return d[t]},set({_:e},t,n){const{data:l,setupState:r,ctx:o}=e;return r!==De&&ge(r,t)?(r[t]=n,!0):l!==De&&ge(l,t)?(l[t]=n,!0):ge(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:l,appContext:r,propsOptions:o}},a){let i;return!!n[a]||e!==De&&ge(e,a)||t!==De&&ge(t,a)||(i=o[0])&&ge(i,a)||ge(l,a)||ge(Nl,a)||ge(r.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ge(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let so=!0;function ph(e){const t=Bu(e),n=e.proxy,l=e.ctx;so=!1,t.beforeCreate&&Ga(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:a,watch:i,provide:c,inject:p,created:f,beforeMount:h,mounted:d,beforeUpdate:m,updated:y,activated:w,deactivated:b,beforeDestroy:$,beforeUnmount:C,destroyed:k,unmounted:E,render:j,renderTracked:L,renderTriggered:Y,errorCaptured:ae,serverPrefetch:fe,expose:he,inheritAttrs:_e,components:Te,directives:Fe,filters:Ze}=t;if(p&&fh(p,l,null,e.appContext.config.unwrapInjectedRef),a)for(const se in a){const ee=a[se];ce(ee)&&(l[se]=ee.bind(n))}if(r){const se=r.call(n,n);Ue(se)&&(e.data=Re(se))}if(so=!0,o)for(const se in o){const ee=o[se],me=ce(ee)?ee.bind(n,n):ce(ee.get)?ee.get.bind(n,n):Mt,It=!ce(ee)&&ce(ee.set)?ee.set.bind(n):Mt,Qe=B({get:me,set:It});Object.defineProperty(l,se,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:At=>Qe.value=At})}if(i)for(const se in i)Eu(i[se],l,n,se);if(c){const se=ce(c)?c.call(n):c;Reflect.ownKeys(se).forEach(ee=>{mt(ee,se[ee])})}f&&Ga(f,e,"c");function te(se,ee){ne(ee)?ee.forEach(me=>se(me.bind(n))):ee&&se(ee.bind(n))}if(te(Au,h),te(ds,d),te(sh,m),te(xu,y),te(eh,w),te(th,b),te(ah,ae),te(oh,L),te(rh,Y),te(cr,C),te(ur,E),te(lh,fe),ne(he))if(he.length){const se=e.exposed||(e.exposed={});he.forEach(ee=>{Object.defineProperty(se,ee,{get:()=>n[ee],set:me=>n[ee]=me})})}else e.exposed||(e.exposed={});j&&e.render===Mt&&(e.render=j),_e!=null&&(e.inheritAttrs=_e),Te&&(e.components=Te),Fe&&(e.directives=Fe)}function fh(e,t,n=Mt,l=!1){ne(e)&&(e=lo(e));for(const r in e){const o=e[r];let a;Ue(o)?"default"in o?a=I(o.from||r,o.default,!0):a=I(o.from||r):a=I(o),Ae(a)&&l?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):t[r]=a}}function Ga(e,t,n){Tt(ne(e)?e.map(l=>l.bind(t.proxy)):e.bind(t.proxy),t,n)}function Eu(e,t,n,l){const r=l.includes(".")?yu(n,l):()=>n[l];if(Ie(e)){const o=t[e];ce(o)&&pe(r,o)}else if(ce(e))pe(r,e.bind(n));else if(Ue(e))if(ne(e))e.forEach(o=>Eu(o,t,n,l));else{const o=ce(e.handler)?e.handler.bind(n):t[e.handler];ce(o)&&pe(r,o,e)}}function Bu(e){const t=e.type,{mixins:n,extends:l}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,i=o.get(t);let c;return i?c=i:!r.length&&!n&&!l?c=t:(c={},r.length&&r.forEach(p=>jl(c,p,a,!0)),jl(c,t,a)),o.set(t,c),c}function jl(e,t,n,l=!1){const{mixins:r,extends:o}=t;o&&jl(e,o,n,!0),r&&r.forEach(a=>jl(e,a,n,!0));for(const a in t)if(!(l&&a==="expose")){const i=dh[a]||n&&n[a];e[a]=i?i(e[a],t[a]):t[a]}return e}const dh={data:Xa,props:bn,emits:bn,methods:bn,computed:bn,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:bn,directives:bn,watch:mh,provide:Xa,inject:hh};function Xa(e,t){return t?e?function(){return lt(ce(e)?e.call(this,this):e,ce(t)?t.call(this,this):t)}:t:e}function hh(e,t){return bn(lo(e),lo(t))}function lo(e){if(ne(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function bn(e,t){return e?lt(lt(Object.create(null),e),t):t}function mh(e,t){if(!e)return t;if(!t)return e;const n=lt(Object.create(null),e);for(const l in t)n[l]=tt(e[l],t[l]);return n}function gh(e,t,n,l=!1){const r={},o={};Ll(o,pr,1),e.propsDefaults=Object.create(null),Ou(e,t,r,o);for(const a in e.propsOptions[0])a in r||(r[a]=void 0);n?e.props=l?r:Pd(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function yh(e,t,n,l){const{props:r,attrs:o,vnode:{patchFlag:a}}=e,i=xe(r),[c]=e.propsOptions;let p=!1;if((l||a>0)&&!(a&16)){if(a&8){const f=e.vnode.dynamicProps;for(let h=0;h<f.length;h++){let d=f[h];if(or(e.emitsOptions,d))continue;const m=t[d];if(c)if(ge(o,d))m!==o[d]&&(o[d]=m,p=!0);else{const y=Vt(d);r[y]=ro(c,i,y,m,e,!1)}else m!==o[d]&&(o[d]=m,p=!0)}}}else{Ou(e,t,r,o)&&(p=!0);let f;for(const h in i)(!t||!ge(t,h)&&((f=In(h))===h||!ge(t,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(r[h]=ro(c,i,h,void 0,e,!0)):delete r[h]);if(o!==i)for(const h in o)(!t||!ge(t,h)&&!0)&&(delete o[h],p=!0)}p&&Gt(e,"set","$attrs")}function Ou(e,t,n,l){const[r,o]=e.propsOptions;let a=!1,i;if(t)for(let c in t){if(El(c))continue;const p=t[c];let f;r&&ge(r,f=Vt(c))?!o||!o.includes(f)?n[f]=p:(i||(i={}))[f]=p:or(e.emitsOptions,c)||(!(c in l)||p!==l[c])&&(l[c]=p,a=!0)}if(o){const c=xe(n),p=i||De;for(let f=0;f<o.length;f++){const h=o[f];n[h]=ro(r,c,h,p[h],e,!ge(p,h))}}return a}function ro(e,t,n,l,r,o){const a=e[n];if(a!=null){const i=ge(a,"default");if(i&&l===void 0){const c=a.default;if(a.type!==Function&&ce(c)){const{propsDefaults:p}=r;n in p?l=p[n]:(as(r),l=p[n]=c.call(null,t),Pn())}else l=c}a[0]&&(o&&!i?l=!1:a[1]&&(l===""||l===In(n))&&(l=!0))}return l}function Du(e,t,n=!1){const l=t.propsCache,r=l.get(e);if(r)return r;const o=e.props,a={},i=[];let c=!1;if(!ce(e)){const f=h=>{c=!0;const[d,m]=Du(h,t,!0);lt(a,d),m&&i.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!o&&!c)return l.set(e,Qn),Qn;if(ne(o))for(let f=0;f<o.length;f++){const h=Vt(o[f]);Ja(h)&&(a[h]=De)}else if(o)for(const f in o){const h=Vt(f);if(Ja(h)){const d=o[f],m=a[h]=ne(d)||ce(d)?{type:d}:d;if(m){const y=ti(Boolean,m.type),w=ti(String,m.type);m[0]=y>-1,m[1]=w<0||y<w,(y>-1||ge(m,"default"))&&i.push(h)}}}const p=[a,i];return l.set(e,p),p}function Ja(e){return e[0]!=="$"}function Qa(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function ei(e,t){return Qa(e)===Qa(t)}function ti(e,t){return ne(t)?t.findIndex(n=>ei(n,e)):ce(t)&&ei(t,e)?0:-1}const Pu=e=>e[0]==="_"||e==="$stable",na=e=>ne(e)?e.map(Nt):[Nt(e)],_h=(e,t,n)=>{if(t._n)return t;const l=M((...r)=>na(t(...r)),n);return l._c=!1,l},Su=(e,t,n)=>{const l=e._ctx;for(const r in e){if(Pu(r))continue;const o=e[r];if(ce(o))t[r]=_h(r,o,l);else if(o!=null){const a=na(o);t[r]=()=>a}}},Mu=(e,t)=>{const n=na(t);e.slots.default=()=>n},vh=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=xe(t),Ll(t,"_",n)):Su(t,e.slots={})}else e.slots={},t&&Mu(e,t);Ll(e.slots,pr,1)},bh=(e,t,n)=>{const{vnode:l,slots:r}=e;let o=!0,a=De;if(l.shapeFlag&32){const i=t._;i?n&&i===1?o=!1:(lt(r,t),!n&&i===1&&delete r._):(o=!t.$stable,Su(t,r)),a=t}else t&&(Mu(e,t),a={default:1});if(o)for(const i in r)!Pu(i)&&!(i in a)&&delete r[i]};function Tu(){return{app:null,config:{isNativeTag:Zf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wh=0;function Ah(e,t){return function(l,r=null){ce(l)||(l=Object.assign({},l)),r!=null&&!Ue(r)&&(r=null);const o=Tu(),a=new Set;let i=!1;const c=o.app={_uid:wh++,_component:l,_props:r,_container:null,_context:o,_instance:null,version:jh,get config(){return o.config},set config(p){},use(p,...f){return a.has(p)||(p&&ce(p.install)?(a.add(p),p.install(c,...f)):ce(p)&&(a.add(p),p(c,...f))),c},mixin(p){return o.mixins.includes(p)||o.mixins.push(p),c},component(p,f){return f?(o.components[p]=f,c):o.components[p]},directive(p,f){return f?(o.directives[p]=f,c):o.directives[p]},mount(p,f,h){if(!i){const d=S(l,r);return d.appContext=o,f&&t?t(d,p):e(d,p,h),i=!0,c._container=p,p.__vue_app__=c,fr(d.component)||d.component.proxy}},unmount(){i&&(e(null,c._container),delete c._container.__vue_app__)},provide(p,f){return o.provides[p]=f,c}};return c}}function oo(e,t,n,l,r=!1){if(ne(e)){e.forEach((d,m)=>oo(d,t&&(ne(t)?t[m]:t),n,l,r));return}if(ss(l)&&!r)return;const o=l.shapeFlag&4?fr(l.component)||l.component.proxy:l.el,a=r?null:o,{i,r:c}=e,p=t&&t.r,f=i.refs===De?i.refs={}:i.refs,h=i.setupState;if(p!=null&&p!==c&&(Ie(p)?(f[p]=null,ge(h,p)&&(h[p]=null)):Ae(p)&&(p.value=null)),ce(c))an(c,i,12,[a,f]);else{const d=Ie(c),m=Ae(c);if(d||m){const y=()=>{if(e.f){const w=d?f[c]:c.value;r?ne(w)&&Uo(w,o):ne(w)?w.includes(o)||w.push(o):d?(f[c]=[o],ge(h,c)&&(h[c]=f[c])):(c.value=[o],e.k&&(f[e.k]=c.value))}else d?(f[c]=a,ge(h,c)&&(h[c]=a)):Ae(c)&&(c.value=a,e.k&&(f[e.k]=a))};a?(y.id=-1,qe(y,n)):y()}}}const qe=Xd;function xh(e){return Ch(e)}function Ch(e,t){const n=td();n.__VUE__=!0;const{insert:l,remove:r,patchProp:o,createElement:a,createText:i,createComment:c,setText:p,setElementText:f,parentNode:h,nextSibling:d,setScopeId:m=Mt,cloneNode:y,insertStaticContent:w}=e,b=(g,_,x,P=null,D=null,N=null,W=!1,F=null,H=!!_.dynamicChildren)=>{if(g===_)return;g&&!vs(g,_)&&(P=X(g),at(g,D,N,!0),g=null),_.patchFlag===-2&&(H=!1,_.dynamicChildren=null);const{type:T,ref:J,shapeFlag:G}=_;switch(T){case la:$(g,_,x,P);break;case hn:C(g,_,x,P);break;case kr:g==null&&k(_,x,P,W);break;case ke:Fe(g,_,x,P,D,N,W,F,H);break;default:G&1?L(g,_,x,P,D,N,W,F,H):G&6?Ze(g,_,x,P,D,N,W,F,H):(G&64||G&128)&&T.process(g,_,x,P,D,N,W,F,H,Pe)}J!=null&&D&&oo(J,g&&g.ref,N,_||g,!_)},$=(g,_,x,P)=>{if(g==null)l(_.el=i(_.children),x,P);else{const D=_.el=g.el;_.children!==g.children&&p(D,_.children)}},C=(g,_,x,P)=>{g==null?l(_.el=c(_.children||""),x,P):_.el=g.el},k=(g,_,x,P)=>{[g.el,g.anchor]=w(g.children,_,x,P,g.el,g.anchor)},E=({el:g,anchor:_},x,P)=>{let D;for(;g&&g!==_;)D=d(g),l(g,x,P),g=D;l(_,x,P)},j=({el:g,anchor:_})=>{let x;for(;g&&g!==_;)x=d(g),r(g),g=x;r(_)},L=(g,_,x,P,D,N,W,F,H)=>{W=W||_.type==="svg",g==null?Y(_,x,P,D,N,W,F,H):he(g,_,D,N,W,F,H)},Y=(g,_,x,P,D,N,W,F)=>{let H,T;const{type:J,props:G,shapeFlag:Q,transition:le,patchFlag:ve,dirs:Ee}=g;if(g.el&&y!==void 0&&ve===-1)H=g.el=y(g.el);else{if(H=g.el=a(g.type,N,G&&G.is,G),Q&8?f(H,g.children):Q&16&&fe(g.children,H,null,P,D,N&&J!=="foreignObject",W,F),Ee&&gn(g,null,P,"created"),G){for(const Se in G)Se!=="value"&&!El(Se)&&o(H,Se,null,G[Se],N,g.children,P,D,R);"value"in G&&o(H,"value",null,G.value),(T=G.onVnodeBeforeMount)&&xt(T,P,g)}ae(H,g,g.scopeId,W,P)}Ee&&gn(g,null,P,"beforeMount");const Be=(!D||D&&!D.pendingBranch)&&le&&!le.persisted;Be&&le.beforeEnter(H),l(H,_,x),((T=G&&G.onVnodeMounted)||Be||Ee)&&qe(()=>{T&&xt(T,P,g),Be&&le.enter(H),Ee&&gn(g,null,P,"mounted")},D)},ae=(g,_,x,P,D)=>{if(x&&m(g,x),P)for(let N=0;N<P.length;N++)m(g,P[N]);if(D){let N=D.subTree;if(_===N){const W=D.vnode;ae(g,W,W.scopeId,W.slotScopeIds,D.parent)}}},fe=(g,_,x,P,D,N,W,F,H=0)=>{for(let T=H;T<g.length;T++){const J=g[T]=F?sn(g[T]):Nt(g[T]);b(null,J,_,x,P,D,N,W,F)}},he=(g,_,x,P,D,N,W)=>{const F=_.el=g.el;let{patchFlag:H,dynamicChildren:T,dirs:J}=_;H|=g.patchFlag&16;const G=g.props||De,Q=_.props||De;let le;x&&yn(x,!1),(le=Q.onVnodeBeforeUpdate)&&xt(le,x,_,g),J&&gn(_,g,x,"beforeUpdate"),x&&yn(x,!0);const ve=D&&_.type!=="foreignObject";if(T?_e(g.dynamicChildren,T,F,x,P,ve,N):W||me(g,_,F,null,x,P,ve,N,!1),H>0){if(H&16)Te(F,_,G,Q,x,P,D);else if(H&2&&G.class!==Q.class&&o(F,"class",null,Q.class,D),H&4&&o(F,"style",G.style,Q.style,D),H&8){const Ee=_.dynamicProps;for(let Be=0;Be<Ee.length;Be++){const Se=Ee[Be],Bt=G[Se],Vn=Q[Se];(Vn!==Bt||Se==="value")&&o(F,Se,Bt,Vn,D,g.children,x,P,R)}}H&1&&g.children!==_.children&&f(F,_.children)}else!W&&T==null&&Te(F,_,G,Q,x,P,D);((le=Q.onVnodeUpdated)||J)&&qe(()=>{le&&xt(le,x,_,g),J&&gn(_,g,x,"updated")},P)},_e=(g,_,x,P,D,N,W)=>{for(let F=0;F<_.length;F++){const H=g[F],T=_[F],J=H.el&&(H.type===ke||!vs(H,T)||H.shapeFlag&70)?h(H.el):x;b(H,T,J,null,P,D,N,W,!0)}},Te=(g,_,x,P,D,N,W)=>{if(x!==P){for(const F in P){if(El(F))continue;const H=P[F],T=x[F];H!==T&&F!=="value"&&o(g,F,T,H,W,_.children,D,N,R)}if(x!==De)for(const F in x)!El(F)&&!(F in P)&&o(g,F,x[F],null,W,_.children,D,N,R);"value"in P&&o(g,"value",x.value,P.value)}},Fe=(g,_,x,P,D,N,W,F,H)=>{const T=_.el=g?g.el:i(""),J=_.anchor=g?g.anchor:i("");let{patchFlag:G,dynamicChildren:Q,slotScopeIds:le}=_;le&&(F=F?F.concat(le):le),g==null?(l(T,x,P),l(J,x,P),fe(_.children,x,J,D,N,W,F,H)):G>0&&G&64&&Q&&g.dynamicChildren?(_e(g.dynamicChildren,Q,x,D,N,W,F),(_.key!=null||D&&_===D.subTree)&&sa(g,_,!0)):me(g,_,x,J,D,N,W,F,H)},Ze=(g,_,x,P,D,N,W,F,H)=>{_.slotScopeIds=F,g==null?_.shapeFlag&512?D.ctx.activate(_,x,P,W,H):$e(_,x,P,D,N,W,H):te(g,_,H)},$e=(g,_,x,P,D,N,W)=>{const F=g.component=Th(g,P,D);if(vu(g)&&(F.ctx.renderer=Pe),Lh(F),F.asyncDep){if(D&&D.registerDep(F,se),!g.el){const H=F.subTree=S(hn);C(null,H,_,x)}return}se(F,g,_,x,D,N,W)},te=(g,_,x)=>{const P=_.component=g.component;if(Zd(g,_,x))if(P.asyncDep&&!P.asyncResolved){ee(P,_,x);return}else P.next=_,Vd(P.update),P.update();else _.el=g.el,P.vnode=_},se=(g,_,x,P,D,N,W)=>{const F=()=>{if(g.isMounted){let{next:J,bu:G,u:Q,parent:le,vnode:ve}=g,Ee=J,Be;yn(g,!1),J?(J.el=ve.el,ee(g,J,W)):J=ve,G&&ts(G),(Be=J.props&&J.props.onVnodeBeforeUpdate)&&xt(Be,le,J,ve),yn(g,!0);const Se=Ar(g),Bt=g.subTree;g.subTree=Se,b(Bt,Se,h(Bt.el),X(Bt),g,D,N),J.el=Se.el,Ee===null&&Gd(g,Se.el),Q&&qe(Q,D),(Be=J.props&&J.props.onVnodeUpdated)&&qe(()=>xt(Be,le,J,ve),D)}else{let J;const{el:G,props:Q}=_,{bm:le,m:ve,parent:Ee}=g,Be=ss(_);if(yn(g,!1),le&&ts(le),!Be&&(J=Q&&Q.onVnodeBeforeMount)&&xt(J,Ee,_),yn(g,!0),G&&ue){const Se=()=>{g.subTree=Ar(g),ue(G,g.subTree,g,D,null)};Be?_.type.__asyncLoader().then(()=>!g.isUnmounted&&Se()):Se()}else{const Se=g.subTree=Ar(g);b(null,Se,x,P,g,D,N),_.el=Se.el}if(ve&&qe(ve,D),!Be&&(J=Q&&Q.onVnodeMounted)){const Se=_;qe(()=>xt(J,Ee,Se),D)}(_.shapeFlag&256||Ee&&ss(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&g.a&&qe(g.a,D),g.isMounted=!0,_=x=P=null}},H=g.effect=new Ko(F,()=>uu(T),g.scope),T=g.update=()=>H.run();T.id=g.uid,yn(g,!0),T()},ee=(g,_,x)=>{_.component=g;const P=g.vnode.props;g.vnode=_,g.next=null,yh(g,_.props,P,x),bh(g,_.children,x),ps(),rr(void 0,g.update),fs()},me=(g,_,x,P,D,N,W,F,H=!1)=>{const T=g&&g.children,J=g?g.shapeFlag:0,G=_.children,{patchFlag:Q,shapeFlag:le}=_;if(Q>0){if(Q&128){Qe(T,G,x,P,D,N,W,F,H);return}else if(Q&256){It(T,G,x,P,D,N,W,F,H);return}}le&8?(J&16&&R(T,D,N),G!==T&&f(x,G)):J&16?le&16?Qe(T,G,x,P,D,N,W,F,H):R(T,D,N,!0):(J&8&&f(x,""),le&16&&fe(G,x,P,D,N,W,F,H))},It=(g,_,x,P,D,N,W,F,H)=>{g=g||Qn,_=_||Qn;const T=g.length,J=_.length,G=Math.min(T,J);let Q;for(Q=0;Q<G;Q++){const le=_[Q]=H?sn(_[Q]):Nt(_[Q]);b(g[Q],le,x,null,D,N,W,F,H)}T>J?R(g,D,N,!0,!1,G):fe(_,x,P,D,N,W,F,H,G)},Qe=(g,_,x,P,D,N,W,F,H)=>{let T=0;const J=_.length;let G=g.length-1,Q=J-1;for(;T<=G&&T<=Q;){const le=g[T],ve=_[T]=H?sn(_[T]):Nt(_[T]);if(vs(le,ve))b(le,ve,x,null,D,N,W,F,H);else break;T++}for(;T<=G&&T<=Q;){const le=g[G],ve=_[Q]=H?sn(_[Q]):Nt(_[Q]);if(vs(le,ve))b(le,ve,x,null,D,N,W,F,H);else break;G--,Q--}if(T>G){if(T<=Q){const le=Q+1,ve=le<J?_[le].el:P;for(;T<=Q;)b(null,_[T]=H?sn(_[T]):Nt(_[T]),x,ve,D,N,W,F,H),T++}}else if(T>Q)for(;T<=G;)at(g[T],D,N,!0),T++;else{const le=T,ve=T,Ee=new Map;for(T=ve;T<=Q;T++){const ut=_[T]=H?sn(_[T]):Nt(_[T]);ut.key!=null&&Ee.set(ut.key,T)}let Be,Se=0;const Bt=Q-ve+1;let Vn=!1,Ma=0;const _s=new Array(Bt);for(T=0;T<Bt;T++)_s[T]=0;for(T=le;T<=G;T++){const ut=g[T];if(Se>=Bt){at(ut,D,N,!0);continue}let Ft;if(ut.key!=null)Ft=Ee.get(ut.key);else for(Be=ve;Be<=Q;Be++)if(_s[Be-ve]===0&&vs(ut,_[Be])){Ft=Be;break}Ft===void 0?at(ut,D,N,!0):(_s[Ft-ve]=T+1,Ft>=Ma?Ma=Ft:Vn=!0,b(ut,_[Ft],x,null,D,N,W,F,H),Se++)}const Ta=Vn?kh(_s):Qn;for(Be=Ta.length-1,T=Bt-1;T>=0;T--){const ut=ve+T,Ft=_[ut],La=ut+1<J?_[ut+1].el:P;_s[T]===0?b(null,Ft,x,La,D,N,W,F,H):Vn&&(Be<0||T!==Ta[Be]?At(Ft,x,La,2):Be--)}}},At=(g,_,x,P,D=null)=>{const{el:N,type:W,transition:F,children:H,shapeFlag:T}=g;if(T&6){At(g.component.subTree,_,x,P);return}if(T&128){g.suspense.move(_,x,P);return}if(T&64){W.move(g,_,x,Pe);return}if(W===ke){l(N,_,x);for(let G=0;G<H.length;G++)At(H[G],_,x,P);l(g.anchor,_,x);return}if(W===kr){E(g,_,x);return}if(P!==2&&T&1&&F)if(P===0)F.beforeEnter(N),l(N,_,x),qe(()=>F.enter(N),D);else{const{leave:G,delayLeave:Q,afterLeave:le}=F,ve=()=>l(N,_,x),Ee=()=>{G(N,()=>{ve(),le&&le()})};Q?Q(N,ve,Ee):Ee()}else l(N,_,x)},at=(g,_,x,P=!1,D=!1)=>{const{type:N,props:W,ref:F,children:H,dynamicChildren:T,shapeFlag:J,patchFlag:G,dirs:Q}=g;if(F!=null&&oo(F,null,x,g,!0),J&256){_.ctx.deactivate(g);return}const le=J&1&&Q,ve=!ss(g);let Ee;if(ve&&(Ee=W&&W.onVnodeBeforeUnmount)&&xt(Ee,_,g),J&6)Z(g.component,x,P);else{if(J&128){g.suspense.unmount(x,P);return}le&&gn(g,null,_,"beforeUnmount"),J&64?g.type.remove(g,_,x,D,Pe,P):T&&(N!==ke||G>0&&G&64)?R(T,_,x,!1,!0):(N===ke&&G&384||!D&&J&16)&&R(H,_,x),P&&Un(g)}(ve&&(Ee=W&&W.onVnodeUnmounted)||le)&&qe(()=>{Ee&&xt(Ee,_,g),le&&gn(g,null,_,"unmounted")},x)},Un=g=>{const{type:_,el:x,anchor:P,transition:D}=g;if(_===ke){O(x,P);return}if(_===kr){j(g);return}const N=()=>{r(x),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(g.shapeFlag&1&&D&&!D.persisted){const{leave:W,delayLeave:F}=D,H=()=>W(x,N);F?F(g.el,N,H):H()}else N()},O=(g,_)=>{let x;for(;g!==_;)x=d(g),r(g),g=x;r(_)},Z=(g,_,x)=>{const{bum:P,scope:D,update:N,subTree:W,um:F}=g;P&&ts(P),D.stop(),N&&(N.active=!1,at(W,g,_,x)),F&&qe(F,_),qe(()=>{g.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},R=(g,_,x,P=!1,D=!1,N=0)=>{for(let W=N;W<g.length;W++)at(g[W],_,x,P,D)},X=g=>g.shapeFlag&6?X(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),be=(g,_,x)=>{g==null?_._vnode&&at(_._vnode,null,null,!0):b(_._vnode||null,g,_,null,null,null,x),du(),_._vnode=g},Pe={p:b,um:at,m:At,r:Un,mt:$e,mc:fe,pc:me,pbc:_e,n:X,o:e};let de,ue;return t&&([de,ue]=t(Pe)),{render:be,hydrate:de,createApp:Ah(be,de)}}function yn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function sa(e,t,n=!1){const l=e.children,r=t.children;if(ne(l)&&ne(r))for(let o=0;o<l.length;o++){const a=l[o];let i=r[o];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=r[o]=sn(r[o]),i.el=a.el),n||sa(a,i))}}function kh(e){const t=e.slice(),n=[0];let l,r,o,a,i;const c=e.length;for(l=0;l<c;l++){const p=e[l];if(p!==0){if(r=n[n.length-1],e[r]<p){t[l]=r,n.push(l);continue}for(o=0,a=n.length-1;o<a;)i=o+a>>1,e[n[i]]<p?o=i+1:a=i;p<e[n[o]]&&(o>0&&(t[l]=n[o-1]),n[o]=l)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=t[a];return n}const $h=e=>e.__isTeleport,Ms=e=>e&&(e.disabled||e.disabled===""),ni=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,ao=(e,t)=>{const n=e&&e.to;return Ie(n)?t?t(n):null:n},Eh={__isTeleport:!0,process(e,t,n,l,r,o,a,i,c,p){const{mc:f,pc:h,pbc:d,o:{insert:m,querySelector:y,createText:w,createComment:b}}=p,$=Ms(t.props);let{shapeFlag:C,children:k,dynamicChildren:E}=t;if(e==null){const j=t.el=w(""),L=t.anchor=w("");m(j,n,l),m(L,n,l);const Y=t.target=ao(t.props,y),ae=t.targetAnchor=w("");Y&&(m(ae,Y),a=a||ni(Y));const fe=(he,_e)=>{C&16&&f(k,he,_e,r,o,a,i,c)};$?fe(n,L):Y&&fe(Y,ae)}else{t.el=e.el;const j=t.anchor=e.anchor,L=t.target=e.target,Y=t.targetAnchor=e.targetAnchor,ae=Ms(e.props),fe=ae?n:L,he=ae?j:Y;if(a=a||ni(L),E?(d(e.dynamicChildren,E,fe,r,o,a,i),sa(e,t,!0)):c||h(e,t,fe,he,r,o,a,i,!1),$)ae||wl(t,n,j,p,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const _e=t.target=ao(t.props,y);_e&&wl(t,_e,null,p,0)}else ae&&wl(t,L,Y,p,1)}},remove(e,t,n,l,{um:r,o:{remove:o}},a){const{shapeFlag:i,children:c,anchor:p,targetAnchor:f,target:h,props:d}=e;if(h&&o(f),(a||!Ms(d))&&(o(p),i&16))for(let m=0;m<c.length;m++){const y=c[m];r(y,t,n,!0,!!y.dynamicChildren)}},move:wl,hydrate:Bh};function wl(e,t,n,{o:{insert:l},m:r},o=2){o===0&&l(e.targetAnchor,t,n);const{el:a,anchor:i,shapeFlag:c,children:p,props:f}=e,h=o===2;if(h&&l(a,t,n),(!h||Ms(f))&&c&16)for(let d=0;d<p.length;d++)r(p[d],t,n,2);h&&l(i,t,n)}function Bh(e,t,n,l,r,o,{o:{nextSibling:a,parentNode:i,querySelector:c}},p){const f=t.target=ao(t.props,c);if(f){const h=f._lpa||f.firstChild;if(t.shapeFlag&16)if(Ms(t.props))t.anchor=p(a(e),t,i(e),n,l,r,o),t.targetAnchor=h;else{t.anchor=a(e);let d=h;for(;d;)if(d=a(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,f._lpa=t.targetAnchor&&a(t.targetAnchor);break}p(h,t,f,n,l,r,o)}}return t.anchor&&a(t.anchor)}const Oh=Eh,ke=Symbol(void 0),la=Symbol(void 0),hn=Symbol(void 0),kr=Symbol(void 0),Ts=[];let St=null;function A(e=!1){Ts.push(St=e?null:[])}function Dh(){Ts.pop(),St=Ts[Ts.length-1]||null}let Gs=1;function si(e){Gs+=e}function Lu(e){return e.dynamicChildren=Gs>0?St||Qn:null,Dh(),Gs>0&&St&&St.push(e),e}function z(e,t,n,l,r,o){return Lu(s(e,t,n,l,r,o,!0))}function K(e,t,n,l,r){return Lu(S(e,t,n,l,r,!0))}function Ln(e){return e?e.__v_isVNode===!0:!1}function vs(e,t){return e.type===t.type&&e.key===t.key}const pr="__vInternal",Ru=({key:e})=>e!=null?e:null,Bl=({ref:e,ref_key:t,ref_for:n})=>e!=null?Ie(e)||Ae(e)||ce(e)?{i:Ge,r:e,k:t,f:!!n}:e:null;function s(e,t=null,n=null,l=0,r=null,o=e===ke?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ru(t),ref:t&&Bl(t),scopeId:ar,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:l,dynamicProps:r,dynamicChildren:null,appContext:null};return i?(ra(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=Ie(n)?8:16),Gs>0&&!a&&St&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&St.push(c),c}const S=Ph;function Ph(e,t=null,n=null,l=0,r=null,o=!1){if((!e||e===ch)&&(e=hn),Ln(e)){const i=Rn(e,t,!0);return n&&ra(i,n),Gs>0&&!o&&St&&(i.shapeFlag&6?St[St.indexOf(e)]=i:St.push(i)),i.patchFlag|=-2,i}if(Nh(e)&&(e=e.__vccOpts),t){t=re(t);let{class:i,style:c}=t;i&&!Ie(i)&&(t.class=Le(i)),Ue(c)&&(ou(c)&&!ne(c)&&(c=lt({},c)),t.style=ze(c))}const a=Ie(e)?1:gu(e)?128:$h(e)?64:Ue(e)?4:ce(e)?2:0;return s(e,t,n,l,r,a,o,!0)}function re(e){return e?ou(e)||pr in e?lt({},e):e:null}function Rn(e,t,n=!1){const{props:l,ref:r,patchFlag:o,children:a}=e,i=t?Ve(l||{},t):l;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&Ru(i),ref:t&&t.ref?n&&r?ne(r)?r.concat(Bl(t)):[r,Bl(t)]:Bl(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ke?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Rn(e.ssContent),ssFallback:e.ssFallback&&Rn(e.ssFallback),el:e.el,anchor:e.anchor}}function u(e=" ",t=0){return S(la,null,e,t)}function V(e="",t=!1){return t?(A(),K(hn,null,e)):S(hn,null,e)}function Nt(e){return e==null||typeof e=="boolean"?S(hn):ne(e)?S(ke,null,e.slice()):typeof e=="object"?sn(e):S(la,null,String(e))}function sn(e){return e.el===null||e.memo?e:Rn(e)}function ra(e,t){let n=0;const{shapeFlag:l}=e;if(t==null)t=null;else if(ne(t))n=16;else if(typeof t=="object")if(l&65){const r=t.default;r&&(r._c&&(r._d=!1),ra(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(pr in t)?t._ctx=Ge:r===3&&Ge&&(Ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ce(t)?(t={default:t,_ctx:Ge},n=32):(t=String(t),l&64?(n=16,t=[u(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ve(...e){const t={};for(let n=0;n<e.length;n++){const l=e[n];for(const r in l)if(r==="class")t.class!==l.class&&(t.class=Le([t.class,l.class]));else if(r==="style")t.style=ze([t.style,l.style]);else if(Jl(r)){const o=t[r],a=l[r];a&&o!==a&&!(ne(o)&&o.includes(a))&&(t[r]=o?[].concat(o,a):a)}else r!==""&&(t[r]=l[r])}return t}function xt(e,t,n,l=null){Tt(e,t,7,[n,l])}const Sh=Tu();let Mh=0;function Th(e,t,n){const l=e.type,r=(t?t.appContext:e.appContext)||Sh,o={uid:Mh++,vnode:e,type:l,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Du(l,r),emitsOptions:mu(l,r),emit:null,emitted:null,propsDefaults:De,inheritAttrs:l.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Kd.bind(null,o),e.ce&&e.ce(o),o}let We=null;const Fn=()=>We||Ge,as=e=>{We=e,e.scope.on()},Pn=()=>{We&&We.scope.off(),We=null};function Iu(e){return e.vnode.shapeFlag&4}let Xs=!1;function Lh(e,t=!1){Xs=t;const{props:n,children:l}=e.vnode,r=Iu(e);gh(e,n,r,t),vh(e,l);const o=r?Rh(e,t):void 0;return Xs=!1,o}function Rh(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=sr(new Proxy(e.ctx,uh));const{setup:l}=n;if(l){const r=e.setupContext=l.length>1?Fh(e):null;as(e),ps();const o=an(l,e,0,[e.props,r]);if(fs(),Pn(),Kc(o)){if(o.then(Pn,Pn),t)return o.then(a=>{li(e,a,t)}).catch(a=>{lr(a,e,0)});e.asyncDep=o}else li(e,o,t)}else Fu(e,t)}function li(e,t,n){ce(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ue(t)&&(e.setupState=iu(t)),Fu(e,n)}let ri;function Fu(e,t,n){const l=e.type;if(!e.render){if(!t&&ri&&!l.render){const r=l.template;if(r){const{isCustomElement:o,compilerOptions:a}=e.appContext.config,{delimiters:i,compilerOptions:c}=l,p=lt(lt({isCustomElement:o,delimiters:i},a),c);l.render=ri(r,p)}}e.render=l.render||Mt}as(e),ps(),ph(e),fs(),Pn()}function Ih(e){return new Proxy(e.attrs,{get(t,n){return bt(e,"get","$attrs"),t[n]}})}function Fh(e){const t=l=>{e.exposed=l||{}};let n;return{get attrs(){return n||(n=Ih(e))},slots:e.slots,emit:e.emit,expose:t}}function fr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(iu(sr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Nl)return Nl[n](e)}}))}function io(e){return ce(e)&&e.displayName||e.name}function Nh(e){return ce(e)&&"__vccOpts"in e}const B=(e,t)=>jd(e,t,Xs);function yt(e,t,n){const l=arguments.length;return l===2?Ue(t)&&!ne(t)?Ln(t)?S(e,null,[t]):S(e,t):S(e,null,t):(l>3?n=Array.prototype.slice.call(arguments,2):l===3&&Ln(n)&&(n=[n]),S(e,t,n))}const jh="3.2.36",Hh="http://www.w3.org/2000/svg",An=typeof document!="undefined"?document:null,oi=An&&An.createElement("template"),Uh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,l)=>{const r=t?An.createElementNS(Hh,e):An.createElement(e,n?{is:n}:void 0);return e==="select"&&l&&l.multiple!=null&&r.setAttribute("multiple",l.multiple),r},createText:e=>An.createTextNode(e),createComment:e=>An.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>An.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,l,r,o){const a=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{oi.innerHTML=l?`<svg>${e}</svg>`:e;const i=oi.content;if(l){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Vh(e,t,n){const l=e._vtc;l&&(t=(t?[t,...l]:[...l]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Wh(e,t,n){const l=e.style,r=Ie(n);if(n&&!r){for(const o in n)co(l,o,n[o]);if(t&&!Ie(t))for(const o in t)n[o]==null&&co(l,o,"")}else{const o=l.display;r?t!==n&&(l.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(l.display=o)}}const ai=/\s*!important$/;function co(e,t,n){if(ne(n))n.forEach(l=>co(e,t,l));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const l=zh(e,t);ai.test(n)?e.setProperty(In(l),n.replace(ai,""),"important"):e[l]=n}}const ii=["Webkit","Moz","ms"],$r={};function zh(e,t){const n=$r[t];if(n)return n;let l=Vt(t);if(l!=="filter"&&l in e)return $r[t]=l;l=tr(l);for(let r=0;r<ii.length;r++){const o=ii[r]+l;if(o in e)return $r[t]=o}return t}const ci="http://www.w3.org/1999/xlink";function Kh(e,t,n,l,r){if(l&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ci,t.slice(6,t.length)):e.setAttributeNS(ci,t,n);else{const o=zf(t);n==null||o&&!Vc(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function qh(e,t,n,l,r,o,a){if(t==="innerHTML"||t==="textContent"){l&&a(l,r,o),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let i=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Vc(n):n==null&&c==="string"?(n="",i=!0):c==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(t)}const[Nu,Yh]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let uo=0;const Zh=Promise.resolve(),Gh=()=>{uo=0},Xh=()=>uo||(Zh.then(Gh),uo=Nu());function Zn(e,t,n,l){e.addEventListener(t,n,l)}function Jh(e,t,n,l){e.removeEventListener(t,n,l)}function Qh(e,t,n,l,r=null){const o=e._vei||(e._vei={}),a=o[t];if(l&&a)a.value=l;else{const[i,c]=em(t);if(l){const p=o[t]=tm(l,r);Zn(e,i,p,c)}else a&&(Jh(e,i,a,c),o[t]=void 0)}}const ui=/(?:Once|Passive|Capture)$/;function em(e){let t;if(ui.test(e)){t={};let n;for(;n=e.match(ui);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[In(e.slice(2)),t]}function tm(e,t){const n=l=>{const r=l.timeStamp||Nu();(Yh||r>=n.attached-1)&&Tt(nm(l,n.value),t,5,[l])};return n.value=e,n.attached=Xh(),n}function nm(e,t){if(ne(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(l=>r=>!r._stopped&&l&&l(r))}else return t}const pi=/^on[a-z]/,sm=(e,t,n,l,r=!1,o,a,i,c)=>{t==="class"?Vh(e,l,r):t==="style"?Wh(e,n,l):Jl(t)?Ho(t)||Qh(e,t,n,l,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):lm(e,t,l,r))?qh(e,t,l,o,a,i,c):(t==="true-value"?e._trueValue=l:t==="false-value"&&(e._falseValue=l),Kh(e,t,l,r))};function lm(e,t,n,l){return l?!!(t==="innerHTML"||t==="textContent"||t in e&&pi.test(t)&&ce(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||pi.test(t)&&Ie(n)?!1:t in e}const fi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ne(t)?n=>ts(t,n):t};function rm(e){e.target.composing=!0}function di(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const om={created(e,{modifiers:{lazy:t,trim:n,number:l}},r){e._assign=fi(r);const o=l||r.props&&r.props.type==="number";Zn(e,t?"change":"input",a=>{if(a.target.composing)return;let i=e.value;n&&(i=i.trim()),o&&(i=Yr(i)),e._assign(i)}),n&&Zn(e,"change",()=>{e.value=e.value.trim()}),t||(Zn(e,"compositionstart",rm),Zn(e,"compositionend",di),Zn(e,"change",di))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:l,number:r}},o){if(e._assign=fi(o),e.composing||document.activeElement===e&&e.type!=="range"&&(n||l&&e.value.trim()===t||(r||e.type==="number")&&Yr(e.value)===t))return;const a=t==null?"":t;e.value!==a&&(e.value=a)}},am={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},hi=(e,t)=>n=>{if(!("key"in n))return;const l=In(n.key);if(t.some(r=>r===l||am[r]===l))return e(n)},ju={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):bs(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:l}){!t!=!n&&(l?t?(l.beforeEnter(e),bs(e,!0),l.enter(e)):l.leave(e,()=>{bs(e,!1)}):bs(e,t))},beforeUnmount(e,{value:t}){bs(e,t)}};function bs(e,t){e.style.display=t?e._vod:"none"}const im=lt({patchProp:sm},Uh);let mi;function cm(){return mi||(mi=xh(im))}const um=(...e)=>{const t=cm().createApp(...e),{mount:n}=t;return t.mount=l=>{const r=pm(l);if(!r)return;const o=t._component;!ce(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const a=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},t};function pm(e){return Ie(e)?document.querySelector(e):e}var fm=Object.defineProperty,gi=Object.getOwnPropertySymbols,dm=Object.prototype.hasOwnProperty,hm=Object.prototype.propertyIsEnumerable,yi=(e,t,n)=>t in e?fm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,mm=(e,t)=>{for(var n in t||(t={}))dm.call(t,n)&&yi(e,n,t[n]);if(gi)for(var n of gi(t))hm.call(t,n)&&yi(e,n,t[n]);return e},Hu="usehead",_i="head:count",Er="data-head-attrs",gm=(e,t,n)=>{const l=n.createElement(e);for(const r of Object.keys(t)){let o=t[r];r==="key"||o===!1||(r==="children"?l.textContent=o:l.setAttribute(r,o))}return l};function ym(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){const l=t.cloneNode(!0);return l.setAttribute("nonce",""),l.nonce=n,n===e.nonce&&e.isEqualNode(l)}}return e.isEqualNode(t)}var _m=e=>{const t=["key","id","name","property"];for(const n of t){const l=typeof e.getAttribute=="function"?e.hasAttribute(n)?e.getAttribute(n):void 0:e[n];if(l!==void 0)return{name:n,value:l}}},vm=()=>{const e=I(Hu);if(!e)throw new Error("You may forget to apply app.use(head)");return e},bm=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],wm=e=>{const t=[];for(const n of Object.keys(e))if(e[n]!=null){if(n==="title")t.push({tag:n,props:{children:e[n]}});else if(n==="base")t.push({tag:n,props:mm({key:"default"},e[n])});else if(bm.includes(n)){const l=e[n];Array.isArray(l)?l.forEach(r=>{t.push({tag:n,props:r})}):l&&t.push({tag:n,props:l})}}return t},vi=(e,t)=>{const n=e.getAttribute(Er);if(n)for(const r of n.split(","))r in t||e.removeAttribute(r);const l=[];for(const r in t){const o=t[r];o!=null&&(o===!1?e.removeAttribute(r):e.setAttribute(r,o),l.push(r))}l.length?e.setAttribute(Er,l.join(",")):e.removeAttribute(Er)},Am=(e=window.document,t,n)=>{var l;const r=e.head;let o=r.querySelector(`meta[name="${_i}"]`);const a=o?Number(o.getAttribute("content")):0,i=[];if(o)for(let p=0,f=o.previousElementSibling;p<a;p++,f=(f==null?void 0:f.previousElementSibling)||null)((l=f==null?void 0:f.tagName)==null?void 0:l.toLowerCase())===t&&i.push(f);else o=e.createElement("meta"),o.setAttribute("name",_i),o.setAttribute("content","0"),r.append(o);let c=n.map(p=>gm(p.tag,p.props,e));c=c.filter(p=>{for(let f=0;f<i.length;f++){const h=i[f];if(ym(h,p))return i.splice(f,1),!1}return!0}),i.forEach(p=>{var f;return(f=p.parentNode)==null?void 0:f.removeChild(p)}),c.forEach(p=>{r.insertBefore(p,o)}),o.setAttribute("content",""+(a-i.length+c.length))},xm=()=>{let e=[],t=new Set;const n={install(l){l.config.globalProperties.$head=n,l.provide(Hu,n)},get headTags(){const l=[];return e.forEach(r=>{wm(r.value).forEach(a=>{if(a.tag==="meta"||a.tag==="base"||a.tag==="script"){const i=_m(a.props);if(i){let c=-1;for(let p=0;p<l.length;p++){const f=l[p],h=f.props[i.name],d=a.props[i.name];if(f.tag===a.tag&&h===d){c=p;break}}c!==-1&&l.splice(c,1)}}l.push(a)})}),l},addHeadObjs(l){e.push(l)},removeHeadObjs(l){e=e.filter(r=>r!==l)},updateDOM(l=window.document){let r,o={},a={};const i={};for(const p of n.headTags){if(p.tag==="title"){r=p.props.children;continue}if(p.tag==="htmlAttrs"){Object.assign(o,p.props);continue}if(p.tag==="bodyAttrs"){Object.assign(a,p.props);continue}i[p.tag]=i[p.tag]||[],i[p.tag].push(p)}r!==void 0&&(l.title=r),vi(l.documentElement,o),vi(l.body,a);const c=new Set([...Object.keys(i),...t]);for(const p of c)Am(l,p,i[p]||[]);t.clear(),Object.keys(i).forEach(p=>t.add(p))}};return n},Cm=typeof window!="undefined",km=e=>{const t=q(e),n=vm();n.addHeadObjs(t),Cm&&(al(()=>{n.updateDOM()}),cr(()=>{n.removeHeadObjs(t),n.updateDOM()}))};const Ls=Symbol("v-click-clicks"),xn=Symbol("v-click-clicks-elements"),po=Symbol("v-click-clicks-order-map"),Rs=Symbol("v-click-clicks-disabled"),Uu=Symbol("slidev-slide-scale"),U=Symbol("slidev-slidev-context"),$m=Symbol("slidev-route"),Em=Symbol("slidev-slide-context"),wn="slidev-vclick-target",Br="slidev-vclick-hidden",Bm="slidev-vclick-fade",Or="slidev-vclick-hidden-explicitly",ws="slidev-vclick-current",Al="slidev-vclick-prior";function Om(e){return e=e||[],Array.isArray(e)?e:[e]}function fo(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function Dm(...e){let t,n,l;e.length===1?(t=0,l=1,[n]=e):[t,n,l=1]=e;const r=[];let o=t;for(;o<n;)r.push(o),o+=l||1;return r}function Pm(e){return e!=null}function Sm(e,t){return Object.fromEntries(Object.entries(e).map(([n,l])=>t(n,l)).filter(Pm))}var $n={theme:"seriph",title:"Welcome to UTown Team",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",record:"dev",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",class:"text-center"};const Ce=$n;var Hc;const cn=(Hc=Ce.aspectRatio)!=null?Hc:16/9;var Uc;const Sn=(Uc=Ce.canvasWidth)!=null?Uc:980,Vu=Math.round(Sn/cn),Wu=B(()=>Sm(Ce.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Et(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Nn=Re({page:0,clicks:0});let Mm=[],Tm=[];Et(Nn,"$syncUp",!0);Et(Nn,"$syncDown",!0);Et(Nn,"$paused",!1);Et(Nn,"$onSet",e=>Mm.push(e));Et(Nn,"$onPatch",e=>Tm.push(e));Et(Nn,"$patch",async()=>!1);function zu(e,t,n=!1){const l=[];let r=!1,o=!1,a,i;const c=Re(t);function p(m){l.push(m)}function f(m,y){clearTimeout(a),r=!0,c[m]=y,a=setTimeout(()=>r=!1,0)}function h(m){r||(clearTimeout(i),o=!0,Object.entries(m).forEach(([y,w])=>{c[y]=w}),i=setTimeout(()=>o=!1,0))}function d(m){let y;n?n&&window.addEventListener("storage",b=>{b&&b.key===m&&b.newValue&&h(JSON.parse(b.newValue))}):(y=new BroadcastChannel(m),y.addEventListener("message",b=>h(b.data)));function w(){!n&&y&&!o?y.postMessage(xe(c)):n&&!o&&window.localStorage.setItem(m,JSON.stringify(c)),r||l.forEach(b=>b(c))}if(pe(c,w,{deep:!0}),n){const b=window.localStorage.getItem(m);b&&h(JSON.parse(b))}}return{init:d,onPatch:p,patch:f,state:c}}const{init:Lm,onPatch:Rm,patch:bi,state:Dr}=zu(Nn,{page:1,clicks:0}),jn=Re({});let Im=[],Fm=[];Et(jn,"$syncUp",!0);Et(jn,"$syncDown",!0);Et(jn,"$paused",!1);Et(jn,"$onSet",e=>Im.push(e));Et(jn,"$onPatch",e=>Fm.push(e));Et(jn,"$patch",async()=>!1);const{init:Nm,onPatch:jm,patch:Ku,state:Hl}=zu(jn,{},!1),Hm="modulepreload",wi={},Um="/redis_intro/",hs=function(t,n){return!n||n.length===0?t():Promise.all(n.map(l=>{if(l=`${Um}${l}`,l in wi)return;wi[l]=!0;const r=l.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${o}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":Hm,r||(a.as="script",a.crossOrigin=""),a.href=l,document.head.appendChild(a),r)return new Promise((i,c)=>{a.addEventListener("load",i),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())};function it(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)}function Vm(e,t){if(Array.isArray(e)){e.splice(t,1);return}delete e[t]}function mn(e){return ld()?(rd(e),!0):!1}function Ne(...e){return B(()=>e.every(t=>v(t)))}function ft(e){return B(()=>!v(e))}function Wm(e){if(!Ae(e))return Re(e);const t=new Proxy({},{get(n,l,r){return v(Reflect.get(e.value,l,r))},set(n,l,r){return Ae(e.value[l])&&!Ae(r)?e.value[l].value=r:e.value[l]=r,!0},deleteProperty(n,l){return Reflect.deleteProperty(e.value,l)},has(n,l){return Reflect.has(e.value,l)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Re(t)}var Ai;const $t=typeof window!="undefined",zm=e=>typeof e!="undefined",Km=Object.prototype.toString,qm=e=>typeof e=="number",qu=e=>typeof e=="string",Ul=e=>Km.call(e)==="[object Object]",ho=()=>+Date.now(),un=()=>{};$t&&((Ai=window==null?void 0:window.navigator)==null?void 0:Ai.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Ym(e,t){function n(...l){e(()=>t.apply(this,l),{fn:t,thisArg:this,args:l})}return n}const Yu=e=>e();function Zm(e=Yu){const t=q(!0);function n(){t.value=!1}function l(){t.value=!0}return{isActive:t,pause:n,resume:l,eventFilter:(...o)=>{t.value&&e(...o)}}}function Gm(e,t){var n;if(typeof e=="number")return e+t;const l=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",r=e.slice(l.length),o=parseFloat(l)+t;return Number.isNaN(o)?e:o+r}var Xm=Object.defineProperty,Jm=Object.defineProperties,Qm=Object.getOwnPropertyDescriptors,xi=Object.getOwnPropertySymbols,eg=Object.prototype.hasOwnProperty,tg=Object.prototype.propertyIsEnumerable,Ci=(e,t,n)=>t in e?Xm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ng=(e,t)=>{for(var n in t||(t={}))eg.call(t,n)&&Ci(e,n,t[n]);if(xi)for(var n of xi(t))tg.call(t,n)&&Ci(e,n,t[n]);return e},sg=(e,t)=>Jm(e,Qm(t));function lg(e){if(!Ae(e))return Rd(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=Ld(()=>({get(){return e.value[n]},set(l){if(Array.isArray(e.value)){const r=[...e.value];r[n]=l,e.value=r}else{const r=sg(ng({},e.value),{[n]:l});Object.setPrototypeOf(r,e.value),e.value=r}}}));return t}function rg(e,t=!0){Fn()?Au(e):t?e():Ye(e)}function og(e,t=!0){Fn()?ds(e):t?e():Ye(e)}function oa(e){Fn()&&ur(e)}function ag(e,t=1e3,n={}){const{immediate:l=!0,immediateCallback:r=!1}=n;let o=null;const a=q(!1);function i(){o&&(clearInterval(o),o=null)}function c(){a.value=!1,i()}function p(){v(t)<=0||(a.value=!0,r&&e(),i(),o=setInterval(e,v(t)))}if(l&&$t&&p(),Ae(t)){const f=pe(t,()=>{l&&$t&&p()});mn(f)}return mn(c),{isActive:a,pause:c,resume:p}}function Zu(e=!1,t={}){const{truthyValue:n=!0,falsyValue:l=!1}=t,r=Ae(e),o=q(e);function a(i){return arguments.length?(o.value=i,o.value):(o.value=o.value===v(n)?v(l):v(n),o.value)}return r?a:[o,a]}var ki=Object.getOwnPropertySymbols,ig=Object.prototype.hasOwnProperty,cg=Object.prototype.propertyIsEnumerable,ug=(e,t)=>{var n={};for(var l in e)ig.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&ki)for(var l of ki(e))t.indexOf(l)<0&&cg.call(e,l)&&(n[l]=e[l]);return n};function pg(e,t,n={}){const l=n,{eventFilter:r=Yu}=l,o=ug(l,["eventFilter"]);return pe(e,Ym(r,t),o)}function fg(e,t,n){const l=pe(e,(...r)=>(Ye(()=>l()),t(...r)),n)}var dg=Object.defineProperty,hg=Object.defineProperties,mg=Object.getOwnPropertyDescriptors,Vl=Object.getOwnPropertySymbols,Gu=Object.prototype.hasOwnProperty,Xu=Object.prototype.propertyIsEnumerable,$i=(e,t,n)=>t in e?dg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,gg=(e,t)=>{for(var n in t||(t={}))Gu.call(t,n)&&$i(e,n,t[n]);if(Vl)for(var n of Vl(t))Xu.call(t,n)&&$i(e,n,t[n]);return e},yg=(e,t)=>hg(e,mg(t)),_g=(e,t)=>{var n={};for(var l in e)Gu.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&Vl)for(var l of Vl(e))t.indexOf(l)<0&&Xu.call(e,l)&&(n[l]=e[l]);return n};function vg(e,t,n={}){const l=n,{eventFilter:r}=l,o=_g(l,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:p}=Zm(r);return{stop:pg(e,t,yg(gg({},o),{eventFilter:a})),pause:i,resume:c,isActive:p}}function ct(e){var t;const n=v(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Je=$t?window:void 0,bg=$t?window.document:void 0;function Me(...e){let t,n,l,r;if(qu(e[0])?([n,l,r]=e,t=Je):[t,n,l,r]=e,!t)return un;let o=un;const a=pe(()=>ct(t),c=>{o(),c&&(c.addEventListener(n,l,r),o=()=>{c.removeEventListener(n,l,r),o=un})},{immediate:!0,flush:"post"}),i=()=>{a(),o()};return mn(i),i}function wg(e,t,n={}){const{window:l=Je,ignore:r,capture:o=!0}=n;if(!l)return;const a=q(!0);let i;const c=h=>{l.clearTimeout(i);const d=ct(e),m=h.composedPath();!d||d===h.target||m.includes(d)||!a.value||r&&r.length>0&&r.some(y=>{const w=ct(y);return w&&(h.target===w||m.includes(w))})||t(h)},p=[Me(l,"click",c,{passive:!0,capture:o}),Me(l,"pointerdown",h=>{const d=ct(e);a.value=!!d&&!h.composedPath().includes(d)},{passive:!0}),Me(l,"pointerup",h=>{i=l.setTimeout(()=>c(h),50)},{passive:!0})];return()=>p.forEach(h=>h())}const Ag=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function xg(e,t,n={}){const{target:l=Je,eventName:r="keydown",passive:o=!1}=n,a=Ag(e);return Me(l,r,c=>{a(c)&&t(c)},o)}function Cg(e={}){const{window:t=Je}=e,n=q(0);return t&&(Me(t,"blur",()=>n.value+=1,!0),Me(t,"focus",()=>n.value+=1,!0)),B(()=>(n.value,t==null?void 0:t.document.activeElement))}function Ol(e,t={}){const{window:n=Je}=t,l=Boolean(n&&"matchMedia"in n);let r;const o=q(!1),a=()=>{!l||(r||(r=n.matchMedia(e)),o.value=r.matches)};return rg(()=>{a(),r&&("addEventListener"in r?r.addEventListener("change",a):r.addListener(a),mn(()=>{"removeEventListener"in r?r.removeEventListener("change",a):r.removeListener(a)}))}),o}const kg={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var $g=Object.defineProperty,Ei=Object.getOwnPropertySymbols,Eg=Object.prototype.hasOwnProperty,Bg=Object.prototype.propertyIsEnumerable,Bi=(e,t,n)=>t in e?$g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Og=(e,t)=>{for(var n in t||(t={}))Eg.call(t,n)&&Bi(e,n,t[n]);if(Ei)for(var n of Ei(t))Bg.call(t,n)&&Bi(e,n,t[n]);return e};function Dg(e,t={}){function n(i,c){let p=e[i];return c!=null&&(p=Gm(p,c)),typeof p=="number"&&(p=`${p}px`),p}const{window:l=Je}=t;function r(i){return l?l.matchMedia(i).matches:!1}const o=i=>Ol(`(min-width: ${n(i)})`,t),a=Object.keys(e).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>o(c),enumerable:!0,configurable:!0}),i),{});return Og({greater:o,smaller(i){return Ol(`(max-width: ${n(i,-.1)})`,t)},between(i,c){return Ol(`(min-width: ${n(i)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(i){return r(`(min-width: ${n(i)})`)},isSmaller(i){return r(`(max-width: ${n(i,-.1)})`)},isInBetween(i,c){return r(`(min-width: ${n(i)}) and (max-width: ${n(c,-.1)})`)}},a)}const mo=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},go="__vueuse_ssr_handlers__";mo[go]=mo[go]||{};const Pg=mo[go];function Sg(e,t){return Pg[e]||t}function Mg(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const Tg={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Rt(e,t,n,l={}){var r;const{flush:o="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,shallow:p,window:f=Je,eventFilter:h,onError:d=L=>{console.error(L)}}=l,m=(p?Wt:q)(t);if(!n)try{n=Sg("getDefaultStorage",()=>{var L;return(L=Je)==null?void 0:L.localStorage})()}catch(L){d(L)}if(!n)return m;const y=v(t),w=Mg(y),b=(r=l.serializer)!=null?r:Tg[w],{pause:$,resume:C}=vg(m,()=>k(m.value),{flush:o,deep:a,eventFilter:h});return f&&i&&Me(f,"storage",j),j(),m;function k(L){try{L==null?n.removeItem(e):n.setItem(e,b.write(L))}catch(Y){d(Y)}}function E(L){if(!(L&&L.key!==e)){$();try{const Y=L?L.newValue:n.getItem(e);return Y==null?(c&&y!==null&&n.setItem(e,b.write(y)),y):typeof Y!="string"?Y:b.read(Y)}catch(Y){d(Y)}finally{C()}}}function j(L){L&&L.key!==e||(m.value=E(L))}}function Lg(e){return Ol("(prefers-color-scheme: dark)",e)}var Rg=Object.defineProperty,Ig=Object.defineProperties,Fg=Object.getOwnPropertyDescriptors,Oi=Object.getOwnPropertySymbols,Ng=Object.prototype.hasOwnProperty,jg=Object.prototype.propertyIsEnumerable,Di=(e,t,n)=>t in e?Rg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Hg=(e,t)=>{for(var n in t||(t={}))Ng.call(t,n)&&Di(e,n,t[n]);if(Oi)for(var n of Oi(t))jg.call(t,n)&&Di(e,n,t[n]);return e},Ug=(e,t)=>Ig(e,Fg(t));function v9(e,t={}){var n,l;const r=(n=t.draggingElement)!=null?n:Je,o=q((l=t.initialValue)!=null?l:{x:0,y:0}),a=q(),i=d=>t.pointerTypes?t.pointerTypes.includes(d.pointerType):!0,c=d=>{v(t.preventDefault)&&d.preventDefault(),v(t.stopPropagation)&&d.stopPropagation()},p=d=>{var m;if(!i(d)||v(t.exact)&&d.target!==v(e))return;const y=v(e).getBoundingClientRect(),w={x:d.pageX-y.left,y:d.pageY-y.top};((m=t.onStart)==null?void 0:m.call(t,w,d))!==!1&&(a.value=w,c(d))},f=d=>{var m;!i(d)||!a.value||(o.value={x:d.pageX-a.value.x,y:d.pageY-a.value.y},(m=t.onMove)==null||m.call(t,o.value,d),c(d))},h=d=>{var m;!i(d)||!a.value||(a.value=void 0,(m=t.onEnd)==null||m.call(t,o.value,d),c(d))};return $t&&(Me(e,"pointerdown",p,!0),Me(r,"pointermove",f,!0),Me(r,"pointerup",h,!0)),Ug(Hg({},lg(o)),{position:o,isDragging:B(()=>!!a.value),style:B(()=>`left:${o.value.x}px;top:${o.value.y}px;`)})}var Pi=Object.getOwnPropertySymbols,Vg=Object.prototype.hasOwnProperty,Wg=Object.prototype.propertyIsEnumerable,zg=(e,t)=>{var n={};for(var l in e)Vg.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&Pi)for(var l of Pi(e))t.indexOf(l)<0&&Wg.call(e,l)&&(n[l]=e[l]);return n};function Kg(e,t,n={}){const l=n,{window:r=Je}=l,o=zg(l,["window"]);let a;const i=r&&"ResizeObserver"in r,c=()=>{a&&(a.disconnect(),a=void 0)},p=pe(()=>ct(e),h=>{c(),i&&r&&h&&(a=new ResizeObserver(t),a.observe(h,o))},{immediate:!0,flush:"post"}),f=()=>{c(),p()};return mn(f),{isSupported:i,stop:f}}function Ju(e,t={}){const{immediate:n=!0,window:l=Je}=t,r=q(!1);let o=null;function a(){!r.value||!l||(e(),o=l.requestAnimationFrame(a))}function i(){!r.value&&l&&(r.value=!0,a())}function c(){r.value=!1,o!=null&&l&&(l.cancelAnimationFrame(o),o=null)}return n&&i(),mn(c),{isActive:r,pause:c,resume:i}}function qg(e,t={width:0,height:0},n={}){const l=q(t.width),r=q(t.height);return Kg(e,([o])=>{l.value=o.contentRect.width,r.value=o.contentRect.height},n),pe(()=>ct(e),o=>{l.value=o?t.width:0,r.value=o?t.height:0}),{width:l,height:r}}const Si=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Yg(e,t={}){const{document:n=bg,autoExit:l=!1}=t,r=e||(n==null?void 0:n.querySelector("html")),o=q(!1);let a=!1,i=Si[0];if(!n)a=!1;else for(const w of Si)if(w[1]in n){i=w,a=!0;break}const[c,p,f,,h]=i;async function d(){!a||(n!=null&&n[f]&&await n[p](),o.value=!1)}async function m(){if(!a)return;await d();const w=ct(r);w&&(await w[c](),o.value=!0)}async function y(){o.value?await d():await m()}return n&&Me(n,h,()=>{o.value=!!(n!=null&&n[f])},!1),l&&mn(d),{isSupported:a,isFullscreen:o,enter:m,exit:d,toggle:y}}function Zg(e,t,n={}){const{root:l,rootMargin:r="0px",threshold:o=.1,window:a=Je}=n,i=a&&"IntersectionObserver"in a;let c=un;const p=i?pe(()=>({el:ct(e),root:ct(l)}),({el:h,root:d})=>{if(c(),!h)return;const m=new IntersectionObserver(t,{root:d,rootMargin:r,threshold:o});m.observe(h),c=()=>{m.disconnect(),c=un}},{immediate:!0,flush:"post"}):un,f=()=>{c(),p()};return mn(f),{isSupported:i,stop:f}}const Gg={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Xg(e={}){const{reactive:t=!1,target:n=Je,aliasMap:l=Gg,passive:r=!0,onEventFired:o=un}=e,a=Re(new Set),i={toJSON(){return{}},current:a},c=t?Re(i):i,p=new Set;function f(m,y){m in c&&(t?c[m]=y:c[m].value=y)}function h(m,y){var w,b;const $=(w=m.key)==null?void 0:w.toLowerCase(),C=(b=m.code)==null?void 0:b.toLowerCase(),k=[C,$].filter(Boolean);C&&(y?a.add(m.code):a.delete(m.code));for(const E of k)f(E,y);$==="meta"&&!y?(p.forEach(E=>{a.delete(E),f(E,!1)}),p.clear()):m.getModifierState("Meta")&&y&&[...a,...k].forEach(E=>p.add(E))}n&&(Me(n,"keydown",m=>(h(m,!0),o(m)),{passive:r}),Me(n,"keyup",m=>(h(m,!1),o(m)),{passive:r}));const d=new Proxy(c,{get(m,y,w){if(typeof y!="string")return Reflect.get(m,y,w);if(y=y.toLowerCase(),y in l&&(y=l[y]),!(y in c))if(/[+_-]/.test(y)){const $=y.split(/[+_-]/g).map(C=>C.trim());c[y]=B(()=>$.every(C=>v(d[C])))}else c[y]=q(!1);const b=Reflect.get(m,y,w);return t?v(b):b}});return d}function b9(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:l=!1,initialValue:r={x:0,y:0},window:o=Je,eventFilter:a}=e,i=q(r.x),c=q(r.y),p=q(null),f=w=>{t==="page"?(i.value=w.pageX,c.value=w.pageY):t==="client"&&(i.value=w.clientX,c.value=w.clientY),p.value="mouse"},h=()=>{i.value=r.x,c.value=r.y},d=w=>{if(w.touches.length>0){const b=w.touches[0];t==="page"?(i.value=b.pageX,c.value=b.pageY):t==="client"&&(i.value=b.clientX,c.value=b.clientY),p.value="touch"}},m=w=>a===void 0?f(w):a(()=>f(w),{}),y=w=>a===void 0?d(w):a(()=>d(w),{});return o&&(Me(o,"mousemove",m,{passive:!0}),Me(o,"dragover",m,{passive:!0}),n&&(Me(o,"touchstart",y,{passive:!0}),Me(o,"touchmove",y,{passive:!0}),l&&Me(o,"touchend",h,{passive:!0}))),{x:i,y:c,sourceType:p}}var Zt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Zt||(Zt={}));function Jg(e,t={}){const n=q(e),{threshold:l=50,onSwipe:r,onSwipeEnd:o,onSwipeStart:a}=t,i=Re({x:0,y:0}),c=(L,Y)=>{i.x=L,i.y=Y},p=Re({x:0,y:0}),f=(L,Y)=>{p.x=L,p.y=Y},h=B(()=>i.x-p.x),d=B(()=>i.y-p.y),{max:m,abs:y}=Math,w=B(()=>m(y(h.value),y(d.value))>=l),b=q(!1),$=q(!1),C=B(()=>w.value?y(h.value)>y(d.value)?h.value>0?Zt.LEFT:Zt.RIGHT:d.value>0?Zt.UP:Zt.DOWN:Zt.NONE),k=L=>t.pointerTypes?t.pointerTypes.includes(L.pointerType):!0,E=[Me(e,"pointerdown",L=>{var Y,ae;if(!k(L))return;$.value=!0,(ae=(Y=n.value)==null?void 0:Y.style)==null||ae.setProperty("touch-action","none");const fe=L.target;fe==null||fe.setPointerCapture(L.pointerId);const{clientX:he,clientY:_e}=L;c(he,_e),f(he,_e),a==null||a(L)}),Me(e,"pointermove",L=>{if(!k(L)||!$.value)return;const{clientX:Y,clientY:ae}=L;f(Y,ae),!b.value&&w.value&&(b.value=!0),b.value&&(r==null||r(L))}),Me(e,"pointerup",L=>{var Y,ae;!k(L)||(b.value&&(o==null||o(L,C.value)),$.value=!1,b.value=!1,(ae=(Y=n.value)==null?void 0:Y.style)==null||ae.setProperty("touch-action","initial"))})],j=()=>E.forEach(L=>L());return{isSwiping:Xn(b),direction:Xn(C),posStart:Xn(i),posEnd:Xn(p),distanceX:h,distanceY:d,stop:j}}var Qg=Object.defineProperty,Mi=Object.getOwnPropertySymbols,e1=Object.prototype.hasOwnProperty,t1=Object.prototype.propertyIsEnumerable,Ti=(e,t,n)=>t in e?Qg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,n1=(e,t)=>{for(var n in t||(t={}))e1.call(t,n)&&Ti(e,n,t[n]);if(Mi)for(var n of Mi(t))t1.call(t,n)&&Ti(e,n,t[n]);return e};function w9(e={}){const{controls:t=!1,offset:n=0,immediate:l=!0,interval:r="requestAnimationFrame"}=e,o=q(ho()+n),a=()=>o.value=ho()+n,i=r==="requestAnimationFrame"?Ju(a,{immediate:l}):ag(a,r,{immediate:l});return t?n1({timestamp:o},i):o}function Ht(e,t,n,l={}){var r;const{passive:o=!1,eventName:a,deep:i=!1,defaultValue:c}=l,p=Fn(),f=n||(p==null?void 0:p.emit)||((r=p==null?void 0:p.$emit)==null?void 0:r.bind(p));let h=a;t||(t="modelValue"),h=a||h||`update:${t.toString()}`;const d=()=>zm(e[t])?e[t]:c;if(o){const m=q(d());return pe(()=>e[t],y=>m.value=y),pe(m,y=>{(y!==e[t]||i)&&f(h,y)},{deep:i}),m}else return B({get(){return d()},set(m){f(h,m)}})}function A9({window:e=Je}={}){if(!e)return q(!1);const t=q(e.document.hasFocus());return Me(e,"blur",()=>{t.value=!1}),Me(e,"focus",()=>{t.value=!0}),t}function s1({window:e=Je,initialWidth:t=1/0,initialHeight:n=1/0}={}){const l=q(t),r=q(n),o=()=>{e&&(l.value=e.innerWidth,r.value=e.innerHeight)};return o(),og(o),Me("resize",o,{passive:!0}),{width:l,height:r}}/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Qu=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ms=e=>Qu?Symbol(e):"_vr_"+e,l1=ms("rvlm"),Li=ms("rvd"),aa=ms("r"),ep=ms("rl"),yo=ms("rvl"),Gn=typeof window!="undefined";function r1(e){return e.__esModule||Qu&&e[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function Pr(e,t){const n={};for(const l in t){const r=t[l];n[l]=Array.isArray(r)?r.map(e):e(r)}return n}const Is=()=>{},o1=/\/$/,a1=e=>e.replace(o1,"");function Sr(e,t,n="/"){let l,r={},o="",a="";const i=t.indexOf("?"),c=t.indexOf("#",i>-1?i:0);return i>-1&&(l=t.slice(0,i),o=t.slice(i+1,c>-1?c:t.length),r=e(o)),c>-1&&(l=l||t.slice(0,c),a=t.slice(c,t.length)),l=p1(l!=null?l:t,n),{fullPath:l+(o&&"?")+o+a,path:l,query:r,hash:a}}function i1(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ri(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function c1(e,t,n){const l=t.matched.length-1,r=n.matched.length-1;return l>-1&&l===r&&is(t.matched[l],n.matched[r])&&tp(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function is(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function tp(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!u1(e[n],t[n]))return!1;return!0}function u1(e,t){return Array.isArray(e)?Ii(e,t):Array.isArray(t)?Ii(t,e):e===t}function Ii(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,l)=>n===t[l]):e.length===1&&e[0]===t}function p1(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),l=e.split("/");let r=n.length-1,o,a;for(o=0;o<l.length;o++)if(a=l[o],!(r===1||a==="."))if(a==="..")r--;else break;return n.slice(0,r).join("/")+"/"+l.slice(o-(o===l.length?1:0)).join("/")}var Js;(function(e){e.pop="pop",e.push="push"})(Js||(Js={}));var Fs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Fs||(Fs={}));function f1(e){if(!e)if(Gn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),a1(e)}const d1=/^[^#]+#/;function h1(e,t){return e.replace(d1,"#")+t}function m1(e,t){const n=document.documentElement.getBoundingClientRect(),l=e.getBoundingClientRect();return{behavior:t.behavior,left:l.left-n.left-(t.left||0),top:l.top-n.top-(t.top||0)}}const dr=()=>({left:window.pageXOffset,top:window.pageYOffset});function g1(e){let t;if("el"in e){const n=e.el,l=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?l?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=m1(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Fi(e,t){return(history.state?history.state.position-t:-1)+e}const _o=new Map;function y1(e,t){_o.set(e,t)}function _1(e){const t=_o.get(e);return _o.delete(e),t}let v1=()=>location.protocol+"//"+location.host;function np(e,t){const{pathname:n,search:l,hash:r}=t,o=e.indexOf("#");if(o>-1){let i=r.includes(e.slice(o))?e.slice(o).length:1,c=r.slice(i);return c[0]!=="/"&&(c="/"+c),Ri(c,"")}return Ri(n,e)+l+r}function b1(e,t,n,l){let r=[],o=[],a=null;const i=({state:d})=>{const m=np(e,location),y=n.value,w=t.value;let b=0;if(d){if(n.value=m,t.value=d,a&&a===y){a=null;return}b=w?d.position-w.position:0}else l(m);r.forEach($=>{$(n.value,y,{delta:b,type:Js.pop,direction:b?b>0?Fs.forward:Fs.back:Fs.unknown})})};function c(){a=n.value}function p(d){r.push(d);const m=()=>{const y=r.indexOf(d);y>-1&&r.splice(y,1)};return o.push(m),m}function f(){const{history:d}=window;!d.state||d.replaceState(Oe({},d.state,{scroll:dr()}),"")}function h(){for(const d of o)d();o=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:p,destroy:h}}function Ni(e,t,n,l=!1,r=!1){return{back:e,current:t,forward:n,replaced:l,position:window.history.length,scroll:r?dr():null}}function w1(e){const{history:t,location:n}=window,l={value:np(e,n)},r={value:t.state};r.value||o(l.value,{back:null,current:l.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,p,f){const h=e.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:v1()+e+c;try{t[f?"replaceState":"pushState"](p,"",d),r.value=p}catch(m){console.error(m),n[f?"replace":"assign"](d)}}function a(c,p){const f=Oe({},t.state,Ni(r.value.back,c,r.value.forward,!0),p,{position:r.value.position});o(c,f,!0),l.value=c}function i(c,p){const f=Oe({},r.value,t.state,{forward:c,scroll:dr()});o(f.current,f,!0);const h=Oe({},Ni(l.value,c,null),{position:f.position+1},p);o(c,h,!1),l.value=c}return{location:l,state:r,push:i,replace:a}}function A1(e){e=f1(e);const t=w1(e),n=b1(e,t.state,t.location,t.replace);function l(o,a=!0){a||n.pauseListeners(),history.go(o)}const r=Oe({location:"",base:e,go:l,createHref:h1.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function x1(e){return typeof e=="string"||e&&typeof e=="object"}function sp(e){return typeof e=="string"||typeof e=="symbol"}const en={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},lp=ms("nf");var ji;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ji||(ji={}));function cs(e,t){return Oe(new Error,{type:e,[lp]:!0},t)}function tn(e,t){return e instanceof Error&&lp in e&&(t==null||!!(e.type&t))}const Hi="[^/]+?",C1={sensitive:!1,strict:!1,start:!0,end:!0},k1=/[.+*?^${}()[\]/\\]/g;function $1(e,t){const n=Oe({},C1,t),l=[];let r=n.start?"^":"";const o=[];for(const p of e){const f=p.length?[]:[90];n.strict&&!p.length&&(r+="/");for(let h=0;h<p.length;h++){const d=p[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(k1,"\\$&"),m+=40;else if(d.type===1){const{value:y,repeatable:w,optional:b,regexp:$}=d;o.push({name:y,repeatable:w,optional:b});const C=$||Hi;if(C!==Hi){m+=10;try{new RegExp(`(${C})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${y}" (${C}): `+E.message)}}let k=w?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(k=b&&p.length<2?`(?:/${k})`:"/"+k),b&&(k+="?"),r+=k,m+=20,b&&(m+=-8),w&&(m+=-20),C===".*"&&(m+=-50)}f.push(m)}l.push(f)}if(n.strict&&n.end){const p=l.length-1;l[p][l[p].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function i(p){const f=p.match(a),h={};if(!f)return null;for(let d=1;d<f.length;d++){const m=f[d]||"",y=o[d-1];h[y.name]=m&&y.repeatable?m.split("/"):m}return h}function c(p){let f="",h=!1;for(const d of e){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const m of d)if(m.type===0)f+=m.value;else if(m.type===1){const{value:y,repeatable:w,optional:b}=m,$=y in p?p[y]:"";if(Array.isArray($)&&!w)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const C=Array.isArray($)?$.join("/"):$;if(!C)if(b)d.length<2&&e.length>1&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);f+=C}}return f}return{re:a,score:l,keys:o,parse:i,stringify:c}}function E1(e,t){let n=0;for(;n<e.length&&n<t.length;){const l=t[n]-e[n];if(l)return l;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function B1(e,t){let n=0;const l=e.score,r=t.score;for(;n<l.length&&n<r.length;){const o=E1(l[n],r[n]);if(o)return o;n++}return r.length-l.length}const O1={type:0,value:""},D1=/[a-zA-Z0-9_]/;function P1(e){if(!e)return[[]];if(e==="/")return[[O1]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${p}": ${m}`)}let n=0,l=n;const r=[];let o;function a(){o&&r.push(o),o=[]}let i=0,c,p="",f="";function h(){!p||(n===0?o.push({type:0,value:p}):n===1||n===2||n===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:p,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),p="")}function d(){p+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&n!==2){l=n,n=4;continue}switch(n){case 0:c==="/"?(p&&h(),a()):c===":"?(h(),n=1):d();break;case 4:d(),n=l;break;case 1:c==="("?n=2:D1.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${p}"`),h(),a(),r}function S1(e,t,n){const l=$1(P1(e.path),n),r=Oe(l,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function M1(e,t){const n=[],l=new Map;t=Vi({strict:!1,end:!0,sensitive:!1},t);function r(f){return l.get(f)}function o(f,h,d){const m=!d,y=L1(f);y.aliasOf=d&&d.record;const w=Vi(t,f),b=[y];if("alias"in f){const k=typeof f.alias=="string"?[f.alias]:f.alias;for(const E of k)b.push(Oe({},y,{components:d?d.record.components:y.components,path:E,aliasOf:d?d.record:y}))}let $,C;for(const k of b){const{path:E}=k;if(h&&E[0]!=="/"){const j=h.record.path,L=j[j.length-1]==="/"?"":"/";k.path=h.record.path+(E&&L+E)}if($=S1(k,h,w),d?d.alias.push($):(C=C||$,C!==$&&C.alias.push($),m&&f.name&&!Ui($)&&a(f.name)),"children"in y){const j=y.children;for(let L=0;L<j.length;L++)o(j[L],$,d&&d.children[L])}d=d||$,c($)}return C?()=>{a(C)}:Is}function a(f){if(sp(f)){const h=l.get(f);h&&(l.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&l.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function i(){return n}function c(f){let h=0;for(;h<n.length&&B1(f,n[h])>=0&&(f.record.path!==n[h].record.path||!rp(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!Ui(f)&&l.set(f.record.name,f)}function p(f,h){let d,m={},y,w;if("name"in f&&f.name){if(d=l.get(f.name),!d)throw cs(1,{location:f});w=d.record.name,m=Oe(T1(h.params,d.keys.filter(C=>!C.optional).map(C=>C.name)),f.params),y=d.stringify(m)}else if("path"in f)y=f.path,d=n.find(C=>C.re.test(y)),d&&(m=d.parse(y),w=d.record.name);else{if(d=h.name?l.get(h.name):n.find(C=>C.re.test(h.path)),!d)throw cs(1,{location:f,currentLocation:h});w=d.record.name,m=Oe({},h.params,f.params),y=d.stringify(m)}const b=[];let $=d;for(;$;)b.unshift($.record),$=$.parent;return{name:w,path:y,params:m,matched:b,meta:I1(b)}}return e.forEach(f=>o(f)),{addRoute:o,resolve:p,removeRoute:a,getRoutes:i,getRecordMatcher:r}}function T1(e,t){const n={};for(const l of t)l in e&&(n[l]=e[l]);return n}function L1(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:R1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function R1(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const l in e.components)t[l]=typeof n=="boolean"?n:n[l];return t}function Ui(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function I1(e){return e.reduce((t,n)=>Oe(t,n.meta),{})}function Vi(e,t){const n={};for(const l in e)n[l]=l in t?t[l]:e[l];return n}function rp(e,t){return t.children.some(n=>n===e||rp(e,n))}const op=/#/g,F1=/&/g,N1=/\//g,j1=/=/g,H1=/\?/g,ap=/\+/g,U1=/%5B/g,V1=/%5D/g,ip=/%5E/g,W1=/%60/g,cp=/%7B/g,z1=/%7C/g,up=/%7D/g,K1=/%20/g;function ia(e){return encodeURI(""+e).replace(z1,"|").replace(U1,"[").replace(V1,"]")}function q1(e){return ia(e).replace(cp,"{").replace(up,"}").replace(ip,"^")}function vo(e){return ia(e).replace(ap,"%2B").replace(K1,"+").replace(op,"%23").replace(F1,"%26").replace(W1,"`").replace(cp,"{").replace(up,"}").replace(ip,"^")}function Y1(e){return vo(e).replace(j1,"%3D")}function Z1(e){return ia(e).replace(op,"%23").replace(H1,"%3F")}function G1(e){return e==null?"":Z1(e).replace(N1,"%2F")}function Wl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function X1(e){const t={};if(e===""||e==="?")return t;const l=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<l.length;++r){const o=l[r].replace(ap," "),a=o.indexOf("="),i=Wl(a<0?o:o.slice(0,a)),c=a<0?null:Wl(o.slice(a+1));if(i in t){let p=t[i];Array.isArray(p)||(p=t[i]=[p]),p.push(c)}else t[i]=c}return t}function Wi(e){let t="";for(let n in e){const l=e[n];if(n=Y1(n),l==null){l!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(l)?l.map(o=>o&&vo(o)):[l&&vo(l)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function J1(e){const t={};for(const n in e){const l=e[n];l!==void 0&&(t[n]=Array.isArray(l)?l.map(r=>r==null?null:""+r):l==null?l:""+l)}return t}function As(){let e=[];function t(l){return e.push(l),()=>{const r=e.indexOf(l);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function ln(e,t,n,l,r){const o=l&&(l.enterCallbacks[r]=l.enterCallbacks[r]||[]);return()=>new Promise((a,i)=>{const c=h=>{h===!1?i(cs(4,{from:n,to:t})):h instanceof Error?i(h):x1(h)?i(cs(2,{from:t,to:h})):(o&&l.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},p=e.call(l&&l.instances[r],t,n,c);let f=Promise.resolve(p);e.length<3&&(f=f.then(c)),f.catch(h=>i(h))})}function Mr(e,t,n,l){const r=[];for(const o of e)for(const a in o.components){let i=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Q1(i)){const p=(i.__vccOpts||i)[t];p&&r.push(ln(p,n,l,o,a))}else{let c=i();r.push(()=>c.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=r1(p)?p.default:p;o.components[a]=f;const d=(f.__vccOpts||f)[t];return d&&ln(d,n,l,o,a)()}))}}return r}function Q1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function zi(e){const t=I(aa),n=I(ep),l=B(()=>t.resolve(v(e.to))),r=B(()=>{const{matched:c}=l.value,{length:p}=c,f=c[p-1],h=n.matched;if(!f||!h.length)return-1;const d=h.findIndex(is.bind(null,f));if(d>-1)return d;const m=Ki(c[p-2]);return p>1&&Ki(f)===m&&h[h.length-1].path!==m?h.findIndex(is.bind(null,c[p-2])):d}),o=B(()=>r.value>-1&&s0(n.params,l.value.params)),a=B(()=>r.value>-1&&r.value===n.matched.length-1&&tp(n.params,l.value.params));function i(c={}){return n0(c)?t[v(e.replace)?"replace":"push"](v(e.to)).catch(Is):Promise.resolve()}return{route:l,href:B(()=>l.value.href),isActive:o,isExactActive:a,navigate:i}}const e0=ye({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zi,setup(e,{slots:t}){const n=Re(zi(e)),{options:l}=I(aa),r=B(()=>({[qi(e.activeClass,l.linkActiveClass,"router-link-active")]:n.isActive,[qi(e.exactActiveClass,l.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:yt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),t0=e0;function n0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function s0(e,t){for(const n in t){const l=t[n],r=e[n];if(typeof l=="string"){if(l!==r)return!1}else if(!Array.isArray(r)||r.length!==l.length||l.some((o,a)=>o!==r[a]))return!1}return!0}function Ki(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const qi=(e,t,n)=>e!=null?e:t!=null?t:n,l0=ye({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const l=I(yo),r=B(()=>e.route||l.value),o=I(Li,0),a=B(()=>r.value.matched[o]);mt(Li,o+1),mt(l1,a),mt(yo,r);const i=q();return pe(()=>[i.value,a.value,e.name],([c,p,f],[h,d,m])=>{p&&(p.instances[f]=c,d&&d!==p&&c&&c===h&&(p.leaveGuards.size||(p.leaveGuards=d.leaveGuards),p.updateGuards.size||(p.updateGuards=d.updateGuards))),c&&p&&(!d||!is(p,d)||!h)&&(p.enterCallbacks[f]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,p=a.value,f=p&&p.components[e.name],h=e.name;if(!f)return Yi(n.default,{Component:f,route:c});const d=p.props[e.name],m=d?d===!0?c.params:typeof d=="function"?d(c):d:null,w=yt(f,Oe({},m,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(p.instances[h]=null)},ref:i}));return Yi(n.default,{Component:w,route:c})||w}}});function Yi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const r0=l0;function o0(e){const t=M1(e.routes,e),n=e.parseQuery||X1,l=e.stringifyQuery||Wi,r=e.history,o=As(),a=As(),i=As(),c=Wt(en);let p=en;Gn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Pr.bind(null,O=>""+O),h=Pr.bind(null,G1),d=Pr.bind(null,Wl);function m(O,Z){let R,X;return sp(O)?(R=t.getRecordMatcher(O),X=Z):X=O,t.addRoute(X,R)}function y(O){const Z=t.getRecordMatcher(O);Z&&t.removeRoute(Z)}function w(){return t.getRoutes().map(O=>O.record)}function b(O){return!!t.getRecordMatcher(O)}function $(O,Z){if(Z=Oe({},Z||c.value),typeof O=="string"){const ue=Sr(n,O,Z.path),g=t.resolve({path:ue.path},Z),_=r.createHref(ue.fullPath);return Oe(ue,g,{params:d(g.params),hash:Wl(ue.hash),redirectedFrom:void 0,href:_})}let R;if("path"in O)R=Oe({},O,{path:Sr(n,O.path,Z.path).path});else{const ue=Oe({},O.params);for(const g in ue)ue[g]==null&&delete ue[g];R=Oe({},O,{params:h(O.params)}),Z.params=h(Z.params)}const X=t.resolve(R,Z),be=O.hash||"";X.params=f(d(X.params));const Pe=i1(l,Oe({},O,{hash:q1(be),path:X.path})),de=r.createHref(Pe);return Oe({fullPath:Pe,hash:be,query:l===Wi?J1(O.query):O.query||{}},X,{redirectedFrom:void 0,href:de})}function C(O){return typeof O=="string"?Sr(n,O,c.value.path):Oe({},O)}function k(O,Z){if(p!==O)return cs(8,{from:Z,to:O})}function E(O){return Y(O)}function j(O){return E(Oe(C(O),{replace:!0}))}function L(O){const Z=O.matched[O.matched.length-1];if(Z&&Z.redirect){const{redirect:R}=Z;let X=typeof R=="function"?R(O):R;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=C(X):{path:X},X.params={}),Oe({query:O.query,hash:O.hash,params:O.params},X)}}function Y(O,Z){const R=p=$(O),X=c.value,be=O.state,Pe=O.force,de=O.replace===!0,ue=L(R);if(ue)return Y(Oe(C(ue),{state:be,force:Pe,replace:de}),Z||R);const g=R;g.redirectedFrom=Z;let _;return!Pe&&c1(l,X,R)&&(_=cs(16,{to:g,from:X}),It(X,X,!0,!1)),(_?Promise.resolve(_):fe(g,X)).catch(x=>tn(x)?tn(x,2)?x:me(x):se(x,g,X)).then(x=>{if(x){if(tn(x,2))return Y(Oe(C(x.to),{state:be,force:Pe,replace:de}),Z||g)}else x=_e(g,X,!0,de,be);return he(g,X,x),x})}function ae(O,Z){const R=k(O,Z);return R?Promise.reject(R):Promise.resolve()}function fe(O,Z){let R;const[X,be,Pe]=a0(O,Z);R=Mr(X.reverse(),"beforeRouteLeave",O,Z);for(const ue of X)ue.leaveGuards.forEach(g=>{R.push(ln(g,O,Z))});const de=ae.bind(null,O,Z);return R.push(de),Wn(R).then(()=>{R=[];for(const ue of o.list())R.push(ln(ue,O,Z));return R.push(de),Wn(R)}).then(()=>{R=Mr(be,"beforeRouteUpdate",O,Z);for(const ue of be)ue.updateGuards.forEach(g=>{R.push(ln(g,O,Z))});return R.push(de),Wn(R)}).then(()=>{R=[];for(const ue of O.matched)if(ue.beforeEnter&&!Z.matched.includes(ue))if(Array.isArray(ue.beforeEnter))for(const g of ue.beforeEnter)R.push(ln(g,O,Z));else R.push(ln(ue.beforeEnter,O,Z));return R.push(de),Wn(R)}).then(()=>(O.matched.forEach(ue=>ue.enterCallbacks={}),R=Mr(Pe,"beforeRouteEnter",O,Z),R.push(de),Wn(R))).then(()=>{R=[];for(const ue of a.list())R.push(ln(ue,O,Z));return R.push(de),Wn(R)}).catch(ue=>tn(ue,8)?ue:Promise.reject(ue))}function he(O,Z,R){for(const X of i.list())X(O,Z,R)}function _e(O,Z,R,X,be){const Pe=k(O,Z);if(Pe)return Pe;const de=Z===en,ue=Gn?history.state:{};R&&(X||de?r.replace(O.fullPath,Oe({scroll:de&&ue&&ue.scroll},be)):r.push(O.fullPath,be)),c.value=O,It(O,Z,R,de),me()}let Te;function Fe(){Te||(Te=r.listen((O,Z,R)=>{const X=$(O),be=L(X);if(be){Y(Oe(be,{replace:!0}),X).catch(Is);return}p=X;const Pe=c.value;Gn&&y1(Fi(Pe.fullPath,R.delta),dr()),fe(X,Pe).catch(de=>tn(de,12)?de:tn(de,2)?(Y(de.to,X).then(ue=>{tn(ue,20)&&!R.delta&&R.type===Js.pop&&r.go(-1,!1)}).catch(Is),Promise.reject()):(R.delta&&r.go(-R.delta,!1),se(de,X,Pe))).then(de=>{de=de||_e(X,Pe,!1),de&&(R.delta?r.go(-R.delta,!1):R.type===Js.pop&&tn(de,20)&&r.go(-1,!1)),he(X,Pe,de)}).catch(Is)}))}let Ze=As(),$e=As(),te;function se(O,Z,R){me(O);const X=$e.list();return X.length?X.forEach(be=>be(O,Z,R)):console.error(O),Promise.reject(O)}function ee(){return te&&c.value!==en?Promise.resolve():new Promise((O,Z)=>{Ze.add([O,Z])})}function me(O){return te||(te=!O,Fe(),Ze.list().forEach(([Z,R])=>O?R(O):Z()),Ze.reset()),O}function It(O,Z,R,X){const{scrollBehavior:be}=e;if(!Gn||!be)return Promise.resolve();const Pe=!R&&_1(Fi(O.fullPath,0))||(X||!R)&&history.state&&history.state.scroll||null;return Ye().then(()=>be(O,Z,Pe)).then(de=>de&&g1(de)).catch(de=>se(de,O,Z))}const Qe=O=>r.go(O);let At;const at=new Set;return{currentRoute:c,addRoute:m,removeRoute:y,hasRoute:b,getRoutes:w,resolve:$,options:e,push:E,replace:j,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:o.add,beforeResolve:a.add,afterEach:i.add,onError:$e.add,isReady:ee,install(O){const Z=this;O.component("RouterLink",t0),O.component("RouterView",r0),O.config.globalProperties.$router=Z,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>v(c)}),Gn&&!At&&c.value===en&&(At=!0,E(r.location).catch(be=>{}));const R={};for(const be in en)R[be]=B(()=>c.value[be]);O.provide(aa,Z),O.provide(ep,Re(R)),O.provide(yo,c);const X=O.unmount;at.add(O),O.unmount=function(){at.delete(O),at.size<1&&(p=en,Te&&Te(),Te=null,c.value=en,At=!1,te=!1),X()}}}}function Wn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function a0(e,t){const n=[],l=[],r=[],o=Math.max(t.matched.length,e.matched.length);for(let a=0;a<o;a++){const i=t.matched[a];i&&(e.matched.find(p=>is(p,i))?l.push(i):n.push(i));const c=e.matched[a];c&&(t.matched.find(p=>is(p,c))||r.push(c))}return[n,l,r]}const Tr=q(!1),Ns=q(!1),Jn=q(!1),i0=q(!0),bo=Dg(we({xs:460},kg)),Mn=s1(),pp=Xg(),c0=B(()=>Mn.height.value-Mn.width.value/cn>180),fp=Yg($t?document.body:null),ls=Cg(),u0=B(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=ls.value)==null?void 0:e.tagName)||"")||((t=ls.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),p0=B(()=>{var e;return["BUTTON","A"].includes(((e=ls.value)==null?void 0:e.tagName)||"")});Rt("slidev-camera","default");Rt("slidev-mic","default");const Dl=Rt("slidev-scale",0),nt=Rt("slidev-show-overview",!1),Lr=Rt("slidev-presenter-cursor",!0),Zi=Rt("slidev-show-editor",!1);Rt("slidev-editor-width",$t?window.innerWidth*.4:100);const dp=Zu(nt);function Gi(e,t,n,l=r=>r){return e*l(.5-t*(.5-n))}function f0(e){return[-e[0],-e[1]]}function Dt(e,t){return[e[0]+t[0],e[1]+t[1]]}function kt(e,t){return[e[0]-t[0],e[1]-t[1]]}function Ot(e,t){return[e[0]*t,e[1]*t]}function d0(e,t){return[e[0]/t,e[1]/t]}function xs(e){return[e[1],-e[0]]}function h0(e,t){return e[0]*t[0]+e[1]*t[1]}function m0(e,t){return e[0]===t[0]&&e[1]===t[1]}function g0(e){return Math.hypot(e[0],e[1])}function y0(e){return e[0]*e[0]+e[1]*e[1]}function Xi(e,t){return y0(kt(e,t))}function hp(e){return d0(e,g0(e))}function _0(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Cs(e,t,n){let l=Math.sin(n),r=Math.cos(n),o=e[0]-t[0],a=e[1]-t[1],i=o*r-a*l,c=o*l+a*r;return[i+t[0],c+t[1]]}function wo(e,t,n){return Dt(e,Ot(kt(t,e),n))}function Ji(e,t,n){return Dt(e,Ot(t,n))}var{min:zn,PI:v0}=Math,Qi=.275,ks=v0+1e-4;function b0(e,t={}){let{size:n=16,smoothing:l=.5,thinning:r=.5,simulatePressure:o=!0,easing:a=te=>te,start:i={},end:c={},last:p=!1}=t,{cap:f=!0,easing:h=te=>te*(2-te)}=i,{cap:d=!0,easing:m=te=>--te*te*te+1}=c;if(e.length===0||n<=0)return[];let y=e[e.length-1].runningLength,w=i.taper===!1?0:i.taper===!0?Math.max(n,y):i.taper,b=c.taper===!1?0:c.taper===!0?Math.max(n,y):c.taper,$=Math.pow(n*l,2),C=[],k=[],E=e.slice(0,10).reduce((te,se)=>{let ee=se.pressure;if(o){let me=zn(1,se.distance/n),It=zn(1,1-me);ee=zn(1,te+(It-te)*(me*Qi))}return(te+ee)/2},e[0].pressure),j=Gi(n,r,e[e.length-1].pressure,a),L,Y=e[0].vector,ae=e[0].point,fe=ae,he=ae,_e=fe;for(let te=0;te<e.length;te++){let{pressure:se}=e[te],{point:ee,vector:me,distance:It,runningLength:Qe}=e[te];if(te<e.length-1&&y-Qe<3)continue;if(r){if(o){let R=zn(1,It/n),X=zn(1,1-R);se=zn(1,E+(X-E)*(R*Qi))}j=Gi(n,r,se,a)}else j=n/2;L===void 0&&(L=j);let At=Qe<w?h(Qe/w):1,at=y-Qe<b?m((y-Qe)/b):1;if(j=Math.max(.01,j*Math.min(At,at)),te===e.length-1){let R=Ot(xs(me),j);C.push(kt(ee,R)),k.push(Dt(ee,R));continue}let Un=e[te+1].vector,O=h0(me,Un);if(O<0){let R=Ot(xs(Y),j);for(let X=1/13,be=0;be<=1;be+=X)he=Cs(kt(ee,R),ee,ks*be),C.push(he),_e=Cs(Dt(ee,R),ee,ks*-be),k.push(_e);ae=he,fe=_e;continue}let Z=Ot(xs(wo(Un,me,O)),j);he=kt(ee,Z),(te<=1||Xi(ae,he)>$)&&(C.push(he),ae=he),_e=Dt(ee,Z),(te<=1||Xi(fe,_e)>$)&&(k.push(_e),fe=_e),E=se,Y=me}let Te=e[0].point.slice(0,2),Fe=e.length>1?e[e.length-1].point.slice(0,2):Dt(e[0].point,[1,1]),Ze=[],$e=[];if(e.length===1){if(!(w||b)||p){let te=Ji(Te,hp(xs(kt(Te,Fe))),-(L||j)),se=[];for(let ee=1/13,me=ee;me<=1;me+=ee)se.push(Cs(te,Te,ks*2*me));return se}}else{if(!(w||b&&e.length===1))if(f)for(let se=1/13,ee=se;ee<=1;ee+=se){let me=Cs(k[0],Te,ks*ee);Ze.push(me)}else{let se=kt(C[0],k[0]),ee=Ot(se,.5),me=Ot(se,.51);Ze.push(kt(Te,ee),kt(Te,me),Dt(Te,me),Dt(Te,ee))}let te=xs(f0(e[e.length-1].vector));if(b||w&&e.length===1)$e.push(Fe);else if(d){let se=Ji(Fe,te,j);for(let ee=1/29,me=ee;me<1;me+=ee)$e.push(Cs(se,Fe,ks*3*me))}else $e.push(Dt(Fe,Ot(te,j)),Dt(Fe,Ot(te,j*.99)),kt(Fe,Ot(te,j*.99)),kt(Fe,Ot(te,j)))}return C.concat($e,k.reverse(),Ze)}function w0(e,t={}){var n;let{streamline:l=.5,size:r=16,last:o=!1}=t;if(e.length===0)return[];let a=.15+(1-l)*.85,i=Array.isArray(e[0])?e:e.map(({x:m,y,pressure:w=.5})=>[m,y,w]);if(i.length===2){let m=i[1];i=i.slice(0,-1);for(let y=1;y<5;y++)i.push(wo(i[0],m,y/4))}i.length===1&&(i=[...i,[...Dt(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,f=0,h=c[0],d=i.length-1;for(let m=1;m<i.length;m++){let y=o&&m===d?i[m].slice(0,2):wo(h.point,i[m],a);if(m0(h.point,y))continue;let w=_0(y,h.point);if(f+=w,m<d&&!p){if(f<r)continue;p=!0}h={point:y,pressure:i[m][2]>=0?i[m][2]:.5,vector:hp(kt(h.point,y)),distance:w,runningLength:f},c.push(h)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function A0(e,t={}){return b0(w0(e,t),t)}var x0=A0,C0=Object.defineProperty,ec=Object.getOwnPropertySymbols,k0=Object.prototype.hasOwnProperty,$0=Object.prototype.propertyIsEnumerable,tc=(e,t,n)=>t in e?C0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ao=(e,t)=>{for(var n in t||(t={}))k0.call(t,n)&&tc(e,n,t[n]);if(ec)for(var n of ec(t))$0.call(t,n)&&tc(e,n,t[n]);return e},E0=()=>({events:{},emit(e,...t){(this.events[e]||[]).forEach(n=>n(...t))},on(e,t){return(this.events[e]=this.events[e]||[]).push(t),()=>this.events[e]=(this.events[e]||[]).filter(n=>n!==t)}});function zl(e,t){return e-t}function B0(e){return e<0?-1:1}function Kl(e){return[Math.abs(e),B0(e)]}function mp(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var O0=2,qt=O0,gs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t,n;const l=this.drauu.el,r=(t=this.drauu.options.coordinateScale)!=null?t:1;if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-o.left)*r,y:(e.pageY-o.top)*r,pressure:e.pressure}}else{const o=this.drauu.svgPoint;o.x=e.clientX,o.y=e.clientY;const a=o.matrixTransform((n=l.getScreenCTM())==null?void 0:n.inverse());return{x:a.x*r,y:a.y*r,pressure:e.pressure}}}createElement(e,t){var n;const l=document.createElementNS("http://www.w3.org/2000/svg",e),r=t?Ao(Ao({},this.brush),t):this.brush;return l.setAttribute("fill",(n=r.fill)!=null?n:"transparent"),l.setAttribute("stroke",r.color),l.setAttribute("stroke-width",r.size.toString()),l.setAttribute("stroke-linecap","round"),r.dasharray&&l.setAttribute("stroke-dasharray",r.dasharray),l}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(qt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},D0=class extends gs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=x0(e,Ao({size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},this.brush.stylusOptions));if(!t.length)return"";const n=t.reduce((l,[r,o],a,i)=>{const[c,p]=i[(a+1)%i.length];return l.push(r,o,(r+c)/2,(o+p)/2),l},["M",...t[0],"Q"]);return n.push("Z"),n.map(l=>typeof l=="number"?l.toFixed(2):l).join(" ")}},P0=class extends gs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Kl(e.x-this.start.x),[l,r]=Kl(e.y-this.start.y);if(this.shiftPressed){const o=Math.min(t,l);t=o,l=o}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",l);else{const[o,a]=[this.start.x,this.start.x+t*n].sort(zl),[i,c]=[this.start.y,this.start.y+l*r].sort(zl);this.attr("cx",(o+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-o)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function gp(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),l=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",t),l.setAttribute("id",e),l.setAttribute("viewBox","0 -5 10 10"),l.setAttribute("refX","5"),l.setAttribute("refY","0"),l.setAttribute("markerWidth","4"),l.setAttribute("markerHeight","4"),l.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),l.appendChild(r),n.appendChild(l),n}var S0=class extends gs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=mp(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(gp(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const l=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let o=l/r;o=Math.round(o),Math.abs(o)<=1?(t=this.start.x+r*o,n=this.start.y+r):(t=this.start.x+l,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},M0=class extends gs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Kl(e.x-this.start.x),[l,r]=Kl(e.y-this.start.y);if(this.shiftPressed){const o=Math.min(t,l);t=o,l=o}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-l),this.attr("width",t*2),this.attr("height",l*2);else{const[o,a]=[this.start.x,this.start.x+t*n].sort(zl),[i,c]=[this.start.y,this.start.y+l*r].sort(zl);this.attr("x",o),this.attr("y",i),this.attr("width",a-o),this.attr("height",c-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function T0(e,t){const n=e.x-t.x,l=e.y-t.y;return n*n+l*l}function L0(e,t,n){let l=t.x,r=t.y,o=n.x-l,a=n.y-r;if(o!==0||a!==0){const i=((e.x-l)*o+(e.y-r)*a)/(o*o+a*a);i>1?(l=n.x,r=n.y):i>0&&(l+=o*i,r+=a*i)}return o=e.x-l,a=e.y-r,o*o+a*a}function R0(e,t){let n=e[0];const l=[n];let r;for(let o=1,a=e.length;o<a;o++)r=e[o],T0(r,n)>t&&(l.push(r),n=r);return n!==r&&r&&l.push(r),l}function xo(e,t,n,l,r){let o=l,a=0;for(let i=t+1;i<n;i++){const c=L0(e[i],e[t],e[n]);c>o&&(a=i,o=c)}o>l&&(a-t>1&&xo(e,t,a,l,r),r.push(e[a]),n-a>1&&xo(e,a,n,l,r))}function I0(e,t){const n=e.length-1,l=[e[0]];return xo(e,0,n,t,l),l.push(e[n]),l}function nc(e,t,n=!1){if(e.length<=2)return e;const l=t!==void 0?t*t:1;return e=n?e:R0(e,l),e=I0(e,l),e}var F0=class extends gs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=mp();const t=gp(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=nc(this.points,1,!0),this.count=0),this.attr("d",lc(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",lc(nc(this.points,1,!0))),!e.getTotalLength()))}};function N0(e,t){const n=t.x-e.x,l=t.y-e.y;return{length:Math.sqrt(Math.pow(n,2)+Math.pow(l,2)),angle:Math.atan2(l,n)}}function sc(e,t,n,l){const r=t||e,o=n||e,a=.2,i=N0(r,o),c=i.angle+(l?Math.PI:0),p=i.length*a,f=e.x+Math.cos(c)*p,h=e.y+Math.sin(c)*p;return{x:f,y:h}}function j0(e,t,n){const l=sc(n[t-1],n[t-2],e),r=sc(e,n[t-1],n[t+1],!0);return`C ${l.x.toFixed(qt)},${l.y.toFixed(qt)} ${r.x.toFixed(qt)},${r.y.toFixed(qt)} ${e.x.toFixed(qt)},${e.y.toFixed(qt)}`}function lc(e){return e.reduce((t,n,l,r)=>l===0?`M ${n.x.toFixed(qt)},${n.y.toFixed(qt)}`:`${t} ${j0(n,l,r)}`,"")}var H0=class extends gs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,l)=>{if(n&&n.length)for(let r=0;r<n.length;r++){const o=n[r];if(o.getTotalLength){const a=o.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=o.getPointAtLength(a*i/this.pathSubFactor),p=o.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:p.x,y1:c.y,y2:p.y,segment:i,element:l||o})}}else o.children&&t(o.children,o)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],l={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,l)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,l=e.x2,r=t.x1,o=t.x2,a=e.y1,i=e.y2,c=t.y1,p=t.y2,f=(n-l)*(c-p)-(a-i)*(r-o),h=(n*i-a*l)*(r-o)-(n-l)*(r*p-c*o),d=(n*i-a*l)*(c-p)-(a-i)*(r*p-c*o),m=(y,w,b)=>y>=w&&y<=b?!0:y>=b&&y<=w;if(f===0)return!1;{const y={x:h/f,y:d/f};return m(y.x,n,l)&&m(y.y,a,i)&&m(y.x,r,o)&&m(y.y,c,p)}}};function U0(e){return{draw:new F0(e),stylus:new D0(e),line:new S0(e),rectangle:new M0(e),ellipse:new P0(e),eraseLine:new H0(e)}}var V0=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=E0(),this._models=U0(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,l=this.eventStart.bind(this),r=this.eventMove.bind(this),o=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",l,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",o,{passive:!1}),window.addEventListener("pointercancel",o,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",l),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",o),window.removeEventListener("pointercancel",o),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function W0(e){return new V0(e)}const Co=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Ut=Rt("slidev-drawing-enabled",!1),x9=Rt("slidev-drawing-pinned",!1),z0=q(!1),K0=q(!1),q0=q(!1),Qs=q(!1),En=Wm(Rt("slidev-drawing-brush",{color:Co[0],size:4,mode:"stylus"})),rc=q("stylus"),yp=B(()=>Ce.drawings.syncAll||jt.value);let el=!1;const $s=B({get(){return rc.value},set(e){rc.value=e,e==="arrow"?(En.mode="line",En.arrowEnd=!0):(En.mode=e,En.arrowEnd=!1)}}),Y0=Re({brush:En,acceptsInputTypes:B(()=>Ut.value?void 0:["pen"]),coordinateTransform:!1}),st=sr(W0(Y0));function Z0(){st.clear(),yp.value&&Ku(He.value,"")}function _p(){var e;K0.value=st.canRedo(),z0.value=st.canUndo(),q0.value=!!((e=st.el)!=null&&e.children.length)}function G0(e){el=!0;const t=Hl[e||He.value];t!=null?st.load(t):st.clear(),el=!1}st.on("changed",()=>{if(_p(),!el){const e=st.dump(),t=He.value;(Hl[t]||"")!==e&&yp.value&&Ku(t,st.dump())}});jm(e=>{el=!0,e[He.value]!=null&&st.load(e[He.value]||""),el=!1,_p()});Ye(()=>{pe(He,()=>{!st.mounted||G0()},{immediate:!0})});st.on("start",()=>Qs.value=!0);st.on("end",()=>Qs.value=!1);window.addEventListener("keydown",e=>{if(!Ut.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?st.redo():st.undo():e.code==="Escape"?Ut.value=!1:e.code==="KeyL"&&t?$s.value="line":e.code==="KeyA"&&t?$s.value="arrow":e.code==="KeyS"&&t?$s.value="stylus":e.code==="KeyR"&&t?$s.value="rectangle":e.code==="KeyE"&&t?$s.value="ellipse":e.code==="KeyC"&&t?Z0():e.code.startsWith("Digit")&&t&&+e.code[5]<=Co.length?En.color=Co[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);const oc=Lg(),Rr=Rt("slidev-color-schema","auto"),ko=B(()=>Ce.colorSchema!=="auto"),ca=B({get(){return ko.value?Ce.colorSchema==="dark":Rr.value==="auto"?oc.value:Rr.value==="dark"},set(e){ko.value||(Rr.value=e===oc.value?"auto":e?"dark":"light")}}),vp=Zu(ca);$t&&pe(ca,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});function X0(){return[]}const Pl=q(1),Sl=B(()=>je.length-1),_t=q(0),ua=q(0);function J0(){_t.value>Pl.value&&(_t.value-=1)}function Q0(){_t.value<Sl.value&&(_t.value+=1)}function ey(){if(_t.value>Pl.value){let e=_t.value-ua.value;e<Pl.value&&(e=Pl.value),_t.value=e}}function ty(){if(_t.value<Sl.value){let e=_t.value+ua.value;e>Sl.value&&(e=Sl.value),_t.value=e}}const bp=Ne(ft(u0),ft(p0),i0);function ny(e,t,n=!1){typeof e=="string"&&(e=pp[e]);const l=Ne(e,bp);let r=0,o;const a=()=>{if(clearTimeout(o),!l.value){r=0;return}n&&(o=setTimeout(a,Math.max(1e3-r*250,150)),r++),t()};return pe(l,a,{flush:"sync"})}function sy(e,t){return xg(e,n=>{!bp.value||n.repeat||t()})}function ly(){const e=X0(),{escape:t,space:n,shift:l,left:r,right:o,up:a,down:i,enter:c,d:p,g:f,o:h}=pp;new Map([{key:Ne(n,ft(l)),fn:pn,autoRepeat:!0},{key:Ne(n,l),fn,autoRepeat:!0},{key:Ne(o,ft(l),ft(nt)),fn:pn,autoRepeat:!0},{key:Ne(r,ft(l),ft(nt)),fn,autoRepeat:!0},{key:"pageDown",fn:pn,autoRepeat:!0},{key:"pageUp",fn,autoRepeat:!0},{key:Ne(a,ft(nt)),fn:()=>sl(!1),autoRepeat:!0},{key:Ne(i,ft(nt)),fn:nl,autoRepeat:!0},{key:Ne(r,l),fn:()=>sl(!1),autoRepeat:!0},{key:Ne(o,l),fn:nl,autoRepeat:!0},{key:Ne(p,ft(Ut)),fn:vp},{key:Ne(h,ft(Ut)),fn:dp},{key:Ne(t,ft(Ut)),fn:()=>nt.value=!1},{key:Ne(f,ft(Ut)),fn:()=>Jn.value=!Jn.value},{key:Ne(r,nt),fn:J0},{key:Ne(o,nt),fn:Q0},{key:Ne(a,nt),fn:ey},{key:Ne(i,nt),fn:ty},{key:Ne(c,nt),fn:()=>{us(_t.value),nt.value=!1}},...e].map(m=>[m.key,m])).forEach(m=>{m.fn&&ny(m.key,m.fn,m.autoRepeat)}),sy("f",()=>fp.toggle())}const ry={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},oy=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),ay=[oy];function iy(e,t){return A(),z("svg",ry,ay)}var cy={name:"carbon-close",render:iy};function pa(e){var n,l;const t=(l=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:l.no;return t!=null?`slidev-page-${t}`:""}const wp=ye({name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;I(U);const n=q(),l=qg(n),r=B(()=>t.width?t.width:l.width.value),o=B(()=>t.width?t.width/cn:l.height.value);t.width&&al(()=>{n.value&&(n.value.style.width=`${r.value}px`,n.value.style.height=`${o.value}px`)});const a=B(()=>r.value/o.value),i=B(()=>t.scale?t.scale:a.value<cn?r.value/Sn:o.value*cn/Sn),c=B(()=>({height:`${Vu}px`,width:`${Sn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),p=B(()=>({"select-none":!Ce.selectable,"slidev-code-line-numbers":Ce.lineNumbers}));return mt(Uu,i),(f,h)=>(A(),z("div",{id:"slide-container",ref_key:"root",ref:n,class:Le(v(p))},[s("div",{id:"slide-content",style:ze(v(c))},[wt(f.$slots,"default")],4),wt(f.$slots,"controls")],2))}});var fa=ye({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Ht(e,"clicks",t),l=Ht(e,"clicksElements",t),r=Ht(e,"clicksDisabled",t),o=Ht(e,"clicksOrderMap",t);l.value.length=0,mt($m,e.route),mt(Em,e.context),mt(Ls,n),mt(Rs,r),mt(xn,l),mt(po,o)},render(){var e,t;return this.$props.is?yt(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}});const uy=["innerHTML"],Ap=ye({name:"DrawingPreview",props:{page:null},setup(e){return I(U),(t,n)=>v(Hl)[e.page]?(A(),z("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:v(Hl)[e.page]},null,8,uy)):V("v-if",!0)}});var py=Object.freeze(Object.defineProperty({__proto__:null,default:Ap},Symbol.toStringTag,{value:"Module"}));const fy={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},dy=["onClick"],hy=ye({name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const n=e;I(U);const l=Ht(n,"modelValue",t);function r(){l.value=!1}function o(m){us(m),r()}function a(m){return m===_t.value}const i=bo.smaller("xs"),c=bo.smaller("sm"),p=4*16*2,f=2*16,h=B(()=>i.value?Mn.width.value-p:c.value?(Mn.width.value-p-f)/2:300),d=B(()=>Math.floor((Mn.width.value-p)/(h.value+f)));return al(()=>{_t.value=He.value,ua.value=d.value}),(m,y)=>{const w=cy;return A(),z(ke,null,[Dn(s("div",fy,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:ze(`grid-template-columns: repeat(auto-fit,minmax(${v(h)}px,1fr))`)},[(A(!0),z(ke,null,il(v(je).slice(0,-1),(b,$)=>(A(),z("div",{key:b.path,class:"relative"},[s("div",{class:Le(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a($+1)}]),onClick:C=>o(+b.path)},[(A(),K(wp,{key:b.path,width:v(h),"clicks-disabled":!0,class:"pointer-events-none"},{default:M(()=>[S(v(fa),{is:b==null?void 0:b.component,"clicks-disabled":!0,class:Le(v(pa)(b)),route:b,context:"overview"},null,8,["is","class","route"]),S(Ap,{page:+b.path},null,8,["page"])]),_:2},1032,["width"]))],10,dy),s("div",{class:"absolute top-0 opacity-50",style:ze(`left: ${v(h)+5}px`)},Tn($+1),5)]))),128))],4)],512),[[ju,v(l)]]),v(l)?(A(),z("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:r},[S(w)])):V("v-if",!0)],64)}}});var my="/redis_intro/assets/logo.b72bde5d.png";const gy={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},yy=ye({name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;I(U);const l=Ht(n,"modelValue",t);function r(){l.value=!1}return(o,a)=>(A(),K(bu,null,[v(l)?(A(),z("div",gy,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>r())}),s("div",{class:Le(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[wt(o.$slots,"default")],2)])):V("v-if",!0)],1024))}});const _y={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},vy=["innerHTML"],by=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:my,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),u("dev ")])])],-1),wy=ye({name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;I(U);const l=Ht(n,"modelValue",t),r=B(()=>typeof Ce.info=="string");return(o,a)=>(A(),K(yy,{modelValue:v(l),"onUpdate:modelValue":a[0]||(a[0]=i=>Ae(l)?l.value=i:null),class:"px-6 py-4"},{default:M(()=>[s("div",_y,[v(r)?(A(),z("div",{key:0,class:"mb-4",innerHTML:v(Ce).info},null,8,vy)):V("v-if",!0),by])]),_:1},8,["modelValue"]))}}),Ay=["disabled","onKeydown"],xy=ye({name:"Goto",setup(e){I(U);const t=q(),n=q(""),l=B(()=>{if(n.value.startsWith("/"))return!!je.find(a=>a.path===n.value.substring(1));{const a=+n.value;return!isNaN(a)&&a>0&&a<=Fp.value}});function r(){l.value&&(n.value.startsWith("/")?us(n.value.substring(1)):us(+n.value)),o()}function o(){Jn.value=!1}return pe(Jn,async a=>{var i,c;a?(await Ye(),n.value="",(i=t.value)==null||i.focus()):(c=t.value)==null||c.blur()}),pe(n,a=>{a.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(a,i)=>(A(),z("div",{id:"slidev-goto-dialog",class:Le(["fixed right-5 bg-main transform transition-all",v(Jn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Dn(s("input",{ref_key:"input",ref:t,"onUpdate:modelValue":i[0]||(i[0]=c=>n.value=c),type:"text",disabled:!v(Jn),class:Le(["outline-none bg-transparent",{"text-red-400":!v(l)&&n.value}]),placeholder:"Goto...",onKeydown:[hi(r,["enter"]),hi(o,["escape"])],onBlur:o},null,42,Ay),[[om,n.value]])],2))}}),Cy=ye({name:"Controls",setup(e){I(U);const t=Wt(),n=Wt();return(l,r)=>(A(),z(ke,null,[S(hy,{modelValue:v(nt),"onUpdate:modelValue":r[0]||(r[0]=o=>Ae(nt)?nt.value=o:null)},null,8,["modelValue"]),S(xy),v(t)?(A(),K(v(t),{key:0})):V("v-if",!0),v(n)?(A(),K(v(n),{key:1,modelValue:v(Tr),"onUpdate:modelValue":r[1]||(r[1]=o=>Ae(Tr)?Tr.value=o:null)},null,8,["modelValue"])):V("v-if",!0),v(Ce).info?(A(),K(wy,{key:2,modelValue:v(Ns),"onUpdate:modelValue":r[2]||(r[2]=o=>Ae(Ns)?Ns.value=o:null)},null,8,["modelValue"])):V("v-if",!0)],64))}}),ky={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$y=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Ey=[$y];function By(e,t){return A(),z("svg",ky,Ey)}var Oy={name:"carbon-settings-adjust",render:By};const Dy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Py=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Sy=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),My=[Py,Sy];function Ty(e,t){return A(),z("svg",Dy,My)}var Ly={name:"carbon-information",render:Ty};const Ry={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Iy=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Fy=[Iy];function Ny(e,t){return A(),z("svg",Ry,Fy)}var jy={name:"carbon-download",render:Ny};const Hy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Uy=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Vy=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Wy=[Uy,Vy];function zy(e,t){return A(),z("svg",Hy,Wy)}var Ky={name:"carbon-user-speaker",render:zy};const qy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Yy=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Zy=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Gy=[Yy,Zy];function Xy(e,t){return A(),z("svg",qy,Gy)}var Jy={name:"carbon-presentation-file",render:Xy};const Qy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},e_=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),t_=[e_];function n_(e,t){return A(),z("svg",Qy,t_)}var s_={name:"carbon-pen",render:n_};const l_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},r_=s("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),o_=s("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),a_=[r_,o_];function i_(e,t){return A(),z("svg",l_,a_)}var c_={name:"ph-cursor-duotone",render:i_};const u_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},p_=s("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),f_=[p_];function d_(e,t){return A(),z("svg",u_,f_)}var xp={name:"ph-cursor-fill",render:d_};const h_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},m_=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),g_=[m_];function y_(e,t){return A(),z("svg",h_,g_)}var __={name:"carbon-sun",render:y_};const v_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},b_=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),w_=[b_];function A_(e,t){return A(),z("svg",v_,w_)}var x_={name:"carbon-moon",render:A_};const C_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},k_=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),$_=[k_];function E_(e,t){return A(),z("svg",C_,$_)}var B_={name:"carbon-apps",render:E_};const O_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},D_=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),P_=[D_];function S_(e,t){return A(),z("svg",O_,P_)}var Cp={name:"carbon-arrow-right",render:S_};const M_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},T_=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),L_=[T_];function R_(e,t){return A(),z("svg",M_,L_)}var I_={name:"carbon-arrow-left",render:R_};const F_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},N_=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),j_=[N_];function H_(e,t){return A(),z("svg",F_,j_)}var U_={name:"carbon-maximize",render:H_};const V_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},W_=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),z_=[W_];function K_(e,t){return A(),z("svg",V_,z_)}var q_={name:"carbon-minimize",render:K_};const Y_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Z_=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),G_=[Z_];function X_(e,t){return A(),z("svg",Y_,G_)}var J_={name:"carbon-checkmark",render:X_};var kp=(e,t)=>{const n=e.__vccOpts||e;for(const[l,r]of t)n[l]=r;return n};const Q_={class:"select-list"},ev={class:"title"},tv={class:"items"},nv=["onClick"],sv=ye({name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;I(U);const l=Ht(n,"modelValue",t,{passive:!0});return(r,o)=>{const a=J_;return A(),z("div",Q_,[s("div",ev,Tn(e.title),1),s("div",tv,[(A(!0),z(ke,null,il(e.items,i=>(A(),z("div",{key:i.value,class:Le(["item",{active:v(l)===i.value}]),onClick:()=>{var c;l.value=i.value,(c=i.onClick)==null||c.call(i)}},[S(a,{class:Le(["text-green-500",{"opacity-0":v(l)!==i.value}])},null,8,["class"]),u(" "+Tn(i.display||i.value),1)],10,nv))),128))])])}}});var lv=kp(sv,[["__scopeId","data-v-427604ef"]]);const rv={class:"text-sm"},ov=ye({name:"Settings",setup(e){I(U);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,l)=>(A(),z("div",rv,[S(lv,{modelValue:v(Dl),"onUpdate:modelValue":l[0]||(l[0]=r=>Ae(Dl)?Dl.value=r:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),av={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},iv=ye({name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;I(U);const l=Ht(n,"modelValue",t,{passive:!0}),r=q();return wg(r,()=>{l.value=!1}),(o,a)=>(A(),z("div",{ref_key:"el",ref:r,class:"flex relative"},[s("button",{class:Le({disabled:e.disabled}),onClick:a[0]||(a[0]=i=>l.value=!v(l))},[wt(o.$slots,"button",{class:Le({disabled:e.disabled})})],2),(A(),K(bu,null,[v(l)?(A(),z("div",av,[wt(o.$slots,"menu")])):V("v-if",!0)],1024))],512))}}),cv={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},xl={name:"VerticalDivider",setup(e){return I(U),(t,n)=>(A(),z("div",cv))}};var uv={render(){return[]}};const pv={class:"icon-btn"},fv={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},dv={class:"my-auto"},hv={class:"opacity-50"},mv=ye({name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;I(U);const n=bo.smaller("md"),{isFullscreen:l,toggle:r}=fp,o=B(()=>Eo.value?`?password=${Eo.value}`:""),a=B(()=>`/presenter/${He.value}${o.value}`),i=B(()=>`/${He.value}${o.value}`),c=q(),p=()=>{c.value&&ls.value&&c.value.contains(ls.value)&&ls.value.blur()},f=B(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),h=Wt(),d=Wt();return hs(()=>import("./DrawingControls.303ef2b1.js"),[]).then(m=>d.value=m.default),(m,y)=>{const w=q_,b=U_,$=I_,C=Cp,k=B_,E=x_,j=__,L=xp,Y=c_,ae=s_,fe=Jy,he=Ke("RouterLink"),_e=Ky,Te=jy,Fe=Ly,Ze=Oy;return A(),z("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[s("div",{class:Le(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",v(f)]),onMouseleave:p},[v(Kt)?V("v-if",!0):(A(),z("button",{key:0,class:"icon-btn",onClick:y[0]||(y[0]=(...$e)=>v(r)&&v(r)(...$e))},[v(l)?(A(),K(w,{key:0})):(A(),K(b,{key:1}))])),s("button",{class:Le(["icon-btn",{disabled:!v(P4)}]),onClick:y[1]||(y[1]=(...$e)=>v(fn)&&v(fn)(...$e))},[S($)],2),s("button",{class:Le(["icon-btn",{disabled:!v(D4)}]),title:"Next",onClick:y[2]||(y[2]=(...$e)=>v(pn)&&v(pn)(...$e))},[S(C)],2),v(Kt)?V("v-if",!0):(A(),z("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:y[3]||(y[3]=$e=>v(dp)())},[S(k)])),v(ko)?V("v-if",!0):(A(),z("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:y[4]||(y[4]=$e=>v(vp)())},[v(ca)?(A(),K(E,{key:0})):(A(),K(j,{key:1}))])),S(xl),v(Kt)?V("v-if",!0):(A(),z(ke,{key:3},[!v(jt)&&!v(n)&&v(h)?(A(),z(ke,{key:0},[S(v(h)),S(xl)],64)):V("v-if",!0),v(jt)?(A(),z("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:y[5]||(y[5]=$e=>Lr.value=!v(Lr))},[v(Lr)?(A(),K(L,{key:0})):(A(),K(Y,{key:1,class:"opacity-50"}))])):V("v-if",!0)],64)),!v(Ce).drawings.presenterOnly&&!v(Kt)?(A(),z(ke,{key:4},[s("button",{class:"icon-btn relative",title:"Drawing",onClick:y[6]||(y[6]=$e=>Ut.value=!v(Ut))},[S(ae),v(Ut)?(A(),z("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:ze({background:v(En).color})},null,4)):V("v-if",!0)]),S(xl)],64)):V("v-if",!0),v(Kt)?V("v-if",!0):(A(),z(ke,{key:5},[v(jt)?(A(),K(he,{key:0,to:v(i),class:"icon-btn",title:"Play Mode"},{default:M(()=>[S(fe)]),_:1},8,["to"])):V("v-if",!0),v(E4)?(A(),K(he,{key:1,to:v(a),class:"icon-btn",title:"Presenter Mode"},{default:M(()=>[S(_e)]),_:1},8,["to"])):V("v-if",!0),V("v-if",!0)],64)),(A(),z(ke,{key:6},[v(Ce).download?(A(),z("button",{key:0,class:"icon-btn",onClick:y[8]||(y[8]=(...$e)=>v(Bo)&&v(Bo)(...$e))},[S(Te)])):V("v-if",!0)],64)),!v(jt)&&v(Ce).info&&!v(Kt)?(A(),z("button",{key:7,class:"icon-btn",onClick:y[9]||(y[9]=$e=>Ns.value=!v(Ns))},[S(Fe)])):V("v-if",!0),!v(jt)&&!v(Kt)?(A(),K(iv,{key:8},{button:M(()=>[s("button",pv,[S(Ze)])]),menu:M(()=>[S(ov)]),_:1})):V("v-if",!0),v(Kt)?V("v-if",!0):(A(),K(xl,{key:9})),s("div",fv,[s("div",dv,[u(Tn(v(He))+" ",1),s("span",hv,"/ "+Tn(v(Fp)),1)])]),S(v(uv))],34)],512)}}});var $p={render(){return[]}},Ep={render(){return[]}};const gv={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},yv=ye({name:"PresenterMouse",setup(e){return I(U),(t,n)=>{const l=xp;return v(Dr).cursor?(A(),z("div",gv,[S(l,{class:"absolute",style:ze({left:`${v(Dr).cursor.x}%`,top:`${v(Dr).cursor.y}%`})},null,8,["style"])])):V("v-if",!0)}}}),_v=ye({name:"SlidesShow",props:{context:null},setup(e){I(U),pe(ht,()=>{var n,l;((n=ht.value)==null?void 0:n.meta)&&ht.value.meta.preload!==!1&&(ht.value.meta.__preloaded=!0),((l=Ir.value)==null?void 0:l.meta)&&Ir.value.meta.preload!==!1&&(Ir.value.meta.__preloaded=!0)},{immediate:!0});const t=Wt();return hs(()=>import("./DrawingLayer.9aeb53b2.js"),[]).then(n=>t.value=n.default),(n,l)=>(A(),z(ke,null,[V(" Global Bottom "),S(v(Ep)),V(" Slides "),(A(!0),z(ke,null,il(v(je),r=>{var o,a;return A(),z(ke,{key:r.path},[((o=r.meta)==null?void 0:o.__preloaded)||r===v(ht)?Dn((A(),K(v(fa),{key:0,is:r==null?void 0:r.component,clicks:r===v(ht)?v(Lt):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Le(v(pa)(r)),route:r,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[ju,r===v(ht)]]):V("v-if",!0)],64)}),128)),V(" Global Top "),S(v($p)),v(t)?(A(),K(v(t),{key:0})):V("v-if",!0),v(jt)?V("v-if",!0):(A(),K(yv,{key:1}))],64))}}),vv=ye({name:"Play",setup(e){I(U),ly();const t=q();function n(o){var a;Zi.value||((a=o.target)==null?void 0:a.id)==="slide-container"&&(o.screenX/window.innerWidth>.6?pn():fn())}T4(t);const l=B(()=>c0.value||Zi.value);Wt();const r=Wt();return hs(()=>import("./DrawingControls.303ef2b1.js"),[]).then(o=>r.value=o.default),(o,a)=>(A(),z(ke,null,[s("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr,max-content]",style:ze(v(Wu))},[S(wp,{class:"w-full h-full",style:ze({background:"var(--slidev-slide-container-background, black)"}),width:v(ga)?v(Mn).width.value:void 0,scale:v(Dl),onPointerdown:n},{default:M(()=>[S(_v,{context:"slide"})]),controls:M(()=>[s("div",{class:Le(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[v(l)?"opacity-100 right-0":"opacity-0 p-2",v(Qs)?"pointer-events-none":""]])},[S(mv,{class:"m-auto",persist:v(l)},null,8,["persist"])],2),!v(Ce).drawings.presenterOnly&&!v(Kt)&&v(r)?(A(),K(v(r),{key:0,class:"ml-0"})):V("v-if",!0)]),_:1},8,["style","width","scale"]),V("v-if",!0)],4),S(Cy)],64))}});function Bp(e){const t=B(()=>e.value.path),n=B(()=>je.length-1),l=B(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),r=B(()=>hr(l.value)),o=B(()=>je.find(d=>d.path===`${l.value}`)),a=B(()=>{var d,m,y;return(y=(m=(d=o.value)==null?void 0:d.meta)==null?void 0:m.slide)==null?void 0:y.id}),i=B(()=>{var d,m;return(m=(d=o.value)==null?void 0:d.meta)==null?void 0:m.layout}),c=B(()=>je.find(d=>d.path===`${Math.min(je.length,l.value+1)}`)),p=B(()=>je.filter(d=>{var m,y;return(y=(m=d.meta)==null?void 0:m.slide)==null?void 0:y.title}).reduce((d,m)=>(ya(d,m),d),[])),f=B(()=>_a(p.value,o.value)),h=B(()=>va(f.value));return{route:e,path:t,total:n,currentPage:l,currentPath:r,currentRoute:o,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:p,treeWithActiveStatuses:f,tree:h}}function Op(e,t,n){const l=q(0);Ye(()=>{vt.afterEach(async()=>{await Ye(),l.value+=1})});const r=B(()=>{var c,p;return l.value,((p=(c=t.value)==null?void 0:c.meta)==null?void 0:p.__clicksElements)||[]}),o=B(()=>{var c,p,f;return+((f=(p=(c=t.value)==null?void 0:c.meta)==null?void 0:p.clicks)!=null?f:r.value.length)}),a=B(()=>n.value<je.length-1||e.value<o.value),i=B(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:o,hasNext:a,hasPrev:i}}const bv=["id"],ac=ye({name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,l=Ht(n,"clicksElements",t),r=B(()=>({height:`${Vu}px`,width:`${Sn}px`})),o=Wt();hs(()=>Promise.resolve().then(function(){return py}),void 0).then(p=>o.value=p.default);const a=B(()=>n.clicks),i=Op(a,n.nav.currentRoute,n.nav.currentPage),c=B(()=>`${n.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return mt(U,Re({nav:we(we({},n.nav),i),configs:Ce,themeConfigs:B(()=>Ce.themeConfig)})),(p,f)=>{var h;return A(),z("div",{id:v(c),class:"slide-container",style:ze(v(r))},[S(v(Ep)),S(v(fa),{is:(h=e.route)==null?void 0:h.component,"clicks-elements":v(l),"onUpdate:clicks-elements":f[0]||(f[0]=d=>Ae(l)?l.value=d:null),clicks:v(a),"clicks-disabled":!1,class:Le(v(pa)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),v(o)?(A(),K(v(o),{key:0,page:+e.route.path},null,8,["page"])):V("v-if",!0),S(v($p))],12,bv)}}}),wv=ye({name:"PrintSlide",props:{route:null},setup(e){var o;const t=e;I(U);const n=Re(((o=t.route.meta)==null?void 0:o.__clicksElements)||[]),l=B(()=>t.route),r=Bp(l);return(a,i)=>(A(),z(ke,null,[S(ac,{"clicks-elements":n,"onUpdate:clicks-elements":i[0]||(i[0]=c=>Ae(n)?n.value=c:null),clicks:0,nav:v(r),route:v(l)},null,8,["clicks-elements","nav","route"]),v(js)?V("v-if",!0):(A(!0),z(ke,{key:0},il(n.length,c=>(A(),K(ac,{key:c,clicks:c,nav:v(r),route:v(l)},null,8,["clicks","nav","route"]))),128))],64))}});const Av={id:"print-content"},xv=ye({name:"PrintContainer",props:{width:null},setup(e){const t=e;I(U);const n=B(()=>t.width),l=B(()=>t.width/cn),r=B(()=>n.value/l.value),o=B(()=>r.value<cn?n.value/Sn:l.value*cn/Sn),a=je.slice(0,-1),i=B(()=>({"select-none":!Ce.selectable,"slidev-code-line-numbers":Ce.lineNumbers}));return mt(Uu,o),(c,p)=>(A(),z("div",{id:"print-container",class:Le(v(i))},[s("div",Av,[(A(!0),z(ke,null,il(v(a),f=>(A(),K(wv,{key:f.path,route:f},null,8,["route"]))),128))]),wt(c.$slots,"controls")],2))}});const Cv=ye({name:"Print",setup(e){I(U);const t=$n.canvasWidth,n=Math.round(t/$n.aspectRatio)+1;function l(r,{slots:o}){if(o.default)return yt("style",o.default())}return al(()=>{ga?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(r,o)=>(A(),z(ke,null,[S(l,null,{default:M(()=>[u(" @page { size: "+Tn(v(t))+"px "+Tn(n)+"px; margin: 0px; } ",1)]),_:1}),s("div",{id:"page-root",class:"grid grid-cols-[1fr,max-content]",style:ze(v(Wu))},[S(xv,{class:"w-full h-full",style:ze({background:"var(--slidev-slide-container-background, black)"}),width:v(Mn).width.value},null,8,["style","width"])],4)],64))}});const kv={class:"slidev-layout end"},$v={name:"end",setup(e){return I(U),(t,n)=>(A(),z("div",kv," END "))}};var Dp=kp($v,[["__scopeId","data-v-024c70b4"]]);function ic(e){return e.startsWith("/")?"/redis_intro/"+e.slice(1):e}function Ev(e,t=!1){const n=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),l={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${ic(e)})`:`url("${ic(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return l.background||delete l.background,l}const Bv={class:"my-auto w-full"},Hn=ye({name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){const t=e;I(U);const n=B(()=>Ev(t.background,!0));return(l,r)=>(A(),z("div",{class:"slidev-layout cover text-center",style:ze(v(n))},[s("div",Bv,[wt(l.$slots,"default")])],4))}}),Ov=s("h1",null,[s("strong",null,"Welcome to UTown Team")],-1),Dv={class:"pt-12"},Pv=u(" Press Space for next page "),Sv={name:"1",setup(e){const t={theme:"seriph",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1}},n=I(U);return(l,r)=>{const o=Cp;return A(),K(Hn,oe(re(t)),{default:M(()=>[Ov,s("div",Dv,[s("span",{onClick:r[0]||(r[0]=(...a)=>v(n).nav.next&&v(n).nav.next(...a)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[Pv,S(o,{class:"inline"})])])]),_:1},16)}}},Mv={class:"slidev-layout default"},cl={name:"default",setup(e){return I(U),(t,n)=>(A(),z("div",Mv,[wt(t.$slots,"default")]))}},Tv=s("h1",null,"\u5BFC\u822A",-1),Lv=s("p",null,"\u9F20\u6807Hover \u5230\u5DE6\u4E0B\u89D2\u5F39\u51FA\u76F8\u5E94\u64CD\u4F5C\u6309\u94AE",-1),Rv=s("h3",null,"\u952E\u76D8\u5FEB\u6377\u952E",-1),Iv=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("kbd",null,"right"),u(" / "),s("kbd",null,"space")]),s("td",null,"\u4E0B\u4E00\u9875")]),s("tr",null,[s("td",null,[s("kbd",null,"left"),u(" / "),s("kbd",null,"shift"),s("kbd",null,"space")]),s("td",null,"\u4E0A\u4E00\u9875")]),s("tr",null,[s("td",null,[s("kbd",null,"up")]),s("td",null,"\u4E0A\u4E00\u4E2A\u5C55\u793A")]),s("tr",null,[s("td",null,[s("kbd",null,"down")]),s("td",null,"\u4E0B\u4E00\u4E2A\u5C55\u793A")])])],-1),Fv={class:"absolute -bottom-9 -left-7 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},Nv={class:"absolute -bottom-9 -left-7 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},jv={class:"absolute bottom-23 left-45 opacity-30 transform -rotate-10"},Hv=u("\u8FD9\u513F!"),Uv=[Hv],Vv={name:"2",setup(e){const t={};return I(U),(n,l)=>{const r=Fl("click"),o=Fl("after");return A(),K(cl,oe(re(t)),{default:M(()=>[Tv,Lv,Rv,Iv,V(" https://sli.dev/guide/animations.html#click-animations "),s("p",null,[Dn(s("img",Fv,null,512),[[r]])]),V("\u70B9\u51FB\u89E6\u53D1\u663E\u793A\u56FE\u7247"),s("p",null,[Dn(s("img",Nv,null,512),[[r]])]),Dn((A(),z("p",jv,Uv)),[[o]])]),_:1},16)}}},Wv={class:"h-full w-full"},zv={class:"w-full h-full"},Kv=["src"],Pp=ye({name:"iframe",props:{url:null},setup(e){return I(U),(t,n)=>(A(),z("div",Wv,[s("div",zv,[s("iframe",{id:"frame",class:"w-full h-full",src:e.url},null,8,Kv)])]))}}),qv={name:"3",setup(e){const t={layout:"iframe",url:"https://www.utown.io/",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>(A(),K(Pp,oe(re(t)),null,16))}},Yv=u("\u9879\u76EE\u534F\u4F5C"),Zv={grid:"~ cols-5 gap-2",m:"-t-2"},Gv=u("\u7EC4\u7EC7\u7ED3\u6784"),Xv=u("\u613F\u666F\u76EE\u6807"),Jv=u("\u5B8C\u6210\u5B9A\u4E49"),Qv=u("\u534F\u4F5C\u89C4\u7EA6"),eb=u("\u56E2\u961F\u5C55\u671B"),tb=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"Who?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"Who?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),nb=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"What?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"What?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),sb=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"DOD?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"DOD?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),lb=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"How to collaborate?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"How to collaborate?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),rb=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"Outlook?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"Outlook?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),ob={name:"4",setup(e){const t={layout:"cover",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=Ke("center");return A(),K(Hn,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),s("h1",null,[s("strong",null,[S(r,null,{default:M(()=>[Yv]),_:1})])]),s("div",Zv,[s("h3",null,[S(r,null,{default:M(()=>[Gv]),_:1})]),s("h3",null,[S(r,null,{default:M(()=>[Xv]),_:1})]),s("h3",null,[S(r,null,{default:M(()=>[Jv]),_:1})]),s("h3",null,[S(r,null,{default:M(()=>[Qv]),_:1})]),s("h3",null,[S(r,null,{default:M(()=>[eb]),_:1})]),tb,nb,sb,lb,rb])]),_:1},16)}}},ab=u("Who"),ib=s("p",null,"\u7EC4\u7EC7\u67B6\u6784",-1),cb={name:"5",setup(e){const t={layout:"cover",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=Ke("center");return A(),K(Hn,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),s("h1",null,[s("strong",null,[S(r,null,{default:M(()=>[ab]),_:1})])]),ib]),_:1},16)}}};function cc(e){return e.startsWith("/")?"/redis_intro/"+e.slice(1):e}function da(e,t=!1){const n=e&&e[0]==="#"&&e.startsWith("rgb"),l={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${cc(e)})`:`url("${cc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return l.background||delete l.background,l}const ub={class:"grid grid-cols-2 w-full h-full"},pb=ye({name:"image-left",props:{image:{type:String},class:{type:String}},setup(e){const t=e;I(U);const n=B(()=>da(t.image));return(l,r)=>(A(),z("div",ub,[s("div",{class:"w-full w-full",style:ze(v(n))},null,4),s("div",{class:Le(["slidev-layout default",t.class])},[wt(l.$slots,"default")],2)]))}}),fb=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),db=u("\u4E92\u8054\u7F51\u5BE1\u5934\u7EC4\u7EC7\u7ED3\u6784"),hb={name:"6",setup(e){const t={layout:"image-left",image:"https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=Ke("center");return A(),K(pb,oe(re(t)),{default:M(()=>[V("3.1\u3001\u7EC4\u7EC7\u7ED3\u6784"),fb,s("h3",null,[s("strong",null,[S(r,null,{default:M(()=>[db]),_:1})])])]),_:1},16)}}},zt=ye({name:"image",props:{image:{type:String}},setup(e){const t=e;I(U);const n=B(()=>da(t.image));return(l,r)=>(A(),z("div",{class:"slidev-layout w-full h-full",style:ze(v(n))},[wt(l.$slots,"default")],4))}}),mb=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),gb={name:"7",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/0ac03f4796e64c4b937d614e74a2126b.png",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>(A(),K(zt,oe(re(t)),{default:M(()=>[V("3.2\u7EC4\u7EC7\u7ED3\u6784"),mb]),_:1},16))}},yb=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),_b={name:"8",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/177b97f8e76843ad8f38b97e6f34bacd.png",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>(A(),K(zt,oe(re(t)),{default:M(()=>[V("3.3 \u7EC4\u7EC7\u67B6\u6784\uFF08\u5F31\u77E9\u9635\uFF09"),yb]),_:1},16))}},vb=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),bb={name:"9",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/9319d72b098a454693836cdf7be418cf.png",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>(A(),K(zt,oe(re(t)),{default:M(()=>[V("3.3 \u5E73\u53F0\u8D44\u6E90\u7EC4"),vb]),_:1},16))}},wb=s("p",null,[s("img",{border:"rounded",src:"https://img-blog.csdnimg.cn/0e714fcebe364ec5bd1d59584f72893b.jpeg"})],-1),Ab={name:"10",setup(e){const t={layout:"default",image:"https://img-blog.csdnimg.cn/a30131b99ea34d7fb5c30f03823fe700.jpeg",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>(A(),K(cl,oe(re(t)),{default:M(()=>[V("1\u3001\u9879\u76EE\u7EC4\u7ED3\u6784"),wb]),_:1},16))}},xb=u("What"),Cb=s("p",null,"\u613F\u666F\u76EE\u6807",-1),kb={name:"11",setup(e){const t={layout:"cover",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=Ke("center");return A(),K(Hn,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),s("h1",null,[s("strong",null,[S(r,null,{default:M(()=>[xb]),_:1})])]),Cb]),_:1},16)}}},$b=s("p",null,[s("img",{src:"https://img-blog.csdnimg.cn/c8b61cbcfd454c56994c8de1a2d63d7f.png"})],-1),Eb={name:"12",setup(e){const t={layout:"default",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>(A(),K(cl,oe(re(t)),{default:M(()=>[$b]),_:1},16))}},Bb=s("p",null,[s("img",{src:"https://img-blog.csdnimg.cn/c8b61cbcfd454c56994c8de1a2d63d7f.png"})],-1),Ob={name:"13",setup(e){const t={layout:"iframe",url:"https://live.csdn.net/v/embed/253178",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>(A(),K(Pp,oe(re(t)),{default:M(()=>[Bb]),_:1},16))}},Db={name:"14",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/06a88d49355345bf83bd48ab106ca8c6.png",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>(A(),K(zt,oe(re(t)),null,16))}};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Sp(e){return typeof e=="undefined"||e===null}function Pb(e){return typeof e=="object"&&e!==null}function Sb(e){return Array.isArray(e)?e:Sp(e)?[]:[e]}function Mb(e,t){var n,l,r,o;if(t)for(o=Object.keys(t),n=0,l=o.length;n<l;n+=1)r=o[n],e[r]=t[r];return e}function Tb(e,t){var n="",l;for(l=0;l<t;l+=1)n+=e;return n}function Lb(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Rb=Sp,Ib=Pb,Fb=Sb,Nb=Tb,jb=Lb,Hb=Mb,ha={isNothing:Rb,isObject:Ib,toArray:Fb,repeat:Nb,isNegativeZero:jb,extend:Hb};function Mp(e,t){var n="",l=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),l+" "+n):l}function tl(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Mp(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}tl.prototype=Object.create(Error.prototype);tl.prototype.constructor=tl;tl.prototype.toString=function(t){return this.name+": "+Mp(this,t)};var Cn=tl,Ub=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Vb=["scalar","sequence","mapping"];function Wb(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(l){t[String(l)]=n})}),t}function zb(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(Ub.indexOf(n)===-1)throw new Cn('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=Wb(t.styleAliases||null),Vb.indexOf(this.kind)===-1)throw new Cn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Xe=zb;function uc(e,t){var n=[];return e[t].forEach(function(l){var r=n.length;n.forEach(function(o,a){o.tag===l.tag&&o.kind===l.kind&&o.multi===l.multi&&(r=a)}),n[r]=l}),n}function Kb(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function l(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(l);return e}function $o(e){return this.extend(e)}$o.prototype.extend=function(t){var n=[],l=[];if(t instanceof Xe)l.push(t);else if(Array.isArray(t))l=l.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(l=l.concat(t.explicit));else throw new Cn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(o){if(!(o instanceof Xe))throw new Cn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new Cn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new Cn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),l.forEach(function(o){if(!(o instanceof Xe))throw new Cn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create($o.prototype);return r.implicit=(this.implicit||[]).concat(n),r.explicit=(this.explicit||[]).concat(l),r.compiledImplicit=uc(r,"implicit"),r.compiledExplicit=uc(r,"explicit"),r.compiledTypeMap=Kb(r.compiledImplicit,r.compiledExplicit),r};var qb=$o,Yb=new Xe("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Zb=new Xe("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Gb=new Xe("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Xb=new qb({explicit:[Yb,Zb,Gb]});function Jb(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function Qb(){return null}function e2(e){return e===null}var t2=new Xe("tag:yaml.org,2002:null",{kind:"scalar",resolve:Jb,construct:Qb,predicate:e2,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function n2(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function s2(e){return e==="true"||e==="True"||e==="TRUE"}function l2(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var r2=new Xe("tag:yaml.org,2002:bool",{kind:"scalar",resolve:n2,construct:s2,predicate:l2,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function o2(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function a2(e){return 48<=e&&e<=55}function i2(e){return 48<=e&&e<=57}function c2(e){if(e===null)return!1;var t=e.length,n=0,l=!1,r;if(!t)return!1;if(r=e[n],(r==="-"||r==="+")&&(r=e[++n]),r==="0"){if(n+1===t)return!0;if(r=e[++n],r==="b"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(r!=="0"&&r!=="1")return!1;l=!0}return l&&r!=="_"}if(r==="x"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!o2(e.charCodeAt(n)))return!1;l=!0}return l&&r!=="_"}if(r==="o"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!a2(e.charCodeAt(n)))return!1;l=!0}return l&&r!=="_"}}if(r==="_")return!1;for(;n<t;n++)if(r=e[n],r!=="_"){if(!i2(e.charCodeAt(n)))return!1;l=!0}return!(!l||r==="_")}function u2(e){var t=e,n=1,l;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),l=t[0],(l==="-"||l==="+")&&(l==="-"&&(n=-1),t=t.slice(1),l=t[0]),t==="0")return 0;if(l==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function p2(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!ha.isNegativeZero(e)}var f2=new Xe("tag:yaml.org,2002:int",{kind:"scalar",resolve:c2,construct:u2,predicate:p2,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),d2=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function h2(e){return!(e===null||!d2.test(e)||e[e.length-1]==="_")}function m2(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var g2=/^[-+]?[0-9]+e/;function y2(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(ha.isNegativeZero(e))return"-0.0";return n=e.toString(10),g2.test(n)?n.replace("e",".e"):n}function _2(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||ha.isNegativeZero(e))}var v2=new Xe("tag:yaml.org,2002:float",{kind:"scalar",resolve:h2,construct:m2,predicate:_2,represent:y2,defaultStyle:"lowercase"}),b2=Xb.extend({implicit:[t2,r2,f2,v2]}),w2=b2,Tp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Lp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function A2(e){return e===null?!1:Tp.exec(e)!==null||Lp.exec(e)!==null}function x2(e){var t,n,l,r,o,a,i,c=0,p=null,f,h,d;if(t=Tp.exec(e),t===null&&(t=Lp.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],l=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,l,r));if(o=+t[4],a=+t[5],i=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(f=+t[10],h=+(t[11]||0),p=(f*60+h)*6e4,t[9]==="-"&&(p=-p)),d=new Date(Date.UTC(n,l,r,o,a,i,c)),p&&d.setTime(d.getTime()-p),d}function C2(e){return e.toISOString()}var k2=new Xe("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:A2,construct:x2,instanceOf:Date,represent:C2});function $2(e){return e==="<<"||e===null}var E2=new Xe("tag:yaml.org,2002:merge",{kind:"scalar",resolve:$2}),ma=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function B2(e){if(e===null)return!1;var t,n,l=0,r=e.length,o=ma;for(n=0;n<r;n++)if(t=o.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;l+=6}return l%8===0}function O2(e){var t,n,l=e.replace(/[\r\n=]/g,""),r=l.length,o=ma,a=0,i=[];for(t=0;t<r;t++)t%4===0&&t&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|o.indexOf(l.charAt(t));return n=r%4*6,n===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):n===18?(i.push(a>>10&255),i.push(a>>2&255)):n===12&&i.push(a>>4&255),new Uint8Array(i)}function D2(e){var t="",n=0,l,r,o=e.length,a=ma;for(l=0;l<o;l++)l%3===0&&l&&(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]),n=(n<<8)+e[l];return r=o%3,r===0?(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]):r===2?(t+=a[n>>10&63],t+=a[n>>4&63],t+=a[n<<2&63],t+=a[64]):r===1&&(t+=a[n>>2&63],t+=a[n<<4&63],t+=a[64],t+=a[64]),t}function P2(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var S2=new Xe("tag:yaml.org,2002:binary",{kind:"scalar",resolve:B2,construct:O2,predicate:P2,represent:D2}),M2=Object.prototype.hasOwnProperty,T2=Object.prototype.toString;function L2(e){if(e===null)return!0;var t=[],n,l,r,o,a,i=e;for(n=0,l=i.length;n<l;n+=1){if(r=i[n],a=!1,T2.call(r)!=="[object Object]")return!1;for(o in r)if(M2.call(r,o))if(!a)a=!0;else return!1;if(!a)return!1;if(t.indexOf(o)===-1)t.push(o);else return!1}return!0}function R2(e){return e!==null?e:[]}var I2=new Xe("tag:yaml.org,2002:omap",{kind:"sequence",resolve:L2,construct:R2}),F2=Object.prototype.toString;function N2(e){if(e===null)return!0;var t,n,l,r,o,a=e;for(o=new Array(a.length),t=0,n=a.length;t<n;t+=1){if(l=a[t],F2.call(l)!=="[object Object]"||(r=Object.keys(l),r.length!==1))return!1;o[t]=[r[0],l[r[0]]]}return!0}function j2(e){if(e===null)return[];var t,n,l,r,o,a=e;for(o=new Array(a.length),t=0,n=a.length;t<n;t+=1)l=a[t],r=Object.keys(l),o[t]=[r[0],l[r[0]]];return o}var H2=new Xe("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:N2,construct:j2}),U2=Object.prototype.hasOwnProperty;function V2(e){if(e===null)return!0;var t,n=e;for(t in n)if(U2.call(n,t)&&n[t]!==null)return!1;return!0}function W2(e){return e!==null?e:{}}var z2=new Xe("tag:yaml.org,2002:set",{kind:"mapping",resolve:V2,construct:W2});w2.extend({implicit:[k2,E2],explicit:[S2,I2,H2,z2]});function pc(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var K2=new Array(256),q2=new Array(256);for(var Kn=0;Kn<256;Kn++)K2[Kn]=pc(Kn)?1:0,q2[Kn]=pc(Kn);function Y2(e){return Array.from(new Set(e))}function fc(...e){let t,n,l;e.length===1?(t=0,l=1,[n]=e):[t,n,l=1]=e;const r=[];let o=t;for(;o<n;)r.push(o),o+=l||1;return r}function Z2(e,t){if(!t||t==="all"||t==="*")return fc(1,e+1);const n=[];for(const l of t.split(/[,;]/g))if(!l.includes("-"))n.push(+l);else{const[r,o]=l.split("-",2);n.push(...fc(+r,o?+o+1:e+1))}return Y2(n).filter(l=>l<=e).sort((l,r)=>l-r)}const rt=ye({name:"CodeHighlightController",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0}},setup(e){const t=e;I(U);const n=I(Ls),l=I(xn),r=I(Rs);function o(c=5){const p=[],f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",h=f.length;for(let d=0;d<c;d++)p.push(f.charAt(Math.floor(Math.random()*h)));return p.join("")}const a=q(),i=Fn();return ds(()=>{const c=t.at==null?l==null?void 0:l.value.length:t.at,p=B(()=>r!=null&&r.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(c||0)),t.ranges.length-1)),f=B(()=>t.ranges[p.value]||"");if(t.ranges.length>=2&&!(r!=null&&r.value)){const h=o(),d=Dm(t.ranges.length-1).map(m=>h+m);l!=null&&l.value&&(l.value.push(...d),ur(()=>d.forEach(m=>fo(l.value,m)),i))}al(()=>{if(!a.value)return;const d=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const m of d){const y=Array.from(m.querySelectorAll(".line")),w=Z2(y.length,f.value);y.forEach((b,$)=>{const C=w.includes($+1);b.classList.toggle(wn,!0),b.classList.toggle("highlighted",C),b.classList.toggle("dishonored",!C)})}})}),(c,p)=>(A(),z("div",{ref_key:"el",ref:a},[wt(c.$slots,"default")],512))}}),G2={class:"grid grid-cols-2 w-full h-full"},ot=ye({name:"image-right",props:{image:{type:String},class:{type:String}},setup(e){const t=e;I(U);const n=B(()=>da(t.image));return(l,r)=>(A(),z("div",G2,[s("div",{class:Le(["slidev-layout default",t.class])},[wt(l.$slots,"default")],2),s("div",{class:"w-full w-full",style:ze(v(n))},null,4)]))}}),X2=s("h1",null,[s("strong",null,"\u4E3B\u7248\u672C")],-1),J2=s("p",null,"\u4E3B\u6846\u67B6\u2014\u2014\u4F1A\u8BAE\u3001IM\u3001\u8BED\u97F3\u623F",-1),Q2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u4E01\u5B87\u535A")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u674E\u4E9A"),s("span",{style:{color:"#DBD7CA"}},"\u3001"),s("span",{style:{color:"#B8A965"}},"\u674E\u9633"),s("span",{style:{color:"#CB7676"}},"...")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u90B9\u676D\u7279"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u9EC4\u52B2"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"Android"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u9648\u52C7\u5747"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"ios"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u4F55\u667A\u52C7"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u670D\u52A1\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u5F6D\u4F73\u8F89"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"Web"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"...")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u4E01\u5B87\u535A")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u674E\u4E9A"),s("span",{style:{color:"#393A34"}},"\u3001"),s("span",{style:{color:"#8C862B"}},"\u674E\u9633"),s("span",{style:{color:"#AB5959"}},"...")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u90B9\u676D\u7279"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u9EC4\u52B2"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"Android"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u9648\u52C7\u5747"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"ios"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u4F55\u667A\u52C7"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u670D\u52A1\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5F6D\u4F73\u8F89"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"Web"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),e3={name:"15",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/271ee21d8742468c909feebf1f87fe81.gif",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=rt;return A(),K(ot,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),X2,J2,S(r,Ve({},{ranges:["all","1-2","7-15","all"]}),{default:M(()=>[Q2]),_:1},16)]),_:1},16)}}},t3=s("h1",null,[s("strong",null,"\u5730\u56FE\u7F16\u8F91\u5668")],-1),n3=s("p",null,"\u7269\u4EF6\u6446\u653E\u3001\u80CC\u5305\u3001\u7A7A\u95F4\u6A21\u677F",-1),s3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u5218\u6167")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u8D75\u6069\u6069"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u4F58\u4E2D\u519B"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u5170\u56FD\u5FD7"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"...")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u5218\u6167")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u8D75\u6069\u6069"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u4F58\u4E2D\u519B"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5170\u56FD\u5FD7"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),l3={name:"16",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/266e4e2739c74b629073f114ae270e3d.gif",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=rt;return A(),K(ot,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),t3,n3,S(r,Ve({},{ranges:["all","1","7-11","all"]}),{default:M(()=>[s3]),_:1},16)]),_:1},16)}}},r3=s("h1",null,[s("strong",null,"\u7EC4\u4EF6\u7F16\u8F91\u5668")],-1),o3=s("p",null,"\u7EC4\u4EF6\u7BA1\u7406\u6A21\u7EC4\uFF0C\u8D44\u6E90\u4E0A\u4F20\u3001\u5C5E\u6027\u8BBE\u7F6E\u3001\u7EC4\u4EF6\u751F\u6210",-1),a3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u5218\u6167"),s("span",{style:{color:"#CB7676"}},"/"),s("span",{style:{color:"#B8A965"}},"\u8096\u9A70")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u8D75\u6069\u6069"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u4F58\u4E2D\u519B"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u5170\u56FD\u5FD7"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"...")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u5218\u6167"),s("span",{style:{color:"#AB5959"}},"/"),s("span",{style:{color:"#8C862B"}},"\u8096\u9A70")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u8D75\u6069\u6069"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u4F58\u4E2D\u519B"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5170\u56FD\u5FD7"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),i3={name:"17",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/b220f60e64784c229c724b373acc4530.png",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=rt;return A(),K(ot,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),r3,o3,S(r,Ve({},{ranges:["all","1","7-11","all"]}),{default:M(()=>[a3]),_:1},16)]),_:1},16)}}},c3=s("h1",null,[s("strong",null,"\u670D\u9970DIY"),u("\uFF08\u6682\u505C\uFF09")],-1),u3=s("p",null,"\u670D\u88C5\u56FE\u7EB8\u5236\u4F5C",-1),p3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u5218\u6167")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u53F6\u817E\u98DE"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u6768\u56FD\u6797"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"...")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u5218\u6167")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u53F6\u817E\u98DE"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u6768\u56FD\u6797"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),f3={name:"18",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/1b11907fa7a74e6496f4637ba0a6bec9.png",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=rt;return A(),K(ot,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),c3,u3,S(r,Ve({},{ranges:["all","1","7-9","all"]}),{default:M(()=>[p3]),_:1},16)]),_:1},16)}}},d3=s("h1",null,[s("strong",null,"\u5267\u672C\u6740")],-1),h3=s("p",null,"\u7EBF\u4E0A\u5267\u672C\u6740\u3001\u5267\u672CDIY",-1),m3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u6768\u76CA")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u738B\u955E\u94A6"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u90A2\u5609\u9F99"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u5218\u6CE2"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u5F20\u8C6A\u6770"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u6768\u56FD\u6797"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"...")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u6768\u76CA")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u738B\u955E\u94A6"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u90A2\u5609\u9F99"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5218\u6CE2"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5F20\u8C6A\u6770"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u6768\u56FD\u6797"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),g3={name:"19",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/d113f42921e14eda932604f9af396b24.png",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=rt;return A(),K(ot,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),d3,h3,S(r,Ve({},{ranges:["all","1","7-15","all"]}),{default:M(()=>[m3]),_:1},16)]),_:1},16)}}},y3=s("h1",null,[s("strong",null,"\u72FC\u4EBA\u6740")],-1),_3=s("p",null,"\u7EBF\u4E0A\u72FC\u4EBA\u6740",-1),v3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u6768\u76CA")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u738B\u955E\u94A6"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u90A2\u5609\u9F99"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u5218\u6CE2"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u5F20\u8C6A\u6770"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u9F9A\u7430"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u590F\u5DDD"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"...")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u6768\u76CA")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u738B\u955E\u94A6"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u90A2\u5609\u9F99"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5218\u6CE2"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5F20\u8C6A\u6770"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u9F9A\u7430"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u590F\u5DDD"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),b3={name:"20",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/75992b2adb164d099407f4622ccb4824.png",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=rt;return A(),K(ot,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),y3,_3,S(r,Ve({},{ranges:["all","1","7-17","all"]}),{default:M(()=>[v3]),_:1},16)]),_:1},16)}}},w3=s("h1",null,[s("strong",null,'"\u6211\u7684\u7C89\u4E1D\u91CC\u6709\u9B3C"'),u("\uFF08\u6682\u505C\uFF09")],-1),A3=s("p",null,"\u8D77\u4E8EB\u7AD9\u7684\u7EBF\u4E0A\u72FC\u4EBA\u6740\u6E38\u620F\u6A21\u5F0F",-1),x3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u6768\u68EE")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u590F\u5DDD"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u8C2D\u4E16\u4FCA"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"...")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u6768\u68EE")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u590F\u5DDD"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u8C2D\u4E16\u4FCA"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),C3={name:"21",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/203e82b9d579414d92db9edb188b42dd.gif",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=rt;return A(),K(ot,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),w3,A3,S(r,Ve({},{ranges:["all","1","7-9","all"]}),{default:M(()=>[x3]),_:1},16)]),_:1},16)}}},k3=s("h1",null,[s("strong",null,"Play Ground")],-1),$3=s("p",null,"3D\u6F6E\u73A9\u98CE\u6362\u88C5\u7684\u793E\u4EA4\u5E7F\u573A",-1),E3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u674E\u96E8\u9716"),s("span",{style:{color:"#CB7676"}},"/"),s("span",{style:{color:"#B8A965"}},"\u738B\u79B9\u8C6A")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u6768\u5EFA"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u9EC4\u52B2"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"Android"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u9648\u52C7\u5747"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"ios"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u4F55\u667A\u52C7"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u670D\u52A1\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u5F6D\u4F73\u8F89"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"Web"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"...")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u674E\u96E8\u9716"),s("span",{style:{color:"#AB5959"}},"/"),s("span",{style:{color:"#8C862B"}},"\u738B\u79B9\u8C6A")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u6768\u5EFA"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u9EC4\u52B2"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"Android"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u9648\u52C7\u5747"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"ios"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u4F55\u667A\u52C7"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u670D\u52A1\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5F6D\u4F73\u8F89"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"Web"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),B3={name:"22",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/742aa0afbb484b49b1a0975db503173f.gif",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=rt;return A(),K(ot,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),k3,$3,S(r,Ve({},{ranges:["all","1","7-15","all"]}),{default:M(()=>[E3]),_:1},16)]),_:1},16)}}},O3=s("h1",null,[s("strong",null,"\u7528\u6237\u751F\u6001")],-1),D3=s("p",null,"\u7ECF\u6D4E\u3001\u4E16\u754C\u5546\u5E97",-1),P3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u8D75\u8F69"),s("span",{style:{color:"#CB7676"}},"/"),s("span",{style:{color:"#B8A965"}},"\u738B\u79B9\u8C6A"),s("span",{style:{color:"#CB7676"}},"/"),s("span",{style:{color:"#B8A965"}},"\u5218\u60E0")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u5218\u7EF4"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u6731\u5E86\u6587"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"web"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u6768\u56FD\u6797"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"...")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u8D75\u8F69"),s("span",{style:{color:"#AB5959"}},"/"),s("span",{style:{color:"#8C862B"}},"\u738B\u79B9\u8C6A"),s("span",{style:{color:"#AB5959"}},"/"),s("span",{style:{color:"#8C862B"}},"\u5218\u60E0")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5218\u7EF4"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u6731\u5E86\u6587"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"web"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u6768\u56FD\u6797"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),S3={name:"23",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/f8a4bd30289f4fe9a07072b735be4e6d.png",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=rt;return A(),K(ot,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),O3,D3,S(r,Ve({},{ranges:["all","1","7-11","all"]}),{default:M(()=>[P3]),_:1},16)]),_:1},16)}}},M3=s("h1",null,[s("strong",null,"\u5B98\u7F51")],-1),T3=s("p",null,"\u66DD\u5149\u5BA3\u53D1\u3001\u4EA4\u6613\u5E02\u573A",-1),L3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u6768\u76CA")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u6731\u5E86\u6587"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"Web"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u674E\u5065"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"...")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u6768\u76CA")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u6731\u5E86\u6587"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"Web"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u674E\u5065"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),R3={name:"24",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=rt;return A(),K(ot,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),M3,T3,S(r,Ve({},{ranges:["all","1","7-9","all"]}),{default:M(()=>[L3]),_:1},16)]),_:1},16)}}},I3=s("h1",null,[s("strong",null,"UT\u4E2D\u53F0")],-1),F3=s("p",null,"\u63A7\u5236\u53F0\u3001\u914D\u7F6E\u3001GM",-1),N3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u90B1\u6E05\u9752")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u6731\u5E86\u6587"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"Web"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u6C6A\u9E3F\u5B87"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"...")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u90B1\u6E05\u9752")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u6731\u5E86\u6587"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"Web"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u6C6A\u9E3F\u5B87"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),j3={name:"25",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/893a7683a8874273a54351fe4f63d53e.png",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=rt;return A(),K(ot,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),I3,F3,S(r,Ve({},{ranges:["all","1","7-9","all"]}),{default:M(()=>[N3]),_:1},16)]),_:1},16)}}},H3=s("h1",null,[s("strong",null,"\u7535\u73A9\u57CE")],-1),U3=s("p",null,"\u7535\u73A9\u5A31\u4E50\u751F\u6001\uFF0C\u96C6\u6210\u7B2C\u4E09\u65B9\u5C0F\u6E38\u620F",-1),V3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u4F55\u951A")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u9EC4\u4ECE\u5BCC"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"web"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u53F6\u817E\u98DE"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u4F55\u667A\u52C7"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"...")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u4F55\u951A")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u9EC4\u4ECE\u5BCC"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"web"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u53F6\u817E\u98DE"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u4F55\u667A\u52C7"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),W3={name:"26",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/e0c05669835b45e38f1c85636a0dae87.png",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=rt;return A(),K(ot,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),H3,U3,S(r,Ve({},{ranges:["all","1","7-11","all"]}),{default:M(()=>[V3]),_:1},16)]),_:1},16)}}},z3={class:"grid grid-cols-2 w-full h-full"},K3={class:"h-full"},q3=["src"],Rp=ye({name:"iframe-right",props:{class:null,url:null},setup(e){const t=e;return I(U),(n,l)=>(A(),z("div",z3,[s("div",{class:Le(["slidev-layout default",t.class])},[wt(n.$slots,"default")],2),s("div",K3,[s("iframe",{id:"frame",class:"w-full h-full",src:e.url},null,8,q3)])]))}}),Y3=s("h1",null,[s("strong",null,"\u5F00\u653E\u5E73\u53F0")],-1),Z3=s("p",null,"\u4F9B\u7B2C\u4E09\u65B9\u96C6\u6210\u5E94\u7528\u5230UTown\u5143\u5B87\u5B99\u7684\u5F00\u53D1\u8005\u5E73\u53F0",-1),G3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u4F55\u951A")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u9EC4\u4ECE\u5BCC"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"web"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u53F6\u817E\u98DE"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u5434\u6797"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"...")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u4F55\u951A")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u9EC4\u4ECE\u5BCC"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"web"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u53F6\u817E\u98DE"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5434\u6797"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),X3={name:"27",setup(e){const t={layout:"iframe-right",url:"https://open.weixin.qq.com/",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=rt;return A(),K(Rp,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),Y3,Z3,S(r,Ve({},{ranges:["all","1","7-11","all"]}),{default:M(()=>[G3]),_:1},16)]),_:1},16)}}},J3=s("h1",null,[s("strong",null,"\u98CE\u63A7\u7CFB\u7EDF")],-1),Q3=s("p",null,"UTown\u5E73\u53F0\u7684\u4E00\u7CFB\u5217\u98CE\u63A7\u4F53\u7CFB\u529F\u80FD",-1),e6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u5F20\u4E91\u98DE")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u6C6A\u9E3F\u5B87"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u6731\u5E86\u6587"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"web"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"...")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u5F20\u4E91\u98DE")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u6C6A\u9E3F\u5B87"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u6731\u5E86\u6587"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"web"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),t6={name:"28",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/4c6c190943b54351a1b37b0031ec228a.png",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=rt;return A(),K(ot,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),J3,Q3,S(r,Ve({},{ranges:["all","1","7-11","all"]}),{default:M(()=>[e6]),_:1},16)]),_:1},16)}}},n6=s("h1",null,[s("strong",null,"\u201C\u592A\u7A7A\u72FC\u4EBA\u6740\u201D"),u("\uFF08\u6682\u505C\uFF09")],-1),s6=s("p",null,"\u300AAmong us\u300B",-1),l6=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u8096\u9A70")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u5F20\u8C6A\u6770"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"Unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u8C2D\u4E16\u4FCA"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"Unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u674E\u5609\u6587"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"Unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u4FAF\u5F00\u65B9"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u670D\u52A1\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"...")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u8096\u9A70")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5F20\u8C6A\u6770"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"Unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u8C2D\u4E16\u4FCA"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"Unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u674E\u5609\u6587"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"Unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u4FAF\u5F00\u65B9"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u670D\u52A1\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),r6={name:"29",setup(e){const t={layout:"iframe-right",url:"https://www.utown.io/55eba74c359c6fe05496d6be0a09c352.mp4",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=rt;return A(),K(Rp,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),n6,s6,S(r,Ve({},{ranges:["all","1","7-15","all"]}),{default:M(()=>[l6]),_:1},16)]),_:1},16)}}},o6=u("Protocol"),a6=s("p",null,[u("\u534F\u8BAE "),s("br"),s("br")],-1),i6={grid:"~ cols-3 gap-2",m:"-t-2"},c6=u("Workflow"),u6=u("Feedback loop"),p6=u("Radiator"),f6=s("p",null,"\u654F\u6377\u6D41",-1),d6=s("p",null,"\u53CD\u9988\u673A\u5236",-1),h6=s("p",null,"\u4FE1\u606F\u53D1\u5C04\u6E90",-1),m6={name:"30",setup(e){const t={layout:"cover",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=Ke("center");return A(),K(Hn,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),s("h1",null,[s("strong",null,[S(r,null,{default:M(()=>[o6]),_:1})])]),a6,s("div",i6,[s("h3",null,[S(r,null,{default:M(()=>[c6]),_:1})]),s("h3",null,[S(r,null,{default:M(()=>[u6]),_:1})]),s("h3",null,[S(r,null,{default:M(()=>[p6]),_:1})]),f6,d6,h6])]),_:1},16)}}},g6=u("Workflow"),y6=s("br",null,null,-1),_6={name:"31",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/f21d9643c6d44cf38b1134a2f12c57f0.jpeg",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=Ke("center");return A(),K(zt,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),s("h1",null,[s("strong",null,[S(r,null,{default:M(()=>[g6]),_:1})])]),y6]),_:1},16)}}},v6=u("3\u5927\u89D2\u8272"),b6=s("br",null,null,-1),w6={name:"32",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/8466a96e475a46bc97274daf091cb4e3.jpeg",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=Ke("center");return A(),K(zt,oe(re(t)),{default:M(()=>[V("1\u3001\u4E09\u5927\u89D2\u8272"),s("h3",null,[s("strong",null,[S(r,null,{default:M(()=>[v6]),_:1})])]),b6]),_:1},16)}}},A6=u("3\u5927\u5DE5\u4EF6"),x6=s("br",null,null,-1),C6={name:"33",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/4805f1753bbd41d79e5f23296837551d.jpeg",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=Ke("center");return A(),K(zt,oe(re(t)),{default:M(()=>[V("1\u3001\u4E09\u5927\u5DE5\u4EF6"),s("h3",null,[s("strong",null,[S(r,null,{default:M(()=>[A6]),_:1})])]),x6]),_:1},16)}}},k6=u("6\u5927\u8FC7\u7A0B"),$6=s("br",null,null,-1),E6={name:"34",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/95d3ddc9437045568dd98ffa6cb773c3.jpeg",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=Ke("center");return A(),K(zt,oe(re(t)),{default:M(()=>[V("1\u30016\u5927\u8FC7\u7A0B"),s("h3",null,[s("strong",null,[S(r,null,{default:M(()=>[k6]),_:1})])]),$6]),_:1},16)}}},B6=u("Protocol"),O6=s("br",null,null,-1),D6=u("\u8FED\u4EE3"),P6=s("img",{src:"https://img-blog.csdnimg.cn/12f66f9da8ae4aaeb751b00bb58a4a20.png"},null,-1),S6={name:"35",setup(e){const t={layout:"default",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=Ke("center");return A(),K(cl,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),s("h1",null,[S(r,null,{default:M(()=>[B6]),_:1})]),O6,S(r,null,{default:M(()=>[D6]),_:1}),P6]),_:1},16)}}},M6={name:"36",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/7165d7b8b9d9467a95981972abf47dda.jpeg",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>(A(),K(zt,oe(re(t)),null,16))}};var T6=ye({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var o,a;const e=Fl("click"),t=Fl("after"),n=(i,c,p)=>Dn(i,[[c,this.at!=null?+this.at+p:null,"",{hide:this.hide,fade:this.fade}]]);let l=(a=(o=this.$slots).default)==null?void 0:a.call(o);if(!l)return;l=Om(l);const r=i=>i.map((c,p)=>Ln(c)?n(yt(c),p%this.every===0?e:t,Math.floor(p/this.every)):c);return l.length===1&&["ul","ol"].includes(l[0].type)&&Array.isArray(l[0].children)?yt(l[0],{},[r(l[0].children)]):r(l)}});const L6=s("p",null,[s("img",{class:"absolute top-0 -left-0 opacity-1000",src:"https://img-blog.csdnimg.cn/2163b05d93804ca1a8f72ef1652f2012.jpeg"})],-1),R6=s("p",null,[s("img",{class:"absolute top-0 -left-0 opacity-1000",src:"https://img-blog.csdnimg.cn/ccb2c91c5cc94894a5690e4d47bf9b34.jpeg"})],-1),I6=s("p",null,[s("img",{class:"absolute top-0 -left-0 opacity-1000",src:"https://img-blog.csdnimg.cn/6c8d5aedd98b4a5e8f08aa5c06af0c06.jpeg"})],-1),F6={name:"37",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/0a6c410dfce841bdae1ba634fea03b33.jpeg",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=T6;return A(),K(zt,oe(re(t)),{default:M(()=>[V("1\u3001\u4FE1\u606F\u53D1\u5C04\u6E90"),S(r,null,{default:M(()=>[L6,R6,I6]),_:1})]),_:1},16)}}},N6=u("Protocol"),j6=s("br",null,null,-1),H6=u("\u7528\u6237\u6545\u4E8B\u548C\u4EFB\u52A1"),U6=s("br",null,null,-1),V6=s("br",null,null,-1),W6=s("br",null,null,-1),z6=s("br",null,null,-1),K6=s("br",null,null,-1),q6=s("br",null,null,-1),Y6=u("\u62C6\u89E3\u539F\u5219\uFF1AMECE"),Z6={name:"38",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/7a354dfc23ea4fb28ce72c0de91804ab.png",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=Ke("center");return A(),K(ot,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),s("h1",null,[S(r,null,{default:M(()=>[N6]),_:1})]),j6,S(r,null,{default:M(()=>[H6]),_:1}),U6,V6,W6,z6,K6,q6,s("h1",null,[S(r,null,{default:M(()=>[Y6]),_:1})])]),_:1},16)}}},G6=u("DOD"),X6=s("p",null,"\u5B8C\u6210\u5B9A\u4E49",-1),J6={name:"39",setup(e){const t={layout:"cover",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=Ke("center");return A(),K(Hn,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),s("h1",null,[s("strong",null,[S(r,null,{default:M(()=>[G6]),_:1})])]),X6]),_:1},16)}}},Q6=u("\u5B8C\u6210\u5B9A\u4E49"),e4=s("br",null,null,-1),t4={grid:"~ cols-4 gap-2",m:"-t-2"},n4=u("Dev"),s4=u("Test/Beta"),l4=u("Prod"),r4=u("Prod_ID"),o4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"\uFF08\u5F00\u53D1\u73AF\u5883\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"\u89E3\u51B3\u51B2\u7A81")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"\u6301\u7EED\u96C6\u6210")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"})])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"\uFF08\u5F00\u53D1\u73AF\u5883\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"\u89E3\u51B3\u51B2\u7A81")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"\u6301\u7EED\u96C6\u6210")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"})])])],-1),a4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"\uFF08\u6D4B\u8BD5\u73AF\u5883\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"\u529F\u80FD\u6D4B\u8BD5"),s("span",{style:{color:"#DBD7CA"}},"  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"\u6548\u679C\u6D4B\u8BD5")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"\uFF08\u6D4B\u8BD5\u73AF\u5883\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"\u529F\u80FD\u6D4B\u8BD5"),s("span",{style:{color:"#393A34"}},"  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"\u6548\u679C\u6D4B\u8BD5")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),i4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"\uFF08\u9884\u53D1\u5E03\u73AF\u5883\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"\u5168\u91CF\u6D4B\u8BD5\u22652\u8F6E")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"\u9664\u201C\u4F4E\u201C\u4F18\u5148\u7EA7\u7F3A\u9677\u6E05\u7A7A")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"\u7F8E\u672F\u3001UI\u3001\u4EA7\u54C1\u9A8C\u6536")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"\uFF08\u9884\u53D1\u5E03\u73AF\u5883\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"\u5168\u91CF\u6D4B\u8BD5\u22652\u8F6E")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"\u9664\u201C\u4F4E\u201C\u4F18\u5148\u7EA7\u7F3A\u9677\u6E05\u7A7A")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"\u7F8E\u672F\u3001UI\u3001\u4EA7\u54C1\u9A8C\u6536")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),c4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"\uFF08\u751F\u4EA7\u73AF\u5883\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"\u5168\u91CF\u6D4B\u8BD5\u22653\u8F6E")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"\u7F3A\u9677\u6E05\u7A7A")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"\u7F8E\u672F\u3001UI\u3001\u4EA7\u54C1\u9A8C\u6536")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"\uFF08\u751F\u4EA7\u73AF\u5883\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"\u5168\u91CF\u6D4B\u8BD5\u22653\u8F6E")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"\u7F3A\u9677\u6E05\u7A7A")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"\u7F8E\u672F\u3001UI\u3001\u4EA7\u54C1\u9A8C\u6536")])])])],-1),u4={name:"40",setup(e){const t={layout:"default",background:"https://www.utown.io/",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=Ke("center");return A(),K(cl,oe(re(t)),{default:M(()=>[V("2\u3001\u5927\u7EB2"),s("h1",null,[s("strong",null,[S(r,null,{default:M(()=>[Q6]),_:1})])]),e4,s("div",t4,[s("h3",null,[S(r,null,{default:M(()=>[n4]),_:1})]),s("h3",null,[S(r,null,{default:M(()=>[s4]),_:1})]),s("h3",null,[S(r,null,{default:M(()=>[l4]),_:1})]),s("h3",null,[S(r,null,{default:M(()=>[r4]),_:1})]),o4,a4,i4,c4])]),_:1},16)}}},p4=u("Outlook"),f4=s("p",null,[s("s",null,"\u9E21\u6C64"),u(" \u5C55\u671B")],-1),d4={name:"41",setup(e){const t={layout:"cover",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=Ke("center");return A(),K(Hn,oe(re(t)),{default:M(()=>[V("1\u3001\u5C55\u671B\u5C01\u9762"),s("h1",null,[s("strong",null,[S(r,null,{default:M(()=>[p4]),_:1})])]),f4]),_:1},16)}}},h4=u("Outlook"),m4=s("br",null,null,-1),g4=u("FT\u7EC4\u7EC7"),y4=s("p",null,[u("\u2013 \u4EA7\u54C1\u4FA7\uFF1A\u6C89\u6DC0\u957F\u671F\u7A33\u5B9A\u7684\u7279\u6027\u89C4\u5212\uFF0C\u5168\u5C40\u4E1A\u52A1\u89C6\u89D2 "),s("br"),s("br"),u(" \u2013\u5F00\u53D1\u4FA7\uFF1A\u7A33\u5B9A\u7684\u3001\u9AD8\u8D28\u91CF\u7684CI/CD "),s("br"),s("br")],-1),_4=s("p",null,[u("\u2013\u6D4B\u8BD5\u4FA7\uFF1AATDD\uFF08\u9A8C\u6536\u6D4B\u8BD5\u9A71\u52A8\u5F00\u53D1\uFF09 "),s("br"),s("br")],-1),v4=s("p",null,[u("\u2013PMO\u4FA7\uFF1A\u6700\u5927\u5316\u7EC4\u7EC7\u6548\u7387 "),s("br"),s("br")],-1),b4=s("p",null,"\u2013All team\uFF1A\u6210\u957F\u4E3A\u201C\u4E13\u5BB6\u201D\uFF08\u6DF1\u8015\u6280\u672F&\u719F\u7A14\u4E1A\u52A1\uFF09",-1),w4={name:"42",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/24bd2c170bf44c17a968658bef6263ae.png",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>{const r=Ke("center");return A(),K(ot,oe(re(t)),{default:M(()=>[V("1\u3001\u5C01\u9762"),s("h1",null,[S(r,null,{default:M(()=>[h4]),_:1})]),m4,S(r,null,{default:M(()=>[g4]),_:1}),y4,_4,v4,b4]),_:1},16)}}},A4={name:"43",setup(e){const t={layout:"end",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"};return I(U),(n,l)=>(A(),K(Dp,oe(re(t)),null,16))}};var x4=[{path:"1",name:"page-1",component:Sv,meta:{theme:"seriph",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},title:"**Welcome to UTown Team**",slide:{raw:`---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
---

# **Welcome to UTown Team**



<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>


<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->
`,title:"**Welcome to UTown Team**",level:1,content:`# **Welcome to UTown Team**



<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>`,frontmatter:{theme:"seriph",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},title:"**Welcome to UTown Team**"},note:"The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)",index:0,start:0,end:38,notesHTML:`<p>The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. <a href="https://sli.dev/guide/syntax.html#notes" target="_blank" rel="noopener">Read more in the docs</a></p>
`,filepath:"/Users/ios/markdown_ppt/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:Vv,meta:{slide:{raw:`
# \u5BFC\u822A

\u9F20\u6807Hover \u5230\u5DE6\u4E0B\u89D2\u5F39\u51FA\u76F8\u5E94\u64CD\u4F5C\u6309\u94AE

### \u952E\u76D8\u5FEB\u6377\u952E

|     |     |
| --- | --- |
| <kbd>right</kbd> / <kbd>space</kbd>| \u4E0B\u4E00\u9875 |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | \u4E0A\u4E00\u9875 |
| <kbd>up</kbd> | \u4E0A\u4E00\u4E2A\u5C55\u793A |
| <kbd>down</kbd> | \u4E0B\u4E00\u4E2A\u5C55\u793A |

<!-- https://sli.dev/guide/animations.html#click-animations -->
<img
  v-click
  class="absolute -bottom-9 -left-7 w-80 opacity-50"
  src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<!--\u70B9\u51FB\u89E6\u53D1\u663E\u793A\u56FE\u7247-->
<img
  v-click
  class="absolute -bottom-9 -left-7 w-80 opacity-50"
  src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-45 opacity-30 transform -rotate-10">\u8FD9\u513F!</p>

`,title:"\u5BFC\u822A",level:1,content:`# \u5BFC\u822A

\u9F20\u6807Hover \u5230\u5DE6\u4E0B\u89D2\u5F39\u51FA\u76F8\u5E94\u64CD\u4F5C\u6309\u94AE

### \u952E\u76D8\u5FEB\u6377\u952E

|     |     |
| --- | --- |
| <kbd>right</kbd> / <kbd>space</kbd>| \u4E0B\u4E00\u9875 |
| <kbd>left</kbd>  / <kbd>shift</kbd><kbd>space</kbd> | \u4E0A\u4E00\u9875 |
| <kbd>up</kbd> | \u4E0A\u4E00\u4E2A\u5C55\u793A |
| <kbd>down</kbd> | \u4E0B\u4E00\u4E2A\u5C55\u793A |

<!-- https://sli.dev/guide/animations.html#click-animations -->
<img
  v-click
  class="absolute -bottom-9 -left-7 w-80 opacity-50"
  src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<!--\u70B9\u51FB\u89E6\u53D1\u663E\u793A\u56FE\u7247-->
<img
  v-click
  class="absolute -bottom-9 -left-7 w-80 opacity-50"
  src="https://sli.dev/assets/arrow-bottom-left.svg"
/>
<p v-after class="absolute bottom-23 left-45 opacity-30 transform -rotate-10">\u8FD9\u513F!</p>`,frontmatter:{},index:1,start:39,end:68,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:qv,meta:{layout:"iframe",url:"https://www.utown.io/",date:"2013/7/13 20:46:25",slide:{raw:`---
layout: iframe
url: https://www.utown.io/
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->`,content:"",frontmatter:{layout:"iframe",url:"https://www.utown.io/",date:"2013/7/13 20:46:25"},note:"1\u3001\u5C01\u9762",index:2,start:68,end:75,notesHTML:`<p>1\u3001\u5C01\u9762</p>
`,filepath:"/Users/ios/markdown_ppt/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:ob,meta:{layout:"cover",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
layout: cover
background: https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **<center>\u9879\u76EE\u534F\u4F5C</center>**

<div grid="~ cols-5 gap-2" m="-t-2">

### <center>\u7EC4\u7EC7\u7ED3\u6784</center>

### <center>\u613F\u666F\u76EE\u6807</center>

### <center>\u5B8C\u6210\u5B9A\u4E49</center>

### <center>\u534F\u4F5C\u89C4\u7EA6</center>

### <center>\u56E2\u961F\u5C55\u671B</center>

\`\`\`yaml
	  
	  
Who?
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
What?
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
DOD?
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
How to collaborate?
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
Outlook?
	  
	  
	  
\`\`\`

</div>

`,title:"**<center>\u9879\u76EE\u534F\u4F5C</center>**",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **<center>\u9879\u76EE\u534F\u4F5C</center>**

<div grid="~ cols-5 gap-2" m="-t-2">

### <center>\u7EC4\u7EC7\u7ED3\u6784</center>

### <center>\u613F\u666F\u76EE\u6807</center>

### <center>\u5B8C\u6210\u5B9A\u4E49</center>

### <center>\u534F\u4F5C\u89C4\u7EA6</center>

### <center>\u56E2\u961F\u5C55\u671B</center>

\`\`\`yaml
	  
	  
Who?
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
What?
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
DOD?
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
How to collaborate?
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
Outlook?
	  
	  
	  
\`\`\`

</div>`,frontmatter:{layout:"cover",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"},index:3,start:75,end:144,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:cb,meta:{title:"\u5DE5\u4F5C\u534F\u8BAE",layout:"cover",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u5DE5\u4F5C\u534F\u8BAE
layout: cover
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **<center>Who</center>**
\u7EC4\u7EC7\u67B6\u6784

`,title:"\u5DE5\u4F5C\u534F\u8BAE",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **<center>Who</center>**
\u7EC4\u7EC7\u67B6\u6784`,frontmatter:{title:"\u5DE5\u4F5C\u534F\u8BAE",layout:"cover",date:"2013/7/13 20:46:25"},index:4,start:144,end:156,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:hb,meta:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image-left",image:"https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u7EC4\u7EC7\u7ED3\u6784
layout: image-left
image: https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png

date: 2013/7/13 20:46:25
---

<!--3.1\u3001\u7EC4\u7EC7\u7ED3\u6784-->
<br><br><br><br><br><br><br>

### **<center>\u4E92\u8054\u7F51\u5BE1\u5934\u7EC4\u7EC7\u7ED3\u6784</center>**
`,title:"\u7EC4\u7EC7\u7ED3\u6784",level:1,content:`<!--3.1\u3001\u7EC4\u7EC7\u7ED3\u6784-->
<br><br><br><br><br><br><br>

### **<center>\u4E92\u8054\u7F51\u5BE1\u5934\u7EC4\u7EC7\u7ED3\u6784</center>**`,frontmatter:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image-left",image:"https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png",date:"2013/7/13 20:46:25"},index:5,start:156,end:169,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:gb,meta:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image",image:"https://img-blog.csdnimg.cn/0ac03f4796e64c4b937d614e74a2126b.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u7EC4\u7EC7\u7ED3\u6784
layout: image
image: https://img-blog.csdnimg.cn/0ac03f4796e64c4b937d614e74a2126b.png
date: 2013/7/13 20:46:25
---

<!--3.2\u7EC4\u7EC7\u7ED3\u6784-->
<br><br><br><br><br><br><br>

`,title:"\u7EC4\u7EC7\u7ED3\u6784",level:1,content:`<!--3.2\u7EC4\u7EC7\u7ED3\u6784-->
<br><br><br><br><br><br><br>`,frontmatter:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image",image:"https://img-blog.csdnimg.cn/0ac03f4796e64c4b937d614e74a2126b.png",date:"2013/7/13 20:46:25"},index:6,start:169,end:180,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:_b,meta:{title:"\u7EC4\u7EC7\u7ED3\u6784\uFF08\u5F31\u77E9\u9635\uFF09",layout:"image",image:"https://img-blog.csdnimg.cn/177b97f8e76843ad8f38b97e6f34bacd.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u7EC4\u7EC7\u7ED3\u6784\uFF08\u5F31\u77E9\u9635\uFF09
layout: image
image: https://img-blog.csdnimg.cn/177b97f8e76843ad8f38b97e6f34bacd.png
date: 2013/7/13 20:46:25
---

<!--3.3 \u7EC4\u7EC7\u67B6\u6784\uFF08\u5F31\u77E9\u9635\uFF09-->
<br><br><br><br><br><br><br>
`,title:"\u7EC4\u7EC7\u7ED3\u6784\uFF08\u5F31\u77E9\u9635\uFF09",level:1,content:`<!--3.3 \u7EC4\u7EC7\u67B6\u6784\uFF08\u5F31\u77E9\u9635\uFF09-->
<br><br><br><br><br><br><br>`,frontmatter:{title:"\u7EC4\u7EC7\u7ED3\u6784\uFF08\u5F31\u77E9\u9635\uFF09",layout:"image",image:"https://img-blog.csdnimg.cn/177b97f8e76843ad8f38b97e6f34bacd.png",date:"2013/7/13 20:46:25"},index:7,start:180,end:190,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:bb,meta:{title:"\u5E73\u53F0\u8D44\u6E90\u7EC4",layout:"image",image:"https://img-blog.csdnimg.cn/9319d72b098a454693836cdf7be418cf.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u5E73\u53F0\u8D44\u6E90\u7EC4
layout: image
image: https://img-blog.csdnimg.cn/9319d72b098a454693836cdf7be418cf.png

date: 2013/7/13 20:46:25
---

<!--3.3 \u5E73\u53F0\u8D44\u6E90\u7EC4-->
<br><br><br><br><br><br><br>`,title:"\u5E73\u53F0\u8D44\u6E90\u7EC4",level:1,content:`<!--3.3 \u5E73\u53F0\u8D44\u6E90\u7EC4-->
<br><br><br><br><br><br><br>`,frontmatter:{title:"\u5E73\u53F0\u8D44\u6E90\u7EC4",layout:"image",image:"https://img-blog.csdnimg.cn/9319d72b098a454693836cdf7be418cf.png",date:"2013/7/13 20:46:25"},index:8,start:190,end:200,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Ab,meta:{title:"\u9879\u76EE\u7EC4\u7ED3\u6784",layout:"default",image:"https://img-blog.csdnimg.cn/a30131b99ea34d7fb5c30f03823fe700.jpeg",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u7EC4\u7ED3\u6784
layout: default
image: https://img-blog.csdnimg.cn/a30131b99ea34d7fb5c30f03823fe700.jpeg
date: 2013/7/13 20:46:25
---
<!--1\u3001\u9879\u76EE\u7EC4\u7ED3\u6784-->

<img border="rounded" 
src="https://img-blog.csdnimg.cn/0e714fcebe364ec5bd1d59584f72893b.jpeg"/>
`,title:"\u9879\u76EE\u7EC4\u7ED3\u6784",level:1,content:`<!--1\u3001\u9879\u76EE\u7EC4\u7ED3\u6784-->

<img border="rounded" 
src="https://img-blog.csdnimg.cn/0e714fcebe364ec5bd1d59584f72893b.jpeg"/>`,frontmatter:{title:"\u9879\u76EE\u7EC4\u7ED3\u6784",layout:"default",image:"https://img-blog.csdnimg.cn/a30131b99ea34d7fb5c30f03823fe700.jpeg",date:"2013/7/13 20:46:25"},index:9,start:200,end:211,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:kb,meta:{title:"\u9879\u76EE\u76EE\u6807\u5C01\u9762",layout:"cover",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u76EE\u6807\u5C01\u9762
layout: cover

date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **<center>What</center>**
\u613F\u666F\u76EE\u6807

`,title:"\u9879\u76EE\u76EE\u6807\u5C01\u9762",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **<center>What</center>**
\u613F\u666F\u76EE\u6807`,frontmatter:{title:"\u9879\u76EE\u76EE\u6807\u5C01\u9762",layout:"cover",date:"2013/7/13 20:46:25"},index:10,start:211,end:224,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Eb,meta:{title:"\u53D1\u5E03\u8BA1\u5212",layout:"default",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u53D1\u5E03\u8BA1\u5212
layout: default
date: 2013/7/13 20:46:25
---
<img
src="https://img-blog.csdnimg.cn/c8b61cbcfd454c56994c8de1a2d63d7f.png"
/>
`,title:"\u53D1\u5E03\u8BA1\u5212",level:1,content:`<img
src="https://img-blog.csdnimg.cn/c8b61cbcfd454c56994c8de1a2d63d7f.png"
/>`,frontmatter:{title:"\u53D1\u5E03\u8BA1\u5212",layout:"default",date:"2013/7/13 20:46:25"},index:11,start:224,end:233,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Ob,meta:{title:"\u4E0A\u53E4\u591C\u5E97\u89C6\u9891",layout:"iframe",url:"https://live.csdn.net/v/embed/253178",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u4E0A\u53E4\u591C\u5E97\u89C6\u9891
layout: iframe
url: https://live.csdn.net/v/embed/253178
date: 2013/7/13 20:46:25
---
<img
src="https://img-blog.csdnimg.cn/c8b61cbcfd454c56994c8de1a2d63d7f.png"
/>

`,title:"\u4E0A\u53E4\u591C\u5E97\u89C6\u9891",level:1,content:`<img
src="https://img-blog.csdnimg.cn/c8b61cbcfd454c56994c8de1a2d63d7f.png"
/>`,frontmatter:{title:"\u4E0A\u53E4\u591C\u5E97\u89C6\u9891",layout:"iframe",url:"https://live.csdn.net/v/embed/253178",date:"2013/7/13 20:46:25"},index:12,start:233,end:244,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Db,meta:{title:"\u4E1A\u52A1\u67B6\u6784",layout:"image",image:"https://img-blog.csdnimg.cn/06a88d49355345bf83bd48ab106ca8c6.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u4E1A\u52A1\u67B6\u6784
layout: image
image: https://img-blog.csdnimg.cn/06a88d49355345bf83bd48ab106ca8c6.png

date: 2013/7/13 20:46:25
---

<!--1\u3001UTown\u4E1A\u52A1\u67B6\u6784-->



`,title:"\u4E1A\u52A1\u67B6\u6784",level:1,content:"",frontmatter:{title:"\u4E1A\u52A1\u67B6\u6784",layout:"image",image:"https://img-blog.csdnimg.cn/06a88d49355345bf83bd48ab106ca8c6.png",date:"2013/7/13 20:46:25"},note:"1\u3001UTown\u4E1A\u52A1\u67B6\u6784",index:13,start:244,end:257,notesHTML:`<p>1\u3001UTown\u4E1A\u52A1\u67B6\u6784</p>
`,filepath:"/Users/ios/markdown_ppt/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:e3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/271ee21d8742468c909feebf1f87fe81.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/271ee21d8742468c909feebf1f87fe81.gif
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **\u4E3B\u7248\u672C**

\u4E3B\u6846\u67B6\u2014\u2014\u4F1A\u8BAE\u3001IM\u3001\u8BED\u97F3\u623F


\`\`\`ts {all|1-2|7-15|all}
PO\uFF1A \u4E01\u5B87\u535A
\u674E\u4E9A\u3001\u674E\u9633...


Member\uFF1A 

\u90B9\u676D\u7279\uFF08unity\uFF09

\u9EC4\u52B2\uFF08Android\uFF09

\u9648\u52C7\u5747\uFF08ios\uFF09

\u4F55\u667A\u52C7\uFF08\u670D\u52A1\u7AEF\uFF09

\u5F6D\u4F73\u8F89\uFF08Web\uFF09
...

\`\`\`

`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u4E3B\u7248\u672C**

\u4E3B\u6846\u67B6\u2014\u2014\u4F1A\u8BAE\u3001IM\u3001\u8BED\u97F3\u623F


\`\`\`ts {all|1-2|7-15|all}
PO\uFF1A \u4E01\u5B87\u535A
\u674E\u4E9A\u3001\u674E\u9633...


Member\uFF1A 

\u90B9\u676D\u7279\uFF08unity\uFF09

\u9EC4\u52B2\uFF08Android\uFF09

\u9648\u52C7\u5747\uFF08ios\uFF09

\u4F55\u667A\u52C7\uFF08\u670D\u52A1\u7AEF\uFF09

\u5F6D\u4F73\u8F89\uFF08Web\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/271ee21d8742468c909feebf1f87fe81.gif",date:"2013/7/13 20:46:25"},index:14,start:257,end:292,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:l3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/266e4e2739c74b629073f114ae270e3d.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/266e4e2739c74b629073f114ae270e3d.gif

date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **\u5730\u56FE\u7F16\u8F91\u5668**

\u7269\u4EF6\u6446\u653E\u3001\u80CC\u5305\u3001\u7A7A\u95F4\u6A21\u677F

\`\`\`ts {all|1|7-11|all}
PO\uFF1A \u5218\u6167



Member\uFF1A 

\u8D75\u6069\u6069\uFF08unity\uFF09

\u4F58\u4E2D\u519B\uFF08unity\uFF09

\u5170\u56FD\u5FD7\uFF08\u540E\u7AEF\uFF09
...

\`\`\`

`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u5730\u56FE\u7F16\u8F91\u5668**

\u7269\u4EF6\u6446\u653E\u3001\u80CC\u5305\u3001\u7A7A\u95F4\u6A21\u677F

\`\`\`ts {all|1|7-11|all}
PO\uFF1A \u5218\u6167



Member\uFF1A 

\u8D75\u6069\u6069\uFF08unity\uFF09

\u4F58\u4E2D\u519B\uFF08unity\uFF09

\u5170\u56FD\u5FD7\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/266e4e2739c74b629073f114ae270e3d.gif",date:"2013/7/13 20:46:25"},index:15,start:292,end:323,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:i3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/b220f60e64784c229c724b373acc4530.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/b220f60e64784c229c724b373acc4530.png
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **\u7EC4\u4EF6\u7F16\u8F91\u5668**
\u7EC4\u4EF6\u7BA1\u7406\u6A21\u7EC4\uFF0C\u8D44\u6E90\u4E0A\u4F20\u3001\u5C5E\u6027\u8BBE\u7F6E\u3001\u7EC4\u4EF6\u751F\u6210

\`\`\`ts {all|1|7-11|all}
PO\uFF1A \u5218\u6167/\u8096\u9A70



Member\uFF1A 

\u8D75\u6069\u6069\uFF08unity\uFF09

\u4F58\u4E2D\u519B\uFF08unity\uFF09

\u5170\u56FD\u5FD7\uFF08\u540E\u7AEF\uFF09
...

\`\`\`

`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u7EC4\u4EF6\u7F16\u8F91\u5668**
\u7EC4\u4EF6\u7BA1\u7406\u6A21\u7EC4\uFF0C\u8D44\u6E90\u4E0A\u4F20\u3001\u5C5E\u6027\u8BBE\u7F6E\u3001\u7EC4\u4EF6\u751F\u6210

\`\`\`ts {all|1|7-11|all}
PO\uFF1A \u5218\u6167/\u8096\u9A70



Member\uFF1A 

\u8D75\u6069\u6069\uFF08unity\uFF09

\u4F58\u4E2D\u519B\uFF08unity\uFF09

\u5170\u56FD\u5FD7\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/b220f60e64784c229c724b373acc4530.png",date:"2013/7/13 20:46:25"},index:16,start:323,end:352,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:f3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/1b11907fa7a74e6496f4637ba0a6bec9.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/1b11907fa7a74e6496f4637ba0a6bec9.png
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **\u670D\u9970DIY**\uFF08\u6682\u505C\uFF09
\u670D\u88C5\u56FE\u7EB8\u5236\u4F5C

\`\`\`ts {all|1|7-9|all}
PO\uFF1A \u5218\u6167



Member\uFF1A 

\u53F6\u817E\u98DE\uFF08unity\uFF09

\u6768\u56FD\u6797\uFF08\u540E\u7AEF\uFF09
...

\`\`\`

`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u670D\u9970DIY**\uFF08\u6682\u505C\uFF09
\u670D\u88C5\u56FE\u7EB8\u5236\u4F5C

\`\`\`ts {all|1|7-9|all}
PO\uFF1A \u5218\u6167



Member\uFF1A 

\u53F6\u817E\u98DE\uFF08unity\uFF09

\u6768\u56FD\u6797\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/1b11907fa7a74e6496f4637ba0a6bec9.png",date:"2013/7/13 20:46:25"},index:17,start:352,end:379,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:g3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/d113f42921e14eda932604f9af396b24.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/d113f42921e14eda932604f9af396b24.png
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# **\u5267\u672C\u6740**
\u7EBF\u4E0A\u5267\u672C\u6740\u3001\u5267\u672CDIY

\`\`\`ts {all|1|7-15|all}
PO\uFF1A \u6768\u76CA



Member\uFF1A 

\u738B\u955E\u94A6\uFF08unity\uFF09

\u90A2\u5609\u9F99\uFF08unity\uFF09

\u5218\u6CE2\uFF08unity\uFF09

\u5F20\u8C6A\u6770\uFF08unity\uFF09

\u6768\u56FD\u6797\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u5267\u672C\u6740**
\u7EBF\u4E0A\u5267\u672C\u6740\u3001\u5267\u672CDIY

\`\`\`ts {all|1|7-15|all}
PO\uFF1A \u6768\u76CA



Member\uFF1A 

\u738B\u955E\u94A6\uFF08unity\uFF09

\u90A2\u5609\u9F99\uFF08unity\uFF09

\u5218\u6CE2\uFF08unity\uFF09

\u5F20\u8C6A\u6770\uFF08unity\uFF09

\u6768\u56FD\u6797\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/d113f42921e14eda932604f9af396b24.png",date:"2013/7/13 20:46:25"},index:18,start:379,end:409,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:b3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/75992b2adb164d099407f4622ccb4824.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/75992b2adb164d099407f4622ccb4824.png
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# **\u72FC\u4EBA\u6740**
\u7EBF\u4E0A\u72FC\u4EBA\u6740

\`\`\`ts {all|1|7-17|all}
PO\uFF1A \u6768\u76CA



Member\uFF1A 

\u738B\u955E\u94A6\uFF08unity\uFF09

\u90A2\u5609\u9F99\uFF08unity\uFF09

\u5218\u6CE2\uFF08unity\uFF09

\u5F20\u8C6A\u6770\uFF08unity\uFF09

\u9F9A\u7430\uFF08unity\uFF09

\u590F\u5DDD\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u72FC\u4EBA\u6740**
\u7EBF\u4E0A\u72FC\u4EBA\u6740

\`\`\`ts {all|1|7-17|all}
PO\uFF1A \u6768\u76CA



Member\uFF1A 

\u738B\u955E\u94A6\uFF08unity\uFF09

\u90A2\u5609\u9F99\uFF08unity\uFF09

\u5218\u6CE2\uFF08unity\uFF09

\u5F20\u8C6A\u6770\uFF08unity\uFF09

\u9F9A\u7430\uFF08unity\uFF09

\u590F\u5DDD\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/75992b2adb164d099407f4622ccb4824.png",date:"2013/7/13 20:46:25"},index:19,start:409,end:441,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:C3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/203e82b9d579414d92db9edb188b42dd.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/203e82b9d579414d92db9edb188b42dd.gif
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **"\u6211\u7684\u7C89\u4E1D\u91CC\u6709\u9B3C"**\uFF08\u6682\u505C\uFF09
\u8D77\u4E8EB\u7AD9\u7684\u7EBF\u4E0A\u72FC\u4EBA\u6740\u6E38\u620F\u6A21\u5F0F

\`\`\`ts {all|1|7-9|all}
PO\uFF1A \u6768\u68EE



Member\uFF1A 

\u590F\u5DDD\uFF08\u540E\u7AEF\uFF09

\u8C2D\u4E16\u4FCA\uFF08unity\uFF09
...

\`\`\`

`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **"\u6211\u7684\u7C89\u4E1D\u91CC\u6709\u9B3C"**\uFF08\u6682\u505C\uFF09
\u8D77\u4E8EB\u7AD9\u7684\u7EBF\u4E0A\u72FC\u4EBA\u6740\u6E38\u620F\u6A21\u5F0F

\`\`\`ts {all|1|7-9|all}
PO\uFF1A \u6768\u68EE



Member\uFF1A 

\u590F\u5DDD\uFF08\u540E\u7AEF\uFF09

\u8C2D\u4E16\u4FCA\uFF08unity\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/203e82b9d579414d92db9edb188b42dd.gif",date:"2013/7/13 20:46:25"},index:20,start:441,end:468,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:B3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/742aa0afbb484b49b1a0975db503173f.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/742aa0afbb484b49b1a0975db503173f.gif
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **Play Ground**
3D\u6F6E\u73A9\u98CE\u6362\u88C5\u7684\u793E\u4EA4\u5E7F\u573A

\`\`\`ts {all|1|7-15|all}
PO\uFF1A \u674E\u96E8\u9716/\u738B\u79B9\u8C6A



Member\uFF1A 

\u6768\u5EFA\uFF08unity\uFF09

\u9EC4\u52B2\uFF08Android\uFF09

\u9648\u52C7\u5747\uFF08ios\uFF09

\u4F55\u667A\u52C7\uFF08\u670D\u52A1\u7AEF\uFF09

\u5F6D\u4F73\u8F89\uFF08Web\uFF09
...

\`\`\`

`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **Play Ground**
3D\u6F6E\u73A9\u98CE\u6362\u88C5\u7684\u793E\u4EA4\u5E7F\u573A

\`\`\`ts {all|1|7-15|all}
PO\uFF1A \u674E\u96E8\u9716/\u738B\u79B9\u8C6A



Member\uFF1A 

\u6768\u5EFA\uFF08unity\uFF09

\u9EC4\u52B2\uFF08Android\uFF09

\u9648\u52C7\u5747\uFF08ios\uFF09

\u4F55\u667A\u52C7\uFF08\u670D\u52A1\u7AEF\uFF09

\u5F6D\u4F73\u8F89\uFF08Web\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/742aa0afbb484b49b1a0975db503173f.gif",date:"2013/7/13 20:46:25"},index:21,start:468,end:501,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:S3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/f8a4bd30289f4fe9a07072b735be4e6d.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/f8a4bd30289f4fe9a07072b735be4e6d.png

date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **\u7528\u6237\u751F\u6001**
\u7ECF\u6D4E\u3001\u4E16\u754C\u5546\u5E97

\`\`\`ts {all|1|7-11|all}
PO\uFF1A \u8D75\u8F69/\u738B\u79B9\u8C6A/\u5218\u60E0



Member\uFF1A 

\u5218\u7EF4\uFF08unity\uFF09

\u6731\u5E86\u6587\uFF08web\uFF09

\u6768\u56FD\u6797\uFF08\u540E\u7AEF\uFF09
...

\`\`\`
`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u7528\u6237\u751F\u6001**
\u7ECF\u6D4E\u3001\u4E16\u754C\u5546\u5E97

\`\`\`ts {all|1|7-11|all}
PO\uFF1A \u8D75\u8F69/\u738B\u79B9\u8C6A/\u5218\u60E0



Member\uFF1A 

\u5218\u7EF4\uFF08unity\uFF09

\u6731\u5E86\u6587\uFF08web\uFF09

\u6768\u56FD\u6797\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/f8a4bd30289f4fe9a07072b735be4e6d.png",date:"2013/7/13 20:46:25"},index:22,start:501,end:530,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:R3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **\u5B98\u7F51**
\u66DD\u5149\u5BA3\u53D1\u3001\u4EA4\u6613\u5E02\u573A

\`\`\`ts {all|1|7-9|all}
PO\uFF1A \u6768\u76CA



Member\uFF1A 

\u6731\u5E86\u6587\uFF08Web\uFF09

\u674E\u5065\uFF08\u540E\u7AEF\uFF09
...

\`\`\`

`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u5B98\u7F51**
\u66DD\u5149\u5BA3\u53D1\u3001\u4EA4\u6613\u5E02\u573A

\`\`\`ts {all|1|7-9|all}
PO\uFF1A \u6768\u76CA



Member\uFF1A 

\u6731\u5E86\u6587\uFF08Web\uFF09

\u674E\u5065\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"},index:23,start:530,end:557,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:j3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/893a7683a8874273a54351fe4f63d53e.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/893a7683a8874273a54351fe4f63d53e.png
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **UT\u4E2D\u53F0**
\u63A7\u5236\u53F0\u3001\u914D\u7F6E\u3001GM

\`\`\`ts {all|1|7-9|all}
PO\uFF1A \u90B1\u6E05\u9752



Member\uFF1A 

\u6731\u5E86\u6587\uFF08Web\uFF09

\u6C6A\u9E3F\u5B87\uFF08\u540E\u7AEF\uFF09
...

\`\`\`

`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **UT\u4E2D\u53F0**
\u63A7\u5236\u53F0\u3001\u914D\u7F6E\u3001GM

\`\`\`ts {all|1|7-9|all}
PO\uFF1A \u90B1\u6E05\u9752



Member\uFF1A 

\u6731\u5E86\u6587\uFF08Web\uFF09

\u6C6A\u9E3F\u5B87\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/893a7683a8874273a54351fe4f63d53e.png",date:"2013/7/13 20:46:25"},index:24,start:557,end:584,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:W3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/e0c05669835b45e38f1c85636a0dae87.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/e0c05669835b45e38f1c85636a0dae87.png
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **\u7535\u73A9\u57CE**
\u7535\u73A9\u5A31\u4E50\u751F\u6001\uFF0C\u96C6\u6210\u7B2C\u4E09\u65B9\u5C0F\u6E38\u620F

\`\`\`ts {all|1|7-11|all}
PO\uFF1A \u4F55\u951A



Member\uFF1A 

\u9EC4\u4ECE\u5BCC\uFF08web\uFF09

\u53F6\u817E\u98DE\uFF08unity\uFF09

\u4F55\u667A\u52C7\uFF08\u540E\u7AEF\uFF09
...

\`\`\`

`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u7535\u73A9\u57CE**
\u7535\u73A9\u5A31\u4E50\u751F\u6001\uFF0C\u96C6\u6210\u7B2C\u4E09\u65B9\u5C0F\u6E38\u620F

\`\`\`ts {all|1|7-11|all}
PO\uFF1A \u4F55\u951A



Member\uFF1A 

\u9EC4\u4ECE\u5BCC\uFF08web\uFF09

\u53F6\u817E\u98DE\uFF08unity\uFF09

\u4F55\u667A\u52C7\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/e0c05669835b45e38f1c85636a0dae87.png",date:"2013/7/13 20:46:25"},index:25,start:584,end:613,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:X3,meta:{title:"\u5F00\u653E\u5E73\u53F0",layout:"iframe-right",url:"https://open.weixin.qq.com/",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u5F00\u653E\u5E73\u53F0
layout: iframe-right
url: https://open.weixin.qq.com/
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **\u5F00\u653E\u5E73\u53F0**
\u4F9B\u7B2C\u4E09\u65B9\u96C6\u6210\u5E94\u7528\u5230UTown\u5143\u5B87\u5B99\u7684\u5F00\u53D1\u8005\u5E73\u53F0

\`\`\`ts {all|1|7-11|all}
PO\uFF1A \u4F55\u951A



Member\uFF1A 

\u9EC4\u4ECE\u5BCC\uFF08web\uFF09

\u53F6\u817E\u98DE\uFF08unity\uFF09

\u5434\u6797\uFF08\u540E\u7AEF\uFF09
...

\`\`\`

`,title:"\u5F00\u653E\u5E73\u53F0",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u5F00\u653E\u5E73\u53F0**
\u4F9B\u7B2C\u4E09\u65B9\u96C6\u6210\u5E94\u7528\u5230UTown\u5143\u5B87\u5B99\u7684\u5F00\u53D1\u8005\u5E73\u53F0

\`\`\`ts {all|1|7-11|all}
PO\uFF1A \u4F55\u951A



Member\uFF1A 

\u9EC4\u4ECE\u5BCC\uFF08web\uFF09

\u53F6\u817E\u98DE\uFF08unity\uFF09

\u5434\u6797\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u5F00\u653E\u5E73\u53F0",layout:"iframe-right",url:"https://open.weixin.qq.com/",date:"2013/7/13 20:46:25"},index:26,start:613,end:642,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:t6,meta:{title:"\u98CE\u63A7\u7CFB\u7EDF",layout:"image-right",image:"https://img-blog.csdnimg.cn/4c6c190943b54351a1b37b0031ec228a.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u98CE\u63A7\u7CFB\u7EDF
layout: image-right
image: https://img-blog.csdnimg.cn/4c6c190943b54351a1b37b0031ec228a.png

date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **\u98CE\u63A7\u7CFB\u7EDF**

UTown\u5E73\u53F0\u7684\u4E00\u7CFB\u5217\u98CE\u63A7\u4F53\u7CFB\u529F\u80FD

\`\`\`ts {all|1|7-11|all}
PO\uFF1A \u5F20\u4E91\u98DE


Member\uFF1A 

\u6C6A\u9E3F\u5B87\uFF08\u540E\u7AEF\uFF09
\u6731\u5E86\u6587\uFF08web\uFF09
...

\`\`\`

`,title:"\u98CE\u63A7\u7CFB\u7EDF",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u98CE\u63A7\u7CFB\u7EDF**

UTown\u5E73\u53F0\u7684\u4E00\u7CFB\u5217\u98CE\u63A7\u4F53\u7CFB\u529F\u80FD

\`\`\`ts {all|1|7-11|all}
PO\uFF1A \u5F20\u4E91\u98DE


Member\uFF1A 

\u6C6A\u9E3F\u5B87\uFF08\u540E\u7AEF\uFF09
\u6731\u5E86\u6587\uFF08web\uFF09
...

\`\`\``,frontmatter:{title:"\u98CE\u63A7\u7CFB\u7EDF",layout:"image-right",image:"https://img-blog.csdnimg.cn/4c6c190943b54351a1b37b0031ec228a.png",date:"2013/7/13 20:46:25"},index:27,start:642,end:669,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:r6,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"iframe-right",url:"https://www.utown.io/55eba74c359c6fe05496d6be0a09c352.mp4",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: iframe-right
url: https://www.utown.io/55eba74c359c6fe05496d6be0a09c352.mp4
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->
# **\u201C\u592A\u7A7A\u72FC\u4EBA\u6740\u201D**\uFF08\u6682\u505C\uFF09
\u300AAmong us\u300B

\`\`\`ts {all|1|7-15|all}
PO\uFF1A \u8096\u9A70



Member\uFF1A 

\u5F20\u8C6A\u6770\uFF08Unity\uFF09

\u8C2D\u4E16\u4FCA\uFF08Unity\uFF09

\u674E\u5609\u6587\uFF08Unity\uFF09

\u4FAF\u5F00\u65B9\uFF08\u670D\u52A1\u7AEF\uFF09
...

\`\`\`

`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->
# **\u201C\u592A\u7A7A\u72FC\u4EBA\u6740\u201D**\uFF08\u6682\u505C\uFF09
\u300AAmong us\u300B

\`\`\`ts {all|1|7-15|all}
PO\uFF1A \u8096\u9A70



Member\uFF1A 

\u5F20\u8C6A\u6770\uFF08Unity\uFF09

\u8C2D\u4E16\u4FCA\uFF08Unity\uFF09

\u674E\u5609\u6587\uFF08Unity\uFF09

\u4FAF\u5F00\u65B9\uFF08\u670D\u52A1\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"iframe-right",url:"https://www.utown.io/55eba74c359c6fe05496d6be0a09c352.mp4",date:"2013/7/13 20:46:25"},index:28,start:669,end:699,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:m6,meta:{title:"\u5DE5\u4F5C\u534F\u8BAE",layout:"cover",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u5DE5\u4F5C\u534F\u8BAE
layout: cover
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **<center>Protocol</center>**
\u534F\u8BAE
<br>
<br>
<div grid="~ cols-3 gap-2" m="-t-2">

### <center>Workflow</center>


### <center>Feedback loop</center>

### <center>Radiator</center>

\u654F\u6377\u6D41

\u53CD\u9988\u673A\u5236

\u4FE1\u606F\u53D1\u5C04\u6E90

</div>

`,title:"\u5DE5\u4F5C\u534F\u8BAE",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **<center>Protocol</center>**
\u534F\u8BAE
<br>
<br>
<div grid="~ cols-3 gap-2" m="-t-2">

### <center>Workflow</center>


### <center>Feedback loop</center>

### <center>Radiator</center>

\u654F\u6377\u6D41

\u53CD\u9988\u673A\u5236

\u4FE1\u606F\u53D1\u5C04\u6E90

</div>`,frontmatter:{title:"\u5DE5\u4F5C\u534F\u8BAE",layout:"cover",date:"2013/7/13 20:46:25"},index:29,start:699,end:729,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:_6,meta:{title:"\u9884\u671F\u5DE5\u4F5C\u6D41",layout:"image",image:"https://img-blog.csdnimg.cn/f21d9643c6d44cf38b1134a2f12c57f0.jpeg",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9884\u671F\u5DE5\u4F5C\u6D41
layout: image
image: https://img-blog.csdnimg.cn/f21d9643c6d44cf38b1134a2f12c57f0.jpeg
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **<center>Workflow</center>**
<br>


`,title:"\u9884\u671F\u5DE5\u4F5C\u6D41",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **<center>Workflow</center>**
<br>`,frontmatter:{title:"\u9884\u671F\u5DE5\u4F5C\u6D41",layout:"image",image:"https://img-blog.csdnimg.cn/f21d9643c6d44cf38b1134a2f12c57f0.jpeg",date:"2013/7/13 20:46:25"},index:30,start:729,end:743,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:w6,meta:{title:"\u4E09\u5927\u89D2\u8272",layout:"image",image:"https://img-blog.csdnimg.cn/8466a96e475a46bc97274daf091cb4e3.jpeg",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u4E09\u5927\u89D2\u8272
layout: image
image: https://img-blog.csdnimg.cn/8466a96e475a46bc97274daf091cb4e3.jpeg
date: 2013/7/13 20:46:25
---

<!--1\u3001\u4E09\u5927\u89D2\u8272-->

### **<center>3\u5927\u89D2\u8272</center>**
<br>`,title:"\u4E09\u5927\u89D2\u8272",level:1,content:`<!--1\u3001\u4E09\u5927\u89D2\u8272-->

### **<center>3\u5927\u89D2\u8272</center>**
<br>`,frontmatter:{title:"\u4E09\u5927\u89D2\u8272",layout:"image",image:"https://img-blog.csdnimg.cn/8466a96e475a46bc97274daf091cb4e3.jpeg",date:"2013/7/13 20:46:25"},index:31,start:743,end:754,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:C6,meta:{title:"\u4E09\u5927\u5DE5\u4EF6",layout:"image",image:"https://img-blog.csdnimg.cn/4805f1753bbd41d79e5f23296837551d.jpeg",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u4E09\u5927\u5DE5\u4EF6
layout: image
image: https://img-blog.csdnimg.cn/4805f1753bbd41d79e5f23296837551d.jpeg
date: 2013/7/13 20:46:25
---

<!--1\u3001\u4E09\u5927\u5DE5\u4EF6-->

### **<center>3\u5927\u5DE5\u4EF6</center>**
<br>
`,title:"\u4E09\u5927\u5DE5\u4EF6",level:1,content:`<!--1\u3001\u4E09\u5927\u5DE5\u4EF6-->

### **<center>3\u5927\u5DE5\u4EF6</center>**
<br>`,frontmatter:{title:"\u4E09\u5927\u5DE5\u4EF6",layout:"image",image:"https://img-blog.csdnimg.cn/4805f1753bbd41d79e5f23296837551d.jpeg",date:"2013/7/13 20:46:25"},index:32,start:754,end:766,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:E6,meta:{title:"\u4E09\u5927\u5DE5\u4EF6",layout:"image",image:"https://img-blog.csdnimg.cn/95d3ddc9437045568dd98ffa6cb773c3.jpeg",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u4E09\u5927\u5DE5\u4EF6
layout: image
image: https://img-blog.csdnimg.cn/95d3ddc9437045568dd98ffa6cb773c3.jpeg
date: 2013/7/13 20:46:25
---

<!--1\u30016\u5927\u8FC7\u7A0B-->

### **<center>6\u5927\u8FC7\u7A0B</center>**
<br>`,title:"\u4E09\u5927\u5DE5\u4EF6",level:1,content:`<!--1\u30016\u5927\u8FC7\u7A0B-->

### **<center>6\u5927\u8FC7\u7A0B</center>**
<br>`,frontmatter:{title:"\u4E09\u5927\u5DE5\u4EF6",layout:"image",image:"https://img-blog.csdnimg.cn/95d3ddc9437045568dd98ffa6cb773c3.jpeg",date:"2013/7/13 20:46:25"},index:33,start:766,end:777,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:S6,meta:{title:"\u5177\u4F53\u8FED\u4EE3",layout:"default",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u5177\u4F53\u8FED\u4EE3
layout: default
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# <center>Protocol</center>
<br>
<center>\u8FED\u4EE3</center>
<img
src="https://img-blog.csdnimg.cn/12f66f9da8ae4aaeb751b00bb58a4a20.png"
/>

`,title:"\u5177\u4F53\u8FED\u4EE3",level:1,content:`<!--1\u3001\u5C01\u9762-->

# <center>Protocol</center>
<br>
<center>\u8FED\u4EE3</center>
<img
src="https://img-blog.csdnimg.cn/12f66f9da8ae4aaeb751b00bb58a4a20.png"
/>`,frontmatter:{title:"\u5177\u4F53\u8FED\u4EE3",layout:"default",date:"2013/7/13 20:46:25"},index:34,start:777,end:792,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:M6,meta:{title:"\u53CD\u9988\u73AF",layout:"image",image:"https://img-blog.csdnimg.cn/7165d7b8b9d9467a95981972abf47dda.jpeg",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u53CD\u9988\u73AF
layout: image
image: https://img-blog.csdnimg.cn/7165d7b8b9d9467a95981972abf47dda.jpeg
date: 2013/7/13 20:46:25
---
<!--1\u3001\u53CD\u9988\u73AF-->

`,title:"\u53CD\u9988\u73AF",level:1,content:"",frontmatter:{title:"\u53CD\u9988\u73AF",layout:"image",image:"https://img-blog.csdnimg.cn/7165d7b8b9d9467a95981972abf47dda.jpeg",date:"2013/7/13 20:46:25"},note:"1\u3001\u53CD\u9988\u73AF",index:35,start:792,end:801,notesHTML:`<p>1\u3001\u53CD\u9988\u73AF</p>
`,filepath:"/Users/ios/markdown_ppt/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:F6,meta:{title:"\u4FE1\u606F\u53D1\u5C04\u6E90",layout:"image",image:"https://img-blog.csdnimg.cn/0a6c410dfce841bdae1ba634fea03b33.jpeg",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u4FE1\u606F\u53D1\u5C04\u6E90
layout: image
image: https://img-blog.csdnimg.cn/0a6c410dfce841bdae1ba634fea03b33.jpeg
date: 2013/7/13 20:46:25
---

<!--1\u3001\u4FE1\u606F\u53D1\u5C04\u6E90-->


<v-clicks>

<img
	class="absolute top-0 -left-0 opacity-1000"
	src="https://img-blog.csdnimg.cn/2163b05d93804ca1a8f72ef1652f2012.jpeg"
	/>

<img
	class="absolute top-0 -left-0 opacity-1000"
	src="https://img-blog.csdnimg.cn/ccb2c91c5cc94894a5690e4d47bf9b34.jpeg"
	/>

<img
	class="absolute top-0 -left-0 opacity-1000"
	src="https://img-blog.csdnimg.cn/6c8d5aedd98b4a5e8f08aa5c06af0c06.jpeg"
	/>



</v-clicks>

`,title:"\u4FE1\u606F\u53D1\u5C04\u6E90",level:1,content:`<!--1\u3001\u4FE1\u606F\u53D1\u5C04\u6E90-->


<v-clicks>

<img
	class="absolute top-0 -left-0 opacity-1000"
	src="https://img-blog.csdnimg.cn/2163b05d93804ca1a8f72ef1652f2012.jpeg"
	/>

<img
	class="absolute top-0 -left-0 opacity-1000"
	src="https://img-blog.csdnimg.cn/ccb2c91c5cc94894a5690e4d47bf9b34.jpeg"
	/>

<img
	class="absolute top-0 -left-0 opacity-1000"
	src="https://img-blog.csdnimg.cn/6c8d5aedd98b4a5e8f08aa5c06af0c06.jpeg"
	/>



</v-clicks>`,frontmatter:{title:"\u4FE1\u606F\u53D1\u5C04\u6E90",layout:"image",image:"https://img-blog.csdnimg.cn/0a6c410dfce841bdae1ba634fea03b33.jpeg",date:"2013/7/13 20:46:25"},index:36,start:801,end:833,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:Z6,meta:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"image-right",image:"https://img-blog.csdnimg.cn/7a354dfc23ea4fb28ce72c0de91804ab.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u4EA7\u54C1\u8DEF\u7EBF
layout: image-right
image: https://img-blog.csdnimg.cn/7a354dfc23ea4fb28ce72c0de91804ab.png
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# <center>Protocol</center>
<br>
<center>\u7528\u6237\u6545\u4E8B\u548C\u4EFB\u52A1</center>

<br>
<br><br><br><br>
<br>

# <center>\u62C6\u89E3\u539F\u5219\uFF1AMECE</center>

`,title:"\u4EA7\u54C1\u8DEF\u7EBF",level:1,content:`<!--1\u3001\u5C01\u9762-->

# <center>Protocol</center>
<br>
<center>\u7528\u6237\u6545\u4E8B\u548C\u4EFB\u52A1</center>

<br>
<br><br><br><br>
<br>

# <center>\u62C6\u89E3\u539F\u5219\uFF1AMECE</center>`,frontmatter:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"image-right",image:"https://img-blog.csdnimg.cn/7a354dfc23ea4fb28ce72c0de91804ab.png",date:"2013/7/13 20:46:25"},index:37,start:833,end:852,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:J6,meta:{title:"\u5B8C\u6210\u5B9A\u4E49",layout:"cover",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u5B8C\u6210\u5B9A\u4E49
layout: cover

date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **<center>DOD</center>**
\u5B8C\u6210\u5B9A\u4E49
`,title:"\u5B8C\u6210\u5B9A\u4E49",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **<center>DOD</center>**
\u5B8C\u6210\u5B9A\u4E49`,frontmatter:{title:"\u5B8C\u6210\u5B9A\u4E49",layout:"cover",date:"2013/7/13 20:46:25"},index:38,start:852,end:864,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:u4,meta:{title:"\u5927\u7EB2\u7ED3\u6784",layout:"default",background:"https://www.utown.io/",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u5927\u7EB2\u7ED3\u6784
layout: default
background: https://www.utown.io/
date: 2013/7/13 20:46:25
---

<!--2\u3001\u5927\u7EB2-->
# **<center>\u5B8C\u6210\u5B9A\u4E49</center>**
<br>
<div grid="~ cols-4 gap-2" m="-t-2">

### <center>Dev</center>

### <center>Test/Beta</center>

### <center>Prod</center>

### <center>Prod_ID</center>


\`\`\`yaml


\uFF08\u5F00\u53D1\u73AF\u5883\uFF09

\u89E3\u51B3\u51B2\u7A81
\u6301\u7EED\u96C6\u6210


\`\`\`

\`\`\`yaml


\uFF08\u6D4B\u8BD5\u73AF\u5883\uFF09

\u529F\u80FD\u6D4B\u8BD5  
\u6548\u679C\u6D4B\u8BD5
	  
\`\`\`

\`\`\`yaml
	  
	  
\uFF08\u9884\u53D1\u5E03\u73AF\u5883\uFF09
\u5168\u91CF\u6D4B\u8BD5\u22652\u8F6E
\u9664\u201C\u4F4E\u201C\u4F18\u5148\u7EA7\u7F3A\u9677\u6E05\u7A7A
\u7F8E\u672F\u3001UI\u3001\u4EA7\u54C1\u9A8C\u6536
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
\uFF08\u751F\u4EA7\u73AF\u5883\uFF09
\u5168\u91CF\u6D4B\u8BD5\u22653\u8F6E
\u7F3A\u9677\u6E05\u7A7A
\u7F8E\u672F\u3001UI\u3001\u4EA7\u54C1\u9A8C\u6536
\`\`\`




</div>

`,title:"\u5927\u7EB2\u7ED3\u6784",level:1,content:`<!--2\u3001\u5927\u7EB2-->
# **<center>\u5B8C\u6210\u5B9A\u4E49</center>**
<br>
<div grid="~ cols-4 gap-2" m="-t-2">

### <center>Dev</center>

### <center>Test/Beta</center>

### <center>Prod</center>

### <center>Prod_ID</center>


\`\`\`yaml


\uFF08\u5F00\u53D1\u73AF\u5883\uFF09

\u89E3\u51B3\u51B2\u7A81
\u6301\u7EED\u96C6\u6210


\`\`\`

\`\`\`yaml


\uFF08\u6D4B\u8BD5\u73AF\u5883\uFF09

\u529F\u80FD\u6D4B\u8BD5  
\u6548\u679C\u6D4B\u8BD5
	  
\`\`\`

\`\`\`yaml
	  
	  
\uFF08\u9884\u53D1\u5E03\u73AF\u5883\uFF09
\u5168\u91CF\u6D4B\u8BD5\u22652\u8F6E
\u9664\u201C\u4F4E\u201C\u4F18\u5148\u7EA7\u7F3A\u9677\u6E05\u7A7A
\u7F8E\u672F\u3001UI\u3001\u4EA7\u54C1\u9A8C\u6536
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
\uFF08\u751F\u4EA7\u73AF\u5883\uFF09
\u5168\u91CF\u6D4B\u8BD5\u22653\u8F6E
\u7F3A\u9677\u6E05\u7A7A
\u7F8E\u672F\u3001UI\u3001\u4EA7\u54C1\u9A8C\u6536
\`\`\`




</div>`,frontmatter:{title:"\u5927\u7EB2\u7ED3\u6784",layout:"default",background:"https://www.utown.io/",date:"2013/7/13 20:46:25"},index:39,start:864,end:933,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:d4,meta:{title:"\u5C55\u671B\u5C01\u9762",layout:"cover",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u5C55\u671B\u5C01\u9762
layout: cover

date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C55\u671B\u5C01\u9762-->

# **<center>Outlook</center>**
~~\u9E21\u6C64~~    \u5C55\u671B

`,title:"\u5C55\u671B\u5C01\u9762",level:1,content:`<!--1\u3001\u5C55\u671B\u5C01\u9762-->

# **<center>Outlook</center>**
~~\u9E21\u6C64~~    \u5C55\u671B`,frontmatter:{title:"\u5C55\u671B\u5C01\u9762",layout:"cover",date:"2013/7/13 20:46:25"},index:40,start:933,end:946,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:w4,meta:{title:"\u5C55\u671B",layout:"image-right",image:"https://img-blog.csdnimg.cn/24bd2c170bf44c17a968658bef6263ae.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u5C55\u671B
layout: image-right
image: https://img-blog.csdnimg.cn/24bd2c170bf44c17a968658bef6263ae.png
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# <center>Outlook</center>
<br>
<center>FT\u7EC4\u7EC7</center>

-- \u4EA7\u54C1\u4FA7\uFF1A\u6C89\u6DC0\u957F\u671F\u7A33\u5B9A\u7684\u7279\u6027\u89C4\u5212\uFF0C\u5168\u5C40\u4E1A\u52A1\u89C6\u89D2
<br>
<br>
--\u5F00\u53D1\u4FA7\uFF1A\u7A33\u5B9A\u7684\u3001\u9AD8\u8D28\u91CF\u7684CI/CD
<br>
<br>

--\u6D4B\u8BD5\u4FA7\uFF1AATDD\uFF08\u9A8C\u6536\u6D4B\u8BD5\u9A71\u52A8\u5F00\u53D1\uFF09
<br>
<br>

--PMO\u4FA7\uFF1A\u6700\u5927\u5316\u7EC4\u7EC7\u6548\u7387
<br>
<br>

--All team\uFF1A\u6210\u957F\u4E3A\u201C\u4E13\u5BB6\u201D\uFF08\u6DF1\u8015\u6280\u672F&\u719F\u7A14\u4E1A\u52A1\uFF09

`,title:"\u5C55\u671B",level:1,content:`<!--1\u3001\u5C01\u9762-->

# <center>Outlook</center>
<br>
<center>FT\u7EC4\u7EC7</center>

-- \u4EA7\u54C1\u4FA7\uFF1A\u6C89\u6DC0\u957F\u671F\u7A33\u5B9A\u7684\u7279\u6027\u89C4\u5212\uFF0C\u5168\u5C40\u4E1A\u52A1\u89C6\u89D2
<br>
<br>
--\u5F00\u53D1\u4FA7\uFF1A\u7A33\u5B9A\u7684\u3001\u9AD8\u8D28\u91CF\u7684CI/CD
<br>
<br>

--\u6D4B\u8BD5\u4FA7\uFF1AATDD\uFF08\u9A8C\u6536\u6D4B\u8BD5\u9A71\u52A8\u5F00\u53D1\uFF09
<br>
<br>

--PMO\u4FA7\uFF1A\u6700\u5927\u5316\u7EC4\u7EC7\u6548\u7387
<br>
<br>

--All team\uFF1A\u6210\u957F\u4E3A\u201C\u4E13\u5BB6\u201D\uFF08\u6DF1\u8015\u6280\u672F&\u719F\u7A14\u4E1A\u52A1\uFF09`,frontmatter:{title:"\u5C55\u671B",layout:"image-right",image:"https://img-blog.csdnimg.cn/24bd2c170bf44c17a968658bef6263ae.png",date:"2013/7/13 20:46:25"},index:41,start:946,end:977,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:A4,meta:{title:"\u5C55\u671B",layout:"end",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u5C55\u671B
layout: end
background: https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->
`,title:"\u5C55\u671B",level:1,content:"",frontmatter:{title:"\u5C55\u671B",layout:"end",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"},note:"1\u3001\u5C01\u9762",index:42,start:977,end:985,notesHTML:`<p>1\u3001\u5C01\u9762</p>
`,filepath:"/Users/ios/markdown_ppt/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",component:Dp,meta:{layout:"end"}}];const je=x4,C4=[{name:"play",path:"/",component:vv,children:[...je]},{name:"print",path:"/print",component:Cv},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>hs(()=>import("./Presenter.571d62dc.js"),["assets/Presenter.571d62dc.js","assets/Presenter.c3f07bd1.css","assets/DrawingControls.303ef2b1.js"]),beforeEnter:e=>{if(!$n.remote||$n.remote===e.query.password)return!0;if($n.remote&&e.query.password===void 0){const t=prompt("Enter password");if($n.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],vt=o0({history:A1("/redis_intro/"),routes:C4});function k4(e,t,{mode:n="replace"}={}){return B({get(){const l=vt.currentRoute.value.query[e];return l==null?t!=null?t:null:Array.isArray(l)?l.filter(Boolean):l},set(l){Ye(()=>{vt[v(n)]({query:et(we({},vt.currentRoute.value.query),{[e]:l})})})}})}const Ip=q(0);Ye(()=>{vt.afterEach(async()=>{await Ye(),Ip.value+=1})});const Jt=B(()=>vt.currentRoute.value),ga=B(()=>Jt.value.query.print!==void 0),$4=B(()=>Jt.value.query.print==="clicks"),Kt=B(()=>Jt.value.query.embedded!==void 0),jt=B(()=>Jt.value.path.startsWith("/presenter")),js=B(()=>ga.value&&!$4.value),Eo=B(()=>Jt.value.query.password),E4=B(()=>!jt.value&&(!Ce.remote||Eo.value===Ce.remote)),dc=k4("clicks","0"),Fp=B(()=>je.length-1),B4=B(()=>Jt.value.path),He=B(()=>parseInt(B4.value.split(/\//g).slice(-1)[0])||1);B(()=>hr(He.value));const ht=B(()=>je.find(e=>e.path===`${He.value}`));B(()=>{var e,t,n;return(n=(t=(e=ht.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});B(()=>{var e,t;return(t=(e=ht.value)==null?void 0:e.meta)==null?void 0:t.layout});const Ir=B(()=>je.find(e=>e.path===`${Math.min(je.length,He.value+1)}`)),O4=B(()=>{var e,t;return Ip.value,((t=(e=ht.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Lt=B({get(){if(js.value)return 99999;let e=+(dc.value||0);return isNaN(e)&&(e=0),e},set(e){dc.value=e.toString()}}),ql=B(()=>{var e,t,n;return+((n=(t=(e=ht.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?n:O4.value.length)}),D4=B(()=>He.value<je.length-1||Lt.value<ql.value),P4=B(()=>He.value>1||Lt.value>0),S4=B(()=>je.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(ya(e,t),e),[])),M4=B(()=>_a(S4.value,ht.value));B(()=>va(M4.value));function pn(){ql.value<=Lt.value?nl():Lt.value+=1}async function fn(){Lt.value<=0?await sl():Lt.value-=1}function hr(e){return jt.value?`/presenter/${e}`:`/${e}`}function nl(){const e=Math.min(je.length,He.value+1);return us(e)}async function sl(e=!0){const t=Math.max(1,He.value-1);await us(t),e&&ql.value&&vt.replace({query:et(we({},Jt.value.query),{clicks:ql.value})})}function us(e,t){return vt.push({path:hr(e),query:et(we({},Jt.value.query),{clicks:t})})}function T4(e){const t=q(0),{direction:n,distanceX:l,distanceY:r}=Jg(e,{onSwipeStart(o){o.pointerType==="touch"&&(Qs.value||(t.value=ho()))},onSwipeEnd(o){if(o.pointerType!=="touch"||!t.value||Qs.value)return;const a=Math.abs(l.value),i=Math.abs(r.value);a/window.innerWidth>.3||a>100?n.value===Zt.LEFT?pn():fn():(i/window.innerHeight>.4||i>200)&&(n.value===Zt.DOWN?sl():nl())}})}async function Bo(){const{saveAs:e}=await hs(()=>import("./FileSaver.min.4f92ed14.js").then(function(t){return t.F}),[]);e(qu(Ce.download)?Ce.download:Ce.exportFilename?`${Ce.exportFilename}.pdf`:"/redis_intro/slidev-exported.pdf",`${Ce.title}.pdf`)}async function L4(e){var t,n;if(e==null){const l=(n=(t=ht.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(l!=null&&l.filepath))return!1;e=`${l.filepath}:${l.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function ya(e,t,n=1){var r,o,a,i,c;const l=(o=(r=t.meta)==null?void 0:r.slide)==null?void 0:o.level;l&&l>n&&e.length>0?ya(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((a=t.meta)==null?void 0:a.hideInToc),title:(c=(i=t.meta)==null?void 0:i.slide)==null?void 0:c.title})}function _a(e,t,n=!1,l){return e.map(r=>{const o=et(we({},r),{active:r.path===(t==null?void 0:t.path),hasActiveParent:n});return o.children.length>0&&(o.children=_a(o.children,t,o.active||o.hasActiveParent,o)),l&&(o.active||o.activeParent)&&(l.activeParent=!0),o})}function va(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>et(we({},n),{children:va(n.children,t+1)}))}function R4(){const e=Ce.titleTemplate.replace("%s",Ce.title||"Slidev");km({title:e}),Lm(`${e} - shared`),Nm(`${e} - drawings`);function t(){jt.value&&(bi("page",+He.value),bi("clicks",Lt.value))}vt.afterEach(t),pe(Lt,t),Rm(n=>{(+n.page!=+He.value||Lt.value!==n.clicks)&&vt.replace({path:hr(n.page),query:et(we({},vt.currentRoute.value.query),{clicks:n.clicks||0})})})}const I4=ye({name:"App",setup(e){return I(U),R4(),(t,n)=>{const l=Ke("RouterView"),r=Ke("StarportCarrier");return A(),z(ke,null,[S(l),S(r)],64)}}});function Fr(e){return e!==null&&typeof e=="object"}function Oo(e,t,n=".",l){if(!Fr(t))return Oo(e,{},n,l);const r=Object.assign({},t);for(const o in e){if(o==="__proto__"||o==="constructor")continue;const a=e[o];a!=null&&(l&&l(r,o,a,n)||(Array.isArray(a)&&Array.isArray(r[o])?r[o]=a.concat(r[o]):Fr(a)&&Fr(r[o])?r[o]=Oo(a,r[o],(n?`${n}.`:"")+o.toString(),l):r[o]=a))}return r}function F4(e){return(...t)=>t.reduce((n,l)=>Oo(n,l,"",e),{})}const N4=F4(),Np=1/60*1e3,j4=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),jp=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(j4()),Np);function H4(e){let t=[],n=[],l=0,r=!1,o=!1;const a=new WeakSet,i={schedule:(c,p=!1,f=!1)=>{const h=f&&r,d=h?t:n;return p&&a.add(c),d.indexOf(c)===-1&&(d.push(c),h&&r&&(l=t.length)),c},cancel:c=>{const p=n.indexOf(c);p!==-1&&n.splice(p,1),a.delete(c)},process:c=>{if(r){o=!0;return}if(r=!0,[t,n]=[n,t],n.length=0,l=t.length,l)for(let p=0;p<l;p++){const f=t[p];f(c),a.has(f)&&(i.schedule(f),e())}r=!1,o&&(o=!1,i.process(c))}};return i}const U4=40;let Do=!0,ll=!1,Po=!1;const rs={delta:0,timestamp:0},ul=["read","update","preRender","render","postRender"],mr=ul.reduce((e,t)=>(e[t]=H4(()=>ll=!0),e),{}),hc=ul.reduce((e,t)=>{const n=mr[t];return e[t]=(l,r=!1,o=!1)=>(ll||W4(),n.schedule(l,r,o)),e},{});ul.reduce((e,t)=>(e[t]=mr[t].cancel,e),{});ul.reduce((e,t)=>(e[t]=()=>mr[t].process(rs),e),{});const V4=e=>mr[e].process(rs),Hp=e=>{ll=!1,rs.delta=Do?Np:Math.max(Math.min(e-rs.timestamp,U4),1),rs.timestamp=e,Po=!0,ul.forEach(V4),Po=!1,ll&&(Do=!1,jp(Hp))},W4=()=>{ll=!0,Do=!0,Po||jp(Hp)},z4=()=>rs;function Up(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]]);return n}var K4=function(){},mc=function(){};const So=(e,t,n)=>Math.min(Math.max(n,e),t),Nr=.001,q4=.01,gc=10,Y4=.05,Z4=1;function G4({duration:e=800,bounce:t=.25,velocity:n=0,mass:l=1}){let r,o;K4(e<=gc*1e3);let a=1-t;a=So(Y4,Z4,a),e=So(q4,gc,e/1e3),a<1?(r=p=>{const f=p*a,h=f*e,d=f-n,m=Mo(p,a),y=Math.exp(-h);return Nr-d/m*y},o=p=>{const h=p*a*e,d=h*n+n,m=Math.pow(a,2)*Math.pow(p,2)*e,y=Math.exp(-h),w=Mo(Math.pow(p,2),a);return(-r(p)+Nr>0?-1:1)*((d-m)*y)/w}):(r=p=>{const f=Math.exp(-p*e),h=(p-n)*e+1;return-Nr+f*h},o=p=>{const f=Math.exp(-p*e),h=(n-p)*(e*e);return f*h});const i=5/e,c=J4(r,o,i);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const p=Math.pow(c,2)*l;return{stiffness:p,damping:a*2*Math.sqrt(l*p),duration:e}}}const X4=12;function J4(e,t,n){let l=n;for(let r=1;r<X4;r++)l=l-e(l)/t(l);return l}function Mo(e,t){return e*Math.sqrt(1-t*t)}const Q4=["duration","bounce"],ew=["stiffness","damping","mass"];function yc(e,t){return t.some(n=>e[n]!==void 0)}function tw(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!yc(e,ew)&&yc(e,Q4)){const n=G4(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function ba(e){var{from:t=0,to:n=1,restSpeed:l=2,restDelta:r}=e,o=Up(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:i,damping:c,mass:p,velocity:f,duration:h,isResolvedFromDuration:d}=tw(o),m=_c,y=_c;function w(){const b=f?-(f/1e3):0,$=n-t,C=c/(2*Math.sqrt(i*p)),k=Math.sqrt(i/p)/1e3;if(r===void 0&&(r=Math.min(Math.abs(n-t)/100,.4)),C<1){const E=Mo(k,C);m=j=>{const L=Math.exp(-C*k*j);return n-L*((b+C*k*$)/E*Math.sin(E*j)+$*Math.cos(E*j))},y=j=>{const L=Math.exp(-C*k*j);return C*k*L*(Math.sin(E*j)*(b+C*k*$)/E+$*Math.cos(E*j))-L*(Math.cos(E*j)*(b+C*k*$)-E*$*Math.sin(E*j))}}else if(C===1)m=E=>n-Math.exp(-k*E)*($+(b+k*$)*E);else{const E=k*Math.sqrt(C*C-1);m=j=>{const L=Math.exp(-C*k*j),Y=Math.min(E*j,300);return n-L*((b+C*k*$)*Math.sinh(Y)+E*$*Math.cosh(Y))/E}}}return w(),{next:b=>{const $=m(b);if(d)a.done=b>=h;else{const C=y(b)*1e3,k=Math.abs(C)<=l,E=Math.abs(n-$)<=r;a.done=k&&E}return a.value=a.done?n:$,a},flipTarget:()=>{f=-f,[t,n]=[n,t],w()}}}ba.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const _c=e=>0,Vp=(e,t,n)=>{const l=t-e;return l===0?1:(n-e)/l},wa=(e,t,n)=>-n*e+n*t+e,Wp=(e,t)=>n=>Math.max(Math.min(n,t),e),Hs=e=>e%1?Number(e.toFixed(5)):e,Yl=/(-)?([\d]*\.?[\d])+/g,To=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,nw=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function pl(e){return typeof e=="string"}const gr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},zp=Object.assign(Object.assign({},gr),{transform:Wp(0,1)});Object.assign(Object.assign({},gr),{default:1});const sw=e=>({test:t=>pl(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Us=sw("%");Object.assign(Object.assign({},Us),{parse:e=>Us.parse(e)/100,transform:e=>Us.transform(e*100)});const Aa=(e,t)=>n=>Boolean(pl(n)&&nw.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Kp=(e,t,n)=>l=>{if(!pl(l))return l;const[r,o,a,i]=l.match(Yl);return{[e]:parseFloat(r),[t]:parseFloat(o),[n]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},Bn={test:Aa("hsl","hue"),parse:Kp("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:l=1})=>"hsla("+Math.round(e)+", "+Us.transform(Hs(t))+", "+Us.transform(Hs(n))+", "+Hs(zp.transform(l))+")"},lw=Wp(0,255),jr=Object.assign(Object.assign({},gr),{transform:e=>Math.round(lw(e))}),rn={test:Aa("rgb","red"),parse:Kp("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:l=1})=>"rgba("+jr.transform(e)+", "+jr.transform(t)+", "+jr.transform(n)+", "+Hs(zp.transform(l))+")"};function rw(e){let t="",n="",l="",r="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),l=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),l=e.substr(3,1),r=e.substr(4,1),t+=t,n+=n,l+=l,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(l,16),alpha:r?parseInt(r,16)/255:1}}const Lo={test:Aa("#"),parse:rw,transform:rn.transform},yr={test:e=>rn.test(e)||Lo.test(e)||Bn.test(e),parse:e=>rn.test(e)?rn.parse(e):Bn.test(e)?Bn.parse(e):Lo.parse(e),transform:e=>pl(e)?e:e.hasOwnProperty("red")?rn.transform(e):Bn.transform(e)},qp="${c}",Yp="${n}";function ow(e){var t,n,l,r;return isNaN(e)&&pl(e)&&((n=(t=e.match(Yl))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((r=(l=e.match(To))===null||l===void 0?void 0:l.length)!==null&&r!==void 0?r:0)>0}function Zp(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const l=e.match(To);l&&(n=l.length,e=e.replace(To,qp),t.push(...l.map(yr.parse)));const r=e.match(Yl);return r&&(e=e.replace(Yl,Yp),t.push(...r.map(gr.parse))),{values:t,numColors:n,tokenised:e}}function Gp(e){return Zp(e).values}function Xp(e){const{values:t,numColors:n,tokenised:l}=Zp(e),r=t.length;return o=>{let a=l;for(let i=0;i<r;i++)a=a.replace(i<n?qp:Yp,i<n?yr.transform(o[i]):Hs(o[i]));return a}}const aw=e=>typeof e=="number"?0:e;function iw(e){const t=Gp(e);return Xp(e)(t.map(aw))}const Jp={test:ow,parse:Gp,createTransformer:Xp,getAnimatableNone:iw};function Hr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function vc({hue:e,saturation:t,lightness:n,alpha:l}){e/=360,t/=100,n/=100;let r=0,o=0,a=0;if(!t)r=o=a=n;else{const i=n<.5?n*(1+t):n+t-n*t,c=2*n-i;r=Hr(c,i,e+1/3),o=Hr(c,i,e),a=Hr(c,i,e-1/3)}return{red:Math.round(r*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:l}}const cw=(e,t,n)=>{const l=e*e,r=t*t;return Math.sqrt(Math.max(0,n*(r-l)+l))},uw=[Lo,rn,Bn],bc=e=>uw.find(t=>t.test(e)),Qp=(e,t)=>{let n=bc(e),l=bc(t),r=n.parse(e),o=l.parse(t);n===Bn&&(r=vc(r),n=rn),l===Bn&&(o=vc(o),l=rn);const a=Object.assign({},r);return i=>{for(const c in a)c!=="alpha"&&(a[c]=cw(r[c],o[c],i));return a.alpha=wa(r.alpha,o.alpha,i),n.transform(a)}},pw=e=>typeof e=="number",fw=(e,t)=>n=>t(e(n)),ef=(...e)=>e.reduce(fw);function tf(e,t){return pw(e)?n=>wa(e,t,n):yr.test(e)?Qp(e,t):sf(e,t)}const nf=(e,t)=>{const n=[...e],l=n.length,r=e.map((o,a)=>tf(o,t[a]));return o=>{for(let a=0;a<l;a++)n[a]=r[a](o);return n}},dw=(e,t)=>{const n=Object.assign(Object.assign({},e),t),l={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(l[r]=tf(e[r],t[r]));return r=>{for(const o in l)n[o]=l[o](r);return n}};function wc(e){const t=Jp.parse(e),n=t.length;let l=0,r=0,o=0;for(let a=0;a<n;a++)l||typeof t[a]=="number"?l++:t[a].hue!==void 0?o++:r++;return{parsed:t,numNumbers:l,numRGB:r,numHSL:o}}const sf=(e,t)=>{const n=Jp.createTransformer(t),l=wc(e),r=wc(t);return l.numHSL===r.numHSL&&l.numRGB===r.numRGB&&l.numNumbers>=r.numNumbers?ef(nf(l.parsed,r.parsed),n):a=>`${a>0?t:e}`},hw=(e,t)=>n=>wa(e,t,n);function mw(e){if(typeof e=="number")return hw;if(typeof e=="string")return yr.test(e)?Qp:sf;if(Array.isArray(e))return nf;if(typeof e=="object")return dw}function gw(e,t,n){const l=[],r=n||mw(e[0]),o=e.length-1;for(let a=0;a<o;a++){let i=r(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]:t;i=ef(c,i)}l.push(i)}return l}function yw([e,t],[n]){return l=>n(Vp(e,t,l))}function _w(e,t){const n=e.length,l=n-1;return r=>{let o=0,a=!1;if(r<=e[0]?a=!0:r>=e[l]&&(o=l-1,a=!0),!a){let c=1;for(;c<n&&!(e[c]>r||c===l);c++);o=c-1}const i=Vp(e[o],e[o+1],r);return t[o](i)}}function lf(e,t,{clamp:n=!0,ease:l,mixer:r}={}){const o=e.length;mc(o===t.length),mc(!l||!Array.isArray(l)||l.length===o-1),e[0]>e[o-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const a=gw(t,l,r),i=o===2?yw(e,a):_w(e,a);return n?c=>i(So(e[0],e[o-1],c)):i}const _r=e=>t=>1-e(1-t),xa=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,vw=e=>t=>Math.pow(t,e),rf=e=>t=>t*t*((e+1)*t-e),bw=e=>{const t=rf(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},of=1.525,ww=4/11,Aw=8/11,xw=9/10,af=e=>e,Ca=vw(2),Cw=_r(Ca),cf=xa(Ca),uf=e=>1-Math.sin(Math.acos(e)),pf=_r(uf),kw=xa(pf),ka=rf(of),$w=_r(ka),Ew=xa(ka),Bw=bw(of),Ow=4356/361,Dw=35442/1805,Pw=16061/1805,Zl=e=>{if(e===1||e===0)return e;const t=e*e;return e<ww?7.5625*t:e<Aw?9.075*t-9.9*e+3.4:e<xw?Ow*t-Dw*e+Pw:10.8*e*e-20.52*e+10.72},Sw=_r(Zl),Mw=e=>e<.5?.5*(1-Zl(1-e*2)):.5*Zl(e*2-1)+.5;function Tw(e,t){return e.map(()=>t||cf).splice(0,e.length-1)}function Lw(e){const t=e.length;return e.map((n,l)=>l!==0?l/(t-1):0)}function Rw(e,t){return e.map(n=>n*t)}function Ml({from:e=0,to:t=1,ease:n,offset:l,duration:r=300}){const o={done:!1,value:e},a=Array.isArray(t)?t:[e,t],i=Rw(l&&l.length===a.length?l:Lw(a),r);function c(){return lf(i,a,{ease:Array.isArray(n)?n:Tw(a,n)})}let p=c();return{next:f=>(o.value=p(f),o.done=f>=r,o),flipTarget:()=>{a.reverse(),p=c()}}}function Iw({velocity:e=0,from:t=0,power:n=.8,timeConstant:l=350,restDelta:r=.5,modifyTarget:o}){const a={done:!1,value:t};let i=n*e;const c=t+i,p=o===void 0?c:o(c);return p!==c&&(i=p-t),{next:f=>{const h=-i*Math.exp(-f/l);return a.done=!(h>r||h<-r),a.value=a.done?p:p+h,a},flipTarget:()=>{}}}const Ac={keyframes:Ml,spring:ba,decay:Iw};function Fw(e){if(Array.isArray(e.to))return Ml;if(Ac[e.type])return Ac[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Ml:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?ba:Ml}const ff=1/60*1e3,Nw=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),df=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(Nw()),ff);function jw(e){let t=[],n=[],l=0,r=!1,o=!1;const a=new WeakSet,i={schedule:(c,p=!1,f=!1)=>{const h=f&&r,d=h?t:n;return p&&a.add(c),d.indexOf(c)===-1&&(d.push(c),h&&r&&(l=t.length)),c},cancel:c=>{const p=n.indexOf(c);p!==-1&&n.splice(p,1),a.delete(c)},process:c=>{if(r){o=!0;return}if(r=!0,[t,n]=[n,t],n.length=0,l=t.length,l)for(let p=0;p<l;p++){const f=t[p];f(c),a.has(f)&&(i.schedule(f),e())}r=!1,o&&(o=!1,i.process(c))}};return i}const Hw=40;let Ro=!0,rl=!1,Io=!1;const os={delta:0,timestamp:0},fl=["read","update","preRender","render","postRender"],vr=fl.reduce((e,t)=>(e[t]=jw(()=>rl=!0),e),{}),Uw=fl.reduce((e,t)=>{const n=vr[t];return e[t]=(l,r=!1,o=!1)=>(rl||zw(),n.schedule(l,r,o)),e},{}),Vw=fl.reduce((e,t)=>(e[t]=vr[t].cancel,e),{});fl.reduce((e,t)=>(e[t]=()=>vr[t].process(os),e),{});const Ww=e=>vr[e].process(os),hf=e=>{rl=!1,os.delta=Ro?ff:Math.max(Math.min(e-os.timestamp,Hw),1),os.timestamp=e,Io=!0,fl.forEach(Ww),Io=!1,rl&&(Ro=!1,df(hf))},zw=()=>{rl=!0,Ro=!0,Io||df(hf)},Kw=()=>os;function mf(e,t,n=0){return e-t-n}function qw(e,t,n=0,l=!0){return l?mf(t+-e,t,n):t-(e-t)+n}function Yw(e,t,n,l){return l?e>=t+n:e<=-n}const Zw=e=>{const t=({delta:n})=>e(n);return{start:()=>Uw.update(t,!0),stop:()=>Vw.update(t)}};function gf(e){var t,n,{from:l,autoplay:r=!0,driver:o=Zw,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:p=0,onPlay:f,onStop:h,onComplete:d,onRepeat:m,onUpdate:y}=e,w=Up(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:b}=w,$,C=0,k=w.duration,E,j=!1,L=!0,Y;const ae=Fw(w);!((n=(t=ae).needsInterpolation)===null||n===void 0)&&n.call(t,l,b)&&(Y=lf([0,100],[l,b],{clamp:!1}),l=0,b=100);const fe=ae(Object.assign(Object.assign({},w),{from:l,to:b}));function he(){C++,c==="reverse"?(L=C%2===0,a=qw(a,k,p,L)):(a=mf(a,k,p),c==="mirror"&&fe.flipTarget()),j=!1,m&&m()}function _e(){$.stop(),d&&d()}function Te(Ze){if(L||(Ze=-Ze),a+=Ze,!j){const $e=fe.next(Math.max(0,a));E=$e.value,Y&&(E=Y(E)),j=L?$e.done:a<=0}y==null||y(E),j&&(C===0&&(k!=null||(k=a)),C<i?Yw(a,k,p,L)&&he():_e())}function Fe(){f==null||f(),$=o(Te),$.start()}return r&&Fe(),{stop:()=>{h==null||h(),$.stop()}}}function yf(e,t){return t?e*(1e3/t):0}function Gw({from:e=0,velocity:t=0,min:n,max:l,power:r=.8,timeConstant:o=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:p,driver:f,onUpdate:h,onComplete:d,onStop:m}){let y;function w(k){return n!==void 0&&k<n||l!==void 0&&k>l}function b(k){return n===void 0?l:l===void 0||Math.abs(n-k)<Math.abs(l-k)?n:l}function $(k){y==null||y.stop(),y=gf(Object.assign(Object.assign({},k),{driver:f,onUpdate:E=>{var j;h==null||h(E),(j=k.onUpdate)===null||j===void 0||j.call(k,E)},onComplete:d,onStop:m}))}function C(k){$(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},k))}if(w(e))C({from:e,velocity:t,to:b(e)});else{let k=r*t+e;typeof p!="undefined"&&(k=p(k));const E=b(k),j=E===n?-1:1;let L,Y;const ae=fe=>{L=Y,Y=fe,t=yf(fe-L,Kw().delta),(j===1&&fe>E||j===-1&&fe<E)&&C({from:fe,to:E,velocity:t})};$({type:"decay",from:e,velocity:t,timeConstant:o,power:r,restDelta:c,modifyTarget:p,onUpdate:w(k)?ae:void 0})}return{stop:()=>y==null?void 0:y.stop()}}const _f=(e,t)=>1-3*t+3*e,vf=(e,t)=>3*t-6*e,bf=e=>3*e,Gl=(e,t,n)=>((_f(t,n)*e+vf(t,n))*e+bf(t))*e,wf=(e,t,n)=>3*_f(t,n)*e*e+2*vf(t,n)*e+bf(t),Xw=1e-7,Jw=10;function Qw(e,t,n,l,r){let o,a,i=0;do a=t+(n-t)/2,o=Gl(a,l,r)-e,o>0?n=a:t=a;while(Math.abs(o)>Xw&&++i<Jw);return a}const e5=8,t5=.001;function n5(e,t,n,l){for(let r=0;r<e5;++r){const o=wf(t,n,l);if(o===0)return t;t-=(Gl(t,n,l)-e)/o}return t}const Tl=11,Cl=1/(Tl-1);function s5(e,t,n,l){if(e===t&&n===l)return af;const r=new Float32Array(Tl);for(let a=0;a<Tl;++a)r[a]=Gl(a*Cl,e,n);function o(a){let i=0,c=1;const p=Tl-1;for(;c!==p&&r[c]<=a;++c)i+=Cl;--c;const f=(a-r[c])/(r[c+1]-r[c]),h=i+f*Cl,d=wf(h,e,n);return d>=t5?n5(a,h,e,n):d===0?h:Qw(a,i,i+Cl,e,n)}return a=>a===0||a===1?a:Gl(o(a),t,l)}const Af=(e,t)=>n=>Math.max(Math.min(n,t),e),Vs=e=>e%1?Number(e.toFixed(5)):e,ol=/(-)?([\d]*\.?[\d])+/g,Fo=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,l5=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function dl(e){return typeof e=="string"}const hl={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ws=Object.assign(Object.assign({},hl),{transform:Af(0,1)}),kl=Object.assign(Object.assign({},hl),{default:1}),$a=e=>({test:t=>dl(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),_n=$a("deg"),zs=$a("%"),ie=$a("px"),xc=Object.assign(Object.assign({},zs),{parse:e=>zs.parse(e)/100,transform:e=>zs.transform(e*100)}),Ea=(e,t)=>n=>Boolean(dl(n)&&l5.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),xf=(e,t,n)=>l=>{if(!dl(l))return l;const[r,o,a,i]=l.match(ol);return{[e]:parseFloat(r),[t]:parseFloat(o),[n]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},$l={test:Ea("hsl","hue"),parse:xf("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:l=1})=>"hsla("+Math.round(e)+", "+zs.transform(Vs(t))+", "+zs.transform(Vs(n))+", "+Vs(Ws.transform(l))+")"},r5=Af(0,255),Ur=Object.assign(Object.assign({},hl),{transform:e=>Math.round(r5(e))}),Ds={test:Ea("rgb","red"),parse:xf("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:l=1})=>"rgba("+Ur.transform(e)+", "+Ur.transform(t)+", "+Ur.transform(n)+", "+Vs(Ws.transform(l))+")"};function o5(e){let t="",n="",l="",r="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),l=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),l=e.substr(3,1),r=e.substr(4,1),t+=t,n+=n,l+=l,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(l,16),alpha:r?parseInt(r,16)/255:1}}const Cc={test:Ea("#"),parse:o5,transform:Ds.transform},Ct={test:e=>Ds.test(e)||Cc.test(e)||$l.test(e),parse:e=>Ds.test(e)?Ds.parse(e):$l.test(e)?$l.parse(e):Cc.parse(e),transform:e=>dl(e)?e:e.hasOwnProperty("red")?Ds.transform(e):$l.transform(e)},Cf="${c}",kf="${n}";function a5(e){var t,n,l,r;return isNaN(e)&&dl(e)&&((n=(t=e.match(ol))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((r=(l=e.match(Fo))===null||l===void 0?void 0:l.length)!==null&&r!==void 0?r:0)>0}function $f(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const l=e.match(Fo);l&&(n=l.length,e=e.replace(Fo,Cf),t.push(...l.map(Ct.parse)));const r=e.match(ol);return r&&(e=e.replace(ol,kf),t.push(...r.map(hl.parse))),{values:t,numColors:n,tokenised:e}}function Ef(e){return $f(e).values}function Bf(e){const{values:t,numColors:n,tokenised:l}=$f(e),r=t.length;return o=>{let a=l;for(let i=0;i<r;i++)a=a.replace(i<n?Cf:kf,i<n?Ct.transform(o[i]):Vs(o[i]));return a}}const i5=e=>typeof e=="number"?0:e;function c5(e){const t=Ef(e);return Bf(e)(t.map(i5))}const Ba={test:a5,parse:Ef,createTransformer:Bf,getAnimatableNone:c5},u5=new Set(["brightness","contrast","saturate","opacity"]);function p5(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[l]=n.match(ol)||[];if(!l)return e;const r=n.replace(l,"");let o=u5.has(t)?1:0;return l!==n&&(o*=100),t+"("+o+r+")"}const f5=/([a-z-]*)\(.*?\)/g,No=Object.assign(Object.assign({},Ba),{getAnimatableNone:e=>{const t=e.match(f5);return t?t.map(p5).join(" "):e}}),Vr={};class d5{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,l){if(!!this.subscriptions.size)for(const r of this.subscriptions)r(t,n,l)}clear(){this.subscriptions.clear()}}const kc=e=>!isNaN(parseFloat(e));class h5{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new d5,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:l,timestamp:r}=z4();this.lastUpdated!==r&&(this.timeDelta=l,this.lastUpdated=r),hc.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>hc.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=kc(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=kc(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?yf(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:l}=t(n);this.stopAnimation=l}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function m5(e){return new h5(e)}const{isArray:g5}=Array;function y5(){const e=q({}),t=l=>{const r=o=>{!e.value[o]||(e.value[o].stop(),e.value[o].destroy(),Vm(e.value,o))};l?g5(l)?l.forEach(r):r(l):Object.keys(e.value).forEach(r)},n=(l,r,o)=>{if(e.value[l])return e.value[l];const a=m5(r);return a.onChange(i=>{it(o,l,i)}),it(e.value,l,a),a};return oa(t),{motionValues:e,get:n,stop:t}}const _5=e=>Array.isArray(e),vn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Wr=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),v5=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),zr=()=>({type:"keyframes",ease:"linear",duration:300}),b5=e=>({type:"keyframes",duration:800,values:e}),$c={default:v5,x:vn,y:vn,z:vn,rotate:vn,rotateX:vn,rotateY:vn,rotateZ:vn,scaleX:Wr,scaleY:Wr,scale:Wr,backgroundColor:zr,color:zr,opacity:zr},Of=(e,t)=>{let n;return _5(t)?n=b5:n=$c[e]||$c.default,we({to:t},n(t))},Ec=et(we({},hl),{transform:Math.round}),Df={color:Ct,backgroundColor:Ct,outlineColor:Ct,fill:Ct,stroke:Ct,borderColor:Ct,borderTopColor:Ct,borderRightColor:Ct,borderBottomColor:Ct,borderLeftColor:Ct,borderWidth:ie,borderTopWidth:ie,borderRightWidth:ie,borderBottomWidth:ie,borderLeftWidth:ie,borderRadius:ie,radius:ie,borderTopLeftRadius:ie,borderTopRightRadius:ie,borderBottomRightRadius:ie,borderBottomLeftRadius:ie,width:ie,maxWidth:ie,height:ie,maxHeight:ie,size:ie,top:ie,right:ie,bottom:ie,left:ie,padding:ie,paddingTop:ie,paddingRight:ie,paddingBottom:ie,paddingLeft:ie,margin:ie,marginTop:ie,marginRight:ie,marginBottom:ie,marginLeft:ie,rotate:_n,rotateX:_n,rotateY:_n,rotateZ:_n,scale:kl,scaleX:kl,scaleY:kl,scaleZ:kl,skew:_n,skewX:_n,skewY:_n,distance:ie,translateX:ie,translateY:ie,translateZ:ie,x:ie,y:ie,z:ie,perspective:ie,transformPerspective:ie,opacity:Ws,originX:xc,originY:xc,originZ:ie,zIndex:Ec,filter:No,WebkitFilter:No,fillOpacity:Ws,strokeOpacity:Ws,numOctaves:Ec},Oa=e=>Df[e],Pf=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function w5(e,t){let n=Oa(e);return n!==No&&(n=Ba),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const A5={linear:af,easeIn:Ca,easeInOut:cf,easeOut:Cw,circIn:uf,circInOut:kw,circOut:pf,backIn:ka,backInOut:Ew,backOut:$w,anticipate:Bw,bounceIn:Sw,bounceInOut:Mw,bounceOut:Zl},Bc=e=>{if(Array.isArray(e)){const[t,n,l,r]=e;return s5(t,n,l,r)}else if(typeof e=="string")return A5[e];return e},x5=e=>Array.isArray(e)&&typeof e[0]!="number",Oc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Ba.test(t)&&!t.startsWith("url("));function C5(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function k5(r){var o=r,{ease:e,times:t,delay:n}=o,l=br(o,["ease","times","delay"]);const a=we({},l);return t&&(a.offset=t),e&&(a.ease=x5(e)?e.map(Bc):Bc(e)),n&&(a.elapsed=-n),a}function $5(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),C5(t),E5(e)||(e=we(we({},e),Of(n,t.to))),we(we({},t),k5(e))}function E5(a){var i=a,{delay:e,repeat:t,repeatType:n,repeatDelay:l,from:r}=i,o=br(i,["delay","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(o).length}function B5(e,t){return e[t]||e.default||e}function O5(e,t,n,l,r){const o=B5(l,e);let a=o.from===null||o.from===void 0?t.get():o.from;const i=Oc(e,n);a==="none"&&i&&typeof n=="string"&&(a=w5(e,n));const c=Oc(e,a);function p(h){const d={from:a,to:n,velocity:l.velocity?l.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return o.type==="inertia"||o.type==="decay"?Gw(we(we({},d),o)):gf(et(we({},$5(o,d,e)),{onUpdate:m=>{d.onUpdate(m),o.onUpdate&&o.onUpdate(m)},onComplete:()=>{l.onComplete&&l.onComplete(),r&&r(),h&&h()}}))}function f(h){return t.set(n),l.onComplete&&l.onComplete(),r&&r(),h&&h(),{stop:()=>{}}}return!c||!i||o.type===!1?f:p}function D5(){const{motionValues:e,stop:t,get:n}=y5();return{motionValues:e,stop:t,push:(r,o,a,i={},c)=>{const p=a[r],f=n(r,p,a);if(i&&i.immediate){f.set(o);return}const h=O5(r,f,o,i,c);f.start(h)}}}function P5(e,t={},{motionValues:n,push:l,stop:r}=D5()){const o=v(t),a=q(!1),i=pe(n,d=>{a.value=Object.values(d).filter(m=>m.isAnimating()).length>0},{immediate:!0,deep:!0}),c=d=>{if(!o||!o[d])throw new Error(`The variant ${d} does not exist.`);return o[d]},p=d=>(typeof d=="string"&&(d=c(d)),Promise.all(Object.entries(d).map(([m,y])=>{if(m!=="transition")return new Promise(w=>{l(m,y,e,d.transition||Of(m,d[m]),w)})}).filter(Boolean)));return{isAnimating:a,apply:p,set:d=>{const m=Ul(d)?d:c(d);Object.entries(m).forEach(([y,w])=>{y!=="transition"&&l(y,w,e,{immediate:!0})})},stopTransitions:()=>{i(),r()},leave:async d=>{let m;if(o&&(o.leave&&(m=o.leave),!o.leave&&o.initial&&(m=o.initial)),!m){d();return}await p(m),d()}}}const Da=typeof window!="undefined",S5=()=>Da&&window.onpointerdown===null,M5=()=>Da&&window.ontouchstart===null,T5=()=>Da&&window.onmousedown===null;function L5({target:e,state:t,variants:n,apply:l}){const r=v(n),o=[],a=(...y)=>{const w=Me.apply(null,y);return o.push(w),w},i=q(!1),c=q(!1),p=q(!1),f=B(()=>{let y=[];return r&&(r.hovered&&(y=[...y,...Object.keys(r.hovered)]),r.tapped&&(y=[...y,...Object.keys(r.tapped)]),r.focused&&(y=[...y,...Object.keys(r.focused)])),y}),h=B(()=>{const y={};Object.assign(y,t.value),i.value&&r.hovered&&Object.assign(y,r.hovered),c.value&&r.tapped&&Object.assign(y,r.tapped),p.value&&r.focused&&Object.assign(y,r.focused);for(const w in y)f.value.includes(w)||delete y[w];return y});r.hovered&&(a(e,"mouseenter",()=>{i.value=!0}),a(e,"mouseleave",()=>{i.value=!1,c.value=!1}),a(e,"mouseout",()=>{i.value=!1,c.value=!1})),r.tapped&&(T5()&&(a(e,"mousedown",()=>{c.value=!0}),a(e,"mouseup",()=>{c.value=!1})),S5()&&(a(e,"pointerdown",()=>{c.value=!0}),a(e,"pointerup",()=>{c.value=!1})),M5()&&(a(e,"touchstart",()=>{c.value=!0}),a(e,"touchend",()=>{c.value=!1}))),r.focused&&(a(e,"focus",()=>{p.value=!0}),a(e,"blur",()=>{p.value=!1}));const d=pe(h,l);return{stop:()=>{o.forEach(y=>y()),d()}}}function R5({set:e,target:t,variants:n,variant:l}){const r=v(n);return{stop:pe(()=>t,()=>{!r||(r.initial&&e("initial"),r.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}}function I5({state:e,apply:t}){return{stop:pe(e,l=>{l&&t(l)},{immediate:!0})}}function F5({target:e,variants:t,variant:n}){const l=v(t);let r=un;if(l&&(l.visible||l.visibleOnce)){const{stop:o}=Zg(e,([{isIntersecting:a}])=>{l.visible?a?n.value="visible":n.value="initial":l.visibleOnce&&(a?n.value!=="visibleOnce"&&(n.value="visibleOnce"):n.value||(n.value="initial"))});r=o}return{stop:r}}function N5(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const n=q([]);if(t.lifeCycleHooks){const{stop:r}=R5(e);n.value.push(r)}if(t.syncVariants){const{stop:r}=I5(e);n.value.push(r)}if(t.visibilityHooks){const{stop:r}=F5(e);n.value.push(r)}if(t.eventListeners){const{stop:r}=L5(e);n.value.push(r)}const l=()=>n.value.forEach(r=>r());return oa(l),{stop:l}}function Sf(e={}){const t=Re(we({},e)),n=q({});return pe(t,()=>{const l={};for(const[r,o]of Object.entries(t)){const a=Oa(r),i=Pf(o,a);l[r]=i}n.value=l},{immediate:!0,deep:!0}),{state:t,style:n}}const j5=["","X","Y","Z"],H5=["perspective","translate","scale","rotate","skew"],Mf=["transformPerspective","x","y","z"];H5.forEach(e=>{j5.forEach(t=>{const n=e+t;Mf.push(n)})});const U5=new Set(Mf);function Pa(e){return U5.has(e)}const V5=new Set(["originX","originY","originZ"]);function Tf(e){return V5.has(e)}function W5(e){const t={},n={};return Object.entries(e).forEach(([l,r])=>{Pa(l)||Tf(l)?t[l]=r:n[l]=r}),{transform:t,style:n}}function z5(e,t){let n,l;const{state:r,style:o}=Sf(),a=pe(()=>ct(e),p=>{if(!!p){l=p;for(const f of Object.keys(Df))p.style[f]===null||p.style[f]===""||Pa(f)||Tf(f)||it(r,f,p.style[f]);n&&Object.entries(n).forEach(([f,h])=>it(p.style,f,h)),t&&t(r)}},{immediate:!0}),i=pe(o,p=>{if(!l){n=p;return}for(const f in p)it(l.style,f,p[f])},{immediate:!0});return{style:r,stop:()=>{l=void 0,n=void 0,a(),i()}}}const K5={x:"translateX",y:"translateY",z:"translateZ"};function Lf(e={},t=!0){const n=Re(we({},e)),l=q("");return pe(n,r=>{let o="",a=!1;t&&(r.x||r.y||r.z)&&(o+=`translate3d(${[r.x||0,r.y||0,r.z||0].map(ie.transform).join(",")}) `,a=!0);for(const[i,c]of Object.entries(r)){if(t&&(i==="x"||i==="y"||i==="z"))continue;const p=Oa(i),f=Pf(c,p);o+=`${K5[i]||i}(${f}) `}t&&!a&&(o+="translateZ(0px) "),l.value=o.trim()},{immediate:!0,deep:!0}),{state:n,transform:l}}function q5(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=l=>l.endsWith("px")||l.endsWith("deg")?parseFloat(l):isNaN(Number(l))?Number(l):l;return t.reduce((l,r)=>{if(!r)return l;const[o,a]=r.split("("),c=a.split(",").map(f=>n(f.endsWith(")")?f.replace(")",""):f.trim())),p=c.length===1?c[0]:c;return et(we({},l),{[o]:p})},{})}function Y5(e,t){Object.entries(q5(t)).forEach(([n,l])=>{l=parseFloat(l);const r=["x","y","z"];if(n==="translate3d"){if(l===0){r.forEach(o=>{it(e,o,0)});return}l.forEach((o,a)=>{it(e,r[a],o)});return}if(n==="translateX"){it(e,"x",l);return}if(n==="translateY"){it(e,"y",l);return}if(n==="translateZ"){it(e,"z",l);return}it(e,n,l)})}function Z5(e,t){let n,l;const{state:r,transform:o}=Lf(),a=pe(()=>ct(e),p=>{!p||(l=p,p.style.transform&&Y5(r,p.style.transform),n&&(p.style.transform=n),t&&t(r))},{immediate:!0}),i=pe(o,p=>{if(!l){n=p;return}l.style.transform=p},{immediate:!0});return{transform:r,stop:()=>{n=void 0,l=void 0,a(),i()}}}function G5(e,t){const n=Re({}),l=h=>{Object.entries(h).forEach(([d,m])=>{it(n,d,m)})},{style:r,stop:o}=z5(e,l),{transform:a,stop:i}=Z5(e,l),c=pe(n,h=>{Object.entries(h).forEach(([d,m])=>{const y=Pa(d)?a:r;y[d]&&y[d]===m||it(y,d,m)})},{immediate:!0,deep:!0}),p=pe(()=>ct(e),h=>{!h||t&&l(t)},{immediate:!0});return{motionProperties:n,style:r,transform:a,stop:()=>{o(),i(),c(),p()}}}function X5(e={}){const t=v(e),n=q();return{state:B(()=>{if(!!n.value)return t[n.value]}),variant:n}}function J5(e,t={},n){const{motionProperties:l,stop:r}=G5(e),{variant:o,state:a}=X5(t),i=P5(l,t),c=et(we({target:e,variant:o,variants:t,state:a,motionProperties:l},i),{stop:(f=!1)=>{}}),{stop:p}=N5(c,n);return c.stop=(f=!1)=>{const h=()=>{c.stopTransitions(),r(),p()};if(!f&&t.value&&t.value.leave){const d=pe(c.isAnimating,m=>{m||(d(),h())})}else h()},oa(()=>c.stop()),fg(()=>ct(e),f=>{!f||f!=null&&f.motionInstance&&(c.stop(),Object.assign(c,f.motionInstance))}),c}const Q5=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],e8=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&Ul(n.variants)&&(t.value=we(we({},t.value),n.variants)),Q5.forEach(l=>{if(l==="delay"){if(n&&n[l]&&qm(n[l])){const r=n[l];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition=et(we({},t.value.enter.transition),{delay:r})),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition=et(we({},t.value.visible.transition),{delay:r})),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition=et(we({},t.value.visibleOnce.transition),{delay:r})))}return}l==="visible-once"&&(l="visibleOnce"),n&&n[l]&&Ul(n[l])&&(t.value[l]=n[l])}))},Kr=e=>{const t=(l,r,o)=>{const a=r.value&&typeof r.value=="string"?r.value:o.key;a&&Vr[a]&&Vr[a].stop();const i=q(e||{});typeof r.value=="object"&&(i.value=r.value),e8(o,i);const c=J5(l,i);l.motionInstance=c,a&&it(Vr,a,c)},n=l=>{l.motionInstance&&l.motionInstance.stop()};return{created:t,unmounted:n,bind:t,unbind:n,getSSRProps(l,r){const{initial:o}=l.value||r&&r.props||{},a=N4((e==null?void 0:e.initial)||{},o||{});if(!a||Object.keys(a).length===0)return;const{transform:i,style:c}=W5(a),{transform:p}=Lf(i),{style:f}=Sf(c);return p.value&&(f.value.transform=p.value),{style:f.value}}}},t8={initial:{opacity:0},enter:{opacity:1}},n8={initial:{opacity:0},visible:{opacity:1}},s8={initial:{opacity:0},visibleOnce:{opacity:1}},l8={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},r8={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},o8={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},a8={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},i8={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},c8={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},u8={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},p8={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},f8={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},d8={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},h8={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},m8={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},g8={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},y8={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},_8={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},v8={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},b8={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},w8={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},A8={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},x8={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},C8={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},k8={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},$8={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},E8={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},B8={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},O8={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},D8={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Dc={__proto__:null,fade:t8,fadeVisible:n8,fadeVisibleOnce:s8,pop:l8,popVisible:r8,popVisibleOnce:o8,rollBottom:g8,rollLeft:a8,rollRight:u8,rollTop:d8,rollVisibleBottom:y8,rollVisibleLeft:i8,rollVisibleRight:p8,rollVisibleTop:h8,rollVisibleOnceBottom:_8,rollVisibleOnceLeft:c8,rollVisibleOnceRight:f8,rollVisibleOnceTop:m8,slideBottom:B8,slideLeft:v8,slideRight:A8,slideTop:k8,slideVisibleBottom:O8,slideVisibleLeft:b8,slideVisibleRight:x8,slideVisibleTop:$8,slideVisibleOnceBottom:D8,slideVisibleOnceLeft:w8,slideVisibleOnceRight:C8,slideVisibleOnceTop:E8};function P8(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",l=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(l,r=>n.charAt(t.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const S8={install(e,t){if(e.directive("motion",Kr()),!t||t&&!t.excludePresets)for(const n in Dc){const l=Dc[n];e.directive(`motion-${P8(n)}`,Kr(l))}if(t&&t.directives)for(const n in t.directives){const l=t.directives[n];l.initial,e.directive(`motion-${n}`,Kr(l))}}},Sa="vue-starport-injection",Rf="vue-starport-options",M8={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},If={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var T8=Object.defineProperty,Xl=Object.getOwnPropertySymbols,Ff=Object.prototype.hasOwnProperty,Nf=Object.prototype.propertyIsEnumerable,Pc=(e,t,n)=>t in e?T8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,L8=(e,t)=>{for(var n in t||(t={}))Ff.call(t,n)&&Pc(e,n,t[n]);if(Xl)for(var n of Xl(t))Nf.call(t,n)&&Pc(e,n,t[n]);return e},Sc=(e,t)=>{var n={};for(var l in e)Ff.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&Xl)for(var l of Xl(e))t.indexOf(l)<0&&Nf.call(e,l)&&(n[l]=e[l]);return n};const R8=ye({name:"StarportProxy",props:L8({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},If),setup(e,t){const n=I(Sa),l=B(()=>n.getInstance(e.port,e.component)),r=q(),o=l.value.generateId(),a=q(!1);return l.value.isVisible||(l.value.land(),a.value=!0),ds(async()=>{l.value.el||(l.value.el=r.value,await Ye(),a.value=!0,l.value.rect.update())}),cr(async()=>{l.value.rect.update(),l.value.liftOff(),l.value.el=void 0,a.value=!1,!l.value.options.keepAlive&&(await Ye(),await Ye(),!l.value.el&&n.dispose(l.value.port))}),pe(()=>e,async()=>{l.value.props&&await Ye();const i=e,{props:c}=i,p=Sc(i,["props"]);l.value.props=c||{},l.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:c,mountedProps:p}=i,f=Sc(i,["initialProps","mountedProps"]),h=Ve(f,(a.value?p:c)||{});return yt("div",Ve(h,{id:o,ref:r,"data-starport-proxy":l.value.componentId,"data-starport-landed":l.value.isLanded?"true":void 0,"data-starport-floating":l.value.isLanded?void 0:"true"}),t.slots.default?yt(t.slots.default):void 0)}}});var I8=Object.defineProperty,F8=Object.defineProperties,N8=Object.getOwnPropertyDescriptors,Mc=Object.getOwnPropertySymbols,j8=Object.prototype.hasOwnProperty,H8=Object.prototype.propertyIsEnumerable,Tc=(e,t,n)=>t in e?I8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,U8=(e,t)=>{for(var n in t||(t={}))j8.call(t,n)&&Tc(e,n,t[n]);if(Mc)for(var n of Mc(t))H8.call(t,n)&&Tc(e,n,t[n]);return e},V8=(e,t)=>F8(e,N8(t));const W8=ye({name:"Starport",inheritAttrs:!0,props:If,setup(e,t){const n=q(!1);return ds(()=>{n.value=!0}),()=>{var a,i;const l=(i=(a=t.slots).default)==null?void 0:i.call(a);if(!l)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(l.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${l.length}`);const r=l[0];let o=r.type;return(!Ul(o)||Ln(o))&&(o={render(){return l}}),yt(R8,V8(U8({},e),{key:e.port,component:sr(o),props:r.props}))}}});function z8(e){const t=Re({height:0,width:0,left:0,top:0,update:l,listen:o,pause:a}),n=$t?document.documentElement||document.body:void 0;function l(){if(!$t)return;const i=ct(e);if(!i)return;const{height:c,width:p,left:f,top:h}=i.getBoundingClientRect();Object.assign(t,{height:c,width:p,left:f,top:n.scrollTop+h})}const r=Ju(l,{immediate:!1});function o(){!$t||(l(),r.resume())}function a(){r.pause()}return t}let K8="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",q8=(e,t=21)=>(n=t)=>{let l="",r=n;for(;r--;)l+=e[Math.random()*e.length|0];return l},Y8=(e=21)=>{let t="",n=e;for(;n--;)t+=K8[Math.random()*64|0];return t};var Z8={nanoid:Y8,customAlphabet:q8};const Lc=Z8.customAlphabet("abcdefghijklmnopqrstuvwxyz",5);function Rc(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function G8(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var X8=Object.defineProperty,Ic=Object.getOwnPropertySymbols,J8=Object.prototype.hasOwnProperty,Q8=Object.prototype.propertyIsEnumerable,Fc=(e,t,n)=>t in e?X8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qr=(e,t)=>{for(var n in t||(t={}))J8.call(t,n)&&Fc(e,n,t[n]);if(Ic)for(var n of Ic(t))Q8.call(t,n)&&Fc(e,n,t[n]);return e};function e9(e,t,n={}){const l=G8(t),r=Rc(l)||Lc(),o=q(),a=q(null),i=q(!1),c=q(!1),p=nd(!0),f=q({}),h=B(()=>qr(qr(qr({},M8),n),f.value)),d=q(0);let m;p.run(()=>{m=z8(o),pe(o,async $=>{$&&(c.value=!0),await Ye(),o.value||(c.value=!1)})});const y=Rc(e);function w(){return`starport-${r}-${y}-${Lc()}`}const b=w();return Re({el:o,id:b,port:e,props:a,rect:m,scope:p,isLanded:i,isVisible:c,options:h,liftOffTime:d,component:t,componentName:l,componentId:r,generateId:w,setLocalOptions($={}){f.value=JSON.parse(JSON.stringify($))},elRef(){return o},liftOff(){!i.value||(i.value=!1,d.value=Date.now(),m.listen())},land(){i.value||(i.value=!0,m.pause())}})}function t9(e){const t=Re(new Map);function n(r,o){let a=t.get(r);return a||(a=e9(r,o,e),t.set(r,a)),a.component=o,a}function l(r){var o;(o=t.get(r))==null||o.scope.stop(),t.delete(r)}return{portMap:t,dispose:l,getInstance:n}}var n9=Object.defineProperty,s9=Object.defineProperties,l9=Object.getOwnPropertyDescriptors,Nc=Object.getOwnPropertySymbols,r9=Object.prototype.hasOwnProperty,o9=Object.prototype.propertyIsEnumerable,jc=(e,t,n)=>t in e?n9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,a9=(e,t)=>{for(var n in t||(t={}))r9.call(t,n)&&jc(e,n,t[n]);if(Nc)for(var n of Nc(t))o9.call(t,n)&&jc(e,n,t[n]);return e},i9=(e,t)=>s9(e,l9(t));const c9=ye({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=I(Sa);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=B(()=>t.getInstance(e.port,e.component)),l=B(()=>{var a;return((a=n.value.el)==null?void 0:a.id)||n.value.id}),r=B(()=>{const a=Date.now()-n.value.liftOffTime,i=Math.max(0,n.value.options.duration-a),c=n.value.rect,p={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?i9(a9({},p),{zIndex:-1,display:"none"}):(n.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:n.value.options.easing}),p)}),o={};return()=>{const a=!!(n.value.isLanded&&n.value.el);return yt("div",{style:r.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},yt(Oh,{to:a?`#${l.value}`:"body",disabled:!a},yt(n.value.component,Ve(o,n.value.props))))}}}),u9=ye({name:"StarportCarrier",setup(e,{slots:t}){const n=t9(I(Rf,{}));return Fn().appContext.app.provide(Sa,n),()=>{var r;return[(r=t.default)==null?void 0:r.call(t),Array.from(n.portMap.entries()).map(([o,{component:a}])=>yt(c9,{key:o,port:o,component:a}))]}}});function p9(e={}){return{install(t){t.provide(Rf,e),t.component("Starport",W8),t.component("StarportCarrier",u9)}}}function f9(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(S8),e.app.use(p9({keepAlive:!0}))}function pt(e,t,n){var l,r;return(r=((l=e.instance)==null?void 0:l.$).provides[t])!=null?r:n}function d9(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var f,h,d,m;if(js.value||((f=pt(n,Rs))==null?void 0:f.value))return;const l=pt(n,xn),r=pt(n,Ls),o=pt(n,po),a=n.modifiers.hide!==!1&&n.modifiers.hide!=null,i=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((h=l==null?void 0:l.value)==null?void 0:h.length)||0,p=i?Bm:Br;if(l&&!((d=l==null?void 0:l.value)!=null&&d.includes(t))&&l.value.push(t),n.value===null&&(n.value=l==null?void 0:l.value.length),!(o!=null&&o.value.has(n.value)))o==null||o.value.set(n.value,[t]);else if(!((m=o==null?void 0:o.value.get(n.value))!=null&&m.includes(t))){const y=(o==null?void 0:o.value.get(n.value))||[];o==null||o.value.set(n.value,[t].concat(y))}t==null||t.classList.toggle(wn,!0),r&&pe(r,()=>{var $;const y=($=r==null?void 0:r.value)!=null?$:0,w=n.value!=null?y>=n.value:y>c;t.classList.contains(Or)||t.classList.toggle(p,!w),a!==!1&&a!==void 0&&t.classList.toggle(p,w),t.classList.toggle(ws,!1);const b=o==null?void 0:o.value.get(y);b==null||b.forEach((C,k)=>{C.classList.toggle(Al,!1),k===b.length-1?C.classList.toggle(ws,!0):C.classList.toggle(Al,!0)}),t.classList.contains(ws)||t.classList.toggle(Al,w)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(wn,!1);const l=pt(n,xn);l!=null&&l.value&&fo(l.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var i,c;if(js.value||((i=pt(n,Rs))==null?void 0:i.value))return;const l=pt(n,xn),r=pt(n,Ls),o=pt(n,po),a=l==null?void 0:l.value.length;n.value===void 0&&(n.value=l==null?void 0:l.value.length),o!=null&&o.value.has(n.value)?(c=o==null?void 0:o.value.get(n.value))==null||c.push(t):o==null||o.value.set(n.value,[t]),t==null||t.classList.toggle(wn,!0),r&&pe(r,()=>{var f,h,d;const p=((f=r.value)!=null?f:0)>=((d=(h=n.value)!=null?h:a)!=null?d:0);t.classList.contains(Or)||t.classList.toggle(Br,!p),t.classList.toggle(ws,!1),t.classList.contains(ws)||t.classList.toggle(Al,p)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(wn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var a,i,c;if(js.value||((a=pt(n,Rs))==null?void 0:a.value))return;const l=pt(n,xn),r=pt(n,Ls),o=((i=l==null?void 0:l.value)==null?void 0:i.length)||0;l&&!((c=l==null?void 0:l.value)!=null&&c.includes(t))&&l.value.push(t),t==null||t.classList.toggle(wn,!0),r&&pe(r,()=>{var h;const p=(h=r==null?void 0:r.value)!=null?h:0,f=n.value!=null?p>=n.value:p>o;t.classList.toggle(Br,f),t.classList.toggle(Or,f)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(wn,!1);const l=pt(n,xn);l!=null&&l.value&&fo(l.value,t)}})}}}function h9(e,t){const n=Bp(e),l=Op(t,n.currentRoute,n.currentPage);return{nav:et(we(we({},n),l),{downloadPDF:Bo,next:pn,nextSlide:nl,openInEditor:L4,prev:fn,prevSlide:sl}),configs:Ce,themeConfigs:B(()=>Ce.themeConfig)}}function m9(){return{install(e){const t=h9(Jt,Lt);e.provide(U,Re(t))}}}const ys=um(I4);ys.use(vt);ys.use(xm());ys.use(d9());ys.use(m9());f9({app:ys,router:vt});ys.mount("#app");export{$s as $,M as A,wp as B,V as C,He as D,Fp as E,nt as F,Ae as G,hy as H,ke as I,y9 as J,_9 as K,Lt as L,ql as M,D4 as N,Ir as O,Dr as P,Qs as Q,Lr as R,_v as S,pa as T,fa as U,mv as V,xy as W,Rt as X,v9 as Y,wt as Z,kp as _,s as a,xl as a0,il as a1,Co as a2,z0 as a3,K0 as a4,q0 as a5,Z0 as a6,Dn as a7,ju as a8,x9 as a9,Ut as aa,st as ab,s_ as ac,En as ad,Uu as ae,G0 as af,cr as ag,B as b,z as c,ye as d,U as e,ht as f,K as g,v as h,I as i,ly as j,T4 as k,Ce as l,km as m,Le as n,A as o,ds as p,Re as q,q as r,b9 as s,Tn as t,w9 as u,A9 as v,pe as w,S as x,ze as y,Wu as z};
