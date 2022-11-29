import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmprendedorService {
  //A donde apunta
  API_URL= 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  profile(id_negocio:number): Observable<any> {
    return this.http.get(`${this.API_URL}/auth/${id_negocio}`);
  }
}