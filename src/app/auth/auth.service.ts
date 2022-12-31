import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }

  isLoggedIn: boolean = true

  register(email: string, password: string) {
    if (true) {
      this.isLoggedIn = true
      this.router.navigate([''])
    }
  }

  login(email: string, password: string) {
    if (email === "test@test.it" && password === "test") {
      this.isLoggedIn = true
      this.router.navigate([''])
    }
  }

  logout() {
    this.isLoggedIn = false
    this.router.navigate(['/login'])
  }
}


