import { Component, OnInit, ViewChild } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PasoParametrosService } from '../../paso-parametro.service';
import { SituacionDTO } from '../models/situacion.model';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { SituacionService } from '../services/situacion.service';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { Location } from '@angular/common';
import { NgTableComponent } from '@shared/components/ng-table/ng-table.component';
import { AuthService } from '@core';

@Component({
  selector: 'app-add-situacion',
  templateUrl: './add-situacion.component.html',
  styleUrls: ['./add-situacion.component.scss'],
})
export class AddSituacionComponent implements OnInit {
  public data: SituacionDTO;
  personId: any;

  isCreated: boolean = false;

  feelingsList: Observable<any[]>;

  public modoEditar: boolean = false;
  public titulo: any;
  public subtitulo: any;
  public boton: any;
  situacionForm: UntypedFormGroup;

  configTableMother: NgTableConfig<any> = {
    title: 'Madre',
    keys: ['alarmSignName', 'alarmSignDescription'],
    headerColumns: ['Nombre', 'Descripción'],
    urlData: environment.apiUrl + '/personSituationHasAlarmSigns/search',
    pageable: true,
    showFilter: true,
    hideDefaultActions: {
      add: true,
      edit: true,
      delete: false,
      view: true,
    },
    pageableOptions: {
      otherParams: {
        type: 'MOTHER',
      },
    },
  };

  configTableBaby: NgTableConfig<any> = {
    title: 'Bebe',
    keys: ['alarmSignName', 'alarmSignDescription'],
    headerColumns: ['Nombre', 'Descripción'],
    urlData: environment.apiUrl + '/personSituationHasAlarmSigns/search',
    pageable: true,
    showFilter: true,
    hideDefaultActions: {
      add: true,
      edit: true,
      delete: false,
      view: true,
    },
    pageableOptions: {
      otherParams: {
        type: 'BABY',
      },
    },
  };

  valueSubject: any;

  panelOpenState = false;
  step = 0;
  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }

  controlSignMother = new UntypedFormControl('');
  controlSignBaby = new UntypedFormControl('');

  @ViewChild('tableMother') tableMother: NgTableComponent<any>;
  @ViewChild('tableBaby') tableBaby: NgTableComponent<any>;

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private location: Location,
    private pasoParametrosService: PasoParametrosService,
    private http: HttpClient,
    private situacionService: SituacionService,
    private auth: AuthService
  ) {
    this.situacionForm = this.createContactForm();
  }
  ngOnInit() {
    this.configTableBaby.pageableOptions.otherParams['situationId'] =
      this.data.id;
    this.configTableMother.pageableOptions.otherParams['situationId'] =
      this.data.id;

    this.isCreated = this.data.id ? true : false;
    this.getCurrentTema();
    this.getFeelings();
    this.currentFeelings();
  }
  onSubmit() {
    const observer = this.modoEditar
      ? this.situacionService.updateSituation(this.situacionForm.value)
      : this.situacionService.createSituation(this.situacionForm.value);

    observer.subscribe((data) => {
      console.log('SITUACION CREADA', data);
      this.situacionForm.controls['id'].setValue(data.id);
      this.configTableBaby.pageableOptions.otherParams['situationId'] = data.id;
      this.configTableMother.pageableOptions.otherParams['situationId'] =
        data.id;
      this.isCreated = true;
    });
  }

  cancel() {
    this.router.navigate(['/admin/gestionar-usuarios/personas/all-personas']);
  }

  volver() {
    this.location.back();
  }

  createContactForm(): UntypedFormGroup {
    this.data = this.pasoParametrosService.obtenerParametro('data');
    this.personId =
      this.pasoParametrosService.obtenerParametro('dataPersona')?.id ??
      this.auth.currentUserValue.person.id;
    console.log('DATAA', this.data, this.personId);
    this.modoEditar = this.pasoParametrosService.obtenerParametro('modoEditar');
    if (this.modoEditar == true) {
      this.titulo = 'Editar situación';
      this.subtitulo = 'En esta pantalla podrás editar la situación';
      this.boton = 'Editar';
    } else {
      this.titulo = 'Adicionar situación';
      this.subtitulo = 'En esta pantalla podrás adicionar una situación';
      this.boton = 'Guardar';
    }
    return this.fb.group({
      id: [this.data?.id],
      personId: [this.personId, [Validators.required]],
      subjectId: [this.data?.subjectId, [Validators.required]],
      description: [this.data?.description, [Validators.required]],
      affectationDegree: [this.data?.affectationDegree, [Validators.required]],
      firstThought: [this.data?.firstThought, [Validators.required]],
      behavior: [this.data?.behavior, [Validators.required]],
      feelings: [this.data?.feelings ?? [], [Validators.required]],
      createdAt: [this.data?.createdAt],
      motherAlarmSigns: [[]],
      babyAlarmSigns: [[]],
    });
  }

  getTemas(filtro) {
    return this.http
      .get(environment.apiUrl + '/subject/search', {
        params: { page: 0, size: 100, query: filtro },
      })
      .pipe(map((data: any) => data?.content));
  }

  getCurrentTema() {
    if (this.modoEditar) {
      this.http
        .get(environment.apiUrl + '/subject/' + this.data.subjectId)
        .subscribe((data: any) => {
          this.valueSubject = data;
        });
    }
  }

  getSignsBaby(filtro) {
    return this.http
      .get(environment.apiUrl + '/alarmSign/search', {
        params: { page: 0, size: 100, query: filtro, type: "BABY" },
      })
      .pipe(map((data: any) => data?.content));
  }

  getSignsMother(filtro) {
    return this.http
      .get(environment.apiUrl + '/alarmSign/search', {
        params: { page: 0, size: 100, query: filtro, type: "MOTHER" },
      })
      .pipe(map((data: any) => data?.content));
  }

  getFeelings() {
    this.feelingsList = this.http
      .get<any>(environment.apiUrl + '/feelings/search', {
        params: { page: 0, size: 100, query: '' },
      })
      .pipe(map((data: any) => data?.content));
  }

  compareWithIdFeelings(o1: any, o2: any) {
    return o1 === o2;
  }

  currentFeelings() {
    if (this.modoEditar) {
      this.http
        .get(environment.apiUrl + '/personSituation/' + this.data.id)
        .subscribe((data: any) => {
          this.situacionForm.controls['feelings'].setValue(data.feelings);
        });
    }
  }

  agregarSignAlarmMother() {
    if(this.controlSignMother.value!=""){
    this.situacionService
      .createSituationSign({
        alarmSignId: this.controlSignMother.value,
        personSituationId: this.situacionForm.value.id,
      })
      .subscribe((data) => {
        this.tableMother.findData();
      });
    }
  }

  agregarSignAlarmBaby() {
    if(this.controlSignBaby.value!=""){
    this.situacionService
      .createSituationSign({
        alarmSignId: this.controlSignBaby.value,
        personSituationId: this.situacionForm.value.id,
      })
      .subscribe((data) => {
        this.tableBaby.findData();
      });
    }
  }

  deleteMother(row: any) {
    this.situacionService.deleteSituationSign(row.id).subscribe((data) => {
      this.tableMother.findData();
      this.tableBaby.findData();
    });
  }
}
