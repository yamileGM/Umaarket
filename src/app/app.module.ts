import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { IndexComponent } from './Components/index/index.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmpresaCardMainPageComponent } from './Components/empresa-card-main-page/empresa-card-main-page.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { ListadosComponent } from './Components/listados/listados.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    IndexComponent,
    EmpresaCardMainPageComponent,
    MainPageComponent,
    ListadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
