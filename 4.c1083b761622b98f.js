"use strict";(self.webpackChunkamacom=self.webpackChunkamacom||[]).push([[4],{6004:(S,D,r)=>{r.r(D),r.d(D,{InventoryModule:()=>Zt});var n=r(6814),b=r(1896),A=r(9182),m=r(5619),C=r(2589),t=r(5879),p=r(9862);let v=(()=>{class o extends C.n{constructor(a){super(),this.httpClient=a,this.API_URL="assets/data/issuedItems.json",this.isTblLoading=!0,this.dataChange=new m.X([])}get data(){return this.dataChange.value}getDialogData(){return this.dialogData}getAllIssuedItemss(){this.subs.sink=this.httpClient.get(this.API_URL).subscribe({next:a=>{this.isTblLoading=!1,this.dataChange.next(a)},error:a=>{this.isTblLoading=!1,console.log(a.name+" "+a.message)}})}addIssuedItems(a){this.dialogData=a}updateIssuedItems(a){this.dialogData=a}deleteIssuedItems(a){console.log(a)}static#t=this.\u0275fac=function(e){return new(e||o)(t.LFG(p.eN))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac})}return o})();var I=r(1476),Z=r(3566),_=r(8337),g=r(9347),u=r(6223);class U{constructor(l){this.id=l.id||this.getRandomID(),this.i_name=l.i_name||"",this.category=l.category||"",this.issue_date=(0,n.p6)(new Date,"yyyy-MM-dd","en")||"",this.return_date=(0,n.p6)(new Date,"yyyy-MM-dd","en")||"",this.issue_to=l.issue_to||"",this.qty=l.qty||"",this.status=l.status||"Issued"}getRandomID(){const l=()=>65536*(1+Math.random())|0;return l()+l()}}var T=r(2296),c=r(8034),x=r(4170),y=r(617),f=r(2032),k=r(7466);function z(o,l){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Item name is required "),t.qZA())}function G(o,l){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Category is required "),t.qZA())}function H(o,l){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Please select date "),t.qZA())}function K(o,l){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Please select date "),t.qZA())}function W(o,l){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Issue To is required "),t.qZA())}function X(o,l){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Quantity is required "),t.qZA())}function $(o,l){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Select status "),t.qZA())}let N=(()=>{class o{constructor(a,e,i,s){this.dialogRef=a,this.data=e,this.issuedItemsService=i,this.fb=s,this.formControl=new u.p4("",[u.kI.required]),this.action=e.action,"edit"===this.action?(this.dialogTitle=e.issuedItems.i_name,this.issuedItems=e.issuedItems):(this.dialogTitle="New Item Issue",this.issuedItems=new U({})),this.issuedItemsForm=this.createContactForm()}getErrorMessage(){return this.formControl.hasError("required")?"Required field":this.formControl.hasError("email")?"Not a valid email":""}createContactForm(){return this.fb.group({id:[this.issuedItems.id],i_name:[this.issuedItems.i_name],category:[this.issuedItems.category],issue_date:[(0,n.p6)(this.issuedItems.issue_date,"yyyy-MM-dd","en"),[u.kI.required]],return_date:[(0,n.p6)(this.issuedItems.return_date,"yyyy-MM-dd","en"),[u.kI.required]],issue_to:[this.issuedItems.issue_to],qty:[this.issuedItems.qty],status:[this.issuedItems.status]})}submit(){}onNoClick(){this.dialogRef.close()}confirmAdd(){this.issuedItemsService.addIssuedItems(this.issuedItemsForm.getRawValue())}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(g.so),t.Y36(g.WI),t.Y36(v),t.Y36(u.QS))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-form-dialog",5,"g"]],decls:82,vars:15,consts:[[1,"addContainer"],[1,"modalHeader"],[1,"editRowModal"],[1,"modalHeader","clearfix"],[1,"modal-about"],["mat-icon-button","","aria-label","Close dialog",1,"modal-close-button",3,"click"],["mat-dialog-content",""],[1,"register-form","m-4",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-xl-6","col-lg-6","col-md-12","col-sm-12","mb-2"],["appearance","outline",1,"example-full-width"],["matInput","","formControlName","i_name","required",""],["matSuffix","",1,"material-icons-two-tone","color-icon","p-3"],[4,"ngIf"],["matInput","","formControlName","category","required",""],["matInput","","formControlName","issue_date",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["matInput","","formControlName","return_date",3,"matDatepicker"],["picker1",""],["matInput","","formControlName","issue_to","required",""],["matInput","","formControlName","qty","required",""],[1,"m-b-20"],[1,"msr-3"],["aria-label","Select status","formControlName","status","required",""],["value","Issued"],["value","Returned"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-2"],[1,"example-button-row"],["mat-raised-button","","color","primary",3,"disabled","mat-dialog-close","click"],["mat-raised-button","","color","warn","tabindex","-1",3,"click"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t._uU(5),t.qZA()()(),t.TgZ(6,"button",5),t.NdJ("click",function(){return i.dialogRef.close()}),t.TgZ(7,"mat-icon"),t._uU(8,"close"),t.qZA()()(),t.TgZ(9,"div",6)(10,"form",7),t.NdJ("ngSubmit",function(){return i.submit}),t.TgZ(11,"div",8)(12,"div",9)(13,"mat-form-field",10)(14,"mat-label"),t._uU(15,"Item Name"),t.qZA(),t._UZ(16,"input",11),t.TgZ(17,"mat-icon",12),t._uU(18,"receipt"),t.qZA(),t.YNc(19,z,2,0,"mat-error",13),t.qZA()(),t.TgZ(20,"div",9)(21,"mat-form-field",10)(22,"mat-label"),t._uU(23,"Category"),t.qZA(),t._UZ(24,"input",14),t.TgZ(25,"mat-icon",12),t._uU(26,"face"),t.qZA(),t.YNc(27,G,2,0,"mat-error",13),t.qZA()()(),t.TgZ(28,"div",8)(29,"div",9)(30,"mat-form-field",10)(31,"mat-label"),t._uU(32,"Issue date"),t.qZA(),t._UZ(33,"input",15)(34,"mat-datepicker-toggle",16)(35,"mat-datepicker",null,17),t.YNc(37,H,2,0,"mat-error",13),t.qZA()(),t.TgZ(38,"div",9)(39,"mat-form-field",10)(40,"mat-label"),t._uU(41,"Return date"),t.qZA(),t._UZ(42,"input",18)(43,"mat-datepicker-toggle",16)(44,"mat-datepicker",null,19),t.YNc(46,K,2,0,"mat-error",13),t.qZA()()(),t.TgZ(47,"div",8)(48,"div",9)(49,"mat-form-field",10)(50,"mat-label"),t._uU(51,"Issue To"),t.qZA(),t._UZ(52,"input",20),t.TgZ(53,"mat-icon",12),t._uU(54,"account_circle"),t.qZA(),t.YNc(55,W,2,0,"mat-error",13),t.qZA()(),t.TgZ(56,"div",9)(57,"mat-form-field",10)(58,"mat-label"),t._uU(59,"Quantity"),t.qZA(),t._UZ(60,"input",21),t.TgZ(61,"mat-icon",12),t._uU(62,"account_circle"),t.qZA(),t.YNc(63,X,2,0,"mat-error",13),t.qZA()()(),t.TgZ(64,"div",8)(65,"div",9)(66,"div",22)(67,"mat-label",23),t._uU(68,"Status:"),t.qZA(),t.TgZ(69,"mat-radio-group",24)(70,"mat-radio-button",25),t._uU(71,"Issued"),t.qZA(),t.TgZ(72,"mat-radio-button",26),t._uU(73,"Returned"),t.qZA(),t.YNc(74,$,2,0,"mat-error",13),t.qZA()()()(),t.TgZ(75,"div",8)(76,"div",27)(77,"div",28)(78,"button",29),t.NdJ("click",function(){return i.confirmAdd()}),t._uU(79,"Save"),t.qZA(),t.TgZ(80,"button",30),t.NdJ("click",function(){return i.onNoClick()}),t._uU(81,"Cancel"),t.qZA()()()()()()()),2&e){const s=t.MAs(36),d=t.MAs(45);let h,Q,B,Y,O,P,j;t.xp6(5),t.hij(" ",i.dialogTitle," "),t.xp6(5),t.Q6J("formGroup",i.issuedItemsForm),t.xp6(9),t.Q6J("ngIf",null==(h=i.issuedItemsForm.get("i_name"))?null:h.hasError("required")),t.xp6(8),t.Q6J("ngIf",null==(Q=i.issuedItemsForm.get("category"))?null:Q.hasError("required")),t.xp6(6),t.Q6J("matDatepicker",s),t.xp6(1),t.Q6J("for",s),t.xp6(3),t.Q6J("ngIf",null==(B=i.issuedItemsForm.get("issue_date"))?null:B.hasError("required")),t.xp6(5),t.Q6J("matDatepicker",d),t.xp6(1),t.Q6J("for",d),t.xp6(3),t.Q6J("ngIf",null==(Y=i.issuedItemsForm.get("return_date"))?null:Y.hasError("required")),t.xp6(9),t.Q6J("ngIf",null==(O=i.issuedItemsForm.get("issue_to"))?null:O.hasError("required")),t.xp6(8),t.Q6J("ngIf",null==(P=i.issuedItemsForm.get("qty"))?null:P.hasError("required")),t.xp6(11),t.Q6J("ngIf",null==(j=i.issuedItemsForm.get("status"))?null:j.hasError("required")),t.xp6(4),t.Q6J("disabled",!i.issuedItemsForm.valid)("mat-dialog-close",1)}},dependencies:[n.O5,u._Y,u.Fj,u.JJ,u.JL,u.Q7,u.sg,u.u,T.lW,T.RK,c.Mq,c.hl,c.nW,g.ZT,g.xY,x.KE,x.hX,x.TO,x.R9,y.Hw,f.Nt,k.VQ,k.U0]})}return o})(),V=(()=>{class o{constructor(a,e,i){this.dialogRef=a,this.data=e,this.issuedItemsService=i}onNoClick(){this.dialogRef.close()}confirmDelete(){this.issuedItemsService.deleteIssuedItems(this.data.id)}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(g.so),t.Y36(g.WI),t.Y36(v))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-delete",5,"g"]],decls:25,vars:4,consts:[[1,"container"],["mat-dialog-title",""],["mat-dialog-content",""],[1,"clearfix"],[1,"font-weight-bold"],["mat-dialog-actions","",1,"mb-1"],["mat-flat-button","","color","warn",3,"mat-dialog-close","click"],["mat-flat-button","","tabindex","-1",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"h3",1),t._uU(2,"Are you sure?"),t.qZA(),t.TgZ(3,"div",2)(4,"ul",3)(5,"li")(6,"p")(7,"span",4),t._uU(8," Department Name: "),t.qZA(),t._uU(9),t.qZA()(),t.TgZ(10,"li")(11,"p")(12,"span",4),t._uU(13," Department Head: "),t.qZA(),t._uU(14),t.qZA()(),t.TgZ(15,"li")(16,"p")(17,"span",4),t._uU(18,"Status: "),t.qZA(),t._uU(19),t.qZA()()()(),t.TgZ(20,"div",5)(21,"button",6),t.NdJ("click",function(){return i.confirmDelete()}),t._uU(22," Delete "),t.qZA(),t.TgZ(23,"button",7),t.NdJ("click",function(){return i.onNoClick()}),t._uU(24,"Cancel"),t.qZA()()()),2&e&&(t.xp6(9),t.Oqu(i.data.category),t.xp6(5),t.Oqu(i.data.issue_to),t.xp6(5),t.hij("",i.data.status," "),t.xp6(2),t.Q6J("mat-dialog-close",1))},dependencies:[T.lW,g.ZT,g.uh,g.xY,g.H8]})}return o})();var F=r(2438),E=r(3019),R=r(7398),J=r(7884),M=r(2939),w=r(4414);const tt=["filter"];function et(o,l){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," El t\xedtulo es requerido "),t.qZA())}function it(o,l){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," La descripci\xf3n es requerida "),t.qZA())}const at=function(){return["Bitacora"]};let st=(()=>{class o extends C.n{constructor(a,e,i,s,d,h){super(),this.httpClient=a,this.dialog=e,this.issuedItemsService=i,this.snackBar=s,this.fb=d,this.router=h,this.displayedColumns=["select","i_name","category","issue_date","return_date","issue_to","qty","status","actions"],this.selection=new _.Ov(!0,[]),this.roomForm=this.fb.group({rNo:["",[u.kI.required]],rType:["",[u.kI.required]],pName:["",[u.kI.required]],aDate:["",[u.kI.required]],dDate:["",[u.kI.required]]})}ngOnInit(){this.loadData()}onSubmit(){console.log("Form Value",this.roomForm.value)}refresh(){this.loadData()}addNew(){let a;a="true"===localStorage.getItem("isRtl")?"rtl":"ltr";const e=this.dialog.open(N,{data:{issuedItems:this.issuedItems,action:"add"},direction:a});this.subs.sink=e.afterClosed().subscribe(i=>{1===i&&(this.exampleDatabase?.dataChange.value.unshift(this.issuedItemsService.getDialogData()),this.refreshTable(),this.showNotification("snackbar-success","Add Record Successfully...!!!","bottom","center"))})}editCall(a){let e;this.id=a.id,e="true"===localStorage.getItem("isRtl")?"rtl":"ltr";const i=this.dialog.open(N,{data:{issuedItems:a,action:"edit"},direction:e});this.subs.sink=i.afterClosed().subscribe(s=>{if(1===s){const d=this.exampleDatabase?.dataChange.value.findIndex(h=>h.id===this.id);null!=d&&this.exampleDatabase&&(this.exampleDatabase.dataChange.value[d]=this.issuedItemsService.getDialogData(),this.refreshTable(),this.showNotification("black","Edit Record Successfully...!!!","bottom","center"))}})}deleteItem(a){let e;this.id=a.id,e="true"===localStorage.getItem("isRtl")?"rtl":"ltr";const i=this.dialog.open(V,{data:a,direction:e});this.subs.sink=i.afterClosed().subscribe(s=>{if(1===s){const d=this.exampleDatabase?.dataChange.value.findIndex(h=>h.id===this.id);null!=d&&this.exampleDatabase&&(this.exampleDatabase.dataChange.value.splice(d,1),this.refreshTable(),this.showNotification("snackbar-danger","Delete Record Successfully...!!!","bottom","center"))}})}refreshTable(){this.paginator._changePageSize(this.paginator.pageSize)}isAllSelected(){return this.selection.selected.length===this.dataSource.renderedData.length}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource.renderedData.forEach(a=>this.selection.select(a))}removeSelectedRows(){const a=this.selection.selected.length;this.selection.selected.forEach(e=>{const i=this.dataSource.renderedData.findIndex(s=>s===e);this.exampleDatabase?.dataChange.value.splice(i,1),this.refreshTable(),this.selection=new _.Ov(!0,[])}),this.showNotification("snackbar-danger",a+" Record Delete Successfully...!!!","bottom","center")}loadData(){this.exampleDatabase=new v(this.httpClient),this.dataSource=new ot(this.exampleDatabase,this.paginator,this.sort),this.subs.sink=(0,F.R)(this.filter?.nativeElement,"keyup").subscribe(()=>{this.dataSource&&(this.dataSource.filter=this.filter?.nativeElement.value)})}exportExcel(){const a=this.dataSource.filteredData.map(e=>({"Item Name":e.i_name,Category:e.category,"Issue Date":(0,n.p6)(new Date(e.issue_date),"yyyy-MM-dd","en")||"","Return Date":(0,n.p6)(new Date(e.return_date),"yyyy-MM-dd","en")||"","Issue To":e.issue_to,Quantity:e.qty,Status:e.status}));J.c.exportToExcel(a,"excel")}showNotification(a,e,i,s){this.snackBar.open(e,"",{duration:2e3,verticalPosition:i,horizontalPosition:s,panelClass:a})}cancelar(){this.router.navigate(["/admin/inventory/item-stock-list"])}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(p.eN),t.Y36(g.uw),t.Y36(v),t.Y36(M.ux),t.Y36(u.QS),t.Y36(b.F0))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-issued-items"]],viewQuery:function(e,i){if(1&e&&(t.Gf(I.NW,7),t.Gf(Z.YE,7),t.Gf(tt,7)),2&e){let s;t.iGM(s=t.CRH())&&(i.paginator=s.first),t.iGM(s=t.CRH())&&(i.sort=s.first),t.iGM(s=t.CRH())&&(i.filter=s.first)}},features:[t.qOj],decls:45,vars:10,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"row","clearfix"],[1,"col-xs-12","col-sm-12","col-md-12","col-lg-12"],[1,"card"],[1,"header"],[1,"body"],[1,"m-4",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-3"],["appearance","outline",1,"example-full-width","mb-3"],["matInput","","formControlName","rNo","required",""],[4,"ngIf"],["appearance","fill",1,"example-full-width","mb-3"],["matInput","","formControlName","pName","required",""],["matInput","","formControlName","aDate","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["mat-raised-button","","color","primary",1,"btn-space",3,"disabled"],["type","button","mat-raised-button","","color","warn",3,"click"]],template:function(e,i){if(1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2),t._UZ(3,"app-breadcrumb",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h1")(9,"strong"),t._uU(10,"Adicionar Bitacora"),t.qZA()()(),t.TgZ(11,"div",7)(12,"h6"),t._uU(13,"En esta pantalla podr\xe1s adicionar bitacoras"),t.qZA()(),t.TgZ(14,"div",8)(15,"form",9),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(16,"div",10)(17,"div",11)(18,"mat-form-field",12)(19,"mat-label"),t._uU(20,"T\xedtulo"),t.qZA(),t._UZ(21,"input",13),t.YNc(22,et,2,0,"mat-error",14),t.qZA()()(),t.TgZ(23,"div",10)(24,"div",11)(25,"mat-form-field",15)(26,"mat-label"),t._uU(27,"Descripci\xf3n"),t.qZA(),t._UZ(28,"textarea",16),t.YNc(29,it,2,0,"mat-error",14),t.qZA()()(),t.TgZ(30,"div",10)(31,"div",11)(32,"mat-form-field",12)(33,"mat-label"),t._uU(34,"Fecha"),t.qZA(),t._UZ(35,"input",17)(36,"mat-datepicker-toggle",18)(37,"mat-datepicker",null,19),t.qZA()()(),t.TgZ(39,"div",10)(40,"div",11)(41,"button",20),t._uU(42,"Crear"),t.qZA(),t.TgZ(43,"button",21),t.NdJ("click",function(){return i.cancelar()}),t._uU(44,"Cancelar"),t.qZA()()()()()()()()()()),2&e){const s=t.MAs(38);let d,h;t.xp6(3),t.Q6J("title","Crear bitacora")("items",t.DdM(9,at))("active_item","Crear bitacora"),t.xp6(12),t.Q6J("formGroup",i.roomForm),t.xp6(7),t.Q6J("ngIf",null==(d=i.roomForm.get("rNo"))?null:d.hasError("required")),t.xp6(7),t.Q6J("ngIf",null==(h=i.roomForm.get("pName"))?null:h.hasError("required")),t.xp6(6),t.Q6J("matDatepicker",s),t.xp6(1),t.Q6J("for",s),t.xp6(5),t.Q6J("disabled",!i.roomForm.valid)}},dependencies:[n.O5,u._Y,u.Fj,u.JJ,u.JL,u.Q7,u.sg,u.u,w.L,T.lW,c.Mq,c.hl,c.nW,x.KE,x.hX,x.TO,x.R9,f.Nt]})}return o})();class ot extends _.o2{get filter(){return this.filterChange.value}set filter(l){this.filterChange.next(l)}constructor(l,a,e){super(),this.exampleDatabase=l,this.paginator=a,this._sort=e,this.filterChange=new m.X(""),this.filteredData=[],this.renderedData=[],this.filterChange.subscribe(()=>this.paginator.pageIndex=0)}connect(){const l=[this.exampleDatabase.dataChange,this._sort.sortChange,this.filterChange,this.paginator.page];return this.exampleDatabase.getAllIssuedItemss(),(0,E.T)(...l).pipe((0,R.U)(()=>{this.filteredData=this.exampleDatabase.data.slice().filter(i=>-1!==(i.i_name+i.category+i.issue_date+i.return_date+i.issue_to+i.qty+i.status).toLowerCase().indexOf(this.filter.toLowerCase()));const a=this.sortData(this.filteredData.slice());return this.renderedData=a.splice(this.paginator.pageIndex*this.paginator.pageSize,this.paginator.pageSize),this.renderedData}))}disconnect(){}sortData(l){return this._sort.active&&""!==this._sort.direction?l.sort((a,e)=>{let i="",s="";switch(this._sort.active){case"id":[i,s]=[a.id,e.id];break;case"i_name":[i,s]=[a.i_name,e.i_name];break;case"category":[i,s]=[a.category,e.category];break;case"issue_date":[i,s]=[a.issue_date,e.issue_date];break;case"return_date":[i,s]=[a.return_date,e.return_date];break;case"issue_to":[i,s]=[a.issue_to,e.issue_to];break;case"qty":[i,s]=[a.qty,e.qty];break;case"status":[i,s]=[a.status,e.status]}return((isNaN(+i)?i:+i)<(isNaN(+s)?s:+s)?-1:1)*("asc"===this._sort.direction?1:-1)}):l}}var q=r(9394),L=r(4918),rt=r(2262),nt=r(2596),lt=r(9177);const ct=["filter"];function dt(o,l){if(1&o&&(t.TgZ(0,"td",35),t._uU(1),t.qZA()),2&o){const a=t.oxw(),i=a.$implicit;t.s9C("id",a.index+"n"),t.xp6(1),t.hij(" ",i.id,"")}}function ut(o,l){if(1&o&&(t.TgZ(0,"td",35),t._uU(1),t.qZA()),2&o){const a=t.oxw(),i=a.$implicit;t.s9C("id",a.index+"f"),t.xp6(1),t.hij(" ",i.i_name,"")}}function mt(o,l){if(1&o&&(t.TgZ(0,"td",35),t._uU(1),t.qZA()),2&o){const a=t.oxw(),i=a.$implicit;t.s9C("id",a.index+"t"),t.xp6(1),t.hij(" ",i.date,"")}}function ht(o,l){if(1&o){const a=t.EpF();t.TgZ(0,"tr"),t.YNc(1,dt,2,2,"td",32),t.YNc(2,ut,2,2,"td",32),t.YNc(3,mt,2,2,"td",32),t.TgZ(4,"td",30)(5,"button",33),t.NdJ("click",function(i){return i.stopPropagation()})("click",function(){const s=t.CHM(a).$implicit,d=t.oxw();return t.KtG(d.search(s))}),t._UZ(6,"app-feather-icons",34),t.qZA(),t.TgZ(7,"button",33),t.NdJ("click",function(i){return i.stopPropagation()})("click",function(){const s=t.CHM(a).$implicit,d=t.oxw();return t.KtG(d.editCall(s))}),t._UZ(8,"app-feather-icons",34),t.qZA(),t.TgZ(9,"button",33),t.NdJ("click",function(i){return i.stopPropagation()})("click",function(){const s=t.CHM(a).$implicit,d=t.oxw();return t.KtG(d.deleteItem(s))}),t._UZ(10,"app-feather-icons",34),t.qZA()()()}if(2&o){const a=l.index,e=t.oxw();t.xp6(1),t.Q6J("ngIf",a+1>=e.indicePrimerItem&&a<e.indiceUltimoItem),t.xp6(1),t.Q6J("ngIf",a+1>=e.indicePrimerItem&&a<e.indiceUltimoItem),t.xp6(1),t.Q6J("ngIf",a+1>=e.indicePrimerItem&&a<e.indiceUltimoItem),t.xp6(3),t.Tol("tbl-fav-edit"),t.Q6J("icon","search"),t.xp6(2),t.Tol("tbl-fav-edit"),t.Q6J("icon","edit"),t.xp6(2),t.Tol("tbl-fav-delete"),t.Q6J("icon","trash-2")}}const pt=function(){return["Bitacora"]};let gt=(()=>{class o extends C.n{constructor(a,e,i,s,d){super(),this.httpClient=a,this.dialog=e,this.itemStockListService=i,this.snackBar=s,this.router=d,this.listaBitacora=[],this.indicePrimerItem=1,this.indiceUltimoItem=10,this.displayedColumns=["select","i_name","category","qty","date","price","details","actions"],this.selection=new _.Ov(!0,[])}ngOnInit(){console.log(this.listaBitacora,"LISTAAA1"),this.llenarLista(),console.log(this.listaBitacora,"LISTAAA")}refresh(){this.loadData()}addNew(){this.router.navigate(["/admin/inventory/issued-items"])}editCall1(a){this.router.navigate(["/admin/inventory/editar-bitacora"])}search(a){let e;this.id=a.id,e="true"===localStorage.getItem("isRtl")?"rtl":"ltr";const i=this.dialog.open(L.E,{data:{itemStockList:a,bandera:!0},direction:e});this.subs.sink=i.afterClosed().subscribe(s=>{if(1===s){const d=this.exampleDatabase?.dataChange.value.findIndex(h=>h.id===this.id);null!=d&&this.exampleDatabase&&(this.exampleDatabase.dataChange.value[d]=this.itemStockListService.getDialogData(),this.refreshTable(),this.showNotification("black","Edit Record Successfully...!!!","bottom","center"))}})}editCall(a){let e;this.id=a.id,e="true"===localStorage.getItem("isRtl")?"rtl":"ltr";const i=this.dialog.open(L.E,{data:{itemStockList:a,bandera:!1},direction:e});this.subs.sink=i.afterClosed().subscribe(s=>{if(1===s){const d=this.exampleDatabase?.dataChange.value.findIndex(h=>h.id===this.id);null!=d&&this.exampleDatabase&&(this.exampleDatabase.dataChange.value[d]=this.itemStockListService.getDialogData(),this.refreshTable(),this.showNotification("black","Edit Record Successfully...!!!","bottom","center"))}})}deleteItem(a){let e;this.id=a.id,e="true"===localStorage.getItem("isRtl")?"rtl":"ltr";const i=this.dialog.open(rt.F,{data:a,direction:e});this.subs.sink=i.afterClosed().subscribe(s=>{if(1===s){const d=this.exampleDatabase?.dataChange.value.findIndex(h=>h.id===this.id);null!=d&&this.exampleDatabase&&(this.exampleDatabase.dataChange.value.splice(d,1),this.refreshTable(),this.showNotification("snackbar-danger","Delete Record Successfully...!!!","bottom","center"))}})}refreshTable(){this.paginator._changePageSize(this.paginator.pageSize)}isAllSelected(){return this.selection.selected.length===this.dataSource.renderedData.length}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource.renderedData.forEach(a=>this.selection.select(a))}removeSelectedRows(){const a=this.selection.selected.length;this.selection.selected.forEach(e=>{const i=this.dataSource.renderedData.findIndex(s=>s===e);this.exampleDatabase?.dataChange.value.splice(i,1),this.refreshTable(),this.selection=new _.Ov(!0,[])}),this.showNotification("snackbar-danger",a+" Record Delete Successfully...!!!","bottom","center")}loadData(){this.exampleDatabase=new q.l(this.httpClient),this.dataSource=new ft(this.exampleDatabase,this.paginator,this.sort),this.subs.sink=(0,F.R)(this.filter?.nativeElement,"keyup").subscribe(()=>{this.dataSource&&(this.dataSource.filter=this.filter?.nativeElement.value)})}exportExcel(){const a=this.dataSource.filteredData.map(e=>({"Item Name":e.i_name,Category:e.category,Quantity:e.qty,"Purchase Date":(0,n.p6)(new Date(e.date),"yyyy-MM-dd","en")||"",Price:e.price,Details:e.details}));J.c.exportToExcel(a,"excel")}showNotification(a,e,i,s){this.snackBar.open(e,"",{duration:2e3,verticalPosition:i,horizontalPosition:s,panelClass:a})}llenarLista(){this.listaBitacora=[{id:1,i_name:"bitacora 1",date:"27/06/2023",descripcion:"primera bitacora"},{id:2,i_name:"bitacora 2",date:"27/06/2023",descripcion:"segunda bitacora"}]}static#t=this.\u0275fac=function(e){return new(e||o)(t.Y36(p.eN),t.Y36(g.uw),t.Y36(q.l),t.Y36(M.ux),t.Y36(b.F0))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-item-stock-list"]],viewQuery:function(e,i){if(1&e&&(t.Gf(I.NW,7),t.Gf(Z.YE,7),t.Gf(ct,7)),2&e){let s;t.iGM(s=t.CRH())&&(i.paginator=s.first),t.iGM(s=t.CRH())&&(i.sort=s.first),t.iGM(s=t.CRH())&&(i.filter=s.first)}},features:[t.qOj],decls:65,vars:5,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"row"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"card"],[1,"header"],[1,"materialTableHeader"],[1,"left"],[1,"header-buttons-left","ms-0"],[1,"tbl-title"],[1,"tbl-search-box"],["for","search-input"],[1,"material-icons","search-icon"],["placeholder","Buscar usuario","type","text","aria-label","Search box",1,"browser-default","search-field"],["filter",""],[1,"center"],["placeholder","Buscar t\xedtulo","type","text","aria-label","Search box",1,"browser-default","search-field"],[1,"right"],["color","white",1,"tbl-export-btn"],[1,"tbl-header-btn"],["matTooltip","Adicionar",1,"m-l-10"],["mat-mini-fab","","color","primary",3,"click"],[1,"col-white"],[1,"row","clearfix"],[1,"col-xs-12","col-sm-12","col-md-12","col-lg-12"],[1,"tableBody"],[1,"table-responsive"],["id","support_table",1,"table","display","product-overview","mb-30"],[1,"text-center"],[4,"ngFor","ngForOf"],["class","text-center",3,"id",4,"ngIf"],["mat-icon-button","",1,"tbl-action-btn",3,"click"],[3,"icon"],[1,"text-center",3,"id"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2),t._UZ(3,"app-breadcrumb",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h1")(9,"strong"),t._uU(10,"BITACORAS"),t.qZA()()(),t.TgZ(11,"div",7)(12,"h6"),t._uU(13,"En esta pantalla podr\xe1s visualizar las bitacoras existentes"),t.qZA()(),t.TgZ(14,"div",8)(15,"div",9)(16,"ul",10)(17,"li",11)(18,"h2"),t._uU(19,"Usuario"),t.qZA()(),t.TgZ(20,"li",12)(21,"label",13)(22,"i",14),t._uU(23,"search"),t.qZA()(),t._UZ(24,"input",15,16),t.qZA()()(),t.TgZ(26,"div",17)(27,"ul",10)(28,"li",11)(29,"h2"),t._uU(30,"T\xedtulo"),t.qZA()(),t.TgZ(31,"li",12)(32,"label",13)(33,"i",14),t._uU(34,"search"),t.qZA()(),t._UZ(35,"input",18,16),t.qZA()()(),t.TgZ(37,"div",19)(38,"ul",20)(39,"li",21)(40,"div",22)(41,"button",23),t.NdJ("click",function(){return i.addNew()}),t.TgZ(42,"mat-icon",24),t._uU(43,"add"),t.qZA()()()()()()(),t.TgZ(44,"div",25)(45,"div",26)(46,"div",6)(47,"div",7)(48,"h2"),t._uU(49,"Lista de bitacoras"),t.qZA()(),t.TgZ(50,"div",27)(51,"div",28)(52,"table",29)(53,"thead")(54,"tr")(55,"th",30),t._uU(56,"No"),t.qZA(),t.TgZ(57,"th",30),t._uU(58,"T\xedtulo"),t.qZA(),t.TgZ(59,"th",30),t._uU(60,"Fecha de creaci\xf3n"),t.qZA(),t.TgZ(61,"th",30),t._uU(62,"Acciones"),t.qZA()()(),t.TgZ(63,"tbody"),t.YNc(64,ht,11,12,"tr",31),t.qZA()()()()()()()()()()()()),2&e&&(t.xp6(3),t.Q6J("title","Lista de bitacoras")("items",t.DdM(4,pt))("active_item","Lista de bitacoras"),t.xp6(61),t.Q6J("ngForOf",i.listaBitacora))},dependencies:[n.sg,n.O5,w.L,T.RK,T.nh,y.Hw,nt.gM,lt.A]})}return o})();class ft extends _.o2{get filter(){return this.filterChange.value}set filter(l){this.filterChange.next(l)}constructor(l,a,e){super(),this.exampleDatabase=l,this.paginator=a,this._sort=e,this.filterChange=new m.X(""),this.filteredData=[],this.renderedData=[],this.filterChange.subscribe(()=>this.paginator.pageIndex=0)}connect(){const l=[this.exampleDatabase.dataChange,this._sort.sortChange,this.filterChange,this.paginator.page];return this.exampleDatabase.getAllItemStockLists(),(0,E.T)(...l).pipe((0,R.U)(()=>{this.filteredData=this.exampleDatabase.data.slice().filter(i=>-1!==(i.i_name+i.category+i.qty+i.date+i.price+i.details).toLowerCase().indexOf(this.filter.toLowerCase()));const a=this.sortData(this.filteredData.slice());return this.renderedData=a.splice(this.paginator.pageIndex*this.paginator.pageSize,this.paginator.pageSize),this.renderedData}))}disconnect(){}sortData(l){return this._sort.active&&""!==this._sort.direction?l.sort((a,e)=>{let i="",s="";switch(this._sort.active){case"id":[i,s]=[a.id,e.id];break;case"i_name":[i,s]=[a.i_name,e.i_name];break;case"category":[i,s]=[a.category,e.category];break;case"qty":[i,s]=[a.qty,e.qty];break;case"date":[i,s]=[a.date,e.date];break;case"price":[i,s]=[a.price,e.price];break;case"details":[i,s]=[a.details,e.details]}return((isNaN(+i)?i:+i)<(isNaN(+s)?s:+s)?-1:1)*("asc"===this._sort.direction?1:-1)}):l}}const _t=[{path:"item-stock-list",component:gt},{path:"issued-items",component:st},{path:"**",component:A.J}];let bt=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#e=this.\u0275mod=t.oAB({type:o});static#i=this.\u0275inj=t.cJS({imports:[b.Bz.forChild(_t),b.Bz]})}return o})();var vt=r(379),It=r(3563);let Zt=(()=>{class o{static#t=this.\u0275fac=function(e){return new(e||o)};static#e=this.\u0275mod=t.oAB({type:o});static#i=this.\u0275inj=t.cJS({providers:[q.l,v],imports:[n.ez,u.u5,bt,u.UX,vt.K,It.m]})}return o})()},4414:(S,D,r)=>{r.d(D,{L:()=>t});var n=r(5879),b=r(6814),A=r(1896),m=r(9101);function C(p,v){if(1&p&&(n.TgZ(0,"li",9),n._uU(1),n.qZA()),2&p){const I=v.$implicit;n.xp6(1),n.Oqu(I)}}let t=(()=>{class p{constructor(){}static#t=this.\u0275fac=function(Z){return new(Z||p)};static#e=this.\u0275cmp=n.Xpm({type:p,selectors:[["app-breadcrumb"]],inputs:{title:"title",items:"items",active_item:"active_item"},decls:12,vars:4,consts:[[1,"row"],[1,"col-xs-12","col-sm-12","col-md-12","col-lg-12"],[1,"breadcrumb"],[1,"page-title"],[1,"breadcrumb-item","bcrumb-1"],[3,"routerLink"],["name","home",1,"breadcrumb-icon"],["class","breadcrumb-item",4,"ngFor","ngForOf"],[1,"breadcrumb-item","active"],[1,"breadcrumb-item"]],template:function(Z,_){1&Z&&(n.TgZ(0,"div",0)(1,"div",1)(2,"ul",2)(3,"li")(4,"h4",3),n._uU(5),n.qZA()(),n.TgZ(6,"li",4)(7,"a",5),n._UZ(8,"i-feather",6),n.qZA()(),n.YNc(9,C,2,1,"li",7),n.TgZ(10,"li",8),n._uU(11),n.qZA()()()()),2&Z&&(n.xp6(5),n.Oqu(_.title),n.xp6(2),n.Q6J("routerLink","/admin/dashboard/main"),n.xp6(2),n.Q6J("ngForOf",_.items),n.xp6(2),n.Oqu(_.active_item))},dependencies:[b.sg,A.rH,m.u]})}return p})()},379:(S,D,r)=>{r.d(D,{K:()=>T});var n=r(6814),b=r(9101),A=r(1896),m=r(5879);let C=(()=>{class c{static#t=this.\u0275fac=function(f){return new(f||c)};static#e=this.\u0275mod=m.oAB({type:c});static#i=this.\u0275inj=m.cJS({imports:[n.ez,A.Bz,b.p]})}return c})();var t=r(6213),p=r(617),v=r(2296);let I=(()=>{class c{static#t=this.\u0275fac=function(f){return new(f||c)};static#e=this.\u0275mod=m.oAB({type:c});static#i=this.\u0275inj=m.cJS({imports:[n.ez]})}return c})(),Z=(()=>{class c{static#t=this.\u0275fac=function(f){return new(f||c)};static#e=this.\u0275mod=m.oAB({type:c});static#i=this.\u0275inj=m.cJS({imports:[n.ez,t.u,p.Ps,v.ot,I]})}return c})();var _=r(9347);let g=(()=>{class c{static#t=this.\u0275fac=function(f){return new(f||c)};static#e=this.\u0275mod=m.oAB({type:c});static#i=this.\u0275inj=m.cJS({imports:[n.ez,I]})}return c})();var u=r(1464);let U=(()=>{class c{static#t=this.\u0275fac=function(f){return new(f||c)};static#e=this.\u0275mod=m.oAB({type:c});static#i=this.\u0275inj=m.cJS({providers:[u.R],imports:[n.ez,C,p.Ps,Z,v.ot,_.Is,g,I]})}return c})(),T=(()=>{class c{static#t=this.\u0275fac=function(f){return new(f||c)};static#e=this.\u0275mod=m.oAB({type:c});static#i=this.\u0275inj=m.cJS({imports:[C,Z,U]})}return c})()},1464:(S,D,r)=>{r.d(D,{R:()=>b});var n=r(5879);let b=(()=>{class m{transform(t,p){return"date"===p?new Date(t).toLocaleDateString():"uuid"===p?t.slice(0,8):null}static#t=this.\u0275fac=function(p){return new(p||m)};static#e=this.\u0275pipe=n.Yjl({name:"mapping",type:m,pure:!0})}return m})()}}]);