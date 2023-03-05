import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SessionService } from 'src/app/core/services/session.service';
import { Lesson } from 'src/app/models/lesson';
import { Session } from 'src/app/models/session';
import { LessonService } from '../../services/lesson.service';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, OnDestroy {

  @Input() lessonsList: Lesson[] = [];

  lessonsList$!: Observable<Lesson[]>;
  suscripcion!: Subscription;

   constructor(
     public lessonsService: LessonService,
     private router: Router,
     private session: SessionService,

     ) {
   }

   ngOnInit() {
     this.lessonsList$ = this.lessonsService.getLessonsObservable();
     this.session.getSession().subscribe((session: Session) => {
      console.log('sessao lesson', session);
      if(!session.sessionActive){
        this.router.navigate(['/auth/login']);
      }
    })
   }

   removeLesson(lesson: Lesson): void {
     this.lessonsService.removeStudent(lesson);
   }

   editLessonRedirect(lesson: Lesson){
     this.router.navigate(['lessons/edit', lesson])
   }

   ngOnDestroy() {


   }

}
