if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-4723e66c"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"app-loading.css",revision:"0f3ef5546153ed0522ef103f4cfebb3b"},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/_plugin-vue_export-helper-legacy-DgAO6S8O.js",revision:null},{url:"assets/403-DQ_o8QBT.js",revision:null},{url:"assets/403-legacy-CKkRnyEJ.js",revision:null},{url:"assets/404-CJhXfeg3.js",revision:null},{url:"assets/404-legacy-B9x-vIOd.js",revision:null},{url:"assets/chart-BW6QW84u.js",revision:null},{url:"assets/chart-legacy-BBnyigQZ.js",revision:null},{url:"assets/color-Cm30Qdxk.js",revision:null},{url:"assets/color-legacy-D1Db5rN4.js",revision:null},{url:"assets/Description.vue_vue_type_script_setup_true_lang-legacy-C_kA_CTH.js",revision:null},{url:"assets/Description.vue_vue_type_script_setup_true_lang-Px9Grj2H.js",revision:null},{url:"assets/i18n-BwLc8AQd.js",revision:null},{url:"assets/i18n-CGduFLs1.css",revision:null},{url:"assets/i18n-legacy-Dc_XVWbF.js",revision:null},{url:"assets/index-0d_YU5o_.js",revision:null},{url:"assets/index-0LCaEvam.css",revision:null},{url:"assets/index-B0DRxLQY.js",revision:null},{url:"assets/index-BG-r28NM.css",revision:null},{url:"assets/index-Bi-gNyGa.js",revision:null},{url:"assets/index-BNDHdoXM.css",revision:null},{url:"assets/index-ByqmRpH2.js",revision:null},{url:"assets/index-BZ_MtGqM.css",revision:null},{url:"assets/index-Ce_zVEas.css",revision:null},{url:"assets/index-CIVF7_1G.js",revision:null},{url:"assets/index-CjbzvBIs.css",revision:null},{url:"assets/index-CrJzeiur.css",revision:null},{url:"assets/index-Csz3HPdB.js",revision:null},{url:"assets/index-D01kdu18.js",revision:null},{url:"assets/index-D2nL-rrF.js",revision:null},{url:"assets/index-DhV2rnNd.css",revision:null},{url:"assets/index-DnChCAOM.js",revision:null},{url:"assets/index-DpGwzXv5.js",revision:null},{url:"assets/index-DrEgWbXC.css",revision:null},{url:"assets/index-legacy-BkD4pXos.js",revision:null},{url:"assets/index-legacy-CCqxaOVL.js",revision:null},{url:"assets/index-legacy-CFSgq0vE.js",revision:null},{url:"assets/index-legacy-CHNDsXIe.js",revision:null},{url:"assets/index-legacy-CRwoRgL9.js",revision:null},{url:"assets/index-legacy-D6Uf5dl7.js",revision:null},{url:"assets/index-legacy-DIikO0SB.js",revision:null},{url:"assets/index-legacy-DkbN2KU7.js",revision:null},{url:"assets/index-legacy-DU2LluSg.js",revision:null},{url:"assets/index-legacy-DZ9SC3v6.js",revision:null},{url:"assets/keep-alive-BBW1nTIJ.js",revision:null},{url:"assets/keep-alive-legacy-BxmlHLtX.js",revision:null},{url:"assets/Layout-Bd0iEUiW.js",revision:null},{url:"assets/Layout-legacy-BgzGJ6Xm.js",revision:null},{url:"assets/markdown-Bt1v4yGw.js",revision:null},{url:"assets/markdown-legacy-BBnyigQZ.js",revision:null},{url:"assets/NoticeBar-DSNEhyw6.css",revision:null},{url:"assets/NoticeBar.vue_vue_type_script_setup_true_lang-IxpOtFn0.js",revision:null},{url:"assets/NoticeBar.vue_vue_type_script_setup_true_lang-legacy-F8f2_rlb.js",revision:null},{url:"assets/permission-CVrWX5cT.js",revision:null},{url:"assets/permission-legacy-Cdssci6C.js",revision:null},{url:"assets/polyfills-legacy-DdVQJu7f.js",revision:null},{url:"assets/use-expose-C86AKP7k.js",revision:null},{url:"assets/use-expose-legacy-CyCyusOV.js",revision:null},{url:"assets/use-id-CYE_-0Mg.js",revision:null},{url:"assets/use-id-legacy-c0mbVUUC.js",revision:null},{url:"assets/vue-BMmLX8t2.js",revision:null},{url:"assets/vue-legacy-DqqM7FCT.js",revision:null},{url:"assets/watermark-BiDb22Nt.js",revision:null},{url:"assets/watermark-legacy-jBzCNCVY.js",revision:null},{url:"index.html",revision:"d2fcbf3a500075ae3148542f2b4f936f"},{url:"registerSW.js",revision:"a7ef3904c5a787828239394a85d5c4e4"},{url:"apple-touch-icon.png",revision:"5b5b1bdfaa939847b3b2b244bc84666d"},{url:"favicon.png",revision:"0bded0e62cfd499311bc8d00c2140009"},{url:"pwa-192x192.png",revision:"76dde6f6a59c27b28902abb41f943bb4"},{url:"pwa-512x512.png",revision:"0c4aac89133899c5dc1651cd8562c6a3"},{url:"manifest.webmanifest",revision:"81b8ac934faeab3a15dde7982a267db7"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
