import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { RegisterNegComponent } from './Components/register-neg/register-neg.component';
import { HeaderComponent } from './Components/header/header.component';

//import { ProductsComponent } from './Components/products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "register-neg", component: RegisterNegComponent },
  { path: "header", component: HeaderComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgbModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }