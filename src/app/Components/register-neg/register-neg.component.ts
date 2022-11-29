import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-neg',
  templateUrl: './register-neg.component.html',
  styleUrls: ['./register-neg.component.css']
})
export class RegisterNegComponent implements OnInit {
  //Campos de formulario Empresa
  nombre: string = "";
  encargado: string = "";
  fecha_fundacion: string = "";
  email: string = "";
  password: string = "";
  password2: string = "";
  domicilio: string = "";
  telefono: string = "";
  sede: string = "";
  horario_atencion: string = "";
  areas: string = "";
  url_logo: string = "";
  submitted = false;


  constructor() { this.limpiar(); }

  ngOnInit(): void {
  }

  limpiar(): void {
    this.nombre = "";
    this.encargado = "";
    this.fecha_fundacion = "";
    this.email = "";
    this.password = "";
    this.password2 = "";
    this.domicilio = "";
    this.telefono = "";
    this.sede = "";
    this.horario_atencion = "";
    this.areas = "";
    
    this.url_logo = "";
  }
}