import { Location } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import {
  FormGroup,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { DiagnosticoDTO } from '../../models/diagnostico.model';
import { DiagnosticoService } from '../../services/diagnostico.service';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgTableComponent } from '@shared/components/ng-table/ng-table.component';
import { DialogService } from '@core/dialog/services/dialog.service';
import { ModalActividadComponent } from '../modal-actividad/modal-actividad.component';
import { ModalResponse } from '@core/dialog/models/respuesta';
import { ModalIndicadoresComponent } from '../modal-indicadores/modal-indicadores.component';

@Component({
  selector: 'app-add-diagnostico',
  templateUrl: './add-diagnostico.component.html',
  styleUrls: ['./add-diagnostico.component.scss'],
})
export class AddDiagnosticoComponent {
  data: DiagnosticoDTO;
  modoEditar: boolean = false;
  situacionId: number;

  public titulo: any;
  public subtitulo: any;

  form: UntypedFormGroup;

  alertaList: any[] = [
    { name: 'Informativo', value: 'INFORMATION' },
    { name: 'Por revisar', value: 'TO_REVIEW' },
    { name: 'Urgente', value: 'URGENT' },
  ];

  estadoList: any[] = [
    {
      name: 'Pendiente',
      value: 'PENDING',
    },
    {
      name: 'En progreso',
      value: 'IN_PROGRESS',
    },
    {
      name: 'Completado',
      value: 'COMPLETED',
    },
  ];

  isCreated: boolean = false;

  configIntervencion: NgTableConfig<any> = {
    title: 'Lista de intervenciones',
    keys: ['id', 'createdAt'],
    headerColumns: ['No', 'Fecha creacion'],
    urlData: environment.apiUrl + '/intervention/search',
    typeColumns: ['uuid', null, null, null],
    pageable: true,
    pageableOptions: {
      otherParams: {
        diagnosisId: null,
      },
    },
    hideDefaultActions: {
      add: false,
      edit: true,
      delete: false,
      view: false,
    },
    showFilter: true,
  };

  configResultados: NgTableConfig<any> = {
    title: 'Lista de indicadores',
    keys: ['id', 'createdAt'],
    headerColumns: ['No', 'Fecha creacion'],
    urlData: environment.apiUrl + '/result/search',
    typeColumns: ['uuid', null, null, null],
    pageable: true,
    pageableOptions: {
      otherParams: {
        diagnosisId: null,
      },
    },
    hideDefaultActions: {
      add: false,
      edit: true,
      delete: false,
      view: false,
    },
    showFilter: true,
  };

  @ViewChild('tIntervencion')
  tableIntervencion: NgTableComponent<any>;

  @ViewChild('tResultado')
  tableResultados: NgTableComponent<any>;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private pasoParametrosService: PasoParametrosService,
    private diganosticoService: DiagnosticoService,
    private location: Location,
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private dialogService: DialogService
  ) {
    this.form = this.createContactForm();

    this.configIntervencion.pageableOptions.otherParams = {
      diagnosisId: this.data?.id,
    };
    this.configResultados.pageableOptions.otherParams = {
      diagnosisId: this.data?.id,
    };
  }

  onSubmit() {
    const observer = this.modoEditar
      ? this.diganosticoService.updateDiagnosis(this.form.value)
      : this.diganosticoService.createDiagnosis(this.form.value);

    observer.subscribe((data) => {
      this.data.id = data.id;
      this.isCreated = true;
    });
  }

  cancelar() {
    this.location.back();
  }

  volver() {
    this.location.back();
  }

  createContactForm(): UntypedFormGroup {
    this.data = this.pasoParametrosService.obtenerParametro('data');
    this.situacionId =
      this.pasoParametrosService.obtenerParametro('situation')?.id;
    this.modoEditar = this.pasoParametrosService.obtenerParametro('modoEditar');
    this.isCreated = this.data ? true : false;

    if (this.modoEditar == true) {
      this.titulo = 'Editar diagnostico';
      this.subtitulo = 'En esta pantalla podrás editar el diagnostico';
    } else {
      this.titulo = 'Adicionar diagnostico';
      this.subtitulo = 'En esta pantalla podrás adicionar un diagnostico';
    }
    return this.fb.group({
      id: [this.data?.id],
      personSituationId: [this.situacionId, [Validators.required]],
      consultationResult: [
        this.data?.consultationResult,
        [Validators.required],
      ],
      consultationAlert: [this.data?.consultationAlert, [Validators.required]],
      consultationStatus: [
        this.data?.consultationStatus,
        [Validators.required],
      ],
      createdAt: [this.data?.createdAt ?? new Date(), [Validators.required]],
    });
  }

  addIntervencion() {
    const url = environment.apiUrl + '/intervention/create';
    const idIntervention = uuidv4();
    this.http
      .post<any>(url, {
        diagnosisId: this.data.id,
        id: idIntervention,
      })
      .subscribe((data) => {
        this.tableIntervencion.findData();
      });
  }

  viewIntervencion(row) {
    this.dialogService
      .show({
        title: 'Actividades de una intervencion',
        component: ModalActividadComponent,
        dataComponent: {
          ...row,
        },
        hideDefaultActions: true,
      })
      .subscribe((data: ModalResponse) => {
        console.log(data);
      });
  }

  deleteIntervencion(row) {
    this.http
      .delete(environment.apiUrl + '/intervention/' + row.id)
      .pipe(tap(() => this.snackbar.open('Intervencion eliminada con éxito')))
      .subscribe((data) => {
        this.tableIntervencion.findData();
      });
  }

  addResultado() {
    const url = environment.apiUrl + '/result/create';
    const idResultado = uuidv4();
    this.http
      .post<any>(url, {
        diagnosisId: this.data.id,
        id: idResultado,
      })
      .subscribe((data) => {
        this.tableResultados.findData();
      });
  }

  viewResultado(row) {
    this.dialogService
      .show({
        title: 'Indicadores de un resultado',
        component: ModalIndicadoresComponent,
        dataComponent: {
          ...row,
        },
        hideDefaultActions: true,
      })
      .subscribe((data: ModalResponse) => {
        console.log(data);
      });
  }

  deleteResultado(row) {
    this.http
      .delete(environment.apiUrl + '/result/' + row.id)
      .pipe(tap(() => this.snackbar.open('Indicador eliminado con éxito')))
      .subscribe((data) => {
        this.tableResultados.findData();
      });
  }
}
