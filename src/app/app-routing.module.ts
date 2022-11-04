import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HeaderComponent } from './Components/header/header.component';
import { IndexComponent } from './Components/index/index.component';
import { ProductsComponent } from './Components/products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

const routes: Routes = [
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "header", component: HeaderComponent, pathMatch: "full" },
  { path: "", component: IndexComponent, pathMatch: "full" },
  { path: "products", component: ProductsComponent, pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgbModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }