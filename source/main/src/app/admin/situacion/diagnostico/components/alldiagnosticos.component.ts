import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { ModalConfig } from '@shared/components/crud-container/models/action.crud';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { TipoDocumentoDTO } from 'app/admin/gestionar-usuarios/tipos-documentos/models/tipoDocumento.model';
import { environment } from 'environments/environment';
import { DeleteDiagnosticoComponent } from './dialog/delete-diagnostico/delete-diagnostico.component';

@Component({
  selector: 'app-alldiagnosticos',
  templateUrl: './alldiagnosticos.component.html',
  styleUrls: ['./alldiagnosticos.component.scss'],
})
export class AllDiagnosticosComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  title = 'DIAGNOSTICOS';
  subtitle = 'En esta pantalla podrás visualizar los dianosticos de la persona';

  config: NgTableConfig<any> = {
    title: 'Lista de diagnosticos',
    keys: [
      'id',
      'consultationAlert',
      'consultationResult',
      'consultationStatus',
    ],
    headerColumns: ['No', 'Alerta', 'Resultado', 'Estado'],
    urlData: environment.apiUrl + '/diagnosis/search',
    typeColumns: ['uuid', null, null, null],
    pageable: true,
    pageableOptions: {
      otherParams: {
        situationId: null,
      },
    },
    showFilter: true,
  };

  modalForm: ModalConfig<TipoDocumentoDTO> = {
    create: {
      urlView: '/admin/room/diagnostico/add-diagnostico',
      actionType: 'add',
    },
    edit: {
      urlView: '/admin/room/diagnostico/add-diagnostico',
      actionType: 'edit',
    },
    delete: {
      modal: {
        title: '¿Está seguro de eliminar la persona?',
        component: DeleteDiagnosticoComponent,
      },
      actionType: 'delete',
      urlEndpoint: '/diagnosis',
    },
    view: {
      urlView: '/admin/room/diagnostico/search-diagnostico',
      actionType: 'view',
    },
  };

  situacionId: number;

  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private pasoParametrosService: PasoParametrosService
  ) {
    super();
  }
  ngOnInit(): void {
    console.log(
      'DIAGNOSTICOS',
      this.pasoParametrosService.obtenerParametro('situation')
    );
    this.situacionId =
      this.pasoParametrosService.obtenerParametro('situation')?.id;
    this.config.pageableOptions.otherParams['situationId'] = this.situacionId;
  }
  // @ViewChild(MatPaginator, { static: true })
  // paginator!: MatPaginator;
  // @ViewChild(MatSort, { static: true })
  // sort!: MatSort;
  // @ViewChild('filter', { static: true }) filter?: ElementRef;
  // ngOnInit() {
  //   this.llenarLista();
  // }
  // refresh() {
  //   this.loadData();
  // }
  // addNew() {
  //   this.router.navigate(['/admin/room/diagnostico/add-diagnostico']);
  // }
  // search(row: DiagnosticoList) {
  //   this.id = row.id;
  //   this.pasoParametrosService.adicionarParametro('data', row);
  //   this.router.navigate(['/admin/room/diagnostico/search-diagnostico']);
  // }
  // editCall(row: DiagnosticoList) {
  //   this.id = row.id;
  //   this.pasoParametrosService.adicionarParametro('data', row);
  //   this.pasoParametrosService.adicionarParametro('modoEditar', true);
  //   this.router.navigate(['/admin/room/diagnostico/add-diagnostico']);
  // }
  // deleteItem(row: DiagnosticoList) {
  //   this.id = row.id;
  //   let tempDirection: Direction;
  //   if (localStorage.getItem('isRtl') === 'true') {
  //     tempDirection = 'rtl';
  //   } else {
  //     tempDirection = 'ltr';
  //   }
  //   const dialogRef = this.dialog.open(DeleteDiagnosticoComponent, {
  //     data: row,
  //     direction: tempDirection,
  //   });
  //   // this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
  //   //   if (result === 1) {
  //   //     const foundIndex = this.exampleDatabase?.dataChange.value.findIndex(
  //   //       (x) => x.id === this.id
  //   //     );
  //   //     // for delete we use splice in order to remove single object from DataService
  //   //     if (foundIndex != null && this.exampleDatabase) {
  //   //       this.exampleDatabase.dataChange.value.splice(foundIndex, 1);

  //   //       this.refreshTable();
  //   //       this.showNotification(
  //   //         'snackbar-danger',
  //   //         'Delete Record Successfully...!!!',
  //   //         'bottom',
  //   //         'center'
  //   //       );
  //   //     }
  //   //   }
  //   // });
  // }
  // private refreshTable() {
  //   this.paginator._changePageSize(this.paginator.pageSize);
  // }
  // public loadData() {
  //   // this.exampleDatabase = new PatientService(this.httpClient);
  //   // this.dataSource = new ExampleDataSource(
  //   //   this.exampleDatabase,
  //   //   this.paginator,
  //   //   this.sort
  // //   );
  // //   this.subs.sink = fromEvent(this.filter?.nativeElement, 'keyup').subscribe(
  // //     () => {
  // //       if (!this.dataSource) {
  // //         return;
  // //       }
  // //       this.dataSource.filter = this.filter?.nativeElement.value;
  // //     }
  // //   );
  // // }
  // // // export table data in excel file
  // // exportExcel() {
  // //   // key name with space add in brackets
  // //   const exportData: Partial<TableElement>[] =
  // //     this.dataSource.filteredData.map((x) => ({
  // //       Name: x.name,
  // //       Gender: x.gender,
  // //       Address: x.address,
  // //       'Birth Date': formatDate(new Date(x.date), 'yyyy-MM-dd', 'en') || '',
  // //       'Blood Group': x.bGroup,
  // //       Mobile: x.mobile,
  // //       Treatment: x.treatment,
  // //     }));
  // //   TableExportUtil.exportToExcel(exportData, 'excel');
  // }

  // showNotification(
  //   colorName: string,
  //   text: string,
  //   placementFrom: MatSnackBarVerticalPosition,
  //   placementAlign: MatSnackBarHorizontalPosition
  // ) {
  //   this.snackBar.open(text, '', {
  //     duration: 2000,
  //     verticalPosition: placementFrom,
  //     horizontalPosition: placementAlign,
  //     panelClass: colorName,
  //   });
  // }

  // llenarLista(){
  //   this.listaDiagnosticos = [
  //    {id:1, alerta:"Alerta 1", resultado:"resultado 1", estado:"estado 1", date:"11/09/2023"},
  //    {id:2, alerta:"Alerta 2", resultado:"resultado 2", estado:"estado 2", date:"11/09/2023"},
  //    {id:3, alerta:"Alerta 3", resultado:"resultado 3", estado:"estado 3", date:"11/09/2023"},
  //   ];
  // }
}
