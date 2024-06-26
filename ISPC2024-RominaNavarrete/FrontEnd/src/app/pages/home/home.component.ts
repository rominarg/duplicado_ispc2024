import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from '../banner/banner.component';
import { DestinosComponent } from '../destinos/destinos.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BannerComponent, DestinosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  titulo: string = "Nuestros Destinos";
}
