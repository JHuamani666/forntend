import { Injectable } from '@angular/core';
import { CategoriaResponse } from '../models/pedidos';
import { HttpClient } from '@angular/common/http';
import { urlConstants } from '../../../url.constans.ts/url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    protected  _http:HttpClient,
   ) { 
 
   }
 
 
 // ENCARGA DE TRAER LOS DATOS DE PRODUCTO
 get():Observable<CategoriaResponse[]>{
   return this._http.get<CategoriaResponse[]>(urlConstants.categoria);
 }
}
