(this["webpackJsonpclass-26-solution"]=this["webpackJsonpclass-26-solution"]||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(2),s=a(4),c=a(3),l=a(0),u=a.n(l),o=a(8),i=a.n(o),h=(a(15),function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement("header",null,u.a.createElement("h1",null,"RESTy"))}}]),a}(u.a.Component)),m=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement("footer",null,"\xa9 2018 Code Fellows")}}]),a}(u.a.Component),d=a(5),p=a.n(d),f=a(9),E=(a(17),function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleSubmit=function(){var e=Object(f.a)(p.a.mark((function e(t){var a,n,s,c,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!r.state.url||!r.state.method){e.next=14;break}return e.next=4,fetch(r.state.url);case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,s=n.count,c={"Content-Type":"application/json"},l=n.results,r.props.handler(s,c,l),e.next=15;break;case 14:alert("missing information");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.handleChangeURL=function(e){var t=e.target.value;r.setState({url:t})},r.handleChangeMethod=function(e){var t=e.target.id;r.setState({method:t})},r.state={url:"",method:""},r}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("form",{onSubmit:this.handleSubmit},u.a.createElement("label",null,u.a.createElement("span",null,"URL: "),u.a.createElement("input",{name:"url",type:"text",onChange:this.handleChangeURL}),u.a.createElement("button",{type:"submit"},"GO!")),u.a.createElement("label",{className:"methods"},u.a.createElement("span",{className:"get"===this.state.method?"active":"",id:"get",onClick:this.handleChangeMethod},"GET"),u.a.createElement("span",{className:"post"===this.state.method?"active":"",id:"post",onClick:this.handleChangeMethod},"POST"),u.a.createElement("span",{className:"put"===this.state.method?"active":"",id:"put",onClick:this.handleChangeMethod},"PUT"),u.a.createElement("span",{className:"delete"===this.state.method?"active":"",id:"delete",onClick:this.handleChangeMethod},"DELETE"))))}}]),a}(u.a.Component)),b=a(6),v=a.n(b),j=(a(18),function(e){return u.a.createElement("section",{className:"results"},u.a.createElement("span",{className:"count"},e.count),u.a.createElement("div",{className:"method"},u.a.createElement(v.a,{name:"Headers",src:e.Header})),u.a.createElement("div",{className:"url"},u.a.createElement(v.a,{name:"Response",src:e.results})))}),O=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).handleForm=function(e,t,a){r.setState({count:e,headers:t,results:a})},r.state={count:0,results:[],headers:{}},r}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(h,null),u.a.createElement(E,{handler:this.handleForm}),u.a.createElement(j,{count:this.state.count,headers:this.state.headers,results:this.state.results}),u.a.createElement(m,null))}}]),a}(u.a.Component),C=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return u.a.createElement(O,null)}}]),a}(u.a.Component),g=document.getElementById("root");i.a.render(u.a.createElement(C,null),g)}},[[10,1,2]]]);
//# sourceMappingURL=main.119e9cb7.chunk.js.map