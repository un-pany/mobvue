import{e as p,n as A,c as B,u as q,z as F,w as $,h as D,t as J,Z as O,I as j,A as V,J as K,v as L,_ as T,a as E}from"./index-BjVEiZNP.js";import{C as Y,a as Z}from"./index-CXT7qU26.js";import{_ as H}from"./NoticeBar.vue_vue_type_script_setup_true_lang-CBxjLwOI.js";import{s as _,w as M,q as a,r as G,l as f,x as Q,y as W,E as b,i as X,u as S,z as P,R as y,C as R,J as w,U as ee}from"./vue-D1P3Ll_e.js";import"./use-expose-DYQpE_8P.js";const[I,ne]=B("radio-group"),oe={shape:String,disabled:Boolean,iconSize:A,direction:String,modelValue:p,checkedColor:String},U=Symbol(I);var ae=_({name:I,props:oe,emits:["change","update:modelValue"],setup(e,{emit:i,slots:t}){const{linkChildren:d}=q(U),l=n=>i("update:modelValue",n);return M(()=>e.modelValue,n=>i("change",n)),d({props:e,updateValue:l}),F(()=>e.modelValue),()=>{var n;return a("div",{class:ne([e.direction]),role:"radiogroup"},[(n=t.default)==null?void 0:n.call(t)])}}});const te=$(ae),N={name:p,disabled:Boolean,iconSize:A,modelValue:p,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var le=_({props:D({},N,{bem:O(Function),role:String,shape:String,parent:Object,checked:Boolean,bindGroup:J,indeterminate:{type:Boolean,default:null}}),emits:["click","toggle"],setup(e,{emit:i,slots:t}){const d=G(),l=o=>{if(e.parent&&e.bindGroup)return e.parent.props[o]},n=f(()=>{if(e.parent&&e.bindGroup){const o=l("disabled")||e.disabled;if(e.role==="checkbox"){const u=l("modelValue").length,c=l("max"),v=c&&u>=+c;return o||v&&!e.checked}return o}return e.disabled}),h=f(()=>l("direction")),r=f(()=>{const o=e.checkedColor||l("checkedColor");if(o&&e.checked&&!n.value)return{borderColor:o,backgroundColor:o}}),s=f(()=>e.shape||l("shape")||"round"),g=o=>{const{target:u}=o,c=d.value,v=c===u||(c==null?void 0:c.contains(u));!n.value&&(v||!e.labelDisabled)&&i("toggle"),i("click",o)},k=()=>{var o,u;const{bem:c,checked:v,indeterminate:x}=e,C=e.iconSize||l("iconSize");return a("div",{ref:d,class:c("icon",[s.value,{disabled:n.value,checked:v,indeterminate:x}]),style:s.value!=="dot"?{fontSize:V(C)}:{width:V(C),height:V(C),borderColor:(o=r.value)==null?void 0:o.borderColor}},[t.icon?t.icon({checked:v,disabled:n.value}):s.value!=="dot"?a(j,{name:x?"minus":"success",style:r.value},null):a("div",{class:c("icon--dot__icon"),style:{backgroundColor:(u=r.value)==null?void 0:u.backgroundColor}},null)])},m=()=>{const{checked:o}=e;if(t.default)return a("span",{class:e.bem("label",[e.labelPosition,{disabled:n.value}])},[t.default({checked:o,disabled:n.value})])};return()=>{const o=e.labelPosition==="left"?[m(),k()]:[k(),m()];return a("div",{role:e.role,class:e.bem([{disabled:n.value,"label-disabled":e.labelDisabled},h.value]),tabindex:n.value?void 0:0,"aria-checked":e.checked,onClick:g},[o])}}});const ie=D({},N,{shape:String}),[de,re]=B("radio");var ce=_({name:de,props:ie,emits:["update:modelValue"],setup(e,{emit:i,slots:t}){const{parent:d}=K(U),l=()=>(d?d.props.modelValue:e.modelValue)===e.name,n=()=>{d?d.updateValue(e.name):i("update:modelValue",e.name)};return()=>a(le,Q({bem:re,role:"radio",parent:d,checked:l(),onToggle:n},e),L(t,["default","icon"]))}});const se=$(ce);function z(e){if(T(e)&&e.length>0){const{roles:i}=E();return i.some(t=>e.includes(t))}else return console.error("参数必须是一个数组且长度大于 0，参考：checkPermission(['admin', 'editor'])"),!1}const ke=_({__name:"permission",setup(e){const i=E(),t=G(i.roles[0]);function d(l){i.changeRoles(l)}return(l,n)=>{const h=se,r=Z,s=Y,g=te,k=ee("permission");return P(),W("div",null,[a(H,{text:"基于权限指令、权限函数实现的按钮级控制"}),a(g,{modelValue:S(t),"onUpdate:modelValue":n[2]||(n[2]=m=>X(t)?t.value=m:null),onChange:d},{default:b(()=>[a(s,{title:"切换用户",inset:""},{default:b(()=>[a(r,{title:"Admin 用户",onClick:n[0]||(n[0]=m=>t.value="admin")},{"right-icon":b(()=>[a(h,{name:"admin"})]),_:1}),a(r,{title:"Editor 用户",onClick:n[1]||(n[1]=m=>t.value="editor")},{"right-icon":b(()=>[a(h,{name:"editor"})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(s,{title:"权限指令",inset:""},{default:b(()=>[y(a(r,{title:"Admin 可见",value:"Role admin"},null,512),[[k,["admin"]]]),y(a(r,{title:"Admin 或 Editor 可见",value:"Role admin or editor"},null,512),[[k,["admin","editor"]]])]),_:1}),a(s,{title:"权限函数",inset:""},{default:b(()=>[S(z)(["admin"])?(P(),R(r,{key:0,title:"Admin 可见",value:"Role admin"})):w("",!0),S(z)(["admin","editor"])?(P(),R(r,{key:1,title:"Admin 或 Editor 可见",value:"Role admin or editor"})):w("",!0)]),_:1})])}}});export{ke as default};
