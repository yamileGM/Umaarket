//EJEMPLO
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class NegocioService {
  //A donde apunta
  API_URL= 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getAll(buscar:any): Observable<any> {
    return this.http.get(`${this.API_URL}/negocios`);
  }

  getOne(id_negocio:number): Observable<any> {
    return this.http.get(`${this.API_URL}/negocios/${id_negocio}`);
  }
}