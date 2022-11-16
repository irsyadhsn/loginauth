import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./kamus-user/kamus-user.module').then(
        (m) => m.KamusUserPageModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'kamus-user',
    loadChildren: () =>
      import('./kamus-user/kamus-user.module').then(
        (m) => m.KamusUserPageModule
      ),
  },
  {
    path: 'kamus-tambah',
    loadChildren: () => import('./kamus-tambah/kamus-tambah.module').then( m => m.KamusTambahPageModule)
  },
  {
    path: 'kamus-edit',
    loadChildren: () => import('./kamus-edit/kamus-edit.module').then( m => m.KamusEditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
