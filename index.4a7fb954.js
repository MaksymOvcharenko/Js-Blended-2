!function(){var t="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",e=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",a=crypto.getRandomValues(new Uint8Array(e));e--;)n+=t[63&a[e]];return n};function n(){var t={id:e()};return new FormData(event.currentTarget).forEach((function(e,n){return t[n]=e})),t}var a="tasks";function r(){return JSON.parse(localStorage.getItem(a))||[]}var i={add:function(t){var e=r();e.push(t),localStorage.setItem(a,JSON.stringify(e))},getAll:r,deleteTask:function(t){var e=r().filter((function(e){return e.id!==t}));localStorage.setItem(a,JSON.stringify(e))}};function o(t){return'<li class="task-list-item">\n      <button class="task-list-item-btn" data-id="'.concat(t.id,'">Delete</button>\n      <h3>').concat(t.taskName,"</h3>\n      <p>").concat(t.taskText,"</p>\n  </li>")}var c,s=document.querySelector("#task-form"),u=document.querySelector("#task-list");s.addEventListener("submit",(function(t){t.preventDefault();var e=n();i.add(e);var a=o(e);u.insertAdjacentHTML("beforeend",a)})),c=i.getAll().map(o).join(""),u.insertAdjacentHTML("beforeend",c),u.addEventListener("click",(function(t){if("BUTTON"!==t.target.nodeName)return;var e=t.target.dataset.id;i.deleteTask(e)}))}();
//# sourceMappingURL=index.4a7fb954.js.map