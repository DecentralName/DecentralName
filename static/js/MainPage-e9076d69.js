import{e as V}from"./index-d571a4cb.js";import{_ as x,u as I,U as c,E as B,N as b,C as N,r as g,o as d,c as u,a as p,b as n,w as r,d as h,F as P,e as T,f as R,t as m,g as q,p as E,h as A}from"./index-c4c8f946.js";const H={name:"MainPage",components:{},data(){return{chainStore:I(),searchDomain:"",e:V,u:c,allNSList:[],queryResultList:[],nsDetailDialog:{bVisible:!1,ns:"",tableData:[]},nameDetailDialog:{bVisible:!1,fullName:"",tableData:[]}}},async mounted(){let t=this;this.chainStore.bLoadNSFinish&&t.allNSList.push(...t.chainStore.getOpenRegistrationNamespaceList()),c.registerEventByType("namespaceReady",function(s){t.allNSList.splice(0,t.allNSList.length),t.allNSList.push(...t.chainStore.getOpenRegistrationNamespaceList())})},methods:{async onClickSearch(){if(this.searchDomain=this.searchDomain.toLowerCase(),this.searchDomain.trim().length==0){c.tipError("Please input domain");return}let t=[],s=[];const i=this.searchDomain.trim().split(".");if(i.length==2){if(!i[1]){c.alert("Invalid name");return}if(!i[1].match(/^[a-z]{1}[a-z|0-9|_]{0,31}$/)){c.alert(`Invalid namespace ${i[1]}`);return}if(!this.chainStore.getNamespaceInfo(i[1])){c.alert(`Namespace ${i[1]} hasn't been created`);return}s.push(i[0]),t.push(i[1])}else if(i.length==1){if(!i[0].match(/^[a-z|0-9|_]{1,32}$/)){c.alert("Invalid name");return}for(let o=0;o<this.allNSList.length;o++)s.push(i[0]),t.push(this.allNSList[o])}else{c.tipError("Domain invalid");return}let y=B.service({lock:!0,text:"Querying..",background:"rgba(0, 0, 0, 0.6)"}),a=null;try{a=await b.queryManyNames(t,s)}catch{N.alertRequestFail();return}finally{y.close()}const _=a[0],k=a[1],f=a[2];this.queryResultList.splice(0,this.queryResultList.length);for(let o=0;o<s.length;o++){let l={};if(l.name=s[o],l.ns=t[o],l.fullName=`${s[o]}.${t[o]}`,l.bCanRegister=_[o],l.bCanRegister){l.registerPrice=f[o];const[L,D,S]=b.calcRenewal(t[o],l.registerPrice);l.renewalStr=D}else l.registerPrice=0,l.owner=k[o];const v=this.chainStore.getNamespaceInfo(t[o]);l.bOpenRegistration=v.openStamp>0,this.queryResultList.push(l)}},onClickViewNSDetail(t){this.nsDetailDialog.ns=t;let s=this.nsDetailDialog.tableData;s.splice(0,s.length);let i=b.genNSInfoTableData(t);i&&s.push(...i),this.nsDetailDialog.bVisible=!0},async onClickRegister(t){if(await this.chainStore.requestLogin(),!this.chainStore.address)return;const s=this.chainStore.address,i=await this.chainStore.getNameContract().resolveAddress(s);if(i.bResult){const a=c.bytes32ToStr(i.namespace),_=c.bytes32ToStr(i.name);c.alert(`One address can only own one name, current address already own ${_}.${a}`);return}if((await N.getBalance(s)).lte(t.registerPrice)){c.alert("Balance unenough");return}N.callExternal(async function(a){return await a.register(c.str2Bytes32(t.ns),c.str2Bytes32(t.name),{value:t.registerPrice})},function(a){a.status==1?(c.alert("Register success"),c.postEvent({type:"register",data:{}})):c.alert("Register fail")})},async onClickDetail(t){this.nameDetailDialog.fullName=t.fullName;let s=this.nameDetailDialog.tableData;s.splice(0,s.length);const i=this.chainStore.getNamespaceInfo(t.ns),y=await b.resolveAddressFull(t.owner,!1),a=b.genNameKVPairTableData(y);s.push(...a),s.push({name:"Namespace desc",value:b.getNamespaceDesc(t.ns,i.desc),bHtml:!0}),s.push({name:"Namespace admin",value:i.admin,bAddress:!0}),this.nameDetailDialog.bVisible=!0}}},w=t=>(E("data-v-0e321470"),t=t(),A(),t),M={id:"main"},O=w(()=>h("div",{id:"subTitle"},"Decentral name",-1)),U={id:"searchArea"},z=w(()=>h("span",{style:{"font-weight":"bold","font-size":"16px"}},"Search",-1)),F={id:"nsArea"},G={style:{margin:"10px auto"},class:"sstrong sBlack"},K={key:0},Q={class:"sstrong sBlack"},Z={class:"ggeneric sGrey"},j={key:1},J=w(()=>h("div",{class:"sstrong sGrey"},"Not open registration",-1)),W=[J],X={key:2},Y=w(()=>h("div",{class:"sstrong sGrey"},"Registered",-1)),$=[Y],ee={key:3},te=w(()=>h("div",{class:"sstrong sGrey"},"Unknown reason",-1)),ae=[te],se={key:0},ie={key:1},le={key:0},ne={key:1},oe=["innerHTML"],re={key:2},ce={key:0},de={key:1},ue={key:2},he=["innerHTML"],_e={key:3};function me(t,s,i,y,a,_){const k=g("el-input"),f=g("el-button"),o=g("router-link"),l=g("el-table-column"),v=g("el-table"),L=g("el-space"),D=g("el-link"),S=g("el-dialog");return d(),u("div",M,[p("   "),O,n(L,{direction:"vertical",alignment:"start"},{default:r(()=>[h("div",U,[n(k,{modelValue:a.searchDomain,"onUpdate:modelValue":s[0]||(s[0]=e=>a.searchDomain=e),onChange:_.onClickSearch,clearable:"",placeholder:"Search a domain ...",style:{width:"650px",height:"55px","font-size":"20px"}},null,8,["modelValue","onChange"]),n(f,{type:"danger",style:{height:"55px",width:"128px","background-color":"#DE3723"},onClick:_.onClickSearch},{default:r(()=>[z]),_:1},8,["onClick"]),n(o,{id:"beastLink",to:"/tools/name/query-many"},{default:r(()=>[p("Beast Mode")]),_:1})]),h("div",F,[(d(!0),u(P,null,T(a.allNSList.length,e=>(d(),R(f,{key:e,class:"ns",type:"",text:"",onClick:C=>_.onClickViewNSDetail(a.allNSList[e-1])},{default:r(()=>[p(m("."+a.allNSList[e-1]),1)]),_:2},1032,["onClick"]))),128))]),a.queryResultList.length>0?(d(),R(v,{key:0,data:a.queryResultList,style:{margin:"50px auto",width:"800px"},"max-height":"600","empty-text":"Empty"},{default:r(()=>[n(l,{label:"Results",width:"180"},{default:r(e=>[h("div",G,m(e.row.fullName),1)]),_:1}),n(l,{label:""},{default:r(e=>[e.row.bCanRegister?(d(),u("div",K,[h("div",Q,m(a.u.float2Str(a.e.utils.formatEther(e.row.registerPrice)))+" eth",1),h("div",Z,m(e.row.renewalStr),1)])):e.row.bOpenRegistration?e.row.owner!=a.e.ZeroAddress?(d(),u("div",X,$)):(d(),u("div",ee,ae)):(d(),u("div",j,W))]),_:1}),n(l,{label:"Action",width:"150"},{default:r(e=>[e.row.bCanRegister?(d(),u("div",se,[n(f,{type:"primary",style:{width:"120px"},onClick:C=>_.onClickRegister(e.row)},{default:r(()=>[p("Register")]),_:2},1032,["onClick"])])):(d(),u("div",ie,[n(f,{type:"info",style:{width:"120px"},onClick:C=>_.onClickDetail(e.row)},{default:r(()=>[p("Detail")]),_:2},1032,["onClick"])]))]),_:1})]),_:1},8,["data"])):q("",!0)]),_:1}),n(S,{modelValue:a.nsDetailDialog.bVisible,"onUpdate:modelValue":s[1]||(s[1]=e=>a.nsDetailDialog.bVisible=e),title:"."+a.nsDetailDialog.ns,width:"800px","align-center":""},{default:r(()=>[n(v,{data:a.nsDetailDialog.tableData,style:{width:"100%"},border:""},{default:r(()=>[n(l,{prop:"name",label:"Name",width:"180"}),n(l,{label:"Content"},{default:r(e=>[e.row.bAddress?(d(),u("div",le,[n(D,{class:"elink",href:"https://etherscan.io/address/"+e.row.value,target:"_blank"},{default:r(()=>[p(m(e.row.value),1)]),_:2},1032,["href"])])):e.row.bHtml?(d(),u("div",ne,[h("div",{innerHTML:e.row.value},null,8,oe)])):(d(),u("div",re,m(e.row.value),1))]),_:1})]),_:1},8,["data"])]),_:1},8,["modelValue","title"]),n(S,{modelValue:a.nameDetailDialog.bVisible,"onUpdate:modelValue":s[2]||(s[2]=e=>a.nameDetailDialog.bVisible=e),title:a.nameDetailDialog.fullName,width:"800px","align-center":""},{default:r(()=>[n(v,{data:a.nameDetailDialog.tableData,style:{width:"100%",margin:"0px auto"},stripe:"",border:""},{default:r(()=>[n(l,{prop:"name",label:"Name",width:"150",align:"center"}),n(l,{label:"Content"},{default:r(e=>[e.row.bAddress?(d(),u("div",ce,[n(D,{class:"elink",href:"https://etherscan.io/address/"+e.row.value,target:"_blank"},{default:r(()=>[p(m(e.row.value),1)]),_:2},1032,["href"])])):e.row.bLink?(d(),u("div",de,[n(D,{class:"elink",href:e.row.value,target:"_blank"},{default:r(()=>[p(m(e.row.value),1)]),_:2},1032,["href"])])):e.row.bHtml?(d(),u("div",ue,[h("div",{innerHTML:e.row.value},null,8,he)])):(d(),u("div",_e,m(e.row.value),1))]),_:1})]),_:1},8,["data"])]),_:1},8,["modelValue","title"])])}const fe=x(H,[["render",me],["__scopeId","data-v-0e321470"]]);export{fe as default};
