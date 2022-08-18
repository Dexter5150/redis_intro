var Np=Object.defineProperty,jp=Object.defineProperties;var Hp=Object.getOwnPropertyDescriptors;var mr=Object.getOwnPropertySymbols;var Ra=Object.prototype.hasOwnProperty,Ia=Object.prototype.propertyIsEnumerable;var La=(e,t,n)=>t in e?Np(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,we=(e,t)=>{for(var n in t||(t={}))Ra.call(t,n)&&La(e,n,t[n]);if(mr)for(var n of mr(t))Ia.call(t,n)&&La(e,n,t[n]);return e},et=(e,t)=>jp(e,Hp(t));var bl=(e,t)=>{var n={};for(var s in e)Ra.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&mr)for(var s of mr(e))t.indexOf(s)<0&&Ia.call(e,s)&&(n[s]=e[s]);return n};const Up=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}};Up();function jo(e,t){const n=Object.create(null),s=e.split(",");for(let l=0;l<s.length;l++)n[s[l]]=!0;return t?l=>!!n[l.toLowerCase()]:l=>!!n[l]}const Vp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wp=jo(Vp);function Vc(e){return!!e||e===""}function We(e){if(ne(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],l=Re(s)?qp(s):We(s);if(l)for(const o in l)t[o]=l[o]}return t}else{if(Re(e))return e;if(Ue(e))return e}}const zp=/;(?![^(]*\))/g,Kp=/:(.+)/;function qp(e){const t={};return e.split(zp).forEach(n=>{if(n){const s=n.split(Kp);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Fe(e){let t="";if(Re(e))t=e;else if(ne(e))for(let n=0;n<e.length;n++){const s=Fe(e[n]);s&&(t+=s+" ")}else if(Ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function ce(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Re(t)&&(e.class=Fe(t)),n&&(e.style=We(n)),e}const Tn=e=>Re(e)?e:e==null?"":ne(e)||Ue(e)&&(e.toString===qc||!ie(e.toString))?JSON.stringify(e,Wc,2):String(e),Wc=(e,t)=>t&&t.__v_isRef?Wc(e,t.value):es(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,l])=>(n[`${s} =>`]=l,n),{})}:zc(t)?{[`Set(${t.size})`]:[...t.values()]}:Ue(t)&&!ne(t)&&!Yc(t)?String(t):t,De={},Qn=[],Mt=()=>{},Yp=()=>!1,Zp=/^on[^a-z]/,Jr=e=>Zp.test(e),Ho=e=>e.startsWith("onUpdate:"),rt=Object.assign,Uo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Xp=Object.prototype.hasOwnProperty,ge=(e,t)=>Xp.call(e,t),ne=Array.isArray,es=e=>Qr(e)==="[object Map]",zc=e=>Qr(e)==="[object Set]",ie=e=>typeof e=="function",Re=e=>typeof e=="string",Vo=e=>typeof e=="symbol",Ue=e=>e!==null&&typeof e=="object",Kc=e=>Ue(e)&&ie(e.then)&&ie(e.catch),qc=Object.prototype.toString,Qr=e=>qc.call(e),Gp=e=>Qr(e).slice(8,-1),Yc=e=>Qr(e)==="[object Object]",Wo=e=>Re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Er=jo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),el=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Jp=/-(\w)/g,Vt=el(e=>e.replace(Jp,(t,n)=>n?n.toUpperCase():"")),Qp=/\B([A-Z])/g,Rn=el(e=>e.replace(Qp,"-$1").toLowerCase()),tl=el(e=>e.charAt(0).toUpperCase()+e.slice(1)),wl=el(e=>e?`on${tl(e)}`:""),Ks=(e,t)=>!Object.is(e,t),ts=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Fr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Yl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Na;const ed=()=>Na||(Na=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let dt;class Zc{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&dt&&(this.parent=dt,this.index=(dt.scopes||(dt.scopes=[])).push(this)-1)}run(t){if(this.active){const n=dt;try{return dt=this,t()}finally{dt=n}}}on(){dt=this}off(){dt=this.parent}stop(t){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.active=!1}}}function td(e){return new Zc(e)}function nd(e,t=dt){t&&t.active&&t.effects.push(e)}function sd(){return dt}function rd(e){dt&&dt.cleanups.push(e)}const zo=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Xc=e=>(e.w&dn)>0,Gc=e=>(e.n&dn)>0,ld=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=dn},od=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const l=t[s];Xc(l)&&!Gc(l)?l.delete(e):t[n++]=l,l.w&=~dn,l.n&=~dn}t.length=n}},Zl=new WeakMap;let Es=0,dn=1;const Xl=30;let Pt;const Bn=Symbol(""),Gl=Symbol("");class Ko{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,nd(this,s)}run(){if(!this.active)return this.fn();let t=Pt,n=on;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Pt,Pt=this,on=!0,dn=1<<++Es,Es<=Xl?ld(this):ja(this),this.fn()}finally{Es<=Xl&&od(this),dn=1<<--Es,Pt=this.parent,on=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pt===this?this.deferStop=!0:this.active&&(ja(this),this.onStop&&this.onStop(),this.active=!1)}}function ja(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let on=!0;const Jc=[];function fs(){Jc.push(on),on=!1}function ps(){const e=Jc.pop();on=e===void 0?!0:e}function bt(e,t,n){if(on&&Pt){let s=Zl.get(e);s||Zl.set(e,s=new Map);let l=s.get(n);l||s.set(n,l=zo()),Qc(l)}}function Qc(e,t){let n=!1;Es<=Xl?Gc(e)||(e.n|=dn,n=!Xc(e)):n=!e.has(Pt),n&&(e.add(Pt),Pt.deps.push(e))}function Xt(e,t,n,s,l,o){const a=Zl.get(e);if(!a)return;let i=[];if(t==="clear")i=[...a.values()];else if(n==="length"&&ne(e))a.forEach((c,f)=>{(f==="length"||f>=s)&&i.push(c)});else switch(n!==void 0&&i.push(a.get(n)),t){case"add":ne(e)?Wo(n)&&i.push(a.get("length")):(i.push(a.get(Bn)),es(e)&&i.push(a.get(Gl)));break;case"delete":ne(e)||(i.push(a.get(Bn)),es(e)&&i.push(a.get(Gl)));break;case"set":es(e)&&i.push(a.get(Bn));break}if(i.length===1)i[0]&&Jl(i[0]);else{const c=[];for(const f of i)f&&c.push(...f);Jl(zo(c))}}function Jl(e,t){const n=ne(e)?e:[...e];for(const s of n)s.computed&&Ha(s);for(const s of n)s.computed||Ha(s)}function Ha(e,t){(e!==Pt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ad=jo("__proto__,__v_isRef,__isVue"),eu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Vo)),id=qo(),cd=qo(!1,!0),ud=qo(!0),Ua=fd();function fd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=xe(this);for(let o=0,a=this.length;o<a;o++)bt(s,"get",o+"");const l=s[t](...n);return l===-1||l===!1?s[t](...n.map(xe)):l}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){fs();const s=xe(this)[t].apply(this,n);return ps(),s}}),e}function qo(e=!1,t=!1){return function(s,l,o){if(l==="__v_isReactive")return!e;if(l==="__v_isReadonly")return e;if(l==="__v_isShallow")return t;if(l==="__v_raw"&&o===(e?t?Ed:lu:t?ru:su).get(s))return s;const a=ne(s);if(!e&&a&&ge(Ua,l))return Reflect.get(Ua,l,o);const i=Reflect.get(s,l,o);return(Vo(l)?eu.has(l):ad(l))||(e||bt(s,"get",l),t)?i:Ae(i)?a&&Wo(l)?i:i.value:Ue(i)?e?Gn(i):Le(i):i}}const pd=tu(),dd=tu(!0);function tu(e=!1){return function(n,s,l,o){let a=n[s];if(qs(a)&&Ae(a)&&!Ae(l))return!1;if(!e&&!qs(l)&&(Ql(l)||(l=xe(l),a=xe(a)),!ne(n)&&Ae(a)&&!Ae(l)))return a.value=l,!0;const i=ne(n)&&Wo(s)?Number(s)<n.length:ge(n,s),c=Reflect.set(n,s,l,o);return n===xe(o)&&(i?Ks(l,a)&&Xt(n,"set",s,l):Xt(n,"add",s,l)),c}}function hd(e,t){const n=ge(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Xt(e,"delete",t,void 0),s}function md(e,t){const n=Reflect.has(e,t);return(!Vo(t)||!eu.has(t))&&bt(e,"has",t),n}function gd(e){return bt(e,"iterate",ne(e)?"length":Bn),Reflect.ownKeys(e)}const nu={get:id,set:pd,deleteProperty:hd,has:md,ownKeys:gd},yd={get:ud,set(e,t){return!0},deleteProperty(e,t){return!0}},_d=rt({},nu,{get:cd,set:dd}),Yo=e=>e,nl=e=>Reflect.getPrototypeOf(e);function gr(e,t,n=!1,s=!1){e=e.__v_raw;const l=xe(e),o=xe(t);n||(t!==o&&bt(l,"get",t),bt(l,"get",o));const{has:a}=nl(l),i=s?Yo:n?Go:Ys;if(a.call(l,t))return i(e.get(t));if(a.call(l,o))return i(e.get(o));e!==l&&e.get(t)}function yr(e,t=!1){const n=this.__v_raw,s=xe(n),l=xe(e);return t||(e!==l&&bt(s,"has",e),bt(s,"has",l)),e===l?n.has(e):n.has(e)||n.has(l)}function _r(e,t=!1){return e=e.__v_raw,!t&&bt(xe(e),"iterate",Bn),Reflect.get(e,"size",e)}function Va(e){e=xe(e);const t=xe(this);return nl(t).has.call(t,e)||(t.add(e),Xt(t,"add",e,e)),this}function Wa(e,t){t=xe(t);const n=xe(this),{has:s,get:l}=nl(n);let o=s.call(n,e);o||(e=xe(e),o=s.call(n,e));const a=l.call(n,e);return n.set(e,t),o?Ks(t,a)&&Xt(n,"set",e,t):Xt(n,"add",e,t),this}function za(e){const t=xe(this),{has:n,get:s}=nl(t);let l=n.call(t,e);l||(e=xe(e),l=n.call(t,e)),s&&s.call(t,e);const o=t.delete(e);return l&&Xt(t,"delete",e,void 0),o}function Ka(){const e=xe(this),t=e.size!==0,n=e.clear();return t&&Xt(e,"clear",void 0,void 0),n}function vr(e,t){return function(s,l){const o=this,a=o.__v_raw,i=xe(a),c=t?Yo:e?Go:Ys;return!e&&bt(i,"iterate",Bn),a.forEach((f,p)=>s.call(l,c(f),c(p),o))}}function br(e,t,n){return function(...s){const l=this.__v_raw,o=xe(l),a=es(o),i=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,f=l[e](...s),p=n?Yo:t?Go:Ys;return!t&&bt(o,"iterate",c?Gl:Bn),{next(){const{value:h,done:d}=f.next();return d?{value:h,done:d}:{value:i?[p(h[0]),p(h[1])]:p(h),done:d}},[Symbol.iterator](){return this}}}}function Qt(e){return function(...t){return e==="delete"?!1:this}}function vd(){const e={get(o){return gr(this,o)},get size(){return _r(this)},has:yr,add:Va,set:Wa,delete:za,clear:Ka,forEach:vr(!1,!1)},t={get(o){return gr(this,o,!1,!0)},get size(){return _r(this)},has:yr,add:Va,set:Wa,delete:za,clear:Ka,forEach:vr(!1,!0)},n={get(o){return gr(this,o,!0)},get size(){return _r(this,!0)},has(o){return yr.call(this,o,!0)},add:Qt("add"),set:Qt("set"),delete:Qt("delete"),clear:Qt("clear"),forEach:vr(!0,!1)},s={get(o){return gr(this,o,!0,!0)},get size(){return _r(this,!0)},has(o){return yr.call(this,o,!0)},add:Qt("add"),set:Qt("set"),delete:Qt("delete"),clear:Qt("clear"),forEach:vr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=br(o,!1,!1),n[o]=br(o,!0,!1),t[o]=br(o,!1,!0),s[o]=br(o,!0,!0)}),[e,n,t,s]}const[bd,wd,Ad,xd]=vd();function Zo(e,t){const n=t?e?xd:Ad:e?wd:bd;return(s,l,o)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_raw"?s:Reflect.get(ge(n,l)&&l in s?n:s,l,o)}const Cd={get:Zo(!1,!1)},kd={get:Zo(!1,!0)},$d={get:Zo(!0,!1)},su=new WeakMap,ru=new WeakMap,lu=new WeakMap,Ed=new WeakMap;function Od(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bd(e){return e.__v_skip||!Object.isExtensible(e)?0:Od(Gp(e))}function Le(e){return qs(e)?e:Xo(e,!1,nu,Cd,su)}function Dd(e){return Xo(e,!1,_d,kd,ru)}function Gn(e){return Xo(e,!0,yd,$d,lu)}function Xo(e,t,n,s,l){if(!Ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=l.get(e);if(o)return o;const a=Bd(e);if(a===0)return e;const i=new Proxy(e,a===2?s:n);return l.set(e,i),i}function ns(e){return qs(e)?ns(e.__v_raw):!!(e&&e.__v_isReactive)}function qs(e){return!!(e&&e.__v_isReadonly)}function Ql(e){return!!(e&&e.__v_isShallow)}function ou(e){return ns(e)||qs(e)}function xe(e){const t=e&&e.__v_raw;return t?xe(t):e}function sl(e){return Fr(e,"__v_skip",!0),e}const Ys=e=>Ue(e)?Le(e):e,Go=e=>Ue(e)?Gn(e):e;function Jo(e){on&&Pt&&(e=xe(e),Qc(e.dep||(e.dep=zo())))}function Qo(e,t){e=xe(e),e.dep&&Jl(e.dep)}function Ae(e){return!!(e&&e.__v_isRef===!0)}function K(e){return au(e,!1)}function Wt(e){return au(e,!0)}function au(e,t){return Ae(e)?e:new Pd(e,t)}class Pd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:xe(t),this._value=n?t:Ys(t)}get value(){return Jo(this),this._value}set value(t){t=this.__v_isShallow?t:xe(t),Ks(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Ys(t),Qo(this))}}function v(e){return Ae(e)?e.value:e}const Sd={get:(e,t,n)=>v(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const l=e[t];return Ae(l)&&!Ae(n)?(l.value=n,!0):Reflect.set(e,t,n,s)}};function iu(e){return ns(e)?e:new Proxy(e,Sd)}class Md{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>Jo(this),()=>Qo(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function Td(e){return new Md(e)}function Fd(e){const t=ne(e)?new Array(e.length):{};for(const n in e)t[n]=Rd(e,n);return t}class Ld{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Rd(e,t,n){const s=e[t];return Ae(s)?s:new Ld(e,t,n)}class Id{constructor(t,n,s,l){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ko(t,()=>{this._dirty||(this._dirty=!0,Qo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=s}get value(){const t=xe(this);return Jo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Nd(e,t,n=!1){let s,l;const o=ie(e);return o?(s=e,l=Mt):(s=e.get,l=e.set),new Id(s,l,o||!l,n)}function an(e,t,n,s){let l;try{l=s?e(...s):e()}catch(o){rl(o,t,n)}return l}function Tt(e,t,n,s){if(ie(e)){const o=an(e,t,n,s);return o&&Kc(o)&&o.catch(a=>{rl(a,t,n)}),o}const l=[];for(let o=0;o<e.length;o++)l.push(Tt(e[o],t,n,s));return l}function rl(e,t,n,s=!0){const l=t?t.vnode:null;if(t){let o=t.parent;const a=t.proxy,i=n;for(;o;){const f=o.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](e,a,i)===!1)return}o=o.parent}const c=t.appContext.config.errorHandler;if(c){an(c,null,10,[e,a,i]);return}}jd(e,n,l,s)}function jd(e,t,n,s=!0){console.error(e)}let Lr=!1,eo=!1;const gt=[];let Yt=0;const Ps=[];let Os=null,qn=0;const Ss=[];let nn=null,Yn=0;const cu=Promise.resolve();let ea=null,to=null;function Ye(e){const t=ea||cu;return e?t.then(this?e.bind(this):e):t}function Hd(e){let t=Yt+1,n=gt.length;for(;t<n;){const s=t+n>>>1;Zs(gt[s])<e?t=s+1:n=s}return t}function uu(e){(!gt.length||!gt.includes(e,Lr&&e.allowRecurse?Yt+1:Yt))&&e!==to&&(e.id==null?gt.push(e):gt.splice(Hd(e.id),0,e),fu())}function fu(){!Lr&&!eo&&(eo=!0,ea=cu.then(hu))}function Ud(e){const t=gt.indexOf(e);t>Yt&&gt.splice(t,1)}function pu(e,t,n,s){ne(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?s+1:s))&&n.push(e),fu()}function Vd(e){pu(e,Os,Ps,qn)}function Wd(e){pu(e,nn,Ss,Yn)}function ll(e,t=null){if(Ps.length){for(to=t,Os=[...new Set(Ps)],Ps.length=0,qn=0;qn<Os.length;qn++)Os[qn]();Os=null,qn=0,to=null,ll(e,t)}}function du(e){if(ll(),Ss.length){const t=[...new Set(Ss)];if(Ss.length=0,nn){nn.push(...t);return}for(nn=t,nn.sort((n,s)=>Zs(n)-Zs(s)),Yn=0;Yn<nn.length;Yn++)nn[Yn]();nn=null,Yn=0}}const Zs=e=>e.id==null?1/0:e.id;function hu(e){eo=!1,Lr=!0,ll(e),gt.sort((n,s)=>Zs(n)-Zs(s));const t=Mt;try{for(Yt=0;Yt<gt.length;Yt++){const n=gt[Yt];n&&n.active!==!1&&an(n,null,14)}}finally{Yt=0,gt.length=0,du(),Lr=!1,ea=null,(gt.length||Ps.length||Ss.length)&&hu(e)}}function zd(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||De;let l=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in s){const p=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:d}=s[p]||De;d&&(l=n.map(m=>m.trim())),h&&(l=n.map(Yl))}let i,c=s[i=wl(t)]||s[i=wl(Vt(t))];!c&&o&&(c=s[i=wl(Rn(t))]),c&&Tt(c,e,6,l);const f=s[i+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Tt(f,e,6,l)}}function mu(e,t,n=!1){const s=t.emitsCache,l=s.get(e);if(l!==void 0)return l;const o=e.emits;let a={},i=!1;if(!ie(e)){const c=f=>{const p=mu(f,t,!0);p&&(i=!0,rt(a,p))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!i?(s.set(e,null),null):(ne(o)?o.forEach(c=>a[c]=null):rt(a,o),s.set(e,a),a)}function ol(e,t){return!e||!Jr(t)?!1:(t=t.slice(2).replace(/Once$/,""),ge(e,t[0].toLowerCase()+t.slice(1))||ge(e,Rn(t))||ge(e,t))}let Xe=null,al=null;function Rr(e){const t=Xe;return Xe=e,al=e&&e.type.__scopeId||null,t}function f9(e){al=e}function p9(){al=null}function T(e,t=Xe,n){if(!t||e._n)return e;const s=(...l)=>{s._d&&si(-1);const o=Rr(t),a=e(...l);return Rr(o),s._d&&si(1),a};return s._n=!0,s._c=!0,s._d=!0,s}function Al(e){const{type:t,vnode:n,proxy:s,withProxy:l,props:o,propsOptions:[a],slots:i,attrs:c,emit:f,render:p,renderCache:h,data:d,setupState:m,ctx:y,inheritAttrs:w}=e;let b,$;const C=Rr(e);try{if(n.shapeFlag&4){const E=l||s;b=Nt(p.call(E,E,h,o,m,d,y)),$=c}else{const E=t;b=Nt(E.length>1?E(o,{attrs:c,slots:i,emit:f}):E(o,null)),$=t.props?c:Kd(c)}}catch(E){Ts.length=0,rl(E,e,1),b=S(hn)}let k=b;if($&&w!==!1){const E=Object.keys($),{shapeFlag:j}=k;E.length&&j&7&&(a&&E.some(Ho)&&($=qd($,a)),k=Ln(k,$))}return n.dirs&&(k=Ln(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),b=k,Rr(C),b}const Kd=e=>{let t;for(const n in e)(n==="class"||n==="style"||Jr(n))&&((t||(t={}))[n]=e[n]);return t},qd=(e,t)=>{const n={};for(const s in e)(!Ho(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Yd(e,t,n){const{props:s,children:l,component:o}=e,{props:a,children:i,patchFlag:c}=t,f=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?qa(s,a,f):!!a;if(c&8){const p=t.dynamicProps;for(let h=0;h<p.length;h++){const d=p[h];if(a[d]!==s[d]&&!ol(f,d))return!0}}}else return(l||i)&&(!i||!i.$stable)?!0:s===a?!1:s?a?qa(s,a,f):!0:!!a;return!1}function qa(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let l=0;l<s.length;l++){const o=s[l];if(t[o]!==e[o]&&!ol(n,o))return!0}return!1}function Zd({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const gu=e=>e.__isSuspense;function Xd(e,t){t&&t.pendingBranch?ne(e)?t.effects.push(...e):t.effects.push(e):Wd(e)}function mt(e,t){if(Ve){let n=Ve.provides;const s=Ve.parent&&Ve.parent.provides;s===n&&(n=Ve.provides=Object.create(s)),n[e]=t}}function I(e,t,n=!1){const s=Ve||Xe;if(s){const l=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(l&&e in l)return l[e];if(arguments.length>1)return n&&ie(t)?t.call(s.proxy):t}}function ar(e,t){return ta(e,null,t)}const Ya={};function fe(e,t,n){return ta(e,t,n)}function ta(e,t,{immediate:n,deep:s,flush:l,onTrack:o,onTrigger:a}=De){const i=Ve;let c,f=!1,p=!1;if(Ae(e)?(c=()=>e.value,f=Ql(e)):ns(e)?(c=()=>e,s=!0):ne(e)?(p=!0,f=e.some($=>ns($)||Ql($)),c=()=>e.map($=>{if(Ae($))return $.value;if(ns($))return kn($);if(ie($))return an($,i,2)})):ie(e)?t?c=()=>an(e,i,2):c=()=>{if(!(i&&i.isUnmounted))return h&&h(),Tt(e,i,3,[d])}:c=Mt,t&&s){const $=c;c=()=>kn($())}let h,d=$=>{h=b.onStop=()=>{an($,i,4)}};if(Gs)return d=Mt,t?n&&Tt(t,i,3,[c(),p?[]:void 0,d]):c(),Mt;let m=p?[]:Ya;const y=()=>{if(!!b.active)if(t){const $=b.run();(s||f||(p?$.some((C,k)=>Ks(C,m[k])):Ks($,m)))&&(h&&h(),Tt(t,i,3,[$,m===Ya?void 0:m,d]),m=$)}else b.run()};y.allowRecurse=!!t;let w;l==="sync"?w=y:l==="post"?w=()=>qe(y,i&&i.suspense):w=()=>Vd(y);const b=new Ko(c,w);return t?n?y():m=b.run():l==="post"?qe(b.run.bind(b),i&&i.suspense):b.run(),()=>{b.stop(),i&&i.scope&&Uo(i.scope.effects,b)}}function Gd(e,t,n){const s=this.proxy,l=Re(e)?e.includes(".")?yu(s,e):()=>s[e]:e.bind(s,s);let o;ie(t)?o=t:(o=t.handler,n=t);const a=Ve;as(this);const i=ta(l,o.bind(s),n);return a?as(a):Pn(),i}function yu(e,t){const n=t.split(".");return()=>{let s=e;for(let l=0;l<n.length&&s;l++)s=s[n[l]];return s}}function kn(e,t){if(!Ue(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ae(e))kn(e.value,t);else if(ne(e))for(let n=0;n<e.length;n++)kn(e[n],t);else if(zc(e)||es(e))e.forEach(n=>{kn(n,t)});else if(Yc(e))for(const n in e)kn(e[n],t);return e}function _u(e,t){e.shapeFlag&6&&e.component?_u(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ye(e){return ie(e)?{setup:e,name:e.name}:e}const ss=e=>!!e.type.__asyncLoader,vu=e=>e.type.__isKeepAlive,Jd={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=In(),s=n.ctx;if(!s.renderer)return()=>{const C=t.default&&t.default();return C&&C.length===1?C[0]:C};const l=new Map,o=new Set;let a=null;const i=n.suspense,{renderer:{p:c,m:f,um:p,o:{createElement:h}}}=s,d=h("div");s.activate=(C,k,E,j,F)=>{const Y=C.component;f(C,k,E,0,i),c(Y.vnode,C,k,E,Y,i,j,C.slotScopeIds,F),qe(()=>{Y.isDeactivated=!1,Y.a&&ts(Y.a);const oe=C.props&&C.props.onVnodeMounted;oe&&xt(oe,Y.parent,C)},i)},s.deactivate=C=>{const k=C.component;f(C,d,null,1,i),qe(()=>{k.da&&ts(k.da);const E=C.props&&C.props.onVnodeUnmounted;E&&xt(E,k.parent,C),k.isDeactivated=!0},i)};function m(C){xl(C),p(C,n,i,!0)}function y(C){l.forEach((k,E)=>{const j=io(k.type);j&&(!C||!C(j))&&w(E)})}function w(C){const k=l.get(C);!a||k.type!==a.type?m(k):a&&xl(a),l.delete(C),o.delete(C)}fe(()=>[e.include,e.exclude],([C,k])=>{C&&y(E=>Bs(C,E)),k&&y(E=>!Bs(k,E))},{flush:"post",deep:!0});let b=null;const $=()=>{b!=null&&l.set(b,Cl(n.subTree))};return ds($),xu($),cl(()=>{l.forEach(C=>{const{subTree:k,suspense:E}=n,j=Cl(k);if(C.type===j.type){xl(j);const F=j.component.da;F&&qe(F,E);return}m(C)})}),()=>{if(b=null,!t.default)return null;const C=t.default(),k=C[0];if(C.length>1)return a=null,C;if(!Fn(k)||!(k.shapeFlag&4)&&!(k.shapeFlag&128))return a=null,k;let E=Cl(k);const j=E.type,F=io(ss(E)?E.type.__asyncResolved||{}:j),{include:Y,exclude:oe,max:pe}=e;if(Y&&(!F||!Bs(Y,F))||oe&&F&&Bs(oe,F))return a=E,k;const he=E.key==null?j:E.key,_e=l.get(he);return E.el&&(E=Ln(E),k.shapeFlag&128&&(k.ssContent=E)),b=he,_e?(E.el=_e.el,E.component=_e.component,E.transition&&_u(E,E.transition),E.shapeFlag|=512,o.delete(he),o.add(he)):(o.add(he),pe&&o.size>parseInt(pe,10)&&w(o.values().next().value)),E.shapeFlag|=256,a=E,gu(k.type)?k:E}}},bu=Jd;function Bs(e,t){return ne(e)?e.some(n=>Bs(n,t)):Re(e)?e.split(",").includes(t):e.test?e.test(t):!1}function Qd(e,t){wu(e,"a",t)}function eh(e,t){wu(e,"da",t)}function wu(e,t,n=Ve){const s=e.__wdc||(e.__wdc=()=>{let l=n;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if(il(t,s,n),n){let l=n.parent;for(;l&&l.parent;)vu(l.parent.vnode)&&th(s,t,n,l),l=l.parent}}function th(e,t,n,s){const l=il(t,e,s,!0);ul(()=>{Uo(s[t],l)},n)}function xl(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function Cl(e){return e.shapeFlag&128?e.ssContent:e}function il(e,t,n=Ve,s=!1){if(n){const l=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;fs(),as(n);const i=Tt(t,n,e,a);return Pn(),ps(),i});return s?l.unshift(o):l.push(o),o}}const Gt=e=>(t,n=Ve)=>(!Gs||e==="sp")&&il(e,t,n),Au=Gt("bm"),ds=Gt("m"),nh=Gt("bu"),xu=Gt("u"),cl=Gt("bum"),ul=Gt("um"),sh=Gt("sp"),rh=Gt("rtg"),lh=Gt("rtc");function oh(e,t=Ve){il("ec",e,t)}function Dn(e,t){const n=Xe;if(n===null)return e;const s=pl(n)||n.proxy,l=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[a,i,c,f=De]=t[o];ie(a)&&(a={mounted:a,updated:a}),a.deep&&kn(i),l.push({dir:a,instance:s,value:i,oldValue:void 0,arg:c,modifiers:f})}return e}function gn(e,t,n,s){const l=e.dirs,o=t&&t.dirs;for(let a=0;a<l.length;a++){const i=l[a];o&&(i.oldValue=o[a].value);let c=i.dir[s];c&&(fs(),Tt(c,n,8,[e.el,i,e,t]),ps())}}const Cu="components",ah="directives";function ze(e,t){return ku(Cu,e,!0,t)||e}const ih=Symbol();function Ir(e){return ku(ah,e)}function ku(e,t,n=!0,s=!1){const l=Xe||Ve;if(l){const o=l.type;if(e===Cu){const i=io(o);if(i&&(i===t||i===Vt(t)||i===tl(Vt(t))))return o}const a=Za(l[e]||o[e],t)||Za(l.appContext[e],t);return!a&&s?o:a}}function Za(e,t){return e&&(e[t]||e[Vt(t)]||e[tl(Vt(t))])}function ir(e,t,n,s){let l;const o=n&&n[s];if(ne(e)||Re(e)){l=new Array(e.length);for(let a=0,i=e.length;a<i;a++)l[a]=t(e[a],a,void 0,o&&o[a])}else if(typeof e=="number"){l=new Array(e);for(let a=0;a<e;a++)l[a]=t(a+1,a,void 0,o&&o[a])}else if(Ue(e))if(e[Symbol.iterator])l=Array.from(e,(a,i)=>t(a,i,void 0,o&&o[i]));else{const a=Object.keys(e);l=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const f=a[i];l[i]=t(e[f],f,i,o&&o[i])}}else l=[];return n&&(n[s]=l),l}function wt(e,t,n={},s,l){if(Xe.isCE||Xe.parent&&ss(Xe.parent)&&Xe.parent.isCE)return S("slot",t==="default"?null:{name:t},s&&s());let o=e[t];o&&o._c&&(o._d=!1),A();const a=o&&$u(o(n)),i=q(ke,{key:n.key||`_${t}`},a||(s?s():[]),a&&e._===1?64:-2);return!l&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),o&&o._c&&(o._d=!0),i}function $u(e){return e.some(t=>Fn(t)?!(t.type===hn||t.type===ke&&!$u(t.children)):!0)?e:null}const no=e=>e?Ru(e)?pl(e)||e.proxy:no(e.parent):null,Nr=rt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>no(e.parent),$root:e=>no(e.root),$emit:e=>e.emit,$options:e=>Ou(e),$forceUpdate:e=>e.f||(e.f=()=>uu(e.update)),$nextTick:e=>e.n||(e.n=Ye.bind(e.proxy)),$watch:e=>Gd.bind(e)}),ch={get({_:e},t){const{ctx:n,setupState:s,data:l,props:o,accessCache:a,type:i,appContext:c}=e;let f;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return s[t];case 2:return l[t];case 4:return n[t];case 3:return o[t]}else{if(s!==De&&ge(s,t))return a[t]=1,s[t];if(l!==De&&ge(l,t))return a[t]=2,l[t];if((f=e.propsOptions[0])&&ge(f,t))return a[t]=3,o[t];if(n!==De&&ge(n,t))return a[t]=4,n[t];so&&(a[t]=0)}}const p=Nr[t];let h,d;if(p)return t==="$attrs"&&bt(e,"get",t),p(e);if((h=i.__cssModules)&&(h=h[t]))return h;if(n!==De&&ge(n,t))return a[t]=4,n[t];if(d=c.config.globalProperties,ge(d,t))return d[t]},set({_:e},t,n){const{data:s,setupState:l,ctx:o}=e;return l!==De&&ge(l,t)?(l[t]=n,!0):s!==De&&ge(s,t)?(s[t]=n,!0):ge(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:l,propsOptions:o}},a){let i;return!!n[a]||e!==De&&ge(e,a)||t!==De&&ge(t,a)||(i=o[0])&&ge(i,a)||ge(s,a)||ge(Nr,a)||ge(l.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ge(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let so=!0;function uh(e){const t=Ou(e),n=e.proxy,s=e.ctx;so=!1,t.beforeCreate&&Xa(t.beforeCreate,e,"bc");const{data:l,computed:o,methods:a,watch:i,provide:c,inject:f,created:p,beforeMount:h,mounted:d,beforeUpdate:m,updated:y,activated:w,deactivated:b,beforeDestroy:$,beforeUnmount:C,destroyed:k,unmounted:E,render:j,renderTracked:F,renderTriggered:Y,errorCaptured:oe,serverPrefetch:pe,expose:he,inheritAttrs:_e,components:Te,directives:Ie,filters:Ze}=t;if(f&&fh(f,s,null,e.appContext.config.unwrapInjectedRef),a)for(const se in a){const ee=a[se];ie(ee)&&(s[se]=ee.bind(n))}if(l){const se=l.call(n,n);Ue(se)&&(e.data=Le(se))}if(so=!0,o)for(const se in o){const ee=o[se],me=ie(ee)?ee.bind(n,n):ie(ee.get)?ee.get.bind(n,n):Mt,Rt=!ie(ee)&&ie(ee.set)?ee.set.bind(n):Mt,Qe=O({get:me,set:Rt});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>Qe.value,set:At=>Qe.value=At})}if(i)for(const se in i)Eu(i[se],s,n,se);if(c){const se=ie(c)?c.call(n):c;Reflect.ownKeys(se).forEach(ee=>{mt(ee,se[ee])})}p&&Xa(p,e,"c");function te(se,ee){ne(ee)?ee.forEach(me=>se(me.bind(n))):ee&&se(ee.bind(n))}if(te(Au,h),te(ds,d),te(nh,m),te(xu,y),te(Qd,w),te(eh,b),te(oh,oe),te(lh,F),te(rh,Y),te(cl,C),te(ul,E),te(sh,pe),ne(he))if(he.length){const se=e.exposed||(e.exposed={});he.forEach(ee=>{Object.defineProperty(se,ee,{get:()=>n[ee],set:me=>n[ee]=me})})}else e.exposed||(e.exposed={});j&&e.render===Mt&&(e.render=j),_e!=null&&(e.inheritAttrs=_e),Te&&(e.components=Te),Ie&&(e.directives=Ie)}function fh(e,t,n=Mt,s=!1){ne(e)&&(e=ro(e));for(const l in e){const o=e[l];let a;Ue(o)?"default"in o?a=I(o.from||l,o.default,!0):a=I(o.from||l):a=I(o),Ae(a)&&s?Object.defineProperty(t,l,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):t[l]=a}}function Xa(e,t,n){Tt(ne(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Eu(e,t,n,s){const l=s.includes(".")?yu(n,s):()=>n[s];if(Re(e)){const o=t[e];ie(o)&&fe(l,o)}else if(ie(e))fe(l,e.bind(n));else if(Ue(e))if(ne(e))e.forEach(o=>Eu(o,t,n,s));else{const o=ie(e.handler)?e.handler.bind(n):t[e.handler];ie(o)&&fe(l,o,e)}}function Ou(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:l,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,i=o.get(t);let c;return i?c=i:!l.length&&!n&&!s?c=t:(c={},l.length&&l.forEach(f=>jr(c,f,a,!0)),jr(c,t,a)),o.set(t,c),c}function jr(e,t,n,s=!1){const{mixins:l,extends:o}=t;o&&jr(e,o,n,!0),l&&l.forEach(a=>jr(e,a,n,!0));for(const a in t)if(!(s&&a==="expose")){const i=ph[a]||n&&n[a];e[a]=i?i(e[a],t[a]):t[a]}return e}const ph={data:Ga,props:bn,emits:bn,methods:bn,computed:bn,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:bn,directives:bn,watch:hh,provide:Ga,inject:dh};function Ga(e,t){return t?e?function(){return rt(ie(e)?e.call(this,this):e,ie(t)?t.call(this,this):t)}:t:e}function dh(e,t){return bn(ro(e),ro(t))}function ro(e){if(ne(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function bn(e,t){return e?rt(rt(Object.create(null),e),t):t}function hh(e,t){if(!e)return t;if(!t)return e;const n=rt(Object.create(null),e);for(const s in t)n[s]=tt(e[s],t[s]);return n}function mh(e,t,n,s=!1){const l={},o={};Fr(o,fl,1),e.propsDefaults=Object.create(null),Bu(e,t,l,o);for(const a in e.propsOptions[0])a in l||(l[a]=void 0);n?e.props=s?l:Dd(l):e.type.props?e.props=l:e.props=o,e.attrs=o}function gh(e,t,n,s){const{props:l,attrs:o,vnode:{patchFlag:a}}=e,i=xe(l),[c]=e.propsOptions;let f=!1;if((s||a>0)&&!(a&16)){if(a&8){const p=e.vnode.dynamicProps;for(let h=0;h<p.length;h++){let d=p[h];if(ol(e.emitsOptions,d))continue;const m=t[d];if(c)if(ge(o,d))m!==o[d]&&(o[d]=m,f=!0);else{const y=Vt(d);l[y]=lo(c,i,y,m,e,!1)}else m!==o[d]&&(o[d]=m,f=!0)}}}else{Bu(e,t,l,o)&&(f=!0);let p;for(const h in i)(!t||!ge(t,h)&&((p=Rn(h))===h||!ge(t,p)))&&(c?n&&(n[h]!==void 0||n[p]!==void 0)&&(l[h]=lo(c,i,h,void 0,e,!0)):delete l[h]);if(o!==i)for(const h in o)(!t||!ge(t,h)&&!0)&&(delete o[h],f=!0)}f&&Xt(e,"set","$attrs")}function Bu(e,t,n,s){const[l,o]=e.propsOptions;let a=!1,i;if(t)for(let c in t){if(Er(c))continue;const f=t[c];let p;l&&ge(l,p=Vt(c))?!o||!o.includes(p)?n[p]=f:(i||(i={}))[p]=f:ol(e.emitsOptions,c)||(!(c in s)||f!==s[c])&&(s[c]=f,a=!0)}if(o){const c=xe(n),f=i||De;for(let p=0;p<o.length;p++){const h=o[p];n[h]=lo(l,c,h,f[h],e,!ge(f,h))}}return a}function lo(e,t,n,s,l,o){const a=e[n];if(a!=null){const i=ge(a,"default");if(i&&s===void 0){const c=a.default;if(a.type!==Function&&ie(c)){const{propsDefaults:f}=l;n in f?s=f[n]:(as(l),s=f[n]=c.call(null,t),Pn())}else s=c}a[0]&&(o&&!i?s=!1:a[1]&&(s===""||s===Rn(n))&&(s=!0))}return s}function Du(e,t,n=!1){const s=t.propsCache,l=s.get(e);if(l)return l;const o=e.props,a={},i=[];let c=!1;if(!ie(e)){const p=h=>{c=!0;const[d,m]=Du(h,t,!0);rt(a,d),m&&i.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!o&&!c)return s.set(e,Qn),Qn;if(ne(o))for(let p=0;p<o.length;p++){const h=Vt(o[p]);Ja(h)&&(a[h]=De)}else if(o)for(const p in o){const h=Vt(p);if(Ja(h)){const d=o[p],m=a[h]=ne(d)||ie(d)?{type:d}:d;if(m){const y=ti(Boolean,m.type),w=ti(String,m.type);m[0]=y>-1,m[1]=w<0||y<w,(y>-1||ge(m,"default"))&&i.push(h)}}}const f=[a,i];return s.set(e,f),f}function Ja(e){return e[0]!=="$"}function Qa(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function ei(e,t){return Qa(e)===Qa(t)}function ti(e,t){return ne(t)?t.findIndex(n=>ei(n,e)):ie(t)&&ei(t,e)?0:-1}const Pu=e=>e[0]==="_"||e==="$stable",na=e=>ne(e)?e.map(Nt):[Nt(e)],yh=(e,t,n)=>{if(t._n)return t;const s=T((...l)=>na(t(...l)),n);return s._c=!1,s},Su=(e,t,n)=>{const s=e._ctx;for(const l in e){if(Pu(l))continue;const o=e[l];if(ie(o))t[l]=yh(l,o,s);else if(o!=null){const a=na(o);t[l]=()=>a}}},Mu=(e,t)=>{const n=na(t);e.slots.default=()=>n},_h=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=xe(t),Fr(t,"_",n)):Su(t,e.slots={})}else e.slots={},t&&Mu(e,t);Fr(e.slots,fl,1)},vh=(e,t,n)=>{const{vnode:s,slots:l}=e;let o=!0,a=De;if(s.shapeFlag&32){const i=t._;i?n&&i===1?o=!1:(rt(l,t),!n&&i===1&&delete l._):(o=!t.$stable,Su(t,l)),a=t}else t&&(Mu(e,t),a={default:1});if(o)for(const i in l)!Pu(i)&&!(i in a)&&delete l[i]};function Tu(){return{app:null,config:{isNativeTag:Yp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bh=0;function wh(e,t){return function(s,l=null){ie(s)||(s=Object.assign({},s)),l!=null&&!Ue(l)&&(l=null);const o=Tu(),a=new Set;let i=!1;const c=o.app={_uid:bh++,_component:s,_props:l,_container:null,_context:o,_instance:null,version:Nh,get config(){return o.config},set config(f){},use(f,...p){return a.has(f)||(f&&ie(f.install)?(a.add(f),f.install(c,...p)):ie(f)&&(a.add(f),f(c,...p))),c},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),c},component(f,p){return p?(o.components[f]=p,c):o.components[f]},directive(f,p){return p?(o.directives[f]=p,c):o.directives[f]},mount(f,p,h){if(!i){const d=S(s,l);return d.appContext=o,p&&t?t(d,f):e(d,f,h),i=!0,c._container=f,f.__vue_app__=c,pl(d.component)||d.component.proxy}},unmount(){i&&(e(null,c._container),delete c._container.__vue_app__)},provide(f,p){return o.provides[f]=p,c}};return c}}function oo(e,t,n,s,l=!1){if(ne(e)){e.forEach((d,m)=>oo(d,t&&(ne(t)?t[m]:t),n,s,l));return}if(ss(s)&&!l)return;const o=s.shapeFlag&4?pl(s.component)||s.component.proxy:s.el,a=l?null:o,{i,r:c}=e,f=t&&t.r,p=i.refs===De?i.refs={}:i.refs,h=i.setupState;if(f!=null&&f!==c&&(Re(f)?(p[f]=null,ge(h,f)&&(h[f]=null)):Ae(f)&&(f.value=null)),ie(c))an(c,i,12,[a,p]);else{const d=Re(c),m=Ae(c);if(d||m){const y=()=>{if(e.f){const w=d?p[c]:c.value;l?ne(w)&&Uo(w,o):ne(w)?w.includes(o)||w.push(o):d?(p[c]=[o],ge(h,c)&&(h[c]=p[c])):(c.value=[o],e.k&&(p[e.k]=c.value))}else d?(p[c]=a,ge(h,c)&&(h[c]=a)):Ae(c)&&(c.value=a,e.k&&(p[e.k]=a))};a?(y.id=-1,qe(y,n)):y()}}}const qe=Xd;function Ah(e){return xh(e)}function xh(e,t){const n=ed();n.__VUE__=!0;const{insert:s,remove:l,patchProp:o,createElement:a,createText:i,createComment:c,setText:f,setElementText:p,parentNode:h,nextSibling:d,setScopeId:m=Mt,cloneNode:y,insertStaticContent:w}=e,b=(g,_,x,P=null,D=null,N=null,W=!1,R=null,H=!!_.dynamicChildren)=>{if(g===_)return;g&&!vs(g,_)&&(P=G(g),lt(g,D,N,!0),g=null),_.patchFlag===-2&&(H=!1,_.dynamicChildren=null);const{type:M,ref:J,shapeFlag:X}=_;switch(M){case ra:$(g,_,x,P);break;case hn:C(g,_,x,P);break;case kl:g==null&&k(_,x,P,W);break;case ke:Ie(g,_,x,P,D,N,W,R,H);break;default:X&1?F(g,_,x,P,D,N,W,R,H):X&6?Ze(g,_,x,P,D,N,W,R,H):(X&64||X&128)&&M.process(g,_,x,P,D,N,W,R,H,Pe)}J!=null&&D&&oo(J,g&&g.ref,N,_||g,!_)},$=(g,_,x,P)=>{if(g==null)s(_.el=i(_.children),x,P);else{const D=_.el=g.el;_.children!==g.children&&f(D,_.children)}},C=(g,_,x,P)=>{g==null?s(_.el=c(_.children||""),x,P):_.el=g.el},k=(g,_,x,P)=>{[g.el,g.anchor]=w(g.children,_,x,P,g.el,g.anchor)},E=({el:g,anchor:_},x,P)=>{let D;for(;g&&g!==_;)D=d(g),s(g,x,P),g=D;s(_,x,P)},j=({el:g,anchor:_})=>{let x;for(;g&&g!==_;)x=d(g),l(g),g=x;l(_)},F=(g,_,x,P,D,N,W,R,H)=>{W=W||_.type==="svg",g==null?Y(_,x,P,D,N,W,R,H):he(g,_,D,N,W,R,H)},Y=(g,_,x,P,D,N,W,R)=>{let H,M;const{type:J,props:X,shapeFlag:Q,transition:re,patchFlag:ve,dirs:Ee}=g;if(g.el&&y!==void 0&&ve===-1)H=g.el=y(g.el);else{if(H=g.el=a(g.type,N,X&&X.is,X),Q&8?p(H,g.children):Q&16&&pe(g.children,H,null,P,D,N&&J!=="foreignObject",W,R),Ee&&gn(g,null,P,"created"),X){for(const Se in X)Se!=="value"&&!Er(Se)&&o(H,Se,null,X[Se],N,g.children,P,D,L);"value"in X&&o(H,"value",null,X.value),(M=X.onVnodeBeforeMount)&&xt(M,P,g)}oe(H,g,g.scopeId,W,P)}Ee&&gn(g,null,P,"beforeMount");const Oe=(!D||D&&!D.pendingBranch)&&re&&!re.persisted;Oe&&re.beforeEnter(H),s(H,_,x),((M=X&&X.onVnodeMounted)||Oe||Ee)&&qe(()=>{M&&xt(M,P,g),Oe&&re.enter(H),Ee&&gn(g,null,P,"mounted")},D)},oe=(g,_,x,P,D)=>{if(x&&m(g,x),P)for(let N=0;N<P.length;N++)m(g,P[N]);if(D){let N=D.subTree;if(_===N){const W=D.vnode;oe(g,W,W.scopeId,W.slotScopeIds,D.parent)}}},pe=(g,_,x,P,D,N,W,R,H=0)=>{for(let M=H;M<g.length;M++){const J=g[M]=R?sn(g[M]):Nt(g[M]);b(null,J,_,x,P,D,N,W,R)}},he=(g,_,x,P,D,N,W)=>{const R=_.el=g.el;let{patchFlag:H,dynamicChildren:M,dirs:J}=_;H|=g.patchFlag&16;const X=g.props||De,Q=_.props||De;let re;x&&yn(x,!1),(re=Q.onVnodeBeforeUpdate)&&xt(re,x,_,g),J&&gn(_,g,x,"beforeUpdate"),x&&yn(x,!0);const ve=D&&_.type!=="foreignObject";if(M?_e(g.dynamicChildren,M,R,x,P,ve,N):W||me(g,_,R,null,x,P,ve,N,!1),H>0){if(H&16)Te(R,_,X,Q,x,P,D);else if(H&2&&X.class!==Q.class&&o(R,"class",null,Q.class,D),H&4&&o(R,"style",X.style,Q.style,D),H&8){const Ee=_.dynamicProps;for(let Oe=0;Oe<Ee.length;Oe++){const Se=Ee[Oe],Ot=X[Se],Vn=Q[Se];(Vn!==Ot||Se==="value")&&o(R,Se,Ot,Vn,D,g.children,x,P,L)}}H&1&&g.children!==_.children&&p(R,_.children)}else!W&&M==null&&Te(R,_,X,Q,x,P,D);((re=Q.onVnodeUpdated)||J)&&qe(()=>{re&&xt(re,x,_,g),J&&gn(_,g,x,"updated")},P)},_e=(g,_,x,P,D,N,W)=>{for(let R=0;R<_.length;R++){const H=g[R],M=_[R],J=H.el&&(H.type===ke||!vs(H,M)||H.shapeFlag&70)?h(H.el):x;b(H,M,J,null,P,D,N,W,!0)}},Te=(g,_,x,P,D,N,W)=>{if(x!==P){for(const R in P){if(Er(R))continue;const H=P[R],M=x[R];H!==M&&R!=="value"&&o(g,R,M,H,W,_.children,D,N,L)}if(x!==De)for(const R in x)!Er(R)&&!(R in P)&&o(g,R,x[R],null,W,_.children,D,N,L);"value"in P&&o(g,"value",x.value,P.value)}},Ie=(g,_,x,P,D,N,W,R,H)=>{const M=_.el=g?g.el:i(""),J=_.anchor=g?g.anchor:i("");let{patchFlag:X,dynamicChildren:Q,slotScopeIds:re}=_;re&&(R=R?R.concat(re):re),g==null?(s(M,x,P),s(J,x,P),pe(_.children,x,J,D,N,W,R,H)):X>0&&X&64&&Q&&g.dynamicChildren?(_e(g.dynamicChildren,Q,x,D,N,W,R),(_.key!=null||D&&_===D.subTree)&&sa(g,_,!0)):me(g,_,x,J,D,N,W,R,H)},Ze=(g,_,x,P,D,N,W,R,H)=>{_.slotScopeIds=R,g==null?_.shapeFlag&512?D.ctx.activate(_,x,P,W,H):$e(_,x,P,D,N,W,H):te(g,_,H)},$e=(g,_,x,P,D,N,W)=>{const R=g.component=Mh(g,P,D);if(vu(g)&&(R.ctx.renderer=Pe),Th(R),R.asyncDep){if(D&&D.registerDep(R,se),!g.el){const H=R.subTree=S(hn);C(null,H,_,x)}return}se(R,g,_,x,D,N,W)},te=(g,_,x)=>{const P=_.component=g.component;if(Yd(g,_,x))if(P.asyncDep&&!P.asyncResolved){ee(P,_,x);return}else P.next=_,Ud(P.update),P.update();else _.el=g.el,P.vnode=_},se=(g,_,x,P,D,N,W)=>{const R=()=>{if(g.isMounted){let{next:J,bu:X,u:Q,parent:re,vnode:ve}=g,Ee=J,Oe;yn(g,!1),J?(J.el=ve.el,ee(g,J,W)):J=ve,X&&ts(X),(Oe=J.props&&J.props.onVnodeBeforeUpdate)&&xt(Oe,re,J,ve),yn(g,!0);const Se=Al(g),Ot=g.subTree;g.subTree=Se,b(Ot,Se,h(Ot.el),G(Ot),g,D,N),J.el=Se.el,Ee===null&&Zd(g,Se.el),Q&&qe(Q,D),(Oe=J.props&&J.props.onVnodeUpdated)&&qe(()=>xt(Oe,re,J,ve),D)}else{let J;const{el:X,props:Q}=_,{bm:re,m:ve,parent:Ee}=g,Oe=ss(_);if(yn(g,!1),re&&ts(re),!Oe&&(J=Q&&Q.onVnodeBeforeMount)&&xt(J,Ee,_),yn(g,!0),X&&ue){const Se=()=>{g.subTree=Al(g),ue(X,g.subTree,g,D,null)};Oe?_.type.__asyncLoader().then(()=>!g.isUnmounted&&Se()):Se()}else{const Se=g.subTree=Al(g);b(null,Se,x,P,g,D,N),_.el=Se.el}if(ve&&qe(ve,D),!Oe&&(J=Q&&Q.onVnodeMounted)){const Se=_;qe(()=>xt(J,Ee,Se),D)}(_.shapeFlag&256||Ee&&ss(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&g.a&&qe(g.a,D),g.isMounted=!0,_=x=P=null}},H=g.effect=new Ko(R,()=>uu(M),g.scope),M=g.update=()=>H.run();M.id=g.uid,yn(g,!0),M()},ee=(g,_,x)=>{_.component=g;const P=g.vnode.props;g.vnode=_,g.next=null,gh(g,_.props,P,x),vh(g,_.children,x),fs(),ll(void 0,g.update),ps()},me=(g,_,x,P,D,N,W,R,H=!1)=>{const M=g&&g.children,J=g?g.shapeFlag:0,X=_.children,{patchFlag:Q,shapeFlag:re}=_;if(Q>0){if(Q&128){Qe(M,X,x,P,D,N,W,R,H);return}else if(Q&256){Rt(M,X,x,P,D,N,W,R,H);return}}re&8?(J&16&&L(M,D,N),X!==M&&p(x,X)):J&16?re&16?Qe(M,X,x,P,D,N,W,R,H):L(M,D,N,!0):(J&8&&p(x,""),re&16&&pe(X,x,P,D,N,W,R,H))},Rt=(g,_,x,P,D,N,W,R,H)=>{g=g||Qn,_=_||Qn;const M=g.length,J=_.length,X=Math.min(M,J);let Q;for(Q=0;Q<X;Q++){const re=_[Q]=H?sn(_[Q]):Nt(_[Q]);b(g[Q],re,x,null,D,N,W,R,H)}M>J?L(g,D,N,!0,!1,X):pe(_,x,P,D,N,W,R,H,X)},Qe=(g,_,x,P,D,N,W,R,H)=>{let M=0;const J=_.length;let X=g.length-1,Q=J-1;for(;M<=X&&M<=Q;){const re=g[M],ve=_[M]=H?sn(_[M]):Nt(_[M]);if(vs(re,ve))b(re,ve,x,null,D,N,W,R,H);else break;M++}for(;M<=X&&M<=Q;){const re=g[X],ve=_[Q]=H?sn(_[Q]):Nt(_[Q]);if(vs(re,ve))b(re,ve,x,null,D,N,W,R,H);else break;X--,Q--}if(M>X){if(M<=Q){const re=Q+1,ve=re<J?_[re].el:P;for(;M<=Q;)b(null,_[M]=H?sn(_[M]):Nt(_[M]),x,ve,D,N,W,R,H),M++}}else if(M>Q)for(;M<=X;)lt(g[M],D,N,!0),M++;else{const re=M,ve=M,Ee=new Map;for(M=ve;M<=Q;M++){const ut=_[M]=H?sn(_[M]):Nt(_[M]);ut.key!=null&&Ee.set(ut.key,M)}let Oe,Se=0;const Ot=Q-ve+1;let Vn=!1,Ma=0;const _s=new Array(Ot);for(M=0;M<Ot;M++)_s[M]=0;for(M=re;M<=X;M++){const ut=g[M];if(Se>=Ot){lt(ut,D,N,!0);continue}let It;if(ut.key!=null)It=Ee.get(ut.key);else for(Oe=ve;Oe<=Q;Oe++)if(_s[Oe-ve]===0&&vs(ut,_[Oe])){It=Oe;break}It===void 0?lt(ut,D,N,!0):(_s[It-ve]=M+1,It>=Ma?Ma=It:Vn=!0,b(ut,_[It],x,null,D,N,W,R,H),Se++)}const Ta=Vn?Ch(_s):Qn;for(Oe=Ta.length-1,M=Ot-1;M>=0;M--){const ut=ve+M,It=_[ut],Fa=ut+1<J?_[ut+1].el:P;_s[M]===0?b(null,It,x,Fa,D,N,W,R,H):Vn&&(Oe<0||M!==Ta[Oe]?At(It,x,Fa,2):Oe--)}}},At=(g,_,x,P,D=null)=>{const{el:N,type:W,transition:R,children:H,shapeFlag:M}=g;if(M&6){At(g.component.subTree,_,x,P);return}if(M&128){g.suspense.move(_,x,P);return}if(M&64){W.move(g,_,x,Pe);return}if(W===ke){s(N,_,x);for(let X=0;X<H.length;X++)At(H[X],_,x,P);s(g.anchor,_,x);return}if(W===kl){E(g,_,x);return}if(P!==2&&M&1&&R)if(P===0)R.beforeEnter(N),s(N,_,x),qe(()=>R.enter(N),D);else{const{leave:X,delayLeave:Q,afterLeave:re}=R,ve=()=>s(N,_,x),Ee=()=>{X(N,()=>{ve(),re&&re()})};Q?Q(N,ve,Ee):Ee()}else s(N,_,x)},lt=(g,_,x,P=!1,D=!1)=>{const{type:N,props:W,ref:R,children:H,dynamicChildren:M,shapeFlag:J,patchFlag:X,dirs:Q}=g;if(R!=null&&oo(R,null,x,g,!0),J&256){_.ctx.deactivate(g);return}const re=J&1&&Q,ve=!ss(g);let Ee;if(ve&&(Ee=W&&W.onVnodeBeforeUnmount)&&xt(Ee,_,g),J&6)Z(g.component,x,P);else{if(J&128){g.suspense.unmount(x,P);return}re&&gn(g,null,_,"beforeUnmount"),J&64?g.type.remove(g,_,x,D,Pe,P):M&&(N!==ke||X>0&&X&64)?L(M,_,x,!1,!0):(N===ke&&X&384||!D&&J&16)&&L(H,_,x),P&&Un(g)}(ve&&(Ee=W&&W.onVnodeUnmounted)||re)&&qe(()=>{Ee&&xt(Ee,_,g),re&&gn(g,null,_,"unmounted")},x)},Un=g=>{const{type:_,el:x,anchor:P,transition:D}=g;if(_===ke){B(x,P);return}if(_===kl){j(g);return}const N=()=>{l(x),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(g.shapeFlag&1&&D&&!D.persisted){const{leave:W,delayLeave:R}=D,H=()=>W(x,N);R?R(g.el,N,H):H()}else N()},B=(g,_)=>{let x;for(;g!==_;)x=d(g),l(g),g=x;l(_)},Z=(g,_,x)=>{const{bum:P,scope:D,update:N,subTree:W,um:R}=g;P&&ts(P),D.stop(),N&&(N.active=!1,lt(W,g,_,x)),R&&qe(R,_),qe(()=>{g.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},L=(g,_,x,P=!1,D=!1,N=0)=>{for(let W=N;W<g.length;W++)lt(g[W],_,x,P,D)},G=g=>g.shapeFlag&6?G(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),be=(g,_,x)=>{g==null?_._vnode&&lt(_._vnode,null,null,!0):b(_._vnode||null,g,_,null,null,null,x),du(),_._vnode=g},Pe={p:b,um:lt,m:At,r:Un,mt:$e,mc:pe,pc:me,pbc:_e,n:G,o:e};let de,ue;return t&&([de,ue]=t(Pe)),{render:be,hydrate:de,createApp:wh(be,de)}}function yn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function sa(e,t,n=!1){const s=e.children,l=t.children;if(ne(s)&&ne(l))for(let o=0;o<s.length;o++){const a=s[o];let i=l[o];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=l[o]=sn(l[o]),i.el=a.el),n||sa(a,i))}}function Ch(e){const t=e.slice(),n=[0];let s,l,o,a,i;const c=e.length;for(s=0;s<c;s++){const f=e[s];if(f!==0){if(l=n[n.length-1],e[l]<f){t[s]=l,n.push(s);continue}for(o=0,a=n.length-1;o<a;)i=o+a>>1,e[n[i]]<f?o=i+1:a=i;f<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=t[a];return n}const kh=e=>e.__isTeleport,Ms=e=>e&&(e.disabled||e.disabled===""),ni=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,ao=(e,t)=>{const n=e&&e.to;return Re(n)?t?t(n):null:n},$h={__isTeleport:!0,process(e,t,n,s,l,o,a,i,c,f){const{mc:p,pc:h,pbc:d,o:{insert:m,querySelector:y,createText:w,createComment:b}}=f,$=Ms(t.props);let{shapeFlag:C,children:k,dynamicChildren:E}=t;if(e==null){const j=t.el=w(""),F=t.anchor=w("");m(j,n,s),m(F,n,s);const Y=t.target=ao(t.props,y),oe=t.targetAnchor=w("");Y&&(m(oe,Y),a=a||ni(Y));const pe=(he,_e)=>{C&16&&p(k,he,_e,l,o,a,i,c)};$?pe(n,F):Y&&pe(Y,oe)}else{t.el=e.el;const j=t.anchor=e.anchor,F=t.target=e.target,Y=t.targetAnchor=e.targetAnchor,oe=Ms(e.props),pe=oe?n:F,he=oe?j:Y;if(a=a||ni(F),E?(d(e.dynamicChildren,E,pe,l,o,a,i),sa(e,t,!0)):c||h(e,t,pe,he,l,o,a,i,!1),$)oe||wr(t,n,j,f,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const _e=t.target=ao(t.props,y);_e&&wr(t,_e,null,f,0)}else oe&&wr(t,F,Y,f,1)}},remove(e,t,n,s,{um:l,o:{remove:o}},a){const{shapeFlag:i,children:c,anchor:f,targetAnchor:p,target:h,props:d}=e;if(h&&o(p),(a||!Ms(d))&&(o(f),i&16))for(let m=0;m<c.length;m++){const y=c[m];l(y,t,n,!0,!!y.dynamicChildren)}},move:wr,hydrate:Eh};function wr(e,t,n,{o:{insert:s},m:l},o=2){o===0&&s(e.targetAnchor,t,n);const{el:a,anchor:i,shapeFlag:c,children:f,props:p}=e,h=o===2;if(h&&s(a,t,n),(!h||Ms(p))&&c&16)for(let d=0;d<f.length;d++)l(f[d],t,n,2);h&&s(i,t,n)}function Eh(e,t,n,s,l,o,{o:{nextSibling:a,parentNode:i,querySelector:c}},f){const p=t.target=ao(t.props,c);if(p){const h=p._lpa||p.firstChild;if(t.shapeFlag&16)if(Ms(t.props))t.anchor=f(a(e),t,i(e),n,s,l,o),t.targetAnchor=h;else{t.anchor=a(e);let d=h;for(;d;)if(d=a(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,p._lpa=t.targetAnchor&&a(t.targetAnchor);break}f(h,t,p,n,s,l,o)}}return t.anchor&&a(t.anchor)}const Oh=$h,ke=Symbol(void 0),ra=Symbol(void 0),hn=Symbol(void 0),kl=Symbol(void 0),Ts=[];let St=null;function A(e=!1){Ts.push(St=e?null:[])}function Bh(){Ts.pop(),St=Ts[Ts.length-1]||null}let Xs=1;function si(e){Xs+=e}function Fu(e){return e.dynamicChildren=Xs>0?St||Qn:null,Bh(),Xs>0&&St&&St.push(e),e}function z(e,t,n,s,l,o){return Fu(r(e,t,n,s,l,o,!0))}function q(e,t,n,s,l){return Fu(S(e,t,n,s,l,!0))}function Fn(e){return e?e.__v_isVNode===!0:!1}function vs(e,t){return e.type===t.type&&e.key===t.key}const fl="__vInternal",Lu=({key:e})=>e!=null?e:null,Or=({ref:e,ref_key:t,ref_for:n})=>e!=null?Re(e)||Ae(e)||ie(e)?{i:Xe,r:e,k:t,f:!!n}:e:null;function r(e,t=null,n=null,s=0,l=null,o=e===ke?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Lu(t),ref:t&&Or(t),scopeId:al,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:l,dynamicChildren:null,appContext:null};return i?(la(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=Re(n)?8:16),Xs>0&&!a&&St&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&St.push(c),c}const S=Dh;function Dh(e,t=null,n=null,s=0,l=null,o=!1){if((!e||e===ih)&&(e=hn),Fn(e)){const i=Ln(e,t,!0);return n&&la(i,n),Xs>0&&!o&&St&&(i.shapeFlag&6?St[St.indexOf(e)]=i:St.push(i)),i.patchFlag|=-2,i}if(Ih(e)&&(e=e.__vccOpts),t){t=le(t);let{class:i,style:c}=t;i&&!Re(i)&&(t.class=Fe(i)),Ue(c)&&(ou(c)&&!ne(c)&&(c=rt({},c)),t.style=We(c))}const a=Re(e)?1:gu(e)?128:kh(e)?64:Ue(e)?4:ie(e)?2:0;return r(e,t,n,s,l,a,o,!0)}function le(e){return e?ou(e)||fl in e?rt({},e):e:null}function Ln(e,t,n=!1){const{props:s,ref:l,patchFlag:o,children:a}=e,i=t?Ke(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&Lu(i),ref:t&&t.ref?n&&l?ne(l)?l.concat(Or(t)):[l,Or(t)]:Or(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ke?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ln(e.ssContent),ssFallback:e.ssFallback&&Ln(e.ssFallback),el:e.el,anchor:e.anchor}}function u(e=" ",t=0){return S(ra,null,e,t)}function U(e="",t=!1){return t?(A(),q(hn,null,e)):S(hn,null,e)}function Nt(e){return e==null||typeof e=="boolean"?S(hn):ne(e)?S(ke,null,e.slice()):typeof e=="object"?sn(e):S(ra,null,String(e))}function sn(e){return e.el===null||e.memo?e:Ln(e)}function la(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(ne(t))n=16;else if(typeof t=="object")if(s&65){const l=t.default;l&&(l._c&&(l._d=!1),la(e,l()),l._c&&(l._d=!0));return}else{n=32;const l=t._;!l&&!(fl in t)?t._ctx=Xe:l===3&&Xe&&(Xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ie(t)?(t={default:t,_ctx:Xe},n=32):(t=String(t),s&64?(n=16,t=[u(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ke(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const l in s)if(l==="class")t.class!==s.class&&(t.class=Fe([t.class,s.class]));else if(l==="style")t.style=We([t.style,s.style]);else if(Jr(l)){const o=t[l],a=s[l];a&&o!==a&&!(ne(o)&&o.includes(a))&&(t[l]=o?[].concat(o,a):a)}else l!==""&&(t[l]=s[l])}return t}function xt(e,t,n,s=null){Tt(e,t,7,[n,s])}const Ph=Tu();let Sh=0;function Mh(e,t,n){const s=e.type,l=(t?t.appContext:e.appContext)||Ph,o={uid:Sh++,vnode:e,type:s,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Du(s,l),emitsOptions:mu(s,l),emit:null,emitted:null,propsDefaults:De,inheritAttrs:s.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=zd.bind(null,o),e.ce&&e.ce(o),o}let Ve=null;const In=()=>Ve||Xe,as=e=>{Ve=e,e.scope.on()},Pn=()=>{Ve&&Ve.scope.off(),Ve=null};function Ru(e){return e.vnode.shapeFlag&4}let Gs=!1;function Th(e,t=!1){Gs=t;const{props:n,children:s}=e.vnode,l=Ru(e);mh(e,n,l,t),_h(e,s);const o=l?Fh(e,t):void 0;return Gs=!1,o}function Fh(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=sl(new Proxy(e.ctx,ch));const{setup:s}=n;if(s){const l=e.setupContext=s.length>1?Rh(e):null;as(e),fs();const o=an(s,e,0,[e.props,l]);if(ps(),Pn(),Kc(o)){if(o.then(Pn,Pn),t)return o.then(a=>{ri(e,a,t)}).catch(a=>{rl(a,e,0)});e.asyncDep=o}else ri(e,o,t)}else Iu(e,t)}function ri(e,t,n){ie(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ue(t)&&(e.setupState=iu(t)),Iu(e,n)}let li;function Iu(e,t,n){const s=e.type;if(!e.render){if(!t&&li&&!s.render){const l=s.template;if(l){const{isCustomElement:o,compilerOptions:a}=e.appContext.config,{delimiters:i,compilerOptions:c}=s,f=rt(rt({isCustomElement:o,delimiters:i},a),c);s.render=li(l,f)}}e.render=s.render||Mt}as(e),fs(),uh(e),ps(),Pn()}function Lh(e){return new Proxy(e.attrs,{get(t,n){return bt(e,"get","$attrs"),t[n]}})}function Rh(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=Lh(e))},slots:e.slots,emit:e.emit,expose:t}}function pl(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(iu(sl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Nr)return Nr[n](e)}}))}function io(e){return ie(e)&&e.displayName||e.name}function Ih(e){return ie(e)&&"__vccOpts"in e}const O=(e,t)=>Nd(e,t,Gs);function yt(e,t,n){const s=arguments.length;return s===2?Ue(t)&&!ne(t)?Fn(t)?S(e,null,[t]):S(e,t):S(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Fn(n)&&(n=[n]),S(e,t,n))}const Nh="3.2.36",jh="http://www.w3.org/2000/svg",An=typeof document!="undefined"?document:null,oi=An&&An.createElement("template"),Hh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const l=t?An.createElementNS(jh,e):An.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&l.setAttribute("multiple",s.multiple),l},createText:e=>An.createTextNode(e),createComment:e=>An.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>An.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s,l,o){const a=n?n.previousSibling:t.lastChild;if(l&&(l===o||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),n),!(l===o||!(l=l.nextSibling)););else{oi.innerHTML=s?`<svg>${e}</svg>`:e;const i=oi.content;if(s){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Uh(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Vh(e,t,n){const s=e.style,l=Re(n);if(n&&!l){for(const o in n)co(s,o,n[o]);if(t&&!Re(t))for(const o in t)n[o]==null&&co(s,o,"")}else{const o=s.display;l?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=o)}}const ai=/\s*!important$/;function co(e,t,n){if(ne(n))n.forEach(s=>co(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Wh(e,t);ai.test(n)?e.setProperty(Rn(s),n.replace(ai,""),"important"):e[s]=n}}const ii=["Webkit","Moz","ms"],$l={};function Wh(e,t){const n=$l[t];if(n)return n;let s=Vt(t);if(s!=="filter"&&s in e)return $l[t]=s;s=tl(s);for(let l=0;l<ii.length;l++){const o=ii[l]+s;if(o in e)return $l[t]=o}return t}const ci="http://www.w3.org/1999/xlink";function zh(e,t,n,s,l){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ci,t.slice(6,t.length)):e.setAttributeNS(ci,t,n);else{const o=Wp(t);n==null||o&&!Vc(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function Kh(e,t,n,s,l,o,a){if(t==="innerHTML"||t==="textContent"){s&&a(s,l,o),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let i=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Vc(n):n==null&&c==="string"?(n="",i=!0):c==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(t)}const[Nu,qh]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let uo=0;const Yh=Promise.resolve(),Zh=()=>{uo=0},Xh=()=>uo||(Yh.then(Zh),uo=Nu());function Zn(e,t,n,s){e.addEventListener(t,n,s)}function Gh(e,t,n,s){e.removeEventListener(t,n,s)}function Jh(e,t,n,s,l=null){const o=e._vei||(e._vei={}),a=o[t];if(s&&a)a.value=s;else{const[i,c]=Qh(t);if(s){const f=o[t]=em(s,l);Zn(e,i,f,c)}else a&&(Gh(e,i,a,c),o[t]=void 0)}}const ui=/(?:Once|Passive|Capture)$/;function Qh(e){let t;if(ui.test(e)){t={};let n;for(;n=e.match(ui);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Rn(e.slice(2)),t]}function em(e,t){const n=s=>{const l=s.timeStamp||Nu();(qh||l>=n.attached-1)&&Tt(tm(s,n.value),t,5,[s])};return n.value=e,n.attached=Xh(),n}function tm(e,t){if(ne(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>l=>!l._stopped&&s&&s(l))}else return t}const fi=/^on[a-z]/,nm=(e,t,n,s,l=!1,o,a,i,c)=>{t==="class"?Uh(e,s,l):t==="style"?Vh(e,n,s):Jr(t)?Ho(t)||Jh(e,t,n,s,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):sm(e,t,s,l))?Kh(e,t,s,o,a,i,c):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),zh(e,t,s,l))};function sm(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&fi.test(t)&&ie(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||fi.test(t)&&Re(n)?!1:t in e}const pi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ne(t)?n=>ts(t,n):t};function rm(e){e.target.composing=!0}function di(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const lm={created(e,{modifiers:{lazy:t,trim:n,number:s}},l){e._assign=pi(l);const o=s||l.props&&l.props.type==="number";Zn(e,t?"change":"input",a=>{if(a.target.composing)return;let i=e.value;n&&(i=i.trim()),o&&(i=Yl(i)),e._assign(i)}),n&&Zn(e,"change",()=>{e.value=e.value.trim()}),t||(Zn(e,"compositionstart",rm),Zn(e,"compositionend",di),Zn(e,"change",di))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:l}},o){if(e._assign=pi(o),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(l||e.type==="number")&&Yl(e.value)===t))return;const a=t==null?"":t;e.value!==a&&(e.value=a)}},om={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},hi=(e,t)=>n=>{if(!("key"in n))return;const s=Rn(n.key);if(t.some(l=>l===s||om[l]===s))return e(n)},ju={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):bs(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),bs(e,!0),s.enter(e)):s.leave(e,()=>{bs(e,!1)}):bs(e,t))},beforeUnmount(e,{value:t}){bs(e,t)}};function bs(e,t){e.style.display=t?e._vod:"none"}const am=rt({patchProp:nm},Hh);let mi;function im(){return mi||(mi=Ah(am))}const cm=(...e)=>{const t=im().createApp(...e),{mount:n}=t;return t.mount=s=>{const l=um(s);if(!l)return;const o=t._component;!ie(o)&&!o.render&&!o.template&&(o.template=l.innerHTML),l.innerHTML="";const a=n(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),a},t};function um(e){return Re(e)?document.querySelector(e):e}var fm=Object.defineProperty,gi=Object.getOwnPropertySymbols,pm=Object.prototype.hasOwnProperty,dm=Object.prototype.propertyIsEnumerable,yi=(e,t,n)=>t in e?fm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,hm=(e,t)=>{for(var n in t||(t={}))pm.call(t,n)&&yi(e,n,t[n]);if(gi)for(var n of gi(t))dm.call(t,n)&&yi(e,n,t[n]);return e},Hu="usehead",_i="head:count",El="data-head-attrs",mm=(e,t,n)=>{const s=n.createElement(e);for(const l of Object.keys(t)){let o=t[l];l==="key"||o===!1||(l==="children"?s.textContent=o:s.setAttribute(l,o))}return s};function gm(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){const s=t.cloneNode(!0);return s.setAttribute("nonce",""),s.nonce=n,n===e.nonce&&e.isEqualNode(s)}}return e.isEqualNode(t)}var ym=e=>{const t=["key","id","name","property"];for(const n of t){const s=typeof e.getAttribute=="function"?e.hasAttribute(n)?e.getAttribute(n):void 0:e[n];if(s!==void 0)return{name:n,value:s}}},_m=()=>{const e=I(Hu);if(!e)throw new Error("You may forget to apply app.use(head)");return e},vm=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],bm=e=>{const t=[];for(const n of Object.keys(e))if(e[n]!=null){if(n==="title")t.push({tag:n,props:{children:e[n]}});else if(n==="base")t.push({tag:n,props:hm({key:"default"},e[n])});else if(vm.includes(n)){const s=e[n];Array.isArray(s)?s.forEach(l=>{t.push({tag:n,props:l})}):s&&t.push({tag:n,props:s})}}return t},vi=(e,t)=>{const n=e.getAttribute(El);if(n)for(const l of n.split(","))l in t||e.removeAttribute(l);const s=[];for(const l in t){const o=t[l];o!=null&&(o===!1?e.removeAttribute(l):e.setAttribute(l,o),s.push(l))}s.length?e.setAttribute(El,s.join(",")):e.removeAttribute(El)},wm=(e=window.document,t,n)=>{var s;const l=e.head;let o=l.querySelector(`meta[name="${_i}"]`);const a=o?Number(o.getAttribute("content")):0,i=[];if(o)for(let f=0,p=o.previousElementSibling;f<a;f++,p=(p==null?void 0:p.previousElementSibling)||null)((s=p==null?void 0:p.tagName)==null?void 0:s.toLowerCase())===t&&i.push(p);else o=e.createElement("meta"),o.setAttribute("name",_i),o.setAttribute("content","0"),l.append(o);let c=n.map(f=>mm(f.tag,f.props,e));c=c.filter(f=>{for(let p=0;p<i.length;p++){const h=i[p];if(gm(h,f))return i.splice(p,1),!1}return!0}),i.forEach(f=>{var p;return(p=f.parentNode)==null?void 0:p.removeChild(f)}),c.forEach(f=>{l.insertBefore(f,o)}),o.setAttribute("content",""+(a-i.length+c.length))},Am=()=>{let e=[],t=new Set;const n={install(s){s.config.globalProperties.$head=n,s.provide(Hu,n)},get headTags(){const s=[];return e.forEach(l=>{bm(l.value).forEach(a=>{if(a.tag==="meta"||a.tag==="base"||a.tag==="script"){const i=ym(a.props);if(i){let c=-1;for(let f=0;f<s.length;f++){const p=s[f],h=p.props[i.name],d=a.props[i.name];if(p.tag===a.tag&&h===d){c=f;break}}c!==-1&&s.splice(c,1)}}s.push(a)})}),s},addHeadObjs(s){e.push(s)},removeHeadObjs(s){e=e.filter(l=>l!==s)},updateDOM(s=window.document){let l,o={},a={};const i={};for(const f of n.headTags){if(f.tag==="title"){l=f.props.children;continue}if(f.tag==="htmlAttrs"){Object.assign(o,f.props);continue}if(f.tag==="bodyAttrs"){Object.assign(a,f.props);continue}i[f.tag]=i[f.tag]||[],i[f.tag].push(f)}l!==void 0&&(s.title=l),vi(s.documentElement,o),vi(s.body,a);const c=new Set([...Object.keys(i),...t]);for(const f of c)wm(s,f,i[f]||[]);t.clear(),Object.keys(i).forEach(f=>t.add(f))}};return n},xm=typeof window!="undefined",Cm=e=>{const t=K(e),n=_m();n.addHeadObjs(t),xm&&(ar(()=>{n.updateDOM()}),cl(()=>{n.removeHeadObjs(t),n.updateDOM()}))};const Fs=Symbol("v-click-clicks"),xn=Symbol("v-click-clicks-elements"),fo=Symbol("v-click-clicks-order-map"),Ls=Symbol("v-click-clicks-disabled"),Uu=Symbol("slidev-slide-scale"),V=Symbol("slidev-slidev-context"),km=Symbol("slidev-route"),$m=Symbol("slidev-slide-context"),wn="slidev-vclick-target",Ol="slidev-vclick-hidden",Em="slidev-vclick-fade",Bl="slidev-vclick-hidden-explicitly",ws="slidev-vclick-current",Ar="slidev-vclick-prior";function Om(e){return e=e||[],Array.isArray(e)?e:[e]}function po(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function Bm(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const l=[];let o=t;for(;o<n;)l.push(o),o+=s||1;return l}function Dm(e){return e!=null}function Pm(e,t){return Object.fromEntries(Object.entries(e).map(([n,s])=>t(n,s)).filter(Dm))}var $n={theme:"seriph",title:"Welcome to UTown Team",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",record:"dev",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",class:"text-center"};const Ce=$n;var Hc;const cn=(Hc=Ce.aspectRatio)!=null?Hc:16/9;var Uc;const Sn=(Uc=Ce.canvasWidth)!=null?Uc:980,Vu=Math.round(Sn/cn),Wu=O(()=>Pm(Ce.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function Et(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Nn=Le({page:0,clicks:0});let Sm=[],Mm=[];Et(Nn,"$syncUp",!0);Et(Nn,"$syncDown",!0);Et(Nn,"$paused",!1);Et(Nn,"$onSet",e=>Sm.push(e));Et(Nn,"$onPatch",e=>Mm.push(e));Et(Nn,"$patch",async()=>!1);function zu(e,t,n=!1){const s=[];let l=!1,o=!1,a,i;const c=Le(t);function f(m){s.push(m)}function p(m,y){clearTimeout(a),l=!0,c[m]=y,a=setTimeout(()=>l=!1,0)}function h(m){l||(clearTimeout(i),o=!0,Object.entries(m).forEach(([y,w])=>{c[y]=w}),i=setTimeout(()=>o=!1,0))}function d(m){let y;n?n&&window.addEventListener("storage",b=>{b&&b.key===m&&b.newValue&&h(JSON.parse(b.newValue))}):(y=new BroadcastChannel(m),y.addEventListener("message",b=>h(b.data)));function w(){!n&&y&&!o?y.postMessage(xe(c)):n&&!o&&window.localStorage.setItem(m,JSON.stringify(c)),l||s.forEach(b=>b(c))}if(fe(c,w,{deep:!0}),n){const b=window.localStorage.getItem(m);b&&h(JSON.parse(b))}}return{init:d,onPatch:f,patch:p,state:c}}const{init:Tm,onPatch:Fm,patch:bi,state:Dl}=zu(Nn,{page:1,clicks:0}),jn=Le({});let Lm=[],Rm=[];Et(jn,"$syncUp",!0);Et(jn,"$syncDown",!0);Et(jn,"$paused",!1);Et(jn,"$onSet",e=>Lm.push(e));Et(jn,"$onPatch",e=>Rm.push(e));Et(jn,"$patch",async()=>!1);const{init:Im,onPatch:Nm,patch:Ku,state:Hr}=zu(jn,{},!1),jm="modulepreload",wi={},Hm="/redis_intro/",hs=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${Hm}${s}`,s in wi)return;wi[s]=!0;const l=s.endsWith(".css"),o=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=l?"stylesheet":jm,l||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),l)return new Promise((i,c)=>{a.addEventListener("load",i),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())};function ot(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)}function Um(e,t){if(Array.isArray(e)){e.splice(t,1);return}delete e[t]}function mn(e){return sd()?(rd(e),!0):!1}function Ne(...e){return O(()=>e.every(t=>v(t)))}function pt(e){return O(()=>!v(e))}function Vm(e){if(!Ae(e))return Le(e);const t=new Proxy({},{get(n,s,l){return v(Reflect.get(e.value,s,l))},set(n,s,l){return Ae(e.value[s])&&!Ae(l)?e.value[s].value=l:e.value[s]=l,!0},deleteProperty(n,s){return Reflect.deleteProperty(e.value,s)},has(n,s){return Reflect.has(e.value,s)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Le(t)}var Ai;const $t=typeof window!="undefined",Wm=e=>typeof e!="undefined",zm=Object.prototype.toString,Km=e=>typeof e=="number",qu=e=>typeof e=="string",Ur=e=>zm.call(e)==="[object Object]",ho=()=>+Date.now(),un=()=>{};$t&&((Ai=window==null?void 0:window.navigator)==null?void 0:Ai.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function qm(e,t){function n(...s){e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})}return n}const Yu=e=>e();function Ym(e=Yu){const t=K(!0);function n(){t.value=!1}function s(){t.value=!0}return{isActive:t,pause:n,resume:s,eventFilter:(...o)=>{t.value&&e(...o)}}}function Zm(e,t){var n;if(typeof e=="number")return e+t;const s=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",l=e.slice(s.length),o=parseFloat(s)+t;return Number.isNaN(o)?e:o+l}var Xm=Object.defineProperty,Gm=Object.defineProperties,Jm=Object.getOwnPropertyDescriptors,xi=Object.getOwnPropertySymbols,Qm=Object.prototype.hasOwnProperty,eg=Object.prototype.propertyIsEnumerable,Ci=(e,t,n)=>t in e?Xm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,tg=(e,t)=>{for(var n in t||(t={}))Qm.call(t,n)&&Ci(e,n,t[n]);if(xi)for(var n of xi(t))eg.call(t,n)&&Ci(e,n,t[n]);return e},ng=(e,t)=>Gm(e,Jm(t));function sg(e){if(!Ae(e))return Fd(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=Td(()=>({get(){return e.value[n]},set(s){if(Array.isArray(e.value)){const l=[...e.value];l[n]=s,e.value=l}else{const l=ng(tg({},e.value),{[n]:s});Object.setPrototypeOf(l,e.value),e.value=l}}}));return t}function rg(e,t=!0){In()?Au(e):t?e():Ye(e)}function lg(e,t=!0){In()?ds(e):t?e():Ye(e)}function oa(e){In()&&ul(e)}function og(e,t=1e3,n={}){const{immediate:s=!0,immediateCallback:l=!1}=n;let o=null;const a=K(!1);function i(){o&&(clearInterval(o),o=null)}function c(){a.value=!1,i()}function f(){v(t)<=0||(a.value=!0,l&&e(),i(),o=setInterval(e,v(t)))}if(s&&$t&&f(),Ae(t)){const p=fe(t,()=>{s&&$t&&f()});mn(p)}return mn(c),{isActive:a,pause:c,resume:f}}function Zu(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,l=Ae(e),o=K(e);function a(i){return arguments.length?(o.value=i,o.value):(o.value=o.value===v(n)?v(s):v(n),o.value)}return l?a:[o,a]}var ki=Object.getOwnPropertySymbols,ag=Object.prototype.hasOwnProperty,ig=Object.prototype.propertyIsEnumerable,cg=(e,t)=>{var n={};for(var s in e)ag.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&ki)for(var s of ki(e))t.indexOf(s)<0&&ig.call(e,s)&&(n[s]=e[s]);return n};function ug(e,t,n={}){const s=n,{eventFilter:l=Yu}=s,o=cg(s,["eventFilter"]);return fe(e,qm(l,t),o)}function fg(e,t,n){const s=fe(e,(...l)=>(Ye(()=>s()),t(...l)),n)}var pg=Object.defineProperty,dg=Object.defineProperties,hg=Object.getOwnPropertyDescriptors,Vr=Object.getOwnPropertySymbols,Xu=Object.prototype.hasOwnProperty,Gu=Object.prototype.propertyIsEnumerable,$i=(e,t,n)=>t in e?pg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,mg=(e,t)=>{for(var n in t||(t={}))Xu.call(t,n)&&$i(e,n,t[n]);if(Vr)for(var n of Vr(t))Gu.call(t,n)&&$i(e,n,t[n]);return e},gg=(e,t)=>dg(e,hg(t)),yg=(e,t)=>{var n={};for(var s in e)Xu.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Vr)for(var s of Vr(e))t.indexOf(s)<0&&Gu.call(e,s)&&(n[s]=e[s]);return n};function _g(e,t,n={}){const s=n,{eventFilter:l}=s,o=yg(s,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:f}=Ym(l);return{stop:ug(e,t,gg(mg({},o),{eventFilter:a})),pause:i,resume:c,isActive:f}}function at(e){var t;const n=v(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Je=$t?window:void 0,vg=$t?window.document:void 0;function Me(...e){let t,n,s,l;if(qu(e[0])?([n,s,l]=e,t=Je):[t,n,s,l]=e,!t)return un;let o=un;const a=fe(()=>at(t),c=>{o(),c&&(c.addEventListener(n,s,l),o=()=>{c.removeEventListener(n,s,l),o=un})},{immediate:!0,flush:"post"}),i=()=>{a(),o()};return mn(i),i}function bg(e,t,n={}){const{window:s=Je,ignore:l,capture:o=!0}=n;if(!s)return;const a=K(!0);let i;const c=h=>{s.clearTimeout(i);const d=at(e),m=h.composedPath();!d||d===h.target||m.includes(d)||!a.value||l&&l.length>0&&l.some(y=>{const w=at(y);return w&&(h.target===w||m.includes(w))})||t(h)},f=[Me(s,"click",c,{passive:!0,capture:o}),Me(s,"pointerdown",h=>{const d=at(e);a.value=!!d&&!h.composedPath().includes(d)},{passive:!0}),Me(s,"pointerup",h=>{i=s.setTimeout(()=>c(h),50)},{passive:!0})];return()=>f.forEach(h=>h())}const wg=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function Ag(e,t,n={}){const{target:s=Je,eventName:l="keydown",passive:o=!1}=n,a=wg(e);return Me(s,l,c=>{a(c)&&t(c)},o)}function xg(e={}){const{window:t=Je}=e,n=K(0);return t&&(Me(t,"blur",()=>n.value+=1,!0),Me(t,"focus",()=>n.value+=1,!0)),O(()=>(n.value,t==null?void 0:t.document.activeElement))}function Br(e,t={}){const{window:n=Je}=t,s=Boolean(n&&"matchMedia"in n);let l;const o=K(!1),a=()=>{!s||(l||(l=n.matchMedia(e)),o.value=l.matches)};return rg(()=>{a(),l&&("addEventListener"in l?l.addEventListener("change",a):l.addListener(a),mn(()=>{"removeEventListener"in l?l.removeEventListener("change",a):l.removeListener(a)}))}),o}const Cg={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var kg=Object.defineProperty,Ei=Object.getOwnPropertySymbols,$g=Object.prototype.hasOwnProperty,Eg=Object.prototype.propertyIsEnumerable,Oi=(e,t,n)=>t in e?kg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Og=(e,t)=>{for(var n in t||(t={}))$g.call(t,n)&&Oi(e,n,t[n]);if(Ei)for(var n of Ei(t))Eg.call(t,n)&&Oi(e,n,t[n]);return e};function Bg(e,t={}){function n(i,c){let f=e[i];return c!=null&&(f=Zm(f,c)),typeof f=="number"&&(f=`${f}px`),f}const{window:s=Je}=t;function l(i){return s?s.matchMedia(i).matches:!1}const o=i=>Br(`(min-width: ${n(i)})`,t),a=Object.keys(e).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>o(c),enumerable:!0,configurable:!0}),i),{});return Og({greater:o,smaller(i){return Br(`(max-width: ${n(i,-.1)})`,t)},between(i,c){return Br(`(min-width: ${n(i)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(i){return l(`(min-width: ${n(i)})`)},isSmaller(i){return l(`(max-width: ${n(i,-.1)})`)},isInBetween(i,c){return l(`(min-width: ${n(i)}) and (max-width: ${n(c,-.1)})`)}},a)}const mo=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},go="__vueuse_ssr_handlers__";mo[go]=mo[go]||{};const Dg=mo[go];function Pg(e,t){return Dg[e]||t}function Sg(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const Mg={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Lt(e,t,n,s={}){var l;const{flush:o="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,shallow:f,window:p=Je,eventFilter:h,onError:d=F=>{console.error(F)}}=s,m=(f?Wt:K)(t);if(!n)try{n=Pg("getDefaultStorage",()=>{var F;return(F=Je)==null?void 0:F.localStorage})()}catch(F){d(F)}if(!n)return m;const y=v(t),w=Sg(y),b=(l=s.serializer)!=null?l:Mg[w],{pause:$,resume:C}=_g(m,()=>k(m.value),{flush:o,deep:a,eventFilter:h});return p&&i&&Me(p,"storage",j),j(),m;function k(F){try{F==null?n.removeItem(e):n.setItem(e,b.write(F))}catch(Y){d(Y)}}function E(F){if(!(F&&F.key!==e)){$();try{const Y=F?F.newValue:n.getItem(e);return Y==null?(c&&y!==null&&n.setItem(e,b.write(y)),y):typeof Y!="string"?Y:b.read(Y)}catch(Y){d(Y)}finally{C()}}}function j(F){F&&F.key!==e||(m.value=E(F))}}function Tg(e){return Br("(prefers-color-scheme: dark)",e)}var Fg=Object.defineProperty,Lg=Object.defineProperties,Rg=Object.getOwnPropertyDescriptors,Bi=Object.getOwnPropertySymbols,Ig=Object.prototype.hasOwnProperty,Ng=Object.prototype.propertyIsEnumerable,Di=(e,t,n)=>t in e?Fg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,jg=(e,t)=>{for(var n in t||(t={}))Ig.call(t,n)&&Di(e,n,t[n]);if(Bi)for(var n of Bi(t))Ng.call(t,n)&&Di(e,n,t[n]);return e},Hg=(e,t)=>Lg(e,Rg(t));function d9(e,t={}){var n,s;const l=(n=t.draggingElement)!=null?n:Je,o=K((s=t.initialValue)!=null?s:{x:0,y:0}),a=K(),i=d=>t.pointerTypes?t.pointerTypes.includes(d.pointerType):!0,c=d=>{v(t.preventDefault)&&d.preventDefault(),v(t.stopPropagation)&&d.stopPropagation()},f=d=>{var m;if(!i(d)||v(t.exact)&&d.target!==v(e))return;const y=v(e).getBoundingClientRect(),w={x:d.pageX-y.left,y:d.pageY-y.top};((m=t.onStart)==null?void 0:m.call(t,w,d))!==!1&&(a.value=w,c(d))},p=d=>{var m;!i(d)||!a.value||(o.value={x:d.pageX-a.value.x,y:d.pageY-a.value.y},(m=t.onMove)==null||m.call(t,o.value,d),c(d))},h=d=>{var m;!i(d)||!a.value||(a.value=void 0,(m=t.onEnd)==null||m.call(t,o.value,d),c(d))};return $t&&(Me(e,"pointerdown",f,!0),Me(l,"pointermove",p,!0),Me(l,"pointerup",h,!0)),Hg(jg({},sg(o)),{position:o,isDragging:O(()=>!!a.value),style:O(()=>`left:${o.value.x}px;top:${o.value.y}px;`)})}var Pi=Object.getOwnPropertySymbols,Ug=Object.prototype.hasOwnProperty,Vg=Object.prototype.propertyIsEnumerable,Wg=(e,t)=>{var n={};for(var s in e)Ug.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Pi)for(var s of Pi(e))t.indexOf(s)<0&&Vg.call(e,s)&&(n[s]=e[s]);return n};function zg(e,t,n={}){const s=n,{window:l=Je}=s,o=Wg(s,["window"]);let a;const i=l&&"ResizeObserver"in l,c=()=>{a&&(a.disconnect(),a=void 0)},f=fe(()=>at(e),h=>{c(),i&&l&&h&&(a=new ResizeObserver(t),a.observe(h,o))},{immediate:!0,flush:"post"}),p=()=>{c(),f()};return mn(p),{isSupported:i,stop:p}}function Ju(e,t={}){const{immediate:n=!0,window:s=Je}=t,l=K(!1);let o=null;function a(){!l.value||!s||(e(),o=s.requestAnimationFrame(a))}function i(){!l.value&&s&&(l.value=!0,a())}function c(){l.value=!1,o!=null&&s&&(s.cancelAnimationFrame(o),o=null)}return n&&i(),mn(c),{isActive:l,pause:c,resume:i}}function Kg(e,t={width:0,height:0},n={}){const s=K(t.width),l=K(t.height);return zg(e,([o])=>{s.value=o.contentRect.width,l.value=o.contentRect.height},n),fe(()=>at(e),o=>{s.value=o?t.width:0,l.value=o?t.height:0}),{width:s,height:l}}const Si=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function qg(e,t={}){const{document:n=vg,autoExit:s=!1}=t,l=e||(n==null?void 0:n.querySelector("html")),o=K(!1);let a=!1,i=Si[0];if(!n)a=!1;else for(const w of Si)if(w[1]in n){i=w,a=!0;break}const[c,f,p,,h]=i;async function d(){!a||(n!=null&&n[p]&&await n[f](),o.value=!1)}async function m(){if(!a)return;await d();const w=at(l);w&&(await w[c](),o.value=!0)}async function y(){o.value?await d():await m()}return n&&Me(n,h,()=>{o.value=!!(n!=null&&n[p])},!1),s&&mn(d),{isSupported:a,isFullscreen:o,enter:m,exit:d,toggle:y}}function Yg(e,t,n={}){const{root:s,rootMargin:l="0px",threshold:o=.1,window:a=Je}=n,i=a&&"IntersectionObserver"in a;let c=un;const f=i?fe(()=>({el:at(e),root:at(s)}),({el:h,root:d})=>{if(c(),!h)return;const m=new IntersectionObserver(t,{root:d,rootMargin:l,threshold:o});m.observe(h),c=()=>{m.disconnect(),c=un}},{immediate:!0,flush:"post"}):un,p=()=>{c(),f()};return mn(p),{isSupported:i,stop:p}}const Zg={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Xg(e={}){const{reactive:t=!1,target:n=Je,aliasMap:s=Zg,passive:l=!0,onEventFired:o=un}=e,a=Le(new Set),i={toJSON(){return{}},current:a},c=t?Le(i):i,f=new Set;function p(m,y){m in c&&(t?c[m]=y:c[m].value=y)}function h(m,y){var w,b;const $=(w=m.key)==null?void 0:w.toLowerCase(),C=(b=m.code)==null?void 0:b.toLowerCase(),k=[C,$].filter(Boolean);C&&(y?a.add(m.code):a.delete(m.code));for(const E of k)p(E,y);$==="meta"&&!y?(f.forEach(E=>{a.delete(E),p(E,!1)}),f.clear()):m.getModifierState("Meta")&&y&&[...a,...k].forEach(E=>f.add(E))}n&&(Me(n,"keydown",m=>(h(m,!0),o(m)),{passive:l}),Me(n,"keyup",m=>(h(m,!1),o(m)),{passive:l}));const d=new Proxy(c,{get(m,y,w){if(typeof y!="string")return Reflect.get(m,y,w);if(y=y.toLowerCase(),y in s&&(y=s[y]),!(y in c))if(/[+_-]/.test(y)){const $=y.split(/[+_-]/g).map(C=>C.trim());c[y]=O(()=>$.every(C=>v(d[C])))}else c[y]=K(!1);const b=Reflect.get(m,y,w);return t?v(b):b}});return d}function h9(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:s=!1,initialValue:l={x:0,y:0},window:o=Je,eventFilter:a}=e,i=K(l.x),c=K(l.y),f=K(null),p=w=>{t==="page"?(i.value=w.pageX,c.value=w.pageY):t==="client"&&(i.value=w.clientX,c.value=w.clientY),f.value="mouse"},h=()=>{i.value=l.x,c.value=l.y},d=w=>{if(w.touches.length>0){const b=w.touches[0];t==="page"?(i.value=b.pageX,c.value=b.pageY):t==="client"&&(i.value=b.clientX,c.value=b.clientY),f.value="touch"}},m=w=>a===void 0?p(w):a(()=>p(w),{}),y=w=>a===void 0?d(w):a(()=>d(w),{});return o&&(Me(o,"mousemove",m,{passive:!0}),Me(o,"dragover",m,{passive:!0}),n&&(Me(o,"touchstart",y,{passive:!0}),Me(o,"touchmove",y,{passive:!0}),s&&Me(o,"touchend",h,{passive:!0}))),{x:i,y:c,sourceType:f}}var Zt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Zt||(Zt={}));function Gg(e,t={}){const n=K(e),{threshold:s=50,onSwipe:l,onSwipeEnd:o,onSwipeStart:a}=t,i=Le({x:0,y:0}),c=(F,Y)=>{i.x=F,i.y=Y},f=Le({x:0,y:0}),p=(F,Y)=>{f.x=F,f.y=Y},h=O(()=>i.x-f.x),d=O(()=>i.y-f.y),{max:m,abs:y}=Math,w=O(()=>m(y(h.value),y(d.value))>=s),b=K(!1),$=K(!1),C=O(()=>w.value?y(h.value)>y(d.value)?h.value>0?Zt.LEFT:Zt.RIGHT:d.value>0?Zt.UP:Zt.DOWN:Zt.NONE),k=F=>t.pointerTypes?t.pointerTypes.includes(F.pointerType):!0,E=[Me(e,"pointerdown",F=>{var Y,oe;if(!k(F))return;$.value=!0,(oe=(Y=n.value)==null?void 0:Y.style)==null||oe.setProperty("touch-action","none");const pe=F.target;pe==null||pe.setPointerCapture(F.pointerId);const{clientX:he,clientY:_e}=F;c(he,_e),p(he,_e),a==null||a(F)}),Me(e,"pointermove",F=>{if(!k(F)||!$.value)return;const{clientX:Y,clientY:oe}=F;p(Y,oe),!b.value&&w.value&&(b.value=!0),b.value&&(l==null||l(F))}),Me(e,"pointerup",F=>{var Y,oe;!k(F)||(b.value&&(o==null||o(F,C.value)),$.value=!1,b.value=!1,(oe=(Y=n.value)==null?void 0:Y.style)==null||oe.setProperty("touch-action","initial"))})],j=()=>E.forEach(F=>F());return{isSwiping:Gn(b),direction:Gn(C),posStart:Gn(i),posEnd:Gn(f),distanceX:h,distanceY:d,stop:j}}var Jg=Object.defineProperty,Mi=Object.getOwnPropertySymbols,Qg=Object.prototype.hasOwnProperty,e1=Object.prototype.propertyIsEnumerable,Ti=(e,t,n)=>t in e?Jg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,t1=(e,t)=>{for(var n in t||(t={}))Qg.call(t,n)&&Ti(e,n,t[n]);if(Mi)for(var n of Mi(t))e1.call(t,n)&&Ti(e,n,t[n]);return e};function m9(e={}){const{controls:t=!1,offset:n=0,immediate:s=!0,interval:l="requestAnimationFrame"}=e,o=K(ho()+n),a=()=>o.value=ho()+n,i=l==="requestAnimationFrame"?Ju(a,{immediate:s}):og(a,l,{immediate:s});return t?t1({timestamp:o},i):o}function Ht(e,t,n,s={}){var l;const{passive:o=!1,eventName:a,deep:i=!1,defaultValue:c}=s,f=In(),p=n||(f==null?void 0:f.emit)||((l=f==null?void 0:f.$emit)==null?void 0:l.bind(f));let h=a;t||(t="modelValue"),h=a||h||`update:${t.toString()}`;const d=()=>Wm(e[t])?e[t]:c;if(o){const m=K(d());return fe(()=>e[t],y=>m.value=y),fe(m,y=>{(y!==e[t]||i)&&p(h,y)},{deep:i}),m}else return O({get(){return d()},set(m){p(h,m)}})}function g9({window:e=Je}={}){if(!e)return K(!1);const t=K(e.document.hasFocus());return Me(e,"blur",()=>{t.value=!1}),Me(e,"focus",()=>{t.value=!0}),t}function n1({window:e=Je,initialWidth:t=1/0,initialHeight:n=1/0}={}){const s=K(t),l=K(n),o=()=>{e&&(s.value=e.innerWidth,l.value=e.innerHeight)};return o(),lg(o),Me("resize",o,{passive:!0}),{width:s,height:l}}/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Qu=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ms=e=>Qu?Symbol(e):"_vr_"+e,s1=ms("rvlm"),Fi=ms("rvd"),aa=ms("r"),ef=ms("rl"),yo=ms("rvl"),Xn=typeof window!="undefined";function r1(e){return e.__esModule||Qu&&e[Symbol.toStringTag]==="Module"}const Be=Object.assign;function Pl(e,t){const n={};for(const s in t){const l=t[s];n[s]=Array.isArray(l)?l.map(e):e(l)}return n}const Rs=()=>{},l1=/\/$/,o1=e=>e.replace(l1,"");function Sl(e,t,n="/"){let s,l={},o="",a="";const i=t.indexOf("?"),c=t.indexOf("#",i>-1?i:0);return i>-1&&(s=t.slice(0,i),o=t.slice(i+1,c>-1?c:t.length),l=e(o)),c>-1&&(s=s||t.slice(0,c),a=t.slice(c,t.length)),s=u1(s!=null?s:t,n),{fullPath:s+(o&&"?")+o+a,path:s,query:l,hash:a}}function a1(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Li(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function i1(e,t,n){const s=t.matched.length-1,l=n.matched.length-1;return s>-1&&s===l&&is(t.matched[s],n.matched[l])&&tf(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function is(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function tf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!c1(e[n],t[n]))return!1;return!0}function c1(e,t){return Array.isArray(e)?Ri(e,t):Array.isArray(t)?Ri(t,e):e===t}function Ri(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function u1(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/");let l=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],!(l===1||a==="."))if(a==="..")l--;else break;return n.slice(0,l).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Js;(function(e){e.pop="pop",e.push="push"})(Js||(Js={}));var Is;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Is||(Is={}));function f1(e){if(!e)if(Xn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),o1(e)}const p1=/^[^#]+#/;function d1(e,t){return e.replace(p1,"#")+t}function h1(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const dl=()=>({left:window.pageXOffset,top:window.pageYOffset});function m1(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),l=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!l)return;t=h1(l,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ii(e,t){return(history.state?history.state.position-t:-1)+e}const _o=new Map;function g1(e,t){_o.set(e,t)}function y1(e){const t=_o.get(e);return _o.delete(e),t}let _1=()=>location.protocol+"//"+location.host;function nf(e,t){const{pathname:n,search:s,hash:l}=t,o=e.indexOf("#");if(o>-1){let i=l.includes(e.slice(o))?e.slice(o).length:1,c=l.slice(i);return c[0]!=="/"&&(c="/"+c),Li(c,"")}return Li(n,e)+s+l}function v1(e,t,n,s){let l=[],o=[],a=null;const i=({state:d})=>{const m=nf(e,location),y=n.value,w=t.value;let b=0;if(d){if(n.value=m,t.value=d,a&&a===y){a=null;return}b=w?d.position-w.position:0}else s(m);l.forEach($=>{$(n.value,y,{delta:b,type:Js.pop,direction:b?b>0?Is.forward:Is.back:Is.unknown})})};function c(){a=n.value}function f(d){l.push(d);const m=()=>{const y=l.indexOf(d);y>-1&&l.splice(y,1)};return o.push(m),m}function p(){const{history:d}=window;!d.state||d.replaceState(Be({},d.state,{scroll:dl()}),"")}function h(){for(const d of o)d();o=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",p),{pauseListeners:c,listen:f,destroy:h}}function Ni(e,t,n,s=!1,l=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:l?dl():null}}function b1(e){const{history:t,location:n}=window,s={value:nf(e,n)},l={value:t.state};l.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,f,p){const h=e.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:_1()+e+c;try{t[p?"replaceState":"pushState"](f,"",d),l.value=f}catch(m){console.error(m),n[p?"replace":"assign"](d)}}function a(c,f){const p=Be({},t.state,Ni(l.value.back,c,l.value.forward,!0),f,{position:l.value.position});o(c,p,!0),s.value=c}function i(c,f){const p=Be({},l.value,t.state,{forward:c,scroll:dl()});o(p.current,p,!0);const h=Be({},Ni(s.value,c,null),{position:p.position+1},f);o(c,h,!1),s.value=c}return{location:s,state:l,push:i,replace:a}}function w1(e){e=f1(e);const t=b1(e),n=v1(e,t.state,t.location,t.replace);function s(o,a=!0){a||n.pauseListeners(),history.go(o)}const l=Be({location:"",base:e,go:s,createHref:d1.bind(null,e)},t,n);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>t.state.value}),l}function A1(e){return typeof e=="string"||e&&typeof e=="object"}function sf(e){return typeof e=="string"||typeof e=="symbol"}const en={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},rf=ms("nf");var ji;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ji||(ji={}));function cs(e,t){return Be(new Error,{type:e,[rf]:!0},t)}function tn(e,t){return e instanceof Error&&rf in e&&(t==null||!!(e.type&t))}const Hi="[^/]+?",x1={sensitive:!1,strict:!1,start:!0,end:!0},C1=/[.+*?^${}()[\]/\\]/g;function k1(e,t){const n=Be({},x1,t),s=[];let l=n.start?"^":"";const o=[];for(const f of e){const p=f.length?[]:[90];n.strict&&!f.length&&(l+="/");for(let h=0;h<f.length;h++){const d=f[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(l+="/"),l+=d.value.replace(C1,"\\$&"),m+=40;else if(d.type===1){const{value:y,repeatable:w,optional:b,regexp:$}=d;o.push({name:y,repeatable:w,optional:b});const C=$||Hi;if(C!==Hi){m+=10;try{new RegExp(`(${C})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${y}" (${C}): `+E.message)}}let k=w?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(k=b&&f.length<2?`(?:/${k})`:"/"+k),b&&(k+="?"),l+=k,m+=20,b&&(m+=-8),w&&(m+=-20),C===".*"&&(m+=-50)}p.push(m)}s.push(p)}if(n.strict&&n.end){const f=s.length-1;s[f][s[f].length-1]+=.7000000000000001}n.strict||(l+="/?"),n.end?l+="$":n.strict&&(l+="(?:/|$)");const a=new RegExp(l,n.sensitive?"":"i");function i(f){const p=f.match(a),h={};if(!p)return null;for(let d=1;d<p.length;d++){const m=p[d]||"",y=o[d-1];h[y.name]=m&&y.repeatable?m.split("/"):m}return h}function c(f){let p="",h=!1;for(const d of e){(!h||!p.endsWith("/"))&&(p+="/"),h=!1;for(const m of d)if(m.type===0)p+=m.value;else if(m.type===1){const{value:y,repeatable:w,optional:b}=m,$=y in f?f[y]:"";if(Array.isArray($)&&!w)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const C=Array.isArray($)?$.join("/"):$;if(!C)if(b)d.length<2&&e.length>1&&(p.endsWith("/")?p=p.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);p+=C}}return p}return{re:a,score:s,keys:o,parse:i,stringify:c}}function $1(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function E1(e,t){let n=0;const s=e.score,l=t.score;for(;n<s.length&&n<l.length;){const o=$1(s[n],l[n]);if(o)return o;n++}return l.length-s.length}const O1={type:0,value:""},B1=/[a-zA-Z0-9_]/;function D1(e){if(!e)return[[]];if(e==="/")return[[O1]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${f}": ${m}`)}let n=0,s=n;const l=[];let o;function a(){o&&l.push(o),o=[]}let i=0,c,f="",p="";function h(){!f||(n===0?o.push({type:0,value:f}):n===1||n===2||n===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),f="")}function d(){f+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(f&&h(),a()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:B1.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:n=3:p+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,p="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),h(),a(),l}function P1(e,t,n){const s=k1(D1(e.path),n),l=Be(s,{record:e,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}function S1(e,t){const n=[],s=new Map;t=Vi({strict:!1,end:!0,sensitive:!1},t);function l(p){return s.get(p)}function o(p,h,d){const m=!d,y=T1(p);y.aliasOf=d&&d.record;const w=Vi(t,p),b=[y];if("alias"in p){const k=typeof p.alias=="string"?[p.alias]:p.alias;for(const E of k)b.push(Be({},y,{components:d?d.record.components:y.components,path:E,aliasOf:d?d.record:y}))}let $,C;for(const k of b){const{path:E}=k;if(h&&E[0]!=="/"){const j=h.record.path,F=j[j.length-1]==="/"?"":"/";k.path=h.record.path+(E&&F+E)}if($=P1(k,h,w),d?d.alias.push($):(C=C||$,C!==$&&C.alias.push($),m&&p.name&&!Ui($)&&a(p.name)),"children"in y){const j=y.children;for(let F=0;F<j.length;F++)o(j[F],$,d&&d.children[F])}d=d||$,c($)}return C?()=>{a(C)}:Rs}function a(p){if(sf(p)){const h=s.get(p);h&&(s.delete(p),n.splice(n.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=n.indexOf(p);h>-1&&(n.splice(h,1),p.record.name&&s.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function i(){return n}function c(p){let h=0;for(;h<n.length&&E1(p,n[h])>=0&&(p.record.path!==n[h].record.path||!lf(p,n[h]));)h++;n.splice(h,0,p),p.record.name&&!Ui(p)&&s.set(p.record.name,p)}function f(p,h){let d,m={},y,w;if("name"in p&&p.name){if(d=s.get(p.name),!d)throw cs(1,{location:p});w=d.record.name,m=Be(M1(h.params,d.keys.filter(C=>!C.optional).map(C=>C.name)),p.params),y=d.stringify(m)}else if("path"in p)y=p.path,d=n.find(C=>C.re.test(y)),d&&(m=d.parse(y),w=d.record.name);else{if(d=h.name?s.get(h.name):n.find(C=>C.re.test(h.path)),!d)throw cs(1,{location:p,currentLocation:h});w=d.record.name,m=Be({},h.params,p.params),y=d.stringify(m)}const b=[];let $=d;for(;$;)b.unshift($.record),$=$.parent;return{name:w,path:y,params:m,matched:b,meta:L1(b)}}return e.forEach(p=>o(p)),{addRoute:o,resolve:f,removeRoute:a,getRoutes:i,getRecordMatcher:l}}function M1(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function T1(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:F1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function F1(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function Ui(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function L1(e){return e.reduce((t,n)=>Be(t,n.meta),{})}function Vi(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function lf(e,t){return t.children.some(n=>n===e||lf(e,n))}const of=/#/g,R1=/&/g,I1=/\//g,N1=/=/g,j1=/\?/g,af=/\+/g,H1=/%5B/g,U1=/%5D/g,cf=/%5E/g,V1=/%60/g,uf=/%7B/g,W1=/%7C/g,ff=/%7D/g,z1=/%20/g;function ia(e){return encodeURI(""+e).replace(W1,"|").replace(H1,"[").replace(U1,"]")}function K1(e){return ia(e).replace(uf,"{").replace(ff,"}").replace(cf,"^")}function vo(e){return ia(e).replace(af,"%2B").replace(z1,"+").replace(of,"%23").replace(R1,"%26").replace(V1,"`").replace(uf,"{").replace(ff,"}").replace(cf,"^")}function q1(e){return vo(e).replace(N1,"%3D")}function Y1(e){return ia(e).replace(of,"%23").replace(j1,"%3F")}function Z1(e){return e==null?"":Y1(e).replace(I1,"%2F")}function Wr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function X1(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let l=0;l<s.length;++l){const o=s[l].replace(af," "),a=o.indexOf("="),i=Wr(a<0?o:o.slice(0,a)),c=a<0?null:Wr(o.slice(a+1));if(i in t){let f=t[i];Array.isArray(f)||(f=t[i]=[f]),f.push(c)}else t[i]=c}return t}function Wi(e){let t="";for(let n in e){const s=e[n];if(n=q1(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(s)?s.map(o=>o&&vo(o)):[s&&vo(s)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function G1(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Array.isArray(s)?s.map(l=>l==null?null:""+l):s==null?s:""+s)}return t}function As(){let e=[];function t(s){return e.push(s),()=>{const l=e.indexOf(s);l>-1&&e.splice(l,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function rn(e,t,n,s,l){const o=s&&(s.enterCallbacks[l]=s.enterCallbacks[l]||[]);return()=>new Promise((a,i)=>{const c=h=>{h===!1?i(cs(4,{from:n,to:t})):h instanceof Error?i(h):A1(h)?i(cs(2,{from:t,to:h})):(o&&s.enterCallbacks[l]===o&&typeof h=="function"&&o.push(h),a())},f=e.call(s&&s.instances[l],t,n,c);let p=Promise.resolve(f);e.length<3&&(p=p.then(c)),p.catch(h=>i(h))})}function Ml(e,t,n,s){const l=[];for(const o of e)for(const a in o.components){let i=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(J1(i)){const f=(i.__vccOpts||i)[t];f&&l.push(rn(f,n,s,o,a))}else{let c=i();l.push(()=>c.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const p=r1(f)?f.default:f;o.components[a]=p;const d=(p.__vccOpts||p)[t];return d&&rn(d,n,s,o,a)()}))}}return l}function J1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function zi(e){const t=I(aa),n=I(ef),s=O(()=>t.resolve(v(e.to))),l=O(()=>{const{matched:c}=s.value,{length:f}=c,p=c[f-1],h=n.matched;if(!p||!h.length)return-1;const d=h.findIndex(is.bind(null,p));if(d>-1)return d;const m=Ki(c[f-2]);return f>1&&Ki(p)===m&&h[h.length-1].path!==m?h.findIndex(is.bind(null,c[f-2])):d}),o=O(()=>l.value>-1&&n0(n.params,s.value.params)),a=O(()=>l.value>-1&&l.value===n.matched.length-1&&tf(n.params,s.value.params));function i(c={}){return t0(c)?t[v(e.replace)?"replace":"push"](v(e.to)).catch(Rs):Promise.resolve()}return{route:s,href:O(()=>s.value.href),isActive:o,isExactActive:a,navigate:i}}const Q1=ye({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zi,setup(e,{slots:t}){const n=Le(zi(e)),{options:s}=I(aa),l=O(()=>({[qi(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[qi(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:yt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:l.value},o)}}}),e0=Q1;function t0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function n0(e,t){for(const n in t){const s=t[n],l=e[n];if(typeof s=="string"){if(s!==l)return!1}else if(!Array.isArray(l)||l.length!==s.length||s.some((o,a)=>o!==l[a]))return!1}return!0}function Ki(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const qi=(e,t,n)=>e!=null?e:t!=null?t:n,s0=ye({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=I(yo),l=O(()=>e.route||s.value),o=I(Fi,0),a=O(()=>l.value.matched[o]);mt(Fi,o+1),mt(s1,a),mt(yo,l);const i=K();return fe(()=>[i.value,a.value,e.name],([c,f,p],[h,d,m])=>{f&&(f.instances[p]=c,d&&d!==f&&c&&c===h&&(f.leaveGuards.size||(f.leaveGuards=d.leaveGuards),f.updateGuards.size||(f.updateGuards=d.updateGuards))),c&&f&&(!d||!is(f,d)||!h)&&(f.enterCallbacks[p]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=l.value,f=a.value,p=f&&f.components[e.name],h=e.name;if(!p)return Yi(n.default,{Component:p,route:c});const d=f.props[e.name],m=d?d===!0?c.params:typeof d=="function"?d(c):d:null,w=yt(p,Be({},m,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(f.instances[h]=null)},ref:i}));return Yi(n.default,{Component:w,route:c})||w}}});function Yi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const r0=s0;function l0(e){const t=S1(e.routes,e),n=e.parseQuery||X1,s=e.stringifyQuery||Wi,l=e.history,o=As(),a=As(),i=As(),c=Wt(en);let f=en;Xn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Pl.bind(null,B=>""+B),h=Pl.bind(null,Z1),d=Pl.bind(null,Wr);function m(B,Z){let L,G;return sf(B)?(L=t.getRecordMatcher(B),G=Z):G=B,t.addRoute(G,L)}function y(B){const Z=t.getRecordMatcher(B);Z&&t.removeRoute(Z)}function w(){return t.getRoutes().map(B=>B.record)}function b(B){return!!t.getRecordMatcher(B)}function $(B,Z){if(Z=Be({},Z||c.value),typeof B=="string"){const ue=Sl(n,B,Z.path),g=t.resolve({path:ue.path},Z),_=l.createHref(ue.fullPath);return Be(ue,g,{params:d(g.params),hash:Wr(ue.hash),redirectedFrom:void 0,href:_})}let L;if("path"in B)L=Be({},B,{path:Sl(n,B.path,Z.path).path});else{const ue=Be({},B.params);for(const g in ue)ue[g]==null&&delete ue[g];L=Be({},B,{params:h(B.params)}),Z.params=h(Z.params)}const G=t.resolve(L,Z),be=B.hash||"";G.params=p(d(G.params));const Pe=a1(s,Be({},B,{hash:K1(be),path:G.path})),de=l.createHref(Pe);return Be({fullPath:Pe,hash:be,query:s===Wi?G1(B.query):B.query||{}},G,{redirectedFrom:void 0,href:de})}function C(B){return typeof B=="string"?Sl(n,B,c.value.path):Be({},B)}function k(B,Z){if(f!==B)return cs(8,{from:Z,to:B})}function E(B){return Y(B)}function j(B){return E(Be(C(B),{replace:!0}))}function F(B){const Z=B.matched[B.matched.length-1];if(Z&&Z.redirect){const{redirect:L}=Z;let G=typeof L=="function"?L(B):L;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=C(G):{path:G},G.params={}),Be({query:B.query,hash:B.hash,params:B.params},G)}}function Y(B,Z){const L=f=$(B),G=c.value,be=B.state,Pe=B.force,de=B.replace===!0,ue=F(L);if(ue)return Y(Be(C(ue),{state:be,force:Pe,replace:de}),Z||L);const g=L;g.redirectedFrom=Z;let _;return!Pe&&i1(s,G,L)&&(_=cs(16,{to:g,from:G}),Rt(G,G,!0,!1)),(_?Promise.resolve(_):pe(g,G)).catch(x=>tn(x)?tn(x,2)?x:me(x):se(x,g,G)).then(x=>{if(x){if(tn(x,2))return Y(Be(C(x.to),{state:be,force:Pe,replace:de}),Z||g)}else x=_e(g,G,!0,de,be);return he(g,G,x),x})}function oe(B,Z){const L=k(B,Z);return L?Promise.reject(L):Promise.resolve()}function pe(B,Z){let L;const[G,be,Pe]=o0(B,Z);L=Ml(G.reverse(),"beforeRouteLeave",B,Z);for(const ue of G)ue.leaveGuards.forEach(g=>{L.push(rn(g,B,Z))});const de=oe.bind(null,B,Z);return L.push(de),Wn(L).then(()=>{L=[];for(const ue of o.list())L.push(rn(ue,B,Z));return L.push(de),Wn(L)}).then(()=>{L=Ml(be,"beforeRouteUpdate",B,Z);for(const ue of be)ue.updateGuards.forEach(g=>{L.push(rn(g,B,Z))});return L.push(de),Wn(L)}).then(()=>{L=[];for(const ue of B.matched)if(ue.beforeEnter&&!Z.matched.includes(ue))if(Array.isArray(ue.beforeEnter))for(const g of ue.beforeEnter)L.push(rn(g,B,Z));else L.push(rn(ue.beforeEnter,B,Z));return L.push(de),Wn(L)}).then(()=>(B.matched.forEach(ue=>ue.enterCallbacks={}),L=Ml(Pe,"beforeRouteEnter",B,Z),L.push(de),Wn(L))).then(()=>{L=[];for(const ue of a.list())L.push(rn(ue,B,Z));return L.push(de),Wn(L)}).catch(ue=>tn(ue,8)?ue:Promise.reject(ue))}function he(B,Z,L){for(const G of i.list())G(B,Z,L)}function _e(B,Z,L,G,be){const Pe=k(B,Z);if(Pe)return Pe;const de=Z===en,ue=Xn?history.state:{};L&&(G||de?l.replace(B.fullPath,Be({scroll:de&&ue&&ue.scroll},be)):l.push(B.fullPath,be)),c.value=B,Rt(B,Z,L,de),me()}let Te;function Ie(){Te||(Te=l.listen((B,Z,L)=>{const G=$(B),be=F(G);if(be){Y(Be(be,{replace:!0}),G).catch(Rs);return}f=G;const Pe=c.value;Xn&&g1(Ii(Pe.fullPath,L.delta),dl()),pe(G,Pe).catch(de=>tn(de,12)?de:tn(de,2)?(Y(de.to,G).then(ue=>{tn(ue,20)&&!L.delta&&L.type===Js.pop&&l.go(-1,!1)}).catch(Rs),Promise.reject()):(L.delta&&l.go(-L.delta,!1),se(de,G,Pe))).then(de=>{de=de||_e(G,Pe,!1),de&&(L.delta?l.go(-L.delta,!1):L.type===Js.pop&&tn(de,20)&&l.go(-1,!1)),he(G,Pe,de)}).catch(Rs)}))}let Ze=As(),$e=As(),te;function se(B,Z,L){me(B);const G=$e.list();return G.length?G.forEach(be=>be(B,Z,L)):console.error(B),Promise.reject(B)}function ee(){return te&&c.value!==en?Promise.resolve():new Promise((B,Z)=>{Ze.add([B,Z])})}function me(B){return te||(te=!B,Ie(),Ze.list().forEach(([Z,L])=>B?L(B):Z()),Ze.reset()),B}function Rt(B,Z,L,G){const{scrollBehavior:be}=e;if(!Xn||!be)return Promise.resolve();const Pe=!L&&y1(Ii(B.fullPath,0))||(G||!L)&&history.state&&history.state.scroll||null;return Ye().then(()=>be(B,Z,Pe)).then(de=>de&&m1(de)).catch(de=>se(de,B,Z))}const Qe=B=>l.go(B);let At;const lt=new Set;return{currentRoute:c,addRoute:m,removeRoute:y,hasRoute:b,getRoutes:w,resolve:$,options:e,push:E,replace:j,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:o.add,beforeResolve:a.add,afterEach:i.add,onError:$e.add,isReady:ee,install(B){const Z=this;B.component("RouterLink",e0),B.component("RouterView",r0),B.config.globalProperties.$router=Z,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>v(c)}),Xn&&!At&&c.value===en&&(At=!0,E(l.location).catch(be=>{}));const L={};for(const be in en)L[be]=O(()=>c.value[be]);B.provide(aa,Z),B.provide(ef,Le(L)),B.provide(yo,c);const G=B.unmount;lt.add(B),B.unmount=function(){lt.delete(B),lt.size<1&&(f=en,Te&&Te(),Te=null,c.value=en,At=!1,te=!1),G()}}}}function Wn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function o0(e,t){const n=[],s=[],l=[],o=Math.max(t.matched.length,e.matched.length);for(let a=0;a<o;a++){const i=t.matched[a];i&&(e.matched.find(f=>is(f,i))?s.push(i):n.push(i));const c=e.matched[a];c&&(t.matched.find(f=>is(f,c))||l.push(c))}return[n,s,l]}const Tl=K(!1),Ns=K(!1),Jn=K(!1),a0=K(!0),bo=Bg(we({xs:460},Cg)),Mn=n1(),pf=Xg(),i0=O(()=>Mn.height.value-Mn.width.value/cn>180),df=qg($t?document.body:null),rs=xg(),c0=O(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=rs.value)==null?void 0:e.tagName)||"")||((t=rs.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),u0=O(()=>{var e;return["BUTTON","A"].includes(((e=rs.value)==null?void 0:e.tagName)||"")});Lt("slidev-camera","default");Lt("slidev-mic","default");const Dr=Lt("slidev-scale",0),nt=Lt("slidev-show-overview",!1),Fl=Lt("slidev-presenter-cursor",!0),Zi=Lt("slidev-show-editor",!1);Lt("slidev-editor-width",$t?window.innerWidth*.4:100);const hf=Zu(nt);function Xi(e,t,n,s=l=>l){return e*s(.5-t*(.5-n))}function f0(e){return[-e[0],-e[1]]}function Dt(e,t){return[e[0]+t[0],e[1]+t[1]]}function kt(e,t){return[e[0]-t[0],e[1]-t[1]]}function Bt(e,t){return[e[0]*t,e[1]*t]}function p0(e,t){return[e[0]/t,e[1]/t]}function xs(e){return[e[1],-e[0]]}function d0(e,t){return e[0]*t[0]+e[1]*t[1]}function h0(e,t){return e[0]===t[0]&&e[1]===t[1]}function m0(e){return Math.hypot(e[0],e[1])}function g0(e){return e[0]*e[0]+e[1]*e[1]}function Gi(e,t){return g0(kt(e,t))}function mf(e){return p0(e,m0(e))}function y0(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Cs(e,t,n){let s=Math.sin(n),l=Math.cos(n),o=e[0]-t[0],a=e[1]-t[1],i=o*l-a*s,c=o*s+a*l;return[i+t[0],c+t[1]]}function wo(e,t,n){return Dt(e,Bt(kt(t,e),n))}function Ji(e,t,n){return Dt(e,Bt(t,n))}var{min:zn,PI:_0}=Math,Qi=.275,ks=_0+1e-4;function v0(e,t={}){let{size:n=16,smoothing:s=.5,thinning:l=.5,simulatePressure:o=!0,easing:a=te=>te,start:i={},end:c={},last:f=!1}=t,{cap:p=!0,easing:h=te=>te*(2-te)}=i,{cap:d=!0,easing:m=te=>--te*te*te+1}=c;if(e.length===0||n<=0)return[];let y=e[e.length-1].runningLength,w=i.taper===!1?0:i.taper===!0?Math.max(n,y):i.taper,b=c.taper===!1?0:c.taper===!0?Math.max(n,y):c.taper,$=Math.pow(n*s,2),C=[],k=[],E=e.slice(0,10).reduce((te,se)=>{let ee=se.pressure;if(o){let me=zn(1,se.distance/n),Rt=zn(1,1-me);ee=zn(1,te+(Rt-te)*(me*Qi))}return(te+ee)/2},e[0].pressure),j=Xi(n,l,e[e.length-1].pressure,a),F,Y=e[0].vector,oe=e[0].point,pe=oe,he=oe,_e=pe;for(let te=0;te<e.length;te++){let{pressure:se}=e[te],{point:ee,vector:me,distance:Rt,runningLength:Qe}=e[te];if(te<e.length-1&&y-Qe<3)continue;if(l){if(o){let L=zn(1,Rt/n),G=zn(1,1-L);se=zn(1,E+(G-E)*(L*Qi))}j=Xi(n,l,se,a)}else j=n/2;F===void 0&&(F=j);let At=Qe<w?h(Qe/w):1,lt=y-Qe<b?m((y-Qe)/b):1;if(j=Math.max(.01,j*Math.min(At,lt)),te===e.length-1){let L=Bt(xs(me),j);C.push(kt(ee,L)),k.push(Dt(ee,L));continue}let Un=e[te+1].vector,B=d0(me,Un);if(B<0){let L=Bt(xs(Y),j);for(let G=1/13,be=0;be<=1;be+=G)he=Cs(kt(ee,L),ee,ks*be),C.push(he),_e=Cs(Dt(ee,L),ee,ks*-be),k.push(_e);oe=he,pe=_e;continue}let Z=Bt(xs(wo(Un,me,B)),j);he=kt(ee,Z),(te<=1||Gi(oe,he)>$)&&(C.push(he),oe=he),_e=Dt(ee,Z),(te<=1||Gi(pe,_e)>$)&&(k.push(_e),pe=_e),E=se,Y=me}let Te=e[0].point.slice(0,2),Ie=e.length>1?e[e.length-1].point.slice(0,2):Dt(e[0].point,[1,1]),Ze=[],$e=[];if(e.length===1){if(!(w||b)||f){let te=Ji(Te,mf(xs(kt(Te,Ie))),-(F||j)),se=[];for(let ee=1/13,me=ee;me<=1;me+=ee)se.push(Cs(te,Te,ks*2*me));return se}}else{if(!(w||b&&e.length===1))if(p)for(let se=1/13,ee=se;ee<=1;ee+=se){let me=Cs(k[0],Te,ks*ee);Ze.push(me)}else{let se=kt(C[0],k[0]),ee=Bt(se,.5),me=Bt(se,.51);Ze.push(kt(Te,ee),kt(Te,me),Dt(Te,me),Dt(Te,ee))}let te=xs(f0(e[e.length-1].vector));if(b||w&&e.length===1)$e.push(Ie);else if(d){let se=Ji(Ie,te,j);for(let ee=1/29,me=ee;me<1;me+=ee)$e.push(Cs(se,Ie,ks*3*me))}else $e.push(Dt(Ie,Bt(te,j)),Dt(Ie,Bt(te,j*.99)),kt(Ie,Bt(te,j*.99)),kt(Ie,Bt(te,j)))}return C.concat($e,k.reverse(),Ze)}function b0(e,t={}){var n;let{streamline:s=.5,size:l=16,last:o=!1}=t;if(e.length===0)return[];let a=.15+(1-s)*.85,i=Array.isArray(e[0])?e:e.map(({x:m,y,pressure:w=.5})=>[m,y,w]);if(i.length===2){let m=i[1];i=i.slice(0,-1);for(let y=1;y<5;y++)i.push(wo(i[0],m,y/4))}i.length===1&&(i=[...i,[...Dt(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],f=!1,p=0,h=c[0],d=i.length-1;for(let m=1;m<i.length;m++){let y=o&&m===d?i[m].slice(0,2):wo(h.point,i[m],a);if(h0(h.point,y))continue;let w=y0(y,h.point);if(p+=w,m<d&&!f){if(p<l)continue;f=!0}h={point:y,pressure:i[m][2]>=0?i[m][2]:.5,vector:mf(kt(h.point,y)),distance:w,runningLength:p},c.push(h)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function w0(e,t={}){return v0(b0(e,t),t)}var A0=w0,x0=Object.defineProperty,ec=Object.getOwnPropertySymbols,C0=Object.prototype.hasOwnProperty,k0=Object.prototype.propertyIsEnumerable,tc=(e,t,n)=>t in e?x0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ao=(e,t)=>{for(var n in t||(t={}))C0.call(t,n)&&tc(e,n,t[n]);if(ec)for(var n of ec(t))k0.call(t,n)&&tc(e,n,t[n]);return e},$0=()=>({events:{},emit(e,...t){(this.events[e]||[]).forEach(n=>n(...t))},on(e,t){return(this.events[e]=this.events[e]||[]).push(t),()=>this.events[e]=(this.events[e]||[]).filter(n=>n!==t)}});function zr(e,t){return e-t}function E0(e){return e<0?-1:1}function Kr(e){return[Math.abs(e),E0(e)]}function gf(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var O0=2,qt=O0,gs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t,n;const s=this.drauu.el,l=(t=this.drauu.options.coordinateScale)!=null?t:1;if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-o.left)*l,y:(e.pageY-o.top)*l,pressure:e.pressure}}else{const o=this.drauu.svgPoint;o.x=e.clientX,o.y=e.clientY;const a=o.matrixTransform((n=s.getScreenCTM())==null?void 0:n.inverse());return{x:a.x*l,y:a.y*l,pressure:e.pressure}}}createElement(e,t){var n;const s=document.createElementNS("http://www.w3.org/2000/svg",e),l=t?Ao(Ao({},this.brush),t):this.brush;return s.setAttribute("fill",(n=l.fill)!=null?n:"transparent"),s.setAttribute("stroke",l.color),s.setAttribute("stroke-width",l.size.toString()),s.setAttribute("stroke-linecap","round"),l.dasharray&&s.setAttribute("stroke-dasharray",l.dasharray),s}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(qt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},B0=class extends gs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=A0(e,Ao({size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},this.brush.stylusOptions));if(!t.length)return"";const n=t.reduce((s,[l,o],a,i)=>{const[c,f]=i[(a+1)%i.length];return s.push(l,o,(l+c)/2,(o+f)/2),s},["M",...t[0],"Q"]);return n.push("Z"),n.map(s=>typeof s=="number"?s.toFixed(2):s).join(" ")}},D0=class extends gs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Kr(e.x-this.start.x),[s,l]=Kr(e.y-this.start.y);if(this.shiftPressed){const o=Math.min(t,s);t=o,s=o}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",s);else{const[o,a]=[this.start.x,this.start.x+t*n].sort(zr),[i,c]=[this.start.y,this.start.y+s*l].sort(zr);this.attr("cx",(o+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-o)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function yf(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),s=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",t),s.setAttribute("id",e),s.setAttribute("viewBox","0 -5 10 10"),s.setAttribute("refX","5"),s.setAttribute("refY","0"),s.setAttribute("markerWidth","4"),s.setAttribute("markerHeight","4"),s.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),s.appendChild(l),n.appendChild(s),n}var P0=class extends gs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=gf(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(yf(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const s=e.x-this.start.x,l=e.y-this.start.y;if(l!==0){let o=s/l;o=Math.round(o),Math.abs(o)<=1?(t=this.start.x+l*o,n=this.start.y+l):(t=this.start.x+s,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},S0=class extends gs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Kr(e.x-this.start.x),[s,l]=Kr(e.y-this.start.y);if(this.shiftPressed){const o=Math.min(t,s);t=o,s=o}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-s),this.attr("width",t*2),this.attr("height",s*2);else{const[o,a]=[this.start.x,this.start.x+t*n].sort(zr),[i,c]=[this.start.y,this.start.y+s*l].sort(zr);this.attr("x",o),this.attr("y",i),this.attr("width",a-o),this.attr("height",c-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function M0(e,t){const n=e.x-t.x,s=e.y-t.y;return n*n+s*s}function T0(e,t,n){let s=t.x,l=t.y,o=n.x-s,a=n.y-l;if(o!==0||a!==0){const i=((e.x-s)*o+(e.y-l)*a)/(o*o+a*a);i>1?(s=n.x,l=n.y):i>0&&(s+=o*i,l+=a*i)}return o=e.x-s,a=e.y-l,o*o+a*a}function F0(e,t){let n=e[0];const s=[n];let l;for(let o=1,a=e.length;o<a;o++)l=e[o],M0(l,n)>t&&(s.push(l),n=l);return n!==l&&l&&s.push(l),s}function xo(e,t,n,s,l){let o=s,a=0;for(let i=t+1;i<n;i++){const c=T0(e[i],e[t],e[n]);c>o&&(a=i,o=c)}o>s&&(a-t>1&&xo(e,t,a,s,l),l.push(e[a]),n-a>1&&xo(e,a,n,s,l))}function L0(e,t){const n=e.length-1,s=[e[0]];return xo(e,0,n,t,s),s.push(e[n]),s}function nc(e,t,n=!1){if(e.length<=2)return e;const s=t!==void 0?t*t:1;return e=n?e:F0(e,s),e=L0(e,s),e}var R0=class extends gs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=gf();const t=yf(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=nc(this.points,1,!0),this.count=0),this.attr("d",rc(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",rc(nc(this.points,1,!0))),!e.getTotalLength()))}};function I0(e,t){const n=t.x-e.x,s=t.y-e.y;return{length:Math.sqrt(Math.pow(n,2)+Math.pow(s,2)),angle:Math.atan2(s,n)}}function sc(e,t,n,s){const l=t||e,o=n||e,a=.2,i=I0(l,o),c=i.angle+(s?Math.PI:0),f=i.length*a,p=e.x+Math.cos(c)*f,h=e.y+Math.sin(c)*f;return{x:p,y:h}}function N0(e,t,n){const s=sc(n[t-1],n[t-2],e),l=sc(e,n[t-1],n[t+1],!0);return`C ${s.x.toFixed(qt)},${s.y.toFixed(qt)} ${l.x.toFixed(qt)},${l.y.toFixed(qt)} ${e.x.toFixed(qt)},${e.y.toFixed(qt)}`}function rc(e){return e.reduce((t,n,s,l)=>s===0?`M ${n.x.toFixed(qt)},${n.y.toFixed(qt)}`:`${t} ${N0(n,s,l)}`,"")}var j0=class extends gs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,s)=>{if(n&&n.length)for(let l=0;l<n.length;l++){const o=n[l];if(o.getTotalLength){const a=o.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=o.getPointAtLength(a*i/this.pathSubFactor),f=o.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:f.x,y1:c.y,y2:f.y,segment:i,element:s||o})}}else o.children&&t(o.children,o)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,s)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,s=e.x2,l=t.x1,o=t.x2,a=e.y1,i=e.y2,c=t.y1,f=t.y2,p=(n-s)*(c-f)-(a-i)*(l-o),h=(n*i-a*s)*(l-o)-(n-s)*(l*f-c*o),d=(n*i-a*s)*(c-f)-(a-i)*(l*f-c*o),m=(y,w,b)=>y>=w&&y<=b?!0:y>=b&&y<=w;if(p===0)return!1;{const y={x:h/p,y:d/p};return m(y.x,n,s)&&m(y.y,a,i)&&m(y.x,l,o)&&m(y.y,c,f)}}};function H0(e){return{draw:new R0(e),stylus:new B0(e),line:new P0(e),rectangle:new S0(e),ellipse:new D0(e),eraseLine:new j0(e)}}var U0=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=$0(),this._models=H0(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,s=this.eventStart.bind(this),l=this.eventMove.bind(this),o=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",s,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",o,{passive:!1}),window.addEventListener("pointercancel",o,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",s),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",o),window.removeEventListener("pointercancel",o),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function V0(e){return new U0(e)}const Co=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Ut=Lt("slidev-drawing-enabled",!1),y9=Lt("slidev-drawing-pinned",!1),W0=K(!1),z0=K(!1),K0=K(!1),Qs=K(!1),En=Vm(Lt("slidev-drawing-brush",{color:Co[0],size:4,mode:"stylus"})),lc=K("stylus"),_f=O(()=>Ce.drawings.syncAll||jt.value);let er=!1;const $s=O({get(){return lc.value},set(e){lc.value=e,e==="arrow"?(En.mode="line",En.arrowEnd=!0):(En.mode=e,En.arrowEnd=!1)}}),q0=Le({brush:En,acceptsInputTypes:O(()=>Ut.value?void 0:["pen"]),coordinateTransform:!1}),st=sl(V0(q0));function Y0(){st.clear(),_f.value&&Ku(He.value,"")}function vf(){var e;z0.value=st.canRedo(),W0.value=st.canUndo(),K0.value=!!((e=st.el)!=null&&e.children.length)}function Z0(e){er=!0;const t=Hr[e||He.value];t!=null?st.load(t):st.clear(),er=!1}st.on("changed",()=>{if(vf(),!er){const e=st.dump(),t=He.value;(Hr[t]||"")!==e&&_f.value&&Ku(t,st.dump())}});Nm(e=>{er=!0,e[He.value]!=null&&st.load(e[He.value]||""),er=!1,vf()});Ye(()=>{fe(He,()=>{!st.mounted||Z0()},{immediate:!0})});st.on("start",()=>Qs.value=!0);st.on("end",()=>Qs.value=!1);window.addEventListener("keydown",e=>{if(!Ut.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?st.redo():st.undo():e.code==="Escape"?Ut.value=!1:e.code==="KeyL"&&t?$s.value="line":e.code==="KeyA"&&t?$s.value="arrow":e.code==="KeyS"&&t?$s.value="stylus":e.code==="KeyR"&&t?$s.value="rectangle":e.code==="KeyE"&&t?$s.value="ellipse":e.code==="KeyC"&&t?Y0():e.code.startsWith("Digit")&&t&&+e.code[5]<=Co.length?En.color=Co[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);const oc=Tg(),Ll=Lt("slidev-color-schema","auto"),ko=O(()=>Ce.colorSchema!=="auto"),ca=O({get(){return ko.value?Ce.colorSchema==="dark":Ll.value==="auto"?oc.value:Ll.value==="dark"},set(e){ko.value||(Ll.value=e===oc.value?"auto":e?"dark":"light")}}),bf=Zu(ca);$t&&fe(ca,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});function X0(){return[]}const Pr=K(1),Sr=O(()=>je.length-1),_t=K(0),ua=K(0);function G0(){_t.value>Pr.value&&(_t.value-=1)}function J0(){_t.value<Sr.value&&(_t.value+=1)}function Q0(){if(_t.value>Pr.value){let e=_t.value-ua.value;e<Pr.value&&(e=Pr.value),_t.value=e}}function ey(){if(_t.value<Sr.value){let e=_t.value+ua.value;e>Sr.value&&(e=Sr.value),_t.value=e}}const wf=Ne(pt(c0),pt(u0),a0);function ty(e,t,n=!1){typeof e=="string"&&(e=pf[e]);const s=Ne(e,wf);let l=0,o;const a=()=>{if(clearTimeout(o),!s.value){l=0;return}n&&(o=setTimeout(a,Math.max(1e3-l*250,150)),l++),t()};return fe(s,a,{flush:"sync"})}function ny(e,t){return Ag(e,n=>{!wf.value||n.repeat||t()})}function sy(){const e=X0(),{escape:t,space:n,shift:s,left:l,right:o,up:a,down:i,enter:c,d:f,g:p,o:h}=pf;new Map([{key:Ne(n,pt(s)),fn,autoRepeat:!0},{key:Ne(n,s),fn:pn,autoRepeat:!0},{key:Ne(o,pt(s),pt(nt)),fn,autoRepeat:!0},{key:Ne(l,pt(s),pt(nt)),fn:pn,autoRepeat:!0},{key:"pageDown",fn,autoRepeat:!0},{key:"pageUp",fn:pn,autoRepeat:!0},{key:Ne(a,pt(nt)),fn:()=>sr(!1),autoRepeat:!0},{key:Ne(i,pt(nt)),fn:nr,autoRepeat:!0},{key:Ne(l,s),fn:()=>sr(!1),autoRepeat:!0},{key:Ne(o,s),fn:nr,autoRepeat:!0},{key:Ne(f,pt(Ut)),fn:bf},{key:Ne(h,pt(Ut)),fn:hf},{key:Ne(t,pt(Ut)),fn:()=>nt.value=!1},{key:Ne(p,pt(Ut)),fn:()=>Jn.value=!Jn.value},{key:Ne(l,nt),fn:G0},{key:Ne(o,nt),fn:J0},{key:Ne(a,nt),fn:Q0},{key:Ne(i,nt),fn:ey},{key:Ne(c,nt),fn:()=>{us(_t.value),nt.value=!1}},...e].map(m=>[m.key,m])).forEach(m=>{m.fn&&ty(m.key,m.fn,m.autoRepeat)}),ny("f",()=>df.toggle())}const ry={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ly=r("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),oy=[ly];function ay(e,t){return A(),z("svg",ry,oy)}var iy={name:"carbon-close",render:ay};function fa(e){var n,s;const t=(s=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:s.no;return t!=null?`slidev-page-${t}`:""}const Af=ye({name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;I(V);const n=K(),s=Kg(n),l=O(()=>t.width?t.width:s.width.value),o=O(()=>t.width?t.width/cn:s.height.value);t.width&&ar(()=>{n.value&&(n.value.style.width=`${l.value}px`,n.value.style.height=`${o.value}px`)});const a=O(()=>l.value/o.value),i=O(()=>t.scale?t.scale:a.value<cn?l.value/Sn:o.value*cn/Sn),c=O(()=>({height:`${Vu}px`,width:`${Sn}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),f=O(()=>({"select-none":!Ce.selectable,"slidev-code-line-numbers":Ce.lineNumbers}));return mt(Uu,i),(p,h)=>(A(),z("div",{id:"slide-container",ref_key:"root",ref:n,class:Fe(v(f))},[r("div",{id:"slide-content",style:We(v(c))},[wt(p.$slots,"default")],4),wt(p.$slots,"controls")],2))}});var pa=ye({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Ht(e,"clicks",t),s=Ht(e,"clicksElements",t),l=Ht(e,"clicksDisabled",t),o=Ht(e,"clicksOrderMap",t);s.value.length=0,mt(km,e.route),mt($m,e.context),mt(Fs,n),mt(Ls,l),mt(xn,s),mt(fo,o)},render(){var e,t;return this.$props.is?yt(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}});const cy=["innerHTML"],xf=ye({name:"DrawingPreview",props:{page:null},setup(e){return I(V),(t,n)=>v(Hr)[e.page]?(A(),z("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:v(Hr)[e.page]},null,8,cy)):U("v-if",!0)}});var uy=Object.freeze(Object.defineProperty({__proto__:null,default:xf},Symbol.toStringTag,{value:"Module"}));const fy={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},py=["onClick"],dy=ye({name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const n=e;I(V);const s=Ht(n,"modelValue",t);function l(){s.value=!1}function o(m){us(m),l()}function a(m){return m===_t.value}const i=bo.smaller("xs"),c=bo.smaller("sm"),f=4*16*2,p=2*16,h=O(()=>i.value?Mn.width.value-f:c.value?(Mn.width.value-f-p)/2:300),d=O(()=>Math.floor((Mn.width.value-f)/(h.value+p)));return ar(()=>{_t.value=He.value,ua.value=d.value}),(m,y)=>{const w=iy;return A(),z(ke,null,[Dn(r("div",fy,[r("div",{class:"grid gap-y-4 gap-x-8 w-full",style:We(`grid-template-columns: repeat(auto-fit,minmax(${v(h)}px,1fr))`)},[(A(!0),z(ke,null,ir(v(je).slice(0,-1),(b,$)=>(A(),z("div",{key:b.path,class:"relative"},[r("div",{class:Fe(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a($+1)}]),onClick:C=>o(+b.path)},[(A(),q(Af,{key:b.path,width:v(h),"clicks-disabled":!0,class:"pointer-events-none"},{default:T(()=>[S(v(pa),{is:b==null?void 0:b.component,"clicks-disabled":!0,class:Fe(v(fa)(b)),route:b,context:"overview"},null,8,["is","class","route"]),S(xf,{page:+b.path},null,8,["page"])]),_:2},1032,["width"]))],10,py),r("div",{class:"absolute top-0 opacity-50",style:We(`left: ${v(h)+5}px`)},Tn($+1),5)]))),128))],4)],512),[[ju,v(s)]]),v(s)?(A(),z("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:l},[S(w)])):U("v-if",!0)],64)}}});var hy="/redis_intro/assets/logo.b72bde5d.png";const my={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},gy=ye({name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;I(V);const s=Ht(n,"modelValue",t);function l(){s.value=!1}return(o,a)=>(A(),q(bu,null,[v(s)?(A(),z("div",my,[r("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>l())}),r("div",{class:Fe(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[wt(o.$slots,"default")],2)])):U("v-if",!0)],1024))}});const yy={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},_y=["innerHTML"],vy=r("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[r("div",{class:"flex gap-1 children:my-auto"},[r("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),r("img",{class:"w-5 h-5",src:hy,alt:"Slidev"}),r("div",{style:{color:"#2082A6"}},[r("b",null,"Sli"),u("dev ")])])],-1),by=ye({name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;I(V);const s=Ht(n,"modelValue",t),l=O(()=>typeof Ce.info=="string");return(o,a)=>(A(),q(gy,{modelValue:v(s),"onUpdate:modelValue":a[0]||(a[0]=i=>Ae(s)?s.value=i:null),class:"px-6 py-4"},{default:T(()=>[r("div",yy,[v(l)?(A(),z("div",{key:0,class:"mb-4",innerHTML:v(Ce).info},null,8,_y)):U("v-if",!0),vy])]),_:1},8,["modelValue"]))}}),wy=["disabled","onKeydown"],Ay=ye({name:"Goto",setup(e){I(V);const t=K(),n=K(""),s=O(()=>{if(n.value.startsWith("/"))return!!je.find(a=>a.path===n.value.substring(1));{const a=+n.value;return!isNaN(a)&&a>0&&a<=If.value}});function l(){s.value&&(n.value.startsWith("/")?us(n.value.substring(1)):us(+n.value)),o()}function o(){Jn.value=!1}return fe(Jn,async a=>{var i,c;a?(await Ye(),n.value="",(i=t.value)==null||i.focus()):(c=t.value)==null||c.blur()}),fe(n,a=>{a.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(a,i)=>(A(),z("div",{id:"slidev-goto-dialog",class:Fe(["fixed right-5 bg-main transform transition-all",v(Jn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Dn(r("input",{ref_key:"input",ref:t,"onUpdate:modelValue":i[0]||(i[0]=c=>n.value=c),type:"text",disabled:!v(Jn),class:Fe(["outline-none bg-transparent",{"text-red-400":!v(s)&&n.value}]),placeholder:"Goto...",onKeydown:[hi(l,["enter"]),hi(o,["escape"])],onBlur:o},null,42,wy),[[lm,n.value]])],2))}}),xy=ye({name:"Controls",setup(e){I(V);const t=Wt(),n=Wt();return(s,l)=>(A(),z(ke,null,[S(dy,{modelValue:v(nt),"onUpdate:modelValue":l[0]||(l[0]=o=>Ae(nt)?nt.value=o:null)},null,8,["modelValue"]),S(Ay),v(t)?(A(),q(v(t),{key:0})):U("v-if",!0),v(n)?(A(),q(v(n),{key:1,modelValue:v(Tl),"onUpdate:modelValue":l[1]||(l[1]=o=>Ae(Tl)?Tl.value=o:null)},null,8,["modelValue"])):U("v-if",!0),v(Ce).info?(A(),q(by,{key:2,modelValue:v(Ns),"onUpdate:modelValue":l[2]||(l[2]=o=>Ae(Ns)?Ns.value=o:null)},null,8,["modelValue"])):U("v-if",!0)],64))}}),Cy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ky=r("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),$y=[ky];function Ey(e,t){return A(),z("svg",Cy,$y)}var Oy={name:"carbon-settings-adjust",render:Ey};const By={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Dy=r("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Py=r("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Sy=[Dy,Py];function My(e,t){return A(),z("svg",By,Sy)}var Ty={name:"carbon-information",render:My};const Fy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ly=r("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Ry=[Ly];function Iy(e,t){return A(),z("svg",Fy,Ry)}var Ny={name:"carbon-download",render:Iy};const jy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Hy=r("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Uy=r("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Vy=[Hy,Uy];function Wy(e,t){return A(),z("svg",jy,Vy)}var zy={name:"carbon-user-speaker",render:Wy};const Ky={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},qy=r("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Yy=r("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Zy=[qy,Yy];function Xy(e,t){return A(),z("svg",Ky,Zy)}var Gy={name:"carbon-presentation-file",render:Xy};const Jy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Qy=r("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),e_=[Qy];function t_(e,t){return A(),z("svg",Jy,e_)}var n_={name:"carbon-pen",render:t_};const s_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},r_=r("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),l_=r("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),o_=[r_,l_];function a_(e,t){return A(),z("svg",s_,o_)}var i_={name:"ph-cursor-duotone",render:a_};const c_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},u_=r("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),f_=[u_];function p_(e,t){return A(),z("svg",c_,f_)}var Cf={name:"ph-cursor-fill",render:p_};const d_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},h_=r("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),m_=[h_];function g_(e,t){return A(),z("svg",d_,m_)}var y_={name:"carbon-sun",render:g_};const __={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},v_=r("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),b_=[v_];function w_(e,t){return A(),z("svg",__,b_)}var A_={name:"carbon-moon",render:w_};const x_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},C_=r("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),k_=[C_];function $_(e,t){return A(),z("svg",x_,k_)}var E_={name:"carbon-apps",render:$_};const O_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},B_=r("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),D_=[B_];function P_(e,t){return A(),z("svg",O_,D_)}var kf={name:"carbon-arrow-right",render:P_};const S_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},M_=r("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),T_=[M_];function F_(e,t){return A(),z("svg",S_,T_)}var L_={name:"carbon-arrow-left",render:F_};const R_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},I_=r("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),N_=[I_];function j_(e,t){return A(),z("svg",R_,N_)}var H_={name:"carbon-maximize",render:j_};const U_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},V_=r("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),W_=[V_];function z_(e,t){return A(),z("svg",U_,W_)}var K_={name:"carbon-minimize",render:z_};const q_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Y_=r("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),Z_=[Y_];function X_(e,t){return A(),z("svg",q_,Z_)}var G_={name:"carbon-checkmark",render:X_};var $f=(e,t)=>{const n=e.__vccOpts||e;for(const[s,l]of t)n[s]=l;return n};const J_={class:"select-list"},Q_={class:"title"},ev={class:"items"},tv=["onClick"],nv=ye({name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;I(V);const s=Ht(n,"modelValue",t,{passive:!0});return(l,o)=>{const a=G_;return A(),z("div",J_,[r("div",Q_,Tn(e.title),1),r("div",ev,[(A(!0),z(ke,null,ir(e.items,i=>(A(),z("div",{key:i.value,class:Fe(["item",{active:v(s)===i.value}]),onClick:()=>{var c;s.value=i.value,(c=i.onClick)==null||c.call(i)}},[S(a,{class:Fe(["text-green-500",{"opacity-0":v(s)!==i.value}])},null,8,["class"]),u(" "+Tn(i.display||i.value),1)],10,tv))),128))])])}}});var sv=$f(nv,[["__scopeId","data-v-427604ef"]]);const rv={class:"text-sm"},lv=ye({name:"Settings",setup(e){I(V);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,s)=>(A(),z("div",rv,[S(sv,{modelValue:v(Dr),"onUpdate:modelValue":s[0]||(s[0]=l=>Ae(Dr)?Dr.value=l:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),ov={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},av=ye({name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;I(V);const s=Ht(n,"modelValue",t,{passive:!0}),l=K();return bg(l,()=>{s.value=!1}),(o,a)=>(A(),z("div",{ref_key:"el",ref:l,class:"flex relative"},[r("button",{class:Fe({disabled:e.disabled}),onClick:a[0]||(a[0]=i=>s.value=!v(s))},[wt(o.$slots,"button",{class:Fe({disabled:e.disabled})})],2),(A(),q(bu,null,[v(s)?(A(),z("div",ov,[wt(o.$slots,"menu")])):U("v-if",!0)],1024))],512))}}),iv={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},xr={name:"VerticalDivider",setup(e){return I(V),(t,n)=>(A(),z("div",iv))}};var cv={render(){return[]}};const uv={class:"icon-btn"},fv={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},pv={class:"my-auto"},dv={class:"opacity-50"},hv=ye({name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;I(V);const n=bo.smaller("md"),{isFullscreen:s,toggle:l}=df,o=O(()=>Eo.value?`?password=${Eo.value}`:""),a=O(()=>`/presenter/${He.value}${o.value}`),i=O(()=>`/${He.value}${o.value}`),c=K(),f=()=>{c.value&&rs.value&&c.value.contains(rs.value)&&rs.value.blur()},p=O(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),h=Wt(),d=Wt();return hs(()=>import("./DrawingControls.27645386.js"),[]).then(m=>d.value=m.default),(m,y)=>{const w=K_,b=H_,$=L_,C=kf,k=E_,E=A_,j=y_,F=Cf,Y=i_,oe=n_,pe=Gy,he=ze("RouterLink"),_e=zy,Te=Ny,Ie=Ty,Ze=Oy;return A(),z("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[r("div",{class:Fe(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",v(p)]),onMouseleave:f},[v(Kt)?U("v-if",!0):(A(),z("button",{key:0,class:"icon-btn",onClick:y[0]||(y[0]=(...$e)=>v(l)&&v(l)(...$e))},[v(s)?(A(),q(w,{key:0})):(A(),q(b,{key:1}))])),r("button",{class:Fe(["icon-btn",{disabled:!v(k4)}]),onClick:y[1]||(y[1]=(...$e)=>v(pn)&&v(pn)(...$e))},[S($)],2),r("button",{class:Fe(["icon-btn",{disabled:!v(C4)}]),title:"Next",onClick:y[2]||(y[2]=(...$e)=>v(fn)&&v(fn)(...$e))},[S(C)],2),v(Kt)?U("v-if",!0):(A(),z("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:y[3]||(y[3]=$e=>v(hf)())},[S(k)])),v(ko)?U("v-if",!0):(A(),z("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:y[4]||(y[4]=$e=>v(bf)())},[v(ca)?(A(),q(E,{key:0})):(A(),q(j,{key:1}))])),S(xr),v(Kt)?U("v-if",!0):(A(),z(ke,{key:3},[!v(jt)&&!v(n)&&v(h)?(A(),z(ke,{key:0},[S(v(h)),S(xr)],64)):U("v-if",!0),v(jt)?(A(),z("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:y[5]||(y[5]=$e=>Fl.value=!v(Fl))},[v(Fl)?(A(),q(F,{key:0})):(A(),q(Y,{key:1,class:"opacity-50"}))])):U("v-if",!0)],64)),!v(Ce).drawings.presenterOnly&&!v(Kt)?(A(),z(ke,{key:4},[r("button",{class:"icon-btn relative",title:"Drawing",onClick:y[6]||(y[6]=$e=>Ut.value=!v(Ut))},[S(oe),v(Ut)?(A(),z("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:We({background:v(En).color})},null,4)):U("v-if",!0)]),S(xr)],64)):U("v-if",!0),v(Kt)?U("v-if",!0):(A(),z(ke,{key:5},[v(jt)?(A(),q(he,{key:0,to:v(i),class:"icon-btn",title:"Play Mode"},{default:T(()=>[S(pe)]),_:1},8,["to"])):U("v-if",!0),v(w4)?(A(),q(he,{key:1,to:v(a),class:"icon-btn",title:"Presenter Mode"},{default:T(()=>[S(_e)]),_:1},8,["to"])):U("v-if",!0),U("v-if",!0)],64)),(A(),z(ke,{key:6},[v(Ce).download?(A(),z("button",{key:0,class:"icon-btn",onClick:y[8]||(y[8]=(...$e)=>v(Oo)&&v(Oo)(...$e))},[S(Te)])):U("v-if",!0)],64)),!v(jt)&&v(Ce).info&&!v(Kt)?(A(),z("button",{key:7,class:"icon-btn",onClick:y[9]||(y[9]=$e=>Ns.value=!v(Ns))},[S(Ie)])):U("v-if",!0),!v(jt)&&!v(Kt)?(A(),q(av,{key:8},{button:T(()=>[r("button",uv,[S(Ze)])]),menu:T(()=>[S(lv)]),_:1})):U("v-if",!0),v(Kt)?U("v-if",!0):(A(),q(xr,{key:9})),r("div",fv,[r("div",pv,[u(Tn(v(He))+" ",1),r("span",dv,"/ "+Tn(v(If)),1)])]),S(v(cv))],34)],512)}}});var Ef={render(){return[]}},Of={render(){return[]}};const mv={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},gv=ye({name:"PresenterMouse",setup(e){return I(V),(t,n)=>{const s=Cf;return v(Dl).cursor?(A(),z("div",mv,[S(s,{class:"absolute",style:We({left:`${v(Dl).cursor.x}%`,top:`${v(Dl).cursor.y}%`})},null,8,["style"])])):U("v-if",!0)}}}),yv=ye({name:"SlidesShow",props:{context:null},setup(e){I(V),fe(ht,()=>{var n,s;((n=ht.value)==null?void 0:n.meta)&&ht.value.meta.preload!==!1&&(ht.value.meta.__preloaded=!0),((s=Rl.value)==null?void 0:s.meta)&&Rl.value.meta.preload!==!1&&(Rl.value.meta.__preloaded=!0)},{immediate:!0});const t=Wt();return hs(()=>import("./DrawingLayer.a94b20d3.js"),[]).then(n=>t.value=n.default),(n,s)=>(A(),z(ke,null,[U(" Global Bottom "),S(v(Of)),U(" Slides "),(A(!0),z(ke,null,ir(v(je),l=>{var o,a;return A(),z(ke,{key:l.path},[((o=l.meta)==null?void 0:o.__preloaded)||l===v(ht)?Dn((A(),q(v(pa),{key:0,is:l==null?void 0:l.component,clicks:l===v(ht)?v(Ft):0,"clicks-elements":((a=l.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Fe(v(fa)(l)),route:l,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[ju,l===v(ht)]]):U("v-if",!0)],64)}),128)),U(" Global Top "),S(v(Ef)),v(t)?(A(),q(v(t),{key:0})):U("v-if",!0),v(jt)?U("v-if",!0):(A(),q(gv,{key:1}))],64))}}),_v=ye({name:"Play",setup(e){I(V),sy();const t=K();function n(o){var a;Zi.value||((a=o.target)==null?void 0:a.id)==="slide-container"&&(o.screenX/window.innerWidth>.6?fn():pn())}O4(t);const s=O(()=>i0.value||Zi.value);Wt();const l=Wt();return hs(()=>import("./DrawingControls.27645386.js"),[]).then(o=>l.value=o.default),(o,a)=>(A(),z(ke,null,[r("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr,max-content]",style:We(v(Wu))},[S(Af,{class:"w-full h-full",style:We({background:"var(--slidev-slide-container-background, black)"}),width:v(ga)?v(Mn).width.value:void 0,scale:v(Dr),onPointerdown:n},{default:T(()=>[S(yv,{context:"slide"})]),controls:T(()=>[r("div",{class:Fe(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[v(s)?"opacity-100 right-0":"opacity-0 p-2",v(Qs)?"pointer-events-none":""]])},[S(hv,{class:"m-auto",persist:v(s)},null,8,["persist"])],2),!v(Ce).drawings.presenterOnly&&!v(Kt)&&v(l)?(A(),q(v(l),{key:0,class:"ml-0"})):U("v-if",!0)]),_:1},8,["style","width","scale"]),U("v-if",!0)],4),S(xy)],64))}});function Bf(e){const t=O(()=>e.value.path),n=O(()=>je.length-1),s=O(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),l=O(()=>hl(s.value)),o=O(()=>je.find(d=>d.path===`${s.value}`)),a=O(()=>{var d,m,y;return(y=(m=(d=o.value)==null?void 0:d.meta)==null?void 0:m.slide)==null?void 0:y.id}),i=O(()=>{var d,m;return(m=(d=o.value)==null?void 0:d.meta)==null?void 0:m.layout}),c=O(()=>je.find(d=>d.path===`${Math.min(je.length,s.value+1)}`)),f=O(()=>je.filter(d=>{var m,y;return(y=(m=d.meta)==null?void 0:m.slide)==null?void 0:y.title}).reduce((d,m)=>(ya(d,m),d),[])),p=O(()=>_a(f.value,o.value)),h=O(()=>va(p.value));return{route:e,path:t,total:n,currentPage:s,currentPath:l,currentRoute:o,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:f,treeWithActiveStatuses:p,tree:h}}function Df(e,t,n){const s=K(0);Ye(()=>{vt.afterEach(async()=>{await Ye(),s.value+=1})});const l=O(()=>{var c,f;return s.value,((f=(c=t.value)==null?void 0:c.meta)==null?void 0:f.__clicksElements)||[]}),o=O(()=>{var c,f,p;return+((p=(f=(c=t.value)==null?void 0:c.meta)==null?void 0:f.clicks)!=null?p:l.value.length)}),a=O(()=>n.value<je.length-1||e.value<o.value),i=O(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:l,clicksTotal:o,hasNext:a,hasPrev:i}}const vv=["id"],ac=ye({name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,s=Ht(n,"clicksElements",t),l=O(()=>({height:`${Vu}px`,width:`${Sn}px`})),o=Wt();hs(()=>Promise.resolve().then(function(){return uy}),void 0).then(f=>o.value=f.default);const a=O(()=>n.clicks),i=Df(a,n.nav.currentRoute,n.nav.currentPage),c=O(()=>`${n.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return mt(V,Le({nav:we(we({},n.nav),i),configs:Ce,themeConfigs:O(()=>Ce.themeConfig)})),(f,p)=>{var h;return A(),z("div",{id:v(c),class:"slide-container",style:We(v(l))},[S(v(Of)),S(v(pa),{is:(h=e.route)==null?void 0:h.component,"clicks-elements":v(s),"onUpdate:clicks-elements":p[0]||(p[0]=d=>Ae(s)?s.value=d:null),clicks:v(a),"clicks-disabled":!1,class:Fe(v(fa)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),v(o)?(A(),q(v(o),{key:0,page:+e.route.path},null,8,["page"])):U("v-if",!0),S(v(Ef))],12,vv)}}}),bv=ye({name:"PrintSlide",props:{route:null},setup(e){var o;const t=e;I(V);const n=Le(((o=t.route.meta)==null?void 0:o.__clicksElements)||[]),s=O(()=>t.route),l=Bf(s);return(a,i)=>(A(),z(ke,null,[S(ac,{"clicks-elements":n,"onUpdate:clicks-elements":i[0]||(i[0]=c=>Ae(n)?n.value=c:null),clicks:0,nav:v(l),route:v(s)},null,8,["clicks-elements","nav","route"]),v(js)?U("v-if",!0):(A(!0),z(ke,{key:0},ir(n.length,c=>(A(),q(ac,{key:c,clicks:c,nav:v(l),route:v(s)},null,8,["clicks","nav","route"]))),128))],64))}});const wv={id:"print-content"},Av=ye({name:"PrintContainer",props:{width:null},setup(e){const t=e;I(V);const n=O(()=>t.width),s=O(()=>t.width/cn),l=O(()=>n.value/s.value),o=O(()=>l.value<cn?n.value/Sn:s.value*cn/Sn),a=je.slice(0,-1),i=O(()=>({"select-none":!Ce.selectable,"slidev-code-line-numbers":Ce.lineNumbers}));return mt(Uu,o),(c,f)=>(A(),z("div",{id:"print-container",class:Fe(v(i))},[r("div",wv,[(A(!0),z(ke,null,ir(v(a),p=>(A(),q(bv,{key:p.path,route:p},null,8,["route"]))),128))]),wt(c.$slots,"controls")],2))}});const xv=ye({name:"Print",setup(e){I(V);const t=$n.canvasWidth,n=Math.round(t/$n.aspectRatio)+1;function s(l,{slots:o}){if(o.default)return yt("style",o.default())}return ar(()=>{ga?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(l,o)=>(A(),z(ke,null,[S(s,null,{default:T(()=>[u(" @page { size: "+Tn(v(t))+"px "+Tn(n)+"px; margin: 0px; } ",1)]),_:1}),r("div",{id:"page-root",class:"grid grid-cols-[1fr,max-content]",style:We(v(Wu))},[S(Av,{class:"w-full h-full",style:We({background:"var(--slidev-slide-container-background, black)"}),width:v(Mn).width.value},null,8,["style","width"])],4)],64))}});const Cv={class:"slidev-layout end"},kv={name:"end",setup(e){return I(V),(t,n)=>(A(),z("div",Cv," END "))}};var Pf=$f(kv,[["__scopeId","data-v-024c70b4"]]);function ic(e){return e.startsWith("/")?"/redis_intro/"+e.slice(1):e}function $v(e,t=!1){const n=e&&["#","rgb","hsl"].some(l=>e.indexOf(l)===0),s={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${ic(e)})`:`url("${ic(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const Ev={class:"my-auto w-full"},Hn=ye({name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){const t=e;I(V);const n=O(()=>$v(t.background,!0));return(s,l)=>(A(),z("div",{class:"slidev-layout cover text-center",style:We(v(n))},[r("div",Ev,[wt(s.$slots,"default")])],4))}}),Ov=r("h1",null,[r("strong",null,"Welcome to UTown Team")],-1),Bv={class:"pt-12"},Dv=u(" Press Space for next page "),Pv={name:"1",setup(e){const t={theme:"seriph",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1}},n=I(V);return(s,l)=>{const o=kf;return A(),q(Hn,ce(le(t)),{default:T(()=>[Ov,r("div",Bv,[r("span",{onClick:l[0]||(l[0]=(...a)=>v(n).nav.next&&v(n).nav.next(...a)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[Dv,S(o,{class:"inline"})])])]),_:1},16)}}},Sv={class:"slidev-layout default"},cr={name:"default",setup(e){return I(V),(t,n)=>(A(),z("div",Sv,[wt(t.$slots,"default")]))}},Mv=r("h1",null,"\u5BFC\u822A",-1),Tv=r("p",null,"\u9F20\u6807Hover \u5230\u5DE6\u4E0B\u89D2\u5F39\u51FA\u76F8\u5E94\u64CD\u4F5C\u6309\u94AE",-1),Fv=r("h3",null,"\u952E\u76D8\u5FEB\u6377\u952E",-1),Lv=r("table",null,[r("thead",null,[r("tr",null,[r("th"),r("th")])]),r("tbody",null,[r("tr",null,[r("td",null,[r("kbd",null,"right"),u(" / "),r("kbd",null,"space")]),r("td",null,"\u4E0B\u4E00\u9875")]),r("tr",null,[r("td",null,[r("kbd",null,"left"),u(" / "),r("kbd",null,"shift"),r("kbd",null,"space")]),r("td",null,"\u4E0A\u4E00\u9875")]),r("tr",null,[r("td",null,[r("kbd",null,"up")]),r("td",null,"\u4E0A\u4E00\u4E2A\u5C55\u793A")]),r("tr",null,[r("td",null,[r("kbd",null,"down")]),r("td",null,"\u4E0B\u4E00\u4E2A\u5C55\u793A")])])],-1),Rv={class:"absolute -bottom-9 -left-7 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},Iv={class:"absolute -bottom-9 -left-7 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},Nv={class:"absolute bottom-23 left-45 opacity-30 transform -rotate-10"},jv=u("\u8FD9\u513F!"),Hv=[jv],Uv={name:"2",setup(e){const t={};return I(V),(n,s)=>{const l=Ir("click"),o=Ir("after");return A(),q(cr,ce(le(t)),{default:T(()=>[Mv,Tv,Fv,Lv,U(" https://sli.dev/guide/animations.html#click-animations "),r("p",null,[Dn(r("img",Rv,null,512),[[l]])]),U("\u70B9\u51FB\u89E6\u53D1\u663E\u793A\u56FE\u7247"),r("p",null,[Dn(r("img",Iv,null,512),[[l]])]),Dn((A(),z("p",Nv,Hv)),[[o]])]),_:1},16)}}},Vv={class:"h-full w-full"},Wv={class:"w-full h-full"},zv=["src"],Kv=ye({name:"iframe",props:{url:null},setup(e){return I(V),(t,n)=>(A(),z("div",Vv,[r("div",Wv,[r("iframe",{id:"frame",class:"w-full h-full",src:e.url},null,8,zv)])]))}}),qv={name:"3",setup(e){const t={layout:"iframe",url:"https://www.utown.io/",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>(A(),q(Kv,ce(le(t)),null,16))}},Yv=u("\u9879\u76EE\u534F\u4F5C"),Zv={grid:"~ cols-5 gap-2",m:"-t-2"},Xv=u("\u7EC4\u7EC7\u7ED3\u6784"),Gv=u("\u613F\u666F\u76EE\u6807"),Jv=u("\u5B8C\u6210\u5B9A\u4E49"),Qv=u("\u534F\u4F5C\u89C4\u7EA6"),eb=u("\u56E2\u961F\u5C55\u671B"),tb=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"Who?")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"Who?")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")])])])],-1),nb=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"What?")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"What?")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")])])])],-1),sb=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"DOD?")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"DOD?")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")])])])],-1),rb=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"How to collaborate?")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"How to collaborate?")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")])])])],-1),lb=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"Outlook?")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"Outlook?")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")])])])],-1),ob={name:"4",setup(e){const t={layout:"cover",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=ze("center");return A(),q(Hn,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),r("h1",null,[r("strong",null,[S(l,null,{default:T(()=>[Yv]),_:1})])]),r("div",Zv,[r("h3",null,[S(l,null,{default:T(()=>[Xv]),_:1})]),r("h3",null,[S(l,null,{default:T(()=>[Gv]),_:1})]),r("h3",null,[S(l,null,{default:T(()=>[Jv]),_:1})]),r("h3",null,[S(l,null,{default:T(()=>[Qv]),_:1})]),r("h3",null,[S(l,null,{default:T(()=>[eb]),_:1})]),tb,nb,sb,rb,lb])]),_:1},16)}}},ab=u("Who"),ib=r("p",null,"\u7EC4\u7EC7\u67B6\u6784",-1),cb={name:"5",setup(e){const t={layout:"cover",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=ze("center");return A(),q(Hn,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),r("h1",null,[r("strong",null,[S(l,null,{default:T(()=>[ab]),_:1})])]),ib]),_:1},16)}}};function cc(e){return e.startsWith("/")?"/redis_intro/"+e.slice(1):e}function da(e,t=!1){const n=e&&e[0]==="#"&&e.startsWith("rgb"),s={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${cc(e)})`:`url("${cc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const ub={class:"grid grid-cols-2 w-full h-full"},fb=ye({name:"image-left",props:{image:{type:String},class:{type:String}},setup(e){const t=e;I(V);const n=O(()=>da(t.image));return(s,l)=>(A(),z("div",ub,[r("div",{class:"w-full w-full",style:We(v(n))},null,4),r("div",{class:Fe(["slidev-layout default",t.class])},[wt(s.$slots,"default")],2)]))}}),pb=r("p",null,[r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br")],-1),db=u("\u4E92\u8054\u7F51\u5BE1\u5934\u7EC4\u7EC7\u7ED3\u6784"),hb={name:"6",setup(e){const t={layout:"image-left",image:"https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png?raw=true",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=ze("center");return A(),q(fb,ce(le(t)),{default:T(()=>[U("3.1\u3001\u7EC4\u7EC7\u7ED3\u6784"),pb,r("h3",null,[r("strong",null,[S(l,null,{default:T(()=>[db]),_:1})])])]),_:1},16)}}},zt=ye({name:"image",props:{image:{type:String}},setup(e){const t=e;I(V);const n=O(()=>da(t.image));return(s,l)=>(A(),z("div",{class:"slidev-layout w-full h-full",style:We(v(n))},[wt(s.$slots,"default")],4))}}),mb=r("p",null,[r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br")],-1),gb={name:"7",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/761c9b692a4548e7912c777c4ea88f50.png",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>(A(),q(zt,ce(le(t)),{default:T(()=>[U("3.2\u7EC4\u7EC7\u7ED3\u6784"),mb]),_:1},16))}},yb=r("p",null,[r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br")],-1),_b={name:"8",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/177b97f8e76843ad8f38b97e6f34bacd.png",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>(A(),q(zt,ce(le(t)),{default:T(()=>[U("3.3 \u7EC4\u7EC7\u67B6\u6784\uFF08\u5F31\u77E9\u9635\uFF09"),yb]),_:1},16))}},vb=r("p",null,[r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("br")],-1),bb={name:"9",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/c174f54ad2734ab3a2dda4d41eeb603f.png",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>(A(),q(zt,ce(le(t)),{default:T(()=>[U("3.3 \u5E73\u53F0\u8D44\u6E90\u7EC4"),vb]),_:1},16))}},wb=r("p",null,[r("img",{border:"rounded",src:"https://img-blog.csdnimg.cn/a30131b99ea34d7fb5c30f03823fe700.jpeg"})],-1),Ab={name:"10",setup(e){const t={layout:"default",image:"https://img-blog.csdnimg.cn/a30131b99ea34d7fb5c30f03823fe700.jpeg",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>(A(),q(cr,ce(le(t)),{default:T(()=>[U("1\u3001\u9879\u76EE\u7EC4\u7ED3\u6784"),wb]),_:1},16))}},xb=u("What"),Cb=r("p",null,"\u613F\u666F\u76EE\u6807",-1),kb={name:"11",setup(e){const t={layout:"cover",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=ze("center");return A(),q(Hn,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),r("h1",null,[r("strong",null,[S(l,null,{default:T(()=>[xb]),_:1})])]),Cb]),_:1},16)}}},$b=r("p",null,[r("img",{src:"https://img-blog.csdnimg.cn/fbe5402b18af496fbdaa132bfea7c5a8.png"})],-1),Eb={name:"12",setup(e){const t={layout:"default",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>(A(),q(cr,ce(le(t)),{default:T(()=>[$b]),_:1},16))}},Ob={name:"13",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/a733bee905c549458e5d96faca92580c.png",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>(A(),q(zt,ce(le(t)),null,16))}};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Sf(e){return typeof e=="undefined"||e===null}function Bb(e){return typeof e=="object"&&e!==null}function Db(e){return Array.isArray(e)?e:Sf(e)?[]:[e]}function Pb(e,t){var n,s,l,o;if(t)for(o=Object.keys(t),n=0,s=o.length;n<s;n+=1)l=o[n],e[l]=t[l];return e}function Sb(e,t){var n="",s;for(s=0;s<t;s+=1)n+=e;return n}function Mb(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Tb=Sf,Fb=Bb,Lb=Db,Rb=Sb,Ib=Mb,Nb=Pb,ha={isNothing:Tb,isObject:Fb,toArray:Lb,repeat:Rb,isNegativeZero:Ib,extend:Nb};function Mf(e,t){var n="",s=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),s+" "+n):s}function tr(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Mf(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}tr.prototype=Object.create(Error.prototype);tr.prototype.constructor=tr;tr.prototype.toString=function(t){return this.name+": "+Mf(this,t)};var Cn=tr,jb=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Hb=["scalar","sequence","mapping"];function Ub(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(s){t[String(s)]=n})}),t}function Vb(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(jb.indexOf(n)===-1)throw new Cn('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=Ub(t.styleAliases||null),Hb.indexOf(this.kind)===-1)throw new Cn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Ge=Vb;function uc(e,t){var n=[];return e[t].forEach(function(s){var l=n.length;n.forEach(function(o,a){o.tag===s.tag&&o.kind===s.kind&&o.multi===s.multi&&(l=a)}),n[l]=s}),n}function Wb(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function s(l){l.multi?(e.multi[l.kind].push(l),e.multi.fallback.push(l)):e[l.kind][l.tag]=e.fallback[l.tag]=l}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(s);return e}function $o(e){return this.extend(e)}$o.prototype.extend=function(t){var n=[],s=[];if(t instanceof Ge)s.push(t);else if(Array.isArray(t))s=s.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(s=s.concat(t.explicit));else throw new Cn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(o){if(!(o instanceof Ge))throw new Cn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new Cn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new Cn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),s.forEach(function(o){if(!(o instanceof Ge))throw new Cn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create($o.prototype);return l.implicit=(this.implicit||[]).concat(n),l.explicit=(this.explicit||[]).concat(s),l.compiledImplicit=uc(l,"implicit"),l.compiledExplicit=uc(l,"explicit"),l.compiledTypeMap=Wb(l.compiledImplicit,l.compiledExplicit),l};var zb=$o,Kb=new Ge("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),qb=new Ge("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Yb=new Ge("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Zb=new zb({explicit:[Kb,qb,Yb]});function Xb(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function Gb(){return null}function Jb(e){return e===null}var Qb=new Ge("tag:yaml.org,2002:null",{kind:"scalar",resolve:Xb,construct:Gb,predicate:Jb,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function e2(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function t2(e){return e==="true"||e==="True"||e==="TRUE"}function n2(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var s2=new Ge("tag:yaml.org,2002:bool",{kind:"scalar",resolve:e2,construct:t2,predicate:n2,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function r2(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function l2(e){return 48<=e&&e<=55}function o2(e){return 48<=e&&e<=57}function a2(e){if(e===null)return!1;var t=e.length,n=0,s=!1,l;if(!t)return!1;if(l=e[n],(l==="-"||l==="+")&&(l=e[++n]),l==="0"){if(n+1===t)return!0;if(l=e[++n],l==="b"){for(n++;n<t;n++)if(l=e[n],l!=="_"){if(l!=="0"&&l!=="1")return!1;s=!0}return s&&l!=="_"}if(l==="x"){for(n++;n<t;n++)if(l=e[n],l!=="_"){if(!r2(e.charCodeAt(n)))return!1;s=!0}return s&&l!=="_"}if(l==="o"){for(n++;n<t;n++)if(l=e[n],l!=="_"){if(!l2(e.charCodeAt(n)))return!1;s=!0}return s&&l!=="_"}}if(l==="_")return!1;for(;n<t;n++)if(l=e[n],l!=="_"){if(!o2(e.charCodeAt(n)))return!1;s=!0}return!(!s||l==="_")}function i2(e){var t=e,n=1,s;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),s=t[0],(s==="-"||s==="+")&&(s==="-"&&(n=-1),t=t.slice(1),s=t[0]),t==="0")return 0;if(s==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function c2(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!ha.isNegativeZero(e)}var u2=new Ge("tag:yaml.org,2002:int",{kind:"scalar",resolve:a2,construct:i2,predicate:c2,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),f2=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function p2(e){return!(e===null||!f2.test(e)||e[e.length-1]==="_")}function d2(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var h2=/^[-+]?[0-9]+e/;function m2(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(ha.isNegativeZero(e))return"-0.0";return n=e.toString(10),h2.test(n)?n.replace("e",".e"):n}function g2(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||ha.isNegativeZero(e))}var y2=new Ge("tag:yaml.org,2002:float",{kind:"scalar",resolve:p2,construct:d2,predicate:g2,represent:m2,defaultStyle:"lowercase"}),_2=Zb.extend({implicit:[Qb,s2,u2,y2]}),v2=_2,Tf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Ff=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function b2(e){return e===null?!1:Tf.exec(e)!==null||Ff.exec(e)!==null}function w2(e){var t,n,s,l,o,a,i,c=0,f=null,p,h,d;if(t=Tf.exec(e),t===null&&(t=Ff.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],s=+t[2]-1,l=+t[3],!t[4])return new Date(Date.UTC(n,s,l));if(o=+t[4],a=+t[5],i=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(p=+t[10],h=+(t[11]||0),f=(p*60+h)*6e4,t[9]==="-"&&(f=-f)),d=new Date(Date.UTC(n,s,l,o,a,i,c)),f&&d.setTime(d.getTime()-f),d}function A2(e){return e.toISOString()}var x2=new Ge("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:b2,construct:w2,instanceOf:Date,represent:A2});function C2(e){return e==="<<"||e===null}var k2=new Ge("tag:yaml.org,2002:merge",{kind:"scalar",resolve:C2}),ma=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function $2(e){if(e===null)return!1;var t,n,s=0,l=e.length,o=ma;for(n=0;n<l;n++)if(t=o.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;s+=6}return s%8===0}function E2(e){var t,n,s=e.replace(/[\r\n=]/g,""),l=s.length,o=ma,a=0,i=[];for(t=0;t<l;t++)t%4===0&&t&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|o.indexOf(s.charAt(t));return n=l%4*6,n===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):n===18?(i.push(a>>10&255),i.push(a>>2&255)):n===12&&i.push(a>>4&255),new Uint8Array(i)}function O2(e){var t="",n=0,s,l,o=e.length,a=ma;for(s=0;s<o;s++)s%3===0&&s&&(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]),n=(n<<8)+e[s];return l=o%3,l===0?(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]):l===2?(t+=a[n>>10&63],t+=a[n>>4&63],t+=a[n<<2&63],t+=a[64]):l===1&&(t+=a[n>>2&63],t+=a[n<<4&63],t+=a[64],t+=a[64]),t}function B2(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var D2=new Ge("tag:yaml.org,2002:binary",{kind:"scalar",resolve:$2,construct:E2,predicate:B2,represent:O2}),P2=Object.prototype.hasOwnProperty,S2=Object.prototype.toString;function M2(e){if(e===null)return!0;var t=[],n,s,l,o,a,i=e;for(n=0,s=i.length;n<s;n+=1){if(l=i[n],a=!1,S2.call(l)!=="[object Object]")return!1;for(o in l)if(P2.call(l,o))if(!a)a=!0;else return!1;if(!a)return!1;if(t.indexOf(o)===-1)t.push(o);else return!1}return!0}function T2(e){return e!==null?e:[]}var F2=new Ge("tag:yaml.org,2002:omap",{kind:"sequence",resolve:M2,construct:T2}),L2=Object.prototype.toString;function R2(e){if(e===null)return!0;var t,n,s,l,o,a=e;for(o=new Array(a.length),t=0,n=a.length;t<n;t+=1){if(s=a[t],L2.call(s)!=="[object Object]"||(l=Object.keys(s),l.length!==1))return!1;o[t]=[l[0],s[l[0]]]}return!0}function I2(e){if(e===null)return[];var t,n,s,l,o,a=e;for(o=new Array(a.length),t=0,n=a.length;t<n;t+=1)s=a[t],l=Object.keys(s),o[t]=[l[0],s[l[0]]];return o}var N2=new Ge("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:R2,construct:I2}),j2=Object.prototype.hasOwnProperty;function H2(e){if(e===null)return!0;var t,n=e;for(t in n)if(j2.call(n,t)&&n[t]!==null)return!1;return!0}function U2(e){return e!==null?e:{}}var V2=new Ge("tag:yaml.org,2002:set",{kind:"mapping",resolve:H2,construct:U2});v2.extend({implicit:[x2,k2],explicit:[D2,F2,N2,V2]});function fc(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var W2=new Array(256),z2=new Array(256);for(var Kn=0;Kn<256;Kn++)W2[Kn]=fc(Kn)?1:0,z2[Kn]=fc(Kn);function K2(e){return Array.from(new Set(e))}function pc(...e){let t,n,s;e.length===1?(t=0,s=1,[n]=e):[t,n,s=1]=e;const l=[];let o=t;for(;o<n;)l.push(o),o+=s||1;return l}function q2(e,t){if(!t||t==="all"||t==="*")return pc(1,e+1);const n=[];for(const s of t.split(/[,;]/g))if(!s.includes("-"))n.push(+s);else{const[l,o]=s.split("-",2);n.push(...pc(+l,o?+o+1:e+1))}return K2(n).filter(s=>s<=e).sort((s,l)=>s-l)}const it=ye({name:"CodeHighlightController",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0}},setup(e){const t=e;I(V);const n=I(Fs),s=I(xn),l=I(Ls);function o(c=5){const f=[],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",h=p.length;for(let d=0;d<c;d++)f.push(p.charAt(Math.floor(Math.random()*h)));return f.join("")}const a=K(),i=In();return ds(()=>{const c=t.at==null?s==null?void 0:s.value.length:t.at,f=O(()=>l!=null&&l.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(c||0)),t.ranges.length-1)),p=O(()=>t.ranges[f.value]||"");if(t.ranges.length>=2&&!(l!=null&&l.value)){const h=o(),d=Bm(t.ranges.length-1).map(m=>h+m);s!=null&&s.value&&(s.value.push(...d),ul(()=>d.forEach(m=>po(s.value,m)),i))}ar(()=>{if(!a.value)return;const d=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const m of d){const y=Array.from(m.querySelectorAll(".line")),w=q2(y.length,p.value);y.forEach((b,$)=>{const C=w.includes($+1);b.classList.toggle(wn,!0),b.classList.toggle("highlighted",C),b.classList.toggle("dishonored",!C)})}})}),(c,f)=>(A(),z("div",{ref_key:"el",ref:a},[wt(c.$slots,"default")],512))}}),Y2={class:"grid grid-cols-2 w-full h-full"},ct=ye({name:"image-right",props:{image:{type:String},class:{type:String}},setup(e){const t=e;I(V);const n=O(()=>da(t.image));return(s,l)=>(A(),z("div",Y2,[r("div",{class:Fe(["slidev-layout default",t.class])},[wt(s.$slots,"default")],2),r("div",{class:"w-full w-full",style:We(v(n))},null,4)]))}}),Z2=r("h1",null,[r("strong",null,"\u4E3B\u7248\u672C")],-1),X2=r("p",null,"\u4E3B\u6846\u67B6\u3001\u4F1A\u8BAE\u3001IM\u804A\u5929",-1),G2=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#D4976C"}},"PO"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A "),r("span",{style:{color:"#B8A965"}},"\u4E01\u5B87\u535A")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u5218\u4ED5\u6770"),r("span",{style:{color:"#DBD7CA"}},"\u3001"),r("span",{style:{color:"#B8A965"}},"\u674E\u4E9A"),r("span",{style:{color:"#DBD7CA"}},"\u3001"),r("span",{style:{color:"#B8A965"}},"\u674E\u9633"),r("span",{style:{color:"#CB7676"}},"...")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"Member"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u90B9\u676D\u7279"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"unity"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u9EC4\u52B2"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"Android"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u9648\u52C7\u5747"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"ios"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u4F55\u667A\u52C7"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"\u670D\u52A1\u7AEF"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u5F6D\u4F73\u8F89"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"Web"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#CB7676"}},"...")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#A65E2B"}},"PO"),r("span",{style:{color:"#393A34"}},"\uFF1A "),r("span",{style:{color:"#8C862B"}},"\u4E01\u5B87\u535A")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u5218\u4ED5\u6770"),r("span",{style:{color:"#393A34"}},"\u3001"),r("span",{style:{color:"#8C862B"}},"\u674E\u4E9A"),r("span",{style:{color:"#393A34"}},"\u3001"),r("span",{style:{color:"#8C862B"}},"\u674E\u9633"),r("span",{style:{color:"#AB5959"}},"...")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"Member"),r("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u90B9\u676D\u7279"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"unity"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u9EC4\u52B2"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"Android"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u9648\u52C7\u5747"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"ios"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u4F55\u667A\u52C7"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"\u670D\u52A1\u7AEF"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u5F6D\u4F73\u8F89"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"Web"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#AB5959"}},"...")])])])],-1),J2={name:"14",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/f4a81b8c0aff4c16bdff821ab30ac9a5.png",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=it;return A(),q(ct,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),Z2,X2,S(l,Ke({},{ranges:["all","1-2","7-15","all"]}),{default:T(()=>[G2]),_:1},16)]),_:1},16)}}},Q2=r("h1",null,[r("strong",null,"\u5730\u56FE\u7F16\u8F91\u5668")],-1),e3=r("p",null,"\u7269\u4EF6\u6446\u653E",-1),t3=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#D4976C"}},"PO"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A "),r("span",{style:{color:"#B8A965"}},"\u5218\u6167")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"Member"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u8D75\u6069\u6069"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"unity"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u4F58\u4E2D\u519B"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"unity"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u5170\u56FD\u5FD7"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#CB7676"}},"...")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#A65E2B"}},"PO"),r("span",{style:{color:"#393A34"}},"\uFF1A "),r("span",{style:{color:"#8C862B"}},"\u5218\u6167")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"Member"),r("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u8D75\u6069\u6069"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"unity"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u4F58\u4E2D\u519B"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"unity"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u5170\u56FD\u5FD7"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#AB5959"}},"...")])])])],-1),n3={name:"15",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/4ce912a153284c23b475d8ac0a117bab.png",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=it;return A(),q(ct,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),Q2,e3,S(l,Ke({},{ranges:["all","1","7-11","all"]}),{default:T(()=>[t3]),_:1},16)]),_:1},16)}}},s3=r("h1",null,[r("strong",null,"\u7EC4\u4EF6\u7F16\u8F91\u5668")],-1),r3=r("p",null,"\u7EC4\u4EF6\u7BA1\u7406\u6A21\u7EC4\uFF0C\u8D44\u6E90\u4E0A\u4F20\u3001\u5C5E\u6027\u8BBE\u7F6E\u3001\u7EC4\u4EF6\u751F\u6210",-1),l3=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#D4976C"}},"PO"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A "),r("span",{style:{color:"#B8A965"}},"\u5218\u6167"),r("span",{style:{color:"#CB7676"}},"/"),r("span",{style:{color:"#B8A965"}},"\u8096\u9A70")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"Member"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u8D75\u6069\u6069"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"unity"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u4F58\u4E2D\u519B"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"unity"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u5170\u56FD\u5FD7"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#CB7676"}},"...")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#A65E2B"}},"PO"),r("span",{style:{color:"#393A34"}},"\uFF1A "),r("span",{style:{color:"#8C862B"}},"\u5218\u6167"),r("span",{style:{color:"#AB5959"}},"/"),r("span",{style:{color:"#8C862B"}},"\u8096\u9A70")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"Member"),r("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u8D75\u6069\u6069"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"unity"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u4F58\u4E2D\u519B"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"unity"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u5170\u56FD\u5FD7"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#AB5959"}},"...")])])])],-1),o3={name:"16",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/b220f60e64784c229c724b373acc4530.png",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=it;return A(),q(ct,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),s3,r3,S(l,Ke({},{ranges:["all","1","7-11","all"]}),{default:T(()=>[l3]),_:1},16)]),_:1},16)}}},a3=r("h1",null,[r("strong",null,"\u670D\u9970DIY")],-1),i3=r("p",null,"\u670D\u88C5\u56FE\u7EB8\u5236\u4F5C",-1),c3=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#D4976C"}},"PO"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A "),r("span",{style:{color:"#B8A965"}},"\u5218\u6167")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"Member"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u53F6\u817E\u98DE"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"unity"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u6768\u56FD\u6797"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#CB7676"}},"...")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#A65E2B"}},"PO"),r("span",{style:{color:"#393A34"}},"\uFF1A "),r("span",{style:{color:"#8C862B"}},"\u5218\u6167")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"Member"),r("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u53F6\u817E\u98DE"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"unity"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u6768\u56FD\u6797"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#AB5959"}},"...")])])])],-1),u3={name:"17",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/1b11907fa7a74e6496f4637ba0a6bec9.png",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=it;return A(),q(ct,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),a3,i3,S(l,Ke({},{ranges:["all","1","7-9","all"]}),{default:T(()=>[c3]),_:1},16)]),_:1},16)}}},f3=r("h1",null,[r("strong",null,"\u5267\u672C\u6740")],-1),p3=r("p",null,"\u7EBF\u4E0A\u5267\u672C\u6740\u3001\u5267\u672CDIY",-1),d3=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#D4976C"}},"PO"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A "),r("span",{style:{color:"#B8A965"}},"\u6768\u76CA")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"Member"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u738B\u955E\u94A6"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"unity"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u90A2\u5609\u9F99"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"unity"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u5218\u6CE2"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"unity"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u5F20\u8C6A\u6770"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"unity"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u6768\u56FD\u6797"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#CB7676"}},"...")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#A65E2B"}},"PO"),r("span",{style:{color:"#393A34"}},"\uFF1A "),r("span",{style:{color:"#8C862B"}},"\u6768\u76CA")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"Member"),r("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u738B\u955E\u94A6"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"unity"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u90A2\u5609\u9F99"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"unity"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u5218\u6CE2"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"unity"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u5F20\u8C6A\u6770"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"unity"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u6768\u56FD\u6797"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#AB5959"}},"...")])])])],-1),h3={name:"18",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/d113f42921e14eda932604f9af396b24.png",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=it;return A(),q(ct,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),f3,p3,S(l,Ke({},{ranges:["all","1","7-15","all"]}),{default:T(()=>[d3]),_:1},16)]),_:1},16)}}},m3=r("h1",null,[r("strong",null,"\u6211\u7684\u7C89\u4E1D\u91CC\u6709\u9B3C")],-1),g3=r("p",null,"\u8D77\u4E8EB\u7AD9\u7684\u7EBF\u4E0A\u72FC\u4EBA\u6740\u6E38\u620F\u6A21\u5F0F",-1),y3=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#D4976C"}},"PO"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A "),r("span",{style:{color:"#B8A965"}},"\u6768\u68EE")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"Member"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u590F\u5DDD"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u8C2D\u4E16\u4FCA"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"unity"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#CB7676"}},"...")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#A65E2B"}},"PO"),r("span",{style:{color:"#393A34"}},"\uFF1A "),r("span",{style:{color:"#8C862B"}},"\u6768\u68EE")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"Member"),r("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u590F\u5DDD"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u8C2D\u4E16\u4FCA"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"unity"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#AB5959"}},"...")])])])],-1),_3={name:"19",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/203e82b9d579414d92db9edb188b42dd.gif",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=it;return A(),q(ct,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),m3,g3,S(l,Ke({},{ranges:["all","1","7-9","all"]}),{default:T(()=>[y3]),_:1},16)]),_:1},16)}}},v3=r("h1",null,[r("strong",null,"\u5BC6\u53CB\u52A8\u6001")],-1),b3=r("p",null,"3D\u6F6E\u73A9\u98CE\u6362\u88C5\u7684\u793E\u4EA4\u5E7F\u573A",-1),w3=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#D4976C"}},"PO"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A "),r("span",{style:{color:"#B8A965"}},"\u674E\u96E8\u9716"),r("span",{style:{color:"#CB7676"}},"/"),r("span",{style:{color:"#B8A965"}},"\u8D75\u8F69")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"Member"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u90B9\u676D\u7279"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"unity"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u9EC4\u52B2"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"Android"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u9648\u52C7\u5747"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"ios"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u4F55\u667A\u52C7"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"\u670D\u52A1\u7AEF"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u5F6D\u4F73\u8F89"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"Web"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#CB7676"}},"...")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#A65E2B"}},"PO"),r("span",{style:{color:"#393A34"}},"\uFF1A "),r("span",{style:{color:"#8C862B"}},"\u674E\u96E8\u9716"),r("span",{style:{color:"#AB5959"}},"/"),r("span",{style:{color:"#8C862B"}},"\u8D75\u8F69")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"Member"),r("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u90B9\u676D\u7279"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"unity"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u9EC4\u52B2"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"Android"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u9648\u52C7\u5747"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"ios"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u4F55\u667A\u52C7"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"\u670D\u52A1\u7AEF"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u5F6D\u4F73\u8F89"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"Web"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#AB5959"}},"...")])])])],-1),A3={name:"20",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/742aa0afbb484b49b1a0975db503173f.gif",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=it;return A(),q(ct,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),v3,b3,S(l,Ke({},{ranges:["all","1","7-15","all"]}),{default:T(()=>[w3]),_:1},16)]),_:1},16)}}},x3=r("h1",null,[r("strong",null,"\u7528\u6237\u751F\u6001")],-1),C3=r("p",null,"\u7ECF\u6D4E\u3001\u70F9\u996A\u3001\u5546\u5E97",-1),k3=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#D4976C"}},"PO"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A "),r("span",{style:{color:"#B8A965"}},"\u8D75\u8F69"),r("span",{style:{color:"#CB7676"}},"/"),r("span",{style:{color:"#B8A965"}},"\u738B\u79B9\u8C6A")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"Member"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u5218\u7EF4"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"unity"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u6731\u5E86\u6587"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"web"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u6768\u56FD\u6797"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#CB7676"}},"...")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#A65E2B"}},"PO"),r("span",{style:{color:"#393A34"}},"\uFF1A "),r("span",{style:{color:"#8C862B"}},"\u8D75\u8F69"),r("span",{style:{color:"#AB5959"}},"/"),r("span",{style:{color:"#8C862B"}},"\u738B\u79B9\u8C6A")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"Member"),r("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u5218\u7EF4"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"unity"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u6731\u5E86\u6587"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"web"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u6768\u56FD\u6797"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#AB5959"}},"...")])])])],-1),$3={name:"21",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/f497282637e147afbbb22c570fa588f9.png",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=it;return A(),q(ct,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),x3,C3,S(l,Ke({},{ranges:["all","1","7-11","all"]}),{default:T(()=>[k3]),_:1},16)]),_:1},16)}}},E3=r("h1",null,[r("strong",null,"NFT")],-1),O3=r("p",null,"NFT\u5C55\u793A\u4EA4\u6613\u3001\u4EE3\u5E01\u4F53\u7CFB",-1),B3=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#D4976C"}},"PO"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A "),r("span",{style:{color:"#B8A965"}},"\u674E\u96E8\u9716")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"Member"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u9EC4\u4ECE\u5BCC"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"web"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u590F\u6587\u5175"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"Android"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u9648\u52C7\u5747"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"ios"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u4F55\u667A\u52C7"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"\u670D\u52A1\u7AEF"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#CB7676"}},"...")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#A65E2B"}},"PO"),r("span",{style:{color:"#393A34"}},"\uFF1A "),r("span",{style:{color:"#8C862B"}},"\u674E\u96E8\u9716")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"Member"),r("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u9EC4\u4ECE\u5BCC"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"web"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u590F\u6587\u5175"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"Android"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u9648\u52C7\u5747"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"ios"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u4F55\u667A\u52C7"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"\u670D\u52A1\u7AEF"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#AB5959"}},"...")])])])],-1),D3={name:"22",setup(e){const t={layout:"image-right",image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fkfx.7fzk.com%2Fwp-content%2Fuploads%2F2021%2F12%2F2021122801521187.jpg&refer=http%3A%2F%2Fkfx.7fzk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658026796&t=f9d87521e317d306903f26fbf4717637",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=it;return A(),q(ct,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),E3,O3,S(l,Ke({},{ranges:["all","1","7-15","all"]}),{default:T(()=>[B3]),_:1},16)]),_:1},16)}}},P3=r("h1",null,[r("strong",null,"UT\u5B98\u7F51")],-1),S3=r("p",null,"\u66DD\u5149\u3001\u4EA4\u6613\u5E02\u573A",-1),M3=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#D4976C"}},"PO"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A "),r("span",{style:{color:"#B8A965"}},"\u6768\u76CA")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"Member"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u6731\u5E86\u6587"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"Web"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u674E\u5065"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#CB7676"}},"...")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#A65E2B"}},"PO"),r("span",{style:{color:"#393A34"}},"\uFF1A "),r("span",{style:{color:"#8C862B"}},"\u6768\u76CA")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"Member"),r("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u6731\u5E86\u6587"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"Web"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u674E\u5065"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#AB5959"}},"...")])])])],-1),T3={name:"23",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=it;return A(),q(ct,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),P3,S3,S(l,Ke({},{ranges:["all","1","7","all"]}),{default:T(()=>[M3]),_:1},16)]),_:1},16)}}},F3=r("h1",null,[r("strong",null,"UT\u4E2D\u53F0")],-1),L3=r("p",null,"\u7BA1\u7406\u63A7\u5236\u53F0\u3001\u914D\u7F6E",-1),R3=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#D4976C"}},"PO"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A "),r("span",{style:{color:"#B8A965"}},"\u90B1\u6E05\u9752")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"Member"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u6731\u5E86\u6587"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"Web"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u6C6A\u9E3F\u5B87"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#CB7676"}},"...")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#A65E2B"}},"PO"),r("span",{style:{color:"#393A34"}},"\uFF1A "),r("span",{style:{color:"#8C862B"}},"\u90B1\u6E05\u9752")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"Member"),r("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u6731\u5E86\u6587"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"Web"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u6C6A\u9E3F\u5B87"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#AB5959"}},"...")])])])],-1),I3={name:"24",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/893a7683a8874273a54351fe4f63d53e.png",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=it;return A(),q(ct,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),F3,L3,S(l,Ke({},{ranges:["all","1","7-9","all"]}),{default:T(()=>[R3]),_:1},16)]),_:1},16)}}},N3=r("h1",null,[r("strong",null,"\u7535\u73A9\u57CE")],-1),j3=r("p",null,"\u7535\u73A9\u5A31\u4E50\u751F\u6001\uFF0C\u96C6\u6210\u7B2C\u4E09\u65B9\u5C0F\u6E38\u620F",-1),H3=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#D4976C"}},"PO"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A "),r("span",{style:{color:"#B8A965"}},"\u6768\u68EE")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"Member"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u9EC4\u4ECE\u5BCC"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"web"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u53F6\u817E\u98DE"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"unity"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u4F55\u667A\u52C7"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#CB7676"}},"...")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#A65E2B"}},"PO"),r("span",{style:{color:"#393A34"}},"\uFF1A "),r("span",{style:{color:"#8C862B"}},"\u6768\u68EE")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"Member"),r("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u9EC4\u4ECE\u5BCC"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"web"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u53F6\u817E\u98DE"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"unity"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u4F55\u667A\u52C7"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#AB5959"}},"...")])])])],-1),U3={name:"25",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/e9e2f5993886473aa9f1767a7a29a6c8.png",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=it;return A(),q(ct,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),N3,j3,S(l,Ke({},{ranges:["all","1","7-11","all"]}),{default:T(()=>[H3]),_:1},16)]),_:1},16)}}},V3={class:"grid grid-cols-2 w-full h-full"},W3={class:"h-full"},z3=["src"],Lf=ye({name:"iframe-right",props:{class:null,url:null},setup(e){const t=e;return I(V),(n,s)=>(A(),z("div",V3,[r("div",{class:Fe(["slidev-layout default",t.class])},[wt(n.$slots,"default")],2),r("div",W3,[r("iframe",{id:"frame",class:"w-full h-full",src:e.url},null,8,z3)])]))}}),K3=r("h1",null,[r("strong",null,"\u5F00\u653E\u5E73\u53F0")],-1),q3=r("p",null,"\u4F9B\u7B2C\u4E09\u65B9\u96C6\u6210\u5E94\u7528\u5230UTown\u5143\u5B87\u5B99\u7684\u5F00\u53D1\u8005\u5E73\u53F0",-1),Y3=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#D4976C"}},"PO"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A "),r("span",{style:{color:"#B8A965"}},"\u4F55\u951A")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"Member"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u9EC4\u4ECE\u5BCC"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"web"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u53F6\u817E\u98DE"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"unity"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u5434\u6797"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#CB7676"}},"...")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#A65E2B"}},"PO"),r("span",{style:{color:"#393A34"}},"\uFF1A "),r("span",{style:{color:"#8C862B"}},"\u4F55\u951A")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"Member"),r("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u9EC4\u4ECE\u5BCC"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"web"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u53F6\u817E\u98DE"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"unity"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u5434\u6797"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#AB5959"}},"...")])])])],-1),Z3={name:"26",setup(e){const t={layout:"iframe-right",url:"https://open.weixin.qq.com/",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=it;return A(),q(Lf,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),K3,q3,S(l,Ke({},{ranges:["all","1","7-11","all"]}),{default:T(()=>[Y3]),_:1},16)]),_:1},16)}}},X3=r("h1",null,[r("strong",null,"\u201C\u592A\u7A7A\u72FC\u4EBA\u6740\u201D")],-1),G3=r("p",null,"\u300AAmong us\u300B",-1),J3=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#D4976C"}},"PO"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A "),r("span",{style:{color:"#B8A965"}},"\u8096\u9A70")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"Member"),r("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u5F20\u8C6A\u6770"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"Unity"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u738B\u955E\u94A6"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"Unity"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u674E\u5609\u6587"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"Unity"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B8A965"}},"\u4FAF\u5F00\u65B9"),r("span",{style:{color:"#DBD7CA"}},"\uFF08"),r("span",{style:{color:"#B8A965"}},"\u670D\u52A1\u7AEF"),r("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#CB7676"}},"...")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#A65E2B"}},"PO"),r("span",{style:{color:"#393A34"}},"\uFF1A "),r("span",{style:{color:"#8C862B"}},"\u8096\u9A70")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"Member"),r("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u5F20\u8C6A\u6770"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"Unity"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u738B\u955E\u94A6"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"Unity"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u674E\u5609\u6587"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"Unity"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#8C862B"}},"\u4FAF\u5F00\u65B9"),r("span",{style:{color:"#393A34"}},"\uFF08"),r("span",{style:{color:"#8C862B"}},"\u670D\u52A1\u7AEF"),r("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#AB5959"}},"...")])])])],-1),Q3={name:"27",setup(e){const t={layout:"iframe-right",url:"https://play.google.com/video/lava/web/player/yt:movie:sYvKjZKunyo?autoplay=1&authuser=0&embed=play",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=it;return A(),q(Lf,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),X3,G3,S(l,Ke({},{ranges:["all","1","7-15","all"]}),{default:T(()=>[J3]),_:1},16)]),_:1},16)}}},e6=u("Protocol"),t6=r("p",null,[u("\u534F\u8BAE "),r("br"),r("br")],-1),n6={grid:"~ cols-3 gap-2",m:"-t-2"},s6=u("Workflow"),r6=u("Feedback loop"),l6=u("Radiator"),o6=r("p",null,"\u5DE5\u4F5C\u6D41",-1),a6=r("p",null,"\u53CD\u9988\u73AF",-1),i6=r("p",null,"\u4FE1\u606F\u53D1\u5C04\u6E90",-1),c6={name:"28",setup(e){const t={layout:"cover",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=ze("center");return A(),q(Hn,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),r("h1",null,[r("strong",null,[S(l,null,{default:T(()=>[e6]),_:1})])]),t6,r("div",n6,[r("h3",null,[S(l,null,{default:T(()=>[s6]),_:1})]),r("h3",null,[S(l,null,{default:T(()=>[r6]),_:1})]),r("h3",null,[S(l,null,{default:T(()=>[l6]),_:1})]),o6,a6,i6])]),_:1},16)}}},u6=u("Workflow"),f6=r("br",null,null,-1),p6={name:"29",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/f21d9643c6d44cf38b1134a2f12c57f0.jpeg",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=ze("center");return A(),q(zt,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),r("h1",null,[r("strong",null,[S(l,null,{default:T(()=>[u6]),_:1})])]),f6]),_:1},16)}}},d6=u("3\u5927\u89D2\u8272"),h6=r("br",null,null,-1),m6={name:"30",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/8466a96e475a46bc97274daf091cb4e3.jpeg",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=ze("center");return A(),q(zt,ce(le(t)),{default:T(()=>[U("1\u3001\u4E09\u5927\u89D2\u8272"),r("h3",null,[r("strong",null,[S(l,null,{default:T(()=>[d6]),_:1})])]),h6]),_:1},16)}}},g6=u("3\u5927\u5DE5\u4EF6"),y6=r("br",null,null,-1),_6={name:"31",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/4805f1753bbd41d79e5f23296837551d.jpeg",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=ze("center");return A(),q(zt,ce(le(t)),{default:T(()=>[U("1\u3001\u4E09\u5927\u5DE5\u4EF6"),r("h3",null,[r("strong",null,[S(l,null,{default:T(()=>[g6]),_:1})])]),y6]),_:1},16)}}},v6=u("6\u5927\u8FC7\u7A0B"),b6=r("br",null,null,-1),w6={name:"32",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/95d3ddc9437045568dd98ffa6cb773c3.jpeg",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=ze("center");return A(),q(zt,ce(le(t)),{default:T(()=>[U("1\u30016\u5927\u8FC7\u7A0B"),r("h3",null,[r("strong",null,[S(l,null,{default:T(()=>[v6]),_:1})])]),b6]),_:1},16)}}},A6=u("Protocol"),x6=r("br",null,null,-1),C6=u("\u8FED\u4EE3"),k6=r("img",{src:"https://img-blog.csdnimg.cn/12f66f9da8ae4aaeb751b00bb58a4a20.png"},null,-1),$6={name:"33",setup(e){const t={layout:"default",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=ze("center");return A(),q(cr,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),r("h1",null,[S(l,null,{default:T(()=>[A6]),_:1})]),x6,S(l,null,{default:T(()=>[C6]),_:1}),k6]),_:1},16)}}},E6={name:"34",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/7165d7b8b9d9467a95981972abf47dda.jpeg",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>(A(),q(zt,ce(le(t)),null,16))}};var O6=ye({props:{every:{type:Number,default:1},at:{type:[Number,String],default:null},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var o,a;const e=Ir("click"),t=Ir("after"),n=(i,c,f)=>Dn(i,[[c,this.at!=null?+this.at+f:null,"",{hide:this.hide,fade:this.fade}]]);let s=(a=(o=this.$slots).default)==null?void 0:a.call(o);if(!s)return;s=Om(s);const l=i=>i.map((c,f)=>Fn(c)?n(yt(c),f%this.every===0?e:t,Math.floor(f/this.every)):c);return s.length===1&&["ul","ol"].includes(s[0].type)&&Array.isArray(s[0].children)?yt(s[0],{},[l(s[0].children)]):l(s)}});const B6=r("p",null,[r("img",{class:"absolute top-0 -left-0 opacity-1000",src:"https://img-blog.csdnimg.cn/2163b05d93804ca1a8f72ef1652f2012.jpeg"})],-1),D6=r("p",null,[r("img",{class:"absolute top-0 -left-0 opacity-1000",src:"https://img-blog.csdnimg.cn/ccb2c91c5cc94894a5690e4d47bf9b34.jpeg"})],-1),P6=r("p",null,[r("img",{class:"absolute top-0 -left-0 opacity-1000",src:"https://img-blog.csdnimg.cn/6c8d5aedd98b4a5e8f08aa5c06af0c06.jpeg"})],-1),S6={name:"35",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/0a6c410dfce841bdae1ba634fea03b33.jpeg",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=O6;return A(),q(zt,ce(le(t)),{default:T(()=>[U("1\u3001\u4FE1\u606F\u53D1\u5C04\u6E90"),S(l,null,{default:T(()=>[B6,D6,P6]),_:1})]),_:1},16)}}},M6=u("Protocol"),T6=r("br",null,null,-1),F6=u("\u7528\u6237\u6545\u4E8B\u548C\u4EFB\u52A1"),L6=r("br",null,null,-1),R6=r("br",null,null,-1),I6=r("br",null,null,-1),N6=r("br",null,null,-1),j6=r("br",null,null,-1),H6=r("br",null,null,-1),U6=u("\u62C6\u89E3\u539F\u5219\uFF1AMECE"),V6={name:"36",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/7a354dfc23ea4fb28ce72c0de91804ab.png",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=ze("center");return A(),q(ct,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),r("h1",null,[S(l,null,{default:T(()=>[M6]),_:1})]),T6,S(l,null,{default:T(()=>[F6]),_:1}),L6,R6,I6,N6,j6,H6,r("h1",null,[S(l,null,{default:T(()=>[U6]),_:1})])]),_:1},16)}}},W6=u("DOD"),z6=r("p",null,"\u5B8C\u6210\u5B9A\u4E49",-1),K6={name:"37",setup(e){const t={layout:"cover",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=ze("center");return A(),q(Hn,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),r("h1",null,[r("strong",null,[S(l,null,{default:T(()=>[W6]),_:1})])]),z6]),_:1},16)}}},q6=u("\u5B8C\u6210\u5B9A\u4E49"),Y6=r("br",null,null,-1),Z6={grid:"~ cols-4 gap-2",m:"-t-2"},X6=u("Dev"),G6=u("Test"),J6=u("Beta"),Q6=u("Prod"),e4=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"\uFF08\u5F00\u53D1\u73AF\u5883\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"\u89E3\u51B3\u51B2\u7A81")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"\u6301\u7EED\u96C6\u6210")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"})])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"\uFF08\u5F00\u53D1\u73AF\u5883\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"\u89E3\u51B3\u51B2\u7A81")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"\u6301\u7EED\u96C6\u6210")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"})])])],-1),t4=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"\uFF08\u6D4B\u8BD5\u73AF\u5883\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"\u96C6\u4E2D\u6D4B\u8BD5"),r("span",{style:{color:"#DBD7CA"}},"  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"\uFF08\u6D4B\u8BD5\u73AF\u5883\uFF09")]),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"}),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"\u96C6\u4E2D\u6D4B\u8BD5"),r("span",{style:{color:"#393A34"}},"  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")])])])],-1),n4=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"\uFF08\u51C6\u751F\u4EA7\u73AF\u5883\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"\u5168\u91CF\u6D4B\u8BD5\u22652\u8F6E")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"\u9664\u4F18\u5148\u7EA7\u4E3A\u201C\u4F4E\u201C\u7F3A\u9677\u6E05\u7A7A")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"\u7F8E\u672F\u3001UI\u3001\u4EA7\u54C1\u9A8C\u6536")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"\uFF08\u51C6\u751F\u4EA7\u73AF\u5883\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"\u5168\u91CF\u6D4B\u8BD5\u22652\u8F6E")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"\u9664\u4F18\u5148\u7EA7\u4E3A\u201C\u4F4E\u201C\u7F3A\u9677\u6E05\u7A7A")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"\u7F8E\u672F\u3001UI\u3001\u4EA7\u54C1\u9A8C\u6536")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")])])])],-1),s4=r("pre",{class:"shiki-container"},[r("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"\uFF08\u751F\u4EA7\u73AF\u5883\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"\u5168\u91CF\u6D4B\u8BD5\u22653\u8F6E")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"\u7F3A\u9677\u539F\u5219\u4E0A\u6E05\u7A7A")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#C98A7D"}},"\u7F8E\u672F\u3001UI\u3001\u4EA7\u54C1\u9A8C\u6536")])])]),r("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[r("code",null,[r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"\uFF08\u751F\u4EA7\u73AF\u5883\uFF09")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"\u5168\u91CF\u6D4B\u8BD5\u22653\u8F6E")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"\u7F3A\u9677\u539F\u5219\u4E0A\u6E05\u7A7A")]),u(`
`),r("span",{class:"line"},[r("span",{style:{color:"#B56959"}},"\u7F8E\u672F\u3001UI\u3001\u4EA7\u54C1\u9A8C\u6536")])])])],-1),r4={name:"38",setup(e){const t={layout:"default",background:"https://www.utown.io/",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=ze("center");return A(),q(cr,ce(le(t)),{default:T(()=>[U("2\u3001\u5927\u7EB2"),r("h1",null,[r("strong",null,[S(l,null,{default:T(()=>[q6]),_:1})])]),Y6,r("div",Z6,[r("h3",null,[S(l,null,{default:T(()=>[X6]),_:1})]),r("h3",null,[S(l,null,{default:T(()=>[G6]),_:1})]),r("h3",null,[S(l,null,{default:T(()=>[J6]),_:1})]),r("h3",null,[S(l,null,{default:T(()=>[Q6]),_:1})]),e4,t4,n4,s4])]),_:1},16)}}},l4=u("Outlook"),o4=r("p",null,[r("s",null,"\u9E21\u6C64"),u(" \u5C55\u671B")],-1),a4={name:"39",setup(e){const t={layout:"cover",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=ze("center");return A(),q(Hn,ce(le(t)),{default:T(()=>[U("1\u3001\u5C55\u671B\u5C01\u9762"),r("h1",null,[r("strong",null,[S(l,null,{default:T(()=>[l4]),_:1})])]),o4]),_:1},16)}}},i4=u("Outlook"),c4=r("br",null,null,-1),u4=u("FT\u7EC4\u7EC7"),f4=r("blockquote",null,[r("p",null,"\u4EA7\u54C1\u4FA7\uFF1A\u6C89\u6DC0\u957F\u671F\u7A33\u5B9A\u7684\u7279\u6027\u89C4\u5212\uFF0C\u4ECE\u9700\u6C42\u8BBE\u8BA1\u4E0A\u8DB3\u591F\u89E3\u8026")],-1),p4=r("blockquote",null,[r("p",null,"\u5F00\u53D1\u4FA7\uFF1A\u7A33\u5B9A\u7684\u3001\u9AD8\u8D28\u91CF\u7684CICD")],-1),d4=r("blockquote",null,[r("p",null,"\u6D4B\u8BD5\u4FA7\uFF1A\u6548\u7387\u5316\u5DE5\u5177\u5F15\u5165\uFF08\u81EA\u52A8\u5316\u7B49\uFF09")],-1),h4=r("blockquote",null,[r("p",null,"All team\uFF1A\u6210\u957F\u4E3A\u201C\u4E13\u5BB6\u201D\uFF08\u4E1A\u52A1\u548C\u6280\u672F\uFF09")],-1),m4={name:"40",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/24bd2c170bf44c17a968658bef6263ae.png",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>{const l=ze("center");return A(),q(ct,ce(le(t)),{default:T(()=>[U("1\u3001\u5C01\u9762"),r("h1",null,[S(l,null,{default:T(()=>[i4]),_:1})]),c4,S(l,null,{default:T(()=>[u4]),_:1}),f4,p4,d4,h4]),_:1},16)}}},g4={name:"41",setup(e){const t={layout:"end",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"};return I(V),(n,s)=>(A(),q(Pf,ce(le(t)),null,16))}};var y4=[{path:"1",name:"page-1",component:Pv,meta:{theme:"seriph",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
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
`,filepath:"/Users/ios/markdown_ppt/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:Uv,meta:{slide:{raw:`
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
\u7EC4\u7EC7\u67B6\u6784`,frontmatter:{title:"\u5DE5\u4F5C\u534F\u8BAE",layout:"cover",date:"2013/7/13 20:46:25"},index:4,start:144,end:158,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:hb,meta:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image-left",image:"https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png?raw=true",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u7EC4\u7EC7\u7ED3\u6784
layout: image-left
image: https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png?raw=true
date: 2013/7/13 20:46:25
---

<!--3.1\u3001\u7EC4\u7EC7\u7ED3\u6784-->
<br><br><br><br><br><br><br>

### **<center>\u4E92\u8054\u7F51\u5BE1\u5934\u7EC4\u7EC7\u7ED3\u6784</center>**
`,title:"\u7EC4\u7EC7\u7ED3\u6784",level:1,content:`<!--3.1\u3001\u7EC4\u7EC7\u7ED3\u6784-->
<br><br><br><br><br><br><br>

### **<center>\u4E92\u8054\u7F51\u5BE1\u5934\u7EC4\u7EC7\u7ED3\u6784</center>**`,frontmatter:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image-left",image:"https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png?raw=true",date:"2013/7/13 20:46:25"},index:5,start:158,end:170,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:gb,meta:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image",image:"https://img-blog.csdnimg.cn/761c9b692a4548e7912c777c4ea88f50.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u7EC4\u7EC7\u7ED3\u6784
layout: image
image: https://img-blog.csdnimg.cn/761c9b692a4548e7912c777c4ea88f50.png
date: 2013/7/13 20:46:25
---

<!--3.2\u7EC4\u7EC7\u7ED3\u6784-->
<br><br><br><br><br><br><br>

`,title:"\u7EC4\u7EC7\u7ED3\u6784",level:1,content:`<!--3.2\u7EC4\u7EC7\u7ED3\u6784-->
<br><br><br><br><br><br><br>`,frontmatter:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image",image:"https://img-blog.csdnimg.cn/761c9b692a4548e7912c777c4ea88f50.png",date:"2013/7/13 20:46:25"},index:6,start:170,end:181,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:_b,meta:{title:"\u7EC4\u7EC7\u7ED3\u6784\uFF08\u5F31\u77E9\u9635\uFF09",layout:"image",image:"https://img-blog.csdnimg.cn/177b97f8e76843ad8f38b97e6f34bacd.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u7EC4\u7EC7\u7ED3\u6784\uFF08\u5F31\u77E9\u9635\uFF09
layout: image
image: https://img-blog.csdnimg.cn/177b97f8e76843ad8f38b97e6f34bacd.png
date: 2013/7/13 20:46:25
---

<!--3.3 \u7EC4\u7EC7\u67B6\u6784\uFF08\u5F31\u77E9\u9635\uFF09-->
<br><br><br><br><br><br><br>
`,title:"\u7EC4\u7EC7\u7ED3\u6784\uFF08\u5F31\u77E9\u9635\uFF09",level:1,content:`<!--3.3 \u7EC4\u7EC7\u67B6\u6784\uFF08\u5F31\u77E9\u9635\uFF09-->
<br><br><br><br><br><br><br>`,frontmatter:{title:"\u7EC4\u7EC7\u7ED3\u6784\uFF08\u5F31\u77E9\u9635\uFF09",layout:"image",image:"https://img-blog.csdnimg.cn/177b97f8e76843ad8f38b97e6f34bacd.png",date:"2013/7/13 20:46:25"},index:7,start:181,end:191,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:bb,meta:{title:"\u5E73\u53F0\u8D44\u6E90\u7EC4",layout:"image",image:"https://img-blog.csdnimg.cn/c174f54ad2734ab3a2dda4d41eeb603f.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u5E73\u53F0\u8D44\u6E90\u7EC4
layout: image
image: https://img-blog.csdnimg.cn/c174f54ad2734ab3a2dda4d41eeb603f.png
date: 2013/7/13 20:46:25
---

<!--3.3 \u5E73\u53F0\u8D44\u6E90\u7EC4-->
<br><br><br><br><br><br><br>`,title:"\u5E73\u53F0\u8D44\u6E90\u7EC4",level:1,content:`<!--3.3 \u5E73\u53F0\u8D44\u6E90\u7EC4-->
<br><br><br><br><br><br><br>`,frontmatter:{title:"\u5E73\u53F0\u8D44\u6E90\u7EC4",layout:"image",image:"https://img-blog.csdnimg.cn/c174f54ad2734ab3a2dda4d41eeb603f.png",date:"2013/7/13 20:46:25"},index:8,start:191,end:200,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Ab,meta:{title:"\u9879\u76EE\u7EC4\u7ED3\u6784",layout:"default",image:"https://img-blog.csdnimg.cn/a30131b99ea34d7fb5c30f03823fe700.jpeg",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u7EC4\u7ED3\u6784
layout: default
image: https://img-blog.csdnimg.cn/a30131b99ea34d7fb5c30f03823fe700.jpeg
date: 2013/7/13 20:46:25
---
<!--1\u3001\u9879\u76EE\u7EC4\u7ED3\u6784-->


<img border="rounded" 
src="https://img-blog.csdnimg.cn/a30131b99ea34d7fb5c30f03823fe700.jpeg"/>
`,title:"\u9879\u76EE\u7EC4\u7ED3\u6784",level:1,content:`<!--1\u3001\u9879\u76EE\u7EC4\u7ED3\u6784-->


<img border="rounded" 
src="https://img-blog.csdnimg.cn/a30131b99ea34d7fb5c30f03823fe700.jpeg"/>`,frontmatter:{title:"\u9879\u76EE\u7EC4\u7ED3\u6784",layout:"default",image:"https://img-blog.csdnimg.cn/a30131b99ea34d7fb5c30f03823fe700.jpeg",date:"2013/7/13 20:46:25"},index:9,start:200,end:212,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:kb,meta:{title:"\u9879\u76EE\u76EE\u6807\u5C01\u9762",layout:"cover",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u76EE\u6807\u5C01\u9762
layout: cover

date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **<center>What</center>**
\u613F\u666F\u76EE\u6807
`,title:"\u9879\u76EE\u76EE\u6807\u5C01\u9762",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **<center>What</center>**
\u613F\u666F\u76EE\u6807`,frontmatter:{title:"\u9879\u76EE\u76EE\u6807\u5C01\u9762",layout:"cover",date:"2013/7/13 20:46:25"},index:10,start:212,end:224,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Eb,meta:{title:"\u53D1\u5E03\u8BA1\u5212",layout:"default",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u53D1\u5E03\u8BA1\u5212
layout: default
date: 2013/7/13 20:46:25
---
<img
src="https://img-blog.csdnimg.cn/fbe5402b18af496fbdaa132bfea7c5a8.png"
/>
`,title:"\u53D1\u5E03\u8BA1\u5212",level:1,content:`<img
src="https://img-blog.csdnimg.cn/fbe5402b18af496fbdaa132bfea7c5a8.png"
/>`,frontmatter:{title:"\u53D1\u5E03\u8BA1\u5212",layout:"default",date:"2013/7/13 20:46:25"},index:11,start:224,end:233,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Ob,meta:{title:"\u4E1A\u52A1\u67B6\u6784",layout:"image",image:"https://img-blog.csdnimg.cn/a733bee905c549458e5d96faca92580c.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u4E1A\u52A1\u67B6\u6784
layout: image
image: https://img-blog.csdnimg.cn/a733bee905c549458e5d96faca92580c.png

date: 2013/7/13 20:46:25
---

<!--1\u3001UTown\u4E1A\u52A1\u67B6\u6784-->



`,title:"\u4E1A\u52A1\u67B6\u6784",level:1,content:"",frontmatter:{title:"\u4E1A\u52A1\u67B6\u6784",layout:"image",image:"https://img-blog.csdnimg.cn/a733bee905c549458e5d96faca92580c.png",date:"2013/7/13 20:46:25"},note:"1\u3001UTown\u4E1A\u52A1\u67B6\u6784",index:12,start:233,end:246,notesHTML:`<p>1\u3001UTown\u4E1A\u52A1\u67B6\u6784</p>
`,filepath:"/Users/ios/markdown_ppt/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:J2,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/f4a81b8c0aff4c16bdff821ab30ac9a5.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/f4a81b8c0aff4c16bdff821ab30ac9a5.png
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **\u4E3B\u7248\u672C**

\u4E3B\u6846\u67B6\u3001\u4F1A\u8BAE\u3001IM\u804A\u5929

\`\`\`ts {all|1-2|7-15|all}
PO\uFF1A \u4E01\u5B87\u535A
\u5218\u4ED5\u6770\u3001\u674E\u4E9A\u3001\u674E\u9633...


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

\u4E3B\u6846\u67B6\u3001\u4F1A\u8BAE\u3001IM\u804A\u5929

\`\`\`ts {all|1-2|7-15|all}
PO\uFF1A \u4E01\u5B87\u535A
\u5218\u4ED5\u6770\u3001\u674E\u4E9A\u3001\u674E\u9633...


Member\uFF1A 

\u90B9\u676D\u7279\uFF08unity\uFF09

\u9EC4\u52B2\uFF08Android\uFF09

\u9648\u52C7\u5747\uFF08ios\uFF09

\u4F55\u667A\u52C7\uFF08\u670D\u52A1\u7AEF\uFF09

\u5F6D\u4F73\u8F89\uFF08Web\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/f4a81b8c0aff4c16bdff821ab30ac9a5.png",date:"2013/7/13 20:46:25"},index:13,start:246,end:280,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:n3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/4ce912a153284c23b475d8ac0a117bab.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/4ce912a153284c23b475d8ac0a117bab.png
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **\u5730\u56FE\u7F16\u8F91\u5668**

\u7269\u4EF6\u6446\u653E

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

\u7269\u4EF6\u6446\u653E

\`\`\`ts {all|1|7-11|all}
PO\uFF1A \u5218\u6167



Member\uFF1A 

\u8D75\u6069\u6069\uFF08unity\uFF09

\u4F58\u4E2D\u519B\uFF08unity\uFF09

\u5170\u56FD\u5FD7\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/4ce912a153284c23b475d8ac0a117bab.png",date:"2013/7/13 20:46:25"},index:14,start:280,end:310,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:o3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/b220f60e64784c229c724b373acc4530.png",date:"2013/7/13 20:46:25",slide:{raw:`---
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

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/b220f60e64784c229c724b373acc4530.png",date:"2013/7/13 20:46:25"},index:15,start:310,end:339,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:u3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/1b11907fa7a74e6496f4637ba0a6bec9.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/1b11907fa7a74e6496f4637ba0a6bec9.png
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# **\u670D\u9970DIY**
\u670D\u88C5\u56FE\u7EB8\u5236\u4F5C

\`\`\`ts {all|1|7-9|all}
PO\uFF1A \u5218\u6167



Member\uFF1A 

\u53F6\u817E\u98DE\uFF08unity\uFF09

\u6768\u56FD\u6797\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u670D\u9970DIY**
\u670D\u88C5\u56FE\u7EB8\u5236\u4F5C

\`\`\`ts {all|1|7-9|all}
PO\uFF1A \u5218\u6167



Member\uFF1A 

\u53F6\u817E\u98DE\uFF08unity\uFF09

\u6768\u56FD\u6797\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/1b11907fa7a74e6496f4637ba0a6bec9.png",date:"2013/7/13 20:46:25"},index:16,start:339,end:363,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:h3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/d113f42921e14eda932604f9af396b24.png",date:"2013/7/13 20:46:25",slide:{raw:`---
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

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/d113f42921e14eda932604f9af396b24.png",date:"2013/7/13 20:46:25"},index:17,start:363,end:393,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:_3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/203e82b9d579414d92db9edb188b42dd.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/203e82b9d579414d92db9edb188b42dd.gif
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **\u6211\u7684\u7C89\u4E1D\u91CC\u6709\u9B3C**
\u8D77\u4E8EB\u7AD9\u7684\u7EBF\u4E0A\u72FC\u4EBA\u6740\u6E38\u620F\u6A21\u5F0F

\`\`\`ts {all|1|7-9|all}
PO\uFF1A \u6768\u68EE



Member\uFF1A 

\u590F\u5DDD\uFF08\u540E\u7AEF\uFF09

\u8C2D\u4E16\u4FCA\uFF08unity\uFF09
...

\`\`\`

`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u6211\u7684\u7C89\u4E1D\u91CC\u6709\u9B3C**
\u8D77\u4E8EB\u7AD9\u7684\u7EBF\u4E0A\u72FC\u4EBA\u6740\u6E38\u620F\u6A21\u5F0F

\`\`\`ts {all|1|7-9|all}
PO\uFF1A \u6768\u68EE



Member\uFF1A 

\u590F\u5DDD\uFF08\u540E\u7AEF\uFF09

\u8C2D\u4E16\u4FCA\uFF08unity\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/203e82b9d579414d92db9edb188b42dd.gif",date:"2013/7/13 20:46:25"},index:18,start:393,end:420,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:A3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/742aa0afbb484b49b1a0975db503173f.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/742aa0afbb484b49b1a0975db503173f.gif
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# **\u5BC6\u53CB\u52A8\u6001**
3D\u6F6E\u73A9\u98CE\u6362\u88C5\u7684\u793E\u4EA4\u5E7F\u573A

\`\`\`ts {all|1|7-15|all}
PO\uFF1A \u674E\u96E8\u9716/\u8D75\u8F69



Member\uFF1A 

\u90B9\u676D\u7279\uFF08unity\uFF09

\u9EC4\u52B2\uFF08Android\uFF09

\u9648\u52C7\u5747\uFF08ios\uFF09

\u4F55\u667A\u52C7\uFF08\u670D\u52A1\u7AEF\uFF09

\u5F6D\u4F73\u8F89\uFF08Web\uFF09
...

\`\`\``,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u5BC6\u53CB\u52A8\u6001**
3D\u6F6E\u73A9\u98CE\u6362\u88C5\u7684\u793E\u4EA4\u5E7F\u573A

\`\`\`ts {all|1|7-15|all}
PO\uFF1A \u674E\u96E8\u9716/\u8D75\u8F69



Member\uFF1A 

\u90B9\u676D\u7279\uFF08unity\uFF09

\u9EC4\u52B2\uFF08Android\uFF09

\u9648\u52C7\u5747\uFF08ios\uFF09

\u4F55\u667A\u52C7\uFF08\u670D\u52A1\u7AEF\uFF09

\u5F6D\u4F73\u8F89\uFF08Web\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/742aa0afbb484b49b1a0975db503173f.gif",date:"2013/7/13 20:46:25"},index:19,start:420,end:450,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:$3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/f497282637e147afbbb22c570fa588f9.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/f497282637e147afbbb22c570fa588f9.png
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **\u7528\u6237\u751F\u6001**
\u7ECF\u6D4E\u3001\u70F9\u996A\u3001\u5546\u5E97

\`\`\`ts {all|1|7-11|all}
PO\uFF1A \u8D75\u8F69/\u738B\u79B9\u8C6A



Member\uFF1A 

\u5218\u7EF4\uFF08unity\uFF09

\u6731\u5E86\u6587\uFF08web\uFF09

\u6768\u56FD\u6797\uFF08\u540E\u7AEF\uFF09
...

\`\`\`

`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u7528\u6237\u751F\u6001**
\u7ECF\u6D4E\u3001\u70F9\u996A\u3001\u5546\u5E97

\`\`\`ts {all|1|7-11|all}
PO\uFF1A \u8D75\u8F69/\u738B\u79B9\u8C6A



Member\uFF1A 

\u5218\u7EF4\uFF08unity\uFF09

\u6731\u5E86\u6587\uFF08web\uFF09

\u6768\u56FD\u6797\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/f497282637e147afbbb22c570fa588f9.png",date:"2013/7/13 20:46:25"},index:20,start:450,end:479,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:D3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fkfx.7fzk.com%2Fwp-content%2Fuploads%2F2021%2F12%2F2021122801521187.jpg&refer=http%3A%2F%2Fkfx.7fzk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658026796&t=f9d87521e317d306903f26fbf4717637",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: >-
  https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fkfx.7fzk.com%2Fwp-content%2Fuploads%2F2021%2F12%2F2021122801521187.jpg&refer=http%3A%2F%2Fkfx.7fzk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658026796&t=f9d87521e317d306903f26fbf4717637
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **NFT**
NFT\u5C55\u793A\u4EA4\u6613\u3001\u4EE3\u5E01\u4F53\u7CFB

\`\`\`ts {all|1|7-15|all}
PO\uFF1A \u674E\u96E8\u9716



Member\uFF1A 

\u9EC4\u4ECE\u5BCC\uFF08web\uFF09

\u590F\u6587\u5175\uFF08Android\uFF09

\u9648\u52C7\u5747\uFF08ios\uFF09

\u4F55\u667A\u52C7\uFF08\u670D\u52A1\u7AEF\uFF09
...

\`\`\`

`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **NFT**
NFT\u5C55\u793A\u4EA4\u6613\u3001\u4EE3\u5E01\u4F53\u7CFB

\`\`\`ts {all|1|7-15|all}
PO\uFF1A \u674E\u96E8\u9716



Member\uFF1A 

\u9EC4\u4ECE\u5BCC\uFF08web\uFF09

\u590F\u6587\u5175\uFF08Android\uFF09

\u9648\u52C7\u5747\uFF08ios\uFF09

\u4F55\u667A\u52C7\uFF08\u670D\u52A1\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fkfx.7fzk.com%2Fwp-content%2Fuploads%2F2021%2F12%2F2021122801521187.jpg&refer=http%3A%2F%2Fkfx.7fzk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658026796&t=f9d87521e317d306903f26fbf4717637",date:"2013/7/13 20:46:25"},index:21,start:479,end:511,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:T3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **UT\u5B98\u7F51**
\u66DD\u5149\u3001\u4EA4\u6613\u5E02\u573A

\`\`\`ts {all|1|7|all}
PO\uFF1A \u6768\u76CA



Member\uFF1A 

\u6731\u5E86\u6587\uFF08Web\uFF09

\u674E\u5065\uFF08\u540E\u7AEF\uFF09
...

\`\`\`

`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **UT\u5B98\u7F51**
\u66DD\u5149\u3001\u4EA4\u6613\u5E02\u573A

\`\`\`ts {all|1|7|all}
PO\uFF1A \u6768\u76CA



Member\uFF1A 

\u6731\u5E86\u6587\uFF08Web\uFF09

\u674E\u5065\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"},index:22,start:511,end:538,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:I3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/893a7683a8874273a54351fe4f63d53e.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/893a7683a8874273a54351fe4f63d53e.png
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **UT\u4E2D\u53F0**
\u7BA1\u7406\u63A7\u5236\u53F0\u3001\u914D\u7F6E

\`\`\`ts {all|1|7-9|all}
PO\uFF1A \u90B1\u6E05\u9752



Member\uFF1A 

\u6731\u5E86\u6587\uFF08Web\uFF09

\u6C6A\u9E3F\u5B87\uFF08\u540E\u7AEF\uFF09
...

\`\`\`

`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **UT\u4E2D\u53F0**
\u7BA1\u7406\u63A7\u5236\u53F0\u3001\u914D\u7F6E

\`\`\`ts {all|1|7-9|all}
PO\uFF1A \u90B1\u6E05\u9752



Member\uFF1A 

\u6731\u5E86\u6587\uFF08Web\uFF09

\u6C6A\u9E3F\u5B87\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/893a7683a8874273a54351fe4f63d53e.png",date:"2013/7/13 20:46:25"},index:23,start:538,end:565,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:U3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/e9e2f5993886473aa9f1767a7a29a6c8.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/e9e2f5993886473aa9f1767a7a29a6c8.png
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **\u7535\u73A9\u57CE**
\u7535\u73A9\u5A31\u4E50\u751F\u6001\uFF0C\u96C6\u6210\u7B2C\u4E09\u65B9\u5C0F\u6E38\u620F

\`\`\`ts {all|1|7-11|all}
PO\uFF1A \u6768\u68EE



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
PO\uFF1A \u6768\u68EE



Member\uFF1A 

\u9EC4\u4ECE\u5BCC\uFF08web\uFF09

\u53F6\u817E\u98DE\uFF08unity\uFF09

\u4F55\u667A\u52C7\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/e9e2f5993886473aa9f1767a7a29a6c8.png",date:"2013/7/13 20:46:25"},index:24,start:565,end:594,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:Z3,meta:{title:"\u5F00\u653E\u5E73\u53F0",layout:"iframe-right",url:"https://open.weixin.qq.com/",date:"2013/7/13 20:46:25",slide:{raw:`---
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

\`\`\``,frontmatter:{title:"\u5F00\u653E\u5E73\u53F0",layout:"iframe-right",url:"https://open.weixin.qq.com/",date:"2013/7/13 20:46:25"},index:25,start:594,end:623,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:Q3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"iframe-right",url:"https://play.google.com/video/lava/web/player/yt:movie:sYvKjZKunyo?autoplay=1&authuser=0&embed=play",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: iframe-right
url:  https://play.google.com/video/lava/web/player/yt:movie:sYvKjZKunyo?autoplay=1&authuser=0&embed=play
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **\u201C\u592A\u7A7A\u72FC\u4EBA\u6740\u201D**
\u300AAmong us\u300B

\`\`\`ts {all|1|7-15|all}
PO\uFF1A \u8096\u9A70



Member\uFF1A 

\u5F20\u8C6A\u6770\uFF08Unity\uFF09

\u738B\u955E\u94A6\uFF08Unity\uFF09

\u674E\u5609\u6587\uFF08Unity\uFF09

\u4FAF\u5F00\u65B9\uFF08\u670D\u52A1\u7AEF\uFF09
...

\`\`\``,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u201C\u592A\u7A7A\u72FC\u4EBA\u6740\u201D**
\u300AAmong us\u300B

\`\`\`ts {all|1|7-15|all}
PO\uFF1A \u8096\u9A70



Member\uFF1A 

\u5F20\u8C6A\u6770\uFF08Unity\uFF09

\u738B\u955E\u94A6\uFF08Unity\uFF09

\u674E\u5609\u6587\uFF08Unity\uFF09

\u4FAF\u5F00\u65B9\uFF08\u670D\u52A1\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"iframe-right",url:"https://play.google.com/video/lava/web/player/yt:movie:sYvKjZKunyo?autoplay=1&authuser=0&embed=play",date:"2013/7/13 20:46:25"},index:26,start:623,end:652,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:c6,meta:{title:"\u5DE5\u4F5C\u534F\u8BAE",layout:"cover",date:"2013/7/13 20:46:25",slide:{raw:`---
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

\u5DE5\u4F5C\u6D41

\u53CD\u9988\u73AF

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

\u5DE5\u4F5C\u6D41

\u53CD\u9988\u73AF

\u4FE1\u606F\u53D1\u5C04\u6E90

</div>`,frontmatter:{title:"\u5DE5\u4F5C\u534F\u8BAE",layout:"cover",date:"2013/7/13 20:46:25"},index:27,start:652,end:684,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:p6,meta:{title:"\u9884\u671F\u5DE5\u4F5C\u6D41",layout:"image",image:"https://img-blog.csdnimg.cn/f21d9643c6d44cf38b1134a2f12c57f0.jpeg",date:"2013/7/13 20:46:25",slide:{raw:`---
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
<br>`,frontmatter:{title:"\u9884\u671F\u5DE5\u4F5C\u6D41",layout:"image",image:"https://img-blog.csdnimg.cn/f21d9643c6d44cf38b1134a2f12c57f0.jpeg",date:"2013/7/13 20:46:25"},index:28,start:684,end:698,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:m6,meta:{title:"\u4E09\u5927\u89D2\u8272",layout:"image",image:"https://img-blog.csdnimg.cn/8466a96e475a46bc97274daf091cb4e3.jpeg",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u4E09\u5927\u89D2\u8272
layout: image
image: https://img-blog.csdnimg.cn/8466a96e475a46bc97274daf091cb4e3.jpeg
date: 2013/7/13 20:46:25
---

<!--1\u3001\u4E09\u5927\u89D2\u8272-->

### **<center>3\u5927\u89D2\u8272</center>**
<br>`,title:"\u4E09\u5927\u89D2\u8272",level:1,content:`<!--1\u3001\u4E09\u5927\u89D2\u8272-->

### **<center>3\u5927\u89D2\u8272</center>**
<br>`,frontmatter:{title:"\u4E09\u5927\u89D2\u8272",layout:"image",image:"https://img-blog.csdnimg.cn/8466a96e475a46bc97274daf091cb4e3.jpeg",date:"2013/7/13 20:46:25"},index:29,start:698,end:709,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:_6,meta:{title:"\u4E09\u5927\u5DE5\u4EF6",layout:"image",image:"https://img-blog.csdnimg.cn/4805f1753bbd41d79e5f23296837551d.jpeg",date:"2013/7/13 20:46:25",slide:{raw:`---
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
<br>`,frontmatter:{title:"\u4E09\u5927\u5DE5\u4EF6",layout:"image",image:"https://img-blog.csdnimg.cn/4805f1753bbd41d79e5f23296837551d.jpeg",date:"2013/7/13 20:46:25"},index:30,start:709,end:721,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:w6,meta:{title:"\u4E09\u5927\u5DE5\u4EF6",layout:"image",image:"https://img-blog.csdnimg.cn/95d3ddc9437045568dd98ffa6cb773c3.jpeg",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u4E09\u5927\u5DE5\u4EF6
layout: image
image: https://img-blog.csdnimg.cn/95d3ddc9437045568dd98ffa6cb773c3.jpeg
date: 2013/7/13 20:46:25
---

<!--1\u30016\u5927\u8FC7\u7A0B-->

### **<center>6\u5927\u8FC7\u7A0B</center>**
<br>`,title:"\u4E09\u5927\u5DE5\u4EF6",level:1,content:`<!--1\u30016\u5927\u8FC7\u7A0B-->

### **<center>6\u5927\u8FC7\u7A0B</center>**
<br>`,frontmatter:{title:"\u4E09\u5927\u5DE5\u4EF6",layout:"image",image:"https://img-blog.csdnimg.cn/95d3ddc9437045568dd98ffa6cb773c3.jpeg",date:"2013/7/13 20:46:25"},index:31,start:721,end:732,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:$6,meta:{title:"\u5177\u4F53\u8FED\u4EE3",layout:"default",date:"2013/7/13 20:46:25",slide:{raw:`---
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
/>`,frontmatter:{title:"\u5177\u4F53\u8FED\u4EE3",layout:"default",date:"2013/7/13 20:46:25"},index:32,start:732,end:747,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:E6,meta:{title:"\u53CD\u9988\u73AF",layout:"image",image:"https://img-blog.csdnimg.cn/7165d7b8b9d9467a95981972abf47dda.jpeg",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u53CD\u9988\u73AF
layout: image
image: https://img-blog.csdnimg.cn/7165d7b8b9d9467a95981972abf47dda.jpeg
date: 2013/7/13 20:46:25
---
<!--1\u3001\u53CD\u9988\u73AF-->

`,title:"\u53CD\u9988\u73AF",level:1,content:"",frontmatter:{title:"\u53CD\u9988\u73AF",layout:"image",image:"https://img-blog.csdnimg.cn/7165d7b8b9d9467a95981972abf47dda.jpeg",date:"2013/7/13 20:46:25"},note:"1\u3001\u53CD\u9988\u73AF",index:33,start:747,end:756,notesHTML:`<p>1\u3001\u53CD\u9988\u73AF</p>
`,filepath:"/Users/ios/markdown_ppt/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:S6,meta:{title:"\u4FE1\u606F\u53D1\u5C04\u6E90",layout:"image",image:"https://img-blog.csdnimg.cn/0a6c410dfce841bdae1ba634fea03b33.jpeg",date:"2013/7/13 20:46:25",slide:{raw:`---
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



</v-clicks>`,frontmatter:{title:"\u4FE1\u606F\u53D1\u5C04\u6E90",layout:"image",image:"https://img-blog.csdnimg.cn/0a6c410dfce841bdae1ba634fea03b33.jpeg",date:"2013/7/13 20:46:25"},index:34,start:756,end:788,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:V6,meta:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"image-right",image:"https://img-blog.csdnimg.cn/7a354dfc23ea4fb28ce72c0de91804ab.png",date:"2013/7/13 20:46:25",slide:{raw:`---
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

# <center>\u62C6\u89E3\u539F\u5219\uFF1AMECE</center>`,frontmatter:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"image-right",image:"https://img-blog.csdnimg.cn/7a354dfc23ea4fb28ce72c0de91804ab.png",date:"2013/7/13 20:46:25"},index:35,start:788,end:807,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:K6,meta:{title:"\u5B8C\u6210\u5B9A\u4E49",layout:"cover",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u5B8C\u6210\u5B9A\u4E49
layout: cover

date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->

# **<center>DOD</center>**
\u5B8C\u6210\u5B9A\u4E49
`,title:"\u5B8C\u6210\u5B9A\u4E49",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **<center>DOD</center>**
\u5B8C\u6210\u5B9A\u4E49`,frontmatter:{title:"\u5B8C\u6210\u5B9A\u4E49",layout:"cover",date:"2013/7/13 20:46:25"},index:36,start:807,end:819,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:r4,meta:{title:"\u5927\u7EB2\u7ED3\u6784",layout:"default",background:"https://www.utown.io/",date:"2013/7/13 20:46:25",slide:{raw:`---
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

### <center>Test</center>

### <center>Beta</center>

### <center>Prod</center>


\`\`\`yaml


\uFF08\u5F00\u53D1\u73AF\u5883\uFF09

\u89E3\u51B3\u51B2\u7A81
\u6301\u7EED\u96C6\u6210


\`\`\`

\`\`\`yaml


\uFF08\u6D4B\u8BD5\u73AF\u5883\uFF09


\u96C6\u4E2D\u6D4B\u8BD5  
	  
\`\`\`

\`\`\`yaml
	  
	  
\uFF08\u51C6\u751F\u4EA7\u73AF\u5883\uFF09
\u5168\u91CF\u6D4B\u8BD5\u22652\u8F6E
\u9664\u4F18\u5148\u7EA7\u4E3A\u201C\u4F4E\u201C\u7F3A\u9677\u6E05\u7A7A
\u7F8E\u672F\u3001UI\u3001\u4EA7\u54C1\u9A8C\u6536
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
\uFF08\u751F\u4EA7\u73AF\u5883\uFF09
\u5168\u91CF\u6D4B\u8BD5\u22653\u8F6E
\u7F3A\u9677\u539F\u5219\u4E0A\u6E05\u7A7A
\u7F8E\u672F\u3001UI\u3001\u4EA7\u54C1\u9A8C\u6536
\`\`\`




</div>`,title:"\u5927\u7EB2\u7ED3\u6784",level:1,content:`<!--2\u3001\u5927\u7EB2-->
# **<center>\u5B8C\u6210\u5B9A\u4E49</center>**
<br>
<div grid="~ cols-4 gap-2" m="-t-2">

### <center>Dev</center>

### <center>Test</center>

### <center>Beta</center>

### <center>Prod</center>


\`\`\`yaml


\uFF08\u5F00\u53D1\u73AF\u5883\uFF09

\u89E3\u51B3\u51B2\u7A81
\u6301\u7EED\u96C6\u6210


\`\`\`

\`\`\`yaml


\uFF08\u6D4B\u8BD5\u73AF\u5883\uFF09


\u96C6\u4E2D\u6D4B\u8BD5  
	  
\`\`\`

\`\`\`yaml
	  
	  
\uFF08\u51C6\u751F\u4EA7\u73AF\u5883\uFF09
\u5168\u91CF\u6D4B\u8BD5\u22652\u8F6E
\u9664\u4F18\u5148\u7EA7\u4E3A\u201C\u4F4E\u201C\u7F3A\u9677\u6E05\u7A7A
\u7F8E\u672F\u3001UI\u3001\u4EA7\u54C1\u9A8C\u6536
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
\uFF08\u751F\u4EA7\u73AF\u5883\uFF09
\u5168\u91CF\u6D4B\u8BD5\u22653\u8F6E
\u7F3A\u9677\u539F\u5219\u4E0A\u6E05\u7A7A
\u7F8E\u672F\u3001UI\u3001\u4EA7\u54C1\u9A8C\u6536
\`\`\`




</div>`,frontmatter:{title:"\u5927\u7EB2\u7ED3\u6784",layout:"default",background:"https://www.utown.io/",date:"2013/7/13 20:46:25"},index:37,start:819,end:886,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:a4,meta:{title:"\u5C55\u671B\u5C01\u9762",layout:"cover",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u5C55\u671B\u5C01\u9762
layout: cover

date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C55\u671B\u5C01\u9762-->

# **<center>Outlook</center>**
~~\u9E21\u6C64~~    \u5C55\u671B

`,title:"\u5C55\u671B\u5C01\u9762",level:1,content:`<!--1\u3001\u5C55\u671B\u5C01\u9762-->

# **<center>Outlook</center>**
~~\u9E21\u6C64~~    \u5C55\u671B`,frontmatter:{title:"\u5C55\u671B\u5C01\u9762",layout:"cover",date:"2013/7/13 20:46:25"},index:38,start:886,end:899,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:m4,meta:{title:"\u5C55\u671B",layout:"image-right",image:"https://img-blog.csdnimg.cn/24bd2c170bf44c17a968658bef6263ae.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u5C55\u671B
layout: image-right
image: https://img-blog.csdnimg.cn/24bd2c170bf44c17a968658bef6263ae.png
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# <center>Outlook</center>
<br>
<center>FT\u7EC4\u7EC7</center>

>\u4EA7\u54C1\u4FA7\uFF1A\u6C89\u6DC0\u957F\u671F\u7A33\u5B9A\u7684\u7279\u6027\u89C4\u5212\uFF0C\u4ECE\u9700\u6C42\u8BBE\u8BA1\u4E0A\u8DB3\u591F\u89E3\u8026


>\u5F00\u53D1\u4FA7\uFF1A\u7A33\u5B9A\u7684\u3001\u9AD8\u8D28\u91CF\u7684CICD


>\u6D4B\u8BD5\u4FA7\uFF1A\u6548\u7387\u5316\u5DE5\u5177\u5F15\u5165\uFF08\u81EA\u52A8\u5316\u7B49\uFF09


>All team\uFF1A\u6210\u957F\u4E3A\u201C\u4E13\u5BB6\u201D\uFF08\u4E1A\u52A1\u548C\u6280\u672F\uFF09

`,title:"\u5C55\u671B",level:1,content:`<!--1\u3001\u5C01\u9762-->

# <center>Outlook</center>
<br>
<center>FT\u7EC4\u7EC7</center>

>\u4EA7\u54C1\u4FA7\uFF1A\u6C89\u6DC0\u957F\u671F\u7A33\u5B9A\u7684\u7279\u6027\u89C4\u5212\uFF0C\u4ECE\u9700\u6C42\u8BBE\u8BA1\u4E0A\u8DB3\u591F\u89E3\u8026


>\u5F00\u53D1\u4FA7\uFF1A\u7A33\u5B9A\u7684\u3001\u9AD8\u8D28\u91CF\u7684CICD


>\u6D4B\u8BD5\u4FA7\uFF1A\u6548\u7387\u5316\u5DE5\u5177\u5F15\u5165\uFF08\u81EA\u52A8\u5316\u7B49\uFF09


>All team\uFF1A\u6210\u957F\u4E3A\u201C\u4E13\u5BB6\u201D\uFF08\u4E1A\u52A1\u548C\u6280\u672F\uFF09`,frontmatter:{title:"\u5C55\u671B",layout:"image-right",image:"https://img-blog.csdnimg.cn/24bd2c170bf44c17a968658bef6263ae.png",date:"2013/7/13 20:46:25"},index:39,start:899,end:923,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:g4,meta:{title:"\u5C55\u671B",layout:"end",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u5C55\u671B
layout: end
background: https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->
`,title:"\u5C55\u671B",level:1,content:"",frontmatter:{title:"\u5C55\u671B",layout:"end",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"},note:"1\u3001\u5C01\u9762",index:40,start:923,end:931,notesHTML:`<p>1\u3001\u5C01\u9762</p>
`,filepath:"/Users/ios/markdown_ppt/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",component:Pf,meta:{layout:"end"}}];const je=y4,_4=[{name:"play",path:"/",component:_v,children:[...je]},{name:"print",path:"/print",component:xv},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>hs(()=>import("./Presenter.143ef627.js"),["assets/Presenter.143ef627.js","assets/Presenter.c3f07bd1.css","assets/DrawingControls.27645386.js"]),beforeEnter:e=>{if(!$n.remote||$n.remote===e.query.password)return!0;if($n.remote&&e.query.password===void 0){const t=prompt("Enter password");if($n.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],vt=l0({history:w1("/redis_intro/"),routes:_4});function v4(e,t,{mode:n="replace"}={}){return O({get(){const s=vt.currentRoute.value.query[e];return s==null?t!=null?t:null:Array.isArray(s)?s.filter(Boolean):s},set(s){Ye(()=>{vt[v(n)]({query:et(we({},vt.currentRoute.value.query),{[e]:s})})})}})}const Rf=K(0);Ye(()=>{vt.afterEach(async()=>{await Ye(),Rf.value+=1})});const Jt=O(()=>vt.currentRoute.value),ga=O(()=>Jt.value.query.print!==void 0),b4=O(()=>Jt.value.query.print==="clicks"),Kt=O(()=>Jt.value.query.embedded!==void 0),jt=O(()=>Jt.value.path.startsWith("/presenter")),js=O(()=>ga.value&&!b4.value),Eo=O(()=>Jt.value.query.password),w4=O(()=>!jt.value&&(!Ce.remote||Eo.value===Ce.remote)),dc=v4("clicks","0"),If=O(()=>je.length-1),A4=O(()=>Jt.value.path),He=O(()=>parseInt(A4.value.split(/\//g).slice(-1)[0])||1);O(()=>hl(He.value));const ht=O(()=>je.find(e=>e.path===`${He.value}`));O(()=>{var e,t,n;return(n=(t=(e=ht.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});O(()=>{var e,t;return(t=(e=ht.value)==null?void 0:e.meta)==null?void 0:t.layout});const Rl=O(()=>je.find(e=>e.path===`${Math.min(je.length,He.value+1)}`)),x4=O(()=>{var e,t;return Rf.value,((t=(e=ht.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Ft=O({get(){if(js.value)return 99999;let e=+(dc.value||0);return isNaN(e)&&(e=0),e},set(e){dc.value=e.toString()}}),qr=O(()=>{var e,t,n;return+((n=(t=(e=ht.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?n:x4.value.length)}),C4=O(()=>He.value<je.length-1||Ft.value<qr.value),k4=O(()=>He.value>1||Ft.value>0),$4=O(()=>je.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(ya(e,t),e),[])),E4=O(()=>_a($4.value,ht.value));O(()=>va(E4.value));function fn(){qr.value<=Ft.value?nr():Ft.value+=1}async function pn(){Ft.value<=0?await sr():Ft.value-=1}function hl(e){return jt.value?`/presenter/${e}`:`/${e}`}function nr(){const e=Math.min(je.length,He.value+1);return us(e)}async function sr(e=!0){const t=Math.max(1,He.value-1);await us(t),e&&qr.value&&vt.replace({query:et(we({},Jt.value.query),{clicks:qr.value})})}function us(e,t){return vt.push({path:hl(e),query:et(we({},Jt.value.query),{clicks:t})})}function O4(e){const t=K(0),{direction:n,distanceX:s,distanceY:l}=Gg(e,{onSwipeStart(o){o.pointerType==="touch"&&(Qs.value||(t.value=ho()))},onSwipeEnd(o){if(o.pointerType!=="touch"||!t.value||Qs.value)return;const a=Math.abs(s.value),i=Math.abs(l.value);a/window.innerWidth>.3||a>100?n.value===Zt.LEFT?fn():pn():(i/window.innerHeight>.4||i>200)&&(n.value===Zt.DOWN?sr():nr())}})}async function Oo(){const{saveAs:e}=await hs(()=>import("./FileSaver.min.4f92ed14.js").then(function(t){return t.F}),[]);e(qu(Ce.download)?Ce.download:Ce.exportFilename?`${Ce.exportFilename}.pdf`:"/redis_intro/slidev-exported.pdf",`${Ce.title}.pdf`)}async function B4(e){var t,n;if(e==null){const s=(n=(t=ht.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(s!=null&&s.filepath))return!1;e=`${s.filepath}:${s.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function ya(e,t,n=1){var l,o,a,i,c;const s=(o=(l=t.meta)==null?void 0:l.slide)==null?void 0:o.level;s&&s>n&&e.length>0?ya(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((a=t.meta)==null?void 0:a.hideInToc),title:(c=(i=t.meta)==null?void 0:i.slide)==null?void 0:c.title})}function _a(e,t,n=!1,s){return e.map(l=>{const o=et(we({},l),{active:l.path===(t==null?void 0:t.path),hasActiveParent:n});return o.children.length>0&&(o.children=_a(o.children,t,o.active||o.hasActiveParent,o)),s&&(o.active||o.activeParent)&&(s.activeParent=!0),o})}function va(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>et(we({},n),{children:va(n.children,t+1)}))}function D4(){const e=Ce.titleTemplate.replace("%s",Ce.title||"Slidev");Cm({title:e}),Tm(`${e} - shared`),Im(`${e} - drawings`);function t(){jt.value&&(bi("page",+He.value),bi("clicks",Ft.value))}vt.afterEach(t),fe(Ft,t),Fm(n=>{(+n.page!=+He.value||Ft.value!==n.clicks)&&vt.replace({path:hl(n.page),query:et(we({},vt.currentRoute.value.query),{clicks:n.clicks||0})})})}const P4=ye({name:"App",setup(e){return I(V),D4(),(t,n)=>{const s=ze("RouterView"),l=ze("StarportCarrier");return A(),z(ke,null,[S(s),S(l)],64)}}});function Il(e){return e!==null&&typeof e=="object"}function Bo(e,t,n=".",s){if(!Il(t))return Bo(e,{},n,s);const l=Object.assign({},t);for(const o in e){if(o==="__proto__"||o==="constructor")continue;const a=e[o];a!=null&&(s&&s(l,o,a,n)||(Array.isArray(a)&&Array.isArray(l[o])?l[o]=a.concat(l[o]):Il(a)&&Il(l[o])?l[o]=Bo(a,l[o],(n?`${n}.`:"")+o.toString(),s):l[o]=a))}return l}function S4(e){return(...t)=>t.reduce((n,s)=>Bo(n,s,"",e),{})}const M4=S4(),Nf=1/60*1e3,T4=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),jf=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(T4()),Nf);function F4(e){let t=[],n=[],s=0,l=!1,o=!1;const a=new WeakSet,i={schedule:(c,f=!1,p=!1)=>{const h=p&&l,d=h?t:n;return f&&a.add(c),d.indexOf(c)===-1&&(d.push(c),h&&l&&(s=t.length)),c},cancel:c=>{const f=n.indexOf(c);f!==-1&&n.splice(f,1),a.delete(c)},process:c=>{if(l){o=!0;return}if(l=!0,[t,n]=[n,t],n.length=0,s=t.length,s)for(let f=0;f<s;f++){const p=t[f];p(c),a.has(p)&&(i.schedule(p),e())}l=!1,o&&(o=!1,i.process(c))}};return i}const L4=40;let Do=!0,rr=!1,Po=!1;const ls={delta:0,timestamp:0},ur=["read","update","preRender","render","postRender"],ml=ur.reduce((e,t)=>(e[t]=F4(()=>rr=!0),e),{}),hc=ur.reduce((e,t)=>{const n=ml[t];return e[t]=(s,l=!1,o=!1)=>(rr||I4(),n.schedule(s,l,o)),e},{});ur.reduce((e,t)=>(e[t]=ml[t].cancel,e),{});ur.reduce((e,t)=>(e[t]=()=>ml[t].process(ls),e),{});const R4=e=>ml[e].process(ls),Hf=e=>{rr=!1,ls.delta=Do?Nf:Math.max(Math.min(e-ls.timestamp,L4),1),ls.timestamp=e,Po=!0,ur.forEach(R4),Po=!1,rr&&(Do=!1,jf(Hf))},I4=()=>{rr=!0,Do=!0,Po||jf(Hf)},N4=()=>ls;function Uf(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(e);l<s.length;l++)t.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(e,s[l])&&(n[s[l]]=e[s[l]]);return n}var j4=function(){},mc=function(){};const So=(e,t,n)=>Math.min(Math.max(n,e),t),Nl=.001,H4=.01,gc=10,U4=.05,V4=1;function W4({duration:e=800,bounce:t=.25,velocity:n=0,mass:s=1}){let l,o;j4(e<=gc*1e3);let a=1-t;a=So(U4,V4,a),e=So(H4,gc,e/1e3),a<1?(l=f=>{const p=f*a,h=p*e,d=p-n,m=Mo(f,a),y=Math.exp(-h);return Nl-d/m*y},o=f=>{const h=f*a*e,d=h*n+n,m=Math.pow(a,2)*Math.pow(f,2)*e,y=Math.exp(-h),w=Mo(Math.pow(f,2),a);return(-l(f)+Nl>0?-1:1)*((d-m)*y)/w}):(l=f=>{const p=Math.exp(-f*e),h=(f-n)*e+1;return-Nl+p*h},o=f=>{const p=Math.exp(-f*e),h=(n-f)*(e*e);return p*h});const i=5/e,c=K4(l,o,i);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const f=Math.pow(c,2)*s;return{stiffness:f,damping:a*2*Math.sqrt(s*f),duration:e}}}const z4=12;function K4(e,t,n){let s=n;for(let l=1;l<z4;l++)s=s-e(s)/t(s);return s}function Mo(e,t){return e*Math.sqrt(1-t*t)}const q4=["duration","bounce"],Y4=["stiffness","damping","mass"];function yc(e,t){return t.some(n=>e[n]!==void 0)}function Z4(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!yc(e,Y4)&&yc(e,q4)){const n=W4(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function ba(e){var{from:t=0,to:n=1,restSpeed:s=2,restDelta:l}=e,o=Uf(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:i,damping:c,mass:f,velocity:p,duration:h,isResolvedFromDuration:d}=Z4(o),m=_c,y=_c;function w(){const b=p?-(p/1e3):0,$=n-t,C=c/(2*Math.sqrt(i*f)),k=Math.sqrt(i/f)/1e3;if(l===void 0&&(l=Math.min(Math.abs(n-t)/100,.4)),C<1){const E=Mo(k,C);m=j=>{const F=Math.exp(-C*k*j);return n-F*((b+C*k*$)/E*Math.sin(E*j)+$*Math.cos(E*j))},y=j=>{const F=Math.exp(-C*k*j);return C*k*F*(Math.sin(E*j)*(b+C*k*$)/E+$*Math.cos(E*j))-F*(Math.cos(E*j)*(b+C*k*$)-E*$*Math.sin(E*j))}}else if(C===1)m=E=>n-Math.exp(-k*E)*($+(b+k*$)*E);else{const E=k*Math.sqrt(C*C-1);m=j=>{const F=Math.exp(-C*k*j),Y=Math.min(E*j,300);return n-F*((b+C*k*$)*Math.sinh(Y)+E*$*Math.cosh(Y))/E}}}return w(),{next:b=>{const $=m(b);if(d)a.done=b>=h;else{const C=y(b)*1e3,k=Math.abs(C)<=s,E=Math.abs(n-$)<=l;a.done=k&&E}return a.value=a.done?n:$,a},flipTarget:()=>{p=-p,[t,n]=[n,t],w()}}}ba.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const _c=e=>0,Vf=(e,t,n)=>{const s=t-e;return s===0?1:(n-e)/s},wa=(e,t,n)=>-n*e+n*t+e,Wf=(e,t)=>n=>Math.max(Math.min(n,t),e),Hs=e=>e%1?Number(e.toFixed(5)):e,Yr=/(-)?([\d]*\.?[\d])+/g,To=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,X4=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function fr(e){return typeof e=="string"}const gl={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},zf=Object.assign(Object.assign({},gl),{transform:Wf(0,1)});Object.assign(Object.assign({},gl),{default:1});const G4=e=>({test:t=>fr(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Us=G4("%");Object.assign(Object.assign({},Us),{parse:e=>Us.parse(e)/100,transform:e=>Us.transform(e*100)});const Aa=(e,t)=>n=>Boolean(fr(n)&&X4.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Kf=(e,t,n)=>s=>{if(!fr(s))return s;const[l,o,a,i]=s.match(Yr);return{[e]:parseFloat(l),[t]:parseFloat(o),[n]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},On={test:Aa("hsl","hue"),parse:Kf("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(e)+", "+Us.transform(Hs(t))+", "+Us.transform(Hs(n))+", "+Hs(zf.transform(s))+")"},J4=Wf(0,255),jl=Object.assign(Object.assign({},gl),{transform:e=>Math.round(J4(e))}),ln={test:Aa("rgb","red"),parse:Kf("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:s=1})=>"rgba("+jl.transform(e)+", "+jl.transform(t)+", "+jl.transform(n)+", "+Hs(zf.transform(s))+")"};function Q4(e){let t="",n="",s="",l="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),s=e.substr(5,2),l=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),s=e.substr(3,1),l=e.substr(4,1),t+=t,n+=n,s+=s,l+=l),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:l?parseInt(l,16)/255:1}}const Fo={test:Aa("#"),parse:Q4,transform:ln.transform},yl={test:e=>ln.test(e)||Fo.test(e)||On.test(e),parse:e=>ln.test(e)?ln.parse(e):On.test(e)?On.parse(e):Fo.parse(e),transform:e=>fr(e)?e:e.hasOwnProperty("red")?ln.transform(e):On.transform(e)},qf="${c}",Yf="${n}";function ew(e){var t,n,s,l;return isNaN(e)&&fr(e)&&((n=(t=e.match(Yr))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((l=(s=e.match(To))===null||s===void 0?void 0:s.length)!==null&&l!==void 0?l:0)>0}function Zf(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const s=e.match(To);s&&(n=s.length,e=e.replace(To,qf),t.push(...s.map(yl.parse)));const l=e.match(Yr);return l&&(e=e.replace(Yr,Yf),t.push(...l.map(gl.parse))),{values:t,numColors:n,tokenised:e}}function Xf(e){return Zf(e).values}function Gf(e){const{values:t,numColors:n,tokenised:s}=Zf(e),l=t.length;return o=>{let a=s;for(let i=0;i<l;i++)a=a.replace(i<n?qf:Yf,i<n?yl.transform(o[i]):Hs(o[i]));return a}}const tw=e=>typeof e=="number"?0:e;function nw(e){const t=Xf(e);return Gf(e)(t.map(tw))}const Jf={test:ew,parse:Xf,createTransformer:Gf,getAnimatableNone:nw};function Hl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function vc({hue:e,saturation:t,lightness:n,alpha:s}){e/=360,t/=100,n/=100;let l=0,o=0,a=0;if(!t)l=o=a=n;else{const i=n<.5?n*(1+t):n+t-n*t,c=2*n-i;l=Hl(c,i,e+1/3),o=Hl(c,i,e),a=Hl(c,i,e-1/3)}return{red:Math.round(l*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:s}}const sw=(e,t,n)=>{const s=e*e,l=t*t;return Math.sqrt(Math.max(0,n*(l-s)+s))},rw=[Fo,ln,On],bc=e=>rw.find(t=>t.test(e)),Qf=(e,t)=>{let n=bc(e),s=bc(t),l=n.parse(e),o=s.parse(t);n===On&&(l=vc(l),n=ln),s===On&&(o=vc(o),s=ln);const a=Object.assign({},l);return i=>{for(const c in a)c!=="alpha"&&(a[c]=sw(l[c],o[c],i));return a.alpha=wa(l.alpha,o.alpha,i),n.transform(a)}},lw=e=>typeof e=="number",ow=(e,t)=>n=>t(e(n)),ep=(...e)=>e.reduce(ow);function tp(e,t){return lw(e)?n=>wa(e,t,n):yl.test(e)?Qf(e,t):sp(e,t)}const np=(e,t)=>{const n=[...e],s=n.length,l=e.map((o,a)=>tp(o,t[a]));return o=>{for(let a=0;a<s;a++)n[a]=l[a](o);return n}},aw=(e,t)=>{const n=Object.assign(Object.assign({},e),t),s={};for(const l in n)e[l]!==void 0&&t[l]!==void 0&&(s[l]=tp(e[l],t[l]));return l=>{for(const o in s)n[o]=s[o](l);return n}};function wc(e){const t=Jf.parse(e),n=t.length;let s=0,l=0,o=0;for(let a=0;a<n;a++)s||typeof t[a]=="number"?s++:t[a].hue!==void 0?o++:l++;return{parsed:t,numNumbers:s,numRGB:l,numHSL:o}}const sp=(e,t)=>{const n=Jf.createTransformer(t),s=wc(e),l=wc(t);return s.numHSL===l.numHSL&&s.numRGB===l.numRGB&&s.numNumbers>=l.numNumbers?ep(np(s.parsed,l.parsed),n):a=>`${a>0?t:e}`},iw=(e,t)=>n=>wa(e,t,n);function cw(e){if(typeof e=="number")return iw;if(typeof e=="string")return yl.test(e)?Qf:sp;if(Array.isArray(e))return np;if(typeof e=="object")return aw}function uw(e,t,n){const s=[],l=n||cw(e[0]),o=e.length-1;for(let a=0;a<o;a++){let i=l(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]:t;i=ep(c,i)}s.push(i)}return s}function fw([e,t],[n]){return s=>n(Vf(e,t,s))}function pw(e,t){const n=e.length,s=n-1;return l=>{let o=0,a=!1;if(l<=e[0]?a=!0:l>=e[s]&&(o=s-1,a=!0),!a){let c=1;for(;c<n&&!(e[c]>l||c===s);c++);o=c-1}const i=Vf(e[o],e[o+1],l);return t[o](i)}}function rp(e,t,{clamp:n=!0,ease:s,mixer:l}={}){const o=e.length;mc(o===t.length),mc(!s||!Array.isArray(s)||s.length===o-1),e[0]>e[o-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const a=uw(t,s,l),i=o===2?fw(e,a):pw(e,a);return n?c=>i(So(e[0],e[o-1],c)):i}const _l=e=>t=>1-e(1-t),xa=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,dw=e=>t=>Math.pow(t,e),lp=e=>t=>t*t*((e+1)*t-e),hw=e=>{const t=lp(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},op=1.525,mw=4/11,gw=8/11,yw=9/10,ap=e=>e,Ca=dw(2),_w=_l(Ca),ip=xa(Ca),cp=e=>1-Math.sin(Math.acos(e)),up=_l(cp),vw=xa(up),ka=lp(op),bw=_l(ka),ww=xa(ka),Aw=hw(op),xw=4356/361,Cw=35442/1805,kw=16061/1805,Zr=e=>{if(e===1||e===0)return e;const t=e*e;return e<mw?7.5625*t:e<gw?9.075*t-9.9*e+3.4:e<yw?xw*t-Cw*e+kw:10.8*e*e-20.52*e+10.72},$w=_l(Zr),Ew=e=>e<.5?.5*(1-Zr(1-e*2)):.5*Zr(e*2-1)+.5;function Ow(e,t){return e.map(()=>t||ip).splice(0,e.length-1)}function Bw(e){const t=e.length;return e.map((n,s)=>s!==0?s/(t-1):0)}function Dw(e,t){return e.map(n=>n*t)}function Mr({from:e=0,to:t=1,ease:n,offset:s,duration:l=300}){const o={done:!1,value:e},a=Array.isArray(t)?t:[e,t],i=Dw(s&&s.length===a.length?s:Bw(a),l);function c(){return rp(i,a,{ease:Array.isArray(n)?n:Ow(a,n)})}let f=c();return{next:p=>(o.value=f(p),o.done=p>=l,o),flipTarget:()=>{a.reverse(),f=c()}}}function Pw({velocity:e=0,from:t=0,power:n=.8,timeConstant:s=350,restDelta:l=.5,modifyTarget:o}){const a={done:!1,value:t};let i=n*e;const c=t+i,f=o===void 0?c:o(c);return f!==c&&(i=f-t),{next:p=>{const h=-i*Math.exp(-p/s);return a.done=!(h>l||h<-l),a.value=a.done?f:f+h,a},flipTarget:()=>{}}}const Ac={keyframes:Mr,spring:ba,decay:Pw};function Sw(e){if(Array.isArray(e.to))return Mr;if(Ac[e.type])return Ac[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Mr:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?ba:Mr}const fp=1/60*1e3,Mw=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),pp=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(Mw()),fp);function Tw(e){let t=[],n=[],s=0,l=!1,o=!1;const a=new WeakSet,i={schedule:(c,f=!1,p=!1)=>{const h=p&&l,d=h?t:n;return f&&a.add(c),d.indexOf(c)===-1&&(d.push(c),h&&l&&(s=t.length)),c},cancel:c=>{const f=n.indexOf(c);f!==-1&&n.splice(f,1),a.delete(c)},process:c=>{if(l){o=!0;return}if(l=!0,[t,n]=[n,t],n.length=0,s=t.length,s)for(let f=0;f<s;f++){const p=t[f];p(c),a.has(p)&&(i.schedule(p),e())}l=!1,o&&(o=!1,i.process(c))}};return i}const Fw=40;let Lo=!0,lr=!1,Ro=!1;const os={delta:0,timestamp:0},pr=["read","update","preRender","render","postRender"],vl=pr.reduce((e,t)=>(e[t]=Tw(()=>lr=!0),e),{}),Lw=pr.reduce((e,t)=>{const n=vl[t];return e[t]=(s,l=!1,o=!1)=>(lr||Nw(),n.schedule(s,l,o)),e},{}),Rw=pr.reduce((e,t)=>(e[t]=vl[t].cancel,e),{});pr.reduce((e,t)=>(e[t]=()=>vl[t].process(os),e),{});const Iw=e=>vl[e].process(os),dp=e=>{lr=!1,os.delta=Lo?fp:Math.max(Math.min(e-os.timestamp,Fw),1),os.timestamp=e,Ro=!0,pr.forEach(Iw),Ro=!1,lr&&(Lo=!1,pp(dp))},Nw=()=>{lr=!0,Lo=!0,Ro||pp(dp)},jw=()=>os;function hp(e,t,n=0){return e-t-n}function Hw(e,t,n=0,s=!0){return s?hp(t+-e,t,n):t-(e-t)+n}function Uw(e,t,n,s){return s?e>=t+n:e<=-n}const Vw=e=>{const t=({delta:n})=>e(n);return{start:()=>Lw.update(t,!0),stop:()=>Rw.update(t)}};function mp(e){var t,n,{from:s,autoplay:l=!0,driver:o=Vw,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:f=0,onPlay:p,onStop:h,onComplete:d,onRepeat:m,onUpdate:y}=e,w=Uf(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:b}=w,$,C=0,k=w.duration,E,j=!1,F=!0,Y;const oe=Sw(w);!((n=(t=oe).needsInterpolation)===null||n===void 0)&&n.call(t,s,b)&&(Y=rp([0,100],[s,b],{clamp:!1}),s=0,b=100);const pe=oe(Object.assign(Object.assign({},w),{from:s,to:b}));function he(){C++,c==="reverse"?(F=C%2===0,a=Hw(a,k,f,F)):(a=hp(a,k,f),c==="mirror"&&pe.flipTarget()),j=!1,m&&m()}function _e(){$.stop(),d&&d()}function Te(Ze){if(F||(Ze=-Ze),a+=Ze,!j){const $e=pe.next(Math.max(0,a));E=$e.value,Y&&(E=Y(E)),j=F?$e.done:a<=0}y==null||y(E),j&&(C===0&&(k!=null||(k=a)),C<i?Uw(a,k,f,F)&&he():_e())}function Ie(){p==null||p(),$=o(Te),$.start()}return l&&Ie(),{stop:()=>{h==null||h(),$.stop()}}}function gp(e,t){return t?e*(1e3/t):0}function Ww({from:e=0,velocity:t=0,min:n,max:s,power:l=.8,timeConstant:o=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:f,driver:p,onUpdate:h,onComplete:d,onStop:m}){let y;function w(k){return n!==void 0&&k<n||s!==void 0&&k>s}function b(k){return n===void 0?s:s===void 0||Math.abs(n-k)<Math.abs(s-k)?n:s}function $(k){y==null||y.stop(),y=mp(Object.assign(Object.assign({},k),{driver:p,onUpdate:E=>{var j;h==null||h(E),(j=k.onUpdate)===null||j===void 0||j.call(k,E)},onComplete:d,onStop:m}))}function C(k){$(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},k))}if(w(e))C({from:e,velocity:t,to:b(e)});else{let k=l*t+e;typeof f!="undefined"&&(k=f(k));const E=b(k),j=E===n?-1:1;let F,Y;const oe=pe=>{F=Y,Y=pe,t=gp(pe-F,jw().delta),(j===1&&pe>E||j===-1&&pe<E)&&C({from:pe,to:E,velocity:t})};$({type:"decay",from:e,velocity:t,timeConstant:o,power:l,restDelta:c,modifyTarget:f,onUpdate:w(k)?oe:void 0})}return{stop:()=>y==null?void 0:y.stop()}}const yp=(e,t)=>1-3*t+3*e,_p=(e,t)=>3*t-6*e,vp=e=>3*e,Xr=(e,t,n)=>((yp(t,n)*e+_p(t,n))*e+vp(t))*e,bp=(e,t,n)=>3*yp(t,n)*e*e+2*_p(t,n)*e+vp(t),zw=1e-7,Kw=10;function qw(e,t,n,s,l){let o,a,i=0;do a=t+(n-t)/2,o=Xr(a,s,l)-e,o>0?n=a:t=a;while(Math.abs(o)>zw&&++i<Kw);return a}const Yw=8,Zw=.001;function Xw(e,t,n,s){for(let l=0;l<Yw;++l){const o=bp(t,n,s);if(o===0)return t;t-=(Xr(t,n,s)-e)/o}return t}const Tr=11,Cr=1/(Tr-1);function Gw(e,t,n,s){if(e===t&&n===s)return ap;const l=new Float32Array(Tr);for(let a=0;a<Tr;++a)l[a]=Xr(a*Cr,e,n);function o(a){let i=0,c=1;const f=Tr-1;for(;c!==f&&l[c]<=a;++c)i+=Cr;--c;const p=(a-l[c])/(l[c+1]-l[c]),h=i+p*Cr,d=bp(h,e,n);return d>=Zw?Xw(a,h,e,n):d===0?h:qw(a,i,i+Cr,e,n)}return a=>a===0||a===1?a:Xr(o(a),t,s)}const wp=(e,t)=>n=>Math.max(Math.min(n,t),e),Vs=e=>e%1?Number(e.toFixed(5)):e,or=/(-)?([\d]*\.?[\d])+/g,Io=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,Jw=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function dr(e){return typeof e=="string"}const hr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ws=Object.assign(Object.assign({},hr),{transform:wp(0,1)}),kr=Object.assign(Object.assign({},hr),{default:1}),$a=e=>({test:t=>dr(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),_n=$a("deg"),zs=$a("%"),ae=$a("px"),xc=Object.assign(Object.assign({},zs),{parse:e=>zs.parse(e)/100,transform:e=>zs.transform(e*100)}),Ea=(e,t)=>n=>Boolean(dr(n)&&Jw.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Ap=(e,t,n)=>s=>{if(!dr(s))return s;const[l,o,a,i]=s.match(or);return{[e]:parseFloat(l),[t]:parseFloat(o),[n]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},$r={test:Ea("hsl","hue"),parse:Ap("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(e)+", "+zs.transform(Vs(t))+", "+zs.transform(Vs(n))+", "+Vs(Ws.transform(s))+")"},Qw=wp(0,255),Ul=Object.assign(Object.assign({},hr),{transform:e=>Math.round(Qw(e))}),Ds={test:Ea("rgb","red"),parse:Ap("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:s=1})=>"rgba("+Ul.transform(e)+", "+Ul.transform(t)+", "+Ul.transform(n)+", "+Vs(Ws.transform(s))+")"};function e8(e){let t="",n="",s="",l="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),s=e.substr(5,2),l=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),s=e.substr(3,1),l=e.substr(4,1),t+=t,n+=n,s+=s,l+=l),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:l?parseInt(l,16)/255:1}}const Cc={test:Ea("#"),parse:e8,transform:Ds.transform},Ct={test:e=>Ds.test(e)||Cc.test(e)||$r.test(e),parse:e=>Ds.test(e)?Ds.parse(e):$r.test(e)?$r.parse(e):Cc.parse(e),transform:e=>dr(e)?e:e.hasOwnProperty("red")?Ds.transform(e):$r.transform(e)},xp="${c}",Cp="${n}";function t8(e){var t,n,s,l;return isNaN(e)&&dr(e)&&((n=(t=e.match(or))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((l=(s=e.match(Io))===null||s===void 0?void 0:s.length)!==null&&l!==void 0?l:0)>0}function kp(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const s=e.match(Io);s&&(n=s.length,e=e.replace(Io,xp),t.push(...s.map(Ct.parse)));const l=e.match(or);return l&&(e=e.replace(or,Cp),t.push(...l.map(hr.parse))),{values:t,numColors:n,tokenised:e}}function $p(e){return kp(e).values}function Ep(e){const{values:t,numColors:n,tokenised:s}=kp(e),l=t.length;return o=>{let a=s;for(let i=0;i<l;i++)a=a.replace(i<n?xp:Cp,i<n?Ct.transform(o[i]):Vs(o[i]));return a}}const n8=e=>typeof e=="number"?0:e;function s8(e){const t=$p(e);return Ep(e)(t.map(n8))}const Oa={test:t8,parse:$p,createTransformer:Ep,getAnimatableNone:s8},r8=new Set(["brightness","contrast","saturate","opacity"]);function l8(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[s]=n.match(or)||[];if(!s)return e;const l=n.replace(s,"");let o=r8.has(t)?1:0;return s!==n&&(o*=100),t+"("+o+l+")"}const o8=/([a-z-]*)\(.*?\)/g,No=Object.assign(Object.assign({},Oa),{getAnimatableNone:e=>{const t=e.match(o8);return t?t.map(l8).join(" "):e}}),Vl={};class a8{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,s){if(!!this.subscriptions.size)for(const l of this.subscriptions)l(t,n,s)}clear(){this.subscriptions.clear()}}const kc=e=>!isNaN(parseFloat(e));class i8{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new a8,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:s,timestamp:l}=N4();this.lastUpdated!==l&&(this.timeDelta=s,this.lastUpdated=l),hc.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>hc.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=kc(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=kc(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?gp(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:s}=t(n);this.stopAnimation=s}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function c8(e){return new i8(e)}const{isArray:u8}=Array;function f8(){const e=K({}),t=s=>{const l=o=>{!e.value[o]||(e.value[o].stop(),e.value[o].destroy(),Um(e.value,o))};s?u8(s)?s.forEach(l):l(s):Object.keys(e.value).forEach(l)},n=(s,l,o)=>{if(e.value[s])return e.value[s];const a=c8(l);return a.onChange(i=>{ot(o,s,i)}),ot(e.value,s,a),a};return oa(t),{motionValues:e,get:n,stop:t}}const p8=e=>Array.isArray(e),vn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Wl=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),d8=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),zl=()=>({type:"keyframes",ease:"linear",duration:300}),h8=e=>({type:"keyframes",duration:800,values:e}),$c={default:d8,x:vn,y:vn,z:vn,rotate:vn,rotateX:vn,rotateY:vn,rotateZ:vn,scaleX:Wl,scaleY:Wl,scale:Wl,backgroundColor:zl,color:zl,opacity:zl},Op=(e,t)=>{let n;return p8(t)?n=h8:n=$c[e]||$c.default,we({to:t},n(t))},Ec=et(we({},hr),{transform:Math.round}),Bp={color:Ct,backgroundColor:Ct,outlineColor:Ct,fill:Ct,stroke:Ct,borderColor:Ct,borderTopColor:Ct,borderRightColor:Ct,borderBottomColor:Ct,borderLeftColor:Ct,borderWidth:ae,borderTopWidth:ae,borderRightWidth:ae,borderBottomWidth:ae,borderLeftWidth:ae,borderRadius:ae,radius:ae,borderTopLeftRadius:ae,borderTopRightRadius:ae,borderBottomRightRadius:ae,borderBottomLeftRadius:ae,width:ae,maxWidth:ae,height:ae,maxHeight:ae,size:ae,top:ae,right:ae,bottom:ae,left:ae,padding:ae,paddingTop:ae,paddingRight:ae,paddingBottom:ae,paddingLeft:ae,margin:ae,marginTop:ae,marginRight:ae,marginBottom:ae,marginLeft:ae,rotate:_n,rotateX:_n,rotateY:_n,rotateZ:_n,scale:kr,scaleX:kr,scaleY:kr,scaleZ:kr,skew:_n,skewX:_n,skewY:_n,distance:ae,translateX:ae,translateY:ae,translateZ:ae,x:ae,y:ae,z:ae,perspective:ae,transformPerspective:ae,opacity:Ws,originX:xc,originY:xc,originZ:ae,zIndex:Ec,filter:No,WebkitFilter:No,fillOpacity:Ws,strokeOpacity:Ws,numOctaves:Ec},Ba=e=>Bp[e],Dp=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function m8(e,t){let n=Ba(e);return n!==No&&(n=Oa),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const g8={linear:ap,easeIn:Ca,easeInOut:ip,easeOut:_w,circIn:cp,circInOut:vw,circOut:up,backIn:ka,backInOut:ww,backOut:bw,anticipate:Aw,bounceIn:$w,bounceInOut:Ew,bounceOut:Zr},Oc=e=>{if(Array.isArray(e)){const[t,n,s,l]=e;return Gw(t,n,s,l)}else if(typeof e=="string")return g8[e];return e},y8=e=>Array.isArray(e)&&typeof e[0]!="number",Bc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Oa.test(t)&&!t.startsWith("url("));function _8(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function v8(l){var o=l,{ease:e,times:t,delay:n}=o,s=bl(o,["ease","times","delay"]);const a=we({},s);return t&&(a.offset=t),e&&(a.ease=y8(e)?e.map(Oc):Oc(e)),n&&(a.elapsed=-n),a}function b8(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),_8(t),w8(e)||(e=we(we({},e),Op(n,t.to))),we(we({},t),v8(e))}function w8(a){var i=a,{delay:e,repeat:t,repeatType:n,repeatDelay:s,from:l}=i,o=bl(i,["delay","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(o).length}function A8(e,t){return e[t]||e.default||e}function x8(e,t,n,s,l){const o=A8(s,e);let a=o.from===null||o.from===void 0?t.get():o.from;const i=Bc(e,n);a==="none"&&i&&typeof n=="string"&&(a=m8(e,n));const c=Bc(e,a);function f(h){const d={from:a,to:n,velocity:s.velocity?s.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return o.type==="inertia"||o.type==="decay"?Ww(we(we({},d),o)):mp(et(we({},b8(o,d,e)),{onUpdate:m=>{d.onUpdate(m),o.onUpdate&&o.onUpdate(m)},onComplete:()=>{s.onComplete&&s.onComplete(),l&&l(),h&&h()}}))}function p(h){return t.set(n),s.onComplete&&s.onComplete(),l&&l(),h&&h(),{stop:()=>{}}}return!c||!i||o.type===!1?p:f}function C8(){const{motionValues:e,stop:t,get:n}=f8();return{motionValues:e,stop:t,push:(l,o,a,i={},c)=>{const f=a[l],p=n(l,f,a);if(i&&i.immediate){p.set(o);return}const h=x8(l,p,o,i,c);p.start(h)}}}function k8(e,t={},{motionValues:n,push:s,stop:l}=C8()){const o=v(t),a=K(!1),i=fe(n,d=>{a.value=Object.values(d).filter(m=>m.isAnimating()).length>0},{immediate:!0,deep:!0}),c=d=>{if(!o||!o[d])throw new Error(`The variant ${d} does not exist.`);return o[d]},f=d=>(typeof d=="string"&&(d=c(d)),Promise.all(Object.entries(d).map(([m,y])=>{if(m!=="transition")return new Promise(w=>{s(m,y,e,d.transition||Op(m,d[m]),w)})}).filter(Boolean)));return{isAnimating:a,apply:f,set:d=>{const m=Ur(d)?d:c(d);Object.entries(m).forEach(([y,w])=>{y!=="transition"&&s(y,w,e,{immediate:!0})})},stopTransitions:()=>{i(),l()},leave:async d=>{let m;if(o&&(o.leave&&(m=o.leave),!o.leave&&o.initial&&(m=o.initial)),!m){d();return}await f(m),d()}}}const Da=typeof window!="undefined",$8=()=>Da&&window.onpointerdown===null,E8=()=>Da&&window.ontouchstart===null,O8=()=>Da&&window.onmousedown===null;function B8({target:e,state:t,variants:n,apply:s}){const l=v(n),o=[],a=(...y)=>{const w=Me.apply(null,y);return o.push(w),w},i=K(!1),c=K(!1),f=K(!1),p=O(()=>{let y=[];return l&&(l.hovered&&(y=[...y,...Object.keys(l.hovered)]),l.tapped&&(y=[...y,...Object.keys(l.tapped)]),l.focused&&(y=[...y,...Object.keys(l.focused)])),y}),h=O(()=>{const y={};Object.assign(y,t.value),i.value&&l.hovered&&Object.assign(y,l.hovered),c.value&&l.tapped&&Object.assign(y,l.tapped),f.value&&l.focused&&Object.assign(y,l.focused);for(const w in y)p.value.includes(w)||delete y[w];return y});l.hovered&&(a(e,"mouseenter",()=>{i.value=!0}),a(e,"mouseleave",()=>{i.value=!1,c.value=!1}),a(e,"mouseout",()=>{i.value=!1,c.value=!1})),l.tapped&&(O8()&&(a(e,"mousedown",()=>{c.value=!0}),a(e,"mouseup",()=>{c.value=!1})),$8()&&(a(e,"pointerdown",()=>{c.value=!0}),a(e,"pointerup",()=>{c.value=!1})),E8()&&(a(e,"touchstart",()=>{c.value=!0}),a(e,"touchend",()=>{c.value=!1}))),l.focused&&(a(e,"focus",()=>{f.value=!0}),a(e,"blur",()=>{f.value=!1}));const d=fe(h,s);return{stop:()=>{o.forEach(y=>y()),d()}}}function D8({set:e,target:t,variants:n,variant:s}){const l=v(n);return{stop:fe(()=>t,()=>{!l||(l.initial&&e("initial"),l.enter&&(s.value="enter"))},{immediate:!0,flush:"pre"})}}function P8({state:e,apply:t}){return{stop:fe(e,s=>{s&&t(s)},{immediate:!0})}}function S8({target:e,variants:t,variant:n}){const s=v(t);let l=un;if(s&&(s.visible||s.visibleOnce)){const{stop:o}=Yg(e,([{isIntersecting:a}])=>{s.visible?a?n.value="visible":n.value="initial":s.visibleOnce&&(a?n.value!=="visibleOnce"&&(n.value="visibleOnce"):n.value||(n.value="initial"))});l=o}return{stop:l}}function M8(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const n=K([]);if(t.lifeCycleHooks){const{stop:l}=D8(e);n.value.push(l)}if(t.syncVariants){const{stop:l}=P8(e);n.value.push(l)}if(t.visibilityHooks){const{stop:l}=S8(e);n.value.push(l)}if(t.eventListeners){const{stop:l}=B8(e);n.value.push(l)}const s=()=>n.value.forEach(l=>l());return oa(s),{stop:s}}function Pp(e={}){const t=Le(we({},e)),n=K({});return fe(t,()=>{const s={};for(const[l,o]of Object.entries(t)){const a=Ba(l),i=Dp(o,a);s[l]=i}n.value=s},{immediate:!0,deep:!0}),{state:t,style:n}}const T8=["","X","Y","Z"],F8=["perspective","translate","scale","rotate","skew"],Sp=["transformPerspective","x","y","z"];F8.forEach(e=>{T8.forEach(t=>{const n=e+t;Sp.push(n)})});const L8=new Set(Sp);function Pa(e){return L8.has(e)}const R8=new Set(["originX","originY","originZ"]);function Mp(e){return R8.has(e)}function I8(e){const t={},n={};return Object.entries(e).forEach(([s,l])=>{Pa(s)||Mp(s)?t[s]=l:n[s]=l}),{transform:t,style:n}}function N8(e,t){let n,s;const{state:l,style:o}=Pp(),a=fe(()=>at(e),f=>{if(!!f){s=f;for(const p of Object.keys(Bp))f.style[p]===null||f.style[p]===""||Pa(p)||Mp(p)||ot(l,p,f.style[p]);n&&Object.entries(n).forEach(([p,h])=>ot(f.style,p,h)),t&&t(l)}},{immediate:!0}),i=fe(o,f=>{if(!s){n=f;return}for(const p in f)ot(s.style,p,f[p])},{immediate:!0});return{style:l,stop:()=>{s=void 0,n=void 0,a(),i()}}}const j8={x:"translateX",y:"translateY",z:"translateZ"};function Tp(e={},t=!0){const n=Le(we({},e)),s=K("");return fe(n,l=>{let o="",a=!1;t&&(l.x||l.y||l.z)&&(o+=`translate3d(${[l.x||0,l.y||0,l.z||0].map(ae.transform).join(",")}) `,a=!0);for(const[i,c]of Object.entries(l)){if(t&&(i==="x"||i==="y"||i==="z"))continue;const f=Ba(i),p=Dp(c,f);o+=`${j8[i]||i}(${p}) `}t&&!a&&(o+="translateZ(0px) "),s.value=o.trim()},{immediate:!0,deep:!0}),{state:n,transform:s}}function H8(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=s=>s.endsWith("px")||s.endsWith("deg")?parseFloat(s):isNaN(Number(s))?Number(s):s;return t.reduce((s,l)=>{if(!l)return s;const[o,a]=l.split("("),c=a.split(",").map(p=>n(p.endsWith(")")?p.replace(")",""):p.trim())),f=c.length===1?c[0]:c;return et(we({},s),{[o]:f})},{})}function U8(e,t){Object.entries(H8(t)).forEach(([n,s])=>{s=parseFloat(s);const l=["x","y","z"];if(n==="translate3d"){if(s===0){l.forEach(o=>{ot(e,o,0)});return}s.forEach((o,a)=>{ot(e,l[a],o)});return}if(n==="translateX"){ot(e,"x",s);return}if(n==="translateY"){ot(e,"y",s);return}if(n==="translateZ"){ot(e,"z",s);return}ot(e,n,s)})}function V8(e,t){let n,s;const{state:l,transform:o}=Tp(),a=fe(()=>at(e),f=>{!f||(s=f,f.style.transform&&U8(l,f.style.transform),n&&(f.style.transform=n),t&&t(l))},{immediate:!0}),i=fe(o,f=>{if(!s){n=f;return}s.style.transform=f},{immediate:!0});return{transform:l,stop:()=>{n=void 0,s=void 0,a(),i()}}}function W8(e,t){const n=Le({}),s=h=>{Object.entries(h).forEach(([d,m])=>{ot(n,d,m)})},{style:l,stop:o}=N8(e,s),{transform:a,stop:i}=V8(e,s),c=fe(n,h=>{Object.entries(h).forEach(([d,m])=>{const y=Pa(d)?a:l;y[d]&&y[d]===m||ot(y,d,m)})},{immediate:!0,deep:!0}),f=fe(()=>at(e),h=>{!h||t&&s(t)},{immediate:!0});return{motionProperties:n,style:l,transform:a,stop:()=>{o(),i(),c(),f()}}}function z8(e={}){const t=v(e),n=K();return{state:O(()=>{if(!!n.value)return t[n.value]}),variant:n}}function K8(e,t={},n){const{motionProperties:s,stop:l}=W8(e),{variant:o,state:a}=z8(t),i=k8(s,t),c=et(we({target:e,variant:o,variants:t,state:a,motionProperties:s},i),{stop:(p=!1)=>{}}),{stop:f}=M8(c,n);return c.stop=(p=!1)=>{const h=()=>{c.stopTransitions(),l(),f()};if(!p&&t.value&&t.value.leave){const d=fe(c.isAnimating,m=>{m||(d(),h())})}else h()},oa(()=>c.stop()),fg(()=>at(e),p=>{!p||p!=null&&p.motionInstance&&(c.stop(),Object.assign(c,p.motionInstance))}),c}const q8=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],Y8=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&Ur(n.variants)&&(t.value=we(we({},t.value),n.variants)),q8.forEach(s=>{if(s==="delay"){if(n&&n[s]&&Km(n[s])){const l=n[s];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition=et(we({},t.value.enter.transition),{delay:l})),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition=et(we({},t.value.visible.transition),{delay:l})),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition=et(we({},t.value.visibleOnce.transition),{delay:l})))}return}s==="visible-once"&&(s="visibleOnce"),n&&n[s]&&Ur(n[s])&&(t.value[s]=n[s])}))},Kl=e=>{const t=(s,l,o)=>{const a=l.value&&typeof l.value=="string"?l.value:o.key;a&&Vl[a]&&Vl[a].stop();const i=K(e||{});typeof l.value=="object"&&(i.value=l.value),Y8(o,i);const c=K8(s,i);s.motionInstance=c,a&&ot(Vl,a,c)},n=s=>{s.motionInstance&&s.motionInstance.stop()};return{created:t,unmounted:n,bind:t,unbind:n,getSSRProps(s,l){const{initial:o}=s.value||l&&l.props||{},a=M4((e==null?void 0:e.initial)||{},o||{});if(!a||Object.keys(a).length===0)return;const{transform:i,style:c}=I8(a),{transform:f}=Tp(i),{style:p}=Pp(c);return f.value&&(p.value.transform=f.value),{style:p.value}}}},Z8={initial:{opacity:0},enter:{opacity:1}},X8={initial:{opacity:0},visible:{opacity:1}},G8={initial:{opacity:0},visibleOnce:{opacity:1}},J8={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},Q8={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},e5={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},t5={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},n5={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},s5={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},r5={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},l5={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},o5={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},a5={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},i5={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},c5={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},u5={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},f5={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},p5={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},d5={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},h5={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},m5={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},g5={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},y5={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},_5={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},v5={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},b5={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},w5={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},A5={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},x5={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},C5={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Dc={__proto__:null,fade:Z8,fadeVisible:X8,fadeVisibleOnce:G8,pop:J8,popVisible:Q8,popVisibleOnce:e5,rollBottom:u5,rollLeft:t5,rollRight:r5,rollTop:a5,rollVisibleBottom:f5,rollVisibleLeft:n5,rollVisibleRight:l5,rollVisibleTop:i5,rollVisibleOnceBottom:p5,rollVisibleOnceLeft:s5,rollVisibleOnceRight:o5,rollVisibleOnceTop:c5,slideBottom:A5,slideLeft:d5,slideRight:g5,slideTop:v5,slideVisibleBottom:x5,slideVisibleLeft:h5,slideVisibleRight:y5,slideVisibleTop:b5,slideVisibleOnceBottom:C5,slideVisibleOnceLeft:m5,slideVisibleOnceRight:_5,slideVisibleOnceTop:w5};function k5(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",s=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(s,l=>n.charAt(t.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const $5={install(e,t){if(e.directive("motion",Kl()),!t||t&&!t.excludePresets)for(const n in Dc){const s=Dc[n];e.directive(`motion-${k5(n)}`,Kl(s))}if(t&&t.directives)for(const n in t.directives){const s=t.directives[n];s.initial,e.directive(`motion-${n}`,Kl(s))}}},Sa="vue-starport-injection",Fp="vue-starport-options",E5={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Lp={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var O5=Object.defineProperty,Gr=Object.getOwnPropertySymbols,Rp=Object.prototype.hasOwnProperty,Ip=Object.prototype.propertyIsEnumerable,Pc=(e,t,n)=>t in e?O5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,B5=(e,t)=>{for(var n in t||(t={}))Rp.call(t,n)&&Pc(e,n,t[n]);if(Gr)for(var n of Gr(t))Ip.call(t,n)&&Pc(e,n,t[n]);return e},Sc=(e,t)=>{var n={};for(var s in e)Rp.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Gr)for(var s of Gr(e))t.indexOf(s)<0&&Ip.call(e,s)&&(n[s]=e[s]);return n};const D5=ye({name:"StarportProxy",props:B5({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Lp),setup(e,t){const n=I(Sa),s=O(()=>n.getInstance(e.port,e.component)),l=K(),o=s.value.generateId(),a=K(!1);return s.value.isVisible||(s.value.land(),a.value=!0),ds(async()=>{s.value.el||(s.value.el=l.value,await Ye(),a.value=!0,s.value.rect.update())}),cl(async()=>{s.value.rect.update(),s.value.liftOff(),s.value.el=void 0,a.value=!1,!s.value.options.keepAlive&&(await Ye(),await Ye(),!s.value.el&&n.dispose(s.value.port))}),fe(()=>e,async()=>{s.value.props&&await Ye();const i=e,{props:c}=i,f=Sc(i,["props"]);s.value.props=c||{},s.value.setLocalOptions(f)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:c,mountedProps:f}=i,p=Sc(i,["initialProps","mountedProps"]),h=Ke(p,(a.value?f:c)||{});return yt("div",Ke(h,{id:o,ref:l,"data-starport-proxy":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true"}),t.slots.default?yt(t.slots.default):void 0)}}});var P5=Object.defineProperty,S5=Object.defineProperties,M5=Object.getOwnPropertyDescriptors,Mc=Object.getOwnPropertySymbols,T5=Object.prototype.hasOwnProperty,F5=Object.prototype.propertyIsEnumerable,Tc=(e,t,n)=>t in e?P5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,L5=(e,t)=>{for(var n in t||(t={}))T5.call(t,n)&&Tc(e,n,t[n]);if(Mc)for(var n of Mc(t))F5.call(t,n)&&Tc(e,n,t[n]);return e},R5=(e,t)=>S5(e,M5(t));const I5=ye({name:"Starport",inheritAttrs:!0,props:Lp,setup(e,t){const n=K(!1);return ds(()=>{n.value=!0}),()=>{var a,i;const s=(i=(a=t.slots).default)==null?void 0:i.call(a);if(!s)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(s.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${s.length}`);const l=s[0];let o=l.type;return(!Ur(o)||Fn(o))&&(o={render(){return s}}),yt(D5,R5(L5({},e),{key:e.port,component:sl(o),props:l.props}))}}});function N5(e){const t=Le({height:0,width:0,left:0,top:0,update:s,listen:o,pause:a}),n=$t?document.documentElement||document.body:void 0;function s(){if(!$t)return;const i=at(e);if(!i)return;const{height:c,width:f,left:p,top:h}=i.getBoundingClientRect();Object.assign(t,{height:c,width:f,left:p,top:n.scrollTop+h})}const l=Ju(s,{immediate:!1});function o(){!$t||(s(),l.resume())}function a(){l.pause()}return t}let j5="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",H5=(e,t=21)=>(n=t)=>{let s="",l=n;for(;l--;)s+=e[Math.random()*e.length|0];return s},U5=(e=21)=>{let t="",n=e;for(;n--;)t+=j5[Math.random()*64|0];return t};var V5={nanoid:U5,customAlphabet:H5};const Fc=V5.customAlphabet("abcdefghijklmnopqrstuvwxyz",5);function Lc(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function W5(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var z5=Object.defineProperty,Rc=Object.getOwnPropertySymbols,K5=Object.prototype.hasOwnProperty,q5=Object.prototype.propertyIsEnumerable,Ic=(e,t,n)=>t in e?z5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ql=(e,t)=>{for(var n in t||(t={}))K5.call(t,n)&&Ic(e,n,t[n]);if(Rc)for(var n of Rc(t))q5.call(t,n)&&Ic(e,n,t[n]);return e};function Y5(e,t,n={}){const s=W5(t),l=Lc(s)||Fc(),o=K(),a=K(null),i=K(!1),c=K(!1),f=td(!0),p=K({}),h=O(()=>ql(ql(ql({},E5),n),p.value)),d=K(0);let m;f.run(()=>{m=N5(o),fe(o,async $=>{$&&(c.value=!0),await Ye(),o.value||(c.value=!1)})});const y=Lc(e);function w(){return`starport-${l}-${y}-${Fc()}`}const b=w();return Le({el:o,id:b,port:e,props:a,rect:m,scope:f,isLanded:i,isVisible:c,options:h,liftOffTime:d,component:t,componentName:s,componentId:l,generateId:w,setLocalOptions($={}){p.value=JSON.parse(JSON.stringify($))},elRef(){return o},liftOff(){!i.value||(i.value=!1,d.value=Date.now(),m.listen())},land(){i.value||(i.value=!0,m.pause())}})}function Z5(e){const t=Le(new Map);function n(l,o){let a=t.get(l);return a||(a=Y5(l,o,e),t.set(l,a)),a.component=o,a}function s(l){var o;(o=t.get(l))==null||o.scope.stop(),t.delete(l)}return{portMap:t,dispose:s,getInstance:n}}var X5=Object.defineProperty,G5=Object.defineProperties,J5=Object.getOwnPropertyDescriptors,Nc=Object.getOwnPropertySymbols,Q5=Object.prototype.hasOwnProperty,e9=Object.prototype.propertyIsEnumerable,jc=(e,t,n)=>t in e?X5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,t9=(e,t)=>{for(var n in t||(t={}))Q5.call(t,n)&&jc(e,n,t[n]);if(Nc)for(var n of Nc(t))e9.call(t,n)&&jc(e,n,t[n]);return e},n9=(e,t)=>G5(e,J5(t));const s9=ye({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=I(Sa);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=O(()=>t.getInstance(e.port,e.component)),s=O(()=>{var a;return((a=n.value.el)==null?void 0:a.id)||n.value.id}),l=O(()=>{const a=Date.now()-n.value.liftOffTime,i=Math.max(0,n.value.options.duration-a),c=n.value.rect,f={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?n9(t9({},f),{zIndex:-1,display:"none"}):(n.value.isLanded?f.display="none":Object.assign(f,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:n.value.options.easing}),f)}),o={};return()=>{const a=!!(n.value.isLanded&&n.value.el);return yt("div",{style:l.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},yt(Oh,{to:a?`#${s.value}`:"body",disabled:!a},yt(n.value.component,Ke(o,n.value.props))))}}}),r9=ye({name:"StarportCarrier",setup(e,{slots:t}){const n=Z5(I(Fp,{}));return In().appContext.app.provide(Sa,n),()=>{var l;return[(l=t.default)==null?void 0:l.call(t),Array.from(n.portMap.entries()).map(([o,{component:a}])=>yt(s9,{key:o,port:o,component:a}))]}}});function l9(e={}){return{install(t){t.provide(Fp,e),t.component("Starport",I5),t.component("StarportCarrier",r9)}}}function o9(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use($5),e.app.use(l9({keepAlive:!0}))}function ft(e,t,n){var s,l;return(l=((s=e.instance)==null?void 0:s.$).provides[t])!=null?l:n}function a9(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var p,h,d,m;if(js.value||((p=ft(n,Ls))==null?void 0:p.value))return;const s=ft(n,xn),l=ft(n,Fs),o=ft(n,fo),a=n.modifiers.hide!==!1&&n.modifiers.hide!=null,i=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((h=s==null?void 0:s.value)==null?void 0:h.length)||0,f=i?Em:Ol;if(s&&!((d=s==null?void 0:s.value)!=null&&d.includes(t))&&s.value.push(t),n.value===null&&(n.value=s==null?void 0:s.value.length),!(o!=null&&o.value.has(n.value)))o==null||o.value.set(n.value,[t]);else if(!((m=o==null?void 0:o.value.get(n.value))!=null&&m.includes(t))){const y=(o==null?void 0:o.value.get(n.value))||[];o==null||o.value.set(n.value,[t].concat(y))}t==null||t.classList.toggle(wn,!0),l&&fe(l,()=>{var $;const y=($=l==null?void 0:l.value)!=null?$:0,w=n.value!=null?y>=n.value:y>c;t.classList.contains(Bl)||t.classList.toggle(f,!w),a!==!1&&a!==void 0&&t.classList.toggle(f,w),t.classList.toggle(ws,!1);const b=o==null?void 0:o.value.get(y);b==null||b.forEach((C,k)=>{C.classList.toggle(Ar,!1),k===b.length-1?C.classList.toggle(ws,!0):C.classList.toggle(Ar,!0)}),t.classList.contains(ws)||t.classList.toggle(Ar,w)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(wn,!1);const s=ft(n,xn);s!=null&&s.value&&po(s.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var i,c;if(js.value||((i=ft(n,Ls))==null?void 0:i.value))return;const s=ft(n,xn),l=ft(n,Fs),o=ft(n,fo),a=s==null?void 0:s.value.length;n.value===void 0&&(n.value=s==null?void 0:s.value.length),o!=null&&o.value.has(n.value)?(c=o==null?void 0:o.value.get(n.value))==null||c.push(t):o==null||o.value.set(n.value,[t]),t==null||t.classList.toggle(wn,!0),l&&fe(l,()=>{var p,h,d;const f=((p=l.value)!=null?p:0)>=((d=(h=n.value)!=null?h:a)!=null?d:0);t.classList.contains(Bl)||t.classList.toggle(Ol,!f),t.classList.toggle(ws,!1),t.classList.contains(ws)||t.classList.toggle(Ar,f)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(wn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var a,i,c;if(js.value||((a=ft(n,Ls))==null?void 0:a.value))return;const s=ft(n,xn),l=ft(n,Fs),o=((i=s==null?void 0:s.value)==null?void 0:i.length)||0;s&&!((c=s==null?void 0:s.value)!=null&&c.includes(t))&&s.value.push(t),t==null||t.classList.toggle(wn,!0),l&&fe(l,()=>{var h;const f=(h=l==null?void 0:l.value)!=null?h:0,p=n.value!=null?f>=n.value:f>o;t.classList.toggle(Ol,p),t.classList.toggle(Bl,p)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(wn,!1);const s=ft(n,xn);s!=null&&s.value&&po(s.value,t)}})}}}function i9(e,t){const n=Bf(e),s=Df(t,n.currentRoute,n.currentPage);return{nav:et(we(we({},n),s),{downloadPDF:Oo,next:fn,nextSlide:nr,openInEditor:B4,prev:pn,prevSlide:sr}),configs:Ce,themeConfigs:O(()=>Ce.themeConfig)}}function c9(){return{install(e){const t=i9(Jt,Ft);e.provide(V,Le(t))}}}const ys=cm(P4);ys.use(vt);ys.use(Am());ys.use(a9());ys.use(c9());o9({app:ys,router:vt});ys.mount("#app");export{$s as $,T as A,Af as B,U as C,He as D,If as E,nt as F,Ae as G,dy as H,ke as I,f9 as J,p9 as K,Ft as L,qr as M,C4 as N,Rl as O,Dl as P,Qs as Q,Fl as R,yv as S,fa as T,pa as U,hv as V,Ay as W,Lt as X,d9 as Y,wt as Z,$f as _,r as a,xr as a0,ir as a1,Co as a2,W0 as a3,z0 as a4,K0 as a5,Y0 as a6,Dn as a7,ju as a8,y9 as a9,Ut as aa,st as ab,n_ as ac,En as ad,Uu as ae,Z0 as af,cl as ag,O as b,z as c,ye as d,V as e,ht as f,q as g,v as h,I as i,sy as j,O4 as k,Ce as l,Cm as m,Fe as n,A as o,ds as p,Le as q,K as r,h9 as s,Tn as t,m9 as u,g9 as v,fe as w,S as x,We as y,Wu as z};
