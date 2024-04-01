(function(y,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue"),require("element-plus")):typeof define=="function"&&define.amd?define(["exports","vue","element-plus"],t):(y=typeof globalThis<"u"?globalThis:y||self,t(y.HCondition={},y.Vue,y.ElementPlus))})(this,function(y,t,m){"use strict";function Ye(e,n,o){return Array.isArray(e)?(e.length=Math.max(e.length,n),e.splice(n,1,o),o):(e[n]=o,o)}function fe(e,n){if(Array.isArray(e)){e.splice(n,1);return}delete e[n]}const Xe=t.version.slice(0,3)==="2.7",z="condition-wrapper";function Ro(e){return e}function jo(e){return e}function Je(e){const n=[];t.onBeforeUnmount(()=>n.splice(0));const o={};let r=!1,i=[];const l={realtime:t.ref(e.realtime),register(p){n.push(p);const h=()=>{r=!0,p.reset(),p.updateWrapperQuery();const $=n.indexOf(p);$!==-1&&n.splice($,1),e.searchAtDatumChanged&&f(),r=!1,i.forEach(B=>{fe(s.value,B),delete o[B]}),i=[]},S=t.getCurrentInstance();return S&&t.onBeforeUnmount(h,Xe?S.proxy:S),h},updateQueryValue(p,h){r&&i.push(p),Ye(s.value,p,h),o[p]=h},insetSearch(){e.realtime&&f()},search:f,removeUnreferencedField(p){let h=0;n.some(S=>(S.getQuery().hasOwnProperty(p)&&(h+=1),h)),h||(fe(s.value,p),delete o[p])}};t.provide(z,l);const s=t.ref({...e.backfill}),c=()=>({...s.value,...e.backfill,...o});async function f(){var h,S;const p=await E();p?(h=e.toast)==null||h.call(e,p):(S=e.search)==null||S.call(e,c())}function k(){var p;n.forEach(h=>{h.reset(),h.updateWrapperQuery()}),(p=e.reset)==null||p.call(e,c())}async function E(){return(await Promise.all(n.map(h=>{var S;return(S=h.validator)==null?void 0:S.call(h,s.value)}))).find(h=>h&&typeof h=="string")}return{child:n,wrapperInstance:l,query:s,getQuery:c,search:f,reset:k,validate:E}}const Ze={realtime:{type:Boolean,default:void 0},searchAtDatumChanged:{type:Boolean,default:void 0},backfill:{type:Object},toast:{type:Function,default:void 0}};function K(e,n){return Array.isArray(e)?e.filter(Boolean).length?e:n:typeof e=="number"?e:e||n}function ue(e,n,o="children"){var r;for(const i of e){if(n(i))return[i];if((r=i[o])!=null&&r.length){const l=ue(i[o],n);if(l.length)return l.unshift(i),l}}return[]}function R(e,...n){return typeof e=="function"?e(...n):typeof e=="string"?e:t.markRaw(e)}function pe(e){const n=t.ref();return t.computed({set(r){n.value=r},get(){return n.value===void 0?e.defaultValue!==void 0?typeof e.defaultValue=="function"?e.defaultValue(e.query,e.backfill):e.defaultValue:void 0:n.value}})}function me(e,n){const o=t.ref(typeof e.disabled=="boolean"?e.disabled:!1),r=t.ref(typeof e.hide=="boolean"?e.hide:!1),i=()=>({query:e.query,backfill:e.backfill,option:n}),l=()=>{if(typeof e.hide=="function"){const c=r.value,f=e.hide(i());c!==f&&(r.value=e.hide(i()))}else if(typeof e.disabled=="function"){const c=o.value,f=e.disabled(i());c!==f&&(o.value=e.disabled(i()))}};let s=[t.watch(()=>e.query,l,{immediate:!0,deep:!0}),t.watch(()=>[e.disabled,e.hide],(c,f)=>{c[0]!==f[0]&&(o.value=typeof c[0]=="boolean"?c[0]:!1,c[0]),c[1]!==f[1]&&(r.value=typeof c[1]=="boolean"?c[1]:!1,c[1]),l()})];return t.onBeforeUnmount(()=>(s.forEach(c=>c()),s=[])),{insetDisabled:o,insetHide:r}}function W(e=!0){const n=t.ref(e);return{flag:n,updateFlag:()=>{n.value=!e,t.nextTick(()=>{n.value=e})}}}function L(e){return(e==null?void 0:e.toString())??""}function H(e){var U;const n=t.inject(z),o=pe(e),r=e.backfill&&((U=e.fields)!=null&&U.length?e.fields.map(u=>e.backfill[u]).filter(Boolean):e.backfill[e.field]),i=t.ref(r||(e.defaultValue!==void 0?o.value:e.multiple?[]:"").slice()),l=t.ref([]),s=t.computed(()=>l.value.length?l.value:e.options),c=()=>e.customGetQuery?e.customGetQuery(i.value,K,e):e.multiple&&e.fields?e.fields.reduce((u,b,a)=>{var d;return u[b]=K((d=i.value)==null?void 0:d[a],e.emptyValue),u},{}):{[e.field]:K(i.value,e.emptyValue)},{flag:f,updateFlag:k}=W(),{flag:E,updateFlag:p}=W(),h={reset(){var b;const{multiple:u}=e;k(),p(),i.value=e.resetToInitialValue&&((b=o.value)==null?void 0:b.slice())||(u?[]:"")},updateWrapperQuery(){k(),n&&Object.entries(c()).forEach(([u,b])=>n.updateQueryValue(u,b))},get validator(){return e.validator},getQuery:c};n==null||n.register(h);const{insetDisabled:S,insetHide:$}=me(e,h);!r&&e.defaultValue&&h.updateWrapperQuery();const B=[];t.onBeforeUnmount(()=>B.forEach(u=>u())),B.push(t.watch(()=>e.field,(u,b)=>{u!==b&&(n==null||n.removeUnreferencedField(b)),h.updateWrapperQuery()})),B.push(t.watch(()=>[e.fields||e.field,e.fields?e.fields.map(u=>e.query[u]).filter(Boolean):e.query[e.field]],([u,b],[a])=>{const d=e.backfillToValue(b,u,e.query);u.toString()!==a.toString()||L(d)===L(i.value)||f.value&&(i.value=d)})),B.push(t.watch(()=>{var u;return[e.fields||e.field,e.fields?e.fields.map(b=>{var a;return(a=e.backfill)==null?void 0:a[b]}).filter(Boolean):(u=e.backfill)==null?void 0:u[e.field]]},([u,b],[a])=>{const d=e.backfillToValue(b,u,e.backfill);u.toString()!==a.toString()||L(d)===L(i.value)||(p(),w(d))})),B.push(t.watch(()=>[e.depend,e.dependFields,e.dependFields&&[].concat(e.dependFields).map(u=>{var b;return(b=e.query)==null?void 0:b[u]}).join(",")||""],([u,b,a],[d,g,C])=>{E.value&&a!==C&&(te("depend"),!(u!==d||(b==null?void 0:b.toString())!==(g==null?void 0:g.toString()))&&(i.value===void 0||i.value.toString()===""||w(e.multiple?[]:"")))})),B.push(t.watch(()=>e.getOptions,te.bind(null,"initial"),{immediate:!0}));function te(u){var b;(b=e.getOptions)==null||b.call(e,a=>{const d=i.value;i.value=void 0,l.value=a||[],i.value=d},e.query||{},{trigger:u,change:(a,d)=>{d&&(o.value=a),T(a)},search:(a,d)=>{d&&(o.value=a),w(a),n==null||n.search()}})}function w(u){u!==i.value&&(i.value=u,h.updateWrapperQuery())}function T(u){w(u),n==null||n.insetSearch()}return{wrapper:n,option:h,checked:i,getQuery:c,insetDisabled:S,insetHide:$,finalOption:s,updateCheckedValue:w,change:T,reset:h.reset}}const he={field:{type:String,required:!0},query:{type:Object,required:!0},backfill:{type:Object},disabled:{type:[Boolean,Function]},hide:{type:[Boolean,Function]},depend:{type:Boolean},dependFields:{type:[String,Array]},resetToInitialValue:{type:[Boolean]},emptyValue:{type:[String,Number,null,void 0]},validator:{type:[Function]},customGetQuery:{type:Function},defaultValue:{type:[String,Array,Function]}},G={...he,fields:{type:[Array]},backfillToValue:{type:Function,default:e=>e},multiple:{type:Boolean,default:void 0},options:{type:Array,default:()=>[]},getOptions:{type:Function}};function Y(e){return(e==null?void 0:e.toString())??""}function xe(e){var b;const n=t.inject(z),o=pe(e),r=t.ref([]),i=t.ref([]),l=t.computed(()=>i.value.length?i.value:e.options),s=()=>{var a;return!B.value&&!o.value?{}:e.customGetQuery?e.customGetQuery(r.value,K,e):(a=e.fields)!=null&&a.length?e.fields.reduce((d,g,C)=>Object.assign(d,{[g]:K(r.value[C],e.emptyValue)}),{}):{[e.field]:K(e.emitPath?[...r.value]:r.value.slice(-1)[0],e.emptyValue)}},{flag:c,updateFlag:f}=W(),{flag:k,updateFlag:E}=W(),p={reset(){var a;return f(),E(),r.value=e.resetToInitialValue&&((a=o.value)==null?void 0:a.slice())||[],this},get validator(){return e.validator},updateWrapperQuery(){f(),n&&Object.entries(s()).forEach(([a,d])=>n.updateQueryValue(a,d))},getQuery:s};n==null||n.register(p);const{insetDisabled:h,insetHide:S}=me(e,p),$=[];t.onBeforeUnmount(()=>$.forEach(a=>a()));const B=t.ref(typeof e.getOptions!="function"||!!((b=e.fields)!=null&&b.length));t.watch(B,a=>a&&te(),{immediate:!0});function te(){var C;const{backfill:a,field:d,fields:g}=e;if(a){if(g){const P=g.reduce((ne,Le)=>(a[Le]&&ne.push(a[Le]),ne),[]);if(P.length){r.value=P,p.updateWrapperQuery();return}}else if(a[d]){r.value=u(a[d]),p.updateWrapperQuery();return}}(C=o.value)!=null&&C.length&&(r.value=typeof o.value=="string"?u(o.value):o.value.slice(),typeof o.value=="string"&&(o.value=r.value.slice()),p.updateWrapperQuery())}$.push(t.watch(()=>e.fields||[e.field],(a,d)=>{a.toString()!==d.toString()&&n&&d.forEach(g=>a.includes(g)||n.removeUnreferencedField(g)),p.updateWrapperQuery()})),$.push(t.watch(()=>{var a,d;return[((a=e.fields)==null?void 0:a.toString())||e.field,((d=e.fields)==null?void 0:d.map(g=>e.query[g]).filter(Boolean))||e.query[e.field]]},([a,d],[g,C])=>{a!==g||Y(d)===Y(C)||c.value&&(r.value=typeof d=="string"?u(d):d)})),$.push(t.watch(()=>{var a,d;return(a=e.fields)!=null&&a.length?e.fields.reduce((g,C)=>{var P;return(P=e.backfill)!=null&&P[C]&&g.push(e.backfill[C]),g},[]):(d=e.backfill)==null?void 0:d[e.field]},(a,d)=>{if(B.value&&Y(a)!==Y(d))if(E(),Array.isArray(a))T(a);else{if(!a&&a!==0){r.value.length&&(r.value=[]);return}T(u(a))}})),$.push(t.watch(()=>[e.depend,e.dependFields,e.dependFields&&[].concat(e.dependFields).map(a=>{var d;return(d=e.query)==null?void 0:d[a]}).join(",")||""],([a,d,g],[C,P,ne])=>{k.value&&g!==ne&&(w("depend"),!(a!==C||(d==null?void 0:d.toString())!==(P==null?void 0:P.toString()))&&r.value.length&&T(typeof r.value=="string"?"":[]))})),$.push(t.watch(()=>e.getOptions,w.bind(null,"initial"),{immediate:!0}));function w(a){var d;(d=e.getOptions)==null||d.call(e,g=>{i.value=g||[],B.value=!0},e.query||{},{trigger:a,change:(g,C)=>{C&&(o.value=g),U(g)},search:(g,C)=>{C&&(o.value=g),T(g),n==null||n.search()}})}function T(a){const d=Array.isArray(a)?a:u(a);d.join("")!==r.value.join("")&&(r.value=d,p.updateWrapperQuery())}function U(a){T(a||[]),n==null||n.insetSearch()}function u(a){if(!a&&a!==0)return[];const{valueKey:d,childrenKey:g}=e;return ue(l.value,C=>C[d]===a).map(C=>C[d],g).filter(Boolean)}return{wrapper:n,option:p,checked:r,getQuery:s,finalOption:l,insetDisabled:h,insetHide:S,change:U,reset:p.reset}}const ve={...he,fields:{type:[Array]},valueKey:{type:String,required:!0},childrenKey:{type:String},emitPath:{type:[Boolean],default:!1},options:{type:Array,default:()=>[]},getOptions:{type:Function}};var et=typeof global=="object"&&global&&global.Object===Object&&global;const tt=et;var nt=typeof self=="object"&&self&&self.Object===Object&&self,ot=tt||nt||Function("return this")();const oe=ot;var rt=oe.Symbol;const F=rt;var ye=Object.prototype,it=ye.hasOwnProperty,at=ye.toString,M=F?F.toStringTag:void 0;function lt(e){var n=it.call(e,M),o=e[M];try{e[M]=void 0;var r=!0}catch{}var i=at.call(e);return r&&(n?e[M]=o:delete e[M]),i}var ct=Object.prototype,st=ct.toString;function dt(e){return st.call(e)}var ft="[object Null]",ut="[object Undefined]",ge=F?F.toStringTag:void 0;function re(e){return e==null?e===void 0?ut:ft:ge&&ge in Object(e)?lt(e):dt(e)}function ie(e){return e!=null&&typeof e=="object"}var pt="[object Symbol]";function ae(e){return typeof e=="symbol"||ie(e)&&re(e)==pt}function mt(e,n){for(var o=-1,r=e==null?0:e.length,i=Array(r);++o<r;)i[o]=n(e[o],o,e);return i}var ht=Array.isArray;const q=ht;var yt=1/0,be=F?F.prototype:void 0,ke=be?be.toString:void 0;function Ee(e){if(typeof e=="string")return e;if(q(e))return mt(e,Ee)+"";if(ae(e))return ke?ke.call(e):"";var n=e+"";return n=="0"&&1/e==-yt?"-0":n}function X(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function gt(e){return e}var bt="[object AsyncFunction]",kt="[object Function]",Et="[object GeneratorFunction]",Ct="[object Proxy]";function St(e){if(!X(e))return!1;var n=re(e);return n==kt||n==Et||n==bt||n==Ct}var Bt=oe["__core-js_shared__"];const le=Bt;var Ce=function(){var e=/[^.]+$/.exec(le&&le.keys&&le.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function It(e){return!!Ce&&Ce in e}var $t=Function.prototype,Pt=$t.toString;function Ft(e){if(e!=null){try{return Pt.call(e)}catch{}try{return e+""}catch{}}return""}var Ot=/[\\^$.*+?()[\]{}|]/g,wt=/^\[object .+?Constructor\]$/,Tt=Function.prototype,Vt=Object.prototype,_t=Tt.toString,Dt=Vt.hasOwnProperty,Nt=RegExp("^"+_t.call(Dt).replace(Ot,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function At(e){if(!X(e)||It(e))return!1;var n=St(e)?Nt:wt;return n.test(Ft(e))}function Kt(e,n){return e==null?void 0:e[n]}function ce(e,n){var o=Kt(e,n);return At(o)?o:void 0}function Rt(e,n,o){switch(o.length){case 0:return e.call(n);case 1:return e.call(n,o[0]);case 2:return e.call(n,o[0],o[1]);case 3:return e.call(n,o[0],o[1],o[2])}return e.apply(n,o)}var jt=800,Ht=16,Gt=Date.now;function Mt(e){var n=0,o=0;return function(){var r=Gt(),i=Ht-(r-o);if(o=r,i>0){if(++n>=jt)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}function qt(e){return function(){return e}}var Qt=function(){try{var e=ce(Object,"defineProperty");return e({},"",{}),e}catch{}}();const J=Qt;var Ut=J?function(e,n){return J(e,"toString",{configurable:!0,enumerable:!1,value:qt(n),writable:!0})}:gt,zt=Mt(Ut);const Wt=zt;var Lt=9007199254740991,Yt=/^(?:0|[1-9]\d*)$/;function Se(e,n){var o=typeof e;return n=n??Lt,!!n&&(o=="number"||o!="symbol"&&Yt.test(e))&&e>-1&&e%1==0&&e<n}function Xt(e,n,o){n=="__proto__"&&J?J(e,n,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[n]=o}function Be(e,n){return e===n||e!==e&&n!==n}var Jt=Object.prototype,Zt=Jt.hasOwnProperty;function xt(e,n,o){var r=e[n];(!(Zt.call(e,n)&&Be(r,o))||o===void 0&&!(n in e))&&Xt(e,n,o)}var Ie=Math.max;function vt(e,n,o){return n=Ie(n===void 0?e.length-1:n,0),function(){for(var r=arguments,i=-1,l=Ie(r.length-n,0),s=Array(l);++i<l;)s[i]=r[n+i];i=-1;for(var c=Array(n+1);++i<n;)c[i]=r[i];return c[n]=o(s),Rt(e,this,c)}}var en=9007199254740991;function tn(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=en}var nn="[object Arguments]";function $e(e){return ie(e)&&re(e)==nn}var Pe=Object.prototype,on=Pe.hasOwnProperty,rn=Pe.propertyIsEnumerable,an=$e(function(){return arguments}())?$e:function(e){return ie(e)&&on.call(e,"callee")&&!rn.call(e,"callee")};const Fe=an;var ln=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,cn=/^\w*$/;function sn(e,n){if(q(e))return!1;var o=typeof e;return o=="number"||o=="symbol"||o=="boolean"||e==null||ae(e)?!0:cn.test(e)||!ln.test(e)||n!=null&&e in Object(n)}var dn=ce(Object,"create");const Q=dn;function fn(){this.__data__=Q?Q(null):{},this.size=0}function un(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}var pn="__lodash_hash_undefined__",mn=Object.prototype,hn=mn.hasOwnProperty;function yn(e){var n=this.__data__;if(Q){var o=n[e];return o===pn?void 0:o}return hn.call(n,e)?n[e]:void 0}var gn=Object.prototype,bn=gn.hasOwnProperty;function kn(e){var n=this.__data__;return Q?n[e]!==void 0:bn.call(n,e)}var En="__lodash_hash_undefined__";function Cn(e,n){var o=this.__data__;return this.size+=this.has(e)?0:1,o[e]=Q&&n===void 0?En:n,this}function V(e){var n=-1,o=e==null?0:e.length;for(this.clear();++n<o;){var r=e[n];this.set(r[0],r[1])}}V.prototype.clear=fn,V.prototype.delete=un,V.prototype.get=yn,V.prototype.has=kn,V.prototype.set=Cn;function Sn(){this.__data__=[],this.size=0}function Z(e,n){for(var o=e.length;o--;)if(Be(e[o][0],n))return o;return-1}var Bn=Array.prototype,In=Bn.splice;function $n(e){var n=this.__data__,o=Z(n,e);if(o<0)return!1;var r=n.length-1;return o==r?n.pop():In.call(n,o,1),--this.size,!0}function Pn(e){var n=this.__data__,o=Z(n,e);return o<0?void 0:n[o][1]}function Fn(e){return Z(this.__data__,e)>-1}function On(e,n){var o=this.__data__,r=Z(o,e);return r<0?(++this.size,o.push([e,n])):o[r][1]=n,this}function j(e){var n=-1,o=e==null?0:e.length;for(this.clear();++n<o;){var r=e[n];this.set(r[0],r[1])}}j.prototype.clear=Sn,j.prototype.delete=$n,j.prototype.get=Pn,j.prototype.has=Fn,j.prototype.set=On;var wn=ce(oe,"Map");const Tn=wn;function Vn(){this.size=0,this.__data__={hash:new V,map:new(Tn||j),string:new V}}function _n(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function x(e,n){var o=e.__data__;return _n(n)?o[typeof n=="string"?"string":"hash"]:o.map}function Dn(e){var n=x(this,e).delete(e);return this.size-=n?1:0,n}function Nn(e){return x(this,e).get(e)}function An(e){return x(this,e).has(e)}function Kn(e,n){var o=x(this,e),r=o.size;return o.set(e,n),this.size+=o.size==r?0:1,this}function _(e){var n=-1,o=e==null?0:e.length;for(this.clear();++n<o;){var r=e[n];this.set(r[0],r[1])}}_.prototype.clear=Vn,_.prototype.delete=Dn,_.prototype.get=Nn,_.prototype.has=An,_.prototype.set=Kn;var Rn="Expected a function";function se(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new TypeError(Rn);var o=function(){var r=arguments,i=n?n.apply(this,r):r[0],l=o.cache;if(l.has(i))return l.get(i);var s=e.apply(this,r);return o.cache=l.set(i,s)||l,s};return o.cache=new(se.Cache||_),o}se.Cache=_;var jn=500;function Hn(e){var n=se(e,function(r){return o.size===jn&&o.clear(),r}),o=n.cache;return n}var Gn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Mn=/\\(\\)?/g,qn=Hn(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(Gn,function(o,r,i,l){n.push(i?l.replace(Mn,"$1"):r||o)}),n});const Qn=qn;function Un(e){return e==null?"":Ee(e)}function v(e,n){return q(e)?e:sn(e,n)?[e]:Qn(Un(e))}var zn=1/0;function de(e){if(typeof e=="string"||ae(e))return e;var n=e+"";return n=="0"&&1/e==-zn?"-0":n}function Wn(e,n){n=v(n,e);for(var o=0,r=n.length;e!=null&&o<r;)e=e[de(n[o++])];return o&&o==r?e:void 0}function Ln(e,n){for(var o=-1,r=n.length,i=e.length;++o<r;)e[i+o]=n[o];return e}var Oe=F?F.isConcatSpreadable:void 0;function Yn(e){return q(e)||Fe(e)||!!(Oe&&e&&e[Oe])}function we(e,n,o,r,i){var l=-1,s=e.length;for(o||(o=Yn),i||(i=[]);++l<s;){var c=e[l];n>0&&o(c)?n>1?we(c,n-1,o,r,i):Ln(i,c):r||(i[i.length]=c)}return i}function Xn(e){var n=e==null?0:e.length;return n?we(e,1):[]}function Jn(e){return Wt(vt(e,void 0,Xn),e+"")}function Zn(e,n){return e!=null&&n in Object(e)}function xn(e,n,o){n=v(n,e);for(var r=-1,i=n.length,l=!1;++r<i;){var s=de(n[r]);if(!(l=e!=null&&o(e,s)))break;e=e[s]}return l||++r!=i?l:(i=e==null?0:e.length,!!i&&tn(i)&&Se(s,i)&&(q(e)||Fe(e)))}function vn(e,n){return e!=null&&xn(e,n,Zn)}function eo(e,n,o,r){if(!X(e))return e;n=v(n,e);for(var i=-1,l=n.length,s=l-1,c=e;c!=null&&++i<l;){var f=de(n[i]),k=o;if(f==="__proto__"||f==="constructor"||f==="prototype")return e;if(i!=s){var E=c[f];k=r?r(E,f,c):void 0,k===void 0&&(k=X(E)?E:Se(n[i+1])?[]:{})}xt(c,f,k),c=c[f]}return e}function to(e,n,o){for(var r=-1,i=n.length,l={};++r<i;){var s=n[r],c=Wn(e,s);o(c,s)&&eo(l,v(s,e),c)}return l}function no(e,n){return to(e,n,function(o,r){return vn(e,r)})}var oo=Jn(function(e,n){return e==null?{}:no(e,n)});const I=oo,D={postfix:{type:[String,Object,Function]},as:{type:String}},O={...m.ElFormItem.props,prop:{type:[String,Array]}},N=Object.keys(O),Te={...m.ElSelect.props,...G,...D,...O,labelKey:{type:String,default:"label"},valueKey:{type:String,default:"value"},filterable:{type:Boolean,default:!0},clearable:{type:Boolean,default:!0},filterMethod:{type:Function}},ro=Object.keys(m.ElSelect.props),io=t.defineComponent({inheritAttrs:!1,name:"HSelect",components:{ElFormItem:m.ElFormItem,ElSelect:m.ElSelect,ElOptionGroup:m.ElOptionGroup,ElOption:m.ElOption},props:Te,setup(e,n){const o=H(e),r=t.computed(()=>I(e,N)),i=t.computed(()=>I(e,ro)),l=t.ref(""),s=f=>{l.value=f},c=t.computed(()=>{const f=l.value;return f?o.finalOption.value.filter(e.filterMethod.bind(null,f)):o.finalOption.value});return{...o,formItemProps:r,selectProps:i,getNode:R,filterValue:l,customFilterMethod:s,filterSource:c}}}),A=(e,n)=>{const o=e.__vccOpts||e;for(const[r,i]of n)o[r]=i;return o},ao={key:0,class:"condition-item__postfix"};function lo(e,n,o,r,i,l){const s=t.resolveComponent("ElOption"),c=t.resolveComponent("ElOptionGroup"),f=t.resolveComponent("ElSelect"),k=t.resolveComponent("ElFormItem");return t.openBlock(),t.createBlock(k,t.mergeProps({class:`condition-item condition-item--select condition-item--${e.field} condition-item--${!!e.postfix}`},e.formItemProps,{prop:e.formItemProps.prop||e.field}),{default:t.withCtx(()=>[t.createVNode(f,t.mergeProps(e.selectProps,{disabled:e.insetDisabled,"model-value":e.checked,"filter-method":e.filterMethod&&e.customFilterMethod,class:"condition-item__content","onUpdate:modelValue":e.change}),{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.filterSource,E=>(t.openBlock(),t.createElementBlock(t.Fragment,{key:E[e.valueKey]},[E.group&&E.children?(t.openBlock(),t.createBlock(c,{key:0,label:E[e.labelKey]},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(E.children,p=>(t.openBlock(),t.createBlock(s,{key:p[e.valueKey],label:p[e.labelKey],value:p[e.valueKey]},null,8,["label","value"]))),128))]),_:2},1032,["label"])):(t.openBlock(),t.createBlock(s,{key:1,label:E[e.labelKey],value:E[e.valueKey]},null,8,["label","value"]))],64))),128))]),_:1},16,["disabled","model-value","filter-method","onUpdate:modelValue"]),e.postfix?(t.openBlock(),t.createElementBlock("div",ao,[typeof e.postfix=="string"?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[t.createTextVNode(t.toDisplayString(e.postfix),1)],64)):(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.getNode(e.postfix,e.checked)),{key:1}))])):t.createCommentVNode("",!0)]),_:1},16,["class","prop"])}const Ve=A(io,[["render",lo]]),_e={...m.ElInput.props,...G,...D,...O,realtime:{type:Boolean,default:!0},waitTime:{type:Number,default:300},clearable:{type:Boolean,default:!0}},co=Object.keys(m.ElInput.props),so=t.defineComponent({inheritAttrs:!1,name:"HInput",components:{ElFormItem:m.ElFormItem,ElInput:m.ElInput},props:_e,setup(e,n){const o=H(e),r=t.computed(()=>I(e,N)),i=t.computed(()=>I(e,co));let l=0;function s(f){const{realtime:k,waitTime:E}=e;if(l&&clearTimeout(l),k)o.change(f);else{if(o.updateCheckedValue(f),!o.wrapper)return;l=setTimeout(o.wrapper.insetSearch,E)}}function c(f){var k;l&&clearTimeout(l),o.checked.value=f.target.value,o.option.updateWrapperQuery(),(k=o.wrapper)==null||k.search()}return{...o,formItemProps:r,inputProps:i,debounceChange:s,enterHandle:c,getNode:R}}}),fo={key:0,class:"condition-item__postfix"};function uo(e,n,o,r,i,l){const s=t.resolveComponent("ElInput"),c=t.resolveComponent("ElFormItem");return t.openBlock(),t.createBlock(c,t.mergeProps({class:`condition-item condition-item--input condition-item--${e.field} condition-item--${!!e.postfix}`},e.formItemProps,{prop:e.formItemProps.prop||e.field}),{default:t.withCtx(()=>[t.createVNode(s,t.mergeProps(e.inputProps,{disabled:e.insetDisabled,"model-value":e.checked,class:"condition-item__content",onInput:e.debounceChange,onKeydown:t.withKeys(e.enterHandle,["enter"])}),null,16,["disabled","model-value","onInput","onKeydown"]),e.postfix?(t.openBlock(),t.createElementBlock("div",fo,[typeof e.postfix=="string"?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[t.createTextVNode(t.toDisplayString(e.postfix),1)],64)):(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.getNode(e.postfix,e.checked)),{key:1}))])):t.createCommentVNode("",!0)]),_:1},16,["class","prop"])}const De=A(so,[["render",uo]]),Ne={...m.ElDatePicker.props,...G,...D,...O,valueFormat:{type:String,default:"YYYY-MM-DD"},beginField:{type:String},endField:{type:String}},po=/range$/;function mo(e){return e?po.test(e):!1}const ho=Object.keys(m.ElDatePicker.props),yo=t.defineComponent({inheritAttrs:!1,name:"HDatepicker",components:{ElFormItem:m.ElFormItem,ElDatePicker:m.ElDatePicker},props:Ne,setup(e,n){const{multiple:o,fields:r,...i}=t.toRefs(e),l=t.computed(()=>e.multiple!==void 0?e.multiple:mo(e.type)),s=t.computed(()=>e.fields||(l.value&&e.beginField&&e.endField?[e.beginField,e.endField]:void 0)),c=H(t.reactive({...i,multiple:l,fields:s})),f=t.computed(()=>I(e,N)),k=t.computed(()=>I(e,ho));return{...c,formItemProps:f,datepickerProps:k,isMultiple:l,getNode:R}}}),go={key:0,class:"condition-item__postfix"};function bo(e,n,o,r,i,l){const s=t.resolveComponent("ElDatePicker"),c=t.resolveComponent("ElFormItem");return t.openBlock(),t.createBlock(c,t.mergeProps({class:`condition-item condition-item--datepicker ${e.isMultiple&&"condition-item--datepicker-range"} condition-item--${e.field} condition-item--${!!e.postfix}`},e.formItemProps,{prop:e.formItemProps.prop||e.field}),{default:t.withCtx(()=>[t.createVNode(s,t.mergeProps(e.datepickerProps,{disabled:e.insetDisabled,"model-value":e.checked,class:"condition-item__content","onUpdate:modelValue":e.change}),null,16,["disabled","model-value","onUpdate:modelValue"]),e.postfix?(t.openBlock(),t.createElementBlock("div",go,[typeof e.postfix=="string"?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[t.createTextVNode(t.toDisplayString(e.postfix),1)],64)):(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.getNode(e.postfix,e.checked)),{key:1}))])):t.createCommentVNode("",!0)]),_:1},16,["class","prop"])}const Ae=A(yo,[["render",bo]]),Ke={...m.ElCascader.props,...ve,...D,...O,labelKey:{type:String,default:"label"},valueKey:{type:String,default:"value"},filterable:{type:Boolean,default:!0},clearable:{type:Boolean,default:!0}},ko=Object.keys(m.ElCascader.props),Eo=t.defineComponent({inheritAttrs:!1,name:"HCascader",components:{ElFormItem:m.ElFormItem,ElCascader:m.ElCascader},props:Ke,setup(e,n){const o=xe(e),r=t.computed(()=>I(e,N)),i=t.computed(()=>I(e,ko));return{...o,formItemProps:r,cascaderProps:i,getNode:R}}}),Co={key:0,class:"condition-item__postfix"};function So(e,n,o,r,i,l){const s=t.resolveComponent("ElCascader"),c=t.resolveComponent("ElFormItem");return t.openBlock(),t.createBlock(c,t.mergeProps({class:`condition-item condition-item--cascader condition-item--${e.field} condition-item--${!!e.postfix}`},e.formItemProps,{prop:e.formItemProps.prop||e.field}),{default:t.withCtx(()=>[t.createVNode(s,t.mergeProps(e.cascaderProps,{disabled:e.insetDisabled,options:e.finalOption,"model-value":e.checked,class:"condition-item__content","onUpdate:modelValue":e.change}),null,16,["disabled","options","model-value","onUpdate:modelValue"]),e.postfix?(t.openBlock(),t.createElementBlock("div",Co,[typeof e.postfix=="string"?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[t.createTextVNode(t.toDisplayString(e.postfix),1)],64)):(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.getNode(e.postfix,e.checked)),{key:1}))])):t.createCommentVNode("",!0)]),_:1},16,["class","prop"])}const Re=A(Eo,[["render",So]]),je={...m.ElRadioGroup.props,...G,...D,...O,labelKey:{type:String,default:"label"},valueKey:{type:String,default:"value"},type:{type:String},cancelable:{type:Boolean,default:void 0}},Bo=Object.keys(m.ElRadioGroup.props),Io=t.defineComponent({inheritAttrs:!1,name:"HRadio",components:{ElFormItem:m.ElFormItem,ElRadioGroup:m.ElRadioGroup,ElRadioButton:m.ElRadioButton,ElRadio:m.ElRadio},props:je,setup(e,n){const o=H(e),r=t.computed(()=>I(e,N)),i=t.computed(()=>I(e,Bo)),l=t.ref(),s=t.computed(()=>e.type==="button"?"ElRadioButton":"ElRadio"),c=t.computed(()=>e.cancelable?"click":null);function f(k,E,p){p(k===E?"":k)}return{...o,formItemProps:r,radioProps:i,radioGroupRef:l,radioType:s,eventName:c,customChange:f,getNode:R}}}),$o={key:0,class:"condition-item__postfix"};function Po(e,n,o,r,i,l){const s=t.resolveComponent("ElRadioGroup"),c=t.resolveComponent("ElFormItem");return t.openBlock(),t.createBlock(c,t.mergeProps({class:`condition-item condition-item--radio condition-item--${e.field} condition-item--${!!e.postfix}`},e.formItemProps,{prop:e.formItemProps.prop||e.field}),{default:t.withCtx(()=>[t.createVNode(s,t.mergeProps({ref:"radioGroupRef"},e.radioProps,{disabled:e.insetDisabled,"model-value":e.checked,class:"condition-item__content","onUpdate:modelValue":e.change}),{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.finalOption,f=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.radioType),t.mergeProps({key:f[e.valueKey],label:f[e.valueKey]},{[t.toHandlerKey(e.eventName)]:t.withModifiers(k=>e.customChange(f[e.valueKey],e.checked,e.change),["prevent"])}),{default:t.withCtx(()=>[t.createTextVNode(t.toDisplayString(f[e.labelKey]),1)]),_:2},1040,["label"]))),128))]),_:1},16,["disabled","model-value","onUpdate:modelValue"]),e.postfix?(t.openBlock(),t.createElementBlock("div",$o,[typeof e.postfix=="string"?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[t.createTextVNode(t.toDisplayString(e.postfix),1)],64)):(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.getNode(e.postfix,e.checked)),{key:1}))])):t.createCommentVNode("",!0)]),_:1},16,["class","prop"])}const He=A(Io,[["render",Po]]),Ge={...m.ElCheckbox.props,...G,...D,...O,labelKey:{type:String,default:"label"},valueKey:{type:String,default:"value"},type:{type:String},multiple:{type:Boolean,default:!0}},Fo=Object.keys(m.ElCheckbox.props),Oo=t.defineComponent({inheritAttrs:!1,name:"HCheckbox",components:{ElFormItem:m.ElFormItem,ElCheckboxGroup:m.ElCheckboxGroup,ElCheckboxButton:m.ElCheckboxButton,ElCheckbox:m.ElCheckbox},props:Ge,setup(e,n){const o=t.ref(),r=t.computed(()=>e.type==="button"?"ElCheckboxButton":"ElCheckbox"),i=H(e),l=t.computed(()=>I(e,N)),s=t.computed(()=>I(e,Fo));return{...i,formItemProps:l,checkboxProps:s,checkboxGroupRef:o,checkboxType:r,getNode:R}}}),wo={key:0,class:"condition-item__postfix"};function To(e,n,o,r,i,l){const s=t.resolveComponent("ElCheckboxGroup"),c=t.resolveComponent("ElFormItem");return t.openBlock(),t.createBlock(c,t.mergeProps({class:`condition-item condition-item--checkbox condition-item--${e.field} condition-item--${!!e.postfix}`},e.formItemProps,{prop:e.formItemProps.prop||e.field}),{default:t.withCtx(()=>[t.createVNode(s,t.mergeProps(e.checkboxProps,{disabled:e.insetDisabled,"model-value":e.checked,ref:"checkboxGroupRef",class:"condition-item__content","onUpdate:modelValue":e.change}),{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.finalOption,f=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.checkboxType),{key:f[e.valueKey],label:f[e.valueKey]},{default:t.withCtx(()=>[t.createTextVNode(t.toDisplayString(f[e.labelKey]),1)]),_:2},1032,["label"]))),128))]),_:1},16,["disabled","model-value","onUpdate:modelValue"]),e.postfix?(t.openBlock(),t.createElementBlock("div",wo,[typeof e.postfix=="string"?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[t.createTextVNode(t.toDisplayString(e.postfix),1)],64)):(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.getNode(e.postfix,e.checked)),{key:1}))])):t.createCommentVNode("",!0)]),_:1},16,["class","prop"])}const Me=A(Oo,[["render",To]]),qe=Object.keys(m.ElForm.props).concat("class","style"),Qe={...m.ElForm.props,...Ze,class:{type:[Object,Array,String]},style:{type:[Object,Array,String]},datum:{type:Object,default:()=>({})},resetToInitialValue:{type:Boolean},immediateSearch:{type:Boolean},renderBtn:{type:Boolean,default:!0},resetTriggerSearch:{type:Boolean},searchText:{type:String,default:"搜索"},resetText:{type:String,default:"重置"}},Ue={search:e=>!0,ready:e=>!0,reset:e=>!0},ze={select:t.markRaw(Ve),input:t.markRaw(De),datepicker:t.markRaw(Ae),cascader:t.markRaw(Re),radio:t.markRaw(He),checkbox:t.markRaw(Me)},ee={};function Vo(e,n){ee[e]=t.markRaw(n)}function _o(e){delete ee[e]}function We(e){return e?ee[e]||ze[e]:{...ze,...ee}}const Do=t.defineComponent({name:"HWrapper",inheritAttrs:!1,components:{ElForm:m.ElForm,ElButton:m.ElButton},props:Qe,emits:Ue,setup(e,n){const o=t.computed(()=>I(e,qe)),r=t.ref(),i=n.emit.bind(n,"search"),l=n.emit.bind(n,"reset"),s=Je({...e,search:i,reset:l});function c(){s.reset(),s.search()}return t.onMounted(()=>{e.immediateSearch&&n.emit("ready",s.getQuery())}),{...s,rootProps:o,formRef:r,getComponent:We,resetAndSearch:c}}});function No(e,n,o,r,i,l){const s=t.resolveComponent("ElButton"),c=t.resolveComponent("ElForm");return t.openBlock(),t.createBlock(c,t.mergeProps(e.rootProps,{ref:"formRef",model:e.query}),{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.datum,(f,k)=>(t.openBlock(),t.createBlock(t.resolveDynamicComponent(e.getComponent(f.t)),t.mergeProps({key:k},f,{field:f.as||k,resetToInitialValue:e.resetToInitialValue,backfill:e.backfill,query:e.query}),null,16,["field","resetToInitialValue","backfill","query"]))),128)),t.renderSlot(e.$slots,"btn",{search:e.search,reset:e.reset,resetAndSearch:e.resetAndSearch},()=>[e.renderBtn?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[t.createVNode(s,{size:e.size,onClick:e.search},{default:t.withCtx(()=>[t.createTextVNode(t.toDisplayString(e.searchText),1)]),_:1},8,["size","onClick"]),t.createVNode(s,{size:e.size,onClick:n[0]||(n[0]=f=>e.resetTriggerSearch?e.resetAndSearch():e.reset())},{default:t.withCtx(()=>[t.createTextVNode(t.toDisplayString(e.resetText),1)]),_:1},8,["size"])],64)):t.createCommentVNode("",!0)])]),_:3},16,["model"])}const Ao=A(Do,[["render",No]]);function Ko(e){return t.reactive(e)}y.HCascader=Re,y.HCheckbox=Me,y.HDatePicker=Ae,y.HInput=De,y.HRadio=He,y.HSelect=Ve,y.HWrapper=Ao,y.cascaderProps=Ke,y.checkboxProps=Ge,y.commonProps=D,y.datepickerProps=Ne,y.defineCondition=Ko,y.formItemPropKeys=N,y.formItemProps=O,y.formPropKeys=qe,y.getComponent=We,y.inputProps=_e,y.provideKey=z,y.radioProps=je,y.registerComponent=Vo,y.selectProps=Te,y.unregisterComponent=_o,y.wrapperEmits=Ue,y.wrapperProps=Qe,Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.js.map
