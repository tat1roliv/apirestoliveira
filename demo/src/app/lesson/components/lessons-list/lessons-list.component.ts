import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Lesson } from 'src/app/models/lesson';
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
     private router: Router
     ) {
   }

   ngOnInit() {
     this.lessonsList$ = this.lessonsService.getLessonsObservable();
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
