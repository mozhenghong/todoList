(function(t){function e(e){for(var i,s,r=e[0],c=e[1],l=e[2],p=0,d=[];p<r.length;p++)s=r[p],o[s]&&d.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),o=n.n(i);o.a},2094:function(t,e,n){"use strict";var i=n("fce3"),o=n.n(i);o.a},"3d70":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("add",{on:{addList:t.onSubmit}}),n("el-badge",{staticClass:"item",attrs:{value:t.pendingValue(),max:20}}),t.flag1?n("pending",{attrs:{pendingList:t.todoList},on:{"pending-to-complete":t.addComplete,removeList2:t.removeList2}}):t._e(),n("el-badge",{staticClass:"item",attrs:{value:t.completeValue(),max:20}}),t.flag2?n("complete",{attrs:{completeList:t.completeEventList},on:{toPending:t.addPending,removeList:t.removeList}}):t._e()],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"add"},[n("label",[t._v("添加todo:\n   "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.formInline.user,expression:"formInline.user"}],staticClass:"addInput",attrs:{placeholder:"添加todo"},domProps:{value:t.formInline.user},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.onSubmit(e):null},input:function(e){e.target.composing||t.$set(t.formInline,"user",e.target.value)}}})]),n("el-row",{staticClass:"addButton"},[n("el-button",{attrs:{plain:""},on:{click:t.onSubmit}},[t._v("添加")])],1)],1)},r=[],c={data:function(){return{formInline:{user:"",region:""}}},methods:{onSubmit:function(){this.$emit("addList",this.formInline.user),this.formInline.user=""}}},l=c,u=(n("7939"),n("2877")),p=Object(u["a"])(l,s,r,!1,null,null,null);p.options.__file="add.vue";var d=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[n("el-collapse-item",{attrs:{title:"完成事项",name:"xxx"}},t._l(t.completeList,function(e){return n("div",{key:e.id,staticClass:"complete"},[n("input",{staticClass:"checkbox",attrs:{type:"checkbox",checked:""},on:{change:function(n){t.changed(e)}}}),n("p",{staticClass:"content"},[t._v(t._s(e.key.listName))]),n("el-row",[n("el-button",{staticClass:"remove",attrs:{size:"small",type:"primary",plain:"",icon:"el-icon-delete",circle:""},on:{click:function(n){t.remove(e)}}})],1)],1)}),0)],1)},m=[],v={props:["completeList"],data:function(){return{activeNames:["2"]}},components:{},methods:{remove:function(t){alert("你要删除这个计划吗？"),this.$emit("removeList",t)},changed:function(t){this.$emit("toPending",t)}}},g=v,h=(n("2094"),Object(u["a"])(g,f,m,!1,null,null,null));h.options.__file="complete.vue";var L=h.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[n("el-collapse-item",{attrs:{title:"待办事项",name:"1"}},t._l(t.pendingList,function(e){return n("div",{key:e.id,staticClass:"pending"},[n("input",{staticClass:"checkbox",attrs:{type:"checkbox"},on:{change:function(n){t.changed(e)}}}),n("p",{staticClass:"content"},[t._v(t._s(e.key.listName))]),n("el-row",[n("el-button",{staticClass:"remove",attrs:{size:"small",type:"primary",plain:"",icon:"el-icon-delete",circle:""},on:{click:function(n){t.remove(e)}}})],1)],1)}),0)],1)},y=[],_={props:["pendingList"],data:function(){return{activeNames:["1"]}},components:{},methods:{remove:function(t){alert("你要删除这个计划吗？"),this.$emit("removeList2",t)},changed:function(t){this.$emit("pending-to-complete",t)}}},k=_,x=(n("a8f8"),Object(u["a"])(k,b,y,!1,null,null,null));x.options.__file="pending.vue";var E=x.exports,w=(n("f499"),n("ac6a"),n("7514"),"L2Ekpv1lcLVv7YlWo4wzRqpf-gzGzoHsz"),C="F84UauFgDqPdOAaGQEgqliQM";function O(t,e){var n=AV.Object.extend(t),i=new n;i.save({listName:e})}function j(t){var e=new AV.Query(t);return e.find().then(function(t){var e=t.map(function(t){var e={};return e.key=t.attributes,e.id=t.id,e}),n=[];return e.forEach(function(t){n.push(t)}),n})}function N(t,e){var n=AV.Object.createWithoutData(t,e.id);n.destroy()}AV.init({appId:w,appKey:C});var P={add:O,getList:j,remove:N},$={name:"app",components:{add:d,complete:L,pending:E},data:function(){return{todoList:[],flag1:!1,completeEventList:[],flag2:!1}},created:function(){var t=this;P.getList("pendingList").then(function(e){t.todoList=e,t.flag1=!0}),P.getList("completeEventList").then(function(e){t.completeEventList=e,t.flag2=!0})},methods:{onSubmit:function(t){var e=this;P.add("pendingList",t),P.getList("pendingList").then(function(t){e.todoList=t})},addComplete:function(t){var e=this;P.remove("pendingList",t),P.getList("pendingList").then(function(t){e.todoList=t}),P.add("completeEventList",t.key.listName),P.getList("completeEventList").then(function(t){e.completeEventList=t,e.flag2=!0})},addPending:function(t){var e=this;P.remove("completeEventList",t),P.getList("completeEventList").then(function(t){e.completeEventList=t,e.flag2=!0}),P.add("todoList",t.key.listName),P.getList("pendingList").then(function(t){e.todoList=t})},pendingValue:function(){return this.todoList.length},completeValue:function(){return this.completeEventList.length},removeList:function(t){var e=this;P.remove("completeEventList",t),P.getList("completeEventList").then(function(t){e.completeEventList=t,e.flag2=!0})},removeList2:function(t){var e=this;P.remove("pendingList",t),P.getList("pendingList").then(function(t){e.todoList=t})}},watch:{}},S=$,I=(n("034f"),Object(u["a"])(S,o,a,!1,null,null,null));I.options.__file="App.vue";var V=I.exports,z=n("8c4f");i["default"].use(z["a"]);var A=new z["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home"},{path:"/about",name:"about"}]}),M=n("5c96"),q=n.n(M);n("0fae");i["default"].use(q.a),i["default"].config.productionTip=!1,new i["default"]({router:A,render:function(t){return t(V)}}).$mount("#app")},"64a9":function(t,e,n){},7939:function(t,e,n){"use strict";var i=n("bacc"),o=n.n(i);o.a},a8f8:function(t,e,n){"use strict";var i=n("3d70"),o=n.n(i);o.a},bacc:function(t,e,n){},fce3:function(t,e,n){}});
//# sourceMappingURL=app.40f2f644.js.map