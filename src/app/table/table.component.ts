import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemComponent } from './add-item/add-item.component';
import { ElementsService, PeriodicElement } from './elements.service';
import { EditItemComponent } from './edit-item/edit-item.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];


  constructor(public dialog: MatDialog, private serviceElement: ElementsService) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddItemComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    })
  }

  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string, element: PeriodicElement): void {
    this.dialog.open(EditItemComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        position: element.position,
        name: element.name,
        weight: element.weight,
        symbol: element.symbol
      }
    })
  }

  removeData(position: number) {
    this.serviceElement.removeItem(position)
  }

  // Sottoscrizione d'appoggio per aprire e chiudere il flusso di dati
  // senza distruggere permanentemente il behavior subject che contiene la fonte
  sottoscrizione!: Subscription;
  dataSource!: PeriodicElement[]
  ngOnInit() {
    this.sottoscrizione = this.serviceElement.array.subscribe(array => this.dataSource = array)
    console.log('subscribed')
  }

  /* unsubscribe sulla sottoscrizione, non direttamente sul behaviourSubject */
  ngOnDestroy() {
    this.sottoscrizione.unsubscribe()
    console.log('unsubscribed')
  }

}

