(this.webpackJsonpregistro_ponto=this.webpackJsonpregistro_ponto||[]).push([[0],{25:function(e,t,a){e.exports=a(39)},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(13),r=a.n(l),o=(a(30),a(6)),u=(a(31),a(17),a(23),a(8));a(37);var i=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),l=a[0],r=a[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),m=s[0],E=s[1],b=Object(n.useState)(""),d=Object(o.a)(b,2),g=d[0],p=d[1],v=Object(n.useState)(!1),f=Object(o.a)(v,2),j=(f[0],f[1],Object(u.c)());return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("input",{type:"text",placeholder:"Nome",value:l,onChange:function(e){r(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("input",{type:"text",placeholder:"E-mail",value:m,onChange:function(e){E(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("input",{type:"password",placeholder:"Senha",value:g,onChange:function(e){p(e.target.value)}})),c.a.createElement("button",{onClick:function(){j({type:"SET_NAME",payload:l})}},"Enviar"))};var s=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),l=(a[0],a[1],Object(u.d)((function(e){return e.user})));return Object(n.useEffect)((function(){}),[]),c.a.createElement("div",{id:"login"},c.a.createElement("h2",null,"Login"),c.a.createElement("p",null,"Nome: ",l.name),c.a.createElement(i,null))},m=a(12),E=a(2);var b=Object(u.b)((function(e){return{user:e.user}}))((function(e){var t=Object(n.useState)(0),a=Object(o.a)(t,2),l=(a[0],a[1],Object(n.useState)("")),r=Object(o.a)(l,2),u=(r[0],r[1]),i=Object(n.useState)(""),b=Object(o.a)(i,2),d=(b[0],b[1],Object(n.useState)("")),g=Object(o.a)(d,2);g[0],g[1],Object(n.useEffect)((function(){console.log(e)}),[]);var p=function(){var e=new Date,t=e.getHours(),a=e.getMinutes(),n=e.getSeconds();return"".concat(t,":").concat(a,":").concat(n)};return setInterval((function(){u(p())}),1e3),c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,null,c.a.createElement("header",null,c.a.createElement("h1",null,"Registro de Ponto #599"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(m.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(m.b,{to:"/login"},"Login")),c.a.createElement("li",null,c.a.createElement(m.b,{to:"/feriados"},"Feriados")))),c.a.createElement("p",null,"Nome: ",e.user.name),c.a.createElement(E.d,null,c.a.createElement(E.b,{exact:!0,path:"/"},c.a.createElement(E.a,{to:"/login"})),c.a.createElement(E.b,{exact:!0,path:"/login"},c.a.createElement(c.a.Fragment,null,c.a.createElement(s,null))),c.a.createElement(E.b,{exact:!0,path:"/feriados"},c.a.createElement(E.a,{to:"/login"}))),c.a.createElement("footer",null,c.a.createElement("p",null,"\xa9 Todos os direitos reservados. 2020."))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=a(10),g=a(15),p={name:"Pietro Ribeiro",email:"",password:"",company:"Let's Code"},v="SET_NAME",f=Object(d.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(g.a)(Object(g.a)({},e),{},{name:t.payload});default:return Object(g.a)({},e)}}}),j=Object(d.c)(f);r.a.render(c.a.createElement(u.a,{store:j},c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.121d29bb.chunk.js.map