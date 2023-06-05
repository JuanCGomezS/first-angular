import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private net = false;
  private spring_boot = false;
  private debug = false;
  private myAppUrl = '';
  private myApiUrl = `api/usuario/`;

  constructor(
    private http: HttpClient
  ) {

    switch (true) {
      case this.net:
        this.myAppUrl = `https://localhost:7148/`;
        console.warn('BACKEND IN .NET V.6');        
        break;

      case this.spring_boot:
        this.myAppUrl = `http://localhost:8080/`;
        console.warn('BACKEND IN SPRING BOOT JAVA.17');
        break;

      default:
        this.myAppUrl = ``;
        console.warn('BACKEND IN NODE JS V.20.0.0');
        break;
    }
  }

  getListUsuarios(): Observable<any> {
    const url = `${this.myAppUrl}${this.myApiUrl}${this.spring_boot ? 'list' : ''}`;
    if (this.debug) console.log(url);

    return this.http.get(url);
  }

  deleteUser(id: number): Observable<any> {
    const url = `${this.myAppUrl}${this.myApiUrl}${id}`;
    if (this.debug) console.log(url);

    return this.spring_boot ? this.http.post(url, '') : this.http.delete(url);
  }

  saveUser(user: any): Observable<any> {
    const url = `${this.myAppUrl}${this.myApiUrl}${this.spring_boot ? 'new' : ''}`;
    if (this.debug) console.log(url, user);

    return this.http.post(url, user);
  }

  updateUser(id: number, user: any): Observable<any> {
    const url = `${this.myAppUrl}${this.myApiUrl}${this.spring_boot ? 'update' : id}`;
    if (this.debug) console.log(url, user);

    return this.spring_boot ? this.http.post(url, user) : this.http.put(url, user);
  }
}
