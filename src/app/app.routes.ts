import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ContentcontainerComponent } from './contentcontainer/contentcontainer.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'form',
    component: UserFormComponent,
  },
  {
    path: 'content',
    component: ContentcontainerComponent,
  },
];
