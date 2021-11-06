(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],{19:function(e,a,t){e.exports=t(35)},24:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),c=t.n(r),i=t(12),s=(t(24),t(6));t(30);var o=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=(a[0],a[1]),r=Object(n.useState)(!0),c=Object(i.a)(r,2),o=(c[0],c[1]),m=function(){window.innerWidth<=960?o(!1):o(!0)};return Object(n.useEffect)((function(){m()}),[]),window.addEventListener("resize",m),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement("h3",{to:"/",className:"navbar-logo",onClick:function(){return t(!1)}},"SIMON DELISLE"),l.a.createElement("div",{class:"social-icons"},l.a.createElement(s.b,{class:"social-icon-link twitter",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("a",{href:"https://www.linkedin.com/in/simon-delisle/"},l.a.createElement("i",{class:"fab fa-linkedin"}))),l.a.createElement(s.b,{class:"social-icon-link twitter",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("a",{href:"https://github.com/simon-delisle"},l.a.createElement("i",{class:"fab fa-github"})))))))};t(8),t(31),t(32);var m=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement("div",{className:"cards__item__link"},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("a",{href:e.path},l.a.createElement("img",{className:"cards__item__img",alt:"Travel",src:e.src}))),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},l.a.createElement("a",{href:e.path}," ",e.text))))))};var u=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"Latest Projects"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(m,{src:"images/tradingBot.jpg",text:"[In Progress] A Profitable Crypto Trading Bot.",label:"EDA  ||  Time-Series Analysis  ||  Backtesting",path:"https://github.com/simon-delisle/District-Real-Estate"}),l.a.createElement(m,{src:"images/california_housing.jpg",text:"Estimation of the Median Housing Price in California Districts.",label:"EDA  ||  Feature Engineering  ||  Machine Learning",path:"https://github.com/simon-delisle/District-Real-Estate"}),l.a.createElement(m,{src:"images/img-12.jpg",text:"A Dash Application to Vizualize up to Date Price and Social Media Activity related to Popular Cryptocurrencies.",label:"Data Scaping  ||   Dash  ||  Bootstrap  ||  Plotly  ||  EDA",path:"https://crypto--dashboard.herokuapp.com/"}),l.a.createElement(m,{src:"images/img-13.jpg",text:"Moneyball - A Brief Description of the Moneyball Strategy Popularised in the Book and Movie of the same Name.",label:"Data Mining  ||  Data Preprocessing ||  EDA  ||  Storytelling",path:"https://moneyball2002.herokuapp.com/"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(m,{src:"images/AI_TicTacToe.jpg",text:"Play Against my Unbeatable Tic-tac-toe Bot and Vizualize its Decision Process.",label:"Javascript  ||  HTML  ||  CSS  ||  Game Theory",path:"https://simon-delisle.github.io/Minimax-TicTacToe/"}),l.a.createElement(m,{src:"images/ab_testing.jpg",text:"A Notebook that Explores the Results of an A/B Test.",label:"Statistics",path:"https://nbviewer.jupyter.org/github/simon-delisle/Statistical-Experiments-and-Signficance-Testing/blob/main/Script.ipynb"})))))};t(33);var p=function(){return l.a.createElement("div",{className:"hero-container"},l.a.createElement("video",{src:"/videos/video-1.mp4",autoPlay:!0,loop:!0,muted:!0}),l.a.createElement("h1",null,"I am a statistics enthusiast and hobbyist developer looking for new challenges."))},E=(t(34),t(18));function d(e){e.preventDefault(),E.a.sendForm("service_4xzsek9","template_dfpguf7",e.target,"user_c8oPemd1G4IkCi5mMex6N").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset(),alert("Email sent. I will get back to you as soon as I see your message.")}var g=function(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("section",{className:"footer-subscription"},l.a.createElement("p",{className:"footer-subscription-heading"},"If you liked what you have seen, you can contact me using the form below."),l.a.createElement("p",{className:"footer-subscription-text"},"I will be glad to answer any questions you may have."),l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",{onSubmit:d},l.a.createElement("input",{className:"footer-input",name:"name",type:"name",placeholder:"Your Name"}),l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement("br",null),l.a.createElement("textarea",{className:"footer-input-text",name:"message",type:"message",placeholder:"Your Message"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",className:"submit btn"}))),l.a.createElement("br",null),l.a.createElement("p",{className:"footer-subscription-text"},"You can also write me an email directly (simon.delisle955@gmail.com).")),l.a.createElement("section",{class:"social-media"},l.a.createElement("div",{class:"social-media-wrap"},l.a.createElement("div",{class:"social-icons"}))))};var h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement(u,null),l.a.createElement(g,null))},b=t(1);function f(){return l.a.createElement("h1",{className:"services"},"SERVICES")}function v(){return l.a.createElement("h1",{className:"products"},"PRODUCTS")}function _(){return l.a.createElement("h1",{className:"sign-up"},"LIKE & SUBSCRIBE")}var y=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null,l.a.createElement(o,null),l.a.createElement(b.c,null,l.a.createElement(b.a,{path:"/",exact:!0,component:h}),l.a.createElement(b.a,{path:"/services",component:f}),l.a.createElement(b.a,{path:"/products",component:v}),l.a.createElement(b.a,{path:"/sign-up",component:_}))))};c.a.render(l.a.createElement(y,null),document.getElementById("root"))},8:function(e,a,t){}},[[19,1,2]]]);
//# sourceMappingURL=main.5f67c1d6.chunk.js.map