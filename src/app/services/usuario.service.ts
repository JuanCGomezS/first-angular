import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private net = false;
  private debug = false;
  private myAppUrl = '';
  private myApiUrl = `api/usuario/`;

  constructor(
    private http: HttpClient
  ) {
    if (this.net) {
      this.myAppUrl = `https://localhost:7148/`;
    } else {
      this.myAppUrl = ``;
    }
  }

  getListUsuarios(): Observable<any> {
    if (this.debug) console.log(`${this.myAppUrl}${this.myApiUrl}`);
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}`)
  }

  deleteUser(id: number): Observable<any> {
    if (this.debug) console.log(`${this.myAppUrl}${this.myApiUrl}${id}`);
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }

  saveUser(user: any): Observable<any> {
    if (this.debug) console.log(`${this.myAppUrl}${this.myApiUrl}`, user);
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, user)
  }

  updateUser(id: number, user: any): Observable<any> {
    if (this.debug) console.log(`${this.myAppUrl}${this.myApiUrl}${id}`, user);
    return this.http.put(`${this.myAppUrl}${this.myApiUrl}${id}`, user)
  }
}
