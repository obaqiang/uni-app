(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/OrganizationalSwitching/OrganizationalSwitching"],{"30c6":function(t,n,e){"use strict";e.r(n);var r=e("e0fb"),i=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,function(){return r[t]})}(a);n["default"]=i.a},7309:function(t,n,e){"use strict";e("9ded");var r=a(e("b0ce")),i=a(e("9719"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,r.default)(i.default))},9719:function(t,n,e){"use strict";e.r(n);var r=e("e9ff"),i=e("30c6");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e("c0fd");var o=e("2877"),c=Object(o["a"])(i["default"],r["a"],r["b"],!1,null,null,null);n["default"]=c.exports},c0fd:function(t,n,e){"use strict";var r=e("ece2"),i=e.n(r);i.a},e0fb:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e("2f62");function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){a(t,n,e[n])})}return t}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var o={components:{},data:function(){return{mine_banner_bg:"../../static/img/mine_banner_bg.jpg",currentOrgUnit:"",orgUnits:"",index:0,current_id:""}},onNavigationBarButtonTap:function(){},computed:{connect_url:function(){return this.$store.state.connect_url},current_language:function(){return this.$store.state.current_language},current_version:function(){return this.$store.state.current_version},post_header:function(){return this.$store.state.post_header},i18n:function(){return this.$t("mylogin")},deviceType:function(){return this.$store.state.deviceType}},methods:i({},(0,r.mapMutations)(["MacInfo"]),(0,r.mapMutations)(["changeToken"]),(0,r.mapMutations)(["changeOrgId"]),(0,r.mapMutations)(["changePostHeader"]),(0,r.mapMutations)(["MyLoginSucRes"]),{bindPickerChange:function(t){var n=this;n.index=t.detail.value;var e=n.orgUnits[n.index].id;e!=n.current_id&&(console.log(e),console.log(n.current_id),n.current_id=e,n.ClientChangeOrgainzation())},ClientChangeOrgainzation:function(){var n=this;t.request({url:n.connect_url+"api/Account/ClientChangeOrgainzation",data:{OrgId:n.current_id,deviceType:n.deviceType},method:"POST",header:n.post_header,success:function(t){n.MyLoginSucRes(t)}})}}),onLoad:function(){var n=this;n.currentOrgUnit=t.getStorageSync("currentOrgUnit"),n.orgUnits=t.getStorageSync("orgUnits"),console.log(n.currentOrgUnit),n.current_id=n.currentOrgUnit.id;for(var e=0;e<n.orgUnits.length;e++)n.currentOrgUnit.id==n.orgUnits[e].id&&(n.index=e);console.log("需要的post_header:"+JSON.stringify(n.post_header))}};n.default=o}).call(this,e("649d")["default"])},e9ff:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",[e("view",{staticClass:"user_info_list"},[e("text",[t._v("组织编号:")]),e("picker",{staticClass:"organize_picker",attrs:{value:t.index,range:t.orgUnits,"range-key":"displayName",eventid:"62b0dcb8-0"},on:{change:t.bindPickerChange}},[e("view",{staticClass:"uni-input"},[t._v(t._s(t.orgUnits[t.index].displayName))])])],1),e("view",{staticClass:"common_btn_bot_fb",staticStyle:{"margin-top":"200rpx"}},[t._v("确认切换")])])},i=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return i})},ece2:function(t,n,e){}},[["7309","common/runtime","common/vendor"]]]);