import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { NgTableComponent } from '@shared/components/ng-table/ng-table.component';
import { MappingPipe } from '@shared/pipes/mapping.pipe';
import { SearchFilterPipe } from '@shared/pipes/search-filter.pipe';
import { PasoParametrosService } from 'app/admin/paso-parametro.service';
import { environment } from 'environments/environment';
import { Observable, map, tap } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-modal-indicadores',
  templateUrl: './modal-actividad.component.html',
  styleUrls: ['./modal-actividad.component.scss'],
  providers: [MappingPipe, SearchFilterPipe],
})
export class ModalActividadComponent implements OnInit {
  idIntervention: any;

  actividadForm: FormGroup;

  configActividades: NgTableConfig<any> = {
    title: 'Lista de actividades',
    keys: ['id', 'activityName', 'description', 'status'],
    headerColumns: ['No', 'Actividad', 'Description', 'Estado'],
    urlData: environment.apiUrl + '/interventionHasActivities/search',
    typeColumns: ['uuid', null, null, 'badge'],
    pageable: true,
    pageableOptions: {
      otherParams: {
        interventionId: null,
      },
    },
    hideDefaultActions: {
      add: true,
      edit: true,
      delete: false,
      view: true,
    },
    showFilter: true,
  };

  @ViewChild('tableActividades') table: NgTableComponent<any>;

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private pasoParametroService: PasoParametrosService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.idIntervention = this.data.id;

    this.configActividades.pageableOptions.otherParams['interventionId'] =
      this.idIntervention;

    this.configActividades.pageableOptions.otherParams['status'] = 'true';

    this.actividadForm = this.fb.group({
      idActivity: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  activityList(filtro): Observable<any> {
    return this.http
      .get<any>(environment.apiUrl + '/activity/search', {
        params: {
          page: 0,
          size: 100,
          query: filtro,
        },
      })
      .pipe(map((data: any) => data.content));
  }

  addActividad() {
    const urlAct = environment.apiUrl + '/interventionHasActivities/create';
    const actividad = {
      id: uuidv4(),
      idIntervention: this.idIntervention,
      idActivity: this.actividadForm.value.idActivity,
      description: this.actividadForm.value.description,
      status: true,
    };
    this.http
      .post(urlAct, actividad)
      .pipe(tap(() => this.snackbar.open('Actividad asociada con éxito')))
      .subscribe((data) => {
        this.table.findData();
      });
  }

  deleteActivity(row) {
    this.http
      .delete(
        environment.apiUrl + '/interventionHasActivities/' + row.id
      )
      .pipe(tap(() => this.snackbar.open('Actividad eliminada con éxito')))
      .subscribe((data) => {
        this.table.findData();
      });
  }
}
