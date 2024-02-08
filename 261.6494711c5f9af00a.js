"use strict";(self.webpackChunkamacom=self.webpackChunkamacom||[]).push([[261],{7261:(ft,T,n)=>{n.r(T),n.d(T,{PersonasModule:()=>vt});var m=n(6814),i=n(6223),d=n(1896),y=n(9182),t=n(5879),g=n(5798),_=n(1004),v=n(553),U=n(9397),b=n(6306),E=n(9862),Y=n(2939);let x=(()=>{class e{constructor(r,o){this.http=r,this.snackbar=o}createPerson(r){return this.http.post(v.N.apiUrl+"/person/create",r).pipe((0,U.b)(o=>{this.snackbar.open("Persona creada correctamente.","Aceptar")}),(0,b.K)(o=>{throw this.snackbar.open(o,"Aceptar"),o}))}updatePerson(r){return this.http.put(v.N.apiUrl+"/person",r).pipe((0,U.b)(o=>{this.snackbar.open("Persona actualizada correctamente","Aceptar")}),(0,b.K)(o=>{throw console.log(o),this.snackbar.open(o,"Aceptar"),o}))}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(E.eN),t.LFG(Y.ux))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var J=n(8319),j=n(1693),Q=n(3680),f=n(2296),D=n(5986),Z=n(8034),u=n(4170),O=n(2032),G=n(8525);function z(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El nombre es requerido "),t.qZA())}function k(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," La apellido es requerido "),t.qZA())}function L(e,s){if(1&e&&(t.TgZ(0,"mat-option",28),t._uU(1),t.qZA()),2&e){const r=s.$implicit;t.Q6J("value",r.id),t.xp6(1),t.hij(" ",r.name," ")}}function B(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El tipo de documento es requerido "),t.qZA())}function M(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El n\xfamero de documento es requerido "),t.qZA())}function X(e,s){if(1&e&&(t.TgZ(0,"mat-option",28),t._uU(1),t.qZA()),2&e){const r=s.$implicit;t.Q6J("value",r.id),t.xp6(1),t.hij(" ",r.name," ")}}function R(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El genero es requerido "),t.qZA())}function V(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," La direcci\xf3n es requerida "),t.qZA())}function $(e,s){if(1&e&&(t.TgZ(0,"mat-option",28),t._uU(1),t.qZA()),2&e){const r=s.$implicit;t.Q6J("value",r.id),t.xp6(1),t.hij(" ",r.name," ")}}function K(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," El estado civil es requerido "),t.qZA())}function W(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," La fecha de nacimiento es requerida "),t.qZA())}let q=(()=>{class e{constructor(r,o,a,l,c,p,h){this.fb=r,this.router=o,this.pasoParametrosService=a,this.appService=l,this.personService=c,this.activateRoute=p,this.authService=h,this.modoEditar=!1,this.tiposDocumento=this.appService.getDocumentTypes(),this.tiposGenero=this.appService.getGenderTypes(),this.tiposEstadoCivil=this.appService.getCivilState()}ngOnInit(){this.patientForm=this.createContactForm()}onSubmit(){(this.modoEditar?this.personService.updatePerson(this.patientForm.value):this.personService.createPerson(this.patientForm.value)).subscribe(o=>{this.cancelar()})}cancelar(){this.router.navigate(["/admin/gestionar-usuarios/personas/all-personas"])}createContactForm(){return this.data=this.pasoParametrosService.obtenerParametro("data"),this.modoEditar=this.pasoParametrosService.obtenerParametro("modoEditar"),this.activateRoute.snapshot.data.autoedit&&(this.data=this.authService.currentUserValue.person),1==this.modoEditar?(this.titulo="Editar persona",this.subtitulo="En esta pantalla podr\xe1s editar la persona"):(this.titulo="Adicionar persona",this.subtitulo="En esta pantalla podr\xe1s adicionar una persona"),this.fb.group({id:[this.data?.id],name:[this.data?.name,[i.kI.required,i.kI.pattern("[a-zA-Z]+( [a-zA-Z]+)*")]],lastName:[this.data?.lastName,[i.kI.required,i.kI.pattern("[a-zA-Z]+( [a-zA-Z]+)*")]],documentTypeId:[this.data?.documentTypeId,[i.kI.required]],documentNo:[this.data?.documentNo,[i.kI.required,i.kI.pattern("[0-9]+")]],genderId:[this.data?.genderId,[i.kI.required]],address:[this.data?.address,[i.kI.required]],civilStatusId:[this.data?.civilStatusId,[i.kI.required]],birthDate:[this.data?.birthDate,[i.kI.required]],occupation:[this.data?.occupation,[i.kI.required]],consentText:[this.data?.consentText,[i.kI.required]],perfil:[""],firma:[""],privacyPolicy:[!0],imageUrl:[this.data?.imageUrl],uploadFile:[],evaluationCompleted:[this.data?.evaluationCompleted??!1]})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(i.QS),t.Y36(d.F0),t.Y36(g.T),t.Y36(_.U),t.Y36(x),t.Y36(d.gz),t.Y36(J.e8))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-persona"]],decls:94,vars:23,consts:[[1,"row","clearfix"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12"],[1,"card"],[1,"header"],[1,"body"],[1,"m-4",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-xl-6","col-lg-6","col-md-12","col-sm-12","mb-3"],["appearance","outline",1,"example-full-width","mb-3"],["matInput","","formControlName","name","required",""],[4,"ngIf"],["matInput","","formControlName","lastName","required",""],["formControlName","documentTypeId","required",""],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","documentNo","required",""],["formControlName","genderId","required",""],["matInput","","formControlName","address","required",""],["formControlName","civilStatusId","required",""],["matInput","","formControlName","birthDate","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["matInput","","formControlName","occupation"],["formControlName","consentText",1,"example-full-width","mb-3"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-5"],["formControlName","uploadFile"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-3"],["mat-raised-button","","color","primary",1,"btn-space",3,"disabled"],["type","button","mat-raised-button","","color","warn",3,"click"],[3,"value"]],template:function(o,a){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1")(5,"strong"),t._uU(6),t.qZA()()(),t.TgZ(7,"div",3)(8,"h6"),t._uU(9),t.qZA()(),t.TgZ(10,"div",4)(11,"form",5),t.NdJ("ngSubmit",function(){return a.onSubmit()}),t.TgZ(12,"div",6)(13,"div",7)(14,"mat-form-field",8)(15,"mat-label"),t._uU(16,"Nombre"),t.qZA(),t._UZ(17,"input",9),t.YNc(18,z,2,0,"mat-error",10),t.qZA()(),t.TgZ(19,"div",7)(20,"mat-form-field",8)(21,"mat-label"),t._uU(22,"Apellido"),t.qZA(),t._UZ(23,"input",11),t.YNc(24,k,2,0,"mat-error",10),t.qZA()()(),t.TgZ(25,"div",6)(26,"div",7)(27,"mat-form-field",8)(28,"mat-label"),t._uU(29,"Tipo de documento"),t.qZA(),t.TgZ(30,"mat-select",12),t.YNc(31,L,2,2,"mat-option",13),t.ALo(32,"async"),t.qZA(),t.YNc(33,B,2,0,"mat-error",10),t.qZA()(),t.TgZ(34,"div",7)(35,"mat-form-field",8)(36,"mat-label"),t._uU(37,"N\xfamero de documento"),t.qZA(),t._UZ(38,"input",14),t.YNc(39,M,2,0,"mat-error",10),t.qZA()()(),t.TgZ(40,"div",6)(41,"div",7)(42,"mat-form-field",8)(43,"mat-label"),t._uU(44,"Genero"),t.qZA(),t.TgZ(45,"mat-select",15),t.YNc(46,X,2,2,"mat-option",13),t.ALo(47,"async"),t.qZA(),t.YNc(48,R,2,0,"mat-error",10),t.qZA()(),t.TgZ(49,"div",7)(50,"mat-form-field",8)(51,"mat-label"),t._uU(52,"Direcci\xf3n"),t.qZA(),t._UZ(53,"input",16),t.YNc(54,V,2,0,"mat-error",10),t.qZA()()(),t.TgZ(55,"div",6)(56,"div",7)(57,"mat-form-field",8)(58,"mat-label"),t._uU(59,"Estado civil"),t.qZA(),t.TgZ(60,"mat-select",17),t.YNc(61,$,2,2,"mat-option",13),t.ALo(62,"async"),t.qZA(),t.YNc(63,K,2,0,"mat-error",10),t.qZA()(),t.TgZ(64,"div",7)(65,"mat-form-field",8)(66,"mat-label"),t._uU(67,"Fecha de nacimiento"),t.qZA(),t._UZ(68,"input",18)(69,"mat-datepicker-toggle",19)(70,"mat-datepicker",null,20),t.YNc(72,W,2,0,"mat-error",10),t.qZA()()(),t.TgZ(73,"div",6)(74,"div",7)(75,"mat-form-field",8)(76,"mat-label"),t._uU(77,"Ocupaci\xf3n"),t.qZA(),t._UZ(78,"input",21),t.qZA()()(),t.TgZ(79,"div",6)(80,"div",7)(81,"mat-checkbox",22),t._uU(82," Acepta los terminos y condiciones "),t.qZA()()(),t.TgZ(83,"div",6)(84,"div",23)(85,"label"),t._uU(86,"Foto"),t.qZA(),t._UZ(87,"app-file-upload",24),t.qZA()(),t.TgZ(88,"div",6)(89,"div",25)(90,"button",26),t._uU(91,"Guardar"),t.qZA(),t.TgZ(92,"button",27),t.NdJ("click",function(){return a.cancelar()}),t._uU(93,"Cancelar"),t.qZA()()()()()()()()),2&o){const l=t.MAs(71);let c,p,h,N,F,C,S,I;t.xp6(6),t.Oqu(a.titulo),t.xp6(3),t.Oqu(a.subtitulo),t.xp6(2),t.Q6J("formGroup",a.patientForm),t.xp6(7),t.Q6J("ngIf",null==(c=a.patientForm.get("name"))?null:c.hasError("required")),t.xp6(6),t.Q6J("ngIf",null==(p=a.patientForm.get("lastName"))?null:p.hasError("required")),t.xp6(7),t.Q6J("ngForOf",t.lcZ(32,17,a.tiposDocumento)),t.xp6(2),t.Q6J("ngIf",null==(h=a.patientForm.get("documentTypeId"))?null:h.hasError("required")),t.xp6(6),t.Q6J("ngIf",null==(N=a.patientForm.get("documentNo"))?null:N.hasError("required")),t.xp6(7),t.Q6J("ngForOf",t.lcZ(47,19,a.tiposGenero)),t.xp6(2),t.Q6J("ngIf",null==(F=a.patientForm.get("genderId"))?null:F.hasError("required")),t.xp6(6),t.Q6J("ngIf",null==(C=a.patientForm.get("address"))?null:C.hasError("required")),t.xp6(7),t.Q6J("ngForOf",t.lcZ(62,21,a.tiposEstadoCivil)),t.xp6(2),t.Q6J("ngIf",null==(S=a.patientForm.get("civilStatusId"))?null:S.hasError("required")),t.xp6(5),t.Q6J("matDatepicker",l),t.xp6(1),t.Q6J("for",l),t.xp6(3),t.Q6J("ngIf",null==(I=a.patientForm.get("birthDate"))?null:I.hasError("required")),t.xp6(18),t.Q6J("disabled",!a.patientForm.valid)}},dependencies:[m.sg,m.O5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.sg,i.u,j.Y,Q.ey,f.lW,D.oG,Z.Mq,Z.hl,Z.nW,u.KE,u.hX,u.TO,u.R9,O.Nt,G.gD,m.Ov]})}return e})();var w=n(2589),P=n(9347);let H=(()=>{class e{constructor(r,o){this.dialogRef=r,this.data=o}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(P.so),t.Y36(P.WI))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-delete-persona"]],decls:25,vars:4,consts:[[1,"clearfix"],[1,"font-weight-bold"]],template:function(o,a){1&o&&(t.TgZ(0,"ul",0)(1,"li")(2,"p")(3,"span",1)(4,"strong"),t._uU(5,"Nombre: "),t.qZA()(),t._uU(6),t.qZA()(),t.TgZ(7,"li")(8,"p")(9,"span",1)(10,"strong"),t._uU(11,"Apellido: "),t.qZA()(),t._uU(12),t.qZA()(),t.TgZ(13,"li")(14,"p")(15,"span",1)(16,"strong"),t._uU(17,"Tipo de documento: "),t.qZA()(),t._uU(18),t.qZA()(),t.TgZ(19,"li")(20,"p")(21,"span",1)(22,"strong"),t._uU(23,"N\xfamero de documento: "),t.qZA()(),t._uU(24),t.qZA()()()),2&o&&(t.xp6(6),t.hij("",null==a.data?null:a.data.row.name," "),t.xp6(6),t.hij("",null==a.data?null:a.data.row.lastName," "),t.xp6(6),t.hij("",null==a.data?null:a.data.row.documentType.name," "),t.xp6(6),t.hij("",null==a.data?null:a.data.row.documentNo," "))}})}return e})();var tt=n(4524);let et=(()=>{class e extends w.n{constructor(r){super(),this.pasarParametrosService=r,this.title="Lista de personas",this.subtitle="En esta pantalla podr\xe1s visualizar las personas",this.config={title:"Lista de personas",keys:["id","fullName","gender.name","documentType.name","updatedAt"],headerColumns:["No","Nombre Completo","Genero","Documento","\xfaltima actualizaci\xf3n"],urlData:v.N.apiUrl+"/person/query",typeColumns:["uuid",null,null,null,"date"],pageable:!0,showFilter:!0},this.modalForm={create:{urlView:"/admin/gestionar-usuarios/personas/add-persona",actionType:"add"},edit:{urlView:"/admin/gestionar-usuarios/personas/add-persona",actionType:"edit"},delete:{modal:{title:"\xbfEst\xe1 seguro de eliminar la persona?",component:H},actionType:"delete",urlEndpoint:"/person"},view:{urlView:"/admin/gestionar-usuarios/personas/search-persona",actionType:"view",action:o=>{this.pasarParametrosService.adicionarParametro("dataPersona",o)}}},this.filterTable=[]}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(g.T))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-allpersonas"]],features:[t.qOj],decls:1,vars:6,consts:[[3,"title","subtitle","showCreateButton","configTable","modalForm","filterTable"]],template:function(o,a){1&o&&t._UZ(0,"app-crud-container",0),2&o&&t.Q6J("title",a.title)("subtitle",a.subtitle)("showCreateButton",!0)("configTable",a.config)("modalForm",a.modalForm)("filterTable",a.filterTable)},dependencies:[tt._]})}return e})();var at=n(617),A=n(4104),ot=n(2596),rt=n(3424),nt=n(6515);function it(e,s){1&e&&(t.TgZ(0,"mat-icon",15),t._uU(1,"face"),t.qZA(),t._uU(2," Situaci\xf3n "))}function st(e,s){1&e&&(t.TgZ(0,"mat-icon",15),t._uU(1,"settings"),t.qZA(),t._uU(2," Bitacora "))}function lt(e,s){1&e&&(t.TgZ(0,"mat-icon",15),t._uU(1,"settings"),t.qZA(),t._uU(2," Calendario "))}const dt=[{path:"all-personas",component:et,data:{breadcrumb:{title:"Todas las Personas"}}},{path:"add-persona",component:q,data:{breadcrumb:{title:"Agregar Persona"}}},{path:"edit-persona",component:q,data:{autoedit:!0,breadcrumb:{title:"Agregar Persona"}}},{path:"search-persona",component:(()=>{class e{constructor(r,o,a){this.fb=r,this.pasoParametrosService=o,this.router=a,this.indicePrimerItem=1,this.indiceUltimoItem=10,this.formdata={first:"Pooja",last:"Sarma",gender:"Female",mobile:"123456789",age:"23",email:"test@example.com",maritalStatus:"1",bGroup:"O+",bPresure:"123",sugger:"150",injury:"Fever",address:"101, Elanxa, New Yourk",dob:"1987-02-17T14:22:18Z",uploadFile:""}}ngOnInit(){this.data=this.pasoParametrosService.obtenerParametro("dataPersona"),console.log("DATA PERSONA",this.data),null==this.data&&this.volver()}volver(){this.router.navigate(["/admin/gestionar-usuarios/personas/all-personas"])}bitacora(r){this.pasoParametrosService.adicionarParametro("data",r),this.router.navigate(["/doctor/inventory/item-stock-list"])}situacion(r){this.pasoParametrosService.adicionarParametro("data",r),this.router.navigate(["/doctor/room/all-rooms"])}calendario(r){this.router.navigate(["calendar"])}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(i.QS),t.Y36(g.T),t.Y36(d.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-search-persona"]],decls:100,vars:12,consts:[[1,"row","clearfix"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12"],[1,"card"],[1,"body"],["mat-mini-fab","","matTooltip","Volver",1,"btn","bg-purple","btn-lg","btn-block","waves-effect",3,"click"],[1,"header"],[1,"row","clearfix","jsdemo-notification-button"],[1,"col-xs-12","col-sm-6","col-md-3","col-lg-2"],["src","assets/images/usuaria.png","height","100sspx","width","100px","alt","",1,"rounded-circle"],[1,"row"],[1,"col-xl-6","col-lg-12","col-md-12","col-sm-12","mb-3"],[1,"font-weight-bold"],[1,"col-lg-12","col-md-12"],["mat-tab-label",""],["mat-raised-button","",1,"bg-cyan",3,"click"],[1,"example-tab-icon","msr-2"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),t.NdJ("click",function(){return a.volver()}),t.TgZ(5,"mat-icon"),t._uU(6,"keyboard_return"),t.qZA()()(),t.TgZ(7,"div",5)(8,"h1")(9,"strong"),t._uU(10),t.qZA()()(),t.TgZ(11,"div",5)(12,"h6"),t._uU(13," En esta pantalla podr\xe1s consultar la informaci\xf3n de "),t.TgZ(14,"strong"),t._uU(15),t.qZA()()(),t.TgZ(16,"div",3)(17,"div",6)(18,"div",7),t._UZ(19,"img",8),t.qZA()(),t._UZ(20,"br"),t.TgZ(21,"div",9)(22,"div",10)(23,"h6")(24,"span",11)(25,"strong"),t._uU(26,"Nombre: "),t.qZA()(),t._uU(27),t.qZA()(),t.TgZ(28,"div",10)(29,"h6")(30,"span",11)(31,"strong"),t._uU(32,"Apellido: "),t.qZA()(),t._uU(33),t.qZA()()(),t.TgZ(34,"div",9)(35,"div",10)(36,"h6")(37,"span",11)(38,"strong"),t._uU(39,"Tipo de documento: "),t.qZA()(),t._uU(40),t.qZA()(),t.TgZ(41,"div",10)(42,"h6")(43,"span",11)(44,"strong"),t._uU(45,"N\xfamero de documento: "),t.qZA()(),t._uU(46),t.qZA()()(),t.TgZ(47,"div",9)(48,"div",10)(49,"h6")(50,"span",11)(51,"strong"),t._uU(52,"Fecha de nacimiento: "),t.qZA()(),t._uU(53),t.qZA()(),t.TgZ(54,"div",10)(55,"h6")(56,"span",11)(57,"strong"),t._uU(58,"Direcci\xf3n: "),t.qZA()(),t._uU(59),t.qZA()()(),t.TgZ(60,"div",9)(61,"div",10)(62,"h6")(63,"span",11)(64,"strong"),t._uU(65,"Genero: "),t.qZA()(),t._uU(66),t.qZA()(),t.TgZ(67,"div",10)(68,"h6")(69,"span",11)(70,"strong"),t._uU(71,"Estado civil: "),t.qZA()(),t._uU(72),t.qZA()()(),t.TgZ(73,"div",9)(74,"div",10)(75,"h6")(76,"span",11)(77,"strong"),t._uU(78,"Oupaci\xf3n: "),t.qZA()(),t._uU(79),t.qZA()(),t.TgZ(80,"div",10)(81,"h6")(82,"span",11)(83,"strong"),t._uU(84,"Fecha de creaci\xf3n: "),t.qZA()(),t._uU(85),t.qZA()()(),t.TgZ(86,"div",12)(87,"div",2)(88,"mat-tab-group")(89,"mat-tab"),t.YNc(90,it,3,0,"ng-template",13),t._UZ(91,"app-situaciones"),t.qZA(),t.TgZ(92,"mat-tab"),t.YNc(93,st,3,0,"ng-template",13),t._UZ(94,"app-bitacora"),t.qZA(),t.TgZ(95,"mat-tab"),t.YNc(96,lt,3,0,"ng-template",13),t.TgZ(97,"div",7)(98,"button",14),t.NdJ("click",function(){return a.calendario(a.data)}),t._uU(99," Calendario "),t.qZA()()()()()()()()()()),2&o&&(t.xp6(10),t.hij(" ",a.data.fullName,""),t.xp6(5),t.hij(" ",a.data.fullName,""),t.xp6(12),t.hij("",a.data.name," "),t.xp6(6),t.hij("",a.data.lastName," "),t.xp6(7),t.hij("",a.data.documentType.name," "),t.xp6(6),t.hij("",a.data.documentNo," "),t.xp6(7),t.hij("",a.data.birthDate," "),t.xp6(6),t.hij("",a.data.address," "),t.xp6(7),t.hij("",null==a.data.gender?null:a.data.gender.name," "),t.xp6(6),t.hij("",null==a.data.civilStatus?null:a.data.civilStatus.name," "),t.xp6(7),t.hij("",a.data.occupation," "),t.xp6(6),t.hij("",a.data.createdAt," "))},dependencies:[f.lW,f.Tq,at.Hw,A.uD,A.uX,A.SP,ot.gM,rt.s,nt.D]})}return e})(),data:{breadcrumb:{title:"Informaci\xf3n de la Persona"}}},{path:"**",component:y.J}];let mt=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#a=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(dt),d.Bz]})}return e})();var ut=n(7075),ct=n(6208),pt=n(759),ht=n(3911),gt=n(9235);let vt=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#a=this.\u0275inj=t.cJS({imports:[m.ez,mt,i.u5,i.UX,ut.K,ct.m,pt.q,ht.SituacionModule,gt.BitacoraModule]})}return e})()}}]);