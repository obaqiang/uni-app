(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reg/reg"],{3909:function(t,e,a){"use strict";a("9ded");var n=i(a("b0ce")),s=i(a("9eaa"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},"7ea4":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(a("565a"));function s(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{account:"",password:"",email:""}},methods:{register:function(){if(this.account.length<5)t.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)t.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(this.email.length<3||!~this.email.indexOf("@"))t.showToast({icon:"none",title:"邮箱地址不合法"});else{var e={account:this.account,password:this.password,email:this.email};n.default.addUser(e),t.showToast({title:"注册成功"}),t.navigateBack({delta:1})}}}};e.default=i}).call(this,a("649d")["default"])},8276:function(t,e,a){"use strict";a.r(e);var n=a("7ea4"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=s.a},"9eaa":function(t,e,a){"use strict";a.r(e);var n=a("a99c"),s=a("8276");for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var o=a("2877"),r=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},a99c:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("view",{staticClass:"input-group"},[a("view",{staticClass:"input-row border"},[a("text",{staticClass:"title"},[t._v("账号：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",placeholder:"请输入账号",eventid:"9d735fa8-0"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})]),a("view",{staticClass:"input-row border"},[a("text",{staticClass:"title"},[t._v("密码：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",password:"true",placeholder:"请输入密码",eventid:"9d735fa8-1"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("view",{staticClass:"input-row"},[a("text",{staticClass:"title"},[t._v("邮箱：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"请输入邮箱",eventid:"9d735fa8-2"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),a("view",{staticClass:"btn-row"},[a("button",{staticClass:"primary",attrs:{type:"primary",eventid:"9d735fa8-3"},on:{tap:t.register}},[t._v("注册")])],1)])},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})}},[["3909","common/runtime","common/vendor"]]]);