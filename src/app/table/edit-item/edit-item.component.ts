import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ElementsService } from '../elements.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodicElement } from '../elements.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent {
  form: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) public element: PeriodicElement, private formBuilder: FormBuilder, private serviceElement: ElementsService) {
    this.form = this.formBuilder.group({
      position: [this.element.position, Validators.required],
      name: [this.element.name, Validators.required],
      weight: [this.element.weight, Validators.required],
      symbol: [this.element.symbol, Validators.required]
    })
  }

  onSubmit() {
    this.serviceElement.editItem(this.element, this.form.value)
  }

}
