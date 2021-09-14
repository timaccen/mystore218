import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  IconModule,
  OutletRefModule,
  ProductListModule,
} from '@spartacus/storefront';
import { OutletComponent } from './outlet.component';

@NgModule({
  imports: [CommonModule, OutletRefModule, ProductListModule, IconModule],
  declarations: [OutletComponent],
  exports: [OutletComponent],
})
export class BootcampOutletModule {}