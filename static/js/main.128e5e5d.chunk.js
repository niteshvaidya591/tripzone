(this.webpackJsonptripzone=this.webpackJsonptripzone||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(25),s=c.n(i),r=(c(32),c(33),c(8)),l=c(9),o=c(11),d=c(10),j=c(0),h=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).state={timer:{}},n}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){var e=(new Date).getFullYear(),t=+new Date("July 10, ".concat(e," 18:00:00"))-+new Date;t>0&&this.setState({timer:{days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/1e3/60%60),seconds:Math.floor(t/1e3%60)}})}},{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:0!==this.state.timer.length?"".concat(this.state.timer.days,"d ").concat(this.state.timer.hours,"h ").concat(this.state.timer.minutes,"m ").concat(this.state.timer.seconds,"s"):null})}}]),c}(a.a.Component);c(35);var u=function(){return Object(j.jsxs)("header",{className:"header-container",children:[Object(j.jsx)("p",{className:"header-main__title",children:"Book now to get exciting travel deals. Upto 40% off on credit card payments"}),Object(j.jsx)("p",{className:"header-offer__title",children:Object(j.jsxs)("strong",{children:["Offers ends in ",Object(j.jsx)(h,{})]})})]})},b=(c(36),c.p+"static/media/welcome-image.20dfd7c0.svg");c(37);var m=function(e){return"button"===e.type?Object(j.jsx)("button",{className:e.theme,children:e.label}):Object(j.jsx)("a",{className:e.theme,href:e.link,children:e.label})};var O=function(){return Object(j.jsxs)("section",{className:"app-container hero-container",children:[Object(j.jsx)("div",{className:"hero-image__block",children:Object(j.jsx)("img",{className:"hero-image__block-image",src:b,alt:"plan to trip"})}),Object(j.jsxs)("div",{className:"hero-content__block",children:[Object(j.jsxs)("h1",{className:"hero-content__block-title",children:["Life is short ",Object(j.jsx)("br",{})," and the world is wide!"]}),Object(j.jsx)("h4",{children:"Stay at the comfort of your homes and book a trip to travel after the post pandemic era."}),Object(j.jsx)(m,{label:"plan a trip",type:"button",theme:"button-primary"})]})]})},x=(c(38),c(3)),p=c(2),f=c(17);var v=function(){return Object(j.jsxs)(x.a,{children:[Object(j.jsx)("nav",{className:"nav-container app-container",children:Object(j.jsxs)("ul",{className:"nav-links__group",children:[Object(j.jsx)("li",{className:"nav-links__item",children:Object(j.jsx)(f.a,{className:"nav-links__item-link",to:"#weather",children:"WEATHER"})}),Object(j.jsx)("li",{className:"nav-links__item",children:Object(j.jsx)(f.a,{className:"nav-links__item-link",to:"#destinations",children:"DESTINATIONS"})}),Object(j.jsx)("li",{className:"nav-links__item",children:Object(j.jsx)(f.a,{className:"nav-links__item-link",to:"#quote",children:"GET A QUOTE"})})]})}),Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{path:"/about"}),Object(j.jsx)(p.a,{path:"/users"}),Object(j.jsx)(p.a,{path:"/"})]})]})},y=c(23),g=c(27),N=c.n(g),k=(c(61),function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).state={slider:[]},n}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://run.mocky.io/v3/3e6901dd-9a60-4771-a8cb-9c62177a654c").then((function(e){return e.json()})).then((function(t){e.setState({slider:t.result})}),(function(e){console.log(e)}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:" slider-container",id:"destinations",children:[Object(j.jsx)("h2",{children:"Featured Destinations"}),Object(j.jsx)(N.a,Object(y.a)(Object(y.a)({},{infinite:!1,slidesToScroll:1,arrows:!1,draggable:!0,autoplay:!1,variableWidth:!0,adaptiveHeight:!1,centerMode:!1,accessibility:!0,responsive:[{breakpoint:1400,settings:{slidesToShow:7.5}},{breakpoint:1119,settings:{slidesToShow:4.5}},{breakpoint:1024,settings:{slidesToShow:3.5}},{breakpoint:768,settings:{slidesToShow:2.5}}]}),{},{children:this.state.slider.map((function(e,t){return Object(j.jsxs)("div",{className:"slide-item",children:[Object(j.jsx)("img",{src:e.imageUrl,alt:"View of city ".concat(e.city)}),Object(j.jsx)("h4",{children:e.city})]},t)}))}))]})}}]),c}(n.Component)),S=c(15),_=(c(62),[{id:"name",label:"Your Name",error:"Name is required",pattern:"[A-Za-z ]{3,}",type:"text",title:"Name should be minimun 3 charcters"},{id:"contact",label:"Contact No",error:"Contact No is required",type:"text",title:"Mobile no should be 10 charcters",pattern:"[0-9]{10}",maxLength:"10"},{id:"email",label:"Email",error:"Email is required",type:"email",title:"Email should match this pattern name@domain.extension"}]),w=function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),n.setState({isSuccess:!0}),document.getElementById("name").value="",document.getElementById("contact").value="",document.getElementById("email").value="",setTimeout((function(){n.setState({isSuccess:!1})}),5e3)},n.handleChange=function(e){if("name"===e.target.id&&(e.target.value.length>0?document.querySelector("#".concat(e.target.id,"+p")).style.display="none":document.querySelector("#".concat(e.target.id,"+p")).style.display="block"),"contact"===e.target.id)if(e.target.value.length>0){/\d{10}/.test(e.target.value)?document.querySelector("#".concat(e.target.id,"+p")).style.display="none":document.querySelector("#".concat(e.target.id,"+p")).style.display="block",document.querySelector("#".concat(e.target.id,"+p")).textContent="Invalid Contact No"}else document.querySelector("#".concat(e.target.id,"+p")).style.display="block",document.querySelector("#".concat(e.target.id,"+p")).textContent="Contact No is required";if("email"===e.target.id)if(e.target.value.length>0){/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e.target.value).toLowerCase())?document.querySelector("#".concat(e.target.id,"+p")).style.display="none":document.querySelector("#".concat(e.target.id,"+p")).style.display="block",document.querySelector("#".concat(e.target.id,"+p")).textContent="Invalid Email."}else document.querySelector("#".concat(e.target.id,"+p")).style.display="block",document.querySelector("#".concat(e.target.id,"+p")).textContent="Email is required"},n.state={isSuccess:!1},n.handleChange=n.handleChange.bind(Object(S.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(S.a)(n)),n}return Object(l.a)(c,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"quote-container",id:"quote",children:[Object(j.jsx)("h2",{children:"Travelling as a group? Get a Quote"}),Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[_.map((function(t,c){return Object(j.jsxs)("div",{className:"quote-form__group",children:[Object(j.jsx)("label",{className:"quote-form__label",htmlFor:"name",children:t.label}),Object(j.jsx)("input",{onBlur:e.handleChange,onChange:e.handleChange,className:"quote-form__input",id:t.id,required:"required",type:t.type,title:t.title,pattern:t.pattern?t.pattern:null,maxLength:t.maxLength?t.maxLength:null}),Object(j.jsx)("p",{className:"quote-form__error",children:t.error})]},c)})),Object(j.jsx)("div",{className:"quote-form__success",children:this.state.isSuccess?" We hear you ! We will get back to you for planning your vacation":null}),Object(j.jsx)(m,{type:"button",theme:"button-primary",label:"Submit"})]})]})}}]),c}(a.a.Component),q=c.p+"static/media/icon-party-sunny.d7e1d0b8.svg",C=(c(63),function(e){Object(o.a)(c,e);var t=Object(d.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).state={weatherResult:[],color:["#0D7E88","#D09378","#405B5D","#74A748"]},n}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://run.mocky.io/v3/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576").then((function(e){return e.json()})).then((function(t){e.setState({weatherResult:t.result})}),(function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("section",{className:"weather-container app-container",id:"weather",children:[Object(j.jsx)("h2",{className:"weather-heading",children:"THE WEATHER CHANNEL"}),Object(j.jsx)("div",{className:"weather-body",children:this.state.weatherResult.map((function(t,c){return Object(j.jsxs)("div",{className:"weather-status",style:{backgroundColor:e.state.color[c]},children:[Object(j.jsx)("p",{className:"weather-status__cities",children:t.city}),Object(j.jsx)("img",{src:q,alt:"Weather of the city ".concat(t.city)}),Object(j.jsxs)("p",{className:"weather-status__temparature",children:[t.temp_Fahr,Object(j.jsx)("span",{children:"\xb0"})]})]},c)}))})]})}}]),c}(a.a.Component)),E=c.p+"static/media/Promo-image.14efcb9c.png",T=(c(64),function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"promo",children:[Object(j.jsx)("img",{src:E,alt:"Promo content"}),Object(j.jsxs)("div",{className:"promo-content app-container",children:[Object(j.jsx)("h2",{className:"promo-heading",children:"PLAN A TRIP"}),Object(j.jsxs)("h2",{className:"promo-body",children:[Object(j.jsx)("p",{children:"Make your vacation the most"})," ",Object(j.jsx)("p",{children:"memorable one"})]})]})]})})});c(65);function A(){return Object(j.jsx)(x.a,{children:Object(j.jsx)("footer",{className:"footer-container",children:Object(j.jsxs)("div",{className:"footer-section",children:[Object(j.jsxs)("div",{className:"footer-col",children:[Object(j.jsx)("h2",{children:"Tripzone"}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(x.b,{to:"/",children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)(x.b,{to:"/",children:"Awards"})}),Object(j.jsx)("li",{children:Object(j.jsx)(x.b,{to:"/",children:"Contact Us"})}),Object(j.jsx)("li",{children:Object(j.jsx)(x.b,{to:"/",children:"Feedback"})})]})})]}),Object(j.jsxs)("div",{className:"footer-col",children:[Object(j.jsx)("h2",{children:"Main Offices"}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(x.b,{to:"/",children:"The United States"})}),Object(j.jsx)("li",{children:Object(j.jsx)(x.b,{to:"/",children:"India"})}),Object(j.jsx)("li",{children:Object(j.jsx)(x.b,{to:"/",children:"Brazil"})}),Object(j.jsx)("li",{children:Object(j.jsx)(x.b,{to:"/",children:"Canada"})})]})})]}),Object(j.jsxs)("div",{className:"footer-col",children:[Object(j.jsx)("h2",{children:"Sub Offices"}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(x.b,{to:"/",children:"Australia"})}),Object(j.jsx)("li",{children:Object(j.jsx)(x.b,{to:"/",children:"England"})}),Object(j.jsx)("li",{children:Object(j.jsx)(x.b,{to:"/",children:"France"})}),Object(j.jsx)("li",{children:Object(j.jsx)(x.b,{to:"/",children:"Germany"})})]})})]}),Object(j.jsxs)("div",{className:"footer-col",children:[Object(j.jsx)("h2",{children:"Disclaimer"}),Object(j.jsx)("p",{children:"This layout is created as a part of Sirius UI Recruitments. All the above content has no direct relation with Sirius business."})]})]})})})}var D=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{}),Object(j.jsx)(v,{}),Object(j.jsx)(O,{}),Object(j.jsx)(C,{}),Object(j.jsx)(k,{}),Object(j.jsx)(T,{}),Object(j.jsx)(w,{}),Object(j.jsx)(A,{})]})};var I=function(){return Object(j.jsx)("div",{className:"Tripzone",children:Object(j.jsx)(D,{})})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.128e5e5d.chunk.js.map