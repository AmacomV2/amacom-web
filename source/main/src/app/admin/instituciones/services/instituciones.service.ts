import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'environments/environment';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstitucionesService {
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  save(value) {
    return this.http
      .post<any>(environment.apiUrl + '/institution/create', value)
      .pipe(
        tap((res) => {
          this.snackbar.open('Se creó correctamente la institucion', 'Cerrar');
        })
      );
  }

  update(value) {
    return this.http.put<any>(environment.apiUrl + '/institution', value).pipe(
      tap((res) => {
        this.snackbar.open('Se actualizó correctamente', 'Cerrar');
      })
    );
  }

  guardarServiceInstituto(value) {
    return this.http
      .post<any>(environment.apiUrl + '/institutionService/create', value)
      .pipe(
        tap((res) => {
          this.snackbar.open('Se creó correctamente el servicio', 'Cerrar');
        })
      );
  }

  updateServicioInstituto(value) {
    return this.http
      .put<any>(environment.apiUrl + '/institutionService', value)
      .pipe(
        tap((res) => {
          this.snackbar.open(
            'Se actualizó correctamente el servicio',
            'Cerrar'
          );
        })
      );
  }
}
