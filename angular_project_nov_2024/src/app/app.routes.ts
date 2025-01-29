import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'users', component: UserListComponent },
    { path: '', component: HomeComponent }, 
    { path: '**', component: NotfoundComponent }
];
