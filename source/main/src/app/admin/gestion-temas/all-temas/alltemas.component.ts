import { Component } from '@angular/core';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { ModalConfig } from '@shared/components/crud-container/models/action.crud';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { SignoAlarmaDTO } from 'app/admin/gestion-signos-alarma/all-signosalarma/models/signoalarma.model';
import { DeleteInstitucionComponent } from 'app/admin/instituciones/instituciones/all-instituciones/dialog/delete/delete.component';
import { environment } from 'environments/environment';
import { DeleteTemaComponent } from './dialog/delete/delete.component';

@Component({
  selector: 'app-alltemas',
  templateUrl: './alltemas.component.html',
  styleUrls: ['./alltemas.component.scss'],
})
export class AllTemasComponent extends UnsubscribeOnDestroyAdapter {

  title = 'TEMAS Y SUBTEMAS';
  subtitle =
    'En esta pantalla podrás visualizar los temas y subtemas existentes';

  config: NgTableConfig<any> = {
    title: 'Lista de temas y subtemas',
    keys: ['id', 'name', 'validityIndicator', 'updatedAt'],
    headerColumns: ['No', 'Nombre', 'validez', 'última actualización'],
    urlData: environment.apiUrl + '/subject/search',
    typeColumns: ['uuid', null, null, null, 'date'],
    pageable: true,
    showFilter: true,
  };

  modalForm: ModalConfig<SignoAlarmaDTO> = {
    edit: {
      urlView: '/admin/gestion-temas/add-temas',
      actionType: 'edit',
    },
    create: {
      urlView: '/admin/gestion-temas/add-temas',
      actionType: 'add',
    },
    delete: {
      modal: {
        title: '¿Está seguro de eliminar el tema?',
        component: DeleteTemaComponent,
      },
      actionType: 'delete',
      urlEndpoint: '/subject',
    },
    view: {
      modal: {
        title: 'Ver tema',
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
          label: 'Indicador de validez',
          key: 'validityIndicator',
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
