import{e as C,c as E,x as g,E as W,G as q,o as D,I as p,H as v,J as x,i as M,K as P,w as L}from"./index-BaM9OYZz.js";import{g as $,q as I,r as _,k as A,w as G,M as H,N as J,m as l,v as K,x as O}from"./vue-d1Hrfj2O.js";function V(e){const a=$();a&&C(a.proxy,e)}const[X,f]=E("notice-bar"),j={text:String,mode:String,color:String,delay:g(1),speed:g(60),leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null}};var z=I({name:X,props:j,emits:["close","replay"],setup(e,{emit:a,slots:r}){let s=0,o=0,h;const d=_(),m=_(),t=A({show:!0,offset:0,duration:0}),k=()=>{if(r["left-icon"])return r["left-icon"]();if(e.leftIcon)return l(p,{class:f("left-icon"),name:e.leftIcon},null)},y=()=>{if(e.mode==="closeable")return"cross";if(e.mode==="link")return"arrow"},R=n=>{e.mode==="closeable"&&(t.show=!1,a("close",n))},B=()=>{if(r["right-icon"])return r["right-icon"]();const n=y();if(n)return l(p,{name:n,class:f("right-icon"),onClick:R},null)},N=()=>{t.offset=s,t.duration=0,P(()=>{x(()=>{t.offset=-o,t.duration=(o+s)/+e.speed,a("replay")})})},S=()=>{const n=e.scrollable===!1&&!e.wrapable,i={transform:t.offset?`translateX(${t.offset}px)`:"",transitionDuration:`${t.duration}s`};return l("div",{ref:d,role:"marquee",class:f("wrap")},[l("div",{ref:m,style:i,class:[f("content"),{"van-ellipsis":n}],onTransitionend:N},[r.default?r.default():e.text])])},c=()=>{const{delay:n,speed:i,scrollable:u}=e,T=M(n)?+n*1e3:0;s=0,o=0,t.offset=0,t.duration=0,clearTimeout(h),h=setTimeout(()=>{if(!d.value||!m.value||u===!1)return;const w=v(d).width,b=v(m).width;(u||b>w)&&x(()=>{s=w,o=b,t.offset=-o,t.duration=o/+i})},T)};return W(c),q(c),D("pageshow",c),V({reset:c}),G(()=>[e.text,e.scrollable],c),()=>{const{color:n,wrapable:i,background:u}=e;return H(l("div",{role:"alert",class:f({wrapable:i}),style:{color:n,background:u}},[k(),S(),B()]),[[J,t.show]])}}});const F=L(z),Y=I({__name:"NoticeBar",props:{text:{}},setup(e){const a=e;return(r,s)=>{const o=F;return O(),K(o,{color:"var(--mobvue-primary-color)",background:"#ecf9ff","left-icon":"bulb-o",text:a.text},null,8,["text"])}}});export{Y as _,V as u};
