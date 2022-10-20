"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[325],{5325:function(e,n,s){s.r(n),s.d(n,{default:function(){return _}});var r=s(2791),u=s(9434),t=s(4623),a=s(5705),c=s(7103),i=s(184),m=function(){var e=(0,u.I0)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.J9,{className:"gmn__left",initialValues:{number:""},validationSchema:c.Ry({number:c.Rx().min(1,"Number must be greater than or equal to 1").max(20,"Number must be less than or equal to 20").required("This field is required")}),onSubmit:function(n,s){var r=n.number,u=s.resetForm;e((0,t.xM)(r)),e((0,t.gG)()),e((0,t.Zl)()),e((0,t.oe)()),u()},children:(0,i.jsxs)(a.l0,{children:[(0,i.jsx)("label",{htmlFor:"number"}),(0,i.jsx)(a.gN,{name:"number",className:"gmn__guess",placeholder:"Num"}),(0,i.jsx)("button",{type:"submit",className:"btn-guess",children:"Check!"}),(0,i.jsx)(a.Bc,{component:"div",className:"gmn__error-message",name:"number"})]})})})},o=s(6916),l=function(){var e=(0,o.P1)((function(e){return e.guessNumber.userNumber}),(function(e){return e.guessNumber.secretNumber}),(function(e,n){return e?e>n?"Too high (o\uff9fv\uff9f)\u30ce":e<n?"Too low (\u203e\u25e1\u25dd)":e===n?"CORRECT \u30fe(\u2267\u25bd\u2266*)o":void 0:"Write your number (\u2267\u2207\u2266)\uff89"})),n=(0,u.v9)((function(e){return e.guessNumber.score})),s=(0,u.v9)((function(e){return e.guessNumber.highscore})),r=(0,u.v9)(e),t=(0,u.v9)((function(e){return e.guessNumber.gameStatus}));return(0,i.jsxs)("section",{className:"gmn__right",children:[(0,i.jsx)("p",{className:"gmn__message",children:"play"===t?r:null}),(0,i.jsxs)("p",{className:"gmn__label-score",children:["\ud83d\udcaf Score: ",(0,i.jsx)("span",{className:"gmn__score",children:n})]}),(0,i.jsxs)("p",{className:"gmn__label-highscore",children:["\ud83e\udd47 Highscore: ",(0,i.jsx)("span",{className:"gmn__highscore",children:s})]})]})},g=function(){return Math.floor(20*Math.random()+1)},h=function(){var e=(0,u.I0)(),n=(0,u.v9)((function(e){return e.guessNumber.gameStatus})),s=(0,u.v9)((function(e){return e.guessNumber.secretNumber}));return(0,r.useEffect)((function(){e((0,t.M)(g()))}),[]),(0,i.jsx)("div",{className:"gmn__number",children:"play"===n?"?":s})},b=function(){var e=function(e){switch(e){case"win":return"You WIN! ( \u2022\u0300 \u03c9 \u2022\u0301 )\u2727";case"lost":return"You LOST! (\u2267\u2207\u2266)\uff89";default:return"Guess My Number!"}}((0,u.v9)((function(e){return e.guessNumber.gameStatus})));return(0,i.jsx)("h2",{className:"gmn__title",children:e})},f=function(){var e=(0,u.I0)();return(0,i.jsx)("button",{className:"btn-guess btn-guess_again",onClick:function(){e((0,t.BM)()),e((0,t.M)(g()))},children:"Again!"})},N=s(1087),d=function(){return(0,i.jsx)(N.rU,{to:"/",children:(0,i.jsx)("button",{className:"btn-guess btn-guess_back",children:"Main page!"})})},_=function(){var e=(0,u.v9)((function(e){return e.guessNumber.highscore})),n=(0,u.v9)((function(e){return e.guessNumber.gameStatus})),s=(0,u.I0)(),a=localStorage.getItem("highscore");(0,r.useEffect)((function(){a?s((0,t.gy)(a)):localStorage.setItem("highscore",0)}),[]),(0,r.useEffect)((function(){a<e&&localStorage.setItem("highscore",e)}),[n]);var c="gmn";switch(n){case"win":c+=" gmn_win";break;case"lost":c+=" gmn_lost"}return(0,i.jsxs)("div",{className:c,children:[(0,i.jsxs)("div",{className:"gmn__header",children:[(0,i.jsx)(b,{}),(0,i.jsx)("p",{className:"gmn__between",children:"(Between 1 and 20)"}),(0,i.jsx)(f,{}),(0,i.jsx)(d,{}),(0,i.jsx)(h,{})]}),(0,i.jsxs)("div",{className:"gmn__main",children:[(0,i.jsx)(m,{}),(0,i.jsx)(l,{})]})]})}}}]);
//# sourceMappingURL=325.c8cf904b.chunk.js.map