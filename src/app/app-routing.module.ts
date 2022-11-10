import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HeaderComponent } from './Components/header/header.component';
import { IndexComponent } from './Components/index/index.component';
import { ProductsComponent } from './Components/products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "header", component: HeaderComponent },
  { path: "", component: IndexComponent },
  { path: "products", component: ProductsComponent }, //products/:id
  { path: "**", redirectTo: "" , pathMatch: "full" }
  //{ path: "**", redirectTo: "404" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgbModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }