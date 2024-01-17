import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Direction } from '@angular/cdk/bidi';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { InstitucionDTO } from '../models/institucion.model';
import { DeleteInstitucionComponent } from './dialog/delete/delete.component';
import { ModalConfig } from '@shared/components/crud-container/models/action.crud';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-allinstituciones',
  templateUrl: './allinstituciones.component.html',
  styleUrls: ['./allinstituciones.component.scss'],
})
export class AllInstitucionesComponent extends UnsubscribeOnDestroyAdapter {
  title = 'INSTITUCIONES';
  subtitle = 'En esta pantalla podrás visualizar las instituciones existentes';

  config: NgTableConfig<any> = {
    title: 'Lista de instituciones',
    keys: ['id', 'name', 'description', 'institutionTypeName', 'updatedAt'],
    headerColumns: [
      'No',
      'Nombre',
      'Descripción',
      'Tipo',
      'última actualización',
    ],
    urlData: environment.apiUrl + '/institution/consulta',
    typeColumns: ['uuid', null, null, null, 'date'],
    pageable: true,
    showFilter: true,
  };

  modalForm: ModalConfig<InstitucionDTO> = {
    edit: {
      urlView: '/admin/instituciones/instituciones/add-institucion',
      actionType: 'edit',
    },
    create: {
      urlView: '/admin/instituciones/instituciones/add-institucion',
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
        title: 'Ver institucion',
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
          key: 'institutionTypeName',
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

  addNew() {
    this.router.navigate([
      '/admin/instituciones/instituciones/add-institucion',
    ]);
  }
  search(row: InstitucionDTO) {
    //this.id = row.id;
    this.pasoParametrosService.adicionarParametro('data', row);
    this.router.navigate([
      '/admin/instituciones/instituciones/search-institucion',
    ]);
  }
  editCall(row: InstitucionDTO) {
    //this.id = row.id;
    this.pasoParametrosService.adicionarParametro('data', row);
    this.pasoParametrosService.adicionarParametro('modoEditar', true);
    this.router.navigate([
      '/admin/instituciones/instituciones/add-institucion',
    ]);
  }
  deleteItem(row: InstitucionDTO) {
    //this.id = row.id;
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(DeleteInstitucionComponent, {
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
