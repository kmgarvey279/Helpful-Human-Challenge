(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,r){e.exports=r.p+"static/media/logo-symbol.629f0661.svg"},25:function(e,t,r){e.exports=r(42)},30:function(e,t,r){},31:function(e,t,r){},32:function(e,t,r){},33:function(e,t,r){},34:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){},42:function(e,t,r){"use strict";r.r(t);var a=r(0),o=r.n(a),c=r(15),n=r.n(c),l=r(16),g=r(17),y=r(23),h=r(18),i=r(6),u=r(24);r(30);var d=function(e){return o.a.createElement("div",{id:"color"},o.a.createElement("div",{id:"palette",style:{backgroundColor:e.hex},onClick:function(){e.colorSelect(e.hex),e.categorySelect(e.category)}}),o.a.createElement("div",{id:"label"},o.a.createElement("p",null,e.hex)))};r(31);var x=function(e){return o.a.createElement("div",{id:"filteredColor"},o.a.createElement("div",{id:"filteredPalette",style:{backgroundColor:e.hex},onClick:function(){e.colorSelect(e.hex),e.categorySelect(e.category)}}),o.a.createElement("div",{id:"filteredLabel"},o.a.createElement("p",null,e.hex)))},E=(r(32),[{category:"green",hex:"#66CDAA"},{category:"green",hex:"#458B74"},{category:"green",hex:"#00FA9A"},{category:"green",hex:"#6B8E23"},{category:"green",hex:"#00FF7F"},{category:"green",hex:"#00EE76"},{category:"green",hex:"#00CD66"},{category:"green",hex:"#008B45"},{category:"green",hex:"#3CB371"},{category:"green",hex:"#54FF9F"},{category:"green",hex:"#2E8B57"},{category:"green",hex:"#00C957"},{category:"blue",hex:"#27408B"},{category:"blue",hex:"#6495ED"},{category:"blue",hex:"#B0C4DE"},{category:"blue",hex:"#CAE1FF"},{category:"blue",hex:"#BCD2EE"},{category:"blue",hex:"#A2B5CD"},{category:"blue",hex:"#6E7B8B"},{category:"blue",hex:"#778899"},{category:"blue",hex:"#B9D3EE"},{category:"blue",hex:"#1E90FF"},{category:"blue",hex:"#1C86EE"},{category:"blue",hex:"#63B8FF"},{category:"red",hex:"#F08080"},{category:"red",hex:"#CD5C5C"},{category:"red",hex:"#FF6A6A"},{category:"red",hex:"#EE6363"},{category:"red",hex:"#8B3A3A"},{category:"red",hex:"#CD5555"},{category:"red",hex:"#A52A2A"},{category:"red",hex:"#FF4040"},{category:"red",hex:"#EE3B3B"},{category:"red",hex:"#CD3333"},{category:"red",hex:"#8B2323"},{category:"red",hex:"#CD2626"},{category:"red",hex:"#CD0000"},{category:"purple",hex:"#800080"},{category:"purple",hex:"#BA55D3"},{category:"purple",hex:"#E066FF"},{category:"purple",hex:"#7A378B"},{category:"purple",hex:"#9400D3"},{category:"purple",hex:"#68228B"},{category:"purple",hex:"#8A2BE2"},{category:"purple",hex:"#912CEE"},{category:"purple",hex:"#9370DB"},{category:"purple",hex:"#8968CD"},{category:"purple",hex:"#483D8B"},{category:"purple",hex:"#8B668B"},{category:"purple",hex:"#EE82EE"},{category:"brown",hex:"#F5DEB3"},{category:"brown",hex:"#CDBA96"},{category:"brown",hex:"#8B7E66"},{category:"brown",hex:"#FFDEAD"},{category:"brown",hex:"#8B795E"},{category:"brown",hex:"#D2B48C"},{category:"brown",hex:"#CDAA7D"},{category:"brown",hex:"#E3A869"},{category:"brown",hex:"#8B4500"},{category:"brown",hex:"#CD853F"},{category:"brown",hex:"#8B4513"},{category:"brown",hex:"#CD661D"},{category:"brown",hex:"#D2691E"},{category:"gray",hex:"#C5C1AA"},{category:"gray",hex:"#555555"},{category:"gray",hex:"#5B5B5B"},{category:"gray",hex:"#8E8E8E"},{category:"gray",hex:"#B7B7B7"},{category:"gray",hex:"#EAEAEA"},{category:"gray",hex:"#F5F5F5"},{category:"gray",hex:"#A9A9A9"},{category:"gray",hex:"\t#696969"},{category:"gray",hex:"#E5E5E5"},{category:"gray",hex:"#D1D1D1"},{category:"orange",hex:"#FF8C00"},{category:"orange",hex:"#FF7F00"},{category:"orange",hex:"#CD6600"},{category:"orange",hex:"#FF8000"},{category:"orange",hex:"#FF8247"},{category:"orange",hex:"#FF4500"},{category:"orange",hex:"#CD3700"},{category:"orange",hex:"#FF7256"},{category:"orange",hex:"#CD5B45"},{category:"orange",hex:"#EE5C42"},{category:"orange",hex:"#FA8072"},{category:"yellow",hex:"#ffd700"}]);var C=function(e){var t=E.filter(function(t){return t.category==e.selectedCategory&&t.hex!==e.selectedColor}).slice(0,5);return o.a.createElement("div",{id:"detailWrap"},o.a.createElement("div",{id:"detailPalette",style:{backgroundColor:e.selectedColor}}),o.a.createElement("div",{id:"detailLabel"},o.a.createElement("p",null,e.selectedColor)),o.a.createElement("div",{id:"filterWrap"},t.map(function(t){return o.a.createElement(x,{category:t.category,hex:t.hex,style:t.style,colorSelect:e.colorSelect,categorySelect:e.categorySelect})})))};r(33);var m=function(e){return e.pageNumber==e.currentPage?o.a.createElement("div",{id:"pageNumbers"},o.a.createElement("h4",{id:"selectedPage",onClick:function(){e.changePage(e.pageNumber)}},e.pageNumber)):o.a.createElement("div",{id:"pageNumbers"},o.a.createElement("h4",{onClick:function(){e.changePage(e.pageNumber)}},e.pageNumber))};r(34);var p=function(e){if(null==e.selectedColor){for(var t=[],r=Math.ceil(E.length/12),a=0,c=12,n=0;n<r;n++){var l=E.slice(a,c);t.push(l),a=c,c+=12}for(var g=[],y=1;y<t.length;y++)g.push(o.a.createElement(m,{pageNumber:y,changePage:e.changePage,currentPage:e.currentPage}));return o.a.createElement("div",null,o.a.createElement("div",{id:"wrap"},t[e.currentPage].map(function(t){return o.a.createElement(d,{category:t.category,hex:t.hex,style:t.style,colorSelect:e.colorSelect,categorySelect:e.categorySelect})})),o.a.createElement("div",{id:"pages"},g))}return o.a.createElement("div",null,o.a.createElement(C,{selectedColor:e.selectedColor,selectedCategory:e.selectedCategory,colorSelect:e.colorSelect,categorySelect:e.categorySelect}))},s=(r(35),r(19)),b=r.n(s);var f=function(e){return o.a.createElement("div",{id:"header"},o.a.createElement("img",{src:b.a,weight:"60",height:"60",alt:"Helpful Human Logo"}))};r(36);var v=function(e){return o.a.createElement("div",{id:"sidebar"},o.a.createElement("button",{onClick:function(){e.getRandom()}},"Random Color"),o.a.createElement("div",{id:"colors"},o.a.createElement("h4",{onClick:function(){e.categorySelect("red"),e.getCategoryExample("red")}},"Red"),o.a.createElement("h4",{onClick:function(){e.categorySelect("orange"),e.getCategoryExample("orange")}},"Orange"),o.a.createElement("h4",{onClick:function(){e.categorySelect("yellow"),e.getCategoryExample("yellow")}},"Yellow"),o.a.createElement("h4",{onClick:function(){e.categorySelect("green"),e.getCategoryExample("green")}},"Green"),o.a.createElement("h4",{onClick:function(){e.categorySelect("blue"),e.getCategoryExample("blue")}},"Blue"),o.a.createElement("h4",{onClick:function(){e.categorySelect("purple"),e.getCategoryExample("purple")}},"Purple"),o.a.createElement("h4",{onClick:function(){e.categorySelect("brown"),e.getCategoryExample("brown")}},"Brown"),o.a.createElement("h4",{onClick:function(){e.categorySelect("gray"),e.getCategoryExample("gray")}},"Gray")))},S=(r(37),r(20)),B=r(5),F=function(e){function t(e){var r;return Object(l.a)(this,t),(r=Object(y.a)(this,Object(h.a)(t).call(this,e))).state={selectedColor:null,selectedCategory:null,currentPage:1},r.changeSelectedColor=r.changeSelectedColor.bind(Object(i.a)(r)),r.changeSelectedCategory=r.changeSelectedCategory.bind(Object(i.a)(r)),r.changePage=r.changePage.bind(Object(i.a)(r)),r.getRandom=r.getRandom.bind(Object(i.a)(r)),r.getCategoryExample=r.getCategoryExample.bind(Object(i.a)(r)),r}return Object(u.a)(t,e),Object(g.a)(t,[{key:"changeSelectedColor",value:function(e){this.setState({selectedColor:e})}},{key:"changeSelectedCategory",value:function(e){this.setState({selectedCategory:e})}},{key:"changePage",value:function(e){this.setState({currentPage:e})}},{key:"getRandom",value:function(){var e=Math.floor(Math.random()*E.length);this.changeSelectedColor(E[e].hex),this.changeSelectedCategory(E[e].category)}},{key:"getCategoryExample",value:function(e){var t=E.find(function(t){return t.category==e});this.changeSelectedColor(t.hex)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(S.a,null,o.a.createElement(f,null),o.a.createElement(v,{colorSelect:this.changeSelectedColor,categorySelect:this.changeSelectedCategory,colorList:E,getRandom:this.getRandom,getCategoryExample:this.getCategoryExample}),o.a.createElement(B.a,{path:"/",render:function(t){return o.a.createElement(p,{colorList:E,currentRouterpath:t.location.pathname,selectedColor:e.state.selectedColor,selectedCategory:e.state.selectedCategory,colorSelect:e.changeSelectedColor,categorySelect:e.changeSelectedCategory,currentPage:e.state.currentPage,changePage:e.changePage})}})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.8bb3c3ac.chunk.js.map