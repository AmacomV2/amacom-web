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
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Direction } from '@angular/cdk/bidi';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { MaterialDTO } from '../models/material.model';
import { ModalConfig } from '@shared/components/crud-container/models/action.crud';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { environment } from 'environments/environment';
import { DeleteMaterialComponent } from './dialog/delete/delete.component';
import { AddMaterialComponent } from './dialog/add-material/add-material.component';

@Component({
  selector: 'app-allmaterial',
  templateUrl: './allmaterial.component.html',
  styleUrls: ['./allmaterial.component.scss'],
})
export class AllMaterialComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  title = 'MATERIAL DE APOYO';
  subtitle =
    'En esta pantalla podrás visualizar los materiales de apoyo existentes';

  config: NgTableConfig<any> = {
    title: 'Lista de materiales de apoyo',
    keys: ['id', 'name', 'description', 'updatedAt'],
    headerColumns: ['No', 'Nombre', 'Descripcion', 'última actualización'],
    urlData: environment.apiUrl + '/supportMaterial/search',
    typeColumns: ['uuid', null, null, 'date'],
    hideDefaultActions: {
      view: true,
    },
    pageable: true,
    showFilter: true,
    pageableOptions: {
      otherParams: {},
    },
  };

  modalForm: ModalConfig<MaterialDTO> = {
    edit: {
      urlView: '/admin/gestion-material-apoyo/add',
      actionType: 'edit',
    },
    create: {
      // modal: {
      //   title: 'Agregar Material de apoyo',
      //   component: AddMaterialComponent,
      // },
      actionType: 'add',
      urlView: '/admin/gestion-material-apoyo/add',
      urlEndpoint: '/supportMaterial/create',
      // actionModalAccept: (data: any) => {
      //   console.log('crear material de apoyo', data);
      //   return new Observable((observer) => {
      //     this.httpClient
      //       .post<MaterialDTO>(
      //         environment.apiUrl + '/supportMaterial/create',
      //         data
      //       )
      //       .subscribe(
      //         (data) => {
      //           this.httpClient
      //             .post<any>(
      //               environment.apiUrl + '/supportMaterialHasSubject/create',
      //               {
      //                 idSupportMaterial: data.id,
      //                 subjectId:
      //                   this.pasoParametrosService.obtenerParametro('tema')?.id,
      //               }
      //             )
      //             .pipe(
      //               tap(() => {
      //                 this.snackBar.open('Material creado exitosamente.');
      //               })
      //             )
      //             .subscribe((data) => {
      //               observer.next(data);
      //               observer.complete();
      //             });
      //         },
      //         (error) => {
      //           observer.error(error);
      //           observer.complete();
      //         }
      //       );
      //   });
      // },
    },
    delete: {
      modal: {
        title: '¿Está seguro de eliminar el material apoyo?',
        component: DeleteMaterialComponent,
      },
      actionType: 'delete',
      urlEndpoint: '/supportMaterial',
    },
    view: {
      //urlView: '/admin/gestion-temas/search-temas',
      actionType: 'view',
    },
  };

  public listaMaterial: Array<any> = [];
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
  id?: string;
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
    console.log('Material de apoyo');
    // this.config.pageableOptions.otherParams['subjectId'] =
    //   this.pasoParametrosService.obtenerParametro('tema')?.id;
  }

  addNew() {
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(AddMaterialComponent, {
      data: {
        action: 'add',
      },
    });
  }
  search(row: MaterialDTO) {
    this.id = row.id;
    this.pasoParametrosService.adicionarParametro('data', row);
    this.router.navigate(['/admin/gestionar-usuarios/personas/search-persona']);
  }
  editCall(row: MaterialDTO) {
    this.id = row.id;
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(AddMaterialComponent, {
      data: {
        logro: row,
        action: 'edit',
      },
    });
  }
  deleteItem(row: MaterialDTO) {
    this.id = row.id;
    let tempDirection: Direction;
    if (localStorage.getItem('isRtl') === 'true') {
      tempDirection = 'rtl';
    } else {
      tempDirection = 'ltr';
    }
    const dialogRef = this.dialog.open(DeleteMaterialComponent, {
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
    this.listaMaterial = [
      {
        id: 1,
        nombre: 'Material 1',
        date: '21/08/2023',
        descripcion: 'material de apoyo 1',
        url: 'a122s2d3333f43',
      },
      {
        id: 2,
        nombre: 'Material 2',
        date: '22/08/2023',
        descripcion: 'material de apoyo 2',
        url: 'a122s2d3333f43',
      },
      {
        id: 3,
        nombre: 'Material 3',
        date: '22/08/2023',
        descripcion: 'material de apoyo 3',
        url: 'a122s2d3333f43',
      },
    ];
  }
}
