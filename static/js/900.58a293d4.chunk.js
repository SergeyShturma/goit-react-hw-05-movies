"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[900],{1687:function(e,t,n){n.d(t,{Hx:function(){return v},Y5:function(){return f},bI:function(){return i},cb:function(){return h},uV:function(){return l},wr:function(){return p}});var r=n(5861),a=n(7757),c=n.n(a),u=n(1243),s="https://api.themoviedb.org/3",o="a8e6047ebc6d4087c1e6648e8f96688b",i=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"/trending/movie/week?api_key=").concat(o,"&page=1"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h=function(e){return u.Z.get("".concat(s,"/movie/").concat(e,"/videos?api_key=").concat(o)).then((function(e){return e.data.results}))}},1900:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(9439),a=n(2791),c=n(7689),u=n(1687),s=n(458),o="Cast_wrapper__XmIBi",i="Cast_container__iz+ye",p="Cast_character__tKDlA",f=n(184),l=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],l=t[1],v=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.uV)(v).then((function(e){l(e.cast)}))}),[v]),(0,f.jsx)("div",{className:o,children:n.length>0?n.map((function(e){var t=e.id,n=e.profile_path,r=e.name,a=e.character;return(0,f.jsxs)("div",{className:i,children:[n?(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n),alt:r,width:100}):(0,f.jsx)(s.scC,{size:125}),(0,f.jsxs)("p",{children:[" ",(0,f.jsx)("b",{children:r})," "]}),(0,f.jsxs)("p",{className:p,children:[" Character: ",a]})]},t)})):(0,f.jsx)("p",{children:"Sorry, there isn't any info"})})}}}]);
//# sourceMappingURL=900.58a293d4.chunk.js.map