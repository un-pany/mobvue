import{C as ye,y as Ie,D as Se,E as xe,G as Ce,h as ke,c as Ve,J as we,A as J,f as Ee,j as x,K as Me,M as Te,p as R,I as B,m as T,N as Le,n as O,e as Ae,F as Pe,O as U,Q as Re,R as Be,w as _e}from"./index-CzdAod8h.js";import{a as Ne,c as Oe}from"./index-DFz41Vhl.js";import{k as ze,s as De,e as Fe,r as _,l as C,w as We,o as $e,n as M,q as d,H as je,x as Y,p as qe}from"./vue-BUcO0Ml9.js";import{u as He}from"./use-expose-CO2L_EpY.js";let Ke=0;function Je(){const e=ze(),{name:n="unknown"}=(e==null?void 0:e.type)||{};return"".concat(n,"-").concat(++Ke)}function X(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function Ue(e,n){if(X(e)){if(n.required)return!1;if(n.validateEmpty===!1)return!0}return!(n.pattern&&!n.pattern.test(String(e)))}function Ye(e,n){return new Promise(l=>{const f=n.validator(e,n);if(Ce(f)){f.then(l);return}l(f)})}function G(e,n){const{message:l}=n;return xe(l)?l(e,n):l||""}function Ge({target:e}){e.composing=!0}function Q({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function Qe(e,n){const l=ye();e.style.height="auto";let f=e.scrollHeight;if(Ie(n)){const{maxHeight:r,minHeight:s}=n;r!==void 0&&(f=Math.min(f,r)),s!==void 0&&(f=Math.max(f,s))}f&&(e.style.height="".concat(f,"px"),Se(l))}function Xe(e,n){return e==="number"&&(e="text",n!=null||(n="decimal")),e==="digit"&&(e="tel",n!=null||(n="numeric")),{type:e,inputmode:n}}function v(e){return[...e].length}function N(e,n){return[...e].slice(0,n).join("")}const[Ze,g]=Ve("field"),pe={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:O,max:Number,min:Number,formatter:Function,clearIcon:T("clear"),modelValue:Le(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,clearTrigger:T("focus"),formatTrigger:T("onChange"),spellcheck:{type:Boolean,default:null},error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null},inputmode:String},et=ke({},Oe,pe,{rows:O,type:T("text"),rules:Array,autosize:[Boolean,Object],labelWidth:O,labelClass:Ae,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var tt=De({name:Ze,props:et,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:n,slots:l}){const f=Je(),r=Fe({status:"unvalidated",focused:!1,validateMessage:""}),s=_(),z=_(),L=_(),{parent:m}=we(Pe),S=()=>{var t;return String((t=e.modelValue)!=null?t:"")},u=t=>{if(x(e[t]))return e[t];if(m&&x(m.props[t]))return m.props[t]},Z=C(()=>{const t=u("readonly");if(e.clearable&&!t){const a=S()!=="",i=e.clearTrigger==="always"||e.clearTrigger==="focus"&&r.focused;return a&&i}return!1}),D=C(()=>L.value&&l.input?L.value():e.modelValue),p=C(()=>{var t;const a=u("required");return a==="auto"?(t=e.rules)==null?void 0:t.some(i=>i.required):a}),ee=t=>t.reduce((a,i)=>a.then(()=>{if(r.status==="failed")return;let{value:o}=D;if(i.formatter&&(o=i.formatter(o,i)),!Ue(o,i)){r.status="failed",r.validateMessage=G(o,i);return}if(i.validator)return X(o)&&i.validateEmpty===!1?void 0:Ye(o,i).then(c=>{c&&typeof c=="string"?(r.status="failed",r.validateMessage=c):c===!1&&(r.status="failed",r.validateMessage=G(o,i))})}),Promise.resolve()),k=()=>{r.status="unvalidated",r.validateMessage=""},F=()=>n("endValidate",{status:r.status,message:r.validateMessage}),W=(t=e.rules)=>new Promise(a=>{k(),t?(n("startValidate"),ee(t).then(()=>{r.status==="failed"?(a({name:e.name,message:r.validateMessage}),F()):(r.status="passed",a(),F())})):a()}),A=t=>{if(m&&e.rules){const{validateTrigger:a}=m.props,i=U(a).includes(t),o=e.rules.filter(c=>c.trigger?U(c.trigger).includes(t):i);o.length&&W(o)}},te=t=>{var a;const{maxlength:i}=e;if(x(i)&&v(t)>+i){const o=S();if(o&&v(o)===+i)return o;const c=(a=s.value)==null?void 0:a.selectionEnd;if(r.focused&&c){const y=[...t],I=y.length-+i;return y.splice(c-I,I),y.join("")}return N(t,+i)}return t},V=(t,a="onChange")=>{var i,o;const c=t;t=te(t);const y=v(c)-v(t);if(e.type==="number"||e.type==="digit"){const b=e.type==="number";if(t=Me(t,b,b),a==="onBlur"&&t!==""&&(e.min!==void 0||e.max!==void 0)){const h=Te(+t,(i=e.min)!=null?i:-1/0,(o=e.max)!=null?o:1/0);+t!==h&&(t=h.toString())}}let I=0;if(e.formatter&&a===e.formatTrigger){const{formatter:b,maxlength:h}=e;if(t=b(t),x(h)&&v(t)>+h&&(t=N(t,+h)),s.value&&r.focused){const{selectionEnd:E}=s.value,K=N(c,E);I=v(b(K))-v(K)}}if(s.value&&s.value.value!==t)if(r.focused){let{selectionStart:b,selectionEnd:h}=s.value;if(s.value.value=t,x(b)&&x(h)){const E=v(t);y?(b-=y,h-=y):I&&(b+=I,h+=I),s.value.setSelectionRange(Math.min(b,E),Math.min(h,E))}}else s.value.value=t;t!==e.modelValue&&n("update:modelValue",t)},ne=t=>{t.target.composing||V(t.target.value)},P=()=>{var t;return(t=s.value)==null?void 0:t.blur()},$=()=>{var t;return(t=s.value)==null?void 0:t.focus()},w=()=>{const t=s.value;e.type==="textarea"&&e.autosize&&t&&Qe(t,e.autosize)},ae=t=>{r.focused=!0,n("focus",t),M(w),u("readonly")&&P()},ie=t=>{r.focused=!1,V(S(),"onBlur"),n("blur",t),!u("readonly")&&(A("onBlur"),M(w),Re())},j=t=>n("clickInput",t),re=t=>n("clickLeftIcon",t),le=t=>n("clickRightIcon",t),oe=t=>{R(t),n("update:modelValue",""),n("clear",t)},q=C(()=>{if(typeof e.error=="boolean")return e.error;if(m&&m.props.showError&&r.status==="failed")return!0}),se=C(()=>{const t=u("labelWidth"),a=u("labelAlign");if(t&&a!=="top")return{width:J(t)}}),ce=t=>{t.keyCode===13&&(!(m&&m.props.submitOnEnter)&&e.type!=="textarea"&&R(t),e.type==="search"&&P()),n("keypress",t)},H=()=>e.id||"".concat(f,"-input"),ue=()=>r.status,de=()=>{const t=g("control",[u("inputAlign"),{error:q.value,custom:!!l.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(l.input)return d("div",{class:t,onClick:j},[l.input()]);const a={id:H(),ref:s,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:u("disabled"),readonly:u("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,autocapitalize:e.autocapitalize,autocorrect:e.autocorrect,enterkeyhint:e.enterkeyhint,spellcheck:e.spellcheck,"aria-labelledby":e.label?"".concat(f,"-label"):void 0,"data-allow-mismatch":"attribute",onBlur:ie,onFocus:ae,onInput:ne,onClick:j,onChange:Q,onKeypress:ce,onCompositionend:Q,onCompositionstart:Ge};return e.type==="textarea"?d("textarea",Y(a,{inputmode:e.inputmode}),null):d("input",Y(Xe(e.type,e.inputmode),a),null)},fe=()=>{const t=l["left-icon"];if(e.leftIcon||t)return d("div",{class:g("left-icon"),onClick:re},[t?t():d(B,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},ge=()=>{const t=l["right-icon"];if(e.rightIcon||t)return d("div",{class:g("right-icon"),onClick:le},[t?t():d(B,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},me=()=>{if(e.showWordLimit&&e.maxlength){const t=v(S());return d("div",{class:g("word-limit")},[d("span",{class:g("word-num")},[t]),je("/"),e.maxlength])}},he=()=>{if(m&&m.props.showErrorMessage===!1)return;const t=e.errorMessage||r.validateMessage;if(t){const a=l["error-message"],i=u("errorMessageAlign");return d("div",{class:g("error-message",i)},[a?a({message:t}):t])}},be=()=>{const t=u("labelWidth"),a=u("labelAlign"),i=u("colon")?":":"";if(l.label)return[l.label(),i];if(e.label)return d("label",{id:"".concat(f,"-label"),for:l.input?void 0:H(),"data-allow-mismatch":"attribute",onClick:o=>{R(o),$()},style:a==="top"&&t?{width:J(t)}:void 0},[e.label+i])},ve=()=>[d("div",{class:g("body")},[de(),Z.value&&d(B,{ref:z,name:e.clearIcon,class:g("clear")},null),ge(),l.button&&d("div",{class:g("button")},[l.button()])]),me(),he()];return He({blur:P,focus:$,validate:W,formValue:D,resetValidation:k,getValidationStatus:ue}),qe(Be,{customValue:L,resetValidation:k,validateWithTrigger:A}),We(()=>e.modelValue,()=>{V(S()),k(),A("onChange"),M(w)}),$e(()=>{V(S(),e.formatTrigger),M(w)}),Ee("touchstart",oe,{target:C(()=>{var t;return(t=z.value)==null?void 0:t.$el})}),()=>{const t=u("disabled"),a=u("labelAlign"),i=fe(),o=()=>{const c=be();return a==="top"?[i,c].filter(Boolean):c||[]};return d(Ne,{size:e.size,class:g({error:q.value,disabled:t,["label-".concat(a)]:a}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:se.value,valueClass:g("value"),titleClass:[g("label",[a,{required:p.value}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:i&&a!=="top"?()=>i:null,title:o,value:ve,extra:l.extra})}}});const lt=_e(tt);export{lt as F};
