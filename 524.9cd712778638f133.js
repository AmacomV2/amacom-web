"use strict";(self.webpackChunkamacom=self.webpackChunkamacom||[]).push([[524],{5739:(R,v,p)=>{function e(s,u,i,a,d,n,c){try{var o=s[n](c),r=o.value}catch(l){return void i(l)}o.done?u(r):Promise.resolve(r).then(a,d)}p.d(v,{x:()=>P});var t=p(5879),g=p(9347);let _=(()=>{class s{constructor(i){this.viewContainerRef=i}static#t=this.\u0275fac=function(a){return new(a||s)(t.Y36(t.s_b))};static#e=this.\u0275dir=t.lG2({type:s,selectors:[["","adHost",""]]})}return s})();var T=p(6814),Z=p(617),C=p(2296);const y=["header"];function O(s,u){if(1&s&&t._UZ(0,"img",11),2&s){const i=t.oxw(2);t.Q6J("src",null==i.data.icon?null:i.data.icon.resource,t.LSH)("width",(null==i.data.icon?null:i.data.icon.width)||45)("height",(null==i.data.icon?null:i.data.icon.heigth)||45)}}function w(s,u){if(1&s&&(t.TgZ(0,"mat-icon"),t._uU(1),t.qZA()),2&s){const i=t.oxw(2);t.xp6(1),t.Oqu(i.data.icon.resource)}}function D(s,u){if(1&s&&(t.ynx(0),t.YNc(1,O,1,3,"img",9),t.YNc(2,w,2,1,"ng-template",null,10,t.W1O),t.BQk()),2&s){const i=t.MAs(3),a=t.oxw();t.xp6(1),t.Q6J("ngIf",a.data.icon&&"img"===a.data.icon.type)("ngIfElse",i)}}function b(s,u){if(1&s){const i=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(i);const d=t.oxw();return t.KtG(d.dialogRef.close())}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}function f(s,u){}function x(s,u){if(1&s){const i=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(i);const d=t.oxw(2);return t.KtG(d.aceptar())}),t._uU(1),t.qZA()}if(2&s){const i=t.oxw(2);t.Q6J("mat-dialog-close",1),t.xp6(1),t.hij(" ",null!=i.data.actions&&i.data.actions.primary?i.data.actions.primary:"Aceptar"," ")}}function M(s,u){if(1&s){const i=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(){t.CHM(i);const d=t.oxw(2);return t.KtG(d.cancelar())}),t._uU(1),t.qZA()}if(2&s){const i=t.oxw(2);t.xp6(1),t.hij(" ",null!=i.data.actions&&i.data.actions.secondary?i.data.actions.secondary:"Cancelar"," ")}}function E(s,u){if(1&s){const i=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){const n=t.CHM(i).$implicit;return t.KtG(n.action())}),t._uU(1),t.qZA()}if(2&s){const i=u.$implicit;t.Q6J("color",i.type)("ngStyle",i.customStyles),t.xp6(1),t.hij(" ",i.nombre," ")}}function I(s,u){if(1&s&&(t.TgZ(0,"div",13),t.YNc(1,x,2,2,"button",14),t.YNc(2,M,2,1,"button",15),t.YNc(3,E,2,3,"button",16),t.qZA()),2&s){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",!i.data.hideDefaultActions),t.xp6(1),t.Q6J("ngIf",!i.data.hideDefaultActions),t.xp6(1),t.Q6J("ngForOf",null==i.data.actions?null:i.data.actions.otherButtons)}}let N=(()=>{class s{constructor(i,a,d){this.data=i,this.dialogRef=a,this.cdr=d,this.accion=new t.vpe,this.otherButtons=[],this.dragPosition=null}ngOnInit(){if(this.adHost){const i=this.adHost.viewContainerRef;i.clear(),this.componentRef=i.createComponent(this.data.component),this.componentRef.instance.data=this.data.dataComponent,this.otherButtons=this.data.actions?.otherButtons?this.data.actions.otherButtons:[]}}removeTransition(){document.querySelector(".modalax12789").style.transition="none"}addTransition(){document.querySelector(".modalax12789").style.transition="transform 300ms ease-out"}moveToPosition(i){const a=document.querySelector(".modalax12789");a.style.transform=`translate(${i.x}px, ${i.y}px)`,setTimeout(()=>{a.style.transform="translate(0px, 0px)",this.dragPosition=i},300)}resetPosition(){this.dragPosition={x:0,y:0}}ngAfterViewInit(){setTimeout(()=>{this.form=this.componentRef?.instance?.form},0)}aceptar(){this.form?.invalid?this.form?.markAllAsTouched():this.accion.emit({data:this.form?.getRawValue(),estado:!0,dialogRef:null})}cerrar(){var i=this;return function h(s){return function(){var u=this,i=arguments;return new Promise(function(a,d){var n=s.apply(u,i);function c(r){e(n,a,d,c,o,"next",r)}function o(r){e(n,a,d,c,o,"throw",r)}c(void 0)})}}(function*(){i.dialogRef.close(),i.accion.emit({data:null,estado:!1,dialogRef:null})})()}cancelar(){this.componentRef.instance.cancelar?(console.info("Method cancelar() exits at:\u0323\u0323 "+this.componentRef.componentType.name),this.componentRef.instance.cancelar()):this.cerrar()}static#t=this.\u0275fac=function(a){return new(a||s)(t.Y36(g.WI),t.Y36(g.so),t.Y36(t.sBO))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-dialog"]],viewQuery:function(a,d){if(1&a&&(t.Gf(_,7),t.Gf(y,5)),2&a){let n;t.iGM(n=t.CRH())&&(d.adHost=n.first),t.iGM(n=t.CRH())&&(d.header=n.first)}},outputs:{accion:"accion"},decls:12,vars:4,consts:[[1,"addContainer"],[1,"modalHeader"],[1,"editRowModal"],[1,"modalHeader","clearfix"],[4,"ngIf"],["mat-icon-button","","class","modal-close-button","aria-label","Close dialog",3,"click",4,"ngIf"],["mat-dialog-content",""],["adHost",""],["mat-dialog-actions","","class","modal-actions",4,"ngIf"],["alt","avatar",3,"src","width","height",4,"ngIf","ngIfElse"],["icon",""],["alt","avatar",3,"src","width","height"],["mat-icon-button","","aria-label","Close dialog",1,"modal-close-button",3,"click"],["mat-dialog-actions","",1,"modal-actions"],["mat-flat-button","","color","primary",3,"mat-dialog-close","click",4,"ngIf"],["mat-flat-button","","color","warn",3,"click",4,"ngIf"],["mat-flat-button","",3,"color","ngStyle","click",4,"ngFor","ngForOf"],["mat-flat-button","","color","primary",3,"mat-dialog-close","click"],["mat-flat-button","","color","warn",3,"click"],["mat-flat-button","",3,"color","ngStyle","click"]],template:function(a,d){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,D,4,2,"ng-container",4),t.TgZ(5,"h2")(6,"strong"),t._uU(7),t.qZA()()()(),t.YNc(8,b,3,0,"button",5),t.qZA(),t.TgZ(9,"div",6),t.YNc(10,f,0,0,"ng-template",7),t.qZA(),t.YNc(11,I,4,3,"div",8),t.qZA()),2&a&&(t.xp6(4),t.Q6J("ngIf",d.data.icon),t.xp6(3),t.hij(" ",d.data.title," "),t.xp6(1),t.Q6J("ngIf",!d.data.hideCloseButtonInTopBar),t.xp6(3),t.Q6J("ngIf",!d.data.hideDefaultActions||(null==d.data.actions?null:d.data.actions.otherButtons)))},dependencies:[T.sg,T.O5,T.PC,g.ZT,g.xY,g.H8,Z.Hw,C.lW,C.RK,_],styles:[".modal-actions[_ngcontent-%COMP%]{display:flex;justify-content:center}"]})}return s})();var F=p(5592);let P=(()=>{class s{constructor(i){this.dialog=i,this.referencias=new Map}show(i){return new F.y(a=>{const d=this.dialog.open(N,{disableClose:!0,panelClass:"modalax12789",maxHeight:i.maxHeight||"90vh",minHeight:i.minHeight||"300px",maxWidth:i.maxWidth||"600px",minWidth:i.minWidth||"300px",width:i.width||"95%",autoFocus:!1,data:i});this.referencias.set(d,d),this.dialogRef=d,this.dialogRef.componentInstance.accion.subscribe(n=>{n.dialogRef=d,a.next(n)},n=>{a.error(n)})})}close(i){i?(this.referencias.get(i)?.close(),this.referencias.delete(i)):this.dialogRef.close()}static#t=this.\u0275fac=function(a){return new(a||s)(t.LFG(g.uw))};static#e=this.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},732:(R,v,p)=>{function e(h,t){let g=h;if(0===t.split(".").length)return h[t];try{t.split(".").forEach(_=>{g=g[_]})}catch(_){console.error("Error al obtener el valor de la key: "+t,_),g=_}return g}p.d(v,{L:()=>e})},4524:(R,v,p)=>{p.d(v,{_:()=>i});var e=p(9347),h=p(732),t=p(5879),g=p(6814),_=p(1464);function T(a,d){if(1&a&&(t.ynx(0),t._uU(1),t.ALo(2,"mapping"),t.BQk()),2&a){const n=t.oxw().$implicit,c=t.oxw();t.xp6(1),t.hij(" ",t.xi3(2,1,c.getValueFromKey(n.key),"date")," ")}}function Z(a,d){if(1&a&&t._uU(0),2&a){const n=t.oxw().$implicit,c=t.oxw();t.hij(" ",c.getValueFromKey(n.key)," ")}}function C(a,d){if(1&a&&(t.TgZ(0,"li")(1,"p")(2,"span",2)(3,"strong"),t._uU(4),t.qZA()(),t.YNc(5,T,3,4,"ng-container",3),t.YNc(6,Z,1,1,"ng-template",null,4,t.W1O),t.qZA()()),2&a){const n=d.$implicit,c=t.MAs(7);t.xp6(4),t.hij("",n.label,": "),t.xp6(1),t.Q6J("ngIf",n.type)("ngIfElse",c)}}let y=(()=>{class a{constructor(n){this.data=n}ngOnInit(){console.log(this.data)}getValueFromKey(n){return(0,h.L)(this.data.data,n)}static#t=this.\u0275fac=function(c){return new(c||a)(t.Y36(e.WI))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-modal-view"]],decls:2,vars:1,consts:[[1,"clearfix"],[4,"ngFor","ngForOf"],[1,"font-weight-bold"],[4,"ngIf","ngIfElse"],["noMapping",""]],template:function(c,o){1&c&&(t.TgZ(0,"ul",0),t.YNc(1,C,8,3,"li",1),t.qZA()),2&c&&(t.xp6(1),t.Q6J("ngForOf",o.data.config))},dependencies:[g.sg,g.O5,_.R]})}return a})();var O=p(1896),w=p(2939),D=p(5739),b=p(553),f=p(9397),x=p(6306),M=p(9862);let E=(()=>{class a{constructor(n,c){this.http=n,this.snackbar=c}postData(n,c){return this.http.post(b.N.apiUrl+n,c).pipe((0,f.b)(o=>{this.showSuscessMessage("Registro creado correctamente")}),(0,x.K)(o=>{throw this.snackbar.open(o,"Cerrar"),o}))}deleteData(n,c){return this.http.delete(b.N.apiUrl+n+"/"+c).pipe((0,f.b)(o=>{this.showSuscessMessage("Registro eliminado correctamente")}),(0,x.K)(o=>{throw this.snackbar.open(o,"Cerrar"),o}))}putData(n,c){return this.http.put(b.N.apiUrl+n,c).pipe((0,f.b)(o=>{this.showSuscessMessage("Registro actualizado correctamente")}),(0,x.K)(o=>{throw this.snackbar.open(o,"Cerrar"),o}))}showSuscessMessage(n){this.snackbar.open(n??"Trasaccion exitosa","Cerrar")}static#t=this.\u0275fac=function(c){return new(c||a)(t.LFG(M.eN),t.LFG(w.ux))};static#e=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var I=p(5798),N=p(617),F=p(3221),P=p(2296);const s=["table"];function u(a,d){if(1&a&&(t.TgZ(0,"div",20)(1,"ul",21)(2,"li",22)(3,"h2"),t._uU(4),t.qZA()(),t.TgZ(5,"li",23)(6,"label",24)(7,"i",25),t._uU(8),t.qZA()(),t._UZ(9,"input",26),t.qZA()()()),2&a){const n=d.$implicit;t.xp6(4),t.Oqu(n.label),t.xp6(4),t.Oqu(n.icon?n.icon:"search"),t.xp6(1),t.Q6J("placeholder",n.placeholder)}}let i=(()=>{class a{constructor(n,c,o,r,l){this.router=n,this.snackBar=c,this.dialogService=o,this.crudService=r,this.pasoParametrosService=l,this.showCreateButton=!0}ngOnInit(){console.log("INIT CRUD CONTAINER")}addNew(){this.modalForm.create.urlView?(this.pasoParametrosService.adicionarParametro("data",{}),this.pasoParametrosService.adicionarParametro("modoEditar",!1),this.router.navigate([this.modalForm.create.urlView])):this.showModal(this.modalForm.create,null)}edit(n){this.modalForm.edit.urlView?(this.pasoParametrosService.adicionarParametro("data",n),this.pasoParametrosService.adicionarParametro("modoEditar",!0),this.router.navigate([this.modalForm.create.urlView])):this.showModal(this.modalForm.edit,n)}view(n){this.modalForm.view.urlView?(this.pasoParametrosService.adicionarParametro("data",n),this.router.navigate([this.modalForm.view.urlView])):this.dialogService.show({component:y,...this.modalForm.view.modal,dataComponent:{data:n,config:this.modalForm.view.configView},hideDefaultActions:!0}).subscribe(c=>{console.log(c)})}deleteItem(n){let c;c="true"===localStorage.getItem("isRtl")?"rtl":"ltr",this.showModal(this.modalForm.delete,n)}showModal(n,c){const o={...n.modal,dataComponent:{action:n.actionType,row:c},icon:this.dialogIcon};"delete"===n.actionType&&!n.modal.actions?.primary&&(o.actions||(o.actions={}),o.actions.primary="Eliminar"),this.dialogService.show(o).subscribe(r=>{if(r.estado){let l;switch(n.actionType){case"add":l=this.crudService.postData(n.urlEndpoint,r.data);break;case"delete":l=this.crudService.deleteData(n.urlEndpoint,c.id);break;case"edit":l=this.crudService.putData(n.urlEndpoint,r.data)}l.subscribe(m=>{this.table.findData()})}})}static#t=this.\u0275fac=function(c){return new(c||a)(t.Y36(O.F0),t.Y36(w.ux),t.Y36(D.x),t.Y36(E),t.Y36(I.T))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-crud-container"]],viewQuery:function(c,o){if(1&c&&t.Gf(s,7),2&c){let r;t.iGM(r=t.CRH())&&(o.table=r.first)}},inputs:{title:"title",subtitle:"subtitle",dialogIcon:"dialogIcon",showCreateButton:"showCreateButton",filterTable:"filterTable",configTable:"configTable",modalForm:"modalForm",events:"events"},decls:27,vars:4,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[2,"margin-top","16px"],[1,"row"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"card"],[1,"header"],[1,"materialTableHeader"],["class","col-xl-3 col-sm-12 col-md-12 col-lg-12",4,"ngFor","ngForOf"],[1,"right"],["color","white",1,"tbl-export-btn"],[1,"tbl-header-btn"],["matTooltip","Adicionar",1,"m-l-10"],["mat-mini-fab","","color","primary",3,"click"],[1,"col-white"],[1,"row","clearfix"],[1,"col-xs-12","col-sm-12","col-md-12","col-lg-12"],[3,"config","editAction","viewAction","deleteAction"],["table",""],[1,"col-xl-3","col-sm-12","col-md-12","col-lg-12"],[1,"header-buttons-left","ms-0"],[1,"tbl-title"],[1,"tbl-search-box"],["for","search-input"],[1,"material-icons","search-icon"],["type","text","aria-label","Search box",1,"browser-default","search-field",3,"placeholder"]],template:function(c,o){1&c&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2),t._UZ(3,"div",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h1")(9,"strong"),t._uU(10),t.qZA()()(),t.TgZ(11,"div",7)(12,"h6"),t._uU(13),t.qZA()(),t.TgZ(14,"div",8),t.YNc(15,u,10,3,"div",9),t.TgZ(16,"div",10)(17,"ul",11)(18,"li",12)(19,"div",13)(20,"button",14),t.NdJ("click",function(){return o.addNew()}),t.TgZ(21,"mat-icon",15),t._uU(22,"add"),t.qZA()()()()()()(),t.TgZ(23,"div",16)(24,"div",17)(25,"app-ng-table",18,19),t.NdJ("editAction",function(l){return o.edit(l)})("viewAction",function(l){return o.view(l)})("deleteAction",function(l){return o.deleteItem(l)}),t.qZA()()()()()()()()),2&c&&(t.xp6(10),t.Oqu(o.title),t.xp6(3),t.Oqu(o.subtitle),t.xp6(2),t.Q6J("ngForOf",o.filterTable),t.xp6(10),t.Q6J("config",o.configTable))},dependencies:[g.sg,N.Hw,F.i,P.nh]})}return a})()},3221:(R,v,p)=>{p.d(v,{i:()=>d});var e=p(5879),h=p(5313),t=p(732),g=p(6223),_=p(9862),T=p(1464),Z=p(8875),C=p(6814),y=p(9177),O=p(617),w=p(2599),D=p(1476),b=p(2296),f=p(4170),x=p(2032);const M=["paginator"];function E(n,c){if(1&n&&(e.TgZ(0,"mat-form-field",12)(1,"mat-icon",13),e._uU(2,"search"),e.qZA(),e._UZ(3,"input",14),e.qZA()),2&n){const o=e.oxw();e.xp6(3),e.Q6J("formControl",o.controlFilter)}}function I(n,c){if(1&n&&(e.TgZ(0,"th",8),e._uU(1),e.qZA()),2&n){const o=c.$implicit;e.xp6(1),e.hij(" ",o," ")}}function N(n,c){if(1&n&&(e.TgZ(0,"tr")(1,"td",15),e._uU(2," No hay datos "),e.qZA()()),2&n){const o=e.oxw();e.xp6(1),e.uIk("colspan",o.config.headerColumns.length+1)}}function F(n,c){if(1&n&&(e.TgZ(0,"td",19),e._UZ(1,"span",20),e.qZA()),2&n){const o=c.$implicit,r=c.index,l=e.oxw(),m=l.index,S=l.$implicit,A=e.oxw();e.Akn(null!=A.config&&A.config.widthColumns&&null!=A.config&&A.config.widthColumns[m]?"flex: 0 0 "+A.config.widthColumns[m]:""),e.s9C("id",m+"n"),e.xp6(1),e.Q6J("innerHTML",A.toMapper(S,o,r),e.oJD)}}function P(n,c){if(1&n){const o=e.EpF();e.TgZ(0,"button",21),e.NdJ("click",function(l){return l.stopPropagation()})("click",function(){e.CHM(o);const l=e.oxw().$implicit,m=e.oxw();return e.KtG(m.edit(l))}),e._UZ(1,"app-feather-icons",22),e.qZA()}if(2&n){const o=c.$implicit;e.xp6(1),e.Tol("tbl-fav-edit"),e.Q6J("icon",o.icon)}}function s(n,c){if(1&n){const o=e.EpF();e.TgZ(0,"mat-slide-toggle",23),e.NdJ("click",function(){e.CHM(o);const l=e.oxw().$implicit,m=e.oxw();return e.KtG(m.checkRow(l))}),e.qZA()}}function u(n,c){if(1&n){const o=e.EpF();e.ynx(0),e.TgZ(1,"button",21),e.NdJ("click",function(l){return l.stopPropagation()})("click",function(){e.CHM(o);const l=e.oxw().$implicit,m=e.oxw();return e.KtG(m.view(l))}),e._UZ(2,"app-feather-icons",22),e.qZA(),e.TgZ(3,"button",21),e.NdJ("click",function(l){return l.stopPropagation()})("click",function(){e.CHM(o);const l=e.oxw().$implicit,m=e.oxw();return e.KtG(m.edit(l))}),e._UZ(4,"app-feather-icons",22),e.qZA(),e.TgZ(5,"button",21),e.NdJ("click",function(l){return l.stopPropagation()})("click",function(){e.CHM(o);const l=e.oxw().$implicit,m=e.oxw();return e.KtG(m.deleteItem(l))}),e._UZ(6,"app-feather-icons",22),e.qZA(),e.BQk()}2&n&&(e.xp6(2),e.Tol("tbl-fav-edit"),e.Q6J("icon","search"),e.xp6(2),e.Tol("tbl-fav-edit"),e.Q6J("icon","edit"),e.xp6(2),e.Tol("tbl-fav-delete"),e.Q6J("icon","trash-2"))}function i(n,c){if(1&n&&(e.TgZ(0,"tr"),e.YNc(1,F,2,4,"td",16),e.TgZ(2,"td",8),e.YNc(3,P,2,3,"button",17),e.YNc(4,s,1,0,"mat-slide-toggle",18),e.YNc(5,u,7,9,"ng-container",9),e.qZA()()),2&n){const o=e.oxw();e.xp6(1),e.Q6J("ngForOf",null==o.config?null:o.config.keys),e.xp6(2),e.Q6J("ngForOf",null==o.config?null:o.config.actions),e.xp6(1),e.Q6J("ngIf",o.config.checkbox),e.xp6(1),e.Q6J("ngIf",!o.config.hideDefaultActions)}}function a(n,c){if(1&n&&e._UZ(0,"mat-paginator",24,25),2&n){const o=e.oxw();e.Q6J("pageSizeOptions",o.pageSizeOptions)}}let d=(()=>{class n{set config(o){this._config=o}get config(){return this._config}get page(){return this.paginator?.pageIndex||0}get pageSize(){return this.paginator?.pageSize||5}get pageSizeOptions(){return this.config.pageableOptions?.pageSizeOptions||[5,10,25,100]}set matPaginator(o){this._paginator=o,this.dataSource.paginator=this.paginator,this.subcriptionPaginator&&this.subcriptionPaginator.unsubscribe(),this.subcriptionPaginator=this.paginator?.page.subscribe(()=>{this.findData()})}get paginator(){return this._paginator}constructor(o,r,l){this.httpClient=o,this.mappingPipe=r,this.filterPipe=l,this.editAction=new e.vpe,this.deleteAction=new e.vpe,this.viewAction=new e.vpe,this.changeCheckRow=new e.vpe,this.dataSource=new h.by,this.controlFilter=new g.NI(""),this.timeToSearch=500,this.rowChecked=[]}ngOnInit(){this.findData(),this.controlFilter.valueChanges.subscribe(o=>{this.config.pageable?(clearTimeout(this.typingTimer),this.typingTimer=setTimeout(()=>{this.findData()},this.timeToSearch)):this.dataSource.data=this.filterPipe.transform(this.config.allData,o,this.config.keys)})}findData(){if(this.config.urlData){let o={};this.config.pageable&&(o={page:this.page,size:this.pageSize,query:this.controlFilter.value}),this.susbcribeHttpData?.unsubscribe(),this.susbcribeHttpData=this.httpClient.get(this.config.urlData,{params:o}).subscribe(r=>{r?this.config.dataOptions?.dataKey?this.dataSource=r[this.config.dataOptions?.dataKey]:this.config.pageable?(console.log(r.content),this.dataSource.data=r.content):this.dataSource.data=r:this.dataSource.data=[]})}else this.dataSource.data=this.config.allData}toMapper(o,r,l){let m="";return m=r.split(".").length>0?(0,t.L)(o,r):o[r],this.config.typeColumns&&this.config.typeColumns[l]?this.mappingPipe.transform(m,this.config.typeColumns[l]):this.config.mapperColums&&this.config.mapperColums[l]?this.config.mapperColums[l](m,o):m}checkRow(o){this.rowChecked.find(r=>r===o)?this.rowChecked=this.rowChecked.filter(r=>r!==o):this.rowChecked.push(o),this.changeCheckRow.emit(this.rowChecked)}edit(o){this.editAction.emit(o)}deleteItem(o){this.deleteAction.emit(o)}view(o){this.viewAction.emit(o)}static#t=this.\u0275fac=function(r){return new(r||n)(e.Y36(_.eN),e.Y36(T.R),e.Y36(Z.G))};static#e=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-ng-table"]],viewQuery:function(r,l){if(1&r&&e.Gf(M,5),2&r){let m;e.iGM(m=e.CRH())&&(l.matPaginator=m.first)}},inputs:{config:"config"},outputs:{editAction:"editAction",deleteAction:"deleteAction",viewAction:"viewAction",changeCheckRow:"changeCheckRow"},decls:18,vars:6,consts:[[1,"card"],[1,"header"],[2,"padding-left","15px"],["appearance","fill",4,"ngIf"],[1,"tableBody"],[1,"table-responsive"],["id","ng-table-dynamic",1,"table","display","product-overview","mb-30"],["class","text-center",4,"ngFor","ngForOf"],[1,"text-center"],[4,"ngIf"],[4,"ngFor","ngForOf"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions",4,"ngIf"],["appearance","fill"],["matPrefix",""],["matInput","","type","text","placeholder","Escriba para filtrar",3,"formControl"],[1,"text-center","no-data"],["class","text-center",3,"id","style",4,"ngFor","ngForOf"],["mat-icon-button","","class","tbl-action-btn",3,"click",4,"ngFor","ngForOf"],[3,"click",4,"ngIf"],[1,"text-center",3,"id"],[3,"innerHTML"],["mat-icon-button","",1,"tbl-action-btn",3,"click"],[3,"icon"],[3,"click"],["showFirstLastButtons","","aria-label","Select page of periodic elements",3,"pageSizeOptions"],["paginator",""]],template:function(r,l){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h2"),e._uU(3),e.qZA()(),e.TgZ(4,"div",2),e.YNc(5,E,4,1,"mat-form-field",3),e.qZA(),e.TgZ(6,"div",4)(7,"div",5)(8,"table",6)(9,"thead")(10,"tr"),e.YNc(11,I,2,1,"th",7),e.TgZ(12,"th",8),e._uU(13,"Acciones"),e.qZA()()(),e.TgZ(14,"tbody"),e.YNc(15,N,3,1,"tr",9),e.YNc(16,i,6,4,"tr",10),e.qZA()(),e.YNc(17,a,2,1,"mat-paginator",11),e.qZA()()()),2&r&&(e.xp6(3),e.Oqu(l.config.title),e.xp6(2),e.Q6J("ngIf",l.config.showFilter),e.xp6(6),e.Q6J("ngForOf",l.config.headerColumns),e.xp6(4),e.Q6J("ngIf",0===l.dataSource.data.length),e.xp6(1),e.Q6J("ngForOf",l.dataSource.data),e.xp6(1),e.Q6J("ngIf",!l.config.hidePaginator))},dependencies:[C.sg,C.O5,y.A,O.Hw,w.Rr,D.NW,b.RK,f.KE,f.qo,x.Nt,g.Fj,g.JJ,g.oH],styles:[".no-data[_ngcontent-%COMP%]{height:150px}"]})}return n})()}}]);