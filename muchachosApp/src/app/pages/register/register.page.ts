import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage {
register() {
throw new Error('Method not implemented.');
}

email: any;
password: any;

  constructor(public router: Router,) {}

 goToLogin() {
this.router.navigateByUrl('/login');
}

}
