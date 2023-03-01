import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Course } from 'src/app/models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit, OnDestroy {

  @Input() coursesList: Course[] = [];

  coursesList$!: Observable<Course[]>;
  suscripcion!: Subscription;

   constructor(
     public coursesService: CourseService,
     private router: Router
     ) {
   }

   ngOnInit() {
     this.coursesList$ = this.coursesService.getCoursesObservable();
   }

   removeCourse(course: Course): void {
     this.coursesService.removeStudent(course);
   }

   editCourseRedirect(course: Course){
     this.router.navigate(['courses/edit', course])
   }

   ngOnDestroy() {

   }


}
