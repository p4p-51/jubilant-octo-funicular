"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[517],{5877:function(e,t,a){a.d(t,{Z:function(){return b}});var o=a(3396),i=a(7139);const s={class:"progress-side-bar"},n={class:"modules"},l=["href"],r={class:"sub-modules"},u=["href"];function d(e,t,a,d,c,m){return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("ul",n,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.modules,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.id,class:(0,i.C_)(e.status)},[(0,o._)("a",{href:e.url},(0,i.zw)(e.name),9,l),(0,o._)("ul",r,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.children,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.id,class:(0,i.C_)(e.status)},[(0,o._)("a",{href:e.url},(0,i.zw)(e.name),9,u)],2)))),128))])],2)))),128))])])}var c=a(7182),m=a(9975),f=(0,o.aZ)({name:"ProgressSideBar",props:{},computed:{modules(){return c.H5.progressBar(m.S)}},mounted(){m.S.update(c.x3.pathToModuleStage(this.$route.fullPath))}}),p=a(89);const h=(0,p.Z)(f,[["render",d],["__scopeId","data-v-a18bd0e0"]]);var b=h},8815:function(e,t,a){a.d(t,{Z:function(){return m}});var o=a(3396),i=a(7139);const s={class:"title-block"},n=["innerHTML"],l={key:1};function r(e,t,a,r,u,d){return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("h2",{class:(0,i.C_)({hidden:!e.module})},(0,i.zw)(e.module)+" >",3),(0,o._)("h1",null,(0,i.zw)(e.title),1),(0,o._)("h3",null,(0,i.zw)(e.subtitle),1),null!=this.body?((0,o.wg)(),(0,o.iD)("p",{key:0,innerHTML:this.body},null,8,n)):((0,o.wg)(),(0,o.iD)("p",l,[(0,o.WI)(e.$slots,"default",{},void 0,!0)]))])}var u=(0,o.aZ)({name:"TitleBlock",components:{},props:{module:{type:String},title:{type:String,required:!0},subtitle:{type:String},body:{type:String,default:null}}}),d=a(89);const c=(0,d.Z)(u,[["render",r],["__scopeId","data-v-aaae3608"]]);var m=c},7692:function(e,t,a){a.r(t),a.d(t,{default:function(){return q}});var o=a(3396);const i=e=>((0,o.dD)("data-v-42d63bfc"),e=e(),(0,o.Cn)(),e),s={class:"create-plan-view"},n={class:"content-container"},l=i((()=>(0,o._)("h2",null,"I want to learn about...",-1))),r=i((()=>(0,o._)("p",null," You can pick the topics that you want to learn about, and skip the sections that you already know! ",-1))),u={class:"multiselect-container"};function d(e,t,a,i,d,c){const m=(0,o.up)("title-block"),f=(0,o.up)("module-select");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(m,{title:"Your study plan",subtitle:"Let's make a study plan, just for you!"}),(0,o._)("div",n,[l,r,(0,o._)("div",u,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.modules,((t,a)=>((0,o.wg)(),(0,o.j4)(f,{name:t.name,key:a,isSelected:t.isSelected,onSelect:a=>e.onModuleSelected(t.name)},null,8,["name","isSelected","onSelect"])))),128))])]),(0,o._)("button",{onClick:t[0]||(t[0]=(...t)=>e.goToPlan&&e.goToPlan(...t)),class:"go-button"},"Next")])}var c=a(7139),m=a.p+"img/check.159466c6.svg";const f=e=>((0,o.dD)("data-v-095b02fe"),e=e(),(0,o.Cn)(),e),p=f((()=>(0,o._)("img",{src:m},null,-1))),h=[p];function b(e,t,a,i,s,n){return(0,o.wg)(),(0,o.iD)("div",{class:"module-select",onClick:t[0]||(t[0]=t=>e.$emit("select"))},[(0,o._)("p",null,(0,c.zw)(e.name),1),(0,o._)("button",{class:(0,c.C_)({isSelected:e.isSelected})},h,2)])}var g=(0,o.aZ)({name:"ModuleSelect",props:{name:{type:String,required:!0},isSelected:{type:Boolean,required:!0,default:!1}},components:{}}),v=a(89);const k=(0,v.Z)(g,[["render",b],["__scopeId","data-v-095b02fe"]]);var w=k,S=a(8815),y=(0,o.aZ)({name:"HomeView",components:{TitleBlock:S.Z,ModuleSelect:w},methods:{goToPlan(){this.$router.push("/plan/done")},onModuleSelected(e){this.$data.modules.map((t=>{t.name===e&&(t.isSelected=!t.isSelected)}))}},data(){return{modules:[{name:"Self introduction",isSelected:!1},{name:"Organising past experiences",isSelected:!1},{name:"Structuring responses",isSelected:!1},{name:"Mannerism",isSelected:!1},{name:"Allocating situations",isSelected:!1},{name:"Answering questions",isSelected:!1}]}}});const _=(0,v.Z)(y,[["render",d],["__scopeId","data-v-42d63bfc"]]);var q=_},1705:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var o=a(3396),i=a.p+"img/business-chat.72969209.svg",s=a.p+"img/woman-sitting.32060765.svg",n=a.p+"img/people-font.5b8cd2a1.svg";const l={class:"intro-view"},r=(0,o.uE)('<div class="content-container" data-v-37561eee><h2 data-v-37561eee>Difference between different types of inteviews</h2><div class="comparison-blocks" data-v-37561eee><div class="single-block" data-v-37561eee><img src="'+i+'" data-v-37561eee><h5 data-v-37561eee>Tail fatback shank porchetta prosciutto</h5><p data-v-37561eee> Ham hock cow meatball beef, pork belly burgdoggen jowl brisket kielbasa salami pork chop boudin. </p><ul data-v-37561eee><li data-v-37561eee>Tongue meatloaf bacon boudin ham hock venison</li><li data-v-37561eee> Kevin porchetta ribeye doner shankle burgdoggen fatback meatloaf venison tail pork belly. </li><li data-v-37561eee> Jowl rump andouille short loin kevin, buffalo ham corned beef prosciutto chicken ground round chuck </li></ul></div><div class="single-block" data-v-37561eee><img src="'+s+'" data-v-37561eee><h5 data-v-37561eee>Tail fatback shank porchetta prosciutto</h5><p data-v-37561eee> Ham hock cow meatball beef, pork belly burgdoggen jowl brisket kielbasa salami pork chop boudin. </p><ul data-v-37561eee><li data-v-37561eee>Tongue meatloaf bacon boudin ham hock venison</li><li data-v-37561eee> Kevin porchetta ribeye doner shankle burgdoggen fatback meatloaf venison tail pork belly. </li><li data-v-37561eee> Jowl rump andouille short loin kevin, buffalo ham corned beef prosciutto chicken ground round chuck </li></ul></div><div class="single-block" data-v-37561eee><img src="'+n+'" data-v-37561eee><h5 data-v-37561eee>Tail fatback shank porchetta prosciutto</h5><p data-v-37561eee> Ham hock cow meatball beef, pork belly burgdoggen jowl brisket kielbasa salami pork chop boudin. </p><ul data-v-37561eee><li data-v-37561eee>Tongue meatloaf bacon boudin ham hock venison</li><li data-v-37561eee> Kevin porchetta ribeye doner shankle burgdoggen fatback meatloaf venison tail pork belly. </li><li data-v-37561eee> Jowl rump andouille short loin kevin, buffalo ham corned beef prosciutto chicken ground round chuck </li></ul></div></div></div>',1);function u(e,t,a,i,s,n){const u=(0,o.up)("progress-side-bar"),d=(0,o.up)("title-block");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(u,{modules:e.modules},null,8,["modules"]),(0,o._)("div",l,[(0,o.Wm)(d,{title:"Introduction to Behavioural interviews",subtitle:"We’ve made a study plan tailored just for you based on your preferences! Take a minute to look through the agenda."}),r,(0,o._)("button",{onClick:t[0]||(t[0]=(...t)=>e.goToLect&&e.goToLect(...t)),class:"go-button"},"Gotcha! ->")])],64)}var d=a(5877),c=a(8815),m=(0,o.aZ)({name:"HomeView",components:{TitleBlock:c.Z,ProgressSideBar:d.Z},methods:{goToLect(){this.$router.push("/lecture/prem-quiz")}},data(){return{modules:[{name:"Introduction",id:"fjisaljio",status:"current",url:"#",children:[{name:"Some sort of child",id:"fafwqa",status:"future",url:"#"},{name:"Some sort of child",id:"fafwqa",status:"future",url:"#"},{name:"Some sort of child",id:"fafwqa",status:"future",url:"#"},{name:"Some sort of child",id:"fafwqa",status:"future",url:"#"},{name:"Some sort of child",id:"fafwqa",status:"future",url:"#"}]},{name:"Organising Past Experiences",id:"fsafsafsa",status:"future",url:"/lecture/prem-quiz",children:[{name:"Prelimiary Quiz",id:"fafwqa",status:"future",url:"/lecture/prem-quiz"},{name:"Lecture",id:"fafwqa",status:"future",url:"/lecture"},{name:"Build your own profile",id:"fafwqa",status:"future",url:"/lecture/build-profile"},{name:"Review quiz",id:"fafwqa",status:"future",url:"/lecture/quiz"}]},{name:"Another module here",id:"fjisaljio",status:"future",url:"#",children:[{name:"Some sort of child",id:"fafwqa",status:"future",url:"#"},{name:"Some sort of child",id:"fafwqa",status:"future",url:"#"},{name:"Some sort of child",id:"fafwqa",status:"future",url:"#"},{name:"Some sort of child",id:"fafwqa",status:"future",url:"#"},{name:"Some sort of child",id:"fafwqa",status:"future",url:"#"}]},{name:"Yet another module",id:"fjisaljio",status:"future",url:"#",children:[{name:"Some sort of child",id:"fafwqa",status:"future",url:"#"},{name:"Some sort of child",id:"fafwqa",status:"future",url:"#"},{name:"Some sort of child",id:"fafwqa",status:"future",url:"#"},{name:"Some sort of child",id:"fafwqa",status:"future",url:"#"},{name:"Some sort of child",id:"fafwqa",status:"future",url:"#"}]},{name:"Graduation",id:"dsadasfwqa",status:"future",url:"#"}]}}}),f=a(89);const p=(0,f.Z)(m,[["render",u],["__scopeId","data-v-37561eee"]]);var h=p},8510:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var o=a(3396);const i={class:"study-plan-view"},s={class:"content-container"};function n(e,t,a,n,l,r){const u=(0,o.up)("title-block"),d=(0,o.up)("module-block");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(u,{title:"Study Plan",subtitle:"We’ve made a study plan tailored just for you based on your preferences! Take a minute to look through the agenda."}),(0,o._)("div",s,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.modules,((e,t)=>((0,o.wg)(),(0,o.j4)(d,{key:t,number:t+1,title:e.title,description:e.description,image:e.image},null,8,["number","title","description","image"])))),128))]),(0,o._)("button",{onClick:t[0]||(t[0]=(...t)=>e.goToLecture&&e.goToLecture(...t)),class:"go-button"},"Let's go")])}var l=a(7139);const r={class:"module-block"},u={class:"number"},d={class:"description"},c=["src"];function m(e,t,a,i,s,n){return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",u,(0,l.zw)(e.number),1),(0,o._)("div",d,[(0,o._)("h5",null,(0,l.zw)(e.title),1),(0,o._)("p",null,(0,l.zw)(e.description),1)]),(0,o._)("img",{src:e.image},null,8,c)])}var f=(0,o.aZ)({name:"ModuleBlock",props:{number:{type:Number,required:!0},title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,required:!0}},components:{}}),p=a(89);const h=(0,p.Z)(f,[["render",m],["__scopeId","data-v-b8cfdb8e"]]);var b=h,g=a(8815),v=(0,o.aZ)({name:"HomeView",components:{TitleBlock:g.Z,ModuleBlock:b},methods:{goToLecture(){this.$router.push("/lecture/intro")}},data(){return{modules:[{number:1,title:"Self introduction",description:"This is the first module. It’s a little bit more complicated than the others, but it’s a good start.",image:"@/assets/books.svg"},{number:2,title:"Organising past experiences",description:"This is the second module. It’s a little bit more complicated than the others, but it’s a good start.",image:"@/assets/books.svg"},{number:4,title:"Mannerism",description:"This is the fourth module. It’s a little bit more complicated than the others, but it’s a good start.",image:"@/assets/books.svg"},{number:6,title:"Answering questions",description:"This is the sixth module. It’s a little bit more complicated than the others, but it’s a good start.",image:"@/assets/books.svg"}]}}});const k=(0,p.Z)(v,[["render",n],["__scopeId","data-v-274bfc52"]]);var w=k}}]);
//# sourceMappingURL=study-plan.57a1c66f.js.map