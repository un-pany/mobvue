if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-4723e66c"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"app-loading.css",revision:"0f3ef5546153ed0522ef103f4cfebb3b"},{url:"assets/_plugin-vue_export-helper-DlAUqK2U.js",revision:null},{url:"assets/_plugin-vue_export-helper-legacy-DgAO6S8O.js",revision:null},{url:"assets/403-DVeUd2ua.js",revision:null},{url:"assets/403-legacy-DwWx91zY.js",revision:null},{url:"assets/404-ByLN9ZFL.js",revision:null},{url:"assets/404-legacy-BbVBQARo.js",revision:null},{url:"assets/chart-BqYLOvTa.js",revision:null},{url:"assets/chart-legacy-DV6vyLlo.js",revision:null},{url:"assets/color-Dn9JuvjO.js",revision:null},{url:"assets/color-legacy-FRaAtjO7.js",revision:null},{url:"assets/Description.vue_vue_type_script_setup_true_lang-C8H65OIR.js",revision:null},{url:"assets/Description.vue_vue_type_script_setup_true_lang-legacy-CjlPTTVY.js",revision:null},{url:"assets/i18n-DEbe0g7i.js",revision:null},{url:"assets/i18n-legacy-DV6vyLlo.js",revision:null},{url:"assets/index-0LCaEvam.css",revision:null},{url:"assets/index-Bd3nhUJ2.js",revision:null},{url:"assets/index-BG-r28NM.css",revision:null},{url:"assets/index-BNDHdoXM.css",revision:null},{url:"assets/index-BNGvm6iy.js",revision:null},{url:"assets/index-BZ_MtGqM.css",revision:null},{url:"assets/index-Ce_zVEas.css",revision:null},{url:"assets/index-CFbcc59u.css",revision:null},{url:"assets/index-CGlDNzVv.js",revision:null},{url:"assets/index-CHbFU5mQ.js",revision:null},{url:"assets/index-COe_jlbG.css",revision:null},{url:"assets/index-DhV2rnNd.css",revision:null},{url:"assets/index-DMOc2Tx-.js",revision:null},{url:"assets/index-GUz3-o24.js",revision:null},{url:"assets/index-jrhpQtla.js",revision:null},{url:"assets/index-legacy-3Uz3j0qC.js",revision:null},{url:"assets/index-legacy-BGKeknOD.js",revision:null},{url:"assets/index-legacy-BoNb8H71.js",revision:null},{url:"assets/index-legacy-Bs-Lsj88.js",revision:null},{url:"assets/index-legacy-C1tmC5_F.js",revision:null},{url:"assets/index-legacy-CC2aGw8E.js",revision:null},{url:"assets/index-legacy-Csm4JDIL.js",revision:null},{url:"assets/index-legacy-DWOTPRlC.js",revision:null},{url:"assets/index-legacy-zemvE2-z.js",revision:null},{url:"assets/index-PmjIXntg.js",revision:null},{url:"assets/index-RK1kvNab.js",revision:null},{url:"assets/keep-alive-CqzDz2eo.js",revision:null},{url:"assets/keep-alive-legacy-lJ3VkQgE.js",revision:null},{url:"assets/Layout-C_yMN953.js",revision:null},{url:"assets/Layout-legacy-BWBZRI73.js",revision:null},{url:"assets/markdown-Dn7N3HFs.js",revision:null},{url:"assets/markdown-legacy-DV6vyLlo.js",revision:null},{url:"assets/NoticeBar-DSNEhyw6.css",revision:null},{url:"assets/NoticeBar.vue_vue_type_script_setup_true_lang-DC9kOlwW.js",revision:null},{url:"assets/NoticeBar.vue_vue_type_script_setup_true_lang-legacy-40wsufwE.js",revision:null},{url:"assets/permission-DC13G2nR.js",revision:null},{url:"assets/permission-legacy-DoTkH05c.js",revision:null},{url:"assets/polyfills-legacy-DdVQJu7f.js",revision:null},{url:"assets/use-expose-CJx1Pmvu.js",revision:null},{url:"assets/use-expose-legacy-seM7c6_4.js",revision:null},{url:"assets/use-id-CMwqAVRY.js",revision:null},{url:"assets/use-id-legacy-BaqxFKYa.js",revision:null},{url:"assets/vue-BUcO0Ml9.js",revision:null},{url:"assets/vue-legacy-DezzmnhY.js",revision:null},{url:"assets/watermark-CxDiR87I.js",revision:null},{url:"assets/watermark-legacy-reX9PFlh.js",revision:null},{url:"index.html",revision:"4aa77d9592b3cf8ab0cc5b19c1652a0a"},{url:"registerSW.js",revision:"a7ef3904c5a787828239394a85d5c4e4"},{url:"apple-touch-icon.png",revision:"5b5b1bdfaa939847b3b2b244bc84666d"},{url:"favicon.png",revision:"0bded0e62cfd499311bc8d00c2140009"},{url:"pwa-192x192.png",revision:"76dde6f6a59c27b28902abb41f943bb4"},{url:"pwa-512x512.png",revision:"0c4aac89133899c5dc1651cd8562c6a3"},{url:"manifest.webmanifest",revision:"81b8ac934faeab3a15dde7982a267db7"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
