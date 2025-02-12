import { Routes } from '@angular/router';
import { ItemsComponent } from './item/items.component';


export const routes: Routes = [
  { path: '', redirectTo: '/flexbox-layout', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent },
  {
    path:'stack-layout',
    loadComponent: () => import('./layoutContainers/stackLayout/stackLayout.component').then(m=>m.StackLayoutComponent)
  },
  {
    path:'grid-layout',
    loadComponent: () => import('./layoutContainers/gridLayout/gridLayout.component').then(m=>m.GridLayoutComponent)
  },
  {
    path: 'flexbox-layout',
    loadComponent: ()=> import('./layoutContainers/flexboxLayout/flexboxLayout.component').then( m=> m.FlexboxLayoutComponent)
  }
];
