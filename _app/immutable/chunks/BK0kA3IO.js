import{k as V,l as R,m as A,o as C,p as M,d as k,q as T,g as P,H as Y,r as j,t as E,v as g,s as D,f as q,e as v,w as B,x as $,y as z,z as W,A as F,B as G,j as J,C as K,D as Q,c as U,h as b,E as X}from"./BIOMkEw8.js";import{b as Z}from"./BYfr3Eep.js";const x=["touchstart","touchmove"];function rr(r){return x.includes(r)}const er=new Set,O=new Set;function m(r){var N;var e=this,s=e.ownerDocument,c=r.type,i=((N=r.composedPath)==null?void 0:N.call(r))||[],t=i[0]||r.target,u=0,_=r.__root;if(_){var d=i.indexOf(_);if(d!==-1&&(e===document||e===window)){r.__root=e;return}var h=i.indexOf(e);if(h===-1)return;d<=h&&(u=d)}if(t=i[u]||r.target,t!==e){V(r,"currentTarget",{configurable:!0,get(){return t||s}});var w=M,o=k;R(null),A(null);try{for(var a,n=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var l=t["__"+c];if(l!=null&&(!t.disabled||r.target===t))if(C(l)){var[I,...L]=l;I.apply(t,[r,...L])}else l.call(t,r)}catch(y){a?n.push(y):a=y}if(r.cancelBubble||f===e||f===null)break;t=f}if(a){for(let y of n)queueMicrotask(()=>{throw y});throw a}}finally{r.__root=e,delete r.currentTarget,R(w),A(o)}}}function nr(r,e){var s=e==null?"":typeof e=="object"?e+"":e;s!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=s,r.nodeValue=s+"")}function tr(r,e){return H(r,e)}function or(r,e){T(),e.intro=e.intro??!1;const s=e.target,c=b,i=v;try{for(var t=P(s);t&&(t.nodeType!==8||t.data!==Y);)t=j(t);if(!t)throw E;g(!0),D(t),q();const u=H(r,{...e,anchor:t});if(v===null||v.nodeType!==8||v.data!==B)throw $(),E;return g(!1),u}catch(u){if(u===E)return e.recover===!1&&z(),T(),W(s),g(!1),tr(r,e);throw u}finally{g(c),D(i)}}const p=new Map;function H(r,{target:e,anchor:s,props:c={},events:i,context:t,intro:u=!0}){T();var _=new Set,d=o=>{for(var a=0;a<o.length;a++){var n=o[a];if(!_.has(n)){_.add(n);var f=rr(n);e.addEventListener(n,m,{passive:f});var l=p.get(n);l===void 0?(document.addEventListener(n,m,{passive:f}),p.set(n,1)):p.set(n,l+1)}}};d(F(er)),O.add(d);var h=void 0,w=G(()=>{var o=s??e.appendChild(J());return K(()=>{if(t){Q({});var a=U;a.c=t}i&&(c.$$events=i),b&&Z(o,null),h=r(o,c)||{},b&&(k.nodes_end=v),t&&X()}),()=>{var f;for(var a of _){e.removeEventListener(a,m);var n=p.get(a);--n===0?(document.removeEventListener(a,m),p.delete(a)):p.set(a,n)}O.delete(d),o!==s&&((f=o.parentNode)==null||f.removeChild(o))}});return S.set(h,w),h}let S=new WeakMap;function ir(r,e){const s=S.get(r);return s?(S.delete(r),s(e)):Promise.resolve()}export{or as h,tr as m,nr as s,ir as u};
