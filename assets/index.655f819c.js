var Lp=Object.defineProperty,Np=Object.defineProperties;var jp=Object.getOwnPropertyDescriptors;var dl=Object.getOwnPropertySymbols;var Fa=Object.prototype.hasOwnProperty,Ra=Object.prototype.propertyIsEnumerable;var Ta=(e,t,n)=>t in e?Lp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ve=(e,t)=>{for(var n in t||(t={}))Fa.call(t,n)&&Ta(e,n,t[n]);if(dl)for(var n of dl(t))Ra.call(t,n)&&Ta(e,n,t[n]);return e},Qe=(e,t)=>Np(e,jp(t));var yr=(e,t)=>{var n={};for(var l in e)Fa.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&dl)for(var l of dl(e))t.indexOf(l)<0&&Ra.call(e,l)&&(n[l]=e[l]);return n};const Hp=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};Hp();function Io(e,t){const n=Object.create(null),l=e.split(",");for(let r=0;r<l.length;r++)n[l[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Vp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Up=Io(Vp);function Vc(e){return!!e||e===""}function We(e){if(ne(e)){const t={};for(let n=0;n<e.length;n++){const l=e[n],r=Le(l)?Kp(l):We(l);if(r)for(const o in r)t[o]=r[o]}return t}else{if(Le(e))return e;if(Ue(e))return e}}const zp=/;(?![^(]*\))/g,Wp=/:(.+)/;function Kp(e){const t={};return e.split(zp).forEach(n=>{if(n){const l=n.split(Wp);l.length>1&&(t[l[0].trim()]=l[1].trim())}}),t}function Fe(e){let t="";if(Le(e))t=e;else if(ne(e))for(let n=0;n<e.length;n++){const l=Fe(e[n]);l&&(t+=l+" ")}else if(Ue(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function ke(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Le(t)&&(e.class=Fe(t)),n&&(e.style=We(n)),e}const Sn=e=>Le(e)?e:e==null?"":ne(e)||Ue(e)&&(e.toString===Kc||!ae(e.toString))?JSON.stringify(e,Uc,2):String(e),Uc=(e,t)=>t&&t.__v_isRef?Uc(e,t.value):Xn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[l,r])=>(n[`${l} =>`]=r,n),{})}:zc(t)?{[`Set(${t.size})`]:[...t.values()]}:Ue(t)&&!ne(t)&&!qc(t)?String(t):t,Oe={},Gn=[],St=()=>{},qp=()=>!1,Yp=/^on[^a-z]/,Zl=e=>Yp.test(e),Lo=e=>e.startsWith("onUpdate:"),st=Object.assign,No=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Zp=Object.prototype.hasOwnProperty,he=(e,t)=>Zp.call(e,t),ne=Array.isArray,Xn=e=>Gl(e)==="[object Map]",zc=e=>Gl(e)==="[object Set]",ae=e=>typeof e=="function",Le=e=>typeof e=="string",jo=e=>typeof e=="symbol",Ue=e=>e!==null&&typeof e=="object",Wc=e=>Ue(e)&&ae(e.then)&&ae(e.catch),Kc=Object.prototype.toString,Gl=e=>Kc.call(e),Gp=e=>Gl(e).slice(8,-1),qc=e=>Gl(e)==="[object Object]",Ho=e=>Le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Cl=Io(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xl=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Xp=/-(\w)/g,Ut=Xl(e=>e.replace(Xp,(t,n)=>n?n.toUpperCase():"")),Jp=/\B([A-Z])/g,Tn=Xl(e=>e.replace(Jp,"-$1").toLowerCase()),Jl=Xl(e=>e.charAt(0).toUpperCase()+e.slice(1)),_r=Xl(e=>e?`on${Jl(e)}`:""),zs=(e,t)=>!Object.is(e,t),Jn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Ml=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Wr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ia;const Qp=()=>Ia||(Ia=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let pt;class Yc{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&pt&&(this.parent=pt,this.index=(pt.scopes||(pt.scopes=[])).push(this)-1)}run(t){if(this.active){const n=pt;try{return pt=this,t()}finally{pt=n}}}on(){pt=this}off(){pt=this.parent}stop(t){if(this.active){let n,l;for(n=0,l=this.effects.length;n<l;n++)this.effects[n].stop();for(n=0,l=this.cleanups.length;n<l;n++)this.cleanups[n]();if(this.scopes)for(n=0,l=this.scopes.length;n<l;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function ed(e){return new Yc(e)}function td(e,t=pt){t&&t.active&&t.effects.push(e)}function nd(){return pt}function sd(e){pt&&pt.cleanups.push(e)}const Vo=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Zc=e=>(e.w&pn)>0,Gc=e=>(e.n&pn)>0,ld=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=pn},rd=e=>{const{deps:t}=e;if(t.length){let n=0;for(let l=0;l<t.length;l++){const r=t[l];Zc(r)&&!Gc(r)?r.delete(e):t[n++]=r,r.w&=~pn,r.n&=~pn}t.length=n}},Kr=new WeakMap;let Cs=0,pn=1;const qr=30;let Ot;const Dn=Symbol(""),Yr=Symbol("");class Uo{constructor(t,n=null,l){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,td(this,l)}run(){if(!this.active)return this.fn();let t=Ot,n=rn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ot,Ot=this,rn=!0,pn=1<<++Cs,Cs<=qr?ld(this):La(this),this.fn()}finally{Cs<=qr&&rd(this),pn=1<<--Cs,Ot=this.parent,rn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ot===this?this.deferStop=!0:this.active&&(La(this),this.onStop&&this.onStop(),this.active=!1)}}function La(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let rn=!0;const Xc=[];function cs(){Xc.push(rn),rn=!1}function us(){const e=Xc.pop();rn=e===void 0?!0:e}function _t(e,t,n){if(rn&&Ot){let l=Kr.get(e);l||Kr.set(e,l=new Map);let r=l.get(n);r||l.set(n,r=Vo()),Jc(r)}}function Jc(e,t){let n=!1;Cs<=qr?Gc(e)||(e.n|=pn,n=!Zc(e)):n=!e.has(Ot),n&&(e.add(Ot),Ot.deps.push(e))}function Zt(e,t,n,l,r,o){const a=Kr.get(e);if(!a)return;let i=[];if(t==="clear")i=[...a.values()];else if(n==="length"&&ne(e))a.forEach((c,f)=>{(f==="length"||f>=l)&&i.push(c)});else switch(n!==void 0&&i.push(a.get(n)),t){case"add":ne(e)?Ho(n)&&i.push(a.get("length")):(i.push(a.get(Dn)),Xn(e)&&i.push(a.get(Yr)));break;case"delete":ne(e)||(i.push(a.get(Dn)),Xn(e)&&i.push(a.get(Yr)));break;case"set":Xn(e)&&i.push(a.get(Dn));break}if(i.length===1)i[0]&&Zr(i[0]);else{const c=[];for(const f of i)f&&c.push(...f);Zr(Vo(c))}}function Zr(e,t){const n=ne(e)?e:[...e];for(const l of n)l.computed&&Na(l);for(const l of n)l.computed||Na(l)}function Na(e,t){(e!==Ot||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const od=Io("__proto__,__v_isRef,__isVue"),Qc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(jo)),ad=zo(),id=zo(!1,!0),cd=zo(!0),ja=ud();function ud(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const l=we(this);for(let o=0,a=this.length;o<a;o++)_t(l,"get",o+"");const r=l[t](...n);return r===-1||r===!1?l[t](...n.map(we)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){cs();const l=we(this)[t].apply(this,n);return us(),l}}),e}function zo(e=!1,t=!1){return function(l,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&o===(e?t?$d:lu:t?su:nu).get(l))return l;const a=ne(l);if(!e&&a&&he(ja,r))return Reflect.get(ja,r,o);const i=Reflect.get(l,r,o);return(jo(r)?Qc.has(r):od(r))||(e||_t(l,"get",r),t)?i:be(i)?a&&Ho(r)?i:i.value:Ue(i)?e?Yn(i):Re(i):i}}const fd=eu(),pd=eu(!0);function eu(e=!1){return function(n,l,r,o){let a=n[l];if(Ws(a)&&be(a)&&!be(r))return!1;if(!e&&!Ws(r)&&(Gr(r)||(r=we(r),a=we(a)),!ne(n)&&be(a)&&!be(r)))return a.value=r,!0;const i=ne(n)&&Ho(l)?Number(l)<n.length:he(n,l),c=Reflect.set(n,l,r,o);return n===we(o)&&(i?zs(r,a)&&Zt(n,"set",l,r):Zt(n,"add",l,r)),c}}function dd(e,t){const n=he(e,t);e[t];const l=Reflect.deleteProperty(e,t);return l&&n&&Zt(e,"delete",t,void 0),l}function hd(e,t){const n=Reflect.has(e,t);return(!jo(t)||!Qc.has(t))&&_t(e,"has",t),n}function md(e){return _t(e,"iterate",ne(e)?"length":Dn),Reflect.ownKeys(e)}const tu={get:ad,set:fd,deleteProperty:dd,has:hd,ownKeys:md},gd={get:cd,set(e,t){return!0},deleteProperty(e,t){return!0}},yd=st({},tu,{get:id,set:pd}),Wo=e=>e,Ql=e=>Reflect.getPrototypeOf(e);function hl(e,t,n=!1,l=!1){e=e.__v_raw;const r=we(e),o=we(t);n||(t!==o&&_t(r,"get",t),_t(r,"get",o));const{has:a}=Ql(r),i=l?Wo:n?Yo:Ks;if(a.call(r,t))return i(e.get(t));if(a.call(r,o))return i(e.get(o));e!==r&&e.get(t)}function ml(e,t=!1){const n=this.__v_raw,l=we(n),r=we(e);return t||(e!==r&&_t(l,"has",e),_t(l,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function gl(e,t=!1){return e=e.__v_raw,!t&&_t(we(e),"iterate",Dn),Reflect.get(e,"size",e)}function Ha(e){e=we(e);const t=we(this);return Ql(t).has.call(t,e)||(t.add(e),Zt(t,"add",e,e)),this}function Va(e,t){t=we(t);const n=we(this),{has:l,get:r}=Ql(n);let o=l.call(n,e);o||(e=we(e),o=l.call(n,e));const a=r.call(n,e);return n.set(e,t),o?zs(t,a)&&Zt(n,"set",e,t):Zt(n,"add",e,t),this}function Ua(e){const t=we(this),{has:n,get:l}=Ql(t);let r=n.call(t,e);r||(e=we(e),r=n.call(t,e)),l&&l.call(t,e);const o=t.delete(e);return r&&Zt(t,"delete",e,void 0),o}function za(){const e=we(this),t=e.size!==0,n=e.clear();return t&&Zt(e,"clear",void 0,void 0),n}function yl(e,t){return function(l,r){const o=this,a=o.__v_raw,i=we(a),c=t?Wo:e?Yo:Ks;return!e&&_t(i,"iterate",Dn),a.forEach((f,p)=>l.call(r,c(f),c(p),o))}}function _l(e,t,n){return function(...l){const r=this.__v_raw,o=we(r),a=Xn(o),i=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,f=r[e](...l),p=n?Wo:t?Yo:Ks;return!t&&_t(o,"iterate",c?Yr:Dn),{next(){const{value:h,done:d}=f.next();return d?{value:h,done:d}:{value:i?[p(h[0]),p(h[1])]:p(h),done:d}},[Symbol.iterator](){return this}}}}function Jt(e){return function(...t){return e==="delete"?!1:this}}function _d(){const e={get(o){return hl(this,o)},get size(){return gl(this)},has:ml,add:Ha,set:Va,delete:Ua,clear:za,forEach:yl(!1,!1)},t={get(o){return hl(this,o,!1,!0)},get size(){return gl(this)},has:ml,add:Ha,set:Va,delete:Ua,clear:za,forEach:yl(!1,!0)},n={get(o){return hl(this,o,!0)},get size(){return gl(this,!0)},has(o){return ml.call(this,o,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:yl(!0,!1)},l={get(o){return hl(this,o,!0,!0)},get size(){return gl(this,!0)},has(o){return ml.call(this,o,!0)},add:Jt("add"),set:Jt("set"),delete:Jt("delete"),clear:Jt("clear"),forEach:yl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=_l(o,!1,!1),n[o]=_l(o,!0,!1),t[o]=_l(o,!1,!0),l[o]=_l(o,!0,!0)}),[e,n,t,l]}const[vd,bd,wd,Ad]=_d();function Ko(e,t){const n=t?e?Ad:wd:e?bd:vd;return(l,r,o)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?l:Reflect.get(he(n,r)&&r in l?n:l,r,o)}const xd={get:Ko(!1,!1)},kd={get:Ko(!1,!0)},Cd={get:Ko(!0,!1)},nu=new WeakMap,su=new WeakMap,lu=new WeakMap,$d=new WeakMap;function Ed(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dd(e){return e.__v_skip||!Object.isExtensible(e)?0:Ed(Gp(e))}function Re(e){return Ws(e)?e:qo(e,!1,tu,xd,nu)}function Bd(e){return qo(e,!1,yd,kd,su)}function Yn(e){return qo(e,!0,gd,Cd,lu)}function qo(e,t,n,l,r){if(!Ue(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=r.get(e);if(o)return o;const a=Dd(e);if(a===0)return e;const i=new Proxy(e,a===2?l:n);return r.set(e,i),i}function Qn(e){return Ws(e)?Qn(e.__v_raw):!!(e&&e.__v_isReactive)}function Ws(e){return!!(e&&e.__v_isReadonly)}function Gr(e){return!!(e&&e.__v_isShallow)}function ru(e){return Qn(e)||Ws(e)}function we(e){const t=e&&e.__v_raw;return t?we(t):e}function er(e){return Ml(e,"__v_skip",!0),e}const Ks=e=>Ue(e)?Re(e):e,Yo=e=>Ue(e)?Yn(e):e;function Zo(e){rn&&Ot&&(e=we(e),Jc(e.dep||(e.dep=Vo())))}function Go(e,t){e=we(e),e.dep&&Zr(e.dep)}function be(e){return!!(e&&e.__v_isRef===!0)}function z(e){return ou(e,!1)}function zt(e){return ou(e,!0)}function ou(e,t){return be(e)?e:new Od(e,t)}class Od{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:we(t),this._value=n?t:Ks(t)}get value(){return Zo(this),this._value}set value(t){t=this.__v_isShallow?t:we(t),zs(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Ks(t),Go(this))}}function v(e){return be(e)?e.value:e}const Pd={get:(e,t,n)=>v(Reflect.get(e,t,n)),set:(e,t,n,l)=>{const r=e[t];return be(r)&&!be(n)?(r.value=n,!0):Reflect.set(e,t,n,l)}};function au(e){return Qn(e)?e:new Proxy(e,Pd)}class Sd{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:l}=t(()=>Zo(this),()=>Go(this));this._get=n,this._set=l}get value(){return this._get()}set value(t){this._set(t)}}function Md(e){return new Sd(e)}function Td(e){const t=ne(e)?new Array(e.length):{};for(const n in e)t[n]=Rd(e,n);return t}class Fd{constructor(t,n,l){this._object=t,this._key=n,this._defaultValue=l,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Rd(e,t,n){const l=e[t];return be(l)?l:new Fd(e,t,n)}class Id{constructor(t,n,l,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Uo(t,()=>{this._dirty||(this._dirty=!0,Go(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=l}get value(){const t=we(this);return Zo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ld(e,t,n=!1){let l,r;const o=ae(e);return o?(l=e,r=St):(l=e.get,r=e.set),new Id(l,r,o||!r,n)}function on(e,t,n,l){let r;try{r=l?e(...l):e()}catch(o){tr(o,t,n)}return r}function Mt(e,t,n,l){if(ae(e)){const o=on(e,t,n,l);return o&&Wc(o)&&o.catch(a=>{tr(a,t,n)}),o}const r=[];for(let o=0;o<e.length;o++)r.push(Mt(e[o],t,n,l));return r}function tr(e,t,n,l=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const a=t.proxy,i=n;for(;o;){const f=o.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](e,a,i)===!1)return}o=o.parent}const c=t.appContext.config.errorHandler;if(c){on(c,null,10,[e,a,i]);return}}Nd(e,n,r,l)}function Nd(e,t,n,l=!0){console.error(e)}let Tl=!1,Xr=!1;const mt=[];let qt=0;const Bs=[];let $s=null,zn=0;const Os=[];let tn=null,Wn=0;const iu=Promise.resolve();let Xo=null,Jr=null;function qe(e){const t=Xo||iu;return e?t.then(this?e.bind(this):e):t}function jd(e){let t=qt+1,n=mt.length;for(;t<n;){const l=t+n>>>1;qs(mt[l])<e?t=l+1:n=l}return t}function cu(e){(!mt.length||!mt.includes(e,Tl&&e.allowRecurse?qt+1:qt))&&e!==Jr&&(e.id==null?mt.push(e):mt.splice(jd(e.id),0,e),uu())}function uu(){!Tl&&!Xr&&(Xr=!0,Xo=iu.then(du))}function Hd(e){const t=mt.indexOf(e);t>qt&&mt.splice(t,1)}function fu(e,t,n,l){ne(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?l+1:l))&&n.push(e),uu()}function Vd(e){fu(e,$s,Bs,zn)}function Ud(e){fu(e,tn,Os,Wn)}function nr(e,t=null){if(Bs.length){for(Jr=t,$s=[...new Set(Bs)],Bs.length=0,zn=0;zn<$s.length;zn++)$s[zn]();$s=null,zn=0,Jr=null,nr(e,t)}}function pu(e){if(nr(),Os.length){const t=[...new Set(Os)];if(Os.length=0,tn){tn.push(...t);return}for(tn=t,tn.sort((n,l)=>qs(n)-qs(l)),Wn=0;Wn<tn.length;Wn++)tn[Wn]();tn=null,Wn=0}}const qs=e=>e.id==null?1/0:e.id;function du(e){Xr=!1,Tl=!0,nr(e),mt.sort((n,l)=>qs(n)-qs(l));const t=St;try{for(qt=0;qt<mt.length;qt++){const n=mt[qt];n&&n.active!==!1&&on(n,null,14)}}finally{qt=0,mt.length=0,pu(),Tl=!1,Xo=null,(mt.length||Bs.length||Os.length)&&du(e)}}function zd(e,t,...n){if(e.isUnmounted)return;const l=e.vnode.props||Oe;let r=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in l){const p=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:d}=l[p]||Oe;d&&(r=n.map(m=>m.trim())),h&&(r=n.map(Wr))}let i,c=l[i=_r(t)]||l[i=_r(Ut(t))];!c&&o&&(c=l[i=_r(Tn(t))]),c&&Mt(c,e,6,r);const f=l[i+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Mt(f,e,6,r)}}function hu(e,t,n=!1){const l=t.emitsCache,r=l.get(e);if(r!==void 0)return r;const o=e.emits;let a={},i=!1;if(!ae(e)){const c=f=>{const p=hu(f,t,!0);p&&(i=!0,st(a,p))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!i?(l.set(e,null),null):(ne(o)?o.forEach(c=>a[c]=null):st(a,o),l.set(e,a),a)}function sr(e,t){return!e||!Zl(t)?!1:(t=t.slice(2).replace(/Once$/,""),he(e,t[0].toLowerCase()+t.slice(1))||he(e,Tn(t))||he(e,t))}let Ze=null,lr=null;function Fl(e){const t=Ze;return Ze=e,lr=e&&e.type.__scopeId||null,t}function ux(e){lr=e}function fx(){lr=null}function F(e,t=Ze,n){if(!t||e._n)return e;const l=(...r)=>{l._d&&ni(-1);const o=Fl(t),a=e(...r);return Fl(o),l._d&&ni(1),a};return l._n=!0,l._c=!0,l._d=!0,l}function vr(e){const{type:t,vnode:n,proxy:l,withProxy:r,props:o,propsOptions:[a],slots:i,attrs:c,emit:f,render:p,renderCache:h,data:d,setupState:m,ctx:y,inheritAttrs:w}=e;let b,$;const x=Fl(e);try{if(n.shapeFlag&4){const E=r||l;b=Nt(p.call(E,E,h,o,m,d,y)),$=c}else{const E=t;b=Nt(E.length>1?E(o,{attrs:c,slots:i,emit:f}):E(o,null)),$=t.props?c:Wd(c)}}catch(E){Ss.length=0,tr(E,e,1),b=O(dn)}let C=b;if($&&w!==!1){const E=Object.keys($),{shapeFlag:N}=C;E.length&&N&7&&(a&&E.some(Lo)&&($=Kd($,a)),C=Mn(C,$))}return n.dirs&&(C=Mn(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),b=C,Fl(x),b}const Wd=e=>{let t;for(const n in e)(n==="class"||n==="style"||Zl(n))&&((t||(t={}))[n]=e[n]);return t},Kd=(e,t)=>{const n={};for(const l in e)(!Lo(l)||!(l.slice(9)in t))&&(n[l]=e[l]);return n};function qd(e,t,n){const{props:l,children:r,component:o}=e,{props:a,children:i,patchFlag:c}=t,f=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return l?Wa(l,a,f):!!a;if(c&8){const p=t.dynamicProps;for(let h=0;h<p.length;h++){const d=p[h];if(a[d]!==l[d]&&!sr(f,d))return!0}}}else return(r||i)&&(!i||!i.$stable)?!0:l===a?!1:l?a?Wa(l,a,f):!0:!!a;return!1}function Wa(e,t,n){const l=Object.keys(t);if(l.length!==Object.keys(e).length)return!0;for(let r=0;r<l.length;r++){const o=l[r];if(t[o]!==e[o]&&!sr(n,o))return!0}return!1}function Yd({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const mu=e=>e.__isSuspense;function Zd(e,t){t&&t.pendingBranch?ne(e)?t.effects.push(...e):t.effects.push(e):Ud(e)}function ht(e,t){if(ze){let n=ze.provides;const l=ze.parent&&ze.parent.provides;l===n&&(n=ze.provides=Object.create(l)),n[e]=t}}function H(e,t,n=!1){const l=ze||Ze;if(l){const r=l.parent==null?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&ae(t)?t.call(l.proxy):t}}function ol(e,t){return Jo(e,null,t)}const Ka={};function ce(e,t,n){return Jo(e,t,n)}function Jo(e,t,{immediate:n,deep:l,flush:r,onTrack:o,onTrigger:a}=Oe){const i=ze;let c,f=!1,p=!1;if(be(e)?(c=()=>e.value,f=Gr(e)):Qn(e)?(c=()=>e,l=!0):ne(e)?(p=!0,f=e.some($=>Qn($)||Gr($)),c=()=>e.map($=>{if(be($))return $.value;if(Qn($))return kn($);if(ae($))return on($,i,2)})):ae(e)?t?c=()=>on(e,i,2):c=()=>{if(!(i&&i.isUnmounted))return h&&h(),Mt(e,i,3,[d])}:c=St,t&&l){const $=c;c=()=>kn($())}let h,d=$=>{h=b.onStop=()=>{on($,i,4)}};if(Gs)return d=St,t?n&&Mt(t,i,3,[c(),p?[]:void 0,d]):c(),St;let m=p?[]:Ka;const y=()=>{if(!!b.active)if(t){const $=b.run();(l||f||(p?$.some((x,C)=>zs(x,m[C])):zs($,m)))&&(h&&h(),Mt(t,i,3,[$,m===Ka?void 0:m,d]),m=$)}else b.run()};y.allowRecurse=!!t;let w;r==="sync"?w=y:r==="post"?w=()=>Ke(y,i&&i.suspense):w=()=>Vd(y);const b=new Uo(c,w);return t?n?y():m=b.run():r==="post"?Ke(b.run.bind(b),i&&i.suspense):b.run(),()=>{b.stop(),i&&i.scope&&No(i.scope.effects,b)}}function Gd(e,t,n){const l=this.proxy,r=Le(e)?e.includes(".")?gu(l,e):()=>l[e]:e.bind(l,l);let o;ae(t)?o=t:(o=t.handler,n=t);const a=ze;rs(this);const i=Jo(r,o.bind(l),n);return a?rs(a):Bn(),i}function gu(e,t){const n=t.split(".");return()=>{let l=e;for(let r=0;r<n.length&&l;r++)l=l[n[r]];return l}}function kn(e,t){if(!Ue(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),be(e))kn(e.value,t);else if(ne(e))for(let n=0;n<e.length;n++)kn(e[n],t);else if(zc(e)||Xn(e))e.forEach(n=>{kn(n,t)});else if(qc(e))for(const n in e)kn(e[n],t);return e}function yu(e,t){e.shapeFlag&6&&e.component?yu(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ye(e){return ae(e)?{setup:e,name:e.name}:e}const es=e=>!!e.type.__asyncLoader,_u=e=>e.type.__isKeepAlive,Xd={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Fn(),l=n.ctx;if(!l.renderer)return()=>{const x=t.default&&t.default();return x&&x.length===1?x[0]:x};const r=new Map,o=new Set;let a=null;const i=n.suspense,{renderer:{p:c,m:f,um:p,o:{createElement:h}}}=l,d=h("div");l.activate=(x,C,E,N,T)=>{const W=x.component;f(x,C,E,0,i),c(W.vnode,x,C,E,W,i,N,x.slotScopeIds,T),Ke(()=>{W.isDeactivated=!1,W.a&&Jn(W.a);const re=x.props&&x.props.onVnodeMounted;re&&wt(re,W.parent,x)},i)},l.deactivate=x=>{const C=x.component;f(x,d,null,1,i),Ke(()=>{C.da&&Jn(C.da);const E=x.props&&x.props.onVnodeUnmounted;E&&wt(E,C.parent,x),C.isDeactivated=!0},i)};function m(x){br(x),p(x,n,i,!0)}function y(x){r.forEach((C,E)=>{const N=ro(C.type);N&&(!x||!x(N))&&w(E)})}function w(x){const C=r.get(x);!a||C.type!==a.type?m(C):a&&br(a),r.delete(x),o.delete(x)}ce(()=>[e.include,e.exclude],([x,C])=>{x&&y(E=>Es(x,E)),C&&y(E=>!Es(C,E))},{flush:"post",deep:!0});let b=null;const $=()=>{b!=null&&r.set(b,wr(n.subTree))};return fs($),Au($),or(()=>{r.forEach(x=>{const{subTree:C,suspense:E}=n,N=wr(C);if(x.type===N.type){br(N);const T=N.component.da;T&&Ke(T,E);return}m(x)})}),()=>{if(b=null,!t.default)return null;const x=t.default(),C=x[0];if(x.length>1)return a=null,x;if(!ls(C)||!(C.shapeFlag&4)&&!(C.shapeFlag&128))return a=null,C;let E=wr(C);const N=E.type,T=ro(es(E)?E.type.__asyncResolved||{}:N),{include:W,exclude:re,max:ue}=e;if(W&&(!T||!Es(W,T))||re&&T&&Es(re,T))return a=E,C;const pe=E.key==null?N:E.key,me=r.get(pe);return E.el&&(E=Mn(E),C.shapeFlag&128&&(C.ssContent=E)),b=pe,me?(E.el=me.el,E.component=me.component,E.transition&&yu(E,E.transition),E.shapeFlag|=512,o.delete(pe),o.add(pe)):(o.add(pe),ue&&o.size>parseInt(ue,10)&&w(o.values().next().value)),E.shapeFlag|=256,a=E,mu(C.type)?C:E}}},vu=Xd;function Es(e,t){return ne(e)?e.some(n=>Es(n,t)):Le(e)?e.split(",").includes(t):e.test?e.test(t):!1}function Jd(e,t){bu(e,"a",t)}function Qd(e,t){bu(e,"da",t)}function bu(e,t,n=ze){const l=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(rr(t,l,n),n){let r=n.parent;for(;r&&r.parent;)_u(r.parent.vnode)&&eh(l,t,n,r),r=r.parent}}function eh(e,t,n,l){const r=rr(t,e,l,!0);ar(()=>{No(l[t],r)},n)}function br(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function wr(e){return e.shapeFlag&128?e.ssContent:e}function rr(e,t,n=ze,l=!1){if(n){const r=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;cs(),rs(n);const i=Mt(t,n,e,a);return Bn(),us(),i});return l?r.unshift(o):r.push(o),o}}const Gt=e=>(t,n=ze)=>(!Gs||e==="sp")&&rr(e,t,n),wu=Gt("bm"),fs=Gt("m"),th=Gt("bu"),Au=Gt("u"),or=Gt("bum"),ar=Gt("um"),nh=Gt("sp"),sh=Gt("rtg"),lh=Gt("rtc");function rh(e,t=ze){rr("ec",e,t)}function Ys(e,t){const n=Ze;if(n===null)return e;const l=cr(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[a,i,c,f=Oe]=t[o];ae(a)&&(a={mounted:a,updated:a}),a.deep&&kn(i),r.push({dir:a,instance:l,value:i,oldValue:void 0,arg:c,modifiers:f})}return e}function mn(e,t,n,l){const r=e.dirs,o=t&&t.dirs;for(let a=0;a<r.length;a++){const i=r[a];o&&(i.oldValue=o[a].value);let c=i.dir[l];c&&(cs(),Mt(c,n,8,[e.el,i,e,t]),us())}}const xu="components",oh="directives";function Ct(e,t){return ku(xu,e,!0,t)||e}const ah=Symbol();function qa(e){return ku(oh,e)}function ku(e,t,n=!0,l=!1){const r=Ze||ze;if(r){const o=r.type;if(e===xu){const i=ro(o);if(i&&(i===t||i===Ut(t)||i===Jl(Ut(t))))return o}const a=Ya(r[e]||o[e],t)||Ya(r.appContext[e],t);return!a&&l?o:a}}function Ya(e,t){return e&&(e[t]||e[Ut(t)]||e[Jl(Ut(t))])}function al(e,t,n,l){let r;const o=n&&n[l];if(ne(e)||Le(e)){r=new Array(e.length);for(let a=0,i=e.length;a<i;a++)r[a]=t(e[a],a,void 0,o&&o[a])}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,o&&o[a])}else if(Ue(e))if(e[Symbol.iterator])r=Array.from(e,(a,i)=>t(a,i,void 0,o&&o[i]));else{const a=Object.keys(e);r=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const f=a[i];r[i]=t(e[f],f,i,o&&o[i])}}else r=[];return n&&(n[l]=r),r}function vt(e,t,n={},l,r){if(Ze.isCE||Ze.parent&&es(Ze.parent)&&Ze.parent.isCE)return O("slot",t==="default"?null:{name:t},l&&l());let o=e[t];o&&o._c&&(o._d=!1),k();const a=o&&Cu(o(n)),i=X(Ce,{key:n.key||`_${t}`},a||(l?l():[]),a&&e._===1?64:-2);return!r&&i.scopeId&&(i.slotScopeIds=[i.scopeId+"-s"]),o&&o._c&&(o._d=!0),i}function Cu(e){return e.some(t=>ls(t)?!(t.type===dn||t.type===Ce&&!Cu(t.children)):!0)?e:null}const Qr=e=>e?Ru(e)?cr(e)||e.proxy:Qr(e.parent):null,Rl=st(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qr(e.parent),$root:e=>Qr(e.root),$emit:e=>e.emit,$options:e=>Eu(e),$forceUpdate:e=>e.f||(e.f=()=>cu(e.update)),$nextTick:e=>e.n||(e.n=qe.bind(e.proxy)),$watch:e=>Gd.bind(e)}),ih={get({_:e},t){const{ctx:n,setupState:l,data:r,props:o,accessCache:a,type:i,appContext:c}=e;let f;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return l[t];case 2:return r[t];case 4:return n[t];case 3:return o[t]}else{if(l!==Oe&&he(l,t))return a[t]=1,l[t];if(r!==Oe&&he(r,t))return a[t]=2,r[t];if((f=e.propsOptions[0])&&he(f,t))return a[t]=3,o[t];if(n!==Oe&&he(n,t))return a[t]=4,n[t];eo&&(a[t]=0)}}const p=Rl[t];let h,d;if(p)return t==="$attrs"&&_t(e,"get",t),p(e);if((h=i.__cssModules)&&(h=h[t]))return h;if(n!==Oe&&he(n,t))return a[t]=4,n[t];if(d=c.config.globalProperties,he(d,t))return d[t]},set({_:e},t,n){const{data:l,setupState:r,ctx:o}=e;return r!==Oe&&he(r,t)?(r[t]=n,!0):l!==Oe&&he(l,t)?(l[t]=n,!0):he(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:l,appContext:r,propsOptions:o}},a){let i;return!!n[a]||e!==Oe&&he(e,a)||t!==Oe&&he(t,a)||(i=o[0])&&he(i,a)||he(l,a)||he(Rl,a)||he(r.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:he(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let eo=!0;function ch(e){const t=Eu(e),n=e.proxy,l=e.ctx;eo=!1,t.beforeCreate&&Za(t.beforeCreate,e,"bc");const{data:r,computed:o,methods:a,watch:i,provide:c,inject:f,created:p,beforeMount:h,mounted:d,beforeUpdate:m,updated:y,activated:w,deactivated:b,beforeDestroy:$,beforeUnmount:x,destroyed:C,unmounted:E,render:N,renderTracked:T,renderTriggered:W,errorCaptured:re,serverPrefetch:ue,expose:pe,inheritAttrs:me,components:Te,directives:Ne,filters:Ye}=t;if(f&&uh(f,l,null,e.appContext.config.unwrapInjectedRef),a)for(const se in a){const ee=a[se];ae(ee)&&(l[se]=ee.bind(n))}if(r){const se=r.call(n,n);Ue(se)&&(e.data=Re(se))}if(eo=!0,o)for(const se in o){const ee=o[se],de=ae(ee)?ee.bind(n,n):ae(ee.get)?ee.get.bind(n,n):St,It=!ae(ee)&&ae(ee.set)?ee.set.bind(n):St,Je=D({get:de,set:It});Object.defineProperty(l,se,{enumerable:!0,configurable:!0,get:()=>Je.value,set:bt=>Je.value=bt})}if(i)for(const se in i)$u(i[se],l,n,se);if(c){const se=ae(c)?c.call(n):c;Reflect.ownKeys(se).forEach(ee=>{ht(ee,se[ee])})}p&&Za(p,e,"c");function te(se,ee){ne(ee)?ee.forEach(de=>se(de.bind(n))):ee&&se(ee.bind(n))}if(te(wu,h),te(fs,d),te(th,m),te(Au,y),te(Jd,w),te(Qd,b),te(rh,re),te(lh,T),te(sh,W),te(or,x),te(ar,E),te(nh,ue),ne(pe))if(pe.length){const se=e.exposed||(e.exposed={});pe.forEach(ee=>{Object.defineProperty(se,ee,{get:()=>n[ee],set:de=>n[ee]=de})})}else e.exposed||(e.exposed={});N&&e.render===St&&(e.render=N),me!=null&&(e.inheritAttrs=me),Te&&(e.components=Te),Ne&&(e.directives=Ne)}function uh(e,t,n=St,l=!1){ne(e)&&(e=to(e));for(const r in e){const o=e[r];let a;Ue(o)?"default"in o?a=H(o.from||r,o.default,!0):a=H(o.from||r):a=H(o),be(a)&&l?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):t[r]=a}}function Za(e,t,n){Mt(ne(e)?e.map(l=>l.bind(t.proxy)):e.bind(t.proxy),t,n)}function $u(e,t,n,l){const r=l.includes(".")?gu(n,l):()=>n[l];if(Le(e)){const o=t[e];ae(o)&&ce(r,o)}else if(ae(e))ce(r,e.bind(n));else if(Ue(e))if(ne(e))e.forEach(o=>$u(o,t,n,l));else{const o=ae(e.handler)?e.handler.bind(n):t[e.handler];ae(o)&&ce(r,o,e)}}function Eu(e){const t=e.type,{mixins:n,extends:l}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,i=o.get(t);let c;return i?c=i:!r.length&&!n&&!l?c=t:(c={},r.length&&r.forEach(f=>Il(c,f,a,!0)),Il(c,t,a)),o.set(t,c),c}function Il(e,t,n,l=!1){const{mixins:r,extends:o}=t;o&&Il(e,o,n,!0),r&&r.forEach(a=>Il(e,a,n,!0));for(const a in t)if(!(l&&a==="expose")){const i=fh[a]||n&&n[a];e[a]=i?i(e[a],t[a]):t[a]}return e}const fh={data:Ga,props:vn,emits:vn,methods:vn,computed:vn,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:vn,directives:vn,watch:dh,provide:Ga,inject:ph};function Ga(e,t){return t?e?function(){return st(ae(e)?e.call(this,this):e,ae(t)?t.call(this,this):t)}:t:e}function ph(e,t){return vn(to(e),to(t))}function to(e){if(ne(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function et(e,t){return e?[...new Set([].concat(e,t))]:t}function vn(e,t){return e?st(st(Object.create(null),e),t):t}function dh(e,t){if(!e)return t;if(!t)return e;const n=st(Object.create(null),e);for(const l in t)n[l]=et(e[l],t[l]);return n}function hh(e,t,n,l=!1){const r={},o={};Ml(o,ir,1),e.propsDefaults=Object.create(null),Du(e,t,r,o);for(const a in e.propsOptions[0])a in r||(r[a]=void 0);n?e.props=l?r:Bd(r):e.type.props?e.props=r:e.props=o,e.attrs=o}function mh(e,t,n,l){const{props:r,attrs:o,vnode:{patchFlag:a}}=e,i=we(r),[c]=e.propsOptions;let f=!1;if((l||a>0)&&!(a&16)){if(a&8){const p=e.vnode.dynamicProps;for(let h=0;h<p.length;h++){let d=p[h];if(sr(e.emitsOptions,d))continue;const m=t[d];if(c)if(he(o,d))m!==o[d]&&(o[d]=m,f=!0);else{const y=Ut(d);r[y]=no(c,i,y,m,e,!1)}else m!==o[d]&&(o[d]=m,f=!0)}}}else{Du(e,t,r,o)&&(f=!0);let p;for(const h in i)(!t||!he(t,h)&&((p=Tn(h))===h||!he(t,p)))&&(c?n&&(n[h]!==void 0||n[p]!==void 0)&&(r[h]=no(c,i,h,void 0,e,!0)):delete r[h]);if(o!==i)for(const h in o)(!t||!he(t,h)&&!0)&&(delete o[h],f=!0)}f&&Zt(e,"set","$attrs")}function Du(e,t,n,l){const[r,o]=e.propsOptions;let a=!1,i;if(t)for(let c in t){if(Cl(c))continue;const f=t[c];let p;r&&he(r,p=Ut(c))?!o||!o.includes(p)?n[p]=f:(i||(i={}))[p]=f:sr(e.emitsOptions,c)||(!(c in l)||f!==l[c])&&(l[c]=f,a=!0)}if(o){const c=we(n),f=i||Oe;for(let p=0;p<o.length;p++){const h=o[p];n[h]=no(r,c,h,f[h],e,!he(f,h))}}return a}function no(e,t,n,l,r,o){const a=e[n];if(a!=null){const i=he(a,"default");if(i&&l===void 0){const c=a.default;if(a.type!==Function&&ae(c)){const{propsDefaults:f}=r;n in f?l=f[n]:(rs(r),l=f[n]=c.call(null,t),Bn())}else l=c}a[0]&&(o&&!i?l=!1:a[1]&&(l===""||l===Tn(n))&&(l=!0))}return l}function Bu(e,t,n=!1){const l=t.propsCache,r=l.get(e);if(r)return r;const o=e.props,a={},i=[];let c=!1;if(!ae(e)){const p=h=>{c=!0;const[d,m]=Bu(h,t,!0);st(a,d),m&&i.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!o&&!c)return l.set(e,Gn),Gn;if(ne(o))for(let p=0;p<o.length;p++){const h=Ut(o[p]);Xa(h)&&(a[h]=Oe)}else if(o)for(const p in o){const h=Ut(p);if(Xa(h)){const d=o[p],m=a[h]=ne(d)||ae(d)?{type:d}:d;if(m){const y=ei(Boolean,m.type),w=ei(String,m.type);m[0]=y>-1,m[1]=w<0||y<w,(y>-1||he(m,"default"))&&i.push(h)}}}const f=[a,i];return l.set(e,f),f}function Xa(e){return e[0]!=="$"}function Ja(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Qa(e,t){return Ja(e)===Ja(t)}function ei(e,t){return ne(t)?t.findIndex(n=>Qa(n,e)):ae(t)&&Qa(t,e)?0:-1}const Ou=e=>e[0]==="_"||e==="$stable",Qo=e=>ne(e)?e.map(Nt):[Nt(e)],gh=(e,t,n)=>{if(t._n)return t;const l=F((...r)=>Qo(t(...r)),n);return l._c=!1,l},Pu=(e,t,n)=>{const l=e._ctx;for(const r in e){if(Ou(r))continue;const o=e[r];if(ae(o))t[r]=gh(r,o,l);else if(o!=null){const a=Qo(o);t[r]=()=>a}}},Su=(e,t)=>{const n=Qo(t);e.slots.default=()=>n},yh=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=we(t),Ml(t,"_",n)):Pu(t,e.slots={})}else e.slots={},t&&Su(e,t);Ml(e.slots,ir,1)},_h=(e,t,n)=>{const{vnode:l,slots:r}=e;let o=!0,a=Oe;if(l.shapeFlag&32){const i=t._;i?n&&i===1?o=!1:(st(r,t),!n&&i===1&&delete r._):(o=!t.$stable,Pu(t,r)),a=t}else t&&(Su(e,t),a={default:1});if(o)for(const i in r)!Ou(i)&&!(i in a)&&delete r[i]};function Mu(){return{app:null,config:{isNativeTag:qp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vh=0;function bh(e,t){return function(l,r=null){ae(l)||(l=Object.assign({},l)),r!=null&&!Ue(r)&&(r=null);const o=Mu(),a=new Set;let i=!1;const c=o.app={_uid:vh++,_component:l,_props:r,_container:null,_context:o,_instance:null,version:Lh,get config(){return o.config},set config(f){},use(f,...p){return a.has(f)||(f&&ae(f.install)?(a.add(f),f.install(c,...p)):ae(f)&&(a.add(f),f(c,...p))),c},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),c},component(f,p){return p?(o.components[f]=p,c):o.components[f]},directive(f,p){return p?(o.directives[f]=p,c):o.directives[f]},mount(f,p,h){if(!i){const d=O(l,r);return d.appContext=o,p&&t?t(d,f):e(d,f,h),i=!0,c._container=f,f.__vue_app__=c,cr(d.component)||d.component.proxy}},unmount(){i&&(e(null,c._container),delete c._container.__vue_app__)},provide(f,p){return o.provides[f]=p,c}};return c}}function so(e,t,n,l,r=!1){if(ne(e)){e.forEach((d,m)=>so(d,t&&(ne(t)?t[m]:t),n,l,r));return}if(es(l)&&!r)return;const o=l.shapeFlag&4?cr(l.component)||l.component.proxy:l.el,a=r?null:o,{i,r:c}=e,f=t&&t.r,p=i.refs===Oe?i.refs={}:i.refs,h=i.setupState;if(f!=null&&f!==c&&(Le(f)?(p[f]=null,he(h,f)&&(h[f]=null)):be(f)&&(f.value=null)),ae(c))on(c,i,12,[a,p]);else{const d=Le(c),m=be(c);if(d||m){const y=()=>{if(e.f){const w=d?p[c]:c.value;r?ne(w)&&No(w,o):ne(w)?w.includes(o)||w.push(o):d?(p[c]=[o],he(h,c)&&(h[c]=p[c])):(c.value=[o],e.k&&(p[e.k]=c.value))}else d?(p[c]=a,he(h,c)&&(h[c]=a)):be(c)&&(c.value=a,e.k&&(p[e.k]=a))};a?(y.id=-1,Ke(y,n)):y()}}}const Ke=Zd;function wh(e){return Ah(e)}function Ah(e,t){const n=Qp();n.__VUE__=!0;const{insert:l,remove:r,patchProp:o,createElement:a,createText:i,createComment:c,setText:f,setElementText:p,parentNode:h,nextSibling:d,setScopeId:m=St,cloneNode:y,insertStaticContent:w}=e,b=(g,_,A,S=null,P=null,L=null,U=!1,I=null,j=!!_.dynamicChildren)=>{if(g===_)return;g&&!ys(g,_)&&(S=G(g),lt(g,P,L,!0),g=null),_.patchFlag===-2&&(j=!1,_.dynamicChildren=null);const{type:M,ref:J,shapeFlag:Y}=_;switch(M){case ta:$(g,_,A,S);break;case dn:x(g,_,A,S);break;case Ar:g==null&&C(_,A,S,U);break;case Ce:Ne(g,_,A,S,P,L,U,I,j);break;default:Y&1?T(g,_,A,S,P,L,U,I,j):Y&6?Ye(g,_,A,S,P,L,U,I,j):(Y&64||Y&128)&&M.process(g,_,A,S,P,L,U,I,j,Pe)}J!=null&&P&&so(J,g&&g.ref,L,_||g,!_)},$=(g,_,A,S)=>{if(g==null)l(_.el=i(_.children),A,S);else{const P=_.el=g.el;_.children!==g.children&&f(P,_.children)}},x=(g,_,A,S)=>{g==null?l(_.el=c(_.children||""),A,S):_.el=g.el},C=(g,_,A,S)=>{[g.el,g.anchor]=w(g.children,_,A,S,g.el,g.anchor)},E=({el:g,anchor:_},A,S)=>{let P;for(;g&&g!==_;)P=d(g),l(g,A,S),g=P;l(_,A,S)},N=({el:g,anchor:_})=>{let A;for(;g&&g!==_;)A=d(g),r(g),g=A;r(_)},T=(g,_,A,S,P,L,U,I,j)=>{U=U||_.type==="svg",g==null?W(_,A,S,P,L,U,I,j):pe(g,_,P,L,U,I,j)},W=(g,_,A,S,P,L,U,I)=>{let j,M;const{type:J,props:Y,shapeFlag:Q,transition:le,patchFlag:ge,dirs:Ee}=g;if(g.el&&y!==void 0&&ge===-1)j=g.el=y(g.el);else{if(j=g.el=a(g.type,L,Y&&Y.is,Y),Q&8?p(j,g.children):Q&16&&ue(g.children,j,null,S,P,L&&J!=="foreignObject",U,I),Ee&&mn(g,null,S,"created"),Y){for(const Se in Y)Se!=="value"&&!Cl(Se)&&o(j,Se,null,Y[Se],L,g.children,S,P,R);"value"in Y&&o(j,"value",null,Y.value),(M=Y.onVnodeBeforeMount)&&wt(M,S,g)}re(j,g,g.scopeId,U,S)}Ee&&mn(g,null,S,"beforeMount");const De=(!P||P&&!P.pendingBranch)&&le&&!le.persisted;De&&le.beforeEnter(j),l(j,_,A),((M=Y&&Y.onVnodeMounted)||De||Ee)&&Ke(()=>{M&&wt(M,S,g),De&&le.enter(j),Ee&&mn(g,null,S,"mounted")},P)},re=(g,_,A,S,P)=>{if(A&&m(g,A),S)for(let L=0;L<S.length;L++)m(g,S[L]);if(P){let L=P.subTree;if(_===L){const U=P.vnode;re(g,U,U.scopeId,U.slotScopeIds,P.parent)}}},ue=(g,_,A,S,P,L,U,I,j=0)=>{for(let M=j;M<g.length;M++){const J=g[M]=I?nn(g[M]):Nt(g[M]);b(null,J,_,A,S,P,L,U,I)}},pe=(g,_,A,S,P,L,U)=>{const I=_.el=g.el;let{patchFlag:j,dynamicChildren:M,dirs:J}=_;j|=g.patchFlag&16;const Y=g.props||Oe,Q=_.props||Oe;let le;A&&gn(A,!1),(le=Q.onVnodeBeforeUpdate)&&wt(le,A,_,g),J&&mn(_,g,A,"beforeUpdate"),A&&gn(A,!0);const ge=P&&_.type!=="foreignObject";if(M?me(g.dynamicChildren,M,I,A,S,ge,L):U||de(g,_,I,null,A,S,ge,L,!1),j>0){if(j&16)Te(I,_,Y,Q,A,S,P);else if(j&2&&Y.class!==Q.class&&o(I,"class",null,Q.class,P),j&4&&o(I,"style",Y.style,Q.style,P),j&8){const Ee=_.dynamicProps;for(let De=0;De<Ee.length;De++){const Se=Ee[De],Et=Y[Se],jn=Q[Se];(jn!==Et||Se==="value")&&o(I,Se,Et,jn,P,g.children,A,S,R)}}j&1&&g.children!==_.children&&p(I,_.children)}else!U&&M==null&&Te(I,_,Y,Q,A,S,P);((le=Q.onVnodeUpdated)||J)&&Ke(()=>{le&&wt(le,A,_,g),J&&mn(_,g,A,"updated")},S)},me=(g,_,A,S,P,L,U)=>{for(let I=0;I<_.length;I++){const j=g[I],M=_[I],J=j.el&&(j.type===Ce||!ys(j,M)||j.shapeFlag&70)?h(j.el):A;b(j,M,J,null,S,P,L,U,!0)}},Te=(g,_,A,S,P,L,U)=>{if(A!==S){for(const I in S){if(Cl(I))continue;const j=S[I],M=A[I];j!==M&&I!=="value"&&o(g,I,M,j,U,_.children,P,L,R)}if(A!==Oe)for(const I in A)!Cl(I)&&!(I in S)&&o(g,I,A[I],null,U,_.children,P,L,R);"value"in S&&o(g,"value",A.value,S.value)}},Ne=(g,_,A,S,P,L,U,I,j)=>{const M=_.el=g?g.el:i(""),J=_.anchor=g?g.anchor:i("");let{patchFlag:Y,dynamicChildren:Q,slotScopeIds:le}=_;le&&(I=I?I.concat(le):le),g==null?(l(M,A,S),l(J,A,S),ue(_.children,A,J,P,L,U,I,j)):Y>0&&Y&64&&Q&&g.dynamicChildren?(me(g.dynamicChildren,Q,A,P,L,U,I),(_.key!=null||P&&_===P.subTree)&&ea(g,_,!0)):de(g,_,A,J,P,L,U,I,j)},Ye=(g,_,A,S,P,L,U,I,j)=>{_.slotScopeIds=I,g==null?_.shapeFlag&512?P.ctx.activate(_,A,S,U,j):$e(_,A,S,P,L,U,j):te(g,_,j)},$e=(g,_,A,S,P,L,U)=>{const I=g.component=Sh(g,S,P);if(_u(g)&&(I.ctx.renderer=Pe),Mh(I),I.asyncDep){if(P&&P.registerDep(I,se),!g.el){const j=I.subTree=O(dn);x(null,j,_,A)}return}se(I,g,_,A,P,L,U)},te=(g,_,A)=>{const S=_.component=g.component;if(qd(g,_,A))if(S.asyncDep&&!S.asyncResolved){ee(S,_,A);return}else S.next=_,Hd(S.update),S.update();else _.el=g.el,S.vnode=_},se=(g,_,A,S,P,L,U)=>{const I=()=>{if(g.isMounted){let{next:J,bu:Y,u:Q,parent:le,vnode:ge}=g,Ee=J,De;gn(g,!1),J?(J.el=ge.el,ee(g,J,U)):J=ge,Y&&Jn(Y),(De=J.props&&J.props.onVnodeBeforeUpdate)&&wt(De,le,J,ge),gn(g,!0);const Se=vr(g),Et=g.subTree;g.subTree=Se,b(Et,Se,h(Et.el),G(Et),g,P,L),J.el=Se.el,Ee===null&&Yd(g,Se.el),Q&&Ke(Q,P),(De=J.props&&J.props.onVnodeUpdated)&&Ke(()=>wt(De,le,J,ge),P)}else{let J;const{el:Y,props:Q}=_,{bm:le,m:ge,parent:Ee}=g,De=es(_);if(gn(g,!1),le&&Jn(le),!De&&(J=Q&&Q.onVnodeBeforeMount)&&wt(J,Ee,_),gn(g,!0),Y&&ie){const Se=()=>{g.subTree=vr(g),ie(Y,g.subTree,g,P,null)};De?_.type.__asyncLoader().then(()=>!g.isUnmounted&&Se()):Se()}else{const Se=g.subTree=vr(g);b(null,Se,A,S,g,P,L),_.el=Se.el}if(ge&&Ke(ge,P),!De&&(J=Q&&Q.onVnodeMounted)){const Se=_;Ke(()=>wt(J,Ee,Se),P)}(_.shapeFlag&256||Ee&&es(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&g.a&&Ke(g.a,P),g.isMounted=!0,_=A=S=null}},j=g.effect=new Uo(I,()=>cu(M),g.scope),M=g.update=()=>j.run();M.id=g.uid,gn(g,!0),M()},ee=(g,_,A)=>{_.component=g;const S=g.vnode.props;g.vnode=_,g.next=null,mh(g,_.props,S,A),_h(g,_.children,A),cs(),nr(void 0,g.update),us()},de=(g,_,A,S,P,L,U,I,j=!1)=>{const M=g&&g.children,J=g?g.shapeFlag:0,Y=_.children,{patchFlag:Q,shapeFlag:le}=_;if(Q>0){if(Q&128){Je(M,Y,A,S,P,L,U,I,j);return}else if(Q&256){It(M,Y,A,S,P,L,U,I,j);return}}le&8?(J&16&&R(M,P,L),Y!==M&&p(A,Y)):J&16?le&16?Je(M,Y,A,S,P,L,U,I,j):R(M,P,L,!0):(J&8&&p(A,""),le&16&&ue(Y,A,S,P,L,U,I,j))},It=(g,_,A,S,P,L,U,I,j)=>{g=g||Gn,_=_||Gn;const M=g.length,J=_.length,Y=Math.min(M,J);let Q;for(Q=0;Q<Y;Q++){const le=_[Q]=j?nn(_[Q]):Nt(_[Q]);b(g[Q],le,A,null,P,L,U,I,j)}M>J?R(g,P,L,!0,!1,Y):ue(_,A,S,P,L,U,I,j,Y)},Je=(g,_,A,S,P,L,U,I,j)=>{let M=0;const J=_.length;let Y=g.length-1,Q=J-1;for(;M<=Y&&M<=Q;){const le=g[M],ge=_[M]=j?nn(_[M]):Nt(_[M]);if(ys(le,ge))b(le,ge,A,null,P,L,U,I,j);else break;M++}for(;M<=Y&&M<=Q;){const le=g[Y],ge=_[Q]=j?nn(_[Q]):Nt(_[Q]);if(ys(le,ge))b(le,ge,A,null,P,L,U,I,j);else break;Y--,Q--}if(M>Y){if(M<=Q){const le=Q+1,ge=le<J?_[le].el:S;for(;M<=Q;)b(null,_[M]=j?nn(_[M]):Nt(_[M]),A,ge,P,L,U,I,j),M++}}else if(M>Q)for(;M<=Y;)lt(g[M],P,L,!0),M++;else{const le=M,ge=M,Ee=new Map;for(M=ge;M<=Q;M++){const ct=_[M]=j?nn(_[M]):Nt(_[M]);ct.key!=null&&Ee.set(ct.key,M)}let De,Se=0;const Et=Q-ge+1;let jn=!1,Pa=0;const gs=new Array(Et);for(M=0;M<Et;M++)gs[M]=0;for(M=le;M<=Y;M++){const ct=g[M];if(Se>=Et){lt(ct,P,L,!0);continue}let Lt;if(ct.key!=null)Lt=Ee.get(ct.key);else for(De=ge;De<=Q;De++)if(gs[De-ge]===0&&ys(ct,_[De])){Lt=De;break}Lt===void 0?lt(ct,P,L,!0):(gs[Lt-ge]=M+1,Lt>=Pa?Pa=Lt:jn=!0,b(ct,_[Lt],A,null,P,L,U,I,j),Se++)}const Sa=jn?xh(gs):Gn;for(De=Sa.length-1,M=Et-1;M>=0;M--){const ct=ge+M,Lt=_[ct],Ma=ct+1<J?_[ct+1].el:S;gs[M]===0?b(null,Lt,A,Ma,P,L,U,I,j):jn&&(De<0||M!==Sa[De]?bt(Lt,A,Ma,2):De--)}}},bt=(g,_,A,S,P=null)=>{const{el:L,type:U,transition:I,children:j,shapeFlag:M}=g;if(M&6){bt(g.component.subTree,_,A,S);return}if(M&128){g.suspense.move(_,A,S);return}if(M&64){U.move(g,_,A,Pe);return}if(U===Ce){l(L,_,A);for(let Y=0;Y<j.length;Y++)bt(j[Y],_,A,S);l(g.anchor,_,A);return}if(U===Ar){E(g,_,A);return}if(S!==2&&M&1&&I)if(S===0)I.beforeEnter(L),l(L,_,A),Ke(()=>I.enter(L),P);else{const{leave:Y,delayLeave:Q,afterLeave:le}=I,ge=()=>l(L,_,A),Ee=()=>{Y(L,()=>{ge(),le&&le()})};Q?Q(L,ge,Ee):Ee()}else l(L,_,A)},lt=(g,_,A,S=!1,P=!1)=>{const{type:L,props:U,ref:I,children:j,dynamicChildren:M,shapeFlag:J,patchFlag:Y,dirs:Q}=g;if(I!=null&&so(I,null,A,g,!0),J&256){_.ctx.deactivate(g);return}const le=J&1&&Q,ge=!es(g);let Ee;if(ge&&(Ee=U&&U.onVnodeBeforeUnmount)&&wt(Ee,_,g),J&6)K(g.component,A,S);else{if(J&128){g.suspense.unmount(A,S);return}le&&mn(g,null,_,"beforeUnmount"),J&64?g.type.remove(g,_,A,P,Pe,S):M&&(L!==Ce||Y>0&&Y&64)?R(M,_,A,!1,!0):(L===Ce&&Y&384||!P&&J&16)&&R(j,_,A),S&&Nn(g)}(ge&&(Ee=U&&U.onVnodeUnmounted)||le)&&Ke(()=>{Ee&&wt(Ee,_,g),le&&mn(g,null,_,"unmounted")},A)},Nn=g=>{const{type:_,el:A,anchor:S,transition:P}=g;if(_===Ce){B(A,S);return}if(_===Ar){N(g);return}const L=()=>{r(A),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(g.shapeFlag&1&&P&&!P.persisted){const{leave:U,delayLeave:I}=P,j=()=>U(A,L);I?I(g.el,L,j):j()}else L()},B=(g,_)=>{let A;for(;g!==_;)A=d(g),r(g),g=A;r(_)},K=(g,_,A)=>{const{bum:S,scope:P,update:L,subTree:U,um:I}=g;S&&Jn(S),P.stop(),L&&(L.active=!1,lt(U,g,_,A)),I&&Ke(I,_),Ke(()=>{g.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},R=(g,_,A,S=!1,P=!1,L=0)=>{for(let U=L;U<g.length;U++)lt(g[U],_,A,S,P)},G=g=>g.shapeFlag&6?G(g.component.subTree):g.shapeFlag&128?g.suspense.next():d(g.anchor||g.el),_e=(g,_,A)=>{g==null?_._vnode&&lt(_._vnode,null,null,!0):b(_._vnode||null,g,_,null,null,null,A),pu(),_._vnode=g},Pe={p:b,um:lt,m:bt,r:Nn,mt:$e,mc:ue,pc:de,pbc:me,n:G,o:e};let fe,ie;return t&&([fe,ie]=t(Pe)),{render:_e,hydrate:fe,createApp:bh(_e,fe)}}function gn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ea(e,t,n=!1){const l=e.children,r=t.children;if(ne(l)&&ne(r))for(let o=0;o<l.length;o++){const a=l[o];let i=r[o];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=r[o]=nn(r[o]),i.el=a.el),n||ea(a,i))}}function xh(e){const t=e.slice(),n=[0];let l,r,o,a,i;const c=e.length;for(l=0;l<c;l++){const f=e[l];if(f!==0){if(r=n[n.length-1],e[r]<f){t[l]=r,n.push(l);continue}for(o=0,a=n.length-1;o<a;)i=o+a>>1,e[n[i]]<f?o=i+1:a=i;f<e[n[o]]&&(o>0&&(t[l]=n[o-1]),n[o]=l)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=t[a];return n}const kh=e=>e.__isTeleport,Ps=e=>e&&(e.disabled||e.disabled===""),ti=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,lo=(e,t)=>{const n=e&&e.to;return Le(n)?t?t(n):null:n},Ch={__isTeleport:!0,process(e,t,n,l,r,o,a,i,c,f){const{mc:p,pc:h,pbc:d,o:{insert:m,querySelector:y,createText:w,createComment:b}}=f,$=Ps(t.props);let{shapeFlag:x,children:C,dynamicChildren:E}=t;if(e==null){const N=t.el=w(""),T=t.anchor=w("");m(N,n,l),m(T,n,l);const W=t.target=lo(t.props,y),re=t.targetAnchor=w("");W&&(m(re,W),a=a||ti(W));const ue=(pe,me)=>{x&16&&p(C,pe,me,r,o,a,i,c)};$?ue(n,T):W&&ue(W,re)}else{t.el=e.el;const N=t.anchor=e.anchor,T=t.target=e.target,W=t.targetAnchor=e.targetAnchor,re=Ps(e.props),ue=re?n:T,pe=re?N:W;if(a=a||ti(T),E?(d(e.dynamicChildren,E,ue,r,o,a,i),ea(e,t,!0)):c||h(e,t,ue,pe,r,o,a,i,!1),$)re||vl(t,n,N,f,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const me=t.target=lo(t.props,y);me&&vl(t,me,null,f,0)}else re&&vl(t,T,W,f,1)}},remove(e,t,n,l,{um:r,o:{remove:o}},a){const{shapeFlag:i,children:c,anchor:f,targetAnchor:p,target:h,props:d}=e;if(h&&o(p),(a||!Ps(d))&&(o(f),i&16))for(let m=0;m<c.length;m++){const y=c[m];r(y,t,n,!0,!!y.dynamicChildren)}},move:vl,hydrate:$h};function vl(e,t,n,{o:{insert:l},m:r},o=2){o===0&&l(e.targetAnchor,t,n);const{el:a,anchor:i,shapeFlag:c,children:f,props:p}=e,h=o===2;if(h&&l(a,t,n),(!h||Ps(p))&&c&16)for(let d=0;d<f.length;d++)r(f[d],t,n,2);h&&l(i,t,n)}function $h(e,t,n,l,r,o,{o:{nextSibling:a,parentNode:i,querySelector:c}},f){const p=t.target=lo(t.props,c);if(p){const h=p._lpa||p.firstChild;if(t.shapeFlag&16)if(Ps(t.props))t.anchor=f(a(e),t,i(e),n,l,r,o),t.targetAnchor=h;else{t.anchor=a(e);let d=h;for(;d;)if(d=a(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,p._lpa=t.targetAnchor&&a(t.targetAnchor);break}f(h,t,p,n,l,r,o)}}return t.anchor&&a(t.anchor)}const Eh=Ch,Ce=Symbol(void 0),ta=Symbol(void 0),dn=Symbol(void 0),Ar=Symbol(void 0),Ss=[];let Pt=null;function k(e=!1){Ss.push(Pt=e?null:[])}function Dh(){Ss.pop(),Pt=Ss[Ss.length-1]||null}let Zs=1;function ni(e){Zs+=e}function Tu(e){return e.dynamicChildren=Zs>0?Pt||Gn:null,Dh(),Zs>0&&Pt&&Pt.push(e),e}function V(e,t,n,l,r,o){return Tu(s(e,t,n,l,r,o,!0))}function X(e,t,n,l,r){return Tu(O(e,t,n,l,r,!0))}function ls(e){return e?e.__v_isVNode===!0:!1}function ys(e,t){return e.type===t.type&&e.key===t.key}const ir="__vInternal",Fu=({key:e})=>e!=null?e:null,$l=({ref:e,ref_key:t,ref_for:n})=>e!=null?Le(e)||be(e)||ae(e)?{i:Ze,r:e,k:t,f:!!n}:e:null;function s(e,t=null,n=null,l=0,r=null,o=e===Ce?0:1,a=!1,i=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Fu(t),ref:t&&$l(t),scopeId:lr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:l,dynamicProps:r,dynamicChildren:null,appContext:null};return i?(na(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=Le(n)?8:16),Zs>0&&!a&&Pt&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Pt.push(c),c}const O=Bh;function Bh(e,t=null,n=null,l=0,r=null,o=!1){if((!e||e===ah)&&(e=dn),ls(e)){const i=Mn(e,t,!0);return n&&na(i,n),Zs>0&&!o&&Pt&&(i.shapeFlag&6?Pt[Pt.indexOf(e)]=i:Pt.push(i)),i.patchFlag|=-2,i}if(Ih(e)&&(e=e.__vccOpts),t){t=Ae(t);let{class:i,style:c}=t;i&&!Le(i)&&(t.class=Fe(i)),Ue(c)&&(ru(c)&&!ne(c)&&(c=st({},c)),t.style=We(c))}const a=Le(e)?1:mu(e)?128:kh(e)?64:Ue(e)?4:ae(e)?2:0;return s(e,t,n,l,r,a,o,!0)}function Ae(e){return e?ru(e)||ir in e?st({},e):e:null}function Mn(e,t,n=!1){const{props:l,ref:r,patchFlag:o,children:a}=e,i=t?Ie(l||{},t):l;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&Fu(i),ref:t&&t.ref?n&&r?ne(r)?r.concat($l(t)):[r,$l(t)]:$l(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mn(e.ssContent),ssFallback:e.ssFallback&&Mn(e.ssFallback),el:e.el,anchor:e.anchor}}function u(e=" ",t=0){return O(ta,null,e,t)}function q(e="",t=!1){return t?(k(),X(dn,null,e)):O(dn,null,e)}function Nt(e){return e==null||typeof e=="boolean"?O(dn):ne(e)?O(Ce,null,e.slice()):typeof e=="object"?nn(e):O(ta,null,String(e))}function nn(e){return e.el===null||e.memo?e:Mn(e)}function na(e,t){let n=0;const{shapeFlag:l}=e;if(t==null)t=null;else if(ne(t))n=16;else if(typeof t=="object")if(l&65){const r=t.default;r&&(r._c&&(r._d=!1),na(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(ir in t)?t._ctx=Ze:r===3&&Ze&&(Ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ae(t)?(t={default:t,_ctx:Ze},n=32):(t=String(t),l&64?(n=16,t=[u(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ie(...e){const t={};for(let n=0;n<e.length;n++){const l=e[n];for(const r in l)if(r==="class")t.class!==l.class&&(t.class=Fe([t.class,l.class]));else if(r==="style")t.style=We([t.style,l.style]);else if(Zl(r)){const o=t[r],a=l[r];a&&o!==a&&!(ne(o)&&o.includes(a))&&(t[r]=o?[].concat(o,a):a)}else r!==""&&(t[r]=l[r])}return t}function wt(e,t,n,l=null){Mt(e,t,7,[n,l])}const Oh=Mu();let Ph=0;function Sh(e,t,n){const l=e.type,r=(t?t.appContext:e.appContext)||Oh,o={uid:Ph++,vnode:e,type:l,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Yc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bu(l,r),emitsOptions:hu(l,r),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:l.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=zd.bind(null,o),e.ce&&e.ce(o),o}let ze=null;const Fn=()=>ze||Ze,rs=e=>{ze=e,e.scope.on()},Bn=()=>{ze&&ze.scope.off(),ze=null};function Ru(e){return e.vnode.shapeFlag&4}let Gs=!1;function Mh(e,t=!1){Gs=t;const{props:n,children:l}=e.vnode,r=Ru(e);hh(e,n,r,t),yh(e,l);const o=r?Th(e,t):void 0;return Gs=!1,o}function Th(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=er(new Proxy(e.ctx,ih));const{setup:l}=n;if(l){const r=e.setupContext=l.length>1?Rh(e):null;rs(e),cs();const o=on(l,e,0,[e.props,r]);if(us(),Bn(),Wc(o)){if(o.then(Bn,Bn),t)return o.then(a=>{si(e,a,t)}).catch(a=>{tr(a,e,0)});e.asyncDep=o}else si(e,o,t)}else Iu(e,t)}function si(e,t,n){ae(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ue(t)&&(e.setupState=au(t)),Iu(e,n)}let li;function Iu(e,t,n){const l=e.type;if(!e.render){if(!t&&li&&!l.render){const r=l.template;if(r){const{isCustomElement:o,compilerOptions:a}=e.appContext.config,{delimiters:i,compilerOptions:c}=l,f=st(st({isCustomElement:o,delimiters:i},a),c);l.render=li(r,f)}}e.render=l.render||St}rs(e),cs(),ch(e),us(),Bn()}function Fh(e){return new Proxy(e.attrs,{get(t,n){return _t(e,"get","$attrs"),t[n]}})}function Rh(e){const t=l=>{e.exposed=l||{}};let n;return{get attrs(){return n||(n=Fh(e))},slots:e.slots,emit:e.emit,expose:t}}function cr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(au(er(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Rl)return Rl[n](e)}}))}function ro(e){return ae(e)&&e.displayName||e.name}function Ih(e){return ae(e)&&"__vccOpts"in e}const D=(e,t)=>Ld(e,t,Gs);function Tt(e,t,n){const l=arguments.length;return l===2?Ue(t)&&!ne(t)?ls(t)?O(e,null,[t]):O(e,t):O(e,null,t):(l>3?n=Array.prototype.slice.call(arguments,2):l===3&&ls(n)&&(n=[n]),O(e,t,n))}const Lh="3.2.36",Nh="http://www.w3.org/2000/svg",wn=typeof document!="undefined"?document:null,ri=wn&&wn.createElement("template"),jh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,l)=>{const r=t?wn.createElementNS(Nh,e):wn.createElement(e,n?{is:n}:void 0);return e==="select"&&l&&l.multiple!=null&&r.setAttribute("multiple",l.multiple),r},createText:e=>wn.createTextNode(e),createComment:e=>wn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,l,r,o){const a=n?n.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{ri.innerHTML=l?`<svg>${e}</svg>`:e;const i=ri.content;if(l){const c=i.firstChild;for(;c.firstChild;)i.appendChild(c.firstChild);i.removeChild(c)}t.insertBefore(i,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Hh(e,t,n){const l=e._vtc;l&&(t=(t?[t,...l]:[...l]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Vh(e,t,n){const l=e.style,r=Le(n);if(n&&!r){for(const o in n)oo(l,o,n[o]);if(t&&!Le(t))for(const o in t)n[o]==null&&oo(l,o,"")}else{const o=l.display;r?t!==n&&(l.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(l.display=o)}}const oi=/\s*!important$/;function oo(e,t,n){if(ne(n))n.forEach(l=>oo(e,t,l));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const l=Uh(e,t);oi.test(n)?e.setProperty(Tn(l),n.replace(oi,""),"important"):e[l]=n}}const ai=["Webkit","Moz","ms"],xr={};function Uh(e,t){const n=xr[t];if(n)return n;let l=Ut(t);if(l!=="filter"&&l in e)return xr[t]=l;l=Jl(l);for(let r=0;r<ai.length;r++){const o=ai[r]+l;if(o in e)return xr[t]=o}return t}const ii="http://www.w3.org/1999/xlink";function zh(e,t,n,l,r){if(l&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ii,t.slice(6,t.length)):e.setAttributeNS(ii,t,n);else{const o=Up(t);n==null||o&&!Vc(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function Wh(e,t,n,l,r,o,a){if(t==="innerHTML"||t==="textContent"){l&&a(l,r,o),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let i=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Vc(n):n==null&&c==="string"?(n="",i=!0):c==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(t)}const[Lu,Kh]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let ao=0;const qh=Promise.resolve(),Yh=()=>{ao=0},Zh=()=>ao||(qh.then(Yh),ao=Lu());function Kn(e,t,n,l){e.addEventListener(t,n,l)}function Gh(e,t,n,l){e.removeEventListener(t,n,l)}function Xh(e,t,n,l,r=null){const o=e._vei||(e._vei={}),a=o[t];if(l&&a)a.value=l;else{const[i,c]=Jh(t);if(l){const f=o[t]=Qh(l,r);Kn(e,i,f,c)}else a&&(Gh(e,i,a,c),o[t]=void 0)}}const ci=/(?:Once|Passive|Capture)$/;function Jh(e){let t;if(ci.test(e)){t={};let n;for(;n=e.match(ci);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Tn(e.slice(2)),t]}function Qh(e,t){const n=l=>{const r=l.timeStamp||Lu();(Kh||r>=n.attached-1)&&Mt(em(l,n.value),t,5,[l])};return n.value=e,n.attached=Zh(),n}function em(e,t){if(ne(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(l=>r=>!r._stopped&&l&&l(r))}else return t}const ui=/^on[a-z]/,tm=(e,t,n,l,r=!1,o,a,i,c)=>{t==="class"?Hh(e,l,r):t==="style"?Vh(e,n,l):Zl(t)?Lo(t)||Xh(e,t,n,l,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):nm(e,t,l,r))?Wh(e,t,l,o,a,i,c):(t==="true-value"?e._trueValue=l:t==="false-value"&&(e._falseValue=l),zh(e,t,l,r))};function nm(e,t,n,l){return l?!!(t==="innerHTML"||t==="textContent"||t in e&&ui.test(t)&&ae(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ui.test(t)&&Le(n)?!1:t in e}const fi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ne(t)?n=>Jn(t,n):t};function sm(e){e.target.composing=!0}function pi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const lm={created(e,{modifiers:{lazy:t,trim:n,number:l}},r){e._assign=fi(r);const o=l||r.props&&r.props.type==="number";Kn(e,t?"change":"input",a=>{if(a.target.composing)return;let i=e.value;n&&(i=i.trim()),o&&(i=Wr(i)),e._assign(i)}),n&&Kn(e,"change",()=>{e.value=e.value.trim()}),t||(Kn(e,"compositionstart",sm),Kn(e,"compositionend",pi),Kn(e,"change",pi))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:l,number:r}},o){if(e._assign=fi(o),e.composing||document.activeElement===e&&e.type!=="range"&&(n||l&&e.value.trim()===t||(r||e.type==="number")&&Wr(e.value)===t))return;const a=t==null?"":t;e.value!==a&&(e.value=a)}},rm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},di=(e,t)=>n=>{if(!("key"in n))return;const l=Tn(n.key);if(t.some(r=>r===l||rm[r]===l))return e(n)},Nu={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):_s(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:l}){!t!=!n&&(l?t?(l.beforeEnter(e),_s(e,!0),l.enter(e)):l.leave(e,()=>{_s(e,!1)}):_s(e,t))},beforeUnmount(e,{value:t}){_s(e,t)}};function _s(e,t){e.style.display=t?e._vod:"none"}const om=st({patchProp:tm},jh);let hi;function am(){return hi||(hi=wh(om))}const im=(...e)=>{const t=am().createApp(...e),{mount:n}=t;return t.mount=l=>{const r=cm(l);if(!r)return;const o=t._component;!ae(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const a=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},t};function cm(e){return Le(e)?document.querySelector(e):e}var um=Object.defineProperty,mi=Object.getOwnPropertySymbols,fm=Object.prototype.hasOwnProperty,pm=Object.prototype.propertyIsEnumerable,gi=(e,t,n)=>t in e?um(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,dm=(e,t)=>{for(var n in t||(t={}))fm.call(t,n)&&gi(e,n,t[n]);if(mi)for(var n of mi(t))pm.call(t,n)&&gi(e,n,t[n]);return e},ju="usehead",yi="head:count",kr="data-head-attrs",hm=(e,t,n)=>{const l=n.createElement(e);for(const r of Object.keys(t)){let o=t[r];r==="key"||o===!1||(r==="children"?l.textContent=o:l.setAttribute(r,o))}return l};function mm(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){const l=t.cloneNode(!0);return l.setAttribute("nonce",""),l.nonce=n,n===e.nonce&&e.isEqualNode(l)}}return e.isEqualNode(t)}var gm=e=>{const t=["key","id","name","property"];for(const n of t){const l=typeof e.getAttribute=="function"?e.hasAttribute(n)?e.getAttribute(n):void 0:e[n];if(l!==void 0)return{name:n,value:l}}},ym=()=>{const e=H(ju);if(!e)throw new Error("You may forget to apply app.use(head)");return e},_m=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],vm=e=>{const t=[];for(const n of Object.keys(e))if(e[n]!=null){if(n==="title")t.push({tag:n,props:{children:e[n]}});else if(n==="base")t.push({tag:n,props:dm({key:"default"},e[n])});else if(_m.includes(n)){const l=e[n];Array.isArray(l)?l.forEach(r=>{t.push({tag:n,props:r})}):l&&t.push({tag:n,props:l})}}return t},_i=(e,t)=>{const n=e.getAttribute(kr);if(n)for(const r of n.split(","))r in t||e.removeAttribute(r);const l=[];for(const r in t){const o=t[r];o!=null&&(o===!1?e.removeAttribute(r):e.setAttribute(r,o),l.push(r))}l.length?e.setAttribute(kr,l.join(",")):e.removeAttribute(kr)},bm=(e=window.document,t,n)=>{var l;const r=e.head;let o=r.querySelector(`meta[name="${yi}"]`);const a=o?Number(o.getAttribute("content")):0,i=[];if(o)for(let f=0,p=o.previousElementSibling;f<a;f++,p=(p==null?void 0:p.previousElementSibling)||null)((l=p==null?void 0:p.tagName)==null?void 0:l.toLowerCase())===t&&i.push(p);else o=e.createElement("meta"),o.setAttribute("name",yi),o.setAttribute("content","0"),r.append(o);let c=n.map(f=>hm(f.tag,f.props,e));c=c.filter(f=>{for(let p=0;p<i.length;p++){const h=i[p];if(mm(h,f))return i.splice(p,1),!1}return!0}),i.forEach(f=>{var p;return(p=f.parentNode)==null?void 0:p.removeChild(f)}),c.forEach(f=>{r.insertBefore(f,o)}),o.setAttribute("content",""+(a-i.length+c.length))},wm=()=>{let e=[],t=new Set;const n={install(l){l.config.globalProperties.$head=n,l.provide(ju,n)},get headTags(){const l=[];return e.forEach(r=>{vm(r.value).forEach(a=>{if(a.tag==="meta"||a.tag==="base"||a.tag==="script"){const i=gm(a.props);if(i){let c=-1;for(let f=0;f<l.length;f++){const p=l[f],h=p.props[i.name],d=a.props[i.name];if(p.tag===a.tag&&h===d){c=f;break}}c!==-1&&l.splice(c,1)}}l.push(a)})}),l},addHeadObjs(l){e.push(l)},removeHeadObjs(l){e=e.filter(r=>r!==l)},updateDOM(l=window.document){let r,o={},a={};const i={};for(const f of n.headTags){if(f.tag==="title"){r=f.props.children;continue}if(f.tag==="htmlAttrs"){Object.assign(o,f.props);continue}if(f.tag==="bodyAttrs"){Object.assign(a,f.props);continue}i[f.tag]=i[f.tag]||[],i[f.tag].push(f)}r!==void 0&&(l.title=r),_i(l.documentElement,o),_i(l.body,a);const c=new Set([...Object.keys(i),...t]);for(const f of c)bm(l,f,i[f]||[]);t.clear(),Object.keys(i).forEach(f=>t.add(f))}};return n},Am=typeof window!="undefined",xm=e=>{const t=z(e),n=ym();n.addHeadObjs(t),Am&&(ol(()=>{n.updateDOM()}),or(()=>{n.removeHeadObjs(t),n.updateDOM()}))};const Ms=Symbol("v-click-clicks"),An=Symbol("v-click-clicks-elements"),io=Symbol("v-click-clicks-order-map"),Ts=Symbol("v-click-clicks-disabled"),Hu=Symbol("slidev-slide-scale"),Z=Symbol("slidev-slidev-context"),km=Symbol("slidev-route"),Cm=Symbol("slidev-slide-context"),bn="slidev-vclick-target",Cr="slidev-vclick-hidden",$m="slidev-vclick-fade",$r="slidev-vclick-hidden-explicitly",vs="slidev-vclick-current",bl="slidev-vclick-prior";function co(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function Em(...e){let t,n,l;e.length===1?(t=0,l=1,[n]=e):[t,n,l=1]=e;const r=[];let o=t;for(;o<n;)r.push(o),o+=l||1;return r}function Dm(e){return e!=null}function Bm(e,t){return Object.fromEntries(Object.entries(e).map(([n,l])=>t(n,l)).filter(Dm))}var Cn={theme:"seriph",title:"Welcome to UTown Team",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",record:"dev",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",class:"text-center"};const xe=Cn;var jc;const an=(jc=xe.aspectRatio)!=null?jc:16/9;var Hc;const On=(Hc=xe.canvasWidth)!=null?Hc:980,Vu=Math.round(On/an),Uu=D(()=>Bm(xe.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function $t(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Rn=Re({page:0,clicks:0});let Om=[],Pm=[];$t(Rn,"$syncUp",!0);$t(Rn,"$syncDown",!0);$t(Rn,"$paused",!1);$t(Rn,"$onSet",e=>Om.push(e));$t(Rn,"$onPatch",e=>Pm.push(e));$t(Rn,"$patch",async()=>!1);function zu(e,t,n=!1){const l=[];let r=!1,o=!1,a,i;const c=Re(t);function f(m){l.push(m)}function p(m,y){clearTimeout(a),r=!0,c[m]=y,a=setTimeout(()=>r=!1,0)}function h(m){r||(clearTimeout(i),o=!0,Object.entries(m).forEach(([y,w])=>{c[y]=w}),i=setTimeout(()=>o=!1,0))}function d(m){let y;n?n&&window.addEventListener("storage",b=>{b&&b.key===m&&b.newValue&&h(JSON.parse(b.newValue))}):(y=new BroadcastChannel(m),y.addEventListener("message",b=>h(b.data)));function w(){!n&&y&&!o?y.postMessage(we(c)):n&&!o&&window.localStorage.setItem(m,JSON.stringify(c)),r||l.forEach(b=>b(c))}if(ce(c,w,{deep:!0}),n){const b=window.localStorage.getItem(m);b&&h(JSON.parse(b))}}return{init:d,onPatch:f,patch:p,state:c}}const{init:Sm,onPatch:Mm,patch:vi,state:Er}=zu(Rn,{page:1,clicks:0}),In=Re({});let Tm=[],Fm=[];$t(In,"$syncUp",!0);$t(In,"$syncDown",!0);$t(In,"$paused",!1);$t(In,"$onSet",e=>Tm.push(e));$t(In,"$onPatch",e=>Fm.push(e));$t(In,"$patch",async()=>!1);const{init:Rm,onPatch:Im,patch:Wu,state:Ll}=zu(In,{},!1),Lm="modulepreload",bi={},Nm="/redis_intro/",ps=function(t,n){return!n||n.length===0?t():Promise.all(n.map(l=>{if(l=`${Nm}${l}`,l in bi)return;bi[l]=!0;const r=l.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${o}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":Lm,r||(a.as="script",a.crossOrigin=""),a.href=l,document.head.appendChild(a),r)return new Promise((i,c)=>{a.addEventListener("load",i),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())};function rt(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)}function jm(e,t){if(Array.isArray(e)){e.splice(t,1);return}delete e[t]}function hn(e){return nd()?(sd(e),!0):!1}function je(...e){return D(()=>e.every(t=>v(t)))}function ft(e){return D(()=>!v(e))}function Hm(e){if(!be(e))return Re(e);const t=new Proxy({},{get(n,l,r){return v(Reflect.get(e.value,l,r))},set(n,l,r){return be(e.value[l])&&!be(r)?e.value[l].value=r:e.value[l]=r,!0},deleteProperty(n,l){return Reflect.deleteProperty(e.value,l)},has(n,l){return Reflect.has(e.value,l)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Re(t)}var wi;const kt=typeof window!="undefined",Vm=e=>typeof e!="undefined",Um=Object.prototype.toString,zm=e=>typeof e=="number",Ku=e=>typeof e=="string",Nl=e=>Um.call(e)==="[object Object]",uo=()=>+Date.now(),cn=()=>{};kt&&((wi=window==null?void 0:window.navigator)==null?void 0:wi.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Wm(e,t){function n(...l){e(()=>t.apply(this,l),{fn:t,thisArg:this,args:l})}return n}const qu=e=>e();function Km(e=qu){const t=z(!0);function n(){t.value=!1}function l(){t.value=!0}return{isActive:t,pause:n,resume:l,eventFilter:(...o)=>{t.value&&e(...o)}}}function qm(e,t){var n;if(typeof e=="number")return e+t;const l=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",r=e.slice(l.length),o=parseFloat(l)+t;return Number.isNaN(o)?e:o+r}var Ym=Object.defineProperty,Zm=Object.defineProperties,Gm=Object.getOwnPropertyDescriptors,Ai=Object.getOwnPropertySymbols,Xm=Object.prototype.hasOwnProperty,Jm=Object.prototype.propertyIsEnumerable,xi=(e,t,n)=>t in e?Ym(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qm=(e,t)=>{for(var n in t||(t={}))Xm.call(t,n)&&xi(e,n,t[n]);if(Ai)for(var n of Ai(t))Jm.call(t,n)&&xi(e,n,t[n]);return e},eg=(e,t)=>Zm(e,Gm(t));function tg(e){if(!be(e))return Td(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=Md(()=>({get(){return e.value[n]},set(l){if(Array.isArray(e.value)){const r=[...e.value];r[n]=l,e.value=r}else{const r=eg(Qm({},e.value),{[n]:l});Object.setPrototypeOf(r,e.value),e.value=r}}}));return t}function ng(e,t=!0){Fn()?wu(e):t?e():qe(e)}function sg(e,t=!0){Fn()?fs(e):t?e():qe(e)}function sa(e){Fn()&&ar(e)}function lg(e,t=1e3,n={}){const{immediate:l=!0,immediateCallback:r=!1}=n;let o=null;const a=z(!1);function i(){o&&(clearInterval(o),o=null)}function c(){a.value=!1,i()}function f(){v(t)<=0||(a.value=!0,r&&e(),i(),o=setInterval(e,v(t)))}if(l&&kt&&f(),be(t)){const p=ce(t,()=>{l&&kt&&f()});hn(p)}return hn(c),{isActive:a,pause:c,resume:f}}function Yu(e=!1,t={}){const{truthyValue:n=!0,falsyValue:l=!1}=t,r=be(e),o=z(e);function a(i){return arguments.length?(o.value=i,o.value):(o.value=o.value===v(n)?v(l):v(n),o.value)}return r?a:[o,a]}var ki=Object.getOwnPropertySymbols,rg=Object.prototype.hasOwnProperty,og=Object.prototype.propertyIsEnumerable,ag=(e,t)=>{var n={};for(var l in e)rg.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&ki)for(var l of ki(e))t.indexOf(l)<0&&og.call(e,l)&&(n[l]=e[l]);return n};function ig(e,t,n={}){const l=n,{eventFilter:r=qu}=l,o=ag(l,["eventFilter"]);return ce(e,Wm(r,t),o)}function cg(e,t,n){const l=ce(e,(...r)=>(qe(()=>l()),t(...r)),n)}var ug=Object.defineProperty,fg=Object.defineProperties,pg=Object.getOwnPropertyDescriptors,jl=Object.getOwnPropertySymbols,Zu=Object.prototype.hasOwnProperty,Gu=Object.prototype.propertyIsEnumerable,Ci=(e,t,n)=>t in e?ug(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,dg=(e,t)=>{for(var n in t||(t={}))Zu.call(t,n)&&Ci(e,n,t[n]);if(jl)for(var n of jl(t))Gu.call(t,n)&&Ci(e,n,t[n]);return e},hg=(e,t)=>fg(e,pg(t)),mg=(e,t)=>{var n={};for(var l in e)Zu.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&jl)for(var l of jl(e))t.indexOf(l)<0&&Gu.call(e,l)&&(n[l]=e[l]);return n};function gg(e,t,n={}){const l=n,{eventFilter:r}=l,o=mg(l,["eventFilter"]),{eventFilter:a,pause:i,resume:c,isActive:f}=Km(r);return{stop:ig(e,t,hg(dg({},o),{eventFilter:a})),pause:i,resume:c,isActive:f}}function ot(e){var t;const n=v(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Xe=kt?window:void 0,yg=kt?window.document:void 0;function Me(...e){let t,n,l,r;if(Ku(e[0])?([n,l,r]=e,t=Xe):[t,n,l,r]=e,!t)return cn;let o=cn;const a=ce(()=>ot(t),c=>{o(),c&&(c.addEventListener(n,l,r),o=()=>{c.removeEventListener(n,l,r),o=cn})},{immediate:!0,flush:"post"}),i=()=>{a(),o()};return hn(i),i}function _g(e,t,n={}){const{window:l=Xe,ignore:r,capture:o=!0}=n;if(!l)return;const a=z(!0);let i;const c=h=>{l.clearTimeout(i);const d=ot(e),m=h.composedPath();!d||d===h.target||m.includes(d)||!a.value||r&&r.length>0&&r.some(y=>{const w=ot(y);return w&&(h.target===w||m.includes(w))})||t(h)},f=[Me(l,"click",c,{passive:!0,capture:o}),Me(l,"pointerdown",h=>{const d=ot(e);a.value=!!d&&!h.composedPath().includes(d)},{passive:!0}),Me(l,"pointerup",h=>{i=l.setTimeout(()=>c(h),50)},{passive:!0})];return()=>f.forEach(h=>h())}const vg=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function bg(e,t,n={}){const{target:l=Xe,eventName:r="keydown",passive:o=!1}=n,a=vg(e);return Me(l,r,c=>{a(c)&&t(c)},o)}function wg(e={}){const{window:t=Xe}=e,n=z(0);return t&&(Me(t,"blur",()=>n.value+=1,!0),Me(t,"focus",()=>n.value+=1,!0)),D(()=>(n.value,t==null?void 0:t.document.activeElement))}function El(e,t={}){const{window:n=Xe}=t,l=Boolean(n&&"matchMedia"in n);let r;const o=z(!1),a=()=>{!l||(r||(r=n.matchMedia(e)),o.value=r.matches)};return ng(()=>{a(),r&&("addEventListener"in r?r.addEventListener("change",a):r.addListener(a),hn(()=>{"removeEventListener"in r?r.removeEventListener("change",a):r.removeListener(a)}))}),o}const Ag={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var xg=Object.defineProperty,$i=Object.getOwnPropertySymbols,kg=Object.prototype.hasOwnProperty,Cg=Object.prototype.propertyIsEnumerable,Ei=(e,t,n)=>t in e?xg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$g=(e,t)=>{for(var n in t||(t={}))kg.call(t,n)&&Ei(e,n,t[n]);if($i)for(var n of $i(t))Cg.call(t,n)&&Ei(e,n,t[n]);return e};function Eg(e,t={}){function n(i,c){let f=e[i];return c!=null&&(f=qm(f,c)),typeof f=="number"&&(f=`${f}px`),f}const{window:l=Xe}=t;function r(i){return l?l.matchMedia(i).matches:!1}const o=i=>El(`(min-width: ${n(i)})`,t),a=Object.keys(e).reduce((i,c)=>(Object.defineProperty(i,c,{get:()=>o(c),enumerable:!0,configurable:!0}),i),{});return $g({greater:o,smaller(i){return El(`(max-width: ${n(i,-.1)})`,t)},between(i,c){return El(`(min-width: ${n(i)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(i){return r(`(min-width: ${n(i)})`)},isSmaller(i){return r(`(max-width: ${n(i,-.1)})`)},isInBetween(i,c){return r(`(min-width: ${n(i)}) and (max-width: ${n(c,-.1)})`)}},a)}const fo=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},po="__vueuse_ssr_handlers__";fo[po]=fo[po]||{};const Dg=fo[po];function Bg(e,t){return Dg[e]||t}function Og(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const Pg={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Rt(e,t,n,l={}){var r;const{flush:o="pre",deep:a=!0,listenToStorageChanges:i=!0,writeDefaults:c=!0,shallow:f,window:p=Xe,eventFilter:h,onError:d=T=>{console.error(T)}}=l,m=(f?zt:z)(t);if(!n)try{n=Bg("getDefaultStorage",()=>{var T;return(T=Xe)==null?void 0:T.localStorage})()}catch(T){d(T)}if(!n)return m;const y=v(t),w=Og(y),b=(r=l.serializer)!=null?r:Pg[w],{pause:$,resume:x}=gg(m,()=>C(m.value),{flush:o,deep:a,eventFilter:h});return p&&i&&Me(p,"storage",N),N(),m;function C(T){try{T==null?n.removeItem(e):n.setItem(e,b.write(T))}catch(W){d(W)}}function E(T){if(!(T&&T.key!==e)){$();try{const W=T?T.newValue:n.getItem(e);return W==null?(c&&y!==null&&n.setItem(e,b.write(y)),y):typeof W!="string"?W:b.read(W)}catch(W){d(W)}finally{x()}}}function N(T){T&&T.key!==e||(m.value=E(T))}}function Sg(e){return El("(prefers-color-scheme: dark)",e)}var Mg=Object.defineProperty,Tg=Object.defineProperties,Fg=Object.getOwnPropertyDescriptors,Di=Object.getOwnPropertySymbols,Rg=Object.prototype.hasOwnProperty,Ig=Object.prototype.propertyIsEnumerable,Bi=(e,t,n)=>t in e?Mg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Lg=(e,t)=>{for(var n in t||(t={}))Rg.call(t,n)&&Bi(e,n,t[n]);if(Di)for(var n of Di(t))Ig.call(t,n)&&Bi(e,n,t[n]);return e},Ng=(e,t)=>Tg(e,Fg(t));function px(e,t={}){var n,l;const r=(n=t.draggingElement)!=null?n:Xe,o=z((l=t.initialValue)!=null?l:{x:0,y:0}),a=z(),i=d=>t.pointerTypes?t.pointerTypes.includes(d.pointerType):!0,c=d=>{v(t.preventDefault)&&d.preventDefault(),v(t.stopPropagation)&&d.stopPropagation()},f=d=>{var m;if(!i(d)||v(t.exact)&&d.target!==v(e))return;const y=v(e).getBoundingClientRect(),w={x:d.pageX-y.left,y:d.pageY-y.top};((m=t.onStart)==null?void 0:m.call(t,w,d))!==!1&&(a.value=w,c(d))},p=d=>{var m;!i(d)||!a.value||(o.value={x:d.pageX-a.value.x,y:d.pageY-a.value.y},(m=t.onMove)==null||m.call(t,o.value,d),c(d))},h=d=>{var m;!i(d)||!a.value||(a.value=void 0,(m=t.onEnd)==null||m.call(t,o.value,d),c(d))};return kt&&(Me(e,"pointerdown",f,!0),Me(r,"pointermove",p,!0),Me(r,"pointerup",h,!0)),Ng(Lg({},tg(o)),{position:o,isDragging:D(()=>!!a.value),style:D(()=>`left:${o.value.x}px;top:${o.value.y}px;`)})}var Oi=Object.getOwnPropertySymbols,jg=Object.prototype.hasOwnProperty,Hg=Object.prototype.propertyIsEnumerable,Vg=(e,t)=>{var n={};for(var l in e)jg.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&Oi)for(var l of Oi(e))t.indexOf(l)<0&&Hg.call(e,l)&&(n[l]=e[l]);return n};function Ug(e,t,n={}){const l=n,{window:r=Xe}=l,o=Vg(l,["window"]);let a;const i=r&&"ResizeObserver"in r,c=()=>{a&&(a.disconnect(),a=void 0)},f=ce(()=>ot(e),h=>{c(),i&&r&&h&&(a=new ResizeObserver(t),a.observe(h,o))},{immediate:!0,flush:"post"}),p=()=>{c(),f()};return hn(p),{isSupported:i,stop:p}}function Xu(e,t={}){const{immediate:n=!0,window:l=Xe}=t,r=z(!1);let o=null;function a(){!r.value||!l||(e(),o=l.requestAnimationFrame(a))}function i(){!r.value&&l&&(r.value=!0,a())}function c(){r.value=!1,o!=null&&l&&(l.cancelAnimationFrame(o),o=null)}return n&&i(),hn(c),{isActive:r,pause:c,resume:i}}function zg(e,t={width:0,height:0},n={}){const l=z(t.width),r=z(t.height);return Ug(e,([o])=>{l.value=o.contentRect.width,r.value=o.contentRect.height},n),ce(()=>ot(e),o=>{l.value=o?t.width:0,r.value=o?t.height:0}),{width:l,height:r}}const Pi=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Wg(e,t={}){const{document:n=yg,autoExit:l=!1}=t,r=e||(n==null?void 0:n.querySelector("html")),o=z(!1);let a=!1,i=Pi[0];if(!n)a=!1;else for(const w of Pi)if(w[1]in n){i=w,a=!0;break}const[c,f,p,,h]=i;async function d(){!a||(n!=null&&n[p]&&await n[f](),o.value=!1)}async function m(){if(!a)return;await d();const w=ot(r);w&&(await w[c](),o.value=!0)}async function y(){o.value?await d():await m()}return n&&Me(n,h,()=>{o.value=!!(n!=null&&n[p])},!1),l&&hn(d),{isSupported:a,isFullscreen:o,enter:m,exit:d,toggle:y}}function Kg(e,t,n={}){const{root:l,rootMargin:r="0px",threshold:o=.1,window:a=Xe}=n,i=a&&"IntersectionObserver"in a;let c=cn;const f=i?ce(()=>({el:ot(e),root:ot(l)}),({el:h,root:d})=>{if(c(),!h)return;const m=new IntersectionObserver(t,{root:d,rootMargin:r,threshold:o});m.observe(h),c=()=>{m.disconnect(),c=cn}},{immediate:!0,flush:"post"}):cn,p=()=>{c(),f()};return hn(p),{isSupported:i,stop:p}}const qg={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function Yg(e={}){const{reactive:t=!1,target:n=Xe,aliasMap:l=qg,passive:r=!0,onEventFired:o=cn}=e,a=Re(new Set),i={toJSON(){return{}},current:a},c=t?Re(i):i,f=new Set;function p(m,y){m in c&&(t?c[m]=y:c[m].value=y)}function h(m,y){var w,b;const $=(w=m.key)==null?void 0:w.toLowerCase(),x=(b=m.code)==null?void 0:b.toLowerCase(),C=[x,$].filter(Boolean);x&&(y?a.add(m.code):a.delete(m.code));for(const E of C)p(E,y);$==="meta"&&!y?(f.forEach(E=>{a.delete(E),p(E,!1)}),f.clear()):m.getModifierState("Meta")&&y&&[...a,...C].forEach(E=>f.add(E))}n&&(Me(n,"keydown",m=>(h(m,!0),o(m)),{passive:r}),Me(n,"keyup",m=>(h(m,!1),o(m)),{passive:r}));const d=new Proxy(c,{get(m,y,w){if(typeof y!="string")return Reflect.get(m,y,w);if(y=y.toLowerCase(),y in l&&(y=l[y]),!(y in c))if(/[+_-]/.test(y)){const $=y.split(/[+_-]/g).map(x=>x.trim());c[y]=D(()=>$.every(x=>v(d[x])))}else c[y]=z(!1);const b=Reflect.get(m,y,w);return t?v(b):b}});return d}function dx(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:l=!1,initialValue:r={x:0,y:0},window:o=Xe,eventFilter:a}=e,i=z(r.x),c=z(r.y),f=z(null),p=w=>{t==="page"?(i.value=w.pageX,c.value=w.pageY):t==="client"&&(i.value=w.clientX,c.value=w.clientY),f.value="mouse"},h=()=>{i.value=r.x,c.value=r.y},d=w=>{if(w.touches.length>0){const b=w.touches[0];t==="page"?(i.value=b.pageX,c.value=b.pageY):t==="client"&&(i.value=b.clientX,c.value=b.clientY),f.value="touch"}},m=w=>a===void 0?p(w):a(()=>p(w),{}),y=w=>a===void 0?d(w):a(()=>d(w),{});return o&&(Me(o,"mousemove",m,{passive:!0}),Me(o,"dragover",m,{passive:!0}),n&&(Me(o,"touchstart",y,{passive:!0}),Me(o,"touchmove",y,{passive:!0}),l&&Me(o,"touchend",h,{passive:!0}))),{x:i,y:c,sourceType:f}}var Yt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Yt||(Yt={}));function Zg(e,t={}){const n=z(e),{threshold:l=50,onSwipe:r,onSwipeEnd:o,onSwipeStart:a}=t,i=Re({x:0,y:0}),c=(T,W)=>{i.x=T,i.y=W},f=Re({x:0,y:0}),p=(T,W)=>{f.x=T,f.y=W},h=D(()=>i.x-f.x),d=D(()=>i.y-f.y),{max:m,abs:y}=Math,w=D(()=>m(y(h.value),y(d.value))>=l),b=z(!1),$=z(!1),x=D(()=>w.value?y(h.value)>y(d.value)?h.value>0?Yt.LEFT:Yt.RIGHT:d.value>0?Yt.UP:Yt.DOWN:Yt.NONE),C=T=>t.pointerTypes?t.pointerTypes.includes(T.pointerType):!0,E=[Me(e,"pointerdown",T=>{var W,re;if(!C(T))return;$.value=!0,(re=(W=n.value)==null?void 0:W.style)==null||re.setProperty("touch-action","none");const ue=T.target;ue==null||ue.setPointerCapture(T.pointerId);const{clientX:pe,clientY:me}=T;c(pe,me),p(pe,me),a==null||a(T)}),Me(e,"pointermove",T=>{if(!C(T)||!$.value)return;const{clientX:W,clientY:re}=T;p(W,re),!b.value&&w.value&&(b.value=!0),b.value&&(r==null||r(T))}),Me(e,"pointerup",T=>{var W,re;!C(T)||(b.value&&(o==null||o(T,x.value)),$.value=!1,b.value=!1,(re=(W=n.value)==null?void 0:W.style)==null||re.setProperty("touch-action","initial"))})],N=()=>E.forEach(T=>T());return{isSwiping:Yn(b),direction:Yn(x),posStart:Yn(i),posEnd:Yn(f),distanceX:h,distanceY:d,stop:N}}var Gg=Object.defineProperty,Si=Object.getOwnPropertySymbols,Xg=Object.prototype.hasOwnProperty,Jg=Object.prototype.propertyIsEnumerable,Mi=(e,t,n)=>t in e?Gg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qg=(e,t)=>{for(var n in t||(t={}))Xg.call(t,n)&&Mi(e,n,t[n]);if(Si)for(var n of Si(t))Jg.call(t,n)&&Mi(e,n,t[n]);return e};function hx(e={}){const{controls:t=!1,offset:n=0,immediate:l=!0,interval:r="requestAnimationFrame"}=e,o=z(uo()+n),a=()=>o.value=uo()+n,i=r==="requestAnimationFrame"?Xu(a,{immediate:l}):lg(a,r,{immediate:l});return t?Qg({timestamp:o},i):o}function Ht(e,t,n,l={}){var r;const{passive:o=!1,eventName:a,deep:i=!1,defaultValue:c}=l,f=Fn(),p=n||(f==null?void 0:f.emit)||((r=f==null?void 0:f.$emit)==null?void 0:r.bind(f));let h=a;t||(t="modelValue"),h=a||h||`update:${t.toString()}`;const d=()=>Vm(e[t])?e[t]:c;if(o){const m=z(d());return ce(()=>e[t],y=>m.value=y),ce(m,y=>{(y!==e[t]||i)&&p(h,y)},{deep:i}),m}else return D({get(){return d()},set(m){p(h,m)}})}function mx({window:e=Xe}={}){if(!e)return z(!1);const t=z(e.document.hasFocus());return Me(e,"blur",()=>{t.value=!1}),Me(e,"focus",()=>{t.value=!0}),t}function e1({window:e=Xe,initialWidth:t=1/0,initialHeight:n=1/0}={}){const l=z(t),r=z(n),o=()=>{e&&(l.value=e.innerWidth,r.value=e.innerHeight)};return o(),sg(o),Me("resize",o,{passive:!0}),{width:l,height:r}}/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ju=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ds=e=>Ju?Symbol(e):"_vr_"+e,t1=ds("rvlm"),Ti=ds("rvd"),la=ds("r"),Qu=ds("rl"),ho=ds("rvl"),qn=typeof window!="undefined";function n1(e){return e.__esModule||Ju&&e[Symbol.toStringTag]==="Module"}const Be=Object.assign;function Dr(e,t){const n={};for(const l in t){const r=t[l];n[l]=Array.isArray(r)?r.map(e):e(r)}return n}const Fs=()=>{},s1=/\/$/,l1=e=>e.replace(s1,"");function Br(e,t,n="/"){let l,r={},o="",a="";const i=t.indexOf("?"),c=t.indexOf("#",i>-1?i:0);return i>-1&&(l=t.slice(0,i),o=t.slice(i+1,c>-1?c:t.length),r=e(o)),c>-1&&(l=l||t.slice(0,c),a=t.slice(c,t.length)),l=i1(l!=null?l:t,n),{fullPath:l+(o&&"?")+o+a,path:l,query:r,hash:a}}function r1(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Fi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function o1(e,t,n){const l=t.matched.length-1,r=n.matched.length-1;return l>-1&&l===r&&os(t.matched[l],n.matched[r])&&ef(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function os(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ef(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!a1(e[n],t[n]))return!1;return!0}function a1(e,t){return Array.isArray(e)?Ri(e,t):Array.isArray(t)?Ri(t,e):e===t}function Ri(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,l)=>n===t[l]):e.length===1&&e[0]===t}function i1(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),l=e.split("/");let r=n.length-1,o,a;for(o=0;o<l.length;o++)if(a=l[o],!(r===1||a==="."))if(a==="..")r--;else break;return n.slice(0,r).join("/")+"/"+l.slice(o-(o===l.length?1:0)).join("/")}var Xs;(function(e){e.pop="pop",e.push="push"})(Xs||(Xs={}));var Rs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Rs||(Rs={}));function c1(e){if(!e)if(qn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),l1(e)}const u1=/^[^#]+#/;function f1(e,t){return e.replace(u1,"#")+t}function p1(e,t){const n=document.documentElement.getBoundingClientRect(),l=e.getBoundingClientRect();return{behavior:t.behavior,left:l.left-n.left-(t.left||0),top:l.top-n.top-(t.top||0)}}const ur=()=>({left:window.pageXOffset,top:window.pageYOffset});function d1(e){let t;if("el"in e){const n=e.el,l=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?l?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=p1(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ii(e,t){return(history.state?history.state.position-t:-1)+e}const mo=new Map;function h1(e,t){mo.set(e,t)}function m1(e){const t=mo.get(e);return mo.delete(e),t}let g1=()=>location.protocol+"//"+location.host;function tf(e,t){const{pathname:n,search:l,hash:r}=t,o=e.indexOf("#");if(o>-1){let i=r.includes(e.slice(o))?e.slice(o).length:1,c=r.slice(i);return c[0]!=="/"&&(c="/"+c),Fi(c,"")}return Fi(n,e)+l+r}function y1(e,t,n,l){let r=[],o=[],a=null;const i=({state:d})=>{const m=tf(e,location),y=n.value,w=t.value;let b=0;if(d){if(n.value=m,t.value=d,a&&a===y){a=null;return}b=w?d.position-w.position:0}else l(m);r.forEach($=>{$(n.value,y,{delta:b,type:Xs.pop,direction:b?b>0?Rs.forward:Rs.back:Rs.unknown})})};function c(){a=n.value}function f(d){r.push(d);const m=()=>{const y=r.indexOf(d);y>-1&&r.splice(y,1)};return o.push(m),m}function p(){const{history:d}=window;!d.state||d.replaceState(Be({},d.state,{scroll:ur()}),"")}function h(){for(const d of o)d();o=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",p)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",p),{pauseListeners:c,listen:f,destroy:h}}function Li(e,t,n,l=!1,r=!1){return{back:e,current:t,forward:n,replaced:l,position:window.history.length,scroll:r?ur():null}}function _1(e){const{history:t,location:n}=window,l={value:tf(e,n)},r={value:t.state};r.value||o(l.value,{back:null,current:l.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,f,p){const h=e.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:g1()+e+c;try{t[p?"replaceState":"pushState"](f,"",d),r.value=f}catch(m){console.error(m),n[p?"replace":"assign"](d)}}function a(c,f){const p=Be({},t.state,Li(r.value.back,c,r.value.forward,!0),f,{position:r.value.position});o(c,p,!0),l.value=c}function i(c,f){const p=Be({},r.value,t.state,{forward:c,scroll:ur()});o(p.current,p,!0);const h=Be({},Li(l.value,c,null),{position:p.position+1},f);o(c,h,!1),l.value=c}return{location:l,state:r,push:i,replace:a}}function v1(e){e=c1(e);const t=_1(e),n=y1(e,t.state,t.location,t.replace);function l(o,a=!0){a||n.pauseListeners(),history.go(o)}const r=Be({location:"",base:e,go:l,createHref:f1.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function b1(e){return typeof e=="string"||e&&typeof e=="object"}function nf(e){return typeof e=="string"||typeof e=="symbol"}const Qt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},sf=ds("nf");var Ni;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ni||(Ni={}));function as(e,t){return Be(new Error,{type:e,[sf]:!0},t)}function en(e,t){return e instanceof Error&&sf in e&&(t==null||!!(e.type&t))}const ji="[^/]+?",w1={sensitive:!1,strict:!1,start:!0,end:!0},A1=/[.+*?^${}()[\]/\\]/g;function x1(e,t){const n=Be({},w1,t),l=[];let r=n.start?"^":"";const o=[];for(const f of e){const p=f.length?[]:[90];n.strict&&!f.length&&(r+="/");for(let h=0;h<f.length;h++){const d=f[h];let m=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(A1,"\\$&"),m+=40;else if(d.type===1){const{value:y,repeatable:w,optional:b,regexp:$}=d;o.push({name:y,repeatable:w,optional:b});const x=$||ji;if(x!==ji){m+=10;try{new RegExp(`(${x})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${y}" (${x}): `+E.message)}}let C=w?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(C=b&&f.length<2?`(?:/${C})`:"/"+C),b&&(C+="?"),r+=C,m+=20,b&&(m+=-8),w&&(m+=-20),x===".*"&&(m+=-50)}p.push(m)}l.push(p)}if(n.strict&&n.end){const f=l.length-1;l[f][l[f].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function i(f){const p=f.match(a),h={};if(!p)return null;for(let d=1;d<p.length;d++){const m=p[d]||"",y=o[d-1];h[y.name]=m&&y.repeatable?m.split("/"):m}return h}function c(f){let p="",h=!1;for(const d of e){(!h||!p.endsWith("/"))&&(p+="/"),h=!1;for(const m of d)if(m.type===0)p+=m.value;else if(m.type===1){const{value:y,repeatable:w,optional:b}=m,$=y in f?f[y]:"";if(Array.isArray($)&&!w)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const x=Array.isArray($)?$.join("/"):$;if(!x)if(b)d.length<2&&e.length>1&&(p.endsWith("/")?p=p.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);p+=x}}return p}return{re:a,score:l,keys:o,parse:i,stringify:c}}function k1(e,t){let n=0;for(;n<e.length&&n<t.length;){const l=t[n]-e[n];if(l)return l;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function C1(e,t){let n=0;const l=e.score,r=t.score;for(;n<l.length&&n<r.length;){const o=k1(l[n],r[n]);if(o)return o;n++}return r.length-l.length}const $1={type:0,value:""},E1=/[a-zA-Z0-9_]/;function D1(e){if(!e)return[[]];if(e==="/")return[[$1]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${f}": ${m}`)}let n=0,l=n;const r=[];let o;function a(){o&&r.push(o),o=[]}let i=0,c,f="",p="";function h(){!f||(n===0?o.push({type:0,value:f}):n===1||n===2||n===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:f,regexp:p,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),f="")}function d(){f+=c}for(;i<e.length;){if(c=e[i++],c==="\\"&&n!==2){l=n,n=4;continue}switch(n){case 0:c==="/"?(f&&h(),a()):c===":"?(h(),n=1):d();break;case 4:d(),n=l;break;case 1:c==="("?n=2:E1.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&i--);break;case 2:c===")"?p[p.length-1]=="\\"?p=p.slice(0,-1)+c:n=3:p+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&i--,p="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),h(),a(),r}function B1(e,t,n){const l=x1(D1(e.path),n),r=Be(l,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function O1(e,t){const n=[],l=new Map;t=Vi({strict:!1,end:!0,sensitive:!1},t);function r(p){return l.get(p)}function o(p,h,d){const m=!d,y=S1(p);y.aliasOf=d&&d.record;const w=Vi(t,p),b=[y];if("alias"in p){const C=typeof p.alias=="string"?[p.alias]:p.alias;for(const E of C)b.push(Be({},y,{components:d?d.record.components:y.components,path:E,aliasOf:d?d.record:y}))}let $,x;for(const C of b){const{path:E}=C;if(h&&E[0]!=="/"){const N=h.record.path,T=N[N.length-1]==="/"?"":"/";C.path=h.record.path+(E&&T+E)}if($=B1(C,h,w),d?d.alias.push($):(x=x||$,x!==$&&x.alias.push($),m&&p.name&&!Hi($)&&a(p.name)),"children"in y){const N=y.children;for(let T=0;T<N.length;T++)o(N[T],$,d&&d.children[T])}d=d||$,c($)}return x?()=>{a(x)}:Fs}function a(p){if(nf(p)){const h=l.get(p);h&&(l.delete(p),n.splice(n.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=n.indexOf(p);h>-1&&(n.splice(h,1),p.record.name&&l.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function i(){return n}function c(p){let h=0;for(;h<n.length&&C1(p,n[h])>=0&&(p.record.path!==n[h].record.path||!lf(p,n[h]));)h++;n.splice(h,0,p),p.record.name&&!Hi(p)&&l.set(p.record.name,p)}function f(p,h){let d,m={},y,w;if("name"in p&&p.name){if(d=l.get(p.name),!d)throw as(1,{location:p});w=d.record.name,m=Be(P1(h.params,d.keys.filter(x=>!x.optional).map(x=>x.name)),p.params),y=d.stringify(m)}else if("path"in p)y=p.path,d=n.find(x=>x.re.test(y)),d&&(m=d.parse(y),w=d.record.name);else{if(d=h.name?l.get(h.name):n.find(x=>x.re.test(h.path)),!d)throw as(1,{location:p,currentLocation:h});w=d.record.name,m=Be({},h.params,p.params),y=d.stringify(m)}const b=[];let $=d;for(;$;)b.unshift($.record),$=$.parent;return{name:w,path:y,params:m,matched:b,meta:T1(b)}}return e.forEach(p=>o(p)),{addRoute:o,resolve:f,removeRoute:a,getRoutes:i,getRecordMatcher:r}}function P1(e,t){const n={};for(const l of t)l in e&&(n[l]=e[l]);return n}function S1(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:M1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function M1(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const l in e.components)t[l]=typeof n=="boolean"?n:n[l];return t}function Hi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function T1(e){return e.reduce((t,n)=>Be(t,n.meta),{})}function Vi(e,t){const n={};for(const l in e)n[l]=l in t?t[l]:e[l];return n}function lf(e,t){return t.children.some(n=>n===e||lf(e,n))}const rf=/#/g,F1=/&/g,R1=/\//g,I1=/=/g,L1=/\?/g,of=/\+/g,N1=/%5B/g,j1=/%5D/g,af=/%5E/g,H1=/%60/g,cf=/%7B/g,V1=/%7C/g,uf=/%7D/g,U1=/%20/g;function ra(e){return encodeURI(""+e).replace(V1,"|").replace(N1,"[").replace(j1,"]")}function z1(e){return ra(e).replace(cf,"{").replace(uf,"}").replace(af,"^")}function go(e){return ra(e).replace(of,"%2B").replace(U1,"+").replace(rf,"%23").replace(F1,"%26").replace(H1,"`").replace(cf,"{").replace(uf,"}").replace(af,"^")}function W1(e){return go(e).replace(I1,"%3D")}function K1(e){return ra(e).replace(rf,"%23").replace(L1,"%3F")}function q1(e){return e==null?"":K1(e).replace(R1,"%2F")}function Hl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Y1(e){const t={};if(e===""||e==="?")return t;const l=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<l.length;++r){const o=l[r].replace(of," "),a=o.indexOf("="),i=Hl(a<0?o:o.slice(0,a)),c=a<0?null:Hl(o.slice(a+1));if(i in t){let f=t[i];Array.isArray(f)||(f=t[i]=[f]),f.push(c)}else t[i]=c}return t}function Ui(e){let t="";for(let n in e){const l=e[n];if(n=W1(n),l==null){l!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(l)?l.map(o=>o&&go(o)):[l&&go(l)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function Z1(e){const t={};for(const n in e){const l=e[n];l!==void 0&&(t[n]=Array.isArray(l)?l.map(r=>r==null?null:""+r):l==null?l:""+l)}return t}function bs(){let e=[];function t(l){return e.push(l),()=>{const r=e.indexOf(l);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function sn(e,t,n,l,r){const o=l&&(l.enterCallbacks[r]=l.enterCallbacks[r]||[]);return()=>new Promise((a,i)=>{const c=h=>{h===!1?i(as(4,{from:n,to:t})):h instanceof Error?i(h):b1(h)?i(as(2,{from:t,to:h})):(o&&l.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},f=e.call(l&&l.instances[r],t,n,c);let p=Promise.resolve(f);e.length<3&&(p=p.then(c)),p.catch(h=>i(h))})}function Or(e,t,n,l){const r=[];for(const o of e)for(const a in o.components){let i=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(G1(i)){const f=(i.__vccOpts||i)[t];f&&r.push(sn(f,n,l,o,a))}else{let c=i();r.push(()=>c.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const p=n1(f)?f.default:f;o.components[a]=p;const d=(p.__vccOpts||p)[t];return d&&sn(d,n,l,o,a)()}))}}return r}function G1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function zi(e){const t=H(la),n=H(Qu),l=D(()=>t.resolve(v(e.to))),r=D(()=>{const{matched:c}=l.value,{length:f}=c,p=c[f-1],h=n.matched;if(!p||!h.length)return-1;const d=h.findIndex(os.bind(null,p));if(d>-1)return d;const m=Wi(c[f-2]);return f>1&&Wi(p)===m&&h[h.length-1].path!==m?h.findIndex(os.bind(null,c[f-2])):d}),o=D(()=>r.value>-1&&ey(n.params,l.value.params)),a=D(()=>r.value>-1&&r.value===n.matched.length-1&&ef(n.params,l.value.params));function i(c={}){return Q1(c)?t[v(e.replace)?"replace":"push"](v(e.to)).catch(Fs):Promise.resolve()}return{route:l,href:D(()=>l.value.href),isActive:o,isExactActive:a,navigate:i}}const X1=ye({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zi,setup(e,{slots:t}){const n=Re(zi(e)),{options:l}=H(la),r=D(()=>({[Ki(e.activeClass,l.linkActiveClass,"router-link-active")]:n.isActive,[Ki(e.exactActiveClass,l.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:Tt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),J1=X1;function Q1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ey(e,t){for(const n in t){const l=t[n],r=e[n];if(typeof l=="string"){if(l!==r)return!1}else if(!Array.isArray(r)||r.length!==l.length||l.some((o,a)=>o!==r[a]))return!1}return!0}function Wi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ki=(e,t,n)=>e!=null?e:t!=null?t:n,ty=ye({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const l=H(ho),r=D(()=>e.route||l.value),o=H(Ti,0),a=D(()=>r.value.matched[o]);ht(Ti,o+1),ht(t1,a),ht(ho,r);const i=z();return ce(()=>[i.value,a.value,e.name],([c,f,p],[h,d,m])=>{f&&(f.instances[p]=c,d&&d!==f&&c&&c===h&&(f.leaveGuards.size||(f.leaveGuards=d.leaveGuards),f.updateGuards.size||(f.updateGuards=d.updateGuards))),c&&f&&(!d||!os(f,d)||!h)&&(f.enterCallbacks[p]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,f=a.value,p=f&&f.components[e.name],h=e.name;if(!p)return qi(n.default,{Component:p,route:c});const d=f.props[e.name],m=d?d===!0?c.params:typeof d=="function"?d(c):d:null,w=Tt(p,Be({},m,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(f.instances[h]=null)},ref:i}));return qi(n.default,{Component:w,route:c})||w}}});function qi(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ny=ty;function sy(e){const t=O1(e.routes,e),n=e.parseQuery||Y1,l=e.stringifyQuery||Ui,r=e.history,o=bs(),a=bs(),i=bs(),c=zt(Qt);let f=Qt;qn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=Dr.bind(null,B=>""+B),h=Dr.bind(null,q1),d=Dr.bind(null,Hl);function m(B,K){let R,G;return nf(B)?(R=t.getRecordMatcher(B),G=K):G=B,t.addRoute(G,R)}function y(B){const K=t.getRecordMatcher(B);K&&t.removeRoute(K)}function w(){return t.getRoutes().map(B=>B.record)}function b(B){return!!t.getRecordMatcher(B)}function $(B,K){if(K=Be({},K||c.value),typeof B=="string"){const ie=Br(n,B,K.path),g=t.resolve({path:ie.path},K),_=r.createHref(ie.fullPath);return Be(ie,g,{params:d(g.params),hash:Hl(ie.hash),redirectedFrom:void 0,href:_})}let R;if("path"in B)R=Be({},B,{path:Br(n,B.path,K.path).path});else{const ie=Be({},B.params);for(const g in ie)ie[g]==null&&delete ie[g];R=Be({},B,{params:h(B.params)}),K.params=h(K.params)}const G=t.resolve(R,K),_e=B.hash||"";G.params=p(d(G.params));const Pe=r1(l,Be({},B,{hash:z1(_e),path:G.path})),fe=r.createHref(Pe);return Be({fullPath:Pe,hash:_e,query:l===Ui?Z1(B.query):B.query||{}},G,{redirectedFrom:void 0,href:fe})}function x(B){return typeof B=="string"?Br(n,B,c.value.path):Be({},B)}function C(B,K){if(f!==B)return as(8,{from:K,to:B})}function E(B){return W(B)}function N(B){return E(Be(x(B),{replace:!0}))}function T(B){const K=B.matched[B.matched.length-1];if(K&&K.redirect){const{redirect:R}=K;let G=typeof R=="function"?R(B):R;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=x(G):{path:G},G.params={}),Be({query:B.query,hash:B.hash,params:B.params},G)}}function W(B,K){const R=f=$(B),G=c.value,_e=B.state,Pe=B.force,fe=B.replace===!0,ie=T(R);if(ie)return W(Be(x(ie),{state:_e,force:Pe,replace:fe}),K||R);const g=R;g.redirectedFrom=K;let _;return!Pe&&o1(l,G,R)&&(_=as(16,{to:g,from:G}),It(G,G,!0,!1)),(_?Promise.resolve(_):ue(g,G)).catch(A=>en(A)?en(A,2)?A:de(A):se(A,g,G)).then(A=>{if(A){if(en(A,2))return W(Be(x(A.to),{state:_e,force:Pe,replace:fe}),K||g)}else A=me(g,G,!0,fe,_e);return pe(g,G,A),A})}function re(B,K){const R=C(B,K);return R?Promise.reject(R):Promise.resolve()}function ue(B,K){let R;const[G,_e,Pe]=ly(B,K);R=Or(G.reverse(),"beforeRouteLeave",B,K);for(const ie of G)ie.leaveGuards.forEach(g=>{R.push(sn(g,B,K))});const fe=re.bind(null,B,K);return R.push(fe),Hn(R).then(()=>{R=[];for(const ie of o.list())R.push(sn(ie,B,K));return R.push(fe),Hn(R)}).then(()=>{R=Or(_e,"beforeRouteUpdate",B,K);for(const ie of _e)ie.updateGuards.forEach(g=>{R.push(sn(g,B,K))});return R.push(fe),Hn(R)}).then(()=>{R=[];for(const ie of B.matched)if(ie.beforeEnter&&!K.matched.includes(ie))if(Array.isArray(ie.beforeEnter))for(const g of ie.beforeEnter)R.push(sn(g,B,K));else R.push(sn(ie.beforeEnter,B,K));return R.push(fe),Hn(R)}).then(()=>(B.matched.forEach(ie=>ie.enterCallbacks={}),R=Or(Pe,"beforeRouteEnter",B,K),R.push(fe),Hn(R))).then(()=>{R=[];for(const ie of a.list())R.push(sn(ie,B,K));return R.push(fe),Hn(R)}).catch(ie=>en(ie,8)?ie:Promise.reject(ie))}function pe(B,K,R){for(const G of i.list())G(B,K,R)}function me(B,K,R,G,_e){const Pe=C(B,K);if(Pe)return Pe;const fe=K===Qt,ie=qn?history.state:{};R&&(G||fe?r.replace(B.fullPath,Be({scroll:fe&&ie&&ie.scroll},_e)):r.push(B.fullPath,_e)),c.value=B,It(B,K,R,fe),de()}let Te;function Ne(){Te||(Te=r.listen((B,K,R)=>{const G=$(B),_e=T(G);if(_e){W(Be(_e,{replace:!0}),G).catch(Fs);return}f=G;const Pe=c.value;qn&&h1(Ii(Pe.fullPath,R.delta),ur()),ue(G,Pe).catch(fe=>en(fe,12)?fe:en(fe,2)?(W(fe.to,G).then(ie=>{en(ie,20)&&!R.delta&&R.type===Xs.pop&&r.go(-1,!1)}).catch(Fs),Promise.reject()):(R.delta&&r.go(-R.delta,!1),se(fe,G,Pe))).then(fe=>{fe=fe||me(G,Pe,!1),fe&&(R.delta?r.go(-R.delta,!1):R.type===Xs.pop&&en(fe,20)&&r.go(-1,!1)),pe(G,Pe,fe)}).catch(Fs)}))}let Ye=bs(),$e=bs(),te;function se(B,K,R){de(B);const G=$e.list();return G.length?G.forEach(_e=>_e(B,K,R)):console.error(B),Promise.reject(B)}function ee(){return te&&c.value!==Qt?Promise.resolve():new Promise((B,K)=>{Ye.add([B,K])})}function de(B){return te||(te=!B,Ne(),Ye.list().forEach(([K,R])=>B?R(B):K()),Ye.reset()),B}function It(B,K,R,G){const{scrollBehavior:_e}=e;if(!qn||!_e)return Promise.resolve();const Pe=!R&&m1(Ii(B.fullPath,0))||(G||!R)&&history.state&&history.state.scroll||null;return qe().then(()=>_e(B,K,Pe)).then(fe=>fe&&d1(fe)).catch(fe=>se(fe,B,K))}const Je=B=>r.go(B);let bt;const lt=new Set;return{currentRoute:c,addRoute:m,removeRoute:y,hasRoute:b,getRoutes:w,resolve:$,options:e,push:E,replace:N,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:o.add,beforeResolve:a.add,afterEach:i.add,onError:$e.add,isReady:ee,install(B){const K=this;B.component("RouterLink",J1),B.component("RouterView",ny),B.config.globalProperties.$router=K,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>v(c)}),qn&&!bt&&c.value===Qt&&(bt=!0,E(r.location).catch(_e=>{}));const R={};for(const _e in Qt)R[_e]=D(()=>c.value[_e]);B.provide(la,K),B.provide(Qu,Re(R)),B.provide(ho,c);const G=B.unmount;lt.add(B),B.unmount=function(){lt.delete(B),lt.size<1&&(f=Qt,Te&&Te(),Te=null,c.value=Qt,bt=!1,te=!1),G()}}}}function Hn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function ly(e,t){const n=[],l=[],r=[],o=Math.max(t.matched.length,e.matched.length);for(let a=0;a<o;a++){const i=t.matched[a];i&&(e.matched.find(f=>os(f,i))?l.push(i):n.push(i));const c=e.matched[a];c&&(t.matched.find(f=>os(f,c))||r.push(c))}return[n,l,r]}const Pr=z(!1),Is=z(!1),Zn=z(!1),ry=z(!0),yo=Eg(ve({xs:460},Ag)),Pn=e1(),ff=Yg(),oy=D(()=>Pn.height.value-Pn.width.value/an>180),pf=Wg(kt?document.body:null),ts=wg(),ay=D(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=ts.value)==null?void 0:e.tagName)||"")||((t=ts.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),iy=D(()=>{var e;return["BUTTON","A"].includes(((e=ts.value)==null?void 0:e.tagName)||"")});Rt("slidev-camera","default");Rt("slidev-mic","default");const Dl=Rt("slidev-scale",0),tt=Rt("slidev-show-overview",!1),Sr=Rt("slidev-presenter-cursor",!0),Yi=Rt("slidev-show-editor",!1);Rt("slidev-editor-width",kt?window.innerWidth*.4:100);const df=Yu(tt);function Zi(e,t,n,l=r=>r){return e*l(.5-t*(.5-n))}function cy(e){return[-e[0],-e[1]]}function Bt(e,t){return[e[0]+t[0],e[1]+t[1]]}function xt(e,t){return[e[0]-t[0],e[1]-t[1]]}function Dt(e,t){return[e[0]*t,e[1]*t]}function uy(e,t){return[e[0]/t,e[1]/t]}function ws(e){return[e[1],-e[0]]}function fy(e,t){return e[0]*t[0]+e[1]*t[1]}function py(e,t){return e[0]===t[0]&&e[1]===t[1]}function dy(e){return Math.hypot(e[0],e[1])}function hy(e){return e[0]*e[0]+e[1]*e[1]}function Gi(e,t){return hy(xt(e,t))}function hf(e){return uy(e,dy(e))}function my(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function As(e,t,n){let l=Math.sin(n),r=Math.cos(n),o=e[0]-t[0],a=e[1]-t[1],i=o*r-a*l,c=o*l+a*r;return[i+t[0],c+t[1]]}function _o(e,t,n){return Bt(e,Dt(xt(t,e),n))}function Xi(e,t,n){return Bt(e,Dt(t,n))}var{min:Vn,PI:gy}=Math,Ji=.275,xs=gy+1e-4;function yy(e,t={}){let{size:n=16,smoothing:l=.5,thinning:r=.5,simulatePressure:o=!0,easing:a=te=>te,start:i={},end:c={},last:f=!1}=t,{cap:p=!0,easing:h=te=>te*(2-te)}=i,{cap:d=!0,easing:m=te=>--te*te*te+1}=c;if(e.length===0||n<=0)return[];let y=e[e.length-1].runningLength,w=i.taper===!1?0:i.taper===!0?Math.max(n,y):i.taper,b=c.taper===!1?0:c.taper===!0?Math.max(n,y):c.taper,$=Math.pow(n*l,2),x=[],C=[],E=e.slice(0,10).reduce((te,se)=>{let ee=se.pressure;if(o){let de=Vn(1,se.distance/n),It=Vn(1,1-de);ee=Vn(1,te+(It-te)*(de*Ji))}return(te+ee)/2},e[0].pressure),N=Zi(n,r,e[e.length-1].pressure,a),T,W=e[0].vector,re=e[0].point,ue=re,pe=re,me=ue;for(let te=0;te<e.length;te++){let{pressure:se}=e[te],{point:ee,vector:de,distance:It,runningLength:Je}=e[te];if(te<e.length-1&&y-Je<3)continue;if(r){if(o){let R=Vn(1,It/n),G=Vn(1,1-R);se=Vn(1,E+(G-E)*(R*Ji))}N=Zi(n,r,se,a)}else N=n/2;T===void 0&&(T=N);let bt=Je<w?h(Je/w):1,lt=y-Je<b?m((y-Je)/b):1;if(N=Math.max(.01,N*Math.min(bt,lt)),te===e.length-1){let R=Dt(ws(de),N);x.push(xt(ee,R)),C.push(Bt(ee,R));continue}let Nn=e[te+1].vector,B=fy(de,Nn);if(B<0){let R=Dt(ws(W),N);for(let G=1/13,_e=0;_e<=1;_e+=G)pe=As(xt(ee,R),ee,xs*_e),x.push(pe),me=As(Bt(ee,R),ee,xs*-_e),C.push(me);re=pe,ue=me;continue}let K=Dt(ws(_o(Nn,de,B)),N);pe=xt(ee,K),(te<=1||Gi(re,pe)>$)&&(x.push(pe),re=pe),me=Bt(ee,K),(te<=1||Gi(ue,me)>$)&&(C.push(me),ue=me),E=se,W=de}let Te=e[0].point.slice(0,2),Ne=e.length>1?e[e.length-1].point.slice(0,2):Bt(e[0].point,[1,1]),Ye=[],$e=[];if(e.length===1){if(!(w||b)||f){let te=Xi(Te,hf(ws(xt(Te,Ne))),-(T||N)),se=[];for(let ee=1/13,de=ee;de<=1;de+=ee)se.push(As(te,Te,xs*2*de));return se}}else{if(!(w||b&&e.length===1))if(p)for(let se=1/13,ee=se;ee<=1;ee+=se){let de=As(C[0],Te,xs*ee);Ye.push(de)}else{let se=xt(x[0],C[0]),ee=Dt(se,.5),de=Dt(se,.51);Ye.push(xt(Te,ee),xt(Te,de),Bt(Te,de),Bt(Te,ee))}let te=ws(cy(e[e.length-1].vector));if(b||w&&e.length===1)$e.push(Ne);else if(d){let se=Xi(Ne,te,N);for(let ee=1/29,de=ee;de<1;de+=ee)$e.push(As(se,Ne,xs*3*de))}else $e.push(Bt(Ne,Dt(te,N)),Bt(Ne,Dt(te,N*.99)),xt(Ne,Dt(te,N*.99)),xt(Ne,Dt(te,N)))}return x.concat($e,C.reverse(),Ye)}function _y(e,t={}){var n;let{streamline:l=.5,size:r=16,last:o=!1}=t;if(e.length===0)return[];let a=.15+(1-l)*.85,i=Array.isArray(e[0])?e:e.map(({x:m,y,pressure:w=.5})=>[m,y,w]);if(i.length===2){let m=i[1];i=i.slice(0,-1);for(let y=1;y<5;y++)i.push(_o(i[0],m,y/4))}i.length===1&&(i=[...i,[...Bt(i[0],[1,1]),...i[0].slice(2)]]);let c=[{point:[i[0][0],i[0][1]],pressure:i[0][2]>=0?i[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],f=!1,p=0,h=c[0],d=i.length-1;for(let m=1;m<i.length;m++){let y=o&&m===d?i[m].slice(0,2):_o(h.point,i[m],a);if(py(h.point,y))continue;let w=my(y,h.point);if(p+=w,m<d&&!f){if(p<r)continue;f=!0}h={point:y,pressure:i[m][2]>=0?i[m][2]:.5,vector:hf(xt(h.point,y)),distance:w,runningLength:p},c.push(h)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function vy(e,t={}){return yy(_y(e,t),t)}var by=vy,wy=Object.defineProperty,Qi=Object.getOwnPropertySymbols,Ay=Object.prototype.hasOwnProperty,xy=Object.prototype.propertyIsEnumerable,ec=(e,t,n)=>t in e?wy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vo=(e,t)=>{for(var n in t||(t={}))Ay.call(t,n)&&ec(e,n,t[n]);if(Qi)for(var n of Qi(t))xy.call(t,n)&&ec(e,n,t[n]);return e},ky=()=>({events:{},emit(e,...t){(this.events[e]||[]).forEach(n=>n(...t))},on(e,t){return(this.events[e]=this.events[e]||[]).push(t),()=>this.events[e]=(this.events[e]||[]).filter(n=>n!==t)}});function Vl(e,t){return e-t}function Cy(e){return e<0?-1:1}function Ul(e){return[Math.abs(e),Cy(e)]}function mf(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var $y=2,Kt=$y,hs=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t,n;const l=this.drauu.el,r=(t=this.drauu.options.coordinateScale)!=null?t:1;if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-o.left)*r,y:(e.pageY-o.top)*r,pressure:e.pressure}}else{const o=this.drauu.svgPoint;o.x=e.clientX,o.y=e.clientY;const a=o.matrixTransform((n=l.getScreenCTM())==null?void 0:n.inverse());return{x:a.x*r,y:a.y*r,pressure:e.pressure}}}createElement(e,t){var n;const l=document.createElementNS("http://www.w3.org/2000/svg",e),r=t?vo(vo({},this.brush),t):this.brush;return l.setAttribute("fill",(n=r.fill)!=null?n:"transparent"),l.setAttribute("stroke",r.color),l.setAttribute("stroke-width",r.size.toString()),l.setAttribute("stroke-linecap","round"),r.dasharray&&l.setAttribute("stroke-dasharray",r.dasharray),l}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Kt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},Ey=class extends hs{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=by(e,vo({size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},this.brush.stylusOptions));if(!t.length)return"";const n=t.reduce((l,[r,o],a,i)=>{const[c,f]=i[(a+1)%i.length];return l.push(r,o,(r+c)/2,(o+f)/2),l},["M",...t[0],"Q"]);return n.push("Z"),n.map(l=>typeof l=="number"?l.toFixed(2):l).join(" ")}},Dy=class extends hs{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Ul(e.x-this.start.x),[l,r]=Ul(e.y-this.start.y);if(this.shiftPressed){const o=Math.min(t,l);t=o,l=o}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",l);else{const[o,a]=[this.start.x,this.start.x+t*n].sort(Vl),[i,c]=[this.start.y,this.start.y+l*r].sort(Vl);this.attr("cx",(o+a)/2),this.attr("cy",(i+c)/2),this.attr("rx",(a-o)/2),this.attr("ry",(c-i)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function gf(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),l=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",t),l.setAttribute("id",e),l.setAttribute("viewBox","0 -5 10 10"),l.setAttribute("refX","5"),l.setAttribute("refY","0"),l.setAttribute("markerWidth","4"),l.setAttribute("markerHeight","4"),l.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),l.appendChild(r),n.appendChild(l),n}var By=class extends hs{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=mf(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(gf(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const l=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let o=l/r;o=Math.round(o),Math.abs(o)<=1?(t=this.start.x+r*o,n=this.start.y+r):(t=this.start.x+l,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Oy=class extends hs{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Ul(e.x-this.start.x),[l,r]=Ul(e.y-this.start.y);if(this.shiftPressed){const o=Math.min(t,l);t=o,l=o}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-l),this.attr("width",t*2),this.attr("height",l*2);else{const[o,a]=[this.start.x,this.start.x+t*n].sort(Vl),[i,c]=[this.start.y,this.start.y+l*r].sort(Vl);this.attr("x",o),this.attr("y",i),this.attr("width",a-o),this.attr("height",c-i)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Py(e,t){const n=e.x-t.x,l=e.y-t.y;return n*n+l*l}function Sy(e,t,n){let l=t.x,r=t.y,o=n.x-l,a=n.y-r;if(o!==0||a!==0){const i=((e.x-l)*o+(e.y-r)*a)/(o*o+a*a);i>1?(l=n.x,r=n.y):i>0&&(l+=o*i,r+=a*i)}return o=e.x-l,a=e.y-r,o*o+a*a}function My(e,t){let n=e[0];const l=[n];let r;for(let o=1,a=e.length;o<a;o++)r=e[o],Py(r,n)>t&&(l.push(r),n=r);return n!==r&&r&&l.push(r),l}function bo(e,t,n,l,r){let o=l,a=0;for(let i=t+1;i<n;i++){const c=Sy(e[i],e[t],e[n]);c>o&&(a=i,o=c)}o>l&&(a-t>1&&bo(e,t,a,l,r),r.push(e[a]),n-a>1&&bo(e,a,n,l,r))}function Ty(e,t){const n=e.length-1,l=[e[0]];return bo(e,0,n,t,l),l.push(e[n]),l}function tc(e,t,n=!1){if(e.length<=2)return e;const l=t!==void 0?t*t:1;return e=n?e:My(e,l),e=Ty(e,l),e}var Fy=class extends hs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=mf();const t=gf(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=tc(this.points,1,!0),this.count=0),this.attr("d",sc(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",sc(tc(this.points,1,!0))),!e.getTotalLength()))}};function Ry(e,t){const n=t.x-e.x,l=t.y-e.y;return{length:Math.sqrt(Math.pow(n,2)+Math.pow(l,2)),angle:Math.atan2(l,n)}}function nc(e,t,n,l){const r=t||e,o=n||e,a=.2,i=Ry(r,o),c=i.angle+(l?Math.PI:0),f=i.length*a,p=e.x+Math.cos(c)*f,h=e.y+Math.sin(c)*f;return{x:p,y:h}}function Iy(e,t,n){const l=nc(n[t-1],n[t-2],e),r=nc(e,n[t-1],n[t+1],!0);return`C ${l.x.toFixed(Kt)},${l.y.toFixed(Kt)} ${r.x.toFixed(Kt)},${r.y.toFixed(Kt)} ${e.x.toFixed(Kt)},${e.y.toFixed(Kt)}`}function sc(e){return e.reduce((t,n,l,r)=>l===0?`M ${n.x.toFixed(Kt)},${n.y.toFixed(Kt)}`:`${t} ${Iy(n,l,r)}`,"")}var Ly=class extends hs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,l)=>{if(n&&n.length)for(let r=0;r<n.length;r++){const o=n[r];if(o.getTotalLength){const a=o.getTotalLength();for(let i=0;i<this.pathSubFactor;i++){const c=o.getPointAtLength(a*i/this.pathSubFactor),f=o.getPointAtLength(a*(i+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:f.x,y1:c.y,y2:f.y,segment:i,element:l||o})}}else o.children&&t(o.children,o)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],l={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,l)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,l=e.x2,r=t.x1,o=t.x2,a=e.y1,i=e.y2,c=t.y1,f=t.y2,p=(n-l)*(c-f)-(a-i)*(r-o),h=(n*i-a*l)*(r-o)-(n-l)*(r*f-c*o),d=(n*i-a*l)*(c-f)-(a-i)*(r*f-c*o),m=(y,w,b)=>y>=w&&y<=b?!0:y>=b&&y<=w;if(p===0)return!1;{const y={x:h/p,y:d/p};return m(y.x,n,l)&&m(y.y,a,i)&&m(y.x,r,o)&&m(y.y,c,f)}}};function Ny(e){return{draw:new Fy(e),stylus:new Ey(e),line:new By(e),rectangle:new Oy(e),ellipse:new Dy(e),eraseLine:new Ly(e)}}var jy=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=ky(),this._models=Ny(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,l=this.eventStart.bind(this),r=this.eventMove.bind(this),o=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",l,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",o,{passive:!1}),window.addEventListener("pointercancel",o,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",l),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",o),window.removeEventListener("pointercancel",o),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function Hy(e){return new jy(e)}const wo=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Vt=Rt("slidev-drawing-enabled",!1),gx=Rt("slidev-drawing-pinned",!1),Vy=z(!1),Uy=z(!1),zy=z(!1),Js=z(!1),$n=Hm(Rt("slidev-drawing-brush",{color:wo[0],size:4,mode:"stylus"})),lc=z("stylus"),yf=D(()=>xe.drawings.syncAll||jt.value);let Qs=!1;const ks=D({get(){return lc.value},set(e){lc.value=e,e==="arrow"?($n.mode="line",$n.arrowEnd=!0):($n.mode=e,$n.arrowEnd=!1)}}),Wy=Re({brush:$n,acceptsInputTypes:D(()=>Vt.value?void 0:["pen"]),coordinateTransform:!1}),nt=er(Hy(Wy));function Ky(){nt.clear(),yf.value&&Wu(Ve.value,"")}function _f(){var e;Uy.value=nt.canRedo(),Vy.value=nt.canUndo(),zy.value=!!((e=nt.el)!=null&&e.children.length)}function qy(e){Qs=!0;const t=Ll[e||Ve.value];t!=null?nt.load(t):nt.clear(),Qs=!1}nt.on("changed",()=>{if(_f(),!Qs){const e=nt.dump(),t=Ve.value;(Ll[t]||"")!==e&&yf.value&&Wu(t,nt.dump())}});Im(e=>{Qs=!0,e[Ve.value]!=null&&nt.load(e[Ve.value]||""),Qs=!1,_f()});qe(()=>{ce(Ve,()=>{!nt.mounted||qy()},{immediate:!0})});nt.on("start",()=>Js.value=!0);nt.on("end",()=>Js.value=!1);window.addEventListener("keydown",e=>{if(!Vt.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?nt.redo():nt.undo():e.code==="Escape"?Vt.value=!1:e.code==="KeyL"&&t?ks.value="line":e.code==="KeyA"&&t?ks.value="arrow":e.code==="KeyS"&&t?ks.value="stylus":e.code==="KeyR"&&t?ks.value="rectangle":e.code==="KeyE"&&t?ks.value="ellipse":e.code==="KeyC"&&t?Ky():e.code.startsWith("Digit")&&t&&+e.code[5]<=wo.length?$n.color=wo[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);const rc=Sg(),Mr=Rt("slidev-color-schema","auto"),Ao=D(()=>xe.colorSchema!=="auto"),oa=D({get(){return Ao.value?xe.colorSchema==="dark":Mr.value==="auto"?rc.value:Mr.value==="dark"},set(e){Ao.value||(Mr.value=e===rc.value?"auto":e?"dark":"light")}}),vf=Yu(oa);kt&&ce(oa,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});function Yy(){return[]}const Bl=z(1),Ol=D(()=>He.length-1),gt=z(0),aa=z(0);function Zy(){gt.value>Bl.value&&(gt.value-=1)}function Gy(){gt.value<Ol.value&&(gt.value+=1)}function Xy(){if(gt.value>Bl.value){let e=gt.value-aa.value;e<Bl.value&&(e=Bl.value),gt.value=e}}function Jy(){if(gt.value<Ol.value){let e=gt.value+aa.value;e>Ol.value&&(e=Ol.value),gt.value=e}}const bf=je(ft(ay),ft(iy),ry);function Qy(e,t,n=!1){typeof e=="string"&&(e=ff[e]);const l=je(e,bf);let r=0,o;const a=()=>{if(clearTimeout(o),!l.value){r=0;return}n&&(o=setTimeout(a,Math.max(1e3-r*250,150)),r++),t()};return ce(l,a,{flush:"sync"})}function e0(e,t){return bg(e,n=>{!bf.value||n.repeat||t()})}function t0(){const e=Yy(),{escape:t,space:n,shift:l,left:r,right:o,up:a,down:i,enter:c,d:f,g:p,o:h}=ff;new Map([{key:je(n,ft(l)),fn:un,autoRepeat:!0},{key:je(n,l),fn,autoRepeat:!0},{key:je(o,ft(l),ft(tt)),fn:un,autoRepeat:!0},{key:je(r,ft(l),ft(tt)),fn,autoRepeat:!0},{key:"pageDown",fn:un,autoRepeat:!0},{key:"pageUp",fn,autoRepeat:!0},{key:je(a,ft(tt)),fn:()=>nl(!1),autoRepeat:!0},{key:je(i,ft(tt)),fn:tl,autoRepeat:!0},{key:je(r,l),fn:()=>nl(!1),autoRepeat:!0},{key:je(o,l),fn:tl,autoRepeat:!0},{key:je(f,ft(Vt)),fn:vf},{key:je(h,ft(Vt)),fn:df},{key:je(t,ft(Vt)),fn:()=>tt.value=!1},{key:je(p,ft(Vt)),fn:()=>Zn.value=!Zn.value},{key:je(r,tt),fn:Zy},{key:je(o,tt),fn:Gy},{key:je(a,tt),fn:Xy},{key:je(i,tt),fn:Jy},{key:je(c,tt),fn:()=>{is(gt.value),tt.value=!1}},...e].map(m=>[m.key,m])).forEach(m=>{m.fn&&Qy(m.key,m.fn,m.autoRepeat)}),e0("f",()=>pf.toggle())}const n0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},s0=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),l0=[s0];function r0(e,t){return k(),V("svg",n0,l0)}var o0={name:"carbon-close",render:r0};function ia(e){var n,l;const t=(l=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:l.no;return t!=null?`slidev-page-${t}`:""}const wf=ye({name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;H(Z);const n=z(),l=zg(n),r=D(()=>t.width?t.width:l.width.value),o=D(()=>t.width?t.width/an:l.height.value);t.width&&ol(()=>{n.value&&(n.value.style.width=`${r.value}px`,n.value.style.height=`${o.value}px`)});const a=D(()=>r.value/o.value),i=D(()=>t.scale?t.scale:a.value<an?r.value/On:o.value*an/On),c=D(()=>({height:`${Vu}px`,width:`${On}px`,transform:`translate(-50%, -50%) scale(${i.value})`})),f=D(()=>({"select-none":!xe.selectable,"slidev-code-line-numbers":xe.lineNumbers}));return ht(Hu,i),(p,h)=>(k(),V("div",{id:"slide-container",ref_key:"root",ref:n,class:Fe(v(f))},[s("div",{id:"slide-content",style:We(v(c))},[vt(p.$slots,"default")],4),vt(p.$slots,"controls")],2))}});var ca=ye({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Ht(e,"clicks",t),l=Ht(e,"clicksElements",t),r=Ht(e,"clicksDisabled",t),o=Ht(e,"clicksOrderMap",t);l.value.length=0,ht(km,e.route),ht(Cm,e.context),ht(Ms,n),ht(Ts,r),ht(An,l),ht(io,o)},render(){var e,t;return this.$props.is?Tt(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}});const a0=["innerHTML"],Af=ye({name:"DrawingPreview",props:{page:null},setup(e){return H(Z),(t,n)=>v(Ll)[e.page]?(k(),V("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:v(Ll)[e.page]},null,8,a0)):q("v-if",!0)}});var i0=Object.freeze(Object.defineProperty({__proto__:null,default:Af},Symbol.toStringTag,{value:"Module"}));const c0={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},u0=["onClick"],f0=ye({name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const n=e;H(Z);const l=Ht(n,"modelValue",t);function r(){l.value=!1}function o(m){is(m),r()}function a(m){return m===gt.value}const i=yo.smaller("xs"),c=yo.smaller("sm"),f=4*16*2,p=2*16,h=D(()=>i.value?Pn.width.value-f:c.value?(Pn.width.value-f-p)/2:300),d=D(()=>Math.floor((Pn.width.value-f)/(h.value+p)));return ol(()=>{gt.value=Ve.value,aa.value=d.value}),(m,y)=>{const w=o0;return k(),V(Ce,null,[Ys(s("div",c0,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:We(`grid-template-columns: repeat(auto-fit,minmax(${v(h)}px,1fr))`)},[(k(!0),V(Ce,null,al(v(He).slice(0,-1),(b,$)=>(k(),V("div",{key:b.path,class:"relative"},[s("div",{class:Fe(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a($+1)}]),onClick:x=>o(+b.path)},[(k(),X(wf,{key:b.path,width:v(h),"clicks-disabled":!0,class:"pointer-events-none"},{default:F(()=>[O(v(ca),{is:b==null?void 0:b.component,"clicks-disabled":!0,class:Fe(v(ia)(b)),route:b,context:"overview"},null,8,["is","class","route"]),O(Af,{page:+b.path},null,8,["page"])]),_:2},1032,["width"]))],10,u0),s("div",{class:"absolute top-0 opacity-50",style:We(`left: ${v(h)+5}px`)},Sn($+1),5)]))),128))],4)],512),[[Nu,v(l)]]),v(l)?(k(),V("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:r},[O(w)])):q("v-if",!0)],64)}}});var p0="/redis_intro/assets/logo.b72bde5d.png";const d0={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},h0=ye({name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;H(Z);const l=Ht(n,"modelValue",t);function r(){l.value=!1}return(o,a)=>(k(),X(vu,null,[v(l)?(k(),V("div",d0,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=i=>r())}),s("div",{class:Fe(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[vt(o.$slots,"default")],2)])):q("v-if",!0)],1024))}});const m0={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},g0=["innerHTML"],y0=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:p0,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),u("dev ")])])],-1),_0=ye({name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;H(Z);const l=Ht(n,"modelValue",t),r=D(()=>typeof xe.info=="string");return(o,a)=>(k(),X(h0,{modelValue:v(l),"onUpdate:modelValue":a[0]||(a[0]=i=>be(l)?l.value=i:null),class:"px-6 py-4"},{default:F(()=>[s("div",m0,[v(r)?(k(),V("div",{key:0,class:"mb-4",innerHTML:v(xe).info},null,8,g0)):q("v-if",!0),y0])]),_:1},8,["modelValue"]))}}),v0=["disabled","onKeydown"],b0=ye({name:"Goto",setup(e){H(Z);const t=z(),n=z(""),l=D(()=>{if(n.value.startsWith("/"))return!!He.find(a=>a.path===n.value.substring(1));{const a=+n.value;return!isNaN(a)&&a>0&&a<=If.value}});function r(){l.value&&(n.value.startsWith("/")?is(n.value.substring(1)):is(+n.value)),o()}function o(){Zn.value=!1}return ce(Zn,async a=>{var i,c;a?(await qe(),n.value="",(i=t.value)==null||i.focus()):(c=t.value)==null||c.blur()}),ce(n,a=>{a.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(a,i)=>(k(),V("div",{id:"slidev-goto-dialog",class:Fe(["fixed right-5 bg-main transform transition-all",v(Zn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Ys(s("input",{ref_key:"input",ref:t,"onUpdate:modelValue":i[0]||(i[0]=c=>n.value=c),type:"text",disabled:!v(Zn),class:Fe(["outline-none bg-transparent",{"text-red-400":!v(l)&&n.value}]),placeholder:"Goto...",onKeydown:[di(r,["enter"]),di(o,["escape"])],onBlur:o},null,42,v0),[[lm,n.value]])],2))}}),w0=ye({name:"Controls",setup(e){H(Z);const t=zt(),n=zt();return(l,r)=>(k(),V(Ce,null,[O(f0,{modelValue:v(tt),"onUpdate:modelValue":r[0]||(r[0]=o=>be(tt)?tt.value=o:null)},null,8,["modelValue"]),O(b0),v(t)?(k(),X(v(t),{key:0})):q("v-if",!0),v(n)?(k(),X(v(n),{key:1,modelValue:v(Pr),"onUpdate:modelValue":r[1]||(r[1]=o=>be(Pr)?Pr.value=o:null)},null,8,["modelValue"])):q("v-if",!0),v(xe).info?(k(),X(_0,{key:2,modelValue:v(Is),"onUpdate:modelValue":r[2]||(r[2]=o=>be(Is)?Is.value=o:null)},null,8,["modelValue"])):q("v-if",!0)],64))}}),A0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},x0=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),k0=[x0];function C0(e,t){return k(),V("svg",A0,k0)}var $0={name:"carbon-settings-adjust",render:C0};const E0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},D0=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),B0=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),O0=[D0,B0];function P0(e,t){return k(),V("svg",E0,O0)}var S0={name:"carbon-information",render:P0};const M0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},T0=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),F0=[T0];function R0(e,t){return k(),V("svg",M0,F0)}var I0={name:"carbon-download",render:R0};const L0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},N0=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),j0=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),H0=[N0,j0];function V0(e,t){return k(),V("svg",L0,H0)}var U0={name:"carbon-user-speaker",render:V0};const z0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},W0=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),K0=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),q0=[W0,K0];function Y0(e,t){return k(),V("svg",z0,q0)}var Z0={name:"carbon-presentation-file",render:Y0};const G0={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},X0=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),J0=[X0];function Q0(e,t){return k(),V("svg",G0,J0)}var e_={name:"carbon-pen",render:Q0};const t_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},n_=s("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),s_=s("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),l_=[n_,s_];function r_(e,t){return k(),V("svg",t_,l_)}var o_={name:"ph-cursor-duotone",render:r_};const a_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},i_=s("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),c_=[i_];function u_(e,t){return k(),V("svg",a_,c_)}var xf={name:"ph-cursor-fill",render:u_};const f_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},p_=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),d_=[p_];function h_(e,t){return k(),V("svg",f_,d_)}var m_={name:"carbon-sun",render:h_};const g_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},y_=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),__=[y_];function v_(e,t){return k(),V("svg",g_,__)}var b_={name:"carbon-moon",render:v_};const w_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},A_=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),x_=[A_];function k_(e,t){return k(),V("svg",w_,x_)}var C_={name:"carbon-apps",render:k_};const $_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},E_=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),D_=[E_];function B_(e,t){return k(),V("svg",$_,D_)}var kf={name:"carbon-arrow-right",render:B_};const O_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},P_=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),S_=[P_];function M_(e,t){return k(),V("svg",O_,S_)}var T_={name:"carbon-arrow-left",render:M_};const F_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},R_=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),I_=[R_];function L_(e,t){return k(),V("svg",F_,I_)}var N_={name:"carbon-maximize",render:L_};const j_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},H_=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),V_=[H_];function U_(e,t){return k(),V("svg",j_,V_)}var z_={name:"carbon-minimize",render:U_};const W_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},K_=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),q_=[K_];function Y_(e,t){return k(),V("svg",W_,q_)}var Z_={name:"carbon-checkmark",render:Y_};var Cf=(e,t)=>{const n=e.__vccOpts||e;for(const[l,r]of t)n[l]=r;return n};const G_={class:"select-list"},X_={class:"title"},J_={class:"items"},Q_=["onClick"],ev=ye({name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;H(Z);const l=Ht(n,"modelValue",t,{passive:!0});return(r,o)=>{const a=Z_;return k(),V("div",G_,[s("div",X_,Sn(e.title),1),s("div",J_,[(k(!0),V(Ce,null,al(e.items,i=>(k(),V("div",{key:i.value,class:Fe(["item",{active:v(l)===i.value}]),onClick:()=>{var c;l.value=i.value,(c=i.onClick)==null||c.call(i)}},[O(a,{class:Fe(["text-green-500",{"opacity-0":v(l)!==i.value}])},null,8,["class"]),u(" "+Sn(i.display||i.value),1)],10,Q_))),128))])])}}});var tv=Cf(ev,[["__scopeId","data-v-427604ef"]]);const nv={class:"text-sm"},sv=ye({name:"Settings",setup(e){H(Z);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,l)=>(k(),V("div",nv,[O(tv,{modelValue:v(Dl),"onUpdate:modelValue":l[0]||(l[0]=r=>be(Dl)?Dl.value=r:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),lv={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},rv=ye({name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;H(Z);const l=Ht(n,"modelValue",t,{passive:!0}),r=z();return _g(r,()=>{l.value=!1}),(o,a)=>(k(),V("div",{ref_key:"el",ref:r,class:"flex relative"},[s("button",{class:Fe({disabled:e.disabled}),onClick:a[0]||(a[0]=i=>l.value=!v(l))},[vt(o.$slots,"button",{class:Fe({disabled:e.disabled})})],2),(k(),X(vu,null,[v(l)?(k(),V("div",lv,[vt(o.$slots,"menu")])):q("v-if",!0)],1024))],512))}}),ov={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},wl={name:"VerticalDivider",setup(e){return H(Z),(t,n)=>(k(),V("div",ov))}};var av={render(){return[]}};const iv={class:"icon-btn"},cv={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},uv={class:"my-auto"},fv={class:"opacity-50"},pv=ye({name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;H(Z);const n=yo.smaller("md"),{isFullscreen:l,toggle:r}=pf,o=D(()=>ko.value?`?password=${ko.value}`:""),a=D(()=>`/presenter/${Ve.value}${o.value}`),i=D(()=>`/${Ve.value}${o.value}`),c=z(),f=()=>{c.value&&ts.value&&c.value.contains(ts.value)&&ts.value.blur()},p=D(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),h=zt(),d=zt();return ps(()=>import("./DrawingControls.7a94e132.js"),[]).then(m=>d.value=m.default),(m,y)=>{const w=z_,b=N_,$=T_,x=kf,C=C_,E=b_,N=m_,T=xf,W=o_,re=e_,ue=Z0,pe=Ct("RouterLink"),me=U0,Te=I0,Ne=S0,Ye=$0;return k(),V("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[s("div",{class:Fe(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",v(p)]),onMouseleave:f},[v(Wt)?q("v-if",!0):(k(),V("button",{key:0,class:"icon-btn",onClick:y[0]||(y[0]=(...$e)=>v(r)&&v(r)(...$e))},[v(l)?(k(),X(w,{key:0})):(k(),X(b,{key:1}))])),s("button",{class:Fe(["icon-btn",{disabled:!v(kw)}]),onClick:y[1]||(y[1]=(...$e)=>v(fn)&&v(fn)(...$e))},[O($)],2),s("button",{class:Fe(["icon-btn",{disabled:!v(xw)}]),title:"Next",onClick:y[2]||(y[2]=(...$e)=>v(un)&&v(un)(...$e))},[O(x)],2),v(Wt)?q("v-if",!0):(k(),V("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:y[3]||(y[3]=$e=>v(df)())},[O(C)])),v(Ao)?q("v-if",!0):(k(),V("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:y[4]||(y[4]=$e=>v(vf)())},[v(oa)?(k(),X(E,{key:0})):(k(),X(N,{key:1}))])),O(wl),v(Wt)?q("v-if",!0):(k(),V(Ce,{key:3},[!v(jt)&&!v(n)&&v(h)?(k(),V(Ce,{key:0},[O(v(h)),O(wl)],64)):q("v-if",!0),v(jt)?(k(),V("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:y[5]||(y[5]=$e=>Sr.value=!v(Sr))},[v(Sr)?(k(),X(T,{key:0})):(k(),X(W,{key:1,class:"opacity-50"}))])):q("v-if",!0)],64)),!v(xe).drawings.presenterOnly&&!v(Wt)?(k(),V(Ce,{key:4},[s("button",{class:"icon-btn relative",title:"Drawing",onClick:y[6]||(y[6]=$e=>Vt.value=!v(Vt))},[O(re),v(Vt)?(k(),V("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:We({background:v($n).color})},null,4)):q("v-if",!0)]),O(wl)],64)):q("v-if",!0),v(Wt)?q("v-if",!0):(k(),V(Ce,{key:5},[v(jt)?(k(),X(pe,{key:0,to:v(i),class:"icon-btn",title:"Play Mode"},{default:F(()=>[O(ue)]),_:1},8,["to"])):q("v-if",!0),v(bw)?(k(),X(pe,{key:1,to:v(a),class:"icon-btn",title:"Presenter Mode"},{default:F(()=>[O(me)]),_:1},8,["to"])):q("v-if",!0),q("v-if",!0)],64)),(k(),V(Ce,{key:6},[v(xe).download?(k(),V("button",{key:0,class:"icon-btn",onClick:y[8]||(y[8]=(...$e)=>v(Co)&&v(Co)(...$e))},[O(Te)])):q("v-if",!0)],64)),!v(jt)&&v(xe).info&&!v(Wt)?(k(),V("button",{key:7,class:"icon-btn",onClick:y[9]||(y[9]=$e=>Is.value=!v(Is))},[O(Ne)])):q("v-if",!0),!v(jt)&&!v(Wt)?(k(),X(rv,{key:8},{button:F(()=>[s("button",iv,[O(Ye)])]),menu:F(()=>[O(sv)]),_:1})):q("v-if",!0),v(Wt)?q("v-if",!0):(k(),X(wl,{key:9})),s("div",cv,[s("div",uv,[u(Sn(v(Ve))+" ",1),s("span",fv,"/ "+Sn(v(If)),1)])]),O(v(av))],34)],512)}}});var $f={render(){return[]}},Ef={render(){return[]}};const dv={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},hv=ye({name:"PresenterMouse",setup(e){return H(Z),(t,n)=>{const l=xf;return v(Er).cursor?(k(),V("div",dv,[O(l,{class:"absolute",style:We({left:`${v(Er).cursor.x}%`,top:`${v(Er).cursor.y}%`})},null,8,["style"])])):q("v-if",!0)}}}),mv=ye({name:"SlidesShow",props:{context:null},setup(e){H(Z),ce(dt,()=>{var n,l;((n=dt.value)==null?void 0:n.meta)&&dt.value.meta.preload!==!1&&(dt.value.meta.__preloaded=!0),((l=Tr.value)==null?void 0:l.meta)&&Tr.value.meta.preload!==!1&&(Tr.value.meta.__preloaded=!0)},{immediate:!0});const t=zt();return ps(()=>import("./DrawingLayer.9f60dba6.js"),[]).then(n=>t.value=n.default),(n,l)=>(k(),V(Ce,null,[q(" Global Bottom "),O(v(Ef)),q(" Slides "),(k(!0),V(Ce,null,al(v(He),r=>{var o,a;return k(),V(Ce,{key:r.path},[((o=r.meta)==null?void 0:o.__preloaded)||r===v(dt)?Ys((k(),X(v(ca),{key:0,is:r==null?void 0:r.component,clicks:r===v(dt)?v(Ft):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Fe(v(ia)(r)),route:r,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Nu,r===v(dt)]]):q("v-if",!0)],64)}),128)),q(" Global Top "),O(v($f)),v(t)?(k(),X(v(t),{key:0})):q("v-if",!0),v(jt)?q("v-if",!0):(k(),X(hv,{key:1}))],64))}}),gv=ye({name:"Play",setup(e){H(Z),t0();const t=z();function n(o){var a;Yi.value||((a=o.target)==null?void 0:a.id)==="slide-container"&&(o.screenX/window.innerWidth>.6?un():fn())}Ew(t);const l=D(()=>oy.value||Yi.value);zt();const r=zt();return ps(()=>import("./DrawingControls.7a94e132.js"),[]).then(o=>r.value=o.default),(o,a)=>(k(),V(Ce,null,[s("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr,max-content]",style:We(v(Uu))},[O(wf,{class:"w-full h-full",style:We({background:"var(--slidev-slide-container-background, black)"}),width:v(ha)?v(Pn).width.value:void 0,scale:v(Dl),onPointerdown:n},{default:F(()=>[O(mv,{context:"slide"})]),controls:F(()=>[s("div",{class:Fe(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[v(l)?"opacity-100 right-0":"opacity-0 p-2",v(Js)?"pointer-events-none":""]])},[O(pv,{class:"m-auto",persist:v(l)},null,8,["persist"])],2),!v(xe).drawings.presenterOnly&&!v(Wt)&&v(r)?(k(),X(v(r),{key:0,class:"ml-0"})):q("v-if",!0)]),_:1},8,["style","width","scale"]),q("v-if",!0)],4),O(w0)],64))}});function Df(e){const t=D(()=>e.value.path),n=D(()=>He.length-1),l=D(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),r=D(()=>fr(l.value)),o=D(()=>He.find(d=>d.path===`${l.value}`)),a=D(()=>{var d,m,y;return(y=(m=(d=o.value)==null?void 0:d.meta)==null?void 0:m.slide)==null?void 0:y.id}),i=D(()=>{var d,m;return(m=(d=o.value)==null?void 0:d.meta)==null?void 0:m.layout}),c=D(()=>He.find(d=>d.path===`${Math.min(He.length,l.value+1)}`)),f=D(()=>He.filter(d=>{var m,y;return(y=(m=d.meta)==null?void 0:m.slide)==null?void 0:y.title}).reduce((d,m)=>(ma(d,m),d),[])),p=D(()=>ga(f.value,o.value)),h=D(()=>ya(p.value));return{route:e,path:t,total:n,currentPage:l,currentPath:r,currentRoute:o,currentSlideId:a,currentLayout:i,nextRoute:c,rawTree:f,treeWithActiveStatuses:p,tree:h}}function Bf(e,t,n){const l=z(0);qe(()=>{yt.afterEach(async()=>{await qe(),l.value+=1})});const r=D(()=>{var c,f;return l.value,((f=(c=t.value)==null?void 0:c.meta)==null?void 0:f.__clicksElements)||[]}),o=D(()=>{var c,f,p;return+((p=(f=(c=t.value)==null?void 0:c.meta)==null?void 0:f.clicks)!=null?p:r.value.length)}),a=D(()=>n.value<He.length-1||e.value<o.value),i=D(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:o,hasNext:a,hasPrev:i}}const yv=["id"],oc=ye({name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,l=Ht(n,"clicksElements",t),r=D(()=>({height:`${Vu}px`,width:`${On}px`})),o=zt();ps(()=>Promise.resolve().then(function(){return i0}),void 0).then(f=>o.value=f.default);const a=D(()=>n.clicks),i=Bf(a,n.nav.currentRoute,n.nav.currentPage),c=D(()=>`${n.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return ht(Z,Re({nav:ve(ve({},n.nav),i),configs:xe,themeConfigs:D(()=>xe.themeConfig)})),(f,p)=>{var h;return k(),V("div",{id:v(c),class:"slide-container",style:We(v(r))},[O(v(Ef)),O(v(ca),{is:(h=e.route)==null?void 0:h.component,"clicks-elements":v(l),"onUpdate:clicks-elements":p[0]||(p[0]=d=>be(l)?l.value=d:null),clicks:v(a),"clicks-disabled":!1,class:Fe(v(ia)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),v(o)?(k(),X(v(o),{key:0,page:+e.route.path},null,8,["page"])):q("v-if",!0),O(v($f))],12,yv)}}}),_v=ye({name:"PrintSlide",props:{route:null},setup(e){var o;const t=e;H(Z);const n=Re(((o=t.route.meta)==null?void 0:o.__clicksElements)||[]),l=D(()=>t.route),r=Df(l);return(a,i)=>(k(),V(Ce,null,[O(oc,{"clicks-elements":n,"onUpdate:clicks-elements":i[0]||(i[0]=c=>be(n)?n.value=c:null),clicks:0,nav:v(r),route:v(l)},null,8,["clicks-elements","nav","route"]),v(Ls)?q("v-if",!0):(k(!0),V(Ce,{key:0},al(n.length,c=>(k(),X(oc,{key:c,clicks:c,nav:v(r),route:v(l)},null,8,["clicks","nav","route"]))),128))],64))}});const vv={id:"print-content"},bv=ye({name:"PrintContainer",props:{width:null},setup(e){const t=e;H(Z);const n=D(()=>t.width),l=D(()=>t.width/an),r=D(()=>n.value/l.value),o=D(()=>r.value<an?n.value/On:l.value*an/On),a=He.slice(0,-1),i=D(()=>({"select-none":!xe.selectable,"slidev-code-line-numbers":xe.lineNumbers}));return ht(Hu,o),(c,f)=>(k(),V("div",{id:"print-container",class:Fe(v(i))},[s("div",vv,[(k(!0),V(Ce,null,al(v(a),p=>(k(),X(_v,{key:p.path,route:p},null,8,["route"]))),128))]),vt(c.$slots,"controls")],2))}});const wv=ye({name:"Print",setup(e){H(Z);const t=Cn.canvasWidth,n=Math.round(t/Cn.aspectRatio)+1;function l(r,{slots:o}){if(o.default)return Tt("style",o.default())}return ol(()=>{ha?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(r,o)=>(k(),V(Ce,null,[O(l,null,{default:F(()=>[u(" @page { size: "+Sn(v(t))+"px "+Sn(n)+"px; margin: 0px; } ",1)]),_:1}),s("div",{id:"page-root",class:"grid grid-cols-[1fr,max-content]",style:We(v(Uu))},[O(bv,{class:"w-full h-full",style:We({background:"var(--slidev-slide-container-background, black)"}),width:v(Pn).width.value},null,8,["style","width"])],4)],64))}});const Av={class:"slidev-layout end"},xv={name:"end",setup(e){return H(Z),(t,n)=>(k(),V("div",Av," END "))}};var Of=Cf(xv,[["__scopeId","data-v-024c70b4"]]);const kv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Cv=s("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),$v=[Cv];function Ev(e,t){return k(),V("svg",kv,$v)}var Dv={name:"carbon-logo-github",render:Ev};const Bv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ov=s("path",{fill:"currentColor",d:"M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z"},null,-1),Pv=[Ov];function Sv(e,t){return k(),V("svg",Bv,Pv)}var Mv={name:"carbon-edit",render:Sv};function ac(e){return e.startsWith("/")?"/redis_intro/"+e.slice(1):e}function Tv(e,t=!1){const n=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),l={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${ac(e)})`:`url("${ac(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return l.background||delete l.background,l}const Fv={class:"my-auto w-full"},Pf=ye({name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){const t=e;H(Z);const n=D(()=>Tv(t.background,!0));return(l,r)=>(k(),V("div",{class:"slidev-layout cover text-center",style:We(v(n))},[s("div",Fv,[vt(l.$slots,"default")])],4))}}),Rv=s("h1",null,"Welcome to UTown Team",-1),Iv={class:"pt-12"},Lv=u(" Press Space for next page "),Nv={class:"abs-br m-6 flex gap-2"},jv={href:"https://github.com/slidevjs/slidev",target:"_blank",alt:"GitHub",class:"text-xl icon-btn opacity-50 !border-none !hover:text-white"},Hv={name:"1",setup(e){const t={theme:"seriph",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1}},n=H(Z);return(l,r)=>{const o=kf,a=Mv,i=Dv;return k(),X(Pf,ke(Ae(t)),{default:F(()=>[Rv,s("div",Iv,[s("span",{onClick:r[0]||(r[0]=(...c)=>v(n).nav.next&&v(n).nav.next(...c)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[Lv,O(o,{class:"inline"})])]),s("div",Nv,[s("button",{onClick:r[1]||(r[1]=c=>v(n).nav.openInEditor()),title:"Open in Editor",class:"text-xl icon-btn opacity-50 !border-none !hover:text-white"},[O(a)]),s("a",jv,[O(i)])])]),_:1},16)}}},Vv={class:"slidev-layout default"},Ln={name:"default",setup(e){return H(Z),(t,n)=>(k(),V("div",Vv,[vt(t.$slots,"default")]))}},Uv=s("h1",null,"\u5BFC\u822A",-1),zv=s("p",null,"\u9F20\u6807Hover \u5230\u5DE6\u4E0B\u89D2\u5F39\u51FA\u76F8\u5E94\u64CD\u4F5C\u6309\u94AE",-1),Wv=s("h3",null,"\u952E\u76D8\u5FEB\u6377\u952E",-1),Kv=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("kbd",null,"right"),u(" / "),s("kbd",null,"space")]),s("td",null,"\u4E0B\u4E00\u9875")]),s("tr",null,[s("td",null,[s("kbd",null,"left"),u(" / "),s("kbd",null,"shift"),s("kbd",null,"space")]),s("td",null,"\u4E0A\u4E00\u9875")]),s("tr",null,[s("td",null,[s("kbd",null,"up")]),s("td",null,"\u4E0A\u4E00\u4E2A\u5C55\u793A")]),s("tr",null,[s("td",null,[s("kbd",null,"down")]),s("td",null,"\u4E0B\u4E00\u4E2A\u5C55\u793A")])])],-1),qv={class:"absolute -bottom-9 -left-7 w-80 opacity-50",src:"https://sli.dev/assets/arrow-bottom-left.svg"},Yv={class:"absolute bottom-23 left-45 opacity-30 transform -rotate-10"},Zv=u("\u8FD9\u513F!"),Gv=[Zv],Xv={name:"2",setup(e){const t={};return H(Z),(n,l)=>{const r=qa("click"),o=qa("after");return k(),X(Ln,ke(Ae(t)),{default:F(()=>[Uv,zv,Wv,Kv,q(" https://sli.dev/guide/animations.html#click-animations "),s("p",null,[Ys(s("img",qv,null,512),[[r]])]),Ys((k(),V("p",Yv,Gv)),[[o]])]),_:1},16)}}},Jv={class:"h-full w-full"},Qv={class:"w-full h-full"},eb=["src"],tb=ye({name:"iframe",props:{url:null},setup(e){return H(Z),(t,n)=>(k(),V("div",Jv,[s("div",Qv,[s("iframe",{id:"frame",class:"w-full h-full",src:e.url},null,8,eb)])]))}}),nb={name:"3",setup(e){const t={layout:"iframe",url:"https://www.utown.io/",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>(k(),X(tb,ke(Ae(t)),null,16))}},sb=u("\u9879\u76EE\u534F\u4F5C"),lb={grid:"~ cols-5 gap-2",m:"-t-2"},rb=u("\u7EC4\u7EC7\u7ED3\u6784"),ob=u("\u613F\u666F\u76EE\u6807"),ab=u("\u534F\u4F5C\u89C4\u7EA6"),ib=u("\u5B8C\u6210\u5B9A\u4E49"),cb=u("\u56E2\u961F\u5C55\u671B"),ub=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"Who?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"Who?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),fb=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"What?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"What?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),pb=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"How to collaborate?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"How to collaborate?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),db=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"DOD?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"DOD?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),hb=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"Expectation?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"Expectation?")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),mb={name:"4",setup(e){const t={layout:"cover",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=Ct("center");return k(),X(Pf,ke(Ae(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),s("h1",null,[s("strong",null,[O(r,null,{default:F(()=>[sb]),_:1})])]),s("div",lb,[s("h3",null,[O(r,null,{default:F(()=>[rb]),_:1})]),s("h3",null,[O(r,null,{default:F(()=>[ob]),_:1})]),s("h3",null,[O(r,null,{default:F(()=>[ab]),_:1})]),s("h3",null,[O(r,null,{default:F(()=>[ib]),_:1})]),s("h3",null,[O(r,null,{default:F(()=>[cb]),_:1})]),ub,fb,pb,db,hb])]),_:1},16)}}};function ic(e){return e.startsWith("/")?"/redis_intro/"+e.slice(1):e}function ua(e,t=!1){const n=e&&e[0]==="#"&&e.startsWith("rgb"),l={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${ic(e)})`:`url("${ic(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return l.background||delete l.background,l}const gb={class:"grid grid-cols-2 w-full h-full"},yb=ye({name:"image-left",props:{image:{type:String},class:{type:String}},setup(e){const t=e;H(Z);const n=D(()=>ua(t.image));return(l,r)=>(k(),V("div",gb,[s("div",{class:"w-full w-full",style:We(v(n))},null,4),s("div",{class:Fe(["slidev-layout default",t.class])},[vt(l.$slots,"default")],2)]))}}),_b=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),vb=u("\u4E92\u8054\u7F51\u5BE1\u5934\u7EC4\u7EC7\u7ED3\u6784"),bb={name:"5",setup(e){const t={layout:"image-left",image:"https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png?raw=true",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=Ct("center");return k(),X(yb,ke(Ae(t)),{default:F(()=>[q("3.1\u3001\u7EC4\u7EC7\u7ED3\u6784"),_b,s("h3",null,[s("strong",null,[O(r,null,{default:F(()=>[vb]),_:1})])])]),_:1},16)}}},fa=ye({name:"image",props:{image:{type:String}},setup(e){const t=e;H(Z);const n=D(()=>ua(t.image));return(l,r)=>(k(),V("div",{class:"slidev-layout w-full h-full",style:We(v(n))},[vt(l.$slots,"default")],4))}}),wb=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),Ab={name:"6",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/86a44651142441fcae8082289679838d.png",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>(k(),X(fa,ke(Ae(t)),{default:F(()=>[q("3.2\u7EC4\u7EC7\u7ED3\u6784"),wb]),_:1},16))}},xb=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),kb={name:"7",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/37f86b295234485b94a65cf5f07265c2.png",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>(k(),X(fa,ke(Ae(t)),{default:F(()=>[q("3.3 \u7EC4\u7EC7\u67B6\u6784\uFF08\u5F31\u77E9\u9635\uFF09"),xb]),_:1},16))}},Cb=s("p",null,[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")],-1),$b={name:"8",setup(e){const t={layout:"image",image:"https://img-blog.csdnimg.cn/97f0a31691f7468f9fece546c9db0c7f.png",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>(k(),X(fa,ke(Ae(t)),{default:F(()=>[q("3.3 \u7EC4\u7EC7\u7ED3\u6784"),Cb]),_:1},16))}},Eb=s("p",null,[s("img",{border:"rounded",src:"https://img-blog.csdnimg.cn/f0ccc710e3a044e99db0bbfc5fa7d3d1.jpeg"})],-1),Db={name:"9",setup(e){const t={layout:"default",image:"https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png?raw=true",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>(k(),X(Ln,ke(Ae(t)),{default:F(()=>[q("1\u3001\u9879\u76EE\u7EC4\u7ED3\u6784"),Eb]),_:1},16))}};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Sf(e){return typeof e=="undefined"||e===null}function Bb(e){return typeof e=="object"&&e!==null}function Ob(e){return Array.isArray(e)?e:Sf(e)?[]:[e]}function Pb(e,t){var n,l,r,o;if(t)for(o=Object.keys(t),n=0,l=o.length;n<l;n+=1)r=o[n],e[r]=t[r];return e}function Sb(e,t){var n="",l;for(l=0;l<t;l+=1)n+=e;return n}function Mb(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var Tb=Sf,Fb=Bb,Rb=Ob,Ib=Sb,Lb=Mb,Nb=Pb,pa={isNothing:Tb,isObject:Fb,toArray:Rb,repeat:Ib,isNegativeZero:Lb,extend:Nb};function Mf(e,t){var n="",l=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+=`

`+e.mark.snippet),l+" "+n):l}function el(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=Mf(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}el.prototype=Object.create(Error.prototype);el.prototype.constructor=el;el.prototype.toString=function(t){return this.name+": "+Mf(this,t)};var xn=el,jb=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],Hb=["scalar","sequence","mapping"];function Vb(e){var t={};return e!==null&&Object.keys(e).forEach(function(n){e[n].forEach(function(l){t[String(l)]=n})}),t}function Ub(e,t){if(t=t||{},Object.keys(t).forEach(function(n){if(jb.indexOf(n)===-1)throw new xn('Unknown option "'+n+'" is met in definition of "'+e+'" YAML type.')}),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(n){return n},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=Vb(t.styleAliases||null),Hb.indexOf(this.kind)===-1)throw new xn('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Ge=Ub;function cc(e,t){var n=[];return e[t].forEach(function(l){var r=n.length;n.forEach(function(o,a){o.tag===l.tag&&o.kind===l.kind&&o.multi===l.multi&&(r=a)}),n[r]=l}),n}function zb(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},t,n;function l(r){r.multi?(e.multi[r.kind].push(r),e.multi.fallback.push(r)):e[r.kind][r.tag]=e.fallback[r.tag]=r}for(t=0,n=arguments.length;t<n;t+=1)arguments[t].forEach(l);return e}function xo(e){return this.extend(e)}xo.prototype.extend=function(t){var n=[],l=[];if(t instanceof Ge)l.push(t);else if(Array.isArray(t))l=l.concat(t);else if(t&&(Array.isArray(t.implicit)||Array.isArray(t.explicit)))t.implicit&&(n=n.concat(t.implicit)),t.explicit&&(l=l.concat(t.explicit));else throw new xn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");n.forEach(function(o){if(!(o instanceof Ge))throw new xn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new xn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new xn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),l.forEach(function(o){if(!(o instanceof Ge))throw new xn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var r=Object.create(xo.prototype);return r.implicit=(this.implicit||[]).concat(n),r.explicit=(this.explicit||[]).concat(l),r.compiledImplicit=cc(r,"implicit"),r.compiledExplicit=cc(r,"explicit"),r.compiledTypeMap=zb(r.compiledImplicit,r.compiledExplicit),r};var Wb=xo,Kb=new Ge("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),qb=new Ge("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),Yb=new Ge("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),Zb=new Wb({explicit:[Kb,qb,Yb]});function Gb(e){if(e===null)return!0;var t=e.length;return t===1&&e==="~"||t===4&&(e==="null"||e==="Null"||e==="NULL")}function Xb(){return null}function Jb(e){return e===null}var Qb=new Ge("tag:yaml.org,2002:null",{kind:"scalar",resolve:Gb,construct:Xb,predicate:Jb,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function e2(e){if(e===null)return!1;var t=e.length;return t===4&&(e==="true"||e==="True"||e==="TRUE")||t===5&&(e==="false"||e==="False"||e==="FALSE")}function t2(e){return e==="true"||e==="True"||e==="TRUE"}function n2(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var s2=new Ge("tag:yaml.org,2002:bool",{kind:"scalar",resolve:e2,construct:t2,predicate:n2,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function l2(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function r2(e){return 48<=e&&e<=55}function o2(e){return 48<=e&&e<=57}function a2(e){if(e===null)return!1;var t=e.length,n=0,l=!1,r;if(!t)return!1;if(r=e[n],(r==="-"||r==="+")&&(r=e[++n]),r==="0"){if(n+1===t)return!0;if(r=e[++n],r==="b"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(r!=="0"&&r!=="1")return!1;l=!0}return l&&r!=="_"}if(r==="x"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!l2(e.charCodeAt(n)))return!1;l=!0}return l&&r!=="_"}if(r==="o"){for(n++;n<t;n++)if(r=e[n],r!=="_"){if(!r2(e.charCodeAt(n)))return!1;l=!0}return l&&r!=="_"}}if(r==="_")return!1;for(;n<t;n++)if(r=e[n],r!=="_"){if(!o2(e.charCodeAt(n)))return!1;l=!0}return!(!l||r==="_")}function i2(e){var t=e,n=1,l;if(t.indexOf("_")!==-1&&(t=t.replace(/_/g,"")),l=t[0],(l==="-"||l==="+")&&(l==="-"&&(n=-1),t=t.slice(1),l=t[0]),t==="0")return 0;if(l==="0"){if(t[1]==="b")return n*parseInt(t.slice(2),2);if(t[1]==="x")return n*parseInt(t.slice(2),16);if(t[1]==="o")return n*parseInt(t.slice(2),8)}return n*parseInt(t,10)}function c2(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!pa.isNegativeZero(e)}var u2=new Ge("tag:yaml.org,2002:int",{kind:"scalar",resolve:a2,construct:i2,predicate:c2,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),f2=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function p2(e){return!(e===null||!f2.test(e)||e[e.length-1]==="_")}function d2(e){var t,n;return t=e.replace(/_/g,"").toLowerCase(),n=t[0]==="-"?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),t===".inf"?n===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:t===".nan"?NaN:n*parseFloat(t,10)}var h2=/^[-+]?[0-9]+e/;function m2(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(pa.isNegativeZero(e))return"-0.0";return n=e.toString(10),h2.test(n)?n.replace("e",".e"):n}function g2(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||pa.isNegativeZero(e))}var y2=new Ge("tag:yaml.org,2002:float",{kind:"scalar",resolve:p2,construct:d2,predicate:g2,represent:m2,defaultStyle:"lowercase"}),_2=Zb.extend({implicit:[Qb,s2,u2,y2]}),v2=_2,Tf=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Ff=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function b2(e){return e===null?!1:Tf.exec(e)!==null||Ff.exec(e)!==null}function w2(e){var t,n,l,r,o,a,i,c=0,f=null,p,h,d;if(t=Tf.exec(e),t===null&&(t=Ff.exec(e)),t===null)throw new Error("Date resolve error");if(n=+t[1],l=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,l,r));if(o=+t[4],a=+t[5],i=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(p=+t[10],h=+(t[11]||0),f=(p*60+h)*6e4,t[9]==="-"&&(f=-f)),d=new Date(Date.UTC(n,l,r,o,a,i,c)),f&&d.setTime(d.getTime()-f),d}function A2(e){return e.toISOString()}var x2=new Ge("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:b2,construct:w2,instanceOf:Date,represent:A2});function k2(e){return e==="<<"||e===null}var C2=new Ge("tag:yaml.org,2002:merge",{kind:"scalar",resolve:k2}),da=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function $2(e){if(e===null)return!1;var t,n,l=0,r=e.length,o=da;for(n=0;n<r;n++)if(t=o.indexOf(e.charAt(n)),!(t>64)){if(t<0)return!1;l+=6}return l%8===0}function E2(e){var t,n,l=e.replace(/[\r\n=]/g,""),r=l.length,o=da,a=0,i=[];for(t=0;t<r;t++)t%4===0&&t&&(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)),a=a<<6|o.indexOf(l.charAt(t));return n=r%4*6,n===0?(i.push(a>>16&255),i.push(a>>8&255),i.push(a&255)):n===18?(i.push(a>>10&255),i.push(a>>2&255)):n===12&&i.push(a>>4&255),new Uint8Array(i)}function D2(e){var t="",n=0,l,r,o=e.length,a=da;for(l=0;l<o;l++)l%3===0&&l&&(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]),n=(n<<8)+e[l];return r=o%3,r===0?(t+=a[n>>18&63],t+=a[n>>12&63],t+=a[n>>6&63],t+=a[n&63]):r===2?(t+=a[n>>10&63],t+=a[n>>4&63],t+=a[n<<2&63],t+=a[64]):r===1&&(t+=a[n>>2&63],t+=a[n<<4&63],t+=a[64],t+=a[64]),t}function B2(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var O2=new Ge("tag:yaml.org,2002:binary",{kind:"scalar",resolve:$2,construct:E2,predicate:B2,represent:D2}),P2=Object.prototype.hasOwnProperty,S2=Object.prototype.toString;function M2(e){if(e===null)return!0;var t=[],n,l,r,o,a,i=e;for(n=0,l=i.length;n<l;n+=1){if(r=i[n],a=!1,S2.call(r)!=="[object Object]")return!1;for(o in r)if(P2.call(r,o))if(!a)a=!0;else return!1;if(!a)return!1;if(t.indexOf(o)===-1)t.push(o);else return!1}return!0}function T2(e){return e!==null?e:[]}var F2=new Ge("tag:yaml.org,2002:omap",{kind:"sequence",resolve:M2,construct:T2}),R2=Object.prototype.toString;function I2(e){if(e===null)return!0;var t,n,l,r,o,a=e;for(o=new Array(a.length),t=0,n=a.length;t<n;t+=1){if(l=a[t],R2.call(l)!=="[object Object]"||(r=Object.keys(l),r.length!==1))return!1;o[t]=[r[0],l[r[0]]]}return!0}function L2(e){if(e===null)return[];var t,n,l,r,o,a=e;for(o=new Array(a.length),t=0,n=a.length;t<n;t+=1)l=a[t],r=Object.keys(l),o[t]=[r[0],l[r[0]]];return o}var N2=new Ge("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:I2,construct:L2}),j2=Object.prototype.hasOwnProperty;function H2(e){if(e===null)return!0;var t,n=e;for(t in n)if(j2.call(n,t)&&n[t]!==null)return!1;return!0}function V2(e){return e!==null?e:{}}var U2=new Ge("tag:yaml.org,2002:set",{kind:"mapping",resolve:H2,construct:V2});v2.extend({implicit:[x2,C2],explicit:[O2,F2,N2,U2]});function uc(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var z2=new Array(256),W2=new Array(256);for(var Un=0;Un<256;Un++)z2[Un]=uc(Un)?1:0,W2[Un]=uc(Un);function K2(e){return Array.from(new Set(e))}function fc(...e){let t,n,l;e.length===1?(t=0,l=1,[n]=e):[t,n,l=1]=e;const r=[];let o=t;for(;o<n;)r.push(o),o+=l||1;return r}function q2(e,t){if(!t||t==="all"||t==="*")return fc(1,e+1);const n=[];for(const l of t.split(/[,;]/g))if(!l.includes("-"))n.push(+l);else{const[r,o]=l.split("-",2);n.push(...fc(+r,o?+o+1:e+1))}return K2(n).filter(l=>l<=e).sort((l,r)=>l-r)}const at=ye({name:"CodeHighlightController",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0}},setup(e){const t=e;H(Z);const n=H(Ms),l=H(An),r=H(Ts);function o(c=5){const f=[],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",h=p.length;for(let d=0;d<c;d++)f.push(p.charAt(Math.floor(Math.random()*h)));return f.join("")}const a=z(),i=Fn();return fs(()=>{const c=t.at==null?l==null?void 0:l.value.length:t.at,f=D(()=>r!=null&&r.value?t.ranges.length-1:Math.min(Math.max(0,((n==null?void 0:n.value)||0)-(c||0)),t.ranges.length-1)),p=D(()=>t.ranges[f.value]||"");if(t.ranges.length>=2&&!(r!=null&&r.value)){const h=o(),d=Em(t.ranges.length-1).map(m=>h+m);l!=null&&l.value&&(l.value.push(...d),ar(()=>d.forEach(m=>co(l.value,m)),i))}ol(()=>{if(!a.value)return;const d=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const m of d){const y=Array.from(m.querySelectorAll(".line")),w=q2(y.length,p.value);y.forEach((b,$)=>{const x=w.includes($+1);b.classList.toggle(bn,!0),b.classList.toggle("highlighted",x),b.classList.toggle("dishonored",!x)})}})}),(c,f)=>(k(),V("div",{ref_key:"el",ref:a},[vt(c.$slots,"default")],512))}}),Y2={class:"grid grid-cols-2 w-full h-full"},it=ye({name:"image-right",props:{image:{type:String},class:{type:String}},setup(e){const t=e;H(Z);const n=D(()=>ua(t.image));return(l,r)=>(k(),V("div",Y2,[s("div",{class:Fe(["slidev-layout default",t.class])},[vt(l.$slots,"default")],2),s("div",{class:"w-full w-full",style:We(v(n))},null,4)]))}}),Z2=s("h1",null,[s("strong",null,"\u4E3B\u7248\u672C")],-1),G2=s("p",null,"\u4E3B\u6846\u67B6\u3001\u4F1A\u8BAE\u3001IM\u804A\u5929",-1),X2=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u4E01\u5B87\u535A")]),u(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5F6D\u4F73\u8F89"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"Web"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])],-1),J2={name:"10",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/f4a81b8c0aff4c16bdff821ab30ac9a5.png",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=at;return k(),X(it,ke(Ae(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),Z2,G2,O(r,Ie({},{ranges:["all","1","7","9","11","13","15","all"]}),{default:F(()=>[X2]),_:1},16)]),_:1},16)}}},Q2=s("h1",null,[s("strong",null,"\u5730\u56FE\u7F16\u8F91\u5668")],-1),e3=s("p",null,"\u7269\u4EF6\u6446\u653E",-1),t3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u5218\u6167")]),u(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5170\u56FD\u5FD7"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])],-1),n3={name:"11",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/4ce912a153284c23b475d8ac0a117bab.png",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=at;return k(),X(it,ke(Ae(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),Q2,e3,O(r,Ie({},{ranges:["all","1","7","9","11","all"]}),{default:F(()=>[t3]),_:1},16)]),_:1},16)}}},s3=s("h1",null,[s("strong",null,"\u7EC4\u4EF6\u7F16\u8F91\u5668")],-1),l3=s("p",null,"\u7EC4\u4EF6\u7BA1\u7406\u6A21\u7EC4\uFF0C\u8D44\u6E90\u4E0A\u4F20\u3001\u5C5E\u6027\u8BBE\u7F6E\u3001\u7EC4\u4EF6\u751F\u6210",-1),r3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u5218\u6167")]),u(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5170\u56FD\u5FD7"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])],-1),o3={name:"12",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/b220f60e64784c229c724b373acc4530.png",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=at;return k(),X(it,ke(Ae(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),s3,l3,O(r,Ie({},{ranges:["all","1","7","9","11","all"]}),{default:F(()=>[r3]),_:1},16)]),_:1},16)}}},a3=s("h1",null,[s("strong",null,"\u670D\u9970DIY")],-1),i3=s("p",null,"\u670D\u88C5\u56FE\u7EB8\u5236\u4F5C",-1),c3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u5218\u6167")]),u(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),u3={name:"13",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/1b11907fa7a74e6496f4637ba0a6bec9.png",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=at;return k(),X(it,ke(Ae(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),a3,i3,O(r,Ie({},{ranges:["all","1","7","9","all"]}),{default:F(()=>[c3]),_:1},16)]),_:1},16)}}},f3=s("h1",null,[s("strong",null,"\u5267\u672C\u6740")],-1),p3=s("p",null,"\u7EBF\u4E0A\u5267\u672C\u6740\u3001\u5267\u672CDIY",-1),d3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u6768\u76CA")]),u(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),h3={name:"14",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/d113f42921e14eda932604f9af396b24.png",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=at;return k(),X(it,ke(Ae(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),f3,p3,O(r,Ie({},{ranges:["all","1","7","15","all"]}),{default:F(()=>[d3]),_:1},16)]),_:1},16)}}},m3=s("h1",null,[s("strong",null,"\u6211\u7684\u7C89\u4E1D\u91CC\u6709\u9B3C")],-1),g3=s("p",null,"\u8D77\u4E8EB\u7AD9\u7684\u7EBF\u4E0A\u72FC\u4EBA\u6740\u6E38\u620F\u6A21\u5F0F",-1),y3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u6768\u68EE")]),u(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u8C2D\u4E16\u4FCA"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"unity"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])],-1),_3={name:"15",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/203e82b9d579414d92db9edb188b42dd.gif",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=at;return k(),X(it,ke(Ae(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),m3,g3,O(r,Ie({},{ranges:["all","1","7","9","all"]}),{default:F(()=>[y3]),_:1},16)]),_:1},16)}}},v3=s("h1",null,[s("strong",null,"\u5BC6\u53CB\u52A8\u6001")],-1),b3=s("p",null,"3D\u6F6E\u73A9\u98CE\u6362\u88C5\u7684\u793E\u4EA4\u5E7F\u573A",-1),w3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u674E\u96E8\u9716"),s("span",{style:{color:"#CB7676"}},"/"),s("span",{style:{color:"#B8A965"}},"\u8D75\u8F69")]),u(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5F6D\u4F73\u8F89"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"Web"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])],-1),A3={name:"16",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/742aa0afbb484b49b1a0975db503173f.gif",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=at;return k(),X(it,ke(Ae(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),v3,b3,O(r,Ie({},{ranges:["all","1","7","9","11","13","15","all"]}),{default:F(()=>[w3]),_:1},16)]),_:1},16)}}},x3=s("h1",null,[s("strong",null,"\u4E16\u754C\u751F\u6001")],-1),k3=s("p",null,"\u7ECF\u6D4E\u7CFB\u7EDF\u3001",-1),C3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u8D75\u8F69")]),u(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u6768\u56FD\u6797"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])],-1),$3={name:"17",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/f497282637e147afbbb22c570fa588f9.png",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=at;return k(),X(it,ke(Ae(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),x3,k3,O(r,Ie({},{ranges:["all","1","7","9","11"]}),{default:F(()=>[C3]),_:1},16)]),_:1},16)}}},E3=s("h1",null,[s("strong",null,"NFT")],-1),D3=s("p",null,"NFT\u5C55\u793A\u4EA4\u6613\u3001\u4EE3\u5E01\u4F53\u7CFB",-1),B3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u674E\u96E8\u9716")]),u(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u4F55\u667A\u52C7"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u670D\u52A1\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])],-1),O3={name:"18",setup(e){const t={layout:"image-right",image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fkfx.7fzk.com%2Fwp-content%2Fuploads%2F2021%2F12%2F2021122801521187.jpg&refer=http%3A%2F%2Fkfx.7fzk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658026796&t=f9d87521e317d306903f26fbf4717637",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=at;return k(),X(it,ke(Ae(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),E3,D3,O(r,Ie({},{ranges:["all","1","7","9","11","13","15","all"]}),{default:F(()=>[B3]),_:1},16)]),_:1},16)}}},P3=s("h1",null,[s("strong",null,"UT\u5B98\u7F51")],-1),S3=s("p",null,"\u66DD\u5149\u3001\u4EA4\u6613\u7CFB\u7EDF",-1),M3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u6768\u76CA"),s("span",{style:{color:"#CB7676"}},"/...")]),u(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),T3={name:"19",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=at;return k(),X(it,ke(Ae(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),P3,S3,O(r,Ie({},{ranges:["all","1","7"]}),{default:F(()=>[M3]),_:1},16)]),_:1},16)}}},F3=s("h1",null,[s("strong",null,"UT\u4E2D\u53F0")],-1),R3=s("p",null,"\u7BA1\u7406\u63A7\u5236\u53F0\u3001\u914D\u7F6E",-1),I3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u90B1\u6E05\u9752")]),u(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u6C6A\u9E3F\u5B87"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])],-1),L3={name:"20",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/893a7683a8874273a54351fe4f63d53e.png",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=at;return k(),X(it,ke(Ae(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),F3,R3,O(r,Ie({},{ranges:["all","1","7","9"]}),{default:F(()=>[I3]),_:1},16)]),_:1},16)}}},N3=s("h1",null,[s("strong",null,"\u7535\u73A9\u57CE")],-1),j3=s("p",null,"\u7535\u73A9\u5A31\u4E50\u751F\u6001\uFF0C\u96C6\u6210\u7B2C\u4E09\u65B9\u5C0F\u6E38\u620F",-1),H3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u6768\u68EE")]),u(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u4F55\u667A\u52C7"),s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u540E\u7AEF"),s("span",{style:{color:"#393A34"}},"\uFF09")])])])],-1),V3={name:"21",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/e9e2f5993886473aa9f1767a7a29a6c8.png",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=at;return k(),X(it,ke(Ae(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),N3,j3,O(r,Ie({},{ranges:["all","1","7","9","11"]}),{default:F(()=>[H3]),_:1},16)]),_:1},16)}}},U3={class:"grid grid-cols-2 w-full h-full"},z3={class:"h-full"},W3=["src"],K3=ye({name:"iframe-right",props:{class:null,url:null},setup(e){const t=e;return H(Z),(n,l)=>(k(),V("div",U3,[s("div",{class:Fe(["slidev-layout default",t.class])},[vt(n.$slots,"default")],2),s("div",z3,[s("iframe",{id:"frame",class:"w-full h-full",src:e.url},null,8,W3)])]))}}),q3=s("h1",null,[s("strong",null,"\u201C\u592A\u7A7A\u72FC\u4EBA\u6740\u201D")],-1),Y3=s("p",null,"\u300AAmong us\u300B",-1),Z3=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4976C"}},"PO"),s("span",{style:{color:"#DBD7CA"}},"\uFF1A "),s("span",{style:{color:"#B8A965"}},"\u8096\u9A70")]),u(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#AB5959"}},"...")])])])],-1),G3={name:"22",setup(e){const t={layout:"iframe-right",url:"https://play.google.com/video/lava/web/player/yt:movie:sYvKjZKunyo?autoplay=1&authuser=0&embed=play",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=at;return k(),X(K3,ke(Ae(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),q3,Y3,O(r,Ie({},{ranges:["all","1","7","9","11","13","15","all"]}),{default:F(()=>[Z3]),_:1},16)]),_:1},16)}}},X3=u("\u5B8C\u6210\u5B9A\u4E49"),J3=s("br",null,null,-1),Q3={grid:"~ cols-4 gap-2",m:"-t-2"},e4=u("Dev"),t4=u("Test"),n4=u("Beta"),s4=u("Prod"),l4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u5F00\u53D1\u73AF\u5883"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u89E3\u51B3\u51B2\u7A81")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u6301\u7EED\u96C6\u6210")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u5F00\u53D1\u73AF\u5883"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u89E3\u51B3\u51B2\u7A81")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u6301\u7EED\u96C6\u6210")])])])],-1),r4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u6D4B\u8BD5\u73AF\u5883"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u96C6\u4E2D\u6D4B\u8BD5")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u6D4B\u8BD5\u73AF\u5883"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"}),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u96C6\u4E2D\u6D4B\u8BD5")])])])],-1),o4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u51C6\u751F\u4EA7\u73AF\u5883"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u5168\u91CF\u6D4B\u8BD5"),s("span",{style:{color:"#DBD7CA"}},"\u22652"),s("span",{style:{color:"#B8A965"}},"\u8F6E")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u9664\u4F18\u5148\u7EA7\u4E3A"),s("span",{style:{color:"#DBD7CA"}},"\u201C"),s("span",{style:{color:"#B8A965"}},"\u4F4E"),s("span",{style:{color:"#DBD7CA"}},"\u201C"),s("span",{style:{color:"#B8A965"}},"\u7F3A\u9677\u6E05\u7A7A")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u7F8E\u672F"),s("span",{style:{color:"#DBD7CA"}},"\u3001"),s("span",{style:{color:"#D4976C"}},"UI"),s("span",{style:{color:"#DBD7CA"}},"\u3001"),s("span",{style:{color:"#B8A965"}},"\u4EA7\u54C1\u9A8C\u6536")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u51C6\u751F\u4EA7\u73AF\u5883"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5168\u91CF\u6D4B\u8BD5"),s("span",{style:{color:"#393A34"}},"\u22652"),s("span",{style:{color:"#8C862B"}},"\u8F6E")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u9664\u4F18\u5148\u7EA7\u4E3A"),s("span",{style:{color:"#393A34"}},"\u201C"),s("span",{style:{color:"#8C862B"}},"\u4F4E"),s("span",{style:{color:"#393A34"}},"\u201C"),s("span",{style:{color:"#8C862B"}},"\u7F3A\u9677\u6E05\u7A7A")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u7F8E\u672F"),s("span",{style:{color:"#393A34"}},"\u3001"),s("span",{style:{color:"#A65E2B"}},"UI"),s("span",{style:{color:"#393A34"}},"\u3001"),s("span",{style:{color:"#8C862B"}},"\u4EA7\u54C1\u9A8C\u6536")])])])],-1),a4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"\uFF08"),s("span",{style:{color:"#B8A965"}},"\u751F\u4EA7\u73AF\u5883"),s("span",{style:{color:"#DBD7CA"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u5168\u91CF\u6D4B\u8BD5"),s("span",{style:{color:"#DBD7CA"}},"\u22653"),s("span",{style:{color:"#B8A965"}},"\u8F6E")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u7F3A\u9677\u539F\u5219\u4E0A\u6E05\u7A7A")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B8A965"}},"\u7F8E\u672F"),s("span",{style:{color:"#DBD7CA"}},"\u3001"),s("span",{style:{color:"#D4976C"}},"UI"),s("span",{style:{color:"#DBD7CA"}},"\u3001"),s("span",{style:{color:"#B8A965"}},"\u4EA7\u54C1\u9A8C\u6536")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"\uFF08"),s("span",{style:{color:"#8C862B"}},"\u751F\u4EA7\u73AF\u5883"),s("span",{style:{color:"#393A34"}},"\uFF09")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u5168\u91CF\u6D4B\u8BD5"),s("span",{style:{color:"#393A34"}},"\u22653"),s("span",{style:{color:"#8C862B"}},"\u8F6E")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u7F3A\u9677\u539F\u5219\u4E0A\u6E05\u7A7A")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8C862B"}},"\u7F8E\u672F"),s("span",{style:{color:"#393A34"}},"\u3001"),s("span",{style:{color:"#A65E2B"}},"UI"),s("span",{style:{color:"#393A34"}},"\u3001"),s("span",{style:{color:"#8C862B"}},"\u4EA7\u54C1\u9A8C\u6536")])])])],-1),i4={name:"23",setup(e){const t={layout:"default",background:"https://www.utown.io/",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=Ct("center"),o=at;return k(),X(Ln,ke(Ae(t)),{default:F(()=>[q("2\u3001\u5927\u7EB2"),s("h1",null,[s("strong",null,[O(r,null,{default:F(()=>[X3]),_:1})])]),J3,s("div",Q3,[s("h3",null,[O(r,null,{default:F(()=>[e4]),_:1})]),s("h3",null,[O(r,null,{default:F(()=>[t4]),_:1})]),s("h3",null,[O(r,null,{default:F(()=>[n4]),_:1})]),s("h3",null,[O(r,null,{default:F(()=>[s4]),_:1})]),O(o,Ie({},{ranges:["all","3","5","all"]}),{default:F(()=>[l4]),_:1},16),O(o,Ie({},{ranges:["all","4","5","all"]}),{default:F(()=>[r4]),_:1},16),O(o,Ie({},{ranges:["all","3","5","all"]}),{default:F(()=>[o4]),_:1},16),O(o,Ie({},{ranges:["all","3","5","all"]}),{default:F(()=>[a4]),_:1},16)])]),_:1},16)}}},c4=u("Protocol"),u4=s("br",null,null,-1),f4={grid:"~ cols-5 gap-2",m:"-t-2"},p4=u("\u8DEF\u7EBF\u56FE "),d4=u("\u53D1\u5E03\u8BA1\u5212"),h4=u("\u8FED\u4EE3\u8BA1\u5212"),m4=u("\u7528\u6237\u6545\u4E8B"),g4=u("\u4EFB\u52A1"),y4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"1~2 years")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"1~2 years")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),_4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"3~12 months")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"3~12 months")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),v4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"1~4 weeks")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"1~4 weeks")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),b4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"3~5 days")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"3~5 days")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),w4=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"1~2 days")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"1~2 days")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),A4=s("br",null,null,-1),x4=s("img",{src:"https://img-blog.csdnimg.cn/bb7ba9e1a5b244c1b861d53bd00bbeb1.png"},null,-1),k4={name:"24",setup(e){const t={layout:"default",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=Ct("center");return k(),X(Ln,ke(Ae(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),s("h1",null,[O(r,null,{default:F(()=>[c4]),_:1})]),u4,s("div",f4,[O(r,null,{default:F(()=>[p4]),_:1}),O(r,null,{default:F(()=>[d4]),_:1}),O(r,null,{default:F(()=>[h4]),_:1}),O(r,null,{default:F(()=>[m4]),_:1}),O(r,null,{default:F(()=>[g4]),_:1}),y4,_4,v4,b4,w4]),A4,x4]),_:1},16)}}},C4=u("Protocol"),$4=s("br",null,null,-1),E4=u("\u53D1\u5E03\u8BA1\u5212"),D4=s("img",{src:"https://img-blog.csdnimg.cn/fbe5402b18af496fbdaa132bfea7c5a8.png"},null,-1),B4={name:"25",setup(e){const t={layout:"default",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=Ct("center");return k(),X(Ln,ke(Ae(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),s("h1",null,[s("strong",null,[O(r,null,{default:F(()=>[C4]),_:1})])]),$4,O(r,null,{default:F(()=>[E4]),_:1}),D4]),_:1},16)}}},O4=u("Protocol"),P4=s("br",null,null,-1),S4=u("\u8FED\u4EE3"),M4=s("img",{src:"https://img-blog.csdnimg.cn/12f66f9da8ae4aaeb751b00bb58a4a20.png"},null,-1),T4={name:"26",setup(e){const t={layout:"default",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=Ct("center");return k(),X(Ln,ke(Ae(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),s("h1",null,[O(r,null,{default:F(()=>[O4]),_:1})]),P4,O(r,null,{default:F(()=>[S4]),_:1}),M4]),_:1},16)}}},F4=u("Protocol"),R4=s("br",null,null,-1),I4=u("\u7528\u6237\u6545\u4E8B\u548C\u4EFB\u52A1"),L4=s("br",null,null,-1),N4=s("br",null,null,-1),j4=s("br",null,null,-1),H4=s("br",null,null,-1),V4=s("br",null,null,-1),U4=s("br",null,null,-1),z4=u("\u62C6\u89E3\u539F\u5219\uFF1AMECE"),W4={name:"27",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/7a354dfc23ea4fb28ce72c0de91804ab.png",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=Ct("center");return k(),X(it,ke(Ae(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),s("h1",null,[O(r,null,{default:F(()=>[F4]),_:1})]),R4,O(r,null,{default:F(()=>[I4]),_:1}),L4,N4,j4,H4,V4,U4,s("h1",null,[O(r,null,{default:F(()=>[z4]),_:1})])]),_:1},16)}}},K4=u("Protocol"),q4=s("br",null,null,-1),Y4={grid:"~ cols-5 gap-2",m:"-t-2"},Z4=u("\u8DEF\u7EBF\u56FE "),G4=u("\u53D1\u5E03\u8BA1\u5212"),X4=u("\u8FED\u4EE3\u8BA1\u5212"),J4=u("\u7528\u6237\u6545\u4E8B"),Q4=u("\u4EFB\u52A1"),ew=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"1~2 years")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"1~2 years")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),tw=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"3~12 months")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"3~12 months")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),nw=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"1~4 weeks")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"1~4 weeks")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),sw=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"3~5 days")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"3~5 days")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),lw=s("pre",{class:"shiki-container"},[s("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C98A7D"}},"1~2 days")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#DBD7CA"}},"	  ")])])]),s("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B56959"}},"1~2 days")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")]),u(`
`),s("span",{class:"line"},[s("span",{style:{color:"#393A34"}},"	  ")])])])],-1),rw=u("\u65F6\u95F4\u76D2"),ow={name:"28",setup(e){const t={layout:"default",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=Ct("center");return k(),X(Ln,ke(Ae(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),s("h1",null,[O(r,null,{default:F(()=>[K4]),_:1})]),q4,s("div",Y4,[O(r,null,{default:F(()=>[Z4]),_:1}),O(r,null,{default:F(()=>[G4]),_:1}),O(r,null,{default:F(()=>[X4]),_:1}),O(r,null,{default:F(()=>[J4]),_:1}),O(r,null,{default:F(()=>[Q4]),_:1}),ew,tw,nw,sw,lw]),s("h1",null,[O(r,null,{default:F(()=>[rw]),_:1})])]),_:1},16)}}},aw=u("Outlook"),iw=s("br",null,null,-1),cw=u("FT\u7EC4\u7EC7"),uw=s("blockquote",null,[s("p",null,"\u4EA7\u54C1\u4FA7\uFF1A\u6C89\u6DC0\u957F\u671F\u7A33\u5B9A\u7684\u7279\u6027\u89C4\u5212\uFF0C\u4ECE\u9700\u6C42\u8BBE\u8BA1\u4E0A\u8DB3\u591F\u89E3\u8026")],-1),fw=s("blockquote",null,[s("p",null,"\u5F00\u53D1\u4FA7\uFF1A\u7A33\u5B9A\u7684\u3001\u9AD8\u8D28\u91CF\u7684CICD")],-1),pw=s("blockquote",null,[s("p",null,"\u6D4B\u8BD5\u4FA7\uFF1A\u6548\u7387\u5316\u5DE5\u5177\u5F15\u5165\uFF08\u81EA\u52A8\u5316\u7B49\uFF09")],-1),dw=s("blockquote",null,[s("p",null,"All team\uFF1A\u6210\u957F\u4E3A\u201C\u4E13\u5BB6\u201D\uFF08\u4E1A\u52A1\u548C\u6280\u672F\uFF09")],-1),hw={name:"29",setup(e){const t={layout:"image-right",image:"https://img-blog.csdnimg.cn/24bd2c170bf44c17a968658bef6263ae.png",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>{const r=Ct("center");return k(),X(it,ke(Ae(t)),{default:F(()=>[q("1\u3001\u5C01\u9762"),s("h1",null,[O(r,null,{default:F(()=>[aw]),_:1})]),iw,O(r,null,{default:F(()=>[cw]),_:1}),uw,fw,pw,dw]),_:1},16)}}},mw={name:"30",setup(e){const t={layout:"end",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"};return H(Z),(n,l)=>(k(),X(Of,ke(Ae(t)),null,16))}};var gw=[{path:"1",name:"page-1",component:Hv,meta:{theme:"seriph",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},title:"Welcome to UTown Team",slide:{raw:`---
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

# Welcome to UTown Team



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
`,title:"Welcome to UTown Team",level:1,content:`# Welcome to UTown Team



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
</div>`,frontmatter:{theme:"seriph",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},title:"Welcome to UTown Team"},note:"The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)",index:0,start:0,end:47,notesHTML:`<p>The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. <a href="https://sli.dev/guide/syntax.html#notes" target="_blank" rel="noopener">Read more in the docs</a></p>
`,filepath:"/Users/ios/markdown_ppt/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:Xv,meta:{slide:{raw:`
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

<p v-after class="absolute bottom-23 left-45 opacity-30 transform -rotate-10">\u8FD9\u513F!</p>`,frontmatter:{},index:1,start:48,end:72,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:nb,meta:{layout:"iframe",url:"https://www.utown.io/",date:"2013/7/13 20:46:25",slide:{raw:`---
layout: iframe
url: https://www.utown.io/
date: 2013/7/13 20:46:25
---

<!--1\u3001\u5C01\u9762-->`,content:"",frontmatter:{layout:"iframe",url:"https://www.utown.io/",date:"2013/7/13 20:46:25"},note:"1\u3001\u5C01\u9762",index:2,start:72,end:79,notesHTML:`<p>1\u3001\u5C01\u9762</p>
`,filepath:"/Users/ios/markdown_ppt/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:mb,meta:{layout:"cover",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
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

</div>`,frontmatter:{layout:"cover",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"},index:3,start:79,end:150,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:bb,meta:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image-left",image:"https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png?raw=true",date:"2013/7/13 20:46:25",slide:{raw:`---
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

### **<center>\u4E92\u8054\u7F51\u5BE1\u5934\u7EC4\u7EC7\u7ED3\u6784</center>**`,frontmatter:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image-left",image:"https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png?raw=true",date:"2013/7/13 20:46:25"},index:4,start:150,end:162,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Ab,meta:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image",image:"https://img-blog.csdnimg.cn/86a44651142441fcae8082289679838d.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u7EC4\u7EC7\u7ED3\u6784
layout: image
image: https://img-blog.csdnimg.cn/86a44651142441fcae8082289679838d.png
date: 2013/7/13 20:46:25
---

<!--3.2\u7EC4\u7EC7\u7ED3\u6784-->
<br><br><br><br><br><br><br>

`,title:"\u7EC4\u7EC7\u7ED3\u6784",level:1,content:`<!--3.2\u7EC4\u7EC7\u7ED3\u6784-->
<br><br><br><br><br><br><br>`,frontmatter:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image",image:"https://img-blog.csdnimg.cn/86a44651142441fcae8082289679838d.png",date:"2013/7/13 20:46:25"},index:5,start:162,end:173,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:kb,meta:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image",image:"https://img-blog.csdnimg.cn/37f86b295234485b94a65cf5f07265c2.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u7EC4\u7EC7\u7ED3\u6784
layout: image
image: https://img-blog.csdnimg.cn/37f86b295234485b94a65cf5f07265c2.png
date: 2013/7/13 20:46:25
---

<!--3.3 \u7EC4\u7EC7\u67B6\u6784\uFF08\u5F31\u77E9\u9635\uFF09-->
<br><br><br><br><br><br><br>
`,title:"\u7EC4\u7EC7\u7ED3\u6784",level:1,content:`<!--3.3 \u7EC4\u7EC7\u67B6\u6784\uFF08\u5F31\u77E9\u9635\uFF09-->
<br><br><br><br><br><br><br>`,frontmatter:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image",image:"https://img-blog.csdnimg.cn/37f86b295234485b94a65cf5f07265c2.png",date:"2013/7/13 20:46:25"},index:6,start:173,end:183,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:$b,meta:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image",image:"https://img-blog.csdnimg.cn/97f0a31691f7468f9fece546c9db0c7f.png",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u7EC4\u7EC7\u7ED3\u6784
layout: image
image: https://img-blog.csdnimg.cn/97f0a31691f7468f9fece546c9db0c7f.png
date: 2013/7/13 20:46:25
---

<!--3.3 \u7EC4\u7EC7\u7ED3\u6784-->
<br><br><br><br><br><br><br>`,title:"\u7EC4\u7EC7\u7ED3\u6784",level:1,content:`<!--3.3 \u7EC4\u7EC7\u7ED3\u6784-->
<br><br><br><br><br><br><br>`,frontmatter:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"image",image:"https://img-blog.csdnimg.cn/97f0a31691f7468f9fece546c9db0c7f.png",date:"2013/7/13 20:46:25"},index:7,start:183,end:192,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Db,meta:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"default",image:"https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png?raw=true",date:"2013/7/13 20:46:25",slide:{raw:`---
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
src="https://img-blog.csdnimg.cn/f0ccc710e3a044e99db0bbfc5fa7d3d1.jpeg"/>`,frontmatter:{title:"\u7EC4\u7EC7\u7ED3\u6784",layout:"default",image:"https://img-blog.csdnimg.cn/bdc6062f41a4478c8e716b4f1aa9e330.png?raw=true",date:"2013/7/13 20:46:25"},index:8,start:192,end:204,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:J2,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/f4a81b8c0aff4c16bdff821ab30ac9a5.png",date:"2013/7/13 20:46:25",slide:{raw:`---
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

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/f4a81b8c0aff4c16bdff821ab30ac9a5.png",date:"2013/7/13 20:46:25"},index:9,start:204,end:235,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:n3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/4ce912a153284c23b475d8ac0a117bab.png",date:"2013/7/13 20:46:25",slide:{raw:`---
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

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/4ce912a153284c23b475d8ac0a117bab.png",date:"2013/7/13 20:46:25"},index:10,start:235,end:261,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:o3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/b220f60e64784c229c724b373acc4530.png",date:"2013/7/13 20:46:25",slide:{raw:`---
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

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/b220f60e64784c229c724b373acc4530.png",date:"2013/7/13 20:46:25"},index:11,start:261,end:286,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:u3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/1b11907fa7a74e6496f4637ba0a6bec9.png",date:"2013/7/13 20:46:25",slide:{raw:`---
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

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/1b11907fa7a74e6496f4637ba0a6bec9.png",date:"2013/7/13 20:46:25"},index:12,start:286,end:310,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:h3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/d113f42921e14eda932604f9af396b24.png",date:"2013/7/13 20:46:25",slide:{raw:`---
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

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/d113f42921e14eda932604f9af396b24.png",date:"2013/7/13 20:46:25"},index:13,start:310,end:340,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:_3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/203e82b9d579414d92db9edb188b42dd.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
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

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/203e82b9d579414d92db9edb188b42dd.gif",date:"2013/7/13 20:46:25"},index:14,start:340,end:363,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:A3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/742aa0afbb484b49b1a0975db503173f.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
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

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/742aa0afbb484b49b1a0975db503173f.gif",date:"2013/7/13 20:46:25"},index:15,start:363,end:392,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:$3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/f497282637e147afbbb22c570fa588f9.png",date:"2013/7/13 20:46:25",slide:{raw:`---
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

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/f497282637e147afbbb22c570fa588f9.png",date:"2013/7/13 20:46:25"},index:16,start:392,end:418,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:O3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fkfx.7fzk.com%2Fwp-content%2Fuploads%2F2021%2F12%2F2021122801521187.jpg&refer=http%3A%2F%2Fkfx.7fzk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658026796&t=f9d87521e317d306903f26fbf4717637",date:"2013/7/13 20:46:25",slide:{raw:`---
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

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fkfx.7fzk.com%2Fwp-content%2Fuploads%2F2021%2F12%2F2021122801521187.jpg&refer=http%3A%2F%2Fkfx.7fzk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658026796&t=f9d87521e317d306903f26fbf4717637",date:"2013/7/13 20:46:25"},index:17,start:418,end:446,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:T3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
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

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"},index:18,start:446,end:470,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:L3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/893a7683a8874273a54351fe4f63d53e.png",date:"2013/7/13 20:46:25",slide:{raw:`---
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

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/893a7683a8874273a54351fe4f63d53e.png",date:"2013/7/13 20:46:25"},index:19,start:470,end:494,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:V3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/e9e2f5993886473aa9f1767a7a29a6c8.png",date:"2013/7/13 20:46:25",slide:{raw:`---
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

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"image-right",image:"https://img-blog.csdnimg.cn/e9e2f5993886473aa9f1767a7a29a6c8.png",date:"2013/7/13 20:46:25"},index:20,start:494,end:520,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:G3,meta:{title:"\u9879\u76EE\u56E2\u961F",layout:"iframe-right",url:"https://play.google.com/video/lava/web/player/yt:movie:sYvKjZKunyo?autoplay=1&authuser=0&embed=play",date:"2013/7/13 20:46:25",slide:{raw:`---
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

\`\`\``,frontmatter:{title:"\u9879\u76EE\u56E2\u961F",layout:"iframe-right",url:"https://play.google.com/video/lava/web/player/yt:movie:sYvKjZKunyo?autoplay=1&authuser=0&embed=play",date:"2013/7/13 20:46:25"},index:21,start:520,end:541,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:i4,meta:{title:"\u5927\u7EB2\u7ED3\u6784",layout:"default",background:"https://www.utown.io/",date:"2013/7/13 20:46:25",slide:{raw:`---
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




</div>`,frontmatter:{title:"\u5927\u7EB2\u7ED3\u6784",layout:"default",background:"https://www.utown.io/",date:"2013/7/13 20:46:25"},index:22,start:541,end:614,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:k4,meta:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"default",date:"2013/7/13 20:46:25",slide:{raw:`---
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
/>`,frontmatter:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"default",date:"2013/7/13 20:46:25"},index:23,start:614,end:686,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:B4,meta:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"default",date:"2013/7/13 20:46:25",slide:{raw:`---
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
/>`,frontmatter:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"default",date:"2013/7/13 20:46:25"},index:24,start:686,end:702,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:T4,meta:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"default",date:"2013/7/13 20:46:25",slide:{raw:`---
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
/>`,frontmatter:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"default",date:"2013/7/13 20:46:25"},index:25,start:702,end:716,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:W4,meta:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"image-right",image:"https://img-blog.csdnimg.cn/7a354dfc23ea4fb28ce72c0de91804ab.png",date:"2013/7/13 20:46:25",slide:{raw:`---
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

# <center>\u62C6\u89E3\u539F\u5219\uFF1AMECE</center>`,frontmatter:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"image-right",image:"https://img-blog.csdnimg.cn/7a354dfc23ea4fb28ce72c0de91804ab.png",date:"2013/7/13 20:46:25"},index:26,start:716,end:735,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:ow,meta:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"default",date:"2013/7/13 20:46:25",slide:{raw:`---
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

# <center>\u65F6\u95F4\u76D2</center>`,frontmatter:{title:"\u4EA7\u54C1\u8DEF\u7EBF",layout:"default",date:"2013/7/13 20:46:25"},index:27,start:735,end:804,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:hw,meta:{title:"\u5C55\u671B",layout:"image-right",image:"https://img-blog.csdnimg.cn/24bd2c170bf44c17a968658bef6263ae.png",date:"2013/7/13 20:46:25",slide:{raw:`---
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


>All team\uFF1A\u6210\u957F\u4E3A\u201C\u4E13\u5BB6\u201D\uFF08\u4E1A\u52A1\u548C\u6280\u672F\uFF09`,frontmatter:{title:"\u5C55\u671B",layout:"image-right",image:"https://img-blog.csdnimg.cn/24bd2c170bf44c17a968658bef6263ae.png",date:"2013/7/13 20:46:25"},index:28,start:804,end:828,notesHTML:"",filepath:"/Users/ios/markdown_ppt/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:mw,meta:{title:"\u5C55\u671B",layout:"end",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25",slide:{raw:`---
title: \u5C55\u671B
layout: end
background: https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif
date: 2013/7/13 20:46:25
---
<!--1\u3001\u5C01\u9762-->`,title:"\u5C55\u671B",level:1,content:"",frontmatter:{title:"\u5C55\u671B",layout:"end",background:"https://img-blog.csdnimg.cn/184dd1527ad24c618a760939d99982f0.gif",date:"2013/7/13 20:46:25"},note:"1\u3001\u5C01\u9762",index:29,start:828,end:835,notesHTML:`<p>1\u3001\u5C01\u9762</p>
`,filepath:"/Users/ios/markdown_ppt/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",component:Of,meta:{layout:"end"}}];const He=gw,yw=[{name:"play",path:"/",component:gv,children:[...He]},{name:"print",path:"/print",component:wv},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>ps(()=>import("./Presenter.c6548cb0.js"),["assets/Presenter.c6548cb0.js","assets/Presenter.c3f07bd1.css","assets/DrawingControls.7a94e132.js"]),beforeEnter:e=>{if(!Cn.remote||Cn.remote===e.query.password)return!0;if(Cn.remote&&e.query.password===void 0){const t=prompt("Enter password");if(Cn.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],yt=sy({history:v1("/redis_intro/"),routes:yw});function _w(e,t,{mode:n="replace"}={}){return D({get(){const l=yt.currentRoute.value.query[e];return l==null?t!=null?t:null:Array.isArray(l)?l.filter(Boolean):l},set(l){qe(()=>{yt[v(n)]({query:Qe(ve({},yt.currentRoute.value.query),{[e]:l})})})}})}const Rf=z(0);qe(()=>{yt.afterEach(async()=>{await qe(),Rf.value+=1})});const Xt=D(()=>yt.currentRoute.value),ha=D(()=>Xt.value.query.print!==void 0),vw=D(()=>Xt.value.query.print==="clicks"),Wt=D(()=>Xt.value.query.embedded!==void 0),jt=D(()=>Xt.value.path.startsWith("/presenter")),Ls=D(()=>ha.value&&!vw.value),ko=D(()=>Xt.value.query.password),bw=D(()=>!jt.value&&(!xe.remote||ko.value===xe.remote)),pc=_w("clicks","0"),If=D(()=>He.length-1),ww=D(()=>Xt.value.path),Ve=D(()=>parseInt(ww.value.split(/\//g).slice(-1)[0])||1);D(()=>fr(Ve.value));const dt=D(()=>He.find(e=>e.path===`${Ve.value}`));D(()=>{var e,t,n;return(n=(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});D(()=>{var e,t;return(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.layout});const Tr=D(()=>He.find(e=>e.path===`${Math.min(He.length,Ve.value+1)}`)),Aw=D(()=>{var e,t;return Rf.value,((t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Ft=D({get(){if(Ls.value)return 99999;let e=+(pc.value||0);return isNaN(e)&&(e=0),e},set(e){pc.value=e.toString()}}),zl=D(()=>{var e,t,n;return+((n=(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?n:Aw.value.length)}),xw=D(()=>Ve.value<He.length-1||Ft.value<zl.value),kw=D(()=>Ve.value>1||Ft.value>0),Cw=D(()=>He.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(ma(e,t),e),[])),$w=D(()=>ga(Cw.value,dt.value));D(()=>ya($w.value));function un(){zl.value<=Ft.value?tl():Ft.value+=1}async function fn(){Ft.value<=0?await nl():Ft.value-=1}function fr(e){return jt.value?`/presenter/${e}`:`/${e}`}function tl(){const e=Math.min(He.length,Ve.value+1);return is(e)}async function nl(e=!0){const t=Math.max(1,Ve.value-1);await is(t),e&&zl.value&&yt.replace({query:Qe(ve({},Xt.value.query),{clicks:zl.value})})}function is(e,t){return yt.push({path:fr(e),query:Qe(ve({},Xt.value.query),{clicks:t})})}function Ew(e){const t=z(0),{direction:n,distanceX:l,distanceY:r}=Zg(e,{onSwipeStart(o){o.pointerType==="touch"&&(Js.value||(t.value=uo()))},onSwipeEnd(o){if(o.pointerType!=="touch"||!t.value||Js.value)return;const a=Math.abs(l.value),i=Math.abs(r.value);a/window.innerWidth>.3||a>100?n.value===Yt.LEFT?un():fn():(i/window.innerHeight>.4||i>200)&&(n.value===Yt.DOWN?nl():tl())}})}async function Co(){const{saveAs:e}=await ps(()=>import("./FileSaver.min.4f92ed14.js").then(function(t){return t.F}),[]);e(Ku(xe.download)?xe.download:xe.exportFilename?`${xe.exportFilename}.pdf`:"/redis_intro/slidev-exported.pdf",`${xe.title}.pdf`)}async function Dw(e){var t,n;if(e==null){const l=(n=(t=dt.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(l!=null&&l.filepath))return!1;e=`${l.filepath}:${l.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function ma(e,t,n=1){var r,o,a,i,c;const l=(o=(r=t.meta)==null?void 0:r.slide)==null?void 0:o.level;l&&l>n&&e.length>0?ma(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((a=t.meta)==null?void 0:a.hideInToc),title:(c=(i=t.meta)==null?void 0:i.slide)==null?void 0:c.title})}function ga(e,t,n=!1,l){return e.map(r=>{const o=Qe(ve({},r),{active:r.path===(t==null?void 0:t.path),hasActiveParent:n});return o.children.length>0&&(o.children=ga(o.children,t,o.active||o.hasActiveParent,o)),l&&(o.active||o.activeParent)&&(l.activeParent=!0),o})}function ya(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>Qe(ve({},n),{children:ya(n.children,t+1)}))}function Bw(){const e=xe.titleTemplate.replace("%s",xe.title||"Slidev");xm({title:e}),Sm(`${e} - shared`),Rm(`${e} - drawings`);function t(){jt.value&&(vi("page",+Ve.value),vi("clicks",Ft.value))}yt.afterEach(t),ce(Ft,t),Mm(n=>{(+n.page!=+Ve.value||Ft.value!==n.clicks)&&yt.replace({path:fr(n.page),query:Qe(ve({},yt.currentRoute.value.query),{clicks:n.clicks||0})})})}const Ow=ye({name:"App",setup(e){return H(Z),Bw(),(t,n)=>{const l=Ct("RouterView"),r=Ct("StarportCarrier");return k(),V(Ce,null,[O(l),O(r)],64)}}});function Fr(e){return e!==null&&typeof e=="object"}function $o(e,t,n=".",l){if(!Fr(t))return $o(e,{},n,l);const r=Object.assign({},t);for(const o in e){if(o==="__proto__"||o==="constructor")continue;const a=e[o];a!=null&&(l&&l(r,o,a,n)||(Array.isArray(a)&&Array.isArray(r[o])?r[o]=a.concat(r[o]):Fr(a)&&Fr(r[o])?r[o]=$o(a,r[o],(n?`${n}.`:"")+o.toString(),l):r[o]=a))}return r}function Pw(e){return(...t)=>t.reduce((n,l)=>$o(n,l,"",e),{})}const Sw=Pw(),Lf=1/60*1e3,Mw=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),Nf=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(Mw()),Lf);function Tw(e){let t=[],n=[],l=0,r=!1,o=!1;const a=new WeakSet,i={schedule:(c,f=!1,p=!1)=>{const h=p&&r,d=h?t:n;return f&&a.add(c),d.indexOf(c)===-1&&(d.push(c),h&&r&&(l=t.length)),c},cancel:c=>{const f=n.indexOf(c);f!==-1&&n.splice(f,1),a.delete(c)},process:c=>{if(r){o=!0;return}if(r=!0,[t,n]=[n,t],n.length=0,l=t.length,l)for(let f=0;f<l;f++){const p=t[f];p(c),a.has(p)&&(i.schedule(p),e())}r=!1,o&&(o=!1,i.process(c))}};return i}const Fw=40;let Eo=!0,sl=!1,Do=!1;const ns={delta:0,timestamp:0},il=["read","update","preRender","render","postRender"],pr=il.reduce((e,t)=>(e[t]=Tw(()=>sl=!0),e),{}),dc=il.reduce((e,t)=>{const n=pr[t];return e[t]=(l,r=!1,o=!1)=>(sl||Iw(),n.schedule(l,r,o)),e},{});il.reduce((e,t)=>(e[t]=pr[t].cancel,e),{});il.reduce((e,t)=>(e[t]=()=>pr[t].process(ns),e),{});const Rw=e=>pr[e].process(ns),jf=e=>{sl=!1,ns.delta=Eo?Lf:Math.max(Math.min(e-ns.timestamp,Fw),1),ns.timestamp=e,Do=!0,il.forEach(Rw),Do=!1,sl&&(Eo=!1,Nf(jf))},Iw=()=>{sl=!0,Eo=!0,Do||Nf(jf)},Lw=()=>ns;function Hf(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]]);return n}var Nw=function(){},hc=function(){};const Bo=(e,t,n)=>Math.min(Math.max(n,e),t),Rr=.001,jw=.01,mc=10,Hw=.05,Vw=1;function Uw({duration:e=800,bounce:t=.25,velocity:n=0,mass:l=1}){let r,o;Nw(e<=mc*1e3);let a=1-t;a=Bo(Hw,Vw,a),e=Bo(jw,mc,e/1e3),a<1?(r=f=>{const p=f*a,h=p*e,d=p-n,m=Oo(f,a),y=Math.exp(-h);return Rr-d/m*y},o=f=>{const h=f*a*e,d=h*n+n,m=Math.pow(a,2)*Math.pow(f,2)*e,y=Math.exp(-h),w=Oo(Math.pow(f,2),a);return(-r(f)+Rr>0?-1:1)*((d-m)*y)/w}):(r=f=>{const p=Math.exp(-f*e),h=(f-n)*e+1;return-Rr+p*h},o=f=>{const p=Math.exp(-f*e),h=(n-f)*(e*e);return p*h});const i=5/e,c=Ww(r,o,i);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const f=Math.pow(c,2)*l;return{stiffness:f,damping:a*2*Math.sqrt(l*f),duration:e}}}const zw=12;function Ww(e,t,n){let l=n;for(let r=1;r<zw;r++)l=l-e(l)/t(l);return l}function Oo(e,t){return e*Math.sqrt(1-t*t)}const Kw=["duration","bounce"],qw=["stiffness","damping","mass"];function gc(e,t){return t.some(n=>e[n]!==void 0)}function Yw(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!gc(e,qw)&&gc(e,Kw)){const n=Uw(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function _a(e){var{from:t=0,to:n=1,restSpeed:l=2,restDelta:r}=e,o=Hf(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:i,damping:c,mass:f,velocity:p,duration:h,isResolvedFromDuration:d}=Yw(o),m=yc,y=yc;function w(){const b=p?-(p/1e3):0,$=n-t,x=c/(2*Math.sqrt(i*f)),C=Math.sqrt(i/f)/1e3;if(r===void 0&&(r=Math.min(Math.abs(n-t)/100,.4)),x<1){const E=Oo(C,x);m=N=>{const T=Math.exp(-x*C*N);return n-T*((b+x*C*$)/E*Math.sin(E*N)+$*Math.cos(E*N))},y=N=>{const T=Math.exp(-x*C*N);return x*C*T*(Math.sin(E*N)*(b+x*C*$)/E+$*Math.cos(E*N))-T*(Math.cos(E*N)*(b+x*C*$)-E*$*Math.sin(E*N))}}else if(x===1)m=E=>n-Math.exp(-C*E)*($+(b+C*$)*E);else{const E=C*Math.sqrt(x*x-1);m=N=>{const T=Math.exp(-x*C*N),W=Math.min(E*N,300);return n-T*((b+x*C*$)*Math.sinh(W)+E*$*Math.cosh(W))/E}}}return w(),{next:b=>{const $=m(b);if(d)a.done=b>=h;else{const x=y(b)*1e3,C=Math.abs(x)<=l,E=Math.abs(n-$)<=r;a.done=C&&E}return a.value=a.done?n:$,a},flipTarget:()=>{p=-p,[t,n]=[n,t],w()}}}_a.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const yc=e=>0,Vf=(e,t,n)=>{const l=t-e;return l===0?1:(n-e)/l},va=(e,t,n)=>-n*e+n*t+e,Uf=(e,t)=>n=>Math.max(Math.min(n,t),e),Ns=e=>e%1?Number(e.toFixed(5)):e,Wl=/(-)?([\d]*\.?[\d])+/g,Po=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,Zw=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function cl(e){return typeof e=="string"}const dr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},zf=Object.assign(Object.assign({},dr),{transform:Uf(0,1)});Object.assign(Object.assign({},dr),{default:1});const Gw=e=>({test:t=>cl(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),js=Gw("%");Object.assign(Object.assign({},js),{parse:e=>js.parse(e)/100,transform:e=>js.transform(e*100)});const ba=(e,t)=>n=>Boolean(cl(n)&&Zw.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Wf=(e,t,n)=>l=>{if(!cl(l))return l;const[r,o,a,i]=l.match(Wl);return{[e]:parseFloat(r),[t]:parseFloat(o),[n]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},En={test:ba("hsl","hue"),parse:Wf("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:l=1})=>"hsla("+Math.round(e)+", "+js.transform(Ns(t))+", "+js.transform(Ns(n))+", "+Ns(zf.transform(l))+")"},Xw=Uf(0,255),Ir=Object.assign(Object.assign({},dr),{transform:e=>Math.round(Xw(e))}),ln={test:ba("rgb","red"),parse:Wf("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:l=1})=>"rgba("+Ir.transform(e)+", "+Ir.transform(t)+", "+Ir.transform(n)+", "+Ns(zf.transform(l))+")"};function Jw(e){let t="",n="",l="",r="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),l=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),l=e.substr(3,1),r=e.substr(4,1),t+=t,n+=n,l+=l,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(l,16),alpha:r?parseInt(r,16)/255:1}}const So={test:ba("#"),parse:Jw,transform:ln.transform},hr={test:e=>ln.test(e)||So.test(e)||En.test(e),parse:e=>ln.test(e)?ln.parse(e):En.test(e)?En.parse(e):So.parse(e),transform:e=>cl(e)?e:e.hasOwnProperty("red")?ln.transform(e):En.transform(e)},Kf="${c}",qf="${n}";function Qw(e){var t,n,l,r;return isNaN(e)&&cl(e)&&((n=(t=e.match(Wl))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((r=(l=e.match(Po))===null||l===void 0?void 0:l.length)!==null&&r!==void 0?r:0)>0}function Yf(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const l=e.match(Po);l&&(n=l.length,e=e.replace(Po,Kf),t.push(...l.map(hr.parse)));const r=e.match(Wl);return r&&(e=e.replace(Wl,qf),t.push(...r.map(dr.parse))),{values:t,numColors:n,tokenised:e}}function Zf(e){return Yf(e).values}function Gf(e){const{values:t,numColors:n,tokenised:l}=Yf(e),r=t.length;return o=>{let a=l;for(let i=0;i<r;i++)a=a.replace(i<n?Kf:qf,i<n?hr.transform(o[i]):Ns(o[i]));return a}}const e6=e=>typeof e=="number"?0:e;function t6(e){const t=Zf(e);return Gf(e)(t.map(e6))}const Xf={test:Qw,parse:Zf,createTransformer:Gf,getAnimatableNone:t6};function Lr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function _c({hue:e,saturation:t,lightness:n,alpha:l}){e/=360,t/=100,n/=100;let r=0,o=0,a=0;if(!t)r=o=a=n;else{const i=n<.5?n*(1+t):n+t-n*t,c=2*n-i;r=Lr(c,i,e+1/3),o=Lr(c,i,e),a=Lr(c,i,e-1/3)}return{red:Math.round(r*255),green:Math.round(o*255),blue:Math.round(a*255),alpha:l}}const n6=(e,t,n)=>{const l=e*e,r=t*t;return Math.sqrt(Math.max(0,n*(r-l)+l))},s6=[So,ln,En],vc=e=>s6.find(t=>t.test(e)),Jf=(e,t)=>{let n=vc(e),l=vc(t),r=n.parse(e),o=l.parse(t);n===En&&(r=_c(r),n=ln),l===En&&(o=_c(o),l=ln);const a=Object.assign({},r);return i=>{for(const c in a)c!=="alpha"&&(a[c]=n6(r[c],o[c],i));return a.alpha=va(r.alpha,o.alpha,i),n.transform(a)}},l6=e=>typeof e=="number",r6=(e,t)=>n=>t(e(n)),Qf=(...e)=>e.reduce(r6);function ep(e,t){return l6(e)?n=>va(e,t,n):hr.test(e)?Jf(e,t):np(e,t)}const tp=(e,t)=>{const n=[...e],l=n.length,r=e.map((o,a)=>ep(o,t[a]));return o=>{for(let a=0;a<l;a++)n[a]=r[a](o);return n}},o6=(e,t)=>{const n=Object.assign(Object.assign({},e),t),l={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(l[r]=ep(e[r],t[r]));return r=>{for(const o in l)n[o]=l[o](r);return n}};function bc(e){const t=Xf.parse(e),n=t.length;let l=0,r=0,o=0;for(let a=0;a<n;a++)l||typeof t[a]=="number"?l++:t[a].hue!==void 0?o++:r++;return{parsed:t,numNumbers:l,numRGB:r,numHSL:o}}const np=(e,t)=>{const n=Xf.createTransformer(t),l=bc(e),r=bc(t);return l.numHSL===r.numHSL&&l.numRGB===r.numRGB&&l.numNumbers>=r.numNumbers?Qf(tp(l.parsed,r.parsed),n):a=>`${a>0?t:e}`},a6=(e,t)=>n=>va(e,t,n);function i6(e){if(typeof e=="number")return a6;if(typeof e=="string")return hr.test(e)?Jf:np;if(Array.isArray(e))return tp;if(typeof e=="object")return o6}function c6(e,t,n){const l=[],r=n||i6(e[0]),o=e.length-1;for(let a=0;a<o;a++){let i=r(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]:t;i=Qf(c,i)}l.push(i)}return l}function u6([e,t],[n]){return l=>n(Vf(e,t,l))}function f6(e,t){const n=e.length,l=n-1;return r=>{let o=0,a=!1;if(r<=e[0]?a=!0:r>=e[l]&&(o=l-1,a=!0),!a){let c=1;for(;c<n&&!(e[c]>r||c===l);c++);o=c-1}const i=Vf(e[o],e[o+1],r);return t[o](i)}}function sp(e,t,{clamp:n=!0,ease:l,mixer:r}={}){const o=e.length;hc(o===t.length),hc(!l||!Array.isArray(l)||l.length===o-1),e[0]>e[o-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const a=c6(t,l,r),i=o===2?u6(e,a):f6(e,a);return n?c=>i(Bo(e[0],e[o-1],c)):i}const mr=e=>t=>1-e(1-t),wa=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,p6=e=>t=>Math.pow(t,e),lp=e=>t=>t*t*((e+1)*t-e),d6=e=>{const t=lp(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},rp=1.525,h6=4/11,m6=8/11,g6=9/10,op=e=>e,Aa=p6(2),y6=mr(Aa),ap=wa(Aa),ip=e=>1-Math.sin(Math.acos(e)),cp=mr(ip),_6=wa(cp),xa=lp(rp),v6=mr(xa),b6=wa(xa),w6=d6(rp),A6=4356/361,x6=35442/1805,k6=16061/1805,Kl=e=>{if(e===1||e===0)return e;const t=e*e;return e<h6?7.5625*t:e<m6?9.075*t-9.9*e+3.4:e<g6?A6*t-x6*e+k6:10.8*e*e-20.52*e+10.72},C6=mr(Kl),$6=e=>e<.5?.5*(1-Kl(1-e*2)):.5*Kl(e*2-1)+.5;function E6(e,t){return e.map(()=>t||ap).splice(0,e.length-1)}function D6(e){const t=e.length;return e.map((n,l)=>l!==0?l/(t-1):0)}function B6(e,t){return e.map(n=>n*t)}function Pl({from:e=0,to:t=1,ease:n,offset:l,duration:r=300}){const o={done:!1,value:e},a=Array.isArray(t)?t:[e,t],i=B6(l&&l.length===a.length?l:D6(a),r);function c(){return sp(i,a,{ease:Array.isArray(n)?n:E6(a,n)})}let f=c();return{next:p=>(o.value=f(p),o.done=p>=r,o),flipTarget:()=>{a.reverse(),f=c()}}}function O6({velocity:e=0,from:t=0,power:n=.8,timeConstant:l=350,restDelta:r=.5,modifyTarget:o}){const a={done:!1,value:t};let i=n*e;const c=t+i,f=o===void 0?c:o(c);return f!==c&&(i=f-t),{next:p=>{const h=-i*Math.exp(-p/l);return a.done=!(h>r||h<-r),a.value=a.done?f:f+h,a},flipTarget:()=>{}}}const wc={keyframes:Pl,spring:_a,decay:O6};function P6(e){if(Array.isArray(e.to))return Pl;if(wc[e.type])return wc[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Pl:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?_a:Pl}const up=1/60*1e3,S6=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),fp=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(S6()),up);function M6(e){let t=[],n=[],l=0,r=!1,o=!1;const a=new WeakSet,i={schedule:(c,f=!1,p=!1)=>{const h=p&&r,d=h?t:n;return f&&a.add(c),d.indexOf(c)===-1&&(d.push(c),h&&r&&(l=t.length)),c},cancel:c=>{const f=n.indexOf(c);f!==-1&&n.splice(f,1),a.delete(c)},process:c=>{if(r){o=!0;return}if(r=!0,[t,n]=[n,t],n.length=0,l=t.length,l)for(let f=0;f<l;f++){const p=t[f];p(c),a.has(p)&&(i.schedule(p),e())}r=!1,o&&(o=!1,i.process(c))}};return i}const T6=40;let Mo=!0,ll=!1,To=!1;const ss={delta:0,timestamp:0},ul=["read","update","preRender","render","postRender"],gr=ul.reduce((e,t)=>(e[t]=M6(()=>ll=!0),e),{}),F6=ul.reduce((e,t)=>{const n=gr[t];return e[t]=(l,r=!1,o=!1)=>(ll||L6(),n.schedule(l,r,o)),e},{}),R6=ul.reduce((e,t)=>(e[t]=gr[t].cancel,e),{});ul.reduce((e,t)=>(e[t]=()=>gr[t].process(ss),e),{});const I6=e=>gr[e].process(ss),pp=e=>{ll=!1,ss.delta=Mo?up:Math.max(Math.min(e-ss.timestamp,T6),1),ss.timestamp=e,To=!0,ul.forEach(I6),To=!1,ll&&(Mo=!1,fp(pp))},L6=()=>{ll=!0,Mo=!0,To||fp(pp)},N6=()=>ss;function dp(e,t,n=0){return e-t-n}function j6(e,t,n=0,l=!0){return l?dp(t+-e,t,n):t-(e-t)+n}function H6(e,t,n,l){return l?e>=t+n:e<=-n}const V6=e=>{const t=({delta:n})=>e(n);return{start:()=>F6.update(t,!0),stop:()=>R6.update(t)}};function hp(e){var t,n,{from:l,autoplay:r=!0,driver:o=V6,elapsed:a=0,repeat:i=0,repeatType:c="loop",repeatDelay:f=0,onPlay:p,onStop:h,onComplete:d,onRepeat:m,onUpdate:y}=e,w=Hf(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:b}=w,$,x=0,C=w.duration,E,N=!1,T=!0,W;const re=P6(w);!((n=(t=re).needsInterpolation)===null||n===void 0)&&n.call(t,l,b)&&(W=sp([0,100],[l,b],{clamp:!1}),l=0,b=100);const ue=re(Object.assign(Object.assign({},w),{from:l,to:b}));function pe(){x++,c==="reverse"?(T=x%2===0,a=j6(a,C,f,T)):(a=dp(a,C,f),c==="mirror"&&ue.flipTarget()),N=!1,m&&m()}function me(){$.stop(),d&&d()}function Te(Ye){if(T||(Ye=-Ye),a+=Ye,!N){const $e=ue.next(Math.max(0,a));E=$e.value,W&&(E=W(E)),N=T?$e.done:a<=0}y==null||y(E),N&&(x===0&&(C!=null||(C=a)),x<i?H6(a,C,f,T)&&pe():me())}function Ne(){p==null||p(),$=o(Te),$.start()}return r&&Ne(),{stop:()=>{h==null||h(),$.stop()}}}function mp(e,t){return t?e*(1e3/t):0}function U6({from:e=0,velocity:t=0,min:n,max:l,power:r=.8,timeConstant:o=750,bounceStiffness:a=500,bounceDamping:i=10,restDelta:c=1,modifyTarget:f,driver:p,onUpdate:h,onComplete:d,onStop:m}){let y;function w(C){return n!==void 0&&C<n||l!==void 0&&C>l}function b(C){return n===void 0?l:l===void 0||Math.abs(n-C)<Math.abs(l-C)?n:l}function $(C){y==null||y.stop(),y=hp(Object.assign(Object.assign({},C),{driver:p,onUpdate:E=>{var N;h==null||h(E),(N=C.onUpdate)===null||N===void 0||N.call(C,E)},onComplete:d,onStop:m}))}function x(C){$(Object.assign({type:"spring",stiffness:a,damping:i,restDelta:c},C))}if(w(e))x({from:e,velocity:t,to:b(e)});else{let C=r*t+e;typeof f!="undefined"&&(C=f(C));const E=b(C),N=E===n?-1:1;let T,W;const re=ue=>{T=W,W=ue,t=mp(ue-T,N6().delta),(N===1&&ue>E||N===-1&&ue<E)&&x({from:ue,to:E,velocity:t})};$({type:"decay",from:e,velocity:t,timeConstant:o,power:r,restDelta:c,modifyTarget:f,onUpdate:w(C)?re:void 0})}return{stop:()=>y==null?void 0:y.stop()}}const gp=(e,t)=>1-3*t+3*e,yp=(e,t)=>3*t-6*e,_p=e=>3*e,ql=(e,t,n)=>((gp(t,n)*e+yp(t,n))*e+_p(t))*e,vp=(e,t,n)=>3*gp(t,n)*e*e+2*yp(t,n)*e+_p(t),z6=1e-7,W6=10;function K6(e,t,n,l,r){let o,a,i=0;do a=t+(n-t)/2,o=ql(a,l,r)-e,o>0?n=a:t=a;while(Math.abs(o)>z6&&++i<W6);return a}const q6=8,Y6=.001;function Z6(e,t,n,l){for(let r=0;r<q6;++r){const o=vp(t,n,l);if(o===0)return t;t-=(ql(t,n,l)-e)/o}return t}const Sl=11,Al=1/(Sl-1);function G6(e,t,n,l){if(e===t&&n===l)return op;const r=new Float32Array(Sl);for(let a=0;a<Sl;++a)r[a]=ql(a*Al,e,n);function o(a){let i=0,c=1;const f=Sl-1;for(;c!==f&&r[c]<=a;++c)i+=Al;--c;const p=(a-r[c])/(r[c+1]-r[c]),h=i+p*Al,d=vp(h,e,n);return d>=Y6?Z6(a,h,e,n):d===0?h:K6(a,i,i+Al,e,n)}return a=>a===0||a===1?a:ql(o(a),t,l)}const bp=(e,t)=>n=>Math.max(Math.min(n,t),e),Hs=e=>e%1?Number(e.toFixed(5)):e,rl=/(-)?([\d]*\.?[\d])+/g,Fo=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,X6=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function fl(e){return typeof e=="string"}const pl={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Vs=Object.assign(Object.assign({},pl),{transform:bp(0,1)}),xl=Object.assign(Object.assign({},pl),{default:1}),ka=e=>({test:t=>fl(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),yn=ka("deg"),Us=ka("%"),oe=ka("px"),Ac=Object.assign(Object.assign({},Us),{parse:e=>Us.parse(e)/100,transform:e=>Us.transform(e*100)}),Ca=(e,t)=>n=>Boolean(fl(n)&&X6.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),wp=(e,t,n)=>l=>{if(!fl(l))return l;const[r,o,a,i]=l.match(rl);return{[e]:parseFloat(r),[t]:parseFloat(o),[n]:parseFloat(a),alpha:i!==void 0?parseFloat(i):1}},kl={test:Ca("hsl","hue"),parse:wp("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:l=1})=>"hsla("+Math.round(e)+", "+Us.transform(Hs(t))+", "+Us.transform(Hs(n))+", "+Hs(Vs.transform(l))+")"},J6=bp(0,255),Nr=Object.assign(Object.assign({},pl),{transform:e=>Math.round(J6(e))}),Ds={test:Ca("rgb","red"),parse:wp("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:l=1})=>"rgba("+Nr.transform(e)+", "+Nr.transform(t)+", "+Nr.transform(n)+", "+Hs(Vs.transform(l))+")"};function Q6(e){let t="",n="",l="",r="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),l=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),l=e.substr(3,1),r=e.substr(4,1),t+=t,n+=n,l+=l,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(l,16),alpha:r?parseInt(r,16)/255:1}}const xc={test:Ca("#"),parse:Q6,transform:Ds.transform},At={test:e=>Ds.test(e)||xc.test(e)||kl.test(e),parse:e=>Ds.test(e)?Ds.parse(e):kl.test(e)?kl.parse(e):xc.parse(e),transform:e=>fl(e)?e:e.hasOwnProperty("red")?Ds.transform(e):kl.transform(e)},Ap="${c}",xp="${n}";function eA(e){var t,n,l,r;return isNaN(e)&&fl(e)&&((n=(t=e.match(rl))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((r=(l=e.match(Fo))===null||l===void 0?void 0:l.length)!==null&&r!==void 0?r:0)>0}function kp(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const l=e.match(Fo);l&&(n=l.length,e=e.replace(Fo,Ap),t.push(...l.map(At.parse)));const r=e.match(rl);return r&&(e=e.replace(rl,xp),t.push(...r.map(pl.parse))),{values:t,numColors:n,tokenised:e}}function Cp(e){return kp(e).values}function $p(e){const{values:t,numColors:n,tokenised:l}=kp(e),r=t.length;return o=>{let a=l;for(let i=0;i<r;i++)a=a.replace(i<n?Ap:xp,i<n?At.transform(o[i]):Hs(o[i]));return a}}const tA=e=>typeof e=="number"?0:e;function nA(e){const t=Cp(e);return $p(e)(t.map(tA))}const $a={test:eA,parse:Cp,createTransformer:$p,getAnimatableNone:nA},sA=new Set(["brightness","contrast","saturate","opacity"]);function lA(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[l]=n.match(rl)||[];if(!l)return e;const r=n.replace(l,"");let o=sA.has(t)?1:0;return l!==n&&(o*=100),t+"("+o+r+")"}const rA=/([a-z-]*)\(.*?\)/g,Ro=Object.assign(Object.assign({},$a),{getAnimatableNone:e=>{const t=e.match(rA);return t?t.map(lA).join(" "):e}}),jr={};class oA{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,l){if(!!this.subscriptions.size)for(const r of this.subscriptions)r(t,n,l)}clear(){this.subscriptions.clear()}}const kc=e=>!isNaN(parseFloat(e));class aA{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new oA,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:l,timestamp:r}=Lw();this.lastUpdated!==r&&(this.timeDelta=l,this.lastUpdated=r),dc.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>dc.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=kc(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=kc(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?mp(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:l}=t(n);this.stopAnimation=l}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function iA(e){return new aA(e)}const{isArray:cA}=Array;function uA(){const e=z({}),t=l=>{const r=o=>{!e.value[o]||(e.value[o].stop(),e.value[o].destroy(),jm(e.value,o))};l?cA(l)?l.forEach(r):r(l):Object.keys(e.value).forEach(r)},n=(l,r,o)=>{if(e.value[l])return e.value[l];const a=iA(r);return a.onChange(i=>{rt(o,l,i)}),rt(e.value,l,a),a};return sa(t),{motionValues:e,get:n,stop:t}}const fA=e=>Array.isArray(e),_n=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Hr=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),pA=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Vr=()=>({type:"keyframes",ease:"linear",duration:300}),dA=e=>({type:"keyframes",duration:800,values:e}),Cc={default:pA,x:_n,y:_n,z:_n,rotate:_n,rotateX:_n,rotateY:_n,rotateZ:_n,scaleX:Hr,scaleY:Hr,scale:Hr,backgroundColor:Vr,color:Vr,opacity:Vr},Ep=(e,t)=>{let n;return fA(t)?n=dA:n=Cc[e]||Cc.default,ve({to:t},n(t))},$c=Qe(ve({},pl),{transform:Math.round}),Dp={color:At,backgroundColor:At,outlineColor:At,fill:At,stroke:At,borderColor:At,borderTopColor:At,borderRightColor:At,borderBottomColor:At,borderLeftColor:At,borderWidth:oe,borderTopWidth:oe,borderRightWidth:oe,borderBottomWidth:oe,borderLeftWidth:oe,borderRadius:oe,radius:oe,borderTopLeftRadius:oe,borderTopRightRadius:oe,borderBottomRightRadius:oe,borderBottomLeftRadius:oe,width:oe,maxWidth:oe,height:oe,maxHeight:oe,size:oe,top:oe,right:oe,bottom:oe,left:oe,padding:oe,paddingTop:oe,paddingRight:oe,paddingBottom:oe,paddingLeft:oe,margin:oe,marginTop:oe,marginRight:oe,marginBottom:oe,marginLeft:oe,rotate:yn,rotateX:yn,rotateY:yn,rotateZ:yn,scale:xl,scaleX:xl,scaleY:xl,scaleZ:xl,skew:yn,skewX:yn,skewY:yn,distance:oe,translateX:oe,translateY:oe,translateZ:oe,x:oe,y:oe,z:oe,perspective:oe,transformPerspective:oe,opacity:Vs,originX:Ac,originY:Ac,originZ:oe,zIndex:$c,filter:Ro,WebkitFilter:Ro,fillOpacity:Vs,strokeOpacity:Vs,numOctaves:$c},Ea=e=>Dp[e],Bp=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function hA(e,t){let n=Ea(e);return n!==Ro&&(n=$a),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const mA={linear:op,easeIn:Aa,easeInOut:ap,easeOut:y6,circIn:ip,circInOut:_6,circOut:cp,backIn:xa,backInOut:b6,backOut:v6,anticipate:w6,bounceIn:C6,bounceInOut:$6,bounceOut:Kl},Ec=e=>{if(Array.isArray(e)){const[t,n,l,r]=e;return G6(t,n,l,r)}else if(typeof e=="string")return mA[e];return e},gA=e=>Array.isArray(e)&&typeof e[0]!="number",Dc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&$a.test(t)&&!t.startsWith("url("));function yA(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function _A(r){var o=r,{ease:e,times:t,delay:n}=o,l=yr(o,["ease","times","delay"]);const a=ve({},l);return t&&(a.offset=t),e&&(a.ease=gA(e)?e.map(Ec):Ec(e)),n&&(a.elapsed=-n),a}function vA(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),yA(t),bA(e)||(e=ve(ve({},e),Ep(n,t.to))),ve(ve({},t),_A(e))}function bA(a){var i=a,{delay:e,repeat:t,repeatType:n,repeatDelay:l,from:r}=i,o=yr(i,["delay","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(o).length}function wA(e,t){return e[t]||e.default||e}function AA(e,t,n,l,r){const o=wA(l,e);let a=o.from===null||o.from===void 0?t.get():o.from;const i=Dc(e,n);a==="none"&&i&&typeof n=="string"&&(a=hA(e,n));const c=Dc(e,a);function f(h){const d={from:a,to:n,velocity:l.velocity?l.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return o.type==="inertia"||o.type==="decay"?U6(ve(ve({},d),o)):hp(Qe(ve({},vA(o,d,e)),{onUpdate:m=>{d.onUpdate(m),o.onUpdate&&o.onUpdate(m)},onComplete:()=>{l.onComplete&&l.onComplete(),r&&r(),h&&h()}}))}function p(h){return t.set(n),l.onComplete&&l.onComplete(),r&&r(),h&&h(),{stop:()=>{}}}return!c||!i||o.type===!1?p:f}function xA(){const{motionValues:e,stop:t,get:n}=uA();return{motionValues:e,stop:t,push:(r,o,a,i={},c)=>{const f=a[r],p=n(r,f,a);if(i&&i.immediate){p.set(o);return}const h=AA(r,p,o,i,c);p.start(h)}}}function kA(e,t={},{motionValues:n,push:l,stop:r}=xA()){const o=v(t),a=z(!1),i=ce(n,d=>{a.value=Object.values(d).filter(m=>m.isAnimating()).length>0},{immediate:!0,deep:!0}),c=d=>{if(!o||!o[d])throw new Error(`The variant ${d} does not exist.`);return o[d]},f=d=>(typeof d=="string"&&(d=c(d)),Promise.all(Object.entries(d).map(([m,y])=>{if(m!=="transition")return new Promise(w=>{l(m,y,e,d.transition||Ep(m,d[m]),w)})}).filter(Boolean)));return{isAnimating:a,apply:f,set:d=>{const m=Nl(d)?d:c(d);Object.entries(m).forEach(([y,w])=>{y!=="transition"&&l(y,w,e,{immediate:!0})})},stopTransitions:()=>{i(),r()},leave:async d=>{let m;if(o&&(o.leave&&(m=o.leave),!o.leave&&o.initial&&(m=o.initial)),!m){d();return}await f(m),d()}}}const Da=typeof window!="undefined",CA=()=>Da&&window.onpointerdown===null,$A=()=>Da&&window.ontouchstart===null,EA=()=>Da&&window.onmousedown===null;function DA({target:e,state:t,variants:n,apply:l}){const r=v(n),o=[],a=(...y)=>{const w=Me.apply(null,y);return o.push(w),w},i=z(!1),c=z(!1),f=z(!1),p=D(()=>{let y=[];return r&&(r.hovered&&(y=[...y,...Object.keys(r.hovered)]),r.tapped&&(y=[...y,...Object.keys(r.tapped)]),r.focused&&(y=[...y,...Object.keys(r.focused)])),y}),h=D(()=>{const y={};Object.assign(y,t.value),i.value&&r.hovered&&Object.assign(y,r.hovered),c.value&&r.tapped&&Object.assign(y,r.tapped),f.value&&r.focused&&Object.assign(y,r.focused);for(const w in y)p.value.includes(w)||delete y[w];return y});r.hovered&&(a(e,"mouseenter",()=>{i.value=!0}),a(e,"mouseleave",()=>{i.value=!1,c.value=!1}),a(e,"mouseout",()=>{i.value=!1,c.value=!1})),r.tapped&&(EA()&&(a(e,"mousedown",()=>{c.value=!0}),a(e,"mouseup",()=>{c.value=!1})),CA()&&(a(e,"pointerdown",()=>{c.value=!0}),a(e,"pointerup",()=>{c.value=!1})),$A()&&(a(e,"touchstart",()=>{c.value=!0}),a(e,"touchend",()=>{c.value=!1}))),r.focused&&(a(e,"focus",()=>{f.value=!0}),a(e,"blur",()=>{f.value=!1}));const d=ce(h,l);return{stop:()=>{o.forEach(y=>y()),d()}}}function BA({set:e,target:t,variants:n,variant:l}){const r=v(n);return{stop:ce(()=>t,()=>{!r||(r.initial&&e("initial"),r.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}}function OA({state:e,apply:t}){return{stop:ce(e,l=>{l&&t(l)},{immediate:!0})}}function PA({target:e,variants:t,variant:n}){const l=v(t);let r=cn;if(l&&(l.visible||l.visibleOnce)){const{stop:o}=Kg(e,([{isIntersecting:a}])=>{l.visible?a?n.value="visible":n.value="initial":l.visibleOnce&&(a?n.value!=="visibleOnce"&&(n.value="visibleOnce"):n.value||(n.value="initial"))});r=o}return{stop:r}}function SA(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const n=z([]);if(t.lifeCycleHooks){const{stop:r}=BA(e);n.value.push(r)}if(t.syncVariants){const{stop:r}=OA(e);n.value.push(r)}if(t.visibilityHooks){const{stop:r}=PA(e);n.value.push(r)}if(t.eventListeners){const{stop:r}=DA(e);n.value.push(r)}const l=()=>n.value.forEach(r=>r());return sa(l),{stop:l}}function Op(e={}){const t=Re(ve({},e)),n=z({});return ce(t,()=>{const l={};for(const[r,o]of Object.entries(t)){const a=Ea(r),i=Bp(o,a);l[r]=i}n.value=l},{immediate:!0,deep:!0}),{state:t,style:n}}const MA=["","X","Y","Z"],TA=["perspective","translate","scale","rotate","skew"],Pp=["transformPerspective","x","y","z"];TA.forEach(e=>{MA.forEach(t=>{const n=e+t;Pp.push(n)})});const FA=new Set(Pp);function Ba(e){return FA.has(e)}const RA=new Set(["originX","originY","originZ"]);function Sp(e){return RA.has(e)}function IA(e){const t={},n={};return Object.entries(e).forEach(([l,r])=>{Ba(l)||Sp(l)?t[l]=r:n[l]=r}),{transform:t,style:n}}function LA(e,t){let n,l;const{state:r,style:o}=Op(),a=ce(()=>ot(e),f=>{if(!!f){l=f;for(const p of Object.keys(Dp))f.style[p]===null||f.style[p]===""||Ba(p)||Sp(p)||rt(r,p,f.style[p]);n&&Object.entries(n).forEach(([p,h])=>rt(f.style,p,h)),t&&t(r)}},{immediate:!0}),i=ce(o,f=>{if(!l){n=f;return}for(const p in f)rt(l.style,p,f[p])},{immediate:!0});return{style:r,stop:()=>{l=void 0,n=void 0,a(),i()}}}const NA={x:"translateX",y:"translateY",z:"translateZ"};function Mp(e={},t=!0){const n=Re(ve({},e)),l=z("");return ce(n,r=>{let o="",a=!1;t&&(r.x||r.y||r.z)&&(o+=`translate3d(${[r.x||0,r.y||0,r.z||0].map(oe.transform).join(",")}) `,a=!0);for(const[i,c]of Object.entries(r)){if(t&&(i==="x"||i==="y"||i==="z"))continue;const f=Ea(i),p=Bp(c,f);o+=`${NA[i]||i}(${p}) `}t&&!a&&(o+="translateZ(0px) "),l.value=o.trim()},{immediate:!0,deep:!0}),{state:n,transform:l}}function jA(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=l=>l.endsWith("px")||l.endsWith("deg")?parseFloat(l):isNaN(Number(l))?Number(l):l;return t.reduce((l,r)=>{if(!r)return l;const[o,a]=r.split("("),c=a.split(",").map(p=>n(p.endsWith(")")?p.replace(")",""):p.trim())),f=c.length===1?c[0]:c;return Qe(ve({},l),{[o]:f})},{})}function HA(e,t){Object.entries(jA(t)).forEach(([n,l])=>{l=parseFloat(l);const r=["x","y","z"];if(n==="translate3d"){if(l===0){r.forEach(o=>{rt(e,o,0)});return}l.forEach((o,a)=>{rt(e,r[a],o)});return}if(n==="translateX"){rt(e,"x",l);return}if(n==="translateY"){rt(e,"y",l);return}if(n==="translateZ"){rt(e,"z",l);return}rt(e,n,l)})}function VA(e,t){let n,l;const{state:r,transform:o}=Mp(),a=ce(()=>ot(e),f=>{!f||(l=f,f.style.transform&&HA(r,f.style.transform),n&&(f.style.transform=n),t&&t(r))},{immediate:!0}),i=ce(o,f=>{if(!l){n=f;return}l.style.transform=f},{immediate:!0});return{transform:r,stop:()=>{n=void 0,l=void 0,a(),i()}}}function UA(e,t){const n=Re({}),l=h=>{Object.entries(h).forEach(([d,m])=>{rt(n,d,m)})},{style:r,stop:o}=LA(e,l),{transform:a,stop:i}=VA(e,l),c=ce(n,h=>{Object.entries(h).forEach(([d,m])=>{const y=Ba(d)?a:r;y[d]&&y[d]===m||rt(y,d,m)})},{immediate:!0,deep:!0}),f=ce(()=>ot(e),h=>{!h||t&&l(t)},{immediate:!0});return{motionProperties:n,style:r,transform:a,stop:()=>{o(),i(),c(),f()}}}function zA(e={}){const t=v(e),n=z();return{state:D(()=>{if(!!n.value)return t[n.value]}),variant:n}}function WA(e,t={},n){const{motionProperties:l,stop:r}=UA(e),{variant:o,state:a}=zA(t),i=kA(l,t),c=Qe(ve({target:e,variant:o,variants:t,state:a,motionProperties:l},i),{stop:(p=!1)=>{}}),{stop:f}=SA(c,n);return c.stop=(p=!1)=>{const h=()=>{c.stopTransitions(),r(),f()};if(!p&&t.value&&t.value.leave){const d=ce(c.isAnimating,m=>{m||(d(),h())})}else h()},sa(()=>c.stop()),cg(()=>ot(e),p=>{!p||p!=null&&p.motionInstance&&(c.stop(),Object.assign(c,p.motionInstance))}),c}const KA=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],qA=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&Nl(n.variants)&&(t.value=ve(ve({},t.value),n.variants)),KA.forEach(l=>{if(l==="delay"){if(n&&n[l]&&zm(n[l])){const r=n[l];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition=Qe(ve({},t.value.enter.transition),{delay:r})),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition=Qe(ve({},t.value.visible.transition),{delay:r})),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition=Qe(ve({},t.value.visibleOnce.transition),{delay:r})))}return}l==="visible-once"&&(l="visibleOnce"),n&&n[l]&&Nl(n[l])&&(t.value[l]=n[l])}))},Ur=e=>{const t=(l,r,o)=>{const a=r.value&&typeof r.value=="string"?r.value:o.key;a&&jr[a]&&jr[a].stop();const i=z(e||{});typeof r.value=="object"&&(i.value=r.value),qA(o,i);const c=WA(l,i);l.motionInstance=c,a&&rt(jr,a,c)},n=l=>{l.motionInstance&&l.motionInstance.stop()};return{created:t,unmounted:n,bind:t,unbind:n,getSSRProps(l,r){const{initial:o}=l.value||r&&r.props||{},a=Sw((e==null?void 0:e.initial)||{},o||{});if(!a||Object.keys(a).length===0)return;const{transform:i,style:c}=IA(a),{transform:f}=Mp(i),{style:p}=Op(c);return f.value&&(p.value.transform=f.value),{style:p.value}}}},YA={initial:{opacity:0},enter:{opacity:1}},ZA={initial:{opacity:0},visible:{opacity:1}},GA={initial:{opacity:0},visibleOnce:{opacity:1}},XA={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},JA={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},QA={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},e8={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},t8={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},n8={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},s8={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},l8={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},r8={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},o8={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},a8={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},i8={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},c8={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},u8={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},f8={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},p8={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},d8={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},h8={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},m8={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},g8={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},y8={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},_8={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},v8={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},b8={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},w8={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},A8={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},x8={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Bc={__proto__:null,fade:YA,fadeVisible:ZA,fadeVisibleOnce:GA,pop:XA,popVisible:JA,popVisibleOnce:QA,rollBottom:c8,rollLeft:e8,rollRight:s8,rollTop:o8,rollVisibleBottom:u8,rollVisibleLeft:t8,rollVisibleRight:l8,rollVisibleTop:a8,rollVisibleOnceBottom:f8,rollVisibleOnceLeft:n8,rollVisibleOnceRight:r8,rollVisibleOnceTop:i8,slideBottom:w8,slideLeft:p8,slideRight:m8,slideTop:_8,slideVisibleBottom:A8,slideVisibleLeft:d8,slideVisibleRight:g8,slideVisibleTop:v8,slideVisibleOnceBottom:x8,slideVisibleOnceLeft:h8,slideVisibleOnceRight:y8,slideVisibleOnceTop:b8};function k8(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",l=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(l,r=>n.charAt(t.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const C8={install(e,t){if(e.directive("motion",Ur()),!t||t&&!t.excludePresets)for(const n in Bc){const l=Bc[n];e.directive(`motion-${k8(n)}`,Ur(l))}if(t&&t.directives)for(const n in t.directives){const l=t.directives[n];l.initial,e.directive(`motion-${n}`,Ur(l))}}},Oa="vue-starport-injection",Tp="vue-starport-options",$8={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Fp={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var E8=Object.defineProperty,Yl=Object.getOwnPropertySymbols,Rp=Object.prototype.hasOwnProperty,Ip=Object.prototype.propertyIsEnumerable,Oc=(e,t,n)=>t in e?E8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D8=(e,t)=>{for(var n in t||(t={}))Rp.call(t,n)&&Oc(e,n,t[n]);if(Yl)for(var n of Yl(t))Ip.call(t,n)&&Oc(e,n,t[n]);return e},Pc=(e,t)=>{var n={};for(var l in e)Rp.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&Yl)for(var l of Yl(e))t.indexOf(l)<0&&Ip.call(e,l)&&(n[l]=e[l]);return n};const B8=ye({name:"StarportProxy",props:D8({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Fp),setup(e,t){const n=H(Oa),l=D(()=>n.getInstance(e.port,e.component)),r=z(),o=l.value.generateId(),a=z(!1);return l.value.isVisible||(l.value.land(),a.value=!0),fs(async()=>{l.value.el||(l.value.el=r.value,await qe(),a.value=!0,l.value.rect.update())}),or(async()=>{l.value.rect.update(),l.value.liftOff(),l.value.el=void 0,a.value=!1,!l.value.options.keepAlive&&(await qe(),await qe(),!l.value.el&&n.dispose(l.value.port))}),ce(()=>e,async()=>{l.value.props&&await qe();const i=e,{props:c}=i,f=Pc(i,["props"]);l.value.props=c||{},l.value.setLocalOptions(f)},{deep:!0,immediate:!0}),()=>{const i=e,{initialProps:c,mountedProps:f}=i,p=Pc(i,["initialProps","mountedProps"]),h=Ie(p,(a.value?f:c)||{});return Tt("div",Ie(h,{id:o,ref:r,"data-starport-proxy":l.value.componentId,"data-starport-landed":l.value.isLanded?"true":void 0,"data-starport-floating":l.value.isLanded?void 0:"true"}),t.slots.default?Tt(t.slots.default):void 0)}}});var O8=Object.defineProperty,P8=Object.defineProperties,S8=Object.getOwnPropertyDescriptors,Sc=Object.getOwnPropertySymbols,M8=Object.prototype.hasOwnProperty,T8=Object.prototype.propertyIsEnumerable,Mc=(e,t,n)=>t in e?O8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,F8=(e,t)=>{for(var n in t||(t={}))M8.call(t,n)&&Mc(e,n,t[n]);if(Sc)for(var n of Sc(t))T8.call(t,n)&&Mc(e,n,t[n]);return e},R8=(e,t)=>P8(e,S8(t));const I8=ye({name:"Starport",inheritAttrs:!0,props:Fp,setup(e,t){const n=z(!1);return fs(()=>{n.value=!0}),()=>{var a,i;const l=(i=(a=t.slots).default)==null?void 0:i.call(a);if(!l)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(l.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${l.length}`);const r=l[0];let o=r.type;return(!Nl(o)||ls(o))&&(o={render(){return l}}),Tt(B8,R8(F8({},e),{key:e.port,component:er(o),props:r.props}))}}});function L8(e){const t=Re({height:0,width:0,left:0,top:0,update:l,listen:o,pause:a}),n=kt?document.documentElement||document.body:void 0;function l(){if(!kt)return;const i=ot(e);if(!i)return;const{height:c,width:f,left:p,top:h}=i.getBoundingClientRect();Object.assign(t,{height:c,width:f,left:p,top:n.scrollTop+h})}const r=Xu(l,{immediate:!1});function o(){!kt||(l(),r.resume())}function a(){r.pause()}return t}let N8="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",j8=(e,t=21)=>(n=t)=>{let l="",r=n;for(;r--;)l+=e[Math.random()*e.length|0];return l},H8=(e=21)=>{let t="",n=e;for(;n--;)t+=N8[Math.random()*64|0];return t};var V8={nanoid:H8,customAlphabet:j8};const Tc=V8.customAlphabet("abcdefghijklmnopqrstuvwxyz",5);function Fc(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function U8(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var z8=Object.defineProperty,Rc=Object.getOwnPropertySymbols,W8=Object.prototype.hasOwnProperty,K8=Object.prototype.propertyIsEnumerable,Ic=(e,t,n)=>t in e?z8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zr=(e,t)=>{for(var n in t||(t={}))W8.call(t,n)&&Ic(e,n,t[n]);if(Rc)for(var n of Rc(t))K8.call(t,n)&&Ic(e,n,t[n]);return e};function q8(e,t,n={}){const l=U8(t),r=Fc(l)||Tc(),o=z(),a=z(null),i=z(!1),c=z(!1),f=ed(!0),p=z({}),h=D(()=>zr(zr(zr({},$8),n),p.value)),d=z(0);let m;f.run(()=>{m=L8(o),ce(o,async $=>{$&&(c.value=!0),await qe(),o.value||(c.value=!1)})});const y=Fc(e);function w(){return`starport-${r}-${y}-${Tc()}`}const b=w();return Re({el:o,id:b,port:e,props:a,rect:m,scope:f,isLanded:i,isVisible:c,options:h,liftOffTime:d,component:t,componentName:l,componentId:r,generateId:w,setLocalOptions($={}){p.value=JSON.parse(JSON.stringify($))},elRef(){return o},liftOff(){!i.value||(i.value=!1,d.value=Date.now(),m.listen())},land(){i.value||(i.value=!0,m.pause())}})}function Y8(e){const t=Re(new Map);function n(r,o){let a=t.get(r);return a||(a=q8(r,o,e),t.set(r,a)),a.component=o,a}function l(r){var o;(o=t.get(r))==null||o.scope.stop(),t.delete(r)}return{portMap:t,dispose:l,getInstance:n}}var Z8=Object.defineProperty,G8=Object.defineProperties,X8=Object.getOwnPropertyDescriptors,Lc=Object.getOwnPropertySymbols,J8=Object.prototype.hasOwnProperty,Q8=Object.prototype.propertyIsEnumerable,Nc=(e,t,n)=>t in e?Z8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ex=(e,t)=>{for(var n in t||(t={}))J8.call(t,n)&&Nc(e,n,t[n]);if(Lc)for(var n of Lc(t))Q8.call(t,n)&&Nc(e,n,t[n]);return e},tx=(e,t)=>G8(e,X8(t));const nx=ye({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=H(Oa);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=D(()=>t.getInstance(e.port,e.component)),l=D(()=>{var a;return((a=n.value.el)==null?void 0:a.id)||n.value.id}),r=D(()=>{const a=Date.now()-n.value.liftOffTime,i=Math.max(0,n.value.options.duration-a),c=n.value.rect,f={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?tx(ex({},f),{zIndex:-1,display:"none"}):(n.value.isLanded?f.display="none":Object.assign(f,{transitionProperty:"all",transitionDuration:`${i}ms`,transitionTimingFunction:n.value.options.easing}),f)}),o={};return()=>{const a=!!(n.value.isLanded&&n.value.el);return Tt("div",{style:r.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},Tt(Eh,{to:a?`#${l.value}`:"body",disabled:!a},Tt(n.value.component,Ie(o,n.value.props))))}}}),sx=ye({name:"StarportCarrier",setup(e,{slots:t}){const n=Y8(H(Tp,{}));return Fn().appContext.app.provide(Oa,n),()=>{var r;return[(r=t.default)==null?void 0:r.call(t),Array.from(n.portMap.entries()).map(([o,{component:a}])=>Tt(nx,{key:o,port:o,component:a}))]}}});function lx(e={}){return{install(t){t.provide(Tp,e),t.component("Starport",I8),t.component("StarportCarrier",sx)}}}function rx(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(C8),e.app.use(lx({keepAlive:!0}))}function ut(e,t,n){var l,r;return(r=((l=e.instance)==null?void 0:l.$).provides[t])!=null?r:n}function ox(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var p,h,d,m;if(Ls.value||((p=ut(n,Ts))==null?void 0:p.value))return;const l=ut(n,An),r=ut(n,Ms),o=ut(n,io),a=n.modifiers.hide!==!1&&n.modifiers.hide!=null,i=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((h=l==null?void 0:l.value)==null?void 0:h.length)||0,f=i?$m:Cr;if(l&&!((d=l==null?void 0:l.value)!=null&&d.includes(t))&&l.value.push(t),n.value===null&&(n.value=l==null?void 0:l.value.length),!(o!=null&&o.value.has(n.value)))o==null||o.value.set(n.value,[t]);else if(!((m=o==null?void 0:o.value.get(n.value))!=null&&m.includes(t))){const y=(o==null?void 0:o.value.get(n.value))||[];o==null||o.value.set(n.value,[t].concat(y))}t==null||t.classList.toggle(bn,!0),r&&ce(r,()=>{var $;const y=($=r==null?void 0:r.value)!=null?$:0,w=n.value!=null?y>=n.value:y>c;t.classList.contains($r)||t.classList.toggle(f,!w),a!==!1&&a!==void 0&&t.classList.toggle(f,w),t.classList.toggle(vs,!1);const b=o==null?void 0:o.value.get(y);b==null||b.forEach((x,C)=>{x.classList.toggle(bl,!1),C===b.length-1?x.classList.toggle(vs,!0):x.classList.toggle(bl,!0)}),t.classList.contains(vs)||t.classList.toggle(bl,w)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(bn,!1);const l=ut(n,An);l!=null&&l.value&&co(l.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var i,c;if(Ls.value||((i=ut(n,Ts))==null?void 0:i.value))return;const l=ut(n,An),r=ut(n,Ms),o=ut(n,io),a=l==null?void 0:l.value.length;n.value===void 0&&(n.value=l==null?void 0:l.value.length),o!=null&&o.value.has(n.value)?(c=o==null?void 0:o.value.get(n.value))==null||c.push(t):o==null||o.value.set(n.value,[t]),t==null||t.classList.toggle(bn,!0),r&&ce(r,()=>{var p,h,d;const f=((p=r.value)!=null?p:0)>=((d=(h=n.value)!=null?h:a)!=null?d:0);t.classList.contains($r)||t.classList.toggle(Cr,!f),t.classList.toggle(vs,!1),t.classList.contains(vs)||t.classList.toggle(bl,f)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(bn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var a,i,c;if(Ls.value||((a=ut(n,Ts))==null?void 0:a.value))return;const l=ut(n,An),r=ut(n,Ms),o=((i=l==null?void 0:l.value)==null?void 0:i.length)||0;l&&!((c=l==null?void 0:l.value)!=null&&c.includes(t))&&l.value.push(t),t==null||t.classList.toggle(bn,!0),r&&ce(r,()=>{var h;const f=(h=r==null?void 0:r.value)!=null?h:0,p=n.value!=null?f>=n.value:f>o;t.classList.toggle(Cr,p),t.classList.toggle($r,p)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(bn,!1);const l=ut(n,An);l!=null&&l.value&&co(l.value,t)}})}}}function ax(e,t){const n=Df(e),l=Bf(t,n.currentRoute,n.currentPage);return{nav:Qe(ve(ve({},n),l),{downloadPDF:Co,next:un,nextSlide:tl,openInEditor:Dw,prev:fn,prevSlide:nl}),configs:xe,themeConfigs:D(()=>xe.themeConfig)}}function ix(){return{install(e){const t=ax(Xt,Ft);e.provide(Z,Re(t))}}}const ms=im(Ow);ms.use(yt);ms.use(wm());ms.use(ox());ms.use(ix());rx({app:ms,router:yt});ms.mount("#app");export{ks as $,F as A,wf as B,q as C,Ve as D,If as E,tt as F,be as G,f0 as H,Ce as I,ux as J,fx as K,Ft as L,zl as M,xw as N,Tr as O,Er as P,Js as Q,Sr as R,mv as S,ia as T,ca as U,pv as V,b0 as W,Rt as X,px as Y,vt as Z,Cf as _,s as a,wl as a0,al as a1,wo as a2,Vy as a3,Uy as a4,zy as a5,Ky as a6,Ys as a7,Nu as a8,gx as a9,Vt as aa,nt as ab,e_ as ac,$n as ad,Hu as ae,qy as af,or as ag,D as b,V as c,ye as d,Z as e,dt as f,X as g,v as h,H as i,t0 as j,Ew as k,xe as l,xm as m,Fe as n,k as o,fs as p,Re as q,z as r,dx as s,Sn as t,hx as u,mx as v,ce as w,O as x,We as y,Uu as z};
