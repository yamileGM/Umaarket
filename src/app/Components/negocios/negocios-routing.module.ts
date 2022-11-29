//RUTAS DE NEGOCIOS
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NegociosComponent } from './negocios.component';
import { NegociosProdComponent } from './negocios-prod.component';

const negociosRoutes: Routes = [
   {
        path: "negocios", component: NegociosComponent,
        children:[
        { path: 'products', component: NegociosProdComponent },
        { path: 'products/:id', component: NegociosProdComponent }
        ]
   },

    { path: '', redirectTo: 'negocios', pathMatch:'full' },
    //{ path: "**", redirectTo: "404" }
];

@NgModule({
   imports: [
      RouterModule.forChild(negociosRoutes)
   ],
   exports: [RouterModule]
})

export class NegociosRoutingModule { }