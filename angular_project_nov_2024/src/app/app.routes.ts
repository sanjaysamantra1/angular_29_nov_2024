import { Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { FulltimeJobsComponent } from './components/fulltime-jobs/fulltime-jobs.component';
import { ContractJobsComponent } from './components/contract-jobs/contract-jobs.component';
import { teacherGuard } from './guards/teacher.guard';
import { haschangesGuard } from './guards/haschanges.guard';
import { productDetailsResolver } from './resolvers/product-details.resolver';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    {
        path: 'careers',
        component: CareersComponent,
        children: [
            { path: 'fulltime', component: FulltimeJobsComponent },
            { path: 'contract', component: ContractJobsComponent }
        ]
    },
    {
        path: 'contactus',
        component: ContactusComponent,
        canDeactivate: [haschangesGuard]
    },
    { 
        path: 'users',
        loadComponent: () => 
            import('./components/users/users.component').then((x) => x.UsersComponent)
    },
    { path: 'userdetails/:id', component: UserDetailsComponent },
    {
        path: 'products',
        component: ProductsComponent,
        canActivate: [teacherGuard]
    },
    {
        path: 'productdetails',
        component: ProductDetailsComponent,
        resolve: { product: productDetailsResolver }
    },
    { path: '', component: HomeComponent },
    { path: '**', component: NotfoundComponent },
];
