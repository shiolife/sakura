import{d as k,o as t,c as f,h as a,J as g,Z as F,$ as N,j,u as A,a as D,y as E,W as I,ad as W,q as T,Y as H,z as J,a1 as O,X as Q,m as X,b as u,w as o,a0 as Y,f as _,e,n as Z,F as G,r as K,a4 as M,g as U,_ as ee,Q as te}from"./app-LoprukbN.js";import{_ as se}from"./SakuraPostList.vue_vue_type_style_index_0_lang-CostAJ50.js";import{_ as ne}from"./SakuraPageHeader-DoEE9N9B.js";import"./SakuraDate.vue_vue_type_script_setup_true_lang-BwxUk5J0.js";import"./SakuraImageCard-DzFsZtSC.js";const oe={"inline-flex":"",my:"2",p:"1",class:"post-tag cursor-pointer items-baseline leading-4"},ae={"inline-flex":""},re={"inline-flex":"",text:"xs"},ce=k({__name:"SakuraLayoutPostTag",props:{title:{},count:{}},setup(d){return(s,r)=>(t(),f("span",oe,[a("span",ae,"#"+g(s.title),1),a("span",re,"["+g(s.count)+"]",1)]))}}),ie={class:"yun-text-light",text:"center",p:"2"},le={class:"justify-center items-end",flex:"~ wrap",gap:"1"},ue={key:0,m:"x-100"},_e=k({__name:"TagsThemeSakura",setup(d){var v;F([N({"@type":"CollectionPage"})]);const s=j(),r=A(),c=D(),{t:h}=E(),i=I(),{tags:y,getTagStyle:C}=W({primary:((v=c.value.colors)==null?void 0:v.primary)||""}),l=T(()=>s.query.tag||""),$=H(),b=T(()=>$.postList.filter(n=>n.tags?typeof n.tags=="string"?n.tags===l.value:n.tags.includes(l.value):!1)),P=J(),{show:w}=O(P);function L(m){r.push({query:{tag:m}}),w()}const V=Q(i);return(m,n)=>{const B=ne,R=ce,x=X("RouterView"),q=se;return t(),u(x,null,{default:o(({Component:z})=>[(t(),u(Y(z),null,{"main-header":o(()=>[_(B,{title:e(V)||e(h)("menu.tags"),"sub-title":l.value,icon:e(i).icon||"i-ri-tag-line",color:e(i).color,cover:e(i).cover},null,8,["title","sub-title","icon","color","cover"])]),"main-content":o(()=>[a("div",{class:Z(e(c).animation&&"element-slide-up"),m:"x-100"},[a("div",ie,g(e(h)("counter.tags",Array.from(e(y)).length)),1),a("div",le,[(t(!0),f(G,null,K(Array.from(e(y)).sort(),([p,S])=>(t(),u(R,{key:p,title:p,count:S.count,style:M(e(C)(S.count)),onClick:fe=>L(p.toString())},null,8,["title","count","style","onClick"]))),128))]),_(x)],2)]),"main-nav-before":o(()=>[l.value?(t(),f("div",ue,[_(q,{posts:b.value},null,8,["posts"])])):U("v-if",!0)]),_:2},1024))]),_:1})}}}),me={};function pe(d,s){const r=_e,c=te;return t(),u(c,null,{default:o(()=>[_(r)]),_:1})}const xe=ee(me,[["render",pe]]);export{xe as default};
