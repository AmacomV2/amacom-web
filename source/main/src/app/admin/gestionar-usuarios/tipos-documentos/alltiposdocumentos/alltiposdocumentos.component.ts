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
        title: 'Editar tipo de documento',
        component: FormDialogTipoDocumentoComponent,
      },
      actionType: 'edit',
      urlEndpoint: '/documentType',
    },
    create: {
      modal: {
        title: 'Crear tipo de documento',
        component: FormDialogTipoDocumentoComponent,
      },
      actionType: 'add',
      urlEndpoint: '/documentType/create',
    },
    delete: {
      modal: {
        title: 'Eliminar tipo de documento',
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
}
