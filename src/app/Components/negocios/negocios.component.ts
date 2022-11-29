import { Component, Host, HostBinding, OnInit } from '@angular/core';
import { NegocioService } from '../../Services/negocio.service';
import { Router } from '@angular/router';
import { Negocios } from './negocios';

@Component({
  selector: 'negocios',
  templateUrl: './negocios.component.html',
  styleUrls: ['./negocios.component.css']
})
export class NegociosComponent implements OnInit {
  
  //neg: Negocios[];
  negocios: any;
  buscar:string="";
  
  constructor(private negocioService:NegocioService, private router:Router) { }

  ngOnInit(): void {
    this.buscar="";
    this.busqueda();   
  }

  busqueda(): void{
    this.negocioService.getAll(this.buscar)
      .subscribe(
      res => {
        console.log(res);
        if(res.length!=0){
          this.negocios=res;
        }else{
          this.negocios=null;
        }
      },
      error => {
        console.log(error);
      });
  }

  seleccionar(negocio: Negocios){
    let link = ['/negocios/products',negocio.id_negocio];
    this.router.navigate(link);
  }
}