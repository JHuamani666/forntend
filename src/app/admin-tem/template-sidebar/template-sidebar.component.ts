import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductoComponent } from '../../dasborad/productos/components/producto/producto.component';

@Component({
  selector: 'app-template-sidebar',
  standalone: true,
  imports: [RouterLink,ProductoComponent],
  templateUrl: './template-sidebar.component.html',
  styleUrl: './template-sidebar.component.css'
})
export class TemplateSidebarComponent {

}
