import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsListComponent } from './components/lessons-list/lessons-list.component';
import { LessonsAddComponent } from './components/lessons-add/lessons-add.component';
import { LessonsEditComponent } from './components/lessons-edit/lessons-edit.component';
import { MaterialModule } from '../material.module';
import { LessonRoutingModule } from '../lesson/lesson-routing.module';



@NgModule({
  declarations: [
    LessonsListComponent,
    LessonsAddComponent,
    LessonsEditComponent
  ],
  imports: [
    CommonModule,
    LessonRoutingModule,
    MaterialModule
  ],
  exports: [
    LessonRoutingModule,
    MaterialModule
  ]
})
export class LessonModule { }
