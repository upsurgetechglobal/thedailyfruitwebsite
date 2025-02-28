import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'subscription',
        // canActivate: [AuthGuard],
        loadComponent: () =>
          import('../subscription/subscription.page').then(
            (m) => m.SubscriptionPage
          ),
      },
      {
        path: 'cart',
        loadComponent: () => import('../cart/cart.page').then((m) => m.CartPage),
      },
      {
        path: 'account',
        // canActivate: [AuthGuard],
        loadComponent: () =>
          import('../account/account.page').then((m) => m.AccountPage),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
    
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
