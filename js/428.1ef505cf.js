"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[428],{242:function(e,n,s){s.d(n,{Z:function(){return xe}});var t=s(3396),i=s(7139);const r={class:"add-question-response"};function o(e,n,s,o,a,l){const c=(0,t.up)("loading"),d=(0,t.up)("collapsible-responses"),p=(0,t.up)("experience-select"),u=(0,t.up)("response-inputs");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(c,{active:e.isLoading,"onUpdate:active":n[0]||(n[0]=n=>e.isLoading=n)},null,8,["active"]),(0,t._)("div",r,[(0,t._)("h2",null,(0,i.zw)(e.question.questionText),1),!1===e.editMode&&e.question.answerCount>0?((0,t.wg)(),(0,t.j4)(d,{key:0,answers:e.getAnswers(),onNewResponse:e.createNewResponse,onEdit:e.editResponse,onDelete:e.deleteResponse},null,8,["answers","onNewResponse","onEdit","onDelete"])):null===e.selectedExperienceId?((0,t.wg)(),(0,t.j4)(p,{key:1,initialExperiences:e.emptyExperiences,onOnExperienceClick:e.onExperienceClick,onSaveExperience:e.saveExperience},null,8,["initialExperiences","onOnExperienceClick","onSaveExperience"])):((0,t.wg)(),(0,t.j4)(u,{key:2,experience:e.getSelectedQuestion(e.selectedExperienceId),questionId:e.question.questionId,"current-answer":e.currentAnswer(e.selectedExperienceId),onSavedAnswer:e.savedAnswer},null,8,["experience","questionId","current-answer","onSavedAnswer"]))])],64)}var a=s(6537);const l=e=>((0,t.dD)("data-v-5df375c5"),e=e(),(0,t.Cn)(),e),c={class:"experience-selection"},d=l((()=>(0,t._)("h5",null,"Your relevant experiences:",-1))),p=["onClick"];function u(e,n,s,r,o,a){const l=(0,t.up)("loading"),u=(0,t.up)("experience-modal");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(l,{active:e.isLoading,"onUpdate:active":n[0]||(n[0]=n=>e.isLoading=n)},null,8,["active"]),(0,t._)("div",c,[d,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.experiences,(n=>((0,t.wg)(),(0,t.iD)("div",{class:"option",key:n.experienceId,onClick:s=>e.$emit("onExperienceClick",n.experienceId)},[(0,t._)("p",null,(0,i.zw)(n.name),1)],8,p)))),128)),(0,t._)("p",{onClick:n[1]||(n[1]=(...n)=>e.addNewExperience&&e.addNewExperience(...n))},"I want to talk about a different experience")]),e.isModalOpen?((0,t.wg)(),(0,t.j4)(u,{key:0,onCancelExp:n[2]||(n[2]=n=>e.isModalOpen=!1),onSaveExperience:e.saveExperience,labels:e.labels},null,8,["onSaveExperience","labels"])):(0,t.kq)("",!0)],64)}var h=s(4462),w=s(3752),v=s.n(w),x=(0,t.aZ)({name:"ExperienceSelect",components:{ExperienceModal:h.Z,Loading:v()},async mounted(){this.isLoading=!0;const[e,n]=await(0,a.g7)();e&&alert("Error"),this.labels=n,this.isLoading=!1},data(){return{isModalOpen:!1,selectedExperience:null,labels:[],isLoading:!1}},methods:{selectExperience(e,n){this.selectedExperience=n,this.isModalOpen=!0},addNewExperience(){this.selectedExperience=null,this.isModalOpen=!0},async saveExperience(e){this.isLoading=!0;const[n,s]=await(0,a.MJ)(e);n?alert("Cannot create new experience"):(e.experienceId=s.experienceId,this.$emit("saveExperience",e)),this.isModalOpen=!1,this.isLoading=!1}},computed:{experiences(){return this.initialExperiences}},props:{initialExperiences:{type:Array,required:!0}}}),m=s(89);const _=(0,m.Z)(x,[["render",u],["__scopeId","data-v-5df375c5"]]);var g=_;const f=e=>((0,t.dD)("data-v-5cd75ce7"),e=e(),(0,t.Cn)(),e),E={class:"collapsible-responses"},b=f((()=>(0,t._)("h5",null,"My responses",-1)));function C(e,n,s,i,r,o){const a=(0,t.up)("collapsible-response");return(0,t.wg)(),(0,t.iD)("div",E,[b,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.answers,((e,n)=>((0,t.wg)(),(0,t.j4)(a,{key:n,response:e,onEdit:n=>this.$emit("edit",e),onDelete:n=>this.$emit("delete",e)},null,8,["response","onEdit","onDelete"])))),128)),(0,t._)("button",{class:"add-response",onClick:n[0]||(n[0]=n=>e.$emit("newResponse"))}," + Add a new response ")])}var y=s.p+"img/chevron-left.7729fd35.svg",k=s.p+"img/edit.d4f09357.svg",I=s(2539);const q=e=>((0,t.dD)("data-v-6627f1da"),e=e(),(0,t.Cn)(),e),A={class:"collapsible-response"},S=q((()=>(0,t._)("p",{class:"star-title"},[(0,t._)("b",null,"S"),(0,t.Uk)("ituation")],-1))),D={class:"star-content"},R=q((()=>(0,t._)("p",{class:"star-title"},[(0,t._)("b",null,"T"),(0,t.Uk)("ask")],-1))),L={class:"star-content"},O=q((()=>(0,t._)("p",{class:"star-title"},[(0,t._)("b",null,"A"),(0,t.Uk)("ction")],-1))),Z={class:"star-content"},M=q((()=>(0,t._)("p",{class:"star-title"},[(0,t._)("b",null,"R"),(0,t.Uk)("esult")],-1))),U={class:"star-content"},z={class:"buttons-container"},$=q((()=>(0,t._)("img",{class:"edit",src:k},null,-1))),N=[$],j=q((()=>(0,t._)("img",{class:"delete",src:I},null,-1))),Y=[j];function T(e,n,s,r,o,a){const l=(0,t.up)("confirmation-popup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",A,[(0,t._)("div",{class:"header",onClick:n[0]||(n[0]=n=>e.isOpen=!e.isOpen)},[(0,t._)("h6",null,(0,i.zw)(e.response.experience.name),1),(0,t._)("img",{src:y,class:(0,i.C_)({isOpen:e.isOpen})},null,2)]),(0,t._)("div",{class:(0,i.C_)([{hidden:!e.isOpen},"content"])},[S,(0,t._)("p",D,(0,i.zw)(e.response.answer.s),1),R,(0,t._)("p",L,(0,i.zw)(e.response.answer.t),1),O,(0,t._)("p",Z,(0,i.zw)(e.response.answer.a),1),M,(0,t._)("p",U,(0,i.zw)(e.response.answer.r),1),(0,t._)("div",z,[(0,t._)("button",{onClick:n[1]||(n[1]=e=>this.$emit("edit"))},N),(0,t._)("button",{onClick:n[2]||(n[2]=n=>e.promptConfirmation())},Y)])],2)]),e.isConfirming?((0,t.wg)(),(0,t.j4)(l,{key:0,onYes:n[3]||(n[3]=n=>e.confirmDelete()),onNo:n[4]||(n[4]=n=>e.cancelDelete())})):(0,t.kq)("",!0)],64)}const H={class:"modal"},Q={class:"popup"};function V(e,n,s,r,o,a){return(0,t.wg)(),(0,t.iD)("div",H,[(0,t._)("div",Q,[(0,t._)("h3",null,(0,i.zw)(e.text),1),(0,t._)("div",{class:(0,i.C_)(["buttons",{reverse:e.reverseEmphasis}])},[(0,t._)("button",{class:"no",onClick:n[0]||(n[0]=e=>this.$emit("no"))},(0,i.zw)(e.noText),1),(0,t._)("button",{class:"yes",onClick:n[1]||(n[1]=e=>this.$emit("yes"))},(0,i.zw)(e.yesText),1)],2)])])}var B=(0,t.aZ)({name:"ConfirmationPopup",methods:{},props:{text:{type:String,default:"Are you sure you want to perform this action?"},reverseEmphasis:{type:Boolean,default:!1},yesText:{type:String,default:"Yes"},noText:{type:String,default:"No"}}});const K=(0,m.Z)(B,[["render",V],["__scopeId","data-v-2c6832d8"]]);var W=K,J=(0,t.aZ)({name:"CollapsibleResponse",components:{ConfirmationPopup:W},data(){return{isOpen:!1,isConfirming:!1}},methods:{promptConfirmation(){this.isConfirming=!0},confirmDelete(){this.isOpen=!1,this.$emit("delete",this.response),this.isConfirming=!1},cancelDelete(){this.isConfirming=!1}},props:{response:{type:Object,required:!0}}});const P=(0,m.Z)(J,[["render",T],["__scopeId","data-v-6627f1da"]]);var F=P,G=(0,t.aZ)({name:"CollapsibleResponses",components:{CollapsibleResponse:F},data(){return{}},props:{answers:{type:Array,required:!0}}});const X=(0,m.Z)(G,[["render",C],["__scopeId","data-v-5cd75ce7"]]);var ee=X,ne=s(9242);const se=e=>((0,t.dD)("data-v-ebf8d556"),e=e(),(0,t.Cn)(),e),te={class:"response-inputs"},ie=(0,t.Uk)(" Let me tell you about: "),re={class:"inputs"},oe=se((()=>(0,t._)("p",{class:"title"},[(0,t._)("b",null,"S"),(0,t.Uk)("ituation")],-1))),ae=se((()=>(0,t._)("p",{class:"title"},[(0,t._)("b",null,"T"),(0,t.Uk)("ask")],-1))),le=se((()=>(0,t._)("p",{class:"title"},[(0,t._)("b",null,"A"),(0,t.Uk)("ction")],-1))),ce=se((()=>(0,t._)("p",{class:"title"},[(0,t._)("b",null,"R"),(0,t.Uk)("esult")],-1)));function de(e,n,s,r,o,a){const l=(0,t.up)("loading");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(l,{active:e.isLoading,"onUpdate:active":n[0]||(n[0]=n=>e.isLoading=n)},null,8,["active"]),(0,t._)("div",te,[(0,t._)("h5",null,[ie,(0,t._)("span",null,(0,i.zw)(e.experience.name),1)]),(0,t._)("div",re,[oe,(0,t.wy)((0,t._)("textarea",{"onUpdate:modelValue":n[1]||(n[1]=n=>e.s=n)},null,512),[[ne.nr,e.s]]),ae,(0,t.wy)((0,t._)("textarea",{"onUpdate:modelValue":n[2]||(n[2]=n=>e.t=n)},null,512),[[ne.nr,e.t]]),le,(0,t.wy)((0,t._)("textarea",{"onUpdate:modelValue":n[3]||(n[3]=n=>e.a=n)},null,512),[[ne.nr,e.a]]),ce,(0,t.wy)((0,t._)("textarea",{"onUpdate:modelValue":n[4]||(n[4]=n=>e.r=n)},null,512),[[ne.nr,e.r]])]),(0,t._)("button",{onClick:n[5]||(n[5]=(...n)=>e.SaveAnswer&&e.SaveAnswer(...n))},(0,i.zw)(e.saveOrEdit),1)])],64)}var pe=(0,t.aZ)({name:"ResponseInputs",components:{Loading:v()},computed:{saveOrEdit(){return this.isEdit?"Edit":"Save"},isEdit(){return!!this.currentAnswer}},methods:{async SaveAnswer(){this.isLoading=!0;const e={experienceId:this.experience.experienceId,answer:{s:this.s,t:this.t,a:this.a,r:this.r}},[n,s]=await(0,a.tn)(this.questionId,e);n?alert("cannot save answer"):this.$emit("savedAnswer",{...e,questionId:this.questionId},this.isEdit),this.isLoading=!1}},data(){return{s:"",t:"",a:"",r:"",isLoading:!1}},mounted(){this.currentAnswer&&(this.s=this.currentAnswer.answer.s,this.t=this.currentAnswer.answer.t,this.a=this.currentAnswer.answer.a,this.r=this.currentAnswer.answer.r)},props:{experience:{type:Object,required:!0},questionId:{type:Number,required:!0},currentAnswer:{type:Object,required:!1}}});const ue=(0,m.Z)(pe,[["render",de],["__scopeId","data-v-ebf8d556"]]);var he=ue,we=(0,t.aZ)({name:"AddQuestionResponse",components:{ExperienceSelect:g,CollapsibleResponses:ee,ResponseInputs:he,Loading:v()},computed:{emptyExperiences(){return console.log("anythingv"),this.question.experiences.filter((e=>{let n=!1;return this.question.answers?.forEach((s=>{s.experienceId==e.experienceId&&(n=!0)})),!n}))}},methods:{async saveExperience(e){this.isLoading=!0;const[n,s]=await(0,a.MJ)(e);n?alert("Cannot create new experience"):(e.experienceId=s.experienceId,this.question.experiences.push(e)),this.isLoading=!1},deleteResponse(e){this.$emit("deleteResponse",e)},onExperienceClick(e){return console.log("this should be id",e),this.selectedExperienceId=e},editResponse(e){this.editMode=!0,this.selectedExperienceId=e.experience.experienceId},getSelectedQuestion(e){return console.log("getSelected question id",e),console.log("getSelected question exp",this.question.experiences),this.question.experiences.find((n=>n.experienceId==e))},getAnswers(){return this.question.answers.map((e=>{const n=this.question.experiences.find((n=>n.experienceId==e.experienceId));return{...e,experience:n}}))},currentAnswer(e){return this.question.answers?.find((n=>n.experienceId==e))},createNewResponse(){this.editMode=!0},savedAnswer(e,n){this.editMode=!1,this.selectedExperienceId=null,this.$emit("saveResponse",e,n)}},data(){return{selectedExperienceId:null,editMode:!1,question:this.initialQuestion,isLoading:!1}},props:{initialQuestion:{type:Object,required:!0}}});const ve=(0,m.Z)(we,[["render",o],["__scopeId","data-v-3e6892dd"]]);var xe=ve},3270:function(e,n,s){s.d(n,{Z:function(){return u}});var t=s(3396),i=s.p+"img/magnify.89f28deb.svg";const r=e=>((0,t.dD)("data-v-73975f14"),e=e(),(0,t.Cn)(),e),o={class:"qb-search-bar"},a=r((()=>(0,t._)("img",{src:i},null,-1)));function l(e,n){return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("input",{placeholder:"Conflicts",onKeydown:n[0]||(n[0]=n=>e.$emit("onChange",n.target.value))},null,32),a])}var c=s(89);const d={},p=(0,c.Z)(d,[["render",l],["__scopeId","data-v-73975f14"]]);var u=p},5782:function(e,n,s){s.d(n,{Z:function(){return c}});var t=s(3396),i=s(7139);function r(e,n,s,r,o,a){return(0,t.wg)(),(0,t.iD)("div",{class:(0,i.C_)(["qb-sidebar-question",{isSelected:e.isSelected}]),onClick:n[0]||(n[0]=n=>e.$emit("onQuestionClick",e.id))},[(0,t._)("p",null,(0,i.zw)(e.title),1),(0,t._)("div",{class:(0,i.C_)(["number",{highlight:e.numResponses>0}])},[(0,t._)("p",null,(0,i.zw)(e.numResponses),1)],2)],2)}var o=(0,t.aZ)({name:"ModuleBlock",props:{numResponses:{type:Number,required:!0},title:{type:String,required:!0},id:{type:Number,required:!0},isSelected:{type:Boolean,required:!1,default:!1}},components:{}}),a=s(89);const l=(0,a.Z)(o,[["render",r],["__scopeId","data-v-fbf87f98"]]);var c=l}}]);
//# sourceMappingURL=428.1ef505cf.js.map