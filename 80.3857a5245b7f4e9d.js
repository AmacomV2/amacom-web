"use strict";(self.webpackChunkamacom=self.webpackChunkamacom||[]).push([[80,140],{4080:(M,e,t)=>{t.r(e),t.d(e,{GestionarUsuariosModule:()=>y});var r=t(6814),h=t(6223),d=t(1896),o=t(9182),c=t(5879);const a=[{path:"usuarios",loadChildren:()=>Promise.all([t.e(524),t.e(592),t.e(570)]).then(t.bind(t,1570)).then(n=>n.UsuarioModule)},{path:"personas",loadChildren:()=>Promise.all([t.e(884),t.e(524),t.e(186),t.e(592),t.e(261)]).then(t.bind(t,7261)).then(n=>n.PersonasModule)},{path:"generos",children:[{path:"",loadChildren:()=>Promise.all([t.e(524),t.e(592),t.e(510)]).then(t.bind(t,8510)).then(n=>n.GenerosModule)}]},{path:"tipos-documentos",children:[{path:"",loadChildren:()=>Promise.all([t.e(524),t.e(592),t.e(757)]).then(t.bind(t,3757)).then(n=>n.TiposDocumentosModule)}]},{path:"**",component:o.J}];let i=(()=>{class n{static#t=this.\u0275fac=function(f){return new(f||n)};static#s=this.\u0275mod=c.oAB({type:n});static#o=this.\u0275inj=c.cJS({imports:[d.Bz.forChild(a),d.Bz]})}return n})();var u=t(3140),v=t(6208);let y=(()=>{class n{static#t=this.\u0275fac=function(f){return new(f||n)};static#s=this.\u0275mod=c.oAB({type:n});static#o=this.\u0275inj=c.cJS({imports:[r.ez,h.u5,h.UX,i,u.K,v.m]})}return n})()},3140:(M,e,t)=>{t.d(e,{K:()=>E});var r=t(6814),h=t(9101),d=t(1896),o=t(5879);let c=(()=>{class s{static#t=this.\u0275fac=function(l){return new(l||s)};static#s=this.\u0275mod=o.oAB({type:s});static#o=this.\u0275inj=o.cJS({imports:[r.ez,d.Bz,h.p]})}return s})();var a=t(6213),i=t(617),u=t(2296),v=t(1464),y=t(8875);let n=(()=>{class s{static#t=this.\u0275fac=function(l){return new(l||s)};static#s=this.\u0275mod=o.oAB({type:s});static#o=this.\u0275inj=o.cJS({providers:[v.R,y.G],imports:[r.ez]})}return s})();var A=t(4170),g=t(6223),f=t(2032),P=t(1476),S=t(2599);let B=(()=>{class s{static#t=this.\u0275fac=function(l){return new(l||s)};static#s=this.\u0275mod=o.oAB({type:s});static#o=this.\u0275inj=o.cJS({imports:[r.ez,a.u,i.Ps,S.rP,P.TU,u.ot,A.lN,i.Ps,f.c,g.UX,n]})}return s})();var C=t(9347);let p=(()=>{class s{static#t=this.\u0275fac=function(l){return new(l||s)};static#s=this.\u0275mod=o.oAB({type:s});static#o=this.\u0275inj=o.cJS({imports:[r.ez,n]})}return s})(),F=(()=>{class s{static#t=this.\u0275fac=function(l){return new(l||s)};static#s=this.\u0275mod=o.oAB({type:s});static#o=this.\u0275inj=o.cJS({imports:[r.ez,c,i.Ps,B,u.ot,C.Is,p,n]})}return s})();var j=t(4630),U=t(8525);let z=(()=>{class s{static#t=this.\u0275fac=function(l){return new(l||s)};static#s=this.\u0275mod=o.oAB({type:s});static#o=this.\u0275inj=o.cJS({imports:[r.ez,g.u5,g.UX,i.Ps,U.LD,f.c,u.ot,A.lN,j.Bb]})}return s})();var J=t(8257),D=t(5195);let L=(()=>{class s{static#t=this.\u0275fac=function(l){return new(l||s)};static#s=this.\u0275mod=o.oAB({type:s});static#o=this.\u0275inj=o.cJS({imports:[r.ez,J.T5,D.QW]})}return s})(),E=(()=>{class s{static#t=this.\u0275fac=function(l){return new(l||s)};static#s=this.\u0275mod=o.oAB({type:s});static#o=this.\u0275inj=o.cJS({imports:[c,B,F,z,L]})}return s})()},1464:(M,e,t)=>{t.d(e,{R:()=>h});var r=t(5879);let h=(()=>{class o{transform(a,i){return"date"===i?new Date(a).toLocaleDateString():"uuid"===i?a.slice(0,8):"badge"===i?`<span class="badge ${!0===a?"col-green":"col-orange"}">Activo</span>`:a}static#t=this.\u0275fac=function(i){return new(i||o)};static#s=this.\u0275pipe=r.Yjl({name:"mapping",type:o,pure:!0})}return o})()},8875:(M,e,t)=>{t.d(e,{G:()=>h});var r=t(5879);let h=(()=>{class d{transform(c,a,i){return c?a&&0!=a.length&&0!=i.length?(a=a.toLocaleLowerCase(),c.filter(u=>Array.isArray(i)?i.some(v=>String(u[v])?.toLocaleLowerCase().includes(a)):u[i].toLocaleLowerCase().includes(a))):c:[]}static#t=this.\u0275fac=function(a){return new(a||d)};static#s=this.\u0275pipe=r.Yjl({name:"searchFilter",type:d,pure:!0})}return d})()}}]);