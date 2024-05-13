import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestinosComponent } from './pages/destinos/destinos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { IniciarSesionComponent } from './pages/auth/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './pages/auth/registro/registro.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfesionalComponent } from './pages/nosotros/profesional/profesional.component';


export const routes: Routes = [
    { path: '', component: HomeComponent},
    {path: "Home", component:HomeComponent},
    {path: "Inicio", component:HomeComponent},
    {path:"destinos", component: DestinosComponent},
    {path:"contacto", component: ContactoComponent},
    {path:"nosotros", component: NosotrosComponent},
    {path:"nosotros/:id", component:ProfesionalComponent}, 
    {path:"iniciar-sesion", component:IniciarSesionComponent},
    {path:"registro", component:RegistroComponent},
    {path:"dashboard", component:DashboardComponent},
    {path: '**', component: Pagina404Component},
];
