"use strict";(self["webpackChunkosboha180"]=self["webpackChunkosboha180"]||[]).push([[6360],{5212:(e,t,s)=>{var n=s(82109),a=s(42092).some,r=s(9341),i=r("some");n({target:"Array",proto:!0,forced:!i},{some:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},74674:(e,t,s)=>{s.d(t,{Z:()=>o});var n=s(50124),a=s(48534),r=(s(92222),s(62760)),i=s(57333);const o={createThesis:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,s){var a,i;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("thesis_text",t.text),a.append("ending_page",t.pageEnd),a.append("starting_page",t.pageStart),a.append("user_book_id",s),a.append("images[]",t.image_1),e.next=8,r.h.post("/thesises",a,{headers:{"Content-Type":"multipart/form-data"}})["catch"]((function(e){console.log(e)}));case 8:return i=e.sent,e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));function t(t,s){return e.apply(this,arguments)}return t}(),updatePicture:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,s){var a,i;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("path",s),a.append("image",t),e.next=5,r.h.post("/thesises/update-photo",a,{headers:{"Content-Type":"multipart/form-data"}})["catch"]((function(e){console.log(e)}));case 5:return i=e.sent,e.abrupt("return",i.data.data);case 7:case"end":return e.stop()}}),e)})));function t(t,s){return e.apply(this,arguments)}return t}(),reviewThesis:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.h.patch("/thesises/review-thesis/".concat(t));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),deleteThesis:function(e){var t=r.h["delete"]("/thesises/".concat(e));return t},acceptThesis:function(e,t){var s,n=null;"accept"==t?s=e:"audit"==t&&(n=e);var a=r.h.post("/thesises/review",{id:s,user_book_id:n,status:t,reviewer_id:i.Z.getUser().id});return a},rejectRetardThesis:function(e,t,s){var n=r.h.post("/thesises/review",{id:e,status:s,reviewer_id:i.Z.getUser().id,reviews:t});return n},addDegree:function(e,t,s){var n=r.h.patch("/thesises/add-degree/".concat(e),{auditor_id:i.Z.getUser().id,reviews:t,degree:s});return n},updateThesis:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,s){var a;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.h.patch("thesises/".concat(s),t)["catch"]((function(e){console.log(e)}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));function t(t,s){return e.apply(this,arguments)}return t}(),getById:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var s;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.h.get("thesises/".concat(t));case 2:return s=e.sent,e.abrupt("return",s.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getByBook:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var s;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.h.get("thesises/book/".concat(t));case 2:return s=e.sent,e.abrupt("return",s.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getByUserBookStatus:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var s;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.h.get("thesises/by-status/".concat(t));case 2:return s=e.sent,s.data,e.abrupt("return",s.data.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getByUserBook:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,s){var a;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.h.get("thesises/user_book_id/".concat(t,"&").concat(s));case 2:return a=e.sent,a.data,e.abrupt("return",a.data.data);case 5:case"end":return e.stop()}}),e)})));function t(t,s){return e.apply(this,arguments)}return t}(),deletePhoto:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.h["delete"]("thesises/photo/".concat(t));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getPhotosCount:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var s;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.h.get("thesises/photo-count/".concat(t));case 2:return s=e.sent,e.abrupt("return",s.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),uploadPhoto:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,s){var a,i;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("image",t),e.next=4,r.h.post("/thesises/upload/".concat(s),a,{headers:{"Content-Type":"multipart/form-data"}})["catch"]((function(e){console.log(e)}));case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));function t(t,s){return e.apply(this,arguments)}return t}()}},6360:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Ye});var n=s(66252),a=s(3577),r=s(44272),i=s(90475),o={class:"row"},u={class:"col-sm-12"},c={class:"iq-card-body profile-page p-0"},l={class:"profile-header"},d=(0,n._)("div",{class:"cover-container"},[(0,n._)("img",{src:r,alt:"profile-bg",class:"rounded img-fluid"})],-1),p={class:"user-detail text-center mb-3"},h=(0,n._)("div",{class:"profile-img"},[(0,n._)("img",{src:i,alt:"profile-img",class:"avatar-130 img-fluid"})],-1),f={class:"profile-detail mt-1"},m=(0,n._)("br",null,null,-1),g={key:0,class:""},b={class:"iq-card-body p-0"},w={class:"user-tabing"},v={class:"col-sm-12"},_={class:"tab-content"},k={class:"iq-card-body p-0"},y={class:"row"},x={class:"col-12"},Z={key:0,id:"post-modal-data",class:"iq-card"},T=(0,n._)("div",null,[(0,n._)("h5",{class:"card-title"},"تمت الاضافة بنجاح")],-1),C={class:"col-12"},q=(0,n._)("h4",{class:"card-title"},"الأطروحات",-1),$={id:"form-wizard1",class:"text-center mt-3"},D={id:"top-tab-list",class:"p-0 row list-inline"},S=["onClick"],B={href:"javascript:void(0);"},z={class:"col-12"};function E(e,t,s,r,i,E){var P=(0,n.up)("iq-card"),j=(0,n.up)("tab-nav-items"),O=(0,n.up)("tab-nav"),U=(0,n.up)("CreateThesis"),F=(0,n.up)("alert"),R=(0,n.up)("ThesisDisplay"),W=(0,n.up)("tab-content-item");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",u,[(0,n.Wm)(P,null,{default:(0,n.w5)((function(){return[(0,n._)("div",c,[(0,n._)("div",l,[d,(0,n._)("div",p,[h,(0,n._)("div",f,[m,i.book?((0,n.wg)(),(0,n.iD)("h3",g,(0,a.zw)(i.book.book_name)+" - قسم الأطروحات ",1)):(0,n.kq)("",!0)])])])])]})),_:1}),(0,n.Wm)(P,{class:"iq-card"},{default:(0,n.w5)((function(){return[(0,n._)("div",b,[(0,n._)("div",w,[(0,n.Wm)(O,{pills:!0,id:"pills-tab",class:"nav nav-pills d-flex align-items-center justify-content-center profile-feed-items p-0 m-0"},{default:(0,n.w5)((function(){return[(0,n.Wm)(j,{class:"w-100 p-0",active:!0,id:"pills-feed-tab",href:"#theses_container",ariaControls:"pills-home",role:"tab",ariaSelected:!0,title:"المرحلة الأولى - الأطروحات"})]})),_:1})])])]})),_:1})]),(0,n._)("div",v,[(0,n._)("div",_,[(0,n.Wm)(W,{active:!0,id:"theses_container","aria-labelled-by":"pills-feed-tab"},{default:(0,n.w5)((function(){return[(0,n._)("div",k,[(0,n._)("div",y,[(0,n._)("div",x,[i.user_book?((0,n.wg)(),(0,n.iD)("div",Z,[i.theses.length<12&&!i.status&&i.auditable||0==i.theses.length||i.theses.length<8?((0,n.wg)(),(0,n.j4)(U,{key:0,pagesStartingRange:i.pagesStartingRange,onAddThesis:E.addThesis,book:i.book,noOfthesis:i.theses.length,user_book_id:i.user_book.id},null,8,["pagesStartingRange","onAddThesis","book","noOfthesis","user_book_id"])):(0,n.kq)("",!0)])):(0,n.kq)("",!0),i.insertSuccessful?((0,n.wg)(),(0,n.j4)(F,{key:1,variant:"primary",className:"d-flex align-items-center text-center"},{default:(0,n.w5)((function(){return[T]})),_:1})):(0,n.kq)("",!0)]),(0,n._)("div",C,[(0,n.Wm)(P,null,{headerTitle:(0,n.w5)((function(){return[q]})),body:(0,n.w5)((function(){return[(0,n._)("form",$,[(0,n._)("ul",D,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.theses,(function(e,t){return(0,n.wg)(),(0,n.iD)("li",{key:t,class:(0,a.C_)([E.checkActive(t,t+1),"col-2 mb-2 text-start"]),onClick:function(e){return E.changeTab(t+1)},id:"account"},[(0,n._)("a",B,[(0,n._)("span",null,(0,a.zw)(t+1),1)])],10,S)})),128))]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.theses,(function(e,t){return(0,n.wg)(),(0,n.iD)("fieldset",{key:t,class:(0,a.C_)(i.current==t+1?"d-block":"d-none")},[(0,n.Wm)(R,{thesis:e,number:t,title:i.thesisTitle,book:i.book,onOnNext:E.changeTab},null,8,["thesis","number","title","book","onOnNext"])],2)})),128))])]})),_:1})]),(0,n._)("div",z,[(0,n.Wm)(P,null,{body:(0,n.w5)((function(){return[i.theses.length>=8&&i.auditable?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"btn btn-primary d-block w-100 mb-3",onClick:t[0]||(t[0]=function(){return E.reviewThesisStatus&&E.reviewThesisStatus.apply(E,arguments)})}," اعتماد ")):(0,n.kq)("",!0),(0,n._)("button",{class:"btn btn-success d-block w-100",onClick:t[1]||(t[1]=function(e){return E.back()})}," عودة لصفحة الانجاز ")]})),_:1})])])])]})),_:1})])])])}var P=s(50124),j=s(48534),O=(s(5212),s(41539),s(49963)),U={class:"card-title"},F={class:"d-flex align-items-center"},R={class:"form-group col-6"},W=(0,n._)("option",{value:""},"اختر صفحة البداية",-1),I=["value"],N={key:0,style:{color:"red"}},A={class:"form-group col-6"},H=(0,n._)("option",{value:""},"اختر صفحة النهاية",-1),K=["value"],M={key:0,style:{color:"red"}},Y={class:"form-group"},V=(0,n._)("label",{class:"form-label",for:"thesisBody"},"الأطروحة",-1),L={key:0,style:{color:"red"}},G={key:0,class:"form-group"},J=(0,n._)("label",{class:"form-label",for:"customFile"},"ارفع هنا صورة لاطروحتك أعلاه من منشور فريق المتابعة الخاص بك",-1),Q=(0,n._)("small",{style:{color:"red"}}," * يجب إضافة صورة كحد أدنى لاعتماد الأطروحات للتوثيق. ",-1),X=(0,n._)("input",{type:"submit",value:"إضافة",href:"javascript:void(0);",class:"btn btn-primary d-block mt-3"},null,-1),ee=(0,n._)("hr",null,null,-1);function te(e,t,s,r,i,o){var u=(0,n.up)("iq-card");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(u,{id:"post-modal-data","body-class":"iq-card iq-card-block iq-card-stretch iq-card-height"},{headerTitle:(0,n.w5)((function(){return[(0,n._)("h4",U,"إضافة الأطروحة "+(0,a.zw)(s.noOfthesis+1),1)]})),body:(0,n.w5)((function(){return[(0,n._)("div",F,[s.book?((0,n.wg)(),(0,n.iD)("form",{key:0,onSubmit:t[4]||(t[4]=(0,O.iM)((function(){return o.submit&&o.submit.apply(o,arguments)}),["prevent"])),class:"post-text ml-3 w-100 row"},[(0,n._)("div",R,[(0,n.wy)((0,n._)("select",{class:"form-select","data-trigger":"",name:"choices-single-default",id:"choices-single-default","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.v$.thesis.pageStart.$model=e})},[W,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.bookPages,(function(e,t){return(0,n.wg)(),(0,n.iD)("option",{key:t,value:e},(0,a.zw)(e+i.range),9,I)})),128))],512),[[O.bM,r.v$.thesis.pageStart.$model]]),r.v$.thesis.pageStart.$error?((0,n.wg)(),(0,n.iD)("small",N,"الرجاء قم بادخال صفحة البداية")):(0,n.kq)("",!0)]),(0,n._)("div",A,[(0,n.wy)((0,n._)("select",{class:"form-select","data-trigger":"",name:"choices-single-default",id:"choices-single-default","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.v$.thesis.pageEnd.$model=e})},[H,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.bookPages,(function(e,t){return(0,n.wg)(),(0,n.iD)("option",{key:t,value:e},(0,a.zw)(e+i.range),9,K)})),128))],512),[[O.bM,r.v$.thesis.pageEnd.$model]]),r.v$.thesis.pageEnd.$error?((0,n.wg)(),(0,n.iD)("small",M,(0,a.zw)(i.pageError?i.pageError:" الرجاء قم بادخال صفحة النهاية"),1)):(0,n.kq)("",!0)]),(0,n._)("div",Y,[V,(0,n.wy)((0,n._)("textarea",{rows:"5",placeholder:"... اكتب أطروحتك",class:"rounded form-control",id:"thesisBody","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.v$.thesis.text.$model=e})},null,512),[[O.nr,r.v$.thesis.text.$model]]),r.v$.thesis.text.$error?((0,n.wg)(),(0,n.iD)("p",L," لطفًا قم بكتابة اطروحة عدد حروفها بين 500 و 1800 خالية من الرموز التعبيرية (emojis) ")):(0,n.kq)("",!0)]),0==i.photos_count?((0,n.wg)(),(0,n.iD)("div",G,[J,(0,n._)("input",{class:"form-control",type:"file",id:"customFile",ref:"file",onInput:t[3]||(t[3]=function(e){return i.thesis.image_1=e.target.files[0]})},null,544),Q])):(0,n.kq)("",!0),X],32)):(0,n.kq)("",!0)]),ee]})),_:1})])}s(9653),s(91058),s(74916),s(15306);var se=s(54028),ne=s(62587),ae=s(74674);const re={name:"CreateThesis",created:function(){this.getPhotosCount()},setup:function(){return{v$:(0,se.ZP)()}},props:{pagesStartingRange:{type:[Number],required:!0},book:{type:[Object],required:!0},user_book_id:{type:[Number],required:!0},noOfthesis:{type:[Number],required:!0}},data:function(){return{photos_count:0,thesis:{text:"",pageStart:"",pageEnd:"",image_1:[],pages:0},bookPages:this.book.pages,range:this.pagesStartingRange,pageError:"",emojiError:"",imageFlage:!1}},validations:function(){return{thesis:{text:{required:ne.C1,minLength:(0,ne.Ei)(500),maxLength:(0,ne.BS)(1800)},pageStart:{required:ne.C1},pageEnd:{required:ne.C1,valdiatePages:this.validatePages}}}},methods:{validatePages:function(){var e=parseInt(this.thesis.pageStart)<parseInt(this.thesis.pageEnd);return this.pageError=e?"":"يجب ان تكون صفحة البداية اقل من صفحة النهاية",e},submit:function(){var e=this;return(0,j.Z)((0,P.Z)().mark((function t(){var s;return(0,P.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.thesis.text=e.removeEmojis(e.thesis.text),e.v$.$touch(),e.v$.thesis.$invalid){t.next=17;break}return e.thesis.pageStart=e.thesis.pageStart+e.range,e.thesis.pageEnd=e.thesis.pageEnd+e.range,t.next=7,ae.Z.createThesis(e.thesis,e.user_book_id);case 7:s=t.sent,e.thesis.text="",e.thesis.pageEnd="",e.thesis.pageStart="",e.thesis.image_1=[],e.$refs.file&&(e.$refs.file.value=null),e.v$.thesis.$reset(),e.getPhotosCount(),window.location.reload(),e.$emit("addThesis",s.data.data);case 17:case"end":return t.stop()}}),t)})))()},removeEmojis:function(e){var t=/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;return e.replace(t,"")},uploadFile:function(){this.thesis.file=this.$refs.file.files},getPhotosCount:function(){var e=this;return(0,j.Z)((0,P.Z)().mark((function t(){var s;return(0,P.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ae.Z.getPhotosCount(e.user_book_id);case 2:s=t.sent,e.photos_count=s;case 4:case"end":return t.stop()}}),t)})))()}}};var ie=s(83744);const oe=(0,ie.Z)(re,[["render",te]]),ue=oe;var ce={class:"col-sm-12"},le={class:"card card-block card-stretch card-height"},de={class:"card-body"},pe={class:"user-post-data"},he={class:"d-flex justify-content-between"},fe={class:"w-100"},me={class:"d-flex justify-content-between"},ge={class:"w-100 text-start"},be={class:"mb-0 d-inline-block"},we={key:0,class:"mb-0 text-primary"},ve={key:1,class:"alert alert-success w-100 mt-2"},_e={key:0,class:"card-post-toolbar"},ke=(0,n._)("span",{class:"material-symbols-outlined"}," more_horiz ",-1),ye=[ke],xe=(0,n._)("span",{class:"material-symbols-outlined me-2 md-18"}," edit ",-1),Ze=(0,n.Uk)(" تعديل "),Te=[xe,Ze],Ce=(0,n._)("span",{class:"material-symbols-outlined me-2 md-18"}," delete ",-1),qe=(0,n.Uk)(" حذف "),$e=[Ce,qe],De=(0,n._)("hr",null,null,-1),Se={class:"row"},Be={class:"col-6 form-group"},ze=(0,n._)("label",{class:"form-label"},"صفحة البداية",-1),Ee={class:"form-control-plaintext"},Pe={class:"col-6 form-group"},je=(0,n._)("label",{class:"form-label"},"صفحة النهاية",-1),Oe={class:"form-control-plaintext"},Ue={class:"mt-3"},Fe={key:0,class:"user-post"},Re={class:"d-grid grid-rows-2 grid-flow-col gap-3"},We=["onClick","src"];function Ie(e,t,s,r,i,o){return(0,n.wg)(),(0,n.iD)("div",ce,[(0,n._)("div",le,[(0,n._)("div",de,[(0,n._)("div",pe,[(0,n._)("div",he,[(0,n._)("div",fe,[(0,n._)("div",me,[(0,n._)("div",ge,[(0,n._)("h5",be,(0,a.zw)(s.title)+" "+(0,a.zw)(s.number+1),1),s.thesis.degree?((0,n.wg)(),(0,n.iD)("p",we,"التقييم || "+(0,a.zw)(s.thesis.degree),1)):(0,n.kq)("",!0),s.thesis.reviews?((0,n.wg)(),(0,n.iD)("div",ve,(0,a.zw)(s.thesis.reviews),1)):(0,n.kq)("",!0)]),null==s.thesis.status||"retard"==s.thesis.status?((0,n.wg)(),(0,n.iD)("div",_e,[(0,n._)("div",{class:"dropdown-toggle",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-expanded":"false",role:"button",onClick:t[0]||(t[0]=function(e){return i.show=!i.show})},ye),(0,n._)("div",{class:(0,a.C_)("dropdown-menu dropdown-menu-right ".concat(i.show?"show":"")),"aria-labelledby":"dropdownMenuButton",style:{}},[(0,n._)("a",{class:"dropdown-item d-flex align-items-center",onClick:t[1]||(t[1]=function(e){return o.UpdateThesis(s.thesis.id)})},Te),(0,n._)("a",{class:"dropdown-item d-flex align-items-center",onClick:t[2]||(t[2]=function(e){return o.deleteThesis(s.thesis.id)})},$e)],2)])):(0,n.kq)("",!0)])])])]),De,(0,n._)("div",Se,[(0,n._)("div",Be,[ze,(0,n._)("label",Ee,(0,a.zw)(s.thesis.starting_page),1)]),(0,n._)("div",Pe,[je,(0,n._)("label",Oe,(0,a.zw)(s.thesis.ending_page),1)])]),(0,n._)("div",Ue,[(0,n._)("p",null,(0,a.zw)(s.thesis.thesis_text),1)]),s.thesis.photos?((0,n.wg)(),(0,n.iD)("div",Fe,[(0,n._)("div",Re,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.thesis.photos,(function(e){return(0,n.wg)(),(0,n.iD)("div",{class:"row-span-2 row-span-md-1 text-center",key:e.id},[(0,n._)("img",{style:{cursor:"pointer"},onClick:function(t){return o.openPhoto(e)},src:o.resolve_img_url(e),alt:"post-image",class:"img-fluid rounded w-50"},null,8,We)])})),128))])])):(0,n.kq)("",!0)])])])}const Ne={name:"ThesisDisplay",components:{},props:{thesis:{type:[Object],required:!0},number:{type:[Number],required:!0},title:{type:[String],required:!0},book:{type:[Object],required:!0}},data:function(){return{show:!1}},methods:{resolve_img_url:function(e){var t="https://www.eligible.osboha180.com/api/api/thesises/image?path=".concat(e.path);return t},deleteThesis:function(e){this.show=!this.show;var t=this.$swal.mixin({customClass:{confirmButton:"btn btn-primary btn-lg",cancelButton:"btn btn-outline-primary btn-lg ms-2"},buttonsStyling:!1});t.fire({title:"هل أنت متأكد؟",text:"موافقتك تعني حذف هذه الأطروحة ",icon:"warning",showCancelButton:!0,confirmButtonText:"نعم قم بالحذف",cancelButtonText:"تراجع  ",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}}).then((function(s){s.isConfirmed&&ae.Z.deleteThesis(e).then((function(e){t.fire({title:"تم الحذف",text:"تم حذف الأطروحة",icon:"success",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}}),location.reload()}))["catch"]((function(e){console.log(e)}))}))},UpdateThesis:function(e){this.show=!this.show,this.$router.push({path:"/thesis-review/update/".concat(e)})},openPhoto:function(e){var t="https://www.eligible.osboha180.com/api/api/thesises/image?path=".concat(e.path);window.open(t,"_blank")}}},Ae=(0,ie.Z)(Ne,[["render",Ie]]),He=Ae,Ke={name:"Theses",created:function(){var e=this;return(0,j.Z)((0,P.Z)().mark((function t(){return(0,P.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getTheses();case 2:case"end":return t.stop()}}),t)})))()},components:{CreateThesis:ue,ThesisDisplay:He},data:function(){return{pagesStartingRange:0,already_have_one:0,auditable:!1,book:null,user_book:null,status:"",theses:[],thesisTitle:"الأطروحة رقم",error:"",current:1,insertSuccessful:!1}},methods:{getTheses:function(){var e=this;return(0,j.Z)((0,P.Z)().mark((function t(){var s;return(0,P.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ae.Z.getByBook(e.$route.params.id);case 2:s=t.sent,e.book=s.user_book.book,e.theses=s.theses,e.user_book=s.user_book,e.status=e.user_book.status,e.auditable=e.theses.some((function(e){return"retard"===e.status||null===e.status})),e.theses.length>0&&(e.pagesStartingRange=+e.theses[e.theses.length-1].ending_page,e.book.pages=e.book.pages-e.pagesStartingRange),console.log(e.book.pages);case 10:case"end":return t.stop()}}),t)})))()},addThesis:function(e){this.theses.push(e),this.auditable=!0,this.insertSuccessful=!0},reviewThesisStatus:function(){var e=this;return(0,j.Z)((0,P.Z)().mark((function t(){var s;return(0,P.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:s=e.$swal.mixin({customClass:{confirmButton:"btn btn-primary btn-lg",cancelButton:"btn btn-outline-primary btn-lg ms-2"},buttonsStyling:!1}),s.fire({title:"هل أنت متأكد؟",text:"في حال اعتمادك للاطروحات لن يمكنك اضافة  أطروحة جديدة أو التعديل على الأطروحات التي كتبتها ",icon:"warning",showCancelButton:!0,confirmButtonText:"نعم قم بالاعتماد",cancelButtonText:"تراجع  ",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}}).then((function(t){t.isConfirmed&&ae.Z.reviewThesis(e.user_book.id).then((function(t){s.fire({title:"تم الاعتماد",text:"تم اعتماد أطروحاتك",icon:"success",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}}),e.insertSuccessful=!1,location.reload()}))["catch"]((function(e){console.log(e)}))}));case 2:case"end":return t.stop()}}),t)})))()},back:function(){this.$router.push({name:"achievement.steps",params:{id:this.$route.params.id}})},changeTab:function(e){this.current=e,window.scrollTo({behavior:"smooth"})},checkActive:function(e,t){var s="";return this.current>e&&(s="active"),this.current>t&&(s+=" done"),s}}},Me=(0,ie.Z)(Ke,[["render",E]]),Ye=Me},44272:(e,t,s)=>{e.exports=s.p+"img/book-banner.6a2a5a9c.png"},90475:(e,t,s)=>{e.exports=s.p+"img/reader.b5157672.png"}}]);
//# sourceMappingURL=6360.c26f7ab4.js.map