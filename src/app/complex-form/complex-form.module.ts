import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplexFormComponent } from './components/complex-form/complex-form.component';
import { SharedModule } from '../shared/shared.module';
import { ComplexFormRoutingModule } from './complex-form-routing.module';



@NgModule({
  declarations: [
    ComplexFormComponent
  ],
  imports: [
    CommonModule,
    ComplexFormRoutingModule,
    SharedModule
  ]
})
export class ComplexFormModule { }
