import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
//import { FormsModule } from '@angular/forms';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireAuthModule} from '@angular/fire/compat/auth'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import { getAnalytics } from "firebase/analytics";
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule
    , AngularFireModule,AngularFireAuthModule, AngularFireModule.initializeApp(environment.firebaseConfig),ReactiveFormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
