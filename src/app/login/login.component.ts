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

  constructor(private authService: AuthService) {
  }

  public ngOnInit(): void {

  }


  onLogOut() {
    this.authService.signOut();
  }



  onRegister(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.authService.register(formData.value.email, formData.value.password);
    }
  }


  onLogin(formData) {
    if (formData.valid) {
      console.log(formData.value);
      this.authService.login(formData.value.email, formData.value.password);
    }
  }

}
