(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{53:function(e,t,c){},54:function(e,t,c){},73:function(e,t,c){},87:function(e,t,c){"use strict";c.r(t);var n=c(17),i=c(0),s=c.n(i),r=c(13),a=c.n(r),j=(c(53),c(18)),d=(c.p,c(54),c(94)),l=c(91),o=c(95),b=c(92),h=c(93),u=c(20),O=c(6),x=c(43),p=c.n(x),f=(c(73),c(96)),m=c(15),v=c(1);function g(e){return Object(i.useEffect)((function(){e.\uc2a4\uc704\uce58\ubcc0\uacbd(!0)})),0===e.\ub204\ub978\ud0ed?Object(v.jsx)("div",{children:"\ub0b4\uc6a90"}):1===e.\ub204\ub978\ud0ed?Object(v.jsx)("div",{children:"\ub0b4\uc6a91"}):void 0}function k(e){return Object(v.jsxs)("p",{children:["\uc7ac\uace0 : ",e.\uc7ac\uace0[0]," "]})}var N=Object(m.b)((function(e){return{state:e.reducer,"alert\uc5f4\ub838\ub2c8":e.reducer2}}))((function(e){var t=Object(i.useState)(!0),c=Object(j.a)(t,2),n=c[0],s=c[1],r=Object(i.useState)(0),a=Object(j.a)(r,2),d=a[0],l=a[1],b=Object(i.useState)(!1),h=Object(j.a)(b,2),u=h[0],x=h[1];Object(i.useEffect)((function(){var e=setTimeout((function(){s(!1)}),2e3);return function(){clearTimeout(e)}}),[n]);var p=Object(O.f)(),m=Object(O.g)().id,N=e.shoes.find((function(e){return e.id==m}));return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("div",{className:"\ubc15\uc2a4",children:Object(v.jsx)("h4",{className:"red \uc81c\ubaa9",children:"Detail"})}),!0===n?Object(v.jsx)("div",{className:"my-alert",children:Object(v.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4"})}):null,Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-md-6",children:Object(v.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(N.id+1)+".jpg",width:"100%"})}),Object(v.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(v.jsx)("h4",{className:"pt-5",children:N.title}),Object(v.jsx)("p",{children:N.content}),Object(v.jsxs)("p",{children:[N.price,"\uc6d0"]}),Object(v.jsx)(k,{"\uc7ac\uace0":e.\uc7ac\uace0}),Object(v.jsx)("button",{className:"btn btn-danger",onClick:function(){e.\uc7ac\uace0\ubcc0\uacbd([9,11,12]),e.dispatch({type:"\ud56d\ubaa9\ucd94\uac00","\ub370\uc774\ud130":{id:N.id-1,name:N.title,quan:1}}),p.push("/cart")},children:"\uc8fc\ubb38\ud558\uae30"}),Object(v.jsx)("button",{onClick:function(){p.push("/")},className:"btn btn-danger",children:"\ub4a4\ub85c\uac00\uae30"})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsxs)(o.a,{className:"mt-5",variant:"tabs",defaultActiveKey:"link-0",children:[Object(v.jsx)(o.a.Item,{children:Object(v.jsx)(o.a.Link,{eventKey:"link-0",onClick:function(){x(!1),l(0)},children:"\uc0c1\ud488\uc124\uba85"})}),Object(v.jsx)(o.a.Item,{children:Object(v.jsx)(o.a.Link,{eventKey:"link-1",onClick:function(){x(!1),l(1)},children:"\ubc30\uc1a1\uc815\ubcf4"})})]}),Object(v.jsx)("div",{children:Object(v.jsx)(f.a,{in:u,className:"wow",timeout:500,children:Object(v.jsx)(g,{"\ub204\ub978\ud0ed":d,"\uc2a4\uc704\uce58\ubcc0\uacbd":x})})})]})]})})),y=[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}],C=c(89),S=c(90);var w=Object(m.b)((function(e){return{state:e.reducer,"alert\uc5f4\ub838\ub2c8":e.reducer2}}))((function(e){return Object(v.jsxs)("div",{children:[Object(v.jsxs)(C.a,{responsive:!0,children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"#"}),Object(v.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(v.jsx)("th",{children:"\uc218\ub7c9"}),Object(v.jsx)("th",{children:"\ubcc0\uacbd"})]}),e.state.map((function(t,c){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:t.id}),Object(v.jsx)("td",{children:t.name}),Object(v.jsx)("td",{children:t.quan}),Object(v.jsxs)("td",{children:[Object(v.jsx)("button",{onClick:function(){e.dispatch({type:"\uc218\ub7c9\uc99d\uac00","\ub370\uc774\ud130":t.id})},children:"+"}),Object(v.jsx)("button",{onClick:function(){e.dispatch({type:"\uc218\ub7c9\uac10\uc18c","\ub370\uc774\ud130":t.id})},children:"-"})]})]},c)}))]}),!0===e.alert\uc5f4\ub838\ub2c8?Object(v.jsx)("div",{className:"my-alert",children:Object(v.jsxs)("p",{children:["\uc9c0\uae08 \uad6c\ub9e4\ud558\uc2dc\uba74 \uc2e0\uaddc\ud560\uc778 20% ",Object(v.jsx)(S.a,{onClick:function(){e.dispatch({type:"\uc54c\ub9bc\ucc3d\ub2eb\uae30"})}})]})}):null]})}));function L(e){var t=Object(O.f)();return Object(v.jsxs)("div",{className:"col-md-4",onClick:function(){t.push("/detail/"+e.shoes.id)},children:[Object(v.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(v.jsx)("h4",{children:e.shoes.title}),Object(v.jsxs)("p",{children:[e.shoes.content," \uff06 ",e.shoes.price]})]})}var B=Object(m.b)((function(e){return{state:e.reducer,"alert\uc5f4\ub838\ub2c8":e.reducer2}}))((function(e){var t=Object(i.useState)(y),c=Object(j.a)(t,2),s=c[0],r=c[1],a=Object(i.useState)(!1),x=Object(j.a)(a,2),f=x[0],m=x[1],g=Object(i.useState)([10,11,12]),k=Object(j.a)(g,2),C=k[0],S=k[1];return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(d.a,{bg:"dark",variant:"dark",children:Object(v.jsxs)(l.a,{children:[Object(v.jsx)(d.a.Brand,{href:"#home",children:"ShoeShop"}),Object(v.jsxs)(o.a,{className:"me-auto",children:[Object(v.jsx)(o.a.Link,{href:"#home",as:u.b,to:"/",children:"Home"}),Object(v.jsx)(o.a.Link,{href:"#detail",as:u.b,to:"/detail/0",children:"Detail"}),Object(v.jsx)(o.a.Link,{href:"#Cart",as:u.b,to:"/cart",children:"Cart"})]})]})}),Object(v.jsxs)(O.c,{children:[Object(v.jsxs)(O.a,{exact:!0,path:"/",children:[Object(v.jsxs)(b.a,{className:"background",children:[Object(v.jsx)("h1",{children:"20% Season Off"}),Object(v.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(v.jsx)("p",{children:Object(v.jsx)(h.a,{variant:"primary",children:"Learn more"})})]}),Object(v.jsx)("div",{className:"container",children:Object(v.jsx)("div",{className:"row",children:s.map((function(e,t){return Object(v.jsx)(L,{shoes:s[t],i:t})}))})}),Object(v.jsx)("button",{disabled:f,className:"btn btn-primary",onClick:function(e){p.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){console.log(e.data),r([].concat(Object(n.a)(s),Object(n.a)(e.data))),m(!0)})).catch((function(){console.log("\uc2e4\ud328\ud588\uc5b4\uc694")}))},children:"\ub354\ubcf4\uae30"})]}),Object(v.jsx)(O.a,{path:"/detail/:id",children:Object(v.jsx)(N,{shoes:s,"\uc7ac\uace0":C,"\uc7ac\uace0\ubcc0\uacbd":S})}),Object(v.jsx)(O.a,{path:"/cart",children:Object(v.jsx)(w,{})})]})]})})),q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,97)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))},F=c(33);var I=[];var T=Object(F.b)(Object(F.a)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;if("\ud56d\ubaa9\ucd94\uac00"===t.type){var c=e.findIndex((function(e){return e.id===t.\ub370\uc774\ud130.id}));if(c>=0){var i=Object(n.a)(e);return i[c].quan++,i}var s=Object(n.a)(e);return s.push(t.\ub370\uc774\ud130),s}if("\uc218\ub7c9\uc99d\uac00"===t.type){var r=Object(n.a)(e);return r[t.\ub370\uc774\ud130].quan++,r}if("\uc218\ub7c9\uac10\uc18c"===t.type){var a=Object(n.a)(e);return a[t.\ub370\uc774\ud130].quan--,a}return e},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"\uc54c\ub9bc\ucc3d\ub2eb\uae30"===t.type?e=!1:e}}));a.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(u.a,{children:Object(v.jsx)(m.a,{store:T,children:Object(v.jsx)(B,{})})})}),document.getElementById("root")),q()}},[[87,1,2]]]);
//# sourceMappingURL=main.7eaeb117.chunk.js.map