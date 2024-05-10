import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestinosComponent } from './pages/destinos/destinos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { IniciarSesionComponent } from './pages/auth/iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './pages/auth/registro/registro.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './pages/banner/banner.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: "Home", component:HomeComponent},
    {path: "Home", component:BannerComponent},
    {path: "Home", component: DestinosComponent},
    {path: "Inicio", component:HomeComponent},
    {path:"destinos", component: DestinosComponent},
    {path:"contacto", component: ContactoComponent},
    {path:"nosotros", component: NosotrosComponent},
    {path:"iniciar-sesion", component:IniciarSesionComponent},
    {path:"registro", component:RegistroComponent},
    {path: '**', component: Pagina404Component},
];
