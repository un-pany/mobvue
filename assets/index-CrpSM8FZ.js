const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BYH32d-L.js","assets/vue-BFYFvDGA.js","assets/index-BZ_MtGqM.css","assets/index-D1Nk2pNM.js","assets/keep-alive-BGQNL6r8.js","assets/NoticeBar.vue_vue_type_script_setup_true_lang-CvdG9jT_.js","assets/NoticeBar-DSNEhyw6.css","assets/keep-alive-BnzqpvEC.css","assets/watermark-B0BPdDW1.js","assets/watermark-BRPstM_w.css"])))=>i.map(i=>d[i]);
import{c as Ie,r as A,w as F,a as Ne,b as Fe,o as Ee,n as Y,d as Me,e as we,f as Ve,i as Ke,g as ee,h as z,j as C,u as x,k as X,p as Ue,l as je,m as b,q as k,s as _e,t as Be,v as L,x as T,y as ze,z as U,A as Te,F as We,B as qe,C as He,D as Ye,E as Xe,G as oe,H as Ge,T as Je,K as Ze,I as Qe,J as et}from"./vue-BFYFvDGA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const tt=Ie(),nt="modulepreload",rt=function(e){return"/mobvue/"+e},ie={},j=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),c=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));s=Promise.allSettled(n.map(d=>{if(d=rt(d),d in ie)return;ie[d]=!0;const m=d.endsWith(".css"),f=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${f}`))return;const a=document.createElement("link");if(a.rel=m?"stylesheet":nt,m||(a.as="script"),a.crossOrigin="",a.href=d,c&&a.setAttribute("nonce",c),document.head.appendChild(a),m)return new Promise((h,v)=>{a.addEventListener("load",h),a.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(u){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=u,window.dispatchEvent(c),!c.defaultPrevented)throw u}return s.then(u=>{for(const c of u||[])c.status==="rejected"&&i(c.reason);return t().catch(i)})},se="MobVue",xe=A("");function ot(e){xe.value=e?`${se} | ${e}`:se}F(xe,(e,t)=>{document&&e!==t&&(document.title=e)});function it(){return{setTitle:ot}}function st(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var K={exports:{}};var at=K.exports,ae;function ut(){return ae||(ae=1,function(e,t){(function(n,r){e.exports=r()})(at,function(){var n={};n.version="0.2.0";var r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};n.configure=function(o){var l,p;for(l in o)p=o[l],p!==void 0&&o.hasOwnProperty(l)&&(r[l]=p);return this},n.status=null,n.set=function(o){var l=n.isStarted();o=s(o,r.minimum,1),n.status=o===1?null:o;var p=n.render(!l),y=p.querySelector(r.barSelector),E=r.speed,O=r.easing;return p.offsetWidth,c(function(g){r.positionUsing===""&&(r.positionUsing=n.getPositioningCSS()),d(y,u(o,E,O)),o===1?(d(p,{transition:"none",opacity:1}),p.offsetWidth,setTimeout(function(){d(p,{transition:"all "+E+"ms linear",opacity:0}),setTimeout(function(){n.remove(),g()},E)},E)):setTimeout(g,E)}),this},n.isStarted=function(){return typeof n.status=="number"},n.start=function(){n.status||n.set(0);var o=function(){setTimeout(function(){n.status&&(n.trickle(),o())},r.trickleSpeed)};return r.trickle&&o(),this},n.done=function(o){return!o&&!n.status?this:n.inc(.3+.5*Math.random()).set(1)},n.inc=function(o){var l=n.status;return l?(typeof o!="number"&&(o=(1-l)*s(Math.random()*l,.1,.95)),l=s(l+o,0,.994),n.set(l)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},function(){var o=0,l=0;n.promise=function(p){return!p||p.state()==="resolved"?this:(l===0&&n.start(),o++,l++,p.always(function(){l--,l===0?(o=0,n.done()):n.set((o-l)/o)}),this)}}(),n.render=function(o){if(n.isRendered())return document.getElementById("nprogress");f(document.documentElement,"nprogress-busy");var l=document.createElement("div");l.id="nprogress",l.innerHTML=r.template;var p=l.querySelector(r.barSelector),y=o?"-100":i(n.status||0),E=document.querySelector(r.parent),O;return d(p,{transition:"all 0 linear",transform:"translate3d("+y+"%,0,0)"}),r.showSpinner||(O=l.querySelector(r.spinnerSelector),O&&v(O)),E!=document.body&&f(E,"nprogress-custom-parent"),E.appendChild(l),l},n.remove=function(){a(document.documentElement,"nprogress-busy"),a(document.querySelector(r.parent),"nprogress-custom-parent");var o=document.getElementById("nprogress");o&&v(o)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var o=document.body.style,l="WebkitTransform"in o?"Webkit":"MozTransform"in o?"Moz":"msTransform"in o?"ms":"OTransform"in o?"O":"";return l+"Perspective"in o?"translate3d":l+"Transform"in o?"translate":"margin"};function s(o,l,p){return o<l?l:o>p?p:o}function i(o){return(-1+o)*100}function u(o,l,p){var y;return r.positionUsing==="translate3d"?y={transform:"translate3d("+i(o)+"%,0,0)"}:r.positionUsing==="translate"?y={transform:"translate("+i(o)+"%,0)"}:y={"margin-left":i(o)+"%"},y.transition="all "+l+"ms "+p,y}var c=function(){var o=[];function l(){var p=o.shift();p&&p(l)}return function(p){o.push(p),o.length==1&&l()}}(),d=function(){var o=["Webkit","O","Moz","ms"],l={};function p(g){return g.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(w,_){return _.toUpperCase()})}function y(g){var w=document.body.style;if(g in w)return g;for(var _=o.length,D=g.charAt(0).toUpperCase()+g.slice(1),$;_--;)if($=o[_]+D,$ in w)return $;return g}function E(g){return g=p(g),l[g]||(l[g]=y(g))}function O(g,w,_){w=E(w),g.style[w]=_}return function(g,w){var _=arguments,D,$;if(_.length==2)for(D in w)$=w[D],$!==void 0&&w.hasOwnProperty(D)&&O(g,D,$);else O(g,_[1],_[2])}}();function m(o,l){var p=typeof o=="string"?o:h(o);return p.indexOf(" "+l+" ")>=0}function f(o,l){var p=h(o),y=p+l;m(p,l)||(o.className=y.substring(1))}function a(o,l){var p=h(o),y;m(o,l)&&(y=p.replace(" "+l+" "," "),o.className=y.substring(1,y.length-1))}function h(o){return(" "+(o.className||"")+" ").replace(/\s+/gi," ")}function v(o){o&&o.parentNode&&o.parentNode.removeChild(o)}return n})}(K)),K.exports}var ct=ut();const G=st(ct);G.configure({showSpinner:!1});const{setTitle:lt}=it();function ft(e){e.beforeEach((t,n)=>(G.start(),!0)),e.afterEach(t=>{lt(t.meta.title),G.done()})}const dt="/mobvue/",mt=[{path:"/",component:()=>j(()=>import("./index-BYH32d-L.js"),__vite__mapDeps([0,1,2])),name:"Home",meta:{title:"首页",layout:{navBar:{showNavBar:!1,showLeftArrow:!1},tabbar:{showTabbar:!0,icon:"home-o"}}}},{path:"/me",component:()=>j(()=>import("./index-D1Nk2pNM.js"),__vite__mapDeps([3,1])),name:"Me",meta:{title:"我的",layout:{navBar:{showNavBar:!0,showLeftArrow:!1},tabbar:{showTabbar:!0,icon:"user-o"}}}}],pt=[{path:"/keep-alive",component:()=>j(()=>import("./keep-alive-BGQNL6r8.js"),__vite__mapDeps([4,5,1,6,7])),name:"KeepAlive",meta:{title:"路由缓存",keepAlive:!0,layout:{navBar:{showNavBar:!0,showLeftArrow:!0}}}},{path:"/watermark",component:()=>j(()=>import("./watermark-B0BPdDW1.js"),__vite__mapDeps([8,1,5,6,9])),name:"Watermark",meta:{title:"带防御的水印",layout:{navBar:{showNavBar:!0,showLeftArrow:!0}}}}],te=Ne({history:Fe(dt),routes:[...mt,...pt]});ft(te);function ht(e){return typeof e=="string"||e instanceof String}function gt(){}const vt=Object.assign,bt=typeof window<"u",W=e=>e!==null&&typeof e=="object",I=e=>e!=null,J=e=>typeof e=="function",yt=e=>W(e)&&J(e.then)&&J(e.catch),Se=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),Et=()=>bt?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function ue(e,t){const n=t.split(".");let r=e;return n.forEach(s=>{var i;r=W(r)&&(i=r[s])!=null?i:""}),r}const Sn=e=>Array.isArray(e)?e:[e],An=null,P=[Number,String],N={type:Boolean,default:!0},wt=e=>({type:P,default:e}),Z=e=>({type:String,default:e});var ne=typeof window<"u";function ce(e){return ne?requestAnimationFrame(e):-1}function Cn(e){ce(()=>ce(e))}var _t=e=>e===window,le=(e,t)=>({top:0,left:0,right:e,bottom:t,width:e,height:t}),Bt=e=>{const t=x(e);if(_t(t)){const n=t.innerWidth,r=t.innerHeight;return le(n,r)}return t!=null&&t.getBoundingClientRect?t.getBoundingClientRect():le(0,0)};function Tt(e){const t=ee(e,null);if(t){const n=z(),{link:r,unlink:s,internalChildren:i}=t;r(n),we(()=>s(n));const u=C(()=>i.indexOf(n));return{parent:t,index:u}}return{parent:null,index:A(-1)}}function xt(e){const t=[],n=r=>{Array.isArray(r)&&r.forEach(s=>{var i;je(s)&&(t.push(s),(i=s.component)!=null&&i.subTree&&(t.push(s.component.subTree),n(s.component.subTree.children)),s.children&&n(s.children))})};return n(e),t}var fe=(e,t)=>{const n=e.indexOf(t);return n===-1?e.findIndex(r=>t.key!==void 0&&t.key!==null&&r.type===t.type&&r.key===t.key):n};function St(e,t,n){const r=xt(e.subTree.children);n.sort((i,u)=>fe(r,i.vnode)-fe(r,u.vnode));const s=n.map(i=>i.proxy);t.sort((i,u)=>{const c=s.indexOf(i),d=s.indexOf(u);return c-d})}function At(e){const t=X([]),n=X([]),r=z();return{children:t,linkChildren:i=>{Ue(e,Object.assign({link:d=>{d.proxy&&(n.push(d),t.push(d.proxy),St(r,t,n))},unlink:d=>{const m=n.indexOf(d);t.splice(m,1),n.splice(m,1)},children:t,internalChildren:n},i))}}}function Ct(e){let t;Ee(()=>{e(),Y(()=>{t=!0})}),Me(()=>{t&&e()})}function Pn(e,t,n={}){if(!ne)return;const{target:r=window,passive:s=!1,capture:i=!1}=n;let u=!1,c;const d=a=>{if(u)return;const h=x(a);h&&!c&&(h.addEventListener(e,t,{capture:i,passive:s}),c=!0)},m=a=>{if(u)return;const h=x(a);h&&c&&(h.removeEventListener(e,t,i),c=!1)};we(()=>m(r)),Ve(()=>m(r)),Ct(()=>d(r));let f;return Ke(r)&&(f=F(r,(a,h)=>{m(h),d(a)})),()=>{f==null||f(),m(r),u=!0}}var V,q;function Pt(){if(!V&&(V=A(0),q=A(0),ne)){const e=()=>{V.value=window.innerWidth,q.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:V,height:q}}var kn=Symbol("van-field");function de(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}function kt(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function Ot(e){de(window,e),de(document.body,e)}const Lt=Et();function On(){Lt&&Ot(kt())}function Ln(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault()}const{width:$t,height:Dt}=Pt();function B(e){if(I(e))return Se(e)?`${e}px`:String(e)}function $n(e){if(I(e)){if(Array.isArray(e))return{width:B(e[0]),height:B(e[1])};const t=B(e);return{width:t,height:t}}}function Ae(e){const t={};return e!==void 0&&(t.zIndex=+e),t}const Rt=/-(\w)/g,Ce=e=>e.replace(Rt,(t,n)=>n.toUpperCase()),Dn=(e,t,n)=>Math.min(Math.max(e,t),n);function me(e,t,n){const r=e.indexOf(t);return r===-1?e:t==="-"&&r!==0?e.slice(0,r):e.slice(0,r+1)+e.slice(r).replace(n,"")}function Rn(e,t=!0,n=!0){t?e=me(e,".",/\./g):e=e.split(".")[0],n?e=me(e,"-",/-/g):e=e.replace(/-/,"");const r=t?/[^-0-9.]/g:/[^-0-9]/g;return e.replace(r,"")}const{hasOwnProperty:It}=Object.prototype;function Nt(e,t,n){const r=t[n];I(r)&&(!It.call(e,n)||!W(r)?e[n]=r:e[n]=Pe(Object(e[n]),r))}function Pe(e,t){return Object.keys(t).forEach(n=>{Nt(e,t,n)}),e}var Ft={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const pe=A("zh-CN"),he=X({"zh-CN":Ft}),Mt={messages(){return he[pe.value]},use(e,t){pe.value=e,this.add({[e]:t})},add(e={}){Pe(he,e)}};var Vt=Mt;function Kt(e){const t=Ce(e)+".";return(n,...r)=>{const s=Vt.messages(),i=ue(s,t+n)||ue(s,n);return J(i)?i(...r):i}}function Q(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((n,r)=>n+Q(e,r),""):Object.keys(t).reduce((n,r)=>n+(t[r]?Q(e,r):""),""):""}function Ut(e){return(t,n)=>(t&&typeof t!="string"&&(n=t,t=""),t=t?`${e}__${t}`:e,`${t}${Q(t,n)}`)}function R(e){const t=`van-${e}`;return[t,Ut(t),Kt(t)]}const re="van-hairline",jt=`${re}--bottom`,In=`${re}--surround`,zt=`${re}--top-bottom`,ge="van-haptics-feedback",Nn=Symbol("van-form");function Wt(e,{args:t=[],done:n,canceled:r,error:s}){if(e){const i=e.apply(null,t);yt(i)?i.then(u=>{u?n():r&&r()}).catch(s||gt):i?n():r&&r()}else n()}function M(e){return e.install=t=>{const{name:n}=e;n&&(t.component(n,e),t.component(Ce(`-${n}`),e))},e}const qt=Symbol();function Ht(e){const t=ee(qt,null);t&&F(t,n=>{n&&e()})}const Yt=(e,t)=>{const n=A(),r=()=>{n.value=Bt(e).height};return Ee(()=>{Y(r);for(let s=1;s<=3;s++)setTimeout(r,100*s)}),Ht(()=>Y(r)),F([$t,Dt],r),n};function ke(e,t){const n=Yt(e);return r=>b("div",{class:t("placeholder"),style:{height:n.value?`${n.value}px`:void 0}},[r()])}const Xt={to:[String,Object],url:String,replace:Boolean};function Gt({to:e,url:t,replace:n,$router:r}){e&&r?r[n?"replace":"push"](e):t&&(n?location.replace(t):location.href=t)}function Jt(){const e=z().proxy;return()=>Gt(e)}const[Zt,ve]=R("badge"),Qt={dot:Boolean,max:P,tag:Z("div"),color:String,offset:Array,content:P,showZero:N,position:Z("top-right")};var en=k({name:Zt,props:Qt,setup(e,{slots:t}){const n=()=>{if(t.content)return!0;const{content:c,showZero:d}=e;return I(c)&&c!==""&&(d||c!==0&&c!=="0")},r=()=>{const{dot:c,max:d,content:m}=e;if(!c&&n())return t.content?t.content():I(d)&&Se(m)&&+m>+d?`${d}+`:m},s=c=>c.startsWith("-")?c.replace("-",""):`-${c}`,i=C(()=>{const c={background:e.color};if(e.offset){const[d,m]=e.offset,{position:f}=e,[a,h]=f.split("-");t.default?(typeof m=="number"?c[a]=B(a==="top"?m:-m):c[a]=a==="top"?B(m):s(m),typeof d=="number"?c[h]=B(h==="left"?d:-d):c[h]=h==="left"?B(d):s(d)):(c.marginTop=B(m),c.marginLeft=B(d))}return c}),u=()=>{if(n()||e.dot)return b("div",{class:ve([e.position,{dot:e.dot,fixed:!!t.default}]),style:i.value},[r()])};return()=>{if(t.default){const{tag:c}=e;return b(c,{class:ve("wrapper")},{default:()=>[t.default(),u()]})}return u()}}});const Oe=M(en),[tn,Fn]=R("config-provider"),nn=Symbol(tn),[rn,be]=R("icon"),on=e=>e==null?void 0:e.includes("/"),sn={dot:Boolean,tag:Z("i"),name:String,size:P,badge:P,color:String,badgeProps:Object,classPrefix:String};var an=k({name:rn,props:sn,setup(e,{slots:t}){const n=ee(nn,null),r=C(()=>e.classPrefix||(n==null?void 0:n.iconPrefix)||be());return()=>{const{tag:s,dot:i,name:u,size:c,badge:d,color:m}=e,f=on(u);return b(Oe,_e({dot:i,tag:s,class:[r.value,f?"":`${r.value}-${u}`],style:{color:m,fontSize:B(c)},content:d},e.badgeProps),{default:()=>{var a;return[(a=t.default)==null?void 0:a.call(t),f&&b("img",{class:be("image"),src:u},null)]}})}}});const Le=M(an),[un,S]=R("nav-bar"),cn={title:String,fixed:Boolean,zIndex:P,border:N,leftText:String,rightText:String,leftDisabled:Boolean,rightDisabled:Boolean,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:N};var ln=k({name:un,props:cn,emits:["clickLeft","clickRight"],setup(e,{emit:t,slots:n}){const r=A(),s=ke(r,S),i=f=>{e.leftDisabled||t("clickLeft",f)},u=f=>{e.rightDisabled||t("clickRight",f)},c=()=>n.left?n.left():[e.leftArrow&&b(Le,{class:S("arrow"),name:"arrow-left"},null),e.leftText&&b("span",{class:S("text")},[e.leftText])],d=()=>n.right?n.right():b("span",{class:S("text")},[e.rightText]),m=()=>{const{title:f,fixed:a,border:h,zIndex:v}=e,o=Ae(v),l=e.leftArrow||e.leftText||n.left,p=e.rightText||n.right;return b("div",{ref:r,style:o,class:[S({fixed:a}),{[jt]:h,"van-safe-area-top":e.safeAreaInsetTop}]},[b("div",{class:S("content")},[l&&b("div",{class:[S("left",{disabled:e.leftDisabled}),e.clickable&&!e.leftDisabled?ge:""],onClick:i},[c()]),b("div",{class:[S("title"),"van-ellipsis"]},[n.title?n.title():f]),p&&b("div",{class:[S("right",{disabled:e.rightDisabled}),e.clickable&&!e.rightDisabled?ge:""],onClick:u},[d()])])])};return()=>e.fixed&&e.placeholder?s(m):m()}});const fn=M(ln),[$e,ye]=R("tabbar"),dn={route:Boolean,fixed:N,border:N,zIndex:P,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:wt(0),safeAreaInsetBottom:{type:Boolean,default:null}},De=Symbol($e);var mn=k({name:$e,props:dn,emits:["change","update:modelValue"],setup(e,{emit:t,slots:n}){const r=A(),{linkChildren:s}=At(De),i=ke(r,ye),u=()=>{var m;return(m=e.safeAreaInsetBottom)!=null?m:e.fixed},c=()=>{var m;const{fixed:f,zIndex:a,border:h}=e;return b("div",{ref:r,role:"tablist",style:Ae(a),class:[ye({fixed:f}),{[zt]:h,"van-safe-area-bottom":u()}]},[(m=n.default)==null?void 0:m.call(n)])};return s({props:e,setActive:(m,f)=>{Wt(e.beforeChange,{args:[m],done(){t("update:modelValue",m),t("change",m),f()}})}}),()=>e.fixed&&e.placeholder?i(c):c()}});const pn=M(mn),[hn,H]=R("tabbar-item"),gn=vt({},Xt,{dot:Boolean,icon:String,name:P,badge:P,badgeProps:Object,iconPrefix:String});var vn=k({name:hn,props:gn,emits:["click"],setup(e,{emit:t,slots:n}){const r=Jt(),s=z().proxy,{parent:i,index:u}=Tt(De);if(!i)return;const c=C(()=>{var f;const{route:a,modelValue:h}=i.props;if(a&&"$route"in s){const{$route:v}=s,{to:o}=e,l=W(o)?o:{path:o};return!!v.matched.find(p=>{const y="path"in l&&l.path===p.path,E="name"in l&&l.name===p.name;return y||E})}return((f=e.name)!=null?f:u.value)===h}),d=f=>{var a;c.value||i.setActive((a=e.name)!=null?a:u.value,r),t("click",f)},m=()=>{if(n.icon)return n.icon({active:c.value});if(e.icon)return b(Le,{name:e.icon,classPrefix:e.iconPrefix},null)};return()=>{var f;const{dot:a,badge:h}=e,{activeColor:v,inactiveColor:o}=i.props,l=c.value?v:o;return b("div",{role:"tab",class:H({active:c.value}),style:{color:l},tabindex:0,"aria-selected":c.value,onClick:d},[b(Oe,_e({dot:a,class:H("icon"),content:h},e.badgeProps),{default:m}),b("div",{class:H("text")},[(f=n.default)==null?void 0:f.call(n,{active:c.value})])])}}});const bn=M(vn),yn=k({__name:"NavBar",setup(e){const t=Be(),n=C(()=>t.meta.title),r=C(()=>{var i,u;return(u=(i=t.meta.layout)==null?void 0:i.navBar)==null?void 0:u.showLeftArrow});function s(){history.back()}return(i,u)=>{const c=fn;return T(),L(c,{title:x(n),"left-arrow":x(r),fixed:"",placeholder:"","safe-area-inset-top":"",onClickLeft:s},null,8,["title","left-arrow"])}}}),En=k({__name:"Tabbar",setup(e){const t=ze(),n=C(()=>t.getRoutes().filter(s=>{var i,u;return(u=(i=s.meta.layout)==null?void 0:i.tabbar)==null?void 0:u.showTabbar}).map(s=>{var i,u;return{title:s.meta.title,icon:(u=(i=s.meta.layout)==null?void 0:i.tabbar)==null?void 0:u.icon,path:s.path}}));return(r,s)=>{const i=bn,u=pn;return T(),L(u,{route:"",fixed:"",placeholder:"","safe-area-inset-bottom":""},{default:U(()=>[(T(!0),Te(We,null,qe(x(n),c=>(T(),L(i,{key:c.path,icon:c.icon,to:c.path,replace:""},{default:U(()=>[He(Ye(c.title),1)]),_:2},1032,["icon","to"]))),128))]),_:1})}}}),wn={"un-h-full":"","un-flex":"","un-flex-col":""},_n={"un-flex-1":"","un-overflow-y-auto":""},Bn=k({__name:"index",setup(e){const t=Be(),n=A([]),r=C(()=>{var i,u;return(u=(i=t.meta.layout)==null?void 0:i.navBar)==null?void 0:u.showNavBar}),s=C(()=>{var i,u;return(u=(i=t.meta.layout)==null?void 0:i.tabbar)==null?void 0:u.showTabbar});return F(()=>t.path,()=>{const i=t.meta.keepAlive,u=t.name;i&&u&&ht(u)&&!n.value.includes(u)&&n.value.push(u)},{immediate:!0}),(i,u)=>{const c=Xe("router-view");return T(),Te("div",wn,[x(r)?(T(),L(yn,{key:0})):oe("",!0),Ge("div",_n,[b(c,null,{default:U(({Component:d})=>[b(Je,{name:"van-fade",mode:"out-in",appear:""},{default:U(()=>[(T(),L(Ze,{include:x(n)},[(T(),L(Qe(d),{key:x(t).path}))],1032,["include"]))]),_:2},1024)]),_:1})]),x(s)?(T(),L(En,{key:1})):oe("",!0)])}}}),Tn=k({__name:"App",setup(e){return(t,n)=>(T(),L(Bn))}});(function(){if(typeof window>"u")return;var e,t="ontouchstart"in window;document.createTouch||(document.createTouch=function(f,a,h,v,o,l,p){return new n(a,h,{pageX:v,pageY:o,screenX:l,screenY:p,clientX:v-window.pageXOffset,clientY:o-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var f=r(),a=0;a<arguments.length;a++)f[a]=arguments[a];return f.length=arguments.length,f}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(f){var a=this;do{if(a.matches(f))return a;a=a.parentElement||a.parentNode}while(a!==null&&a.nodeType===1);return null});var n=function(a,h,v,o,l){o=o||0,l=l||0,this.identifier=h,this.target=a,this.clientX=v.clientX+o,this.clientY=v.clientY+l,this.screenX=v.screenX+o,this.screenY=v.screenY+l,this.pageX=v.pageX+o,this.pageY=v.pageY+l};function r(){var f=[];return f.item=function(a){return this[a]||null},f.identifiedTouch=function(a){return this[a+1]||null},f}var s=!1;function i(f){return function(a){a.type==="mousedown"&&(s=!0),a.type==="mouseup"&&(s=!1),!(a.type==="mousemove"&&!s)&&((a.type==="mousedown"||!e||e&&!e.dispatchEvent)&&(e=a.target),e.closest("[data-no-touch-simulate]")==null&&u(f,a),a.type==="mouseup"&&(e=null))}}function u(f,a){var h=document.createEvent("Event");h.initEvent(f,!0,!0),h.altKey=a.altKey,h.ctrlKey=a.ctrlKey,h.metaKey=a.metaKey,h.shiftKey=a.shiftKey,h.touches=d(a),h.targetTouches=d(a),h.changedTouches=c(a),e.dispatchEvent(h)}function c(f){var a=r();return a.push(new n(e,1,f,0,0)),a}function d(f){return f.type==="mouseup"?r():c(f)}function m(){window.addEventListener("mousedown",i("touchstart"),!0),window.addEventListener("mousemove",i("touchmove"),!0),window.addEventListener("mouseup",i("touchend"),!0)}m.multiTouchOffset=75,t||new m})();const Re=et(Tn);Re.use(tt).use(te);te.isReady().then(()=>{Re.mount("#app")});export{$n as A,zt as B,kn as C,In as D,Ht as E,Nn as F,Ct as G,ce as H,Le as I,Cn as J,Bt as K,Jt as a,Xt as b,R as c,pt as d,vt as e,W as f,kt as g,J as h,I as i,yt as j,Tt as k,B as l,Z as m,P as n,Pn as o,Rn as p,Dn as q,te as r,Ot as s,N as t,An as u,Ln as v,M as w,wt as x,Sn as y,On as z};
