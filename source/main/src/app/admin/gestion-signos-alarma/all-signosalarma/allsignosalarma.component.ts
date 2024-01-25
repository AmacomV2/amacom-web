import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Direction } from '@angular/cdk/bidi';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { SignoAlarmaDTO } from './models/signoalarma.model';
import { FormDialogSignoAlarmaComponent } from './dialog/form-dialog/form-dialog.component';
import { DeleteSignoAlarmaComponent } from './dialog/delete/delete.component';
import { ModalConfig } from '@shared/components/crud-container/models/action.crud';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-allsignosalarma',
  templateUrl: './allsignosalarma.component.html',
  styleUrls: ['./allsignosalarma.component.scss'],
})
export class AllSignosAlarmaComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  title = 'Signos de alarma';
  subtitle =
    'En esta pantalla podrás visualizar los signos de alarma existentes';

  config: NgTableConfig<any> = {
    title: 'Lista de signos de alarma',
    keys: ['id', 'name', 'description', 'type', 'status', 'updatedAt'],
    headerColumns: [
      'No',
      'Nombre',
      'Descripción',
      'Tipo',
      'Estado',
      'última actualización',
    ],
    urlData: environment.apiUrl + '/alarmSign/search',
    mapperColums: [
      null,
      null,
      null,
      (status: string) => {
        return status === 'MOTHER' ? 'Madre' : 'Bebé';
      },
    ],
    typeColumns: ['uuid', null, null, null, 'badge', 'date'],
    pageable: true,
    showFilter: true,
  };

  modalForm: ModalConfig<SignoAlarmaDTO> = {
    edit: {
      modal: {
        title: 'Editar signo de alarma',
        component: FormDialogSignoAlarmaComponent,
      },
      actionType: 'edit',
      urlEndpoint: '/alarmSign',
    },
    create: {
      modal: {
        title: 'Crear signo de alarma',
        component: FormDialogSignoAlarmaComponent,
      },
      actionType: 'add',
      urlEndpoint: '/alarmSign/create',
    },
    delete: {
      modal: {
        title: 'Eliminar signo de alarma',
        component: DeleteSignoAlarmaComponent,
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
          label: 'Descripción',
          key: 'description',
        },
        {
          label: 'Tipo',
          key: 'type',
        },
        {
          label: 'Estado',
          key: 'status',
          type: 'badge',
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
  // id?: string;
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
  search(row: SignoAlarmaDTO) {
    this.pasoParametrosService.adicionarParametro('action', true);
    //this.id = row.id;
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
  editCall(row: SignoAlarmaDTO) {
    //this.id = row.id;
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
  deleteItem(row: SignoAlarmaDTO) {
    this.pasoParametrosService.adicionarParametro('action', false);
    ///this.id = row.id;
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

  llenarLista() {
    // this.listaSignoAlarma = [
    //  {id:1, nombre:"Signo alarma 1", tipo:"Madre", descripcion:"Soy el Signo alarma 1", estado:"Activo", date:"11/09/2023"},
    //  {id:2, nombre:"Signo alarma 2", tipo:"Madre", descripcion:"Soy el Signo alarma 2", estado:"Activo", date:"11/09/2023"},
    //  {id:3, nombre:"Signo alarma 3", tipo:"Madre", descripcion:"Soy el Signo alarma 3", estado:"Activo", date:"11/09/2023"},
    //  {id:4, nombre:"Signo alarma 4", tipo:"Madre", descripcion:"Soy el Signo alarma 4", estado:"Activo", date:"11/09/2023"},
    //  {id:5, nombre:"Signo alarma 5", tipo:"Bebe", descripcion:"Soy el Signo alarma 5", estado:"Activo", date:"11/09/2023"},
    //  {id:6, nombre:"Signo alarma 6", tipo:"Bebe", descripcion:"Soy el Signo alarma 6", estado:"Activo", date:"11/09/2023"},
    //  {id:7, nombre:"Signo alarma 7", tipo:"Bebe", descripcion:"Soy el Signo alarma 7", estado:"Activo", date:"11/09/2023"},
    //  {id:8, nombre:"Signo alarma 8", tipo:"Bebe", descripcion:"Soy el Signo alarma 8", estado:"Activo", date:"11/09/2023"},
    //  {id:9, nombre:"Signo alarma 9", tipo:"Bebe", descripcion:"Soy el Signo alarma 9", estado:"Inactivo", date:"11/09/2023"},
    // ];
  }
}
