import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { UsuarioModule } from '../usuario.module';

@Injectable({
  providedIn: 'root',
})
export class UserCrudService {
  constructor(private http: HttpClient) {}

  createPerson(data: any) {
    return this.http.post<any>(environment.apiUrl + '/users/newUser', data);
  }

  updatePerson(data: any) {
    return this.http.put<any>(environment.apiUrl + '/users', data);
  }
}
