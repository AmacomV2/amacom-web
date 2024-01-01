import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { TipoDocumentoDTO } from '../models/tipoDocumento.model';
import { DeleteTipoDocumentoComponent } from './dialog/delete/delete.component';
import { ModalConfig } from '@shared/components/crud-container/models/action.crud';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { environment } from 'environments/environment';
import { FormDialogTipoDocumentoComponent } from './dialog/form-dialog/form-dialog.component';

@Component({
  selector: 'app-alltiposdocumentos',
  templateUrl: './alltiposdocumentos.component.html',
  styleUrls: ['./alltiposdocumentos.component.scss'],
})
export class AllTiposDocumentosComponent extends UnsubscribeOnDestroyAdapter {
  title = 'Lista de tipos de documentos';
  subtitle =
    'En esta pantalla podrás visualizar los tipos de documento existentes';

  config: NgTableConfig<any> = {
    title: 'Lista de generos',
    keys: ['id', 'name', 'acronym', 'updatedAt'],
    headerColumns: ['No', 'Nombre', 'Codigo', 'última actualización'],
    urlData: environment.apiUrl + '/documentType/getAll',
    //mapperColums: [(col: string, key: any) => col.slice(0, 8), null],
    typeColumns: ['uuid', null, null, 'date'],
  };

  modalForm: ModalConfig<TipoDocumentoDTO> = {
    edit: {
      modal: {
        title: 'Editar genero',
        component: FormDialogTipoDocumentoComponent,
      },
      actionType: 'edit',
      urlEndpoint: '/documentType',
    },
    create: {
      modal: {
        title: 'Crear genero',
        component: FormDialogTipoDocumentoComponent,
      },
      actionType: 'add',
      urlEndpoint: '/documentType/create',
    },
    delete: {
      modal: {
        title: 'Eliminar genero',
        component: DeleteTipoDocumentoComponent,
      },
      actionType: 'delete',
      urlEndpoint: '/documentType',
    },
    view: {
      modal: {
        title: 'Ver tipo de documento',
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
          label: 'Código',
          key: 'acronym',
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

  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private pasoParametrosService: PasoParametrosService
  ) {
    super();
  }

  // refresh() {
  //   this.loadData();
  // }
  // addNew() {
  //   let tempDirection: Direction;
  //   if (localStorage.getItem('isRtl') === 'true') {
  //     tempDirection = 'rtl';
  //   } else {
  //     tempDirection = 'ltr';
  //   }
  //   const dialogRef = this.dialog.open(FormDialogTipoDocumentoComponent, {
  //     data: {
  //       action: 'add',
  //     },
  //   });
  // }
  // search(row: TipoDocumentoList) {
  //   this.id = row.id;
  //   this.pasoParametrosService.adicionarParametro('data', row);
  //   this.router.navigate(['/admin/gestionar-usuarios/personas/search-persona']);
  // }
  editCall(row: TipoDocumentoDTO) {
    // this.id = row.id;
    // let tempDirection: Direction;
    // if (localStorage.getItem('isRtl') === 'true') {
    //   tempDirection = 'rtl';
    // } else {
    //   tempDirection = 'ltr';
    // }
    // const dialogRef = this.dialog.open(FormDialogTipoDocumentoComponent, {
    //   data: {
    //     genero: row,
    //     action: 'edit',
    //   },
    // });
  }
  deleteItem(row: TipoDocumentoDTO) {
    // this.id = row.id;
    // let tempDirection: Direction;
    // if (localStorage.getItem('isRtl') === 'true') {
    //   tempDirection = 'rtl';
    // } else {
    //   tempDirection = 'ltr';
    // }
    // const dialogRef = this.dialog.open(DeleteTipoDocumentoComponent, {
    //   data: row,
    //   direction: tempDirection,
    // });
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
  //   this.listaTiposDocumento = [
  //    {id:1, tipo:"Cédula de ciudadanía", codigo:"CC", date:"11/09/2023"},
  //    {id:2, tipo:"Cédula de extranjeto", codigo:"CE", date:"11/09/2023"},
  //    {id:3, tipo:"Tarjeta de identidad", codigo:"TI", date:"11/09/2023"},
  //    {id:4, tipo:"Número de identificación tributaria", codigo:"NIT", date:"11/09/2023"},
  //   ];
  // }
}
