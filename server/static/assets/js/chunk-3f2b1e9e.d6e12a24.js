(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f2b1e9e"],{"0029":function(t,e,s){"use strict";var i=s("e307"),a=s.n(i);a.a},"386b":function(t,e,s){var i=s("5ca1"),a=s("79e5"),n=s("be13"),r=/"/g,c=function(t,e,s,i){var a=String(n(t)),c="<"+e;return""!==s&&(c+=" "+s+'="'+String(i).replace(r,"&quot;")+'"'),c+">"+a+"</"+e+">"};t.exports=function(t,e){var s={};s[t]=e(c),i(i.P+i.F*a(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",s)}},4232:function(t,e,s){t.exports=s.p+"assets/img/1.a9b784ef.jpg"},4980:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-header"},[t.hasBack?s("div",{staticClass:"back-wrap"},[s("span",{staticClass:"iconfont icon-left",on:{click:t.GoBack}})]):t._e(),s("div",[s("span",[t._v("\n      "+t._s(t.title)+"\n    ")])]),"消息"==t.title?s("div",{staticClass:"contact-wrap",on:{click:function(e){t.$router.push("/contact")}}},[s("span",[t._v("联系人")])]):t._e()])},a=[],n={props:{title:{type:String,required:!0},hasBack:{type:Boolean,default:!1}},methods:{GoBack:function(){this.$router.back()}}},r=n,c=(s("0029"),s("2877")),l=Object(c["a"])(r,i,a,!1,null,"63c43f05",null);l.options.__file="MyHeader.vue";e["a"]=l.exports},"49a9":function(t,e,s){t.exports=s.p+"assets/img/1.a9b784ef.jpg"},"51c5":function(t,e,s){"use strict";var i=s("9522"),a=s.n(i);a.a},"7dab":function(t,e,s){"use strict";var i=s("bf43"),a=s.n(i);a.a},9075:function(t,e,s){},9522:function(t,e,s){},acf5:function(t,e,s){"use strict";var i=s("9075"),a=s.n(i);a.a},b201:function(t,e,s){},b8fa:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contact-wrap"},[s("my-header",{staticClass:"header-border",attrs:{title:"选择联系人",hasBack:!0}}),s("list-view",{attrs:{data:t.groups}})],1)},a=[],n=(s("cadf"),s("551c"),s("097d"),s("4980")),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroll",{ref:"listview",staticClass:"listview",attrs:{listenScroll:t.listenScroll,data:t.data,probeType:t.probeType},on:{scroll:t.scroll}},[i("ul",t._l(t.data,function(e){return i("li",{key:e.title,ref:"listGroup",refInFor:!0,staticClass:"list-group"},["#search"===e.title||t.querykey?"#search"===e.title?i("div",{staticClass:"search-bar-wrap"},[i("search-bar",{on:{query:t.query}})],1):t._e():i("h2",{staticClass:"list-group-title"},[t._v(t._s(e.title))]),t.querykey?t._e():i("ul",t._l(e.items,function(e){return i("li",{key:e.id,staticClass:"list-group-item",on:{click:function(s){t.selectItem(e)}}},[i("img",{staticClass:"avatar",attrs:{src:s("49a9"),width:"50",height:"50"}}),i("div",{staticClass:"main"},[i("span",{staticClass:"name"},[t._v(t._s(e.name))]),i("span",{staticClass:"desc"},[t._v("懒得填写个性签名")])]),i("span",{staticClass:"iconfont icon-message"})])}))])})),i("div",{staticClass:"list-shortcut",on:{touchstart:t.onShortcutTouchStart,touchmove:function(e){return e.stopPropagation(),e.preventDefault(),t.onShortcutTouchMove(e)}}},[i("ul",t._l(t.shortcutList,function(e,s){return i("li",{key:e,staticClass:"item",class:{current:t.currentIndex===s},attrs:{"data-index":s}},[i("p","#"===e?{staticClass:"iconfont icon-search"}:[t._v(t._s(e))])])}))]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fixed",staticClass:"list-fixed"},[i("div",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle)+" ")])]),t.querykey?i("scroll",{staticClass:"search-list-wrap"},[i("search-list",{attrs:{searches:t.searches}})],1):t._e()],1)},c=[],l=(s("d263"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-wrap"},[s("span",{staticClass:"iconfont icon-search"}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"query",staticClass:"input",attrs:{placeholder:t.placeholder},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),s("span",{directives:[{name:"show",rawName:"v-show",value:t.query,expression:"query"}],staticClass:"iconfont icon-close",on:{click:t.clear}})])}),o=[];function u(t,e,s){var i=null;return function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];i&&clearTimeout(i),i=setTimeout(function(){t.apply(s,n)},e)}}var h={props:{placeholder:{type:String,default:"搜索用户昵称"}},data:function(){return{query:""}},methods:{clear:function(){this.query=""}},created:function(){var t=this;this.$watch("query",u(function(e){t.$emit("query",e)},200))}},f=h,d=(s("acf5"),s("2877")),p=Object(d["a"])(f,l,o,!1,null,"0b8e89a6",null);p.options.__file="searchBar.vue";var m=p.exports,v=s("e9fc"),y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search-list"},[i("ul",t._l(t.searches,function(e){return i("li",{key:e.id,staticClass:"search-item"},[i("img",{staticClass:"avatar",attrs:{src:s("4232"),width:"50",height:"50"}}),i("div",{staticClass:"main"},[i("span",{staticClass:"name"},[t._v(t._s(e.name))]),i("span",{staticClass:"desc"},[t._v("懒得填写个性签名")])]),i("span",{staticClass:"iconfont icon-message"})])}))])},_=[],g={props:{searches:{type:Array,default:function(){return[]}}}},b=g,w=(s("51c5"),Object(d["a"])(b,y,_,!1,null,"11bb7f0a",null));w.options.__file="searchList.vue";var C=w.exports;function x(t,e,s){var i="data-";return e=i+e,s?t.setAttribute(e,s):t.getAttribute(e)}var k=18,q=30,T={props:{data:{type:Array,default:function(){return[]}}},mounted:function(){this._calculateHeight()},data:function(){return{scrollY:-1,currentIndex:0,diff:-1,querykey:"",searches:[{id:1,name:"well"},{id:2,name:"测试"},{id:3,name:"well"},{id:4,name:"well"},{id:5,name:"测试"},{id:6,name:"well"},{id:7,name:"well"},{id:8,name:"测试"},{id:9,name:"well"},{id:10,name:"well"},{id:11,name:"测试"},{id:12,name:"well"},{id:13,name:"well"},{id:14,name:"测试"},{id:15,name:"well"}]}},computed:{shortcutList:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixedTitle:function(){return this.scrollY>-64?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},created:function(){this.touch={},this.listenScroll=!0,this.listHeight=[],this.probeType=3},methods:{query:function(t){this.querykey=t},scroll:function(t){this.scrollY=t.y},selectItem:function(t){this.$emit("select",t)},onShortcutTouchStart:function(t){var e=x(t.target,"index"),s=t.touches[0];this.touch.y1=s.pageY,this.touch.anchorIndex=e,this._scrollTo(e)},onShortcutTouchMove:function(t){var e=t.touches[0];this.touch.y2=e.pageY;var s=(this.touch.y2-this.touch.y1)/k|0,i=parseInt(this.touch.anchorIndex)+s;this._scrollTo(i)},_scrollTo:function(t){!t&0!==t||(t<0?t=0:t>this.listHeight.length-2&&(t=this.listHeight.length-2),this.scrollY=-this.listHeight[t],this.$refs.listview.scrollToElement(this.$refs.listGroup[t],0))},_calculateHeight:function(){this.listHeight=[];var t=this.$refs.listGroup,e=0;this.listHeight.push(e);for(var s=0;s<t.length;s++){var i=t[s];e+=i.clientHeight,this.listHeight.push(e)}}},watch:{data:function(){var t=this;this.$nextTick(function(){t._calculateHeight()})},scrollY:function(t){var e=this.listHeight;if(t>-64)this.currentIndex=0;else for(var s=0;s<e.length-1;s++){var i=e[s],a=e[s+1];if(-t>=i&&-t<a)return this.currentIndex=s,void(this.diff=a+t);this.currentIndex=e.length-2}},diff:function(t){var e=t>0&&t<q?t-q:0;this.fixedTop!==e&&(this.fixedTop=e,this.$refs.fixed.style.transform="translate3d(0,".concat(e,"px,0)"))}},components:{Scroll:v["a"],SearchBar:m,SearchList:C}},S=T,$=(s("e254"),Object(d["a"])(S,r,c,!1,null,"59b0d6d6",null));$.options.__file="listview.vue";var H=$.exports,I={data:function(){return{groups:[{title:"#search"},{title:"A",items:[{name:"Ab"},{name:"Ac"}]},{title:"B",items:[{name:"Bb"},{name:"Bc"}]},{title:"C",items:[{name:"Cb"},{name:"Cc"}]},{title:"D",items:[{name:"Db"},{name:"Dc"}]},{title:"E",items:[{name:"Eb"},{name:"Ec"}]},{title:"F",items:[{name:"Fb"},{name:"Fc"}]},{title:"G",items:[{name:"Gb"},{name:"Gc"}]}]}},components:{MyHeader:n["a"],ListView:H}},B=I,E=(s("7dab"),Object(d["a"])(B,i,a,!1,null,"70f62926",null));E.options.__file="Contact.vue";e["default"]=E.exports},bf43:function(t,e,s){},d263:function(t,e,s){"use strict";s("386b")("fixed",function(t){return function(){return t(this,"tt","","")}})},e254:function(t,e,s){"use strict";var i=s("b201"),a=s.n(i);a.a},e307:function(t,e,s){}}]);