import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KamusTambahPage } from './kamus-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: KamusTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KamusTambahPageRoutingModule {}
