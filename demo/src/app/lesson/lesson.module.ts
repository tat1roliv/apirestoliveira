import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonService } from './services/lesson.service';

import { LessonRoutingModule } from '../lesson/lesson-routing.module';
import { LessonsListComponent } from './components/lessons-list/lessons-list.component';
import { LessonsAddComponent } from './components/lessons-add/lessons-add.component';
import { LessonsEditComponent } from './components/lessons-edit/lessons-edit.component';

import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    LessonsListComponent,
    LessonsAddComponent,
    LessonsEditComponent
  ],
  imports: [
    CommonModule,
    LessonRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    LessonRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    LessonService
  ]
})
export class LessonModule { }
