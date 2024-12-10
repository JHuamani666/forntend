import { Component } from '@angular/core';
import { TemplateFooterComponent } from '../template-footer/template-footer.component';
import { TemplateHeaderComponent } from '../template-header/template-header.component';
import { TemplateSidebarComponent } from '../template-sidebar/template-sidebar.component';
import { RouterOutlet } from '@angular/router';
import { ProductoComponent } from '../../dasborad/productos/components/producto/producto.component';
;

@Component({
  selector: 'app-template-general',
  standalone: true,
  imports: [RouterOutlet,TemplateFooterComponent,TemplateHeaderComponent,TemplateSidebarComponent,ProductoComponent],
  templateUrl: './template-general.component.html',
  styleUrl: './template-general.component.css'
})
export class TemplateGeneralComponent {

}
