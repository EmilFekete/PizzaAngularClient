import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    NavigationComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.auth),
    ReactiveFormsModule,
    CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
