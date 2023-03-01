import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesAddComponent } from './components/courses-add/courses-add.component';
import { CoursesEditComponent } from './components/courses-edit/courses-edit.component';



@NgModule({
  declarations: [
    CoursesListComponent,
    CoursesAddComponent,
    CoursesEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CourseModule { }
