import { Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'users', component: UsersComponent },
    { path: 'userdetails/:id', component: UserDetailsComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'productdetails', component: ProductDetailsComponent },
    { path: '', component: HomeComponent }, 
    { path: '**', component: NotfoundComponent },
];
