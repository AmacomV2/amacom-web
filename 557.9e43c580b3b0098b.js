"use strict";(self.webpackChunkamacom=self.webpackChunkamacom||[]).push([[557],{7557:(I,m,o)=>{o.r(m),o.d(m,{ServiciosModule:()=>N});var d=o(6814),r=o(6223),u=o(1896),v=o(9182),s=o(9347),t=o(5879),l=o(4170),h=o(617),g=o(2032);function Z(e,J){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El nombre es requerido "),t.qZA())}function T(e,J){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El c\xf3digo es requerido "),t.qZA())}let p=(()=>{class e{constructor(a,i){this.data=a,this.fb=i}ngOnInit(){this.action=this.data.action,this.servicioList=this.data.row,this.dialogTitle="edit"===this.action?"Editar servicio":"Adicionar servicio",this.form=this.createContactForm()}createContactForm(){return this.fb.group({id:[this.servicioList?.id],name:[this.servicioList?.name],description:[this.servicioList?.description],createdAt:[this.servicioList?.createdAt]})}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(s.WI),t.Y36(r.QS))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-form-dialog",5,"i"]],decls:17,vars:3,consts:[[1,"register-form","m-4",3,"formGroup"],[1,"row"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-2"],["appearance","outline",1,"example-full-width"],["matSuffix","",1,"material-icons-two-tone","color-icon","p-3"],["matInput","","formControlName","name","required",""],[4,"ngIf"],["matInput","","formControlName","description","required",""]],template:function(i,n){if(1&i&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"mat-form-field",3)(4,"mat-label"),t._uU(5,"Nombre"),t.qZA(),t.TgZ(6,"mat-icon",4),t._uU(7,"build"),t.qZA(),t._UZ(8,"input",5),t.YNc(9,Z,2,0,"mat-error",6),t.qZA()()(),t.TgZ(10,"div",1)(11,"div",2)(12,"mat-form-field",3)(13,"mat-label"),t._uU(14,"Descripci\xf3n"),t.qZA(),t._UZ(15,"textarea",7),t.YNc(16,T,2,0,"mat-error",6),t.qZA()()()()),2&i){let c,f;t.Q6J("formGroup",n.form),t.xp6(9),t.Q6J("ngIf",null==(c=n.form.get("name"))?null:c.hasError("required")),t.xp6(7),t.Q6J("ngIf",null==(f=n.form.get("description"))?null:f.hasError("required"))}},dependencies:[d.O5,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u,l.KE,l.hX,l.TO,l.R9,h.Hw,g.Nt]})}return e})();var A=o(2296);let C=(()=>{class e{constructor(a,i){this.dialogRef=a,this.data=i}onNoClick(){this.dialogRef.close()}confirmDelete(){}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(s.so),t.Y36(s.WI))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-delete",5,"i"]],decls:28,vars:4,consts:[[1,"container"],["mat-dialog-title",""],["mat-dialog-content",""],[1,"clearfix"],[1,"font-weight-bold"],["mat-dialog-actions","",1,"mb-1"],["mat-flat-button","","color","warn",3,"mat-dialog-close","click"],["mat-flat-button","","tabindex","-1",3,"click"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2,"\xbfEst\xe1 seguro de eliminar el servicio?"),t.qZA(),t.TgZ(3,"div",2)(4,"ul",3)(5,"li")(6,"p")(7,"span",4)(8,"strong"),t._uU(9,"Nombre: "),t.qZA()(),t._uU(10),t.qZA()(),t.TgZ(11,"li")(12,"p")(13,"span",4)(14,"strong"),t._uU(15,"Descripci\xf3n: "),t.qZA()(),t._uU(16),t.qZA()(),t.TgZ(17,"li")(18,"p")(19,"span",4)(20,"strong"),t._uU(21,"Fecha: "),t.qZA()(),t._uU(22),t.qZA()()()(),t.TgZ(23,"div",5)(24,"button",6),t.NdJ("click",function(){return n.confirmDelete()}),t._uU(25," Eliminar "),t.qZA(),t.TgZ(26,"button",7),t.NdJ("click",function(){return n.onNoClick()}),t._uU(27,"Cancelar"),t.qZA()()()),2&i&&(t.xp6(10),t.Oqu(n.data.nombre),t.xp6(6),t.Oqu(n.data.descripcion),t.xp6(6),t.Oqu(n.data.date),t.xp6(2),t.Q6J("mat-dialog-close",1))},dependencies:[A.lW,s.ZT,s.uh,s.xY,s.H8]})}return e})();var F=o(553),y=o(4524);const b=function(){return{type:"img",resource:"assets/images/servicio.png"}},S=[{path:"all-servicios",component:(()=>{class e{constructor(){this.title="SERVICIOS",this.subtitle="En esta pantalla podr\xe1s visualizar los servicios existentes",this.config={title:"Lista de tipos de instituciones",keys:["id","name","description","updatedAt"],headerColumns:["No","Nombre","Descripci\xf3n","\xfaltima actualizaci\xf3n"],urlData:F.N.apiUrl+"/services/consulta",typeColumns:["uuid",null,null,"date"],pageable:!0,showFilter:!0},this.modalForm={edit:{modal:{title:"Editar servicio",component:p},actionType:"edit",urlEndpoint:"/services"},create:{modal:{title:"Crear servicio",component:p},actionType:"add",urlEndpoint:"/services/create"},delete:{modal:{title:"Eliminar servicio",component:C},actionType:"delete",urlEndpoint:"/services"},view:{modal:{title:"Ver servicio",width:"400px",maxHeight:"500px"},actionType:"view",configView:[{label:"Nombre",key:"name"},{label:"Descripci\xf3n",key:"description"},{label:"Fecha de creaci\xf3n",key:"createdAt",type:"date"},{label:"Fecha de actualizaci\xf3n",key:"updatedAt",type:"date"}]}}}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-allservicios"]],decls:1,vars:7,consts:[[3,"title","subtitle","showCreateButton","configTable","modalForm","dialogIcon"]],template:function(i,n){1&i&&t._UZ(0,"app-crud-container",0),2&i&&t.Q6J("title",n.title)("subtitle",n.subtitle)("showCreateButton",!0)("configTable",n.config)("modalForm",n.modalForm)("dialogIcon",t.DdM(6,b))},dependencies:[y._],encapsulation:2})}return e})()},{path:"**",component:v.J}];let U=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(S),u.Bz]})}return e})();var D=o(3140),E=o(6208);let N=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[d.ez,U,r.u5,r.UX,D.K,E.m]})}return e})()}}]);