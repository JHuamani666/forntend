import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formlogin: FormGroup;
  
  
    usuario="usuario1";
    contra="123"
  
  
  constructor(
    private _formBuilder:FormBuilder,
 
    private _ruteo:Router
  ){
    this.formlogin = this._formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
  // hacer una autenticacion basica 


  login()
  {
  const username=this.formlogin.value.username;
  const password=this.formlogin.value.password;
    if(username==this.usuario && password==this.contra){
      alert('bienvenido')
      this._ruteo.navigate(['/dasborad'])

    }else{
      alert('usuario o contraseña incorrecto')
    }
}
  

    
  
}
