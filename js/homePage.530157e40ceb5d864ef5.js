!function(){"use strict";!function(){var e=JSON.parse('{"L":[{"loom":true,"name":"Browser Observer","href":"/manuscript/browser-observer"},{"loom":true,"name":"Drag Component","href":"/manuscript/drag-component"},{"loom":true,"name":"Ediotr Test","href":"/manuscript/editor-test"},{"loom":true,"name":"HTML元素操纵","href":"/manuscript/html-element-manipulator"},{"loom":true,"name":"lambda语言JS编译器","href":"/manuscript/lambda-compiler-in-javascript"},{"loom":true,"name":"Markdown在线编辑器","href":"/manuscript/markdown-editor"},{"loom":true,"name":"在线信息摘要（Online Message Digest）","href":"/manuscript/message-digest"},{"loom":true,"name":"Motion","href":"/manuscript/motion-page"},{"loom":true,"name":"数据结构","href":"/manuscript/note-data-structure"}]}');function t(e){if(!e)return;if(e instanceof HTMLElement)return e;if(Array.isArray(e))return e.map((e=>t(e)));const{tag:r,text:n,html:a,children:o,attributes:s,events:m}=e;if(!r)return document.createElement("template");const i=document.createElement(r);return a&&(i.innerHTML=a),(n||0===n||""===n)&&(i.innerText=n),s&&Object.keys(s).forEach((e=>{"classes"===e&&Array.isArray(s[e])?i.className=s[e].join(" "):i.setAttribute("classes"===e?"class":e,s[e])})),m&&Object.keys(m).forEach((t=>{i.addEventListener(t,m[t].bind(e))})),o&&i.append(...o.filter(Boolean).map(t)),i}window.addEventListener("load",(function(){(function(e){const t=new Map;if(!t.has(e)){const r=document.getElementById(e);if(!r)return null;t.set(e,r)}return t.get(e)})("main-box").append(...e.L.map((e=>t({tag:"a",text:e.name,attributes:{href:e.href,classes:["list-item-box"],title:e.name}}))))}))}()}();