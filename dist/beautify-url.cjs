"use strict";const i=14,_=10,s="\u22EF",a=1;function N(t){return t==="https:"?"":t+"//"}function T(t){return t.startsWith("www.")?t.substring(4):t}function c(t){if(/^\/+$/.test(t))return"";if(t.length<14)return t;const n=t.split("/").filter(e=>e.length>0),r=n[n.length-1];return r.length<14&&n.length>2?`/${s}/${r}`:`/${s}${r.substring(r.length-14+1)}`}function o(t){const n=t.replace(/^\?/,"");return n.length===0?"":n.length<10?`?${n}`:`?${s}${n.substring(n.length-10+1)}`}function L(t){try{const n=new URL(t),r=N(n.protocol),e=T(n.hostname),u=c(n.pathname),E=o(n.search);return`${r}${e}${u}${E}`}catch{return t}}module.exports=L;
