(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pwd/pwd"],{1047:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a(n("565a"));function a(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{email:""}},methods:{findPassword:function(){this.email.length<3||!~this.email.indexOf("@")?t.showToast({icon:"none",title:"邮箱地址不合法"}):t.showToast({icon:"none",title:"已发送重置邮件至注册邮箱，请注意查收。",duration:3e3})}}};e.default=i}).call(this,n("649d")["default"])},1590:function(t,e,n){"use strict";n.r(e);var a=n("1047"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"327e":function(t,e,n){"use strict";n.r(e);var a=n("6e3f"),i=n("1590");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var u=n("2877"),r=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);r.options.__file="pwd.vue",e["default"]=r.exports},"6e3f":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",{staticClass:"input-group"},[n("view",{staticClass:"input-row"},[n("text",{staticClass:"title"},[t._v("邮箱：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"请输入邮箱",eventid:"6606c8fe-0"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),n("view",{staticClass:"btn-row"},[n("button",{staticClass:"primary",attrs:{type:"primary",eventid:"6606c8fe-1"},on:{tap:t.findPassword}},[t._v("提交")])],1)])},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"9ecb":function(t,e,n){"use strict";n("9ded");var a=o(n("b0ce")),i=o(n("327e"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))}},[["9ecb","common/runtime","common/vendor"]]]);