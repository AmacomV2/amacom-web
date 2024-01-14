import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'environments/environment';
import { tap } from 'rxjs';
import { BitacoraDTO } from '../models/bitacora.model';

@Injectable({
  providedIn: 'root',
})
export class BitacoraService {
  url = environment.apiUrl;

  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

  createBitacora(bitacora) {
    return this.http.post<BitacoraDTO>(`${this.url}/logBook/create`, bitacora).pipe(
      tap((res) => {
        this.snackbar.open('Bitacora creada con éxito');
      })
    );
  }

  updateBitacora(bitacora) {
    return this.http.put<BitacoraDTO>(`${this.url}/logBook`, bitacora).pipe(
      tap((res) => {
        this.snackbar.open('Bitacora actualizada con éxito');
      })
    );
  }
}
