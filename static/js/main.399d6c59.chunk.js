(this["webpackJsonpclass-26-solution"]=this["webpackJsonpclass-26-solution"]||[]).push([[0],{23:function(e,t){},24:function(e,t,a){e.exports=a(38)},29:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(6),l=a(7),r=a(9),s=a(8),c=a(0),o=a.n(c),i=a(20),u=a.n(i),h=a(11),m=a(1),d=(a(29),function(e){return o.a.createElement("header",null,o.a.createElement("h1",null,"RESTy"),o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(h.b,{to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(h.c,{to:"/history",activeClassName:"here"},"History")))))}),E=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("footer",null,"\xa9 2018 Code Fellows")}}]),a}(o.a.Component),p=a(16),g=a.n(p),f=a(22),b=(a(36),function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).handleSubmit=function(){var e=Object(f.a)(g.a.mark((function e(t){var a,n,r,s,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),l.props.toggleLoading(),!l.state.url||!l.state.method){e.next=18;break}return e.next=5,fetch(l.state.url);case 5:return a=e.sent,e.next=8,a.json();case 8:n=e.sent,r=n.count,s=n.results,c={},a.headers.forEach((function(e,t){c[t]=e})),console.log(c),l.props.handler(r,c,n,s),l.props.toggleLoading(),e.next=19;break;case 18:alert("missing information");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l.handleChangeURL=function(e){var t=e.target.value;l.setState({url:t})},l.handleChangeMethod=function(e){var t=e.target.id;l.setState({method:t})},l.state={url:"",method:"get"},l}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",null,o.a.createElement("span",null,"URL: "),o.a.createElement("input",{name:"url",type:"text",onChange:this.handleChangeURL}),o.a.createElement("button",{type:"submit"},"GO!")),o.a.createElement("label",{className:"methods"},o.a.createElement("span",{className:"get"===this.state.method?"active":"",id:"get",onClick:this.handleChangeMethod},"GET"),o.a.createElement("span",{className:"post"===this.state.method?"active":"",id:"post",onClick:this.handleChangeMethod},"POST"),o.a.createElement("span",{className:"put"===this.state.method?"active":"",id:"put",onClick:this.handleChangeMethod},"PUT"),o.a.createElement("span",{className:"delete"===this.state.method?"active":"",id:"delete",onClick:this.handleChangeMethod},"DELETE"))))}}]),a}(o.a.Component)),v=a(17),O=a.n(v),j=(a(37),function(e){return o.a.createElement("section",{className:"loading-".concat(e.loading)},o.a.createElement("span",{className:"count"},e.count),o.a.createElement("div",{className:"method"},o.a.createElement(O.a,{name:"Headers",src:e.headerss})),o.a.createElement("div",{className:"url"},o.a.createElement(O.a,{name:"Response",src:e.results})))}),y=a(23),C=a.n(y),k=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).toggleLoading=function(){l.setState({loading:!l.state.loading})},l.handleForm=function(e,t,a,n){l.setState({count:e,headerss:t,data:a,results:n})},l.handelHistory=function(e,t,a){var n=JSON.stringify(a);l.setState({method:e,url:t,body:{me:n}})},l.state={count:0,results:[],loading:!1},l}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d,null),o.a.createElement(m.a,{path:"/",exact:!0},o.a.createElement(b,{handler:this.handleForm,toggleLoading:this.toggleLoading}),o.a.createElement(j,{loading:this.state.loading,count:this.state.count,results:this.state.results,headerss:this.state.headerss})),o.a.createElement(m.a,{path:"/history"},o.a.createElement(C.a,{handel:this.handelHistory})),o.a.createElement(E,null))}}]),a}(o.a.Component),N=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement(k,null))}}]),a}(o.a.Component),S=document.getElementById("root");u.a.render(o.a.createElement(N,null),S)}},[[24,1,2]]]);
//# sourceMappingURL=main.399d6c59.chunk.js.map