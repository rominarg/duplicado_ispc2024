import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-destinosdetails',
  standalone: true,
  imports: [NgSwitch, NgSwitchDefault, NgSwitchCase],
  templateUrl: './destinosdetails.component.html',
  styleUrl: './destinosdetails.component.css'
})
export class  DestinosdetailsComponent {

  @Input() id!: String;
  destinations: { id: number, name: string, imageUrl: string, description: string }[] = [
    { id: 0, name: "San Carlos de Bariloche", imageUrl: "./assets/img/01_bariloche.png", description: "Paisajes majestuosos, lagos cristalinos, montañas imponentes, chocolate artesanal, esquí de clase mundial y encanto alpino." },
    { id: 1, name: "Villa Carlos Paz", imageUrl: "./assets/img/02_villa_carlos_paz.png", description: "Lago, teatro, naturaleza, diversión, espectáculos, sierras, tranquilidad, gastronomía, balnearios, entretenimiento y relax." }
  ];
}
