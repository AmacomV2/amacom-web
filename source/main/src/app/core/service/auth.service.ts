import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { environment } from 'environments/environment';
import { Response } from '@core/models/response';
import { AuthTokenResponse } from '@core/models/auth.token.response';
import { Role, RoleResponseDTO } from '@core/models/role';
import { PersonDTO } from '@core/models/auth.person.response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private currentTokenSubject: BehaviorSubject<AuthTokenResponse>;
  public currentToken: Observable<AuthTokenResponse>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();

    this.currentTokenSubject = new BehaviorSubject<AuthTokenResponse>(
      JSON.parse(localStorage.getItem('currentToken') || '{}')
    );
    this.currentToken = this.currentTokenSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get currentTokenValue(): AuthTokenResponse {
    return this.currentTokenSubject.value;
  }

  login(username: string, password: string) {
    return Observable.create((observer) => {
      this.http
        .post<AuthTokenResponse>(`${environment.apiUrl}/auth/login`, {
          username,
          password,
        })
        .subscribe((res) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentToken', JSON.stringify(res));
          this.currentTokenSubject.next(res);
          //informacion del usuario
          this.getUser().subscribe((dataUser) => {
            this.http
              .get<RoleResponseDTO>(`${environment.apiUrl}/rol/getCurrentRol`)
              .subscribe((rol) => {
                console.log(rol);
                const user: User = {
                  id: dataUser.id,
                  img: dataUser.imageUrl,
                  email: dataUser.address, //TODO: revisar como se obtiene la informacion del usuario
                  username: dataUser.name,
                  fullName: dataUser.fullName,
                  role: rol.name,
                  token: res.accessToken,
                };
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return observer.next(user);
              });
          });
        });
    });
  }

  private getUser() {
    return this.http.get<PersonDTO>(`${environment.apiUrl}/person/get`);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.currentTokenSubject.next(null);
    return of({ success: false });
  }
}
