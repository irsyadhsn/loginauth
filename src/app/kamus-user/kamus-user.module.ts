import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KamusUserPageRoutingModule } from './kamus-user-routing.module';

import { KamusUserPage } from './kamus-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KamusUserPageRoutingModule
  ],
  declarations: [KamusUserPage]
})
export class KamusUserPageModule {}
