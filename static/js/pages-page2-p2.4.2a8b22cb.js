(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-page2-p2.4"],{"36b2":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{title:"",active1:!1,active2:!1,active3:!1,active4:!1}},onLoad:function(){},methods:{nextStep:function(){uni.navigateTo({url:"/pages/page1/p1.1"})},singleClick:function(t){switch(t){case 1:this.active1=!0,this.active2=!1,this.active3=!1;break;case 2:break;case 3:break}}}};i.default=a},"49fc":function(t,i,e){"use strict";e.r(i);var a=e("36b2"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},7938:function(t,i,e){"use strict";var a,n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"text-area block-item",class:t.active1?"active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.singleClick(1)}}},[e("v-uni-view",{staticClass:"block-item-pos",style:t.active1?"color:#fff":""},[e("v-uni-view",{staticClass:"text-area",staticStyle:{"margin-top":"20px"}},[e("v-uni-view",{staticClass:"icon"},[e("v-uni-image",{staticClass:"logo",attrs:{src:"/static/logo.png"}})],1),e("v-uni-view",{staticStyle:{width:"85%"}},[e("v-uni-view",{staticStyle:{"font-weight":"700"}},[t._v("Daily")]),e("v-uni-view",{staticClass:"small-text"},[t._v("Create a meal plan for 1 day and follow it for 1 month")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"text-area block-item",class:t.active2?"active":""},[e("v-uni-view",{staticClass:"block-item-pos",style:t.active2?"color:#fff":""},[e("v-uni-view",{staticClass:"text-area",staticStyle:{"margin-top":"20px"}},[e("v-uni-view",{staticClass:"icon"},[e("v-uni-image",{staticClass:"logo",attrs:{src:"/static/logo.png"}})],1),e("v-uni-view",{staticStyle:{width:"85%"}},[e("v-uni-view",{staticStyle:{"font-weight":"700"}},[t._v("Weekly")]),e("v-uni-view",{staticClass:"small-text"},[t._v("Create a meal plan for 1 week and follow it for 1 month")])],1)],1)],1)],1),e("v-uni-view",{staticClass:"text-area block-item",class:t.active3?"active":""},[e("v-uni-view",{staticClass:"block-item-pos",style:t.active3?"color:#fff":""},[e("v-uni-view",{staticClass:"text-area",staticStyle:{"margin-top":"20px"}},[e("v-uni-view",{staticClass:"icon"},[e("v-uni-image",{staticClass:"logo",attrs:{src:"/static/logo.png"}})],1),e("v-uni-view",{staticStyle:{width:"85%"}},[e("v-uni-view",{staticStyle:{"font-weight":"700"}},[t._v("Bi-weekly")]),e("v-uni-view",{staticClass:"small-text"},[t._v("Create a meal plan for 1 weeks and follow it for 1 month")])],1)],1)],1)],1)],1)},s=[];e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}))},9378:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".active[data-v-5c38964e]{background-color:#333}.block-item[data-v-5c38964e]{width:90%;height:%?150?%;margin:0 auto;border:solid 1px #d8d8d8;border-radius:%?10?%;padding:%?30?% 0;margin-bottom:%?30?%;position:relative}.block-item-pos[data-v-5c38964e]{width:100%;height:100%;position:absolute;top:0;z-index:100}.text-area[data-v-5c38964e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.title[data-v-5c38964e]{font-size:%?36?%;color:#333;width:100%;text-align:center;margin:%?50?% 0;font-weight:700}.btn[data-v-5c38964e]{width:90%;height:%?80?%;line-height:%?80?%;text-align:center;border-radius:%?10?%;border:solid 2px #0f0f10;position:fixed;bottom:%?20?%;margin-left:5%;font-weight:700}.icon[data-v-5c38964e]{width:20%;text-align:center;margin-top:%?20?%}.small-text[data-v-5c38964e]{width:90%;font-size:12px;color:#999;margin-top:%?20?%}",""]),t.exports=i},"9ec5":function(t,i,e){"use strict";var a=e("ffc0"),n=e.n(a);n.a},f6d5:function(t,i,e){"use strict";e.r(i);var a=e("7938"),n=e("49fc");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("9ec5");var c,o=e("f0c5"),l=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"5c38964e",null,!1,a["a"],c);i["default"]=l.exports},ffc0:function(t,i,e){var a=e("9378");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("6b663596",a,!0,{sourceMap:!1,shadowMode:!1})}}]);