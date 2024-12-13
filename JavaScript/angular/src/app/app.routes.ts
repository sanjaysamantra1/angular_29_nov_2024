import { Routes } from '@angular/router';
import { LoginComponent } from './compoents/login/login.component';
import { SignupComponent } from './compoents/signup/signup.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    // {path: '', component: AppComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'signup', component: SignupComponent},
];
