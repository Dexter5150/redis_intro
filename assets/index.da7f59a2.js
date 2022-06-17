var Rp=Object.defineProperty,Ip=Object.defineProperties;var Lp=Object.getOwnPropertyDescriptors;var pl=Object.getOwnPropertySymbols;var Fa=Object.prototype.hasOwnProperty,Ra=Object.prototype.propertyIsEnumerable;var Ta=(e,t,n)=>t in e?Rp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_e=(e,t)=>{for(var n in t||(t={}))Fa.call(t,n)&&Ta(e,n,t[n]);if(pl)for(var n of pl(t))Ra.call(t,n)&&Ta(e,n,t[n]);return e},Qe=(e,t)=>Ip(e,Lp(t));var gr=(e,t)=>{var n={};for(var l in e)Fa.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&pl)for(var l of pl(e))t.indexOf(l)<0&&Ra.call(e,l)&&(n[l]=e[l]);return n};const Np=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};Np();function Ro(e,t){const n=Object.create(null),l=e.split(",");for(let r=0;r<l.length;r++)n[l[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const jp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hp=Ro(jp);function Hc(e){return!!e||e===""}function We(e){if(ne(e)){const t={};for(let n=0;n<e.length;n++){const l=e[n],r=Le(l)?zp(l):We(l);if(r)for(const o in r)t[o]=r[o]}return t}else{if(Le(e))return e;if(Ue(e))return e}}const Vp=/;(?![^(]*\))/g,Up=/:(.+)/;function zp(e){const t={};return e.split(Vp).forEach(n=>{if(n){const l=n.split(Up);l.length>1&&(t[l[0].trim()]=l[1].trim())}}),t}function Fe(e){let t="";if(Le(e))t=e;else if(ne(e))for(let n=0;n<e.length;n++){const l=Fe(e[n]);l&&(t+=l+" ")}else if(Ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function ke(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Le(t)&&(e.class=Fe(t)),n&&(e.style=We(n)),e}const Sn=e=>Le(e)?e:e==null?"":ne(e)||Ue(e)&&(e.toString===Wc||!ae(e.toString))?JSON.stringify(e,Vc,2):String(e),Vc=(e,t)=>t&&t.__v_isRef?Vc(e,t.value):Gn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[l,r])=>(n[`${l} =>`]=r,n),{})}:Uc(t)?{[`Set(${t.size})`]:[...t.values()]}:Ue(t)&&!ne(t)&&!Kc(t)?String(t):t,Oe={},Zn=[],St=()=>{},Wp=()=>!1,Kp=/^on[^a-z]/,Yl=e=>Kp.test(e),Io=e=>e.startsWith("onUpdate:"),st=Object.assign,Lo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},qp=Object.prototype.hasOwnProperty,he=(e,t)=>qp.call(e,t),ne=Array.isArray,Gn=e=>Zl(e)==="[object Map]",Uc=e=>Zl(e)==="[object Set]",ae=e=>typeof e=="function",Le=e=>typeof e=="string",No=e=>typeof e=="symbol",Ue=e=>e!==null&&typeof e=="object",zc=e=>Ue(e)&&ae(e.then)&&ae(e.catch),Wc=Object.prototype.toString,Zl=e=>Wc.call(e),Yp=e=>Zl(e).slice(8,-1),Kc=e=>Zl(e)==="[object Object]",jo=e=>Le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Cl=Ro(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gl=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Zp=/-(\w)/g,Ut=Gl(e=>e.replace(Zp,(t,n)=>n?n.toUpperCase():"")),Gp=/\B([A-Z])/g,Tn=Gl(e=>e.replace(Gp,"-$1").toLowerCase()),Xl=Gl(e=>e.charAt(0).toUpperCase()+e.slice(1)),yr=Gl(e=>e?`on${Xl(e)}`:""),zs=(e,t)=>!Object.is(e,t),Xn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Sl=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},zr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ia;const Xp=()=>Ia||(Ia=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let pt;class qc{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&pt&&(this.parent=pt,this.index=(pt.scopes||(pt.scopes=[])).push(this)-1)}run(t){if(this.active){const n=pt;try{return pt=this,t()}finally{pt=n}}}on(){pt=this}off(){pt=this.parent}stop(t){if(this.active){let n,l;for(n=0,l=this.effects.length;n<l;n++)this.effects[n].stop();for(n=0,l=this.cleanups.length;n<l;n++)this.cleanups[n]();if(this.scopes)for(n=0,l=this.scopes.length;n<l;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function Jp(e){return new qc(e)}function Qp(e,t=pt){t&&t.active&&t.effects.push(e)}function ed(){return pt}function td(e){pt&&pt.cleanups.push(e)}const Ho=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Yc=e=>(e.w&pn)>0,Zc=e=>(e.n&pn)>0,nd=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=pn},sd=e=>{const{deps:t}=e;if(t.length){let n=0;for(let l=0;l<t.length;l++){const r=t[l];Yc(r)&&!Zc(r)?r.delete(e):t[n++]=r,r.w&=~pn,r.n&=~pn}t.length=n}},Wr=new WeakMap;let ks=0,pn=1;const Kr=30;let Ot;const Dn=Symbol(""),qr=Symbol("");class Vo{constructor(t,n=null,l){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Qp(this,l)}run(){if(!this.active)return this.fn();let t=Ot,n=rn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ot,Ot=this,rn=!0,pn=1<<++ks,ks<=Kr?nd(this):La(this),this.fn()}finally{ks<=Kr&&sd(this),pn=1<<--ks,Ot=this.parent,rn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ot===this?this.deferStop=!0:this.active&&(La(this),this.onStop&&this.onStop(),this.active=!1)}}function La(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let rn=!0;const Gc=[];function is(){Gc.push(rn),rn=!1}function cs(){const e=Gc.pop();rn=e===void 0?!0:e}function vt(e,t,n){if(rn&&Ot){let l=Wr.get(e);l||Wr.set(e,l=new Map);let r=l.get(n);r||l.set(n,r=Ho()),Xc(r)}}function Xc(e,t){let n=!1;ks<=Kr?Zc(e)||(e.n|=pn,n=!Yc(e)):n=!e.has(Ot),n&&(e.add(Ot),Ot.deps.push(e))}function Zt(e,t,n,l,r,o){const a=Wr.get(e);if(!a)return;let i=[];if(t==="clear")i=[...a.values()];else if(n==="length"&&ne(e))a.forEach((c,f)=>{(f==="length"||f>=l)&&i.push(c)});else switch(n!==void 0&&i.push(a.get(n)),t){case"add":ne(e)?jo(n)&&i.push(a.get("length")):(i.push(a.get(Dn)),Gn(e)&&i.push(a.get(qr)));break;case"delete":ne(e)||(i.push(a.get(Dn)),Gn(e)&&i.push(a.get(qr)));break;case"set":Gn(e)&&i.push(a.get(Dn));break}if(i.length===1)i[0]&&Yr(i[0]);else{const c=[];for(const f of i)f&&c.push(...f);Yr(Ho(c))}}function Yr(e,t){const n=ne(e)?e:[...e];for(const l of n)l.computed&&Na(l);for(const l of n)l.computed||Na(l)}function Na(e,t){(e!==Ot||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ld=Ro("__proto__,__v_isRef,__isVue"),Jc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(No)),rd=Uo(),od=Uo(!1,!0),ad=Uo(!0),ja=id();function id(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const l=Ae(this);for(let o=0,a=this.length;o<a;o++)vt(l,"get",o+"");const r=l[t](...n);return r===-1||r===!1?l[t](...n.map(Ae)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){is();const l=Ae(this)[t].apply(this,n);return cs(),l}}),e}function Uo(e=!1,t=!1){return function(l,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&o===(e?t?Cd:su:t?nu:tu).get(l))return l;const a=ne(l);if(!e&&a&&he(ja,r))return Reflect.get(ja,r,o);const i=Reflect.get(l,r,o);return(No(r)?Jc.has(r):ld(r))||(e||vt(l,"get",r),t)?i:be(i)?a&&jo(r)?i:i.value:Ue(i)?e?qn(i):Re(i):i}}const cd=Qc(),ud=Qc(!0);function Qc(e=!1){return function(n,l,r,o){let a=n[l];if(Ws(a)&&be(a)&&!be(r))return!1;if(!e&&!Ws(r)&&(Zr(r)||(r=Ae(r),a=Ae(a)),!ne(n)&&be(a)&&!be(r)))return a.value=r,!0;const i=ne(n)&&jo(l)?Number(l)<n.length:he(n,l),c=Reflect.set(n,l,r,o);return n===Ae(o)&&(i?zs(r,a)&&Zt(n,"set",l,r):Zt(n,"add",l,r)),c}}function fd(e,t){const n=he(e,t);e[t];const l=Reflect.deleteProperty(e,t);return l&&n&&Zt(e,"delete",t,void 0),l}function pd(e,t){const n=Reflect.has(e,t);return(!No(t)||!Jc.has(t))&&vt(e,"has",t),n}function dd(e){return vt(e,"iterate",ne(e)?"length":Dn),Reflect.ownKeys(e)}const eu={get:rd,set:cd,deleteProperty:fd,has:pd,ownKeys:dd},hd={get:ad,set(e,t){return!0},deleteProperty(e,t){return!0}},md=st({},eu,{get:od,set:ud}),zo=e=>e,Jl=e=>Reflect.getPrototypeOf(e);function dl(e,t,n=!1,l=!1){e=e.__v_raw;const r=Ae(e),o=Ae(t);n||(t!==o&&vt(r,"get",t),vt(r,"get",o));const{has:a}=Jl(r),i=l?zo:n?qo:Ks;if(a.call(r,t))return i(e.get(t));if(a.call(r,o))return i(e.get(o));e!==r&&e.get(t)}function hl(e,t=!1){const n=this.__v_raw,l=Ae(n),r=Ae(e);return t||(e!==r&&vt(l,"has",e),vt(l,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function ml(e,t=!1){return e=e.__v_raw,!t&&vt(Ae(e),"iterate",Dn),Reflect.get(e,"size",e)}function Ha(e){e=Ae(e);const t=Ae(this);return Jl(t).has.call(t,e)||(t.add(e),Zt(t,"add",e,e)),this}function Va(e,t){t=Ae(t);const n=Ae(this),{has:l,get:r}=Jl(n);let o=l.call(n,e);o||(e=Ae(e),o=l.call(n,e));const a=r.call(n,e);return n.set(e,t),o?zs(t,a)&&Zt(n,"set",e,t):Zt(n,"add",e,t),this}function Ua(e){const t=Ae(this),{has:n,get:l}=Jl(t);let r=n.call(t,e);r||(e=Ae(e),r=n.call(t,e)),l&&l.call(t,e);const o=t.delete(e);return r&&Zt(t,"delete",e,void 0),o}function za(){const e=Ae(this),t=e.size!==0,n=e.clear();return t&&Zt(e,"clear",void 0,void 0),n}function gl(e,t){return function(l,r){const o=this,a=o.__v_raw,i=Ae(a),c=t?zo:e?qo:Ks;return!e&&vt(i,"iterate",Dn),a.forEach((f,p)=>l.call(r,c(f),c(p),o))}}function yl(e,t,n){return function(...l){const r=this.__v_raw,o=Ae(r),a=Gn(o),i=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,f=r[e](...l),p=n?zo:t?qo:Ks;return!t&&vt(o,"iterate",c?qr:Dn),{next(){const{value:h,done:d}=f.next();return d?{value:h,done:d}:{value:i?[p(h[0]),p(h[1])]:p(h),done:d}},[Symbol.iterator](){return this}}}}function Jt(e){return function(...t){return e==="delete"?!1:this}}function gd(){const e={get(o){return dl(this,o)},get size(){return ml(this)},has:hl,add:Ha,set:Va,delete:Ua,clear:za,forEach:gl(!1,!1)},t={get(o){return dl(this,o,!1,!0)},get size(){return ml(this)},has:hl,add:Ha,set:Va,delete:Ua,clear:za,forEach:gl(!1,!0)},n={get(o){return dl(this,o,!0)},get size(){return ml(this,!0)},has(o){return hl.call(this,o,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:gl(!0,!1)},l={get(o){return dl(this,o,!0,!0)},get size(){return ml(this,!0)},has(o){return hl.call(this,o,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:gl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=yl(o,!1,!1),n[o]=yl(o,!0,!1),t[o]=yl(o,!1,!0),l[o]=yl(o,!0,!0)}),[e,n,t,l]}const[yd,vd,_d,bd]=gd();function Wo(e,t){const n=t?e?bd:_d:e?vd:yd;return(l,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?l:Reflect.get(he(n,r)&&r in l?n:l,r,o)}const Ad={get:Wo(!1,!1)},wd={get:Wo(!1,!0)},xd={get:Wo(!0,!1)},tu=new WeakMap,nu=new WeakMap,su=new WeakMap,Cd=new WeakMap;function kd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $d(e){return e.__v_skip||!Object.isExtensible(e)?0:kd(Yp(e))}function Re(e){return Ws(e)?e:Ko(e,!1,eu,Ad,tu)}function Ed(e){return Ko(e,!1,md,wd,nu)}function qn(e){return Ko(e,!0,hd,xd,su)}function Ko(e,t,n,l,r){if(!Ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const a=$d(e);if(a===0)return e;const i=new Proxy(e,a===2?l:n);return r.set(e,i),i}function Jn(e){return Ws(e)?Jn(e.__v_raw):!!(e&&e.__v_isReactive)}function Ws(e){return!!(e&&e.__v_isReadonly)}function Zr(e){return!!(e&&e.__v_isShallow)}function lu(e){return Jn(e)||Ws(e)}function Ae(e){const t=e&&e.__v_raw;return t?Ae(t):e}function Ql(e){return Sl(e,"__v_skip",!0),e}const Ks=e=>Ue(e)?Re(e):e,qo=e=>Ue(e)?qn(e):e;function Yo(e){rn&&Ot&&(e=Ae(e),Xc(e.dep||(e.dep=Ho())))}function Zo(e,t){e=Ae(e),e.dep&&Yr(e.dep)}function be(e){return!!(e&&e.__v_isRef===!0)}function z(e){return ru(e,!1)}function zt(e){return ru(e,!0)}function ru(e,t){return be(e)?e:new Dd(e,t)}class Dd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Ae(t),this._value=n?t:Ks(t)}get value(){return Yo(this),this._value}set value(t){t=this.__v_isShallow?t:Ae(t),zs(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Ks(t),Zo(this))}}function _(e){return be(e)?e.value:e}const Bd={get:(e,t,n)=>_(Reflect.get(e,t,n)),set:(e,t,n,l)=>{const r=e[t];return be(r)&&!be(n)?(r.value=n,!0):Reflect.set(e,t,n,l)}};function ou(e){return Jn(e)?e:new Proxy(e,Bd)}class Od{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:l}=t(()=>Yo(this),()=>Zo(this));this._get=n,this._set=l}get value(){return this._get()}set value(t){this._set(t)}}function Pd(e){return new Od(e)}function Sd(e){const t=ne(e)?new Array(e.length):{};for(const n in e)t[n]=Td(e,n);return t}class Md{constructor(t,n,l){this._object=t,this._key=n,this._defaultValue=l,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Td(e,t,n){const l=e[t];return be(l)?l:new Md(e,t,n)}class Fd{constructor(t,n,l,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Vo(t,()=>{this._dirty||(this._dirty=!0,Zo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=l}get value(){const t=Ae(this);return Yo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Rd(e,t,n=!1){let l,r;const o=ae(e);return o?(l=e,r=St):(l=e.get,r=e.set),new Fd(l,r,o||!r,n)}function on(e,t,n,l){let r;try{r=l?e(...l):e()}catch(o){er(o,t,n)}return r}function Mt(e,t,n,l){if(ae(e)){const o=on(e,t,n,l);return o&&zc(o)&&o.catch(a=>{er(a,t,n)}),o}const r=[];for(let o=0;o<e.length;o++)r.push(Mt(e[o],t,n,l));return r}function er(e,t,n,l=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const a=t.proxy,i=n;for(;o;){const f=o.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](e,a,i)===!1)return}o=o.parent}const c=t.appContext.config.errorHandler;if(c){on(c,null,10,[e,a,i]);return}}Id(e,n,r,l)}function Id(e,t,n,l=!0){console.error(e)}let Ml=!1,Gr=!1;const mt=[];let qt=0;const Bs=[];let $s=null,Un=0;const Os=[];let tn=null,zn=0;const au=Promise.resolve();let Go=null,Xr=null;function qe(e){const t=Go||au;return e?t.then(this?e.bind(this):e):t}function Ld(e){let t=qt+1,n=mt.length;for(;t<n;){const l=t+n>>>1;qs(mt[l])<e?t=l+1:n=l}return t}function iu(e){(!mt.length||!mt.includes(e,Ml&&e.allowRecurse?qt+1:qt))&&e!==Xr&&(e.id==null?mt.push(e):mt.splice(Ld(e.id),0,e),cu())}function cu(){!Ml&&!Gr&&(Gr=!0,Go=au.then(pu))}function Nd(e){const t=mt.indexOf(e);t>qt&&mt.splice(t,1)}function uu(e,t,n,l){ne(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?l+1:l))&&n.push(e),cu()}function jd(e){uu(e,$s,Bs,Un)}function Hd(e){uu(e,tn,Os,zn)}function tr(e,t=null){if(Bs.length){for(Xr=t,$s=[...new Set(Bs)],Bs.length=0,Un=0;Un<$s.length;Un++)$s[Un]();$s=null,Un=0,Xr=null,tr(e,t)}}function fu(e){if(tr(),Os.length){const t=[...new Set(Os)];if(Os.length=0,tn){tn.push(...t);return}for(tn=t,tn.sort((n,l)=>qs(n)-qs(l)),zn=0;zn<tn.length;zn++)tn[zn]();tn=null,zn=0}}const qs=e=>e.id==null?1/0:e.id;function pu(e){Gr=!1,Ml=!0,tr(e),mt.sort((n,l)=>qs(n)-qs(l));const t=St;try{for(qt=0;qt<mt.length;qt++){const n=mt[qt];n&&n.active!==!1&&on(n,null,14)}}finally{qt=0,mt.length=0,fu(),Ml=!1,Go=null,(mt.length||Bs.length||Os.length)&&pu(e)}}function Vd(e,t,...n){if(e.isUnmounted)return;const l=e.vnode.props||Oe;let r=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in l){const p=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:d}=l[p]||Oe;d&&(r=n.map(m=>m.trim())),h&&(r=n.map(zr))}let i,c=l[i=yr(t)]||l[i=yr(Ut(t))];!c&&o&&(c=l[i=yr(Tn(t))]),c&&Mt(c,e,6,r);const f=l[i+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Mt(f,e,6,r)}}function du(e,t,n=!1){const l=t.emitsCache,r=l.get(e);if(r!==void 0)return r;const o=e.emits;let a={},i=!1;if(!ae(e)){const c=f=>{const p=du(f,t,!0);p&&(i=!0,st(a,p))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!i?(l.set(e,null),null):(ne(o)?o.forEach(c=>a[c]=null):st(a,o),l.set(e,a),a)}function nr(e,t){return!e||!Yl(t)?!1:(t=t.slice(2).replace(/Once$/,""),he(e,t[0].toLowerCase()+t.slice(1))||he(e,Tn(t))||he(e,t))}let Ze=null,sr=null;function Tl(e){const t=Ze;return Ze=e,sr=e&&e.type.__scopeId||null,t}function ex(e){sr=e}function tx(){sr=null}function F(e,t=Ze,n){if(!t||e._n)return e;const l=(...r)=>{l._d&&ti(-1);const o=Tl(t),a=e(...r);return Tl(o),l._d&&ti(1),a};return l._n=!0,l._c=!0,l._d=!0,l}function vr(e){const{type:t,vnode:n,proxy:l,withProxy:r,props:o,propsOptions:[a],slots:i,attrs:c,emit:f,render:p,renderCache:h,data:d,setupState:m,ctx:y,inheritAttrs:A}=e;let b,$;const x=Tl(e);try{if(n.shapeFlag&4){const E=r||l;b=Nt(p.call(E,E,h,o,m,d,y)),$=c}else{const E=t;b=Nt(E.length>1?E(o,{attrs:c,slots:i,emit:f}):E(o,null)),$=t.props?c:Ud(c)}}catch(E){Ss.length=0,er(E,e,1),b=O(dn)}let k=b;if($&&A!==!1){const E=Object.keys($),{shapeFlag:N}=k;E.length&&N&7&&(a&&E.some(Io)&&($=zd($,a)),k=Mn(k,$))}return n.dirs&&(k=Mn(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),b=k,Tl(x),b}const Ud=e=>{let t;for(const n in e)(n==="class"||n==="style"||Yl(n))&&((t||(t={}))[n]=e[n]);return t},zd=(e,t)=>{const n={};for(const l in e)(!Io(l)||!(l.slice(9)in t))&&(n[l]=e[l]);return n};function Wd(e,t,n){const{props:l,children:r,component:o}=e,{props:a,children:i,patchFlag:c}=t,f=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return l?Wa(l,a,f):!!a;if(c&8){const p=t.dynamicProps;for(let h=0;h<p.length;h++){const d=p[h];if(a[d]!==l[d]&&!nr(f,d))return!0}}}else return(r||i)&&(!i||!i.$stable)?!0:l===a?!1:l?a?Wa(l,a,f):!0:!!a;return!1}function Wa(e,t,n){const l=Object.keys(t);if(l.length!==Object.keys(e).length)return!0;for(let r=0;r<l.length;r++){const o=l[r];if(t[o]!==e[o]&&!nr(n,o))return!0}return!1}function Kd({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const hu=e=>e.__isSuspense;function qd(e,t){t&&t.pendingBranch?ne(e)?t.effects.push(...e):t.effects.push(e):Hd(e)}function ht(e,t){if(ze){let n=ze.provides;const l=ze.parent&&ze.parent.provides;l===n&&(n=ze.provides=Object.create(l)),n[e]=t}}function H(e,t,n=!1){const l=ze||Ze;if(l){const r=l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&ae(t)?t.call(l.proxy):t}}function rl(e,t){return Xo(e,null,t)}const Ka={};function ce(e,t,n){return Xo(e,t,n)}function Xo(e,t,{immediate:n,deep:l,flush:r,onTrack:o,onTrigger:a}=Oe){const i=ze;let c,f=!1,p=!1;if(be(e)?(c=()=>e.value,f=Zr(e)):Jn(e)?(c=()=>e,l=!0):ne(e)?(p=!0,f=e.some($=>Jn($)||Zr($)),c=()=>e.map($=>{if(be($))return $.value;if(Jn($))return Cn($);if(ae($))return on($,i,2)})):ae(e)?t?c=()=>on(e,i,2):c=()=>{if(!(i&&i.isUnmounted))return h&&h(),Mt(e,i,3,[d])}:c=St,t&&l){const $=c;c=()=>Cn($())}let h,d=$=>{h=b.onStop=()=>{on($,i,4)}};if(Zs)return d=St,t?n&&Mt(t,i,3,[c(),p?[]:void 0,d]):c(),St;let m=p?[]:Ka;const y=()=>{if(!!b.active)if(t){const $=b.run();(l||f||(p?$.some((x,k)=>zs(x,m[k])):zs($,m)))&&(h&&h(),Mt(t,i,3,[$,m===Ka?void 0:m,d]),m=$)}else b.run()};y.allowRecurse=!!t;let A;r==="sync"?A=y:r==="post"?A=()=>Ke(y,i&&i.suspense):A=()=>jd(y);const b=new Vo(c,A);return t?n?y():m=b.run():r==="post"?Ke(b.run.bind(b),i&&i.suspense):b.run(),()=>{b.stop(),i&&i.scope&&Lo(i.scope.effects,b)}}function Yd(e,t,n){const l=this.proxy,r=Le(e)?e.includes(".")?mu(l,e):()=>l[e]:e.bind(l,l);let o;ae(t)?o=t:(o=t.handler,n=t);const a=ze;ls(this);const i=Xo(r,o.bind(l),n);return a?ls(a):Bn(),i}function mu(e,t){const n=t.split(".");return()=>{let l=e;for(let r=0;r<n.length&&l;r++)l=l[n[r]];return l}}function Cn(e,t){if(!Ue(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),be(e))Cn(e.value,t);else if(ne(e))for(let n=0;n<e.length;n++)Cn(e[n],t);else if(Uc(e)||Gn(e))e.forEach(n=>{Cn(n,t)});else if(Kc(e))for(const n in e)Cn(e[n],t);return e}function gu(e,t){e.shapeFlag&6&&e.component?gu(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ye(e){return ae(e)?{setup:e,name:e.name}:e}const Qn=e=>!!e.type.__asyncLoader,yu=e=>e.type.__isKeepAlive,Zd={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Fn(),l=n.ctx;if(!l.renderer)return()=>{const x=t.default&&t.default();return x&&x.length===1?x[0]:x};const r=new Map,o=new Set;let a=null;const i=n.suspense,{renderer:{p:c,m:f,um:p,o:{createElement:h}}}=l,d=h("div");l.activate=(x,k,E,N,T)=>{const W=x.component;f(x,k,E,0,i),c(W.vnode,x,k,E,W,i,N,x.slotScopeIds,T),Ke(()=>{W.isDeactivated=!1,W.a&&Xn(W.a);const re=x.props&&x.props.onVnodeMounted;re&&At(re,W.parent,x)},i)},l.deactivate=x=>{const k=x.component;f(x,d,null,1,i),Ke(()=>{k.da&&Xn(k.da);const E=x.props&&x.props.onVnodeUnmounted;E&&At(E,k.parent,x),k.isDeactivated=!0},i)};function m(x){_r(x),p(x,n,i,!0)}function y(x){r.forEach((k,E)=>{const N=lo(k.type);N&&(!x||!x(N))&&A(E)})}function A(x){const k=r.get(x);!a||k.type!==a.type?m(k):a&&_r(a),r.delete(x),o.delete(x)}ce(()=>[e.include,e.exclude],([x,k])=>{x&&y(E=>Es(x,E)),k&&y(E=>!Es(k,E))},{flush:"post",deep:!0});let b=null;const $=()=>{b!=null&&r.set(b,br(n.subTree))};return us($),Au($),rr(()=>{r.forEach(x=>{const{subTree:k,suspense:E}=n,N=br(k);if(x.type===N.type){_r(N);const T=N.component.da;T&&Ke(T,E);return}m(x)})}),()=>{if(b=null,!t.default)return null;const x=t.default(),k=x[0];if(x.length>1)return a=null,x;if(!ss(k)||!(k.shapeFlag&4)&&!(k.shapeFlag&128))return a=null,k;let E=br(k);const N=E.type,T=lo(Qn(E)?E.type.__asyncResolved||{}:N),{include:W,exclude:re,max:ue}=e;if(W&&(!T||!Es(W,T))||re&&T&&Es(re,T))return a=E,k;const pe=E.key==null?N:E.key,me=r.get(pe);return E.el&&(E=Mn(E),k.shapeFlag&128&&(k.ssContent=E)),b=pe,me?(E.el=me.el,E.component=me.component,E.transition&&gu(E,E.transition),E.shapeFlag|=512,o.delete(pe),o.add(pe)):(o.add(pe),ue&&o.size>parseInt(ue,10)&&A(o.values().next().value)),E.shapeFlag|=256,a=E,hu(k.type)?k:E}}},vu=Zd;function Es(e,t){return ne(e)?e.some(n=>Es(n,t)):Le(e)?e.split(",").includes(t):e.test?e.test(t):!1}function Gd(e,t){_u(e,"a",t)}function Xd(e,t){_u(e,"da",t)}function _u(e,t,n=ze){const l=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(lr(t,l,n),n){let r=n.parent;for(;r&&r.parent;)yu(r.parent.vnode)&&Jd(l,t,n,r),r=r.parent}}function Jd(e,t,n,l){const r=lr(t,e,l,!0);or(()=>{Lo(l[t],r)},n)}function _r(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function br(e){return e.shapeFlag&128?e.ssContent:e}function lr(e,t,n=ze,l=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;is(),ls(n);const i=Mt(t,n,e,a);return Bn(),cs(),i});return l?r.unshift(o):r.push(o),o}}const Gt=e=>(t,n=ze)=>(!Zs||e==="sp")&&lr(e,t,n),bu=Gt("bm"),us=Gt("m"),Qd=Gt("bu"),Au=Gt("u"),rr=Gt("bum"),or=Gt("um"),eh=Gt("sp"),th=Gt("rtg"),nh=Gt("rtc");function sh(e,t=ze){lr("ec",e,t)}function Jo(e,t){const n=Ze;if(n===null)return e;const l=ir(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[a,i,c,f=Oe]=t[o];ae(a)&&(a={mounted:a,updated:a}),a.deep&&Cn(i),r.push({dir:a,instance:l,value:i,oldValue:void 0,arg:c,modifiers:f})}return e}function mn(e,t,n,l){const r=e.dirs,o=t&&t.dirs;for(let a=0;a<r.length;a++){const i=r[a];o&&(i.oldValue=o[a].value);let c=i.dir[l];c&&(is(),Mt(c,n,8,[e.el,i,e,t]),cs())}}const wu="components";function kt(e,t){return rh(wu,e,!0,t)||e}const lh=Symbol();function rh(e,t,n=!0,l=!1){const r=Ze||ze;if(r){const o=r.type;if(e===wu){const i=lo(o);if(i&&(i===t||i===Ut(t)||i===Xl(Ut(t))))return o}const a=qa(r[e]||o[e],t)||qa(r.appContext[e],t);return!a&&l?o:a}}function qa(e,t){return e&&(e[t]||e[Ut(t)]||e[Xl(Ut(t))])}function ol(e,t,n,l){let r;const o=n&&n[l];if(ne(e)||Le(e)){r=new Array(e.length);for(let a=0,i=e.length;a<i;a++)r[a]=t(e[a],a,void 0,o&&o[a])}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,o&&o[a])}else if(Ue(e))if(e[Symbol.iterator])r=Array.from(e,(a,i)=>t(a,i,void 0,o&&o[i]));else{const a=Object.keys(e);r=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const f=a[i];r[i]=t(e[f],f,i,o&&o[i])}}else r=[];return n&&(n[l]=r),r}function _t(e,t,n={},l,r){if(Ze.isCE||Ze.parent&&Qn(Ze.parent)&&Ze.parent.isCE)return O("slot",t==="default"?null:{name:t},l&&l());let o=e[t];o&&o._c&&(o._d=!1),C();const a=o&&xu(o(n)),i=X(Ce,{key:n.key||`_${t}`},a||(l?l():[]),a&&e._===1?64:-2);return!r&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),o&&o._c&&(o._d=!0),i}function xu(e){return e.some(t=>ss(t)?!(t.type===dn||t.type===Ce&&!xu(t.children)):!0)?e:null}const Jr=e=>e?Tu(e)?ir(e)||e.proxy:Jr(e.parent):null,Fl=st(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Jr(e.parent),$root:e=>Jr(e.root),$emit:e=>e.emit,$options:e=>ku(e),$forceUpdate:e=>e.f||(e.f=()=>iu(e.update)),$nextTick:e=>e.n||(e.n=qe.bind(e.proxy)),$watch:e=>Yd.bind(e)}),oh={get({_:e},t){const{ctx:n,setupState:l,data:r,props:o,accessCache:a,type:i,appContext:c}=e;let f;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return l[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(l!==Oe&&he(l,t))return a[t]=1,l[t];if(r!==Oe&&he(r,t))return a[t]=2,r[t];if((f=e.propsOptions[0])&&he(f,t))return a[t]=3,o[t];if(n!==Oe&&he(n,t))return a[t]=4,n[t];Qr&&(a[t]=0)}}const p=Fl[t];let h,d;if(p)return t==="$attrs"&&vt(e,"get",t),p(e);if((h=i.__cssModules)&&(h=h[t]))return h;if(n!==Oe&&he(n,t))return a[t]=4,n[t];if(d=c.config.globalProperties,he(d,t))return d[t]},set({_:e},t,n){const{data:l,setupState:r,ctx:o}=e;return r!==Oe&&he(r,t)?(r[t]=n,!0):l!==Oe&&he(l,t)?(l[t]=n,!0):he(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:l,appContext:r,propsOptions:o}},a){let i;return!!n[a]||e!==Oe&&he(e,a)||t!==Oe&&he(t,a)||(i=o[0])&&he(i,a)||he(l,a)||he(Fl,a)||he(r.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:he(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Qr=!0;function ah(e){const t=ku(e),n=e.proxy,l=e.ctx;Qr=!1,t.beforeCreate&&Ya(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:a,watch:i,provide:c,inject:f,created:p,beforeMount:h,mounted:d,beforeUpdate:m,updated:y,activated:A,deactivated:b,beforeDestroy:$,beforeUnmount:x,destroyed:k,unmounted:E,render:N,renderTracked:T,renderTriggered:W,errorCaptured:re,serverPrefetch:ue,expose:pe,inheritAttrs:me,components:Te,directives:Ne,filters:Ye}=t;if(f&&ih(f,l,null,e.appContext.config.unwrapInjectedRef),a)for(const se in a){const ee=a[se];ae(ee)&&(l[se]=ee.bind(n))}if(r){const se=r.call(n,n);Ue(se)&&(e.data=Re(se))}if(Qr=!0,o)for(const se in o){const ee=o[se],de=ae(ee)?ee.bind(n,n):ae(ee.get)?ee.get.bind(n,n):St,It=!ae(ee)&&ae(ee.set)?ee.set.bind(n):St,Je=D({get:de,set:It});Object.defineProperty(l,se,{enumerable:!0,configurable:!0,get:()=>Je.value,set:bt=>Je.value=bt})}if(i)for(const se in i)Cu(i[se],l,n,se);if(c){const se=ae(c)?c.call(n):c;Reflect.ownKeys(se).forEach(ee=>{ht(ee,se[ee])})}p&&Ya(p,e,"c");function te(se,ee){ne(ee)?ee.forEach(de=>se(de.bind(n))):ee&&se(ee.bind(n))}if(te(bu,h),te(us,d),te(Qd,m),te(Au,y),te(Gd,A),te(Xd,b),te(sh,re),te(nh,T),te(th,W),te(rr,x),te(or,E),te(eh,ue),ne(pe))if(pe.length){const se=e.exposed||(e.exposed={});pe.forEach(ee=>{Object.defineProperty(se,ee,{get:()=>n[ee],set:de=>n[ee]=de})})}else e.exposed||(e.exposed={});N&&e.render===St&&(e.render=N),me!=null&&(e.inheritAttrs=me),Te&&(e.components=Te),Ne&&(e.directives=Ne)}function ih(e,t,n=St,l=!1){ne(e)&&(e=eo(e));for(const r in e){const o=e[r];let a;Ue(o)?"default"in o?a=H(o.from||r,o.default,!0):a=H(o.from||r):a=H(o),be(a)&&l?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):t[r]=a}}function Ya(e,t,n){Mt(ne(e)?e.map(l=>l.bind(t.proxy)):e.bind(t.proxy),t,n)}function Cu(e,t,n,l){const r=l.includes(".")?mu(n,l):()=>n[l];if(Le(e)){const o=t[e];ae(o)&&ce(r,o)}else if(ae(e))ce(r,e.bind(n));else if(Ue(e))if(ne(e))e.forEach(o=>Cu(o,t,n,l));else{const o=ae(e.handler)?e.handler.bind(n):t[e.handler];ae(o)&&ce(r,o,e)}}function ku(e){const t=e.type,{mixins:n,extends:l}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,i=o.get(t);let c;return i?c=i:!r.length&&!n&&!l?c=t:(c={},r.length&&r.forEach(f=>Rl(c,f,a,!0)),Rl(c,t,a)),o.set(t,c),c}function Rl(e,t,n,l=!1){const{mixins:r,extends:o}=t;o&&Rl(e,o,n,!0),r&&r.forEach(a=>Rl(e,a,n,!0));for(const a in t)if(!(l&&a==="expose")){const i=ch[a]||n&&n[a];e[a]=i?i(e[a],t[a]):t[a]}return e}const ch={data:Za,props:_n,emits:_n,methods:_n,computed:_n,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:_n,directives:_n,watch:fh,provide:Za,inject:uh};function Za(e,t){return t?e?function(){return st(ae(e)?e.call(this,this):e,ae(t)?t.call(this,this):t)}:t:e}function uh(e,t){return _n(eo(e),eo(t))}function eo(e){if(ne(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function et(e,t){return e?[...new Set([].concat(e,t))]:t}function _n(e,t){return e?st(st(Object.create(null),e),t):t}function fh(e,t){if(!e)return t;if(!t)return e;const n=st(Object.create(null),e);for(const l in t)n[l]=et(e[l],t[l]);return n}function ph(e,t,n,l=!1){const r={},o={};Sl(o,ar,1),e.propsDefaults=Object.create(null),$u(e,t,r,o);for(const a in e.propsOptions[0])a in r||(r[a]=void 0);n?e.props=l?r:Ed(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function dh(e,t,n,l){const{props:r,attrs:o,vnode:{patchFlag:a}}=e,i=Ae(r),[c]=e.propsOptions;let f=!1;if((l||a>0)&&!(a&16)){if(a&8){const p=e.vnode.dynamicProps;for(let h=0;h<p.length;h++){let d=p[h];if(nr(e.emitsOptions,d))continue;const m=t[d];if(c)if(he(o,d))m!==o[d]&&(o[d]=m,f=!0);else{const y=Ut(d);r[y]=to(c,i,y,m,e,!1)}else m!==o[d]&&(o[d]=m,f=!0)}}}else{$u(e,t,r,o)&&(f=!0);let p;for(const h in i)(!t||!he(t,h)&&((p=Tn(h))===h||!he(t,p)))&&(c?n&&(n[h]!==void 0||n[p]!==void 0)&&(r[h]=to(c,i,h,void 0,e,!0)):delete r[h]);if(o!==i)for(const h in o)(!t||!he(t,h)&&!0)&&(delete o[h],f=!0)}f&&Zt(e,"set","$attrs")}function $u(e,t,n,l){const[r,o]=e.propsOptions;let a=!1,i;if(t)for(let c in t){if(Cl(c))continue;const f=t[c];let p;r&&he(r,p=Ut(c))?!o||!o.includes(p)?n[p]=f:(i||(i={}))[p]=f:nr(e.emitsOptions,c)||(!(c in l)||f!==l[c])&&(l[c]=f,a=!0)}if(o){const c=Ae(n),f=i||Oe;for(let p=0;p<o.length;p++){const h=o[p];n[h]=to(r,c,h,f[h],e,!he(f,h))}}return a}function to(e,t,n,l,r,o){const a=e[n];if(a!=null){const i=he(a,"default");if(i&&l===void 0){const c=a.default;if(a.type!==Function&&ae(c)){const{propsDefaults:f}=r;n in f?l=f[n]:(ls(r),l=f[n]=c.call(null,t),Bn())}else l=c}a[0]&&(o&&!i?l=!1:a[1]&&(l===""||l===Tn(n))&&(l=!0))}return l}function Eu(e,t,n=!1){const l=t.propsCache,r=l.get(e);if(r)return r;const o=e.props,a={},i=[];let c=!1;if(!ae(e)){const p=h=>{c=!0;const[d,m]=Eu(h,t,!0);st(a,d),m&&i.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!o&&!c)return l.set(e,Zn),Zn;if(ne(o))for(let p=0;p<o.length;p++){const h=Ut(o[p]);Ga(h)&&(a[h]=Oe)}else if(o)for(const p in o){const h=Ut(p);if(Ga(h)){const d=o[p],m=a[h]=ne(d)||ae(d)?{type:d}:d;if(m){const y=Qa(Boolean,m.type),A=Qa(String,m.type);m[0]=y>-1,m[1]=A<0||y<A,(y>-1||he(m,"default"))&&i.push(h)}}}const f=[a,i];return l.set(e,f),f}function Ga(e){return e[0]!=="$"}function Xa(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ja(e,t){return Xa(e)===Xa(t)}function Qa(e,t){return ne(t)?t.findIndex(n=>Ja(n,e)):ae(t)&&Ja(t,e)?0:-1}const Du=e=>e[0]==="_"||e==="$stable",Qo=e=>ne(e)?e.map(Nt):[Nt(e)],hh=(e,t,n)=>{if(t._n)return t;const l=F((...r)=>Qo(t(...r)),n);return l._c=!1,l},Bu=(e,t,n)=>{const l=e._ctx;for(const r in e){if(Du(r))continue;const o=e[r];if(ae(o))t[r]=hh(r,o,l);else if(o!=null){const a=Qo(o);t[r]=()=>a}}},Ou=(e,t)=>{const n=Qo(t);e.slots.default=()=>n},mh=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Ae(t),Sl(t,"_",n)):Bu(t,e.slots={})}else e.slots={},t&&Ou(e,t);Sl(e.slots,ar,1)},gh=(e,t,n)=>{const{vnode:l,slots:r}=e;let o=!0,a=Oe;if(l.shapeFlag&32){const i=t._;i?n&&i===1?o=!1:(st(r,t),!n&&i===1&&delete r._):(o=!t.$stable,Bu(t,r)),a=t}else t&&(Ou(e,t),a={default:1});if(o)for(const i in r)!Du(i)&&!(i in a)&&delete r[i]};function Pu(){return{app:null,config:{isNativeTag:Wp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yh=0;function vh(e,t){return function(l,r=null){ae(l)||(l=Object.assign({},l)),r!=null&&!Ue(r)&&(r=null);const o=Pu(),a=new Set;let i=!1;const c=o.app={_uid:yh++,_component:l,_props:r,_container:null,_context:o,_instance:null,version:Rh,get config(){return o.config},set config(f){},use(f,...p){return a.has(f)||(f&&ae(f.install)?(a.add(f),f.install(c,...p)):ae(f)&&(a.add(f),f(c,...p))),c},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),c},component(f,p){return p?(o.components[f]=p,c):o.components[f]},directive(f,p){return p?(o.directives[f]=p,c):o.directives[f]},mount(f,p,h){if(!i){const d=O(l,r);return d.appContext=o,p&&t?t(d,f):e(d,f,h),i=!0,c._container=f,f.__vue_app__=c,ir(d.component)||d.component.proxy}},unmount(){i&&(e(null,c._container),delete c._container.__vue_app__)},provide(f,p){return o.provides[f]=p,c}};return c}}function no(e,t,n,l,r=!1){if(ne(e)){e.forEach((d,m)=>no(d,t&&(ne(t)?t[m]:t),n,l,r));return}if(Qn(l)&&!r)return;const o=l.shapeFlag&4?ir(l.component)||l.component.proxy:l.el,a=r?null:o,{i,r:c}=e,f=t&&t.r,p=i.refs===Oe?i.refs={}:i.refs,h=i.setupState;if(f!=null&&f!==c&&(Le(f)?(p[f]=null,he(h,f)&&(h[f]=null)):be(f)&&(f.value=null)),ae(c))on(c,i,12,[a,p]);else{const d=Le(c),m=be(c);if(d||m){const y=()=>{if(e.f){const A=d?p[c]:c.value;r?ne(A)&&Lo(A,o):ne(A)?A.includes(o)||A.push(o):d?(p[c]=[o],he(h,c)&&(h[c]=p[c])):(c.value=[o],e.k&&(p[e.k]=c.value))}else d?(p[c]=a,he(h,c)&&(h[c]=a)):be(c)&&(c.value=a,e.k&&(p[e.k]=a))};a?(y.id=-1,Ke(y,n)):y()}}}const Ke=qd;function _h(e){return bh(e)}function bh(e,t){const n=Xp();n.__VUE__=!0;const{insert:l,remove:r,patchProp:o,createElement:a,createText:i,createComment:c,setText:f,setElementText:p,parentNode:h,nextSibling:d,setScopeId:m=St,cloneNode:y,insertStaticContent:A}=e,b=(g,v,w,S=null,P=null,L=null,V=!1,I=null,j=!!v.dynamicChildren)=>{if(g===v)return;g&&!ys(g,v)&&(S=Z(g),lt(g,P,L,!0),g=null),v.patchFlag===-2&&(j=!1,v.dynamicChildren=null);const{type:M,ref:J,shapeFlag:Y}=v;switch(M){case ta:$(g,v,w,S);break;case dn:x(g,v,w,S);break;case Ar:g==null&&k(v,w,S,V);break;case Ce:Ne(g,v,w,S,P,L,V,I,j);break;default:Y&1?T(g,v,w,S,P,L,V,I,j):Y&6?Ye(g,v,w,S,P,L,V,I,j):(Y&64||Y&128)&&M.process(g,v,w,S,P,L,V,I,j,Pe)}J!=null&&P&&no(J,g&&g.ref,L,v||g,!v)},$=(g,v,w,S)=>{if(g==null)l(v.el=i(v.children),w,S);else{const P=v.el=g.el;v.children!==g.children&&f(P,v.children)}},x=(g,v,w,S)=>{g==null?l(v.el=c(v.children||""),w,S):v.el=g.el},k=(g,v,w,S)=>{[g.el,g.anchor]=A(g.children,v,w,S,g.el,g.anchor)},E=({el:g,anchor:v},w,S)=>{let P;for(;g&&g!==v;)P=d(g),l(g,w,S),g=P;l(v,w,S)},N=({el:g,anchor:v})=>{let w;for(;g&&g!==v;)w=d(g),r(g),g=w;r(v)},T=(g,v,w,S,P,L,V,I,j)=>{V=V||v.type==="svg",g==null?W(v,w,S,P,L,V,I,j):pe(g,v,P,L,V,I,j)},W=(g,v,w,S,P,L,V,I)=>{let j,M;const{type:J,props:Y,shapeFlag:Q,transition:le,patchFlag:ge,dirs:Ee}=g;if(g.el&&y!==void 0&&ge===-1)j=g.el=y(g.el);else{if(j=g.el=a(g.type,L,Y&&Y.is,Y),Q&8?p(j,g.children):Q&16&&ue(g.children,j,null,S,P,L&&J!=="foreignObject",V,I),Ee&&mn(g,null,S,"created"),Y){for(const Se in Y)Se!=="value"&&!Cl(Se)&&o(j,Se,null,Y[Se],L,g.children,S,P,R);"value"in Y&&o(j,"value",null,Y.value),(M=Y.onVnodeBeforeMount)&&At(M,S,g)}re(j,g,g.scopeId,V,S)}Ee&&mn(g,null,S,"beforeMount");const De=(!P||P&&!P.pendingBranch)&&le&&!le.persisted;De&&le.beforeEnter(j),l(j,v,w),((M=Y&&Y.onVnodeMounted)||De||Ee)&&Ke(()=>{M&&At(M,S,g),De&&le.enter(j),Ee&&mn(g,null,S,"mounted")},P)},re=(g,v,w,S,P)=>{if(w&&m(g,w),S)for(let L=0;L<S.length;L++)m(g,S[L]);if(P){let L=P.subTree;if(v===L){const V=P.vnode;re(g,V,V.scopeId,V.slotScopeIds,P.parent)}}},ue=(g,v,w,S,P,L,V,I,j=0)=>{for(let M=j;M<g.length;M++){const J=g[M]=I?nn(g[M]):Nt(g[M]);b(null,J,v,w,S,P,L,V,I)}},pe=(g,v,w,S,P,L,V)=>{const I=v.el=g.el;let{patchFlag:j,dynamicChildren:M,dirs:J}=v;j|=g.patchFlag&16;const Y=g.props||Oe,Q=v.props||Oe;let le;w&&gn(w,!1),(le=Q.onVnodeBeforeUpdate)&&At(le,w,v,g),J&&mn(v,g,w,"beforeUpdate"),w&&gn(w,!0);const ge=P&&v.type!=="foreignObject";if(M?me(g.dynamicChildren,M,I,w,S,ge,L):V||de(g,v,I,null,w,S,ge,L,!1),j>0){if(j&16)Te(I,v,Y,Q,w,S,P);else if(j&2&&Y.class!==Q.class&&o(I,"class",null,Q.class,P),j&4&&o(I,"style",Y.style,Q.style,P),j&8){const Ee=v.dynamicProps;for(let De=0;De<Ee.length;De++){const Se=Ee[De],Et=Y[Se],Nn=Q[Se];(Nn!==Et||Se==="value")&&o(I,Se,Et,Nn,P,g.children,w,S,R)}}j&1&&g.children!==v.children&&p(I,v.children)}else!V&&M==null&&Te(I,v,Y,Q,w,S,P);((le=Q.onVnodeUpdated)||J)&&Ke(()=>{le&&At(le,w,v,g),J&&mn(v,g,w,"updated")},S)},me=(g,v,w,S,P,L,V)=>{for(let I=0;I<v.length;I++){const j=g[I],M=v[I],J=j.el&&(j.type===Ce||!ys(j,M)||j.shapeFlag&70)?h(j.el):w;b(j,M,J,null,S,P,L,V,!0)}},Te=(g,v,w,S,P,L,V)=>{if(w!==S){for(const I in S){if(Cl(I))continue;const j=S[I],M=w[I];j!==M&&I!=="value"&&o(g,I,M,j,V,v.children,P,L,R)}if(w!==Oe)for(const I in w)!Cl(I)&&!(I in S)&&o(g,I,w[I],null,V,v.children,P,L,R);"value"in S&&o(g,"value",w.value,S.value)}},Ne=(g,v,w,S,P,L,V,I,j)=>{const M=v.el=g?g.el:i(""),J=v.anchor=g?g.anchor:i("");let{patchFlag:Y,dynamicChildren:Q,slotScopeIds:le}=v;le&&(I=I?I.concat(le):le),g==null?(l(M,w,S),l(J,w,S),ue(v.children,w,J,P,L,V,I,j)):Y>0&&Y&64&&Q&&g.dynamicChildren?(me(g.dynamicChildren,Q,w,P,L,V,I),(v.key!=null||P&&v===P.subTree)&&ea(g,v,!0)):de(g,v,w,J,P,L,V,I,j)},Ye=(g,v,w,S,P,L,V,I,j)=>{v.slotScopeIds=I,g==null?v.shapeFlag&512?P.ctx.activate(v,w,S,V,j):$e(v,w,S,P,L,V,j):te(g,v,j)},$e=(g,v,w,S,P,L,V)=>{const I=g.component=Oh(g,S,P);if(yu(g)&&(I.ctx.renderer=Pe),Ph(I),I.asyncDep){if(P&&P.registerDep(I,se),!g.el){const j=I.subTree=O(dn);x(null,j,v,w)}return}se(I,g,v,w,P,L,V)},te=(g,v,w)=>{const S=v.component=g.component;if(Wd(g,v,w))if(S.asyncDep&&!S.asyncResolved){ee(S,v,w);return}else S.next=v,Nd(S.update),S.update();else v.el=g.el,S.vnode=v},se=(g,v,w,S,P,L,V)=>{const I=()=>{if(g.isMounted){let{next:J,bu:Y,u:Q,parent:le,vnode:ge}=g,Ee=J,De;gn(g,!1),J?(J.el=ge.el,ee(g,J,V)):J=ge,Y&&Xn(Y),(De=J.props&&J.props.onVnodeBeforeUpdate)&&At(De,le,J,ge),gn(g,!0);const Se=vr(g),Et=g.subTree;g.subTree=Se,b(Et,Se,h(Et.el),Z(Et),g,P,L),J.el=Se.el,Ee===null&&Kd(g,Se.el),Q&&Ke(Q,P),(De=J.props&&J.props.onVnodeUpdated)&&Ke(()=>At(De,le,J,ge),P)}else{let J;const{el:Y,props:Q}=v,{bm:le,m:ge,parent:Ee}=g,De=Qn(v);if(gn(g,!1),le&&Xn(le),!De&&(J=Q&&Q.onVnodeBeforeMount)&&At(J,Ee,v),gn(g,!0),Y&&ie){const Se=()=>{g.subTree=vr(g),ie(Y,g.subTree,g,P,null)};De?v.type.__asyncLoader().then(()=>!g.isUnmounted&&Se()):Se()}else{const Se=g.subTree=vr(g);b(null,Se,w,S,g,P,L),v.el=Se.el}if(ge&&Ke(ge,P),!De&&(J=Q&&Q.onVnodeMounted)){const Se=v;Ke(()=>At(J,Ee,Se),P)}(v.shapeFlag&256||Ee&&Qn(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&g.a&&Ke(g.a,P),g.isMounted=!0,v=w=S=null}},j=g.effect=new Vo(I,()=>iu(M),g.scope),M=g.update=()=>j.run();M.id=g.uid,gn(g,!0),M()},ee=(g,v,w)=>{v.component=g;const S=g.vnode.props;g.vnode=v,g.next=null,dh(g,v.props,S,w),gh(g,v.children,w),is(),tr(void 0,g.update),cs()},de=(g,v,w,S,P,L,V,I,j=!1)=>{const M=g&&g.children,J=g?g.shapeFlag:0,Y=v.children,{patchFlag:Q,shapeFlag:le}=v;if(Q>0){if(Q&128){Je(M,Y,w,S,P,L,V,I,j);return}else if(Q&256){It(M,Y,w,S,P,L,V,I,j);return}}le&8?(J&16&&R(M,P,L),Y!==M&&p(w,Y)):J&16?le&16?Je(M,Y,w,S,P,L,V,I,j):R(M,P,L,!0):(J&8&&p(w,""),le&16&&ue(Y,w,S,P,L,V,I,j))},It=(g,v,w,S,P,L,V,I,j)=>{g=g||Zn,v=v||Zn;const M=g.length,J=v.length,Y=Math.min(M,J);let Q;for(Q=0;Q<Y;Q++){const le=v[Q]=j?nn(v[Q]):Nt(v[Q]);b(g[Q],le,w,null,P,L,V,I,j)}M>J?R(g,P,L,!0,!1,Y):ue(v,w,S,P,L,V,I,j,Y)},Je=(g,v,w,S,P,L,V,I,j)=>{let M=0;const J=v.length;let Y=g.length-1,Q=J-1;for(;M<=Y&&M<=Q;){const le=g[M],ge=v[M]=j?nn(v[M]):Nt(v[M]);if(ys(le,ge))b(le,ge,w,null,P,L,V,I,j);else break;M++}for(;M<=Y&&M<=Q;){const le=g[Y],ge=v[Q]=j?nn(v[Q]):Nt(v[Q]);if(ys(le,ge))b(le,ge,w,null,P,L,V,I,j);else break;Y--,Q--}if(M>Y){if(M<=Q){const le=Q+1,ge=le<J?v[le].el:S;for(;M<=Q;)b(null,v[M]=j?nn(v[M]):Nt(v[M]),w,ge,P,L,V,I,j),M++}}else if(M>Q)for(;M<=Y;)lt(g[M],P,L,!0),M++;else{const le=M,ge=M,Ee=new Map;for(M=ge;M<=Q;M++){const ct=v[M]=j?nn(v[M]):Nt(v[M]);ct.key!=null&&Ee.set(ct.key,M)}let De,Se=0;const Et=Q-ge+1;let Nn=!1,Pa=0;const gs=new Array(Et);for(M=0;M<Et;M++)gs[M]=0;for(M=le;M<=Y;M++){const ct=g[M];if(Se>=Et){lt(ct,P,L,!0);continue}let Lt;if(ct.key!=null)Lt=Ee.get(ct.key);else for(De=ge;De<=Q;De++)if(gs[De-ge]===0&&ys(ct,v[De])){Lt=De;break}Lt===void 0?lt(ct,P,L,!0):(gs[Lt-ge]=M+1,Lt>=Pa?Pa=Lt:Nn=!0,b(ct,v[Lt],w,null,P,L,V,I,j),Se++)}const Sa=Nn?Ah(gs):Zn;for(De=Sa.length-1,M=Et-1;M>=0;M--){const ct=ge+M,Lt=v[ct],Ma=ct+1<J?v[ct+1].el:S;gs[M]===0?b(null,Lt,w,Ma,P,L,V,I,j):Nn&&(De<0||M!==Sa[De]?bt(Lt,w,Ma,2):De--)}}},bt=(g,v,w,S,P=null)=>{const{el:L,type:V,transition:I,children:j,shapeFlag:M}=g;if(M&6){bt(g.component.subTree,v,w,S);return}if(M&128){g.suspense.move(v,w,S);return}if(M&64){V.move(g,v,w,Pe);return}if(V===Ce){l(L,v,w);for(let Y=0;Y<j.length;Y++)bt(j[Y],v,w,S);l(g.anchor,v,w);return}if(V===Ar){E(g,v,w);return}if(S!==2&&M&1&&I)if(S===0)I.beforeEnter(L),l(L,v,w),Ke(()=>I.enter(L),P);else{const{leave:Y,delayLeave:Q,afterLeave:le}=I,ge=()=>l(L,v,w),Ee=()=>{Y(L,()=>{ge(),le&&le()})};Q?Q(L,ge,Ee):Ee()}else l(L,v,w)},lt=(g,v,w,S=!1,P=!1)=>{const{type:L,props:V,ref:I,children:j,dynamicChildren:M,shapeFlag:J,patchFlag:Y,dirs:Q}=g;if(I!=null&&no(I,null,w,g,!0),J&256){v.ctx.deactivate(g);return}const le=J&1&&Q,ge=!Qn(g);let Ee;if(ge&&(Ee=V&&V.onVnodeBeforeUnmount)&&At(Ee,v,g),J&6)K(g.component,w,S);else{if(J&128){g.suspense.unmount(w,S);return}le&&mn(g,null,v,"beforeUnmount"),J&64?g.type.remove(g,v,w,P,Pe,S):M&&(L!==Ce||Y>0&&Y&64)?R(M,v,w,!1,!0):(L===Ce&&Y&384||!P&&J&16)&&R(j,v,w),S&&Ln(g)}(ge&&(Ee=V&&V.onVnodeUnmounted)||le)&&Ke(()=>{Ee&&At(Ee,v,g),le&&mn(g,null,v,"unmounted")},w)},Ln=g=>{const{type:v,el:w,anchor:S,transition:P}=g;if(v===Ce){B(w,S);return}if(v===Ar){N(g);return}const L=()=>{r(w),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(g.shapeFlag&1&&P&&!P.persisted){const{leave:V,delayLeave:I}=P,j=()=>V(w,L);I?I(g.el,L,j):j()}else L()},B=(g,v)=>{let w;for(;g!==v;)w=d(g),r(g),g=w;r(v)},K=(g,v,w)=>{const{bum:S,scope:P,update:L,subTree:V,um:I}=g;S&&Xn(S),P.stop(),L&&(L.active=!1,lt(V,g,v,w)),I&&Ke(I,v),Ke(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},R=(g,v,w,S=!1,P=!1,L=0)=>{for(let V=L;V<g.length;V++)lt(g[V],v,w,S,P)},Z=g=>g.shapeFlag&6?Z(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),ve=(g,v,w)=>{g==null?v._vnode&&lt(v._vnode,null,null,!0):b(v._vnode||null,g,v,null,null,null,w),fu(),v._vnode=g},Pe={p:b,um:lt,m:bt,r:Ln,mt:$e,mc:ue,pc:de,pbc:me,n:Z,o:e};let fe,ie;return t&&([fe,ie]=t(Pe)),{render:ve,hydrate:fe,createApp:vh(ve,fe)}}function gn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ea(e,t,n=!1){const l=e.children,r=t.children;if(ne(l)&&ne(r))for(let o=0;o<l.length;o++){const a=l[o];let i=r[o];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=r[o]=nn(r[o]),i.el=a.el),n||ea(a,i))}}function Ah(e){const t=e.slice(),n=[0];let l,r,o,a,i;const c=e.length;for(l=0;l<c;l++){const f=e[l];if(f!==0){if(r=n[n.length-1],e[r]<f){t[l]=r,n.push(l);continue}for(o=0,a=n.length-1;o<a;)i=o+a>>1,e[n[i]]<f?o=i+1:a=i;f<e[n[o]]&&(o>0&&(t[l]=n[o-1]),n[o]=l)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=t[a];return n}const wh=e=>e.__isTeleport,Ps=e=>e&&(e.disabled||e.disabled===""),ei=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,so=(e,t)=>{const n=e&&e.to;return Le(n)?t?t(n):null:n},xh={__isTeleport:!0,process(e,t,n,l,r,o,a,i,c,f){const{mc:p,pc:h,pbc:d,o:{insert:m,querySelector:y,createText:A,createComment:b}}=f,$=Ps(t.props);let{shapeFlag:x,children:k,dynamicChildren:E}=t;if(e==null){const N=t.el=A(""),T=t.anchor=A("");m(N,n,l),m(T,n,l);const W=t.target=so(t.props,y),re=t.targetAnchor=A("");W&&(m(re,W),a=a||ei(W));const ue=(pe,me)=>{x&16&&p(k,pe,me,r,o,a,i,c)};$?ue(n,T):W&&ue(W,re)}else{t.el=e.el;const N=t.anchor=e.anchor,T=t.target=e.target,W=t.targetAnchor=e.targetAnchor,re=Ps(e.props),ue=re?n:T,pe=re?N:W;if(a=a||ei(T),E?(d(e.dynamicChildren,E,ue,r,o,a,i),ea(e,t,!0)):c||h(e,t,ue,pe,r,o,a,i,!1),$)re||vl(t,n,N,f,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const me=t.target=so(t.props,y);me&&vl(t,me,null,f,0)}else re&&vl(t,T,W,f,1)}},remove(e,t,n,l,{um:r,o:{remove:o}},a){const{shapeFlag:i,children:c,anchor:f,targetAnchor:p,target:h,props:d}=e;if(h&&o(p),(a||!Ps(d))&&(o(f),i&16))for(let m=0;m<c.length;m++){const y=c[m];r(y,t,n,!0,!!y.dynamicChildren)}},move:vl,hydrate:Ch};function vl(e,t,n,{o:{insert:l},m:r},o=2){o===0&&l(e.targetAnchor,t,n);const{el:a,anchor:i,shapeFlag:c,children:f,props:p}=e,h=o===2;if(h&&l(a,t,n),(!h||Ps(p))&&c&16)for(let d=0;d<f.length;d++)r(f[d],t,n,2);h&&l(i,t,n)}function Ch(e,t,n,l,r,o,{o:{nextSibling:a,parentNode:i,querySelector:c}},f){const p=t.target=so(t.props,c);if(p){const h=p._lpa||p.firstChild;if(t.shapeFlag&16)if(Ps(t.props))t.anchor=f(a(e),t,i(e),n,l,r,o),t.targetAnchor=h;else{t.anchor=a(e);let d=h;for(;d;)if(d=a(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,p._lpa=t.targetAnchor&&a(t.targetAnchor);break}f(h,t,p,n,l,r,o)}}return t.anchor&&a(t.anchor)}const kh=xh,Ce=Symbol(void 0),ta=Symbol(void 0),dn=Symbol(void 0),Ar=Symbol(void 0),Ss=[];let Pt=null;function C(e=!1){Ss.push(Pt=e?null:[])}function $h(){Ss.pop(),Pt=Ss[Ss.length-1]||null}let Ys=1;function ti(e){Ys+=e}function Su(e){return e.dynamicChildren=Ys>0?Pt||Zn:null,$h(),Ys>0&&Pt&&Pt.push(e),e}function U(e,t,n,l,r,o){return Su(s(e,t,n,l,r,o,!0))}function X(e,t,n,l,r){return Su(O(e,t,n,l,r,!0))}function ss(e){return e?e.__v_isVNode===!0:!1}function ys(e,t){return e.type===t.type&&e.key===t.key}const ar="__vInternal",Mu=({key:e})=>e!=null?e:null,kl=({ref:e,ref_key:t,ref_for:n})=>e!=null?Le(e)||be(e)||ae(e)?{i:Ze,r:e,k:t,f:!!n}:e:null;function s(e,t=null,n=null,l=0,r=null,o=e===Ce?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Mu(t),ref:t&&kl(t),scopeId:sr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:l,dynamicProps:r,dynamicChildren:null,appContext:null};return i?(na(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=Le(n)?8:16),Ys>0&&!a&&Pt&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Pt.push(c),c}const O=Eh;function Eh(e,t=null,n=null,l=0,r=null,o=!1){if((!e||e===lh)&&(e=dn),ss(e)){const i=Mn(e,t,!0);return n&&na(i,n),Ys>0&&!o&&Pt&&(i.shapeFlag&6?Pt[Pt.indexOf(e)]=i:Pt.push(i)),i.patchFlag|=-2,i}if(Fh(e)&&(e=e.__vccOpts),t){t=xe(t);let{class:i,style:c}=t;i&&!Le(i)&&(t.class=Fe(i)),Ue(c)&&(lu(c)&&!ne(c)&&(c=st({},c)),t.style=We(c))}const a=Le(e)?1:hu(e)?128:wh(e)?64:Ue(e)?4:ae(e)?2:0;return s(e,t,n,l,r,a,o,!0)}function xe(e){return e?lu(e)||ar in e?st({},e):e:null}function Mn(e,t,n=!1){const{props:l,ref:r,patchFlag:o,children:a}=e,i=t?Ie(l||{},t):l;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&Mu(i),ref:t&&t.ref?n&&r?ne(r)?r.concat(kl(t)):[r,kl(t)]:kl(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mn(e.ssContent),ssFallback:e.ssFallback&&Mn(e.ssFallback),el:e.el,anchor:e.anchor}}function u(e=" ",t=0){return O(ta,null,e,t)}function q(e="",t=!1){return t?(C(),X(dn,null,e)):O(dn,null,e)}function Nt(e){return e==null||typeof e=="boolean"?O(dn):ne(e)?O(Ce,null,e.slice()):typeof e=="object"?nn(e):O(ta,null,String(e))}function nn(e){return e.el===null||e.memo?e:Mn(e)}function na(e,t){let n=0;const{shapeFlag:l}=e;if(t==null)t=null;else if(ne(t))n=16;else if(typeof t=="object")if(l&65){const r=t.default;r&&(r._c&&(r._d=!1),na(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(ar in t)?t._ctx=Ze:r===3&&Ze&&(Ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ae(t)?(t={default:t,_ctx:Ze},n=32):(t=String(t),l&64?(n=16,t=[u(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ie(...e){const t={};for(let n=0;n<e.length;n++){const l=e[n];for(const r in l)if(r==="class")t.class!==l.class&&(t.class=Fe([t.class,l.class]));else if(r==="style")t.style=We([t.style,l.style]);else if(Yl(r)){const o=t[r],a=l[r];a&&o!==a&&!(ne(o)&&o.includes(a))&&(t[r]=o?[].concat(o,a):a)}else r!==""&&(t[r]=l[r])}return t}function At(e,t,n,l=null){Mt(e,t,7,[n,l])}const Dh=Pu();let Bh=0;function Oh(e,t,n){const l=e.type,r=(t?t.appContext:e.appContext)||Dh,o={uid:Bh++,vnode:e,type:l,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new qc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Eu(l,r),emitsOptions:du(l,r),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:l.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Vd.bind(null,o),e.ce&&e.ce(o),o}let ze=null;const Fn=()=>ze||Ze,ls=e=>{ze=e,e.scope.on()},Bn=()=>{ze&&ze.scope.off(),ze=null};function Tu(e){return e.vnode.shapeFlag&4}let Zs=!1;function Ph(e,t=!1){Zs=t;const{props:n,children:l}=e.vnode,r=Tu(e);ph(e,n,r,t),mh(e,l);const o=r?Sh(e,t):void 0;return Zs=!1,o}function Sh(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ql(new Proxy(e.ctx,oh));const{setup:l}=n;if(l){const r=e.setupContext=l.length>1?Th(e):null;ls(e),is();const o=on(l,e,0,[e.props,r]);if(cs(),Bn(),zc(o)){if(o.then(Bn,Bn),t)return o.then(a=>{ni(e,a,t)}).catch(a=>{er(a,e,0)});e.asyncDep=o}else ni(e,o,t)}else Fu(e,t)}function ni(e,t,n){ae(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ue(t)&&(e.setupState=ou(t)),Fu(e,n)}let si;function Fu(e,t,n){const l=e.type;if(!e.render){if(!t&&si&&!l.render){const r=l.template;if(r){const{isCustomElement:o,compilerOptions:a}=e.appContext.config,{delimiters:i,compilerOptions:c}=l,f=st(st({isCustomElement:o,delimiters:i},a),c);l.render=si(r,f)}}e.render=l.render||St}ls(e),is(),ah(e),cs(),Bn()}function Mh(e){return new Proxy(e.attrs,{get(t,n){return vt(e,"get","$attrs"),t[n]}})}function Th(e){const t=l=>{e.exposed=l||{}};let n;return{get attrs(){return n||(n=Mh(e))},slots:e.slots,emit:e.emit,expose:t}}function ir(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ou(Ql(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Fl)return Fl[n](e)}}))}function lo(e){return ae(e)&&e.displayName||e.name}function Fh(e){return ae(e)&&"__vccOpts"in e}const D=(e,t)=>Rd(e,t,Zs);function Tt(e,t,n){const l=arguments.length;return l===2?Ue(t)&&!ne(t)?ss(t)?O(e,null,[t]):O(e,t):O(e,null,t):(l>3?n=Array.prototype.slice.call(arguments,2):l===3&&ss(n)&&(n=[n]),O(e,t,n))}const Rh="3.2.36",Ih="http://www.w3.org/2000/svg",An=typeof document!="undefined"?document:null,li=An&&An.createElement("template"),Lh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,l)=>{const r=t?An.createElementNS(Ih,e):An.createElement(e,n?{is:n}:void 0);return e==="select"&&l&&l.multiple!=null&&r.setAttribute("multiple",l.multiple),r},createText:e=>An.createTextNode(e),createComment:e=>An.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>An.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,l,r,o){const a=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{li.innerHTML=l?`<svg>${e}</svg>`:e;const i=li.content;if(l){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Nh(e,t,n){const l=e._vtc;l&&(t=(t?[t,...l]:[...l]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function jh(e,t,n){const l=e.style,r=Le(n);if(n&&!r){for(const o in n)ro(l,o,n[o]);if(t&&!Le(t))for(const o in t)n[o]==null&&ro(l,o,"")}else{const o=l.display;r?t!==n&&(l.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(l.display=o)}}const ri=/\s*!important$/;function ro(e,t,n){if(ne(n))n.forEach(l=>ro(e,t,l));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const l=Hh(e,t);ri.test(n)?e.setProperty(Tn(l),n.replace(ri,""),"important"):e[l]=n}}const oi=["Webkit","Moz","ms"],wr={};function Hh(e,t){const n=wr[t];if(n)return n;let l=Ut(t);if(l!=="filter"&&l in e)return wr[t]=l;l=Xl(l);for(let r=0;r<oi.length;r++){const o=oi[r]+l;if(o in e)return wr[t]=o}return t}const ai="http://www.w3.org/1999/xlink";function Vh(e,t,n,l,r){if(l&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ai,t.slice(6,t.length)):e.setAttributeNS(ai,t,n);else{const o=Hp(t);n==null||o&&!Hc(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function Uh(e,t,n,l,r,o,a){if(t==="innerHTML"||t==="textContent"){l&&a(l,r,o),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let i=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Hc(n):n==null&&c==="string"?(n="",i=!0):c==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(t)}const[Ru,zh]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let oo=0;const Wh=Promise.resolve(),Kh=()=>{oo=0},qh=()=>oo||(Wh.then(Kh),oo=Ru());function Wn(e,t,n,l){e.addEventListener(t,n,l)}function Yh(e,t,n,l){e.removeEventListener(t,n,l)}function Zh(e,t,n,l,r=null){const o=e._vei||(e._vei={}),a=o[t];if(l&&a)a.value=l;else{const[i,c]=Gh(t);if(l){const f=o[t]=Xh(l,r);Wn(e,i,f,c)}else a&&(Yh(e,i,a,c),o[t]=void 0)}}const ii=/(?:Once|Passive|Capture)$/;function Gh(e){let t;if(ii.test(e)){t={};let n;for(;n=e.match(ii);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Tn(e.slice(2)),t]}function Xh(e,t){const n=l=>{const r=l.timeStamp||Ru();(zh||r>=n.attached-1)&&Mt(Jh(l,n.value),t,5,[l])};return n.value=e,n.attached=qh(),n}function Jh(e,t){if(ne(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(l=>r=>!r._stopped&&l&&l(r))}else return t}const ci=/^on[a-z]/,Qh=(e,t,n,l,r=!1,o,a,i,c)=>{t==="class"?Nh(e,l,r):t==="style"?jh(e,n,l):Yl(t)?Io(t)||Zh(e,t,n,l,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):em(e,t,l,r))?Uh(e,t,l,o,a,i,c):(t==="true-value"?e._trueValue=l:t==="false-value"&&(e._falseValue=l),Vh(e,t,l,r))};function em(e,t,n,l){return l?!!(t==="innerHTML"||t==="textContent"||t in e&&ci.test(t)&&ae(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ci.test(t)&&Le(n)?!1:t in e}const ui=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ne(t)?n=>Xn(t,n):t};function tm(e){e.target.composing=!0}function fi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const nm={created(e,{modifiers:{lazy:t,trim:n,number:l}},r){e._assign=ui(r);const o=l||r.props&&r.props.type==="number";Wn(e,t?"change":"input",a=>{if(a.target.composing)return;let i=e.value;n&&(i=i.trim()),o&&(i=zr(i)),e._assign(i)}),n&&Wn(e,"change",()=>{e.value=e.value.trim()}),t||(Wn(e,"compositionstart",tm),Wn(e,"compositionend",fi),Wn(e,"change",fi))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:l,number:r}},o){if(e._assign=ui(o),e.composing||document.activeElement===e&&e.type!=="range"&&(n||l&&e.value.trim()===t||(r||e.type==="number")&&zr(e.value)===t))return;const a=t==null?"":t;e.value!==a&&(e.value=a)}},sm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},pi=(e,t)=>n=>{if(!("key"in n))return;const l=Tn(n.key);if(t.some(r=>r===l||sm[r]===l))return e(n)},Iu={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):vs(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:l}){!t!=!n&&(l?t?(l.beforeEnter(e),vs(e,!0),l.enter(e)):l.leave(e,()=>{vs(e,!1)}):vs(e,t))},beforeUnmount(e,{value:t}){vs(e,t)}};function vs(e,t){e.style.display=t?e._vod:"none"}const lm=st({patchProp:Qh},Lh);let di;function rm(){return di||(di=_h(lm))}const om=(...e)=>{const t=rm().createApp(...e),{mount:n}=t;return t.mount=l=>{const r=am(l);if(!r)return;const o=t._component;!ae(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const a=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},t};function am(e){return Le(e)?document.querySelector(e):e}var im=Object.defineProperty,hi=Object.getOwnPropertySymbols,cm=Object.prototype.hasOwnProperty,um=Object.prototype.propertyIsEnumerable,mi=(e,t,n)=>t in e?im(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fm=(e,t)=>{for(var n in t||(t={}))cm.call(t,n)&&mi(e,n,t[n]);if(hi)for(var n of hi(t))um.call(t,n)&&mi(e,n,t[n]);return e},Lu="usehead",gi="head:count",xr="data-head-attrs",pm=(e,t,n)=>{const l=n.createElement(e);for(const r of Object.keys(t)){let o=t[r];r==="key"||o===!1||(r==="children"?l.textContent=o:l.setAttribute(r,o))}return l};function dm(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){const l=t.cloneNode(!0);return l.setAttribute("nonce",""),l.nonce=n,n===e.nonce&&e.isEqualNode(l)}}return e.isEqualNode(t)}var hm=e=>{const t=["key","id","name","property"];for(const n of t){const l=typeof e.getAttribute=="function"?e.hasAttribute(n)?e.getAttribute(n):void 0:e[n];if(l!==void 0)return{name:n,value:l}}},mm=()=>{const e=H(Lu);if(!e)throw new Error("You may forget to apply app.use(head)");return e},gm=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],ym=e=>{const t=[];for(const n of Object.keys(e))if(e[n]!=null){if(n==="title")t.push({tag:n,props:{children:e[n]}});else if(n==="base")t.push({tag:n,props:fm({key:"default"},e[n])});else if(gm.includes(n)){const l=e[n];Array.isArray(l)?l.forEach(r=>{t.push({tag:n,props:r})}):l&&t.push({tag:n,props:l})}}return t},yi=(e,t)=>{const n=e.getAttribute(xr);if(n)for(const r of n.split(","))r in t||e.removeAttribute(r);const l=[];for(const r in t){const o=t[r];o!=null&&(o===!1?e.removeAttribute(r):e.setAttribute(r,o),l.push(r))}l.length?e.setAttribute(xr,l.join(",")):e.removeAttribute(xr)},vm=(e=window.document,t,n)=>{var l;const r=e.head;let o=r.querySelector(`meta[name="${gi}"]`);const a=o?Number(o.getAttribute("content")):0,i=[];if(o)for(let f=0,p=o.previousElementSibling;f<a;f++,p=(p==null?void 0:p.previousElementSibling)||null)((l=p==null?void 0:p.tagName)==null?void 0:l.toLowerCase())===t&&i.push(p);else o=e.createElement("meta"),o.setAttribute("name",gi),o.setAttribute("content","0"),r.append(o);let c=n.map(f=>pm(f.tag,f.props,e));c=c.filter(f=>{for(let p=0;p<i.length;p++){const h=i[p];if(dm(h,f))return i.splice(p,1),!1}return!0}),i.forEach(f=>{var p;return(p=f.parentNode)==null?void 0:p.removeChild(f)}),c.forEach(f=>{r.insertBefore(f,o)}),o.setAttribute("content",""+(a-i.length+c.length))},_m=()=>{let e=[],t=new Set;const n={install(l){l.config.globalProperties.$head=n,l.provide(Lu,n)},get headTags(){const l=[];return e.forEach(r=>{ym(r.value).forEach(a=>{if(a.tag==="meta"||a.tag==="base"||a.tag==="script"){const i=hm(a.props);if(i){let c=-1;for(let f=0;f<l.length;f++){const p=l[f],h=p.props[i.name],d=a.props[i.name];if(p.tag===a.tag&&h===d){c=f;break}}c!==-1&&l.splice(c,1)}}l.push(a)})}),l},addHeadObjs(l){e.push(l)},removeHeadObjs(l){e=e.filter(r=>r!==l)},updateDOM(l=window.document){let r,o={},a={};const i={};for(const f of n.headTags){if(f.tag==="title"){r=f.props.children;continue}if(f.tag==="htmlAttrs"){Object.assign(o,f.props);continue}if(f.tag==="bodyAttrs"){Object.assign(a,f.props);continue}i[f.tag]=i[f.tag]||[],i[f.tag].push(f)}r!==void 0&&(l.title=r),yi(l.documentElement,o),yi(l.body,a);const c=new Set([...Object.keys(i),...t]);for(const f of c)vm(l,f,i[f]||[]);t.clear(),Object.keys(i).forEach(f=>t.add(f))}};return n},bm=typeof window!="undefined",Am=e=>{const t=z(e),n=mm();n.addHeadObjs(t),bm&&(rl(()=>{n.updateDOM()}),rr(()=>{n.removeHeadObjs(t),n.updateDOM()}))};const Ms=Symbol("v-click-clicks"),wn=Symbol("v-click-clicks-elements"),ao=Symbol("v-click-clicks-order-map"),Ts=Symbol("v-click-clicks-disabled"),Nu=Symbol("slidev-slide-scale"),G=Symbol("slidev-slidev-context"),wm=Symbol("slidev-route"),xm=Symbol("slidev-slide-context"),bn="slidev-vclick-target",Cr="slidev-vclick-hidden",Cm="slidev-vclick-fade",kr="slidev-vclick-hidden-explicitly",_s="slidev-vclick-current",_l="slidev-vclick-prior";function io(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function km(...e){let t,n,l;e.length===1?(t=0,l=1,[n]=e):[t,n,l=1]=e;const r=[];let o=t;for(;o<n;)r.push(o),o+=l||1;return r}function $m(e){return e!=null}function Em(e,t){return Object.fromEntries(Object.entries(e).map(([n,l])=>t(n,l)).filter($m))}var kn={theme:"seriph",title:"Welcome to Slidev",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",record:"dev",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center"};const we=kn;var Nc;const an=(Nc=we.aspectRatio)!=null?Nc:16/9;var jc;const On=(jc=we.canvasWidth)!=null?jc:980,ju=Math.round(On/an),Hu=D(()=>Em(we.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function $t(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Rn=Re({page:0,clicks:0});let Dm=[],Bm=[];$t(Rn,"$syncUp",!0);$t(Rn,"$syncDown",!0);$t(Rn,"$paused",!1);$t(Rn,"$onSet",e=>Dm.push(e));$t(Rn,"$onPatch",e=>Bm.push(e));$t(Rn,"$patch",async()=>!1);function Vu(e,t,n=!1){const l=[];let r=!1,o=!1,a,i;const c=Re(t);function f(m){l.push(m)}function p(m,y){clearTimeout(a),r=!0,c[m]=y,a=setTimeout(()=>r=!1,0)}function h(m){r||(clearTimeout(i),o=!0,Object.entries(m).forEach(([y,A])=>{c[y]=A}),i=setTimeout(()=>o=!1,0))}function d(m){let y;n?n&&window.addEventListener("storage",b=>{b&&b.key===m&&b.newValue&&h(JSON.parse(b.newValue))}):(y=new BroadcastChannel(m),y.addEventListener("message",b=>h(b.data)));function A(){!n&&y&&!o?y.postMessage(Ae(c)):n&&!o&&window.localStorage.setItem(m,JSON.stringify(c)),r||l.forEach(b=>b(c))}if(ce(c,A,{deep:!0}),n){const b=window.localStorage.getItem(m);b&&h(JSON.parse(b))}}return{init:d,onPatch:f,patch:p,state:c}}const{init:Om,onPatch:Pm,patch:vi,state:$r}=Vu(Rn,{page:1,clicks:0}),In=Re({});let Sm=[],Mm=[];$t(In,"$syncUp",!0);$t(In,"$syncDown",!0);$t(In,"$paused",!1);$t(In,"$onSet",e=>Sm.push(e));$t(In,"$onPatch",e=>Mm.push(e));$t(In,"$patch",async()=>!1);const{init:Tm,onPatch:Fm,patch:Uu,state:Il}=Vu(In,{},!1),Rm="modulepreload",_i={},Im="/redis_intro/",fs=function(t,n){return!n||n.length===0?t():Promise.all(n.map(l=>{if(l=`${Im}${l}`,l in _i)return;_i[l]=!0;const r=l.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${o}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":Rm,r||(a.as="script",a.crossOrigin=""),a.href=l,document.head.appendChild(a),r)return new Promise((i,c)=>{a.addEventListener("load",i),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())};function rt(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)}function Lm(e,t){if(Array.isArray(e)){e.splice(t,1);return}delete e[t]}function hn(e){return ed()?(td(e),!0):!1}function je(...e){return D(()=>e.every(t=>_(t)))}function ft(e){return D(()=>!_(e))}function Nm(e){if(!be(e))return Re(e);const t=new Proxy({},{get(n,l,r){return _(Reflect.get(e.value,l,r))},set(n,l,r){return be(e.value[l])&&!be(r)?e.value[l].value=r:e.value[l]=r,!0},deleteProperty(n,l){return Reflect.deleteProperty(e.value,l)},has(n,l){return Reflect.has(e.value,l)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Re(t)}var bi;const Ct=typeof window!="undefined",jm=e=>typeof e!="undefined",Hm=Object.prototype.toString,Vm=e=>typeof e=="number",zu=e=>typeof e=="string",Ll=e=>Hm.call(e)==="[object Object]",co=()=>+Date.now(),cn=()=>{};Ct&&((bi=window==null?void 0:window.navigator)==null?void 0:bi.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Um(e,t){function n(...l){e(()=>t.apply(this,l),{fn:t,thisArg:this,args:l})}return n}const Wu=e=>e();function zm(e=Wu){const t=z(!0);function n(){t.value=!1}function l(){t.value=!0}return{isActive:t,pause:n,resume:l,eventFilter:(...o)=>{t.value&&e(...o)}}}function Wm(e,t){var n;if(typeof e=="number")return e+t;const l=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",r=e.slice(l.length),o=parseFloat(l)+t;return Number.isNaN(o)?e:o+r}var Km=Object.defineProperty,qm=Object.defineProperties,Ym=Object.getOwnPropertyDescriptors,Ai=Object.getOwnPropertySymbols,Zm=Object.prototype.hasOwnProperty,Gm=Object.prototype.propertyIsEnumerable,wi=(e,t,n)=>t in e?Km(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xm=(e,t)=>{for(var n in t||(t={}))Zm.call(t,n)&&wi(e,n,t[n]);if(Ai)for(var n of Ai(t))Gm.call(t,n)&&wi(e,n,t[n]);return e},Jm=(e,t)=>qm(e,Ym(t));function Qm(e){if(!be(e))return Sd(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=Pd(()=>({get(){return e.value[n]},set(l){if(Array.isArray(e.value)){const r=[...e.value];r[n]=l,e.value=r}else{const r=Jm(Xm({},e.value),{[n]:l});Object.setPrototypeOf(r,e.value),e.value=r}}}));return t}function eg(e,t=!0){Fn()?bu(e):t?e():qe(e)}function tg(e,t=!0){Fn()?us(e):t?e():qe(e)}function sa(e){Fn()&&or(e)}function ng(e,t=1e3,n={}){const{immediate:l=!0,immediateCallback:r=!1}=n;let o=null;const a=z(!1);function i(){o&&(clearInterval(o),o=null)}function c(){a.value=!1,i()}function f(){_(t)<=0||(a.value=!0,r&&e(),i(),o=setInterval(e,_(t)))}if(l&&Ct&&f(),be(t)){const p=ce(t,()=>{l&&Ct&&f()});hn(p)}return hn(c),{isActive:a,pause:c,resume:f}}function Ku(e=!1,t={}){const{truthyValue:n=!0,falsyValue:l=!1}=t,r=be(e),o=z(e);function a(i){return arguments.length?(o.value=i,o.value):(o.value=o.value===_(n)?_(l):_(n),o.value)}return r?a:[o,a]}var xi=Object.getOwnPropertySymbols,sg=Object.prototype.hasOwnProperty,lg=Object.prototype.propertyIsEnumerable,rg=(e,t)=>{var n={};for(var l in e)sg.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&xi)for(var l of xi(e))t.indexOf(l)<0&&lg.call(e,l)&&(n[l]=e[l]);return n};function og(e,t,n={}){const l=n,{eventFilter:r=Wu}=l,o=rg(l,["eventFilter"]);return ce(e,Um(r,t),o)}function ag(e,t,n){const l=ce(e,(...r)=>(qe(()=>l()),t(...r)),n)}var ig=Object.defineProperty,cg=Object.defineProperties,ug=Object.getOwnPropertyDescriptors,Nl=Object.getOwnPropertySymbols,qu=Object.prototype.hasOwnProperty,Yu=Object.prototype.propertyIsEnumerable,Ci=(e,t,n)=>t in e?ig(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fg=(e,t)=>{for(var n in t||(t={}))qu.call(t,n)&&Ci(e,n,t[n]);if(Nl)for(var n of Nl(t))Yu.call(t,n)&&Ci(e,n,t[n]);return e},pg=(e,t)=>cg(e,ug(t)),dg=(e,t)=>{var n={};for(var l in e)qu.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&Nl)for(var l of Nl(e))t.indexOf(l)<0&&Yu.call(e,l)&&(n[l]=e[l]);return n};function hg(e,t,n={}){const l=n,{eventFilter:r}=l,o=dg(l,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:f}=zm(r);return{stop:og(e,t,pg(fg({},o),{eventFilter:a})),pause:i,resume:c,isActive:f}}function ot(e){var t;const n=_(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Xe=Ct?window:void 0,mg=Ct?window.document:void 0;function Me(...e){let t,n,l,r;if(zu(e[0])?([n,l,r]=e,t=Xe):[t,n,l,r]=e,!t)return cn;let o=cn;const a=ce(()=>ot(t),c=>{o(),c&&(c.addEventListener(n,l,r),o=()=>{c.removeEventListener(n,l,r),o=cn})},{immediate:!0,flush:"post"}),i=()=>{a(),o()};return hn(i),i}function gg(e,t,n={}){const{window:l=Xe,ignore:r,capture:o=!0}=n;if(!l)return;const a=z(!0);let i;const c=h=>{l.clearTimeout(i);const d=ot(e),m=h.composedPath();!d||d===h.target||m.includes(d)||!a.value||r&&r.length>0&&r.some(y=>{const A=ot(y);return A&&(h.target===A||m.includes(A))})||t(h)},f=[Me(l,"click",c,{passive:!0,capture:o}),Me(l,"pointerdown",h=>{const d=ot(e);a.value=!!d&&!h.composedPath().includes(d)},{passive:!0}),Me(l,"pointerup",h=>{i=l.setTimeout(()=>c(h),50)},{passive:!0})];return()=>f.forEach(h=>h())}const yg=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function vg(e,t,n={}){const{target:l=Xe,eventName:r="keydown",passive:o=!1}=n,a=yg(e);return Me(l,r,c=>{a(c)&&t(c)},o)}function _g(e={}){const{window:t=Xe}=e,n=z(0);return t&&(Me(t,"blur",()=>n.value+=1,!0),Me(t,"focus",()=>n.value+=1,!0)),D(()=>(n.value,t==null?void 0:t.document.activeElement))}function $l(e,t={}){const{window:n=Xe}=t,l=Boolean(n&&"matchMedia"in n);let r;const o=z(!1),a=()=>{!l||(r||(r=n.matchMedia(e)),o.value=r.matches)};return eg(()=>{a(),r&&("addEventListener"in r?r.addEventListener("change",a):r.addListener(a),hn(()=>{"removeEventListener"in r?r.removeEventListener("change",a):r.removeListener(a)}))}),o}const bg={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Ag=Object.defineProperty,ki=Object.getOwnPropertySymbols,wg=Object.prototype.hasOwnProperty,xg=Object.prototype.propertyIsEnumerable,$i=(e,t,n)=>t in e?Ag(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Cg=(e,t)=>{for(var n in t||(t={}))wg.call(t,n)&&$i(e,n,t[n]);if(ki)for(var n of ki(t))xg.call(t,n)&&$i(e,n,t[n]);return e};function kg(e,t={}){function n(i,c){let f=e[i];return c!=null&&(f=Wm(f,c)),typeof f=="number"&&(f=`${f}px`),f}const{window:l=Xe}=t;function r(i){return l?l.matchMedia(i).matches:!1}const o=i=>$l(`(min-width: ${n(i)})`,t),a=Object.keys(e).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>o(c),enumerable:!0,configurable:!0}),i),{});return Cg({greater:o,smaller(i){return $l(`(max-width: ${n(i,-.1)})`,t)},between(i,c){return $l(`(min-width: ${n(i)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(i){return r(`(min-width: ${n(i)})`)},isSmaller(i){return r(`(max-width: ${n(i,-.1)})`)},isInBetween(i,c){return r(`(min-width: ${n(i)}) and (max-width: ${n(c,-.1)})`)}},a)}const uo=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},fo="__vueuse_ssr_handlers__";uo[fo]=uo[fo]||{};const $g=uo[fo];function Eg(e,t){return $g[e]||t}function Dg(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const Bg={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Rt(e,t,n,l={}){var r;const{flush:o="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,shallow:f,window:p=Xe,eventFilter:h,onError:d=T=>{console.error(T)}}=l,m=(f?zt:z)(t);if(!n)try{n=Eg("getDefaultStorage",()=>{var T;return(T=Xe)==null?void 0:T.localStorage})()}catch(T){d(T)}if(!n)return m;const y=_(t),A=Dg(y),b=(r=l.serializer)!=null?r:Bg[A],{pause:$,resume:x}=hg(m,()=>k(m.value),{flush:o,deep:a,eventFilter:h});return p&&i&&Me(p,"storage",N),N(),m;function k(T){try{T==null?n.removeItem(e):n.setItem(e,b.write(T))}catch(W){d(W)}}function E(T){if(!(T&&T.key!==e)){$();try{const W=T?T.newValue:n.getItem(e);return W==null?(c&&y!==null&&n.setItem(e,b.write(y)),y):typeof W!="string"?W:b.read(W)}catch(W){d(W)}finally{x()}}}function N(T){T&&T.key!==e||(m.value=E(T))}}function Og(e){return $l("(prefers-color-scheme: dark)",e)}var Pg=Object.defineProperty,Sg=Object.defineProperties,Mg=Object.getOwnPropertyDescriptors,Ei=Object.getOwnPropertySymbols,Tg=Object.prototype.hasOwnProperty,Fg=Object.prototype.propertyIsEnumerable,Di=(e,t,n)=>t in e?Pg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rg=(e,t)=>{for(var n in t||(t={}))Tg.call(t,n)&&Di(e,n,t[n]);if(Ei)for(var n of Ei(t))Fg.call(t,n)&&Di(e,n,t[n]);return e},Ig=(e,t)=>Sg(e,Mg(t));function nx(e,t={}){var n,l;const r=(n=t.draggingElement)!=null?n:Xe,o=z((l=t.initialValue)!=null?l:{x:0,y:0}),a=z(),i=d=>t.pointerTypes?t.pointerTypes.includes(d.pointerType):!0,c=d=>{_(t.preventDefault)&&d.preventDefault(),_(t.stopPropagation)&&d.stopPropagation()},f=d=>{var m;if(!i(d)||_(t.exact)&&d.target!==_(e))return;const y=_(e).getBoundingClientRect(),A={x:d.pageX-y.left,y:d.pageY-y.top};((m=t.onStart)==null?void 0:m.call(t,A,d))!==!1&&(a.value=A,c(d))},p=d=>{var m;!i(d)||!a.value||(o.value={x:d.pageX-a.value.x,y:d.pageY-a.value.y},(m=t.onMove)==null||m.call(t,o.value,d),c(d))},h=d=>{var m;!i(d)||!a.value||(a.value=void 0,(m=t.onEnd)==null||m.call(t,o.value,d),c(d))};return Ct&&(Me(e,"pointerdown",f,!0),Me(r,"pointermove",p,!0),Me(r,"pointerup",h,!0)),Ig(Rg({},Qm(o)),{position:o,isDragging:D(()=>!!a.value),style:D(()=>`left:${o.value.x}px;top:${o.value.y}px;`)})}var Bi=Object.getOwnPropertySymbols,Lg=Object.prototype.hasOwnProperty,Ng=Object.prototype.propertyIsEnumerable,jg=(e,t)=>{var n={};for(var l in e)Lg.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&Bi)for(var l of Bi(e))t.indexOf(l)<0&&Ng.call(e,l)&&(n[l]=e[l]);return n};function Hg(e,t,n={}){const l=n,{window:r=Xe}=l,o=jg(l,["window"]);let a;const i=r&&"ResizeObserver"in r,c=()=>{a&&(a.disconnect(),a=void 0)},f=ce(()=>ot(e),h=>{c(),i&&r&&h&&(a=new ResizeObserver(t),a.observe(h,o))},{immediate:!0,flush:"post"}),p=()=>{c(),f()};return hn(p),{isSupported:i,stop:p}}function Zu(e,t={}){const{immediate:n=!0,window:l=Xe}=t,r=z(!1);let o=null;function a(){!r.value||!l||(e(),o=l.requestAnimationFrame(a))}function i(){!r.value&&l&&(r.value=!0,a())}function c(){r.value=!1,o!=null&&l&&(l.cancelAnimationFrame(o),o=null)}return n&&i(),hn(c),{isActive:r,pause:c,resume:i}}function Vg(e,t={width:0,height:0},n={}){const l=z(t.width),r=z(t.height);return Hg(e,([o])=>{l.value=o.contentRect.width,r.value=o.contentRect.height},n),ce(()=>ot(e),o=>{l.value=o?t.width:0,r.value=o?t.height:0}),{width:l,height:r}}const Oi=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Ug(e,t={}){const{document:n=mg,autoExit:l=!1}=t,r=e||(n==null?void 0:n.querySelector("html")),o=z(!1);let a=!1,i=Oi[0];if(!n)a=!1;else for(const A of Oi)if(A[1]in n){i=A,a=!0;break}const[c,f,p,,h]=i;async function d(){!a||(n!=null&&n[p]&&await n[f](),o.value=!1)}async function m(){if(!a)return;await d();const A=ot(r);A&&(await A[c](),o.value=!0)}async function y(){o.value?await d():await m()}return n&&Me(n,h,()=>{o.value=!!(n!=null&&n[p])},!1),l&&hn(d),{isSupported:a,isFullscreen:o,enter:m,exit:d,toggle:y}}function zg(e,t,n={}){const{root:l,rootMargin:r="0px",threshold:o=.1,window:a=Xe}=n,i=a&&"IntersectionObserver"in a;let c=cn;const f=i?ce(()=>({el:ot(e),root:ot(l)}),({el:h,root:d})=>{if(c(),!h)return;const m=new IntersectionObserver(t,{root:d,rootMargin:r,threshold:o});m.observe(h),c=()=>{m.disconnect(),c=cn}},{immediate:!0,flush:"post"}):cn,p=()=>{c(),f()};return hn(p),{isSupported:i,stop:p}}const Wg={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Kg(e={}){const{reactive:t=!1,target:n=Xe,aliasMap:l=Wg,passive:r=!0,onEventFired:o=cn}=e,a=Re(new Set),i={toJSON(){return{}},current:a},c=t?Re(i):i,f=new Set;function p(m,y){m in c&&(t?c[m]=y:c[m].value=y)}function h(m,y){var A,b;const $=(A=m.key)==null?void 0:A.toLowerCase(),x=(b=m.code)==null?void 0:b.toLowerCase(),k=[x,$].filter(Boolean);x&&(y?a.add(m.code):a.delete(m.code));for(const E of k)p(E,y);$==="meta"&&!y?(f.forEach(E=>{a.delete(E),p(E,!1)}),f.clear()):m.getModifierState("Meta")&&y&&[...a,...k].forEach(E=>f.add(E))}n&&(Me(n,"keydown",m=>(h(m,!0),o(m)),{passive:r}),Me(n,"keyup",m=>(h(m,!1),o(m)),{passive:r}));const d=new Proxy(c,{get(m,y,A){if(typeof y!="string")return Reflect.get(m,y,A);if(y=y.toLowerCase(),y in l&&(y=l[y]),!(y in c))if(/[+_-]/.test(y)){const $=y.split(/[+_-]/g).map(x=>x.trim());c[y]=D(()=>$.every(x=>_(d[x])))}else c[y]=z(!1);const b=Reflect.get(m,y,A);return t?_(b):b}});return d}function sx(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:l=!1,initialValue:r={x:0,y:0},window:o=Xe,eventFilter:a}=e,i=z(r.x),c=z(r.y),f=z(null),p=A=>{t==="page"?(i.value=A.pageX,c.value=A.pageY):t==="client"&&(i.value=A.clientX,c.value=A.clientY),f.value="mouse"},h=()=>{i.value=r.x,c.value=r.y},d=A=>{if(A.touches.length>0){const b=A.touches[0];t==="page"?(i.value=b.pageX,c.value=b.pageY):t==="client"&&(i.value=b.clientX,c.value=b.clientY),f.value="touch"}},m=A=>a===void 0?p(A):a(()=>p(A),{}),y=A=>a===void 0?d(A):a(()=>d(A),{});return o&&(Me(o,"mousemove",m,{passive:!0}),Me(o,"dragover",m,{passive:!0}),n&&(Me(o,"touchstart",y,{passive:!0}),Me(o,"touchmove",y,{passive:!0}),l&&Me(o,"touchend",h,{passive:!0}))),{x:i,y:c,sourceType:f}}var Yt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Yt||(Yt={}));function qg(e,t={}){const n=z(e),{threshold:l=50,onSwipe:r,onSwipeEnd:o,onSwipeStart:a}=t,i=Re({x:0,y:0}),c=(T,W)=>{i.x=T,i.y=W},f=Re({x:0,y:0}),p=(T,W)=>{f.x=T,f.y=W},h=D(()=>i.x-f.x),d=D(()=>i.y-f.y),{max:m,abs:y}=Math,A=D(()=>m(y(h.value),y(d.value))>=l),b=z(!1),$=z(!1),x=D(()=>A.value?y(h.value)>y(d.value)?h.value>0?Yt.LEFT:Yt.RIGHT:d.value>0?Yt.UP:Yt.DOWN:Yt.NONE),k=T=>t.pointerTypes?t.pointerTypes.includes(T.pointerType):!0,E=[Me(e,"pointerdown",T=>{var W,re;if(!k(T))return;$.value=!0,(re=(W=n.value)==null?void 0:W.style)==null||re.setProperty("touch-action","none");const ue=T.target;ue==null||ue.setPointerCapture(T.pointerId);const{clientX:pe,clientY:me}=T;c(pe,me),p(pe,me),a==null||a(T)}),Me(e,"pointermove",T=>{if(!k(T)||!$.value)return;const{clientX:W,clientY:re}=T;p(W,re),!b.value&&A.value&&(b.value=!0),b.value&&(r==null||r(T))}),Me(e,"pointerup",T=>{var W,re;!k(T)||(b.value&&(o==null||o(T,x.value)),$.value=!1,b.value=!1,(re=(W=n.value)==null?void 0:W.style)==null||re.setProperty("touch-action","initial"))})],N=()=>E.forEach(T=>T());return{isSwiping:qn(b),direction:qn(x),posStart:qn(i),posEnd:qn(f),distanceX:h,distanceY:d,stop:N}}var Yg=Object.defineProperty,Pi=Object.getOwnPropertySymbols,Zg=Object.prototype.hasOwnProperty,Gg=Object.prototype.propertyIsEnumerable,Si=(e,t,n)=>t in e?Yg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xg=(e,t)=>{for(var n in t||(t={}))Zg.call(t,n)&&Si(e,n,t[n]);if(Pi)for(var n of Pi(t))Gg.call(t,n)&&Si(e,n,t[n]);return e};function lx(e={}){const{controls:t=!1,offset:n=0,immediate:l=!0,interval:r="requestAnimationFrame"}=e,o=z(co()+n),a=()=>o.value=co()+n,i=r==="requestAnimationFrame"?Zu(a,{immediate:l}):ng(a,r,{immediate:l});return t?Xg({timestamp:o},i):o}function Ht(e,t,n,l={}){var r;const{passive:o=!1,eventName:a,deep:i=!1,defaultValue:c}=l,f=Fn(),p=n||(f==null?void 0:f.emit)||((r=f==null?void 0:f.$emit)==null?void 0:r.bind(f));let h=a;t||(t="modelValue"),h=a||h||`update:${t.toString()}`;const d=()=>jm(e[t])?e[t]:c;if(o){const m=z(d());return ce(()=>e[t],y=>m.value=y),ce(m,y=>{(y!==e[t]||i)&&p(h,y)},{deep:i}),m}else return D({get(){return d()},set(m){p(h,m)}})}function rx({window:e=Xe}={}){if(!e)return z(!1);const t=z(e.document.hasFocus());return Me(e,"blur",()=>{t.value=!1}),Me(e,"focus",()=>{t.value=!0}),t}function Jg({window:e=Xe,initialWidth:t=1/0,initialHeight:n=1/0}={}){const l=z(t),r=z(n),o=()=>{e&&(l.value=e.innerWidth,r.value=e.innerHeight)};return o(),tg(o),Me("resize",o,{passive:!0}),{width:l,height:r}}/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Gu=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ps=e=>Gu?Symbol(e):"_vr_"+e,Qg=ps("rvlm"),Mi=ps("rvd"),la=ps("r"),Xu=ps("rl"),po=ps("rvl"),Kn=typeof window!="undefined";function e1(e){return e.__esModule||Gu&&e[Symbol.toStringTag]==="Module"}const Be=Object.assign;function Er(e,t){const n={};for(const l in t){const r=t[l];n[l]=Array.isArray(r)?r.map(e):e(r)}return n}const Fs=()=>{},t1=/\/$/,n1=e=>e.replace(t1,"");function Dr(e,t,n="/"){let l,r={},o="",a="";const i=t.indexOf("?"),c=t.indexOf("#",i>-1?i:0);return i>-1&&(l=t.slice(0,i),o=t.slice(i+1,c>-1?c:t.length),r=e(o)),c>-1&&(l=l||t.slice(0,c),a=t.slice(c,t.length)),l=o1(l!=null?l:t,n),{fullPath:l+(o&&"?")+o+a,path:l,query:r,hash:a}}function s1(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ti(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function l1(e,t,n){const l=t.matched.length-1,r=n.matched.length-1;return l>-1&&l===r&&rs(t.matched[l],n.matched[r])&&Ju(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function rs(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ju(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!r1(e[n],t[n]))return!1;return!0}function r1(e,t){return Array.isArray(e)?Fi(e,t):Array.isArray(t)?Fi(t,e):e===t}function Fi(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,l)=>n===t[l]):e.length===1&&e[0]===t}function o1(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),l=e.split("/");let r=n.length-1,o,a;for(o=0;o<l.length;o++)if(a=l[o],!(r===1||a==="."))if(a==="..")r--;else break;return n.slice(0,r).join("/")+"/"+l.slice(o-(o===l.length?1:0)).join("/")}var Gs;(function(e){e.pop="pop",e.push="push"})(Gs||(Gs={}));var Rs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Rs||(Rs={}));function a1(e){if(!e)if(Kn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),n1(e)}const i1=/^[^#]+#/;function c1(e,t){return e.replace(i1,"#")+t}function u1(e,t){const n=document.documentElement.getBoundingClientRect(),l=e.getBoundingClientRect();return{behavior:t.behavior,left:l.left-n.left-(t.left||0),top:l.top-n.top-(t.top||0)}}const cr=()=>({left:window.pageXOffset,top:window.pageYOffset});function f1(e){let t;if("el"in e){const n=e.el,l=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?l?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=u1(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ri(e,t){return(history.state?history.state.position-t:-1)+e}const ho=new Map;function p1(e,t){ho.set(e,t)}function d1(e){const t=ho.get(e);return ho.delete(e),t}let h1=()=>location.protocol+"//"+location.host;function Qu(e,t){const{pathname:n,search:l,hash:r}=t,o=e.indexOf("#");if(o>-1){let i=r.includes(e.slice(o))?e.slice(o).length:1,c=r.slice(i);return c[0]!=="/"&&(c="/"+c),Ti(c,"")}return Ti(n,e)+l+r}function m1(e,t,n,l){let r=[],o=[],a=null;const i=({state:d})=>{const m=Qu(e,location),y=n.value,A=t.value;let b=0;if(d){if(n.value=m,t.value=d,a&&a===y){a=null;return}b=A?d.position-A.position:0}else l(m);r.forEach($=>{$(n.value,y,{delta:b,type:Gs.pop,direction:b?b>0?Rs.forward:Rs.back:Rs.unknown})})};function c(){a=n.value}function f(d){r.push(d);const m=()=>{const y=r.indexOf(d);y>-1&&r.splice(y,1)};return o.push(m),m}function p(){const{history:d}=window;!d.state||d.replaceState(Be({},d.state,{scroll:cr()}),"")}function h(){for(const d of o)d();o=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",p),{pauseListeners:c,listen:f,destroy:h}}function Ii(e,t,n,l=!1,r=!1){return{back:e,current:t,forward:n,replaced:l,position:window.history.length,scroll:r?cr():null}}function g1(e){const{history:t,location:n}=window,l={value:Qu(e,n)},r={value:t.state};r.value||o(l.value,{back:null,current:l.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,f,p){const h=e.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:h1()+e+c;try{t[p?"replaceState":"pushState"](f,"",d),r.value=f}catch(m){console.error(m),n[p?"replace":"assign"](d)}}function a(c,f){const p=Be({},t.state,Ii(r.value.back,c,r.value.forward,!0),f,{position:r.value.position});o(c,p,!0),l.value=c}function i(c,f){const p=Be({},r.value,t.state,{forward:c,scroll:cr()});o(p.current,p,!0);const h=Be({},Ii(l.value,c,null),{position:p.position+1},f);o(c,h,!1),l.value=c}return{location:l,state:r,push:i,replace:a}}function y1(e){e=a1(e);const t=g1(e),n=m1(e,t.state,t.location,t.replace);function l(o,a=!0){a||n.pauseListeners(),history.go(o)}const r=Be({location:"",base:e,go:l,createHref:c1.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function v1(e){return typeof e=="string"||e&&typeof e=="object"}function ef(e){return typeof e=="string"||typeof e=="symbol"}const Qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},tf=ps("nf");var Li;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Li||(Li={}));function os(e,t){return Be(new Error,{type:e,[tf]:!0},t)}function en(e,t){return e instanceof Error&&tf in e&&(t==null||!!(e.type&t))}const Ni="[^/]+?",_1={sensitive:!1,strict:!1,start:!0,end:!0},b1=/[.+*?^${}()[\]/\\]/g;function A1(e,t){const n=Be({},_1,t),l=[];let r=n.start?"^":"";const o=[];for(const f of e){const p=f.length?[]:[90];n.strict&&!f.length&&(r+="/");for(let h=0;h<f.length;h++){const d=f[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(b1,"\\$&"),m+=40;else if(d.type===1){const{value:y,repeatable:A,optional:b,regexp:$}=d;o.push({name:y,repeatable:A,optional:b});const x=$||Ni;if(x!==Ni){m+=10;try{new RegExp(`(${x})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${y}" (${x}): `+E.message)}}let k=A?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(k=b&&f.length<2?`(?:/${k})`:"/"+k),b&&(k+="?"),r+=k,m+=20,b&&(m+=-8),A&&(m+=-20),x===".*"&&(m+=-50)}p.push(m)}l.push(p)}if(n.strict&&n.end){const f=l.length-1;l[f][l[f].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function i(f){const p=f.match(a),h={};if(!p)return null;for(let d=1;d<p.length;d++){const m=p[d]||"",y=o[d-1];h[y.name]=m&&y.repeatable?m.split("/"):m}return h}function c(f){let p="",h=!1;for(const d of e){(!h||!p.endsWith("/"))&&(p+="/"),h=!1;for(const m of d)if(m.type===0)p+=m.value;else if(m.type===1){const{value:y,repeatable:A,optional:b}=m,$=y in f?f[y]:"";if(Array.isArray($)&&!A)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const x=Array.isArray($)?$.join("/"):$;if(!x)if(b)d.length<2&&e.length>1&&(p.endsWith("/")?p=p.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);p+=x}}return p}return{re:a,score:l,keys:o,parse:i,stringify:c}}function w1(e,t){let n=0;for(;n<e.length&&n<t.length;){const l=t[n]-e[n];if(l)return l;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function x1(e,t){let n=0;const l=e.score,r=t.score;for(;n<l.length&&n<r.length;){const o=w1(l[n],r[n]);if(o)return o;n++}return r.length-l.length}const C1={type:0,value:""},k1=/[a-zA-Z0-9_]/;function $1(e){if(!e)return[[]];if(e==="/")return[[C1]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${f}": ${m}`)}let n=0,l=n;const r=[];let o;function a(){o&&r.push(o),o=[]}let i=0,c,f="",p="";function h(){!f||(n===0?o.push({type:0,value:f}):n===1||n===2||n===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),f="")}function d(){f+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&n!==2){l=n,n=4;continue}switch(n){case 0:c==="/"?(f&&h(),a()):c===":"?(h(),n=1):d();break;case 4:d(),n=l;break;case 1:c==="("?n=2:k1.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:n=3:p+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,p="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),h(),a(),r}function E1(e,t,n){const l=A1($1(e.path),n),r=Be(l,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function D1(e,t){const n=[],l=new Map;t=Hi({strict:!1,end:!0,sensitive:!1},t);function r(p){return l.get(p)}function o(p,h,d){const m=!d,y=O1(p);y.aliasOf=d&&d.record;const A=Hi(t,p),b=[y];if("alias"in p){const k=typeof p.alias=="string"?[p.alias]:p.alias;for(const E of k)b.push(Be({},y,{components:d?d.record.components:y.components,path:E,aliasOf:d?d.record:y}))}let $,x;for(const k of b){const{path:E}=k;if(h&&E[0]!=="/"){const N=h.record.path,T=N[N.length-1]==="/"?"":"/";k.path=h.record.path+(E&&T+E)}if($=E1(k,h,A),d?d.alias.push($):(x=x||$,x!==$&&x.alias.push($),m&&p.name&&!ji($)&&a(p.name)),"children"in y){const N=y.children;for(let T=0;T<N.length;T++)o(N[T],$,d&&d.children[T])}d=d||$,c($)}return x?()=>{a(x)}:Fs}function a(p){if(ef(p)){const h=l.get(p);h&&(l.delete(p),n.splice(n.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=n.indexOf(p);h>-1&&(n.splice(h,1),p.record.name&&l.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function i(){return n}function c(p){let h=0;for(;h<n.length&&x1(p,n[h])>=0&&(p.record.path!==n[h].record.path||!nf(p,n[h]));)h++;n.splice(h,0,p),p.record.name&&!ji(p)&&l.set(p.record.name,p)}function f(p,h){let d,m={},y,A;if("name"in p&&p.name){if(d=l.get(p.name),!d)throw os(1,{location:p});A=d.record.name,m=Be(B1(h.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),p.params),y=d.stringify(m)}else if("path"in p)y=p.path,d=n.find(x=>x.re.test(y)),d&&(m=d.parse(y),A=d.record.name);else{if(d=h.name?l.get(h.name):n.find(x=>x.re.test(h.path)),!d)throw os(1,{location:p,currentLocation:h});A=d.record.name,m=Be({},h.params,p.params),y=d.stringify(m)}const b=[];let $=d;for(;$;)b.unshift($.record),$=$.parent;return{name:A,path:y,params:m,matched:b,meta:S1(b)}}return e.forEach(p=>o(p)),{addRoute:o,resolve:f,removeRoute:a,getRoutes:i,getRecordMatcher:r}}function B1(e,t){const n={};for(const l of t)l in e&&(n[l]=e[l]);return n}function O1(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:P1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function P1(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const l in e.components)t[l]=typeof n=="boolean"?n:n[l];return t}function ji(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function S1(e){return e.reduce((t,n)=>Be(t,n.meta),{})}function Hi(e,t){const n={};for(const l in e)n[l]=l in t?t[l]:e[l];return n}function nf(e,t){return t.children.some(n=>n===e||nf(e,n))}const sf=/#/g,M1=/&/g,T1=/\//g,F1=/=/g,R1=/\?/g,lf=/\+/g,I1=/%5B/g,L1=/%5D/g,rf=/%5E/g,N1=/%60/g,of=/%7B/g,j1=/%7C/g,af=/%7D/g,H1=/%20/g;function ra(e){return encodeURI(""+e).replace(j1,"|").replace(I1,"[").replace(L1,"]")}function V1(e){return ra(e).replace(of,"{").replace(af,"}").replace(rf,"^")}function mo(e){return ra(e).replace(lf,"%2B").replace(H1,"+").replace(sf,"%23").replace(M1,"%26").replace(N1,"`").replace(of,"{").replace(af,"}").replace(rf,"^")}function U1(e){return mo(e).replace(F1,"%3D")}function z1(e){return ra(e).replace(sf,"%23").replace(R1,"%3F")}function W1(e){return e==null?"":z1(e).replace(T1,"%2F")}function jl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function K1(e){const t={};if(e===""||e==="?")return t;const l=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<l.length;++r){const o=l[r].replace(lf," "),a=o.indexOf("="),i=jl(a<0?o:o.slice(0,a)),c=a<0?null:jl(o.slice(a+1));if(i in t){let f=t[i];Array.isArray(f)||(f=t[i]=[f]),f.push(c)}else t[i]=c}return t}function Vi(e){let t="";for(let n in e){const l=e[n];if(n=U1(n),l==null){l!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(l)?l.map(o=>o&&mo(o)):[l&&mo(l)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function q1(e){const t={};for(const n in e){const l=e[n];l!==void 0&&(t[n]=Array.isArray(l)?l.map(r=>r==null?null:""+r):l==null?l:""+l)}return t}function bs(){let e=[];function t(l){return e.push(l),()=>{const r=e.indexOf(l);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function sn(e,t,n,l,r){const o=l&&(l.enterCallbacks[r]=l.enterCallbacks[r]||[]);return()=>new Promise((a,i)=>{const c=h=>{h===!1?i(os(4,{from:n,to:t})):h instanceof Error?i(h):v1(h)?i(os(2,{from:t,to:h})):(o&&l.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},f=e.call(l&&l.instances[r],t,n,c);let p=Promise.resolve(f);e.length<3&&(p=p.then(c)),p.catch(h=>i(h))})}function Br(e,t,n,l){const r=[];for(const o of e)for(const a in o.components){let i=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Y1(i)){const f=(i.__vccOpts||i)[t];f&&r.push(sn(f,n,l,o,a))}else{let c=i();r.push(()=>c.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const p=e1(f)?f.default:f;o.components[a]=p;const d=(p.__vccOpts||p)[t];return d&&sn(d,n,l,o,a)()}))}}return r}function Y1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ui(e){const t=H(la),n=H(Xu),l=D(()=>t.resolve(_(e.to))),r=D(()=>{const{matched:c}=l.value,{length:f}=c,p=c[f-1],h=n.matched;if(!p||!h.length)return-1;const d=h.findIndex(rs.bind(null,p));if(d>-1)return d;const m=zi(c[f-2]);return f>1&&zi(p)===m&&h[h.length-1].path!==m?h.findIndex(rs.bind(null,c[f-2])):d}),o=D(()=>r.value>-1&&J1(n.params,l.value.params)),a=D(()=>r.value>-1&&r.value===n.matched.length-1&&Ju(n.params,l.value.params));function i(c={}){return X1(c)?t[_(e.replace)?"replace":"push"](_(e.to)).catch(Fs):Promise.resolve()}return{route:l,href:D(()=>l.value.href),isActive:o,isExactActive:a,navigate:i}}const Z1=ye({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ui,setup(e,{slots:t}){const n=Re(Ui(e)),{options:l}=H(la),r=D(()=>({[Wi(e.activeClass,l.linkActiveClass,"router-link-active")]:n.isActive,[Wi(e.exactActiveClass,l.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:Tt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),G1=Z1;function X1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function J1(e,t){for(const n in t){const l=t[n],r=e[n];if(typeof l=="string"){if(l!==r)return!1}else if(!Array.isArray(r)||r.length!==l.length||l.some((o,a)=>o!==r[a]))return!1}return!0}function zi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Wi=(e,t,n)=>e!=null?e:t!=null?t:n,Q1=ye({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const l=H(po),r=D(()=>e.route||l.value),o=H(Mi,0),a=D(()=>r.value.matched[o]);ht(Mi,o+1),ht(Qg,a),ht(po,r);const i=z();return ce(()=>[i.value,a.value,e.name],([c,f,p],[h,d,m])=>{f&&(f.instances[p]=c,d&&d!==f&&c&&c===h&&(f.leaveGuards.size||(f.leaveGuards=d.leaveGuards),f.updateGuards.size||(f.updateGuards=d.updateGuards))),c&&f&&(!d||!rs(f,d)||!h)&&(f.enterCallbacks[p]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,f=a.value,p=f&&f.components[e.name],h=e.name;if(!p)return Ki(n.default,{Component:p,route:c});const d=f.props[e.name],m=d?d===!0?c.params:typeof d=="function"?d(c):d:null,A=Tt(p,Be({},m,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(f.instances[h]=null)},ref:i}));return Ki(n.default,{Component:A,route:c})||A}}});function Ki(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ey=Q1;function ty(e){const t=D1(e.routes,e),n=e.parseQuery||K1,l=e.stringifyQuery||Vi,r=e.history,o=bs(),a=bs(),i=bs(),c=zt(Qt);let f=Qt;Kn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Er.bind(null,B=>""+B),h=Er.bind(null,W1),d=Er.bind(null,jl);function m(B,K){let R,Z;return ef(B)?(R=t.getRecordMatcher(B),Z=K):Z=B,t.addRoute(Z,R)}function y(B){const K=t.getRecordMatcher(B);K&&t.removeRoute(K)}function A(){return t.getRoutes().map(B=>B.record)}function b(B){return!!t.getRecordMatcher(B)}function $(B,K){if(K=Be({},K||c.value),typeof B=="string"){const ie=Dr(n,B,K.path),g=t.resolve({path:ie.path},K),v=r.createHref(ie.fullPath);return Be(ie,g,{params:d(g.params),hash:jl(ie.hash),redirectedFrom:void 0,href:v})}let R;if("path"in B)R=Be({},B,{path:Dr(n,B.path,K.path).path});else{const ie=Be({},B.params);for(const g in ie)ie[g]==null&&delete ie[g];R=Be({},B,{params:h(B.params)}),K.params=h(K.params)}const Z=t.resolve(R,K),ve=B.hash||"";Z.params=p(d(Z.params));const Pe=s1(l,Be({},B,{hash:V1(ve),path:Z.path})),fe=r.createHref(Pe);return Be({fullPath:Pe,hash:ve,query:l===Vi?q1(B.query):B.query||{}},Z,{redirectedFrom:void 0,href:fe})}function x(B){return typeof B=="string"?Dr(n,B,c.value.path):Be({},B)}function k(B,K){if(f!==B)return os(8,{from:K,to:B})}function E(B){return W(B)}function N(B){return E(Be(x(B),{replace:!0}))}function T(B){const K=B.matched[B.matched.length-1];if(K&&K.redirect){const{redirect:R}=K;let Z=typeof R=="function"?R(B):R;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=x(Z):{path:Z},Z.params={}),Be({query:B.query,hash:B.hash,params:B.params},Z)}}function W(B,K){const R=f=$(B),Z=c.value,ve=B.state,Pe=B.force,fe=B.replace===!0,ie=T(R);if(ie)return W(Be(x(ie),{state:ve,force:Pe,replace:fe}),K||R);const g=R;g.redirectedFrom=K;let v;return!Pe&&l1(l,Z,R)&&(v=os(16,{to:g,from:Z}),It(Z,Z,!0,!1)),(v?Promise.resolve(v):ue(g,Z)).catch(w=>en(w)?en(w,2)?w:de(w):se(w,g,Z)).then(w=>{if(w){if(en(w,2))return W(Be(x(w.to),{state:ve,force:Pe,replace:fe}),K||g)}else w=me(g,Z,!0,fe,ve);return pe(g,Z,w),w})}function re(B,K){const R=k(B,K);return R?Promise.reject(R):Promise.resolve()}function ue(B,K){let R;const[Z,ve,Pe]=ny(B,K);R=Br(Z.reverse(),"beforeRouteLeave",B,K);for(const ie of Z)ie.leaveGuards.forEach(g=>{R.push(sn(g,B,K))});const fe=re.bind(null,B,K);return R.push(fe),jn(R).then(()=>{R=[];for(const ie of o.list())R.push(sn(ie,B,K));return R.push(fe),jn(R)}).then(()=>{R=Br(ve,"beforeRouteUpdate",B,K);for(const ie of ve)ie.updateGuards.forEach(g=>{R.push(sn(g,B,K))});return R.push(fe),jn(R)}).then(()=>{R=[];for(const ie of B.matched)if(ie.beforeEnter&&!K.matched.includes(ie))if(Array.isArray(ie.beforeEnter))for(const g of ie.beforeEnter)R.push(sn(g,B,K));else R.push(sn(ie.beforeEnter,B,K));return R.push(fe),jn(R)}).then(()=>(B.matched.forEach(ie=>ie.enterCallbacks={}),R=Br(Pe,"beforeRouteEnter",B,K),R.push(fe),jn(R))).then(()=>{R=[];for(const ie of a.list())R.push(sn(ie,B,K));return R.push(fe),jn(R)}).catch(ie=>en(ie,8)?ie:Promise.reject(ie))}function pe(B,K,R){for(const Z of i.list())Z(B,K,R)}function me(B,K,R,Z,ve){const Pe=k(B,K);if(Pe)return Pe;const fe=K===Qt,ie=Kn?history.state:{};R&&(Z||fe?r.replace(B.fullPath,Be({scroll:fe&&ie&&ie.scroll},ve)):r.push(B.fullPath,ve)),c.value=B,It(B,K,R,fe),de()}let Te;function Ne(){Te||(Te=r.listen((B,K,R)=>{const Z=$(B),ve=T(Z);if(ve){W(Be(ve,{replace:!0}),Z).catch(Fs);return}f=Z;const Pe=c.value;Kn&&p1(Ri(Pe.fullPath,R.delta),cr()),ue(Z,Pe).catch(fe=>en(fe,12)?fe:en(fe,2)?(W(fe.to,Z).then(ie=>{en(ie,20)&&!R.delta&&R.type===Gs.pop&&r.go(-1,!1)}).catch(Fs),Promise.reject()):(R.delta&&r.go(-R.delta,!1),se(fe,Z,Pe))).then(fe=>{fe=fe||me(Z,Pe,!1),fe&&(R.delta?r.go(-R.delta,!1):R.type===Gs.pop&&en(fe,20)&&r.go(-1,!1)),pe(Z,Pe,fe)}).catch(Fs)}))}let Ye=bs(),$e=bs(),te;function se(B,K,R){de(B);const Z=$e.list();return Z.length?Z.forEach(ve=>ve(B,K,R)):console.error(B),Promise.reject(B)}function ee(){return te&&c.value!==Qt?Promise.resolve():new Promise((B,K)=>{Ye.add([B,K])})}function de(B){return te||(te=!B,Ne(),Ye.list().forEach(([K,R])=>B?R(B):K()),Ye.reset()),B}function It(B,K,R,Z){const{scrollBehavior:ve}=e;if(!Kn||!ve)return Promise.resolve();const Pe=!R&&d1(Ri(B.fullPath,0))||(Z||!R)&&history.state&&history.state.scroll||null;return qe().then(()=>ve(B,K,Pe)).then(fe=>fe&&f1(fe)).catch(fe=>se(fe,B,K))}const Je=B=>r.go(B);let bt;const lt=new Set;return{currentRoute:c,addRoute:m,removeRoute:y,hasRoute:b,getRoutes:A,resolve:$,options:e,push:E,replace:N,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:o.add,beforeResolve:a.add,afterEach:i.add,onError:$e.add,isReady:ee,install(B){const K=this;B.component("RouterLink",G1),B.component("RouterView",ey),B.config.globalProperties.$router=K,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>_(c)}),Kn&&!bt&&c.value===Qt&&(bt=!0,E(r.location).catch(ve=>{}));const R={};for(const ve in Qt)R[ve]=D(()=>c.value[ve]);B.provide(la,K),B.provide(Xu,Re(R)),B.provide(po,c);const Z=B.unmount;lt.add(B),B.unmount=function(){lt.delete(B),lt.size<1&&(f=Qt,Te&&Te(),Te=null,c.value=Qt,bt=!1,te=!1),Z()}}}}function jn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function ny(e,t){const n=[],l=[],r=[],o=Math.max(t.matched.length,e.matched.length);for(let a=0;a<o;a++){const i=t.matched[a];i&&(e.matched.find(f=>rs(f,i))?l.push(i):n.push(i));const c=e.matched[a];c&&(t.matched.find(f=>rs(f,c))||r.push(c))}return[n,l,r]}const Or=z(!1),Is=z(!1),Yn=z(!1),sy=z(!0),go=kg(_e({xs:460},bg)),Pn=Jg(),cf=Kg(),ly=D(()=>Pn.height.value-Pn.width.value/an>180),uf=Ug(Ct?document.body:null),es=_g(),ry=D(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=es.value)==null?void 0:e.tagName)||"")||((t=es.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),oy=D(()=>{var e;return["BUTTON","A"].includes(((e=es.value)==null?void 0:e.tagName)||"")});Rt("slidev-camera","default");Rt("slidev-mic","default");const El=Rt("slidev-scale",0),tt=Rt("slidev-show-overview",!1),Pr=Rt("slidev-presenter-cursor",!0),qi=Rt("slidev-show-editor",!1);Rt("slidev-editor-width",Ct?window.innerWidth*.4:100);const ff=Ku(tt);function Yi(e,t,n,l=r=>r){return e*l(.5-t*(.5-n))}function ay(e){return[-e[0],-e[1]]}function Bt(e,t){return[e[0]+t[0],e[1]+t[1]]}function xt(e,t){return[e[0]-t[0],e[1]-t[1]]}function Dt(e,t){return[e[0]*t,e[1]*t]}function iy(e,t){return[e[0]/t,e[1]/t]}function As(e){return[e[1],-e[0]]}function cy(e,t){return e[0]*t[0]+e[1]*t[1]}function uy(e,t){return e[0]===t[0]&&e[1]===t[1]}function fy(e){return Math.hypot(e[0],e[1])}function py(e){return e[0]*e[0]+e[1]*e[1]}function Zi(e,t){return py(xt(e,t))}function pf(e){return iy(e,fy(e))}function dy(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function ws(e,t,n){let l=Math.sin(n),r=Math.cos(n),o=e[0]-t[0],a=e[1]-t[1],i=o*r-a*l,c=o*l+a*r;return[i+t[0],c+t[1]]}function yo(e,t,n){return Bt(e,Dt(xt(t,e),n))}function Gi(e,t,n){return Bt(e,Dt(t,n))}var{min:Hn,PI:hy}=Math,Xi=.275,xs=hy+1e-4;function my(e,t={}){let{size:n=16,smoothing:l=.5,thinning:r=.5,simulatePressure:o=!0,easing:a=te=>te,start:i={},end:c={},last:f=!1}=t,{cap:p=!0,easing:h=te=>te*(2-te)}=i,{cap:d=!0,easing:m=te=>--te*te*te+1}=c;if(e.length===0||n<=0)return[];let y=e[e.length-1].runningLength,A=i.taper===!1?0:i.taper===!0?Math.max(n,y):i.taper,b=c.taper===!1?0:c.taper===!0?Math.max(n,y):c.taper,$=Math.pow(n*l,2),x=[],k=[],E=e.slice(0,10).reduce((te,se)=>{let ee=se.pressure;if(o){let de=Hn(1,se.distance/n),It=Hn(1,1-de);ee=Hn(1,te+(It-te)*(de*Xi))}return(te+ee)/2},e[0].pressure),N=Yi(n,r,e[e.length-1].pressure,a),T,W=e[0].vector,re=e[0].point,ue=re,pe=re,me=ue;for(let te=0;te<e.length;te++){let{pressure:se}=e[te],{point:ee,vector:de,distance:It,runningLength:Je}=e[te];if(te<e.length-1&&y-Je<3)continue;if(r){if(o){let R=Hn(1,It/n),Z=Hn(1,1-R);se=Hn(1,E+(Z-E)*(R*Xi))}N=Yi(n,r,se,a)}else N=n/2;T===void 0&&(T=N);let bt=Je<A?h(Je/A):1,lt=y-Je<b?m((y-Je)/b):1;if(N=Math.max(.01,N*Math.min(bt,lt)),te===e.length-1){let R=Dt(As(de),N);x.push(xt(ee,R)),k.push(Bt(ee,R));continue}let Ln=e[te+1].vector,B=cy(de,Ln);if(B<0){let R=Dt(As(W),N);for(let Z=1/13,ve=0;ve<=1;ve+=Z)pe=ws(xt(ee,R),ee,xs*ve),x.push(pe),me=ws(Bt(ee,R),ee,xs*-ve),k.push(me);re=pe,ue=me;continue}let K=Dt(As(yo(Ln,de,B)),N);pe=xt(ee,K),(te<=1||Zi(re,pe)>$)&&(x.push(pe),re=pe),me=Bt(ee,K),(te<=1||Zi(ue,me)>$)&&(k.push(me),ue=me),E=se,W=de}let Te=e[0].point.slice(0,2),Ne=e.length>1?e[e.length-1].point.slice(0,2):Bt(e[0].point,[1,1]),Ye=[],$e=[];if(e.length===1){if(!(A||b)||f){let te=Gi(Te,pf(As(xt(Te,Ne))),-(T||N)),se=[];for(let ee=1/13,de=ee;de<=1;de+=ee)se.push(ws(te,Te,xs*2*de));return se}}else{if(!(A||b&&e.length===1))if(p)for(let se=1/13,ee=se;ee<=1;ee+=se){let de=ws(k[0],Te,xs*ee);Ye.push(de)}else{let se=xt(x[0],k[0]),ee=Dt(se,.5),de=Dt(se,.51);Ye.push(xt(Te,ee),xt(Te,de),Bt(Te,de),Bt(Te,ee))}let te=As(ay(e[e.length-1].vector));if(b||A&&e.length===1)$e.push(Ne);else if(d){let se=Gi(Ne,te,N);for(let ee=1/29,de=ee;de<1;de+=ee)$e.push(ws(se,Ne,xs*3*de))}else $e.push(Bt(Ne,Dt(te,N)),Bt(Ne,Dt(te,N*.99)),xt(Ne,Dt(te,N*.99)),xt(Ne,Dt(te,N)))}return x.concat($e,k.reverse(),Ye)}function gy(e,t={}){var n;let{streamline:l=.5,size:r=16,last:o=!1}=t;if(e.length===0)return[];let a=.15+(1-l)*.85,i=Array.isArray(e[0])?e:e.map(({x:m,y,pressure:A=.5})=>[m,y,A]);if(i.length===2){let m=i[1];i=i.slice(0,-1);for(let y=1;y<5;y++)i.push(yo(i[0],m,y/4))}i.length===1&&(i=[...i,[...Bt(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],f=!1,p=0,h=c[0],d=i.length-1;for(let m=1;m<i.length;m++){let y=o&&m===d?i[m].slice(0,2):yo(h.point,i[m],a);if(uy(h.point,y))continue;let A=dy(y,h.point);if(p+=A,m<d&&!f){if(p<r)continue;f=!0}h={point:y,pressure:i[m][2]>=0?i[m][2]:.5,vector:pf(xt(h.point,y)),distance:A,runningLength:p},c.push(h)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function yy(e,t={}){return my(gy(e,t),t)}var vy=yy,_y=Object.defineProperty,Ji=Object.getOwnPropertySymbols,by=Object.prototype.hasOwnProperty,Ay=Object.prototype.propertyIsEnumerable,Qi=(e,t,n)=>t in e?_y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vo=(e,t)=>{for(var n in t||(t={}))by.call(t,n)&&Qi(e,n,t[n]);if(Ji)for(var n of Ji(t))Ay.call(t,n)&&Qi(e,n,t[n]);return e},wy=()=>({events:{},emit(e,...t){(this.events[e]||[]).forEach(n=>n(...t))},on(e,t){return(this.events[e]=this.events[e]||[]).push(t),()=>this.events[e]=(this.events[e]||[]).filter(n=>n!==t)}});function Hl(e,t){return e-t}function xy(e){return e<0?-1:1}function Vl(e){return[Math.abs(e),xy(e)]}function df(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var Cy=2,Kt=Cy,ds=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t,n;const l=this.drauu.el,r=(t=this.drauu.options.coordinateScale)!=null?t:1;if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-o.left)*r,y:(e.pageY-o.top)*r,pressure:e.pressure}}else{const o=this.drauu.svgPoint;o.x=e.clientX,o.y=e.clientY;const a=o.matrixTransform((n=l.getScreenCTM())==null?void 0:n.inverse());return{x:a.x*r,y:a.y*r,pressure:e.pressure}}}createElement(e,t){var n;const l=document.createElementNS("http://www.w3.org/2000/svg",e),r=t?vo(vo({},this.brush),t):this.brush;return l.setAttribute("fill",(n=r.fill)!=null?n:"transparent"),l.setAttribute("stroke",r.color),l.setAttribute("stroke-width",r.size.toString()),l.setAttribute("stroke-linecap","round"),r.dasharray&&l.setAttribute("stroke-dasharray",r.dasharray),l}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Kt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},ky=class extends ds{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=vy(e,vo({size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},this.brush.stylusOptions));if(!t.length)return"";const n=t.reduce((l,[r,o],a,i)=>{const[c,f]=i[(a+1)%i.length];return l.push(r,o,(r+c)/2,(o+f)/2),l},["M",...t[0],"Q"]);return n.push("Z"),n.map(l=>typeof l=="number"?l.toFixed(2):l).join(" ")}},$y=class extends ds{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Vl(e.x-this.start.x),[l,r]=Vl(e.y-this.start.y);if(this.shiftPressed){const o=Math.min(t,l);t=o,l=o}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",l);else{const[o,a]=[this.start.x,this.start.x+t*n].sort(Hl),[i,c]=[this.start.y,this.start.y+l*r].sort(Hl);this.attr("cx",(o+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-o)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function hf(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),l=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",t),l.setAttribute("id",e),l.setAttribute("viewBox","0 -5 10 10"),l.setAttribute("refX","5"),l.setAttribute("refY","0"),l.setAttribute("markerWidth","4"),l.setAttribute("markerHeight","4"),l.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),l.appendChild(r),n.appendChild(l),n}var Ey=class extends ds{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=df(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(hf(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const l=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let o=l/r;o=Math.round(o),Math.abs(o)<=1?(t=this.start.x+r*o,n=this.start.y+r):(t=this.start.x+l,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Dy=class extends ds{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Vl(e.x-this.start.x),[l,r]=Vl(e.y-this.start.y);if(this.shiftPressed){const o=Math.min(t,l);t=o,l=o}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-l),this.attr("width",t*2),this.attr("height",l*2);else{const[o,a]=[this.start.x,this.start.x+t*n].sort(Hl),[i,c]=[this.start.y,this.start.y+l*r].sort(Hl);this.attr("x",o),this.attr("y",i),this.attr("width",a-o),this.attr("height",c-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function By(e,t){const n=e.x-t.x,l=e.y-t.y;return n*n+l*l}function Oy(e,t,n){let l=t.x,r=t.y,o=n.x-l,a=n.y-r;if(o!==0||a!==0){const i=((e.x-l)*o+(e.y-r)*a)/(o*o+a*a);i>1?(l=n.x,r=n.y):i>0&&(l+=o*i,r+=a*i)}return o=e.x-l,a=e.y-r,o*o+a*a}function Py(e,t){let n=e[0];const l=[n];let r;for(let o=1,a=e.length;o<a;o++)r=e[o],By(r,n)>t&&(l.push(r),n=r);return n!==r&&r&&l.push(r),l}function _o(e,t,n,l,r){let o=l,a=0;for(let i=t+1;i<n;i++){const c=Oy(e[i],e[t],e[n]);c>o&&(a=i,o=c)}o>l&&(a-t>1&&_o(e,t,a,l,r),r.push(e[a]),n-a>1&&_o(e,a,n,l,r))}function Sy(e,t){const n=e.length-1,l=[e[0]];return _o(e,0,n,t,l),l.push(e[n]),l}function ec(e,t,n=!1){if(e.length<=2)return e;const l=t!==void 0?t*t:1;return e=n?e:Py(e,l),e=Sy(e,l),e}var My=class extends ds{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=df();const t=hf(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=ec(this.points,1,!0),this.count=0),this.attr("d",nc(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",nc(ec(this.points,1,!0))),!e.getTotalLength()))}};function Ty(e,t){const n=t.x-e.x,l=t.y-e.y;return{length:Math.sqrt(Math.pow(n,2)+Math.pow(l,2)),angle:Math.atan2(l,n)}}function tc(e,t,n,l){const r=t||e,o=n||e,a=.2,i=Ty(r,o),c=i.angle+(l?Math.PI:0),f=i.length*a,p=e.x+Math.cos(c)*f,h=e.y+Math.sin(c)*f;return{x:p,y:h}}function Fy(e,t,n){const l=tc(n[t-1],n[t-2],e),r=tc(e,n[t-1],n[t+1],!0);return`C ${l.x.toFixed(Kt)},${l.y.toFixed(Kt)} ${r.x.toFixed(Kt)},${r.y.toFixed(Kt)} ${e.x.toFixed(Kt)},${e.y.toFixed(Kt)}`}function nc(e){return e.reduce((t,n,l,r)=>l===0?`M ${n.x.toFixed(Kt)},${n.y.toFixed(Kt)}`:`${t} ${Fy(n,l,r)}`,"")}var Ry=class extends ds{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,l)=>{if(n&&n.length)for(let r=0;r<n.length;r++){const o=n[r];if(o.getTotalLength){const a=o.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=o.getPointAtLength(a*i/this.pathSubFactor),f=o.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:f.x,y1:c.y,y2:f.y,segment:i,element:l||o})}}else o.children&&t(o.children,o)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],l={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,l)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,l=e.x2,r=t.x1,o=t.x2,a=e.y1,i=e.y2,c=t.y1,f=t.y2,p=(n-l)*(c-f)-(a-i)*(r-o),h=(n*i-a*l)*(r-o)-(n-l)*(r*f-c*o),d=(n*i-a*l)*(c-f)-(a-i)*(r*f-c*o),m=(y,A,b)=>y>=A&&y<=b?!0:y>=b&&y<=A;if(p===0)return!1;{const y={x:h/p,y:d/p};return m(y.x,n,l)&&m(y.y,a,i)&&m(y.x,r,o)&&m(y.y,c,f)}}};function Iy(e){return{draw:new My(e),stylus:new ky(e),line:new Ey(e),rectangle:new Dy(e),ellipse:new $y(e),eraseLine:new Ry(e)}}var Ly=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=wy(),this._models=Iy(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,l=this.eventStart.bind(this),r=this.eventMove.bind(this),o=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",l,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",o,{passive:!1}),window.addEventListener("pointercancel",o,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",l),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",o),window.removeEventListener("pointercancel",o),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function Ny(e){return new Ly(e)}const bo=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Vt=Rt("slidev-drawing-enabled",!1),ox=Rt("slidev-drawing-pinned",!1),jy=z(!1),Hy=z(!1),Vy=z(!1),Xs=z(!1),$n=Nm(Rt("slidev-drawing-brush",{color:bo[0],size:4,mode:"stylus"})),sc=z("stylus"),mf=D(()=>we.drawings.syncAll||jt.value);let Js=!1;const Cs=D({get(){return sc.value},set(e){sc.value=e,e==="arrow"?($n.mode="line",$n.arrowEnd=!0):($n.mode=e,$n.arrowEnd=!1)}}),Uy=Re({brush:$n,acceptsInputTypes:D(()=>Vt.value?void 0:["pen"]),coordinateTransform:!1}),nt=Ql(Ny(Uy));function zy(){nt.clear(),mf.value&&Uu(Ve.value,"")}function gf(){var e;Hy.value=nt.canRedo(),jy.value=nt.canUndo(),Vy.value=!!((e=nt.el)!=null&&e.children.length)}function Wy(e){Js=!0;const t=Il[e||Ve.value];t!=null?nt.load(t):nt.clear(),Js=!1}nt.on("changed",()=>{if(gf(),!Js){const e=nt.dump(),t=Ve.value;(Il[t]||"")!==e&&mf.value&&Uu(t,nt.dump())}});Fm(e=>{Js=!0,e[Ve.value]!=null&&nt.load(e[Ve.value]||""),Js=!1,gf()});qe(()=>{ce(Ve,()=>{!nt.mounted||Wy()},{immediate:!0})});nt.on("start",()=>Xs.value=!0);nt.on("end",()=>Xs.value=!1);window.addEventListener("keydown",e=>{if(!Vt.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?nt.redo():nt.undo():e.code==="Escape"?Vt.value=!1:e.code==="KeyL"&&t?Cs.value="line":e.code==="KeyA"&&t?Cs.value="arrow":e.code==="KeyS"&&t?Cs.value="stylus":e.code==="KeyR"&&t?Cs.value="rectangle":e.code==="KeyE"&&t?Cs.value="ellipse":e.code==="KeyC"&&t?zy():e.code.startsWith("Digit")&&t&&+e.code[5]<=bo.length?$n.color=bo[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);const lc=Og(),Sr=Rt("slidev-color-schema","auto"),Ao=D(()=>we.colorSchema!=="auto"),oa=D({get(){return Ao.value?we.colorSchema==="dark":Sr.value==="auto"?lc.value:Sr.value==="dark"},set(e){Ao.value||(Sr.value=e===lc.value?"auto":e?"dark":"light")}}),yf=Ku(oa);Ct&&ce(oa,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});function Ky(){return[]}const Dl=z(1),Bl=D(()=>He.length-1),gt=z(0),aa=z(0);function qy(){gt.value>Dl.value&&(gt.value-=1)}function Yy(){gt.value<Bl.value&&(gt.value+=1)}function Zy(){if(gt.value>Dl.value){let e=gt.value-aa.value;e<Dl.value&&(e=Dl.value),gt.value=e}}function Gy(){if(gt.value<Bl.value){let e=gt.value+aa.value;e>Bl.value&&(e=Bl.value),gt.value=e}}const vf=je(ft(ry),ft(oy),sy);function Xy(e,t,n=!1){typeof e=="string"&&(e=cf[e]);const l=je(e,vf);let r=0,o;const a=()=>{if(clearTimeout(o),!l.value){r=0;return}n&&(o=setTimeout(a,Math.max(1e3-r*250,150)),r++),t()};return ce(l,a,{flush:"sync"})}function Jy(e,t){return vg(e,n=>{!vf.value||n.repeat||t()})}function Qy(){const e=Ky(),{escape:t,space:n,shift:l,left:r,right:o,up:a,down:i,enter:c,d:f,g:p,o:h}=cf;new Map([{key:je(n,ft(l)),fn:un,autoRepeat:!0},{key:je(n,l),fn,autoRepeat:!0},{key:je(o,ft(l),ft(tt)),fn:un,autoRepeat:!0},{key:je(r,ft(l),ft(tt)),fn,autoRepeat:!0},{key:"pageDown",fn:un,autoRepeat:!0},{key:"pageUp",fn,autoRepeat:!0},{key:je(a,ft(tt)),fn:()=>tl(!1),autoRepeat:!0},{key:je(i,ft(tt)),fn:el,autoRepeat:!0},{key:je(r,l),fn:()=>tl(!1),autoRepeat:!0},{key:je(o,l),fn:el,autoRepeat:!0},{key:je(f,ft(Vt)),fn:yf},{key:je(h,ft(Vt)),fn:ff},{key:je(t,ft(Vt)),fn:()=>tt.value=!1},{key:je(p,ft(Vt)),fn:()=>Yn.value=!Yn.value},{key:je(r,tt),fn:qy},{key:je(o,tt),fn:Yy},{key:je(a,tt),fn:Zy},{key:je(i,tt),fn:Gy},{key:je(c,tt),fn:()=>{as(gt.value),tt.value=!1}},...e].map(m=>[m.key,m])).forEach(m=>{m.fn&&Xy(m.key,m.fn,m.autoRepeat)}),Jy("f",()=>uf.toggle())}const e0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t0=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),n0=[t0];function s0(e,t){return C(),U("svg",e0,n0)}var l0={name:"carbon-close",render:s0};function ia(e){var n,l;const t=(l=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:l.no;return t!=null?`slidev-page-${t}`:""}const _f=ye({name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;H(G);const n=z(),l=Vg(n),r=D(()=>t.width?t.width:l.width.value),o=D(()=>t.width?t.width/an:l.height.value);t.width&&rl(()=>{n.value&&(n.value.style.width=`${r.value}px`,n.value.style.height=`${o.value}px`)});const a=D(()=>r.value/o.value),i=D(()=>t.scale?t.scale:a.value<an?r.value/On:o.value*an/On),c=D(()=>({height:`${ju}px`,width:`${On}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),f=D(()=>({"select-none":!we.selectable,"slidev-code-line-numbers":we.lineNumbers}));return ht(Nu,i),(p,h)=>(C(),U("div",{id:"slide-container",ref_key:"root",ref:n,class:Fe(_(f))},[s("div",{id:"slide-content",style:We(_(c))},[_t(p.$slots,"default")],4),_t(p.$slots,"controls")],2))}});var ca=ye({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Ht(e,"clicks",t),l=Ht(e,"clicksElements",t),r=Ht(e,"clicksDisabled",t),o=Ht(e,"clicksOrderMap",t);l.value.length=0,ht(wm,e.route),ht(xm,e.context),ht(Ms,n),ht(Ts,r),ht(wn,l),ht(ao,o)},render(){var e,t;return this.$props.is?Tt(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}});const r0=["innerHTML"],bf=ye({name:"DrawingPreview",props:{page:null},setup(e){return H(G),(t,n)=>_(Il)[e.page]?(C(),U("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:_(Il)[e.page]},null,8,r0)):q("v-if",!0)}});var o0=Object.freeze(Object.defineProperty({__proto__:null,default:bf},Symbol.toStringTag,{value:"Module"}));const a0={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},i0=["onClick"],c0=ye({name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const n=e;H(G);const l=Ht(n,"modelValue",t);function r(){l.value=!1}function o(m){as(m),r()}function a(m){return m===gt.value}const i=go.smaller("xs"),c=go.smaller("sm"),f=4*16*2,p=2*16,h=D(()=>i.value?Pn.width.value-f:c.value?(Pn.width.value-f-p)/2:300),d=D(()=>Math.floor((Pn.width.value-f)/(h.value+p)));return rl(()=>{gt.value=Ve.value,aa.value=d.value}),(m,y)=>{const A=l0;return C(),U(Ce,null,[Jo(s("div",a0,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:We(`grid-template-columns: repeat(auto-fit,minmax(${_(h)}px,1fr))`)},[(C(!0),U(Ce,null,ol(_(He).slice(0,-1),(b,$)=>(C(),U("div",{key:b.path,class:"relative"},[s("div",{class:Fe(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a($+1)}]),onClick:x=>o(+b.path)},[(C(),X(_f,{key:b.path,width:_(h),"clicks-disabled":!0,class:"pointer-events-none"},{default:F(()=>[O(_(ca),{is:b==null?void 0:b.component,"clicks-disabled":!0,class:Fe(_(ia)(b)),route:b,context:"overview"},null,8,["is","class","route"]),O(bf,{page:+b.path},null,8,["page"])]),_:2},1032,["width"]))],10,i0),s("div",{class:"absolute top-0 opacity-50",style:We(`left: ${_(h)+5}px`)},Sn($+1),5)]))),128))],4)],512),[[Iu,_(l)]]),_(l)?(C(),U("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:r},[O(A)])):q("v-if",!0)],64)}}});var u0="/redis_intro/assets/logo.b72bde5d.png";const f0={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},p0=ye({name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;H(G);const l=Ht(n,"modelValue",t);function r(){l.value=!1}return(o,a)=>(C(),X(vu,null,[_(l)?(C(),U("div",f0,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>r())}),s("div",{class:Fe(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[_t(o.$slots,"default")],2)])):q("v-if",!0)],1024))}});const d0={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},h0=["innerHTML"],m0=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:u0,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),u("dev ")])])],-1),g0=ye({name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;H(G);const l=Ht(n,"modelValue",t),r=D(()=>typeof we.info=="string");return(o,a)=>(C(),X(p0,{modelValue:_(l),"onUpdate:modelValue":a[0]||(a[0]=i=>be(l)?l.value=i:null),class:"px-6 py-4"},{default:F(()=>[s("div",d0,[_(r)?(C(),U("div",{key:0,class:"mb-4",innerHTML:_(we).info},null,8,h0)):q("v-if",!0),m0])]),_:1},8,["modelValue"]))}}),y0=["disabled","onKeydown"],v0=ye({name:"Goto",setup(e){H(G);const t=z(),n=z(""),l=D(()=>{if(n.value.startsWith("/"))return!!He.find(a=>a.path===n.value.substring(1));{const a=+n.value;return!isNaN(a)&&a>0&&a<=Ff.value}});function r(){l.value&&(n.value.startsWith("/")?as(n.value.substring(1)):as(+n.value)),o()}function o(){Yn.value=!1}return ce(Yn,async a=>{var i,c;a?(await qe(),n.value="",(i=t.value)==null||i.focus()):(c=t.value)==null||c.blur()}),ce(n,a=>{a.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(a,i)=>(C(),U("div",{id:"slidev-goto-dialog",class:Fe(["fixed right-5 bg-main transform transition-all",_(Yn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Jo(s("input",{ref_key:"input",ref:t,"onUpdate:modelValue":i[0]||(i[0]=c=>n.value=c),type:"text",disabled:!_(Yn),class:Fe(["outline-none bg-transparent",{"text-red-400":!_(l)&&n.value}]),placeholder:"Goto...",onKeydown:[pi(r,["enter"]),pi(o,["escape"])],onBlur:o},null,42,y0),[[nm,n.value]])],2))}}),_0=ye({name:"Controls",setup(e){H(G);const t=zt(),n=zt();return(l,r)=>(C(),U(Ce,null,[O(c0,{modelValue:_(tt),"onUpdate:modelValue":r[0]||(r[0]=o=>be(tt)?tt.value=o:null)},null,8,["modelValue"]),O(v0),_(t)?(C(),X(_(t),{key:0})):q("v-if",!0),_(n)?(C(),X(_(n),{key:1,modelValue:_(Or),"onUpdate:modelValue":r[1]||(r[1]=o=>be(Or)?Or.value=o:null)},null,8,["modelValue"])):q("v-if",!0),_(we).info?(C(),X(g0,{key:2,modelValue:_(Is),"onUpdate:modelValue":r[2]||(r[2]=o=>be(Is)?Is.value=o:null)},null,8,["modelValue"])):q("v-if",!0)],64))}}),b0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},A0=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),w0=[A0];function x0(e,t){return C(),U("svg",b0,w0)}var C0={name:"carbon-settings-adjust",render:x0};const k0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$0=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),E0=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),D0=[$0,E0];function B0(e,t){return C(),U("svg",k0,D0)}var O0={name:"carbon-information",render:B0};const P0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},S0=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),M0=[S0];function T0(e,t){return C(),U("svg",P0,M0)}var F0={name:"carbon-download",render:T0};const R0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},I0=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),L0=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),N0=[I0,L0];function j0(e,t){return C(),U("svg",R0,N0)}var H0={name:"carbon-user-speaker",render:j0};const V0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},U0=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),z0=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),W0=[U0,z0];function K0(e,t){return C(),U("svg",V0,W0)}var q0={name:"carbon-presentation-file",render:K0};const Y0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Z0=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),G0=[Z0];function X0(e,t){return C(),U("svg",Y0,G0)}var J0={name:"carbon-pen",render:X0};const Q0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},ev=s("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),tv=s("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),nv=[ev,tv];function sv(e,t){return C(),U("svg",Q0,nv)}var lv={name:"ph-cursor-duotone",render:sv};const rv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},ov=s("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),av=[ov];function iv(e,t){return C(),U("svg",rv,av)}var Af={name:"ph-cursor-fill",render:iv};const cv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},uv=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),fv=[uv];function pv(e,t){return C(),U("svg",cv,fv)}var dv={name:"carbon-sun",render:pv};const hv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},mv=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),gv=[mv];function yv(e,t){return C(),U("svg",hv,gv)}var vv={name:"carbon-moon",render:yv};const _v={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},bv=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Av=[bv];function wv(e,t){return C(),U("svg",_v,Av)}var xv={name:"carbon-apps",render:wv};const Cv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},kv=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),$v=[kv];function Ev(e,t){return C(),U("svg",Cv,$v)}var wf={name:"carbon-arrow-right",render:Ev};const Dv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bv=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Ov=[Bv];function Pv(e,t){return C(),U("svg",Dv,Ov)}var Sv={name:"carbon-arrow-left",render:Pv};const Mv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Tv=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Fv=[Tv];function Rv(e,t){return C(),U("svg",Mv,Fv)}var Iv={name:"carbon-maximize",render:Rv};const Lv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Nv=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),jv=[Nv];function Hv(e,t){return C(),U("svg",Lv,jv)}var Vv={name:"carbon-minimize",render:Hv};const Uv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},zv=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),Wv=[zv];function Kv(e,t){return C(),U("svg",Uv,Wv)}var qv={name:"carbon-checkmark",render:Kv};var xf=(e,t)=>{const n=e.__vccOpts||e;for(const[l,r]of t)n[l]=r;return n};const Yv={class:"select-list"},Zv={class:"title"},Gv={class:"items"},Xv=["onClick"],Jv=ye({name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;H(G);const l=Ht(n,"modelValue",t,{passive:!0});return(r,o)=>{const a=qv;return C(),U("div",Yv,[s("div",Zv,Sn(e.title),1),s("div",Gv,[(C(!0),U(Ce,null,ol(e.items,i=>(C(),U("div",{key:i.value,class:Fe(["item",{active:_(l)===i.value}]),onClick:()=>{var c;l.value=i.value,(c=i.onClick)==null||c.call(i)}},[O(a,{class:Fe(["text-green-500",{"opacity-0":_(l)!==i.value}])},null,8,["class"]),u(" "+Sn(i.display||i.value),1)],10,Xv))),128))])])}}});var Qv=xf(Jv,[["__scopeId","data-v-427604ef"]]);const e_={class:"text-sm"},t_=ye({name:"Settings",setup(e){H(G);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,l)=>(C(),U("div",e_,[O(Qv,{modelValue:_(El),"onUpdate:modelValue":l[0]||(l[0]=r=>be(El)?El.value=r:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),n_={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},s_=ye({name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;H(G);const l=Ht(n,"modelValue",t,{passive:!0}),r=z();return gg(r,()=>{l.value=!1}),(o,a)=>(C(),U("div",{ref_key:"el",ref:r,class:"flex relative"},[s("button",{class:Fe({disabled:e.disabled}),onClick:a[0]||(a[0]=i=>l.value=!_(l))},[_t(o.$slots,"button",{class:Fe({disabled:e.disabled})})],2),(C(),X(vu,null,[_(l)?(C(),U("div",n_,[_t(o.$slots,"menu")])):q("v-if",!0)],1024))],512))}}),l_={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},bl={name:"VerticalDivider",setup(e){return H(G),(t,n)=>(C(),U("div",l_))}};var r_={render(){return[]}};const o_={class:"icon-btn"},a_={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},i_={class:"my-auto"},c_={class:"opacity-50"},u_=ye({name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;H(G);const n=go.smaller("md"),{isFullscreen:l,toggle:r}=uf,o=D(()=>xo.value?`?password=${xo.value}`:""),a=D(()=>`/presenter/${Ve.value}${o.value}`),i=D(()=>`/${Ve.value}${o.value}`),c=z(),f=()=>{c.value&&es.value&&c.value.contains(es.value)&&es.value.blur()},p=D(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),h=zt(),d=zt();return fs(()=>import("./DrawingControls.dc54c4eb.js"),[]).then(m=>d.value=m.default),(m,y)=>{const A=Vv,b=Iv,$=Sv,x=wf,k=xv,E=vv,N=dv,T=Af,W=lv,re=J0,ue=q0,pe=kt("RouterLink"),me=H0,Te=F0,Ne=O0,Ye=C0;return C(),U("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[s("div",{class:Fe(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",_(p)]),onMouseleave:f},[_(Wt)?q("v-if",!0):(C(),U("button",{key:0,class:"icon-btn",onClick:y[0]||(y[0]=(...$e)=>_(r)&&_(r)(...$e))},[_(l)?(C(),X(A,{key:0})):(C(),X(b,{key:1}))])),s("button",{class:Fe(["icon-btn",{disabled:!_(h6)}]),onClick:y[1]||(y[1]=(...$e)=>_(fn)&&_(fn)(...$e))},[O($)],2),s("button",{class:Fe(["icon-btn",{disabled:!_(d6)}]),title:"Next",onClick:y[2]||(y[2]=(...$e)=>_(un)&&_(un)(...$e))},[O(x)],2),_(Wt)?q("v-if",!0):(C(),U("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:y[3]||(y[3]=$e=>_(ff)())},[O(k)])),_(Ao)?q("v-if",!0):(C(),U("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:y[4]||(y[4]=$e=>_(yf)())},[_(oa)?(C(),X(E,{key:0})):(C(),X(N,{key:1}))])),O(bl),_(Wt)?q("v-if",!0):(C(),U(Ce,{key:3},[!_(jt)&&!_(n)&&_(h)?(C(),U(Ce,{key:0},[O(_(h)),O(bl)],64)):q("v-if",!0),_(jt)?(C(),U("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:y[5]||(y[5]=$e=>Pr.value=!_(Pr))},[_(Pr)?(C(),X(T,{key:0})):(C(),X(W,{key:1,class:"opacity-50"}))])):q("v-if",!0)],64)),!_(we).drawings.presenterOnly&&!_(Wt)?(C(),U(Ce,{key:4},[s("button",{class:"icon-btn relative",title:"Drawing",onClick:y[6]||(y[6]=$e=>Vt.value=!_(Vt))},[O(re),_(Vt)?(C(),U("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:We({background:_($n).color})},null,4)):q("v-if",!0)]),O(bl)],64)):q("v-if",!0),_(Wt)?q("v-if",!0):(C(),U(Ce,{key:5},[_(jt)?(C(),X(pe,{key:0,to:_(i),class:"icon-btn",title:"Play Mode"},{default:F(()=>[O(ue)]),_:1},8,["to"])):q("v-if",!0),_(u6)?(C(),X(pe,{key:1,to:_(a),class:"icon-btn",title:"Presenter Mode"},{default:F(()=>[O(me)]),_:1},8,["to"])):q("v-if",!0),q("v-if",!0)],64)),(C(),U(Ce,{key:6},[_(we).download?(C(),U("button",{key:0,class:"icon-btn",onClick:y[8]||(y[8]=(...$e)=>_(Co)&&_(Co)(...$e))},[O(Te)])):q("v-if",!0)],64)),!_(jt)&&_(we).info&&!_(Wt)?(C(),U("button",{key:7,class:"icon-btn",onClick:y[9]||(y[9]=$e=>Is.value=!_(Is))},[O(Ne)])):q("v-if",!0),!_(jt)&&!_(Wt)?(C(),X(s_,{key:8},{button:F(()=>[s("button",o_,[O(Ye)])]),menu:F(()=>[O(t_)]),_:1})):q("v-if",!0),_(Wt)?q("v-if",!0):(C(),X(bl,{key:9})),s("div",a_,[s("div",i_,[u(Sn(_(Ve))+" ",1),s("span",c_,"/ "+Sn(_(Ff)),1)])]),O(_(r_))],34)],512)}}});var Cf={render(){return[]}},kf={render(){return[]}};const f_={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},p_=ye({name:"PresenterMouse",setup(e){return H(G),(t,n)=>{const l=Af;return _($r).cursor?(C(),U("div",f_,[O(l,{class:"absolute",style:We({left:`${_($r).cursor.x}%`,top:`${_($r).cursor.y}%`})},null,8,["style"])])):q("v-if",!0)}}}),d_=ye({name:"SlidesShow",props:{context:null},setup(e){H(G),ce(dt,()=>{var n,l;((n=dt.value)==null?void 0:n.meta)&&dt.value.meta.preload!==!1&&(dt.value.meta.__preloaded=!0),((l=Mr.value)==null?void 0:l.meta)&&Mr.value.meta.preload!==!1&&(Mr.value.meta.__preloaded=!0)},{immediate:!0});const t=zt();return fs(()=>import("./DrawingLayer.c4a7de87.js"),[]).then(n=>t.value=n.default),(n,l)=>(C(),U(Ce,null,[q(" Global Bottom "),O(_(kf)),q(" Slides "),(C(!0),U(Ce,null,ol(_(He),r=>{var o,a;return C(),U(Ce,{key:r.path},[((o=r.meta)==null?void 0:o.__preloaded)||r===_(dt)?Jo((C(),X(_(ca),{key:0,is:r==null?void 0:r.component,clicks:r===_(dt)?_(Ft):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Fe(_(ia)(r)),route:r,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Iu,r===_(dt)]]):q("v-if",!0)],64)}),128)),q(" Global Top "),O(_(Cf)),_(t)?(C(),X(_(t),{key:0})):q("v-if",!0),_(jt)?q("v-if",!0):(C(),X(p_,{key:1}))],64))}}),h_=ye({name:"Play",setup(e){H(G),Qy();const t=z();function n(o){var a;qi.value||((a=o.target)==null?void 0:a.id)==="slide-container"&&(o.screenX/window.innerWidth>.6?un():fn())}y6(t);const l=D(()=>ly.value||qi.value);zt();const r=zt();return fs(()=>import("./DrawingControls.dc54c4eb.js"),[]).then(o=>r.value=o.default),(o,a)=>(C(),U(Ce,null,[s("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr,max-content]",style:We(_(Hu))},[O(_f,{class:"w-full h-full",style:We({background:"var(--slidev-slide-container-background, black)"}),width:_(ha)?_(Pn).width.value:void 0,scale:_(El),onPointerdown:n},{default:F(()=>[O(d_,{context:"slide"})]),controls:F(()=>[s("div",{class:Fe(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[_(l)?"opacity-100 right-0":"opacity-0 p-2",_(Xs)?"pointer-events-none":""]])},[O(u_,{class:"m-auto",persist:_(l)},null,8,["persist"])],2),!_(we).drawings.presenterOnly&&!_(Wt)&&_(r)?(C(),X(_(r),{key:0,class:"ml-0"})):q("v-if",!0)]),_:1},8,["style","width","scale"]),q("v-if",!0)],4),O(_0)],64))}});function $f(e){const t=D(()=>e.value.path),n=D(()=>He.length-1),l=D(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),r=D(()=>ur(l.value)),o=D(()=>He.find(d=>d.path===`${l.value}`)),a=D(()=>{var d,m,y;return(y=(m=(d=o.value)==null?void 0:d.meta)==null?void 0:m.slide)==null?void 0:y.id}),i=D(()=>{var d,m;return(m=(d=o.value)==null?void 0:d.meta)==null?void 0:m.layout}),c=D(()=>He.find(d=>d.path===`${Math.min(He.length,l.value+1)}`)),f=D(()=>He.filter(d=>{var m,y;return(y=(m=d.meta)==null?void 0:m.slide)==null?void 0:y.title}).reduce((d,m)=>(ma(d,m),d),[])),p=D(()=>ga(f.value,o.value)),h=D(()=>ya(p.value));return{route:e,path:t,total:n,currentPage:l,currentPath:r,currentRoute:o,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:f,treeWithActiveStatuses:p,tree:h}}function Ef(e,t,n){const l=z(0);qe(()=>{yt.afterEach(async()=>{await qe(),l.value+=1})});const r=D(()=>{var c,f;return l.value,((f=(c=t.value)==null?void 0:c.meta)==null?void 0:f.__clicksElements)||[]}),o=D(()=>{var c,f,p;return+((p=(f=(c=t.value)==null?void 0:c.meta)==null?void 0:f.clicks)!=null?p:r.value.length)}),a=D(()=>n.value<He.length-1||e.value<o.value),i=D(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:o,hasNext:a,hasPrev:i}}const m_=["id"],rc=ye({name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,l=Ht(n,"clicksElements",t),r=D(()=>({height:`${ju}px`,width:`${On}px`})),o=zt();fs(()=>Promise.resolve().then(function(){return o0}),void 0).then(f=>o.value=f.default);const a=D(()=>n.clicks),i=Ef(a,n.nav.currentRoute,n.nav.currentPage),c=D(()=>`${n.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return ht(G,Re({nav:_e(_e({},n.nav),i),configs:we,themeConfigs:D(()=>we.themeConfig)})),(f,p)=>{var h;return C(),U("div",{id:_(c),class:"slide-container",style:We(_(r))},[O(_(kf)),O(_(ca),{is:(h=e.route)==null?void 0:h.component,"clicks-elements":_(l),"onUpdate:clicks-elements":p[0]||(p[0]=d=>be(l)?l.value=d:null),clicks:_(a),"clicks-disabled":!1,class:Fe(_(ia)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),_(o)?(C(),X(_(o),{key:0,page:+e.route.path},null,8,["page"])):q("v-if",!0),O(_(Cf))],12,m_)}}}),g_=ye({name:"PrintSlide",props:{route:null},setup(e){var o;const t=e;H(G);const n=Re(((o=t.route.meta)==null?void 0:o.__clicksElements)||[]),l=D(()=>t.route),r=$f(l);return(a,i)=>(C(),U(Ce,null,[O(rc,{"clicks-elements":n,"onUpdate:clicks-elements":i[0]||(i[0]=c=>be(n)?n.value=c:null),clicks:0,nav:_(r),route:_(l)},null,8,["clicks-elements","nav","route"]),_(Ls)?q("v-if",!0):(C(!0),U(Ce,{key:0},ol(n.length,c=>(C(),X(rc,{key:c,clicks:c,nav:_(r),route:_(l)},null,8,["clicks","nav","route"]))),128))],64))}});const y_={id:"print-content"},v_=ye({name:"PrintContainer",props:{width:null},setup(e){const t=e;H(G);const n=D(()=>t.width),l=D(()=>t.width/an),r=D(()=>n.value/l.value),o=D(()=>r.value<an?n.value/On:l.value*an/On),a=He.slice(0,-1),i=D(()=>({"select-none":!we.selectable,"slidev-code-line-numbers":we.lineNumbers}));return ht(Nu,o),(c,f)=>(C(),U("div",{id:"print-container",class:Fe(_(i))},[s("div",y_,[(C(!0),U(Ce,null,ol(_(a),p=>(C(),X(g_,{key:p.path,route:p},null,8,["route"]))),128))]),_t(c.$slots,"controls")],2))}});const __=ye({name:"Print",setup(e){H(G);const t=kn.canvasWidth,n=Math.round(t/kn.aspectRatio)+1;function l(r,{slots:o}){if(o.default)return Tt("style",o.default())}return rl(()=>{ha?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(r,o)=>(C(),U(Ce,null,[O(l,null,{default:F(()=>[u(" @page { size: "+Sn(_(t))+"px "+Sn(n)+"px; margin: 0px; } ",1)]),_:1}),s("div",{id:"page-root",class:"grid grid-cols-[1fr,max-content]",style:We(_(Hu))},[O(v_,{class:"w-full h-full",style:We({background:"var(--slidev-slide-container-background, black)"}),width:_(Pn).width.value},null,8,["style","width"])],4)],64))}});const b_={class:"slidev-layout end"},A_={name:"end",setup(e){return H(G),(t,n)=>(C(),U("div",b_," END "))}};var Df=xf(A_,[["__scopeId","data-v-024c70b4"]]);const w_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},x_=s("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),C_=[x_];function k_(e,t){return C(),U("svg",w_,C_)}var $_={name:"carbon-logo-github",render:k_};const E_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},D_=s("path",{fill:"currentColor",d:"M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z"},null,-1),B_=[D_];function O_(e,t){return C(),U("svg",E_,B_)}var P_={name:"carbon-edit",render:O_};function oc(e){return e.startsWith("/")?"/redis_intro/"+e.slice(1):e}function S_(e,t=!1){const n=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),l={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${oc(e)})`:`url("${oc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return l.background||delete l.background,l}const M_={class:"my-auto w-full"},Bf=ye({name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){const t=e;H(G);const n=D(()=>S_(t.background,!0));return(l,r)=>(C(),U("div",{class:"slidev-layout cover text-center",style:We(_(n))},[s("div",M_,[_t(l.$slots,"default")])],4))}}),T_=s("h1",null,"Welcome to Slidev",-1),F_=s("p",null,"Presentation slides for developers",-1),R_={class:"pt-12"},I_=u(" Press Space for next page "),L_={class:"abs-br m-6 flex gap-2"},N_={href:"https://github.com/slidevjs/slidev",target:"_blank",alt:"GitHub",class:"text-xl icon-btn opacity-50 !border-none !hover:text-white"},j_={name:"1",setup(e){const t={theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1}},n=H(G);return(l,r)=>{const o=wf,a=P_,i=$_;return C(),X(Bf,ke(xe(t)),{default:F(()=>[T_,F_,s("div",R_,[s("span",{onClick:r[0]||(r[0]=(...c)=>_(n).nav.next&&_(n).nav.next(...c)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[I_,O(o,{class:"inline"})])]),s("div",L_,[s("button",{onClick:r[1]||(r[1]=c=>_(n).nav.openInEditor()),title:"Open in Editor",class:"text-xl icon-btn opacity-50 !border-none !hover:text-white"},[O(a)]),s("a",N_,[O(i)])])]),_:1},16)}}},H_={class:"h-full w-full"},V_={class:"w-full h-full"},U_=["src"],z_=ye({name:"iframe",props:{url:null},setup(e){return H(G),(t,n)=>(C(),U("div",H_,[s("div",V_,[s("iframe",{id:"frame",class:"w-full h-full",src:e.url},null,8,U_)])]))}}),W_={name:"2",setup(e){const t={layout:"iframe",url:"https://www.utown.io/",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>(C(),X(z_,ke(xe(t)),null,16))}},K_=u("\u9879\u76EE\u534F\u4F5C"),q_={grid:"~ cols-5 gap-2",m:"-t-2"},Y_=u("\u7EC4\u7EC7\u7ED3\u6784"),Z_=u("\u613F\u666F\u76EE\u6807"),G_=u("\u534F\u4F5C\u89C4\u7EA6"),X_=u("\u5B8C\u6210\u5B9A\u4E49"),J_=u("\u56E2\u961F\u5C55\u671B"),Q_=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"Who?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"Who?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),eb=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"What?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"What?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),tb=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"How to collaborate?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"How to collaborate?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),nb=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"DOD?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"DOD?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),sb=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"Expectation?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"Expectation?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),lb={name:"3",setup(e){const t={layout:"cover",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=kt("center");return C(),X(Bf,ke(xe(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),s("h1",null,[s("strong",null,[O(r,null,{default:F(()=>[K_]),_:1})])]),s("div",q_,[s("h3",null,[O(r,null,{default:F(()=>[Y_]),_:1})]),s("h3",null,[O(r,null,{default:F(()=>[Z_]),_:1})]),s("h3",null,[O(r,null,{default:F(()=>[G_]),_:1})]),s("h3",null,[O(r,null,{default:F(()=>[X_]),_:1})]),s("h3",null,[O(r,null,{default:F(()=>[J_]),_:1})]),Q_,eb,tb,nb,sb])]),_:1},16)}}};function ac(e){return e.startsWith("/")?"/redis_intro/"+e.slice(1):e}function ua(e,t=!1){const n=e&&e[0]==="#"&&e.startsWith("rgb"),l={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${ac(e)})`:`url("${ac(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return l.background||delete l.background,l}const rb={class:"grid grid-cols-2 w-full h-full"},ob=ye({name:"image-left",props:{image:{type:String},class:{type:String}},setup(e){const t=e;H(G);const n=D(()=>ua(t.image));return(l,r)=>(C(),U("div",rb,[s("div",{class:"w-full w-full",style:We(_(n))},null,4),s("div",{class:Fe(["slidev-layout default",t.class])},[_t(l.$slots,"default")],2)]))}}),ab=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),ib=u("\u4E92\u8054\u7F51\u5BE1\u5934\u7EC4\u7EC7\u7ED3\u6784"),cb={name:"4",setup(e){const t={layout:"image-left",image:"https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png?raw=true",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=kt("center");return C(),X(ob,ke(xe(t)),{default:F(()=>[q("3.1\u3001\u7EC4\u7EC7\u7ED3\u6784"),ab,s("h3",null,[s("strong",null,[O(r,null,{default:F(()=>[ib]),_:1})])])]),_:1},16)}}},fa=ye({name:"image",props:{image:{type:String}},setup(e){const t=e;H(G);const n=D(()=>ua(t.image));return(l,r)=>(C(),U("div",{class:"slidev-layout w-full h-full",style:We(_(n))},[_t(l.$slots,"default")],4))}}),ub=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),fb={name:"5",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/86a44651142441fcae8082289679838d.png",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>(C(),X(fa,ke(xe(t)),{default:F(()=>[q("3.2\u7EC4\u7EC7\u7ED3\u6784"),ub]),_:1},16))}},pb=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),db={name:"6",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/37f86b295234485b94a65cf5f07265c2.png",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>(C(),X(fa,ke(xe(t)),{default:F(()=>[q("3.3 \u7EC4\u7EC7\u67B6\u6784\uFF08\u5F31\u77E9\u9635\uFF09"),pb]),_:1},16))}},hb=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),mb={name:"7",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/97f0a31691f7468f9fece546c9db0c7f.png",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>(C(),X(fa,ke(xe(t)),{default:F(()=>[q("3.3 \u7EC4\u7EC7\u7ED3\u6784"),hb]),_:1},16))}},gb={class:"slidev-layout default"},hs={name:"default",setup(e){return H(G),(t,n)=>(C(),U("div",gb,[_t(t.$slots,"default")]))}},yb=s("p",null,[s("img",{border:"rounded",src:"https://img-blog.csdnimg.cn/f0ccc710e3a044e99db0bbfc5fa7d3d1.jpeg"})],-1),vb={name:"8",setup(e){const t={layout:"default",image:"https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png?raw=true",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>(C(),X(hs,ke(xe(t)),{default:F(()=>[q("1\u3001\u9879\u76EE\u7EC4\u7ED3\u6784"),yb]),_:1},16))}};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Of(e){return typeof e=="undefined"||e===null}function _b(e){return typeof e=="object"&&e!==null}function bb(e){return Array.isArray(e)?e:Of(e)?[]:[e]}function Ab(e,t){var n,l,r,o;if(t)for(o=Object.keys(t),n=0,l=o.length;n<l;n+=1)r=o[n],e[r]=t[r];return e}function wb(e,t){var n="",l;for(l=0;l<t;l+=1)n+=e;return n}function xb(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Cb=Of,kb=_b,$b=bb,Eb=wb,Db=xb,Bb=Ab,pa={isNothing:Cb,isObject:kb,toArray:$b,repeat:Eb,isNegativeZero:Db,extend:Bb};function Pf(e,t){var n="",l=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),l+" "+n):l}function Qs(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Pf(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Qs.prototype=Object.create(Error.prototype);Qs.prototype.constructor=Qs;Qs.prototype.toString=function(t){return this.name+": "+Pf(this,t)};var xn=Qs,Ob=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Pb=["scalar","sequence","mapping"];function Sb(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(l){t[String(l)]=n})}),t}function Mb(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(Ob.indexOf(n)===-1)throw new xn('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=Sb(t.styleAliases||null),Pb.indexOf(this.kind)===-1)throw new xn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Ge=Mb;function ic(e,t){var n=[];return e[t].forEach(function(l){var r=n.length;n.forEach(function(o,a){o.tag===l.tag&&o.kind===l.kind&&o.multi===l.multi&&(r=a)}),n[r]=l}),n}function Tb(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function l(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(l);return e}function wo(e){return this.extend(e)}wo.prototype.extend=function(t){var n=[],l=[];if(t instanceof Ge)l.push(t);else if(Array.isArray(t))l=l.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(l=l.concat(t.explicit));else throw new xn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(o){if(!(o instanceof Ge))throw new xn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new xn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new xn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),l.forEach(function(o){if(!(o instanceof Ge))throw new xn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(wo.prototype);return r.implicit=(this.implicit||[]).concat(n),r.explicit=(this.explicit||[]).concat(l),r.compiledImplicit=ic(r,"implicit"),r.compiledExplicit=ic(r,"explicit"),r.compiledTypeMap=Tb(r.compiledImplicit,r.compiledExplicit),r};var Fb=wo,Rb=new Ge("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),Ib=new Ge("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Lb=new Ge("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Nb=new Fb({explicit:[Rb,Ib,Lb]});function jb(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function Hb(){return null}function Vb(e){return e===null}var Ub=new Ge("tag:yaml.org,2002:null",{kind:"scalar",resolve:jb,construct:Hb,predicate:Vb,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function zb(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function Wb(e){return e==="true"||e==="True"||e==="TRUE"}function Kb(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var qb=new Ge("tag:yaml.org,2002:bool",{kind:"scalar",resolve:zb,construct:Wb,predicate:Kb,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function Yb(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function Zb(e){return 48<=e&&e<=55}function Gb(e){return 48<=e&&e<=57}function Xb(e){if(e===null)return!1;var t=e.length,n=0,l=!1,r;if(!t)return!1;if(r=e[n],(r==="-"||r==="+")&&(r=e[++n]),r==="0"){if(n+1===t)return!0;if(r=e[++n],r==="b"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(r!=="0"&&r!=="1")return!1;l=!0}return l&&r!=="_"}if(r==="x"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!Yb(e.charCodeAt(n)))return!1;l=!0}return l&&r!=="_"}if(r==="o"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!Zb(e.charCodeAt(n)))return!1;l=!0}return l&&r!=="_"}}if(r==="_")return!1;for(;n<t;n++)if(r=e[n],r!=="_"){if(!Gb(e.charCodeAt(n)))return!1;l=!0}return!(!l||r==="_")}function Jb(e){var t=e,n=1,l;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),l=t[0],(l==="-"||l==="+")&&(l==="-"&&(n=-1),t=t.slice(1),l=t[0]),t==="0")return 0;if(l==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function Qb(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!pa.isNegativeZero(e)}var e2=new Ge("tag:yaml.org,2002:int",{kind:"scalar",resolve:Xb,construct:Jb,predicate:Qb,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),t2=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function n2(e){return!(e===null||!t2.test(e)||e[e.length-1]==="_")}function s2(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var l2=/^[-+]?[0-9]+e/;function r2(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(pa.isNegativeZero(e))return"-0.0";return n=e.toString(10),l2.test(n)?n.replace("e",".e"):n}function o2(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||pa.isNegativeZero(e))}var a2=new Ge("tag:yaml.org,2002:float",{kind:"scalar",resolve:n2,construct:s2,predicate:o2,represent:r2,defaultStyle:"lowercase"}),i2=Nb.extend({implicit:[Ub,qb,e2,a2]}),c2=i2,Sf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Mf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function u2(e){return e===null?!1:Sf.exec(e)!==null||Mf.exec(e)!==null}function f2(e){var t,n,l,r,o,a,i,c=0,f=null,p,h,d;if(t=Sf.exec(e),t===null&&(t=Mf.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],l=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,l,r));if(o=+t[4],a=+t[5],i=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(p=+t[10],h=+(t[11]||0),f=(p*60+h)*6e4,t[9]==="-"&&(f=-f)),d=new Date(Date.UTC(n,l,r,o,a,i,c)),f&&d.setTime(d.getTime()-f),d}function p2(e){return e.toISOString()}var d2=new Ge("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:u2,construct:f2,instanceOf:Date,represent:p2});function h2(e){return e==="<<"||e===null}var m2=new Ge("tag:yaml.org,2002:merge",{kind:"scalar",resolve:h2}),da=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function g2(e){if(e===null)return!1;var t,n,l=0,r=e.length,o=da;for(n=0;n<r;n++)if(t=o.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;l+=6}return l%8===0}function y2(e){var t,n,l=e.replace(/[\r\n=]/g,""),r=l.length,o=da,a=0,i=[];for(t=0;t<r;t++)t%4===0&&t&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|o.indexOf(l.charAt(t));return n=r%4*6,n===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):n===18?(i.push(a>>10&255),i.push(a>>2&255)):n===12&&i.push(a>>4&255),new Uint8Array(i)}function v2(e){var t="",n=0,l,r,o=e.length,a=da;for(l=0;l<o;l++)l%3===0&&l&&(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]),n=(n<<8)+e[l];return r=o%3,r===0?(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]):r===2?(t+=a[n>>10&63],t+=a[n>>4&63],t+=a[n<<2&63],t+=a[64]):r===1&&(t+=a[n>>2&63],t+=a[n<<4&63],t+=a[64],t+=a[64]),t}function _2(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var b2=new Ge("tag:yaml.org,2002:binary",{kind:"scalar",resolve:g2,construct:y2,predicate:_2,represent:v2}),A2=Object.prototype.hasOwnProperty,w2=Object.prototype.toString;function x2(e){if(e===null)return!0;var t=[],n,l,r,o,a,i=e;for(n=0,l=i.length;n<l;n+=1){if(r=i[n],a=!1,w2.call(r)!=="[object Object]")return!1;for(o in r)if(A2.call(r,o))if(!a)a=!0;else return!1;if(!a)return!1;if(t.indexOf(o)===-1)t.push(o);else return!1}return!0}function C2(e){return e!==null?e:[]}var k2=new Ge("tag:yaml.org,2002:omap",{kind:"sequence",resolve:x2,construct:C2}),$2=Object.prototype.toString;function E2(e){if(e===null)return!0;var t,n,l,r,o,a=e;for(o=new Array(a.length),t=0,n=a.length;t<n;t+=1){if(l=a[t],$2.call(l)!=="[object Object]"||(r=Object.keys(l),r.length!==1))return!1;o[t]=[r[0],l[r[0]]]}return!0}function D2(e){if(e===null)return[];var t,n,l,r,o,a=e;for(o=new Array(a.length),t=0,n=a.length;t<n;t+=1)l=a[t],r=Object.keys(l),o[t]=[r[0],l[r[0]]];return o}var B2=new Ge("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:E2,construct:D2}),O2=Object.prototype.hasOwnProperty;function P2(e){if(e===null)return!0;var t,n=e;for(t in n)if(O2.call(n,t)&&n[t]!==null)return!1;return!0}function S2(e){return e!==null?e:{}}var M2=new Ge("tag:yaml.org,2002:set",{kind:"mapping",resolve:P2,construct:S2});c2.extend({implicit:[d2,m2],explicit:[b2,k2,B2,M2]});function cc(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var T2=new Array(256),F2=new Array(256);for(var Vn=0;Vn<256;Vn++)T2[Vn]=cc(Vn)?1:0,F2[Vn]=cc(Vn);function R2(e){return Array.from(new Set(e))}function uc(...e){let t,n,l;e.length===1?(t=0,l=1,[n]=e):[t,n,l=1]=e;const r=[];let o=t;for(;o<n;)r.push(o),o+=l||1;return r}function I2(e,t){if(!t||t==="all"||t==="*")return uc(1,e+1);const n=[];for(const l of t.split(/[,;]/g))if(!l.includes("-"))n.push(+l);else{const[r,o]=l.split("-",2);n.push(...uc(+r,o?+o+1:e+1))}return R2(n).filter(l=>l<=e).sort((l,r)=>l-r)}const at=ye({name:"CodeHighlightController",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0}},setup(e){const t=e;H(G);const n=H(Ms),l=H(wn),r=H(Ts);function o(c=5){const f=[],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",h=p.length;for(let d=0;d<c;d++)f.push(p.charAt(Math.floor(Math.random()*h)));return f.join("")}const a=z(),i=Fn();return us(()=>{const c=t.at==null?l==null?void 0:l.value.length:t.at,f=D(()=>r!=null&&r.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(c||0)),t.ranges.length-1)),p=D(()=>t.ranges[f.value]||"");if(t.ranges.length>=2&&!(r!=null&&r.value)){const h=o(),d=km(t.ranges.length-1).map(m=>h+m);l!=null&&l.value&&(l.value.push(...d),or(()=>d.forEach(m=>io(l.value,m)),i))}rl(()=>{if(!a.value)return;const d=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const m of d){const y=Array.from(m.querySelectorAll(".line")),A=I2(y.length,p.value);y.forEach((b,$)=>{const x=A.includes($+1);b.classList.toggle(bn,!0),b.classList.toggle("highlighted",x),b.classList.toggle("dishonored",!x)})}})}),(c,f)=>(C(),U("div",{ref_key:"el",ref:a},[_t(c.$slots,"default")],512))}}),L2={class:"grid grid-cols-2 w-full h-full"},it=ye({name:"image-right",props:{image:{type:String},class:{type:String}},setup(e){const t=e;H(G);const n=D(()=>ua(t.image));return(l,r)=>(C(),U("div",L2,[s("div",{class:Fe(["slidev-layout default",t.class])},[_t(l.$slots,"default")],2),s("div",{class:"w-full w-full",style:We(_(n))},null,4)]))}}),N2=s("h1",null,[s("strong",null,"\u4E3B\u7248\u672C")],-1),j2=s("p",null,"\u4E3B\u6846\u67B6\u3001\u4F1A\u8BAE\u3001IM\u804A\u5929",-1),H2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u4E01\u5B87\u535A")]),u(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u5F6D\u4F73\u8F89"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"Web"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u4E01\u5B87\u535A")]),u(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5F6D\u4F73\u8F89"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"Web"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])],-1),V2={name:"9",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/f4a81b8c0aff4c16bdff821ab30ac9a5.png",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=at;return C(),X(it,ke(xe(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),N2,j2,O(r,Ie({},{ranges:["all","1","7","9","11","13","15","all"]}),{default:F(()=>[H2]),_:1},16)]),_:1},16)}}},U2=s("h1",null,[s("strong",null,"\u5730\u56FE\u7F16\u8F91\u5668")],-1),z2=s("p",null,"\u7269\u4EF6\u6446\u653E",-1),W2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u5218\u6167")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u8D75\u6069\u6069"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u4F58\u4E2D\u519B"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u5170\u56FD\u5FD7"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u5218\u6167")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u8D75\u6069\u6069"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u4F58\u4E2D\u519B"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5170\u56FD\u5FD7"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])],-1),K2={name:"10",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/4ce912a153284c23b475d8ac0a117bab.png",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=at;return C(),X(it,ke(xe(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),U2,z2,O(r,Ie({},{ranges:["all","1","7","9","11","all"]}),{default:F(()=>[W2]),_:1},16)]),_:1},16)}}},q2=s("h1",null,[s("strong",null,"\u7EC4\u4EF6\u7F16\u8F91\u5668")],-1),Y2=s("p",null,"\u7EC4\u4EF6\u7BA1\u7406\u6A21\u7EC4\uFF0C\u8D44\u6E90\u4E0A\u4F20\u3001\u5C5E\u6027\u8BBE\u7F6E\u3001\u7EC4\u4EF6\u751F\u6210",-1),Z2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u5218\u6167")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u8D75\u6069\u6069"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u4F58\u4E2D\u519B"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u5170\u56FD\u5FD7"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u5218\u6167")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u8D75\u6069\u6069"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u4F58\u4E2D\u519B"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5170\u56FD\u5FD7"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])],-1),G2={name:"11",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/b220f60e64784c229c724b373acc4530.png",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=at;return C(),X(it,ke(xe(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),q2,Y2,O(r,Ie({},{ranges:["all","1","7","9","11","all"]}),{default:F(()=>[Z2]),_:1},16)]),_:1},16)}}},X2=s("h1",null,[s("strong",null,"\u670D\u9970DIY")],-1),J2=s("p",null,"\u670D\u88C5\u56FE\u7EB8\u5236\u4F5C",-1),Q2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u5218\u6167")]),u(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),e3={name:"12",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/1b11907fa7a74e6496f4637ba0a6bec9.png",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=at;return C(),X(it,ke(xe(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),X2,J2,O(r,Ie({},{ranges:["all","1","7","9","all"]}),{default:F(()=>[Q2]),_:1},16)]),_:1},16)}}},t3=s("h1",null,[s("strong",null,"\u5267\u672C\u6740")],-1),n3=s("p",null,"\u7EBF\u4E0A\u5267\u672C\u6740\u3001\u5267\u672CDIY",-1),s3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u6768\u76CA")]),u(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),l3={name:"13",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/d113f42921e14eda932604f9af396b24.png",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=at;return C(),X(it,ke(xe(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),t3,n3,O(r,Ie({},{ranges:["all","1","7","15","all"]}),{default:F(()=>[s3]),_:1},16)]),_:1},16)}}},r3=s("h1",null,[s("strong",null,"\u6211\u7684\u7C89\u4E1D\u91CC\u6709\u9B3C")],-1),o3=s("p",null,"\u8D77\u4E8EB\u7AD9\u7684\u7EBF\u4E0A\u72FC\u4EBA\u6740\u6E38\u620F\u6A21\u5F0F",-1),a3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u6768\u68EE")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u590F\u5DDD"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u8C2D\u4E16\u4FCA"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u6768\u68EE")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u590F\u5DDD"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u8C2D\u4E16\u4FCA"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])],-1),i3={name:"14",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/203e82b9d579414d92db9edb188b42dd.gif",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=at;return C(),X(it,ke(xe(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),r3,o3,O(r,Ie({},{ranges:["all","1","7","9","all"]}),{default:F(()=>[a3]),_:1},16)]),_:1},16)}}},c3=s("h1",null,[s("strong",null,"\u5BC6\u53CB\u52A8\u6001")],-1),u3=s("p",null,"3D\u6F6E\u73A9\u98CE\u6362\u88C5\u7684\u793E\u4EA4\u5E7F\u573A",-1),f3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u674E\u96E8\u9716"),s("span",{style:{color:"#CB7676"}},"/"),s("span",{style:{color:"#B8A965"}},"\u8D75\u8F69")]),u(`
`),s("span",{class:"line"}),u(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u5F6D\u4F73\u8F89"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"Web"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u674E\u96E8\u9716"),s("span",{style:{color:"#AB5959"}},"/"),s("span",{style:{color:"#8C862B"}},"\u8D75\u8F69")]),u(`
`),s("span",{class:"line"}),u(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5F6D\u4F73\u8F89"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"Web"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])],-1),p3={name:"15",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/742aa0afbb484b49b1a0975db503173f.gif",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=at;return C(),X(it,ke(xe(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),c3,u3,O(r,Ie({},{ranges:["all","1","7","9","11","13","15","all"]}),{default:F(()=>[f3]),_:1},16)]),_:1},16)}}},d3=s("h1",null,[s("strong",null,"\u4E16\u754C\u751F\u6001")],-1),h3=s("p",null,"\u7ECF\u6D4E\u7CFB\u7EDF\u3001",-1),m3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u8D75\u8F69")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u5218\u7EF4"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u6731\u5E86\u6587"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"web"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u6768\u56FD\u6797"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u8D75\u8F69")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5218\u7EF4"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u6731\u5E86\u6587"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"web"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u6768\u56FD\u6797"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])],-1),g3={name:"16",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/f497282637e147afbbb22c570fa588f9.png",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=at;return C(),X(it,ke(xe(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),d3,h3,O(r,Ie({},{ranges:["all","1","7","9","11"]}),{default:F(()=>[m3]),_:1},16)]),_:1},16)}}},y3=s("h1",null,[s("strong",null,"NFT")],-1),v3=s("p",null,"NFT\u5C55\u793A\u4EA4\u6613\u3001\u4EE3\u5E01\u4F53\u7CFB",-1),_3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u674E\u96E8\u9716")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u9EC4\u4ECE\u5BCC"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"web"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u590F\u6587\u5175"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"Android"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u9648\u52C7\u5747"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"ios"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u4F55\u667A\u52C7"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u670D\u52A1\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u674E\u96E8\u9716")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u9EC4\u4ECE\u5BCC"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"web"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u590F\u6587\u5175"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"Android"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u9648\u52C7\u5747"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"ios"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u4F55\u667A\u52C7"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u670D\u52A1\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])],-1),b3={name:"17",setup(e){const t={layout:"image-right",image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fkfx.7fzk.com%2Fwp-content%2Fuploads%2F2021%2F12%2F2021122801521187.jpg&refer=http%3A%2F%2Fkfx.7fzk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658026796&t=f9d87521e317d306903f26fbf4717637",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=at;return C(),X(it,ke(xe(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),y3,v3,O(r,Ie({},{ranges:["all","1","7","9","11","13","15","all"]}),{default:F(()=>[_3]),_:1},16)]),_:1},16)}}},A3=s("h1",null,[s("strong",null,"UT\u5B98\u7F51")],-1),w3=s("p",null,"\u66DD\u5149\u3001\u4EA4\u6613\u7CFB\u7EDF",-1),x3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u6768\u76CA"),s("span",{style:{color:"#CB7676"}},"/...")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u6731\u5E86\u6587"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"Web"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"...")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u6768\u76CA"),s("span",{style:{color:"#AB5959"}},"/...")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u6731\u5E86\u6587"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"Web"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),C3={name:"18",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=at;return C(),X(it,ke(xe(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),A3,w3,O(r,Ie({},{ranges:["all","1","7"]}),{default:F(()=>[x3]),_:1},16)]),_:1},16)}}},k3=s("h1",null,[s("strong",null,"UT\u4E2D\u53F0")],-1),$3=s("p",null,"\u7BA1\u7406\u63A7\u5236\u53F0\u3001\u914D\u7F6E",-1),E3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u90B1\u6E05\u9752")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u6731\u5E86\u6587"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"Web"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u6C6A\u9E3F\u5B87"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u90B1\u6E05\u9752")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u6731\u5E86\u6587"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"Web"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u6C6A\u9E3F\u5B87"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])],-1),D3={name:"19",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/893a7683a8874273a54351fe4f63d53e.png",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=at;return C(),X(it,ke(xe(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),k3,$3,O(r,Ie({},{ranges:["all","1","7","9"]}),{default:F(()=>[E3]),_:1},16)]),_:1},16)}}},B3=s("h1",null,[s("strong",null,"\u7535\u73A9\u57CE")],-1),O3=s("p",null,"\u7535\u73A9\u5A31\u4E50\u751F\u6001\uFF0C\u96C6\u6210\u7B2C\u4E09\u65B9\u5C0F\u6E38\u620F",-1),P3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u6768\u68EE")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u9EC4\u4ECE\u5BCC"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"web"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u53F6\u817E\u98DE"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"unity"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u4F55\u667A\u52C7"),s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u540E\u7AEF"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u6768\u68EE")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u9EC4\u4ECE\u5BCC"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"web"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u53F6\u817E\u98DE"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u4F55\u667A\u52C7"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])],-1),S3={name:"20",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/e9e2f5993886473aa9f1767a7a29a6c8.png",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=at;return C(),X(it,ke(xe(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),B3,O3,O(r,Ie({},{ranges:["all","1","7","9","11"]}),{default:F(()=>[P3]),_:1},16)]),_:1},16)}}},M3={class:"grid grid-cols-2 w-full h-full"},T3={class:"h-full"},F3=["src"],R3=ye({name:"iframe-right",props:{class:null,url:null},setup(e){const t=e;return H(G),(n,l)=>(C(),U("div",M3,[s("div",{class:Fe(["slidev-layout default",t.class])},[_t(n.$slots,"default")],2),s("div",T3,[s("iframe",{id:"frame",class:"w-full h-full",src:e.url},null,8,F3)])]))}}),I3=s("h1",null,[s("strong",null,"\u201C\u592A\u7A7A\u72FC\u4EBA\u6740\u201D")],-1),L3=s("p",null,"\u300AAmong us\u300B",-1),N3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u8096\u9A70")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"Member"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#CB7676"}},"...")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#A65E2B"}},"PO"),s("span",{style:{color:"#393A34"}},"\uFF1A "),s("span",{style:{color:"#8C862B"}},"\u8096\u9A70")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"Member"),s("span",{style:{color:"#393A34"}},"\uFF1A ")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),j3={name:"21",setup(e){const t={layout:"iframe-right",url:"https://play.google.com/video/lava/web/player/yt:movie:sYvKjZKunyo?autoplay=1&authuser=0&embed=play",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=at;return C(),X(R3,ke(xe(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),I3,L3,O(r,Ie({},{ranges:["all","1","7","9","11","13","15","all"]}),{default:F(()=>[N3]),_:1},16)]),_:1},16)}}},H3=u("\u5B8C\u6210\u5B9A\u4E49"),V3=s("br",null,null,-1),U3={grid:"~ cols-4 gap-2",m:"-t-2"},z3=u("Dev"),W3=u("Test"),K3=u("Beta"),q3=u("Prod"),Y3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u5F00\u53D1\u73AF\u5883"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u89E3\u51B3\u51B2\u7A81")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u6301\u7EED\u96C6\u6210")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u5F00\u53D1\u73AF\u5883"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u89E3\u51B3\u51B2\u7A81")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u6301\u7EED\u96C6\u6210")])])])],-1),Z3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u6D4B\u8BD5\u73AF\u5883"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u96C6\u4E2D\u6D4B\u8BD5")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u6D4B\u8BD5\u73AF\u5883"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u96C6\u4E2D\u6D4B\u8BD5")])])])],-1),G3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u51C6\u751F\u4EA7\u73AF\u5883"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u5168\u91CF\u6D4B\u8BD5"),s("span",{style:{color:"#DBD7CA"}},"\u22652"),s("span",{style:{color:"#B8A965"}},"\u8F6E")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u9664\u4F18\u5148\u7EA7\u4E3A"),s("span",{style:{color:"#DBD7CA"}},"\u201C"),s("span",{style:{color:"#B8A965"}},"\u4F4E"),s("span",{style:{color:"#DBD7CA"}},"\u201C"),s("span",{style:{color:"#B8A965"}},"\u7F3A\u9677\u6E05\u7A7A")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u7F8E\u672F"),s("span",{style:{color:"#DBD7CA"}},"\u3001"),s("span",{style:{color:"#D4976C"}},"UI"),s("span",{style:{color:"#DBD7CA"}},"\u3001"),s("span",{style:{color:"#B8A965"}},"\u4EA7\u54C1\u9A8C\u6536")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u51C6\u751F\u4EA7\u73AF\u5883"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5168\u91CF\u6D4B\u8BD5"),s("span",{style:{color:"#393A34"}},"\u22652"),s("span",{style:{color:"#8C862B"}},"\u8F6E")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u9664\u4F18\u5148\u7EA7\u4E3A"),s("span",{style:{color:"#393A34"}},"\u201C"),s("span",{style:{color:"#8C862B"}},"\u4F4E"),s("span",{style:{color:"#393A34"}},"\u201C"),s("span",{style:{color:"#8C862B"}},"\u7F3A\u9677\u6E05\u7A7A")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u7F8E\u672F"),s("span",{style:{color:"#393A34"}},"\u3001"),s("span",{style:{color:"#A65E2B"}},"UI"),s("span",{style:{color:"#393A34"}},"\u3001"),s("span",{style:{color:"#8C862B"}},"\u4EA7\u54C1\u9A8C\u6536")])])])],-1),X3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u751F\u4EA7\u73AF\u5883"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u5168\u91CF\u6D4B\u8BD5"),s("span",{style:{color:"#DBD7CA"}},"\u22653"),s("span",{style:{color:"#B8A965"}},"\u8F6E")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u7F3A\u9677\u539F\u5219\u4E0A\u6E05\u7A7A")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u7F8E\u672F"),s("span",{style:{color:"#DBD7CA"}},"\u3001"),s("span",{style:{color:"#D4976C"}},"UI"),s("span",{style:{color:"#DBD7CA"}},"\u3001"),s("span",{style:{color:"#B8A965"}},"\u4EA7\u54C1\u9A8C\u6536")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u751F\u4EA7\u73AF\u5883"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5168\u91CF\u6D4B\u8BD5"),s("span",{style:{color:"#393A34"}},"\u22653"),s("span",{style:{color:"#8C862B"}},"\u8F6E")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u7F3A\u9677\u539F\u5219\u4E0A\u6E05\u7A7A")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u7F8E\u672F"),s("span",{style:{color:"#393A34"}},"\u3001"),s("span",{style:{color:"#A65E2B"}},"UI"),s("span",{style:{color:"#393A34"}},"\u3001"),s("span",{style:{color:"#8C862B"}},"\u4EA7\u54C1\u9A8C\u6536")])])])],-1),J3={name:"22",setup(e){const t={layout:"default",background:"https://www.utown.io/",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=kt("center"),o=at;return C(),X(hs,ke(xe(t)),{default:F(()=>[q("2\u3001\u5927\u7EB2"),s("h1",null,[s("strong",null,[O(r,null,{default:F(()=>[H3]),_:1})])]),V3,s("div",U3,[s("h3",null,[O(r,null,{default:F(()=>[z3]),_:1})]),s("h3",null,[O(r,null,{default:F(()=>[W3]),_:1})]),s("h3",null,[O(r,null,{default:F(()=>[K3]),_:1})]),s("h3",null,[O(r,null,{default:F(()=>[q3]),_:1})]),O(o,Ie({},{ranges:["all","3","5","all"]}),{default:F(()=>[Y3]),_:1},16),O(o,Ie({},{ranges:["all","4","5","all"]}),{default:F(()=>[Z3]),_:1},16),O(o,Ie({},{ranges:["all","3","5","all"]}),{default:F(()=>[G3]),_:1},16),O(o,Ie({},{ranges:["all","3","5","all"]}),{default:F(()=>[X3]),_:1},16)])]),_:1},16)}}},Q3=u("Protocol"),e4=s("br",null,null,-1),t4={grid:"~ cols-5 gap-2",m:"-t-2"},n4=u("\u8DEF\u7EBF\u56FE "),s4=u("\u53D1\u5E03\u8BA1\u5212"),l4=u("\u8FED\u4EE3\u8BA1\u5212"),r4=u("\u7528\u6237\u6545\u4E8B"),o4=u("\u4EFB\u52A1"),a4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"1~2 years")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"1~2 years")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),i4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"3~12 months")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"3~12 months")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),c4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"1~4 weeks")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"1~4 weeks")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),u4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"3~5 days")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"3~5 days")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),f4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"1~2 days")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"1~2 days")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),p4=s("br",null,null,-1),d4=s("img",{src:"https://img-blog.csdnimg.cn/bb7ba9e1a5b244c1b861d53bd00bbeb1.png"},null,-1),h4={name:"23",setup(e){const t={layout:"default",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=kt("center");return C(),X(hs,ke(xe(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),s("h1",null,[O(r,null,{default:F(()=>[Q3]),_:1})]),e4,s("div",t4,[O(r,null,{default:F(()=>[n4]),_:1}),O(r,null,{default:F(()=>[s4]),_:1}),O(r,null,{default:F(()=>[l4]),_:1}),O(r,null,{default:F(()=>[r4]),_:1}),O(r,null,{default:F(()=>[o4]),_:1}),a4,i4,c4,u4,f4]),p4,d4]),_:1},16)}}},m4=u("Protocol"),g4=s("br",null,null,-1),y4=u("\u53D1\u5E03\u8BA1\u5212"),v4=s("img",{src:"https://img-blog.csdnimg.cn/fbe5402b18af496fbdaa132bfea7c5a8.png"},null,-1),_4={name:"24",setup(e){const t={layout:"default",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=kt("center");return C(),X(hs,ke(xe(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),s("h1",null,[s("strong",null,[O(r,null,{default:F(()=>[m4]),_:1})])]),g4,O(r,null,{default:F(()=>[y4]),_:1}),v4]),_:1},16)}}},b4=u("Protocol"),A4=s("br",null,null,-1),w4=u("\u8FED\u4EE3"),x4=s("img",{src:"https://img-blog.csdnimg.cn/12f66f9da8ae4aaeb751b00bb58a4a20.png"},null,-1),C4={name:"25",setup(e){const t={layout:"default",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=kt("center");return C(),X(hs,ke(xe(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),s("h1",null,[O(r,null,{default:F(()=>[b4]),_:1})]),A4,O(r,null,{default:F(()=>[w4]),_:1}),x4]),_:1},16)}}},k4=u("Protocol"),$4=s("br",null,null,-1),E4=u("\u7528\u6237\u6545\u4E8B\u548C\u4EFB\u52A1"),D4=s("br",null,null,-1),B4=s("br",null,null,-1),O4=s("br",null,null,-1),P4=s("br",null,null,-1),S4=s("br",null,null,-1),M4=s("br",null,null,-1),T4=u("\u62C6\u89E3\u539F\u5219\uFF1AMECE"),F4={name:"26",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/7a354dfc23ea4fb28ce72c0de91804ab.png",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=kt("center");return C(),X(it,ke(xe(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),s("h1",null,[O(r,null,{default:F(()=>[k4]),_:1})]),$4,O(r,null,{default:F(()=>[E4]),_:1}),D4,B4,O4,P4,S4,M4,s("h1",null,[O(r,null,{default:F(()=>[T4]),_:1})])]),_:1},16)}}},R4=u("Protocol"),I4=s("br",null,null,-1),L4={grid:"~ cols-5 gap-2",m:"-t-2"},N4=u("\u8DEF\u7EBF\u56FE "),j4=u("\u53D1\u5E03\u8BA1\u5212"),H4=u("\u8FED\u4EE3\u8BA1\u5212"),V4=u("\u7528\u6237\u6545\u4E8B"),U4=u("\u4EFB\u52A1"),z4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"1~2 years")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"1~2 years")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),W4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"3~12 months")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"3~12 months")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),K4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"1~4 weeks")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"1~4 weeks")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),q4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"3~5 days")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"3~5 days")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),Y4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"1~2 days")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"1~2 days")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),Z4=u("\u65F6\u95F4\u76D2"),G4={name:"27",setup(e){const t={layout:"default",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=kt("center");return C(),X(hs,ke(xe(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),s("h1",null,[O(r,null,{default:F(()=>[R4]),_:1})]),I4,s("div",L4,[O(r,null,{default:F(()=>[N4]),_:1}),O(r,null,{default:F(()=>[j4]),_:1}),O(r,null,{default:F(()=>[H4]),_:1}),O(r,null,{default:F(()=>[V4]),_:1}),O(r,null,{default:F(()=>[U4]),_:1}),z4,W4,K4,q4,Y4]),s("h1",null,[O(r,null,{default:F(()=>[Z4]),_:1})])]),_:1},16)}}},X4=u("Outlook"),J4=s("br",null,null,-1),Q4=u("FT\u7EC4\u7EC7"),e6=s("blockquote",null,[s("p",null,"\u4EA7\u54C1\u4FA7\uFF1A\u6C89\u6DC0\u957F\u671F\u7A33\u5B9A\u7684\u7279\u6027\u89C4\u5212\uFF0C\u4ECE\u9700\u6C42\u8BBE\u8BA1\u4E0A\u8DB3\u591F\u89E3\u8026")],-1),t6=s("blockquote",null,[s("p",null,"\u5F00\u53D1\u4FA7\uFF1A\u7A33\u5B9A\u7684\u3001\u9AD8\u8D28\u91CF\u7684CICD")],-1),n6=s("blockquote",null,[s("p",null,"\u6D4B\u8BD5\u4FA7\uFF1A\u6548\u7387\u5316\u5DE5\u5177\u5F15\u5165\uFF08\u81EA\u52A8\u5316\u7B49\uFF09")],-1),s6=s("blockquote",null,[s("p",null,"All team\uFF1A\u6210\u957F\u4E3A\u201C\u4E13\u5BB6\u201D\uFF08\u4E1A\u52A1\u548C\u6280\u672F\uFF09")],-1),l6={name:"28",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/24bd2c170bf44c17a968658bef6263ae.png",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>{const r=kt("center");return C(),X(it,ke(xe(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),s("h1",null,[O(r,null,{default:F(()=>[X4]),_:1})]),J4,O(r,null,{default:F(()=>[Q4]),_:1}),e6,t6,n6,s6]),_:1},16)}}},r6={name:"29",setup(e){const t={layout:"end",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"};return H(G),(n,l)=>(C(),X(Df,ke(xe(t)),null,16))}};var o6=[{path:"1",name:"page-1",component:j_,meta:{theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},title:"Welcome to Slidev",slide:{raw:`---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
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

# Welcome to Slidev

Presentation slides for developers

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

`,title:"Welcome to Slidev",level:1,content:`# Welcome to Slidev

Presentation slides for developers

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>`,frontmatter:{theme:"seriph",background:"https://source.unsplash.com/collection/94734566/1920x1080",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},title:"Welcome to Slidev"},note:"The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)",index:0,start:0,end:48,notesHTML:`<p>The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. <a href="https://sli.dev/guide/syntax.html#notes" target="_blank" rel="noopener">Read more in the docs</a></p>
`,filepath:"/Users/ios/markdown_ppt/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:W_,meta:{layout:"iframe",url:"https://www.utown.io/",date:"2013/7/13 20:46:25",slide:{raw:`---
layout: iframe
url: https://www.utown.io/
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->`,content:"",frontmatter:{layout:"iframe",url:"https://www.utown.io/",date:"2013/7/13 20:46:25"},note:"1\u3001\u5C01\u9762",index:1,start:48,end:55,notesHTML:`<p>1\u3001\u5C01\u9762</p>
`,filepath:"/Users/ios/markdown_ppt/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:lb,meta:{layout:"cover",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
layout: cover
background: https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->
	
# **<center>\u9879\u76EE\u534F\u4F5C</center>**

<div grid="~ cols-5 gap-2" m="-t-2">

### <center>\u7EC4\u7EC7\u7ED3\u6784</center>

### <center>\u613F\u666F\u76EE\u6807</center>

### <center>\u534F\u4F5C\u89C4\u7EA6</center>

### <center>\u5B8C\u6210\u5B9A\u4E49</center>

### <center>\u56E2\u961F\u5C55\u671B</center>

\`\`\`yaml
	  
	  
Who?
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
What?
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
How to collaborate?
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
DOD?
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
Expectation?
	  
	  
	  
\`\`\`

</div>



`,title:"**<center>\u9879\u76EE\u534F\u4F5C</center>**",level:1,content:`<!--1\u3001\u5C01\u9762-->
	
# **<center>\u9879\u76EE\u534F\u4F5C</center>**

<div grid="~ cols-5 gap-2" m="-t-2">

### <center>\u7EC4\u7EC7\u7ED3\u6784</center>

### <center>\u613F\u666F\u76EE\u6807</center>

### <center>\u534F\u4F5C\u89C4\u7EA6</center>

### <center>\u5B8C\u6210\u5B9A\u4E49</center>

### <center>\u56E2\u961F\u5C55\u671B</center>

\`\`\`yaml
	  
	  
Who?
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
What?
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
How to collaborate?
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
DOD?
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
Expectation?
	  
	  
	  
\`\`\`

</div>`,frontmatter:{layout:"cover",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"},index:2,start:55,end:126,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:cb,meta:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image-left",image:"https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png?raw=true",date:"2013/7/13 20:46:25",slide:{raw:`---
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

### **<center>\u4E92\u8054\u7F51\u5BE1\u5934\u7EC4\u7EC7\u7ED3\u6784</center>**`,frontmatter:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image-left",image:"https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png?raw=true",date:"2013/7/13 20:46:25"},index:3,start:126,end:138,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:fb,meta:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image",image:"https://img-blog.csdnimg.cn/86a44651142441fcae8082289679838d.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u7EC4\u7EC7\u7ED3\u6784
layout: image
image: https://img-blog.csdnimg.cn/86a44651142441fcae8082289679838d.png
date: 2013/7/13 20:46:25
---

<!--3.2\u7EC4\u7EC7\u7ED3\u6784-->
<br><br><br><br><br><br><br>

`,title:"\u7EC4\u7EC7\u7ED3\u6784",level:1,content:`<!--3.2\u7EC4\u7EC7\u7ED3\u6784-->
<br><br><br><br><br><br><br>`,frontmatter:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image",image:"https://img-blog.csdnimg.cn/86a44651142441fcae8082289679838d.png",date:"2013/7/13 20:46:25"},index:4,start:138,end:149,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:db,meta:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image",image:"https://img-blog.csdnimg.cn/37f86b295234485b94a65cf5f07265c2.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u7EC4\u7EC7\u7ED3\u6784
layout: image
image: https://img-blog.csdnimg.cn/37f86b295234485b94a65cf5f07265c2.png
date: 2013/7/13 20:46:25
---

<!--3.3 \u7EC4\u7EC7\u67B6\u6784\uFF08\u5F31\u77E9\u9635\uFF09-->
<br><br><br><br><br><br><br>
`,title:"\u7EC4\u7EC7\u7ED3\u6784",level:1,content:`<!--3.3 \u7EC4\u7EC7\u67B6\u6784\uFF08\u5F31\u77E9\u9635\uFF09-->
<br><br><br><br><br><br><br>`,frontmatter:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image",image:"https://img-blog.csdnimg.cn/37f86b295234485b94a65cf5f07265c2.png",date:"2013/7/13 20:46:25"},index:5,start:149,end:159,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:mb,meta:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image",image:"https://img-blog.csdnimg.cn/97f0a31691f7468f9fece546c9db0c7f.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u7EC4\u7EC7\u7ED3\u6784
layout: image
image: https://img-blog.csdnimg.cn/97f0a31691f7468f9fece546c9db0c7f.png
date: 2013/7/13 20:46:25
---

<!--3.3 \u7EC4\u7EC7\u7ED3\u6784-->
<br><br><br><br><br><br><br>`,title:"\u7EC4\u7EC7\u7ED3\u6784",level:1,content:`<!--3.3 \u7EC4\u7EC7\u7ED3\u6784-->
<br><br><br><br><br><br><br>`,frontmatter:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image",image:"https://img-blog.csdnimg.cn/97f0a31691f7468f9fece546c9db0c7f.png",date:"2013/7/13 20:46:25"},index:6,start:159,end:168,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:vb,meta:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"default",image:"https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png?raw=true",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u7EC4\u7EC7\u7ED3\u6784
layout: default
image: https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png?raw=true
date: 2013/7/13 20:46:25
---
<!--1\u3001\u9879\u76EE\u7EC4\u7ED3\u6784-->


<img border="rounded" 
src="https://img-blog.csdnimg.cn/f0ccc710e3a044e99db0bbfc5fa7d3d1.jpeg"/>
`,title:"\u7EC4\u7EC7\u7ED3\u6784",level:1,content:`<!--1\u3001\u9879\u76EE\u7EC4\u7ED3\u6784-->


<img border="rounded" 
src="https://img-blog.csdnimg.cn/f0ccc710e3a044e99db0bbfc5fa7d3d1.jpeg"/>`,frontmatter:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"default",image:"https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png?raw=true",date:"2013/7/13 20:46:25"},index:7,start:168,end:180,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:V2,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/f4a81b8c0aff4c16bdff821ab30ac9a5.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/f4a81b8c0aff4c16bdff821ab30ac9a5.png
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# **\u4E3B\u7248\u672C**

\u4E3B\u6846\u67B6\u3001\u4F1A\u8BAE\u3001IM\u804A\u5929

\`\`\`ts {all|1|7|9|11|13|15|all}
PO\uFF1A \u4E01\u5B87\u535A
\u674E\u4E9A\u3001\u674E\u9633...


Member\uFF1A 

\u90B9\u676D\u7279\uFF08unity\uFF09

\u9EC4\u52B2\uFF08Android\uFF09

\u9648\u52C7\u5747\uFF08ios\uFF09

\u4F55\u667A\u52C7\uFF08\u670D\u52A1\u7AEF\uFF09

\u5F6D\u4F73\u8F89\uFF08Web\uFF09

\`\`\`
`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u4E3B\u7248\u672C**

\u4E3B\u6846\u67B6\u3001\u4F1A\u8BAE\u3001IM\u804A\u5929

\`\`\`ts {all|1|7|9|11|13|15|all}
PO\uFF1A \u4E01\u5B87\u535A
\u674E\u4E9A\u3001\u674E\u9633...


Member\uFF1A 

\u90B9\u676D\u7279\uFF08unity\uFF09

\u9EC4\u52B2\uFF08Android\uFF09

\u9648\u52C7\u5747\uFF08ios\uFF09

\u4F55\u667A\u52C7\uFF08\u670D\u52A1\u7AEF\uFF09

\u5F6D\u4F73\u8F89\uFF08Web\uFF09

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/f4a81b8c0aff4c16bdff821ab30ac9a5.png",date:"2013/7/13 20:46:25"},index:8,start:180,end:211,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:K2,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/4ce912a153284c23b475d8ac0a117bab.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/4ce912a153284c23b475d8ac0a117bab.png
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# **\u5730\u56FE\u7F16\u8F91\u5668**

\u7269\u4EF6\u6446\u653E

\`\`\`ts {all|1|7|9|11|all}
PO\uFF1A \u5218\u6167



Member\uFF1A 

\u8D75\u6069\u6069\uFF08unity\uFF09

\u4F58\u4E2D\u519B\uFF08unity\uFF09

\u5170\u56FD\u5FD7\uFF08\u540E\u7AEF\uFF09

\`\`\``,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u5730\u56FE\u7F16\u8F91\u5668**

\u7269\u4EF6\u6446\u653E

\`\`\`ts {all|1|7|9|11|all}
PO\uFF1A \u5218\u6167



Member\uFF1A 

\u8D75\u6069\u6069\uFF08unity\uFF09

\u4F58\u4E2D\u519B\uFF08unity\uFF09

\u5170\u56FD\u5FD7\uFF08\u540E\u7AEF\uFF09

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/4ce912a153284c23b475d8ac0a117bab.png",date:"2013/7/13 20:46:25"},index:9,start:211,end:237,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:G2,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/b220f60e64784c229c724b373acc4530.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/b220f60e64784c229c724b373acc4530.png
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# **\u7EC4\u4EF6\u7F16\u8F91\u5668**
\u7EC4\u4EF6\u7BA1\u7406\u6A21\u7EC4\uFF0C\u8D44\u6E90\u4E0A\u4F20\u3001\u5C5E\u6027\u8BBE\u7F6E\u3001\u7EC4\u4EF6\u751F\u6210

\`\`\`ts {all|1|7|9|11|all}
PO\uFF1A \u5218\u6167



Member\uFF1A 

\u8D75\u6069\u6069\uFF08unity\uFF09

\u4F58\u4E2D\u519B\uFF08unity\uFF09

\u5170\u56FD\u5FD7\uFF08\u540E\u7AEF\uFF09

\`\`\``,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u7EC4\u4EF6\u7F16\u8F91\u5668**
\u7EC4\u4EF6\u7BA1\u7406\u6A21\u7EC4\uFF0C\u8D44\u6E90\u4E0A\u4F20\u3001\u5C5E\u6027\u8BBE\u7F6E\u3001\u7EC4\u4EF6\u751F\u6210

\`\`\`ts {all|1|7|9|11|all}
PO\uFF1A \u5218\u6167



Member\uFF1A 

\u8D75\u6069\u6069\uFF08unity\uFF09

\u4F58\u4E2D\u519B\uFF08unity\uFF09

\u5170\u56FD\u5FD7\uFF08\u540E\u7AEF\uFF09

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/b220f60e64784c229c724b373acc4530.png",date:"2013/7/13 20:46:25"},index:10,start:237,end:262,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:e3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/1b11907fa7a74e6496f4637ba0a6bec9.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/1b11907fa7a74e6496f4637ba0a6bec9.png
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# **\u670D\u9970DIY**
\u670D\u88C5\u56FE\u7EB8\u5236\u4F5C

\`\`\`ts {all|1|7|9|all}
PO\uFF1A \u5218\u6167



Member\uFF1A 

\u53F6\u817E\u98DE\uFF08unity\uFF09

\u6768\u56FD\u6797\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u670D\u9970DIY**
\u670D\u88C5\u56FE\u7EB8\u5236\u4F5C

\`\`\`ts {all|1|7|9|all}
PO\uFF1A \u5218\u6167



Member\uFF1A 

\u53F6\u817E\u98DE\uFF08unity\uFF09

\u6768\u56FD\u6797\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/1b11907fa7a74e6496f4637ba0a6bec9.png",date:"2013/7/13 20:46:25"},index:11,start:262,end:286,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:l3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/d113f42921e14eda932604f9af396b24.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/d113f42921e14eda932604f9af396b24.png
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# **\u5267\u672C\u6740**
\u7EBF\u4E0A\u5267\u672C\u6740\u3001\u5267\u672CDIY

\`\`\`ts {all|1|7|15|all}
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

\`\`\`ts {all|1|7|15|all}
PO\uFF1A \u6768\u76CA



Member\uFF1A 

\u738B\u955E\u94A6\uFF08unity\uFF09

\u90A2\u5609\u9F99\uFF08unity\uFF09

\u5218\u6CE2\uFF08unity\uFF09

\u5F20\u8C6A\u6770\uFF08unity\uFF09

\u6768\u56FD\u6797\uFF08\u540E\u7AEF\uFF09
...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/d113f42921e14eda932604f9af396b24.png",date:"2013/7/13 20:46:25"},index:12,start:286,end:316,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:i3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/203e82b9d579414d92db9edb188b42dd.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/203e82b9d579414d92db9edb188b42dd.gif
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# **\u6211\u7684\u7C89\u4E1D\u91CC\u6709\u9B3C**
\u8D77\u4E8EB\u7AD9\u7684\u7EBF\u4E0A\u72FC\u4EBA\u6740\u6E38\u620F\u6A21\u5F0F

\`\`\`ts {all|1|7|9|all}
PO\uFF1A \u6768\u68EE



Member\uFF1A 

\u590F\u5DDD\uFF08\u540E\u7AEF\uFF09

\u8C2D\u4E16\u4FCA\uFF08unity\uFF09

\`\`\``,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u6211\u7684\u7C89\u4E1D\u91CC\u6709\u9B3C**
\u8D77\u4E8EB\u7AD9\u7684\u7EBF\u4E0A\u72FC\u4EBA\u6740\u6E38\u620F\u6A21\u5F0F

\`\`\`ts {all|1|7|9|all}
PO\uFF1A \u6768\u68EE



Member\uFF1A 

\u590F\u5DDD\uFF08\u540E\u7AEF\uFF09

\u8C2D\u4E16\u4FCA\uFF08unity\uFF09

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/203e82b9d579414d92db9edb188b42dd.gif",date:"2013/7/13 20:46:25"},index:13,start:316,end:339,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:p3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/742aa0afbb484b49b1a0975db503173f.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/742aa0afbb484b49b1a0975db503173f.gif
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# **\u5BC6\u53CB\u52A8\u6001**
3D\u6F6E\u73A9\u98CE\u6362\u88C5\u7684\u793E\u4EA4\u5E7F\u573A

\`\`\`ts {all|1|7|9|11|13|15|all}
PO\uFF1A \u674E\u96E8\u9716/\u8D75\u8F69



Member\uFF1A 

\u90B9\u676D\u7279\uFF08unity\uFF09

\u9EC4\u52B2\uFF08Android\uFF09

\u9648\u52C7\u5747\uFF08ios\uFF09

\u4F55\u667A\u52C7\uFF08\u670D\u52A1\u7AEF\uFF09

\u5F6D\u4F73\u8F89\uFF08Web\uFF09

\`\`\``,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u5BC6\u53CB\u52A8\u6001**
3D\u6F6E\u73A9\u98CE\u6362\u88C5\u7684\u793E\u4EA4\u5E7F\u573A

\`\`\`ts {all|1|7|9|11|13|15|all}
PO\uFF1A \u674E\u96E8\u9716/\u8D75\u8F69



Member\uFF1A 

\u90B9\u676D\u7279\uFF08unity\uFF09

\u9EC4\u52B2\uFF08Android\uFF09

\u9648\u52C7\u5747\uFF08ios\uFF09

\u4F55\u667A\u52C7\uFF08\u670D\u52A1\u7AEF\uFF09

\u5F6D\u4F73\u8F89\uFF08Web\uFF09

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/742aa0afbb484b49b1a0975db503173f.gif",date:"2013/7/13 20:46:25"},index:14,start:339,end:368,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:g3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/f497282637e147afbbb22c570fa588f9.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/f497282637e147afbbb22c570fa588f9.png
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# **\u4E16\u754C\u751F\u6001**
\u7ECF\u6D4E\u7CFB\u7EDF\u3001

\`\`\`ts {all|1|7|9|11}
PO\uFF1A \u8D75\u8F69



Member\uFF1A 

\u5218\u7EF4\uFF08unity\uFF09

\u6731\u5E86\u6587\uFF08web\uFF09

\u6768\u56FD\u6797\uFF08\u540E\u7AEF\uFF09

\`\`\`
`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u4E16\u754C\u751F\u6001**
\u7ECF\u6D4E\u7CFB\u7EDF\u3001

\`\`\`ts {all|1|7|9|11}
PO\uFF1A \u8D75\u8F69



Member\uFF1A 

\u5218\u7EF4\uFF08unity\uFF09

\u6731\u5E86\u6587\uFF08web\uFF09

\u6768\u56FD\u6797\uFF08\u540E\u7AEF\uFF09

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/f497282637e147afbbb22c570fa588f9.png",date:"2013/7/13 20:46:25"},index:15,start:368,end:394,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:b3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fkfx.7fzk.com%2Fwp-content%2Fuploads%2F2021%2F12%2F2021122801521187.jpg&refer=http%3A%2F%2Fkfx.7fzk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658026796&t=f9d87521e317d306903f26fbf4717637",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fkfx.7fzk.com%2Fwp-content%2Fuploads%2F2021%2F12%2F2021122801521187.jpg&refer=http%3A%2F%2Fkfx.7fzk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658026796&t=f9d87521e317d306903f26fbf4717637
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# **NFT**
NFT\u5C55\u793A\u4EA4\u6613\u3001\u4EE3\u5E01\u4F53\u7CFB

\`\`\`ts {all|1|7|9|11|13|15|all}
PO\uFF1A \u674E\u96E8\u9716



Member\uFF1A 

\u9EC4\u4ECE\u5BCC\uFF08web\uFF09

\u590F\u6587\u5175\uFF08Android\uFF09

\u9648\u52C7\u5747\uFF08ios\uFF09

\u4F55\u667A\u52C7\uFF08\u670D\u52A1\u7AEF\uFF09

\`\`\`
`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **NFT**
NFT\u5C55\u793A\u4EA4\u6613\u3001\u4EE3\u5E01\u4F53\u7CFB

\`\`\`ts {all|1|7|9|11|13|15|all}
PO\uFF1A \u674E\u96E8\u9716



Member\uFF1A 

\u9EC4\u4ECE\u5BCC\uFF08web\uFF09

\u590F\u6587\u5175\uFF08Android\uFF09

\u9648\u52C7\u5747\uFF08ios\uFF09

\u4F55\u667A\u52C7\uFF08\u670D\u52A1\u7AEF\uFF09

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fkfx.7fzk.com%2Fwp-content%2Fuploads%2F2021%2F12%2F2021122801521187.jpg&refer=http%3A%2F%2Fkfx.7fzk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658026796&t=f9d87521e317d306903f26fbf4717637",date:"2013/7/13 20:46:25"},index:16,start:394,end:422,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:C3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# **UT\u5B98\u7F51**
\u66DD\u5149\u3001\u4EA4\u6613\u7CFB\u7EDF

\`\`\`ts {all|1|7}
PO\uFF1A \u6768\u76CA/...



Member\uFF1A 

\u6731\u5E86\u6587\uFF08Web\uFF09

...

\`\`\`
`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **UT\u5B98\u7F51**
\u66DD\u5149\u3001\u4EA4\u6613\u7CFB\u7EDF

\`\`\`ts {all|1|7}
PO\uFF1A \u6768\u76CA/...



Member\uFF1A 

\u6731\u5E86\u6587\uFF08Web\uFF09

...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"},index:17,start:422,end:446,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:D3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/893a7683a8874273a54351fe4f63d53e.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/893a7683a8874273a54351fe4f63d53e.png
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# **UT\u4E2D\u53F0**
\u7BA1\u7406\u63A7\u5236\u53F0\u3001\u914D\u7F6E

\`\`\`ts {all|1|7|9}
PO\uFF1A \u90B1\u6E05\u9752



Member\uFF1A 

\u6731\u5E86\u6587\uFF08Web\uFF09

\u6C6A\u9E3F\u5B87\uFF08\u540E\u7AEF\uFF09

\`\`\`
`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **UT\u4E2D\u53F0**
\u7BA1\u7406\u63A7\u5236\u53F0\u3001\u914D\u7F6E

\`\`\`ts {all|1|7|9}
PO\uFF1A \u90B1\u6E05\u9752



Member\uFF1A 

\u6731\u5E86\u6587\uFF08Web\uFF09

\u6C6A\u9E3F\u5B87\uFF08\u540E\u7AEF\uFF09

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/893a7683a8874273a54351fe4f63d53e.png",date:"2013/7/13 20:46:25"},index:18,start:446,end:470,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:S3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/e9e2f5993886473aa9f1767a7a29a6c8.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: image-right
image: https://img-blog.csdnimg.cn/e9e2f5993886473aa9f1767a7a29a6c8.png
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# **\u7535\u73A9\u57CE**
\u7535\u73A9\u5A31\u4E50\u751F\u6001\uFF0C\u96C6\u6210\u7B2C\u4E09\u65B9\u5C0F\u6E38\u620F

\`\`\`ts {all|1|7|9|11}
PO\uFF1A \u6768\u68EE



Member\uFF1A 

\u9EC4\u4ECE\u5BCC\uFF08web\uFF09

\u53F6\u817E\u98DE\uFF08unity\uFF09

\u4F55\u667A\u52C7\uFF08\u540E\u7AEF\uFF09

\`\`\`
`,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u7535\u73A9\u57CE**
\u7535\u73A9\u5A31\u4E50\u751F\u6001\uFF0C\u96C6\u6210\u7B2C\u4E09\u65B9\u5C0F\u6E38\u620F

\`\`\`ts {all|1|7|9|11}
PO\uFF1A \u6768\u68EE



Member\uFF1A 

\u9EC4\u4ECE\u5BCC\uFF08web\uFF09

\u53F6\u817E\u98DE\uFF08unity\uFF09

\u4F55\u667A\u52C7\uFF08\u540E\u7AEF\uFF09

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/e9e2f5993886473aa9f1767a7a29a6c8.png",date:"2013/7/13 20:46:25"},index:19,start:470,end:496,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:j3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"iframe-right",url:"https://play.google.com/video/lava/web/player/yt:movie:sYvKjZKunyo?autoplay=1&authuser=0&embed=play",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u9879\u76EE\u56E2\u961F
layout: iframe-right
url: https://play.google.com/video/lava/web/player/yt:movie:sYvKjZKunyo?autoplay=1&authuser=0&embed=play
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# **\u201C\u592A\u7A7A\u72FC\u4EBA\u6740\u201D**
\u300AAmong us\u300B

\`\`\`ts {all|1|7|9|11|13|15|all}
PO\uFF1A \u8096\u9A70



Member\uFF1A 

...

\`\`\``,title:"\u9879\u76EE\u56E2\u961F",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **\u201C\u592A\u7A7A\u72FC\u4EBA\u6740\u201D**
\u300AAmong us\u300B

\`\`\`ts {all|1|7|9|11|13|15|all}
PO\uFF1A \u8096\u9A70



Member\uFF1A 

...

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"iframe-right",url:"https://play.google.com/video/lava/web/player/yt:movie:sYvKjZKunyo?autoplay=1&authuser=0&embed=play",date:"2013/7/13 20:46:25"},index:20,start:496,end:517,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:J3,meta:{title:"\u5927\u7EB2\u7ED3\u6784",layout:"default",background:"https://www.utown.io/",date:"2013/7/13 20:46:25",slide:{raw:`---
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


\`\`\`ts {all|3|5|all}


\uFF08\u5F00\u53D1\u73AF\u5883\uFF09

\u89E3\u51B3\u51B2\u7A81
\u6301\u7EED\u96C6\u6210




\`\`\`

\`\`\`ts  {all|4|5|all}


\uFF08\u6D4B\u8BD5\u73AF\u5883\uFF09


\u96C6\u4E2D\u6D4B\u8BD5
	  
	  
	  
\`\`\`

\`\`\`ts  {all|3|5|all}
	  
	  
\uFF08\u51C6\u751F\u4EA7\u73AF\u5883\uFF09
\u5168\u91CF\u6D4B\u8BD5\u22652\u8F6E
\u9664\u4F18\u5148\u7EA7\u4E3A\u201C\u4F4E\u201C\u7F3A\u9677\u6E05\u7A7A
\u7F8E\u672F\u3001UI\u3001\u4EA7\u54C1\u9A8C\u6536
	  
	  
	  
\`\`\`

\`\`\`ts {all|3|5|all}
	  
	  
\uFF08\u751F\u4EA7\u73AF\u5883\uFF09
\u5168\u91CF\u6D4B\u8BD5\u22653\u8F6E
\u7F3A\u9677\u539F\u5219\u4E0A\u6E05\u7A7A
\u7F8E\u672F\u3001UI\u3001\u4EA7\u54C1\u9A8C\u6536
\`\`\`




</div>

`,title:"\u5927\u7EB2\u7ED3\u6784",level:1,content:`<!--2\u3001\u5927\u7EB2-->
# **<center>\u5B8C\u6210\u5B9A\u4E49</center>**
<br>
<div grid="~ cols-4 gap-2" m="-t-2">

### <center>Dev</center>

### <center>Test</center>

### <center>Beta</center>

### <center>Prod</center>


\`\`\`ts {all|3|5|all}


\uFF08\u5F00\u53D1\u73AF\u5883\uFF09

\u89E3\u51B3\u51B2\u7A81
\u6301\u7EED\u96C6\u6210




\`\`\`

\`\`\`ts  {all|4|5|all}


\uFF08\u6D4B\u8BD5\u73AF\u5883\uFF09


\u96C6\u4E2D\u6D4B\u8BD5
	  
	  
	  
\`\`\`

\`\`\`ts  {all|3|5|all}
	  
	  
\uFF08\u51C6\u751F\u4EA7\u73AF\u5883\uFF09
\u5168\u91CF\u6D4B\u8BD5\u22652\u8F6E
\u9664\u4F18\u5148\u7EA7\u4E3A\u201C\u4F4E\u201C\u7F3A\u9677\u6E05\u7A7A
\u7F8E\u672F\u3001UI\u3001\u4EA7\u54C1\u9A8C\u6536
	  
	  
	  
\`\`\`

\`\`\`ts {all|3|5|all}
	  
	  
\uFF08\u751F\u4EA7\u73AF\u5883\uFF09
\u5168\u91CF\u6D4B\u8BD5\u22653\u8F6E
\u7F3A\u9677\u539F\u5219\u4E0A\u6E05\u7A7A
\u7F8E\u672F\u3001UI\u3001\u4EA7\u54C1\u9A8C\u6536
\`\`\`




</div>`,frontmatter:{title:"\u5927\u7EB2\u7ED3\u6784",layout:"default",background:"https://www.utown.io/",date:"2013/7/13 20:46:25"},index:21,start:517,end:590,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:h4,meta:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"default",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u4EA7\u54C1\u8DEF\u7EBF
layout: default
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# <center>Protocol</center>
<br>
<div grid="~ cols-5 gap-2" m="-t-2">

 <center>\u8DEF\u7EBF\u56FE </center>

 <center>\u53D1\u5E03\u8BA1\u5212</center>

 <center>\u8FED\u4EE3\u8BA1\u5212</center>

 <center>\u7528\u6237\u6545\u4E8B</center>

 <center>\u4EFB\u52A1</center>

\`\`\`yaml
	  
	  
1~2 years
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
3~12 months
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
1~4 weeks
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
3~5 days
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
1~2 days
	  
	  
	  
\`\`\`


</div>


<br>
<img 
src="https://img-blog.csdnimg.cn/bb7ba9e1a5b244c1b861d53bd00bbeb1.png"
/>`,title:"\u4EA7\u54C1\u8DEF\u7EBF",level:1,content:`<!--1\u3001\u5C01\u9762-->

# <center>Protocol</center>
<br>
<div grid="~ cols-5 gap-2" m="-t-2">

 <center>\u8DEF\u7EBF\u56FE </center>

 <center>\u53D1\u5E03\u8BA1\u5212</center>

 <center>\u8FED\u4EE3\u8BA1\u5212</center>

 <center>\u7528\u6237\u6545\u4E8B</center>

 <center>\u4EFB\u52A1</center>

\`\`\`yaml
	  
	  
1~2 years
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
3~12 months
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
1~4 weeks
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
3~5 days
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
1~2 days
	  
	  
	  
\`\`\`


</div>


<br>
<img 
src="https://img-blog.csdnimg.cn/bb7ba9e1a5b244c1b861d53bd00bbeb1.png"
/>`,frontmatter:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"default",date:"2013/7/13 20:46:25"},index:22,start:590,end:662,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:_4,meta:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"default",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u4EA7\u54C1\u8DEF\u7EBF
layout: default
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# **<center>Protocol</center>**
<br>
<center>\u53D1\u5E03\u8BA1\u5212</center>
<img
src="https://img-blog.csdnimg.cn/fbe5402b18af496fbdaa132bfea7c5a8.png"
/>


`,title:"\u4EA7\u54C1\u8DEF\u7EBF",level:1,content:`<!--1\u3001\u5C01\u9762-->

# **<center>Protocol</center>**
<br>
<center>\u53D1\u5E03\u8BA1\u5212</center>
<img
src="https://img-blog.csdnimg.cn/fbe5402b18af496fbdaa132bfea7c5a8.png"
/>`,frontmatter:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"default",date:"2013/7/13 20:46:25"},index:23,start:662,end:678,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:C4,meta:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"default",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u4EA7\u54C1\u8DEF\u7EBF
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
`,title:"\u4EA7\u54C1\u8DEF\u7EBF",level:1,content:`<!--1\u3001\u5C01\u9762-->

# <center>Protocol</center>
<br>
<center>\u8FED\u4EE3</center>
<img
src="https://img-blog.csdnimg.cn/12f66f9da8ae4aaeb751b00bb58a4a20.png"
/>`,frontmatter:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"default",date:"2013/7/13 20:46:25"},index:24,start:678,end:692,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:F4,meta:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"image-right",image:"https://img-blog.csdnimg.cn/7a354dfc23ea4fb28ce72c0de91804ab.png",date:"2013/7/13 20:46:25",slide:{raw:`---
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

# <center>\u62C6\u89E3\u539F\u5219\uFF1AMECE</center>`,frontmatter:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"image-right",image:"https://img-blog.csdnimg.cn/7a354dfc23ea4fb28ce72c0de91804ab.png",date:"2013/7/13 20:46:25"},index:25,start:692,end:711,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:G4,meta:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"default",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u4EA7\u54C1\u8DEF\u7EBF
layout: default
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->

# <center>Protocol</center>
<br>
<div grid="~ cols-5 gap-2" m="-t-2">

 <center>\u8DEF\u7EBF\u56FE </center>

 <center>\u53D1\u5E03\u8BA1\u5212</center>

 <center>\u8FED\u4EE3\u8BA1\u5212</center>

 <center>\u7528\u6237\u6545\u4E8B</center>

 <center>\u4EFB\u52A1</center>

\`\`\`yaml
	  
	  
1~2 years
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
3~12 months
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
1~4 weeks
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
3~5 days
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
1~2 days
	  
	  
	  
\`\`\`


</div>

# <center>\u65F6\u95F4\u76D2</center>
`,title:"\u4EA7\u54C1\u8DEF\u7EBF",level:1,content:`<!--1\u3001\u5C01\u9762-->

# <center>Protocol</center>
<br>
<div grid="~ cols-5 gap-2" m="-t-2">

 <center>\u8DEF\u7EBF\u56FE </center>

 <center>\u53D1\u5E03\u8BA1\u5212</center>

 <center>\u8FED\u4EE3\u8BA1\u5212</center>

 <center>\u7528\u6237\u6545\u4E8B</center>

 <center>\u4EFB\u52A1</center>

\`\`\`yaml
	  
	  
1~2 years
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
3~12 months
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
1~4 weeks
	  
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
3~5 days
	  
	  
\`\`\`

\`\`\`yaml
	  
	  
1~2 days
	  
	  
	  
\`\`\`


</div>

# <center>\u65F6\u95F4\u76D2</center>`,frontmatter:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"default",date:"2013/7/13 20:46:25"},index:26,start:711,end:780,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:l6,meta:{title:"\u5C55\u671B",layout:"image-right",image:"https://img-blog.csdnimg.cn/24bd2c170bf44c17a968658bef6263ae.png",date:"2013/7/13 20:46:25",slide:{raw:`---
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


>All team\uFF1A\u6210\u957F\u4E3A\u201C\u4E13\u5BB6\u201D\uFF08\u4E1A\u52A1\u548C\u6280\u672F\uFF09`,frontmatter:{title:"\u5C55\u671B",layout:"image-right",image:"https://img-blog.csdnimg.cn/24bd2c170bf44c17a968658bef6263ae.png",date:"2013/7/13 20:46:25"},index:27,start:780,end:804,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:r6,meta:{title:"\u5C55\u671B",layout:"end",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u5C55\u671B
layout: end
background: https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->`,title:"\u5C55\u671B",level:1,content:"",frontmatter:{title:"\u5C55\u671B",layout:"end",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"},note:"1\u3001\u5C01\u9762",index:28,start:804,end:811,notesHTML:`<p>1\u3001\u5C01\u9762</p>
`,filepath:"/Users/ios/markdown_ppt/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",component:Df,meta:{layout:"end"}}];const He=o6,a6=[{name:"play",path:"/",component:h_,children:[...He]},{name:"print",path:"/print",component:__},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>fs(()=>import("./Presenter.bac622bf.js"),["assets/Presenter.bac622bf.js","assets/Presenter.c3f07bd1.css","assets/DrawingControls.dc54c4eb.js"]),beforeEnter:e=>{if(!kn.remote||kn.remote===e.query.password)return!0;if(kn.remote&&e.query.password===void 0){const t=prompt("Enter password");if(kn.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],yt=ty({history:y1("/redis_intro/"),routes:a6});function i6(e,t,{mode:n="replace"}={}){return D({get(){const l=yt.currentRoute.value.query[e];return l==null?t!=null?t:null:Array.isArray(l)?l.filter(Boolean):l},set(l){qe(()=>{yt[_(n)]({query:Qe(_e({},yt.currentRoute.value.query),{[e]:l})})})}})}const Tf=z(0);qe(()=>{yt.afterEach(async()=>{await qe(),Tf.value+=1})});const Xt=D(()=>yt.currentRoute.value),ha=D(()=>Xt.value.query.print!==void 0),c6=D(()=>Xt.value.query.print==="clicks"),Wt=D(()=>Xt.value.query.embedded!==void 0),jt=D(()=>Xt.value.path.startsWith("/presenter")),Ls=D(()=>ha.value&&!c6.value),xo=D(()=>Xt.value.query.password),u6=D(()=>!jt.value&&(!we.remote||xo.value===we.remote)),fc=i6("clicks","0"),Ff=D(()=>He.length-1),f6=D(()=>Xt.value.path),Ve=D(()=>parseInt(f6.value.split(/\//g).slice(-1)[0])||1);D(()=>ur(Ve.value));const dt=D(()=>He.find(e=>e.path===`${Ve.value}`));D(()=>{var e,t,n;return(n=(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});D(()=>{var e,t;return(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.layout});const Mr=D(()=>He.find(e=>e.path===`${Math.min(He.length,Ve.value+1)}`)),p6=D(()=>{var e,t;return Tf.value,((t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Ft=D({get(){if(Ls.value)return 99999;let e=+(fc.value||0);return isNaN(e)&&(e=0),e},set(e){fc.value=e.toString()}}),Ul=D(()=>{var e,t,n;return+((n=(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?n:p6.value.length)}),d6=D(()=>Ve.value<He.length-1||Ft.value<Ul.value),h6=D(()=>Ve.value>1||Ft.value>0),m6=D(()=>He.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(ma(e,t),e),[])),g6=D(()=>ga(m6.value,dt.value));D(()=>ya(g6.value));function un(){Ul.value<=Ft.value?el():Ft.value+=1}async function fn(){Ft.value<=0?await tl():Ft.value-=1}function ur(e){return jt.value?`/presenter/${e}`:`/${e}`}function el(){const e=Math.min(He.length,Ve.value+1);return as(e)}async function tl(e=!0){const t=Math.max(1,Ve.value-1);await as(t),e&&Ul.value&&yt.replace({query:Qe(_e({},Xt.value.query),{clicks:Ul.value})})}function as(e,t){return yt.push({path:ur(e),query:Qe(_e({},Xt.value.query),{clicks:t})})}function y6(e){const t=z(0),{direction:n,distanceX:l,distanceY:r}=qg(e,{onSwipeStart(o){o.pointerType==="touch"&&(Xs.value||(t.value=co()))},onSwipeEnd(o){if(o.pointerType!=="touch"||!t.value||Xs.value)return;const a=Math.abs(l.value),i=Math.abs(r.value);a/window.innerWidth>.3||a>100?n.value===Yt.LEFT?un():fn():(i/window.innerHeight>.4||i>200)&&(n.value===Yt.DOWN?tl():el())}})}async function Co(){const{saveAs:e}=await fs(()=>import("./FileSaver.min.4f92ed14.js").then(function(t){return t.F}),[]);e(zu(we.download)?we.download:we.exportFilename?`${we.exportFilename}.pdf`:"/redis_intro/slidev-exported.pdf",`${we.title}.pdf`)}async function v6(e){var t,n;if(e==null){const l=(n=(t=dt.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(l!=null&&l.filepath))return!1;e=`${l.filepath}:${l.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function ma(e,t,n=1){var r,o,a,i,c;const l=(o=(r=t.meta)==null?void 0:r.slide)==null?void 0:o.level;l&&l>n&&e.length>0?ma(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((a=t.meta)==null?void 0:a.hideInToc),title:(c=(i=t.meta)==null?void 0:i.slide)==null?void 0:c.title})}function ga(e,t,n=!1,l){return e.map(r=>{const o=Qe(_e({},r),{active:r.path===(t==null?void 0:t.path),hasActiveParent:n});return o.children.length>0&&(o.children=ga(o.children,t,o.active||o.hasActiveParent,o)),l&&(o.active||o.activeParent)&&(l.activeParent=!0),o})}function ya(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>Qe(_e({},n),{children:ya(n.children,t+1)}))}function _6(){const e=we.titleTemplate.replace("%s",we.title||"Slidev");Am({title:e}),Om(`${e} - shared`),Tm(`${e} - drawings`);function t(){jt.value&&(vi("page",+Ve.value),vi("clicks",Ft.value))}yt.afterEach(t),ce(Ft,t),Pm(n=>{(+n.page!=+Ve.value||Ft.value!==n.clicks)&&yt.replace({path:ur(n.page),query:Qe(_e({},yt.currentRoute.value.query),{clicks:n.clicks||0})})})}const b6=ye({name:"App",setup(e){return H(G),_6(),(t,n)=>{const l=kt("RouterView"),r=kt("StarportCarrier");return C(),U(Ce,null,[O(l),O(r)],64)}}});function Tr(e){return e!==null&&typeof e=="object"}function ko(e,t,n=".",l){if(!Tr(t))return ko(e,{},n,l);const r=Object.assign({},t);for(const o in e){if(o==="__proto__"||o==="constructor")continue;const a=e[o];a!=null&&(l&&l(r,o,a,n)||(Array.isArray(a)&&Array.isArray(r[o])?r[o]=a.concat(r[o]):Tr(a)&&Tr(r[o])?r[o]=ko(a,r[o],(n?`${n}.`:"")+o.toString(),l):r[o]=a))}return r}function A6(e){return(...t)=>t.reduce((n,l)=>ko(n,l,"",e),{})}const w6=A6(),Rf=1/60*1e3,x6=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),If=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(x6()),Rf);function C6(e){let t=[],n=[],l=0,r=!1,o=!1;const a=new WeakSet,i={schedule:(c,f=!1,p=!1)=>{const h=p&&r,d=h?t:n;return f&&a.add(c),d.indexOf(c)===-1&&(d.push(c),h&&r&&(l=t.length)),c},cancel:c=>{const f=n.indexOf(c);f!==-1&&n.splice(f,1),a.delete(c)},process:c=>{if(r){o=!0;return}if(r=!0,[t,n]=[n,t],n.length=0,l=t.length,l)for(let f=0;f<l;f++){const p=t[f];p(c),a.has(p)&&(i.schedule(p),e())}r=!1,o&&(o=!1,i.process(c))}};return i}const k6=40;let $o=!0,nl=!1,Eo=!1;const ts={delta:0,timestamp:0},al=["read","update","preRender","render","postRender"],fr=al.reduce((e,t)=>(e[t]=C6(()=>nl=!0),e),{}),pc=al.reduce((e,t)=>{const n=fr[t];return e[t]=(l,r=!1,o=!1)=>(nl||E6(),n.schedule(l,r,o)),e},{});al.reduce((e,t)=>(e[t]=fr[t].cancel,e),{});al.reduce((e,t)=>(e[t]=()=>fr[t].process(ts),e),{});const $6=e=>fr[e].process(ts),Lf=e=>{nl=!1,ts.delta=$o?Rf:Math.max(Math.min(e-ts.timestamp,k6),1),ts.timestamp=e,Eo=!0,al.forEach($6),Eo=!1,nl&&($o=!1,If(Lf))},E6=()=>{nl=!0,$o=!0,Eo||If(Lf)},D6=()=>ts;function Nf(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]]);return n}var B6=function(){},dc=function(){};const Do=(e,t,n)=>Math.min(Math.max(n,e),t),Fr=.001,O6=.01,hc=10,P6=.05,S6=1;function M6({duration:e=800,bounce:t=.25,velocity:n=0,mass:l=1}){let r,o;B6(e<=hc*1e3);let a=1-t;a=Do(P6,S6,a),e=Do(O6,hc,e/1e3),a<1?(r=f=>{const p=f*a,h=p*e,d=p-n,m=Bo(f,a),y=Math.exp(-h);return Fr-d/m*y},o=f=>{const h=f*a*e,d=h*n+n,m=Math.pow(a,2)*Math.pow(f,2)*e,y=Math.exp(-h),A=Bo(Math.pow(f,2),a);return(-r(f)+Fr>0?-1:1)*((d-m)*y)/A}):(r=f=>{const p=Math.exp(-f*e),h=(f-n)*e+1;return-Fr+p*h},o=f=>{const p=Math.exp(-f*e),h=(n-f)*(e*e);return p*h});const i=5/e,c=F6(r,o,i);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const f=Math.pow(c,2)*l;return{stiffness:f,damping:a*2*Math.sqrt(l*f),duration:e}}}const T6=12;function F6(e,t,n){let l=n;for(let r=1;r<T6;r++)l=l-e(l)/t(l);return l}function Bo(e,t){return e*Math.sqrt(1-t*t)}const R6=["duration","bounce"],I6=["stiffness","damping","mass"];function mc(e,t){return t.some(n=>e[n]!==void 0)}function L6(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!mc(e,I6)&&mc(e,R6)){const n=M6(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function va(e){var{from:t=0,to:n=1,restSpeed:l=2,restDelta:r}=e,o=Nf(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:i,damping:c,mass:f,velocity:p,duration:h,isResolvedFromDuration:d}=L6(o),m=gc,y=gc;function A(){const b=p?-(p/1e3):0,$=n-t,x=c/(2*Math.sqrt(i*f)),k=Math.sqrt(i/f)/1e3;if(r===void 0&&(r=Math.min(Math.abs(n-t)/100,.4)),x<1){const E=Bo(k,x);m=N=>{const T=Math.exp(-x*k*N);return n-T*((b+x*k*$)/E*Math.sin(E*N)+$*Math.cos(E*N))},y=N=>{const T=Math.exp(-x*k*N);return x*k*T*(Math.sin(E*N)*(b+x*k*$)/E+$*Math.cos(E*N))-T*(Math.cos(E*N)*(b+x*k*$)-E*$*Math.sin(E*N))}}else if(x===1)m=E=>n-Math.exp(-k*E)*($+(b+k*$)*E);else{const E=k*Math.sqrt(x*x-1);m=N=>{const T=Math.exp(-x*k*N),W=Math.min(E*N,300);return n-T*((b+x*k*$)*Math.sinh(W)+E*$*Math.cosh(W))/E}}}return A(),{next:b=>{const $=m(b);if(d)a.done=b>=h;else{const x=y(b)*1e3,k=Math.abs(x)<=l,E=Math.abs(n-$)<=r;a.done=k&&E}return a.value=a.done?n:$,a},flipTarget:()=>{p=-p,[t,n]=[n,t],A()}}}va.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const gc=e=>0,jf=(e,t,n)=>{const l=t-e;return l===0?1:(n-e)/l},_a=(e,t,n)=>-n*e+n*t+e,Hf=(e,t)=>n=>Math.max(Math.min(n,t),e),Ns=e=>e%1?Number(e.toFixed(5)):e,zl=/(-)?([\d]*\.?[\d])+/g,Oo=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,N6=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function il(e){return typeof e=="string"}const pr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Vf=Object.assign(Object.assign({},pr),{transform:Hf(0,1)});Object.assign(Object.assign({},pr),{default:1});const j6=e=>({test:t=>il(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),js=j6("%");Object.assign(Object.assign({},js),{parse:e=>js.parse(e)/100,transform:e=>js.transform(e*100)});const ba=(e,t)=>n=>Boolean(il(n)&&N6.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Uf=(e,t,n)=>l=>{if(!il(l))return l;const[r,o,a,i]=l.match(zl);return{[e]:parseFloat(r),[t]:parseFloat(o),[n]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},En={test:ba("hsl","hue"),parse:Uf("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:l=1})=>"hsla("+Math.round(e)+", "+js.transform(Ns(t))+", "+js.transform(Ns(n))+", "+Ns(Vf.transform(l))+")"},H6=Hf(0,255),Rr=Object.assign(Object.assign({},pr),{transform:e=>Math.round(H6(e))}),ln={test:ba("rgb","red"),parse:Uf("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:l=1})=>"rgba("+Rr.transform(e)+", "+Rr.transform(t)+", "+Rr.transform(n)+", "+Ns(Vf.transform(l))+")"};function V6(e){let t="",n="",l="",r="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),l=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),l=e.substr(3,1),r=e.substr(4,1),t+=t,n+=n,l+=l,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(l,16),alpha:r?parseInt(r,16)/255:1}}const Po={test:ba("#"),parse:V6,transform:ln.transform},dr={test:e=>ln.test(e)||Po.test(e)||En.test(e),parse:e=>ln.test(e)?ln.parse(e):En.test(e)?En.parse(e):Po.parse(e),transform:e=>il(e)?e:e.hasOwnProperty("red")?ln.transform(e):En.transform(e)},zf="${c}",Wf="${n}";function U6(e){var t,n,l,r;return isNaN(e)&&il(e)&&((n=(t=e.match(zl))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((r=(l=e.match(Oo))===null||l===void 0?void 0:l.length)!==null&&r!==void 0?r:0)>0}function Kf(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const l=e.match(Oo);l&&(n=l.length,e=e.replace(Oo,zf),t.push(...l.map(dr.parse)));const r=e.match(zl);return r&&(e=e.replace(zl,Wf),t.push(...r.map(pr.parse))),{values:t,numColors:n,tokenised:e}}function qf(e){return Kf(e).values}function Yf(e){const{values:t,numColors:n,tokenised:l}=Kf(e),r=t.length;return o=>{let a=l;for(let i=0;i<r;i++)a=a.replace(i<n?zf:Wf,i<n?dr.transform(o[i]):Ns(o[i]));return a}}const z6=e=>typeof e=="number"?0:e;function W6(e){const t=qf(e);return Yf(e)(t.map(z6))}const Zf={test:U6,parse:qf,createTransformer:Yf,getAnimatableNone:W6};function Ir(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function yc({hue:e,saturation:t,lightness:n,alpha:l}){e/=360,t/=100,n/=100;let r=0,o=0,a=0;if(!t)r=o=a=n;else{const i=n<.5?n*(1+t):n+t-n*t,c=2*n-i;r=Ir(c,i,e+1/3),o=Ir(c,i,e),a=Ir(c,i,e-1/3)}return{red:Math.round(r*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:l}}const K6=(e,t,n)=>{const l=e*e,r=t*t;return Math.sqrt(Math.max(0,n*(r-l)+l))},q6=[Po,ln,En],vc=e=>q6.find(t=>t.test(e)),Gf=(e,t)=>{let n=vc(e),l=vc(t),r=n.parse(e),o=l.parse(t);n===En&&(r=yc(r),n=ln),l===En&&(o=yc(o),l=ln);const a=Object.assign({},r);return i=>{for(const c in a)c!=="alpha"&&(a[c]=K6(r[c],o[c],i));return a.alpha=_a(r.alpha,o.alpha,i),n.transform(a)}},Y6=e=>typeof e=="number",Z6=(e,t)=>n=>t(e(n)),Xf=(...e)=>e.reduce(Z6);function Jf(e,t){return Y6(e)?n=>_a(e,t,n):dr.test(e)?Gf(e,t):ep(e,t)}const Qf=(e,t)=>{const n=[...e],l=n.length,r=e.map((o,a)=>Jf(o,t[a]));return o=>{for(let a=0;a<l;a++)n[a]=r[a](o);return n}},G6=(e,t)=>{const n=Object.assign(Object.assign({},e),t),l={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(l[r]=Jf(e[r],t[r]));return r=>{for(const o in l)n[o]=l[o](r);return n}};function _c(e){const t=Zf.parse(e),n=t.length;let l=0,r=0,o=0;for(let a=0;a<n;a++)l||typeof t[a]=="number"?l++:t[a].hue!==void 0?o++:r++;return{parsed:t,numNumbers:l,numRGB:r,numHSL:o}}const ep=(e,t)=>{const n=Zf.createTransformer(t),l=_c(e),r=_c(t);return l.numHSL===r.numHSL&&l.numRGB===r.numRGB&&l.numNumbers>=r.numNumbers?Xf(Qf(l.parsed,r.parsed),n):a=>`${a>0?t:e}`},X6=(e,t)=>n=>_a(e,t,n);function J6(e){if(typeof e=="number")return X6;if(typeof e=="string")return dr.test(e)?Gf:ep;if(Array.isArray(e))return Qf;if(typeof e=="object")return G6}function Q6(e,t,n){const l=[],r=n||J6(e[0]),o=e.length-1;for(let a=0;a<o;a++){let i=r(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]:t;i=Xf(c,i)}l.push(i)}return l}function eA([e,t],[n]){return l=>n(jf(e,t,l))}function tA(e,t){const n=e.length,l=n-1;return r=>{let o=0,a=!1;if(r<=e[0]?a=!0:r>=e[l]&&(o=l-1,a=!0),!a){let c=1;for(;c<n&&!(e[c]>r||c===l);c++);o=c-1}const i=jf(e[o],e[o+1],r);return t[o](i)}}function tp(e,t,{clamp:n=!0,ease:l,mixer:r}={}){const o=e.length;dc(o===t.length),dc(!l||!Array.isArray(l)||l.length===o-1),e[0]>e[o-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const a=Q6(t,l,r),i=o===2?eA(e,a):tA(e,a);return n?c=>i(Do(e[0],e[o-1],c)):i}const hr=e=>t=>1-e(1-t),Aa=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,nA=e=>t=>Math.pow(t,e),np=e=>t=>t*t*((e+1)*t-e),sA=e=>{const t=np(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},sp=1.525,lA=4/11,rA=8/11,oA=9/10,lp=e=>e,wa=nA(2),aA=hr(wa),rp=Aa(wa),op=e=>1-Math.sin(Math.acos(e)),ap=hr(op),iA=Aa(ap),xa=np(sp),cA=hr(xa),uA=Aa(xa),fA=sA(sp),pA=4356/361,dA=35442/1805,hA=16061/1805,Wl=e=>{if(e===1||e===0)return e;const t=e*e;return e<lA?7.5625*t:e<rA?9.075*t-9.9*e+3.4:e<oA?pA*t-dA*e+hA:10.8*e*e-20.52*e+10.72},mA=hr(Wl),gA=e=>e<.5?.5*(1-Wl(1-e*2)):.5*Wl(e*2-1)+.5;function yA(e,t){return e.map(()=>t||rp).splice(0,e.length-1)}function vA(e){const t=e.length;return e.map((n,l)=>l!==0?l/(t-1):0)}function _A(e,t){return e.map(n=>n*t)}function Ol({from:e=0,to:t=1,ease:n,offset:l,duration:r=300}){const o={done:!1,value:e},a=Array.isArray(t)?t:[e,t],i=_A(l&&l.length===a.length?l:vA(a),r);function c(){return tp(i,a,{ease:Array.isArray(n)?n:yA(a,n)})}let f=c();return{next:p=>(o.value=f(p),o.done=p>=r,o),flipTarget:()=>{a.reverse(),f=c()}}}function bA({velocity:e=0,from:t=0,power:n=.8,timeConstant:l=350,restDelta:r=.5,modifyTarget:o}){const a={done:!1,value:t};let i=n*e;const c=t+i,f=o===void 0?c:o(c);return f!==c&&(i=f-t),{next:p=>{const h=-i*Math.exp(-p/l);return a.done=!(h>r||h<-r),a.value=a.done?f:f+h,a},flipTarget:()=>{}}}const bc={keyframes:Ol,spring:va,decay:bA};function AA(e){if(Array.isArray(e.to))return Ol;if(bc[e.type])return bc[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Ol:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?va:Ol}const ip=1/60*1e3,wA=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),cp=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(wA()),ip);function xA(e){let t=[],n=[],l=0,r=!1,o=!1;const a=new WeakSet,i={schedule:(c,f=!1,p=!1)=>{const h=p&&r,d=h?t:n;return f&&a.add(c),d.indexOf(c)===-1&&(d.push(c),h&&r&&(l=t.length)),c},cancel:c=>{const f=n.indexOf(c);f!==-1&&n.splice(f,1),a.delete(c)},process:c=>{if(r){o=!0;return}if(r=!0,[t,n]=[n,t],n.length=0,l=t.length,l)for(let f=0;f<l;f++){const p=t[f];p(c),a.has(p)&&(i.schedule(p),e())}r=!1,o&&(o=!1,i.process(c))}};return i}const CA=40;let So=!0,sl=!1,Mo=!1;const ns={delta:0,timestamp:0},cl=["read","update","preRender","render","postRender"],mr=cl.reduce((e,t)=>(e[t]=xA(()=>sl=!0),e),{}),kA=cl.reduce((e,t)=>{const n=mr[t];return e[t]=(l,r=!1,o=!1)=>(sl||DA(),n.schedule(l,r,o)),e},{}),$A=cl.reduce((e,t)=>(e[t]=mr[t].cancel,e),{});cl.reduce((e,t)=>(e[t]=()=>mr[t].process(ns),e),{});const EA=e=>mr[e].process(ns),up=e=>{sl=!1,ns.delta=So?ip:Math.max(Math.min(e-ns.timestamp,CA),1),ns.timestamp=e,Mo=!0,cl.forEach(EA),Mo=!1,sl&&(So=!1,cp(up))},DA=()=>{sl=!0,So=!0,Mo||cp(up)},BA=()=>ns;function fp(e,t,n=0){return e-t-n}function OA(e,t,n=0,l=!0){return l?fp(t+-e,t,n):t-(e-t)+n}function PA(e,t,n,l){return l?e>=t+n:e<=-n}const SA=e=>{const t=({delta:n})=>e(n);return{start:()=>kA.update(t,!0),stop:()=>$A.update(t)}};function pp(e){var t,n,{from:l,autoplay:r=!0,driver:o=SA,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:f=0,onPlay:p,onStop:h,onComplete:d,onRepeat:m,onUpdate:y}=e,A=Nf(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:b}=A,$,x=0,k=A.duration,E,N=!1,T=!0,W;const re=AA(A);!((n=(t=re).needsInterpolation)===null||n===void 0)&&n.call(t,l,b)&&(W=tp([0,100],[l,b],{clamp:!1}),l=0,b=100);const ue=re(Object.assign(Object.assign({},A),{from:l,to:b}));function pe(){x++,c==="reverse"?(T=x%2===0,a=OA(a,k,f,T)):(a=fp(a,k,f),c==="mirror"&&ue.flipTarget()),N=!1,m&&m()}function me(){$.stop(),d&&d()}function Te(Ye){if(T||(Ye=-Ye),a+=Ye,!N){const $e=ue.next(Math.max(0,a));E=$e.value,W&&(E=W(E)),N=T?$e.done:a<=0}y==null||y(E),N&&(x===0&&(k!=null||(k=a)),x<i?PA(a,k,f,T)&&pe():me())}function Ne(){p==null||p(),$=o(Te),$.start()}return r&&Ne(),{stop:()=>{h==null||h(),$.stop()}}}function dp(e,t){return t?e*(1e3/t):0}function MA({from:e=0,velocity:t=0,min:n,max:l,power:r=.8,timeConstant:o=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:f,driver:p,onUpdate:h,onComplete:d,onStop:m}){let y;function A(k){return n!==void 0&&k<n||l!==void 0&&k>l}function b(k){return n===void 0?l:l===void 0||Math.abs(n-k)<Math.abs(l-k)?n:l}function $(k){y==null||y.stop(),y=pp(Object.assign(Object.assign({},k),{driver:p,onUpdate:E=>{var N;h==null||h(E),(N=k.onUpdate)===null||N===void 0||N.call(k,E)},onComplete:d,onStop:m}))}function x(k){$(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},k))}if(A(e))x({from:e,velocity:t,to:b(e)});else{let k=r*t+e;typeof f!="undefined"&&(k=f(k));const E=b(k),N=E===n?-1:1;let T,W;const re=ue=>{T=W,W=ue,t=dp(ue-T,BA().delta),(N===1&&ue>E||N===-1&&ue<E)&&x({from:ue,to:E,velocity:t})};$({type:"decay",from:e,velocity:t,timeConstant:o,power:r,restDelta:c,modifyTarget:f,onUpdate:A(k)?re:void 0})}return{stop:()=>y==null?void 0:y.stop()}}const hp=(e,t)=>1-3*t+3*e,mp=(e,t)=>3*t-6*e,gp=e=>3*e,Kl=(e,t,n)=>((hp(t,n)*e+mp(t,n))*e+gp(t))*e,yp=(e,t,n)=>3*hp(t,n)*e*e+2*mp(t,n)*e+gp(t),TA=1e-7,FA=10;function RA(e,t,n,l,r){let o,a,i=0;do a=t+(n-t)/2,o=Kl(a,l,r)-e,o>0?n=a:t=a;while(Math.abs(o)>TA&&++i<FA);return a}const IA=8,LA=.001;function NA(e,t,n,l){for(let r=0;r<IA;++r){const o=yp(t,n,l);if(o===0)return t;t-=(Kl(t,n,l)-e)/o}return t}const Pl=11,Al=1/(Pl-1);function jA(e,t,n,l){if(e===t&&n===l)return lp;const r=new Float32Array(Pl);for(let a=0;a<Pl;++a)r[a]=Kl(a*Al,e,n);function o(a){let i=0,c=1;const f=Pl-1;for(;c!==f&&r[c]<=a;++c)i+=Al;--c;const p=(a-r[c])/(r[c+1]-r[c]),h=i+p*Al,d=yp(h,e,n);return d>=LA?NA(a,h,e,n):d===0?h:RA(a,i,i+Al,e,n)}return a=>a===0||a===1?a:Kl(o(a),t,l)}const vp=(e,t)=>n=>Math.max(Math.min(n,t),e),Hs=e=>e%1?Number(e.toFixed(5)):e,ll=/(-)?([\d]*\.?[\d])+/g,To=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,HA=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function ul(e){return typeof e=="string"}const fl={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Vs=Object.assign(Object.assign({},fl),{transform:vp(0,1)}),wl=Object.assign(Object.assign({},fl),{default:1}),Ca=e=>({test:t=>ul(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),yn=Ca("deg"),Us=Ca("%"),oe=Ca("px"),Ac=Object.assign(Object.assign({},Us),{parse:e=>Us.parse(e)/100,transform:e=>Us.transform(e*100)}),ka=(e,t)=>n=>Boolean(ul(n)&&HA.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),_p=(e,t,n)=>l=>{if(!ul(l))return l;const[r,o,a,i]=l.match(ll);return{[e]:parseFloat(r),[t]:parseFloat(o),[n]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},xl={test:ka("hsl","hue"),parse:_p("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:l=1})=>"hsla("+Math.round(e)+", "+Us.transform(Hs(t))+", "+Us.transform(Hs(n))+", "+Hs(Vs.transform(l))+")"},VA=vp(0,255),Lr=Object.assign(Object.assign({},fl),{transform:e=>Math.round(VA(e))}),Ds={test:ka("rgb","red"),parse:_p("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:l=1})=>"rgba("+Lr.transform(e)+", "+Lr.transform(t)+", "+Lr.transform(n)+", "+Hs(Vs.transform(l))+")"};function UA(e){let t="",n="",l="",r="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),l=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),l=e.substr(3,1),r=e.substr(4,1),t+=t,n+=n,l+=l,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(l,16),alpha:r?parseInt(r,16)/255:1}}const wc={test:ka("#"),parse:UA,transform:Ds.transform},wt={test:e=>Ds.test(e)||wc.test(e)||xl.test(e),parse:e=>Ds.test(e)?Ds.parse(e):xl.test(e)?xl.parse(e):wc.parse(e),transform:e=>ul(e)?e:e.hasOwnProperty("red")?Ds.transform(e):xl.transform(e)},bp="${c}",Ap="${n}";function zA(e){var t,n,l,r;return isNaN(e)&&ul(e)&&((n=(t=e.match(ll))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((r=(l=e.match(To))===null||l===void 0?void 0:l.length)!==null&&r!==void 0?r:0)>0}function wp(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const l=e.match(To);l&&(n=l.length,e=e.replace(To,bp),t.push(...l.map(wt.parse)));const r=e.match(ll);return r&&(e=e.replace(ll,Ap),t.push(...r.map(fl.parse))),{values:t,numColors:n,tokenised:e}}function xp(e){return wp(e).values}function Cp(e){const{values:t,numColors:n,tokenised:l}=wp(e),r=t.length;return o=>{let a=l;for(let i=0;i<r;i++)a=a.replace(i<n?bp:Ap,i<n?wt.transform(o[i]):Hs(o[i]));return a}}const WA=e=>typeof e=="number"?0:e;function KA(e){const t=xp(e);return Cp(e)(t.map(WA))}const $a={test:zA,parse:xp,createTransformer:Cp,getAnimatableNone:KA},qA=new Set(["brightness","contrast","saturate","opacity"]);function YA(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[l]=n.match(ll)||[];if(!l)return e;const r=n.replace(l,"");let o=qA.has(t)?1:0;return l!==n&&(o*=100),t+"("+o+r+")"}const ZA=/([a-z-]*)\(.*?\)/g,Fo=Object.assign(Object.assign({},$a),{getAnimatableNone:e=>{const t=e.match(ZA);return t?t.map(YA).join(" "):e}}),Nr={};class GA{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,l){if(!!this.subscriptions.size)for(const r of this.subscriptions)r(t,n,l)}clear(){this.subscriptions.clear()}}const xc=e=>!isNaN(parseFloat(e));class XA{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new GA,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:l,timestamp:r}=D6();this.lastUpdated!==r&&(this.timeDelta=l,this.lastUpdated=r),pc.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>pc.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=xc(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=xc(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?dp(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:l}=t(n);this.stopAnimation=l}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function JA(e){return new XA(e)}const{isArray:QA}=Array;function ew(){const e=z({}),t=l=>{const r=o=>{!e.value[o]||(e.value[o].stop(),e.value[o].destroy(),Lm(e.value,o))};l?QA(l)?l.forEach(r):r(l):Object.keys(e.value).forEach(r)},n=(l,r,o)=>{if(e.value[l])return e.value[l];const a=JA(r);return a.onChange(i=>{rt(o,l,i)}),rt(e.value,l,a),a};return sa(t),{motionValues:e,get:n,stop:t}}const tw=e=>Array.isArray(e),vn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),jr=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),nw=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Hr=()=>({type:"keyframes",ease:"linear",duration:300}),sw=e=>({type:"keyframes",duration:800,values:e}),Cc={default:nw,x:vn,y:vn,z:vn,rotate:vn,rotateX:vn,rotateY:vn,rotateZ:vn,scaleX:jr,scaleY:jr,scale:jr,backgroundColor:Hr,color:Hr,opacity:Hr},kp=(e,t)=>{let n;return tw(t)?n=sw:n=Cc[e]||Cc.default,_e({to:t},n(t))},kc=Qe(_e({},fl),{transform:Math.round}),$p={color:wt,backgroundColor:wt,outlineColor:wt,fill:wt,stroke:wt,borderColor:wt,borderTopColor:wt,borderRightColor:wt,borderBottomColor:wt,borderLeftColor:wt,borderWidth:oe,borderTopWidth:oe,borderRightWidth:oe,borderBottomWidth:oe,borderLeftWidth:oe,borderRadius:oe,radius:oe,borderTopLeftRadius:oe,borderTopRightRadius:oe,borderBottomRightRadius:oe,borderBottomLeftRadius:oe,width:oe,maxWidth:oe,height:oe,maxHeight:oe,size:oe,top:oe,right:oe,bottom:oe,left:oe,padding:oe,paddingTop:oe,paddingRight:oe,paddingBottom:oe,paddingLeft:oe,margin:oe,marginTop:oe,marginRight:oe,marginBottom:oe,marginLeft:oe,rotate:yn,rotateX:yn,rotateY:yn,rotateZ:yn,scale:wl,scaleX:wl,scaleY:wl,scaleZ:wl,skew:yn,skewX:yn,skewY:yn,distance:oe,translateX:oe,translateY:oe,translateZ:oe,x:oe,y:oe,z:oe,perspective:oe,transformPerspective:oe,opacity:Vs,originX:Ac,originY:Ac,originZ:oe,zIndex:kc,filter:Fo,WebkitFilter:Fo,fillOpacity:Vs,strokeOpacity:Vs,numOctaves:kc},Ea=e=>$p[e],Ep=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function lw(e,t){let n=Ea(e);return n!==Fo&&(n=$a),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const rw={linear:lp,easeIn:wa,easeInOut:rp,easeOut:aA,circIn:op,circInOut:iA,circOut:ap,backIn:xa,backInOut:uA,backOut:cA,anticipate:fA,bounceIn:mA,bounceInOut:gA,bounceOut:Wl},$c=e=>{if(Array.isArray(e)){const[t,n,l,r]=e;return jA(t,n,l,r)}else if(typeof e=="string")return rw[e];return e},ow=e=>Array.isArray(e)&&typeof e[0]!="number",Ec=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&$a.test(t)&&!t.startsWith("url("));function aw(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function iw(r){var o=r,{ease:e,times:t,delay:n}=o,l=gr(o,["ease","times","delay"]);const a=_e({},l);return t&&(a.offset=t),e&&(a.ease=ow(e)?e.map($c):$c(e)),n&&(a.elapsed=-n),a}function cw(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),aw(t),uw(e)||(e=_e(_e({},e),kp(n,t.to))),_e(_e({},t),iw(e))}function uw(a){var i=a,{delay:e,repeat:t,repeatType:n,repeatDelay:l,from:r}=i,o=gr(i,["delay","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(o).length}function fw(e,t){return e[t]||e.default||e}function pw(e,t,n,l,r){const o=fw(l,e);let a=o.from===null||o.from===void 0?t.get():o.from;const i=Ec(e,n);a==="none"&&i&&typeof n=="string"&&(a=lw(e,n));const c=Ec(e,a);function f(h){const d={from:a,to:n,velocity:l.velocity?l.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return o.type==="inertia"||o.type==="decay"?MA(_e(_e({},d),o)):pp(Qe(_e({},cw(o,d,e)),{onUpdate:m=>{d.onUpdate(m),o.onUpdate&&o.onUpdate(m)},onComplete:()=>{l.onComplete&&l.onComplete(),r&&r(),h&&h()}}))}function p(h){return t.set(n),l.onComplete&&l.onComplete(),r&&r(),h&&h(),{stop:()=>{}}}return!c||!i||o.type===!1?p:f}function dw(){const{motionValues:e,stop:t,get:n}=ew();return{motionValues:e,stop:t,push:(r,o,a,i={},c)=>{const f=a[r],p=n(r,f,a);if(i&&i.immediate){p.set(o);return}const h=pw(r,p,o,i,c);p.start(h)}}}function hw(e,t={},{motionValues:n,push:l,stop:r}=dw()){const o=_(t),a=z(!1),i=ce(n,d=>{a.value=Object.values(d).filter(m=>m.isAnimating()).length>0},{immediate:!0,deep:!0}),c=d=>{if(!o||!o[d])throw new Error(`The variant ${d} does not exist.`);return o[d]},f=d=>(typeof d=="string"&&(d=c(d)),Promise.all(Object.entries(d).map(([m,y])=>{if(m!=="transition")return new Promise(A=>{l(m,y,e,d.transition||kp(m,d[m]),A)})}).filter(Boolean)));return{isAnimating:a,apply:f,set:d=>{const m=Ll(d)?d:c(d);Object.entries(m).forEach(([y,A])=>{y!=="transition"&&l(y,A,e,{immediate:!0})})},stopTransitions:()=>{i(),r()},leave:async d=>{let m;if(o&&(o.leave&&(m=o.leave),!o.leave&&o.initial&&(m=o.initial)),!m){d();return}await f(m),d()}}}const Da=typeof window!="undefined",mw=()=>Da&&window.onpointerdown===null,gw=()=>Da&&window.ontouchstart===null,yw=()=>Da&&window.onmousedown===null;function vw({target:e,state:t,variants:n,apply:l}){const r=_(n),o=[],a=(...y)=>{const A=Me.apply(null,y);return o.push(A),A},i=z(!1),c=z(!1),f=z(!1),p=D(()=>{let y=[];return r&&(r.hovered&&(y=[...y,...Object.keys(r.hovered)]),r.tapped&&(y=[...y,...Object.keys(r.tapped)]),r.focused&&(y=[...y,...Object.keys(r.focused)])),y}),h=D(()=>{const y={};Object.assign(y,t.value),i.value&&r.hovered&&Object.assign(y,r.hovered),c.value&&r.tapped&&Object.assign(y,r.tapped),f.value&&r.focused&&Object.assign(y,r.focused);for(const A in y)p.value.includes(A)||delete y[A];return y});r.hovered&&(a(e,"mouseenter",()=>{i.value=!0}),a(e,"mouseleave",()=>{i.value=!1,c.value=!1}),a(e,"mouseout",()=>{i.value=!1,c.value=!1})),r.tapped&&(yw()&&(a(e,"mousedown",()=>{c.value=!0}),a(e,"mouseup",()=>{c.value=!1})),mw()&&(a(e,"pointerdown",()=>{c.value=!0}),a(e,"pointerup",()=>{c.value=!1})),gw()&&(a(e,"touchstart",()=>{c.value=!0}),a(e,"touchend",()=>{c.value=!1}))),r.focused&&(a(e,"focus",()=>{f.value=!0}),a(e,"blur",()=>{f.value=!1}));const d=ce(h,l);return{stop:()=>{o.forEach(y=>y()),d()}}}function _w({set:e,target:t,variants:n,variant:l}){const r=_(n);return{stop:ce(()=>t,()=>{!r||(r.initial&&e("initial"),r.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}}function bw({state:e,apply:t}){return{stop:ce(e,l=>{l&&t(l)},{immediate:!0})}}function Aw({target:e,variants:t,variant:n}){const l=_(t);let r=cn;if(l&&(l.visible||l.visibleOnce)){const{stop:o}=zg(e,([{isIntersecting:a}])=>{l.visible?a?n.value="visible":n.value="initial":l.visibleOnce&&(a?n.value!=="visibleOnce"&&(n.value="visibleOnce"):n.value||(n.value="initial"))});r=o}return{stop:r}}function ww(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const n=z([]);if(t.lifeCycleHooks){const{stop:r}=_w(e);n.value.push(r)}if(t.syncVariants){const{stop:r}=bw(e);n.value.push(r)}if(t.visibilityHooks){const{stop:r}=Aw(e);n.value.push(r)}if(t.eventListeners){const{stop:r}=vw(e);n.value.push(r)}const l=()=>n.value.forEach(r=>r());return sa(l),{stop:l}}function Dp(e={}){const t=Re(_e({},e)),n=z({});return ce(t,()=>{const l={};for(const[r,o]of Object.entries(t)){const a=Ea(r),i=Ep(o,a);l[r]=i}n.value=l},{immediate:!0,deep:!0}),{state:t,style:n}}const xw=["","X","Y","Z"],Cw=["perspective","translate","scale","rotate","skew"],Bp=["transformPerspective","x","y","z"];Cw.forEach(e=>{xw.forEach(t=>{const n=e+t;Bp.push(n)})});const kw=new Set(Bp);function Ba(e){return kw.has(e)}const $w=new Set(["originX","originY","originZ"]);function Op(e){return $w.has(e)}function Ew(e){const t={},n={};return Object.entries(e).forEach(([l,r])=>{Ba(l)||Op(l)?t[l]=r:n[l]=r}),{transform:t,style:n}}function Dw(e,t){let n,l;const{state:r,style:o}=Dp(),a=ce(()=>ot(e),f=>{if(!!f){l=f;for(const p of Object.keys($p))f.style[p]===null||f.style[p]===""||Ba(p)||Op(p)||rt(r,p,f.style[p]);n&&Object.entries(n).forEach(([p,h])=>rt(f.style,p,h)),t&&t(r)}},{immediate:!0}),i=ce(o,f=>{if(!l){n=f;return}for(const p in f)rt(l.style,p,f[p])},{immediate:!0});return{style:r,stop:()=>{l=void 0,n=void 0,a(),i()}}}const Bw={x:"translateX",y:"translateY",z:"translateZ"};function Pp(e={},t=!0){const n=Re(_e({},e)),l=z("");return ce(n,r=>{let o="",a=!1;t&&(r.x||r.y||r.z)&&(o+=`translate3d(${[r.x||0,r.y||0,r.z||0].map(oe.transform).join(",")}) `,a=!0);for(const[i,c]of Object.entries(r)){if(t&&(i==="x"||i==="y"||i==="z"))continue;const f=Ea(i),p=Ep(c,f);o+=`${Bw[i]||i}(${p}) `}t&&!a&&(o+="translateZ(0px) "),l.value=o.trim()},{immediate:!0,deep:!0}),{state:n,transform:l}}function Ow(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=l=>l.endsWith("px")||l.endsWith("deg")?parseFloat(l):isNaN(Number(l))?Number(l):l;return t.reduce((l,r)=>{if(!r)return l;const[o,a]=r.split("("),c=a.split(",").map(p=>n(p.endsWith(")")?p.replace(")",""):p.trim())),f=c.length===1?c[0]:c;return Qe(_e({},l),{[o]:f})},{})}function Pw(e,t){Object.entries(Ow(t)).forEach(([n,l])=>{l=parseFloat(l);const r=["x","y","z"];if(n==="translate3d"){if(l===0){r.forEach(o=>{rt(e,o,0)});return}l.forEach((o,a)=>{rt(e,r[a],o)});return}if(n==="translateX"){rt(e,"x",l);return}if(n==="translateY"){rt(e,"y",l);return}if(n==="translateZ"){rt(e,"z",l);return}rt(e,n,l)})}function Sw(e,t){let n,l;const{state:r,transform:o}=Pp(),a=ce(()=>ot(e),f=>{!f||(l=f,f.style.transform&&Pw(r,f.style.transform),n&&(f.style.transform=n),t&&t(r))},{immediate:!0}),i=ce(o,f=>{if(!l){n=f;return}l.style.transform=f},{immediate:!0});return{transform:r,stop:()=>{n=void 0,l=void 0,a(),i()}}}function Mw(e,t){const n=Re({}),l=h=>{Object.entries(h).forEach(([d,m])=>{rt(n,d,m)})},{style:r,stop:o}=Dw(e,l),{transform:a,stop:i}=Sw(e,l),c=ce(n,h=>{Object.entries(h).forEach(([d,m])=>{const y=Ba(d)?a:r;y[d]&&y[d]===m||rt(y,d,m)})},{immediate:!0,deep:!0}),f=ce(()=>ot(e),h=>{!h||t&&l(t)},{immediate:!0});return{motionProperties:n,style:r,transform:a,stop:()=>{o(),i(),c(),f()}}}function Tw(e={}){const t=_(e),n=z();return{state:D(()=>{if(!!n.value)return t[n.value]}),variant:n}}function Fw(e,t={},n){const{motionProperties:l,stop:r}=Mw(e),{variant:o,state:a}=Tw(t),i=hw(l,t),c=Qe(_e({target:e,variant:o,variants:t,state:a,motionProperties:l},i),{stop:(p=!1)=>{}}),{stop:f}=ww(c,n);return c.stop=(p=!1)=>{const h=()=>{c.stopTransitions(),r(),f()};if(!p&&t.value&&t.value.leave){const d=ce(c.isAnimating,m=>{m||(d(),h())})}else h()},sa(()=>c.stop()),ag(()=>ot(e),p=>{!p||p!=null&&p.motionInstance&&(c.stop(),Object.assign(c,p.motionInstance))}),c}const Rw=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],Iw=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&Ll(n.variants)&&(t.value=_e(_e({},t.value),n.variants)),Rw.forEach(l=>{if(l==="delay"){if(n&&n[l]&&Vm(n[l])){const r=n[l];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition=Qe(_e({},t.value.enter.transition),{delay:r})),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition=Qe(_e({},t.value.visible.transition),{delay:r})),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition=Qe(_e({},t.value.visibleOnce.transition),{delay:r})))}return}l==="visible-once"&&(l="visibleOnce"),n&&n[l]&&Ll(n[l])&&(t.value[l]=n[l])}))},Vr=e=>{const t=(l,r,o)=>{const a=r.value&&typeof r.value=="string"?r.value:o.key;a&&Nr[a]&&Nr[a].stop();const i=z(e||{});typeof r.value=="object"&&(i.value=r.value),Iw(o,i);const c=Fw(l,i);l.motionInstance=c,a&&rt(Nr,a,c)},n=l=>{l.motionInstance&&l.motionInstance.stop()};return{created:t,unmounted:n,bind:t,unbind:n,getSSRProps(l,r){const{initial:o}=l.value||r&&r.props||{},a=w6((e==null?void 0:e.initial)||{},o||{});if(!a||Object.keys(a).length===0)return;const{transform:i,style:c}=Ew(a),{transform:f}=Pp(i),{style:p}=Dp(c);return f.value&&(p.value.transform=f.value),{style:p.value}}}},Lw={initial:{opacity:0},enter:{opacity:1}},Nw={initial:{opacity:0},visible:{opacity:1}},jw={initial:{opacity:0},visibleOnce:{opacity:1}},Hw={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},Vw={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},Uw={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},zw={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Ww={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Kw={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},qw={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Yw={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Zw={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Gw={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Xw={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Jw={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Qw={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},e8={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},t8={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},n8={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},s8={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},l8={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},r8={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},o8={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},a8={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},i8={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},c8={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},u8={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},f8={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},p8={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},d8={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Dc={__proto__:null,fade:Lw,fadeVisible:Nw,fadeVisibleOnce:jw,pop:Hw,popVisible:Vw,popVisibleOnce:Uw,rollBottom:Qw,rollLeft:zw,rollRight:qw,rollTop:Gw,rollVisibleBottom:e8,rollVisibleLeft:Ww,rollVisibleRight:Yw,rollVisibleTop:Xw,rollVisibleOnceBottom:t8,rollVisibleOnceLeft:Kw,rollVisibleOnceRight:Zw,rollVisibleOnceTop:Jw,slideBottom:f8,slideLeft:n8,slideRight:r8,slideTop:i8,slideVisibleBottom:p8,slideVisibleLeft:s8,slideVisibleRight:o8,slideVisibleTop:c8,slideVisibleOnceBottom:d8,slideVisibleOnceLeft:l8,slideVisibleOnceRight:a8,slideVisibleOnceTop:u8};function h8(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",l=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(l,r=>n.charAt(t.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const m8={install(e,t){if(e.directive("motion",Vr()),!t||t&&!t.excludePresets)for(const n in Dc){const l=Dc[n];e.directive(`motion-${h8(n)}`,Vr(l))}if(t&&t.directives)for(const n in t.directives){const l=t.directives[n];l.initial,e.directive(`motion-${n}`,Vr(l))}}},Oa="vue-starport-injection",Sp="vue-starport-options",g8={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Mp={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var y8=Object.defineProperty,ql=Object.getOwnPropertySymbols,Tp=Object.prototype.hasOwnProperty,Fp=Object.prototype.propertyIsEnumerable,Bc=(e,t,n)=>t in e?y8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v8=(e,t)=>{for(var n in t||(t={}))Tp.call(t,n)&&Bc(e,n,t[n]);if(ql)for(var n of ql(t))Fp.call(t,n)&&Bc(e,n,t[n]);return e},Oc=(e,t)=>{var n={};for(var l in e)Tp.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&ql)for(var l of ql(e))t.indexOf(l)<0&&Fp.call(e,l)&&(n[l]=e[l]);return n};const _8=ye({name:"StarportProxy",props:v8({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Mp),setup(e,t){const n=H(Oa),l=D(()=>n.getInstance(e.port,e.component)),r=z(),o=l.value.generateId(),a=z(!1);return l.value.isVisible||(l.value.land(),a.value=!0),us(async()=>{l.value.el||(l.value.el=r.value,await qe(),a.value=!0,l.value.rect.update())}),rr(async()=>{l.value.rect.update(),l.value.liftOff(),l.value.el=void 0,a.value=!1,!l.value.options.keepAlive&&(await qe(),await qe(),!l.value.el&&n.dispose(l.value.port))}),ce(()=>e,async()=>{l.value.props&&await qe();const i=e,{props:c}=i,f=Oc(i,["props"]);l.value.props=c||{},l.value.setLocalOptions(f)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:c,mountedProps:f}=i,p=Oc(i,["initialProps","mountedProps"]),h=Ie(p,(a.value?f:c)||{});return Tt("div",Ie(h,{id:o,ref:r,"data-starport-proxy":l.value.componentId,"data-starport-landed":l.value.isLanded?"true":void 0,"data-starport-floating":l.value.isLanded?void 0:"true"}),t.slots.default?Tt(t.slots.default):void 0)}}});var b8=Object.defineProperty,A8=Object.defineProperties,w8=Object.getOwnPropertyDescriptors,Pc=Object.getOwnPropertySymbols,x8=Object.prototype.hasOwnProperty,C8=Object.prototype.propertyIsEnumerable,Sc=(e,t,n)=>t in e?b8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k8=(e,t)=>{for(var n in t||(t={}))x8.call(t,n)&&Sc(e,n,t[n]);if(Pc)for(var n of Pc(t))C8.call(t,n)&&Sc(e,n,t[n]);return e},$8=(e,t)=>A8(e,w8(t));const E8=ye({name:"Starport",inheritAttrs:!0,props:Mp,setup(e,t){const n=z(!1);return us(()=>{n.value=!0}),()=>{var a,i;const l=(i=(a=t.slots).default)==null?void 0:i.call(a);if(!l)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(l.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${l.length}`);const r=l[0];let o=r.type;return(!Ll(o)||ss(o))&&(o={render(){return l}}),Tt(_8,$8(k8({},e),{key:e.port,component:Ql(o),props:r.props}))}}});function D8(e){const t=Re({height:0,width:0,left:0,top:0,update:l,listen:o,pause:a}),n=Ct?document.documentElement||document.body:void 0;function l(){if(!Ct)return;const i=ot(e);if(!i)return;const{height:c,width:f,left:p,top:h}=i.getBoundingClientRect();Object.assign(t,{height:c,width:f,left:p,top:n.scrollTop+h})}const r=Zu(l,{immediate:!1});function o(){!Ct||(l(),r.resume())}function a(){r.pause()}return t}let B8="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",O8=(e,t=21)=>(n=t)=>{let l="",r=n;for(;r--;)l+=e[Math.random()*e.length|0];return l},P8=(e=21)=>{let t="",n=e;for(;n--;)t+=B8[Math.random()*64|0];return t};var S8={nanoid:P8,customAlphabet:O8};const Mc=S8.customAlphabet("abcdefghijklmnopqrstuvwxyz",5);function Tc(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function M8(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var T8=Object.defineProperty,Fc=Object.getOwnPropertySymbols,F8=Object.prototype.hasOwnProperty,R8=Object.prototype.propertyIsEnumerable,Rc=(e,t,n)=>t in e?T8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ur=(e,t)=>{for(var n in t||(t={}))F8.call(t,n)&&Rc(e,n,t[n]);if(Fc)for(var n of Fc(t))R8.call(t,n)&&Rc(e,n,t[n]);return e};function I8(e,t,n={}){const l=M8(t),r=Tc(l)||Mc(),o=z(),a=z(null),i=z(!1),c=z(!1),f=Jp(!0),p=z({}),h=D(()=>Ur(Ur(Ur({},g8),n),p.value)),d=z(0);let m;f.run(()=>{m=D8(o),ce(o,async $=>{$&&(c.value=!0),await qe(),o.value||(c.value=!1)})});const y=Tc(e);function A(){return`starport-${r}-${y}-${Mc()}`}const b=A();return Re({el:o,id:b,port:e,props:a,rect:m,scope:f,isLanded:i,isVisible:c,options:h,liftOffTime:d,component:t,componentName:l,componentId:r,generateId:A,setLocalOptions($={}){p.value=JSON.parse(JSON.stringify($))},elRef(){return o},liftOff(){!i.value||(i.value=!1,d.value=Date.now(),m.listen())},land(){i.value||(i.value=!0,m.pause())}})}function L8(e){const t=Re(new Map);function n(r,o){let a=t.get(r);return a||(a=I8(r,o,e),t.set(r,a)),a.component=o,a}function l(r){var o;(o=t.get(r))==null||o.scope.stop(),t.delete(r)}return{portMap:t,dispose:l,getInstance:n}}var N8=Object.defineProperty,j8=Object.defineProperties,H8=Object.getOwnPropertyDescriptors,Ic=Object.getOwnPropertySymbols,V8=Object.prototype.hasOwnProperty,U8=Object.prototype.propertyIsEnumerable,Lc=(e,t,n)=>t in e?N8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,z8=(e,t)=>{for(var n in t||(t={}))V8.call(t,n)&&Lc(e,n,t[n]);if(Ic)for(var n of Ic(t))U8.call(t,n)&&Lc(e,n,t[n]);return e},W8=(e,t)=>j8(e,H8(t));const K8=ye({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=H(Oa);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=D(()=>t.getInstance(e.port,e.component)),l=D(()=>{var a;return((a=n.value.el)==null?void 0:a.id)||n.value.id}),r=D(()=>{const a=Date.now()-n.value.liftOffTime,i=Math.max(0,n.value.options.duration-a),c=n.value.rect,f={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?W8(z8({},f),{zIndex:-1,display:"none"}):(n.value.isLanded?f.display="none":Object.assign(f,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:n.value.options.easing}),f)}),o={};return()=>{const a=!!(n.value.isLanded&&n.value.el);return Tt("div",{style:r.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},Tt(kh,{to:a?`#${l.value}`:"body",disabled:!a},Tt(n.value.component,Ie(o,n.value.props))))}}}),q8=ye({name:"StarportCarrier",setup(e,{slots:t}){const n=L8(H(Sp,{}));return Fn().appContext.app.provide(Oa,n),()=>{var r;return[(r=t.default)==null?void 0:r.call(t),Array.from(n.portMap.entries()).map(([o,{component:a}])=>Tt(K8,{key:o,port:o,component:a}))]}}});function Y8(e={}){return{install(t){t.provide(Sp,e),t.component("Starport",E8),t.component("StarportCarrier",q8)}}}function Z8(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(m8),e.app.use(Y8({keepAlive:!0}))}function ut(e,t,n){var l,r;return(r=((l=e.instance)==null?void 0:l.$).provides[t])!=null?r:n}function G8(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var p,h,d,m;if(Ls.value||((p=ut(n,Ts))==null?void 0:p.value))return;const l=ut(n,wn),r=ut(n,Ms),o=ut(n,ao),a=n.modifiers.hide!==!1&&n.modifiers.hide!=null,i=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((h=l==null?void 0:l.value)==null?void 0:h.length)||0,f=i?Cm:Cr;if(l&&!((d=l==null?void 0:l.value)!=null&&d.includes(t))&&l.value.push(t),n.value===null&&(n.value=l==null?void 0:l.value.length),!(o!=null&&o.value.has(n.value)))o==null||o.value.set(n.value,[t]);else if(!((m=o==null?void 0:o.value.get(n.value))!=null&&m.includes(t))){const y=(o==null?void 0:o.value.get(n.value))||[];o==null||o.value.set(n.value,[t].concat(y))}t==null||t.classList.toggle(bn,!0),r&&ce(r,()=>{var $;const y=($=r==null?void 0:r.value)!=null?$:0,A=n.value!=null?y>=n.value:y>c;t.classList.contains(kr)||t.classList.toggle(f,!A),a!==!1&&a!==void 0&&t.classList.toggle(f,A),t.classList.toggle(_s,!1);const b=o==null?void 0:o.value.get(y);b==null||b.forEach((x,k)=>{x.classList.toggle(_l,!1),k===b.length-1?x.classList.toggle(_s,!0):x.classList.toggle(_l,!0)}),t.classList.contains(_s)||t.classList.toggle(_l,A)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(bn,!1);const l=ut(n,wn);l!=null&&l.value&&io(l.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var i,c;if(Ls.value||((i=ut(n,Ts))==null?void 0:i.value))return;const l=ut(n,wn),r=ut(n,Ms),o=ut(n,ao),a=l==null?void 0:l.value.length;n.value===void 0&&(n.value=l==null?void 0:l.value.length),o!=null&&o.value.has(n.value)?(c=o==null?void 0:o.value.get(n.value))==null||c.push(t):o==null||o.value.set(n.value,[t]),t==null||t.classList.toggle(bn,!0),r&&ce(r,()=>{var p,h,d;const f=((p=r.value)!=null?p:0)>=((d=(h=n.value)!=null?h:a)!=null?d:0);t.classList.contains(kr)||t.classList.toggle(Cr,!f),t.classList.toggle(_s,!1),t.classList.contains(_s)||t.classList.toggle(_l,f)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(bn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var a,i,c;if(Ls.value||((a=ut(n,Ts))==null?void 0:a.value))return;const l=ut(n,wn),r=ut(n,Ms),o=((i=l==null?void 0:l.value)==null?void 0:i.length)||0;l&&!((c=l==null?void 0:l.value)!=null&&c.includes(t))&&l.value.push(t),t==null||t.classList.toggle(bn,!0),r&&ce(r,()=>{var h;const f=(h=r==null?void 0:r.value)!=null?h:0,p=n.value!=null?f>=n.value:f>o;t.classList.toggle(Cr,p),t.classList.toggle(kr,p)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(bn,!1);const l=ut(n,wn);l!=null&&l.value&&io(l.value,t)}})}}}function X8(e,t){const n=$f(e),l=Ef(t,n.currentRoute,n.currentPage);return{nav:Qe(_e(_e({},n),l),{downloadPDF:Co,next:un,nextSlide:el,openInEditor:v6,prev:fn,prevSlide:tl}),configs:we,themeConfigs:D(()=>we.themeConfig)}}function J8(){return{install(e){const t=X8(Xt,Ft);e.provide(G,Re(t))}}}const ms=om(b6);ms.use(yt);ms.use(_m());ms.use(G8());ms.use(J8());Z8({app:ms,router:yt});ms.mount("#app");export{Cs as $,F as A,_f as B,q as C,Ve as D,Ff as E,tt as F,be as G,c0 as H,Ce as I,ex as J,tx as K,Ft as L,Ul as M,d6 as N,Mr as O,$r as P,Xs as Q,Pr as R,d_ as S,ia as T,ca as U,u_ as V,v0 as W,Rt as X,nx as Y,_t as Z,xf as _,s as a,bl as a0,ol as a1,bo as a2,jy as a3,Hy as a4,Vy as a5,zy as a6,Jo as a7,Iu as a8,ox as a9,Vt as aa,nt as ab,J0 as ac,$n as ad,Nu as ae,Wy as af,rr as ag,D as b,U as c,ye as d,G as e,dt as f,X as g,_ as h,H as i,Qy as j,y6 as k,we as l,Am as m,Fe as n,C as o,us as p,Re as q,z as r,sx as s,Sn as t,lx as u,rx as v,ce as w,O as x,We as y,Hu as z};
