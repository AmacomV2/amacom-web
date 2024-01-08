import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DocumentTypeDTO, GenderDTO } from '@core/models/auth.person.response';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  constructor(private http: HttpClient) {}

  getDocumentTypes() {
    return this.http.get<DocumentTypeDTO[]>(
      environment.apiUrl + '/documentType/getAll'
    );
  }

  getGenderTypes() {
    return this.http.get<GenderDTO[]>(environment.apiUrl + '/genders/getAll');
  }

  getCivilState() {
    return this.http.get<any[]>(environment.apiUrl + '/civilStatus/getAll');
  }

  getRoles() {
    return this.http.get<any[]>(environment.apiUrl + '/rol/getAll');
  }

}
