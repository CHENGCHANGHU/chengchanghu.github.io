!function(){var t={91:function(t,e,n){"use strict";function a(t){const{tag:e,text:n,html:o,children:r,attributes:s,events:i}=t,l=document.createElement(e);return o&&(l.innerHTML=o),n&&(l.innerText=n),s&&Object.keys(s).forEach((t=>{"classes"===t?l.className=s[t].join(" "):l.setAttribute(t,s[t])})),i&&Object.keys(i).forEach((e=>{l.addEventListener(e,i[e].bind(t))})),r&&r.forEach((t=>l.appendChild(a(t)))),l}function o(t){if(!t)return;if(t instanceof HTMLElement)return t;if(Array.isArray(t))return t.map((t=>o(t)));const{tag:e,text:n,html:a,children:r,attributes:s,events:i}=t;if(!e)return document.createElement("template");const l=document.createElement(e);return a&&(l.innerHTML=a),(n||0===n||""===n)&&(l.innerText=n),s&&Object.keys(s).forEach((t=>{"classes"===t&&Array.isArray(s[t])?l.className=s[t].join(" "):l.setAttribute("classes"===t?"class":t,s[t])})),i&&Object.keys(i).forEach((e=>{l.addEventListener(e,i[e].bind(t))})),r&&l.append(...r.filter(Boolean).map(o)),l}function r({tag:t,text:e,html:n,parent:o,children:r,attributes:s}){o&&o.appendChild(a({tag:t,text:e,html:n,children:r,attributes:s}))}function s({tag:t,text:e,attributes:n}){return`<${t}${n?" "+Object.keys(n).map((t=>"classes"===t?`class="${n[t].join(" ")}"`:`${t}="${n[t]}"`)).join(" "):""}">${e}</${t}>`}function i(t){const e=new Map;if(!e.has(t)){const n=document.getElementById(t);if(!n)return null;e.set(t,n)}return e.get(t)}function l(t,e,n){const a=t.getAttribute("style")||"";new RegExp(`${e}`,"g").test(a)?t.setAttribute("style",a.replaceAll(new RegExp(`(${e}: )[\\w\\.]+(;)`,"g"),`$1${n}$2`)):t.setAttribute("style",`${a} ${e}: ${n};`)}n.r(e),n.d(e,{getElement:function(){return a},createElement:function(){return o},appendElement:function(){return r},elementString:function(){return s},id:function(){return i},setInlineStyle:function(){return l}})},515:function(t,e,n){const{createElement:a}=n(91);function o(t){return t.replace(/^(.*)\*\*(.+)\*\*(.*)$/g,((t,e,n,a)=>`${e}<strong>${n}</strong>${a}`)).replace(/^(.*)\*(.+)\*(.*)$/g,((t,e,n,a)=>`${e}<i>${n}</i>${a}`)).replace(/^([^\[]*)\[(.*)\]\((.*)\)(.*)$/g,((t,e,n,a,o)=>`${e}<a href="${a}" target="_blank">${n}</a>${o}`))}t.exports=function(t,e={indent:16}){const n=[];let r=0,s="",i=!1;t.replace(/\\r\\n/g,"\n");for(let e of t)i?(n.push(s),n.push("\n"),s="",r++,i=!1):"\r"!==t[r]||"\n"!==t[r+1]?"\n"!==e&&"\r"!==e?(s+=e,r++):(n.push(s),n.push("\n"),s="",r++):(i=!0,r++);n.push(s),console.log(n);const l=n.reduce((({options:t,lastNodeType:e,status:n},a,r)=>{let s=null;if((s=a.match(/^(\s*)```([^`]*)$/))&&"code-block-start"!==e)return t.push({tag:"div",attributes:{classes:`code-block-index-${r}`,style:`--indent: ${16*s[1].length}px`,"data-code-type":s[2],"data-code-block-index":r},children:[{tag:"pre",text:"",attributes:{classes:`code-block-index-${r}-line-box`}},{tag:"pre",text:"",attributes:{classes:`code-block-index-${r}-code-box`}}]}),{options:t,lastNodeType:"code-block-start",status:{skipNextLine:!0}};if((s=a.match(/^(\s*)```(\s*)$/))&&"code-block-start"===e){const e=t.at(-1),n=e.attributes["data-code-block-index"];return e.children.push({tag:"style",text:`\n            .code-block-index-${n} {\n              display: flex;\n              flex-flow: row nowrap;\n              column-gap: 4px;\n              padding: 8px 16px;\n              border-radius: 4px;\n              background-color: #aaa;\n              box-sizing: border-box;\n              max-height: 400px;\n              overflow-y: auto;\n            }\n            .code-block-index-${n}-line-box,\n            .code-block-index-${n}-code-box {\n              color: #ccc;\n              font-family: monospace;\n              white-space: pre;\n              line-height: 14px;\n              padding: 4px 0;\n            }\n            .code-block-index-${n}-line-box {\n              color: #343434;\n              text-align: right;\n            }\n            .code-block-index-${n}-code-box {\n              flex: 1;\n              height: 100%;\n              padding-left: 4px;\n              border-radius: 4px;\n              background-color: #222;\n            }\n          `}),{options:t,lastNodeType:"code-block-end"}}if("code-block-start"===e){if(n&&n.skipNextLine)return{options:t,lastNodeType:"code-block-start"};const{attributes:{"data-code-block-index":e},children:[o,s]}=t.at(-1);return"\n"!==a&&(o.text+=(r-e-2)/2+":\n"),console.log(r,e,a),s.text+=a,{options:t,lastNodeType:"code-block-start"}}if(""===a)return t.push({tag:"div",text:"",attributes:{"data-split":"true"}}),{options:t,lastNodeType:"split"};if(s=a.match(/^(#+) (.+?)$/))return t.push({tag:`h${s[1].length}`,html:o(s[2].trim())}),{options:t,lastNodeType:"heading"};if(s=a.match(/^(\s*)(>+) (.+?)$/)){const n=t[t.length-1];return"quote"===e&&s[1].length===n.attributes["data-indent"]?n.html+="<br>"+o(s[3].trim()):t.push({tag:"p",html:o(s[3].trim()),attributes:{style:`--indent: ${16*s[1].length}px`,classes:"block-quotes","data-indent":s[1].length}}),{options:t,lastNodeType:"quote"}}if(s=a.match("tablerow"===e?/^(\|[^\|]*)+\|$/:/^(\|[^\|]+)+\|$/)){const n=t[t.length-1];let s=0;"tablerow"===e&&(s=n.children[0].children.length);const i=a.slice(1,a.length-1).split("|").map(((t,e)=>{const n={"data-row-index":s,"data-col-index":e,rowspan:1,colspan:1};return t=t.replace(/(.*)(?<! )\(-(\d+)\)(.*)/,((t,e,a,o)=>(n.colspan=parseInt(a),`${e}${o}`))).replace(/(.*)(?<! )\(=(\d+)\)(.*)/,((t,e,a,o)=>(n.rowspan=parseInt(a),`${e}${o}`))),n["data-row-span"]=n.rowspan,n["data-col-span"]=n.colspan,{tag:"td",html:o(t.trim()),attributes:{...n}}}));if(i.reduce(((t,e)=>(e.attributes["data-col-index"]=t,t+e.attributes["data-col-span"])),0),n&&n.tableRowShadow&&(n.tableRowShadow=n.tableRowShadow.filter((t=>s<t.rowIndex+t.rowSpan)),n.tableRowShadow.forEach((t=>{i.filter((e=>e.attributes["data-col-index"]>=t.colIndex)).forEach((e=>e.attributes["data-col-index"]+=t.colSpan))}))),"tablerow"!==e){const e=i.filter((t=>t.attributes["data-row-span"]>1)).map((({attributes:{"data-row-index":t,"data-col-index":e,"data-row-span":n,"data-col-span":a}})=>({rowIndex:t,colIndex:e,rowSpan:n,colSpan:a}))),n=Math.max(e.reduce(((t,e)=>Math.max(t,e.rowSpan)),0),1);return t.push({tag:"table",attributes:{classes:`table-index-${r}`},children:[{tag:"tbody",children:[{tag:"tr",children:i}]},{tag:"style",text:`.table-index-${r} tr:nth-child(-n+${n}) td { font-weight: 500; background-color: #dedede; }`}],tableRowShadow:e}),{options:t,lastNodeType:"tablerow"}}if(/^[\|:\-]+$/.test(a)){const e=a.slice(1,a.length-1).split("|").map(((t,e)=>/^:\-+:$/.test(t)?`.${n.attributes.classes} td[data-col-index="${e}"] { text-align: center; }`:/^\-+:$/.test(t)?`.${n.attributes.classes} td[data-col-index="${e}"] { text-align: right; }`:"")).join(" ");return n.children.push({tag:"style",text:e}),{options:t,lastNodeType:"tablerow"}}return n.tableRowShadow.push(...i.filter((t=>t.attributes["data-row-span"]>1)).map((({attributes:{"data-row-index":t,"data-col-index":e,"data-row-span":n,"data-col-span":a}})=>({rowIndex:t,colIndex:e,rowSpan:n,colSpan:a})))),n.children[0].children.push({tag:"tr",children:i}),{options:t,lastNodeType:"tablerow"}}return(s=a.match(/^[\*-_]{3,}$/))?(t.push({tag:"hr"}),{options:t,lastNodeType:"horizontal-rule"}):(s=a.match(/^(\s*)\- (.*)$/))?(t.push({tag:"li",html:o(s[2].trim()),attributes:{style:`--indent: ${16*s[1].length}px`}}),{options:t,lastNodeType:"list-item"}):(s=a.match(/^(\s*)([^<>\n]+)$/))?(t.push({tag:"p",html:o(s[2].trim()),attributes:{style:`--indent: ${16*s[1].length}px`}}),{options:t,lastNodeType:"paragraph"}):"\n"!==a?(t.push({tag:"p",html:o(a.trim())}),{options:t,lastNodeType:"paragraph"}):{options:t,lastNodeType:e}}),{options:[],lastNodeType:"",status:{}}).options;return console.log(l),l.map(a)}}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){"use strict";class t extends HTMLElement{#t=null;#e=null;#n=null;constructor(){super(),this.#t=this.attachShadow({mode:"closed"}),this.#t.appendChild(document.getElementById("page-header").content.cloneNode(!0)),this.#e=this.#t.querySelector("#manuscript-logo-img"),this.#n=this.#t.querySelector("#manuscript-logo-text")}connectedCallback(){this.#e.addEventListener("click",(()=>{window.location.assign("/manuscript")})),this.#n.addEventListener("click",(()=>{window.location.assign("/manuscript")}))}}document.getElementById("page-header")||(document.body.innerHTML+='<template id="page-header">\n  <style>\n    .page-header-box {\n      --logoSize: 36px;\n\n      position: sticky;\n      width: 100vw;\n      height: 48px;\n      top: 0;\n      display: flex;\n      flex-flow: row nowrap;\n      align-items: center;\n      padding: 0 8px;\n      font-size: 12px;\n      box-sizing: border-box;\n      z-index: 9999;\n      background-color: #32343d;\n      box-sizing: border-box;\n      box-shadow: 0px 5px 10px #afafaf;\n      color: #ffffff;\n    }\n\n    .manuscript-logo-box {\n      display: flex;\n      flex-flow: row nowrap;\n      align-items: center;\n    }\n\n    .manuscript-logo-img {\n      width: var(--logoSize);\n      transform: rotateY(180deg);\n      border: 1px solid #343434;\n      border-radius: 50%;\n      cursor: pointer;\n      background-color: #fff;\n    }\n\n    .manuscript-logo-text {\n      text-decoration: underline;\n      font-weight: bolder;\n      transition: all .3s ease-in-out;\n      cursor: pointer;\n      margin-left: 8px;\n    }\n\n    .manuscript-logo-text:hover {\n      color: rgb(3, 145, 98);\n    }\n\n    .page-title-box {\n      margin-left: 16px;\n      font-size: 16px;\n      font-weight: bolder;\n    }\n  </style>\n  <div class="page-header-box">\n    <div class="manuscript-logo-box">\n      <img\n        id="manuscript-logo-img"\n        class="manuscript-logo-img"\n        src="/manuscript/assets/images/writing.a59d3288.png"\n        alt="tigercheng manuscript logo"\n      />\n      <div\n        id="manuscript-logo-text"\n        class="manuscript-logo-text"\n      >ALLX Manuscript (Loom)</div>\n    </div>\n    <div class="page-title-box">\n      <slot></slot>\n    </div>\n  </div>\n</template>'),customElements.define("page-header",t);var e=n(91);class a extends HTMLElement{#a=null;#o=null;#r=null;#s="";#i="";#l="";#d="";#c="";static get observedAttributes(){return["rows","cols","resize","placeholder"]}#p(t,e){this.#i=parseInt(e),this.#r.setAttribute("rows",this.#i)}#u(t,e){this.#l=parseInt(e),this.#r.setAttribute("cols",this.#l)}#h(t,n){this.#d=n,(0,e.setInlineStyle)(this.#r,"resize",this.#d)}#x(t,e){this.#c=e,this.#r.setAttribute("placeholder",this.#c)}#b(t){return()=>{this.dispatchEvent(new CustomEvent("e-textarea-input",{bubbles:!1,cancelable:!1,composed:!0,detail:{data:this.#r.value}}))}}setData(t){this.#r.value=t}clearData(){this.#r.value=""}constructor(){super(),this.#a=this.attachShadow({mode:"closed"}),this.#a.appendChild((0,e.id)("e-textarea-template").content.cloneNode(!0)),this.#o=this.#a.querySelector("#e-textarea-box"),this.#r=this.#a.querySelector("#textarea"),this.#r.addEventListener("input",(t=>this.#b(t)()))}attributeChangedCallback(t,e,n){switch(console.log("[attributeChangedCallback]"),t){case"rows":this.#p(e,n);break;case"cols":this.#u(e,n);break;case"resize":this.#h(e,n);break;case"placeholder":this.#x(e,n)}}connectedCallback(){console.log("[connectedCallback]"),this.#l||(0,e.setInlineStyle)(this.#r,"width","100%")}}(0,e.id)("e-textarea-templat")||(document.body.innerHTML+='<template id="e-textarea-template">\n  <style>\n    * {\n      margin: 0;\n      padding: 0;\n    }\n    .e-textarea-box {\n      /* padding: 8px; */\n    }\n    textarea {\n      padding: 8px;\n      border: 1px solid #343434;\n      border-radius: 4px;\n      outline: none;\n      box-sizing: border-box;\n    }\n    textarea:focus {\n      border-color: rgb(72, 128, 248);\n      outline: 2px solid rgb(206, 218, 246);\n      outline-offset: 0px;\n    }\n  </style>\n  <div id="e-textarea-box" class="e-textarea-box">\n    <textarea part="textarea" name="" id="textarea" cols="50" rows="5"></textarea>\n  </div>\n</template>'),customElements.define("e-textarea",a);var o=n(515),r=n.n(o);window.addEventListener("load",(function(){(0,e.id)("markdown-textarea").addEventListener("input",(t=>{console.log(t.target.innerText);const n=t.target.innerText,a=(0,e.id)("markdown-preview").scrollTop;(0,e.id)("markdown-preview").innerHTML="",(0,e.id)("markdown-preview").append(...(0,e.createElement)(r()(n))),(0,e.id)("markdown-preview").scrollTop=a}))}))}()}();