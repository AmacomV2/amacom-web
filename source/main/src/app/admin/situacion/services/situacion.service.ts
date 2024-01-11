import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { environment } from 'environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs';
import { SituacionSignAlrmDTO } from '../models/situacion.model';
@Injectable()
export class SituacionService extends UnsubscribeOnDestroyAdapter {
  constructor(private httpClient: HttpClient, private snackbar: MatSnackBar) {
    super();
  }

  createSituation(situation: any) {
    return this.httpClient
      .post(environment.apiUrl + '/personSituation/create', situation)
      .pipe(
        tap(() => {
          this.snackbar.open('Situación creada con éxito', 'Aceptar');
        })
      );
  }

  updateSituation(situation: any) {
    return this.httpClient
      .put(environment.apiUrl + '/personSituation', situation)
      .pipe(
        tap(() => {
          this.snackbar.open('Situación creada con éxito', 'Aceptar');
        })
      );
  }

  createSituationSign(situationSign: SituacionSignAlrmDTO) {
    return this.httpClient
      .post(environment.apiUrl + '/personSituationHasAlarmSigns/create', situationSign)
      .pipe(
        tap(() => {
          this.snackbar.open('Signos de alarma asignados con éxito', 'Aceptar');
        })
      );
  }

  deleteSituationSign(situationSignId: any) {
    return this.httpClient
      .delete(environment.apiUrl + '/personSituationHasAlarmSigns/' + situationSignId)
      .pipe(
        tap(() => {
          this.snackbar.open('Signos de alarma eliminados con éxito', 'Aceptar');
        })
      );
  }

  updateSituationSign(situationSign: SituacionSignAlrmDTO) {
    return this.httpClient
      .put(environment.apiUrl + '/personSituationHasAlarmSigns', situationSign)
      .pipe(
        tap(() => {
          this.snackbar.open('Signos de alarma asignados con éxito', 'Aceptar');
        })
      );
  }
}
