import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddressSearchComponentComponent } from './address-search-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    AddressSearchComponentComponent
  ],
  exports: [
    AddressSearchComponentComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AddressSearchComponentComponentModule {}
