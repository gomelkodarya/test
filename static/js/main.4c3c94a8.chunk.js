(this.webpackJsonphomework=this.webpackJsonphomework||[]).push([[0],[,,,,,function(e,t,n){e.exports={container:"Message_container__1emOR",message:"Message_message__3VBdT",message_content:"Message_message_content__2NHQc",message_text:"Message_message_text__UUWWs",message_time:"Message_message_time__3iRfV"}},,,,function(e,t,n){e.exports={someClass:"Greeting_someClass__26HYz",error:"Greeting_error__3Coc1"}},function(e,t,n){e.exports={superInput:"SuperInputText_superInput__ByHdD",errorInput:"SuperInputText_errorInput__3Xp3U",error:"SuperInputText_error__kJOFg"}},function(e,t,n){e.exports={blue:"HW4_blue__XU3S3",column:"HW4_column__2LPNx",testSpanError:"HW4_testSpanError__2MxcM"}},function(e,t,n){e.exports={default:"SuperButton_default__sKlIP",red:"SuperButton_red__1rYEP"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__29Etg",spanClassName:"SuperCheckbox_spanClassName__1WmIx"}},,function(e,t,n){e.exports={App:"App_App__xcGVP"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(14),s=n.n(c),i=(n(21),n(15)),o=n.n(i),l=n(5),j=n.n(l),u=n(0);var d=function(e){return Object(u.jsxs)("div",{className:j.a.container,children:[Object(u.jsx)("img",{src:e.avatar}),Object(u.jsx)("div",{className:j.a.message,children:Object(u.jsxs)("div",{className:j.a.message_content,children:[Object(u.jsxs)("div",{className:j.a.message_text,children:[Object(u.jsx)("h1",{children:e.name}),Object(u.jsx)("p",{children:e.message})]}),Object(u.jsx)("div",{className:j.a.message_time,children:e.time})]})})]})},b="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Alisa",m="Hello!",x="22:00";var O=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1",Object(u.jsx)(d,{avatar:b,name:h,message:m,time:x}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},p=n(2);var _=function(e){return Object(u.jsxs)("div",{children:[e.affair.name,Object(u.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var f=function(e){var t=e.data.map((function(t){return Object(u.jsx)(_,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)("div",{children:[t,Object(u.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},g=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var v=function(){var e=Object(r.useState)(g),t=Object(p.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(p.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(n,i);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(f,{data:l,setFilter:o,deleteAffairCallback:function(e){var t=function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e);a(t)}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},C=n(16),k=n(9),N=n.n(k),w=function(e){var t,n=e.name,r=e.setNameCallback,a=e.addUser,c=e.error,s=e.totalUsers;return t=c?N.a.error:N.a.someClass,Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:n,onChange:r,className:t}),Object(u.jsx)("span",{children:c}),Object(u.jsx)("button",{onClick:a,children:"add"}),Object(u.jsx)("span",{children:s})]})},S=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(p.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),l=Object(p.a)(o,2),j=l[0],d=l[1],b=t.length;return Object(u.jsx)(w,{name:s,setNameCallback:function(e){var t=e.currentTarget.value;""!==t.trim()?(i(t.trim()),d("")):d("Title is required")},addUser:function(){""!==s?(alert("Hello ".concat(s," !")),n(s),i("")):d("Title is required")},error:j,totalUsers:b})},y=n(25);var T=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(S,{users:n,addUserCallback:function(e){var t={_id:Object(y.a)(),name:e};a([t].concat(Object(C.a)(n)))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},A=n(3),I=n(4),E=n(10),H=n.n(E),U=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(I.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(H.a.error," ").concat(i||""),j="".concat(H.a.errorInput," ").concat(s);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(A.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:j},o)),c&&Object(u.jsx)("span",{className:l,children:c})]})},W=n(11),M=n.n(W),F=n(12),P=n.n(F),B=function(e){var t=e.red,n=e.className,r=Object(I.a)(e,["red","className"]),a="".concat(t?P.a.red:P.a.default," ").concat(n);return Object(u.jsx)("button",Object(A.a)({className:a},r))},G=n(13),J=n.n(G),K=function(e){e.type,e.onChange,e.onChangeChecked;var t=e.className,n=(e.spanClassName,e.children),r=Object(I.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),a="".concat(J.a.checkbox," ").concat(t||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(A.a)({type:"checkbox",onChange:function(e){},className:a},r)),n&&Object(u.jsx)("span",{className:J.a.spanClassName,children:n})]})};var X=function(){var e=Object(r.useState)(""),t=Object(p.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(p.a)(i,2),l=o[0],j=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:M.a.column,children:[Object(u.jsx)(U,{value:n,onChangeText:a,onEnter:s,error:c}),Object(u.jsx)(U,{className:M.a.blue}),Object(u.jsx)(B,{children:"default"}),Object(u.jsx)(B,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(B,{disabled:!0,children:"disabled"}),Object(u.jsx)(K,{checked:l,onChangeChecked:j,children:"some text "}),Object(u.jsx)(K,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var q=function(){return Object(u.jsxs)("div",{className:o.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(O,{}),Object(u.jsx)(v,{}),Object(u.jsx)(T,{}),Object(u.jsx)(X,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(q,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.4c3c94a8.chunk.js.map