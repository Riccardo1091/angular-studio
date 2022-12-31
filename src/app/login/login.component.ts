import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service: AuthService) { }
  onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    this.service.login(email, password)
  }
}
