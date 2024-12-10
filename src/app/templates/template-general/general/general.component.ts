import { Component } from '@angular/core';
import { TemplateFooterComponent } from '../../template-footer/template-footer.component';
import { TemplateHeaderComponent } from '../../template-header/template-header.component';
import { PrincipalComponent } from '../../../pag-static/principal/principal.component';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [TemplateFooterComponent,TemplateHeaderComponent,PrincipalComponent],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent {

}
