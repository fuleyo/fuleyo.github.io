import{a as F,k as i,aS as o,b5 as c,cD as N,e as t,bL as m,cC as A,D as g,B as u,b6 as l,n as h,I as P,ad as j,a7 as z}from"./index.f05a6743.js";import{o as J}from"./index.8712760c.js";import{G}from"./index.2d8bd5d3.js";import{I as d}from"./SettingItem.4cbcb510.js";import"./index.1c00cb52.js";import"./index.1aed234b.js";import"./item_type.be442da4.js";const ne=()=>{const r=F();J("manage.sidemenu.other");const[p,_]=i(""),[k,y]=i(""),[b,f]=i(""),[$,v]=i(""),[S,C]=i(""),[a,Q]=i([]),[U,D]=o(()=>c.get(`/admin/setting/list?groups=${G.ARIA2},${G.SINGLE}`)),[B,H]=o(()=>c.post("/admin/setting/set_aria2",{uri:p(),secret:k()})),[M,O]=o(()=>c.post("/admin/setting/set_qbit",{url:b(),seedtime:$()}));(async()=>{const e=await D();l(e,n=>{var q,L,T,I,w;_(((q=n.find(s=>s.key==="aria2_uri"))==null?void 0:q.value)||""),y(((L=n.find(s=>s.key==="aria2_secret"))==null?void 0:L.value)||""),C(((T=n.find(s=>s.key==="token"))==null?void 0:T.value)||""),f(((I=n.find(s=>s.key==="qbittorrent_url"))==null?void 0:I.value)||""),v(((w=n.find(s=>s.key==="qbittorrent_seedtime"))==null?void 0:w.value)||""),Q(n)})})();const[R,x]=o(()=>c.post("/admin/setting/reset_token")),{copy:E}=N();return t(z,{get loading(){return U()},get children(){return[t(m,{mb:"$2",get children(){return r("settings_other.aria2")}}),t(A,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(d,g(()=>a().find(e=>e.key==="aria2_uri"),{get value(){return p()},onChange:e=>_(e)})),t(d,g(()=>a().find(e=>e.key==="aria2_secret"),{get value(){return k()},onChange:e=>y(e)}))]}}),t(u,{my:"$2",get loading(){return B()},onClick:async()=>{const e=await H();l(e,n=>{h.success(`${r("settings_other.aria2_version")} ${n}`)})},get children(){return r("settings_other.set_aria2")}}),t(m,{my:"$2",get children(){return r("settings_other.qbittorrent")}}),t(A,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(d,g(()=>a().find(e=>e.key==="qbittorrent_url"),{get value(){return b()},onChange:e=>f(e)})),t(d,g(()=>a().find(e=>e.key==="qbittorrent_seedtime"),{get value(){return $()},onChange:e=>v(e)}))]}}),t(u,{my:"$2",get loading(){return M()},onClick:async()=>{const e=await O();l(e,n=>{h.success(n)})},get children(){return r("settings_other.set_qbit")}}),t(m,{my:"$2",get children(){return r("settings.token")}}),t(P,{get value(){return S()},readOnly:!0}),t(j,{my:"$2",spacing:"$2",get children(){return[t(u,{onClick:()=>{E(S())},get children(){return r("settings_other.copy_token")}}),t(u,{colorScheme:"danger",get loading(){return R()},onClick:async()=>{const e=await x();l(e,n=>{h.success(r("settings_other.reset_token_success")),C(n)})},get children(){return r("settings_other.reset_token")}})]}})]}})};export{ne as default};
