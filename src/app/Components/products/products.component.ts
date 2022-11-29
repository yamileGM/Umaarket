import { Component, OnInit } from '@angular/core';
import { NegocioService } from '../../Services/negocio.service';
import { Negocio } from '../../Models/negocio';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  id_negocio:any;
  negocio: any;
  constructor(private negocioService:NegocioService, private activedRoute: ActivatedRoute) {
    //this.id_negocio = this.activedRoute.snapshot.params.idN;
   }

  ngOnInit(): void {
    this.cargar(this.id_negocio);
  }
  
  cargar(id:any):void{    
    //Empresa
    this.negocioService.getOne(this.id_negocio)
      .subscribe(
      res => {
        console.log(res);
        if(res.length!=0){
          this.negocio=res;
        }else{
          this.negocio=null;
        }
      },
      error => {
        console.log(error);
      });
    }

}