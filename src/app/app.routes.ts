import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
];
