import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateHeaderComponent } from './template-header/template-header.component';
import { TemplateFooterComponent } from './template-footer/template-footer.component';
import { LoginComponent } from '../login/components/login/login.component';
import { GeneralComponent } from './template-general/general/general.component';

const routes: Routes = [
  {
    path:'',component:GeneralComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
