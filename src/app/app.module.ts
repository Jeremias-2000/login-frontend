import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes : Routes = [
  {path:'',component:LoginComponent}
] ;


@NgModule({
  declarations: [

    AppComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
