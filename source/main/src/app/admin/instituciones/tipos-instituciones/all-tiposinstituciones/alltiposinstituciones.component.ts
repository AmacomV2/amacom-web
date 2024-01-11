import { Component } from '@angular/core';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { ModalConfig } from '@shared/components/crud-container/models/action.crud';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { environment } from 'environments/environment';
import { TipoInstitucionDTO } from '../models/tipoInstitucion.model';
import { DeleteTipoInstitucionComponent } from './dialog/delete/delete.component';
import { FormDialogTipoInstitucionComponent } from './dialog/form-dialog/form-dialog.component';

@Component({
  selector: 'app-alltiposinstituciones',
  templateUrl: './alltiposinstituciones.component.html',
})
export class AllTiposInstitucionesComponent extends UnsubscribeOnDestroyAdapter {
  title = 'TIPOS DE INSTITUCIONES';
  subtitle =
    'En esta pantalla podrás visualizar los tipos de instituciones existentes';

  config: NgTableConfig<any> = {
    title: 'Lista de tipos de instituciones',
    keys: ['id', 'name', 'description', 'updatedAt'],
    headerColumns: ['No', 'Nombre', 'Descripción', 'última actualización'],
    urlData: environment.apiUrl + '/typeInstitution/consulta',
    //mapperColums: [(col: string, key: any) => col.slice(0, 8), null],
    typeColumns: ['uuid', null, null, 'date'],
    pageable: true,
    showFilter: true,
  };

  modalForm: ModalConfig<TipoInstitucionDTO> = {
    edit: {
      modal: {
        title: 'Editar tipo de institución',
        component: FormDialogTipoInstitucionComponent,
        width: '400px',
      },
      actionType: 'edit',
      urlEndpoint: '/typeInstitution',
    },
    create: {
      modal: {
        title: 'Crear tipo de institución',
        component: FormDialogTipoInstitucionComponent,
        width: '400px',
      },
      actionType: 'add',
      urlEndpoint: '/typeInstitution/create',
    },
    delete: {
      modal: {
        title: '¿Está seguro de eliminar el tipo de institución?',
        component: DeleteTipoInstitucionComponent,
      },
      actionType: 'delete',
      urlEndpoint: '/typeInstitution',
    },
    view: {
      modal: {
        title: 'Ver tipo de institución',
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
