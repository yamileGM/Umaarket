import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HeaderComponent } from './Components/header/header.component';
import { IndexComponent } from './Components/index/index.component';

const routes: Routes = [
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "header", component: HeaderComponent, pathMatch: "full" },
  { path: "", component: IndexComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
