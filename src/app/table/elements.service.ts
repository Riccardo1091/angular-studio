import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export let ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  public array: BehaviorSubject<PeriodicElement[]> = new BehaviorSubject(ELEMENT_DATA);
  /*Da approfondire*/
  //arrayObs: Observable<PeriodicElement[]> = this.array.asObservable();

  constructor() { }

  addItem(valore: PeriodicElement) {
    this.array.next([...this.array.value, valore]);
  }

  editItem(oggettoDaAggiornare: PeriodicElement, oggettoAggiornato: PeriodicElement) {
    let oggettoDaAggiornareIndice = this.array.value.indexOf(this.array.value.find(oggetto => oggetto.position == oggettoDaAggiornare.position)!)
    const updated = this.array.value.splice(oggettoDaAggiornareIndice, 1, oggettoAggiornato)
    this.array.next([...this.array.value])
  }

  removeItem(position: number) {
    this.array.next(this.array.value.filter(a => a.position !== position));
  }

}
