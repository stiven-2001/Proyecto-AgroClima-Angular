import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Importa todos tus componentes aquí
import { Usuarios } from './components/usuarios/usuarios';
import { Cultivos } from './components/cultivos/cultivos';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

export const routes: Routes = [

    // Rutas públicas (sin login)
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    
    // Rutas privadas (con login)
    { path: '', component: Home },
    { path: 'usuarios', component: Usuarios },
    { path: 'cultivos', component: Cultivos },
    



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
