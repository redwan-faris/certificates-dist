if(!self.define){let l,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const l=document.createElement("script");l.src=i,l.onload=s,document.head.appendChild(l)}else l=i,importScripts(i),s()})).then((()=>{let l=s[i];if(!l)throw new Error(`Module ${i} didn’t register its module`);return l})));self.define=(n,r)=>{const u=l||("document"in self?document.currentScript.src:"")||location.href;if(s[u])return;let e={};const o=l=>i(l,u),j={module:{uri:u},exports:e,require:o};s[u]=Promise.all(n.map((l=>j[l]||o(l)))).then((l=>(r(...l),e)))}}define(["./workbox-79ffe3e0"],(function(l){"use strict";l.setCacheNameDetails({prefix:"osboha180"}),self.addEventListener("message",(l=>{l.data&&"SKIP_WAITING"===l.data.type&&self.skipWaiting()})),l.precacheAndRoute([{url:"/css/1115.2b4dc647.css",revision:null},{url:"/css/219.92abe56d.css",revision:null},{url:"/css/2348.11ad285e.css",revision:null},{url:"/css/2713.a85b3e12.css",revision:null},{url:"/css/3254.12498255.css",revision:null},{url:"/css/3831.f4ef771d.css",revision:null},{url:"/css/4052.4d95488f.css",revision:null},{url:"/css/4126.4372ee8b.css",revision:null},{url:"/css/4199.c894b957.css",revision:null},{url:"/css/4332.69c24825.css",revision:null},{url:"/css/4458.becfb64d.css",revision:null},{url:"/css/6358.9766d595.css",revision:null},{url:"/css/654.0797d1e2.css",revision:null},{url:"/css/6935.f9cafa1d.css",revision:null},{url:"/css/7034.d3faef2e.css",revision:null},{url:"/css/7374.c1ff4e10.css",revision:null},{url:"/css/766.8904bece.css",revision:null},{url:"/css/7911.1f8f0e89.css",revision:null},{url:"/css/8082.12498255.css",revision:null},{url:"/css/8531.c1ff4e10.css",revision:null},{url:"/css/8604.feb8c7c2.css",revision:null},{url:"/css/8839.faffd619.css",revision:null},{url:"/css/9250.7972a543.css",revision:null},{url:"/css/966.72940d67.css",revision:null},{url:"/css/9846.e1ba9357.css",revision:null},{url:"/css/app.6bb15ee2.css",revision:null},{url:"/css/chunk-vendors.1457aec4.css",revision:null},{url:"/img/02.80529306.png",revision:null},{url:"/img/1.7afa917d.png",revision:null},{url:"/img/11.944264a7.png",revision:null},{url:"/img/2.7afa917d.png",revision:null},{url:"/img/3.7afa917d.png",revision:null},{url:"/img/400.5b3061d8.png",revision:null},{url:"/img/500.5b3061d8.png",revision:null},{url:"/img/52.ba8596e6.jpg",revision:null},{url:"/img/56.ba8596e6.jpg",revision:null},{url:"/img/57.ba8596e6.jpg",revision:null},{url:"/img/58.ba8596e6.jpg",revision:null},{url:"/img/59.ba8596e6.jpg",revision:null},{url:"/img/60.ba8596e6.jpg",revision:null},{url:"/img/accept-reject.4e690409.png",revision:null},{url:"/img/all-stages.f3e23b6f.png",revision:null},{url:"/img/banner_1.1f5097ab.jpg",revision:null},{url:"/img/banner_2.804f3296.jpg",revision:null},{url:"/img/banner_3.79de3b0a.jpg",revision:null},{url:"/img/book-banner.6a2a5a9c.png",revision:null},{url:"/img/certMain.24406352.jpg",revision:null},{url:"/img/certTemp.c3eca21d.png",revision:null},{url:"/img/certTemp_9.51bcb450.png",revision:null},{url:"/img/certificate.bad9f54b.png",revision:null},{url:"/img/certificateBackground.bad9f54b.png",revision:null},{url:"/img/certificateWithouSignature.bad9f54b.png",revision:null},{url:"/img/confirm_mail.5ae6eebd.png",revision:null},{url:"/img/dark-100.6d45ecf2.jpg",revision:null},{url:"/img/download-icone.50071891.png",revision:null},{url:"/img/export-congrats.05e72d52.png",revision:null},{url:"/img/finished.8a647fd5.png",revision:null},{url:"/img/forgot-password.f2bbd80d.png",revision:null},{url:"/img/g1.f6f7b197.jpg",revision:null},{url:"/img/g2.f6f7b197.jpg",revision:null},{url:"/img/g3.f6f7b197.jpg",revision:null},{url:"/img/g4.f6f7b197.jpg",revision:null},{url:"/img/g5.f6f7b197.jpg",revision:null},{url:"/img/g6.f6f7b197.jpg",revision:null},{url:"/img/g7.f6f7b197.jpg",revision:null},{url:"/img/g8.f6f7b197.jpg",revision:null},{url:"/img/g9.f6f7b197.jpg",revision:null},{url:"/img/gi-1.cab43d35.jpg",revision:null},{url:"/img/install-app.d722432e.png",revision:null},{url:"/img/loader-dark.d0a0c446.png",revision:null},{url:"/img/loader.d0a0c446.png",revision:null},{url:"/img/login.9d4e8a60.png",revision:null},{url:"/img/logo-full.0748829a.png",revision:null},{url:"/img/logo-full2.0748829a.png",revision:null},{url:"/img/p2.65c5c7c4.jpg",revision:null},{url:"/img/profile-bg2.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg3.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg4.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg5.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg6.4269bb1f.jpg",revision:null},{url:"/img/profile-bg7.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg8.04f5a0c3.jpg",revision:null},{url:"/img/profile-bg9.04f5a0c3.jpg",revision:null},{url:"/img/reader.b5157672.png",revision:null},{url:"/img/registration-admin.c086c1db.png",revision:null},{url:"/img/registration-review.458fc7ab.png",revision:null},{url:"/img/rejestraion-review.9b97bf75.png",revision:null},{url:"/img/rejestraion.e880f90a.png",revision:null},{url:"/img/reset-password.a4e75e8c.png",revision:null},{url:"/img/signature.6a48e4ae.jpg",revision:null},{url:"/img/stage2.2de9c4e0.png",revision:null},{url:"/img/start_new.3fa13139.png",revision:null},{url:"/img/statistics.e118c605.png",revision:null},{url:"/img/test.b8514679.png",revision:null},{url:"/img/update-forms.03f6433b.png",revision:null},{url:"/img/update-info.48c78028.png",revision:null},{url:"/index.html",revision:"8e9fe0d4b1bde4fe9e4c2f54c78c54d2"},{url:"/js/1059.73be0857.js",revision:null},{url:"/js/1063.4a016467.js",revision:null},{url:"/js/1115.23d80a7d.js",revision:null},{url:"/js/1489.545e553f.js",revision:null},{url:"/js/1726.05ac4e51.js",revision:null},{url:"/js/1916.3c63727c.js",revision:null},{url:"/js/1935.930260c7.js",revision:null},{url:"/js/2026.c2dbf42f.js",revision:null},{url:"/js/219.9a528462.js",revision:null},{url:"/js/2302.56932912.js",revision:null},{url:"/js/2348.dfff6c0a.js",revision:null},{url:"/js/2354.ebd2d6eb.js",revision:null},{url:"/js/2410.59766ceb.js",revision:null},{url:"/js/2412.0fc0a2b9.js",revision:null},{url:"/js/2477.b640fdda.js",revision:null},{url:"/js/2713.33cec15f.js",revision:null},{url:"/js/2745.3dd1ccc3.js",revision:null},{url:"/js/2782.3f7aff5b.js",revision:null},{url:"/js/2795.4bebde62.js",revision:null},{url:"/js/2903.8d9a4267.js",revision:null},{url:"/js/2919.0d54100c.js",revision:null},{url:"/js/2990.e82f250e.js",revision:null},{url:"/js/3055.fb84043d.js",revision:null},{url:"/js/3062.cde51000.js",revision:null},{url:"/js/3210.03b42201.js",revision:null},{url:"/js/3215.3622addc.js",revision:null},{url:"/js/3217.0643020b.js",revision:null},{url:"/js/3254.06369108.js",revision:null},{url:"/js/3334.cde391c5.js",revision:null},{url:"/js/3831.c80a8f92.js",revision:null},{url:"/js/4052.bb22ac80.js",revision:null},{url:"/js/4126.82a78ac9.js",revision:null},{url:"/js/4128.cbb9ab7b.js",revision:null},{url:"/js/4199.cbae7aa5.js",revision:null},{url:"/js/4332.0c247303.js",revision:null},{url:"/js/4426.03e56da2.js",revision:null},{url:"/js/4458.fd0ef2dd.js",revision:null},{url:"/js/4679.f21918a1.js",revision:null},{url:"/js/4790.ed6e3ddb.js",revision:null},{url:"/js/4804.97af5503.js",revision:null},{url:"/js/4933.e81c552c.js",revision:null},{url:"/js/5996.670f1777.js",revision:null},{url:"/js/5998.ce80a2a9.js",revision:null},{url:"/js/6296.22d1bc3a.js",revision:null},{url:"/js/6342.ce5cc4ea.js",revision:null},{url:"/js/6358.6b5317a8.js",revision:null},{url:"/js/654.a7f4e1f9.js",revision:null},{url:"/js/6935.9e5d41e2.js",revision:null},{url:"/js/6969.9b136e55.js",revision:null},{url:"/js/6976.1501523b.js",revision:null},{url:"/js/7027.0d5b6c68.js",revision:null},{url:"/js/7034.b9ef86d5.js",revision:null},{url:"/js/7374.630176ea.js",revision:null},{url:"/js/7450.e4bece57.js",revision:null},{url:"/js/7461.aadf9544.js",revision:null},{url:"/js/7473.9f698389.js",revision:null},{url:"/js/7562.31692c48.js",revision:null},{url:"/js/766.78b6f646.js",revision:null},{url:"/js/770.4d7dffc1.js",revision:null},{url:"/js/7856.81cca292.js",revision:null},{url:"/js/7911.ac3fb7d0.js",revision:null},{url:"/js/8068.2a93d524.js",revision:null},{url:"/js/8082.63b98da3.js",revision:null},{url:"/js/8167.63f3b425.js",revision:null},{url:"/js/8170.a18bb5c6.js",revision:null},{url:"/js/8409.b44b1f84.js",revision:null},{url:"/js/8531.5027d93f.js",revision:null},{url:"/js/8604.9c73f399.js",revision:null},{url:"/js/8839.b0e628f5.js",revision:null},{url:"/js/9250.b0812438.js",revision:null},{url:"/js/966.3bdac856.js",revision:null},{url:"/js/9686.0f5a1bd0.js",revision:null},{url:"/js/9768.a9aea41a.js",revision:null},{url:"/js/9846.493e62ce.js",revision:null},{url:"/js/988.fdc15dc6.js",revision:null},{url:"/js/app.b8fcd698.js",revision:null},{url:"/js/chunk-vendors.d6d4adbe.js",revision:null},{url:"/manifest.json",revision:"0587efbbb9a8450b0196c51ee68b429d"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
