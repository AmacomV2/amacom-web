import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'environments/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiagnosticoService {
  constructor(private http: HttpClient, public snackbar: MatSnackBar) {}

  createDiagnosis(value) {
    return this.http
      .post<any>(environment.apiUrl + '/diagnosis/create', value)
      .pipe(tap(() => this.snackbar.open('Diagnostico creado con éxito')));
  }

  updateDiagnosis(value) {
    return this.http
      .put<any>(environment.apiUrl + '/diagnosis', value)
      .pipe(tap(() => this.snackbar.open('Diagnostico actualizado con éxito')));
  }
}
