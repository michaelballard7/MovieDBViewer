(this.webpackJsonpmovie_viewer=this.webpackJsonpmovie_viewer||[]).push([[0],{24:function(n,e,t){n.exports=t.p+"static/media/reactMovie_logo.08494abf.png"},25:function(n,e,t){n.exports=t.p+"static/media/tmdb_logo.30cd724b.svg"},31:function(n,e,t){n.exports=t.p+"static/media/no_image.31f5bb1d.jpg"},32:function(n,e,t){n.exports=t(55)},55:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(23),o=t.n(i),c=t(1),m=t(2),l=t(24),u=t.n(l),p=t(25),d=t.n(p);function s(){var n=Object(c.a)(["\n  width: 122px;\n  margin-top: 20px;\n  float: right;\n\n  @media screen and (max-width: 500px){\n    display: inline-block;\n    width: 80px;\n    margin-top: 0px;\n  }\n"]);return s=function(){return n},n}function x(){var n=Object(c.a)(["\n  width: 250px;\n  margin-top: 20px;\n\n  @media screen and (max-width: 500px){\n    width: 150px;\n    margin-top: 5px;\n  }\n"]);return x=function(){return n},n}function g(){var n=Object(c.a)(["\n  background: #1c1c1c;\n  padding: 0 20px;\n  box-sizing: border-box;\n  \n  .header-content {\n    max-width: 1280px;\n    min-height: 120px;\n    padding: 20px 0;\n    box-sizing: border-box;\n\n    @media screen and (max-width: 500px){\n      min-height: 0px\n    }\n  }\n"]);return g=function(){return n},n}var f=m.b.div(g()),h=m.b.img(x()),b=m.b.img(s()),v=function(){return r.a.createElement(f,null,r.a.createElement("div",{className:"header-content"},r.a.createElement(h,{src:u.a,alt:"rmdb-logo"}),r.a.createElement(b,{src:d.a,alt:"tmdb-logo"})))},w=t(4);function j(){var n=Object(c.a)(["\n  background: ",";\n  background-size: 100%, cover !important;\n  background-position: center, center !important;\n  width: 100%;\n  height: 600px;\n  position: relative;\n  animation: animateHeroimage 1s;\n\n  .heroimage-content {\n    max-width: 1280px;\n    padding: 20px;\n    margin: 0 auto;\n  }\n\n  .heroimage-text {\n    z-index: 100;\n    max-width: 700px;\n    position: absolute;\n    bottom: 40px;\n    margin-right: 20px;\n    min-height: 100px;\n    background: rgba(0, 0, 0, 0);\n    color: #fff;\n\n    h1 {\n      font-family: 'Abel', sans-serif;\n      font-size: 48px;\n      color: #fff;\n\n      @media screen and (max-width: 720px) {\n        font-size: 38px;\n        color: #fff;\n      }\n    }\n\n    p {\n      font-family: 'Abel', sans-serif;\n      font-size: 22px;\n      line-height: 26px;\n      color: #fff;\n\n      @media screen and (max-width: 720px) {\n        font-size: 16px;\n        line-height: 20px;\n        color: #fff;\n      }\n    }\n\n    @media screen and (max-width: 720px) {\n      max-width: 100%;\n    }\n  }\n\n  @keyframes animateHeroimage {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]);return j=function(){return n},n}var E=m.b.div(j(),(function(n){return"linear-gradient(\n      to bottom, rgba(0,0,0,0)\n      39%,rgba(0,0,0,0)\n      41%,rgba(0,0,0,0.65)\n      100%\n    ),\n    url('".concat(n.image,"'), #1c1c1c")})),O=function(n){var e=n.title,t=n.text,a=n.image;return r.a.createElement(E,{image:a},r.a.createElement("div",{className:"heroimage-content"},r.a.createElement("div",{className:"heroimage-text"},r.a.createElement("h1",null,e),r.a.createElement("p",null,t))))},k=function(){return r.a.createElement("div",{className:""},"Search Bar")};function y(){var n=Object(c.a)(["\n  display: grid;\n  grid-template-columns: repeat(5, minmax(100px, 1fr));\n  grid-gap: 40px;\n  position: relative;\n\n  .grid-element {\n    animation: animateGrid 0.5s;\n  }\n\n  @keyframes animateGrid {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  @media screen and (max-width: 1024px) {\n    grid-template-columns: repeat(4, minmax(100px, 1fr));\n  }\n\n  @media screen and (max-width: 768px) {\n    grid-template-columns: repeat(3, minmax(100px, 1fr));\n  }\n\n  @media screen and (max-width: 600px) {\n    grid-template-columns: repeat(2, minmax(100px, 1fr));\n  }\n\n  @media screen and (max-width: 375px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n"]);return y=function(){return n},n}function _(){var n=Object(c.a)(["\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 20px;\n  h1 {\n    font-family: 'Abel', sans-serif;\n    font-size: 42px;\n\n    @media screen and (max-width: 768px) {\n      font-size: 22px;\n    }\n  }\n"]);return _=function(){return n},n}var z=m.b.div(_()),S=m.b.div(y()),I=function(n){var e=n.header,t=n.children;return r.a.createElement(z,null,r.a.createElement("h1",null,e),r.a.createElement(S,null,t))};function P(){var n=Object(c.a)(["\n  img {\n    width: 100%;\n    height: auto;\n    /* max-height: 350px; */\n    transition: all 0.3s;\n    object-fit: cover;\n    border-radius: 20px;\n\n    :hover {\n      opacity: 0.8;\n    }\n\n    /* @media screen and (max-width: 1024px) {\n      height: 300px;\n    }\n\n    @media screen and (max-width: 768px) {\n      height: 350px;\n    }\n\n    @media screen and (max-width: 600px) {\n      max-height: 300px;\n    }\n\n    @media screen and (max-width: 375px) {\n      max-height: 450px;\n    } */\n\n    .clickable {\n      cursor: pointer;\n    }\n  }\n"]);return P=function(){return n},n}var M=m.b.div(P()),N=function(n){var e=n.image,t=(n.movieId,n.clickable);return r.a.createElement(M,null,t?r.a.createElement("img",{className:"clickable",src:e,alt:"moviethumb"}):r.a.createElement("img",{src:e,alt:"moviethumb"}))};function A(){var n=Object(c.a)(["\n  background: #000;\n  width: 25%;\n  min-width: 200px;\n  height: 70px;\n  color: #fff;\n  cursor: pointer;\n  transition: all 0.3s;\n  border-radius: 40px;\n  font-family: 'Abel', sans-serif;\n  font-size: 28px;\n  max-width: 1280px;\n  display: block;\n  margin: 20px auto;\n  padding: 0 20px;\n  outline: none;\n\n  :hover {\n    opacity: 0.8;\n  }\n"]);return A=function(){return n},n}var q=m.b.button(A()),B=function(n){var e=n.text,t=n.callback;return r.a.createElement(q,{type:"button",onClick:t},e)};function F(){var n=Object(c.a)(["\n  border: 5px solid #f3f3f3;\n  border-top: 5px solid #16d47b;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  animation: spin 0.8s linear infinite;\n  margin: 20px auto;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n\n"]);return F=function(){return n},n}var G=m.b.div(F()),H=function(){return r.a.createElement(G,null)},J="https://api.themoviedb.org/3/",W="73af4d139395f0925592a97a918f14dc",C=t(9),L=t(11),D=t.n(L),K=t(6),Q=t(29),R=t(30),T=t.n(R),U=t(31),V=t.n(U),X=function(){var n=function(){var n=Object(a.useState)({movies:[]}),e=Object(w.a)(n,2),t=e[0],r=e[1],i=Object(a.useState)(!1),o=Object(w.a)(i,2),c=o[0],m=o[1],l=Object(a.useState)(!1),u=Object(w.a)(l,2),p=u[0],d=u[1],s=Object(a.useState)(0),x=Object(w.a)(s,2),g=x[0],f=x[1],h=Object(a.useState)("".concat(J,"movie/popular?api_key=").concat(W)),b=Object(w.a)(h,2),v=b[0],j=b[1],E=function(){var n=Object(Q.a)(D.a.mark((function n(e,t){var a;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(e),d(!1),m(!0),t&&r((function(n){return Object(K.a)(Object(K.a)({},n),{},{currentPage:n.currentPage+1})})),e&&f(e.search("page")),n.prev=5,n.next=8,T.a.get(v,{});case 8:return n.next=10,n.sent.data;case 10:return a=n.sent,n.abrupt("return",a);case 14:n.prev=14,n.t0=n.catch(5),d(!0),console.error(n.t0);case 18:return n.prev=18,m(!1),n.finish(18);case 21:case"end":return n.stop()}}),n,null,[[5,14,18,21]])})));return function(e,t){return n.apply(this,arguments)}}(),O=function(n){return Math.floor(Math.random()*n.length)};return Object(a.useEffect)((function(){v?(console.log("next request endpoint",v),E(v).then((function(n){r((function(e){return Object(K.a)(Object(K.a)({},e),{},{movies:-1!==g?[].concat(Object(C.a)(e.movies),Object(C.a)(n.results)):Object(C.a)(n.results),heroImage:e.heroImage||n.results[O(n.results)],currentPage:n.page,totalPages:n.total_pages})}))}))):m(!0)}),[g,v]),[{state:t,loading:c,error:p},E]}(),e=Object(w.a)(n,2),t=e[0],i=t.state,o=t.loading,c=t.error,m=e[1],l=Object(a.useState)(""),u=Object(w.a)(l,2),p=u[0];u[1];return c?r.a.createElement("div",null,"Something Went Wrong"):i.movies[0]?r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{image:"".concat("http://image.tmdb.org/t/p/").concat("w1280").concat(i.heroImage.backdrop_path),title:i.heroImage.original_title,text:i.heroImage.overview}),r.a.createElement(k,null),r.a.createElement(I,{header:p?"Search results":"Popular Movies"},i.movies.map((function(n){return r.a.createElement(N,{key:n.id,clickable:!0,image:n.poster_path?"".concat("http://image.tmdb.org/t/p/").concat("w500").concat(n.poster_path):V.a,movieId:n.id,movieName:n.original_title})}))),o&&r.a.createElement(H,null),r.a.createElement(B,{text:"Load More Movies",callback:function(){var n="".concat(J,"search/movie?api_key=").concat(W,"&query=").concat(p,"&page=").concat(i.currentPage+1),e="".concat(J,"movie/popular?api_key=").concat(W,"&page=").concat(i.currentPage+1);m(p?n:e,i.currentPage)}})):r.a.createElement(H,null)};function Y(){var n=Object(c.a)(["\n  body{\n    margin: 0;\n    paddng: 0;\n    box-sizing: border-box\n  }\n"]);return Y=function(){return n},n}var Z=Object(m.a)(Y()),$=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(X,null),r.a.createElement(Z,null))};o.a.render(r.a.createElement($,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.d4945395.chunk.js.map