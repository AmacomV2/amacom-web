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
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { SignoAlarmaList } from './signoalarma.model';
import { FormDialogSignoAlarmaComponent } from './dialog/form-dialog/form-dialog.component';
import { DeleteSignoAlarmaComponent } from './dialog/delete/delete.component';

@Component({
  selector: 'app-allsignosalarma',
  templateUrl: './allsignosalarma.component.html',
  styleUrls: ['./allsignosalarma.component.scss'],
})
export class AllSignosAlarmaComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  public listaSignoAlarma: Array<any> = [];
  public indicePrimerItem: number = 1;
  public indiceUltimoItem: number = 10;
  displayedColumns = [
    'select',
    'img',
    'name',
    'gender',
    'address',
    'mobile',
    'date',
    'bGroup',
    'treatment',
    'actions',
  ];
  index?: number;
  id?: number;
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
    this.llenarLista();
  }
  refresh() {
    this.loadData();
  }
  addNew() {
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(FormDialogSignoAlarmaComponent, {
      data: {
        action: 'add',
      },
    });
  }
  search(row: SignoAlarmaList) {
    this.pasoParametrosService.adicionarParametro('action', true);
    this.id = row.id;
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(DeleteSignoAlarmaComponent, {
      data: row,
      direction: tempDirection,
    });
  }
  editCall(row: SignoAlarmaList) {
    this.id = row.id;
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(FormDialogSignoAlarmaComponent, {
      data: {
        signoAlarmaList: row,
        action: 'edit',
      },
    });
  }
  deleteItem(row: SignoAlarmaList) {
    this.pasoParametrosService.adicionarParametro('action', false);
    this.id = row.id;
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(DeleteSignoAlarmaComponent, {
      data: row,
      direction: tempDirection,
    });
    // this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
    //   if (result === 1) {
    //     const foundIndex = this.exampleDatabase?.dataChange.value.findIndex(
    //       (x) => x.id === this.id
    //     );
    //     // for delete we use splice in order to remove single object from DataService
    //     if (foundIndex != null && this.exampleDatabase) {
    //       this.exampleDatabase.dataChange.value.splice(foundIndex, 1);

    //       this.refreshTable();
    //       this.showNotification(
    //         'snackbar-danger',
    //         'Delete Record Successfully...!!!',
    //         'bottom',
    //         'center'
    //       );
    //     }
    //   }
    // });
  }
  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }
  public loadData() {
    // this.exampleDatabase = new PatientService(this.httpClient);
    // this.dataSource = new ExampleDataSource(
    //   this.exampleDatabase,
    //   this.paginator,
    //   this.sort
  //   );
  //   this.subs.sink = fromEvent(this.filter?.nativeElement, 'keyup').subscribe(
  //     () => {
  //       if (!this.dataSource) {
  //         return;
  //       }
  //       this.dataSource.filter = this.filter?.nativeElement.value;
  //     }
  //   );
  // }
  // // export table data in excel file
  // exportExcel() {
  //   // key name with space add in brackets
  //   const exportData: Partial<TableElement>[] =
  //     this.dataSource.filteredData.map((x) => ({
  //       Name: x.name,
  //       Gender: x.gender,
  //       Address: x.address,
  //       'Birth Date': formatDate(new Date(x.date), 'yyyy-MM-dd', 'en') || '',
  //       'Blood Group': x.bGroup,
  //       Mobile: x.mobile,
  //       Treatment: x.treatment,
  //     }));
  //   TableExportUtil.exportToExcel(exportData, 'excel');
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
    this.listaSignoAlarma = [
     {id:1, nombre:"Signo alarma 1", tipo:"Madre", descripcion:"Soy el Signo alarma 1", estado:"Activo", date:"11/09/2023"},
     {id:2, nombre:"Signo alarma 2", tipo:"Madre", descripcion:"Soy el Signo alarma 2", estado:"Activo", date:"11/09/2023"},
     {id:3, nombre:"Signo alarma 3", tipo:"Madre", descripcion:"Soy el Signo alarma 3", estado:"Activo", date:"11/09/2023"},
     {id:4, nombre:"Signo alarma 4", tipo:"Madre", descripcion:"Soy el Signo alarma 4", estado:"Activo", date:"11/09/2023"},
     {id:5, nombre:"Signo alarma 5", tipo:"Bebe", descripcion:"Soy el Signo alarma 5", estado:"Activo", date:"11/09/2023"},
     {id:6, nombre:"Signo alarma 6", tipo:"Bebe", descripcion:"Soy el Signo alarma 6", estado:"Activo", date:"11/09/2023"},
     {id:7, nombre:"Signo alarma 7", tipo:"Bebe", descripcion:"Soy el Signo alarma 7", estado:"Activo", date:"11/09/2023"},
     {id:8, nombre:"Signo alarma 8", tipo:"Bebe", descripcion:"Soy el Signo alarma 8", estado:"Activo", date:"11/09/2023"},
     {id:9, nombre:"Signo alarma 9", tipo:"Bebe", descripcion:"Soy el Signo alarma 9", estado:"Inactivo", date:"11/09/2023"},
    ];
  }
}
