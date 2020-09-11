import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';
import { AdminComponent } from './admin/admin.component';

var config = {
  apiKey: "AIzaSyCHDYT0ANLNbDUn2zeoUCK8GexetUelYW0",
  authDomain: "dpflooringestimator.firebaseapp.com",
  databaseURL: "https://dpflooringestimator.firebaseio.com",
  projectId: "dpflooringestimator",
  storageBucket: "dpflooringestimator.appspot.com",
  messagingSenderId: "258267052704",
  appId: "1:258267052704:web:e40b8d177676cb085ca7c5",
  measurementId: "G-W6GPPHFZ06"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    AdminComponent
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
