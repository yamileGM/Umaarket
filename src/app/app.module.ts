import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';



//COMPONENTS
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
//import { ProductsComponent } from './Components/products/products.component';
import { RegisterComponent } from './Components/register/register.component';
import { RegisterNegComponent } from './Components/register-neg/register-neg.component';

//SERVICIOS
import { NegocioService } from './Services/negocio.service';
import { CommonModule } from '@angular/common';


import { NegociosModule } from './Components/negocios/negocios.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    //ProductsComponent,
    RegisterComponent,
    RegisterNegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    //NgbModule      
      NegociosModule
  ],
  providers: [NegocioService], //AuthGuard
  bootstrap: [AppComponent]
})
export class AppModule { }