import{g as f,i as v,T as p,b as h,d as u,h as i,e as o,f as T,j as d,s as E}from"./BIOMkEw8.js";function g(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function n(r,t){var e=u;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function y(r,t){var e=(t&p)!==0,_=(t&h)!==0,a,c=!r.startsWith("<!>");return()=>{if(i)return n(o,null),o;a===void 0&&(a=g(c?r:"<!>"+r),e||(a=f(a)));var s=_||v?document.importNode(a,!0):a.cloneNode(!0);if(e){var m=f(s),l=s.lastChild;n(m,l)}else n(s,s);return s}}function M(r=""){if(!i){var t=d(r+"");return n(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=d()),E(e)),n(e,e),e}function b(){if(i)return n(o,null),o;var r=document.createDocumentFragment(),t=document.createComment(""),e=d();return r.append(t,e),n(t,e),r}function N(r,t){if(i){u.nodes_end=o,T();return}r!==null&&r.before(t)}export{N as a,n as b,b as c,M as d,y as t};
