"use strict";(self.webpackChunkamacom=self.webpackChunkamacom||[]).push([[524],{5739:(U,A,r)=>{function e(s,C,n,_,o,a,c){try{var u=s[a](c),f=u.value}catch(S){return void n(S)}u.done?C(f):Promise.resolve(f).then(_,o)}r.d(A,{x:()=>Q});var t=r(5879),m=r(9347);let b=(()=>{class s{constructor(n){this.viewContainerRef=n}static#t=this.\u0275fac=function(_){return new(_||s)(t.Y36(t.s_b))};static#e=this.\u0275dir=t.lG2({type:s,selectors:[["","adHost",""]]})}return s})();var w=r(6814),M=r(617),D=r(2296);const I=["header"];function E(s,C){if(1&s&&t._UZ(0,"img",11),2&s){const n=t.oxw(2);t.Q6J("src",null==n.data.icon?null:n.data.icon.resource,t.LSH)("width",(null==n.data.icon?null:n.data.icon.width)||45)("height",(null==n.data.icon?null:n.data.icon.heigth)||45)}}function N(s,C){if(1&s&&(t.TgZ(0,"mat-icon"),t._uU(1),t.qZA()),2&s){const n=t.oxw(2);t.xp6(1),t.Oqu(n.data.icon.resource)}}function O(s,C){if(1&s&&(t.ynx(0),t.YNc(1,E,1,3,"img",9),t.YNc(2,N,2,1,"ng-template",null,10,t.W1O),t.BQk()),2&s){const n=t.MAs(3),_=t.oxw();t.xp6(1),t.Q6J("ngIf",_.data.icon&&"img"===_.data.icon.type)("ngIfElse",n)}}function T(s,C){if(1&s){const n=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.dialogRef.close())}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}function v(s,C){}function y(s,C){if(1&s){const n=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(n);const o=t.oxw(2);return t.KtG(o.aceptar())}),t._uU(1),t.qZA()}if(2&s){const n=t.oxw(2);t.Q6J("mat-dialog-close",1),t.xp6(1),t.hij(" ",null!=n.data.actions&&n.data.actions.primary?n.data.actions.primary:"Aceptar"," ")}}function F(s,C){if(1&s){const n=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){t.CHM(n);const o=t.oxw(2);return t.KtG(o.cancelar())}),t._uU(1),t.qZA()}if(2&s){const n=t.oxw(2);t.xp6(1),t.hij(" ",null!=n.data.actions&&n.data.actions.secondary?n.data.actions.secondary:"Cancelar"," ")}}function P(s,C){if(1&s){const n=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){const a=t.CHM(n).$implicit;return t.KtG(a.action())}),t._uU(1),t.qZA()}if(2&s){const n=C.$implicit;t.Q6J("color",n.type)("ngStyle",n.customStyles),t.xp6(1),t.hij(" ",n.nombre," ")}}function J(s,C){if(1&s&&(t.TgZ(0,"div",13),t.YNc(1,y,2,2,"button",14),t.YNc(2,F,2,1,"button",15),t.YNc(3,P,2,3,"button",16),t.qZA()),2&s){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",!n.data.hideDefaultActions),t.xp6(1),t.Q6J("ngIf",!n.data.hideDefaultActions),t.xp6(1),t.Q6J("ngForOf",null==n.data.actions?null:n.data.actions.otherButtons)}}let k=(()=>{class s{constructor(n,_,o){this.data=n,this.dialogRef=_,this.cdr=o,this.accion=new t.vpe,this.otherButtons=[],this.dragPosition=null}ngOnInit(){if(this.adHost){const n=this.adHost.viewContainerRef;n.clear(),this.componentRef=n.createComponent(this.data.component),this.componentRef.instance.data=this.data.dataComponent,this.otherButtons=this.data.actions?.otherButtons?this.data.actions.otherButtons:[]}}removeTransition(){document.querySelector(".modalax12789").style.transition="none"}addTransition(){document.querySelector(".modalax12789").style.transition="transform 300ms ease-out"}moveToPosition(n){const _=document.querySelector(".modalax12789");_.style.transform=`translate(${n.x}px, ${n.y}px)`,setTimeout(()=>{_.style.transform="translate(0px, 0px)",this.dragPosition=n},300)}resetPosition(){this.dragPosition={x:0,y:0}}ngAfterViewInit(){setTimeout(()=>{this.form=this.componentRef?.instance?.form},0)}aceptar(){this.form?.invalid?this.form?.markAllAsTouched():this.accion.emit({data:this.form?.getRawValue(),estado:!0,dialogRef:null})}cerrar(){var n=this;return function x(s){return function(){var C=this,n=arguments;return new Promise(function(_,o){var a=s.apply(C,n);function c(f){e(a,_,o,c,u,"next",f)}function u(f){e(a,_,o,c,u,"throw",f)}c(void 0)})}}(function*(){n.dialogRef.close(),n.accion.emit({data:null,estado:!1,dialogRef:null})})()}cancelar(){this.componentRef.instance.cancelar?(console.info("Method cancelar() exits at:\u0323\u0323 "+this.componentRef.componentType.name),this.componentRef.instance.cancelar()):this.cerrar()}static#t=this.\u0275fac=function(_){return new(_||s)(t.Y36(m.WI),t.Y36(m.so),t.Y36(t.sBO))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-dialog"]],viewQuery:function(_,o){if(1&_&&(t.Gf(b,7),t.Gf(I,5)),2&_){let a;t.iGM(a=t.CRH())&&(o.adHost=a.first),t.iGM(a=t.CRH())&&(o.header=a.first)}},outputs:{accion:"accion"},decls:12,vars:4,consts:[[1,"addContainer"],[1,"modalHeader"],[1,"editRowModal"],[1,"modalHeader","clearfix"],[4,"ngIf"],["mat-icon-button","","class","modal-close-button","aria-label","Close dialog",3,"click",4,"ngIf"],["mat-dialog-content",""],["adHost",""],["mat-dialog-actions","","class","modal-actions",4,"ngIf"],["alt","avatar",3,"src","width","height",4,"ngIf","ngIfElse"],["icon",""],["alt","avatar",3,"src","width","height"],["mat-icon-button","","aria-label","Close dialog",1,"modal-close-button",3,"click"],["mat-dialog-actions","",1,"modal-actions"],["mat-flat-button","","color","primary",3,"mat-dialog-close","click",4,"ngIf"],["mat-flat-button","","color","warn",3,"click",4,"ngIf"],["mat-flat-button","",3,"color","ngStyle","click",4,"ngFor","ngForOf"],["mat-flat-button","","color","primary",3,"mat-dialog-close","click"],["mat-flat-button","","color","warn",3,"click"],["mat-flat-button","",3,"color","ngStyle","click"]],template:function(_,o){1&_&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,O,4,2,"ng-container",4),t.TgZ(5,"h2")(6,"strong"),t._uU(7),t.qZA()()()(),t.YNc(8,T,3,0,"button",5),t.qZA(),t.TgZ(9,"div",6),t.YNc(10,v,0,0,"ng-template",7),t.qZA(),t.YNc(11,J,4,3,"div",8),t.qZA()),2&_&&(t.xp6(4),t.Q6J("ngIf",o.data.icon),t.xp6(3),t.hij(" ",o.data.title," "),t.xp6(1),t.Q6J("ngIf",!o.data.hideCloseButtonInTopBar),t.xp6(3),t.Q6J("ngIf",!o.data.hideDefaultActions||(null==o.data.actions?null:o.data.actions.otherButtons)))},dependencies:[w.sg,w.O5,w.PC,m.ZT,m.xY,m.H8,M.Hw,D.lW,D.RK,b],styles:[".modal-actions[_ngcontent-%COMP%]{display:flex;justify-content:center}"]})}return s})();var R=r(5592);let Q=(()=>{class s{constructor(n){this.dialog=n,this.referencias=new Map}show(n){return new R.y(_=>{const o=this.dialog.open(k,{disableClose:!0,panelClass:"modalax12789",maxHeight:n.maxHeight||"90vh",minHeight:n.minHeight||"300px",maxWidth:n.maxWidth||"600px",minWidth:n.minWidth||"300px",width:n.width||"95%",autoFocus:!1,data:n});this.referencias.set(o,o),this.dialogRef=o,this.dialogRef.componentInstance.accion.subscribe(a=>{a.dialogRef=o,_.next(a)},a=>{_.error(a)})})}close(n){n?(this.referencias.get(n)?.close(),this.referencias.delete(n)):this.dialogRef.close()}static#t=this.\u0275fac=function(_){return new(_||s)(t.LFG(m.uw))};static#e=this.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},732:(U,A,r)=>{function e(x,t){let m=x;if(0===t.split(".").length)return x[t];try{t.split(".").forEach(b=>{m=m[b]})}catch(b){console.error("Error al obtener el valor de la key: "+t,b),m=b}return m}r.d(A,{L:()=>e})},4524:(U,A,r)=>{r.d(A,{_:()=>C});var e=r(9347),x=r(732),t=r(5879),m=r(6814),b=r(1464);function w(n,_){if(1&n&&(t.ynx(0),t._UZ(1,"span",5),t.ALo(2,"mapping"),t.BQk()),2&n){const o=t.oxw().$implicit,a=t.oxw();t.xp6(1),t.Q6J("innerHTML",t.xi3(2,1,a.getValueFromKey(o.key),o.type),t.oJD)}}function M(n,_){if(1&n&&t._uU(0),2&n){const o=t.oxw().$implicit,a=t.oxw();t.hij(" ",a.getValueFromKey(o.key)," ")}}function D(n,_){if(1&n&&(t.TgZ(0,"li")(1,"p")(2,"span",2)(3,"strong"),t._uU(4),t.qZA()(),t.YNc(5,w,3,4,"ng-container",3),t.YNc(6,M,1,1,"ng-template",null,4,t.W1O),t.qZA()()),2&n){const o=_.$implicit,a=t.MAs(7);t.xp6(4),t.hij("",o.label,": "),t.xp6(1),t.Q6J("ngIf",o.type)("ngIfElse",a)}}let I=(()=>{class n{constructor(o){this.data=o}ngOnInit(){console.log(this.data)}getValueFromKey(o){return(0,x.L)(this.data.data,o)}static#t=this.\u0275fac=function(a){return new(a||n)(t.Y36(e.WI))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-modal-view"]],decls:2,vars:1,consts:[[1,"clearfix"],[4,"ngFor","ngForOf"],[1,"font-weight-bold"],[4,"ngIf","ngIfElse"],["noMapping",""],[3,"innerHTML"]],template:function(a,c){1&a&&(t.TgZ(0,"ul",0),t.YNc(1,D,8,3,"li",1),t.qZA()),2&a&&(t.xp6(1),t.Q6J("ngForOf",c.data.config))},dependencies:[m.sg,m.O5,b.R]})}return n})();var E=r(1896),N=r(2939),O=r(5739),T=r(553),v=r(9397),y=r(6306),F=r(9862);let P=(()=>{class n{constructor(o,a){this.http=o,this.snackbar=a}postData(o,a){return this.http.post(T.N.apiUrl+o,a).pipe((0,v.b)(c=>{this.showSuscessMessage("Registro creado correctamente")}),(0,y.K)(c=>{throw this.snackbar.open(c,"Cerrar"),c}))}deleteData(o,a){return this.http.delete(T.N.apiUrl+o+"/"+a).pipe((0,v.b)(c=>{this.showSuscessMessage("Registro eliminado correctamente")}),(0,y.K)(c=>{throw this.snackbar.open(c,"Cerrar"),c}))}putData(o,a){return this.http.put(T.N.apiUrl+o,a).pipe((0,v.b)(c=>{this.showSuscessMessage("Registro actualizado correctamente")}),(0,y.K)(c=>{throw this.snackbar.open(c,"Cerrar"),c}))}showSuscessMessage(o){this.snackbar.open(o??"Trasaccion exitosa","Cerrar")}static#t=this.\u0275fac=function(a){return new(a||n)(t.LFG(F.eN),t.LFG(N.ux))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var J=r(5798),k=r(3221);const R=["table"];function Q(n,_){if(1&n){const o=t.EpF();t.TgZ(0,"section",2)(1,"div",3)(2,"div",4),t._UZ(3,"div",5),t.qZA(),t.TgZ(4,"div",6)(5,"div",7)(6,"div",8)(7,"div",9)(8,"h1")(9,"strong"),t._uU(10),t.qZA()()(),t.TgZ(11,"div",9)(12,"h6"),t._uU(13),t.qZA()(),t.TgZ(14,"div",10)(15,"div",11)(16,"app-ng-table",12,13),t.NdJ("editAction",function(c){t.CHM(o);const u=t.oxw();return t.KtG(u.edit(c))})("viewAction",function(c){t.CHM(o);const u=t.oxw();return t.KtG(u.view(c))})("deleteAction",function(c){t.CHM(o);const u=t.oxw();return t.KtG(u.deleteItem(c))})("addAction",function(){t.CHM(o);const c=t.oxw();return t.KtG(c.addNew())}),t.qZA()()()()()()()()}if(2&n){const o=t.oxw();t.Q6J("ngClass",o.disableContainer?"":"content"),t.xp6(10),t.Oqu(o.title),t.xp6(3),t.Oqu(o.subtitle),t.xp6(3),t.Q6J("config",o.configTable)}}function s(n,_){if(1&n){const o=t.EpF();t.TgZ(0,"app-ng-table",12,13),t.NdJ("editAction",function(c){t.CHM(o);const u=t.oxw();return t.KtG(u.edit(c))})("viewAction",function(c){t.CHM(o);const u=t.oxw();return t.KtG(u.view(c))})("deleteAction",function(c){t.CHM(o);const u=t.oxw();return t.KtG(u.deleteItem(c))})("addAction",function(){t.CHM(o);const c=t.oxw();return t.KtG(c.addNew())}),t.qZA()}if(2&n){const o=t.oxw();t.Q6J("config",o.configTable)}}let C=(()=>{class n{constructor(o,a,c,u,f){this.router=o,this.snackBar=a,this.dialogService=c,this.crudService=u,this.pasoParametrosService=f,this.showCreateButton=!0,this.hideContainer=!1,this.disableContainer=!1}ngOnInit(){console.log("INIT CRUD CONTAINER")}addNew(){this.modalForm.create.action&&this.modalForm.create.action(null),this.modalForm.create.urlView?(this.pasoParametrosService.adicionarParametro("data",{}),this.pasoParametrosService.adicionarParametro("modoEditar",!1),this.router.navigate([this.modalForm.create.urlView])):this.showModal(this.modalForm.create,null)}edit(o){this.modalForm.edit.action&&this.modalForm.edit.action(o),this.modalForm.edit.urlView?(this.pasoParametrosService.adicionarParametro("data",o),this.pasoParametrosService.adicionarParametro("modoEditar",!0),this.router.navigate([this.modalForm.edit.urlView])):this.showModal(this.modalForm.edit,o)}view(o){this.modalForm.view.action&&this.modalForm.view.action(o),this.modalForm.view.urlView?(this.pasoParametrosService.adicionarParametro("data",o),this.router.navigate([this.modalForm.view.urlView])):this.dialogService.show({component:I,...this.modalForm.view.modal,dataComponent:{data:o,config:this.modalForm.view.configView},hideDefaultActions:!0}).subscribe(a=>{console.log(a)})}deleteItem(o){let a;a="true"===localStorage.getItem("isRtl")?"rtl":"ltr",this.showModal(this.modalForm.delete,o)}showModal(o,a){const c={...o.modal,dataComponent:{action:o.actionType,row:a},icon:this.dialogIcon};"delete"===o.actionType&&!o.modal.actions?.primary&&(c.actions||(c.actions={}),c.actions.primary="Eliminar"),this.dialogService.show(c).subscribe(u=>{if(u.estado){let f;if(o.urlEndpoint)switch(o.actionType){case"add":f=this.crudService.postData(o.urlEndpoint,u.data);break;case"delete":f=this.crudService.deleteData(o.urlEndpoint,a.id);break;case"edit":f=this.crudService.putData(o.urlEndpoint,u.data)}else if(console.warn('No se implemento el campo urlEndpoint por lo tanto se utilizara "actionModalAccept"'),f=o.actionModalAccept(u.data),console.log(f),!f)return void this.table.findData();f.subscribe(S=>{this.table.findData()})}})}static#t=this.\u0275fac=function(a){return new(a||n)(t.Y36(E.F0),t.Y36(N.ux),t.Y36(O.x),t.Y36(P),t.Y36(J.T))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-crud-container"]],viewQuery:function(a,c){if(1&a&&t.Gf(R,5),2&a){let u;t.iGM(u=t.CRH())&&(c.table=u.first)}},inputs:{title:"title",subtitle:"subtitle",dialogIcon:"dialogIcon",showCreateButton:"showCreateButton",filterTable:"filterTable",configTable:"configTable",modalForm:"modalForm",events:"events",hideContainer:"hideContainer",disableContainer:"disableContainer"},decls:2,vars:2,consts:[[3,"ngClass",4,"ngIf"],[3,"config","editAction","viewAction","deleteAction","addAction",4,"ngIf"],[3,"ngClass"],[1,"content-block"],[1,"block-header"],[2,"margin-top","16px"],[1,"row"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"card"],[1,"header"],[1,"row","clearfix"],[1,"col-xs-12","col-sm-12","col-md-12","col-lg-12"],[3,"config","editAction","viewAction","deleteAction","addAction"],["table",""]],template:function(a,c){1&a&&(t.YNc(0,Q,18,4,"section",0),t.YNc(1,s,2,1,"app-ng-table",1)),2&a&&(t.Q6J("ngIf",!c.hideContainer),t.xp6(1),t.Q6J("ngIf",c.hideContainer))},dependencies:[m.mk,m.O5,k.i]})}return n})()},3221:(U,A,r)=>{r.d(A,{i:()=>Y});var e=r(5879),x=r(5313),t=r(732),m=r(6223),b=r(9862),w=r(1464),M=r(8875),D=r(6814),I=r(9177),E=r(617),N=r(2599),O=r(1476),T=r(2296),v=r(4170),y=r(2032);const F=["paginator"];function P(l,h){if(1&l&&(e.TgZ(0,"mat-form-field",13)(1,"mat-icon",14),e._uU(2,"search"),e.qZA(),e._UZ(3,"input",15),e.qZA()),2&l){const i=e.oxw();e.xp6(3),e.Q6J("formControl",i.controlFilter)}}function J(l,h){1&l&&e._UZ(0,"div")}function k(l,h){if(1&l){const i=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){e.CHM(i);const d=e.oxw();return e.KtG(d.addAction.emit())}),e.TgZ(1,"mat-icon",17),e._uU(2,"add"),e.qZA()()}}function R(l,h){if(1&l&&(e.TgZ(0,"th",18),e._uU(1),e.qZA()),2&l){const i=h.$implicit;e.xp6(1),e.hij(" ",i," ")}}function Q(l,h){1&l&&(e.TgZ(0,"th",18),e._uU(1,"Acciones"),e.qZA())}function s(l,h){if(1&l&&(e.TgZ(0,"tr")(1,"td",19),e._uU(2," No hay datos "),e.qZA()()),2&l){const i=e.oxw();e.xp6(1),e.uIk("colspan",i.config.headerColumns.length+1)}}function C(l,h){if(1&l&&(e.TgZ(0,"td",21),e._UZ(1,"span",22),e.qZA()),2&l){const i=h.$implicit,p=h.index,d=e.oxw(),g=d.index,H=d.$implicit,Z=e.oxw();e.Akn(null!=Z.config&&Z.config.widthColumns&&null!=Z.config&&Z.config.widthColumns[g]?"flex: 0 0 "+Z.config.widthColumns[g]:""),e.s9C("id",g+"n"),e.xp6(1),e.Q6J("innerHTML",Z.toMapper(H,i,p),e.oJD)}}function n(l,h){if(1&l){const i=e.EpF();e.TgZ(0,"button",26),e.NdJ("click",function(d){return d.stopPropagation()})("click",function(){e.CHM(i);const d=e.oxw(2).$implicit,g=e.oxw();return e.KtG(g.edit(d))}),e._UZ(1,"app-feather-icons",27),e.qZA()}if(2&l){const i=h.$implicit;e.xp6(1),e.Tol("tbl-fav-edit"),e.Q6J("icon",i.icon)}}function _(l,h){if(1&l){const i=e.EpF();e.TgZ(0,"mat-slide-toggle",28),e.NdJ("click",function(){e.CHM(i);const d=e.oxw(2).$implicit,g=e.oxw();return e.KtG(g.checkRow(d))}),e.qZA()}}function o(l,h){if(1&l){const i=e.EpF();e.TgZ(0,"button",26),e.NdJ("click",function(d){return d.stopPropagation()})("click",function(){e.CHM(i);const d=e.oxw(2).$implicit,g=e.oxw();return e.KtG(g.view(d))}),e._UZ(1,"app-feather-icons",27),e.qZA()}2&l&&(e.xp6(1),e.Tol("tbl-fav-edit"),e.Q6J("icon","search"))}function a(l,h){if(1&l){const i=e.EpF();e.TgZ(0,"button",26),e.NdJ("click",function(d){return d.stopPropagation()})("click",function(){e.CHM(i);const d=e.oxw(2).$implicit,g=e.oxw();return e.KtG(g.edit(d))}),e._UZ(1,"app-feather-icons",27),e.qZA()}2&l&&(e.xp6(1),e.Tol("tbl-fav-edit"),e.Q6J("icon","edit"))}function c(l,h){if(1&l){const i=e.EpF();e.TgZ(0,"button",26),e.NdJ("click",function(d){return d.stopPropagation()})("click",function(){e.CHM(i);const d=e.oxw(2).$implicit,g=e.oxw();return e.KtG(g.deleteItem(d))}),e._UZ(1,"app-feather-icons",27),e.qZA()}2&l&&(e.xp6(1),e.Tol("tbl-fav-delete"),e.Q6J("icon","trash-2"))}function u(l,h){if(1&l&&(e.TgZ(0,"td",18),e.YNc(1,n,2,3,"button",23),e.YNc(2,_,1,0,"mat-slide-toggle",24),e.ynx(3),e.YNc(4,o,2,3,"button",25),e.YNc(5,a,2,3,"button",25),e.YNc(6,c,2,3,"button",25),e.BQk(),e.qZA()),2&l){const i=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",null==i.config?null:i.config.actions),e.xp6(1),e.Q6J("ngIf",i.config.checkbox),e.xp6(2),e.Q6J("ngIf",!(null!=i.config.hideDefaultActions&&i.config.hideDefaultActions.view)),e.xp6(1),e.Q6J("ngIf",!(null!=i.config.hideDefaultActions&&i.config.hideDefaultActions.edit)),e.xp6(1),e.Q6J("ngIf",!(null!=i.config.hideDefaultActions&&i.config.hideDefaultActions.delete))}}function f(l,h){if(1&l&&(e.TgZ(0,"tr"),e.YNc(1,C,2,4,"td",20),e.YNc(2,u,7,5,"td",10),e.qZA()),2&l){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",null==i.config?null:i.config.keys),e.xp6(1),e.Q6J("ngIf",!i.hideColumnActions)}}function S(l,h){if(1&l&&e._UZ(0,"mat-paginator",29,30),2&l){const i=e.oxw();e.Q6J("pageSizeOptions",i.pageSizeOptions)("length",i.lengthData)}}let Y=(()=>{class l{set config(i){this._config=i}get config(){return this._config}get page(){return this.paginator?.pageIndex||0}get pageSize(){return this.paginator?.pageSize||5}get pageSizeOptions(){return this.config.pageableOptions?.pageSizeOptions||[5,10,25,100]}set matPaginator(i){this._paginator=i,this.subcriptionPaginator&&this.subcriptionPaginator.unsubscribe(),this.subcriptionPaginator=this.paginator?.page.subscribe(()=>{this.findData()})}get paginator(){return this._paginator}get hideColumnActions(){return this.config?.hideDefaultActions?.edit&&this.config?.hideDefaultActions?.delete&&this.config?.hideDefaultActions?.view&&(!this.config?.actions||0===this._config.actions?.length)}constructor(i,p,d){this.httpClient=i,this.mappingPipe=p,this.filterPipe=d,this.checked=[],this.editAction=new e.vpe,this.deleteAction=new e.vpe,this.viewAction=new e.vpe,this.addAction=new e.vpe,this.checkedChange=new e.vpe,this.dataSource=new x.by,this.lengthData=0,this.controlFilter=new m.NI(""),this.timeToSearch=500}ngOnInit(){this.findData(),this.controlFilter.valueChanges.subscribe(i=>{this.config.pageable?(clearTimeout(this.typingTimer),this.typingTimer=setTimeout(()=>{this.findData()},this.timeToSearch)):this.dataSource.data=this.filterPipe.transform(this.config.allData,i,this.config.keys)})}findData(){if(this.config.urlData){const i={};this.config.pageable&&(i[this.config.pageableOptions?.pageKey||"page"]=this.page,i[this.config.pageableOptions?.sizeKey||"size"]=this.pageSize,i.query=this.controlFilter.value,this.config.pageableOptions?.otherParams&&Object.keys(this.config.pageableOptions?.otherParams).forEach(p=>{i[p]=this.config.pageableOptions?.otherParams[p]}),console.log(i)),this.susbcribeHttpData?.unsubscribe(),this.susbcribeHttpData=this.httpClient.get(this.config.urlData,{params:i}).subscribe(p=>{p?this.config.dataOptions?.dataKey?this.dataSource=p[this.config.dataOptions?.dataKey]:this.config.pageable?(this.dataSource.data=p.content,this.lengthData=p.totalElements):(this.dataSource.data=p,this.lengthData=p.length):this.dataSource.data=[]})}else this.dataSource.data=this.config.allData}toMapper(i,p,d){let g="";return g=p.split(".").length>0?(0,t.L)(i,p):i[p],this.config.typeColumns&&this.config.typeColumns[d]?this.mappingPipe.transform(g,this.config.typeColumns[d]):this.config.mapperColums&&this.config.mapperColums[d]?this.config.mapperColums[d](g,i):g}checkRow(i){this.checked.find(p=>p===i)?this.checked=this.checked.filter(p=>p!==i):this.checked.push(i),this.checkedChange.emit(this.checked)}edit(i){this.editAction.emit(i)}deleteItem(i){this.deleteAction.emit(i)}view(i){this.viewAction.emit(i)}static#t=this.\u0275fac=function(p){return new(p||l)(e.Y36(b.eN),e.Y36(w.R),e.Y36(M.G))};static#e=this.\u0275cmp=e.Xpm({type:l,selectors:[["app-ng-table"]],viewQuery:function(p,d){if(1&p&&e.Gf(F,5),2&p){let g;e.iGM(g=e.CRH())&&(d.matPaginator=g.first)}},inputs:{config:"config",checked:"checked"},outputs:{editAction:"editAction",deleteAction:"deleteAction",viewAction:"viewAction",addAction:"addAction",checkedChange:"checkedChange"},decls:19,vars:9,consts:[[1,"card"],[1,"header"],[1,"ng-header-table"],["appearance","fill",4,"ngIf"],[4,"ngIf"],["mat-mini-fab","","color","primary",3,"click",4,"ngIf"],[1,"tableBody"],[1,"table-responsive"],["id","ng-table-dynamic",1,"table","display","product-overview","mb-30"],["class","text-center",4,"ngFor","ngForOf"],["class","text-center",4,"ngIf"],[4,"ngFor","ngForOf"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions","length",4,"ngIf"],["appearance","fill"],["matPrefix",""],["matInput","","type","text","placeholder","Escriba para filtrar",3,"formControl"],["mat-mini-fab","","color","primary",3,"click"],[1,"col-white"],[1,"text-center"],[1,"text-center","no-data"],["class","text-center",3,"id","style",4,"ngFor","ngForOf"],[1,"text-center",3,"id"],[3,"innerHTML"],["mat-icon-button","","class","tbl-action-btn",3,"click",4,"ngFor","ngForOf"],[3,"click",4,"ngIf"],["mat-icon-button","","class","tbl-action-btn",3,"click",4,"ngIf"],["mat-icon-button","",1,"tbl-action-btn",3,"click"],[3,"icon"],[3,"click"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions","length"],["paginator",""]],template:function(p,d){if(1&p&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3),e.qZA()(),e.TgZ(4,"div",2),e.YNc(5,P,4,1,"mat-form-field",3),e.YNc(6,J,1,0,"div",4),e.YNc(7,k,3,0,"button",5),e.qZA(),e.TgZ(8,"div",6)(9,"div",7)(10,"table",8)(11,"thead")(12,"tr"),e.YNc(13,R,2,1,"th",9),e.YNc(14,Q,2,0,"th",10),e.qZA()(),e.TgZ(15,"tbody"),e.YNc(16,s,3,1,"tr",4),e.YNc(17,f,3,2,"tr",11),e.qZA()(),e.YNc(18,S,2,2,"mat-paginator",12),e.qZA()()()),2&p){let g;e.xp6(3),e.Oqu(d.config.title),e.xp6(2),e.Q6J("ngIf",null===(g=d.config.showFilter)||void 0===g||g),e.xp6(1),e.Q6J("ngIf",!d.config.showFilter),e.xp6(1),e.Q6J("ngIf",!(null!=d.config.hideDefaultActions&&d.config.hideDefaultActions.add)),e.xp6(6),e.Q6J("ngForOf",d.config.headerColumns),e.xp6(1),e.Q6J("ngIf",!d.hideColumnActions),e.xp6(2),e.Q6J("ngIf",0===d.dataSource.data.length),e.xp6(1),e.Q6J("ngForOf",d.dataSource.data),e.xp6(1),e.Q6J("ngIf",!d.config.hidePaginator)}},dependencies:[D.sg,D.O5,I.A,E.Hw,N.Rr,O.NW,T.RK,T.nh,v.KE,v.qo,y.Nt,m.Fj,m.JJ,m.oH],styles:[".no-data[_ngcontent-%COMP%]{height:150px}.ng-header-table[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:0 16px}"]})}return l})()}}]);