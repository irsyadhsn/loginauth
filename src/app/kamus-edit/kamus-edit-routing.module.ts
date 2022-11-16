import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KamusEditPage } from './kamus-edit.page';

const routes: Routes = [
  {
    path: '',
    component: KamusEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KamusEditPageRoutingModule {}
