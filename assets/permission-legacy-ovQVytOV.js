System.register(["./index-legacy-CK97RGT-.js","./index-legacy-Cev37zXJ.js","./index-legacy-DqRhgpM4.js","./NoticeBar.vue_vue_type_script_setup_true_lang-legacy-tZ8wwu-t.js","./vue-legacy-DezzmnhY.js","./use-expose-legacy-BV5XmvZb.js"],(function(e,t){"use strict";var i,n,l,a,o,r,d,u,s,m,c,_,g,v,y,f,p,h,j;return{setters:[e=>{i=e.Z,n=e.a},e=>{l=e.R,a=e.a},e=>{o=e.C,r=e.a},e=>{d=e._},e=>{u=e.s,s=e.r,m=e.y,c=e.q,_=e.E,g=e.i,v=e.u,y=e.z,f=e.R,p=e.C,h=e.J,j=e.U},null],execute:function(){function t(e){if(i(e)&&e.length>0){const{roles:t}=n();return t.some((t=>e.includes(t)))}return console.error("参数必须是一个数组且长度大于 0，参考：checkPermission(['admin', 'editor'])"),!1}e("default",u({__name:"permission",setup(e){const i=n(),u=s(i.roles[0]);function R(e){i.changeRoles(e)}return(e,i)=>{const n=a,s=r,x=o,k=l,A=j("permission");return y(),m("div",null,[c(d,{text:"基于权限指令、权限函数实现的按钮级控制"}),c(k,{modelValue:v(u),"onUpdate:modelValue":i[2]||(i[2]=e=>g(u)?u.value=e:null),onChange:R},{default:_((()=>[c(x,{title:"切换用户",inset:""},{default:_((()=>[c(s,{title:"Admin 用户",onClick:i[0]||(i[0]=e=>u.value="admin")},{"right-icon":_((()=>[c(n,{name:"admin"})])),_:1}),c(s,{title:"Editor 用户",onClick:i[1]||(i[1]=e=>u.value="editor")},{"right-icon":_((()=>[c(n,{name:"editor"})])),_:1})])),_:1})])),_:1},8,["modelValue"]),c(x,{title:"权限指令",inset:""},{default:_((()=>[f(c(s,{title:"Admin 可见",value:"Role admin"},null,512),[[A,["admin"]]]),f(c(s,{title:"Admin 或 Editor 可见",value:"Role admin or editor"},null,512),[[A,["admin","editor"]]])])),_:1}),c(x,{title:"权限函数",inset:""},{default:_((()=>[v(t)(["admin"])?(y(),p(s,{key:0,title:"Admin 可见",value:"Role admin"})):h("",!0),v(t)(["admin","editor"])?(y(),p(s,{key:1,title:"Admin 或 Editor 可见",value:"Role admin or editor"})):h("",!0)])),_:1})])}}}))}}}));
