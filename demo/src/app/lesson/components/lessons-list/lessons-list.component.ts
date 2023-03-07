import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SessionService } from 'src/app/core/services/session.service';
import { Lesson } from 'src/app/models/lesson';
import { Session } from 'src/app/models/session';
import { LessonService } from '../../services/lesson.service';
import { LessonsEditComponent } from '../lessons-edit/lessons-edit.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, OnDestroy {

  @Input() lessonsList: Lesson[] = [];

  lessonsList$!: Observable<Lesson[]>;
  suscripcion!: Subscription;
  session$!: Observable<Session>

   constructor(
     public lessonsService: LessonService,
     private router: Router,
     private session: SessionService,
     public dialog: MatDialog,
     ) {
   }

   ngOnInit() {
     this.lessonsList$ = this.lessonsService.getLessonsObservable();
     this.session$ = this.session.getSession()

   }

   removeLesson(lesson: Lesson): void {
     this.lessonsService.removeLesson(lesson).subscribe((lesson: Lesson) => {
      alert(`lesson ${lesson.title}  deleted` );
      this.lessonsList$ = this.lessonsService.getLessonsObservable();
     })
   }

  //updated to dialog
   editLessonRedirect(lesson: Lesson){
     this.router.navigate(['lessons/edit', lesson])
   }

   openModalDialog(lesson: Lesson){
    this.dialog.open(LessonsEditComponent, {
      data: lesson
    }).afterClosed().subscribe((lesson: Lesson) => {
      alert(`lesson ${lesson.title} edited`)
      this.lessonsList$ = this.lessonsService.getLessonsObservable();
    })
  }

   ngOnDestroy() {


   }

}
