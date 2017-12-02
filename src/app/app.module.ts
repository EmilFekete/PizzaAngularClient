import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCcUPLOgDMG20ng1dMBFmZPruLn5YVEBzQ",
      authDomain: "pizzawebapp3000.firebaseapp.com",
      databaseURL: "https://pizzawebapp3000.firebaseio.com",
      projectId: "pizzawebapp3000",
      storageBucket: "pizzawebapp3000.appspot.com",
      messagingSenderId: "221845672726"
    }),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public isCollapsed = false;

}
