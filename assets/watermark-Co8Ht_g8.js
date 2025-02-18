import{Q as A,R,S as D}from"./index-v1SEIQd-.js";import{B as F}from"./index-DjaZ9f5X.js";import{r as q,M as H,q as P,A as U,m as k,H as I,z as x,u as E,x as G,C as w}from"./vue-DwZKMzxI.js";import{_ as V}from"./NoticeBar.vue_vue_type_script_setup_true_lang-CuhUlQ-P.js";import"./use-expose-D5QlnZ7v.js";var j=/\s/;function Q(e){for(var s=e.length;s--&&j.test(e.charAt(s)););return s}var X=/^\s+/;function J(e){return e&&e.slice(0,Q(e)+1).replace(X,"")}var B=NaN,K=/^[-+]0x[0-9a-f]+$/i,Y=/^0b[01]+$/i,Z=/^0o[0-7]+$/i,ee=parseInt;function N(e){if(typeof e=="number")return e;if(A(e))return B;if(R(e)){var s=typeof e.valueOf=="function"?e.valueOf():e;e=R(s)?s+"":s}if(typeof e!="string")return e===0?e:+e;e=J(e);var o=Y.test(e);return o||Z.test(e)?ee(e.slice(2),o?2:8):K.test(e)?B:+e}var L=function(){return D.Date.now()},te="Expected a function",re=Math.max,ne=Math.min;function W(e,s,o){var r,i,b,v,t,l,m=0,M=!1,p=!1,g=!0;if(typeof e!="function")throw new TypeError(te);s=N(s)||0,R(o)&&(M=!!o.leading,p="maxWait"in o,b=p?re(N(o.maxWait)||0,s):b,g="trailing"in o?!!o.trailing:g);function O(a){var d=r,C=i;return r=i=void 0,m=a,v=e.apply(C,d),v}function z(a){return m=a,t=setTimeout(f,s),M?O(a):v}function n(a){var d=a-l,C=a-m,$=s-d;return p?ne($,b-C):$}function u(a){var d=a-l,C=a-m;return l===void 0||d>=s||d<0||p&&C>=b}function f(){var a=L();if(u(a))return c(a);t=setTimeout(f,n(a))}function c(a){return t=void 0,g&&r?O(a):(r=i=void 0,v)}function h(){t!==void 0&&clearTimeout(t),m=0,r=l=i=t=void 0}function T(){return t===void 0?v:c(L())}function y(){var a=L(),d=u(a);if(r=arguments,i=this,l=a,d){if(t===void 0)return z(l);if(p)return clearTimeout(t),t=setTimeout(f,s),O(l)}return t===void 0&&(t=setTimeout(f,s)),v}return y.cancel=h,y.flush=T,y}const ie={defense:!0,color:"#c0c4cc",opacity:.5,size:16,family:"serif",angle:-20,width:300,height:200},S=q(document.body);function _(e=S){let s,o,r=null;const i={watermarkElMutationObserver:void 0,parentElMutationObserver:void 0,parentElResizeObserver:void 0},b=(n,u={})=>{if(!e.value)return console.warn("请在 DOM 挂载完成后再调用 setWatermark 方法设置水印");s=n,o={...ie,...u},r?t():v(),p(e.value)},v=()=>{const n=e.value.tagName.toLowerCase()===S.value.tagName.toLowerCase(),u=n?"fixed":"absolute",f=n?"":"relative";r=document.createElement("div"),r.style.pointerEvents="none",r.style.top="0",r.style.left="0",r.style.position=u,r.style.zIndex="99999";const{clientWidth:c,clientHeight:h}=e.value;t({width:c,height:h}),e.value.style.position=f,e.value.appendChild(r)},t=(n={})=>{r&&(s&&(r.style.background=`url(${l()}) left top repeat`),n.width&&(r.style.width=`${n.width}px`),n.height&&(r.style.height=`${n.height}px`))},l=()=>{const{color:n,opacity:u,size:f,family:c,angle:h,width:T,height:y}=o,a=document.createElement("canvas");a.width=T,a.height=y;const d=a.getContext("2d");return d&&(d.fillStyle=n,d.globalAlpha=u,d.font=`${f}px ${c}`,d.rotate(Math.PI/180*h),d.fillText(s,0,y/2)),a.toDataURL()},m=()=>{if(!(!e.value||!r)){g();try{e.value.removeChild(r)}catch{console.warn("水印元素已不存在，请重新创建")}finally{r=null}}},M=W(()=>{m(),v(),p(e.value)},100),p=n=>{o.defense?!i.watermarkElMutationObserver&&!i.parentElMutationObserver&&O(n):g("mutation"),i.parentElResizeObserver||z(n)},g=(n="all")=>{var u,f,c;(n==="mutation"||n==="all")&&((u=i.watermarkElMutationObserver)==null||u.disconnect(),i.watermarkElMutationObserver=void 0,(f=i.parentElMutationObserver)==null||f.disconnect(),i.parentElMutationObserver=void 0),(n==="resize"||n==="all")&&((c=i.parentElResizeObserver)==null||c.disconnect(),i.parentElResizeObserver=void 0)},O=n=>{const u=W(f=>{f.forEach(W(c=>{switch(c.type){case"attributes":c.target===r&&M();break;case"childList":c.removedNodes.forEach(h=>{h===r&&n.appendChild(r)});break}},100))},100);i.watermarkElMutationObserver=new MutationObserver(u),i.parentElMutationObserver=new MutationObserver(u),i.watermarkElMutationObserver.observe(r,{attributes:!0,childList:!1,subtree:!1}),i.parentElMutationObserver.observe(n,{attributes:!1,childList:!0,subtree:!1})},z=n=>{const u=W(()=>{const{clientWidth:f,clientHeight:c}=n;t({width:f,height:c})},500);i.parentElResizeObserver=new ResizeObserver(u),i.parentElResizeObserver.observe(n)};return H(()=>{m()}),{setWatermark:b,clearWatermark:m}}const ae={"un-mt-40px":"","un-flex-x-center":""},se={"un-mt-20px":"","un-flex-x-center":""},de=P({__name:"watermark",setup(e){const s=q(null),{setWatermark:o,clearWatermark:r}=_(s),{setWatermark:i,clearWatermark:b}=_();return(v,t)=>{const l=F;return G(),U("div",null,[k(V,{text:"支持局部、全局、自定义样式，并自带防御和自适应功能"}),I("div",{ref_key:"localRef",ref:s,class:"local","un-mt-40px":"","un-h-35vh":"","un-b-2px":"","un-b-dashed":"","un-b-primary":""},null,512),I("div",ae,[k(l,{type:"primary",size:"small",square:"",onClick:t[0]||(t[0]=m=>E(o)("局部水印",{color:"#409eff",width:200,height:150}))},{default:x(()=>t[4]||(t[4]=[w(" 创建局部水印 ")])),_:1}),k(l,{type:"warning",size:"small",square:"",onClick:t[1]||(t[1]=m=>E(o)("没有防御功能的局部水印",{color:"#e6a23c",defense:!1,width:200,height:150}))},{default:x(()=>t[5]||(t[5]=[w(" 创建无防御局部水印 ")])),_:1}),k(l,{type:"danger",size:"small",square:"",onClick:E(r)},{default:x(()=>t[6]||(t[6]=[w(" 清除局部水印 ")])),_:1},8,["onClick"])]),I("div",se,[k(l,{type:"primary",size:"small",square:"",onClick:t[2]||(t[2]=m=>E(i)("全局水印",{color:"#409eff",width:200,height:150}))},{default:x(()=>t[7]||(t[7]=[w(" 创建全局水印 ")])),_:1}),k(l,{type:"warning",size:"small",square:"",onClick:t[3]||(t[3]=m=>E(i)("没有防御功能的全局水印",{color:"#e6a23c",defense:!1,width:200,height:150}))},{default:x(()=>t[8]||(t[8]=[w(" 创建无防御全局水印 ")])),_:1}),k(l,{type:"danger",size:"small",square:"",onClick:E(b)},{default:x(()=>t[9]||(t[9]=[w(" 清除全局水印 ")])),_:1},8,["onClick"])])])}}});export{de as default};
