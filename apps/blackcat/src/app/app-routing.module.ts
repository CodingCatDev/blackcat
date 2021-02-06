import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./post/post.module').then((m) => m.PostModule),
      },
      {
        path: '**',
        loadChildren: () =>
          import('./not-found/not-found.module').then((m) => m.NotFoundModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes
// { enableTracing: true }
, {
    initialNavigation: 'enabled'
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
