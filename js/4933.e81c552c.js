(self["webpackChunkosboha180"]=self["webpackChunkosboha180"]||[]).push([[4933],{21285:(e,t,r)=>{"use strict";var n=r(47908),i=r(51400),a=r(26244);e.exports=function(e){var t=n(this),r=a(t),o=arguments.length,s=i(o>1?arguments[1]:void 0,r),u=o>2?arguments[2]:void 0,l=void 0===u?r:i(u,r);while(l>s)t[s++]=e;return t}},53671:(e,t,r)=>{var n=r(19662),i=r(47908),a=r(68361),o=r(26244),s=TypeError,u=function(e){return function(t,r,u,l){n(r);var c=i(t),d=a(c),p=o(c),h=e?p-1:0,f=e?-1:1;if(u<2)while(1){if(h in d){l=d[h],h+=f;break}if(h+=f,e?h<0:p<=h)throw s("Reduce of empty array with no initial value")}for(;e?h>=0:p>h;h+=f)h in d&&(l=r(l,d[h],h,c));return l}};e.exports={left:u(!1),right:u(!0)}},38415:(e,t,r)=>{"use strict";var n=r(19303),i=r(41340),a=r(84488),o=RangeError;e.exports=function(e){var t=i(a(this)),r="",s=n(e);if(s<0||s==1/0)throw o("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(t+=t))1&s&&(r+=t);return r}},43290:(e,t,r)=>{var n=r(82109),i=r(21285),a=r(51223);n({target:"Array",proto:!0},{fill:i}),a("fill")},69826:(e,t,r)=>{"use strict";var n=r(82109),i=r(42092).find,a=r(51223),o="find",s=!0;o in[]&&Array(1)[o]((function(){s=!1})),n({target:"Array",proto:!0,forced:s},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a(o)},85827:(e,t,r)=>{"use strict";var n=r(82109),i=r(53671).left,a=r(9341),o=r(7392),s=r(35268),u=a("reduce"),l=!s&&o>79&&o<83;n({target:"Array",proto:!0,forced:!u||l},{reduce:function(e){var t=arguments.length;return i(this,e,t,t>1?arguments[1]:void 0)}})},56977:(e,t,r)=>{"use strict";var n=r(82109),i=r(1702),a=r(19303),o=r(50863),s=r(38415),u=r(47293),l=RangeError,c=String,d=Math.floor,p=i(s),h=i("".slice),f=i(1..toFixed),g=function(e,t,r){return 0===t?r:t%2===1?g(e,t-1,r*e):g(e*e,t/2,r)},v=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},m=function(e,t,r){var n=-1,i=r;while(++n<6)i+=t*e[n],e[n]=i%1e7,i=d(i/1e7)},w=function(e,t){var r=6,n=0;while(--r>=0)n+=e[r],e[r]=d(n/t),n=n%t*1e7},b=function(e){var t=6,r="";while(--t>=0)if(""!==r||0===t||0!==e[t]){var n=c(e[t]);r=""===r?n:r+p("0",7-n.length)+n}return r},y=u((function(){return"0.000"!==f(8e-5,3)||"1"!==f(.9,0)||"1.25"!==f(1.255,2)||"1000000000000000128"!==f(0xde0b6b3a7640080,0)}))||!u((function(){f({})}));n({target:"Number",proto:!0,forced:y},{toFixed:function(e){var t,r,n,i,s=o(this),u=a(e),d=[0,0,0,0,0,0],f="",y="0";if(u<0||u>20)throw l("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return c(s);if(s<0&&(f="-",s=-s),s>1e-21)if(t=v(s*g(2,69,1))-69,r=t<0?s*g(2,-t,1):s/g(2,t,1),r*=4503599627370496,t=52-t,t>0){m(d,0,r),n=u;while(n>=7)m(d,1e7,0),n-=7;m(d,g(10,n,1),0),n=t-1;while(n>=23)w(d,1<<23),n-=23;w(d,1<<n),m(d,1,1),w(d,2),y=b(d)}else m(d,0,r),m(d,1<<-t,0),y=b(d)+p("0",u);return u>0?(i=y.length,y=f+(i<=u?"0."+p("0",u-i)+y:h(y,0,i-u)+"."+h(y,i-u))):y=f+y,y}})},68621:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(50124),i=r(48534),a=r(62760),o=r(57333);const s={acceptUserBook:function(e){var t=a.h.post("/userbook/review",{id:e,status:"audit",reviewer_id:o.Z.getUser().id});return t},rejectRetardUserBook:function(e,t,r){var n=a.h.post("/userbook/review",{id:e,status:r,reviewer_id:o.Z.getUser().id,reviews:t});return n},getById:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.h.get("userbook/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getReadyToAudit:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.h.get("userbook/ready/to");case 2:return t=e.sent,e.abrupt("return",t.data.data);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getByBookID:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.h.get("userbook/by-book-id/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.data);case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),updateUserBook:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r){var i;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.h.patch("userbook/".concat(r),{status:t})["catch"]((function(e){console.log(e)}));case 2:return i=e.sent,console.log(i),e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),requestCertificate:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.h.post("userbook",{book_id:t});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}(),getByStatus:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.h.get("userbook/status/".concat(t));case 3:return r=e.sent,e.abrupt("return",r.data.data);case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}(),lastAchievement:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.h.get("userbook/last-achievement/");case 3:return t=e.sent,e.abrupt("return",t.data.data);case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}(),finishedAchievement:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.h.get("userbook/finished-achievement/");case 3:return t=e.sent,e.abrupt("return",t.data.data);case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}(),changeStatus:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r){var i;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.h.patch("userbook/status/".concat(r),{status:t});case 3:return i=e.sent,e.abrupt("return",i.data.data);case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t,r){return e.apply(this,arguments)}return t}(),cancel:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.h["delete"]("userbook/".concat(t));case 3:return r=e.sent,e.abrupt("return",r.data.data);case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}()}},62868:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(50124),i=r(48534),a=(r(68309),r(62760));const o={getUnactive:function(){var e=a.h.get("users/list/un-active");return e},getUnactiveReviwers:function(){var e=a.h.get("users/list/un-active-reviwers-auditors");return e},updateInfo:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t){var r,i;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=new FormData,r.append("name",t.name),r.append("image",t.file[0]),e.next=5,a.h.post("users/update-info",r,{headers:{"Content-Type":"multipart/form-data"}})["catch"]((function(e){console.log(e)}));case 5:return i=e.sent,console.log(i),e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getUser:function(e){return(0,i.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.h.get("users/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.data);case 4:case"end":return t.stop()}}),t)})))()},deActiveUser:function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r){var i;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.h.post("users/deactive-user",{id:t,rejectNote:r});case 3:return i=e.sent,e.abrupt("return",i.data);case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t,r){return e.apply(this,arguments)}return t}(),acceptUser:function(e){var t=a.h.patch("users/activate/".concat(e));return t},getUserStatistics:function(){return(0,i.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.h.get("users/statistics");case 2:return t=e.sent,e.abrupt("return",t.data.data);case 4:case"end":return e.stop()}}),e)})))()},acceptThesis:function(e){return!0}}},35677:(e,t,r)=>{"use strict";r.r(t),r.d(t,{FluidMeter:()=>n});r(57327),r(41539),r(43290),r(83710),r(56977);function n(){var e,t,r=null,n=null,i={drawShadow:!0,drawText:!0,drawPercentageSign:!0,drawBubbles:!0,fontSize:"70px",fontFamily:"Arial",fontFillStyle:"white",size:300,borderWidth:25,backgroundColor:"#e2e2e2",foregroundColor:"#fafafa"},a=0,o=0,s={fillStyle:"purple",angle:0,horizontalPosition:0,angularSpeed:0,maxAmplitude:9,frequency:30,horizontalSpeed:-150,initialHeight:0},u={fillStyle:"pink",angle:0,horizontalPosition:0,angularSpeed:140,maxAmplitude:12,frequency:40,horizontalSpeed:150,initialHeight:0},l={bubbles:[],amount:12,speed:20,current:0,swing:0,size:2,reset:function(e){var t=i.size-(i.size-y())/2-i.borderWidth,r=a*(y()-2*i.borderWidth)/100;e.r=k(this.size,2*this.size)/2,e.x=k(0,i.size),e.y=k(t,t-r),e.velX=0,e.velY=k(this.speed,2*this.speed),e.swing=k(0,2*Math.PI)},init:function(){for(var e=0;e<this.amount;e++){var t=i.size-(i.size-y())/2-i.borderWidth,r=a*(y()-2*i.borderWidth)/100;this.bubbles.push({x:k(0,i.size),y:k(t,t-r),r:k(this.size,2*this.size)/2,velX:0,velY:k(this.speed,2*this.speed)})}}};function c(){var r=document.createElement("canvas");r.width=i.size,r.height=i.size,r.imageSmoothingEnabled=!0,e=r.getContext("2d"),t.appendChild(r),i.drawShadow&&(e.save(),e.beginPath(),e.filter="drop-shadow(0px 4px 6px rgba(0,0,0,0.1))",e.arc(i.size/2,i.size/2,y()/2,0,2*Math.PI),e.closePath(),e.fill(),e.restore())}function d(){var t=(new Date).getTime();n=(t-(r||t))/1e3,r=t,requestAnimationFrame(d),e.clearRect(0,0,i.size,i.size),p(),f(n),i.drawText&&w(),h()}function p(){e.save(),e.fillStyle=i.backgroundColor,e.beginPath(),e.arc(i.size/2,i.size/2,y()/2-i.borderWidth,0,2*Math.PI),e.closePath(),e.fill(),e.restore()}function h(){e.save(),e.lineWidth=i.borderWidth,e.strokeStyle=i.foregroundColor,e.beginPath(),e.arc(i.size/2,i.size/2,y()/2-i.borderWidth/2,0,2*Math.PI),e.closePath(),e.stroke(),e.restore()}function f(t){e.save(),e.arc(i.size/2,i.size/2,y()/2-i.borderWidth,0,2*Math.PI),e.clip(),g(u,t),g(s,t),i.drawBubbles&&(v(s,t),m(t)),e.restore()}function g(t,r){t.angularSpeed>0&&(t.angle+=t.angularSpeed*r,t.angle=t.angle<0?t.angle+360:t.angle),t.horizontalPosition+=t.horizontalSpeed*r,t.horizontalSpeed>0?!(t.horizontalPosition>Math.pow(2,53))&&t.horizontalPosition:t.horizontalPosition<0&&!(t.horizontalPosition<-1*Math.pow(2,53))&&t.horizontalPosition;var n=0,s=0,u=t.maxAmplitude*Math.sin(t.angle*Math.PI/180),l=i.size-(i.size-y())/2-i.borderWidth,c=a*(y()-2*i.borderWidth)/100;a<o?a+=15*r:a>o&&(a-=15*r),t.initialHeight=l-c,e.save(),e.beginPath(),e.lineTo(0,t.initialHeight);while(n<i.size)s=t.initialHeight+u*Math.sin((n+t.horizontalPosition)/t.frequency),e.lineTo(n,s),n++;e.lineTo(n,i.size),e.lineTo(0,i.size),e.closePath(),e.fillStyle=t.fillStyle,e.fill(),e.restore()}function v(t){var r=0,n=0,a=t.maxAmplitude*Math.sin(t.angle*Math.PI/180);e.beginPath(),e.lineTo(0,t.initialHeight);while(r<i.size)n=t.initialHeight+a*Math.sin((r+t.horizontalPosition)/t.frequency),e.lineTo(r,n),r++;e.lineTo(r,i.size),e.lineTo(0,i.size),e.closePath(),e.clip()}function m(t){e.save();for(var r=0;r<l.bubbles.length;r++){var n=l.bubbles[r];e.beginPath(),e.strokeStyle="white",e.arc(n.x,n.y,n.r,2*Math.PI,!1),e.stroke(),e.closePath();var o=l.current*t;n.velX=Math.abs(n.velX)<Math.abs(l.current)?n.velX+o:l.current,n.y=n.y-n.velY*t,n.x=n.x+(l.swing?.4*Math.cos(l.swing+=.03)*l.swing:0)+.5*n.velX;var s=i.size-(i.size-y())/2-i.borderWidth,u=a*(y()-2*i.borderWidth)/100;n.y<=s-u&&l.reset(n)}e.restore()}function w(){var t=i.drawPercentageSign?a.toFixed(0)+"%":a.toFixed(0);e.save(),e.font=x(),e.fillStyle=i.fontFillStyle,e.textAlign="center",e.textBaseline="middle",e.filter="drop-shadow(0px 0px 5px rgba(0,0,0,0.4))",e.fillText(t,i.size/2,i.size/2),e.restore()}function b(e,t,r){return Math.min(Math.max(e,t),r)}function y(){return.9*i.size}function k(e,t){var r=t-e;return t===e?e:Math.random()*r+e}function x(){return i.fontSize+" "+i.fontFamily}return{init:function(e){if(!e.targetContainer)throw"empty or invalid container";t=e.targetContainer,o=b(e.fillPercentage,0,100),e.options&&(i.drawShadow=!1!==e.options.drawShadow,i.size=e.options.size,i.drawBubbles=!1!==e.options.drawBubbles,i.borderWidth=e.options.borderWidth||i.borderWidth,i.foregroundFluidColor=e.options.foregroundFluidColor||i.foregroundFluidColor,i.backgroundFluidColor=e.options.backgroundFluidColor||i.backgroundFluidColor,i.backgroundColor=e.options.backgroundColor||i.backgroundColor,i.foregroundColor=e.options.foregroundColor||i.foregroundColor,i.drawText=!1!==e.options.drawText,i.drawPercentageSign=!1!==e.options.drawPercentageSign,i.fontSize=e.options.fontSize||i.fontSize,i.fontFamily=e.options.fontFamily||i.fontFamily,i.fontFillStyle=e.options.fontFillStyle||i.fontFillStyle,e.options.foregroundFluidLayer&&(s.fillStyle=e.options.foregroundFluidLayer.fillStyle||s.fillStyle,s.angularSpeed=e.options.foregroundFluidLayer.angularSpeed||s.angularSpeed,s.maxAmplitude=e.options.foregroundFluidLayer.maxAmplitude||s.maxAmplitude,s.frequency=e.options.foregroundFluidLayer.frequency||s.frequency,s.horizontalSpeed=e.options.foregroundFluidLayer.horizontalSpeed||s.horizontalSpeed),e.options.backgroundFluidLayer&&(u.fillStyle=e.options.backgroundFluidLayer.fillStyle||u.fillStyle,u.angularSpeed=e.options.backgroundFluidLayer.angularSpeed||u.angularSpeed,u.maxAmplitude=e.options.backgroundFluidLayer.maxAmplitude||u.maxAmplitude,u.frequency=e.options.backgroundFluidLayer.frequency||u.frequency,u.horizontalSpeed=e.options.backgroundFluidLayer.horizontalSpeed||u.horizontalSpeed)),l.init(),c(),d()},setPercentage:function(e){o=b(e,0,100)}}}},34933:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>J});var n=r(66252),i=r(3577),a={class:"row"},o={class:"col-12"},s={key:0,class:"alert alert-danger"},u=(0,n._)("h4",null,"تم رفض انجازك للاسباب التالية",-1),l={key:1,class:"alert alert-danger"},c=(0,n._)("h4",null,"لديك انجاز يجب يجب اعادته",-1),d={key:0,class:""},p=(0,n._)("h5",null,"الأطروحات",-1),h={key:1,class:""},f=(0,n._)("h5",null,"الأسئلة",-1),g={key:2,class:""},v=(0,n._)("h5",null,"التلخيص العام",-1),m=[v],w=(0,n._)("h1",{class:"card-title"},"خطواتك نحو التوثيق",-1),b=(0,n._)("div",{class:"alert alert-primary"},[(0,n._)("h4",null,[(0,n._)("strong",null," انتبه لضمان قبول انجازك تأكد مما يلي ")]),(0,n._)("ul",null,[(0,n._)("li",null," يجب ان تكون اطروحاتك مرتبة بشكل تسلسلي متناسق مع عدد صفحات الكتاب "),(0,n._)("li",null,"تجنب وضع الرموز التعبيرية ( الايموجين) ضمن اطروحاتك"),(0,n._)("li",null," يجب أن لا تقل عدد الصفحات التي تمثلها الأطروحة عن ٦ صفحات على الأقل ")])],-1),y=(0,n._)("h4",{class:"text-center mb-2"},"املأ خزان ثقافتك بالقراءة",-1),k={key:0,class:"col-12 alert alert-danger"},x={class:"text-center"},z={key:1},S=(0,n._)("h3",{class:"text-center"},"التسليــم النهائــي",-1),Z=(0,n._)("br",null,null,-1),_={key:0,style:{color:"red"},class:"text-center mb-3"},B={key:1,style:{color:"red"},class:"text-center mb-3"},P={class:"dark-color d-inline-block line-height-2"},C=(0,n.Uk)(" تفعيل الحساب "),F=(0,n.Uk)(" يجب تفعيل حسابك لتسليم انجازك "),T=(0,n._)("h5",{class:"text-center mb-3"}," سيتم تمكينك من الضغط هنا فقط في حال اكمالك اعتماد كامل إجابتك أدناه ",-1),q={class:"col-12 d-flex justify-content-center mb-3"},I=["disabled"],M={key:2,class:"col-12 d-flex justify-content-center mb-3"};function D(e,t,r,v,D,A){var W=(0,n.up)("TimeLine"),U=(0,n.up)("iq-card"),R=(0,n.up)("Chart"),j=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",o,[D.rejected?((0,n.wg)(),(0,n.iD)("div",s,[u,(0,n._)("p",null,(0,i.zw)(D.rejectedMsg),1)])):D.retard?((0,n.wg)(),(0,n.iD)("div",l,[c,D.retardTheses.length>0?((0,n.wg)(),(0,n.iD)("div",d,[p,(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(D.retardTheses,(function(e,t){return(0,n.wg)(),(0,n.iD)("li",{key:t}," الأطروحة : "+(0,i.zw)(e),1)})),128))])])):(0,n.kq)("",!0),D.retardQuestions.length>0?((0,n.wg)(),(0,n.iD)("div",h,[f,(0,n._)("ul",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(D.retardQuestions,(function(e,t){return(0,n.wg)(),(0,n.iD)("li",{key:t}," السؤال : "+(0,i.zw)(e),1)})),128))])])):(0,n.kq)("",!0),D.retardGeneralInformations?((0,n.wg)(),(0,n.iD)("div",g,m)):(0,n.kq)("",!0)])):(0,n.kq)("",!0),(0,n.Wm)(U,null,{headerTitle:(0,n.w5)((function(){return[w]})),body:(0,n.w5)((function(){return[b,(0,n.Wm)(W,{items:D.timelineItems},null,8,["items"])]})),_:1})]),D.completionPercentage?((0,n.wg)(),(0,n.j4)(U,{key:0},{body:(0,n.w5)((function(){return[y,(0,n.Wm)(R,{percintage:D.completionPercentage},null,8,["percintage"])]})),default:(0,n.w5)((function(){return[D.msg?((0,n.wg)(),(0,n.iD)("div",k,[(0,n._)("h5",x,(0,i.zw)(D.msg),1)])):((0,n.wg)(),(0,n.iD)("div",z,[S,Z,0==D.userStatus?((0,n.wg)(),(0,n.iD)("h5",_," يرجى انتظار تفعيل حسابك لتسليم الانجاز ")):1!=D.userStatus?((0,n.wg)(),(0,n.iD)("h5",B,[(0,n._)("span",P,[(0,n.Wm)(j,{to:{name:"user.update-info"}},{default:(0,n.w5)((function(){return[C]})),_:1},8,["to"])]),F])):(0,n.kq)("",!0),T,(0,n._)("div",q,[(0,n._)("input",{type:"submit",value:"تسليم",href:"javascript:void(0);",class:"btn btn-primary d-block w-75",onClick:t[0]||(t[0]=function(e){return A.updateUserBook()}),disabled:D.isDisabled},null,8,I)]),"audited"!=D.userBook.status||"finished"!=D.userBook.status?((0,n.wg)(),(0,n.iD)("div",M,[(0,n._)("input",{type:"submit",value:"الغاء التوثيق",href:"javascript:void(0);",class:"btn btn-danger d-block w-75",onClick:t[1]||(t[1]=function(e){return A.cancel()})})])):(0,n.kq)("",!0)]))]})),_:1})):(0,n.kq)("",!0)])}var A=r(50124),W=r(48534),U=(r(85827),r(41539),r(69826),r(68621)),R=r(62868),j={class:"col text-center"},L=(0,n._)("div",{id:"displayPercentage"},null,-1),H=[L];function G(e,t,r,i,a,o){return(0,n.wg)(),(0,n.iD)("div",j,H)}var Q=r(35677);r(35677);const E={name:"Chart",mounted:function(){var e=new Q.FluidMeter;e.init({targetContainer:document.getElementById("displayPercentage"),fillPercentage:this.percintage,options:{fontSize:"30px",drawPercentageSign:!0,drawBubbles:!1,size:300,borderWidth:19,backgroundColor:"#e2e2e2",foregroundColor:"#fafafa",foregroundFluidLayer:{fillStyle:"#2e328b",angularSpeed:30,maxAmplitude:5,frequency:30,horizontalSpeed:-20},backgroundFluidLayer:{fillStyle:"#4F8FC6",angularSpeed:100,maxAmplitude:3,frequency:22,horizontalSpeed:20}}})},created:function(){},props:{percintage:{required:!0}}};var X=r(83744);const $=(0,X.Z)(E,[["render",G]]),Y=$;var N=r(57333);const K={name:"Steps",components:{Chart:Y},mounted:function(){},created:function(){var e=this;return(0,W.Z)((0,A.Z)().mark((function t(){return(0,A.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getUserStatus();case 2:return t.next=4,e.getByBookId();case 4:case"end":return t.stop()}}),t)})))()},data:function(){return{timelineItems:[{color:"primary",title:"الأطروحات",description:'تعتبر كتابة الأطروحة من المراحل السامية في القراءة النافعة، حيث تشكل عملية عقلية وحركية، تبدأ بتلقيك فكريًا لأفكار الكاتب ومعلومات الكتاب، ثم إعادة فرزها وتحليلها وإخضاعها لتجاربك وأفكارك الذاتية ومعلوماتك وخبراتك. فينتج عنها حركيًا كتابة لمزيج من الأفكار و الاراء في محاورتك لما طرحه الكاتب تنتج في سطور. \n<strong style="color:#278036"> نطلب منك هنا كحد أدنى (8) أطروحات شاملة </strong> في قراءتك لهذا الكتاب على أن تزودنا بتصوير الشاشة لأطروحتين على الأقل في مجموعة السفراء في منشور الكتاب المعني، علمًا أننا سنقوم بعمل جولة تفقدية للبحث عن هذه الأطروحات جميعها داخل مجموعة السفراء لتحصل على قبول التوثيق.\n',child:{type:"btn",route:{name:"achievement.theses",param:this.$route.params.id},items:[]}},{color:"primary",title:"التلخيص العام",description:'\n          <h4 class="mb-2">كيف اكتب الملخص العام، وكيف أحدد السؤال العام </h4>\n          لكل مادة مقروءة (كتاب) هناك سؤال عام يسعى الكتاب لنقاشه، ومنه يتفرع\n                                            الكتاب على شكل\n                                            فصول أساسية ومن\n                                            ثم مباحث داخل كل فصل. عند شروعك في قراءة الكتاب، عليك المرور على مقدمة\n                                            المؤلف ومحاولة\n                                            معرفة (السؤال\n                                            العام) الذي يسعى الكتاب للإجابة عنه.\n                                            <br />\n                                            أمثلة 👇🏻\n                                            <br />\n                                            <strong style="color:#278036"> كتاب أغنى رجل في بابل</strong>  = يدور السؤال العام حول كيفية صناعة الثروة المالية\n                                            للفرد \n                                            <br />\n                                            <strong style="color:#278036"> كتاب سيكولوجية الجماهير </strong>  = يدور السؤال العام في الكتاب حول قدرة المسؤول على\n                                            التحكم في\n                                            الجماهير والشعوب\n                                            من الناحية السكولوجية \n                                            <br />\n\n                                            ومن جانب آخر، لكل مادة مقروءة (كتاب) هناك تلخيص عام للأفكار العامة والمحاور\n                                            الأساسية\n                                            التي يدور حولها\n                                            الكتاب. فيجب على القارئ أن يستطيع دائمًا تقديم ملخص من الكتاب، ويستحسن\n                                            استخدام أفكار\n                                            الكاتب والفاظه\n                                            باقتضاب لصناعة الملخص، لا تقم بإضافة أفكارك واعتقاداتك على الملخص، ستفعل ذلك\n                                            حين تكتب\n                                            الأطروحة حين تمزج\n                                            ملخص الكاتب مع أفكارك وإسقاطاتك الفكرية ومخزونك المعرفي ومقارنته مع الكتاب.',child:{type:"btn",route:{name:"achievement.general_summary",param:this.$route.params.id},items:[]}},{color:"primary",title:"الأسئلة",description:'القراءة السليمة، هي تلك التي نبدأها بحثًا عن بعض الإجابات وتنقيبًا عن معلومات وأفكار، ونخرج منها بأسئلة أخرى وأجوبة وأفكار. <strong style="color:#278036"> نطلب منك في هذه الخانة تزويدنا بالسؤال </strong> الذي تجيب عنه الصفحات التي تحددها وسنقوم نحن بتفقد هذه الصفحات بحثًا عن مدى دقة إجابة هذه الصفحات لهذا التساؤل. أنت هنا تتدرب على احتراف القراءة السليمة.',child:{type:"btn",text:"",route:{name:"achievement.questions",param:this.$route.params.id},items:[]}}],loader:!1,isDisabled:!0,msg:"",userStatus:"",userBook:null,isThesesReady:!1,isGeneralReady:!1,isQuestionsReady:!1,completionPercentage:null,rejected:!1,rejectedMsg:"",retard:!1,retardMsg:"لديك انجاز يجب يجب اعادته",retardTheses:null,retardQuestions:null,retardGeneralInformations:!1}},methods:{getUserStatus:function(){var e=this;return(0,W.Z)((0,A.Z)().mark((function t(){var r,n;return(0,A.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=N.Z.getId(),t.next=3,R.Z.getUser(r);case 3:n=t.sent,e.userStatus=n.is_active,console.log(e.userStatus);case 6:case"end":return t.stop()}}),t)})))()},updateUserBook:function(){var e=this;return(0,W.Z)((0,A.Z)().mark((function t(){return(0,A.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isDisabled=!0,e.loader=!0,t.next=4,U.Z.updateUserBook("review",e.userBook.id);case 4:e.loader=!1,e.msg="تم تسليم طلبك";case 6:case"end":return t.stop()}}),t)})))()},getByBookId:function(){var e=this;return(0,W.Z)((0,A.Z)().mark((function t(){var r,n;return(0,A.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=function(e){return"rejected"!=e.status&&null!=e.status},t.next=3,U.Z.getByBookID(e.$route.params.id);case 3:r=t.sent,e.completionPercentage=r.completionPercentage,e.userBook=r.userBook,"rejected"==e.userBook.status?(e.rejected=!0,e.rejectedMsg=e.userBook.reviews):"retard"==e.userBook.status?(e.retard=!0,e.retardTheses=e.userBook.thesises.reduce((function(e,t,r){return"retard"===t.status&&e.push(r+1),e}),[]),e.retardQuestions=e.userBook.questions.reduce((function(e,t,r){return"retard"===t.status&&e.push(r+1),e}),[]),e.userBook.general_information&&"retard"==e.userBook.general_information.status&&(e.retardGeneralInformations=!0)):null!=e.userBook.status&&(e.msg="تم التسليم"),e.userBook.thesises.find(n)&&(e.isThesesReady=!0,e.timelineItems[0].child.text="عرض"),e.userBook.questions.find(n)&&(console.log(e.userBook.questions.find(n)),e.isQuestionsReady=!0,e.timelineItems[2].child.text="عرض"),e.userBook.general_information&&"retard"!=e.userBook.general_information.status&&null!=e.userBook.general_information.status?(e.timelineItems[1].child.text="عرض",e.isGeneralReady=!0):e.isGeneralReady=!1,e.isThesesReady&&e.isGeneralReady&&e.isQuestionsReady&&(null==e.userBook.status||"retard"==e.userBook.status)&&1==e.userStatus?e.isDisabled=!1:e.isDisabled=!0;case 11:case"end":return t.stop()}}),t)})))()},cancel:function(){var e=this,t=this.$swal.mixin({customClass:{confirmButton:"btn btn-primary btn-lg",cancelButton:"btn btn-outline-primary btn-lg ms-2"},buttonsStyling:!1});t.fire({title:"هل أنت متأكد؟",text:"موافقتك تعني حذف التوثيق بأكمله بما في ذلك اطروحاته والتلخيص العام والأسئلة المعرفية وجميع التقييمات التي حصلت عليها",icon:"warning",showCancelButton:!0,confirmButtonText:"نعم قم بالحذف",cancelButtonText:"تراجع  ",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}}).then((function(r){r.isConfirmed&&U.Z.cancel(e.userBook.id).then((function(r){t.fire({title:"تم الالغاء",text:"تم الغاء طلب التوثيق",icon:"success",showClass:{popup:"animate__animated animate__zoomIn"},hideClass:{popup:"animate__animated animate__zoomOut"}}),e.$router.push({name:"social.book"})}))["catch"]((function(e){console.log(e)}))}))}}},O=(0,X.Z)(K,[["render",D]]),J=O}}]);
//# sourceMappingURL=4933.e81c552c.js.map