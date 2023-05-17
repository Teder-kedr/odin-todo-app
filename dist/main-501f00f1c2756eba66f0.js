(()=>{var t={126:(t,e,s)=>{var n={"./OpenSans-Bold.ttf":815,"./OpenSans-Regular.ttf":715};function o(t){var e=c(t);return s(e)}function c(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=c,t.exports=o,o.id=126},310:(t,e,s)=>{var n={"./check.svg":970,"./clipboard-check.svg":108,"./list.svg":11,"./plus.svg":789,"./three-dots.svg":411,"./trash.svg":791};function o(t){var e=c(t);return s(e)}function c(t){if(!s.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=c,t.exports=o,o.id=310},815:(t,e,s)=>{"use strict";t.exports=s.p+"728c265bc5aed977c34f.ttf"},715:(t,e,s)=>{"use strict";t.exports=s.p+"a5fe783dd47c116806f9.ttf"},970:(t,e,s)=>{"use strict";t.exports=s.p+"4db2e6cc06dd8ff2972b.svg"},108:(t,e,s)=>{"use strict";t.exports=s.p+"bfdcffc5a485ac149ec2.svg"},11:(t,e,s)=>{"use strict";t.exports=s.p+"9386c761c67ed88eec1f.svg"},789:(t,e,s)=>{"use strict";t.exports=s.p+"220c9e2941557f267da2.svg"},411:(t,e,s)=>{"use strict";t.exports=s.p+"2d7eda27c937cb6da5a1.svg"},791:(t,e,s)=>{"use strict";t.exports=s.p+"a97e8c89a73c26b03b7d.svg"}},e={};function s(n){var o=e[n];if(void 0!==o)return o.exports;var c=e[n]={exports:{}};return t[n](c,c.exports,s),c.exports}s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;s.g.importScripts&&(t=s.g.location+"");var e=s.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!t;)t=n[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=t})(),(()=>{"use strict";s(310),s(126),document.querySelector("#menu-btn").addEventListener("click",(function(){"false"===document.querySelector(".aside").dataset.shown&&(document.querySelector(".aside").setAttribute("data-shown","true"),document.querySelector("#transparent-background").style.display="block")})),document.querySelector("#transparent-background").addEventListener("click",(function(){"true"===document.querySelector(".aside").dataset.shown&&(document.querySelector(".aside").setAttribute("data-shown","false"),document.querySelector("#transparent-background").style.display="none")})),document.querySelector("#theme-toggle").addEventListener("click",(function(){document.body.classList.toggle("light"),document.body.classList.toggle("dark")}));class t{constructor(t){this.text=t,this.isDone=!1}toggle(){this.isDone=!this.isDone}}class e{constructor(t){this.name=t,this.tasks=[]}changeName(t){this.name=t}addTask(e){const s=new t(e);this.tasks.push(s)}deleteTask(t){this.tasks.splice(t,1)}get tasksUnfinished(){let t=0;for(let e of this.tasks)!1===e.isDone&&t++;return t}get percentComplete(){let t=0;for(let e of this.tasks)!0===e.isDone&&t++;return Math.round(t/this.tasks.length*100)}}const n={projects:[],logbook:{projects:[],deleteProject:function(t){this.projects.splice(t,1)}},createProject:function(t){const s=new e(t);this.projects.push(s)},deleteProject:function(t){this.projects.splice(t,1)},renameProject:function(t,e){this.projects[t].changeName(e)},moveToLogbook:function(t){const e=this.projects.splice(t,1)[0];this.logbook.projects.push(e)}};n.createProject("Chores"),n.projects[0].addTask("Do laundry"),n.projects[0].addTask("Wash the dishes"),n.projects[0].addTask("Feed the cat"),n.projects[0].tasks[1].toggle(),n.createProject("Super project!!!"),n.projects[1].addTask("Make tea"),n.projects[1].addTask("Drink tea"),n.projects[1].tasks[0].toggle(),function(){const t=document.querySelector(".aside"),e=t.querySelector(".my-projects");let s=0;e.innerHTML="",e.innerHTML+='<h6 class="my-projects-heading">My projects</h6>';for(let t of n.projects)e.innerHTML+=`\n      <button class="button aside__item">\n      <p>${t.name}</p>\n      <div class="aside__indicator">${t.tasksUnfinished}</div>\n      </button>\n    `,s+=t.tasksUnfinished;e.innerHTML+='\n  <button class="button aside__item" id="new-project-btn">\n  <p>New project</p>\n  <div class="aside__indicator"></div>\n  </button>',t.querySelector(".aside__indicator").textContent=s}(),function(t){const e=document.querySelector(".main").querySelector(".container"),s=function(t){let e;e=n.projects[t];const s=document.createElement("section");s.classList.add("section"),s.innerHTML+=`\n      <div class="section__header">\n        <h3 class="section__title">${e.name}</h3>\n        <button class="button section__opt section--add-task">\n          <p>New task</p>\n          <div class="icon section__opt__icon"></div>\n        </button>\n        <button class="button section__opt section--delete">\n          <p>Delete project</p>\n          <div class="icon section__opt__icon"></div>\n        </button>\n      </div>`;for(let t of e.tasks){let e="task";!0===t.isDone&&(e="task task--checked"),s.innerHTML+=`\n        <div class="${e}">\n          <div class="button task__tick"></div>\n          <p class="task__text">${t.text}</p>\n        </div>\n        `}s.innerHTML+=`\n      <div class="section__subtext">\n        <p class="section__subtext__completion">${e.percentComplete}% completed</p>\n        <p class="section__subtext__date">Created on Fri 12-05-2023 10:55</p>\n      </div>\n    `,document.querySelector(".main").querySelector(".container").appendChild(s)};e.innerHTML+='<h2 class="main__title">My tasks</h2>';for(let t=0;t<n.projects.length;t++)s(t)}()})()})();