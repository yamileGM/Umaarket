import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NegociosComponent }  from './negocios.component';
import { NegociosProdComponent }    from './negocios-prod.component';

import { NegocioService } from '../../Services/negocio.service';

import { NegociosRoutingModule } from './negocios-routing.module';

@NgModule({
   declarations: [
      NegociosComponent,
      NegociosProdComponent
   ],
   imports: [
      CommonModule,
      ReactiveFormsModule,
      //HttpModule,
      HttpClientModule,
      NegociosRoutingModule
   ],
   exports: [
      NegociosComponent,
      NegociosProdComponent
   ],
   providers: [NegocioService]
})

export class NegociosModule { }