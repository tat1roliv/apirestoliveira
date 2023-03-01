import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesAddComponent } from './components/courses-add/courses-add.component';
import { CoursesEditComponent } from './components/courses-edit/courses-edit.component';
import { MaterialModule } from '../material.module';
import { CourseRoutingModule } from './course-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CourseService } from './services/course.service';



@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesAddComponent,
    CoursesEditComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    CourseRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    CourseService
  ]
})
export class CourseModule { }
