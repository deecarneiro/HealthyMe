import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessionalListPageRoutingModule } from './professional-list-routing.module';

import { ProfessionalListPage } from './professional-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessionalListPageRoutingModule
  ],
  declarations: [ProfessionalListPage]
})
export class ProfessionalListPageModule {}
