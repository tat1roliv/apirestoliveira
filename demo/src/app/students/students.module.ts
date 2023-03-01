import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsAddComponent } from './components/students-add/students-add.component';
import { StudentsTempComponent } from './components/students-temp/students-temp.component';
import { StudentsEditarComponent } from './components/students-editar/students-editar.component';
import { MaterialModule } from '../material.module';
import { StudentsService } from '../students/services/students.service';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    StudentsAddComponent,
    StudentsTempComponent,
    StudentsEditarComponent,
  ],
  imports: [
    CommonModule,
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
