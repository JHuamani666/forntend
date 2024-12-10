import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/components/login/login.component';



export const routes: Routes = [

    {
        path:'dasborad',
        loadChildren:()=>import('./dasborad/productos/productos.module').then(m=>m.ProductosModule)
        },
    {
        path:'login',component:LoginComponent
    },

    {
    path:'',
    loadChildren:()=>import('./templates/templates.module').then(m=>m.TemplatesModule)
    },

//{ path: '', redirectTo: '/menu', pathMatch: 'full' },



];

