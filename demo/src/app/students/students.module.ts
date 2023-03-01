import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsService } from '../students/services/students.service';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsAddComponent } from './components/students-add/students-add.component';
import { StudentsTempComponent } from './components/students-temp/students-temp.component';
import { StudentsEditarComponent } from './components/students-editar/students-editar.component';


import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { StudentNamePipe } from '../pipes/student-name.pipe';


@NgModule({
  declarations: [
    StudentsAddComponent,
    StudentsTempComponent,
    StudentsEditarComponent,
    StudentNamePipe,
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    StudentsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    StudentsService
  ]
})
export class StudentsModule { }
