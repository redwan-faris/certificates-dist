if(!self.define){let l,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const l=document.createElement("script");l.src=i,l.onload=s,document.head.appendChild(l)}else l=i,importScripts(i),s()})).then((()=>{let l=s[i];if(!l)throw new Error(`Module ${i} didn’t register its module`);return l})));self.define=(n,r)=>{const u=l||("document"in self?document.currentScript.src:"")||location.href;if(s[u])return;let e={};const o=l=>i(l,u),j={module:{uri:u},exports:e,require:o};s[u]=Promise.all(n.map((l=>j[l]||o(l)))).then((l=>(r(...l),e)))}}define(["./workbox-79ffe3e0"],(function(l){"use strict";l.setCacheNameDetails({prefix:"osboha180"}),self.addEventListener("message",(l=>{l.data&&"SKIP_WAITING"===l.data.type&&self.skipWaiting()})),l.precacheAndRoute([{url:"/css/1115.2b4dc647.css",revision:null},{url:"/css/219.92abe56d.css",revision:null},{url:"/css/2348.11ad285e.css",revision:null},{url:"/css/2713.a85b3e12.css",revision:null},{url:"/css/3254.12498255.css",revision:null},{url:"/css/3831.f4ef771d.css",revision:null},{url:"/css/4052.4d95488f.css",revision:null},{url:"/css/4126.4372ee8b.css",revision:null},{url:"/css/4199.c894b957.css",revision:null},{url:"/css/4332.69c24825.css",revision:null},{url:"/css/4458.becfb64d.css",revision:null},{url:"/css/6358.9766d595.css",revision:null},{url:"/css/654.0797d1e2.css",revision:null},{url:"/css/6935.f9cafa1d.css",revision:null},{url:"/css/7034.d3faef2e.css",revision:null},{url:"/css/7374.c1ff4e10.css",revision:null},{url:"/css/766.8904bece.css",revision:null},{url:"/css/7911.1f8f0e89.css",revision:null},{url:"/css/8082.12498255.css",revision:null},{url:"/css/8531.c1ff4e10.css",revision:null},{url:"/css/8604.feb8c7c2.css",revision:null},{url:"/css/8839.faffd619.css",revision:null},{url:"/css/9250.7972a543.css",revision:null},{url:"/css/966.72940d67.css",revision:null},{url:"/css/9846.e1ba9357.css",revision:null},{url:"/css/app.6bb15ee2.css",revision:null},{url:"/css/chunk-vendors.1457aec4.css",revision:null},{url:"/img/02.80529306.png",revision:null},{url:"/img/1.7afa917d.png",revision:null},{url:"/img/11.944264a7.png",revision:null},{url:"/img/2.7afa917d.png",revision:null},{url:"/img/3.7afa917d.png",revision:null},{url:"/img/400.5b3061d8.png",revision:null},{url:"/img/500.5b3061d8.png",revision:null},{url:"/img/52.ba8596e6.jpg",revision:null},{url:"/img/56.ba8596e6.jpg",revision:null},{url:"/img/57.ba8596e6.jpg",revision:null},{url:"/img/58.ba8596e6.jpg",revision:null},{url:"/img/59.ba8596e6.jpg",revision:null},{url:"/img/60.ba8596e6.jpg",revision:null},{url:"/img/accept-reject.4e690409.png",revision:null},{url:"/img/all-stages.f3e23b6f.png",revision:null},{url:"/img/banner_1.1f5097ab.jpg",revision:null},{url:"/img/banner_2.804f3296.jpg",revision:null},{url:"/img/banner_3.79de3b0a.jpg",revision:null},{url:"/img/book-banner.6a2a5a9c.png",revision:null},{url:"/img/certMain.24406352.jpg",revision:null},{url:"/img/certTemp.c3eca21d.png",revision:null},{url:"/img/certTemp_9.51bcb450.png",revision:null},{url:"/img/certificate.bad9f54b.png",revision:null},{url:"/img/certificateBackground.bad9f54b.png",revision:null},{url:"/img/certificateWithouSignature.bad9f54b.png",revision:null},{url:"/img/confirm_mail.5ae6eebd.png",revision:null},{url:"/img/dark-100.6d45ecf2.jpg",revision:null},{url:"/img/download-icone.50071891.png",revision:null},{url:"/img/export-congrats.05e72d52.png",revision:null},{url:"/img/finished.8a647fd5.png",revision:null},{url:"/img/forgot-password.f2bbd80d.png",revision:null},{url:"/img/g1.f6f7b197.jpg",revision:null},{url:"/img/g2.f6f7b197.jpg",revision:null},{url:"/img/g3.f6f7b197.jpg",revision:null},{url:"/img/g4.f6f7b197.jpg",revision:null},{url:"/img/g5.f6f7b197.jpg",revision:null},{url:"/img/g6.f6f7b197.jpg",revision:null},{url:"/img/g7.f6f7b197.jpg",revision:null},{url:"/img/g8.f6f7b197.jpg",revision:null},{url:"/img/g9.f6f7b197.jpg",revision:null},{url:"/img/gi-1.cab43d35.jpg",revision:null},{url:"/img/install-app.d722432e.png",revision:null},{url:"/img/loader-dark.d0a0c446.png",revision:null},{url:"/img/loader.d0a0c446.png",revision:null},{url:"/img/login.9d4e8a60.png",revision:null},{url:"/img/logo-full.0748829a.png",revision:null},{url:"/img/logo-full2.0748829a.png",revision:null},{url:"/img/p2.65c5c7c4.jpg",revision:null},{url:"/img/profile-bg2.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg3.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg4.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg5.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg6.4269bb1f.jpg",revision:null},{url:"/img/profile-bg7.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg8.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg9.04f5a0c3.jpg",revision:null},{url:"/img/reader.b5157672.png",revision:null},{url:"/img/registration-admin.c086c1db.png",revision:null},{url:"/img/registration-review.458fc7ab.png",revision:null},{url:"/img/rejestraion-review.9b97bf75.png",revision:null},{url:"/img/rejestraion.e880f90a.png",revision:null},{url:"/img/reset-password.a4e75e8c.png",revision:null},{url:"/img/signature.6a48e4ae.jpg",revision:null},{url:"/img/stage2.2de9c4e0.png",revision:null},{url:"/img/start_new.3fa13139.png",revision:null},{url:"/img/statistics.e118c605.png",revision:null},{url:"/img/test.b8514679.png",revision:null},{url:"/img/update-forms.03f6433b.png",revision:null},{url:"/img/update-info.48c78028.png",revision:null},{url:"/index.html",revision:"78b40f6482ff4eaf46ad9754924af4cc"},{url:"/js/1059.d4215441.js",revision:null},{url:"/js/1063.f4cc4092.js",revision:null},{url:"/js/1115.f8b24abb.js",revision:null},{url:"/js/1489.5dde612a.js",revision:null},{url:"/js/1726.4891fdc8.js",revision:null},{url:"/js/1916.67c3992d.js",revision:null},{url:"/js/1935.930260c7.js",revision:null},{url:"/js/1989.0f1831f4.js",revision:null},{url:"/js/2026.f83eb980.js",revision:null},{url:"/js/219.e19c1ec6.js",revision:null},{url:"/js/2302.ca9db8b6.js",revision:null},{url:"/js/2348.376e5850.js",revision:null},{url:"/js/2354.ebd2d6eb.js",revision:null},{url:"/js/2410.2116a6c4.js",revision:null},{url:"/js/2412.504e4c8d.js",revision:null},{url:"/js/2477.0ea979ad.js",revision:null},{url:"/js/2713.0cfa24dd.js",revision:null},{url:"/js/2745.a994ed5d.js",revision:null},{url:"/js/2782.bb53f300.js",revision:null},{url:"/js/2795.d2c686fa.js",revision:null},{url:"/js/2903.ed2d0b53.js",revision:null},{url:"/js/2919.ac4d34db.js",revision:null},{url:"/js/2990.780a139c.js",revision:null},{url:"/js/3055.0fa59212.js",revision:null},{url:"/js/3062.563edb1b.js",revision:null},{url:"/js/3210.586bfaed.js",revision:null},{url:"/js/3215.1ebce29b.js",revision:null},{url:"/js/3217.0643020b.js",revision:null},{url:"/js/3254.ab4aa586.js",revision:null},{url:"/js/3334.9dc261d3.js",revision:null},{url:"/js/3831.6639e942.js",revision:null},{url:"/js/4052.716f3d43.js",revision:null},{url:"/js/4126.f3ba5203.js",revision:null},{url:"/js/4128.e63fe8f3.js",revision:null},{url:"/js/4199.020b6f99.js",revision:null},{url:"/js/4332.02d84a40.js",revision:null},{url:"/js/4426.e1dcb112.js",revision:null},{url:"/js/4458.58d8c4d6.js",revision:null},{url:"/js/4679.35f25d17.js",revision:null},{url:"/js/4790.ed6e3ddb.js",revision:null},{url:"/js/4804.e735b22e.js",revision:null},{url:"/js/5138.0815b74f.js",revision:null},{url:"/js/5996.c41f5954.js",revision:null},{url:"/js/5998.014f956a.js",revision:null},{url:"/js/6296.074bf07f.js",revision:null},{url:"/js/6342.d48ea283.js",revision:null},{url:"/js/6358.dabe36f9.js",revision:null},{url:"/js/654.54365812.js",revision:null},{url:"/js/6935.f597a691.js",revision:null},{url:"/js/6969.9b136e55.js",revision:null},{url:"/js/6976.dbf60bd7.js",revision:null},{url:"/js/7027.c0f2a640.js",revision:null},{url:"/js/7034.b0c234ec.js",revision:null},{url:"/js/7374.177ff09f.js",revision:null},{url:"/js/7450.5458edc8.js",revision:null},{url:"/js/7461.dedb9520.js",revision:null},{url:"/js/7473.1f8b792c.js",revision:null},{url:"/js/7562.8b87c628.js",revision:null},{url:"/js/766.3a238c95.js",revision:null},{url:"/js/770.c74bf5eb.js",revision:null},{url:"/js/7856.81cca292.js",revision:null},{url:"/js/7911.2352d2cb.js",revision:null},{url:"/js/8068.f78c9e8b.js",revision:null},{url:"/js/8082.0d04f8b1.js",revision:null},{url:"/js/8167.d7f954b5.js",revision:null},{url:"/js/8170.afe6794d.js",revision:null},{url:"/js/8409.24f158bb.js",revision:null},{url:"/js/8531.09d91d07.js",revision:null},{url:"/js/8604.17148213.js",revision:null},{url:"/js/8839.fe9297e4.js",revision:null},{url:"/js/9250.81fbe1a3.js",revision:null},{url:"/js/966.3b75c2a2.js",revision:null},{url:"/js/9686.2f8ad519.js",revision:null},{url:"/js/9768.9ea35fcd.js",revision:null},{url:"/js/9846.628d63ec.js",revision:null},{url:"/js/app.83bdb777.js",revision:null},{url:"/js/chunk-vendors.5b550f8a.js",revision:null},{url:"/manifest.json",revision:"0587efbbb9a8450b0196c51ee68b429d"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
