(this.webpackJsonprobofrindes=this.webpackJsonprobofrindes||[]).push([[0],{12:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t(7),i=t.n(r),s=(t(12),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),a(e),r(e),i(e),s(e)}))}),o=(t(13),t(2)),c=t(3),l=t(5),h=t(4),d=t(0),u=function(e){var n=e.name,t=e.email,a=e.id;return Object(d.jsx)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{alt:"robots",src:"https://robohash.org//".concat(a),style:{width:"200px"}}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("p",{children:t})]})]})})},b=function(e){var n=e.robots,t=n.map((function(e,t){return Object(d.jsx)(u,{id:n[t].id,name:n[t].name,email:n[t].email},t)}));return Object(d.jsx)("div",{children:t})},m=function(e){var n=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},j=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],p=(t(15),function(e){e.name,e.email,e.id;return Object(d.jsx)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:Object(d.jsx)("button",{children:"Add new Robot"})})}),g=function(e){return Object(d.jsx)("div",{className:"mostly-customized-scrollbar",style:{overflowY:"scroll",backgroundColor:"rgba(50,50,50,0.4)",border:"3px rgba(50,50,50,0.4) solid ",borderRadius:"10px",height:"450px"},children:e.children})},f=function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=n.call(this)).state={hasError:!1},a}return Object(c.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)("h1",{children:"oooopps ,unexpected Error"}):this.props.children}}]),t}(a.Component),O=function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(){var e;return Object(o.a)(this,t),(e=n.call(this)).onSearchChange=function(n){e.setState({searchField:n.target.value})},e.state={robots:[],searchField:""},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({robots:j})}))}},{key:"render",value:function(){var e=this,n=this.state.robots.filter((function(n){return n.name.toLocaleLowerCase().includes(e.state.searchField.toLocaleLowerCase())}));return Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{children:"R o b o F r i n d e s"}),Object(d.jsx)(m,{searchChange:this.onSearchChange}),Object(d.jsx)(g,{children:Object(d.jsx)(f,{children:Object(d.jsx)(b,{robots:n})})}),Object(d.jsx)(p,{})]})}}]),t}(a.Component);i.a.render(Object(d.jsx)(O,{}),document.getElementById("root")),s()}},[[16,1,2]]]);
//# sourceMappingURL=main.a55265ea.chunk.js.map