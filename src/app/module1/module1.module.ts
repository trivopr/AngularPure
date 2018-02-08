import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListDataComponent } from './containers/page-list-data/page-list-data.component';

import {
  FormDataComponent,
  ListItemsComponent,
  SingleItemComponent,
  TestUseModalComponent
} from './components/index';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    PageListDataComponent,
    FormDataComponent,
    ListItemsComponent,
    SingleItemComponent,
    TestUseModalComponent
  ]
})
export class Number1Module { }
