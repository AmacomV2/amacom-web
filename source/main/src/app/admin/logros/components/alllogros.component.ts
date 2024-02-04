import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Direction } from '@angular/cdk/bidi';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { DeleteLogroComponent } from './dialog/delete/delete.component';
import { LogroDTO } from '../models/logro.model';
import { FormDialogLogroComponent } from './dialog/form-dialog/form-dialog.component';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { environment } from 'environments/environment';
import { ModalConfig } from '@shared/components/crud-container/models/action.crud';

@Component({
  selector: 'app-alllogros',
  templateUrl: './alllogros.component.html',
  styleUrls: ['./alllogros.component.scss'],
})
export class AllLogrosComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  title = 'LOGROS';
  subtitle = 'En esta pantalla podrás visualizar los logros existentes';

  config: NgTableConfig<any> = {
    title: 'Lista de logros',
    keys: ['id', 'name', 'description', 'updatedAt'],
    headerColumns: ['No', 'Nombre', 'Descripcion', 'última actualización'],
    urlData: environment.apiUrl + '/achievement/search',
    typeColumns: ['uuid', null, null, 'date'],
    pageableOptions: {
      otherParams: {
        subjectId: null,
      },
    },
    hideDefaultActions: {
      view: true,
    },
    pageable: true,
    showFilter: true,
  };

  modalForm: ModalConfig<LogroDTO> = {
    edit: {
      modal: {
        title: 'Editar Logro',
        component: FormDialogLogroComponent,
      },
      actionType: 'edit',
      urlEndpoint: '/achievement',
    },
    create: {
      modal: {
        title: 'Agregar Logro',
        component: FormDialogLogroComponent,
      },
      actionType: 'add',
      urlEndpoint: '/achievement/create',
    },
    delete: {
      modal: {
        title: '¿Está seguro de eliminar el logro?',
        component: DeleteLogroComponent,
      },
      actionType: 'delete',
      urlEndpoint: '/achievement',
    },
    view: {
      //urlView: '/admin/gestion-temas/search-temas',
      actionType: 'view',
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

  ngOnInit() {
    this.config.pageableOptions.otherParams = null;
    // this.config.pageableOptions.otherParams['subjectId'] =
    //   this.pasoParametrosService.obtenerParametro('data')?.id;
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
    const dialogRef = this.dialog.open(FormDialogLogroComponent, {
      data: {
        action: 'add',
      },
    });
  }
  // search(row: LogroDTO) {
  //   this.id = row.id;
  //   this.pasoParametrosService.adicionarParametro('data', row);
  //   this.router.navigate(['/admin/gestionar-usuarios/personas/search-persona']);
  // }
  // editCall(row: LogroDTO) {
  //   this.id = row.id;
  //   let tempDirection: Direction;
  //   if (localStorage.getItem('isRtl') === 'true') {
  //     tempDirection = 'rtl';
  //   } else {
  //     tempDirection = 'ltr';
  //   }
  //   const dialogRef = this.dialog.open(FormDialogLogroComponent, {
  //     data: {
  //       logro: row,
  //       action: 'edit',
  //     },
  //   });
  // }
  // deleteItem(row: LogroDTO) {
  //   this.id = row.id;
  //   let tempDirection: Direction;
  //   if (localStorage.getItem('isRtl') === 'true') {
  //     tempDirection = 'rtl';
  //   } else {
  //     tempDirection = 'ltr';
  //   }
  //   const dialogRef = this.dialog.open(DeleteLogroComponent, {
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
}
