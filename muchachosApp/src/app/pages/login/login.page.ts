import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
  standalone: false
})
export class LoginPage {
  email = '';
  password = '';

  constructor(
    public router: Router,
  ) {}

  login() {
    console.log('Intentando login con:', this.email, this.password);
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }
}
