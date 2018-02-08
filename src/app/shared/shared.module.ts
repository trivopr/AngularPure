import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ModalComponent
} from './components/index';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent
  ],
  declarations: [ModalComponent]
})
export class SharedModule { }
