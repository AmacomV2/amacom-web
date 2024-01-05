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

  constructor(
    public httpClient: HttpClient,
    //public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private pasoParametrosService: PasoParametrosService
  ) {
    super();
  }
}
