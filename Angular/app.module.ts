import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UStoreComponent } from './ustore/ustore.component';
import { LoginComponent } from './login/login.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SignupComponent } from './signup/signup.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { FormBuilder, FormGroup } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UStoreComponent,
    LoginComponent,
    StudentHomeComponent,
    WelcomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    ListViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);