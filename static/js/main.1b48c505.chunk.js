(this["webpackJsonpmistcaller-puzzle"]=this["webpackJsonpmistcaller-puzzle"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),a=n.n(s),c=n(6),i=n.n(c),o=(n(16),n(17),n(5)),l=n(7),d=n(8),u=n(10),f=n(9),h=n(2),j=(n(18),n(19),n(20),n(3)),b="shaded",p="rounded",m=function(e,t){return(Math.random()*(t-e+1)>>0)+e},O=function(){return"f".concat((~~(1e8*Math.random())).toString(16))},v={0:{0:"flower",1:"leaf"},1:{0:"empty",1:b},2:{0:"empty",1:p}},x=[[0,0,1,1],[0,0,1,1],[0,0,1,1]],w={0:"shape",1:"fill",2:"wrap"},y=function(){var e,t=Object(j.a)(x.map((function(e){return function(e){for(var t=Object(j.a)(e),n=t.length;n>0;){var r=Math.floor(Math.random()*n),s=t[--n];t[n]=t[r],t[r]=s}return t}(e)}))),n=m(0,2),r=m(0,3),s=[{id:O(),shape:"",fill:"",wrap:"",correct:!1,selected:!1},{id:O(),shape:"",fill:"",wrap:"",correct:!1,selected:!1},{id:O(),shape:"",fill:"",wrap:"",correct:!1,selected:!1},{id:O(),shape:"",fill:"",wrap:"",correct:!1,selected:!1}];return t.forEach((function(e,a){e.forEach((function(e,c){s[c][w[a]]=t[a][c],n===a&&r===c&&(s[c][w[a]]^=1),s[c][w[a]]=v[a][s[c][w[a]]]}))})),(e=s).map((function(t){return t.correct=!e.some((function(e){return e.id!==t.id&&e.shape===t.shape}))||!e.some((function(e){return e.id!==t.id&&e.fill===t.fill}))||!e.some((function(e){return e.id!==t.id&&e.wrap===t.wrap})),t}))},N={flower:function(e){return Object(r.jsxs)("div",{className:h("flower",{shaded:e.shaded}),children:[Object(r.jsx)("div",{className:h({circle:e.rounded})}),Object(r.jsxs)("div",{className:"flower-inner",children:[Object(r.jsx)("div",{className:"petal"}),Object(r.jsx)("div",{className:"petal"}),Object(r.jsx)("div",{className:"petal"}),Object(r.jsx)("div",{className:"petal"})]})]})},leaf:function(e){return Object(r.jsxs)("div",{className:h("leaf",{shaded:e.shaded}),children:[Object(r.jsx)("div",{className:h({circle:e.rounded})}),Object(r.jsx)("div",{className:"leaf-inner"})]})}},S=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={items:y()},r}return Object(d.a)(n,[{key:"handleSymbolCheck",value:function(e){var t=this;this.setState({items:this.state.items.map((function(t){var n=Object(o.a)({},t);return n.id!==e&&!0!==n.correct||(n.selected=!0),n}))},(function(){return setTimeout((function(){return t.newRound()}),1e3)}))}},{key:"newRound",value:function(){this.setState({items:y()})}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsxs)("div",{className:"description",children:["Mistcaller Puzzle contains three different options to generate a symbol: Shape, Shade, Border.",Object(r.jsx)("br",{}),"Possible shapes values: Flower, Leaf.",Object(r.jsx)("br",{}),"Possible shade values: Transparent, Shaded.",Object(r.jsx)("br",{}),"Possible border values: No border, Border.",Object(r.jsx)("br",{})]}),Object(r.jsx)("div",{className:"shapes",children:this.state.items.map((function(t){var n=N[t.shape],s={shaded:t.fill===b,rounded:t.wrap===p};return Object(r.jsx)("div",{className:h("shape",{selected:t.selected,correct:t.correct}),onClick:function(){return e.handleSymbolCheck(t.id)},children:Object(r.jsx)(n,Object(o.a)({},s))},t.id)}))}),Object(r.jsxs)("div",{className:"description",children:["Unique symbol means that another symbols have different values for only one of options.",Object(r.jsx)("br",{}),"Examples: Only one flower, only one with shade or only one without border.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"Try to find a unique one!",Object(r.jsx)("br",{})]})]})}}]),n}(s.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(S,{})}),document.getElementById("root")),g()}},[[21,1,2]]]);
//# sourceMappingURL=main.1b48c505.chunk.js.map