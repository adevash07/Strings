(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{104:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(41),s=n.n(r),o=(n(82),n(83),n(55)),u=n(13),i=n(2),l=n.n(i),j=n(3),b=n(20),d=n(46),p=n(73),h=n(74),m=n(14),f=n.n(m),g=(n(104),n(44)),O=(n(105),n(106),g.a.initializeApp({apiKey:"AIzaSyBz-jk6hJk6G1lAhE4XF_9i95CyKd3R7pE",authDomain:"strings-44989.firebaseapp.com",projectId:"strings-44989",storageBucket:"strings-44989.appspot.com",messagingSenderId:"1029770477052",appId:"1:1029770477052:web:388d7423c437c4d82e0679",measurementId:"G-55DZ6B61X4"}).auth()),x=n(9);function v(){var e=Object(a.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(b.a)(r,2),o=s[0],i=s[1],m=Object(a.useState)(""),v=Object(b.a)(m,2),S=v[0],w=v[1],N=Object(u.f)(),I=function(){var e=Object(j.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={"Project-ID":"ae34b4f1-b1ac-42c1-91d2-925317b21e6d","User-Name":n,"User-Secret":o},e.prev=2,e.next=5,f.a.get("https://api.chatengine.io/chats",{headers:a});case 5:localStorage.setItem("username",n),localStorage.setItem("password",o),setTimeout((function(){N.push("/chats")}),500),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),w("Opps, in correct credentials"),setTimeout((function(){w(" ")}),2e3);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"wrapper",children:[Object(x.jsxs)("h1",{className:"title",children:["String ",Object(x.jsx)(d.a,{})," Chat"]}),Object(x.jsxs)("form",{className:"form",onSubmit:I,children:[Object(x.jsx)("label",{className:"label",htmlFor:"username",children:"UserName :"}),Object(x.jsx)("input",{name:"username",className:"form__input",type:"text",value:n,onChange:function(e){return c(e.target.value)},required:!0}),Object(x.jsx)("label",{className:"label",htmlFor:"",children:"Password :"}),Object(x.jsx)("input",{name:"password",className:"form__input",type:"password",value:o,onChange:function(e){return i(e.target.value)},required:!0}),Object(x.jsx)("div",{align:"center",children:Object(x.jsx)("button",{type:"submit",className:"btn",onSubmit:I,children:Object(x.jsx)("span",{children:"Start Chatting"})})})]}),Object(x.jsx)("h2",{children:S}),Object(x.jsxs)("div",{className:"signup",children:[Object(x.jsx)("h4",{children:" Don't Have an Account ?, Sign Up Below :"}),Object(x.jsxs)("form",{className:"signUpForm",action:"",children:[Object(x.jsxs)("button",{name:"google",className:"button__input",type:"button",id:"google",onClick:function(){return O.signInWithRedirect(new g.a.auth.GoogleAuthProvider)},children:[Object(x.jsx)(p.a,{size:20})," Sign in with Google"]}),Object(x.jsxs)("button",{name:"facebook",className:"button__input",type:"button",id:"facebook",onClick:function(e){c("guest"),i("19955"),I(e)},children:[Object(x.jsx)(h.a,{size:20,fill:"blue"})," Login directly as a Guest"]})]})]})]})}var S=n(76),w=c.a.createContext(),N=function(e){var t=e.children,n=Object(a.useState)(!0),c=Object(b.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(null),i=Object(b.a)(o,2),l=i[0],j=i[1],d=Object(u.f)();Object(a.useEffect)((function(){O.onAuthStateChanged((function(e){j(e),s(!1),e&&d.push("/chats")}))}),[l,d]);var p={user:l};return Object(x.jsx)(w.Provider,{value:p,children:!r&&t})};function I(e){e.userName,e.userSecret;var t=Object(a.useContext)(w).user,n=Object(u.f)(),c={username:localStorage.getItem("username"),password:localStorage.getItem("password")};console.log(c);var r=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.blob();case 5:return a=e.sent,e.abrupt("return",new File([a],"userPhoto.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){if(t||c.username)return t&&f.a.get("https://api.chatengine.io/users/me",{headers:{"Project-ID":"ae34b4f1-b1ac-42c1-91d2-925317b21e6d","User-Name":t.email,"User-Secret":t.uid}}).catch((function(e){console.log(e.response),console.log(e.message),console.log(e.request);var n=new FormData;n.append("email",t.email),n.append("username",t.email),n.append("secret",t.uid),r(t.photoURL).then((function(e){n.append("avater",e,e.name),f.a.post("https://api.chatengine.io/users",n,{headers:{"Private-Key":"45d5f0c5-0179-43d2-b290-a12a7db725c2","Project-ID":"ae34b4f1-b1ac-42c1-91d2-925317b21e6d"}}).catch((function(e){console.log(e)}))}))})),function(){};n.push("/")}),[t,n,c.username]),Object(x.jsx)(S.d,{height:"calc(100vh - 50px)",projectID:"ae34b4f1-b1ac-42c1-91d2-925317b21e6d",userName:null!==c.username?c.username:t?t.email:" ",userSecret:null!==c.username?c.password:t?t.uid:" "})}n(141);function y(e){var t=e.handleLogOut;return Object(x.jsxs)("div",{className:"header",children:[Object(x.jsxs)("h2",{className:"logo",children:[Object(x.jsx)(d.a,{})," Chat"]}),Object(x.jsx)("button",{className:"btn",onClick:function(){return t()},children:"Log Out"})]})}function C(){var e=Object(u.f)(),t=function(){var t=Object(j.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.signOut();case 2:e.push("/"),localStorage.removeItem("username"),localStorage.removeItem("password");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"chat",children:[Object(x.jsx)(y,{handleLogOut:t}),Object(x.jsx)(I,{userName:"",userSecret:""})]})}var k=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(o.a,{children:Object(x.jsx)(N,{children:Object(x.jsxs)(u.c,{children:[Object(x.jsx)(u.a,{exact:!0,path:"/",component:v}),Object(x.jsx)(u.a,{path:"/chats",component:C})]})})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,146)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(142);s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(k,{})}),document.getElementById("root")),F()},82:function(e,t,n){},83:function(e,t,n){}},[[143,1,2]]]);
//# sourceMappingURL=main.c8da53bb.chunk.js.map