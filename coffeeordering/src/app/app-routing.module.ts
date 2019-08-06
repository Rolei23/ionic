import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'page', loadChildren: './page/page.module#PagePageModule' },
  { path: 'orders', loadChildren: './page/orders/orders.module#OrdersPageModule' },
  { path: 'coffees', loadChildren: './page/coffees/coffees.module#CoffeesPageModule' },
  { path: 'americano', loadChildren: './page/americano/americano.module#AmericanoPageModule' },
  { path: 'macchiato', loadChildren: './page/macchiato/macchiato.module#MacchiatoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
