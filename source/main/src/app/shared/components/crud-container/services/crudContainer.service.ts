import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'environments/environment';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudContainerService {
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  postData(url: string, data: any) {
    return this.http.post(environment.apiUrl + url, data).pipe(
      tap((res) => {
        this.showSuscessMessage();
      }),
      catchError((err) => {
        this.snackbar.open(err, 'Cerrar', {
          duration: 4000,
        });
        throw err;
      })
    );
  }

  deleteData(url: string, id) {
    return this.http.delete(environment.apiUrl + url + '/' + id).pipe(
      tap((res) => {
        this.showSuscessMessage();
      }),
      catchError((err) => {
        this.snackbar.open(err, 'Cerrar', {
          duration: 4000,
        });
        throw err;
      })
    );
  }

  putData(url: string, data: any) {
    return this.http.put(environment.apiUrl + url, data).pipe(
      tap((res) => {
        this.showSuscessMessage();
      }),
      catchError((err) => {
        this.snackbar.open(err, 'Cerrar', {
          duration: 4000,
        });
        throw err;
      })
    );
  }

  private showSuscessMessage(msg?: string) {
    this.snackbar.open(msg ?? 'Registro creado correctamente', 'Cerrar', {
      duration: 4000,
    });
  }
}
