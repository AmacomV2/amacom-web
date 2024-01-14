import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SituacionService } from '../services/situacion.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Room } from '../models/room.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SelectionModel } from '@angular/cdk/collections';
import {
  TableExportUtil,
  TableElement,
  UnsubscribeOnDestroyAdapter,
} from '@shared';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { PasoParametrosService } from '../../paso-parametro.service';
import { ModalConfig } from '@shared/components/crud-container/models/action.crud';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { TipoDocumentoDTO } from 'app/admin/gestionar-usuarios/tipos-documentos/models/tipoDocumento.model';
import { DeletePersonaComponent } from 'app/doctor/personas/allpersonas/dialog/delete/delete.component';
import { environment } from 'environments/environment';
import { DeleteSituacionDialogComponent } from './dialog/delete/delete.component';

@Component({
  selector: 'app-situaciones',
  templateUrl: './all-situaciones.component.html',
  styleUrls: ['./all-situaciones.component.scss'],
})
export class AllSituacionesComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  config: NgTableConfig<any> = {
    title: 'Lista de situaciones',
    keys: [
      'id',
      'description',
      'subjectName',
      'affectationDegree',
      'createdAt',
    ],
    headerColumns: [
      'No',
      'Descripcion',
      'Tema',
      'Grado de afectación',
      'Fecha creacion',
    ],
    urlData: environment.apiUrl + '/personSituation/search',
    typeColumns: ['uuid', null, null, null, 'date'],
    pageable: true,
    pageableOptions: {
      otherParams: {
        personId: null,
      },
    },
    showFilter: true,
  };

  modalForm: ModalConfig<TipoDocumentoDTO> = {
    create: {
      urlView: '/admin/room/add-allotment',
      actionType: 'add',
    },
    edit: {
      urlView: '/admin/room/add-allotment',
      actionType: 'edit',
    },
    delete: {
      modal: {
        title: '¿Está seguro de eliminar la persona?',
        component: DeleteSituacionDialogComponent,
      },
      actionType: 'delete',
      urlEndpoint: '/personSituation',
    },
    view: {
      urlView: '/admin/room/edit-allotment',
      actionType: 'view',
      action: (row: any) => {
        this.pasoParametrosService.adicionarParametro('situation', row);
      },
    },
  };

  personId: any;

  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public roomService: SituacionService,
    private snackBar: MatSnackBar,
    private router: Router,
    private pasoParametrosService: PasoParametrosService
  ) {
    super();
  }

  ngOnInit() {
    this.config.pageableOptions.otherParams['personId'] =
      this.pasoParametrosService.obtenerParametro('dataPersona').id;

    this.personId =
      this.pasoParametrosService.obtenerParametro('dataPersona').id;
  }

  // export table data in excel file
  exportExcel() {
    // key name with space add in brackets
    // const exportData: Partial<TableElement>[] =
    //   this.dataSource.filteredData.map((x) => ({
    //     'Room No': x.rNo,
    //     'Patient Name': x.pName,
    //     'Room Type': x.rType,
    //     'Admit Date':
    //       formatDate(new Date(x.admitDate), 'yyyy-MM-dd', 'en') || '',
    //     Gender: x.gender,
    //     'Discharge Date':
    //       formatDate(new Date(x.dischargeDate), 'yyyy-MM-dd', 'en') || '',
    //   }));
    // TableExportUtil.exportToExcel(exportData, 'excel');
  }
}
