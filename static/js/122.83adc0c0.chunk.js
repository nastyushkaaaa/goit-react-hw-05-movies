"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[122],{122:function(n,t,e){e.r(t),e.d(t,{Reviews:function(){return a},default:function(){return s}});var c=e(439),r=e(791),i=e(689),o=e(486),u=e(184),a=function(){var n=(0,i.UO)().movieId,t=(0,r.useState)([]),e=(0,c.Z)(t,2),a=e[0],s=e[1];return(0,r.useEffect)((function(){(0,o.sv)(n).then((function(n){return s(n.results)}))}),[n]),(0,u.jsx)(u.Fragment,{children:a.length>0?(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:a.map((function(n){var t=n.author,e=n.content,c=n.id;return(0,u.jsxs)("li",{children:[(0,u.jsx)("h3",{children:t}),(0,u.jsx)("p",{children:e})]},c)}))})}):(0,u.jsx)("p",{children:"There is no reviews yet."})})},s=a},486:function(n,t,e){e.d(t,{DC:function(){return o},Y5:function(){return u},kK:function(){return s},sv:function(){return f},t9:function(){return a}});var c="a20001fba40fff44345e5993730d4bd9",r="https://api.themoviedb.org/3/";function i(n){return fetch(n).then((function(n){return n.ok?n.json():Promise.reject(new Error("No matches with entered data"))}))}function o(){return i("".concat(r,"trending/movie/day?api_key=").concat(c))}function u(n){return i("".concat(r,"movie/").concat(n,"?api_key=").concat(c))}function a(n){return i("".concat(r,"search/movie?api_key=").concat(c,"&query=").concat(n,"&page=1&include_adult=true"))}function s(n){return i("".concat(r,"movie/").concat(n,"/credits?api_key=").concat(c))}function f(n){return i("".concat(r,"movie/").concat(n,"/reviews?api_key=").concat(c))}}}]);
//# sourceMappingURL=122.83adc0c0.chunk.js.map