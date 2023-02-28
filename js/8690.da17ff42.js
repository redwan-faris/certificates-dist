"use strict";(self["webpackChunkosboha180"]=self["webpackChunkosboha180"]||[]).push([[8690],{63692:(e,t,s)=>{s.d(t,{Z:()=>c});var a=s(50124),n=s(48534),l=s(62760),r=s(57333);const c={getGeneralStatistics:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var s;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.h.get("userbook/general-statistics/");case 2:return s=e.sent,e.abrupt("return",s.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),checkAchievement:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var s;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.h.get("books/check-achievement/".concat(t));case 2:return s=e.sent,e.abrupt("return",s.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getBookByName:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var s;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.h.get("books/by-name/".concat(t));case 2:return s=e.sent,e.abrupt("return",s.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getStatistics:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var s;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.h.get("userbook/statistics/".concat(t));case 2:return s=e.sent,e.abrupt("return",s.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getBook:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var s;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.h.get("books/".concat(t));case 2:return s=e.sent,e.abrupt("return",s.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getUserBook:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var s;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.h.get("books/user-book/".concat(t));case 2:return s=e.sent,e.abrupt("return",s.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getAllUserBooks:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var s;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.h.get("books/user");case 2:return s=e.sent,e.abrupt("return",s.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getAllBooks:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var s;return(0,a.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.h.get("books?page="+t);case 2:return s=e.sent,e.abrupt("return",s.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),acceptThesis:function(e){var t=l.h.post("/thesises/audit",{id:e,status:"review",auditor_id:r.Z.getUser().id});return t},rejectThesis:function(e,t){var s=l.h.post("/thesises/audit",{id:e,status:"rejected",auditor_id:r.Z.getUser().id,reviews:t});return s}}},38690:(e,t,s)=>{s.r(t),s.d(t,{default:()=>At});var a=s(50124),n=s(48534),l=s(66252),r=s(3577),c=s(2262),i=s(63692),o={class:"container"},u={class:"list-unstyled row mb-0"},d={class:"col-lg-3 col-md-6"},_={class:"card"},v={class:"card-body"},m={class:"points"},h=(0,l._)("span",null,"عدد المراجعين",-1),f={class:"d-flex align-items-center"},w={class:"col-lg-3 col-md-6"},p={class:"card"},b={class:"card-body"},x={class:"points"},g=(0,l._)("span",null,"عدد المدققين",-1),y={class:"d-flex align-items-center"},k={class:"col-lg-3 col-md-6"},W={class:"card"},j={class:"card-body"},Z={class:"points"},z=(0,l._)("span",null,"عدد المستخدمين",-1),q={class:"d-flex align-items-center"},B={class:"col-lg-3 col-md-6"},F={class:"card"},S={class:"card-body"},U={class:"points"},A=(0,l._)("span",null,"الشهادات المصدرة",-1),D={class:"d-flex align-items-center"},T={class:"row"},C={class:"col-lg-8"},O={class:"card card-block card-stretch card-height"},G=(0,l._)("div",{class:"card-header"},[(0,l._)("div",{class:"d-flex justify-content-between flex-wrap"},[(0,l._)("h4",{class:"card-title"},"مستوى الكتب")])],-1),H={class:"card-body"},Y={class:"col-lg-4"},L={class:"row"},N={class:"col-6 col-md-6 col-lg-6"},P={class:"card"},X={class:"card-body"},E=(0,l._)("div",{class:"d-flex align-items-center justify-content-center"},[(0,l._)("div",{class:"border rounded bg-soft-info avatar-55 d-flex align-items-center justify-content-center"},[(0,l._)("span",{class:"material-symbols-outlined"}," menu_book ")])],-1),I={class:"mt-4"},J={class:"text-center"},K=(0,l._)("p",{class:"mb-0 text-center"},"كتاب",-1),M={class:"col-6 col-md-6 col-lg-6"},Q={class:"card"},R={class:"card-body"},V=(0,l._)("div",{class:"d-flex align-items-center justify-content-center"},[(0,l._)("div",{class:"border rounded bg-soft-warning avatar-55 d-flex align-items-center justify-content-center"},[(0,l._)("span",{class:"material-symbols-outlined"}," draw ")])],-1),$={class:"mt-4"},ee={class:"text-center"},te=(0,l._)("p",{class:"mb-0 text-center"},"أطروحة",-1),se={class:"col-6 col-md-6 col-lg-6"},ae={class:"card"},ne={class:"card-body"},le=(0,l._)("div",{class:"d-flex align-items-center justify-content-center"},[(0,l._)("div",{class:"border rounded bg-soft-danger avatar-55 d-flex align-items-center justify-content-center"},[(0,l._)("span",{class:"material-symbols-outlined"}," contact_support ")])],-1),re={class:"mt-4"},ce={class:"text-center"},ie=(0,l._)("p",{class:"mb-0 text-center"},"اسئلة",-1),oe={class:"col-6 col-md-6 col-lg-6"},ue={class:"card"},de={class:"card-body"},_e=(0,l._)("div",{class:"d-flex align-items-center justify-content-center"},[(0,l._)("div",{class:"border rounded bg-soft-success avatar-55 d-flex align-items-center justify-content-center"},[(0,l._)("span",{class:"material-symbols-outlined"}," summarize ")])],-1),ve={class:"mt-4"},me={class:"text-center"},he=(0,l._)("p",{class:"mb-0 text-center"},"ملخص عام",-1),fe={class:"col-lg-12"},we={class:"card"},pe=(0,l._)("div",{class:"card-header"},[(0,l._)("div",{class:"header-title"},[(0,l._)("h4",{class:"card-title"},"الاسئلة")])],-1),be={class:"card-body"},xe={class:"mb-3"},ge={class:"d-flex justify-content-between mt-2 text-dark"},ye=(0,l._)("h6",null,"أمتياز",-1),ke={class:"mb-3"},We={class:"d-flex justify-content-between mt-2 text-dark"},je=(0,l._)("h6",null,"ممتاز",-1),Ze={class:"mb-3"},ze={class:"d-flex justify-content-between mt-2 text-dark"},qe=(0,l._)("h6",null,"جيد جدا",-1),Be={class:"mb-3"},Fe={class:"d-flex justify-content-between mt-2 text-dark"},Se=(0,l._)("h6",null,"جيد",-1),Ue={class:"mb-3"},Ae={class:"d-flex justify-content-between mt-2 text-dark"},De=(0,l._)("h6",null,"مقبول",-1),Te={class:"mb-3"},Ce={class:"d-flex justify-content-between mt-2 text-dark"},Oe=(0,l._)("h6",null,"مرفوض",-1),Ge={class:"col-lg-12"},He={class:"card"},Ye=(0,l._)("div",{class:"card-header"},[(0,l._)("div",{class:"header-title"},[(0,l._)("h4",{class:"card-title"},"المراجعه العامة")])],-1),Le={class:"card-body"},Ne={class:"mb-3"},Pe={class:"d-flex justify-content-between mt-2 text-dark"},Xe=(0,l._)("h6",null,"أمتياز",-1),Ee={class:"mb-3"},Ie={class:"d-flex justify-content-between mt-2 text-dark"},Je=(0,l._)("h6",null,"ممتاز",-1),Ke={class:"mb-3"},Me={class:"d-flex justify-content-between mt-2 text-dark"},Qe=(0,l._)("h6",null,"جيد جدا",-1),Re={class:"mb-3"},Ve={class:"d-flex justify-content-between mt-2 text-dark"},$e=(0,l._)("h6",null,"جيد",-1),et={class:"mb-3"},tt={class:"d-flex justify-content-between mt-2 text-dark"},st=(0,l._)("h6",null,"مقبول",-1),at=(0,l.Uk)(),nt={class:"mb-3"},lt={class:"d-flex justify-content-between mt-2 text-dark"},rt=(0,l._)("h6",null,"مرفوض",-1),ct={class:"col-lg-12"},it={class:"card"},ot=(0,l._)("div",{class:"card-header"},[(0,l._)("div",{class:"header-title"},[(0,l._)("h4",{class:"card-title"},"الاطروحات")])],-1),ut={class:"card-body"},dt={class:"mb-3"},_t={class:"d-flex justify-content-between mt-2 text-dark"},vt=(0,l._)("h6",null,"أمتياز",-1),mt={class:"mb-3"},ht={class:"d-flex justify-content-between mt-2 text-dark"},ft=(0,l._)("h6",null,"ممتاز",-1),wt={class:"mb-3"},pt={class:"d-flex justify-content-between mt-2 text-dark"},bt=(0,l._)("h6",null,"جيد جدا",-1),xt={class:"mb-3"},gt={class:"d-flex justify-content-between mt-2 text-dark"},yt=(0,l._)("h6",null,"جيد",-1),kt={class:"mb-3"},Wt={class:"d-flex justify-content-between mt-2 text-dark"},jt=(0,l._)("h6",null,"مقبول",-1),Zt=(0,l.Uk)(),zt={class:"mb-3"},qt={class:"d-flex justify-content-between mt-2 text-dark"},Bt=(0,l._)("h6",null,"مرفوض",-1),Ft={name:"Statistics",created:function(){this.getStatistics()},data:function(){return{statistics:{},thesises:{},questions:{},general_informations:{}}},methods:{getStatistics:function(){var e=this;return(0,n.Z)((0,a.Z)().mark((function t(){var s;return(0,a.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.Z.getGeneralStatistics();case 3:s=t.sent,e.statistics=s,e.thesises=e.statistics.thesises,e.general_informations=e.statistics.general_informations,e.questions=e.statistics.questions,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}};const St=Object.assign(Ft,{setup:function(e){(0,c.iH)(""),(0,c.qj)({inline:!0,minDate:"today",dateFormat:"Y-m-d"});var t=(0,c.iH)({series:[{name:"Total Levels",data:[275,235,127]}],options:{colors:["#50b5ff"],chart:{toolbar:{show:!1}},forecastDataPoints:{count:2},stroke:{width:3},grid:{show:!0,strokeDashArray:7},markers:{size:6,colors:"#FFFFFF",strokeColors:["#50b5ff"],strokeWidth:2,strokeOpacity:.9,strokeDashArray:0,fillOpacity:0,shape:"circle",radius:2,offsetX:0,offsetY:0},xaxis:{categories:["بسيط","متوسط","متقدم"],axisBorder:{show:!1},axisTicks:{show:!1},tooltip:{enabled:!1}}}});return function(e,s){var a=(0,l.up)("apexchart"),n=(0,l.up)("b-progress-bar"),c=(0,l.up)("b-progress");return(0,l.wg)(),(0,l.iD)("div",o,[(0,l._)("ul",u,[(0,l._)("li",d,[(0,l._)("div",_,[(0,l._)("div",v,[(0,l._)("div",m,[h,(0,l._)("div",f,[(0,l._)("h3",null,(0,r.zw)(e.statistics.reviewer),1)])])])])]),(0,l._)("li",w,[(0,l._)("div",p,[(0,l._)("div",b,[(0,l._)("div",x,[g,(0,l._)("div",y,[(0,l._)("h3",null,(0,r.zw)(e.statistics.auditers),1)])])])])]),(0,l._)("li",k,[(0,l._)("div",W,[(0,l._)("div",j,[(0,l._)("div",Z,[z,(0,l._)("div",q,[(0,l._)("h3",null,(0,r.zw)(e.statistics.users),1)])])])])]),(0,l._)("li",B,[(0,l._)("div",F,[(0,l._)("div",S,[(0,l._)("div",U,[A,(0,l._)("div",D,[(0,l._)("h3",null,(0,r.zw)(e.statistics.certificates),1)])])])])])]),(0,l._)("div",T,[(0,l._)("div",C,[(0,l._)("div",O,[G,(0,l._)("div",H,[(0,l.Wm)(a,{height:"100%",type:"line",options:t.value.options,series:t.value.series},null,8,["options","series"])])])]),(0,l._)("div",Y,[(0,l._)("div",L,[(0,l._)("div",N,[(0,l._)("div",P,[(0,l._)("div",X,[E,(0,l._)("div",I,[(0,l._)("h3",J,(0,r.zw)(e.statistics.books),1),K])])])]),(0,l._)("div",M,[(0,l._)("div",Q,[(0,l._)("div",R,[V,(0,l._)("div",$,[(0,l._)("h3",ee,(0,r.zw)(e.thesises.total),1),te])])])]),(0,l._)("div",se,[(0,l._)("div",ae,[(0,l._)("div",ne,[le,(0,l._)("div",re,[(0,l._)("h3",ce,(0,r.zw)(e.questions.total),1),ie])])])]),(0,l._)("div",oe,[(0,l._)("div",ue,[(0,l._)("div",de,[_e,(0,l._)("div",ve,[(0,l._)("h3",me,(0,r.zw)(e.general_informations.total),1),he])])])])])]),(0,l._)("div",fe,[(0,l._)("div",we,[pe,(0,l._)("div",be,[(0,l._)("div",xe,[(0,l._)("div",ge,[ye,(0,l._)("small",null,(0,r.zw)(e.questions.very_excellent)+"%",1)]),(0,l.Wm)(c,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(n,{value:e.questions.very_excellent,variant:"danger"},null,8,["value"])]})),_:1})]),(0,l._)("div",ke,[(0,l._)("div",We,[je,(0,l._)("small",null,(0,r.zw)(e.questions.excellent)+"%",1)]),(0,l.Wm)(c,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(n,{value:e.questions.excellent,variant:"info"},null,8,["value"])]})),_:1})]),(0,l._)("div",Ze,[(0,l._)("div",ze,[qe,(0,l._)("small",null,(0,r.zw)(e.questions.very_good)+"%",1)]),(0,l.Wm)(c,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(n,{value:e.questions.very_good,variant:"primary"},null,8,["value"])]})),_:1})]),(0,l._)("div",Be,[(0,l._)("div",Fe,[Se,(0,l._)("small",null,(0,r.zw)(e.questions.good)+"%",1)]),(0,l.Wm)(c,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(n,{value:e.questions.good,variant:"success"},null,8,["value"])]})),_:1})]),(0,l._)("div",Ue,[(0,l._)("div",Ae,[De,(0,l._)("small",null,(0,r.zw)(e.thesises.accebtable),1)]),(0,l.Wm)(c,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(n,{value:e.thesises.accebtable,variant:"success"},null,8,["value"])]})),_:1})]),(0,l._)("div",Te,[(0,l._)("div",Ce,[Oe,(0,l._)("small",null,(0,r.zw)(e.questions.rejected)+"%",1)]),(0,l.Wm)(c,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(n,{value:e.questions.rejected,variant:"success"},null,8,["value"])]})),_:1})])])])]),(0,l._)("div",Ge,[(0,l._)("div",He,[Ye,(0,l._)("div",Le,[(0,l._)("div",Ne,[(0,l._)("div",Pe,[Xe,(0,l._)("small",null,(0,r.zw)(e.general_informations.very_excellent)+"%",1)]),(0,l.Wm)(c,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(n,{value:e.general_informations.very_excellent,variant:"danger"},null,8,["value"])]})),_:1})]),(0,l._)("div",Ee,[(0,l._)("div",Ie,[Je,(0,l._)("small",null,(0,r.zw)(e.general_informations.excellent)+"%",1)]),(0,l.Wm)(c,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(n,{value:e.general_informations.excellent,variant:"info"},null,8,["value"])]})),_:1})]),(0,l._)("div",Ke,[(0,l._)("div",Me,[Qe,(0,l._)("small",null,(0,r.zw)(e.general_informations.very_good)+"%",1)]),(0,l.Wm)(c,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(n,{value:e.general_informations.very_good,variant:"primary"},null,8,["value"])]})),_:1})]),(0,l._)("div",Re,[(0,l._)("div",Ve,[$e,(0,l._)("small",null,(0,r.zw)(e.general_informations.good)+"%",1)]),(0,l.Wm)(c,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(n,{value:e.general_informations.good,variant:"success"},null,8,["value"])]})),_:1})]),(0,l._)("div",et,[(0,l._)("div",tt,[st,(0,l._)("small",null,(0,r.zw)(e.general_informations.accebtable),1)]),(0,l.Wm)(c,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(n,{value:e.general_informations.accebtable,variant:"success"},null,8,["value"])]})),_:1})]),at,(0,l._)("div",nt,[(0,l._)("div",lt,[rt,(0,l._)("small",null,(0,r.zw)(e.general_informations.rejected)+"%",1)]),(0,l.Wm)(c,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(n,{value:e.general_informations.rejected,variant:"success"},null,8,["value"])]})),_:1})])])])]),(0,l._)("div",ct,[(0,l._)("div",it,[ot,(0,l._)("div",ut,[(0,l._)("div",dt,[(0,l._)("div",_t,[vt,(0,l._)("small",null,(0,r.zw)(e.thesises.very_excellent)+"%",1)]),(0,l.Wm)(c,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(n,{value:e.thesises.very_excellent,variant:"danger"},null,8,["value"])]})),_:1})]),(0,l._)("div",mt,[(0,l._)("div",ht,[ft,(0,l._)("small",null,(0,r.zw)(e.thesises.excellent)+"%",1)]),(0,l.Wm)(c,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(n,{value:e.thesises.excellent,variant:"info"},null,8,["value"])]})),_:1})]),(0,l._)("div",wt,[(0,l._)("div",pt,[bt,(0,l._)("small",null,(0,r.zw)(e.thesises.very_good)+"%",1)]),(0,l.Wm)(c,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(n,{value:e.thesises.very_good,variant:"primary"},null,8,["value"])]})),_:1})]),(0,l._)("div",xt,[(0,l._)("div",gt,[yt,(0,l._)("small",null,(0,r.zw)(e.thesises.good)+"%",1)]),(0,l.Wm)(c,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(n,{value:e.thesises.good,variant:"success"},null,8,["value"])]})),_:1})]),(0,l._)("div",kt,[(0,l._)("div",Wt,[jt,(0,l._)("small",null,(0,r.zw)(e.thesises.accebtable),1)]),(0,l.Wm)(c,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(n,{value:e.thesises.accebtable,variant:"success"},null,8,["value"])]})),_:1})]),Zt,(0,l._)("div",zt,[(0,l._)("div",qt,[Bt,(0,l._)("small",null,(0,r.zw)(e.thesises.rejected)+"%",1)]),(0,l.Wm)(c,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,l.w5)((function(){return[(0,l.Wm)(n,{value:e.thesises.rejected,variant:"success"},null,8,["value"])]})),_:1})])])])])])])}}}),Ut=St,At=Ut}}]);
//# sourceMappingURL=8690.da17ff42.js.map