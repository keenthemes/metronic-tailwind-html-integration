import { Routes } from '@angular/router';
import { Demo1Component } from './layouts/demo1/demo1.component';
import { IndexComponent } from './pages/demo1/index/index.component';

export const routes: Routes = [
  {
    path: 'demo1',
    component: Demo1Component,
    children: [
      { path: '', component: IndexComponent },
    ],
  },
  // { path: 'demo2', component: Demo2LayoutComponent }, // Demo2 not implemented yet
];
