webpackJsonp([16],{"2b2g":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("mvHQ"),n=e.n(i),a=(e("v2ns"),e("7QTg")),o={data:function(){return{product:{},continued:{},isContinue:!0,swiperOption:{pagination:{el:".swiper-pagination",clickable:!0,type:"custom",bulletClass:"continue-invest"},observer:!0,observerParents:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},created:function(){var t=this;this.$parent.head.isHead=!0,this.$parent.head.title="理财列表",this.$parent.head.isBell=!0,this.$parent.head.isWhite=!1,this.$parent.head.isEnter=!1,this.$parent.foot.isMoney=!0,this.$http(this.path.product).then(function(s){console.log(s.data.code),0===s.data.code&&(t.product=s.data.data,console.log(t.product))}),this.$http(this.path.continueList).then(function(s){console.log(s.data),0===s.data.code?(t.continued=s.data.data,t.continued.length>0&&(t.isContinue=!1),console.log(t.continued)):t.isContinue=!0})},methods:{goProductDetail:function(t){localStorage.setItem("productId",n()(t)),this.$router.push({name:"productDetail",query:{id:t}})},goInvestDetail:function(t){this.$router.push({name:"investDetail",query:{id:t,show:!0}})}},components:{swiper:a.swiper,swiperSlide:a.swiperSlide}},r={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"money-view btd9 tabBox"},[i("ul",{staticClass:"tag flex-bet tc bbe8"},[i("li",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"},[t._v("产品列表")]),t._v(" "),i("li",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"},[t._v("产品续投")])]),t._v(" "),i("swiper",{attrs:{options:t.swiperOption}},[i("swiper-slide",t._l(t.product,function(s){return i("ul",{key:s.id,staticClass:"product-list container",on:{click:function(e){t.goProductDetail(s.id)}}},[s.mark?i("li",{staticClass:"mark"},[i("span",[t._v(t._s(t._f("mark")(s.mark)))]),t._v(" "),i("img",{attrs:{src:e("LMF7"),alt:""}})]):t._e(),t._v(" "),i("li",{staticClass:"list-one"},[t._v(t._s(s.productName))]),t._v(" "),i("li",{staticClass:"flex-bet list-two"},[i("span",[t._v(t._s(t._f("thousand")(100*s.interestRate)))]),t._v(" "),i("span",[t._v(t._s(t._f("deadLine")(s.deadline)))]),t._v(" "),i("span",[t._v(t._s(t._f("thousand")(s.investmentAmount)))])]),t._v(" "),i("li",{staticClass:"flex-bet list-three"},[i("span",[t._v("预期年化 (%)")]),t._v(" "),i("span",[t._v("理财期限 ("+t._s(t._f("deadWord")(s.deadline))+")")]),t._v(" "),i("span",[t._v("起投金额 (元)")])])])})),t._v(" "),i("swiper-slide",[t._l(t.continued,function(s){return t.isContinue?t._e():i("ul",{key:s.id,staticClass:"continue-list container",on:{click:function(e){t.goInvestDetail(s.id)}}},[s.mark?i("li",{staticClass:"mark"},[i("span",[t._v(t._s(t._f("mark")(s.mark)))]),t._v(" "),i("img",{attrs:{src:e("LMF7"),alt:""}})]):t._e(),t._v(" "),i("li",{staticClass:"list-one"},[t._v(t._s(s.productName))]),t._v(" "),i("li",{staticClass:"list-two"},[i("span",[t._v(t._s(t._f("thousand")(100*s.interestRate)))]),t._v(" "),i("span",[t._v(t._s(t._f("thousand")(s.money)))])]),t._v(" "),i("li",{staticClass:"list-three"},[i("span",[t._v("预期年化 (%)")]),t._v(" "),i("span",[t._v("起投金额 (元)")])]),t._v(" "),i("li",{staticClass:"list-four bte8"},[t._v(t._s(t._f("date")(s.startAt))+"起息 - "+t._s(t._f("date")(s.endAt))+"到期")])])}),t._v(" "),t.isContinue?i("div",{staticClass:"flex-cent continue-box"},[i("img",{attrs:{src:e("rIpr"),alt:"立即投资"}}),t._v(" "),i("span",{staticClass:"tip"},[t._v("暂无可续投产品，赶紧投资吧")]),t._v(" "),i("div",{staticClass:"swiper-pagination"},[i("div",{staticClass:"btn continue-invest"},[t._v("立即投资")])])]):t._e()],2)],1)],1)},staticRenderFns:[]};var l=e("VU/8")(o,r,!1,function(t){e("Ql5s")},"data-v-772b3cf5",null);s.default=l.exports},LMF7:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAABrklEQVRIS7XVuy9DcRQH8HNur960t4pKVSIxSBkYjE07SSxMqqXUo15lsKjYmEisnv9JY+lkoxKTRIKQiAi5yu1Db+ltb39CEI+mKcn5zed8zvf8fsMPgehgfHqGUdgYD07TwHIwSARPUcGTU0SJJ6jg8UmixGMTRHBgnAgeHSOCRwJE8PAoETxEBfuHiRIPDhHBA1Swz0+UuH+QCO7zEcFeKtjTT5TY01cWrDynABHBKFSW9fei3OstCec0FaTUNTypmQhjIIiC2GEzNwCv05ccgLLbUxRmwEBWJEhk5BuNsVnH3ml4GQC7nXYvx1VsVxstNotYBwhYdEBROJ1NQuxRymmF3IqYlDfajmPpr91Rh93McdwCz+sXrSYbLwpVv3B8cPd+Js7lVYilbyGTVSIasJBr/+yk1L5Rh70VdbotUW/qtFbWf7sefOhxM8Ze176DxFP8Uivk55zR83BZL/RedOhscRc4brPaUNNoMda9PTJedXWye0XKqnl1zaAkV9uPJOUv6EftbpvVZDDXLAm8fr5WtAl44GrZ0ZgWcu1fnP8H/NkTdTQ1o45ffwFZHbhzZpDxVwAAAABJRU5ErkJggg=="},Ql5s:function(t,s){}});