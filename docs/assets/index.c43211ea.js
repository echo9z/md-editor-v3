import{l as e,a as t}from"./request.feac60e0.js";import{d as n,r as a,w as r,o,u as s,c as p,b as l}from"./vendor.bf895ce6.js";var i=n({props:{theme:String},setup(){const n=localStorage.getItem("XHMPGLJIZTDB")||"",i=a({text:n||'## md-editor-v3\n\nMarkdown 编辑器，基于 vue3，使用 jsx 和 typescript 语法开发，支持切换主题、prettier 美化文本等。\n\n## 基本演示\n\n**加粗**，<u>下划线</u>，_斜体_，~删除线~，上标<sup>26</sup>，下标<sub>[1]</sub>，`inline code`，[超链接](https://imbf.cc)\n\n> 引用：这是一段引用\n\n## 代码演示\n\n```js\nimport { defineComponent, ref } from "vue";\nimport MdEditor from "md-editor-v3";\nimport "md-editor-v3/lib/style.css";\n\n\nexport default defineComponent({\n  name: "MdEditor",\n  setup() {\n    const text = ref("");\n    return () => (\n      <MdEditor modelValue={text.value} onChange={(v: string) => (text.value = v)} />\n    );\n  }\n});\n```\n\n\n## 文本演示\n\n\n依照普朗克长度这项单位，目前可观测的宇宙的直径估计值（直径约 930 亿光年，即 8.8 × 10<sup>26</sup> 米）即为 5.4 × 10<sup>61</sup>倍普朗克长度。而可观测宇宙体积则为 8.4 × 10<sup>184</sup>立方普朗克长度（普朗克体积）。\n\n\n## 表格演示\n\n\n| 昵称 | 猿龄（年） | 来自      |\n| ---- | ---------- | --------- |\n| 之间 | 3          | 中国-重庆 |\n\n\n## 占个坑@！\n'});let m=-1;r((()=>i.text),(()=>{clearInterval(m),m=window.setTimeout((()=>{localStorage.setItem("XHMPGLJIZTDB",i.text)}),2e3)})),o((()=>{clearInterval(m)}));const d=s();return()=>p("div",{class:"project-preview"},[p("div",{class:"container"},[p(e,{editorId:"md-prev",theme:d.state.theme,previewTheme:d.state.previewTheme,modelValue:i.text,onSave:e=>{localStorage.setItem("XHMPGLJIZTDB",e)},onChange:e=>i.text=e,onUploadImg:async(e,n)=>{n((await Promise.all(Array.from(e).map((e=>new Promise(((n,a)=>{const r=new FormData;r.append("file",e),t.post("/api/img/upload",r,{headers:{"Content-Type":"multipart/form-data"}}).then((e=>n(e))).catch((e=>a(e)))})))))).map((e=>e.data.url)))}},null),p("br",null,null),p("span",{class:"tips-text"},[l("tips：本页上方的编辑器有localstorage保存功能，可手动点击保存触发，每次操作后两秒会自己保存一次，可用于一些文档的编辑。")])])])}});export{i as default};
