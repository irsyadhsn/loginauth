import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KamusEditPageRoutingModule } from './kamus-edit-routing.module';

import { KamusEditPage } from './kamus-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KamusEditPageRoutingModule
  ],
  declarations: [KamusEditPage]
})
export class KamusEditPageModule {}
