import { Component } from '@angular/core';
import { ServicioDTO } from './servicio.model';
import { FormDialogServicioComponent } from './dialog/form-dialog/form-dialog.component';
import { DeleteServicioComponent } from './dialog/delete/delete.component';
import { ModalConfig } from '@shared/components/crud-container/models/action.crud';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-allservicios',
  templateUrl: './allservicios.component.html',
})
export class AllServiciosComponent {
  title = 'SERVICIOS';
  subtitle =
    'En esta pantalla podrás visualizar los servicios existentes';

  config: NgTableConfig<any> = {
    title: 'Lista de tipos de instituciones',
    keys: ['id', 'name', 'description', 'updatedAt'],
    headerColumns: ['No', 'Nombre', 'Descripción', 'última actualización'],
    urlData: environment.apiUrl + '/services/consulta',
    //mapperColums: [(col: string, key: any) => col.slice(0, 8), null],
    typeColumns: ['uuid', null, null, 'date'],
    pageable: true,
    showFilter: true,
  };

  modalForm: ModalConfig<ServicioDTO> = {
    edit: {
      modal: {
        title: 'Editar servicio',
        component: FormDialogServicioComponent,
      },
      actionType: 'edit',
      urlEndpoint: '/services',
    },
    create: {
      modal: {
        title: 'Crear servicio',
        component: FormDialogServicioComponent,
      },
      actionType: 'add',
      urlEndpoint: '/services/create',
    },
    delete: {
      modal: {
        title: 'Eliminar servicio',
        component: DeleteServicioComponent,
      },
      actionType: 'delete',
      urlEndpoint: '/services',
    },
    view: {
      modal: {
        title: 'Ver servicio',
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
