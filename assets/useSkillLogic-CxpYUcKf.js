import{e as A,h as m,i as v,s as g,k as a,l as y,m as d,n as E,o as k,p as r}from"./index-D-guvsd-.js";import{g as $}from"./routeHelper-BracJdRh.js";const q=()=>{const t=A(),n=m(),i=v(l=>l.skillsReducer),u=i.all.data,L=i.all.loading,S=i.show.data,p=i.show.loading,h=i.deleteLoading,c=(l=void 0)=>{l=l===void 0?$():l,t(g(!0)),a.get("/api/skills",{params:l}).then(e=>{t(y(e.data.data))}).finally(()=>t(g(!1)))};return{all:u,oneSkill:S,allLoading:L,oneLoading:p,deleteLoading:h,getAllSkillsLogic:c,storeSkillLogic:(l,e)=>{const{setSubmitting:s}=e;s(!0),a.post("/api/skills",l).then(()=>n(k.TABLE)).catch(o=>r(o.response.data,e)).finally(()=>s(!1))},updateSkillLogic:(l,e,s)=>{const{setSubmitting:o}=s;o(!0),a.put(`/api/skills/${e}`,l).then(()=>n(k.TABLE)).catch(f=>r(f.response.data,s)).finally(()=>o(!1))},deleteSkillLogic:l=>{a.delete(`/api/skills/${l}`).then(()=>c())},getOneSkillLogic:l=>{t(d(!0)),a.get(`/api/skills/${l}`).then(e=>{t(E(e.data.data))}).finally(()=>t(d(!1)))}}};export{q as u};
