import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NegocioService } from 'src/app/Services/negocio.service';
import { EmprendedorService } from 'src/app/Services/emprendedor.service';
import { ProductoService } from 'src/app/Services/productos.service';

@Component({
  selector: 'negocios-prod',
  templateUrl: './negocios-prod.component.html',
  styleUrls: ['./products.component.css']
})
export class NegociosProdComponent implements OnInit {
  negocio: any;
  emprendedor: any;
  productos: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: NegocioService,
    private service2: EmprendedorService,
    private service3: ProductoService
  ) { }
  
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    if(!id) return;

    this.cargar(id);
  }

  cargar(id: any):void{
    //Negocio
    this.service.getOne(id).subscribe(
      res => {
        //console.log(res);
        if(res.length!=0){
          this.negocio=res;
          //console.log(this.negocio);
        }else{
          this.negocio=null;
        }
      },
      error => {
        console.log(error);
      });
      
      //Usuario
      this.service2.profile(id).subscribe(
        res => {
          console.log(res);
          if(res.length!=0){
            this.emprendedor=res;
            console.log(this.emprendedor);
          }else{
            this.emprendedor=null;
          }
        },
        error => {
          console.log(error);
        });

        //Productos
        this.service3.getAll(id).subscribe(
          res => {
            console.log(res);
            if(res.length!=0){
              this.productos=res;
              console.log(this.productos);
            }else{
              this.productos=null;
            }
          },
          error => {
            console.log(error);
          });
  }
}