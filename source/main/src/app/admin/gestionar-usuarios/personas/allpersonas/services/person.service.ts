import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PersonDTO } from '@core/models/auth.person.response';
import { environment } from 'environments/environment';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  createPerson(data: PersonDTO) {
    return this.http.post(environment.apiUrl + '/person/create', data).pipe(
      tap((res: any) => {
        this.snackbar.open(res.message, 'Aceptar');
      }),
      catchError((err) => {
        this.snackbar.open(err, 'Aceptar');
        throw err;
      })
    );
  }

  updatePerson(data: PersonDTO) {
    return this.http.put(environment.apiUrl + '/person', data).pipe(
      tap((res: any) => {
        this.snackbar.open(res.message, 'Aceptar');
      }),
      catchError((err) => {
        console.log(err);
        this.snackbar.open(err, 'Aceptar');
        throw err;
      })
    );
  }
}
