(this.webpackJsonphollr=this.webpackJsonphollr||[]).push([[0],{33:function(e,t,s){},47:function(e,t,s){},53:function(e,t,s){},54:function(e,t,s){},55:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){},58:function(e,t,s){"use strict";s.r(t);var c=s(3),i=s.n(c),a=s(34),n=s.n(a),o=s(18),l=s(6),r=s(25);s(41),s(42);r.a.initializeApp({apiKey:"AIzaSyBukyt4EroXxaVMBVOP7Nh6uYwfdpqY3WE",authDomain:"holl-r.firebaseapp.com",projectId:"holl-r",storageBucket:"holl-r.appspot.com",messagingSenderId:"8271554529",appId:"1:8271554529:web:4376a6890037eb6d6294a0"});var d=r.a,u=s(35),j=s(12),b=s(10),m=s(11),f=(s(47),s(2)),h=function(e){var t=e.user,s=Object(c.useState)(""),i=Object(l.a)(s,2),a=i[0],n=i[1],o=m.a.firestore();return Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.isAnonymous?o.collection("Posts").doc().set({userID:t.uid,displayName:"Anon #".concat(t.uid),data:a,datePosted:m.a.firestore.FieldValue.serverTimestamp()}):o.collection("Posts").doc().set({userID:t.uid,displayName:t.displayName,data:a,datePosted:m.a.firestore.FieldValue.serverTimestamp()}),n(""),e.target.reset()},id:"submitPostForm",children:[Object(f.jsx)("textarea",{type:"text",maxLength:"250",onChange:function(e){n(e.target.value)},placeholder:"How are you feeling?"}),a.length<1?Object(f.jsx)("button",{className:"submitPostBtn",type:"submit",disabled:!0,children:"Post"}):Object(f.jsx)("button",{className:"submitPostBtn",type:"submit",children:"Post"})]})},O=s.p+"static/media/delete.e4efcb06.svg",p=s.p+"static/media/edit.3c70b537.svg",x=s.p+"static/media/close.b7a9c534.svg",g=function(e){var t=e.commentInfo,s=e.currentUser,i=e.navigateToProfile,a=Object(c.useState)(!1),n=Object(l.a)(a,2),o=n[0],r=n[1],d=Object(c.useState)(""),u=Object(l.a)(d,2),b=u[0],h=u[1],g=function(){r(!o)};return Object(f.jsx)("div",{className:"comments",children:Object(f.jsxs)("div",{children:[s.uid===t.userID?Object(f.jsxs)("div",{className:"comment-top",children:[Object(f.jsx)(j.b,{to:"/profile/".concat(t.userID),onClick:i,id:t.userID,className:"username",children:t.displayName}),Object(f.jsxs)("div",{className:"post-top-right",children:[o?Object(f.jsx)("div",{className:"editPostModal",children:Object(f.jsxs)("div",{className:"modal-box",children:[Object(f.jsx)("h3",{className:"edit-modal-username",children:s.isAnonymous?"Anonymous":s.displayName}),Object(f.jsx)("img",{src:x,alt:"cancel edit",className:"cancelEditBtn",onClick:g}),Object(f.jsx)("textarea",{className:"modal-text",type:"text",maxLength:"220",onChange:function(e){h(e.target.value)},defaultValue:t.data}),b.length>0?Object(f.jsx)("button",{className:"submitEditBtn",onClick:function(){m.a.firestore().collection("Comments").doc(t.id).update({data:b}),h(""),r(!o)},children:"Submit"}):Object(f.jsx)("button",{className:"submitEditBtnDisabled",children:"Submit"})]})}):Object(f.jsx)("img",{src:p,alt:"delete",className:"post-action-buttons",onClick:g}),Object(f.jsx)("img",{src:O,alt:"delete",className:"post-action-buttons",onClick:function(){m.a.firestore().collection("Comments").doc(t.id).delete()}})]})]}):Object(f.jsx)("div",{children:Object(f.jsx)(j.b,{to:"/profile/".concat(t.userID),onClick:i,id:t.userID,className:"username",children:t.displayName})}),Object(f.jsx)("p",{className:"postData",children:t.data})]},t.id)})},v=(s(33),function(e){var t=e.postInfo,s=e.currUser,i=e.changeReplyState,a=e.showReplies,n=Object(c.useState)(""),o=Object(l.a)(n,2),r=o[0],d=o[1],u=m.a.firestore();return Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.isAnonymous?u.collection("Comments").doc().set({originalPostID:t.id,userID:s.uid,displayName:"Anon #".concat(s.uid),data:r,datePosted:m.a.firestore.FieldValue.serverTimestamp()}):u.collection("Comments").doc().set({originalPostID:t.id,userID:s.uid,displayName:s.displayName,data:r,datePosted:m.a.firestore.FieldValue.serverTimestamp()}),d(""),!a&&i(),e.target.reset()},className:"submitCommentForm",children:[Object(f.jsx)("textarea",{id:"commentTextArea",type:"text",maxLength:"220",placeholder:"Share your opinion!",onChange:function(e){d(e.target.value)}}),r.length>0?Object(f.jsx)("button",{className:"postCommentBtn",type:"submit",children:"Comment"}):Object(f.jsx)("button",{className:"postCommentBtn",disabled:!0,children:"Comment"})]})}),N=s.p+"static/media/speech-bubble.bbfaa137.svg",P=function(e){var t=e.postInfo,s=e.currUser,i=e.allComments,a=e.navigateToProfile,n=e.showReplies,o=e.changeReplyState,r=Object(c.useState)(""),d=Object(l.a)(r,2),u=d[0],j=d[1],b=Object(c.useState)(!0),m=Object(l.a)(b,2),h=m[0],O=m[1];return Object(c.useEffect)((function(){j(i.filter((function(e){return e.originalPostID===t.id}))),O(!1)}),[t,i]),Object(f.jsxs)("div",{className:"showReplies",children:[h?Object(f.jsx)("p",{children:"Loading..."}):Object(f.jsxs)("div",{className:"repliesBtn",children:[Object(f.jsx)("img",{src:N,alt:"comment",onClick:o}),Object(f.jsx)("span",{children:u.length>0&&u.length})]}),n&&Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{postInfo:t,currUser:s,changeReplyState:o,showReplies:n}),u.map((function(e){return Object(f.jsx)(g,{currentUser:s,navigateToProfile:a,commentInfo:e},e.id)}))]})]})},y=function(e){var t=e.currUser,s=e.post,i=e.allComments,a=e.navigateToProfile,n=Object(c.useState)(!1),o=Object(l.a)(n,2),r=o[0],d=o[1],u=Object(c.useState)(!1),b=Object(l.a)(u,2),h=b[0],g=b[1],v=Object(c.useState)(""),N=Object(l.a)(v,2),y=N[0],C=N[1],w=function(){g(!h)};return Object(f.jsxs)("div",{className:"post",children:[Object(f.jsxs)("div",{className:"post-top",children:[Object(f.jsx)(j.b,{to:"/profile/".concat(s.userID),onClick:a,id:s.userID,className:"username",children:s.displayName}),t.uid===s.userID&&Object(f.jsxs)("div",{className:"post-top-right",children:[h?Object(f.jsx)("div",{className:"editPostModal",children:Object(f.jsxs)("div",{className:"modal-box",children:[Object(f.jsx)("h3",{className:"edit-modal-username",children:t.isAnonymous?"Anonymous":t.displayName}),Object(f.jsx)("img",{src:x,alt:"cancel edit",className:"cancelEditBtn",onClick:w}),Object(f.jsx)("textarea",{className:"modal-text",type:"text",maxLength:"250",onChange:function(e){C(e.target.value)},defaultValue:s.data}),y.length>0?Object(f.jsx)("button",{className:"submitEditBtn",onClick:function(){m.a.firestore().collection("Posts").doc(s.id).update({data:y}),C(""),g(!h)},children:"Submit"}):Object(f.jsx)("button",{className:"submitEditBtnDisabled",children:"Submit"})]})}):Object(f.jsx)("img",{src:p,alt:"edit",className:"post-action-buttons",onClick:w}),Object(f.jsx)("img",{src:O,alt:"delete",className:"post-action-buttons",onClick:function(){var e=m.a.firestore();e.collection("Posts").doc(s.id).delete(),e.collection("Comments").where("originalPostID","==",s.id).get().then((function(e){e.forEach((function(e){e.ref.delete()}))}))}})]})]}),Object(f.jsx)("p",{className:"postData",children:s.data}),Object(f.jsx)("div",{className:"post-bottom",children:Object(f.jsx)(P,{postInfo:s,currUser:t,allComments:i,navigateToProfile:a,changeReplyState:function(){d(!r)},showReplies:r})})]},s.id)},C=function(e){var t=e.usersModalClick,s=e.userModalData,i=e.allUsers,a=e.navigateToProfile,n=e.type,o=Object(c.useState)([]),r=Object(l.a)(o,2),d=r[0],u=r[1];Object(c.useEffect)((function(){var e=[];i.filter((function(t){return s.forEach((function(s){return t.uid===s?e.push(t):null}))})),u(e)}),[s,i]);var b=function(e){t(),a(e)};return Object(f.jsxs)("div",{className:"users-modal",children:[Object(f.jsx)("img",{src:x,alt:"cancel edit",className:"cancelEditBtn",onClick:t}),Object(f.jsxs)("div",{className:"allUsers",children:[Object(f.jsx)("h2",{style:{margin:"5px"},children:n}),d.map((function(e){return Object(f.jsxs)("div",{className:"users-profile",children:[Object(f.jsx)("hr",{}),Object(f.jsxs)(j.b,{className:"username",to:"/profile/".concat(e.uid),id:e.uid,onClick:b,children:[" ",e.displayName," "]})]},e.uid)}))]})]})},w=function(e){var t=e.navigateProfile,s=e.profile,i=e.currUser,a=e.setFollowButton,n=e.allUsers,o=e.navigateToProfile,r=Object(c.useState)([]),d=Object(l.a)(r,2),u=d[0],j=d[1],b=Object(c.useState)(!1),h=Object(l.a)(b,2),O=h[0],p=h[1];Object(c.useEffect)((function(){return m.a.firestore().collection("Users").doc(t).collection("Followers").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.id)})),j(t),t.includes(i.uid)?a(!0):a(!1)}))}),[t,s,i,a]);var x=function(){p(!O)};return Object(f.jsxs)("div",{className:"following-followers",children:[Object(f.jsxs)("h3",{className:"following-follower-title",onClick:x,children:[u.length," Followers"]}),O&&Object(f.jsx)(C,{type:"Followers",usersModalClick:x,userModalData:u,allUsers:n,navigateToProfile:o})]})},S=function(e){var t=e.navigateProfile,s=e.profile,i=e.currUser,a=e.allUsers,n=e.navigateToProfile,o=Object(c.useState)([]),r=Object(l.a)(o,2),d=r[0],u=r[1],j=Object(c.useState)(!1),b=Object(l.a)(j,2),h=b[0],O=b[1];Object(c.useEffect)((function(){return m.a.firestore().collection("Users").doc(t).collection("Following").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.id)})),u(t)}))}),[t,s,i]);var p=function(){O(!h)};return Object(f.jsxs)("div",{className:"following-followers",children:[Object(f.jsxs)("h3",{className:"following-follower-title",onClick:p,children:[d.length," Following"]}),h&&Object(f.jsx)(C,{usersModalClick:p,userModalData:d,allUsers:a,navigateToProfile:n,type:"Following"})]})},I=(s(53),s.p+"static/media/user.81d7b418.svg"),U=function(e){var t=e.currUser,s=e.allUsers,i=e.navigateProfile,a=e.allPosts,n=e.allComments,o=e.navigateToProfile,r=Object(c.useState)(!1),d=Object(l.a)(r,2),u=d[0],j=d[1],b=Object(c.useState)(),h=Object(l.a)(b,2),O=h[0],p=h[1],x=Object(c.useState)(),g=Object(l.a)(x,2),v=g[0],N=g[1],P=Object(c.useState)(!1),C=Object(l.a)(P,2),U=C[0],k=C[1],B=m.a.firestore();Object(c.useEffect)((function(){p(s.find((function(e){return e.uid===i}))),N(a.filter((function(e){return e.userID===i}))),j(!0)}),[s,i,a,n]);var T=function(){U?(B.collection("Users").doc(O.uid).collection("Followers").doc(t.uid).delete(),B.collection("Users").doc(t.uid).collection("Following").doc(O.uid).delete(),k(!U)):(B.collection("Users").doc(O.uid).collection("Followers").doc(t.uid).set({following:!U}),B.collection("Users").doc(t.uid).collection("Following").doc(O.uid).set({following:!U}),k(!U))};return Object(f.jsx)("div",{className:"profile",children:u?Object(f.jsxs)("div",{className:"profile-main",children:[Object(f.jsxs)("div",{className:"profile-top",children:[Object(f.jsx)("img",{src:I,alt:"profile",className:"profile-pic"}),Object(f.jsx)("h1",{className:"profile-username",children:O.displayName}),t.uid===O.uid?null:U?Object(f.jsx)("button",{className:"followBtn",onClick:T,children:"Unfollow"}):Object(f.jsx)("button",{className:"followBtn",onClick:T,children:"Follow"})]}),Object(f.jsxs)("div",{className:"followers-panel",children:[Object(f.jsx)(w,{navigateProfile:i,profile:O,currUser:t,setFollowButton:function(e){k(e)},allUsers:s,navigateToProfile:o}),Object(f.jsx)(S,{navigateProfile:i,profile:O,currUser:t,allUsers:s,navigateToProfile:o})]}),v.map((function(e){return Object(f.jsx)(y,{currUser:t,post:e,userInfo:O,allComments:n,navigateToProfile:o},e.id)})),v.length<1&&Object(f.jsx)("h2",{children:"You have no posts :("})]}):Object(f.jsx)("h2",{children:"loading..."})})},k=(s(54),s.p+"static/media/home.b0189fdb.svg"),B=s.p+"static/media/github.3ba4a27c.svg",T=function(e){var t=e.navigateToProfile,s=e.user;return Object(f.jsxs)("div",{id:"sidebar",children:[Object(f.jsx)("div",{className:"sidebar-button-panel",children:Object(f.jsxs)(j.b,{to:"/hollr",className:"sideBarBtns",children:[Object(f.jsx)("img",{src:k,alt:"home",className:"sidebar-icon"}),Object(f.jsx)("p",{className:"sidebar-btn-text",children:"Home"})]})}),Object(f.jsx)("div",{className:"sidebar-button-panel",children:Object(f.jsxs)(j.b,{to:"//github.com/Yasin2201/hollr",target:"_blank",className:"sideBarBtns",children:[Object(f.jsx)("img",{src:B,alt:"github",className:"sidebar-icon"}),Object(f.jsx)("p",{className:"sidebar-btn-text",children:"Github"})]})}),Object(f.jsx)("div",{className:"sidebar-button-panel",children:Object(f.jsxs)(j.b,{to:"/profile/".concat(s.uid),className:"sideBarBtns",id:s.uid,onClick:t,children:[Object(f.jsx)("img",{src:I,alt:"profile",className:"sidebar-icon",id:s.uid}),Object(f.jsx)("p",{className:"sidebar-btn-text",id:s.uid,children:"Your Profile"})]})})]})},D=(s(55),function(e){var t=e.allUsers,s=e.currUser,c=e.following,i=e.navigateToProfile,a=t.filter((function(e){return!c.includes(e.uid)})).filter((function(e){return e.uid!==s.uid}));return Object(f.jsx)("div",{id:"whoToFollow-sidebar",children:Object(f.jsxs)("div",{className:"not-following-container",children:[Object(f.jsx)("h2",{className:"whoToFollow-title",children:"Who To Follow"}),a.map((function(e){return Object(f.jsx)("div",{className:"users-follow",children:Object(f.jsx)(j.b,{to:"/profile/".concat(e.uid),onClick:i,id:e.uid,className:"username",children:e.displayName})},e.uid)})),a.length<1&&Object(f.jsx)("h3",{children:"Nothing to see here..."})]})})}),E=(s(56),s.p+"static/media/logo.22ebc026.svg"),F=function(e){var t=e.user,s=e.signOut;return Object(f.jsxs)("div",{id:"navbar",children:[Object(f.jsx)(j.b,{to:"/hollr",className:"title",children:Object(f.jsx)("h1",{className:"logoHeader",children:"holl'r"})}),Object(f.jsx)(j.b,{to:"/hollr",className:"title",children:Object(f.jsx)("img",{src:E,alt:"hollr logo",className:"logo"})}),Object(f.jsxs)("div",{className:"navActions",children:[Object(f.jsxs)("h3",{className:"greeting",children:["Hello, ",t.isAnonymous?t.uid:t.displayName,"!"]}),Object(f.jsx)(j.b,{to:"/hollr",className:"navActions",children:Object(f.jsx)("button",{className:"signOut",onClick:s,children:"Sign Out"})})]})]})},A=(s(57),function(){var e=d.auth(),t=Object(u.a)(e),s=Object(l.a)(t,1)[0],i=Object(c.useState)([]),a=Object(l.a)(i,2),n=a[0],r=a[1],m=Object(c.useState)([]),O=Object(l.a)(m,2),p=O[0],x=O[1],g=Object(c.useState)([]),v=Object(l.a)(g,2),N=v[0],P=v[1],C=Object(c.useState)([]),w=Object(l.a)(C,2),S=w[0],I=w[1],k=Object(c.useState)(void 0),B=Object(l.a)(k,2),E=B[0],A=B[1],M=Object(c.useState)([]),R=Object(l.a)(M,2),V=R[0],L=R[1];Object(c.useEffect)((function(){var e=d.firestore();if(null!==s)return e.collection("Users").doc(s.uid).collection("Following").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.id)})),L(t)}))}),[s]),Object(c.useEffect)((function(){var e=d.firestore();if(null!==s)return{unsubscribeCustomTimeline:e.collection("Posts").orderBy("datePosted","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){return V.includes(e.data().userID)||e.data().userID===s.uid?t.push(Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})):null})),x(t)})),unsubscribeAllPosts:e.collection("Posts").orderBy("datePosted","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){return t.push(Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id}))})),r(t)}))}}),[V,s]),Object(c.useEffect)((function(){return d.firestore().collection("Comments").orderBy("datePosted","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){return t.push(Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id}))})),P(t)}))}),[]),Object(c.useEffect)((function(){return d.firestore().collection("Users").onSnapshot((function(e){var t=[];e.forEach((function(e){return t.push(Object(o.a)(Object(o.a)({},e.data()),{},{uid:e.id}))})),I(t)}))}),[]),Object(c.useEffect)((function(){var e=d.firestore();return null===s||s.isAnonymous?null!==s&&s.isAnonymous?e.collection("Users").doc(s.uid).set({displayName:"Anon #".concat(s.uid)}):void 0:e.collection("Users").doc(s.uid).set({displayName:s.displayName})}),[s]);var Y=function(e){A(S.find((function(t){return t.uid===e.target.id})).uid)};return Object(f.jsx)(j.a,{children:Object(f.jsx)("div",{className:"main",children:s?Object(f.jsxs)("div",{className:"mainBody",children:[Object(f.jsx)(F,{user:s,signOut:function(){e.signOut()}}),Object(f.jsx)(T,{navigateToProfile:Y,navigateProfile:E,user:s}),Object(f.jsx)(D,{allUsers:S,currUser:s,following:V,navigateToProfile:Y}),Object(f.jsxs)(b.c,{children:[Object(f.jsx)(b.a,{exact:!0,path:"/hollr",children:Object(f.jsxs)("div",{id:"allPosts",children:[Object(f.jsx)(h,{user:s}),p.map((function(e){return Object(f.jsx)(y,{post:e,currUser:s,allComments:N,navigateToProfile:Y},e.id)}))]})}),Object(f.jsx)(b.a,{exact:!0,path:"/profile/".concat(E),children:Object(f.jsx)(U,{currUser:s,allUsers:S,navigateProfile:E,allComments:N,allPosts:n,navigateToProfile:Y})})]})]}):Object(f.jsx)("div",{className:"signIn-Container",children:Object(f.jsxs)("div",{className:"signIn-buttons-container",children:[Object(f.jsx)("h1",{children:"Welcome to holl'r"}),Object(f.jsx)("button",{className:"signIn-buttons",onClick:function(){var t=new d.auth.GoogleAuthProvider;e.signInWithPopup(t)},children:"Sign In with Google"}),Object(f.jsx)("span",{children:"OR"}),Object(f.jsx)("button",{className:"signIn-buttons",onClick:function(){d.auth().signInAnonymously()},children:"Sign In Anonymously"})]})})})})}),M=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,59)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,n=t.getTTFB;s(e),c(e),i(e),a(e),n(e)}))};n.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root")),M()}},[[58,1,2]]]);
//# sourceMappingURL=main.293ca924.chunk.js.map