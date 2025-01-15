import { Routes } from '@angular/router';
import { ListComponent } from '@app/domains/products/pages/list/list.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
    ],
  },
  //404
  {
    path: '**',
    component: NotFoundComponent,
  },
];
