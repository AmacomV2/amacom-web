import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Room } from './room.model';
import { DataSource } from '@angular/cdk/collections';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { FormDialogSituacionComponent } from './dialog/form-dialog/form-dialog.component';
import { DeleteSituacionDialogComponent } from './dialog/delete/delete.component';
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
import { SituacionList } from './situacion.model';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';

@Component({
  selector: 'app-allroom',
  templateUrl: './allroom.component.html',
  styleUrls: ['./allroom.component.scss'],
})
export class AllroomComponent
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
  selection = new SelectionModel<Room>(true, []);
  index?: number;
  id?: number;
  room?: Room;
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
  search(row: Room) {
    this.id = row.id;
    this.pasoParametrosService.adicionarParametro('data', row);
    this.router.navigate(['/patient/room/edit-allotment']);
  }
  editCall(row: SituacionList) {
    this.id = row.id;
    this.pasoParametrosService.adicionarParametro('data', row);
    this.pasoParametrosService.adicionarParametro('modoEditar', true);
    this.router.navigate(['/patient/room/add-allotment']);
  }
  deleteItem(row: SituacionList) {
    this.id = row.id;
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(DeleteSituacionDialogComponent, {
      data: row,
      direction: tempDirection,
    });
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
     {id:1, tema:"pruebita1", date:"27/06/2001", descripcion:"me siento triste", gradoAfectacion: 8, sentimiento: "tristeza", firstPen: "Me siento solo", comportamiento: "solitario"},
     {id:2, tema:"pruebita2", date:"27/06/2002", descripcion:"me siento feliz", gradoAfectacion: 1, sentimiento: "felicidad", firstPen: "Soy feliz", comportamiento: "alegre"},
     {id:3, tema:"pruebita3", date:"27/06/2003", descripcion:"me duele la panza", gradoAfectacion: 4, sentimiento: "debilidad", firstPen: "Estoy enferma", comportamiento: "debilidad"},
     {id:4, tema:"pruebita4", date:"27/06/2004", descripcion:"no me duele la panza", gradoAfectacion: 0, sentimiento: "neutral", firstPen: "nada", comportamiento: "ninguno"}
    ];
  }
}
