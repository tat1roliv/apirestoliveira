import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsListComponent } from './components/lessons-list/lessons-list.component';
import { LessonsAddComponent } from './components/lessons-add/lessons-add.component';
import { LessonsEditComponent } from './components/lessons-edit/lessons-edit.component';



@NgModule({
  declarations: [
    LessonsListComponent,
    LessonsAddComponent,
    LessonsEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LessonModule { }
