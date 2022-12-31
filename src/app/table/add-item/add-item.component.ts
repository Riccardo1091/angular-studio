import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ElementsService } from '../elements.service';

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './add-item.component.html',
})

export class AddItemComponent {
  form!: FormGroup

  constructor(private formBuilder: FormBuilder, private serviceElement: ElementsService) {
    this.form = this.formBuilder.group({
      position: ['', Validators.required],
      name: ['', Validators.required],
      weight: ['', Validators.required],
      symbol: ['', Validators.required]
    })
  }

  onSubmit() {
    this.serviceElement.addItem(this.form.value)
    this.form.reset()
  }

}
