import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
  extras: string = "";
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
    this.extras = "";
    this.url_logo = "";
  }
}