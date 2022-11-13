import{a as m}from"./chunks/tp-slider.vue_vue_type_style_index_0_lang.7fd81983.js";import{d as r,L as b,g as A,o as t,c as l,F as _,H as p,m as h,w as n,e as s,x as C,u as c,b as f,a as e,r as k}from"./app.1c15f0bf.js";const E=r({__name:"base",setup(d){const a=b({tableware:!1,cash:!0,secureTransmission:!1}),o=A([{key:"tableware",label:"\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B \u0441\u0442\u043E\u043B\u043E\u0432\u044B\u0435 \u043F\u0440\u0438\u0431\u043E\u0440\u044B",disabled:!1},{key:"secureTransmission",label:"\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0430\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0430",disabled:!1},{key:"cash",label:"\u041E\u043F\u043B\u0430\u0442\u0430 \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438",disabled:!0}]);return(i,D)=>(t(),l("div",null,[(t(!0),l(_,null,p(o.value,u=>(t(),h(c(m),{key:u.key,modelValue:a[u.key],"onUpdate:modelValue":B=>a[u.key]=B,disabled:u.disabled,name:u.label},{default:n(()=>[s(C(u.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled","name"]))),128))]))}}),F=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),x=e("h1",{id:"radio",tabindex:"-1"},[s("Radio "),e("a",{class:"header-anchor",href:"#radio","aria-hidden":"true"},"#")],-1),v=e("p",null,[s("\u041D\u0430\u0434\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043D\u0430\u0434 "),e("code",null,'<input type="checkbox" />')],-1),y=e("h2",{id:"\u043F\u0440\u0438\u043C\u0435\u0440-\u0440\u0435\u0430n\u0438\u0437\u0430\u0446\u0438\u0438",tabindex:"-1"},[s("\u041F\u0440\u0438\u043C\u0435\u0440 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 "),e("a",{class:"header-anchor",href:"#\u043F\u0440\u0438\u043C\u0435\u0440-\u0440\u0435\u0430n\u0438\u0437\u0430\u0446\u0438\u0438","aria-hidden":"true"},"#")],-1),g=e("p",null,"checkbox/base",-1),N=JSON.parse('{"title":"Radio","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u041F\u0440\u0438\u043C\u0435\u0440 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438","slug":"\u043F\u0440\u0438\u043C\u0435\u0440-\u0440\u0435\u0430n\u0438\u0437\u0430\u0446\u0438\u0438","link":"#\u043F\u0440\u0438\u043C\u0435\u0440-\u0440\u0435\u0430n\u0438\u0437\u0430\u0446\u0438\u0438","children":[]}],"relativePath":"component/checkbox.md"}'),T={name:"component/checkbox.md"},O=r({...T,setup(d){const a=Object.assign({"../examples/checkbox/base.vue":F});return(o,i)=>{const D=k("demo");return t(),l("div",null,[x,v,y,f(D,{demos:c(a),path:"checkbox/base",source:"%3Ctemplate%3E%0A%09%3Cdiv%3E%0A%09%09%3Ctp-checkbox%0A%09%09%09v-for%3D%22item%20in%20items%22%0A%09%09%09%3Akey%3D%22item.key%22%0A%09%09%09v-model%3D%22state%5Bitem.key%5D%22%0A%09%09%09%3Adisabled%3D%22item.disabled%22%0A%09%09%09%3Aname%3D%22item.label%22%0A%09%09%3E%0A%09%09%09%7B%7B%20item.label%20%7D%7D%0A%09%09%3C%2Ftp-checkbox%3E%0A%09%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20reactive%2C%20ref%20%7D%20from%20'vue'%3B%0Aimport%20%7B%20TpCheckbox%20%7D%20from%20'tak-poidet'%3B%0A%0Aconst%20state%20%3D%20reactive(%7B%0A%09tableware%3A%20false%2C%0A%09cash%3A%20true%2C%0A%09secureTransmission%3A%20false%0A%7D)%3B%0Aconst%20items%20%3D%20ref(%5B%0A%09%7B%20key%3A%20'tableware'%2C%20label%3A%20'%D0%9D%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%20%D1%81%D1%82%D0%BE%D0%BB%D0%BE%D0%B2%D1%8B%D0%B5%20%D0%BF%D1%80%D0%B8%D0%B1%D0%BE%D1%80%D1%8B'%2C%20disabled%3A%20false%20%7D%2C%0A%09%7B%20key%3A%20'secureTransmission'%2C%20label%3A%20'%D0%91%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%B0%D1%8F%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B0%D1%87%D0%B0'%2C%20disabled%3A%20false%20%7D%2C%0A%09%7B%20key%3A%20'cash'%2C%20label%3A%20'%D0%9E%D0%BF%D0%BB%D0%B0%D1%82%D0%B0%20%D0%BD%D0%B0%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%BC%D0%B8'%2C%20disabled%3A%20true%20%7D%0A%5D)%3B%0A%3C%2Fscript%3E%0A"},{default:n(()=>[g]),_:1},8,["demos"])])}}});export{N as __pageData,O as default};