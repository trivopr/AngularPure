import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SigninComponent,
  SignupComponent
} from './components/index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SigninComponent, SignupComponent]
})
export class AuthModule { }
