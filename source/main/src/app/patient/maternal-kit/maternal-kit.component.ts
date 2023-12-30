import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
//import { FormDialogSituacionComponent } from './dialog/form-dialog/form-dialog.component';
//import { DeleteSituacionDialogComponent } from './dialog/delete/delete.component';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { Direction } from '@angular/cdk/bidi';
import {
  TableExportUtil,
  TableElement,
  UnsubscribeOnDestroyAdapter,
} from '@shared';
import { formatDate } from '@angular/common';
import { MaternalKit } from './maternal-kit.model';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';

@Component({
  selector: 'app-maternal-kit',
  templateUrl: './maternal-kit.component.html',
  styleUrls: ['./maternal-kit.component.scss'],
})
export class MaternalKitComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  public listaSituaciones: Array<any> = [];
  public indicePrimerItem: number = 1;
  public indiceUltimoItem: number = 10;
  displayedColumns = [
    'select',
    'img',
    'rNo',
    'pName',
    'rType',
    'gender',
    'admitDate',
    'dischargeDate',
    'actions',
  ];
  selection = new SelectionModel<MaternalKit>(true, []);
  index?: number;
  id?: number;
  room?: MaternalKit;
  step =0;
  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private pasoParametrosService: PasoParametrosService
  ) {
    super();
  }
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild('filter', { static: true }) filter?: ElementRef;
  ngOnInit() {
   // this.loadData();
    this.llenarLista();
  }
  refresh() {
   // this.loadData();
  }
  addNew() {
    this.router.navigate(['/patient/room/add-allotment']);
  }
  search(row: MaternalKit) {
    this.id = row.id;
    this.pasoParametrosService.adicionarParametro('data', row);
    this.router.navigate(['/patient/room/edit-allotment']);
  }
  editCall(row: MaternalKit) {
    this.id = row.id;
    this.pasoParametrosService.adicionarParametro('data', row);
    this.pasoParametrosService.adicionarParametro('modoEditar', true);
    this.router.navigate(['/patient/room/add-allotment']);
  }
  
  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }
  
  showNotification(
    colorName: string,
    text: string,
    placementFrom: MatSnackBarVerticalPosition,
    placementAlign: MatSnackBarHorizontalPosition
  ) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  llenarLista(){
    this.listaSituaciones = [
     {id:1, logro:"Obtengo información sobre como alimentar a mi bebé" ,tema:"pruebita1", date:"27/06/2001", descripcion:"me siento triste", gradoAfectacion: 8, sentimiento: "tristeza", firstPen: "Me siento solo", comportamiento: "solitario"},
     {id:2, logro:"Obtengo información sobre como cambiar pañal y hacer limpieza" ,tema:"pruebita2", date:"27/06/2002", descripcion:"me siento feliz", gradoAfectacion: 1, sentimiento: "felicidad", firstPen: "Soy feliz", comportamiento: "alegre"},
     {id:3, logro:"Obtengo información sobre como lidiar con el estrés" ,tema:"pruebita3", date:"27/06/2003", descripcion:"me duele la panza", gradoAfectacion: 4, sentimiento: "debilidad", firstPen: "Estoy enferma", comportamiento: "debilidad"},
     {id:4, logro:"Obtengo información sobre como pedir ayuda cuando la necesite" ,tema:"pruebita4", date:"27/06/2004", descripcion:"no me duele la panza", gradoAfectacion: 0, sentimiento: "neutral", firstPen: "nada", comportamiento: "ninguno"}
    ];
  }
}
