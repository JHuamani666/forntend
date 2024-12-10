import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from '../pag-static/principal/principal.component';
import { ProductoComponent } from '../dasborad/productos/components/producto/producto.component';
import { TemplateGeneralComponent } from './template-general/template-general.component';

const routes: Routes = [

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTemRoutingModule { }
