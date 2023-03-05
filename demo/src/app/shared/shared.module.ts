import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { SharedRoutingModule } from './shared-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class SharedModule { }
