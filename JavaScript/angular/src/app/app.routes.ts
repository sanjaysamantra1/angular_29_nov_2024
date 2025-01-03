import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; // Ensure correct path
import { SignupComponent } from './components/signup/signup.component'; // Ensure correct path

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Default route to Login
//   { path: 'login', component: LoginComponent }, // Login route
//   { path: 'signup', component: SignupComponent }, // Signup route
//   { path: '**', redirectTo: 'log in' }, // Wildcard route to handle invalid paths
];
