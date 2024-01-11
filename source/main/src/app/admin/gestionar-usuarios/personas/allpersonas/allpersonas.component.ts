import { Component } from '@angular/core';
import {
  UnsubscribeOnDestroyAdapter
} from '@shared';
import { ModalConfig } from '@shared/components/crud-container/models/action.crud';
import { FilterTableCRUD } from '@shared/components/crud-container/models/filter.crud';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { environment } from 'environments/environment';
import { TipoDocumentoDTO } from '../../tipos-documentos/models/tipoDocumento.model';
import { DeletePersonaComponent } from './dialog/delete/delete.component';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';

@Component({
  selector: 'app-allpersonas',
  templateUrl: './allpersonas.component.html',
  styleUrls: ['./allpersonas.component.scss'],
})
export class AllPersonasComponent extends UnsubscribeOnDestroyAdapter {
  title = 'Lista de personas';
  subtitle = 'En esta pantalla podrás visualizar las personas';

  config: NgTableConfig<any> = {
    title: 'Lista de personas',
    keys: ['id', 'fullName', 'gender.name', 'documentType.name', 'updatedAt'],
    headerColumns: ['No', 'Nombre Completo', 'Genero', 'Documento', 'última actualización'],
    urlData: environment.apiUrl + '/person/query',
    typeColumns: ['uuid', null, null, null, 'date'],
    pageable: true,
    showFilter: true,
  };

  modalForm: ModalConfig<TipoDocumentoDTO> = {
    create: {
      urlView: '/admin/gestionar-usuarios/personas/add-persona',
      actionType: 'add',
    },
    edit: {
      urlView: '/admin/gestionar-usuarios/personas/add-persona',
      actionType: 'edit',
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
      urlView: '/admin/gestionar-usuarios/personas/search-persona',
      actionType: 'view',
      action: (row)=>{
        this.pasarParametrosService.adicionarParametro('dataPersona', row);
      }
    },
  };

  filterTable: FilterTableCRUD[] = [
    // {
    //   label: 'Nombre',
    //   placeholder: 'Ingrese el nombre',
    //   key: 'name',
    // },
    // {
    //   label: 'Apellido',
    //   placeholder: 'Ingrese el apellido',
    //   key: 'lastName',
    // }
  ]

  constructor(private pasarParametrosService: PasoParametrosService) {
    super();
  }
  // refresh() {
  //   //this.loadData();
  // }
  // addNew() {
  //   this.router.navigate(['/admin/gestionar-usuarios/personas/add-persona']);
  // }
  // search(row: PersonaList) {
  //   this.id = row.id;
  //   this.pasoParametrosService.adicionarParametro('data', row);
  //   this.router.navigate(['/admin/gestionar-usuarios/personas/search-persona']);
  // }
  // editCall(row: PersonaList) {
  //   this.id = row.id;
  //   this.pasoParametrosService.adicionarParametro('data', row);
  //   this.pasoParametrosService.adicionarParametro('modoEditar', true);
  //   this.router.navigate(['/admin/gestionar-usuarios/personas/add-persona']);
  // }
  // deleteItem(row: PersonaList) {
  //   this.id = row.id;
  //   let tempDirection: Direction;
  //   if (localStorage.getItem('isRtl') === 'true') {
  //     tempDirection = 'rtl';
  //   } else {
  //     tempDirection = 'ltr';
  //   }
  //   const dialogRef = this.dialog.open(DeleteComponent, {
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
  //   this.listaPersonas = [
  //    {id:1, nombre:"Valentina", apellido:"Escobar", tipoDocumento:"CC", numeroDocumento:"11111111", genero: "Femenino", direccion: "Girón", estadoCivil: "desconocido", fechaNacimiento: "27/06/2001", ocupacion: "trabajador", estado:"Activo", date:"22/09/2023"},
  //    {id:2, nombre:"Mario", apellido:"Vallejo", tipoDocumento:"CC", numeroDocumento:"22222222", genero: "Femenino", direccion: "Bucaramanga", estadoCivil: "desconocido", fechaNacimiento: "28/08/1998", ocupacion: "trabajador", estado:"Inactivo", date:"22/09/2023"},
  //    {id:3, nombre:"Jesús", apellido:"Vargas", tipoDocumento:"CC", numeroDocumento:"33333333", genero: "Otro", direccion: "Bucaramanga", estadoCivil: "desconocido", fechaNacimiento: "22/02/2222", ocupacion: "trabajador", estado:"Activo", date:"22/09/2023"}
  //   ];
  // }
}
