import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AngularFirestoreModule} from '@angular/fire/firestore'
 const firebaseConfig = {
    apiKey: "AIzaSyA9vPrZR14Rp-ELmDPNHGQkHUMQdwbWLuU",
    authDomain: "shoppingapp-7425b.firebaseapp.com",
    databaseURL: "https://shoppingapp-7425b.firebaseio.com",
    projectId: "shoppingapp-7425b",
    storageBucket: "shoppingapp-7425b.appspot.com",
    messagingSenderId: "203934316912",
    appId: "1:203934316912:web:de4563ba9f5f7244"
  };
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig),AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
