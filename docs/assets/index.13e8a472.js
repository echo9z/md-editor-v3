import{a as e,l as a}from"./request.feac60e0.js";import{v as s}from"./package.86eeea4a.js";import{C as t}from"./index.634fdf1e.js";import{d as o,i as l,j as r,u as m,c,A as d}from"./vendor.bf895ce6.js";var n=o({name:"PageDemo",props:{theme:String},setup(){const o=l(),n=l([]);r((()=>{e.get("/demo.md").then((({data:e})=>{o.value=e.replace(/\$\{EDITOR_VERSION\}/g,s)})).catch((e=>{console.log(e),o.value="文档读取失败！"}))}));const i=m();return()=>c("div",{class:"container"},[c("div",{class:"doc"},[c("div",{class:"content"},[c(a,{theme:i.state.theme,modelValue:o.value,previewTheme:i.state.previewTheme,previewOnly:!0,showCodeRowNumber:!0,onGetCatalog:e=>{n.value=e}},null)]),c("div",{class:"catalog"},[c(d,{offsetTop:16},{default:()=>[c(t,{heads:n.value},null)]})])])])}});export{n as default};
