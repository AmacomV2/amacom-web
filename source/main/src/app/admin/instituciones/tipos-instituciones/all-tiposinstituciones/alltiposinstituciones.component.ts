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
import { TipoInstitucionDTO } from '../models/tipoInstitucion.model';
import { FormDialogTipoInstitucionComponent } from './dialog/form-dialog/form-dialog.component';
import { DeleteTipoInstitucionComponent } from './dialog/delete/delete.component';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { ModalConfig } from '@shared/components/crud-container/models/action.crud';
import { DeleteSignoAlarmaComponent } from 'app/admin/gestion-signos-alarma/all-signosalarma/dialog/delete/delete.component';
import { FormDialogSignoAlarmaComponent } from 'app/admin/gestion-signos-alarma/all-signosalarma/dialog/form-dialog/form-dialog.component';
import { SignoAlarmaDTO } from 'app/admin/gestion-signos-alarma/all-signosalarma/models/signoalarma.model';
import { environment } from 'environments/environment';

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
        title: 'Eliminar tipo de institución',
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
