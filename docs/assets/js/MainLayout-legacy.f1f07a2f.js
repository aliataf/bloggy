(self["webpackChunkbloggy"]=self["webpackChunkbloggy"]||[]).push([[585],{8166:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{attrs:{direction:"vertical"}},[r("main-layout-header"),r("div",{staticStyle:{height:"calc(100vh - 60px)"}},[r("div",{staticClass:"pa-6 pt-0 bg-green-50",staticStyle:{"min-height":"calc(100vh - 60px)"}},[r("router-view")],1)])],1)},i=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-header",{staticClass:"w-screen flex justify-between items-center"},[r("h5",{staticClass:"cursor-pointer",on:{click:function(t){return e.$router.push("/")}}},[e._v("BLOGGY")]),e.isLoggedInVar?r("div",{staticClass:"flex items-center gap-x-6"},[r("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(t){return e.$router.push("/articles/create")}}},[e._v(" Create Article ")]),r("el-dropdown",[r("div",{staticClass:"flex items-center"},[r("el-button",{attrs:{type:"text"}},[r("div",{staticClass:"w-8 h-8"},[r("img",{attrs:{src:e.user.image}})])]),r("span",{staticClass:"mx-4"},[e._v(e._s(e.user&&e.user.username))])],1),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{nativeOn:{click:function(t){return e.$router.push("/profiles/"+e.user.username)}}},[e._v("Profile")]),r("el-dropdown-item",{nativeOn:{click:function(t){return e.logoutHandler.apply(null,arguments)}}},[e._v("Logout")])],1)],1)],1):r("div",[r("el-row",{attrs:{type:"flex",justify:"end"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/login")}}},[e._v(" Login ")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.$router.push("/signup")}}},[e._v(" Signup ")])],1)],1)])},s=[],c=r(6198),u=r(3019),a=(r(8975),r(4665)),l=r(1863),p={data:function(){return{isLoggedInVar:!1}},computed:(0,u.Z)({},(0,a.Se)("User",["user"])),methods:(0,u.Z)((0,u.Z)({},(0,a.nv)("Auth",["isLoggedIn"])),{},{logoutHandler:function(){l.Z.reset(),this.$router.go(0)}}),created:function(){var e=this;return(0,c.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.isLoggedIn();case 2:e.isLoggedInVar=t.sent;case 3:case"end":return t.stop()}}),t)})))()}},f=p,d=r(3736),g=(0,d.Z)(f,o,s,!1,null,"6d009b83",null),h=g.exports,v={components:{MainLayoutHeader:h}},b=v,y=(0,d.Z)(b,n,i,!1,null,null,null),m=y.exports},9337:function(e,t,r){var n=r(2109),i=r(9781),o=r(3887),s=r(5656),c=r(1236),u=r(6135);n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,r,n=s(e),i=c.f,a=o(n),l={},p=0;while(a.length>p)r=i(n,t=a[p++]),void 0!==r&&u(l,t,r);return l}})},3019:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});r(7941),r(2526),r(7327),r(1539),r(5003),r(4747),r(9337);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}}}]);
//# sourceMappingURL=MainLayout-legacy.f1f07a2f.js.map