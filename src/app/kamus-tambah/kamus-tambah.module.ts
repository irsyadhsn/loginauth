import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KamusTambahPageRoutingModule } from './kamus-tambah-routing.module';

import { KamusTambahPage } from './kamus-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KamusTambahPageRoutingModule
  ],
  declarations: [KamusTambahPage]
})
export class KamusTambahPageModule {}
