import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { ProductoComponent } from './components/producto/producto.component';
import { TemplateGeneralComponent } from '../../admin-tem/template-general/template-general.component';

const routes: Routes = [

  {
    path:'',component:TemplateGeneralComponent,
    children:[
      {
        path:'producto',component:ProductoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
