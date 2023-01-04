import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardsService } from '../cards.service';
//import { cardsUrl } from '../cards.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})

export class AddCardComponent {

  form!: FormGroup

  constructor(private formBuilder: FormBuilder, public serviceCards: CardsService) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      subtitle: ['', Validators.required],
      url: '',
      description: ['', Validators.required],
    })
  }

  onSubmit() {
    //this.form.value.url = cardsUrl[Math.floor(Math.random() * cardsUrl.length)]
    this.serviceCards.fetchImgCane().subscribe((a: string) => {
      this.form.value.url = `https://i.picsum.photos/id/${a}`
      this.serviceCards.addCane(this.form.value)
      console.log(this.form.value)
      this.form.reset()
    })
  }

}
