(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},i=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0ec0":function(e,t,a){"use strict";var r=a("563d"),n=a.n(r);n.a},"1fd3":function(e,t,a){"use strict";var r=a("a292"),n=a.n(r);n.a},"20c2":function(e,t,a){},4460:function(e,t,a){},"4e7c":function(e,t,a){},"563d":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)},i=[],o=(a("5c0b"),a("2877")),s={},c=Object(o["a"])(s,n,i,!1,null,null,null),u=c.exports,l=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("Appear",{attrs:{transition:[0,"-100px"]}},[a("Top",{on:{getQuery:e.fetchData}})],1),a("Appear",{attrs:{delay:700,transition:[0,"-100px"]}},[a("RecipieLists",{attrs:{showText:e.showText,recipies:e.recipies}})],1),a("Appear",{attrs:{delay:800,transition:["3em",0]}},[a("Footer")],1)],1)},d=[],f=(a("99af"),a("4160"),a("d3b7"),a("159b"),a("2909")),m=(a("96cf"),a("1da1")),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Header"},[a("main",[e._v(" "+e._s(e.prevent())+" "),a("section",[a("Appear",{attrs:{delay:100,transition:["-200px",0]}},[a("h1",[e._v("Cook like the pro's with Goob's Kooking")])]),a("sub",[a("Appear",{attrs:{delay:300,transition:["200px",0]}},[a("p",[e._v("Create, Share, And Experience Amazing Recipe's")])])],1)],1),a("section",[a("Appear",{attrs:{delay:400,transition:["200px","200px"]}},[a("form",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"Search...",autocomplete:"off"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),a("button",{staticClass:"btn search",on:{click:function(t){return e.$emit("getQuery",e.query)}}},[a("fa-icon",{attrs:{icon:["fas","search"],size:"1x"}})],1)])]),a("footer",[a("Appear",{attrs:{delay:600,transition:["-200px","-200px"]}},[a("Button",{attrs:{external:!1,route:"/About",text:"About"}})],1)],1)],1)])])},v=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("router-link",{staticClass:"btn a",class:!0===e.external?"hide":"",attrs:{to:void 0!==e.route?e.route:""}},[e._v(e._s(e.text))]),a("a",{staticClass:"btn a",class:!0===e.external?"":"hide",attrs:{target:"#",href:void 0!==e.href?e.href:""}},[e._v(e._s(e.text))])],1)},g=[],_={name:"Button",props:["route","text","external","href"]},b=_,x=(a("9a9b"),Object(o["a"])(b,y,g,!1,null,"63f56bbe",null)),A=x.exports,w={name:"Header",components:{Button:A},data:function(){return{query:""}},methods:{prevent:function(){setTimeout((function(){document.querySelector(".search").addEventListener("click",(function(e){e.preventDefault()}))}))}}},C=w,k=(a("aa34"),Object(o["a"])(C,h,v,!1,null,"10d0d19a",null)),j=k.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("main",[a("div",{staticClass:"container"},[a("h1",{directives:[{name:"show",rawName:"v-show",value:!0===e.showText,expression:"showText === true"}]},[e._v("Search results will apear here!")]),e._v(" "+e._s(e.addID())+" "),e._l(e.recipies,(function(t){return a("div",{key:t.id,staticClass:"card"},[a("Appear",{attrs:{delay:200*(e.recipies.indexOf(t)+1),transition:["-200px",0]}},[a("div",{staticClass:"img-box",on:{mouseenter:function(a){e.$emit("getRecipe",e.storeRecipe(t))}}},[e._v(" "+e._s(e.addEvents())+" "),a("h1",[e._v("Hover over me!")]),a("img",{attrs:{src:t.image,alt:""}})])]),a("Appear",{attrs:{delay:200*(e.recipies.indexOf(t)+1),transition:["-200px",0]}},[a("div",{staticClass:"details"},[a("h3",[e._v(e._s(t.label))]),a("router-link",{staticClass:"btn btn-recipe",attrs:{to:"/FullRecipe"}},[e._v("View recipe")]),a("p",{staticClass:"calories"},[a("strong",[e._v("Calories:")]),e._v(" "+e._s(Math.floor(t.calories)))]),a("p"),a("h3",[e._v("Health Labels:")]),a("div",e._l(t.healthLabels,(function(t){return a("p",{key:t},[e._v(e._s(t))])})),0)],1)])],1)}))],2)])])},R=[],S=a("5530"),T={name:"RecipieLists",props:["recipies","showText"],data:function(){return{storedRecipe:{}}},methods:{addID:function(){this.recipies.forEach((function(e){var t=Math.random();e=Object(S["a"])(Object(S["a"])({},e),{},{id:t}),console.log(e)}))},storeRecipe:function(e){this.storedRecipe=e,localStorage.setItem("recipe",JSON.stringify(this.storedRecipe))},addEvents:function(){setTimeout((function(){var e=document.querySelectorAll(".card");e.forEach((function(e){e.addEventListener("mouseenter",(function(e){var t=e.currentTarget.childNodes[0];t.style.transform="rotateY(-135deg)",t.style.transition=".7s linear"})),e.addEventListener("mouseleave",(function(e){var t=e.currentTarget.childNodes[0];t.style.transform="rotateY(0deg)"}))}))}))}}},E=T,q=(a("0ec0"),Object(o["a"])(E,O,R,!1,null,"77e5ca06",null)),L=q.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("footer",[a("div",{staticClass:"copyright"},[e._v(" Goob's Kooking "),a("fa-icon",{attrs:{icon:["fas","copyright"],size:"1x"}}),e._v(" "+e._s(e.currentYear())+" ")],1),a("Button",{attrs:{external:!0,href:"https://github.com/Goob-hub",text:"My GitHub"}})],1)])},B=[],$={components:{Button:A},methods:{currentYear:function(){var e=new Date,t=e.getFullYear();return t}}},P=$,F=(a("1fd3"),Object(o["a"])(P,N,B,!1,null,"5e84f1af",null)),H=F.exports,D={name:"Home",components:{Top:j,RecipieLists:L,Footer:H},data:function(){return{url_base:"https://api.edamam.com/search",app_id:"0e1f9295",app_key:"cbe519667a1441dcceea9f78daecde53",query:"",showText:!0,recipies:[]}},methods:{fetchData:function(e){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.query=e,a.next=3,fetch("".concat(t.url_base,"?q=").concat(t.query,"&app_id=").concat(t.app_id,"&app_key=").concat(t.app_key)).then((function(e){return e.json()})).then((function(e){return t.setData(e)}));case 3:case"end":return a.stop()}}),a)})))()},setData:function(e){var t=this;this.recipies=[],0===e.hits.length?this.showText=!0:this.showText=!1;var a=e.hits;a.forEach((function(e){var a=e.recipe;t.recipies=[].concat(Object(f["a"])(t.recipies),[a])}))}}},I=D,M=Object(o["a"])(I,p,d,!1,null,null,null),G=M.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("Appear",{attrs:{transition:[0,"200px"]}},[a("header",[a("main",[a("Appear",{attrs:{delay:200,transition:["-200px","-200px"]}},[a("h1",[e._v(e._s(e.getRecipe().label))])]),a("Appear",{attrs:{delay:300,transition:["200px","200px"]}},[a("p",{staticClass:"desc"},[e._v("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores unde beatae, quaerat impedit vitae iusto mollitia consequuntur assumenda id saepe, non explicabo blanditiis eum magnam enim eaque, ad molestias facere.")])]),a("footer",[a("Appear",{attrs:{delay:500,transition:["-200px",0]}},[a("Button",{attrs:{external:!1,route:"/",text:"Home"}})],1),a("Appear",{attrs:{delay:600,transition:["200px",0]}},[a("Button",{attrs:{external:!0,href:e.getRecipe().url,text:"Source"}})],1)],1)],1)])]),a("Appear",{attrs:{delay:600,transition:[0,"-200px"]}},[a("section",[a("article",{staticClass:"ingredients"},[a("Appear",{attrs:{delay:700,transition:["-200px","-200px"]}},[a("h1",[e._v("Ingredients:")])]),a("Appear",{attrs:{delay:700,transition:["200px","200px"]}},[a("ul",{staticClass:"list"},e._l(e.getRecipe().ingredients,(function(t){return a("li",{key:t.text+t.image+t.weight},[e._v(e._s(t.text))])})),0)]),a("Appear",{attrs:{delay:800,transition:["200px",0]}},[a("carousel",{attrs:{paginationActiveColor:"#A8A853",paginationColor:"#626262",autoplayTimeout:4e3,autoplayHoverPause:!0,autoplay:!0,perPageCustom:[[768,3],[1024,3],[300,1],[500,2]]}},e._l(e.filteredIngredients(),(function(e){return a("slide",{directives:[{name:"show",rawName:"v-show",value:e.image,expression:"ingredient.image"}],key:e.image+e.text+e.weight},[a("img",{staticClass:"ingredient-img",attrs:{src:e.image}}),a("img")])})),1)],1)],1),a("article",{staticClass:"labels"},[a("h1",[e._v("Labels:")]),a("ul",[e._l(e.getRecipe().cautions,(function(t){return a("li",{key:t},[e._v(e._s(t))])})),e._l(e.getRecipe().dietLabels,(function(t){return a("li",{key:t},[e._v(e._s(t))])})),e._l(e.getRecipe().healthLabels,(function(t){return a("li",{key:t},[e._v(e._s(t))])}))],2)]),a("article",{staticClass:"nutrients"},[a("h1",[e._v("Nutrients:")]),a("ul",e._l(e.getRecipe().totalNutrients,(function(t){return a("li",{key:t.label},[e._v(" "+e._s(t.label)+": "+e._s(Math.floor(t.quantity))+e._s(t.unit)+" ")])})),0)])])]),a("Appear",{attrs:{delay:800,transition:[0,"-200px"]}},[a("Footer",{staticClass:"half"})],1),e._v(" "+e._s(e.justify())+" ")],1)},K=[],V=(a("4de4"),a("0a63")),Y={components:{Button:A,Footer:H,Carousel:V["Carousel"],Slide:V["Slide"]},data:function(){return{image:'<img  :src="ingredient.image"><img>',recipe:this.getRecipe()}},methods:{getRecipe:function(){var e=JSON.parse(localStorage.getItem("recipe"));return setTimeout((function(){var t=document.querySelector("header");t.style.background="linear-gradient(135deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .9)), center / cover no-repeat url(".concat(e.image,")")}),1e-5),e},filteredIngredients:function(){var e=JSON.parse(localStorage.getItem("recipe")),t=e.ingredients.filter((function(e){if(e.image)return e}));return t},justify:function(){setTimeout((function(){var e=document.querySelector(".VueCarousel-dot-container");if(e.childNodes>0){var t=document.querySelector(".VueCarousel-inner");t.style="justify-content: center;"}}))}}},z=Y,Q=(a("c504"),Object(o["a"])(z,J,K,!1,null,"37908391",null)),U=Q.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("Appear",{attrs:{transition:[0,"-200px"]}},[a("header",[a("main",[a("Appear",{attrs:{delay:100,transition:["-200px",0]}},[a("h1",[e._v("About Goobs Kooking")])]),a("Appear",{attrs:{delay:300,transition:["200px",0]}},[a("p",[e._v(" Goobs Kooking was created with vue.js and the ednam recipe database to get recipies! ")])]),a("Appear",{attrs:{delay:500,transition:["-200px",0]}},[a("footer",[a("Button",{attrs:{external:!1,route:"/",text:"Home"}})],1)])],1)])]),a("Appear",{attrs:{transition:[0,"200px"]}},[a("section",[a("Appear",{attrs:{delay:700,transition:["200px",0]}},[a("article",[a("h1",[e._v("Parts of Goob's Kooking and other info!")]),a("ul",[a("li",[a("p",[e._v("Used Vue Carousel.")])]),a("li",[a("p",[e._v("Used sass for styling.")])]),a("li",[a("p",[e._v("This is my first vue project!")])]),a("li",[a("p",[e._v("Total time to make: 5 days, around 1.5-3 hours a day.")])])])])]),a("Appear",{attrs:{delay:900,transition:["-200px",0]}},[a("div",{staticClass:"links"},[a("h1",[e._v("Links/Sources:")]),a("Button",{attrs:{external:!0,href:"https://developer.edamam.com/",text:"Ednam"}}),a("Button",{attrs:{external:!0,href:"https://developer.edamam.com/",text:"Vue Carousel"}})],1)])],1)]),a("Appear",{attrs:{delay:1100,transition:[0,"-200px"]}},[a("Footer",{staticClass:"f"})],1)],1)},X=[],Z={name:"About",components:{Button:A,Footer:H}},ee=Z,te=(a("df9f"),Object(o["a"])(ee,W,X,!1,null,"1a58cab9",null)),ae=te.exports;r["a"].use(l["a"]);var re=[{path:"/",name:"Home",component:G},{path:"/FullRecipe",name:"FullRecipe",component:U},{path:"/About",name:"About",component:ae}],ne=new l["a"]({mode:"history",routes:re}),ie=ne,oe=a("ecee"),se=a("ad3d"),ce=a("c074");oe["c"].add(ce["d"],ce["c"],ce["b"],ce["a"]),r["a"].component("fa-icon",se["a"]);var ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{appear:"",css:!1},on:{"before-enter":e.beforeEnter,enter:e.enter}},[e._t("default")],2)},le=[],pe=(a("a15b"),a("a9e3"),{props:{duration:{type:Number,default:500},delay:{type:Number,default:100},transition:Array},methods:{beforeEnter:function(e){e.style.opacity=0,this.transition&&(e.style.transform="translate(".concat(this.transition.join(","),")"))},enter:function(e){var t=this,a="opacity ".concat(this.duration,"ms ease-in-out ").concat(this.delay,"ms");this.transition&&(a+=", transform ".concat(this.duration,"ms ease-in-out ").concat(this.delay,"ms")),e.style.transition=a,getComputedStyle(e),setTimeout((function(){e.style.opacity=1,t.transition&&(e.style.transform="initial")}))}}}),de=pe,fe=Object(o["a"])(de,ue,le,!1,null,null,null),me=fe.exports;r["a"].component("Appear",me),r["a"].config.productionTip=!1,new r["a"]({router:ie,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var r=a("9c0c"),n=a.n(r);n.a},"981d":function(e,t,a){},"9a9b":function(e,t,a){"use strict";var r=a("20c2"),n=a.n(r);n.a},"9c0c":function(e,t,a){},a292:function(e,t,a){},aa34:function(e,t,a){"use strict";var r=a("4460"),n=a.n(r);n.a},c504:function(e,t,a){"use strict";var r=a("4e7c"),n=a.n(r);n.a},df9f:function(e,t,a){"use strict";var r=a("981d"),n=a.n(r);n.a}});
//# sourceMappingURL=app.6e5df6fc.js.map