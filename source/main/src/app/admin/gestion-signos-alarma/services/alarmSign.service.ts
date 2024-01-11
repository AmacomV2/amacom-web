import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AlarmSignService {
  constructor(private http: HttpClient) {}

  getAlarmSigns(filtro: string) {
    const params = {
      page: 0,
      size: 100,
      query: filtro ?? '',
    };
    return this.http.get<any[]>(environment.apiUrl + '/alarmSign/search', {
      params: params,
    });
  }
}
