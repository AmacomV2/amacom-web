import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PasoParametrosService } from '../../../../paso-parametro.service';
import { environment } from '../../../../../../environments/environment';
import { Observable, map, tap } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { NgTableComponent } from '@shared/components/ng-table/ng-table.component';
import { MappingPipe } from '@shared/pipes/mapping.pipe';
import { SearchFilterPipe } from '@shared/pipes/search-filter.pipe';

@Component({
  selector: 'app-modal-indicadores',
  templateUrl: './modal-indicadores.component.html',
  styleUrls: ['./modal-indicadores.component.scss'],
  providers: [MappingPipe, SearchFilterPipe],
})
export class ModalIndicadoresComponent implements OnInit {
  resultId: any;

  resultadosForm: FormGroup;

  configIndicadores: NgTableConfig<any> = {
    title: 'Lista de indicadores',
    keys: ['id', 'indicatorName', 'indicatorDescription'],
    headerColumns: ['No', 'Indicador', 'descripcion'],
    urlData: environment.apiUrl + '/resultHasIndicator/search',
    typeColumns: ['uuid', null, null, null],
    pageable: true,
    pageableOptions: {
      otherParams: {
        resultId: null,
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

  @ViewChild('tableIndicadores') table: NgTableComponent<any>;

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private pasoParametroService: PasoParametrosService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.resultId = this.data.id;

    this.configIndicadores.pageableOptions.otherParams['resultId'] =
      this.resultId;

    this.configIndicadores.pageableOptions.otherParams['status'] = 'true';

    this.resultadosForm = this.fb.group({
      idIndicator: ['', [Validators.required]],
      indicatorDescription: ['', [Validators.required]],
    });
  }

  indicadorList(filtro): Observable<any> {
    return this.http
      .get<any>(environment.apiUrl + '/indicator/search', {
        params: {
          page: 0,
          size: 100,
          query: filtro,
        },
      })
      .pipe(map((data: any) => data.content));
  }

  addIndicator() {
    const urlAct = environment.apiUrl + '/resultHasIndicator/create';
    const indicador = {
      id: uuidv4(),
      idResult: this.resultId,
      idIndicator: this.resultadosForm.value.idIndicator,
    };
    this.http
      .post(urlAct, indicador)
      .pipe(tap(() => this.snackbar.open('Indicador asociado con éxito')))
      .subscribe((data) => {
        this.table.findData();
      });
  }

  deleteIndicator(row) {
    this.http
      .delete(environment.apiUrl + '/resultHasIndicator/' + row.id)
      .pipe(tap(() => this.snackbar.open('Indicador eliminado con éxito')))
      .subscribe((data) => {
        this.table.findData();
      });
  }
}
