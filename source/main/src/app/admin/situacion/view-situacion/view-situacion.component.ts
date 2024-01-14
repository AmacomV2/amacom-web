import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgTableConfig } from '@shared/components/ng-table/models/table.config.model';
import { environment } from 'environments/environment';
import { PasoParametrosService } from '../../paso-parametro.service';
@Component({
  selector: 'app-view-situacion',
  templateUrl: './view-situacion.component.html',
  styleUrls: ['./view-situacion.component.scss'],
})
export class ViewSituacionComponent implements OnInit {
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

  data: any;

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
      delete: true,
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
      delete: true,
      view: true,
    },
    pageableOptions: {
      otherParams: {
        type: 'BABY',
      },
    },
  };

  constructor(
    private fb: UntypedFormBuilder,
    private pasoParametrosService: PasoParametrosService,
    private router: Router,
    private location: Location
  ) {}
  ngOnInit() {
    this.data = this.pasoParametrosService.obtenerParametro('situation');
    if (this.data == null) {
      this.volver();
    }
    this.configTableBaby.pageableOptions.otherParams['situationId'] =
      this.data.id;
    this.configTableMother.pageableOptions.otherParams['situationId'] =
      this.data.id;
  }


  volver() {
    this.location.back();
    //this.router.navigate(['/admin/room/all-rooms']);
  }
}
