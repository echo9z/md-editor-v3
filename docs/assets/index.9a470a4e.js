import{d as u,c as s,E as f,a as m,w as g,G as v}from"./vendor.7ddcdca6.js";const I=(t,o=100)=>{let l=-1;return()=>{clearTimeout(l),l=setTimeout(t,o)}},{Link:y}=f,h=u({props:{tocItem:{type:Object,default:()=>({})}},setup(t){return()=>{const{tocItem:o}=t;return s(y,{href:`#${o.text}`,title:o.text},{default:()=>[o.children&&s("div",{class:"catalog-container"},[o.children.map(l=>s(h,{key:`${l.level}-${l.text}`,tocItem:l},null))])]})}}});function b(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!v(t)}const k=u({props:{heads:{type:Array}},setup(t){const o=m(()=>{var n;const e=[];return(n=t.heads)==null||n.forEach(({text:i,level:p})=>{const a={level:p,text:i};if(e.length===0)e.push(a);else{let c=e[e.length-1];if(a.level>c.level)for(let d=c.level+1;d<=6;d++){const{children:r}=c;if(!r){c.children=[a];break}if(c=r[r.length-1],a.level<=c.level){r.push(a);break}}else e.push(a)}}),e}),l=I(()=>{const e=decodeURIComponent(location.hash).replace("#","");if(e){const n=document.getElementById(e);if(n){const i=n.offsetTop+414;window.scrollTo({top:i,behavior:"smooth"})}}});return g(()=>t.heads,l),()=>{let e;return s(f,{affix:!1,showInkInFixed:!1},b(e=o.value.map(n=>s(h,{key:n.text,tocItem:n},null)))?e:{default:()=>[e]})}}});var C=k;export{C};
