(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,r){},48:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(2),s=r(14),c=r.n(s),l=r(15),o=r(16),i=r(17),d=r(20),h=r(19);r(26);var u=function(e){return Object(a.jsx)("div",{className:"wrapper",children:e.children})},j={header:{backgroundColor:"rgb(1, 1, 71, .9)",color:"white",textShadow:"10px 10px 25px black",textAlign:"center",marginTop:"-1.5rem",marginLeft:"-1.5rem",marginRight:"-1.5rem",padding:"2rem",borderBottom:"5px solid red"}};function m(e){return Object(a.jsxs)("div",{style:j.header,children:[Object(a.jsx)("h1",{children:e.title}),Object(a.jsx)("h2",{className:"display-2 text-center font-weight-bold",children:e.subtitle})]})}r(27);var b={searchBox:{margin:"2rem auto",display:"block",height:"2rem"}};function f(e){return Object(a.jsx)("div",{className:"mb-5",children:Object(a.jsx)("form",{className:"form-inline my-2 my-lg-0",children:Object(a.jsx)("input",{style:b.searchBox,className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",onChange:e.handleInputChange,name:"search",value:e.search})})})}function p(e){var t={table:{margin:"0 auto"},title:{backgroundColor:"rgb(250, 250, 250, .8)",paddingLeft:"5vw",paddingRight:"5vw"},data:{marginLeft:"4vw",marginRight:"4vw",textAlign:"center"}};return Object(a.jsx)("div",{children:Object(a.jsxs)("table",{style:t.table,className:"table",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",style:t.title,children:"Image"}),Object(a.jsx)("th",{scope:"col",style:t.title,onClick:e.sortName,children:"Name"}),Object(a.jsx)("th",{scope:"col",style:t.title,children:"Phone"}),Object(a.jsx)("th",{scope:"col",style:t.title,children:"Email"}),Object(a.jsx)("th",{scope:"col",style:t.title,children:"DOB"})]})}),Object(a.jsx)("tbody",{children:e.data.map((function(e,r){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{style:t.data,scope:"row",children:Object(a.jsx)("img",{src:e.picture.thumbnail})}),Object(a.jsx)("td",{style:t.data,children:"".concat(e.name.first," ").concat(e.name.last)}),Object(a.jsx)("td",{style:t.data,children:e.cell}),Object(a.jsx)("td",{style:t.data,children:e.email}),Object(a.jsx)("td",{style:t.data,children:new Date(e.dob.date).toLocaleDateString()})]},r)}))})]})})}function x(e){return Object(a.jsx)("div",{children:e.children})}var g=r(18),O=r.n(g),y=function(){return O.a.get("https://randomuser.me/api/?results=200&nat=us")},v=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={result:[],search:"",filteredResults:[],orderBool:!1},e.getEmployees=function(){y().then((function(t){console.log(t),e.setState({result:t.data.results||[],filteredResults:t.data.results||[]})})).catch((function(e){return console.log(e)}))},e.compareDesc=function(e,t){return e.name.firstEl<t.name.first?-1:0},e.compareAsc=function(e,t){return e.name.firstEl>t.name.first?-1:0},e.sortHelper={desc:e.compareDesc,asc:e.compareAsc},e.handleInputChange=function(t){var r=t.target,a=r.name,n=r.value;e.setState(Object(l.a)({},a,n));var s=e.state.result.filter((function(e){return"".concat(e.name.first," ").concat(e.name.last).toLowerCase().includes(n.toLowerCase())}));e.setState({filteredResults:s})},e.sortName=function(){console.log("clicked"),!1===e.state.orderBool&&e.setState({filteredResults:e.state.filteredResults.sort((function(e,t){return e.name.last.localeCompare(t.name.last)})),orderBool:!0}),!0===e.state.orderBool&&e.setState({filteredResults:e.state.filteredResults.sort((function(e,t){return t.name.last.localeCompare(e.name.last)})),orderBool:!1})},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"render",value:function(){return Object(a.jsxs)(u,{children:[Object(a.jsx)(m,{title:"Employee Directory",subtitle:"Click on carrots to filter by heading or use the search box to narrow your results."}),Object(a.jsxs)(x,{children:[Object(a.jsx)(f,{handleInputChange:this.handleInputChange,search:this.state.search}),Object(a.jsx)(p,{data:this.state.filteredResults,sortName:this.sortName})]})]})}}]),r}(n.Component);var w=function(){return Object(a.jsx)(v,{})};c.a.render(Object(a.jsx)(w,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.fb4a1f89.chunk.js.map