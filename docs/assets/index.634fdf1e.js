import{d as e,c as t,t as l,n as o,w as r,l as n}from"./vendor.bf895ce6.js";const{Link:a}=l,c=e({props:{tocItem:{type:Object,default:()=>({})}},setup:e=>()=>{const{tocItem:l}=e;return t(a,{href:`#${l.anchor}`,title:l.text},{default:()=>[l.children&&l.children.map((e=>t(c,{key:e.anchor,tocItem:e},null)))]})}});var s=e({props:{heads:{type:Array}},setup(e){const a=o((()=>{var t;const l=[];let o=0;return null==(t=e.heads)||t.forEach((e=>{((e,t)=>{o++;const r={anchor:`heading-${o}`,level:t,text:e};if(0===l.length)l.push(r);else{let e=l[l.length-1];if(r.level>e.level)for(let t=e.level+1;t<=6;t++){const{children:t}=e;if(!t){e.children=[r];break}if(e=t[t.length-1],r.level<=e.level){t.push(r);break}}else l.push(r)}})(e.text.replace(/<\/?[a-z]+>/g,""),e.level)})),l})),s=((e,t=100)=>{let l=-1;return()=>{clearTimeout(l),l=setTimeout(e,t)}})((()=>{const e=document.querySelector(location.hash);if(e){const t=e.offsetTop+414;window.scrollTo({top:t,behavior:"smooth"})}}));return r((()=>e.heads),(()=>{/#heading-\d/.test(location.hash)&&s()})),()=>{let e;return t(l,{affix:!1,showInkInFixed:!0},"function"==typeof(o=e=a.value.map((e=>t(c,{key:e.anchor,tocItem:e},null))))||"[object Object]"===Object.prototype.toString.call(o)&&!n(o)?e:{default:()=>[e]});var o}}});export{s as C};