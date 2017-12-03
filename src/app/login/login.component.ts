import { Observable } from 'rxjs/Rx';
import { AuthService, User } from '../core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Observable<User>;
  userEmail: string;

  constructor(private auth: AuthService) {
  }

  public ngOnInit(): void {

  }

  onLogin(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.auth.login(formData.value.email, formData.value.password);
    }
  }

}
