import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent,
  HomeComponent
} from './components/index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, HomeComponent]
})
export class CoreModule { }
