"use strict";(self["webpackChunkosboha180"]=self["webpackChunkosboha180"]||[]).push([[2795],{78148:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(50124),a=n(48534),c=n(62760);n(57333);const i={getUserCertificates:function(){return(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.h.get("certificates/user");case 2:return e=t.sent,t.abrupt("return",e.data.data);case 4:case"end":return t.stop()}}),t)})))()},createCertificate:function(t){return(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.h.post("certificates",{user_book_id:t});case 2:return n=e.sent,console.log(n),e.abrupt("return",n.data.data);case 5:case"end":return e.stop()}}),e)})))()},checkCertificate:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.h.get("userbook/certificate/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),fullCretificate:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.h.get("certificates/full-certificate/".concat(e));case 3:return n=t.sent,t.abrupt("return",n.data.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(e){return t.apply(this,arguments)}return e}()}},68621:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(50124),a=n(48534),c=n(62760),i=n(57333);const s={acceptUserBook:function(t){var e=c.h.post("/userbook/review",{id:t,status:"audit",reviewer_id:i.Z.getUser().id});return e},rejectRetardUserBook:function(t,e,n){var r=c.h.post("/userbook/review",{id:t,status:n,reviewer_id:i.Z.getUser().id,reviews:e});return r},getById:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.h.get("userbook/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),getReadyToAudit:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.h.get("userbook/ready/to");case 2:return e=t.sent,t.abrupt("return",e.data.data);case 4:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),getByBookID:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.h.get("userbook/by-book-id/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),updateUserBook:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.h.patch("userbook/".concat(n),{status:e})["catch"]((function(t){console.log(t)}));case 2:return a=t.sent,console.log(a),t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),requestCertificate:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.h.post("userbook",{book_id:e});case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(e){return t.apply(this,arguments)}return e}(),getByStatus:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.h.get("userbook/status/".concat(e));case 3:return n=t.sent,t.abrupt("return",n.data.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(e){return t.apply(this,arguments)}return e}(),lastAchievement:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.h.get("userbook/last-achievement/");case 3:return e=t.sent,t.abrupt("return",e.data.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}(),finishedAchievement:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.h.get("userbook/finished-achievement/");case 3:return e=t.sent,t.abrupt("return",e.data.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(){return t.apply(this,arguments)}return e}(),changeStatus:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.h.patch("userbook/status/".concat(n),{status:e});case 3:return a=t.sent,t.abrupt("return",a.data.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(e,n){return t.apply(this,arguments)}return e}(),cancel:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.h["delete"]("userbook/".concat(e));case 3:return n=t.sent,t.abrupt("return",n.data.data);case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));function e(e){return t.apply(this,arguments)}return e}()}},62795:(t,e,n)=>{n.r(e),n.d(e,{default:()=>S});n(68309);var r=n(66252),a=n(3577),c=n(60226),i={key:0,class:"row"},s={class:"col-lg-12"},o=(0,r._)("h4",{class:"card-title"},"طلبات الشهادات",-1),u={class:"d-grid gap-3 d-grid-template-1fr-19"},l={class:"row align-items-center"},p={class:"col-12"},d={class:"blog-description p-2 text-center"},f=(0,r._)("div",{class:"image-block text-center"},[(0,r._)("img",{src:c,class:"img-fluid rounded w-50",alt:"blog-img"})],-1),h={class:"mb-2 text-center",style:{direction:"inherit"}},m={class:"mb-2 text-center",style:{direction:"inherit"}},v={class:"mb-2 text-center",style:{direction:"inherit"}},w=["onClick"],b=["onClick"],g=["onClick"],_={key:1,class:"row"},k={class:"col-sm-12"},Z=(0,r._)("h4",{class:"card-title"},"طلبات الشهادات",-1),x=(0,r._)("h4",null," لا يوجد طلبات ",-1);function y(t,e,n,c,y,C){var B=(0,r.up)("iq-card");return y.certificates.length>0?((0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",s,[(0,r.Wm)(B,null,{headerTitle:(0,r.w5)((function(){return[o]})),body:(0,r.w5)((function(){return[(0,r._)("div",u,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(y.certificates,(function(t){return(0,r.wg)(),(0,r.iD)("div",{class:"card mb-0",key:t.id},[(0,r._)("div",l,[(0,r._)("div",p,[(0,r._)("div",d,[f,(0,r._)("h4",h," اسم السفير: "+(0,a.zw)(t.user.name),1),(0,r._)("h4",m,"اسم الكتاب:"+(0,a.zw)(t.book.book_name),1),(0,r._)("h4",v,"رقم التوثيق:"+(0,a.zw)(t.id),1),(0,r._)("button",{onClick:function(e){return C.acceptrequest(t.id)},type:"submit",class:"btn btn-primary d-block w-100"},"قبول ",8,w),(0,r._)("button",{onClick:function(e){return C.deleterequest(t.id)},type:"submit",class:"btn btn-primary d-block w-100 mt-3"},"رفض ",8,b),(0,r._)("button",{onClick:function(e){return C.listCertificate(t.id)},type:"submit",class:"btn btn-primary d-block w-100 mt-3"},"عرض الشهادة ",8,g)])])])])})),128))])]})),_:1})])])):((0,r.wg)(),(0,r.iD)("div",_,[(0,r._)("div",k,[(0,r.Wm)(B,null,{headerTitle:(0,r.w5)((function(){return[Z]})),body:(0,r.w5)((function(){return[x]})),_:1})])]))}var C=n(11686),B=n(68621),z=n(78148);const T={name:"acceptCertificates",components:{},mounted:function(){C.CF.index()},created:function(){var t=this;B.Z.getByStatus("audited").then((function(e){t.certificates=e}))["catch"]((function(t){}))},data:function(){return{certificates:[]}},methods:{listCertificate:function(t){window.open("https://www.eligible.osboha180.com/api/certificates/generate-pdf/".concat(t),"_blank")},deleterequest:function(t){var e=this.$swal.mixin({customClass:{confirmButton:"btn btn-primary btn-lg",cancelButton:"btn btn-outline-primary btn-lg ms-2"},buttonsStyling:!1});e.fire({title:"هل أنت متأكد؟",text:"موافقتك تعني رفض",icon:"warning",showCancelButton:!0,confirmButtonText:"نعم قم بالرفض",cancelButtonText:"تراجع  ",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}}).then((function(n){n.isConfirmed&&B.Z.changeStatus("rejected",t).then((function(t){e.fire({title:"تم الرفض",text:"تم رفض التوثيق",icon:"success",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}}),location.reload()}))["catch"]((function(t){}))}))},acceptrequest:function(t){var e=this.$swal.mixin({customClass:{confirmButton:"btn btn-primary btn-lg",cancelButton:"btn btn-outline-primary btn-lg ms-2"},buttonsStyling:!1});e.fire({title:"هل أنت متأكد؟",text:"موافقتك تعني قبول هذا التوثيق",icon:"warning",showCancelButton:!0,confirmButtonText:"نعم قم بالقبول",cancelButtonText:"تراجع  ",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}}).then((function(n){n.isConfirmed&&z.Z.createCertificate(t).then((function(t){e.fire({title:"تم القبول",text:"تم قبول التوثيق وانشاء الشهادة",icon:"success",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}}),location.reload()}))["catch"]((function(t){console.log(t)}))}))},resolve_img_url:function(t){var e="https://www.eligible.osboha180.com/api/certificates/image?path=".concat(t);return e}}};var q=n(83744);const I=(0,q.Z)(T,[["render",y]]),S=I},60226:(t,e,n)=>{t.exports=n.p+"img/finished.8a647fd5.png"}}]);
//# sourceMappingURL=2795.4bebde62.js.map