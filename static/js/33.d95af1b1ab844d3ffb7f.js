webpackJsonp([33],{HnVx:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={data:function(){return{list:"",ctiy:"",text:void 0}},methods:{cityText:function(){this.text=this.text.replace(/\w/g,"")},go:function(t){var e=this.$route.query;this.$router.push({name:"myAddBank",query:{idCard:e.idCard,iphone:e.iphone,ctiy:t,bank:e.bank}})}},watch:{text:function(t,e){console.log(t,e)}},computed:{next:function(){if(this.text){var t=[],e=this;return this.list.map(function(i){-1!==i.search(e.text)&&t.push(i)}),t}return this.list}},filters:{},beforeCreate:function(){this.$parent.head.title="选择城市",console.log(this.$route.query)},created:function(){var t=this;this.$http.get("/static/citys.json").then(function(e){t.list=e.data.citys});var e=this.$route.query;this.$parent.head.back=function(){t.$router.push({name:"myAddBank",query:{idCard:e.idCard,iphone:e.iphone,ctiy:e.ctiy,bank:e.bank}}),console.log("myCtiy = myAddBank")}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"body bt8"},[i("div",{staticClass:"head"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",placeholder:"搜索",id:"text"},domProps:{value:t.text},on:{input:[function(e){e.target.composing||(t.text=e.target.value)},t.cityText]}})]),t._v(" "),i("div",[i("ul",{staticClass:"list"},t._l(t.next,function(e){return i("li",{key:e.index,on:{click:function(i){t.go(e)}}},[t._v(t._s(e))])}))])])},staticRenderFns:[]};var s=i("VU/8")(n,a,!1,function(t){i("stx+")},"data-v-2e71c81e",null);e.default=s.exports},"stx+":function(t,e){}});