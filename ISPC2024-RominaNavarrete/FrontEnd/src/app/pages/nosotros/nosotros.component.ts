import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  // Datos de ejemplo para enlazar
  empresa = 'Travel Dreams';
  mision = 'Desde hace 20 años, Travel Dreams ha sido la brújula que guía a aventureros de todas las edades en sus viajes más esperados. Nuestra misión trasciende un simple itinerario; es una promesa de aventura, descubrimiento y recuerdos que perduran toda la vida.';
  equipo = [
    {
      nombre: 'Cantarino, Emmanuel',
      rol: 'Full Stack',
      imagen: 'assets/img/A02_avatar_hombre.png',
      twitter: '#',
      facebook: '#',
      linkedin: '#',
      perfil: '/nosotros/1'
    },
    {
      nombre: 'Fernandez, Claudio Ranses',
      rol: 'Full Stack',
      imagen: 'assets/img/A02_avatar_hombre.png',
      twitter: '#',
      facebook: '#',
      linkedin: '#',
      perfil: '/nosotros/2'
    },
    {
      nombre: 'Cantarino, Emmanuel',
      rol: 'Full Stack',
      imagen: 'assets/img/A02_avatar_hombre.png',
      twitter: '#',
      facebook: '#',
      linkedin: '#',
      perfil: '/nosotros/3'
    },
    {
      nombre: 'Cantarino, Emmanuel',
      rol: 'Full Stack',
      imagen: 'assets/img/A02_avatar_hombre.png',
      twitter: '#',
      facebook: '#',
      linkedin: '#',
      perfil: '/nosotros/4'
    },
    {
      nombre: 'Cantarino, Emmanuel',
      rol: 'Full Stack',
      imagen: 'assets/img/A02_avatar_hombre.png',
      twitter: '#',
      facebook: '#',
      linkedin: '#',
      perfil: '/nosotros/1'
    },
    {
      nombre: 'Cantarino, Emmanuel',
      rol: 'Full Stack',
      imagen: 'assets/img/A02_avatar_hombre.png',
      twitter: '#',
      facebook: '#',
      linkedin: '#',
      perfil: '/nosotros/1'
    },
    {
      nombre: 'Cantarino, Emmanuel',
      rol: 'Full Stack',
      imagen: 'assets/img/A02_avatar_hombre.png',
      twitter: '#',
      facebook: '#',
      linkedin: '#',
      perfil: '/nosotros/1'
    },
  ];
}

