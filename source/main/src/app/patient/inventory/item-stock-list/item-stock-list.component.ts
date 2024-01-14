import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ItemStockList } from './item-stock-list.model';
import { DataSource } from '@angular/cdk/collections';
import { FormDialogComponent } from './dialog/form-dialog/form-dialog.component';
import { DeleteDialogComponent } from './dialog/delete/delete.component';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
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
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-bitacora',
  templateUrl: './item-stock-list.component.html',
  styleUrls: ['./item-stock-list.component.scss'],
})
export class ItemStockListComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  
public listaBitacora: Array<any> = [];
public indicePrimerItem: number = 1;
public indiceUltimoItem: number = 10;
  displayedColumns = [
    'select',
    'i_name',
    'category',
    'qty',
    'date',
    'price',
    'details',
    'actions',
  ];
  selection = new SelectionModel<ItemStockList>(true, []);
  index?: number;
  id?: number;
  itemStockList?: ItemStockList;
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
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
    console.log(this.listaBitacora, "LISTAAA1");
    this.llenarLista();
    console.log(this.listaBitacora, "LISTAAA");
  }
  refresh() {
   // this.loadData();
  }
  addNew() {
    this.router.navigate(['/patient/inventory/issued-items']);
  }
  editCall1(data: any) {
    this.router.navigate(['/patient/inventory/editar-bitacora']);
  }
  search(data2: any) {
    this.id = data2.id;
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        itemStockList: data2,
        bandera: true,
      },
      direction: tempDirection,
    });
  }
  editCall(data1: any) {
    this.id = data1.id;
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        itemStockList: data1,
        bandera: false,
      },
      direction: tempDirection,
    });
  }
  deleteItem(data3: any) {
    this.id = data3.id;
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: data3,
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
    this.listaBitacora = [
     {id:1, i_name:"pruebita", date:"27/06/2001", descripcion:"hellou"},
     {id:2, i_name:"pruebita2", date:"27/06/2001", descripcion:"no soy una descripción"}
    ];
  }
}
