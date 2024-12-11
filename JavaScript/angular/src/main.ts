import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig) // to start our applcn using app comp and using app config(config file of applctn level)
  .catch((err) => console.error(err));
