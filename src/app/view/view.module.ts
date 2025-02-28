import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewPageRoutingModule } from './view-routing.module';
import { ViewPage } from './view.page';

@NgModule({
  declarations: [ViewPage],
  imports: [CommonModule, FormsModule, IonicModule, ViewPageRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ViewPageModule {}
