(this["webpackJsonpreact-folders"]=this["webpackJsonpreact-folders"]||[]).push([[0],{11:function(e,t,a){e.exports=a(22)},17:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(4),l=a(5),r=a(7),c=a(6),o=a(8),i=a(0),s=a.n(i),u=a(10),m=a.n(u),h=(a(17),a(3)),d=(a(20),a(21),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.width,a=e.height,n=e.folders,l=e.className,r=n.length,c=(t+10*(r-1))/r,o={tabs:{backgroundColor:"rgba(0,0,0,0)"},tab:function(e,t){return{backgroundColor:e.backgroundColor,color:"white",width:c,right:10*t,zIndex:10-t-1}},tabPanel:function(e){return{backgroundColor:e.backgroundColor,height:a,overflow:"xray-folder"===l?"auto":"hidden"}}};return 1===r?s.a.createElement("div",{className:"wrap",style:{width:t,height:a}},s.a.createElement("div",{className:l,style:o.tabPanel(n[0])},n[0].component)):s.a.createElement("div",{className:"wrap",style:{width:t,height:a}},s.a.createElement(h.d,{className:l,style:o.tabs},s.a.createElement(h.b,null,n.map((function(e,t){return s.a.createElement(h.a,{key:e.name,style:o.tab(e,t),className:"side-tab tab1"}," ",e.name)}))),n.map((function(e){return s.a.createElement(h.c,{key:e.name,style:o.tabPanel(e)},e.component)}))))}}]),t}(i.PureComponent)),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).handleSubmit=function(e){e&&e.preventDefault();var t=a.width.value,n=a.height.value;a.setState({width:Number(t),height:Number(n)})},a.state={width:300,height:400},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=[{name:"COAG",backgroundColor:"#fff5e8",component:s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"fluids-table-label-container"},s.a.createElement("h3",null,s.a.createElement("span",{className:"c-circle"},"C"),s.a.createElement("span",{className:"coag-label"},"Coagulation")))),panelLabel:"Nutrition"},{name:"COAG",backgroundColor:"#ffe5e8",component:s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"fluids-table-label-container"},s.a.createElement("h3",null,s.a.createElement("span",{className:"c-circle"},"C"),s.a.createElement("span",{className:"coag-label"},"Coagulation")))),panelLabel:"Nutrition"}];return s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("input",{placeholder:"width",type:"text",ref:function(t){e.width=t}}),s.a.createElement("input",{placeholder:"height",type:"text",ref:function(t){e.height=t}}),s.a.createElement("button",null,"Submit!")),s.a.createElement(d,{width:this.state.width,height:this.state.height,className:"fluids-folder",folders:t}))}}]),t}(i.Component);m.a.render(s.a.createElement(b,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.eb758a7e.chunk.js.map