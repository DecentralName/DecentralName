import{_ as l,r as t,o as m,c as i,b as o,w as n,d as a,p as h,h as f}from"./index-1d57afdd.js";const v={name:"ToolsPage",components:{},data(){return{subMenu:"/tools/name/query-many"}},async mounted(){this.$route.path.indexOf("/namespace/")!=-1?this.subMenu="/tools/namespace/create":this.subMenu="/tools/name/query-many"},methods:{handleOpen(e,_){}}},c=e=>(h("data-v-3b3ed080"),e=e(),f(),e),b={id:"main"},y=c(()=>a("span",null,"Name",-1)),x=c(()=>a("span",null,"Namespace",-1)),w={id:"routeArea"};function O(e,_,g,I,d,u){const s=t("el-menu-item"),p=t("el-menu"),r=t("router-view");return m(),i("div",b,[o(p,{"default-active":d.subMenu,router:"",id:"tabArea",onOpen:u.handleOpen},{default:n(()=>[o(s,{index:"/tools/name/query-many"},{default:n(()=>[y]),_:1}),o(s,{index:"/tools/namespace/create"},{default:n(()=>[x]),_:1})]),_:1},8,["default-active","onOpen"]),a("div",w,[o(r)])])}const N=l(v,[["render",O],["__scopeId","data-v-3b3ed080"]]);export{N as default};
