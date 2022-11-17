import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KamusUserPage } from './kamus-user.page';

const routes: Routes = [
  {
    path: '',
    component: KamusUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KamusUserPageRoutingModule {}
