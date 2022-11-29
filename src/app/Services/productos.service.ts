//EJEMPLO
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  //A donde apunta
  API_URL= 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getAll(id_negocio:number): Observable<any> {
    return this.http.get(`${this.API_URL}/productos/${id_negocio}`);
  }

  getOne(id_producto: number): Observable<any> {
    return this.http.get(`${this.API_URL}/productos/${id_producto}`);
  }
}