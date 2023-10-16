import{e as V}from"./index-807d595f.js";import{_ as x,u as I,U as c,E as B,N as D,C as N,r as g,o as d,c as h,a as p,b as o,w as r,d as u,F as P,e as T,f as R,t as m,g as q,p as E,h as A}from"./index-8bb285e6.js";const M={name:"MainPage",components:{},data(){return{chainStore:I(),searchDomain:"",e:V,u:c,allNSList:[],queryResultList:[],nsDetailDialog:{bVisible:!1,ns:"",tableData:[]},nameDetailDialog:{bVisible:!1,fullName:"",tableData:[]}}},async mounted(){let t=this;this.chainStore.bLoadNSFinish&&t.allNSList.push(...t.chainStore.getOpenRegistrationNamespaceList()),c.registerEventByType("namespaceReady",function(s){t.allNSList.splice(0,t.allNSList.length),t.allNSList.push(...t.chainStore.getOpenRegistrationNamespaceList())})},methods:{async onClickSearch(){if(this.searchDomain=this.searchDomain.toLowerCase(),this.searchDomain.trim().length==0){c.tipError("Please input domain");return}let t=[],s=[];const l=this.searchDomain.trim().split(".");if(l.length==2){if(!l[1]){c.alert("Invalid name");return}if(!l[1].match(/^[a-z]{1}[a-z|0-9|_]{0,31}$/)){c.alert(`Invalid namespace ${l[1]}`);return}if(!this.chainStore.getNamespaceInfo(l[1])){c.alert(`Namespace ${l[1]} hasn't been created`);return}s.push(l[0]),t.push(l[1])}else if(l.length==1){if(!l[0].match(/^[a-z|0-9|_]{1,32}$/)){c.alert("Invalid name");return}for(let i=0;i<this.allNSList.length;i++)s.push(l[0]),t.push(this.allNSList[i])}else{c.tipError("Domain invalid");return}let f=B.service({lock:!0,text:"Querying..",background:"rgba(0, 0, 0, 0.6)"}),a=null;try{a=await D.queryManyNames(t,s)}catch{N.alertRequestFail();return}finally{f.close()}const _=a[0],w=a[1],k=a[2];this.queryResultList.splice(0,this.queryResultList.length);for(let i=0;i<s.length;i++){let n={};if(n.name=s[i],n.ns=t[i],n.fullName=`${s[i]}.${t[i]}`,n.bCanRegister=_[i],n.bCanRegister){n.registerPrice=k[i];const[L,y,S]=D.calcRenewal(t[i],n.registerPrice);n.renewalStr=y}else n.registerPrice=0,n.owner=w[i];const b=this.chainStore.getNamespaceInfo(t[i]);n.bOpenRegistration=b.openStamp>0,this.queryResultList.push(n)}},onClickViewNSDetail(t){this.nsDetailDialog.ns=t;let s=this.nsDetailDialog.tableData;s.splice(0,s.length);let l=D.genNSInfoTableData(t);l&&s.push(...l),this.nsDetailDialog.bVisible=!0},async onClickRegister(t){if(await this.chainStore.requestLogin(),!this.chainStore.address)return;const s=this.chainStore.address,l=await this.chainStore.getNameContract().resolveAddress(s);if(l.bResult){const a=c.bytes32ToStr(l.namespace),_=c.bytes32ToStr(l.name);c.alert(`One address can only own one name, current address already own ${_}.${a}`);return}if((await N.getBalance(s)).lte(t.registerPrice)){c.alert("Balance unenough");return}N.callExternal(async function(a){return await a.register(c.str2Bytes32(t.ns),c.str2Bytes32(t.name),{value:t.registerPrice})},function(a){a.status==1?(c.alert("Register success"),c.postEvent({type:"register",data:{}})):c.alert("Register fail")})},async onClickDetail(t){this.nameDetailDialog.fullName=t.fullName;let s=this.nameDetailDialog.tableData;s.splice(0,s.length),this.chainStore.getNamespaceInfo(t.ns);const l=await D.resolveAddressFull(t.owner,!1),f=D.genNameKVPairTableData(l);s.push(...f),this.nameDetailDialog.bVisible=!0}}},v=t=>(E("data-v-34f9ee69"),t=t(),A(),t),H={id:"main"},O=v(()=>u("div",{id:"subTitle"},"Decentral name",-1)),U={id:"searchArea"},z={id:"searchInput"},F=v(()=>u("span",{style:{"font-weight":"bold","font-size":"16px"}},"Search",-1)),G={id:"nsArea"},K={style:{margin:"10px auto"},class:"sstrong sBlack"},Q={key:0},Z={class:"sstrong sBlack"},j={class:"ggeneric sGrey"},J={key:1},W=v(()=>u("div",{class:"sstrong sGrey"},"Not open registration",-1)),X=[W],Y={key:2},$=v(()=>u("div",{class:"sstrong sGrey"},"Registered",-1)),ee=[$],te={key:3},ae=v(()=>u("div",{class:"sstrong sGrey"},"Unknown reason",-1)),se=[ae],ie={key:0},le={key:1},ne={key:0},oe={key:1},re=["innerHTML"],ce={key:2},de={key:0},he={key:1},ue={key:2},_e=["innerHTML"],me={key:3};function ge(t,s,l,f,a,_){const w=g("el-input"),k=g("router-link"),i=g("el-button"),n=g("el-table-column"),b=g("el-table"),L=g("el-space"),y=g("el-link"),S=g("el-dialog");return d(),h("div",H,[p("   "),O,o(L,{direction:"vertical",alignment:"start"},{default:r(()=>[u("div",U,[u("div",z,[o(w,{id:"inputDomain",modelValue:a.searchDomain,"onUpdate:modelValue":s[0]||(s[0]=e=>a.searchDomain=e),onChange:_.onClickSearch,placeholder:"Search a domain",style:{width:"650px",height:"55px","font-size":"20px"}},null,8,["modelValue","onChange"]),o(k,{id:"beastLink",to:"/tools/name/query-many"},{default:r(()=>[p("Beast Mode")]),_:1})]),o(i,{type:"danger",style:{height:"55px",width:"128px","background-color":"#DE3723"},onClick:_.onClickSearch},{default:r(()=>[F]),_:1},8,["onClick"])]),u("div",G,[(d(!0),h(P,null,T(a.allNSList.length,e=>(d(),R(i,{key:e,class:"ns",type:"",text:"",onClick:C=>_.onClickViewNSDetail(a.allNSList[e-1])},{default:r(()=>[p(m("."+a.allNSList[e-1]),1)]),_:2},1032,["onClick"]))),128))]),a.queryResultList.length>0?(d(),R(b,{key:0,data:a.queryResultList,style:{margin:"50px auto",width:"800px"},"max-height":"600","empty-text":"Empty"},{default:r(()=>[o(n,{label:"Results",width:"180"},{default:r(e=>[u("div",K,m(e.row.fullName),1)]),_:1}),o(n,{label:""},{default:r(e=>[e.row.bCanRegister?(d(),h("div",Q,[u("div",Z,m(a.u.float2Str(a.e.utils.formatEther(e.row.registerPrice)))+" eth",1),u("div",j,m(e.row.renewalStr),1)])):e.row.bOpenRegistration?e.row.owner!=a.e.ZeroAddress?(d(),h("div",Y,ee)):(d(),h("div",te,se)):(d(),h("div",J,X))]),_:1}),o(n,{label:"Action",width:"150"},{default:r(e=>[e.row.bCanRegister?(d(),h("div",ie,[o(i,{type:"primary",style:{width:"120px"},onClick:C=>_.onClickRegister(e.row)},{default:r(()=>[p("Register")]),_:2},1032,["onClick"])])):(d(),h("div",le,[o(i,{type:"info",style:{width:"120px"},onClick:C=>_.onClickDetail(e.row)},{default:r(()=>[p("Detail")]),_:2},1032,["onClick"])]))]),_:1})]),_:1},8,["data"])):q("",!0)]),_:1}),o(S,{modelValue:a.nsDetailDialog.bVisible,"onUpdate:modelValue":s[1]||(s[1]=e=>a.nsDetailDialog.bVisible=e),title:"."+a.nsDetailDialog.ns,width:"800px","align-center":""},{default:r(()=>[o(b,{data:a.nsDetailDialog.tableData,style:{width:"100%"},border:""},{default:r(()=>[o(n,{prop:"name",label:"Name",width:"180"}),o(n,{label:"Content"},{default:r(e=>[e.row.bAddress?(d(),h("div",ne,[o(y,{class:"elink",href:"https://etherscan.io/address/"+e.row.value,target:"_blank"},{default:r(()=>[p(m(e.row.value),1)]),_:2},1032,["href"])])):e.row.bHtml?(d(),h("div",oe,[u("div",{innerHTML:e.row.value},null,8,re)])):(d(),h("div",ce,m(e.row.value),1))]),_:1})]),_:1},8,["data"])]),_:1},8,["modelValue","title"]),o(S,{modelValue:a.nameDetailDialog.bVisible,"onUpdate:modelValue":s[2]||(s[2]=e=>a.nameDetailDialog.bVisible=e),title:a.nameDetailDialog.fullName,width:"800px","align-center":""},{default:r(()=>[o(b,{data:a.nameDetailDialog.tableData,style:{width:"100%",margin:"0px auto"},stripe:"",border:""},{default:r(()=>[o(n,{prop:"name",label:"Name",width:"150",align:"center"}),o(n,{label:"Content"},{default:r(e=>[e.row.bAddress?(d(),h("div",de,[o(y,{class:"elink",href:"https://etherscan.io/address/"+e.row.value,target:"_blank"},{default:r(()=>[p(m(e.row.value),1)]),_:2},1032,["href"])])):e.row.bLink?(d(),h("div",he,[o(y,{class:"elink",href:e.row.value,target:"_blank"},{default:r(()=>[p(m(e.row.value),1)]),_:2},1032,["href"])])):e.row.bHtml?(d(),h("div",ue,[u("div",{innerHTML:e.row.value},null,8,_e)])):(d(),h("div",me,m(e.row.value),1))]),_:1})]),_:1},8,["data"])]),_:1},8,["modelValue","title"])])}const be=x(M,[["render",ge],["__scopeId","data-v-34f9ee69"]]);export{be as default};
