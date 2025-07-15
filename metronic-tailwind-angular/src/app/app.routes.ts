import { Routes } from '@angular/router';
import { Demo1Component } from './layouts/demo1/demo1.component';
import { IndexComponent as Demo1IndexComponent } from './pages/demo1/index/index.component';
import { Demo2Component } from './layouts/demo2/demo2.component';
import { IndexComponent as Demo2IndexComponent } from './pages/demo2/index/index.component';
import { Demo3Component } from './layouts/demo3/demo3.component';
import { IndexComponent as Demo3IndexComponent } from './pages/demo3/index/index.component';
import { Demo4Component } from './layouts/demo4/demo4.component';
import { IndexComponent as Demo4IndexComponent } from './pages/demo4/index/index.component';
import { Demo5Component } from './layouts/demo5/demo5.component';
import { IndexComponent as Demo5IndexComponent } from './pages/demo5/index/index.component';
import { Demo6Component } from './layouts/demo6/demo6.component';
import { IndexComponent as Demo6IndexComponent } from './pages/demo6/index/index.component';
import { Demo7Component } from './layouts/demo7/demo7.component';
import { IndexComponent as Demo7IndexComponent } from './pages/demo7/index/index.component';
import { Demo8Component } from './layouts/demo8/demo8.component';
import { IndexComponent as Demo8IndexComponent } from './pages/demo8/index/index.component';
import { Demo9Component } from './layouts/demo9/demo9.component';
import { IndexComponent as Demo9IndexComponent } from './pages/demo9/index/index.component';
import { Demo10Component } from './layouts/demo10/demo10.component';
import { IndexComponent as Demo10IndexComponent } from './pages/demo10/index/index.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'demo1' },
  {
    path: 'demo1',
    component: Demo1Component,
    children: [
      { path: '', component: Demo1IndexComponent },
    ],
  },
  {
    path: 'demo2',
    component: Demo2Component,
    children: [
      { path: '', component: Demo2IndexComponent },
    ],
  },
  {
    path: 'demo3',
    component: Demo3Component,
    children: [
      { path: '', component: Demo3IndexComponent },
    ],
  },
  {
    path: 'demo4',
    component: Demo4Component,
    children: [
      { path: '', component: Demo4IndexComponent },
    ],
  },
  {
    path: 'demo5',
    component: Demo5Component,
    children: [
      { path: '', component: Demo5IndexComponent },
    ],
  },
  {
    path: 'demo6',
    component: Demo6Component,
    children: [
      { path: '', component: Demo6IndexComponent },
    ],
  },
  {
    path: 'demo7',
    component: Demo7Component,
    children: [
      { path: '', component: Demo7IndexComponent },
    ],
  },
  {
    path: 'demo8',
    component: Demo8Component,
    children: [
      { path: '', component: Demo8IndexComponent },
    ],
  },
  {
    path: 'demo9',
    component: Demo9Component,
    children: [
      { path: '', component: Demo9IndexComponent },
    ],
  },
  {
    path: 'demo10',
    component: Demo10Component,
    children: [
      { path: '', component: Demo10IndexComponent },
    ],
  },
];
