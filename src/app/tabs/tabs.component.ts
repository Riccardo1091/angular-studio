import { Component } from '@angular/core';

export interface Data {
  id: Number;
  firstName: string;
  lastName: string;
  age: Number
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent {
  data: Data[] = [
    {
      id: 37,
      firstName: "Edwin",
      lastName: "Thompson",
      age: 58
    },
    {
      id: 38,
      firstName: "Brett",
      lastName: "Ford",
      age: 27
    },
    {
      id: 39,
      firstName: "Mollie",
      lastName: "Santiago",
      age: 34
    },
    {
      id: 40,
      firstName: "Edward",
      lastName: "Jones",
      age: 12
    },
    {
      id: 41,
      firstName: "Irene",
      lastName: "Mathis",
      age: 22
    },
    {
      id: 42,
      firstName: "Inez",
      lastName: "Carlson",
      age: 25
    }
  ]
}
