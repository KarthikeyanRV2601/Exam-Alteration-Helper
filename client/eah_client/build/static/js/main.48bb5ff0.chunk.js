(this.webpackJsonpeah_client=this.webpackJsonpeah_client||[]).push([[0],{24:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(20),i=s.n(n),r=s(15),l=s(5),A=s(6),o=s.p+"static/media/illustro.7d04ce13.svg",u=s(0),j=function(){return Object(u.jsx)("div",{className:"IllustrationContainer",children:Object(u.jsx)("img",{className:"Illustration",src:o})})},d=s(10),h=s.n(d),b=s(16),m=s(18),g=s(7),x=s(8),O=s.n(x),B="USER_LOADED",E="AUTH_ERROR",p="LOGIN_SUCCESS",f="LOGOUT",C=function(){return function(){var e=Object(b.a)(h.a.mark((function e(t){var s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/auth");case 3:s=e.sent,t({type:B,payload:s.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:E});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},w=s(4),v=(s.p,s.p+"static/media/logoYeah.ee0bef39.png"),N=Object(w.b)((function(e){return{isAuth:e.auth.isAuth,user:e.auth.user}}),{login:function(e,t){return function(){var s=Object(b.a)(h.a.mark((function s(c){var a,n;return h.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a={email:e,password:t},s.prev=1,s.next=4,O.a.post("/auth/login",a);case 4:return n=s.sent,c({type:p,payload:n.data}),c(C()),s.abrupt("return",!0);case 10:return s.prev=10,s.t0=s.catch(1),s.abrupt("return",!1);case 13:case"end":return s.stop()}}),s,null,[[1,10]])})));return function(e){return s.apply(this,arguments)}}()}})((function(e){var t=e.login,s=(e.user,e.isAuth),a=e.classname,n=Object(c.useState)({email:"",password:""}),i=Object(A.a)(n,2),r=i[0],o=i[1],j=r.email,d=r.password,x=function(e){o(Object(g.a)(Object(g.a)({},r),{},Object(m.a)({},e.target.name,e.target.value)))};if(s)return Object(u.jsx)(l.a,{to:"/","data-test":"redirect"});var O=function(){var e=Object(b.a)(h.a.mark((function e(s){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.next=3,t(j,d);case 3:if(!e.sent){e.next=7;break}return e.abrupt("return");case 7:return e.abrupt("return");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"LeftPanel","data-test":"LeftPanel",children:[Object(u.jsxs)("div",{className:"Introtext",children:[Object(u.jsx)("img",{className:"Logo",src:v,"data-test":"logo"}),Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"Your exam alteration "})," needs,",Object(u.jsx)("br",{}),"fulfilled"]})]}),Object(u.jsxs)("form",{onSubmit:function(e){return O(e)},className:"LoginForm",children:[Object(u.jsxs)("div",{className:"input-field",children:[Object(u.jsx)("input",{type:"text",id:"email",name:"email",onChange:function(e){return x(e)},required:!0,className:a}),Object(u.jsx)("label",{for:"email",children:"email"})]}),Object(u.jsxs)("div",{className:"input-field ",children:[Object(u.jsx)("input",{type:"password",id:"pwd",name:"password",onChange:function(e){return x(e)},required:!0,className:a}),Object(u.jsx)("label",{for:"pwd",children:"password"})]}),Object(u.jsx)("button",{className:"LoginButton","data-test":"LoginButton",children:"Login"})]})]})})),Q=(s(75),s.p+"static/media/bgv.25a5b21d.mp4"),D=function(e){var t=e.isAuth,s=Object(c.useState)(!1),a=Object(A.a)(s,2),n=a[0],i=a[1],r=Object(c.useState)(""),o=Object(A.a)(r,2),d=o[0];o[1];return t?Object(u.jsx)(l.a,{to:"/"}):(console.log("failed"),Object(u.jsxs)("div",{className:"LoginPage",children:[!n&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("video",{id:"videoBkg",preload:!0,autoPlay:!0,muted:!0,loop:!0,children:Object(u.jsx)("source",{src:Q,type:"video/mp4"})}),Object(u.jsxs)("div",{class:"hero-section",children:[Object(u.jsx)("h1",{children:"Your"}),Object(u.jsx)("h1",{children:"Exam"}),Object(u.jsx)("h1",{children:"Alteration"}),Object(u.jsx)("h1",{children:"Helper"}),Object(u.jsx)("button",{onClick:function(e){return i(!0)},children:"Get started"})]})]}),n&&Object(u.jsxs)("div",{className:"Container",children:[Object(u.jsx)(N,{classname:d}),Object(u.jsx)(j,{})]})]}))},I=(Object(w.b)((function(e){return{isAuth:e.auth.isAuth,user:e.auth.user}}),null)(D),s.p+"static/media/man.4b684e29.svg"),F=s.p+"static/media/settings.4b9f8c3e.svg",k=Object(w.b)((function(e){return{isAuth:e.auth.isAuth,user:e.auth.user}}),null)((function(e){e.userName;var t=e.userType,s=e.userDepartment,a=e.user,n=Object(c.useRef)(null);return Object(u.jsxs)("div",{className:"UserDetail",children:[Object(u.jsx)("img",{src:I,className:"ProfileDp",alt:""}),Object(u.jsxs)("div",{className:"Details",children:[Object(u.jsx)("h2",{children:a?a.user_name:""}),Object(u.jsx)("div",{className:"Label",children:t}),Object(u.jsx)("p",{children:s})]}),Object(u.jsx)("img",{id:"SettingsIcon",src:F,onClick:function(e){n.current.classList.contains("AnimateMenu")?n.current.classList.remove("AnimateMenu"):n.current.classList.add("AnimateMenu")}}),Object(u.jsxs)("div",{className:"Menu",ref:n,children:[Object(u.jsx)("div",{className:"Option",id:"Signout",onClick:function(e){return localStorage.removeItem("token"),n.current.classList.remove("AnimateMenu"),void window.location.reload()},children:"Sign out"}),Object(u.jsx)("a",{className:"Option",id:"Profilesettings",href:"/profile-settings",children:"Profile settings"})]})]})})),S=s.p+"static/media/warning.fb997e48.svg",G=s.p+"static/media/exclamation.175963bb.svg",U=s.p+"static/media/cancel.9895197a.svg",Y=function(e){var t,s=e.ExamData,c=e.setpopup,a=e.returnDate,n=new Date(s.date);t=0==n.getMinutes()?"00":n.getMinutes();var i=n.getHours()+":"+t;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"PopupInformation",children:Object(u.jsxs)("div",{className:"InfoContainer",children:[Object(u.jsx)("img",{className:"closeButton",src:U,onClick:function(e){return c(!1)}}),Object(u.jsxs)("div",{className:"Element",children:[Object(u.jsx)("label",{children:"Exam name:"}),Object(u.jsx)("p",{children:s.exam_name})]}),Object(u.jsxs)("div",{className:"Element",children:[Object(u.jsx)("label",{children:"Exam time:"}),Object(u.jsx)("p",{children:i})]}),Object(u.jsxs)("div",{className:"Element",children:[Object(u.jsx)("label",{children:"Exam date:"}),Object(u.jsx)("p",{children:a(n)})]}),Object(u.jsxs)("div",{className:"Element",children:[Object(u.jsx)("label",{children:"Exam block:"}),Object(u.jsx)("p",{children:s.block})]}),Object(u.jsxs)("div",{className:"Element",children:[Object(u.jsx)("label",{children:"Exam duration:"}),Object(u.jsx)("p",{children:s.duration})]}),Object(u.jsxs)("div",{className:"Element",children:[Object(u.jsx)("label",{children:"Class room:"}),Object(u.jsx)("p",{children:s.class_room})]})]})})})},R=function(e){var t=e.Id,s=e.notification,a=e.actualNotificationData,n=e.Classname,i=(e.date,e.Examtime,e.setPopupData),r=e.setpopup,l=Object(c.useState)(G),o=Object(A.a)(l,2),j=o[0],d=o[1],h=Object(c.useRef)(null),b=Object(c.useRef)(null);return Object(c.useEffect)((function(){"Emergency"==n&&(d(S),b.current.className=n)}),[b]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"Notification",onClick:function(e){i(a),r(!0)},children:[Object(u.jsxs)("div",{className:"Text",ref:b,children:[Object(u.jsx)("img",{className:"bullet",src:j}),Object(u.jsx)("a",{href:"#",id:"Notif"+t,ref:h,children:s})]}),Object(u.jsx)("div",{className:"Line"})]})})},M=Object(w.b)((function(e){return{isAuth:e.auth.isAuth,user:e.auth.user}}),null)((function(e){var t=e.NotificationList,s=e.returnDate,a=(e.user,function(e){var t=new Date;return e.setHours(0,0,0,0)<=t.setHours(0,0,0,0)});(t=t.filter((function(e){var t=new Date(e.date);return"karthi"!==e.name&&!a(t)}))).sort((function(e,t){return new Date(e.date)-new Date(t.date)}));var n=Object(c.useState)(!1),i=Object(A.a)(n,2),r=i[0],l=i[1],o=Object(c.useState)(null),j=Object(A.a)(o,2),d=j[0],h=j[1];return Object(u.jsxs)("div",{className:"NotificationContainer",children:[Object(u.jsxs)("div",{className:"Title",children:[Object(u.jsx)("h1",{children:"Available requests"}),Object(u.jsx)("div",{id:"NotificationCount",src:"",children:t.length})]}),Object(u.jsxs)("div",{className:"NotificationSection",children:[t.map((function(e,t){var c,n=new Date(e.date);console.log(a(n)),c=0==n.getMinutes()?"00":n.getMinutes();var i=n.getHours()+":"+c,A="New request from ".concat(e.name," on ").concat(s(n)),o=new Date,j="Text";return s(o)==s(n)&&n.getHours()-o.getHours()<1&&(j="Emergency"),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(R,{notification:A,Id:t,actualNotificationData:e,Classname:j,setpopup:l,date:s(n),Examtime:i+"hr",popup:r,setPopupData:h})})})),r&&Object(u.jsx)(Y,{ExamData:d,setpopup:l,returnDate:s})]})]})})),y=function(e){var t=e.invigilationsScheduled,s=e.Dutyhours,c=e.exchanges;return Object(u.jsxs)("div",{className:"TopBanner",children:[Object(u.jsx)("h1",{children:"Exam duties"}),Object(u.jsxs)("div",{className:"Details",children:[Object(u.jsxs)("div",{className:"Detail",children:[Object(u.jsx)("p",{className:"Value",children:t}),Object(u.jsx)("p",{className:"Label",children:"Invigilations scheduled"})]}),Object(u.jsxs)("div",{className:"Detail",children:[Object(u.jsx)("div",{className:"MidDetail",children:s}),Object(u.jsx)("p",{className:"Label",children:"Duty hours"})]}),Object(u.jsxs)("div",{className:"Detail",children:[Object(u.jsx)("p",{className:"Value",children:c}),Object(u.jsx)("p",{className:"Label",children:"Exchanges"})]})]})]})},H=s.p+"static/media/clock.b589b153.svg",L=function(e){var t=e.linkText;return Object(u.jsxs)("div",{className:"Link",children:[Object(u.jsx)("img",{src:H,alt:""}),Object(u.jsx)("a",{href:"",children:t})]})},J=s.p+"static/media/request.987b5a2b.svg",K=s.p+"static/media/calendar.b79a46de.svg",Z=s.p+"static/media/question.ab482b54.svg",W=function(e){var t=e.dutyLinks,s=(e.requestLinks,e.returnDate);return t.sort((function(e,t){return new Date(e.date)-new Date(t.date)})),Object(u.jsxs)("div",{className:"MainBanner",children:[Object(u.jsxs)("div",{className:"Details",children:[Object(u.jsx)("h1",{children:"Details"}),Object(u.jsxs)("div",{className:"ButtonSection",children:[Object(u.jsxs)("div",{className:"ButtonElement",children:[Object(u.jsx)("img",{src:J}),Object(u.jsx)("a",{href:"/duties-page",id:"dutiespageBtn",children:"Request exchange"})]}),Object(u.jsxs)("div",{className:"ButtonElement",children:[Object(u.jsx)("img",{src:K}),Object(u.jsx)("a",{href:"/timetable",id:"timetableBtn",children:"Time table"})]}),Object(u.jsxs)("div",{className:"ButtonElement",children:[Object(u.jsx)("img",{src:Z,id:"availablerequestsBtn"}),Object(u.jsx)("a",{children:"Available requests"})]})]})]}),Object(u.jsxs)("div",{className:"QuickLinks",children:[Object(u.jsx)("h1",{children:"Quick links"}),Object(u.jsx)("div",{className:"Sections",children:Object(u.jsxs)("div",{className:"Upcoming Section",children:[Object(u.jsx)("h2",{children:"Upcoming duty details"}),Object(u.jsx)("div",{className:"Links",children:t.map((function(e){var t=new Date(e.date),c="Exam scheduled on ".concat(s(t),"  at block ").concat(e.block," , class room ").concat(e.class_room);return Object(u.jsx)(L,{linkText:c})}))})]})})]})]})},q=(s(76),s(77),s(78),Object(w.b)((function(e){return{isAuth:e.auth.isAuth,user:e.auth.user}}),null)((function(e){e.isAuth,e.user;var t=Object(c.useState)([]),s=Object(A.a)(t,2),a=s[0],n=s[1],i=Object(c.useState)([]),r=Object(A.a)(i,2),l=r[0],o=r[1],j=function(e){var t=e.getDate(),s=e.getMonth()+1;return t<10&&(t="0"+t),s<10&&(s="0"+s),t+"-"+s+"-"+e.getFullYear()};return Object(c.useEffect)((function(){Object(b.a)(h.a.mark((function e(){var t,s,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/schedule");case 3:return t=e.sent,n(t.data.user.data),e.next=7,O.a.get("/schedule/pending_schedule");case 7:return s=e.sent,o(s.data.data),e.next=11,O.a.post("/profile",{password:"mighil"});case 11:c=e.sent,console.log(c),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))()}),[]),Object(u.jsxs)("div",{className:"FacultyDashboard",children:[Object(u.jsx)("div",{className:"BlueBanner"}),Object(u.jsxs)("div",{className:"LeftContainer",children:[Object(u.jsx)(k,{userType:"faculty",userDepartment:"Department of computer science"}),Object(u.jsx)(M,{NotificationList:l,returnDate:j})]}),Object(u.jsxs)("div",{className:"RightContainer",children:[Object(u.jsx)(y,{invigilationsScheduled:a.length,Dutyhours:"7/10",exchanges:"10"}),Object(u.jsx)(W,{dutyLinks:a.slice(0,3),returnDate:j})]})]})}))),P=s(45),T=function(){return Object(u.jsx)(c.Fragment,{children:Object(u.jsx)("img",{src:"data:image/gif;base64,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",style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."})})},V=Object(w.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,s=e.auth,c=s.isAuth,a=s.loading,n=Object(P.a)(e,["component","auth"]);return Object(u.jsx)(l.b,Object(g.a)(Object(g.a)({},n),{},{render:function(e){return a?Object(u.jsx)(T,{}):c?Object(u.jsx)(t,Object(g.a)({},e)):Object(u.jsx)(l.a,{to:"/login"})}}))})),z=s(25),X=(s(24),s(42)),_=Object(w.b)((function(e){return{isAuth:e.auth.isAuth,user:e.auth.user}}),null)((function(e){var t=e.setCurrentdate,s=e.examData,c=e.returnDate;return Object(u.jsxs)("div",{className:"ActualCalendarcontainer",children:[Object(u.jsx)(z.a,{onChange:function(e){return function(e){t(c(e))}(e)},tileClassName:function(e){for(var t=e.date,a=0;a<s.length;++a){var n=s[a],i=new Date(n.date);if(c(i)==c(t))return"StartDate"}return""}}),Object(u.jsx)(X.CSVLink,{data:s,headers:[{label:"Exam name",key:"exam_name"},{label:"Date and time",key:"date"},{label:"Duration",key:"duration"},{label:"Class room",key:"class_room"},{label:"Block",key:"block"},{label:"Request status",key:"request_status"}],filename:"my-timetable.csv",className:"DownloadButton",children:"Download timetable"})]})})),$=(Object(w.b)((function(e){return{isAuth:e.auth.isAuth,user:e.auth.user}}),null)((function(){return Object(u.jsxs)("div",{className:"InformationContainer",children:[Object(u.jsx)("h2",{children:"List of exams on 26-01-2021"}),Object(u.jsxs)("div",{className:"Wrapper",children:[Object(u.jsx)("div",{className:"SwitchLeft"}),Object(u.jsx)("div",{className:"SwitchRight"})]}),Object(u.jsx)("div",{className:"ExamList",children:[{Name:"exam1",Description:"this is a exam1"}].map((function(e){return Object(u.jsxs)("div",{className:"Exam",children:[Object(u.jsx)("h2",{children:e.Name}),Object(u.jsx)("div",{className:"Description",children:e.Description})]})}))})]})})),Object(w.b)((function(e){return{isAuth:e.auth.isAuth,user:e.auth.user}}),null)((function(e){var t=e.Currentdate,s=e.examData,a=e.returnDate,n=Object(c.useState)(null),i=Object(A.a)(n,2),r=i[0],l=i[1],o=Object(c.useState)(!1),j=Object(A.a)(o,2),d=j[0],h=j[1],b=Object(c.useRef)();Object(c.useEffect)((function(){t||(t=a(new Date));for(var e=0;e<s.length;++e){var c=s[e],n=new Date(c.date);if(a(n)==t){l(c);break}l(null)}}),[t]);var m="loading";return Object(u.jsxs)(u.Fragment,{children:[r&&Object(u.jsxs)("div",{className:"ExamInfo",children:[Object(u.jsxs)("div",{className:"ExamName",children:[Object(u.jsx)("h1",{children:"Exam"}),Object(u.jsx)("h2",{children:r.exam_name+" "+t})]}),Object(u.jsxs)("div",{className:"Information",children:[Object(u.jsxs)("div",{className:"Info",children:[Object(u.jsx)("p",{children:"Duration"}),Object(u.jsx)("p",{children:r.duration})]}),Object(u.jsxs)("div",{className:"Info",children:[Object(u.jsx)("p",{children:"Slot"}),Object(u.jsx)("p",{children:new Date(r.date).getHours()+":"+new Date(r.date).getMinutes()+" hr"})]}),Object(u.jsxs)("div",{className:"Info",children:[Object(u.jsx)("p",{children:"Block"}),Object(u.jsx)("p",{children:r.block})]}),Object(u.jsxs)("div",{className:"Info",children:[Object(u.jsx)("p",{children:"Room"}),Object(u.jsx)("p",{children:r.class_room})]})]}),Object(u.jsx)("button",{className:function(){var e=r.request_status;return e&&"none"!=e?"pending"==e?(m="Request pending","pendingStatus"):"accepted"==e?(m="Request approved","approvedStatus"):void 0:(m="Request exchange","exchangeRequest")}(),onClick:function(){h(!0)},ref:b,children:m})]}),!r&&Object(u.jsxs)("div",{className:"ExamInfo",children:[Object(u.jsx)("h1",{children:t}),Object(u.jsx)("h2",{children:"No exam scheduled on this day"})]}),d&&Object(u.jsx)("div",{className:"ExchangeConfirmation",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{children:"Are you sure you want to request for exchange"}),Object(u.jsxs)("div",{className:"Buttons",children:[Object(u.jsx)("button",{onClick:function(e){return function(e){h(!1);var t={schedule_id:r.id,status:"pending"};try{O.a.post("/schedule/status",t),r.request_status="pending"}catch(s){console.log(s)}}()},children:"Yes"}),Object(u.jsx)("button",{onClick:function(){h(!1)},children:"No"})]})]})})]})}))),ee=(s(82),s.p+"static/media/dashboard.09f8d9bf.svg"),te=s.p+"static/media/calendar.0b264fda.svg",se=s.p+"static/media/signout.e6967d50.svg",ce=function(){var e=Object(c.useRef)(null);return Object(u.jsx)("header",{className:"navBar",children:Object(u.jsxs)("div",{className:"wrapNavBar",children:[Object(u.jsxs)("div",{className:"LeftDiv",children:[Object(u.jsxs)("div",{className:"Link",children:[Object(u.jsx)("img",{src:ee}),Object(u.jsx)("a",{href:"/",children:"Dashboard"})]}),Object(u.jsxs)("div",{className:"Link",children:[Object(u.jsx)("img",{src:te}),Object(u.jsx)("a",{href:"#",children:"Time Table"})]})]}),Object(u.jsx)("div",{className:"RightDiv",children:Object(u.jsxs)("div",{className:"Link",children:[Object(u.jsx)("img",{src:se}),Object(u.jsx)("a",{onClick:function(t){e.current.classList.contains("AnimateMenu")?e.current.classList.remove("AnimateMenu"):e.current.classList.add("AnimateMenu")},id:"profileIcon",children:"Profile"})]})}),Object(u.jsxs)("div",{className:"Menu",ref:e,children:[Object(u.jsx)("div",{className:"Option",id:"Signout",onClick:function(t){return localStorage.removeItem("token"),e.current.classList.remove("AnimateMenu"),void window.location.reload()},children:"Sign out"}),Object(u.jsx)("a",{className:"Option",id:"Profilesettings",href:"/profile-settings",children:"Edit profile"})]})]})})},ae=Object(w.b)((function(e){return{isAuth:e.auth.isAuth,user:e.auth.user}}),null)((function(){var e,t=Object(c.useState)(null),s=Object(A.a)(t,2),a=s[0],n=s[1],i=Object(c.useState)([]),r=Object(A.a)(i,2),l=r[0],o=r[1],j=function(e){var t=e.getDate(),s=e.getMonth()+1;return t<10&&(t="0"+t),s<10&&(s="0"+s),t+"-"+s+"-"+e.getFullYear()};return Object(c.useEffect)((function(){Object(b.a)(h.a.mark((function e(){var t,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/schedule");case 3:return t=e.sent,o(t.data.user.data),e.next=7,O.a.get("/profile");case 7:s=e.sent,console.log(s),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(ce,{}),Object(u.jsxs)("div",{className:"CalendarPage",children:[Object(u.jsx)(_,{examData:l,setCurrentdate:n,returnDate:j}),Object(u.jsx)($,(e={examData:l},Object(m.a)(e,"examData",l),Object(m.a)(e,"Currentdate",a),Object(m.a)(e,"returnDate",j),e))]})]})})),ne=s(17),ie=s(43),re=s(44),le={token:localStorage.getItem("token"),isAuth:null,loading:!0,user:null},Ae=Object(ne.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0,s=t.type,c=t.payload;switch(s){case E:return localStorage.removeItem("token"),Object(g.a)(Object(g.a)({},e),{},{token:null,isAuth:!1,loading:!1});case B:return Object(g.a)(Object(g.a)({},e),{},{isAuth:!0,user:c.user,loading:!1});case p:return Object(g.a)(Object(g.a)(Object(g.a)({},e),c),{},{isAuth:!0,loading:!1});case E:case f:return Object(g.a)(Object(g.a)({},e),{},{token:null,isAuth:!1,loading:!1,user:null});default:return e}}}),oe=function(e){e?(O.a.defaults.headers.common["auth-token"]=e,localStorage.setItem("token",e)):(delete O.a.defaults.headers.common["auth-token"],localStorage.removeItem("token"))},ue=[re.a],je=Object(ne.createStore)(Ae,{},Object(ie.composeWithDevTools)(ne.applyMiddleware.apply(void 0,ue))),de=je.getState();je.subscribe((function(){var e=de;if(de=je.getState(),e.auth.token!==de.auth.token){var t=de.auth.token;oe(t)}}));var he=je,be=(s(83),s.p+"static/media/cancel.9895197a.svg"),me=s.p+"static/media/profile.92ece6fa.svg",ge=function(){return Object(u.jsx)("div",{className:"IllustrationContainer",children:Object(u.jsx)("img",{className:"Illustration",src:me})})},xe=Object(w.b)((function(e){return{isAuth:e.auth.isAuth,user:e.auth.user}}),null)((function(e){var t=e.user,s=Object(c.useState)(!1),a=Object(A.a)(s,2),n=a[0],i=a[1],r=Object(c.useRef)(null),l=Object(c.useRef)(null),o={u_name:null,email:null,posting:null,department:null},j=function(){i(!1)};return Object(u.jsxs)("div",{className:"ProfileSettings",children:[Object(u.jsxs)("div",{className:"FormWrap",children:[Object(u.jsxs)("form",{className:"ProfileForm",ref:r,children:[Object(u.jsxs)("div",{className:"input-field",children:[Object(u.jsx)("input",{type:"text",id:"username",name:"username",placeholder:t.user_name,required:!0}),Object(u.jsx)("label",{htmlFor:"username",children:"username"})]}),Object(u.jsxs)("div",{className:"input-field",children:[Object(u.jsx)("input",{type:"text",id:"email",name:"email",placeholder:t.email,required:!0}),Object(u.jsx)("label",{htmlFor:"email",children:"email"})]}),!1,Object(u.jsxs)("div",{className:"input-field",children:[Object(u.jsx)("input",{type:"text",id:"posting",name:"posting",placeholder:t.posting,required:!0}),Object(u.jsx)("label",{htmlFor:"posting",children:"posting"})]}),Object(u.jsxs)("div",{className:"input-field",children:[Object(u.jsx)("input",{type:"text",id:"department",name:"department",required:!0,placeholder:t.department}),Object(u.jsx)("label",{htmlFor:"department",children:"department"})]})]}),Object(u.jsx)("button",{onClick:function(e){return i(!0)},children:"Update profile"})]}),n&&Object(u.jsx)("div",{className:"ConfirmationOverlay",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("img",{className:"closeButton",src:be,onClick:function(e){return j()}}),Object(u.jsx)("h2",{children:"Enter your current password"}),Object(u.jsxs)("div",{className:"input-field",children:[Object(u.jsx)("input",{type:"password",id:"passwordConfirm",name:"passwordConfirm",required:!0,ref:l}),Object(u.jsx)("label",{htmlFor:"passwordConfirm",children:"password"})]}),Object(u.jsx)("button",{onClick:function(e){return function(){o.u_name=r.current[0].value,o.email=r.current[1].value,o.posting=r.current[2].value,o.department=r.current[3].value;var e=l.current.value;console.log(e),j()}()},children:"Confirm password"})]})}),Object(u.jsx)(ge,{})]})})),Oe=Object(w.b)((function(e){return{isAuth:e.auth.isAuth,user:e.auth.user}}),null)((function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(ce,{}),Object(u.jsx)(xe,{})]})})),Be=function(){return Object(c.useEffect)((function(){localStorage.token&&oe(localStorage.token),he.dispatch(C()),window.addEventListener("storage",(function(){localStorage.token||he.dispatch({type:f})}))}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(w.a,{store:he,children:Object(u.jsx)(r.a,{children:Object(u.jsxs)(l.d,{children:[Object(u.jsx)(l.b,{exact:!0,path:"/login",component:D}),Object(u.jsx)(V,{exact:!0,path:"/",component:q}),Object(u.jsx)(V,{exact:!0,path:"/profile-settings",component:Oe}),Object(u.jsx)(V,{exact:!0,path:"/timetable",component:ae})]})})})})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(Be,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.48bb5ff0.chunk.js.map