import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginComponent } from '../../login/components/login/login.component';

@Component({
  selector: 'app-template-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './template-header.component.html',
  styleUrl: './template-header.component.css'
})
export class TemplateHeaderComponent {

}
