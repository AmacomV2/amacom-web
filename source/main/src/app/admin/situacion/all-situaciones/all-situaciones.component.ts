import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SituacionService } from '../services/situacion.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Room } from '../models/room.model';
import { DataSource } from '@angular/cdk/collections';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { FormDialogComponent } from './dialog/form-dialog/form-dialog.component';
import { DeleteDialogComponent } from './dialog/delete/delete.component';
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
import { SituacionDTO } from '../models/situacion.model';
import { Router } from '@angular/router';
import { PasoParametrosService } from '../../paso-parametro.service';
import { ModalConfig } from '@shared/components/crud-container/models/action.crud';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { TipoDocumentoDTO } from 'app/admin/gestionar-usuarios/tipos-documentos/models/tipoDocumento.model';
import { DeletePersonaComponent } from 'app/doctor/personas/allpersonas/dialog/delete/delete.component';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-situaciones',
  templateUrl: './all-situaciones.component.html',
  styleUrls: ['./all-situaciones.component.scss'],
})
export class AllSituacionesComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  config: NgTableConfig<any> = {
    title: 'Lista de situaciones',
    keys: [
      'id',
      'description',
      'subjectName',
      'affectationDegree',
      'createdAt',
    ],
    headerColumns: [
      'No',
      'Descripcion',
      'Tema',
      'Grado de afectación',
      'Fecha creacion',
    ],
    urlData: environment.apiUrl + '/personSituation/search',
    typeColumns: ['uuid', null, null, null, 'date'],
    pageable: true,
    pageableOptions: {
      otherParams: {
        personId: null,
      },
    },
    showFilter: true,
  };

  modalForm: ModalConfig<TipoDocumentoDTO> = {
    create: {
      urlView: '/admin/room/add-allotment',
      actionType: 'add',
      action: () => {
        this.pasoParametrosService.adicionarParametro(
          'personId',
          this.personId
        );
      },
    },
    edit: {
      urlView: '/admin/gestionar-usuarios/personas/add-persona',
      actionType: 'edit',
      action: () => {
        this.pasoParametrosService.adicionarParametro(
          'personId',
          this.personId
        );
      },
    },
    delete: {
      modal: {
        title: '¿Está seguro de eliminar la persona?',
        component: DeletePersonaComponent,
      },
      actionType: 'delete',
      urlEndpoint: '/person',
    },
    view: {
      urlView: '/admin/room/edit-allotment',
      actionType: 'view',
    },
  };

  personId: any;

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
  exampleDatabase?: SituacionService;
  dataSource!: any;
  selection = new SelectionModel<Room>(true, []);
  index?: number;
  id?: number;
  room?: Room;
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public roomService: SituacionService,
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
    this.config.pageableOptions.otherParams['personId'] =
      this.pasoParametrosService.obtenerParametro('data').id;

    this.personId = this.pasoParametrosService.obtenerParametro('data').id;
  }
  // refresh() {
  //   this.loadData();
  // }
  // addNew() {
  //   this.router.navigate(['/admin/room/add-allotment']);
  // }
  // search(row: Room) {
  //   this.id = row.id;
  //   this.pasoParametrosService.adicionarParametro('data', row);
  //   this.router.navigate(['/admin/room/edit-allotment']);
  // }
  // editCall(row: SituacionDTO) {
  //   //this.id = row.id;
  //   this.pasoParametrosService.adicionarParametro('data', row);
  //   this.pasoParametrosService.adicionarParametro('modoEditar', true);
  //   this.router.navigate(['/admin/room/add-allotment']);
  // }
  // deleteItem(row: SituacionDTO) {
  //   let tempDirection: Direction;
  //   if (localStorage.getItem('isRtl') === 'true') {
  //     tempDirection = 'rtl';
  //   } else {
  //     tempDirection = 'ltr';
  //   }
  //   const dialogRef = this.dialog.open(DeleteDialogComponent, {
  //     data: row,
  //     direction: tempDirection,
  //   });
  //   this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
  //     if (result === 1) {
  //       const foundIndex = this.exampleDatabase?.dataChange.value.findIndex(
  //         (x) => x.id === this.id
  //       );
  //       // for delete we use splice in order to remove single object from DataService
  //       if (foundIndex != null && this.exampleDatabase) {
  //         this.exampleDatabase.dataChange.value.splice(foundIndex, 1);

  //         this.refreshTable();
  //         this.showNotification(
  //           'snackbar-danger',
  //           'Delete Record Successfully...!!!',
  //           'bottom',
  //           'center'
  //         );
  //       }
  //     }
  //   });
  // }
  // private refreshTable() {
  //   this.paginator._changePageSize(this.paginator.pageSize);
  // }
  // /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.renderedData.length;
  //   return numSelected === numRows;
  // }

  // /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected()
  //     ? this.selection.clear()
  //     : this.dataSource.renderedData.forEach((row) =>
  //         this.selection.select(row)
  //       );
  // }
  // removeSelectedRows() {
  //   const totalSelect = this.selection.selected.length;
  //   this.selection.selected.forEach((item) => {
  //     const index: number = this.dataSource.renderedData.findIndex(
  //       (d) => d === item
  //     );
  //     // console.log(this.dataSource.renderedData.findIndex((d) => d === item));
  //     //this.exampleDatabase?.dataChange.value.splice(index, 1);
  //     this.refreshTable();
  //     this.selection = new SelectionModel<Room>(true, []);
  //   });
  //   this.showNotification(
  //     'snackbar-danger',
  //     totalSelect + ' Record Delete Successfully...!!!',
  //     'bottom',
  //     'center'
  //   );
  // }
  // export table data in excel file
  exportExcel() {
    // key name with space add in brackets
    const exportData: Partial<TableElement>[] =
      this.dataSource.filteredData.map((x) => ({
        'Room No': x.rNo,
        'Patient Name': x.pName,
        'Room Type': x.rType,
        'Admit Date':
          formatDate(new Date(x.admitDate), 'yyyy-MM-dd', 'en') || '',
        Gender: x.gender,
        'Discharge Date':
          formatDate(new Date(x.dischargeDate), 'yyyy-MM-dd', 'en') || '',
      }));

    TableExportUtil.exportToExcel(exportData, 'excel');
  }
}
