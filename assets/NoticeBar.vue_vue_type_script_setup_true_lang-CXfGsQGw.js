import{J as g,c as W,_ as q,o as C,f as D,I as p,$ as E,a0 as v,a1 as _,j as P,w as $}from"./index-1_sBahLJ.js";import{s as R,r as x,j,w as L,Q as M,R as A,q as i,x as J,y as O}from"./vue-D1nMtb7n.js";import{u as Q}from"./use-expose-BKRstzqu.js";const[V,l]=W("notice-bar"),X={text:String,mode:String,color:String,delay:g(1),speed:g(60),leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null}};var z=R({name:V,props:X,emits:["close","replay"],setup(e,{emit:f,slots:a}){let r=0,o=0,h;const d=x(),m=x(),t=j({show:!0,offset:0,duration:0}),y=()=>{if(a["left-icon"])return a["left-icon"]();if(e.leftIcon)return i(p,{class:l("left-icon"),name:e.leftIcon},null)},I=()=>{if(e.mode==="closeable")return"cross";if(e.mode==="link")return"arrow"},k=n=>{e.mode==="closeable"&&(t.show=!1,f("close",n))},B=()=>{if(a["right-icon"])return a["right-icon"]();const n=I();if(n)return i(p,{name:n,class:l("right-icon"),onClick:k},null)},N=()=>{t.offset=r,t.duration=0,E(()=>{v(()=>{t.offset=-o,t.duration=(o+r)/+e.speed,f("replay")})})},S=()=>{const n=e.scrollable===!1&&!e.wrapable,c={transform:t.offset?`translateX(${t.offset}px)`:"",transitionDuration:`${t.duration}s`};return i("div",{ref:d,role:"marquee",class:l("wrap")},[i("div",{ref:m,style:c,class:[l("content"),{"van-ellipsis":n}],onTransitionend:N},[a.default?a.default():e.text])])},s=()=>{const{delay:n,speed:c,scrollable:u}=e,T=P(n)?+n*1e3:0;r=0,o=0,t.offset=0,t.duration=0,clearTimeout(h),h=setTimeout(()=>{if(!d.value||!m.value||u===!1)return;const w=_(d).width,b=_(m).width;(u||b>w)&&v(()=>{r=w,o=b,t.offset=-o,t.duration=o/+c})},T)};return q(s),C(s),D("pageshow",s),Q({reset:s}),L(()=>[e.text,e.scrollable],s),()=>{const{color:n,wrapable:c,background:u}=e;return M(i("div",{role:"alert",class:l({wrapable:c}),style:{color:n,background:u}},[y(),S(),B()]),[[A,t.show]])}}});const F=$(z),U=R({__name:"NoticeBar",props:{text:{}},setup(e){const f=e;return(a,r)=>{const o=F;return O(),J(o,{color:"var(--mobvue-primary-color)",background:"#ecf9ff","left-icon":"bulb-o",text:f.text},null,8,["text"])}}});export{U as _};
