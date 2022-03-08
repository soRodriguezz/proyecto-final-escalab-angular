import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'champions',
    loadChildren: () =>
      import('./components/champions/champions.module').then(
        (m) => m.ChampionsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'items',
    loadChildren: () =>
      import('./components/items/items.module').then((m) => m.ItemsModule),
      canActivate: [AuthGuard],
  },
  {
    path: 'skins',
    loadChildren: () =>
      import('./components/skins/skins.module').then((m) => m.SkinsModule),
      canActivate: [AuthGuard],
  },

  { path: '**', pathMatch: 'full', redirectTo: '/skins' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
