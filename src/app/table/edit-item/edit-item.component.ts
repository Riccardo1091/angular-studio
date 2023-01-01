import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ElementsService } from '../elements.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent {
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
