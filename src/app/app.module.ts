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
import { DashboardComponent } from './dashboard/dashboard.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DiscountPipe } from './discount.pipe';
import { DiscountToolTipDirective } from './discount-tool-tip.directive';
@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    NavigationComponent,
    LoginComponent,
    DashboardComponent,
    PizzaListComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    RegisterComponent,
    DiscountPipe,
    DiscountToolTipDirective,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.auth),
    ReactiveFormsModule,
    CoreModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
