"use strict";(self["webpackChunkosboha180"]=self["webpackChunkosboha180"]||[]).push([[8082],{85117:(e,t,n)=>{var o=n(66330),r=TypeError;e.exports=function(e,t){if(!delete e[t])throw r("Cannot delete property "+o(t)+" of "+o(e))}},5212:(e,t,n)=>{var o=n(82109),r=n(42092).some,s=n(9341),i=s("some");o({target:"Array",proto:!0,forced:!i},{some:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},40561:(e,t,n)=>{var o=n(82109),r=n(47908),s=n(51400),i=n(19303),a=n(26244),u=n(7207),c=n(65417),l=n(86135),d=n(85117),m=n(81194),p=m("splice"),f=Math.max,h=Math.min;o({target:"Array",proto:!0,forced:!p},{splice:function(e,t){var n,o,m,p,g,_,v=r(this),b=a(v),w=s(e,b),q=arguments.length;for(0===q?n=o=0:1===q?(n=0,o=b-w):(n=q-2,o=h(f(i(t),0),b-w)),u(b+n-o),m=c(v,o),p=0;p<o;p++)g=w+p,g in v&&l(m,p,v[g]);if(m.length=o,n<o){for(p=w;p<b-o;p++)g=p+o,_=p+n,g in v?v[_]=v[g]:d(v,_);for(p=b;p>b-o+n;p--)d(v,p-1)}else if(n>o)for(p=b-o;p>w;p--)g=p+o-1,_=p+n-1,g in v?v[_]=v[g]:d(v,_);for(p=0;p<n;p++)v[p+w]=arguments[p+2];return v.length=b-o+n,m}})},21175:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(50124),r=n(48534),s=n(62760),i=n(57333);const a={addQuestion:function(){var e=(0,r.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.h.post("questions",t);case 2:return n=e.sent,e.abrupt("return",n.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getQuestions:function(){var e=(0,r.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.h.get("questions/user-book/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),addDegree:function(e,t,n){var o=s.h.patch("/questions/add-degree/".concat(e),{auditor_id:i.Z.getUser().id,reviews:t,degree:n});return console.log(o),o},deleteQuestion:function(e){var t=s.h["delete"]("/questions/".concat(e));return t},getByStatus:function(){var e=(0,r.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.h.get("questions/status/".concat(t));case 2:return n=e.sent,n.data,e.abrupt("return",n.data.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getByUserBook:function(){var e=(0,r.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.h.get("questions/user_book_id/".concat(t));case 2:return n=e.sent,n.data,e.abrupt("return",n.data.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),acceptQuestion:function(e,t){var n,o=null;"accept"==t?n=e:"audit"==t&&(o=e);var r=s.h.post("/questions/review",{id:n,user_book_id:o,status:t,reviewer_id:i.Z.getUser().id});return r},rejectRetardThesis:function(e,t,n){var o=s.h.post("/questions/review",{id:e,status:n,reviewer_id:i.Z.getUser().id,reviews:t});return o},updateQuestion:function(){var e=(0,r.Z)((0,o.Z)().mark((function e(t,n){var r;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.h.patch("/questions/".concat(n),t,{})["catch"]((function(e){console.log(e)}));case 2:return r=e.sent,e.abrupt("return",r.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),reviewQuestion:function(){var e=(0,r.Z)((0,o.Z)().mark((function e(t){return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.h.patch("/questions/review-question/".concat(t))["catch"]((function(e){})).then((function(e){return e}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getById:function(){var e=(0,r.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.h.get("questions/".concat(t));case 2:return n=e.sent,n.data,e.abrupt("return",n.data.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getByBook:function(){var e=(0,r.Z)((0,o.Z)().mark((function e(t){var n;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.h.get("questions/book/".concat(t));case 2:return n=e.sent,n.data,e.abrupt("return",n.data.data);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}},48082:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Re});var o=n(66252),r=n(3577),s=n(49963),i=n(44272),a=n(90475),u={class:"row"},c={class:"col-sm-12"},l={class:"iq-card-body profile-page p-0"},d={class:"profile-header"},m=(0,o._)("div",{class:"cover-container"},[(0,o._)("img",{src:i,alt:"profile-bg",class:"rounded img-fluid"})],-1),p={class:"user-detail text-center mb-3"},f=(0,o._)("div",{class:"profile-img"},[(0,o._)("img",{src:a,alt:"profile-img",class:"avatar-130 img-fluid"})],-1),h={class:"profile-detail mt-1"},g=(0,o._)("br",null,null,-1),_={key:0,class:""},v={class:"iq-card-body p-0"},b={class:"user-tabing"},w={class:"col-sm-12"},q={class:"tab-content"},k={class:"iq-card-body p-0"},y={class:"row"},x={class:"col-12"},Z={id:"post-modal-data",class:"iq-card"},F=(0,o._)("h4",{class:"card-title"},"إضافة الأسئلة المعرفية وإجاباتها",-1),C={class:"d-flex align-items-center"},$={class:"d-flex align-items-center mt-3 w-100"},Q=(0,o._)("div",{class:"form-group col-12"},[(0,o._)("small",{style:{color:"red"}}," *فضلًا يتوجب عليك إرفاق عدد (5) من الأسئلة كحد أدنى. ")],-1),D={class:"form-group col-6"},z=(0,o._)("option",{value:""},"اختر صفحة البداية",-1),B=["value"],j={key:0,style:{color:"red"}},E={class:"form-group col-6"},S=(0,o._)("option",{value:""},"اختر صفحة النهاية",-1),U=["value"],T={key:0,style:{color:"red"}},I={class:"form-group"},L={key:0,style:{color:"red"}},M=(0,o._)("div",null,null,-1),O={class:"form-group"},W=(0,o._)("h4",{class:"card-title"}," إجاباتها بأسلوبك",-1),H=(0,o._)("small",{style:{color:"red"}}," *فضلًا يتوجب عليك إرفاق عدد (3) من الاجابات كحد أقصى تجيب فيها عن السؤال بأسلوبك. ",-1),K=["onUpdate:modelValue"],Y=["onClick"],V={key:0,style:{color:"red"}},A=(0,o._)("hr",null,null,-1),P=["disabled"],N=(0,o._)("input",{type:"submit",value:"أضافة",href:"javascript:void(0);",class:"btn btn-primary d-block mt-3"},null,-1),R=(0,o._)("hr",null,null,-1),G=(0,o._)("div",null,[(0,o._)("h5",{class:"card-title"},"تمت الاضافة بنجاح")],-1),J=(0,o._)("h4",{class:"card-title"},"الأسئلة",-1),X={id:"form-wizard1",class:"text-center mt-3"},ee={id:"top-tab-list",class:"p-0 row list-inline"},te=["onClick"],ne={href:"javascript:void(0);"},oe={class:"col-lg-12"};function re(e,t,n,i,a,re){var se=(0,o.up)("iq-card"),ie=(0,o.up)("tab-nav-items"),ae=(0,o.up)("tab-nav"),ue=(0,o.up)("alert"),ce=(0,o.up)("ListQuestion"),le=(0,o.up)("tab-content-item");return(0,o.wg)(),(0,o.iD)("div",u,[(0,o._)("div",c,[(0,o.Wm)(se,null,{default:(0,o.w5)((function(){return[(0,o._)("div",l,[(0,o._)("div",d,[m,(0,o._)("div",p,[f,(0,o._)("div",h,[g,a.book?((0,o.wg)(),(0,o.iD)("h3",_,(0,r.zw)(a.book.book_name)+" - قسم الأسئلة العامة ",1)):(0,o.kq)("",!0)])])])])]})),_:1}),(0,o.Wm)(se,{class:"iq-card"},{default:(0,o.w5)((function(){return[(0,o._)("div",v,[(0,o._)("div",b,[(0,o.Wm)(ae,{pills:!0,id:"pills-tab",class:"nav nav-pills d-flex align-items-center justify-content-center profile-feed-items p-0 m-0"},{default:(0,o.w5)((function(){return[(0,o.Wm)(ie,{class:"w-100 p-0",active:!0,id:"pills-feed-tab",href:"#questions_container",ariaControls:"pills-home",role:"tab",ariaSelected:!0,title:"المرحلة الثالثة - الاسئلة المعرفية"})]})),_:1})])])]})),_:1})]),(0,o._)("div",w,[(0,o._)("div",q,[(0,o.Wm)(le,{active:!0,id:"questions_container","aria-labelled-by":"pills-feed-tab"},{default:(0,o.w5)((function(){return[(0,o._)("div",k,[(0,o._)("div",y,[(0,o._)("div",x,[(0,o._)("div",Z,[(0,o._)("div",null,[a.questions.length<12&&a.auditable||0==a.questions.length||a.questions.length<5?((0,o.wg)(),(0,o.j4)(se,{key:0,id:"post-modal-data","body-class":"iq-card iq-card-block iq-card-stretch iq-card-height"},{headerTitle:(0,o.w5)((function(){return[F]})),body:(0,o.w5)((function(){return[(0,o._)("div",C,[(0,o._)("div",$,[a.book?((0,o.wg)(),(0,o.iD)("form",{key:0,onSubmit:t[5]||(t[5]=(0,s.iM)((function(){return re.submitQuestionForm&&re.submitQuestionForm.apply(re,arguments)}),["prevent"])),class:"post-text ml-3 w-100 row"},[Q,(0,o._)("div",D,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.v$.questionForm.starting_page.$model=e}),class:"form-select","data-trigger":"",name:"choices-single-default",id:"choices-single-default"},[z,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.book.pages,(function(e,t){return(0,o.wg)(),(0,o.iD)("option",{key:t,value:e},(0,r.zw)(e),9,B)})),128))],512),[[s.bM,i.v$.questionForm.starting_page.$model]]),i.v$.questionForm.starting_page.$error?((0,o.wg)(),(0,o.iD)("small",j,(0,r.zw)(a.pageError?a.pageError:"الرجاء قم بادخال صفحة البداية"),1)):(0,o.kq)("",!0)]),(0,o._)("div",E,[(0,o.wy)((0,o._)("select",{class:"form-select","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.v$.questionForm.ending_page.$model=e}),"data-trigger":"",name:"choices-single-default",id:"choices-single-default"},[S,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.book.pages,(function(e,t){return(0,o.wg)(),(0,o.iD)("option",{key:t,value:e},(0,r.zw)(e),9,U)})),128))],512),[[s.bM,i.v$.questionForm.ending_page.$model]]),i.v$.questionForm.ending_page.$error?((0,o.wg)(),(0,o.iD)("small",T,(0,r.zw)(a.pageError?a.pageError:" الرجاء قم بادخال صفحة\n                                                                  النهاية"),1)):(0,o.kq)("",!0)]),(0,o._)("div",I,[(0,o.wy)((0,o._)("textarea",{rows:"5",placeholder:" اكتب سؤالًا تجيب عنه الصفحات التي حددتها أعلاه، سنبحث عن إجابة السؤال ضمن هذه الصفحات فقط لتوثيق قراءتك",class:"rounded form-control",id:"bookQuestion",onChange:t[2]||(t[2]=function(e){return re.resetInsertSuccessfully()}),"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.v$.questionForm.question.$model=e})},null,544),[[s.nr,i.v$.questionForm.question.$model]]),i.v$.questionForm.question.$error?((0,o.wg)(),(0,o.iD)("small",L," لطفًا قم بكتابة سؤال عدد حروفه بين 100 و 250 خالي من الرموز التعبيرية (emojis) ")):(0,o.kq)("",!0)]),M,(0,o._)("div",O,[W,H,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.questionForm.quotes,(function(e,t){return(0,o.wg)(),(0,o.iD)("div",{class:"form-group row",key:t},[(0,o.wy)((0,o._)("textarea",{rows:"5",placeholder:"اكتب لنا إجابة السؤال الذي ذكرت أعلاه بأسلوبك، سنقوم بتفقد الصفحات المحددة أعلاه لنراجع مدى دقة الإجابة التي قدمت للسؤال",class:"rounded form-control mt-2",id:"bookQuote","onUpdate:modelValue":function(t){return e.text=t},style:{width:"90%"}},"\r\n                                  ",8,K),[[s.nr,e.text]]),(0,o._)("i",{class:"material-symbols-outlined col-1",onClick:function(e){return re.removeField(t,a.questionForm.quotes)}},"cancel",8,Y)])})),128)),i.v$.questionForm.quotes.$error?((0,o.wg)(),(0,o.iD)("small",V," قم بادخال إجابة واحدة على الاقل عدد حروفها لا يزيد عن 250 خالية من الرموز التعبيرية (emojis) ")):(0,o.kq)("",!0),A,(0,o._)("button",{class:"btn btn-primary rounded-pill mb-3 me-1",onClick:t[4]||(t[4]=function(t){return re.addField(e.textarea,a.questionForm.quotes)}),disabled:a.questionForm.quotes.length>=3}," اضافة إجابة ",8,P)]),N],32)):(0,o.kq)("",!0)])]),R]})),_:1})):(0,o.kq)("",!0)])]),a.insertSuccessful?((0,o.wg)(),(0,o.j4)(ue,{key:0,variant:"primary",className:"d-flex align-items-center text-center"},{default:(0,o.w5)((function(){return[G]})),_:1})):(0,o.kq)("",!0),a.questions.length>0?((0,o.wg)(),(0,o.j4)(se,{key:1},{headerTitle:(0,o.w5)((function(){return[J]})),body:(0,o.w5)((function(){return[(0,o._)("form",X,[(0,o._)("ul",ee,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.questions,(function(e,t){return(0,o.wg)(),(0,o.iD)("li",{key:t,class:(0,r.C_)([re.checkActive(t,t+1),"col-2 mb-2 text-start"]),onClick:function(e){return re.changeTab(t+1)},id:"account"},[(0,o._)("a",ne,[(0,o._)("span",null,(0,r.zw)(t+1),1)])],10,te)})),128))]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.questions,(function(e,t){return(0,o.wg)(),(0,o.iD)("fieldset",{key:t,class:(0,r.C_)(a.current==t+1?"d-block":"d-none")},[(0,o.Wm)(ce,{question:e,index:t,book:a.book,user_book:a.user_book},null,8,["question","index","book","user_book"])],2)})),128))])]})),_:1})):(0,o.kq)("",!0),(0,o._)("div",oe,[(0,o.Wm)(se,null,{body:(0,o.w5)((function(){return[a.questions.length>=5&&a.auditable?((0,o.wg)(),(0,o.iD)("button",{key:0,class:"btn btn-primary d-block w-100 mb-3",onClick:t[6]||(t[6]=function(){return re.reviewQuestions&&re.reviewQuestions.apply(re,arguments)})}," اعتماد ")):(0,o.kq)("",!0),(0,o._)("button",{class:"btn btn-success d-block w-100",onClick:t[7]||(t[7]=function(e){return re.back()})}," عودة لصفحة الانجاز ")]})),_:1})])])])])]})),_:1})])])])}var se=n(50124),ie=n(48534),ae=(n(5212),n(41539),n(74916),n(15306),n(91058),n(40561),n(54028)),ue=n(62587),ce={class:"col-sm-12"},le={class:"card card-block card-stretch card-height"},de={class:"card-body"},me={class:"user-post-data"},pe={class:"d-flex justify-content-between"},fe={class:"w-100"},he={class:"d-flex justify-content-between"},ge={class:"w-100 text-start"},_e={class:"mb-0 d-inline-block"},ve={key:0,class:"mb-0 text-primary"},be={key:1,class:"alert alert-success w-100 mt-2"},we={key:0,class:"card-post-toolbar"},qe=(0,o._)("span",{class:"material-symbols-outlined"}," more_horiz ",-1),ke=[qe],ye=(0,o._)("span",{class:"material-symbols-outlined me-2 md-18"}," edit ",-1),xe=(0,o.Uk)(" تعديل "),Ze=[ye,xe],Fe=(0,o._)("span",{class:"material-symbols-outlined me-2 md-18"}," delete ",-1),Ce=(0,o.Uk)(" حذف "),$e=[Fe,Ce],Qe=(0,o._)("hr",null,null,-1),De={class:"row"},ze={class:"col-6 form-group"},Be=(0,o._)("label",{for:"uname",class:"form-label"},"صفحة البداية",-1),je={class:"form-control-plaintext"},Ee={class:"col-6 form-group"},Se=(0,o._)("label",{for:"emailid",class:"form-label"},"صفحة النهاية",-1),Ue={class:"form-control-plaintext"},Te={class:"mt-3"},Ie={class:"col-md-12 form-group"},Le={class:"col-md-12 form-group text-start"},Me=(0,o._)("label",{for:"emailid",class:"form-label"}," الاقتباسات",-1);function Oe(e,t,n,s,i,a){return(0,o.wg)(),(0,o.iD)("div",ce,[(0,o._)("div",le,[(0,o._)("div",de,[(0,o._)("div",me,[(0,o._)("div",pe,[(0,o._)("div",fe,[(0,o._)("div",he,[(0,o._)("div",ge,[(0,o._)("h5",_e," السؤال "+(0,r.zw)(n.index+1),1),n.question.degree?((0,o.wg)(),(0,o.iD)("p",ve,"التقييم || "+(0,r.zw)(n.question.degree),1)):(0,o.kq)("",!0),n.question.reviews?((0,o.wg)(),(0,o.iD)("div",be,(0,r.zw)(n.question.reviews),1)):(0,o.kq)("",!0)]),null==n.question.status||"retard"==n.question.status?((0,o.wg)(),(0,o.iD)("div",we,[(0,o._)("div",{class:"dropdown-toggle",id:"dropdownMenuButton","data-bs-toggle":"dropdown","aria-expanded":"false",role:"button",onClick:t[0]||(t[0]=function(e){return i.show=!i.show})},ke),(0,o._)("div",{class:(0,r.C_)("dropdown-menu dropdown-menu-right ".concat(i.show?"show":"")),"aria-labelledby":"dropdownMenuButton",style:{}},[(0,o._)("a",{class:"dropdown-item d-flex align-items-center",onClick:t[1]||(t[1]=function(e){return a.UpdateQuestion(n.question.id)})},Ze),(0,o._)("a",{class:"dropdown-item d-flex align-items-center",onClick:t[2]||(t[2]=function(e){return a.deleteQuestion(n.question.id)})},$e)],2)])):(0,o.kq)("",!0)])])])]),Qe,(0,o._)("div",De,[(0,o._)("div",ze,[Be,(0,o._)("label",je,(0,r.zw)(n.question.starting_page),1)]),(0,o._)("div",Ee,[Se,(0,o._)("label",Ue,(0,r.zw)(n.question.ending_page),1)])]),(0,o._)("div",Te,[(0,o._)("p",null,(0,r.zw)(n.question.question),1)]),(0,o._)("div",Ie,[(0,o._)("div",Le,[Me,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.question.quotation,(function(e){return(0,o.wg)(),(0,o.iD)("li",{key:e.id,class:"mt-3"},[(0,o._)("p",null,(0,r.zw)(e.text),1)])})),128))])])])])])])}var We=n(11686),He=n(21175);const Ke={name:"ListQuestion",mounted:function(){We.CF.index()},components:{},props:{question:{type:[Object],required:!0},index:{required:!0},book:{type:[Object],required:!0},user_book:{type:[Object],required:!0}},data:function(){return{show:!1}},methods:{deleteQuestion:function(e){this.show=!this.show;var t=this.$swal.mixin({customClass:{confirmButton:"btn btn-primary btn-lg",cancelButton:"btn btn-outline-primary btn-lg ms-2"},buttonsStyling:!1});t.fire({title:"هل أنت متأكد؟",text:"موافقتك تعني حذف هذه السؤال ",icon:"warning",showCancelButton:!0,confirmButtonText:"نعم قم بالحذف",cancelButtonText:"تراجع  ",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}}).then((function(n){n.isConfirmed&&He.Z.deleteQuestion(e).then((function(e){t.fire({title:"تم الحذف",text:"تم حذف السؤال",icon:"success",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}}),location.reload()}))["catch"]((function(e){console.log(e)}))}))},UpdateQuestion:function(e){this.show=!this.show,this.$router.push({path:"/questions/update/".concat(e)})}}};var Ye=n(83744);const Ve=(0,Ye.Z)(Ke,[["render",Oe]]),Ae=Ve,Pe={name:"Questions",created:function(){var e=this;return(0,ie.Z)((0,se.Z)().mark((function t(){return(0,se.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getQuestions();case 2:case"end":return t.stop()}}),t)})))()},setup:function(){return{v$:(0,ae.ZP)()}},components:{ListQuestion:Ae},data:function(){return{auditable:!1,book:null,user_book:null,status:"",pageError:"",quotesError:"",questionError:"",questionForm:{question:"",starting_page:"",ending_page:"",user_book_id:null,quotes:[{text:""}]},questions:[],show:"",current:1,insertSuccessful:!1}},validations:function(){return{questionForm:{question:{required:ue.C1,minLength:(0,ue.Ei)(10),maxLength:(0,ue.BS)(250)},starting_page:{required:ue.C1},ending_page:{required:ue.C1,valdiatePages:this.validatePages},quotes:{required:ue.C1,minLength:(0,ue.Ei)(1),$each:{text:{minLength:(0,ue.Ei)(250)}}}}}},methods:{getQuestions:function(){var e=this;return(0,ie.Z)((0,se.Z)().mark((function t(){var n;return(0,se.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,He.Z.getByBook(e.$route.params.id);case 2:n=t.sent,e.book=n.user_book.book,e.questions=n.questions,e.user_book=n.user_book,e.questionForm.user_book_id=n.user_book.id,e.status=e.user_book.status,e.auditable=e.questions.some((function(e){return"retard"===e.status||null===e.status}));case 9:case"end":return t.stop()}}),t)})))()},resetInsertSuccessfully:function(){this.insertSuccessful=!1},removeEmojis:function(e){var t=/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;return e.replace(t,"")},submitQuestionForm:function(){var e=this;return(0,ie.Z)((0,se.Z)().mark((function t(){var n,o;return(0,se.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(e.questionForm.question=e.removeEmojis(e.questionForm.question),n=0;n<e.questionForm.quotes.length;n++)e.questionForm.quotes[n].text=e.removeEmojis(e.questionForm.quotes[n].text);if(e.v$.$touch(),e.v$.questionForm.$invalid){t.next=16;break}return e.insertSuccessful=!1,t.next=7,He.Z.addQuestion(e.questionForm);case 7:o=t.sent,e.questionForm.question="",e.questionForm.starting_page="",e.questionForm.ending_page="",e.questionForm.quotes=[{text:""}],e.v$.questionForm.$reset(),e.questions.push(o),e.auditable=!0,e.insertSuccessful=!0;case 16:case"end":return t.stop()}}),t)})))()},validatePages:function(){var e=parseInt(this.questionForm.starting_page)<parseInt(this.questionForm.ending_page);return this.pageError=e?"":"يجب ان تكون صفحة البداية اقل من صفحة النهاية",e},reviewQuestions:function(){var e=this;return(0,ie.Z)((0,se.Z)().mark((function t(){var n;return(0,se.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.$swal.mixin({customClass:{confirmButton:"btn btn-primary btn-lg",cancelButton:"btn btn-outline-primary btn-lg ms-2"},buttonsStyling:!1}),n.fire({title:"هل أنت متأكد؟",text:"في حال الاعتماد لن يمكنك اضافة سؤال جديد أو التعديل على الأسئلة التي كتبتها ",icon:"warning",showCancelButton:!0,confirmButtonText:"نعم قم بالاعتماد ",cancelButtonText:"تراجع  ",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}}).then((function(t){t.isConfirmed&&He.Z.reviewQuestion(e.user_book.id).then((function(t){n.fire({title:"تم الارسال",text:"تم اعتماد الأسئلة",icon:"success",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}}),e.auditable=!1,e.insertSuccessful=!1}))["catch"]((function(e){console.log(e)}))}));case 2:case"end":return t.stop()}}),t)})))()},addField:function(e,t){t.push({text:""})},removeField:function(e,t){t.splice(e,1)},back:function(){this.$router.push({name:"achievement.steps",params:{id:this.$route.params.id}})},changeTab:function(e){this.current=e,window.scrollTo({behavior:"smooth"})},checkActive:function(e,t){var n="";return this.current>e&&(n="active"),this.current>t&&(n+=" done"),n}}},Ne=(0,Ye.Z)(Pe,[["render",re]]),Re=Ne},44272:(e,t,n)=>{e.exports=n.p+"img/book-banner.6a2a5a9c.png"},90475:(e,t,n)=>{e.exports=n.p+"img/reader.b5157672.png"}}]);
//# sourceMappingURL=8082.0d04f8b1.js.map