import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCardComponent } from './add-card/add-card.component';
import { Cane, CardsService } from './cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent {

  constructor(public dialog: MatDialog, public serviceCards: CardsService) { }
  dataSource!: Cane[]

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddCardComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    })
  }

  ngOnInit() {
    this.serviceCards.array.subscribe(array => this.dataSource = array)
  }

}
