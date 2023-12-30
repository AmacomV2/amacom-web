import { Component } from '@angular/core';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import {
  DeleteGeneroComponent,
  GeneroDTO,
} from './dialog/delete/delete.component';
import { FormDialogGeneroComponent } from './dialog/form-dialog/form-dialog.component';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalConfig } from '@shared/components/crud-container/models/action.crud';

@Component({
  selector: 'app-allgeneros',
  templateUrl: './allgeneros.component.html',
  styleUrls: ['./allgeneros.component.scss'],
})
//implements OnInit
export class AllGenerosComponent extends UnsubscribeOnDestroyAdapter {
  config: NgTableConfig<any> = {
    title: 'Lista de generos',
    keys: ['id', 'name', 'updatedAt'],
    headerColumns: ['No', 'Genero', 'última actualización'],
    urlData: environment.apiUrl + '/genders/getAll',
    //mapperColums: [(col: string, key: any) => col.slice(0, 8), null],
    typeColumns: ['uuid', null, 'date'],
  };

  modalForm: ModalConfig<GeneroDTO> = {
    edit: {
      modal: {
        title: 'Editar genero',
        component: FormDialogGeneroComponent,
      },
      actionType: 'edit',
      urlEndpoint: '/genders',
    },
    create: {
      modal: {
        title: 'Crear genero',
        component: FormDialogGeneroComponent,
      },
      actionType: 'add',
      urlEndpoint: '/genders/create',
    },
    delete: {
      modal: {
        title: 'Eliminar genero',
        component: DeleteGeneroComponent,
        dataComponent: {},
      },
      actionType: 'delete',
      urlEndpoint: '/genders',
    },
    view: {
      modal: {
        title: 'Ver genero',
        width: '400px',
        maxHeight: '300px',
      },
      actionType: 'view',
      configView: [
        {
          label: 'Nombre',
          key: 'name',
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

  //public listaGeneros: Array<any> = [];

  constructor(
    public httpClient: HttpClient,
    //public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private pasoParametrosService: PasoParametrosService
  ) {
    super();
  }
  // @ViewChild(MatPaginator, { static: true })
  // paginator!: MatPaginator;
  // @ViewChild(MatSort, { static: true })
  // sort!: MatSort;
  // @ViewChild('filter', { static: true }) filter?: ElementRef;
  //ngOnInit() {
  // this.llenarLista();
  //}
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
  //   const dialogRef = this.dialog.open(FormDialogGeneroComponent, {
  //     data: {
  //       action: 'add',
  //     },
  //   });
  // }
  // search(row: GeneroList) {
  //   //this.id = row.id;
  //   this.pasoParametrosService.adicionarParametro('data', row);
  //   this.router.navigate(['/admin/gestionar-usuarios/personas/search-persona']);
  // }
  // editCall(row: GeneroList) {
  //   //this.id = row.id;
  //   let tempDirection: Direction;
  //   if (localStorage.getItem('isRtl') === 'true') {
  //     tempDirection = 'rtl';
  //   } else {
  //     tempDirection = 'ltr';
  //   }
  //   const dialogRef = this.dialog.open(FormDialogGeneroComponent, {
  //     data: {
  //       genero: row,
  //       action: 'edit',
  //     },
  //   });
  // }
  // deleteItem(row: GeneroList) {
  //   //this.id = row.id;
  //   let tempDirection: Direction;
  //   if (localStorage.getItem('isRtl') === 'true') {
  //     tempDirection = 'rtl';
  //   } else {
  //     tempDirection = 'ltr';
  //   }
  //   const dialogRef = this.dialog.open(DeleteGeneroComponent, {
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
  //   this.listaGeneros = [
  //    {id:1, genero:"Femenino", date:"20/08/2023"},
  //    {id:2, genero:"Masculino", date:"20/08/2023"},
  //    {id:3, genero:"Otro", date:"20/08/2023"},
  //   ];
  // }
}
