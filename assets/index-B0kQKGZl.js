import{e as O,t as re,n as V,m as M,f as oe,c as U,g as Te,h as Me,i as S,I as P,w as Y,j as Pe,k as _e,s as Be,l as Ae,o as Re,q as De,v as te,x as $e,y as Oe,z as ze,p as j,A as Ne,F as qe,B as ne,C as Fe,D as We,E as je}from"./index-Di9oelxG.js";import{h as ce,q as J,m as o,k as Ge,r as G,j as x,w as He,o as Ke,n as $,C as Ue,s as K,p as Ye,F as Je}from"./vue-CQrddh9_.js";import{u as Qe}from"./use-expose-Bd0QOto_.js";const Xe=()=>{var e;const{scopeId:n}=((e=ce())==null?void 0:e.vnode)||{};return n?{[n]:""}:null};let Ze=0;function pe(){const e=ce(),{name:n="unknown"}=(e==null?void 0:e.type)||{};return`${n}-${++Ze}`}const[et,w]=U("cell"),se={tag:M("div"),icon:String,size:String,title:V,value:V,label:V,center:Boolean,isLink:Boolean,border:re,iconPrefix:String,valueClass:O,labelClass:O,titleClass:O,titleStyle:null,arrowDirection:String,required:{type:[Boolean,String],default:null},clickable:{type:Boolean,default:null}},tt=oe({},se,Me);var nt=J({name:et,props:tt,setup(e,{slots:n}){const r=Te(),d=()=>{if(n.label||S(e.label))return o("div",{class:[w("label"),e.labelClass]},[n.label?n.label():e.label])},i=()=>{var c;if(n.title||S(e.title)){const m=(c=n.title)==null?void 0:c.call(n);return Array.isArray(m)&&m.length===0?void 0:o("div",{class:[w("title"),e.titleClass],style:e.titleStyle},[m||o("span",null,[e.title]),d()])}},s=()=>{const c=n.value||n.default;if(c||S(e.value))return o("div",{class:[w("value"),e.valueClass]},[c?c():o("span",null,[e.value])])},_=()=>{if(n.icon)return n.icon();if(e.icon)return o(P,{name:e.icon,class:w("left-icon"),classPrefix:e.iconPrefix},null)},E=()=>{if(n["right-icon"])return n["right-icon"]();if(e.isLink){const c=e.arrowDirection&&e.arrowDirection!=="right"?`arrow-${e.arrowDirection}`:"arrow";return o(P,{name:c,class:w("right-icon")},null)}};return()=>{var c;const{tag:m,size:f,center:z,border:B,isLink:N,required:q}=e,C=(c=e.clickable)!=null?c:N,L={center:z,required:!!q,clickable:C,borderless:!B};return f&&(L[f]=!!f),o(m,{class:w(L),role:C?"button":void 0,tabindex:C?0:void 0,onClick:r},{default:()=>{var T;return[_(),i(),s(),E(),(T=n.extra)==null?void 0:T.call(n)]}})}}});const at=Y(nt);function ue(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function lt(e,n){if(ue(e)){if(n.required)return!1;if(n.validateEmpty===!1)return!0}return!(n.pattern&&!n.pattern.test(String(e)))}function it(e,n){return new Promise(r=>{const d=n.validator(e,n);if(Re(d)){d.then(r);return}r(d)})}function ae(e,n){const{message:r}=n;return Ae(r)?r(e,n):r||""}function rt({target:e}){e.composing=!0}function le({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function ot(e,n){const r=Pe();e.style.height="auto";let d=e.scrollHeight;if(_e(n)){const{maxHeight:i,minHeight:s}=n;i!==void 0&&(d=Math.min(d,i)),s!==void 0&&(d=Math.max(d,s))}d&&(e.style.height=`${d}px`,Be(r))}function ct(e,n){return e==="number"&&(e="text",n??(n="decimal")),e==="digit"&&(e="tel",n??(n="numeric")),{type:e,inputmode:n}}function y(e){return[...e].length}function H(e,n){return[...e].slice(0,n).join("")}const[st,h]=U("field"),ut={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:V,max:Number,min:Number,formatter:Function,clearIcon:M("clear"),modelValue:Ne(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,clearTrigger:M("focus"),formatTrigger:M("onChange"),spellcheck:{type:Boolean,default:null},error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null},inputmode:String},dt=oe({},se,ut,{rows:V,type:M("text"),rules:Array,autosize:[Boolean,Object],labelWidth:V,labelClass:O,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var ft=J({name:st,props:dt,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:n,slots:r}){const d=pe(),i=Ge({status:"unvalidated",focused:!1,validateMessage:""}),s=G(),_=G(),E=G(),{parent:c}=De(qe),m=()=>{var t;return String((t=e.modelValue)!=null?t:"")},f=t=>{if(S(e[t]))return e[t];if(c&&S(c.props[t]))return c.props[t]},z=x(()=>{const t=f("readonly");if(e.clearable&&!t){const a=m()!=="",l=e.clearTrigger==="always"||e.clearTrigger==="focus"&&i.focused;return a&&l}return!1}),B=x(()=>E.value&&r.input?E.value():e.modelValue),N=x(()=>{var t;const a=f("required");return a==="auto"?(t=e.rules)==null?void 0:t.some(l=>l.required):a}),q=t=>t.reduce((a,l)=>a.then(()=>{if(i.status==="failed")return;let{value:u}=B;if(l.formatter&&(u=l.formatter(u,l)),!lt(u,l)){i.status="failed",i.validateMessage=ae(u,l);return}if(l.validator)return ue(u)&&l.validateEmpty===!1?void 0:it(u,l).then(g=>{g&&typeof g=="string"?(i.status="failed",i.validateMessage=g):g===!1&&(i.status="failed",i.validateMessage=ae(u,l))})}),Promise.resolve()),C=()=>{i.status="unvalidated",i.validateMessage=""},L=()=>n("endValidate",{status:i.status,message:i.validateMessage}),T=(t=e.rules)=>new Promise(a=>{C(),t?(n("startValidate"),q(t).then(()=>{i.status==="failed"?(a({name:e.name,message:i.validateMessage}),L()):(i.status="passed",a(),L())})):a()}),F=t=>{if(c&&e.rules){const{validateTrigger:a}=c.props,l=ne(a).includes(t),u=e.rules.filter(g=>g.trigger?ne(g.trigger).includes(t):l);u.length&&T(u)}},de=t=>{var a;const{maxlength:l}=e;if(S(l)&&y(t)>+l){const u=m();if(u&&y(u)===+l)return u;const g=(a=s.value)==null?void 0:a.selectionEnd;if(i.focused&&g){const I=[...t],k=I.length-+l;return I.splice(g-k,k),I.join("")}return H(t,+l)}return t},A=(t,a="onChange")=>{var l,u;const g=t;t=de(t);const I=y(g)-y(t);if(e.type==="number"||e.type==="digit"){const v=e.type==="number";if(t=Oe(t,v,v),a==="onBlur"&&t!==""&&(e.min!==void 0||e.max!==void 0)){const b=ze(+t,(l=e.min)!=null?l:-1/0,(u=e.max)!=null?u:1/0);+t!==b&&(t=b.toString())}}let k=0;if(e.formatter&&a===e.formatTrigger){const{formatter:v,maxlength:b}=e;if(t=v(t),S(b)&&y(t)>+b&&(t=H(t,+b)),s.value&&i.focused){const{selectionEnd:D}=s.value,ee=H(g,D);k=y(v(ee))-y(ee)}}if(s.value&&s.value.value!==t)if(i.focused){let{selectionStart:v,selectionEnd:b}=s.value;if(s.value.value=t,S(v)&&S(b)){const D=y(t);I?(v-=I,b-=I):k&&(v+=k,b+=k),s.value.setSelectionRange(Math.min(v,D),Math.min(b,D))}}else s.value.value=t;t!==e.modelValue&&n("update:modelValue",t)},fe=t=>{t.target.composing||A(t.target.value)},W=()=>{var t;return(t=s.value)==null?void 0:t.blur()},Q=()=>{var t;return(t=s.value)==null?void 0:t.focus()},R=()=>{const t=s.value;e.type==="textarea"&&e.autosize&&t&&ot(t,e.autosize)},ge=t=>{i.focused=!0,n("focus",t),$(R),f("readonly")&&W()},me=t=>{i.focused=!1,A(m(),"onBlur"),n("blur",t),!f("readonly")&&(F("onBlur"),$(R),Fe())},X=t=>n("clickInput",t),he=t=>n("clickLeftIcon",t),be=t=>n("clickRightIcon",t),ve=t=>{j(t),n("update:modelValue",""),n("clear",t)},Z=x(()=>{if(typeof e.error=="boolean")return e.error;if(c&&c.props.showError&&i.status==="failed")return!0}),ye=x(()=>{const t=f("labelWidth"),a=f("labelAlign");if(t&&a!=="top")return{width:te(t)}}),Se=t=>{t.keyCode===13&&(!(c&&c.props.submitOnEnter)&&e.type!=="textarea"&&j(t),e.type==="search"&&W()),n("keypress",t)},p=()=>e.id||`${d}-input`,Ce=()=>i.status,Ie=()=>{const t=h("control",[f("inputAlign"),{error:Z.value,custom:!!r.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(r.input)return o("div",{class:t,onClick:X},[r.input()]);const a={id:p(),ref:s,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:f("disabled"),readonly:f("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,enterkeyhint:e.enterkeyhint,spellcheck:e.spellcheck,"aria-labelledby":e.label?`${d}-label`:void 0,"data-allow-mismatch":"attribute",onBlur:me,onFocus:ge,onInput:fe,onClick:X,onChange:le,onKeypress:Se,onCompositionend:le,onCompositionstart:rt};return e.type==="textarea"?o("textarea",K(a,{inputmode:e.inputmode}),null):o("input",K(ct(e.type,e.inputmode),a),null)},ke=()=>{const t=r["left-icon"];if(e.leftIcon||t)return o("div",{class:h("left-icon"),onClick:he},[t?t():o(P,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},xe=()=>{const t=r["right-icon"];if(e.rightIcon||t)return o("div",{class:h("right-icon"),onClick:be},[t?t():o(P,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},we=()=>{if(e.showWordLimit&&e.maxlength){const t=y(m());return o("div",{class:h("word-limit")},[o("span",{class:h("word-num")},[t]),Ue("/"),e.maxlength])}},Ve=()=>{if(c&&c.props.showErrorMessage===!1)return;const t=e.errorMessage||i.validateMessage;if(t){const a=r["error-message"],l=f("errorMessageAlign");return o("div",{class:h("error-message",l)},[a?a({message:t}):t])}},Ee=()=>{const t=f("labelWidth"),a=f("labelAlign"),l=f("colon")?":":"";if(r.label)return[r.label(),l];if(e.label)return o("label",{id:`${d}-label`,for:r.input?void 0:p(),"data-allow-mismatch":"attribute",onClick:u=>{j(u),Q()},style:a==="top"&&t?{width:te(t)}:void 0},[e.label+l])},Le=()=>[o("div",{class:h("body")},[Ie(),z.value&&o(P,{ref:_,name:e.clearIcon,class:h("clear")},null),xe(),r.button&&o("div",{class:h("button")},[r.button()])]),we(),Ve()];return Qe({blur:W,focus:Q,validate:T,formValue:B,resetValidation:C,getValidationStatus:Ce}),Ye(We,{customValue:E,resetValidation:C,validateWithTrigger:F}),He(()=>e.modelValue,()=>{A(m()),C(),F("onChange"),$(R)}),Ke(()=>{A(m(),e.formatTrigger),$(R)}),$e("touchstart",ve,{target:x(()=>{var t;return(t=_.value)==null?void 0:t.$el})}),()=>{const t=f("disabled"),a=f("labelAlign"),l=ke(),u=()=>{const g=Ee();return a==="top"?[l,g].filter(Boolean):g||[]};return o(at,{size:e.size,class:h({error:Z.value,disabled:t,[`label-${a}`]:a}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:ye.value,valueClass:h("value"),titleClass:[h("label",[a,{required:N.value}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:l&&a!=="top"?()=>l:null,title:u,value:Le,extra:r.extra})}}});const St=Y(ft),[gt,ie]=U("cell-group"),mt={title:String,inset:Boolean,border:re};var ht=J({name:gt,inheritAttrs:!1,props:mt,setup(e,{slots:n,attrs:r}){const d=()=>{var s;return o("div",K({class:[ie({inset:e.inset}),{[je]:e.border&&!e.inset}]},r,Xe()),[(s=n.default)==null?void 0:s.call(n)])},i=()=>o("div",{class:ie("title",{inset:e.inset})},[n.title?n.title():e.title]);return()=>e.title||n.title?o(Je,null,[i(),d()]):d()}});const Ct=Y(ht);export{Ct as C,St as F};
