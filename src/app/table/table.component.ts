import { Component, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddItemComponent } from './add-item/add-item.component';
import { ElementsService, PeriodicElement } from './elements.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource!: PeriodicElement[]

  constructor(public dialog: MatDialog, private serviceElement: ElementsService) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddItemComponent, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    })
  }

  ngOnInit() {
    this.serviceElement.array.subscribe(array => this.dataSource = array);
  }
  ngOnDestroy(): void {
    this.serviceElement.array.unsubscribe()
  }
}

