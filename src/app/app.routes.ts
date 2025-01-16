import { Routes } from '@angular/router';
//import { ListComponent } from '@app/domains/products/pages/list/list.component';
//import { AboutComponent } from './domains/info/pages/about/about.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';
//import { ProductDetailComponent } from './domains/products/pages/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        // '' y 'about' hacen lo mismo en loadComponent, se diferencia en que about tiene export default en el compoennte
        path: '',
        //component: ListComponent,
        loadComponent: () => import('./domains/products/pages/list/list.component').then((m) => m.ListComponent),
      },
      {
        path: 'about',
        //component: AboutComponent,
        loadComponent: () => import('./domains/info/pages/about/about.component'),
      },
      {
       path: 'products/:id',
        //component: ProductDetailComponent,
        loadComponent: () => import('./domains/products/pages/product-detail/product-detail.component'),
      }
    ],
  },
  //404
  {
    path: '**',
    component: NotFoundComponent,
  },
];
