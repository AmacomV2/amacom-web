import { Component } from '@angular/core';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { ModalConfig } from '@shared/components/crud-container/models/action.crud';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { SignoAlarmaDTO } from 'app/admin/gestion-signos-alarma/all-signosalarma/models/signoalarma.model';
import { DeleteInstitucionComponent } from 'app/admin/instituciones/instituciones/all-instituciones/dialog/delete/delete.component';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-alltemas',
  templateUrl: './alltemas.component.html',
  styleUrls: ['./alltemas.component.scss'],
})
export class AllTemasComponent extends UnsubscribeOnDestroyAdapter {
  // public listaSignoAlarma: Array<any> = [];
  // public indicePrimerItem: number = 1;
  // public indiceUltimoItem: number = 10;
  // displayedColumns = [
  //   'select',
  //   'img',
  //   'name',
  //   'gender',
  //   'address',
  //   'mobile',
  //   'date',
  //   'bGroup',
  //   'treatment',
  //   'actions',
  // ];
  // index?: number;
  // id?: number;
  // constructor(
  //   public httpClient: HttpClient,
  //   public dialog: MatDialog,
  //   private snackBar: MatSnackBar,
  //   private router: Router,
  //   private pasoParametrosService: PasoParametrosService
  // ) {
  //   super();
  // }
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
  //   this.router.navigate(['/admin/gestion-temas/add-temas']);
  // }
  // search(row: TemaList) {
  //   this.pasoParametrosService.adicionarParametro('data', row);
  //   this.router.navigate(['/admin/gestion-temas/search-temas']);
  // }
  // editCall(row: TemaList) {
  //   this.id = row.id;
  //   this.pasoParametrosService.adicionarParametro('data', row);
  //   this.pasoParametrosService.adicionarParametro('modoEditar', true);
  //   this.router.navigate(['/admin/gestion-temas/add-temas']);
  // }
  // deleteItem(row: TemaList) {
  //   this.pasoParametrosService.adicionarParametro('action', false);
  //   this.id = row.id;
  //   let tempDirection: Direction;
  //   if (localStorage.getItem('isRtl') === 'true') {
  //     tempDirection = 'rtl';
  //   } else {
  //     tempDirection = 'ltr';
  //   }
  //   const dialogRef = this.dialog.open(DeleteTemaComponent, {
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
  //   this.listaSignoAlarma = [
  //    {id:1, nombre:"Tema 1", validez:"1", temaPadre:"Tema 0", date:"28/08/2023"},
  //    {id:2, nombre:"Tema 2", validez:"2", temaPadre:"Tema 1", date:"28/08/2023"},
  //    {id:3, nombre:"Tema 3", validez:"3", temaPadre:"Tema 0", date:"28/08/2023"},
  //    {id:4, nombre:"Tema 4", validez:"1", temaPadre:"Tema 0", date:"28/08/2023"},
  //    {id:5, nombre:"Tema 5", validez:"2", temaPadre:"Tema 0", date:"28/08/2023"},
  //    {id:6, nombre:"Tema 6", validez:"3", temaPadre:"Tema 0", date:"28/08/2023"},
  //    {id:7, nombre:"Tema 7", validez:"1", temaPadre:"Tema 0", date:"28/08/2023"},
  //    {id:8, nombre:"Tema 8", validez:"2", temaPadre:"Tema 0", date:"28/08/2023"},
  //   ];
  // }

  title = 'TEMAS Y SUBTEMAS';
  subtitle =
    'En esta pantalla podrás visualizar los temas y subtemas existentes';

  config: NgTableConfig<any> = {
    title: 'Lista de temas y subtemas',
    keys: ['id', 'name', 'validityIndicator', 'updatedAt'],
    headerColumns: ['No', 'Nombre', 'validez', 'última actualización'],
    urlData: environment.apiUrl + '/subject/search',
    typeColumns: ['uuid', null, null, null, 'date'],
    pageable: true,
    showFilter: true,
  };

  modalForm: ModalConfig<SignoAlarmaDTO> = {
    edit: {
      urlView: '/admin/gestion-temas/add-temas',
      actionType: 'edit',
    },
    create: {
      urlView: '/admin/gestion-temas/add-temas',
      actionType: 'add',
    },
    delete: {
      modal: {
        title: 'Eliminar institucion',
        component: DeleteInstitucionComponent,
      },
      actionType: 'delete',
      urlEndpoint: '/alarmSign',
    },
    view: {
      modal: {
        title: 'Ver signo de alarma',
        width: '400px',
        maxHeight: '500px',
      },
      actionType: 'view',
      configView: [
        {
          label: 'Nombre',
          key: 'name',
        },
        {
          label: 'Indicador de validez',
          key: 'validityIndicator',
        },
        {
          label: 'Fecha de creación',
          key: 'createdAt',
          type: 'date',
        },
        {
          label: 'Fecha de actualización',
          key: 'updatedAt',
          type: 'date',
        },
      ],
    },
  };
}
