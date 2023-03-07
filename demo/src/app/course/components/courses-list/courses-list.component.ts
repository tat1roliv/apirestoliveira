import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { SessionService } from 'src/app/core/services/session.service';
import { Course } from 'src/app/models/course';
import { Session } from 'src/app/models/session';
import { CourseService } from '../../services/course.service';
import { CoursesEditComponent } from '../courses-edit/courses-edit.component';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit, OnDestroy {

  @Input() coursesList: Course[] = [];

  coursesList$!: Observable<Course[]>;
  suscripcion!: Subscription;
  session$!: Observable<Session>

   constructor(
     public coursesService: CourseService,
     private router: Router,
     private session: SessionService,
     public dialog: MatDialog,
     ) {
   }

   ngOnInit() {
     this.coursesList$ = this.coursesService.getCoursesObservable();
     this.session$ = this.session.getSession();
     /*
     this.session.getSession().subscribe((session: Session) => {
      console.log('sessao course', session);
      if(!session.sessionActive){
        this.router.navigate(['/auth/login']);
      }
      })
    */

   }

   removeCourse(course: Course): void {
     this.coursesService.removeCourse(course).subscribe((course: Course) => {
      alert(`course ${course.courseName}  deleted` );
      this.coursesList$ = this.coursesService.getCoursesObservable();
     })
   }

  //updated to dialog
   editCourseRedirect(course: Course){
     this.router.navigate(['courses/edit', course])
   }

   openModalDialog(course: Course){
    this.dialog.open(CoursesEditComponent, {
      data: course
    }).afterClosed().subscribe((course: Course) => {
      alert(`course ${course.courseName} edited`)
      this.coursesList$ = this.coursesService.getCoursesObservable();
    })
  }

   ngOnDestroy() {

   }


}
