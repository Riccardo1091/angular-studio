import { Component } from '@angular/core';

export interface Cani {
  name: string;
  subtitle: string;
  desc: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent {
  cani: Cani[] = [
    { name: "Gino", subtitle: "Razza1", desc: "Lorem ipsum dolor sit amet sit amet, consectetur adipiscing elit" },
    { name: "Pino", subtitle: "Razza2", desc: "Lorem ipsum dolor sit dolor sit amet sit amet sit amet, consectetur adipiscing elit dolor sit amet sit" },
    { name: "Lino", subtitle: "Razza3", desc: "Lorem ipsum dolor sit amet sit amet, consectetur adipiscing elit consectetur adipiscing" },
    { name: "Dino", subtitle: "Razza4", desc: "Lorem ipsum dolor sit amet sit amet, consectetur adipiscing elit" },
    { name: "Rino", subtitle: "Razza5", desc: "Lorem ipsum dolor sit amet dolor sit amet sit sit amet, consectetur adipiscing elit" },
    { name: "Mino", subtitle: "Razza6", desc: "Dlor sit amet sit Lorem ipsum dolor sit amet sit amet, consectetur adipiscing elit" },
  ]
}
