import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

import { CommonModule } from '@angular/common';
import { CategoriaResponse } from '../../models/pedidos';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [ProductoComponent,CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit {

catergoria: CategoriaResponse[]=[];

  constructor(
private _pedidosServices:ProductoService


){

}
  ngOnInit(): void {
   this.listarCargos()
  }


  listarCargos()
  {
    this._pedidosServices.get().subscribe({

      next: (data: CategoriaResponse[]) => {
        this.catergoria = data;
       
        console.log(this.catergoria)
      },
      error: (err) => {
        console.log("error ", err);
      },
      complete: () => {
        //hare algo
      },

    });

}

}
