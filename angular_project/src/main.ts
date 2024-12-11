import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { NavigationbarComponent } from './app/components/navigationbar/navigationbar.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
