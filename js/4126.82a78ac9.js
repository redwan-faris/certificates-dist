"use strict";(self["webpackChunkosboha180"]=self["webpackChunkosboha180"]||[]).push([[4126],{62868:(e,r,t)=>{t.d(r,{Z:()=>u});var n=t(50124),a=t(48534),o=(t(68309),t(62760));const u={getUnactive:function(){var e=o.h.get("users/list/un-active");return e},getUnactiveReviwers:function(){var e=o.h.get("users/list/un-active-reviwers-auditors");return e},updateInfo:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new FormData,t.append("name",r.name),t.append("image",r.file[0]),e.next=5,o.h.post("users/update-info",t,{headers:{"Content-Type":"multipart/form-data"}})["catch"]((function(e){console.log(e)}));case 5:return a=e.sent,console.log(a),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));function r(r){return e.apply(this,arguments)}return r}(),getUser:function(e){return(0,a.Z)((0,n.Z)().mark((function r(){var t;return(0,n.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,o.h.get("users/".concat(e));case 2:return t=r.sent,r.abrupt("return",t.data.data);case 4:case"end":return r.stop()}}),r)})))()},deActiveUser:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.h.post("users/deactive-user",{id:r,rejectNote:t});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function r(r,t){return e.apply(this,arguments)}return r}(),acceptUser:function(e){var r=o.h.patch("users/activate/".concat(e));return r},getUserStatistics:function(){return(0,a.Z)((0,n.Z)().mark((function e(){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.h.get("users/statistics");case 2:return r=e.sent,e.abrupt("return",r.data.data);case 4:case"end":return e.stop()}}),e)})))()},acceptThesis:function(e){return!0}}},4126:(e,r,t)=>{t.r(r),t.d(r,{default:()=>U});t(68309);var n=t(66252),a=t(49963),o=t(3577),u=t(28729),s=t(79885),i=function(e){return(0,n.dD)("data-v-916614d2"),e=e(),(0,n.Cn)(),e},A={class:"col-sm-12 mt-3"},c=i((function(){return(0,n._)("div",{class:"iq-card-body p-3"},[(0,n._)("div",{class:"image-block text-center"},[(0,n._)("img",{src:u,class:"img-fluid rounded w-50",alt:"blog-img"})])],-1)})),l={class:"col-12 bg-white pt-2"},f={class:"sign-in-from"},m=i((function(){return(0,n._)("h1",{class:"mb-0"},"تعديل البيانات الشخصية",-1)})),p={class:"mt-2"},v={class:"form-group"},d=i((function(){return(0,n._)("label",{for:"exampleInputEmail1"},"الاسم",-1)})),h={key:0,style:{color:"red"}},g={class:"form-group"},q=i((function(){return(0,n._)("label",{class:"form-label",for:"customFile"},"صورة مستند تثبت هويتك ",-1)})),w={key:0,style:{color:"red"}},k={key:1,class:"form-group"},I={style:{color:"red"}},E={key:0,class:"form-group"},x={style:{color:"red"}},b={key:1,class:"col-sm-12 text-center"},B=i((function(){return(0,n._)("img",{src:s,alt:"loader",style:{height:"100px"}},null,-1)})),L=[B],y={class:"d-inline-block w-100"};function Q(e,r,t,u,s,i){var B=(0,n.up)("iq-card");return(0,n.wg)(),(0,n.iD)("div",A,[(0,n.Wm)(B,{class:"iq-card"},{default:(0,n.w5)((function(){return[c,(0,n._)("div",l,[(0,n._)("div",f,[m,(0,n._)("form",p,[(0,n._)("div",v,[d,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=function(e){return u.v$.form.name.$model=e}),class:"form-control mb-0",id:"exampleInputEmail1",placeholder:"ادخال الاسم هنا"},null,512),[[a.nr,u.v$.form.name.$model]]),u.v$.form.name.$error?((0,n.wg)(),(0,n.iD)("small",h,"الرجاء قم بادخال اسمك كما هو في المستند الرسمي")):(0,n.kq)("",!0)]),(0,n._)("div",g,[q,(0,n._)("input",{class:"form-control",type:"file",id:"customFile",ref:"file",onChange:r[1]||(r[1]=function(){return i.uploadFile&&i.uploadFile.apply(i,arguments)})},null,544),u.v$.form.file.$error?((0,n.wg)(),(0,n.iD)("small",w,"الرجاء قم برفع صورة")):(0,n.kq)("",!0),s.fileExtnError?((0,n.wg)(),(0,n.iD)("div",k,[(0,n._)("small",I,(0,o.zw)(s.fileExtnError),1)])):(0,n.kq)("",!0)]),s.regError?((0,n.wg)(),(0,n.iD)("div",E,[(0,n._)("small",x,(0,o.zw)(s.regError),1)])):(0,n.kq)("",!0),s.loader?((0,n.wg)(),(0,n.iD)("div",b,L)):(0,n.kq)("",!0),(0,n._)("div",y,[(0,n._)("input",{type:"button",onClick:r[2]||(r[2]=function(e){return i.onSubmit()}),class:"btn btn-primary float-end",value:"تحديث"})])])])])]})),_:1})])}var C=t(50124),D=t(48534),K=(t(74916),t(54028)),z=t(62587),j=t(62868);const O={name:"SignUp",setup:function(){return{v$:(0,K.ZP)()}},data:function(){return{loader:!1,form:{name:"",file:[]},regError:"",fileExtnError:null}},methods:{uploadFile:function(){this.form.file=this.$refs.file.files;var e=/(\.jpg|\.jpeg|\.bmp|\.gif|\.png)$/i;e.exec(this.form.file[0].name)?this.fileExtnError=null:this.fileExtnError="صيغة الملف غير مدعومة، اختر ملفًا أخر"},onSubmit:function(){var e=this;return(0,D.Z)((0,C.Z)().mark((function r(){return(0,C.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.v$.$touch(),e.v$.form.$invalid){r.next=17;break}return e.regError="",e.loader=!0,r.prev=4,r.next=7,j.Z.updateInfo(e.form);case 7:r.sent,e.loader=!1,e.regError=" تم التعديل",r.next=17;break;case 12:r.prev=12,r.t0=r["catch"](4),e.loader=!1,"The image failed to upload."==r.t0.response.data.data.image&&(e.fileExtnError=" صيغة الصورة غير مدعومة، اختر صورة أخرى"),e.regError=" حدث خطأ";case 17:case"end":return r.stop()}}),r,null,[[4,12]])})))()}},validations:function(){return{form:{name:{required:z.C1},file:{required:(0,z.CF)((function(e){return 0==this.form.file.length}))}}}}};var G=t(83744);const P=(0,G.Z)(O,[["render",Q],["__scopeId","data-v-916614d2"]]),U=P},79885:e=>{e.exports="data:image/gif;base64,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"},28729:(e,r,t)=>{e.exports=t.p+"img/update-info.48c78028.png"}}]);
//# sourceMappingURL=4126.82a78ac9.js.map