import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/collections';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { BehaviorSubject, fromEvent, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { Direction } from '@angular/cdk/bidi';
import {
  TableExportUtil,
  TableElement,
  UnsubscribeOnDestroyAdapter,
} from '@shared';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { ServicioDTO } from './servicio.model';
import { FormDialogServicioComponent } from './dialog/form-dialog/form-dialog.component';
import { DeleteServicioComponent } from './dialog/delete/delete.component';
import { ModalConfig } from '@shared/components/crud-container/models/action.crud';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { environment } from 'environments/environment';
import { DeleteTipoInstitucionComponent } from '../../tipos-instituciones/all-tiposinstituciones/dialog/delete/delete.component';

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
