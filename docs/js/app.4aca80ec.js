(function(t){function e(e){for(var o,r,i=e[0],d=e[1],c=e[2],u=0,p=[];u<i.length;u++)r=i[u],s[r]&&p.push(s[r][0]),s[r]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(t[o]=d[o]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,i=1;i<a.length;i++){var d=a[i];0!==s[d]&&(o=!1)}o&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var o={},s={app:0},n=[];function r(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=o,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(a,o,function(e){return t[e]}.bind(null,o));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-inspire/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=d;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var o=a("64a9"),s=a.n(o);s.a},"15df":function(t,e,a){},"1cc1":function(t,e,a){},"4a2b":function(t,e,a){"use strict";var o=a("75c0"),s=a.n(o);s.a},"56d7":function(t,e,a){"use strict";a.r(e);var o=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[],r={name:"app",props:[],data(){return{}},computed:{imageData(){return this.$store.state.imageData}},methods:{},components:{},watch:{imageData:{handler:t=>{t.url&&(document.querySelector("#app").style.backgroundImage=`url('${t.url}')`)}}}},i=r,d=(a("034f"),a("2877")),c=Object(d["a"])(i,s,n,!1,null,null,null),l=c.exports,u=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard container-fluid"},[a("router-link",{staticClass:"mx-5",attrs:{to:{name:"todos"}}},[t._v("Check your Todos")]),a("weather"),a("quote")],1)},m=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"quote quotes"},[a("h1",[t._v(t._s(t.quoteData.author))]),a("h3",[t._v(t._s(t.quoteData.body))])])},f=[],v={name:"quote",props:[],data(){return{}},computed:{quoteData(){return this.$store.state.quoteData}},methods:{},components:{}},b=v,D=(a("e774"),Object(d["a"])(b,h,f,!1,null,null,null)),g=D.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weather"},[a("h1",[t._v(t._s(Math.floor(1.8*(t.weatherData.temp-273)+32))+"°F")]),a("h3",[t._v(t._s(t.weatherData.name))])])},w=[],T={name:"weather",props:[],data(){return{}},computed:{weatherData(){return this.$store.state.weatherData}},methods:{},components:{}},x=T,y=(a("6ded"),Object(d["a"])(x,_,w,!1,null,null,null)),C=y.exports,O={name:"dashboard",props:[],data(){return{}},computed:{},methods:{},components:{Quote:g,Weather:C}},k=O,q=Object(d["a"])(k,p,m,!1,null,null,null),j=q.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"todos container-fluid"},[a("router-link",{staticClass:"mx-5",attrs:{to:{name:"dashboard"}}},[t._v("BACK TO DASHBOARD")]),a("h1",{staticClass:"main-text text-center"},[t._v("What's On The Agenda, Today?")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("form",{staticClass:"send-it",on:{submit:function(e){return e.preventDefault(),t.createTodo(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo.description,expression:"newTodo.description"}],attrs:{required:"",type:"text",placeholder:"WHAT'S UP?"},domProps:{value:t.newTodo.description},on:{input:function(e){e.target.composing||t.$set(t.newTodo,"description",e.target.value)}}}),a("button",{staticClass:"btn btn-dark",attrs:{type:"submit"}},[t._v("SEND IIIIIT")])]),a("h2",{staticClass:"main-text text-center"},[t._v('"'+t._s(t.incompleteTodos)+' THINGS TO DO TODAY. YOU CAN DO IT!"')])])]),t._l(t.todos,function(t){return a("todo",{attrs:{todoData:t}})})],2)},S=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"todo col-8 movecard"},[a("div",{staticClass:"card m-1 flex-row justify-content-between border border-dark"},[a("h3",{class:{strike:t.todoData.completed}},[t._v(t._s(t.todoData.description))]),a("div",[a("i",{staticClass:"fas fa-trash fa-2x",on:{click:t.deleteTodo}}),a("i",{staticClass:"fas fa-edit fa-2x",attrs:{"data-toggle":"modal","data-target":"#modal"+t.todoData._id}})])]),a("div",{staticClass:"modal",attrs:{id:"modal"+t.todoData._id,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Edit Task")]),a("button",{staticClass:"close btn-info",attrs:{type:"button","aria-label":"Close"},on:{click:t.close}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),a("div",{staticClass:"modal-body"},[a("form",{staticClass:"d-flex justify-content-between",on:{submit:function(e){return e.preventDefault(),t.editTodo(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.todoData.description,expression:"todoData.description"}],attrs:{required:"",type:"text",placeholder:"Edit Todo"},domProps:{value:t.todoData.description},on:{input:function(e){e.target.composing||t.$set(t.todoData,"description",e.target.value)}}}),a("button",{staticClass:"btn btn-dark",attrs:{type:"submit"}},[t._v("UPDATE")])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.finish}},[t._v("FINISHED")])])])])])},P=[],A={name:"todo",props:["todoData"],data(){return{}},computed:{},methods:{deleteTodo(){this.$store.dispatch("deleteTodo",this.todoData._id)},editTodo(){this.$store.dispatch("editTodo",this.todoData),this.close()},close(){$(`#modal${this.todoData._id}`).hide(),$("body").removeClass("modal-open"),$(".modal-backdrop").remove()},finish(){this.todoData.completed=!0,this.$store.dispatch("editTodo",this.todoData),this.close()}},components:{}},M=A,N=(a("b7cf"),Object(d["a"])(M,E,P,!1,null,null,null)),U=N.exports,W={name:"todos",props:[],data(){return{newTodo:{description:""}}},computed:{todos(){return this.$store.state.todos},incompleteTodos(){return this.todos.filter(t=>!t.completed).length}},methods:{createTodo(){this.$store.dispatch("createTodo",{...this.newTodo}),this.newTodo.description=""}},components:{Todo:U}},H=W,L=(a("4a2b"),Object(d["a"])(H,I,S,!1,null,null,null)),Q=L.exports;o["a"].use(u["a"]);var R=new u["a"]({routes:[{path:"/",name:"dashboard",component:j},{path:"/todos",name:"todos",component:Q}]}),B=a("2f62"),F=a("bc3a"),J=a.n(F);o["a"].use(B["a"]);const Y=J.a.create({baseURL:"//bcw-sandbox.herokuapp.com/api/",timeout:5e3});J.a.create({baseURL:"//bcw-sandbox.herokuapp.com/api/danielfasula/todos",timeout:5e3});var G=new B["a"].Store({state:{imageData:{},weatherData:{},quoteData:{},todos:{}},mutations:{imageData(t,e){t.imageData=e},weatherData(t,e){t.weatherData=e},quoteData(t,e){t.quoteData=e},todos(t,e){t.todos=e}},actions:{getData({dispatch:t}){t("getImageData"),t("getQuoteData"),t("getWeatherData"),t("getTodos")},getImageData({commit:t}){Y.get("images").then(e=>{console.log(e),t("imageData",e.data)})},getQuoteData({commit:t}){Y.get("quotes").then(e=>{t("quoteData",e.data.quote)})},getWeatherData({commit:t}){Y.get("weather").then(e=>{let a={...e.data.main,name:e.data.name};console.log(a),t("weatherData",a)})},getTodos({commit:t}){Y.get("danielfasula/todos").then(e=>{console.log(e),t("todos",e.data.data)})},createTodo({dispatch:t},e){Y.post("danielfasula/todos",e).then(a=>{t("getData",e)})},deleteTodo({dispatch:t},e){Y.delete(`danielfasula/todos/${e}`).then(a=>{t("getData",e)})},editTodo({dispatch:t},e){Y.put(`danielfasula/todos/${e._id}`,e).then(a=>{t("getData",e)})}}});o["a"].config.productionTip=!1,new o["a"]({router:R,store:G,mounted(){G.dispatch("getData")},render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,a){},"6ded":function(t,e,a){"use strict";var o=a("8d8c"),s=a.n(o);s.a},"75c0":function(t,e,a){},"8d8c":function(t,e,a){},b7cf:function(t,e,a){"use strict";var o=a("15df"),s=a.n(o);s.a},e774:function(t,e,a){"use strict";var o=a("1cc1"),s=a.n(o);s.a}});
//# sourceMappingURL=app.4aca80ec.js.map