import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstitucionesService {

constructor(private http: HttpClient) { }

  save(value){
    return this.http.post(environment.apiUrl + '/institution/create', value);
  }

  update(value){
    return this.http.post(environment.apiUrl + '/institution', value);
  }
}
