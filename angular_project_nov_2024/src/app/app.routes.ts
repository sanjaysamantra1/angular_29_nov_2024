import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PermanentJobsComponent } from './components/permanent-jobs/permanent-jobs.component';
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
            { path: 'permanent', component: PermanentJobsComponent },
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
            import('./components/user-list/user-list.component').then((x) => x.UserListComponent) 
    },
    { path: 'userdetails/:id', component: UserDetailsComponent },
    {
        path: 'products',
        component: ProductListComponent,
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
